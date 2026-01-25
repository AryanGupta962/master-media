"use client";
import { services } from "@/src/utils/constants/services.data";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {services.map((service, i) => (
        <ServiceCard key={service.title} index={i} {...service} />
      ))}
    </div>
  );
}
