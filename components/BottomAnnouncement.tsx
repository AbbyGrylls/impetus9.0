"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function BottomAnnouncement() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("announcement_seen");

    if (!hasSeen) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem("announcement_seen", "true");
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, x: 40 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onClick={() => router.push("/feed")}
          className="fixed bottom-0 right-0 w-full z-50 cursor-pointer"
        >
          <div className="relative overflow-hidden backdrop-blur-xl bg-black/70 border-t border-white/10 shadow-2xl">
            
            {/* Premium glow line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40" />

            <div className="h-14 flex items-center">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 12,
                  ease: "linear",
                }}
                className="whitespace-nowrap text-lg font-semibold tracking-wide text-white px-6"
              >
                🔔 Registrations closing soon — Secure your spot now 🔔
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
