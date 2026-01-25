"use client";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto text-center mb-20"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Our <span className="text-green-400">Services</span>
      </h1>

      <p className="text-gray-400 text-lg">
        We don&apos;t do boring marketing.
        <br />
        We build brands, break patterns, and create growth with a little
        <span className="text-green-400 font-semibold"> panga </span>
      </p>
    </motion.div>
  );
}
