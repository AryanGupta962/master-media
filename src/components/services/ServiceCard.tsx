"use client";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4 },
  }),
};

type Props = {
  title: string;
  desc: string;
  icon: IconType;
  index: number;
};

export default function ServiceCard({
  title,
  desc,
  icon: Icon,
  index,
}: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-green-400 transition-all"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="text-green-400 text-3xl">
          <Icon />
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-3 group-hover:text-green-400 transition">
        {title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>

      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-linear-to-br from-green-400/10 to-transparent" />
    </motion.div>
  );
}
