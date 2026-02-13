import ReachOptions from "@/src/components/services/ReachOptions";
import ServicesGrid from "@/src/components/services/ServicesGrid";
import ServicesHero from "@/src/components/services/ServicesHero";
import JoinUI from "@/src/components/landing/JoinUI";
import MasterMediaGrowth from "@/src/components/services/MasterMediaGrowth";

export default async function ServicesPage() {
  return (
    <section className="flex-1 relative bg-white text-yellow-400 pt-24">
      <ServicesHero />
      <ServicesGrid />
      <ReachOptions />
      <MasterMediaGrowth/>

      <JoinUI />
    </section>
  );
}
