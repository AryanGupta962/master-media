"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const founders = [
  {
    name: "Mr. Abhi Gupta",
    role: "CEO & Co-Founder",
    image: "/abhi.jpg", // put image in public folder
    bio: `The brain behind the brand. Sahil believes marketing isn&apos;t about selling —
    it&apos;s about storytelling that converts. When he&apos;s not building empires,
    he&apos;s probably planning the next one.`,
  },
  {
    name: "Mr. Aman Gupta",
    role: "Co-Founder",
    image: "/gupta.jpg",
    bio: `Strategic thinker. Vision architect. Calm in chaos.
    Jestin ensures Master Media doesn&apos;t just follow trends —
    we create them. Also secretly the team&apos;s problem-solver.`,
  },
];

function Founders() {
  return (
    <section className="py-24 px-6 text-center bg-primary/70">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-16"
      >
        Meet The Founders
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        {founders.map((founder, index) => (
          <FlipCard key={index} founder={founder} />
        ))}
      </div>
    </section>
  );
}

export default Founders;

// --compo--

function FlipCard({ founder }: any) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-[420px] perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full transition-transform duration-700 preserve-3d"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="absolute w-full h-full bg-white rounded-xl shadow-xl flex flex-col items-center justify-center p-6 backface-hidden border border-gray-200"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={founder.image}
            alt={founder.name}
            width={200}
            height={200}
            className="rounded-xl object-cover"
          />
          <h3 className="mt-6 text-xl font-bold text-primary">
            {founder.name}
          </h3>
          <p className="text-gray mt-2">{founder.role}</p>
        </div>

        {/* BACK */}
        <div
          className="absolute w-full h-full bg-primary text-white rounded-xl shadow-xl flex items-center justify-center p-8 rotateY-180"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-lg leading-relaxed">{founder.bio}</p>
        </div>
      </motion.div>
    </div>
  );
}
