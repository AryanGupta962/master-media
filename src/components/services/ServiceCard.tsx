"use client";

import { motion, Variants } from "framer-motion";
import { IconType } from "react-icons";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.45,
      ease: "easeOut",
    },
  }),
};

type Props = {
  title: string;
  desc: string;
  icon: IconType;
  index: number;
};

export default function ServiceCard({ title, desc, icon: Icon, index }: Props) {
  const formattedNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="
        group relative overflow-hidden
        rounded-3xl p-6
        bg-white
        border border-black/5
        shadow-[0_10px_30px_rgba(0,0,0,0.04)]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        transition-all duration-300
      "
    >
      <span
        className="
          absolute top-2 right-4
          text-[100px] sm:text-[120px]
          font-bold
          text-black/5
          leading-none
          select-none
          pointer-events-none
          z-0
        "
      >
        {formattedNumber}
      </span>

      {/* Left Accent Line (unchanged) */}
      <span className="absolute left-0 top-0 h-full w-[4px] bg-primary rounded-l-3xl" />

      <span
        className="
          absolute top-0 right-0 h-full w-24
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
          bg-linear-to-l
          from-primary/10
          via-primary/5
          to-transparent
          pointer-events-none
        "
      />

      <div className="relative z-10">
        <div
          className="
            w-12 h-12 mb-6
            rounded-2xl
            flex items-center justify-center
            bg-primary/10
            text-primary
            text-xl
          "
        >
          <Icon />
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">
          {title}
        </h3>

        <p className="text-sm sm:text-base text-black/60 leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Bottom Line */}
      <span
        className="
          absolute bottom-0 left-0
          h-[2px] w-0
          bg-primary
          group-hover:w-full
"
      />
    </motion.div>
  );
}
