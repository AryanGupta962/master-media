import Link from "next/link";
import React from "react";

const AboutFoot = () => {
  return (
    <section className="relative w-full bg-primary-light text-white overflow-hidden">
      <div className="absolute inset-0 opacity-100 bg-[url('/layers/layer.png')] bg-no-repeat bg-left bg-contain"></div>

      <div className="relative max-w-[1600px] mx-auto px-4 md:px-10 py-15">
        <div className="max-w-3xl">
          <h1 className="font-48 font-bold leading-tight mb-6">
            We Don’t Just Build Media.
            <br />
            <span className="text-blue-200">We Build Impact.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8">
            MasterMedia is a digital-first creative agency crafting powerful
            brands, scalable platforms, and performance-driven marketing
            strategies that turn ideas into measurable growth.
          </p>

          <Link
            href={"/services"}
            className="bg-primary-dark hover:bg-primary transition px-6 py-3 rounded-md font-semibold text-lg"
          >
            Explore Our Services →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutFoot;
