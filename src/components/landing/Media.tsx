"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo } from "react";

const sampleImages = [
  "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600",
  "https://images.unsplash.com/photo-1682687221038-404cb8830901?w=600",
  "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=600",
  "https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=600",
  "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=600",
  "https://images.unsplash.com/photo-1682687221363-72518513620e?w=600",
   "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600",
  "https://images.unsplash.com/photo-1682687221038-404cb8830901?w=600",
  "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=600",
  "https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=600",
  "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=600",
  "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=600",
  "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=600",
];

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function Media() {
  // Mouse position (normalized -0.5 → 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  const layers = useMemo(
    () =>
      sampleImages.map(() => ({
        depth: random(10, 40),
        rotate: random(-3, 3),
        scale: random(0.95, 1.05),
      })),
    []
  );

  return (
    <section className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-black py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        {/* Masonry */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-6">
          {sampleImages.map((src, i) => {
            const layer = layers[i];

            const x = useTransform(smoothX, (v) => v * layer.depth);
            const y = useTransform(smoothY, (v) => v * layer.depth);

            return (
              <motion.div
                key={i}
                style={{ x, y }}
                className="mb-6 break-inside-avoid"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: layer.scale }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotate: 0,
                  }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40 backdrop-blur-sm"
                  style={{ rotate: layer.rotate }}
                >
                  <Image
                    src={src}
                    alt="media"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
