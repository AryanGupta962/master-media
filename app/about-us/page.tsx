"use client";

import dynamic from "next/dynamic";

import Hero from "@/src/components/about-us/Hero";
import Mission from "@/src/components/about-us/Mission";

const Founders = dynamic(() => import("@/src/components/about-us/Founders"));
const ClientSuccessSection = dynamic(
  () => import("@/src/components/about-us/ClientSuccessSection"),
);
const CoreValuesSection = dynamic(
  () => import("@/src/components/about-us/CoreValuesSection"),
);
const ImageBelt = dynamic(() => import("@/src/components/about-us/ImageBelt"));
const AboutFoot = dynamic(() => import("@/src/components/about-us/AboutFoot"));

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#171717]">
      <Hero />
      <Mission />

      <Founders />
      <ClientSuccessSection />
      <CoreValuesSection />
      <ImageBelt />
      <AboutFoot />
    </div>
  );
}
