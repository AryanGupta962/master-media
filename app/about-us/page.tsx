"use client";

import ClientSuccessSection from "@/src/components/about-us/ClientSuccessSection.";
import ImageBelt from "@/src/components/about-us/ImageBelt";
import CoreValuesSection from "@/src/components/about-us/CoreValuesSection";
import AboutFoot from "@/src/components/about-us/AboutFoot";
import Founders from "@/src/components/about-us/Founders";
import Hero from "@/src/components/about-us/Hero";
import Mission from "@/src/components/about-us/Mission";

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
