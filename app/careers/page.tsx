"use client";

import dynamic from "next/dynamic";
import Hero from "@/src/components/career/Hero";

const CareerGrowthSection = dynamic(
  () => import("@/src/components/career/CareerGrowthSection"),
);
const CareerForm = dynamic(() => import("@/src/components/career/CareerForm"));
const FootNote = dynamic(() => import("@/src/components/career/FootNote"));

// const Openings = dynamic(
//   () => import("@/src/components/career/Openings")
// );

export default function Career() {
  return (
    <main className="overflow-hidden">
      <Hero />
      {/* <Openings /> */}
      <CareerGrowthSection />
      <CareerForm />
      <FootNote />
    </main>
  );
}
