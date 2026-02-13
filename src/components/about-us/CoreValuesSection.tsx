"use client";

import { motion } from "framer-motion";
import {
  FaHandshake,
  FaShieldAlt,
  FaChartLine,
  FaLock,
} from "react-icons/fa";

const values = [
  {
    title: "Trust First",
    desc: "We build long-term partnerships through transparency, consistency, and honest collaboration.",
    icon: FaHandshake,
  },
  {
    title: "Integrity by Design",
    desc: "Every strategy and decision is guided by ethics, accountability, and responsibility.",
    icon: FaShieldAlt,
  },
  {
    title: "Measurable Impact",
    desc: "Our focus is on real outcomes — growth, performance, and data-backed success.",
    icon: FaChartLine,
  },
  {
    title: "Security & Reliability",
    desc: "Your platforms, data, and brand assets are protected with enterprise-grade security.",
    icon: FaLock,
  },
];

export default function CoreValuesSection() {
  return (
    <section
      className="
        py-28
        bg-gradient-to-b
        from-[#eff2fc]
        via-[#c7d0f3]
        to-[#d1dbfd]
      "
    >
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-20 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold tracking-tight text-[#213d77]"
        >
          Our Core Values
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-5 text-lg text-[#9f9f9f]"
        >
          The principles that define how we earn trust, create value,
          and protect what matters most.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {values.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.12,
              duration: 0.55,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{ y: -12 }}
            className="
              group relative overflow-hidden
              rounded-3xl
              bg-white
              border border-[#324dd3]/10
              shadow-[0_16px_40px_rgba(50,77,211,0.12)]
              hover:shadow-[0_30px_90px_rgba(50,77,211,0.22)]
              transition-all duration-500
            "
          >
            {/* Top Gradient Bar */}
            <div className="h-24 bg-gradient-to-r from-[#324dd3] to-[#566bd6] flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <item.icon className="text-white text-xl" />
              </div>
            </div>

            {/* Content */}
            <div className="p-8 text-center">
              <h3 className="text-xl font-semibold text-[#213d77] mb-3">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-[#9f9f9f]">
                {item.desc}
              </p>
            </div>

            {/* Right Glow */}
            <span
              className="
                absolute top-0 right-0 h-full w-28
                opacity-0 group-hover:opacity-100
                transition-opacity duration-700
                bg-gradient-to-l
                from-[#324dd3]/25
                to-transparent
                pointer-events-none
              "
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
