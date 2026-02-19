"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-[#aeb9d8] to-[#706ee2c7] text-white px-6">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-primary/20 blur-[140px] rounded-full top-[-150px] right-[-150px]" />
      <div className="absolute w-[400px] h-[400px] bg-primary-light/20 blur-[120px] rounded-full bottom-[-120px] left-[-120px]" />

      {/* Large Faded 404 */}
      <h1 className="absolute text-[220px] font-extrabold text-white/5 select-none">
        404
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center max-w-xl"
      >
        <h2 className="text-4xl font-bold mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-white mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark transition-all duration-300 rounded-lg font-medium shadow-lg hover:shadow-primary/40"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
