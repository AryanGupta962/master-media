"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import JoinForm from "./JoinForm";

export default function JoinModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // 🔒 Scroll lock
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* 🌫 Blurred Overlay */}
          <motion.div
            className="
              fixed inset-0 z-50
              bg-black/40 backdrop-blur-md
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* ✨ Premium Modal */}
          <motion.div
            className="
              fixed left-1/2 top-1/2
              -translate-x-1/2 -translate-y-1/2
              w-[92%] sm:w-[800px]
              bg-white/90 backdrop-blur-xl
              rounded-2xl
              p-8 z-50 shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            "
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
            }}
          >
            <button
              onClick={onClose}
              className="
                absolute top-4 right-4
                text-gray-400 hover:text-black
                text-lg
              "
            >
              ✕
            </button>

            <JoinForm />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
