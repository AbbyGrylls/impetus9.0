"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function VisitorStats() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("/api/visitors")
      .then((res) => res.json())
      .then((data) => setCount(data.total))
      .catch(() => {});
  }, []);

  if (!count) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-3 text-sm md:text-base text-zinc-400"
    >
      <span className="text-zinc-500">Visitors so far:</span>{" "}
      <span className="font-semibold text-zinc-200">
        {count.toLocaleString()}
      </span>
    </motion.div>
  );
}
