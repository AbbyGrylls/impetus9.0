"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Bell } from "lucide-react";
import { useRef } from "react";

export default function FloatingNotification() {
  const router = useRouter();
  const wasDragged = useRef(false);

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.2}
      className="
        fixed top-4 right-4 z-50 cursor-pointer     /* Mobile default */
        sm:top-auto sm:bottom-6 sm:right-6          /* Larger screens */
      "
      onDragStart={() => {
        wasDragged.current = true;
      }}
      onDragEnd={() => {
        setTimeout(() => {
          wasDragged.current = false;
        }, 50);
      }}
      onClick={() => {
        if (!wasDragged.current) {
          router.push("/feed");
        }
      }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:bg-blue-500 transition-all duration-300">
        <Bell className="text-white w-6 h-6" />

        {/* Notification Dot */}
        <span className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
      </div>
    </motion.div>
  );
}