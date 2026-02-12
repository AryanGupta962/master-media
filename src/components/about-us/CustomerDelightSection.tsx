"use client";

import { motion } from "framer-motion";
import { FiGlobe, FiTrendingUp, FiZap, FiUsers } from "react-icons/fi";

export default function ClientSuccessSection() {
  return (
    <section className="py-24 bg-[#f8f9fc] text-center px-6">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-color-primary"
      >
        Client Success First
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 max-w-3xl mx-auto text-lg text-gray leading-relaxed"
      >
        At Master Media, we build digital growth systems — not just campaigns.
        Everything we do is aligned with performance, scalability, and long-term
        trust.
      </motion.p>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-4 gap-10 mt-16 max-w-6xl mx-auto">
        <FeatureCard
          icon={<FiGlobe />}
          title="Strategic Reach"
          desc="We position your brand across the right platforms to reach the right audience at the right time."
        />

        <FeatureCard
          icon={<FiTrendingUp />}
          title="Performance Growth"
          desc="Campaigns optimized for ROI, conversion tracking, and measurable business impact."
        />

        <FeatureCard
          icon={<FiZap />}
          title="Creative Precision"
          desc="High-converting creatives backed by data, research, and audience psychology."
        />

        <FeatureCard
          icon={<FiUsers />}
          title="Trusted Partnership"
          desc="Transparent communication, consistent reporting, and a team invested in your growth."
        />
      </div>

      {/* Closing Line */}
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-20 text-3xl font-bold"
      >
        <span className="text-primary">Redefining Digital Growth,</span>{" "}
        <span className="relative inline-block">
          Without Compromising Trust.
          <span className="absolute left-0 bottom-1 w-full h-2 bg-light -z-10 opacity-40 rounded"></span>
        </span>
      </motion.h3>
    </section>
  );
}

function FeatureCard({ icon, title, desc }: any) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition-all"
    >
      <div className="flex justify-center mb-6 text-primary text-4xl">
        {icon}
      </div>

      <h4 className="text-lg font-semibold mb-3 text-[#171717]">{title}</h4>

      <p className="text-sm text-gray leading-relaxed">{desc}</p>
    </motion.div>
  );
}
