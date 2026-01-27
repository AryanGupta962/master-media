"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-primary-dark text-white font-sans">
      <div className="mx-auto max-w-[1600px] px-6 pt-10 pb-5">
        {/* TOP GRID */}
        <div className="flex gap-5 justify-between">
          {/* FUN / INTRO */}
          <div className="">
            <h3 className="mb-4 text-2xl font-bold leading-snug">
              Congrats! <br />
              You actually reached the footer.
            </h3>

            <div className="flex flex-col gap-5">
              <p className="text-base leading-relaxed text-white/75">
                That means you scrolled, explored, and didn&apos;t rage-quit.
                <br />
                We&apos;re mentally adding{" "}
                <strong className="text-white">10,000 steps</strong> to your
                fitness tracker. You&apos;re welcome 😌
              </p>

              {/* DESCRIPTION */}
              <p className="py-4 md:py-0 max-w-4xl text-base leading-relaxed text-white/70">
                Master Media is a digital & creative agency building brands
                people remember. We mix strategy, creativity, tech, and just the
                right amount of madness to help businesses grow online.
                <br />
                <span className="mt-2 pb-4 inline-block text-white/80">
                  If you&apos;re reading this, congratulations — you clearly
                  care about details. We like you already.
                </span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-16 ">
            {/* LINKS – COLUMN 1 */}
            <div>
              <p className="mb-4 text-lg uppercase tracking-wider font-bold text-gray-300">
                Company
              </p>
              <div className="flex flex-col gap-3 text-base font-medium">
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

            {/* LINKS – COLUMN 2 */}
            <div>
              <p className="mb-4 text-lg uppercase tracking-wider font-bold text-gray-300">
                Resources
              </p>
              <div className="flex flex-col gap-3 text-base font-medium">
                {["Awards", "Contact Us", "Privacy Policy"].map((item) => (
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
            <div>
              <p className="mb-4 text-lg uppercase tracking-wider font-bold text-gray-300">
                Follow Us
              </p>
              <div className="flex gap-4 lg:flex-col items-center">
                {[
                  {
                    icon: <FaInstagram className="h-7 w-7" />,
                    label: "Instagram",
                  },
                  {
                    icon: <FaXTwitter className="h-6 w-6" />,
                    label: "Twitter",
                  },
                  {
                    icon: <FaFacebookF className="h-6 w-6" />,
                    label: "Facebook",
                  },
                  {
                    icon: <FaLinkedinIn className="h-6 w-6" />,
                    label: "LinkedIn",
                  },
                ].map((item) => (
                  <Link
                    key={item.label}
                    aria-label={item.label}
                    href={"/"}
                    className="flex h-10 w-10 lg:h-12 lg:w-12 shadow-lg shadow-slate-500 items-center justify-center rounded-full text-black bg-white border border-white/30 transition-all hover:border-white hover:bg-white/50 hover:text-primary-dark"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-6 flex flex-col items-center justify-between gap-6 border-t border-white/15 pt-4 text-base sm:flex-row">
          <span className="text-white/60">
            © {new Date().getFullYear()} Master Media. Built with ☕ & ideas.
          </span>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 rounded-full border border-white/40 px-4.5 py-2 font-medium transition hover:bg-white hover:text-primary-dark"
          >
            Back to top
            <FaArrowUp className="transition-transform group-hover:-translate-y-0.7" />
          </button>
        </div>
      </div>
    </footer>
  );
}
