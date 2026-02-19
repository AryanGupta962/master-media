"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaQuoteLeft,
  // FaChevronLeft,
  // FaChevronRight,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Essential Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "Founder, TechStartup",
    review:
      "Master Media ne hamari brand ko zero se hero bana diya. Strategy, creatives aur execution — sab next level. 90 days mein growth visibly explode ho gaya.",
    rating: 5,
  },
  {
    name: "Ananya Sharma",
    role: "Marketing Head, D2C Brand",
    review:
      "Honestly, MasterMedia ke saath kaam karna ek premium experience raha. Team proactive hai, results-focused aur execution flawless.",
    rating: 4,
  },
  {
    name: "Amit Verma",
    role: "Co-Founder, SaaS Company",
    review:
      "They don’t just run campaigns — they build brands. Strong creative direction with performance-driven mindset. Highly recommended.",
    rating: 4,
  },
  {
    name: "Priya Patel",
    role: "Product Manager, E-commerce Startup",
    review:
      "MasterMedia transformed our brand presence in just 3 months. Their strategic approach and attention to detail are unmatched.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className="relative overflow-x-clip bg-[#fcfcfd] py-16 lg:py-24 px-6 text-black">
      {/* Soft Glow blobs for depth */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-[#324dd3]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#566bd6]/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-5 py-1.5 rounded-full mb-6 bg-[#324dd3] text-white text-xs font-bold tracking-widest uppercase"
        >
          REVIEWS
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
        >
          What Our{" "}
          <span className="bg-linear-to-r from-[#324dd3] to-[#566bd6] bg-clip-text text-transparent">
            Clients
          </span>{" "}
          Say
        </motion.h2>

        <p className="mt-4 max-w-2xl mx-auto text-slate-500 text-lg">
          Don’t just take our word for it. Here’s what happens when brands
          experience the{" "}
          <span className="text-[#324dd3] font-semibold">MasterMedia</span>{" "}
          treatment.
        </p>

        <div className="relative mt-12 lg:mt-20 px-2">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            centeredSlides={true} // Makes the active review stand out
            grabCursor={true}
            spaceBetween={30}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 1.8 },
              1024: { slidesPerView: 2.4 },
            }}
            navigation={{
              prevEl: ".review-prev",
              nextEl: ".review-next",
            }}
            className="overflow-visible!  pb-16" // Space for pagination dots
          >
            {reviews.map((item, i) => (
              <SwiperSlide
                key={i}
                className="transition-all duration-500 py-10"
              >
                {({ isActive }) => (
                  <div
                    className={`transition-all duration-700 ${isActive ? "scale-105 opacity-100" : "scale-90 opacity-40 blur-[1px]"}`}
                  >
                    <ReviewCard {...item} />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Buttons */}
          {/* <div className="absolute top-1/2 -translate-y-1/2 w-full left-0 flex justify-between px-2 z-20 pointer-events-none">
            <button className="review-prev pointer-events-auto h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-xl text-[#324dd3] hover:bg-[#324dd3] hover:text-white transition-all duration-300">
              <FaChevronLeft size={18} />
            </button>
            <button className="review-next pointer-events-auto h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-xl text-[#324dd3] hover:bg-[#324dd3] hover:text-white transition-all duration-300">
              <FaChevronRight size={18} />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}

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
    <div className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
      <div className="absolute -top-5 left-10 flex h-10 w-10 items-center justify-center rounded-xl bg-[#324dd3] text-white shadow-lg transform group-hover:rotate-12 transition-transform">
        <FaQuoteLeft size={14} />
      </div>

      <div className="flex gap-1 text-yellow-400 mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      <p className="text-slate-700 text-lg italic leading-relaxed min-h-25">
        “{review}”
      </p>

      <div className="mt-8 flex items-center gap-4 pt-6 border-t border-slate-50">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-[#324dd3] to-[#566bd6] text-white font-bold text-lg shadow-md">
          {name.charAt(0)}
        </div>
        <div className="text-left">
          <p className="font-bold text-slate-900 leading-none">{name}</p>
          <p className="text-sm text-[#324dd3] mt-1 font-medium">{role}</p>
        </div>
      </div>
    </div>
  );
}
