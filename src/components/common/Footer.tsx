"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-primary-dark text-white font-sans overflow-hidden">
      <div className="mx-auto max-w-400 px-6 pt-10 pb-5">
        {/* TOP GRID */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-5 lg:justify-between">
          {/* INTRO */}
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="mb-4 text-2xl font-bold leading-snug">
              Congrats! <br />
              You actually reached the footer.
            </h3>

            <div className="flex flex-col gap-5">
              <p className="text-base leading-relaxed text-white/75">
                Achievement Unlocked:{" "}
                <strong className="text-white">Master of the Scroll</strong> 🏆
                We&apos;ve credited{" "}
                <strong className="text-white">500 Master Points</strong> to
                your brand — time to level up.
              </p>

              <p className="max-w-xl text-base leading-relaxed text-white/70">
                Master Media is an elite, Pan-India digital marketing agency
                powered by squad of &quot;Dhurandhar&quot; specialists. We deliver
                results-first, full-stack &quot;Damdaar&quot; creative solutions
                for ambitious brands that refuse average growth.
              </p>
            </div>
          </div>

          {/* LINKS GRID */}
          <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-3 lg:gap-16 lg:text-left">
            {/* COMPANY */}
            <div>
              <p className="mb-4 text-lg uppercase tracking-wider font-bold text-gray-300">
                Company
              </p>
              <div className="flex flex-col gap-3 text-base font-medium items-center lg:items-start">
                {["About Us", "Services", "Our Work", "Careers"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                    className="group w-fit"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-white transition-all group-hover:w-full" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* RESOURCES */}
            <div>
              <p className="mb-4 text-lg uppercase tracking-wider font-bold text-gray-300">
                Resources
              </p>
              <div className="flex flex-col gap-3 text-base font-medium items-center lg:items-start">
                {["Contact Us", "Privacy Policy"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                    className="group w-fit"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-white transition-all group-hover:w-full" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* SOCIALS */}
            <div className="flex flex-col items-center">
              <p className="mb-4 text-lg uppercase tracking-wider font-bold text-gray-300">
                Follow Us
              </p>

              <div className="flex justify-center gap-4 lg:flex-col lg:items-start">
                {[
                  {
                    icon: <FaInstagram className="h-7 w-7" />,
                    label: "Instagram",
                    url: "https://www.instagram.com/master_mediaa_/",
                  },
                  {
                    icon: <FaWhatsapp className="h-6 w-6" />,
                    label: "WhatsApp",
                    url: "https://wa.me/919026792973?text=Hi%20I%20want%20to%20know%20more%20about%20your%20services.",
                  },
                  {
                    icon: <FaFacebookF className="h-6 w-6" />,
                    label: "Facebook",
                    url: "https://www.facebook.com/people/Master-Mediaa/61577942753375/",
                  },
                  {
                    icon: <FaLinkedinIn className="h-6 w-6" />,
                    label: "LinkedIn",
                    url: "https://www.linkedin.com/company/mastermediaa/",
                  },
                ].map((item) => (
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item.label}
                    aria-label={item.label}
                    href={item.url || "/"}
                    className="flex h-11 w-11 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:bg-white/70 hover:text-primary-dark"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-8 flex flex-col gap-5 border-t border-white/15 pt-4 text-center sm:flex-row sm:items-center sm:justify-between">
          <span className="text-white/60">
            © {new Date().getFullYear()} Master Media. Built with ☕ & ideas.
          </span>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group mx-auto sm:mx-0 flex items-center gap-2 rounded-full border border-white/40 px-5 py-2 font-medium transition hover:bg-white hover:text-primary-dark"
          >
            Back to top
            <FaArrowUp className="transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
