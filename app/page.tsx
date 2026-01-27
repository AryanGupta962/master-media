import Hero from "@/src/components/landing/Hero";
import Services from "@/src/components/landing/Services";

export default function Home() {
  return (
    <div className="flex-1">
      <Hero />
      <Services />
    </div>
  );
}
