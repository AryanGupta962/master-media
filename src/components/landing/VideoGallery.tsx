"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";


interface VideoItem {
  id: number;
  src: string;
  title: string;
}

const videos: VideoItem[] = [
  { id: 1, src: "/videos/video.mp4", title: "Global Cultural Exchange" },
  { id: 2, src: "/videos/video.mp4", title: "Impactful Community Events" },
  { id: 3, src: "/videos/video.mp4", title: "Celebrating Diversity" },
  { id: 4, src: "/videos/video.mp4", title: "Global Cultural Exchange" },
  { id: 5, src: "/videos/video.mp4", title: "Impactful Community Events" },
  { id: 6, src: "/videos/video.mp4", title: "Celebrating Diversity" },
];

export default function VideoGallery() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseEnter = (index: number) => {
    swiperRef.current?.autoplay.stop();
    const video = videoRefs.current[index];
    if (video) {
      video.muted = false;
      video.play();
    }
  };

  const handleMouseLeave = (index: number) => {
    swiperRef.current?.autoplay.start();
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.muted = true;
      video.currentTime = 0;
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className="relative py-20 bg-background">
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-semibold text-primary-dark">
          Impact in Action: Gallery
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          A glimpse into our impactful work and the communities we serve.
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-10">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          effect="coverflow"
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1.5,
              },
            },
            768: {
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
              },
            },
          }}
          className="video-swiper !py-8 overflow-hidden"
        >
          {videos.map((video, index) => {
     
            
            return (
              <SwiperSlide
                key={video.id}
                className="!w-[280px] md:!w-[380px] transition-all duration-700 overflow-hidden rounded-3xl"
              >
                {({ isActive: slideIsActive }) => (
                  <div
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    className={`group relative overflow-hidden rounded-3xl bg-black shadow-2xl transition-all duration-700 ${
                      slideIsActive
                        ? "scale-110 md:scale-125 z-10"
                        : "scale-90 opacity-60"
                    }`}
                  >
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current[index] = el;
                      }}
                      src={video.src}
                      muted
                      loop
                      playsInline
                      className="h-[380px] md:h-[420px] w-full object-cover"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-500" />
                    
                    {/* Title */}
                    <div className="absolute bottom-6 left-6 right-6 text-white group-hover:opacity-0 transition-opacity duration-500">
                      <h3 className="text-lg font-medium drop-shadow-lg">
                        {video.title}
                      </h3>
                    </div>
                    
                    {/* Playing indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white shadow-lg backdrop-blur-sm">
                        Playing
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef.current?.slideToLoop(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}