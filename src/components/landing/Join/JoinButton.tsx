"use client";

import { motion } from "framer-motion";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

export default function JoinButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="fixed right-6 bottom-6 z-50">
      <div className="relative w-14 h-14">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="
              absolute inset-0
              rounded-full
              bg-blue-800
              opacity-30
              pointer-events-none
            "
            animate={{
              scale: [1, 1.6],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeOut",
            }}
            style={{
              willChange: "transform, opacity",
            }}
          />
        ))}

        <motion.button
          onClick={onClick}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          className="
            relative
            z-10
            flex items-center justify-center
            w-14 h-14
            rounded-full
            bg-blue-800
            text-white
            shadow-[0_0_25px_rgba(59,130,246,0.6)]
            cursor-pointer
          "
        >
          <MdOutlineConnectWithoutContact className="text-3xl" />
        </motion.button>
      </div>
    </div>
  );
}
