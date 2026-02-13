import React from "react";

function Hero() {
  return (
    <section className="relative bg-primary text-white px-4 lg:px-10 pt-25 md:pt-30 pb-15 overflow-hidden">
      <div className="max-w-6xl mx-auto pb-20">
        <h2 className="text-5xl font-bold mb-6">About Master Media</h2>

        <p className="text-lg max-w-3xl leading-relaxed">
          For years, we’ve partnered with brands to build meaningful digital
          presence, scalable marketing systems, and performance-driven campaigns
          that create measurable growth — not vanity metrics.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[80px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,64L60,58.7C120,53,240,43,360,42.7C480,43,600,53,720,69.3C840,85,960,107,1080,112C1200,117,1320,107,1380,101.3L1440,96V120H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
