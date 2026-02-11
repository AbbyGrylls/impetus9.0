"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function BottomAnnouncement() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      onClick={() => router.push("/feed")}
      className="fixed bottom-0 left-0 right-0 z-50 w-full cursor-pointer"
    >
      <div className="relative overflow-hidden backdrop-blur-xl bg-black/80 border-t border-white/20 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        
        {/* Premium glow line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70" />

        <div className="h-12 md:h-14 flex items-center w-full">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 15, // Adjusted speed for readability
              ease: "linear",
            }}
            className="whitespace-nowrap text-sm md:text-lg font-semibold tracking-wide text-white flex items-center gap-8"
          >
            <span>🔔 Registrations closing soon — Secure your spot now</span>
            <span>📢 Check the Alerts page for live updates</span>
            <span>🔔 Registrations closing soon — Secure your spot now</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}