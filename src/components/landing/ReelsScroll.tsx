"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { useRef } from "react";

type VideoItem = {
  id: number;
  src: string;
  title: string;
};

const videos: VideoItem[] = [
  { id: 1, src: "content/videos/1.mp4", title: "Master Media" },
  { id: 2, src: "content/videos/2.mp4", title: "Master Media" },
  { id: 3, src: "content/videos/3.mp4", title: "Master Media" },
  { id: 4, src: "content/videos/4.mp4", title: "Master Media" },
  { id: 5, src: "content/videos/5.mp4", title: "Master Media" },
  { id: 6, src: "content/videos/6.mp4", title: "Master Media" },
  { id: 7, src: "content/videos/7.mp4", title: "Master Media" },
];

export default function ReelsScroll() {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const handleSlideChange = () => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  const handleVideoClick = (video: HTMLVideoElement) => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex justify-center items-center">
      <div className="w-full max-w-[420px] h-full">
        <Swiper
          direction="vertical"
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSlideChange={handleSlideChange}
          className="h-full"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={video.id}>
              <div className="relative w-full h-full flex items-center justify-center bg-black">
                {/* Reel Video */}
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[index] = el;
                  }}
                  src={video.src}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover aspect-[9/16]"
                  onClick={(e) =>
                    handleVideoClick(e.currentTarget)
                  }
                />

                {/* Overlay Content */}
                <div className="absolute bottom-6 left-4 text-white">
                  <h3 className="text-sm font-semibold">
                    {video.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
