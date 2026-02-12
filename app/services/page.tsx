import ReachOptions from "@/src/components/services/ReachOptions";
import JoinUI from "@/src/components/landing/JoinUI";
import ServicesGrid from "@/src/components/services/ServicesGrid";
import ServicesHero from "@/src/components/services/ServicesHero";

export default async function ServicesPage() {
  return (
    <section className="flex-1 relative bg-white text-yellow-400 py-24 px-6">
      <ServicesHero />
      <ServicesGrid />

      <div className="mt-24 text-center text-gray-400">
        <p className="font-24">
          Social Media • Performance Marketing • Influencer Marketing • Branding
          • Web Development
        </p>
      </div>
      <ReachOptions />

      <JoinUI />
    </section>
  );
}
