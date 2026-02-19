import Hero from "@/src/components/landing/Hero";
import Services from "@/src/components/landing/Services";

import dynamic from "next/dynamic";

const Media = dynamic(() => import("@/src/components/landing/Media"), {
  loading: () => <div className="h-40" />,
});
const PartnerBelt = dynamic(
  () => import("@/src/components/landing/PartnerBelt"),
);
const VideoGallery = dynamic(
  () => import("@/src/components/landing/VideoGallery"),
);
const Reviews = dynamic(() => import("@/src/components/landing/Reviews"));
const Mastery = dynamic(() => import("@/src/components/landing/Mastery"));
const OverallStats = dynamic(
  () => import("@/src/components/landing/OverallStats"),
);
const JoinUI = dynamic(() => import("@/src/components/landing/JoinUI"));

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <Media />
      <PartnerBelt />
      <VideoGallery />
      <Reviews />
      <Mastery />
      <OverallStats />

      <JoinUI />
    </div>
  );
}
