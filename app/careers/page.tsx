"use client";

import CareerForm from "@/src/components/career/CareerForm";
import CareerGrowthSection from "@/src/components/career/CareerGrowthSection";
import FootNote from "@/src/components/career/FootNote";
import Hero from "@/src/components/career/Hero";
// import Openings from "@/src/components/career/Openings";

export default function Career() {
  return (
    <main className="overflow-hidden">
      <Hero />
      {/* <Openings/> */}
      <CareerGrowthSection />
      <CareerForm />
      <FootNote />
    </main>
  );
}
