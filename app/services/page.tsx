import dynamic from "next/dynamic";
import ServicesHero from "@/src/components/services/ServicesHero";
import ServicesGrid from "@/src/components/services/ServicesGrid";

const ReachOptions = dynamic(
  () => import("@/src/components/services/ReachOptions"),
);
const MasterMediaGrowth = dynamic(
  () => import("@/src/components/services/MasterMediaGrowth"),
);
const JoinUI = dynamic(() => import("@/src/components/landing/JoinUI"));

export default async function ServicesPage() {
  return (
    <section className="flex-1 relative bg-white text-yellow-400 pt-24">
      <ServicesHero />
      <ServicesGrid />
      <ReachOptions />
      <MasterMediaGrowth />

      <JoinUI />
    </section>
  );
}
