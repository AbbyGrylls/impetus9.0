"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AlertBanner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      className="mt-6 text-center px-4 md:px-0"
    >
      <Link
        href="/feed"
        className="
          inline-flex flex-col md:flex-row
          items-center gap-1 md:gap-2
          text-sm md:text-lg
          text-red-400/90
          hover:text-red-300
          transition-colors
        "
      >
        {/* Main text */}
        <span className="font-medium">
          Notice: Life in Lens submission link is available in Alerts Page.
        </span>

        {/* CTA line (mobile breaks naturally) */}
        <span className="flex items-center gap-2">
          <span className="opacity-70">→</span>
          <span className="underline underline-offset-4">
            View Alerts
          </span>
        </span>
      </Link>
    </motion.div>
  );
}
