'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Component } from 'lucide-react';

interface AnchorWheelProps {
    eraIndex: number;
}

export default function AnchorWheel({ eraIndex }: AnchorWheelProps) {
    const wheelConfig = [
        {
            id: 'mechanism',
            color: 'text-amber-500',
            glow: 'drop-shadow-[0_0_15px_rgba(245,158,11,0.6)]',
            rotationSpeed: 12,
            component: (
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <path id="tooth" d="M47 8 L53 8 L58 22 L42 22 Z" />
                        <mask id="gearMask">
                            <rect width="100" height="100" fill="black" />
                            <circle cx="50" cy="50" r="36" fill="white" />
                            <g fill="white" transform="translate(0,0)">
                                <use href="#tooth" transform="rotate(0 50 50)" />
                                <use href="#tooth" transform="rotate(30 50 50)" />
                                <use href="#tooth" transform="rotate(60 50 50)" />
                                <use href="#tooth" transform="rotate(90 50 50)" />
                                <use href="#tooth" transform="rotate(120 50 50)" />
                                <use href="#tooth" transform="rotate(150 50 50)" />
                                <use href="#tooth" transform="rotate(180 50 50)" />
                                <use href="#tooth" transform="rotate(210 50 50)" />
                                <use href="#tooth" transform="rotate(240 50 50)" />
                                <use href="#tooth" transform="rotate(270 50 50)" />
                                <use href="#tooth" transform="rotate(300 50 50)" />
                                <use href="#tooth" transform="rotate(330 50 50)" />
                            </g>
                            <circle cx="50" cy="50" r="25" fill="black" />
                        </mask>
                    </defs>

                    <rect width="100" height="100" mask="url(#gearMask)" fill="currentColor" />
                </svg>


            ),
        },
        {
            id: 'propulsion',
            color: 'text-orange-600',
            glow: 'drop-shadow-[0_0_20px_rgba(234,88,12,0.6)]',
            rotationSpeed: 1.5,
            component: (
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50" />
                    <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-30" />
                    <circle cx="50" cy="50" r="8" />
                    {[...Array(12)].map((_, i) => (
                        <path
                            key={i}
                            d="M50 50 L50 10 Q 65 20 60 40 Z"
                            transform={`rotate(${i * 30} 50 50)`}
                        />
                    ))}
                </svg>
            )
        },
        {
            id: 'automation',
            color: 'text-cyan-400',
            glow: 'drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]',
            rotationSpeed: 20, 
            component: (
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-[1.5]">
                    <rect x="35" y="35" width="30" height="30" rx="4" fill="currentColor" fillOpacity="0.2" />
                    <rect x="40" y="40" width="20" height="20" stroke="none" fill="currentColor" />
                    <path d="M50 35 L50 10" /> <circle cx="50" cy="10" r="2" fill="currentColor" stroke="none" />
                    <path d="M50 65 L50 90" /> <circle cx="50" cy="90" r="2" fill="currentColor" stroke="none" />
                    <path d="M35 50 L10 50" /> <circle cx="10" cy="50" r="2" fill="currentColor" stroke="none" />
                    <path d="M65 50 L90 50" /> <circle cx="90" cy="50" r="2" fill="currentColor" stroke="none" />
                    <path d="M35 35 L20 20" /> <circle cx="20" cy="20" r="2" fill="currentColor" stroke="none" />
                    <path d="M65 35 L80 20" /> <circle cx="80" cy="20" r="2" fill="currentColor" stroke="none" />
                    <path d="M35 65 L20 80" /> <circle cx="20" cy="80" r="2" fill="currentColor" stroke="none" />
                    <path d="M65 65 L80 80" /> <circle cx="80" cy="80" r="2" fill="currentColor" stroke="none" />
                    <motion.circle
                        cx="50" cy="50" r="40"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        fill="none"
                        initial={{ opacity: 0.2, scale: 0.8 }}
                        animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.8, 1.1, 0.8], rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                </svg>
            ),
        },
        {
            id: 'simulation',
            color: 'text-emerald-400',
            glow: 'drop-shadow-[0_0_20px_rgba(52,211,153,0.6)]',
            rotationSpeed: 0, 
            component: (
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current">
                    <g className="opacity-40" strokeWidth="0.5">
                        <circle cx="50" cy="50" r="25" />
                        <ellipse cx="50" cy="50" rx="25" ry="8" />
                        <ellipse cx="50" cy="50" rx="25" ry="8" transform="rotate(45 50 50)" />
                        <ellipse cx="50" cy="50" rx="25" ry="8" transform="rotate(-45 50 50)" />
                        <line x1="50" y1="25" x2="50" y2="75" />
                        <line x1="25" y1="50" x2="75" y2="50" />
                    </g>
                    <motion.path
                        d="M0 30 Q 50 10 100 30"
                        strokeWidth="2"
                        strokeDasharray="5 5"
                        initial={{ strokeDashoffset: 0 }}
                        animate={{ strokeDashoffset: -20 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path
                        d="M0 50 Q 20 50 30 40 M 70 40 Q 80 50 100 50"
                        strokeWidth="2"
                        strokeDasharray="5 5"
                        initial={{ strokeDashoffset: 0 }}
                        animate={{ strokeDashoffset: -20 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path
                        d="M0 70 Q 50 90 100 70"
                        strokeWidth="2"
                        strokeDasharray="5 5"
                        initial={{ strokeDashoffset: 0 }}
                        animate={{ strokeDashoffset: -20 }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                    />
                </svg>
            ),
        },
    ];

    const activeEra = wheelConfig[eraIndex];

    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-8">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={activeEra.id}
                    initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "backOut" }}
                    className={`absolute inset-0 ${activeEra.color} ${activeEra.glow}`}
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: activeEra.rotationSpeed === 0 ? 0 : activeEra.rotationSpeed,
                            ease: "linear",
                            repeat: activeEra.rotationSpeed === 0 ? 0 : Infinity,
                        }}
                        className="w-full h-full"
                    >
                        {activeEra.component}
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}