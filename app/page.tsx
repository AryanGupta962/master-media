import MosaicCollageDemo from "@/src/components/landing/CollageDemo";
// import CollageDemo from "@/src/components/landing/CollageDemo";
import Hero from "@/src/components/landing/Hero";
import JoinUI from "@/src/components/landing/JoinUI";
import Mastery from "@/src/components/landing/Mastery";
import OverallStats from "@/src/components/landing/OverallStats";
import Reviews from "@/src/components/landing/Reviews";
import Services from "@/src/components/landing/Services";
import VideoGallery from "@/src/components/landing/VideoGallery";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <MosaicCollageDemo />
      <VideoGallery />
      <Reviews />
      <Mastery />
      <OverallStats />

      <JoinUI />
    </div>
  );
}
