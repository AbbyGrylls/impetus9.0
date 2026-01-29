import React, { useState, useEffect } from "react";
import { useEra } from "@/context/EraContext";

export default function LifeInALensReg() {
    const { currentEraIndex } = useEra();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 640);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    /* ================= REDESIGNED MOBILE VIEW (BOLD STYLE) ================= */
    if (isMobile) {
        return (
            <div className="px-4 py-8">
                <div className="
                p-5
                bg-gradient-to-br from-zinc-900 to-black
                /* Increased border to 2px */
                border-2 border-amber-500/40 
                rounded-3xl shadow-2xl shadow-black
                max-w-sm mx-auto
                relative overflow-hidden
            ">
                    {/* Subtle background glow */}
                    <div className="absolute -right-8 -top-8 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl" />

                    <div className="flex flex-col items-center mb-6 relative z-10">
                        <a
                            href="https://forms.gle/pR1LvJ51rmznauym7"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Upload your story"
                            className="
            group
            w-full max-w-[220px] h-14
            flex items-center justify-center gap-3
            bg-zinc-800/70 hover:bg-zinc-700/80
            border-2 border-zinc-500/60
            backdrop-blur-md
            rounded-xl
            transition-all duration-300
            hover:scale-[1.03] active:scale-95
            shadow-lg shadow-black/40
        "
                        >
                            {/* Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="
                w-5 h-5
                text-amber-400
                group-hover:-translate-y-0.5
                transition-transform
            "
                            >
                                <path d="M20 17.5A4.5 4.5 0 0 0 18 9a6 6 0 0 0-11.7 1.8A4 4 0 0 0 6 18h14z" />
                                <path d="M12 16V10" />
                                <path d="M9.5 12.5L12 10l2.5 2.5" />
                            </svg>

                            {/* Text */}
                            <span className="text-sm font-extrabold tracking-widest text-amber-400 uppercase">
                                Upload Photo
                            </span>
                        </a>

                        <span className="text-[9px] text-gray-400 mt-2 tracking-wide">
                            Google Form Submission
                        </span>
                    </div>


                    {/* --- THICKER HORIZONTAL DIVIDER --- */}
                    {/* Height increased to h-0.5 (2px) for more impact */}
                    <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent mb-6" />

                    {/* --- ORIGINAL CONTENT GRID --- */}
                    <div className="grid grid-cols-6 items-center">
                        <div className="col-span-3 relative">
                            {/* Vertical accent also thickened slightly */}
                            <div className="absolute -left-1 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-amber-600/30" />
                            <h2 className="
                            text-[11px] font-extrabold text-amber-300 
                            leading-tight uppercase tracking-wider
                            pl-3
                        ">
                                <span className="flex items-center gap-1 mb-0.5">
                                    <span className="text-amber-400">📸</span>
                                    <span>LIFE IN</span>
                                </span>
                                <span className="text-amber-100 text-[13px] block mt-0.5">
                                    A LENS
                                </span>
                            </h2>
                        </div>

                        <div className="col-span-3">
                            <div className="border-l-2 border-amber-400/40 pl-3 py-1">
                                <p className="
                                text-[10px] text-gray-200 
                                leading-snug
                                font-medium
                            ">
                                    Capture moments.<br />
                                    <span className="text-amber-100/80 font-semibold">
                                        Tell your story.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    /* ================= DESKTOP DESIGN ================= */
    return (
        <section className="px-4 py-8">
            <div className="
                relative group overflow-hidden
                max-w-6xl mx-auto
                bg-gradient-to-br from-zinc-900 to-black
                border border-white/10 shadow-2xl
                rounded-3xl transition-all duration-500
                hover:border-amber-400/40 hover:shadow-amber-900/20
            ">
                {/* Decorative Background Glow */}
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full group-hover:bg-amber-500/20 transition-colors" />

                <div className="relative z-10 p-6 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

                        {/* Title & Branding */}
                        <div className="space-y-2 flex-1">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">📸</span>
                                <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase">
                                    Life In A <span className="text-amber-400">Lens</span>
                                </h2>
                            </div>
                            <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
                                Beings Memories / Photography Showcase
                            </p>
                        </div>

                        {/* Description */}
                        <div className="flex-[1.5] border-l-2 border-amber-400/20 pl-6">
                            <p className="text-zinc-300 text-sm md:text-base leading-relaxed italic">
                                "Capture moments. Freeze emotions. Tell your story through a single frame."
                            </p>
                            <p className="mt-2 text-[11px] text-zinc-500 font-medium uppercase tracking-wide">
                                Submissions via Google Form • Featured entries on social media
                            </p>
                        </div>

                        {/* Action Button */}
                        <div className="flex-none">
                            <a
                                href="https://forms.gle/pR1LvJ51rmznauym7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-flex items-center justify-center
                                    px-8 py-4 w-full md:w-auto
                                    bg-amber-400 text-black font-bold text-sm uppercase tracking-widest
                                    rounded-xl shadow-[0_10px_20px_-10px_rgba(251,191,36,0.5)]
                                    hover:bg-white hover:scale-105 hover:shadow-white/10
                                    active:scale-95 transition-all duration-300
                                "
                            >
                                Upload your image
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}