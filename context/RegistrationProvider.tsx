"use client";
import { useState, useEffect } from "react";
import { jsPDF } from 'jspdf';
import { RegistrationContext } from "./RegistrationContext";
import FingerprintJS from '@fingerprintjs/fingerprintjs';

const mobileRegex = /^[6-9]\d{9}$/;
const rollRegex = /^[0-9]{4}[A-Z]{3}[0-9]{3}$/; // Adjust based on your college format

export const RegistrationProvider = ({ children, event, onClose }: any) => {
  // --- STATE ---
  const [step, setStep] = useState(0);
  const [isInternal, setIsInternal] = useState(true); // Default
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [receiptId, setReceiptId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [deviceFingerprint, setDeviceFingerprint] = useState("");
  
  // Form Data
  const [teamName, setTeamName] = useState("");
  const [captain, setCaptain] = useState({ name: "", phone: "", roll: "" });
  
  // --- CONFIG ---
  // Captain counts as 1, so remaining members = max - 1
  const maxMembers = event.teamSize.max - 1; 
  const minMembers = Math.max(0, event.teamSize.min - 1);
  
  const amount = event.ExtFee || 0;

  const [members, setMembers] = useState(
    Array.from({ length: maxMembers }).map(() => ({ name: "", phone: "", roll: "" }))
  );

  const [paymentFile, setPaymentFile] = useState<File | null>(null);

  // Payment Logic: Only if External AND Fee > 0
  const needsPayment = !isInternal && amount > 0;

  // *** UPDATED: Total Steps Calculation ***
  // 1 (Identity) + 1 (Captain) + maxMembers + (Payment ? 1 : 0)
  const totalSteps = 2 + maxMembers + (needsPayment ? 1 : 0);

  useEffect(() => {
    const setFp = async () => {
      try {
        const fp = await FingerprintJS.load();
        const { visitorId } = await fp.get();
        setDeviceFingerprint(visitorId);
      } catch (e) {
        console.error("Fingerprint failed", e);
      }
    };
    setFp();
  }, []);

  // --- ACTIONS ---
  const updateCaptain = (field: string, val: string) => {
    setCaptain(prev => ({ ...prev, [field]: field === 'roll' ? val.toUpperCase() : val }));
  };

  const updateMember = (index: number, field: string, value: string) => {
    const newMembers = [...members];
    // @ts-ignore
    newMembers[index][field] = field === 'roll' ? value.toUpperCase() : value;
    setMembers(newMembers);
  };

  const toggleInternal = () => {
    // When toggling, we DO NOT reset to step 0 automatically here
    // because the user might just be correcting a mistake.
    // However, the Identity UI calls handleNext() immediately after toggling.
    setIsInternal(!isInternal);
  };

  // --- VALIDATION (THE FIX IS HERE) ---
  const validateStep = (currentStep: number) => {
    setErrorMsg("");
    
    // *** STEP 0: Identity ***
    // No validation needed for buttons (User clicks Yes/No)
    if (currentStep === 0) return null;

    // *** STEP 1: Captain & Team Name (Previously Step 0) ***
    if (currentStep === 1) {
      if (!teamName.trim()) return "Team Name is required.";
      if (!captain.name.trim()) return "Captain Name is required.";
      if (!mobileRegex.test(captain.phone)) return "Invalid Captain Phone (Indian 10-digit).";
      if (isInternal && !rollRegex.test(captain.roll)) return "Invalid Captain Roll Number.";
      return null;
    }

    // *** Payment Validation ***
    // Check if this is the last step AND payment is required
    const isPaymentStep = needsPayment && currentStep === (totalSteps - 1);
    if (isPaymentStep) {
        if (!paymentFile) return "Please upload the payment screenshot.";
        return null;
    }

    // *** Member Validation (Middle steps) ***
    // Range: Starts at Step 2 (Member 0) up to Step (maxMembers + 1)
    if (currentStep > 1 && currentStep <= maxMembers + 1) {
        // *** SHIFT INDEX: Step 2 is Index 0 ***
        const memberIndex = currentStep - 2;
        
        const member = members[memberIndex];
        const isMandatory = memberIndex < minMembers;

        if (isMandatory) {
            if (!member.name.trim()) return `Member ${memberIndex + 1} Name is required.`;
            if (!mobileRegex.test(member.phone)) return `Invalid Member ${memberIndex + 1} Phone.`;
            if (isInternal && !rollRegex.test(member.roll)) return `Invalid Member ${memberIndex + 1} Roll.`;
        } 
        else if (member.name || member.phone || member.roll) {
            // Partial fill check for optional members
            if (!member.name.trim()) return "Name is required if adding a member.";
            if (!mobileRegex.test(member.phone)) return "Invalid Phone Number.";
            if (isInternal && !rollRegex.test(member.roll)) return "Invalid Roll Number.";
        }
    }

    return null;
  };

  const handleNext = () => {
    const error = validateStep(step);
    if (error) { setErrorMsg(error); return; }
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => { 
    setErrorMsg("");
    setStep((prev) => prev - 1);
  };

  // --- API SUBMISSION ---
  const handleSubmit = async () => {
    const error = validateStep(step);
    if (error) { setErrorMsg(error); return; }

    setIsLoading(true);
    setErrorMsg("");

    const validMembers = members
      .filter((m) => m.name.trim() !== "")
      .map((m) => ({
        memName: m.name.trim(),
        memPhone: m.phone.trim(),
        ...(isInternal && { memRoll: m.roll.trim() }),
      }));

    const basePayload = {
      eventName: event.backendValue,
      teamName: teamName.trim(),
      capName: captain.name.trim(),
      capPhone: captain.phone.trim(),
      ...(isInternal && { capRoll: captain.roll.trim() }),
      participantType: isInternal ? "INTERNAL" : "EXTERNAL",
      teamMembers: validMembers,
      deviceFingerprint: deviceFingerprint,
    };

    try {
      const apiUrl = '/api/register'; // Ensure this matches your Next.js API route
      let response;

      if (isInternal) {
        response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(basePayload),
        });
      } else {
        const formData = new FormData();
        
        formData.append("eventName", basePayload.eventName);
        formData.append("teamName", basePayload.teamName);
        formData.append("capName", basePayload.capName);
        formData.append("capPhone", basePayload.capPhone);
        formData.append("participantType", "EXTERNAL");
        formData.append("deviceFingerprint", basePayload.deviceFingerprint);
        formData.append("teamMembers", JSON.stringify(validMembers));
        
        if (needsPayment && paymentFile) {
            formData.append("paymentScreenshot", paymentFile);
        }

        response = await fetch(apiUrl, {
          method: "POST",
          body: formData,
        });
      }

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || data.message || "Server Error"); 
      }
      
      setReceiptId(data.receiptId || "PENDING");
      setIsSuccess(true);
      
    } catch (err: any) {
      console.error("Registration Error:", err);
      setErrorMsg(err.message || "Something went wrong. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  // --- PDF GENERATION ---
  const downloadReceipt = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    const centerText = (text: string, y: number, size: number = 12) => {
      doc.setFontSize(size);
      const textWidth = doc.getTextWidth(text);
      doc.text(text, (pageWidth - textWidth) / 2, y);
    };

    // Header
    doc.setFillColor(20, 20, 20);
    doc.rect(0, 0, pageWidth, 40, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    centerText("IMPETUS 9.0 REGISTRATION", 18, 20);
    doc.setFont("helvetica", "normal");
    centerText("IIEST Shibpur", 28, 10);

    // Details
    doc.setTextColor(0, 0, 0);
    doc.setFont("courier", "bold");
    doc.setFontSize(14);
    
    let statusText = receiptId;
    if (!isInternal && receiptId === "PENDING") {
        statusText = needsPayment ? "VERIFICATION PENDING" : "CONFIRMED";
    }

    doc.text(`Receipt ID: ${statusText}`, 20, 60);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Event: ${event.title}`, 20, 75);
    doc.text(`Team Name: ${teamName}`, 20, 85);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 95);

    // Captain
    doc.setDrawColor(200, 200, 200);
    doc.line(20, 105, pageWidth - 20, 105);
    doc.setFont("helvetica", "bold");
    doc.text("Captain Details:", 20, 115);
    doc.setFont("helvetica", "normal");
    doc.text(`Name: ${captain.name}`, 30, 125);
    doc.text(`Phone: ${captain.phone}`, 30, 135);
    if (isInternal) {
      doc.text(`Roll No: ${captain.roll}`, 30, 145);
    }

    // Members
    const validMembers = members.filter(m => m.name.trim() !== "");
    if (validMembers.length > 0) {
      doc.line(20, 155, pageWidth - 20, 155);
      doc.setFont("helvetica", "bold");
      doc.text("Team Members:", 20, 165);
      doc.setFont("helvetica", "normal");
      validMembers.forEach((member, index) => {
        const yPos = 175 + (index * 20);
        doc.text(`${index + 1}. ${member.name}`, 30, yPos);
        doc.text(`   Phone: ${member.phone}`, 30, yPos + 6);
        if (isInternal && member.roll) {
           doc.text(`   Roll: ${member.roll}`, 30, yPos + 12);
        }
      });
    }

    doc.save(`${teamName}_Receipt.pdf`);
  };

  return (
    <RegistrationContext.Provider value={{
      step, totalSteps, isInternal, isLoading, isSuccess, receiptId, errorMsg, setErrorMsg,
      teamName, captain, members, event, minMembers,
      paymentFile, setPaymentFile,

      toggleInternal, // Use the new function
      setTeamName, updateCaptain, updateMember,
      handleNext, handlePrev, handleSubmit, downloadReceipt, closeForm: onClose
    }}>
      {children}
    </RegistrationContext.Provider>
  );
};