"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// 1. Import the MoreHorizontal icon
import { Bell, Home, Calendar, User, MoreHorizontal } from "lucide-react"; 
import { useEra } from "@/context/EraContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentEraIndex } = useEra();

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [alertCount] = useState(2); 

  const borderColors = [
    "border-amber-500/60 shadow-amber-900/20",
    "border-orange-500/60 shadow-orange-900/20",
    "border-cyan-400/60 shadow-cyan-900/20",
    "border-emerald-400/60 shadow-emerald-900/20",
  ];

  const textColors = [
    "text-amber-400",
    "text-orange-400",
    "text-cyan-400",
    "text-emerald-400"
  ];

  const currentBorderStyle = borderColors[currentEraIndex] || borderColors[0];
  const currentTextColor = textColors[currentEraIndex] || textColors[0];

  const mobileIconPillStyle = `h-14 w-14 bg-white/10 backdrop-blur-xl border ${currentBorderStyle} shadow-lg rounded-full flex items-center justify-center transition-all duration-1000 active:scale-95`;

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: null },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "Sponsors", href: "/sponsors", icon: null },
    { name: "Teams", href: "/teams", icon: null },
    { name: "Gallery", href: "/gallery", icon: null },
    { name: "IAM", href: "/IAM", icon: User },
    { name: "Alerts", href: "/feed", icon: Bell },
  ];

  // 2. Define visible tabs vs hidden menu links
  const visibleTabNames = ["Home", "Events", "Alerts", "IAM"];

  const mobileBottomTabs = navLinks.filter((link) =>
    visibleTabNames.includes(link.name)
  );

  const mobileMoreLinks = navLinks.filter((link) =>
    !visibleTabNames.includes(link.name)
  );

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav
        className={`
          h-15 bg-white/5 backdrop-blur-xl border ${currentBorderStyle}
          shadow-2xl fixed top-4 left-4 right-4 md:left-16 md:right-16 z-50
          rounded-full hidden md:flex items-center justify-between px-6
          transition-all duration-1000 hover:bg-white/10 font-roboto
        `}
      >
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="relative h-14 w-14 ml-8">
            <Image
              src="/impetusLogo.png"
              alt="Impetus Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <div className="flex gap-9 text-white text-[17px] items-center mr-8 font-display">
          {navLinks.map((link) => {
            if (link.name === "Alerts") {
              return (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className="relative hover:text-cyan-400 transition-colors flex items-center"
                  >
                    ALERTS
                    {alertCount > 0 && (
                      <span className="absolute -top-2 -right-3 bg-amber-400 text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-md">
                        {alertCount}
                      </span>
                    )}
                  </Link>
                  {/* Tooltip */}
                  {alertCount > 0 && (
                    <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-8 bg-black/90 text-white text-[12px] px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                      Registrations closing soon
                    </span>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:text-cyan-400 transition-colors ${
                  link.name === "IAM" ? "font-bold text-cyan-300" : ""
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* ================= MOBILE ================= */}

      <Link
        href="/"
        onClick={closeMenu}
        className={`${mobileIconPillStyle} fixed top-4 left-4 z-50 md:hidden`}
      >
        <Image src="/impetusLogo.png" alt="Logo" width={32} height={32} priority />
      </Link>

      {/* 4. Small Bottom-Right Menu Container */}
      {isMenuOpen && (
        <div
          className={`
            md:hidden fixed bottom-24 right-4 z-50
            w-40 py-4 bg-black/90 backdrop-blur-xl border border-white/10
            shadow-2xl rounded-2xl flex flex-col items-center gap-4
            animate-in slide-in-from-bottom-5 fade-in duration-200
          `}
        >
          {mobileMoreLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className={`text-white text-lg font-medium tracking-wide hover:${currentTextColor}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      <div
        className={`
          md:hidden fixed bottom-6 left-4 right-4 z-50 h-16
          bg-black/80 backdrop-blur-xl border ${currentBorderStyle}
          shadow-2xl rounded-2xl flex items-center justify-between px-4
        `}
      >
        {/* Render visible tabs */}
        {mobileBottomTabs.map((link) => {
          const IconComponent = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className={`flex flex-col items-center justify-center w-full h-full gap-1 ${
                link.name === "IAM" ? "text-cyan-300" : "text-white/80"
              }`}
            >
              <div className="relative">
                {IconComponent && <IconComponent className="w-5 h-5" />}
                
                {link.name === "Alerts" && alertCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-black text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                    {alertCount}
                  </span>
                )}
              </div>
              <span className="text-[9px] uppercase tracking-wider font-semibold">
                {link.name}
              </span>
            </Link>
          );
        })}

        {/* 3. Render "More" Toggle Button */}
        <button
          onClick={toggleMenu}
          className={`flex flex-col items-center justify-center w-full h-full gap-1 ${
             isMenuOpen ? currentTextColor : "text-white/80"
          }`}
        >
          <MoreHorizontal className="w-6 h-6" />
          <span className="text-[9px] uppercase tracking-wider font-semibold">
            More
          </span>
        </button>
      </div>
    </>
  );
}