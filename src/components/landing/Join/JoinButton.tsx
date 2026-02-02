"use client";

import { motion } from "framer-motion";

export default function JoinButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="
        fixed right-0 top-1/2 -translate-y-1/2
        bg-[var(--color-primary)]
        text-white font-medium
        px-4 py-3 rounded-l-xl
        shadow-lg z-50
        select-none
      "
    >
      Join Us
    </motion.button>
  );
}
