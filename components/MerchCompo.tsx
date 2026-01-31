import React, { useState, useEffect } from "react";
import { Palette, Trophy, Clock, ArrowRight } from "lucide-react";

export default function MerchandiseComponent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const submissionLink = "https://docs.google.com/forms/d/e/1FAIpQLSclp9wY_1tjN7TOh53iOirLdWiNdprXJ5M5QKOgcml1JBY9_w/viewform?usp=publish-editor";

  // Shared Wrapper Styles
  const containerStyles = `
    relative group overflow-hidden
    max-w-6xl mx-auto my-6
    bg-gradient-to-br from-zinc-900 to-black
    border border-white/10 shadow-2xl
    rounded-3xl transition-all duration-500
    hover:border-zinc-500/40
  `;

  if (isMobile) {
    return (
      <div className="px-4 py-4">
        <div className="p-6 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl relative overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <Palette className="text-zinc-400" size={20} />
            <h2 className="text-lg font-nunito text-white uppercase tracking-tight">T-Shirt Design</h2>
          </div>
          
          <p className="text-xs text-zinc-400 mb-6">Originality and creativity are all that matters. Winner receives official merchandise.</p>
          
          <div className="flex flex-col gap-4">
            <div className="space-y-1">
              <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Deadline</span>
              <div className="flex items-center gap-2 text-zinc-200 font-mono text-sm">
                <Clock size={14} />
                <span>03 FEB | 11:59 PM</span>
              </div>
            </div>
            
            <a href={submissionLink} target="_blank" className="flex items-center justify-center gap-2 py-3 bg-zinc-100 text-black text-xs font-black uppercase rounded-xl">
              Submit Design <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="px-4 py-6">
      <div className={containerStyles}>
        <div className="relative z-10 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-zinc-800/50 rounded-2xl border border-zinc-700">
              <Palette className="text-white" size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-nunito text-white uppercase tracking-tighter">T-Shirt Design Competition</h2>
              <div className="flex items-center gap-4 mt-1 text-zinc-400 text-sm">
                <span className="flex items-center gap-1"><Trophy size={14} className="text-zinc-500" /> Win Official Merch</span>
                <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                <span>Open for all IIEST Students</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="text-right">
              <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-[0.2em]">Deadline</p>
              <p className="text-white font-mono font-bold">03 FEB • 23:59</p>
            </div>
            <a href={submissionLink} target="_blank" className="px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-all flex items-center gap-2">
              Submit <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}