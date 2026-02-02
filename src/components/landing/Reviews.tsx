"use client";

import { motion } from "framer-motion";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "Founder, TechStartup",
    review:
      "Master Media ne hamari brand ko zero se hero bana diya. Strategy, creatives aur execution — sab next level. 90 days mein growth visibly explode ho gaya 🚀",
    rating: 5,
  },
  {
    name: "Ananya Sharma",
    role: "Marketing Head, D2C Brand",
    review:
      "Honestly, MasterMedia ke saath kaam karna ek premium experience raha. Team proactive hai, results-focused aur execution flawless.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "Co-Founder, SaaS Company",
    review:
      "They don’t just run campaigns — they build brands. Strong creative direction with performance-driven mindset. Highly recommended.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-black via-[#0b1025] to-black py-28 px-6 text-white">
      {/* Glow blobs */}
      <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] bg-[#324dd3]/30 blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-[#566bd6]/30 blur-[160px]" />

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Tag */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-sm tracking-widest text-[#566bd6]"
        >
          REVIEWS
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-3xl md:text-5xl font-extrabold"
        >
          What Our{" "}
          <span className="bg-linear-to-r from-[#324dd3] to-[#566bd6] bg-clip-text text-transparent">
            Masters
          </span>{" "}
          Say
        </motion.h2>

        {/* Sub */}
        <p className="mt-4 max-w-2xl mx-auto text-[#9f9f9f]">
          Don’t just take our word for it. Here’s what happens when brands
          experience the <span className="text-white">MasterMedia</span>{" "}
          treatment ✨
        </p>

        {/* Swiper */}
        <div className="relative mt-16">
          <div className="py-4">
            <Swiper
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: ".review-prev",
                nextEl: ".review-next",
              }}
            >
              {reviews.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="my-8 bg-transparent">
                    <ReviewCard {...item} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Navigation */}
          <div className="mt-8 flex justify-center gap-6">
            <button className="review-prev rounded-full border border-white/20 p-3 hover:border-[#566bd6] hover:text-[#566bd6] transition">
              <FaChevronLeft />
            </button>
            <button className="review-next rounded-full border border-white/20 p-3 hover:border-[#566bd6] hover:text-[#566bd6] transition">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */

function ReviewCard({
  name,
  role,
  review,
  rating,
}: {
  name: string;
  role: string;
  review: string;
  rating: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      className="group relative mx-auto max-w-3xl"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-[#324dd3]/30 to-[#566bd6]/30 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Card */}
      <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-xl">
        {/* Quote icon */}
        <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-[#324dd3] text-white shadow-lg">
          <FaQuoteLeft />
        </div>

        {/* Stars */}
        <div className="flex gap-1 text-yellow-400">
          {Array.from({ length: rating }).map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        {/* Review */}
        <p className="mt-6 text-lg leading-relaxed text-white">“{review}”</p>

        {/* Author */}
        <div className="mt-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-[#324dd3] to-[#566bd6] font-bold">
            {name.charAt(0)}
          </div>
          <div className="text-left">
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-[#9f9f9f]">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
