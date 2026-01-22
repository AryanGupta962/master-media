// import React from "react";
// import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-primary-purple flex items-center justify-center overflow-hidden">
  
      {/* <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden md:block">
        <Image
          src="/icons/gun.svg"
          alt="Creative Icon"
          width={128}
          height={128}
          className="drop-shadow-lg"
        />
      </div>

      <div className="absolute right-10 bottom-20 hidden md:block">
        <Image
          src="/icons/cup.svg"
          alt="Chai Icon"
          width={128}
          height={128}
          className="drop-shadow-lg"
        />
      </div> */}

      {/* Main Content */}
      <div className="text-center px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-6">
          We Are <span className="text-black">Marketing Mafias</span>
        </h1>
        <p className="text-xl md:text-4xl font-medium text-black mb-4">
          Skilled enough to know <span className="font-bold text-5xl">better</span>
        </p>
        <p className="text-xl md:text-4xl text-black font-medium mb-8">
          Wild enough to think <span className="font-bold text-5xl">bigger!</span>
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 bg-black text-yellow-400 rounded-2xl text-lg font-semibold shadow-md hover:scale-105 transition">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-black text-black rounded-2xl text-lg font-semibold hover:bg-black hover:text-yellow-400 transition">
            View Work
          </button>
        </div>
      </div>

      {/* Decorative Scribbles */}
      {/* <div className="absolute left-1/2 top-1/ hidden lg:block">
        <div className="w-30 h-30 border-2 border-white rounded-full opacity-50"></div>
      </div> */}
    </section>
  );
}