"use client";

import React from "react";
import { useEra } from "@/context/EraContext";
import { motion } from "framer-motion";
import LifeInALensReg from "@/components/LifeInALensReg";

export default function UpdatesPage() {
    const { currentEraIndex } = useEra();

    // You can reuse your era colors here
    const eras = [
        { id: "mechanism", colors: "from-amber-900/20 via-black to-black", accent: "text-amber-500" },
        { id: "propulsion", colors: "from-orange-900/20 via-black to-black", accent: "text-orange-500" },
        { id: "automation", colors: "from-cyan-900/20 via-black to-black", accent: "text-cyan-400" },
        { id: "simulation", colors: "from-emerald-900/20 via-black to-black", accent: "text-emerald-400" },
    ];

    const currentEra = eras[currentEraIndex];

    return (
        <main className="min-h-screen bg-black text-white pt-20 pb-12 relative overflow-hidden">
            {/* Background Era Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${currentEra.colors} pointer-events-none`} />

            <div className="relative z-10 max-w-6xl mx-auto px-4">
                <header className="mb-2 px-4 border-b border-zinc-800 pb-2">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                        <div>
                            <h1 className="text-3xl font-nunito font-bold text-white tracking-tight">
                                Latest Updates
                            </h1>
                            <p className="text-zinc-500 text-sm mt-1">
                                Current competitions and important deadlines for Impetus 9.0.
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-500"></span>
                            </span>
                            <span className="text-[11px] font-medium text-zinc-500 uppercase tracking-widest">
                                Live Now
                            </span>
                        </div>
                    </div>
                </header>

                <div className="space-y-2">
                    
                    <LifeInALensReg />

                    {/* Future placeholder for more updates */}
                    <div className="max-w-6xl mx-auto mt-12 p-12 border border-dashed border-zinc-800 rounded-3xl flex items-center justify-center">
                        <p className="text-zinc-600 font-mono italic text-sm text-center">
                            -- End of List. --
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}