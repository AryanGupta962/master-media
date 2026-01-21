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
    <footer className="relative bg-yellow-400 text-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Top Grid */}
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr_1fr_auto]">
          {/* Fun Section */}
          <div className="max-w-md">
            <div className="mb-6 text-2xl font-bold leading-snug">
              🎉 Congrats! <br />
              You actually reached the footer.
            </div>

            <p className="text-sm leading-relaxed text-black/80">
              That means you scrolled, explored, and didn’t rage-quit.
              <br />
              As a reward, we’re mentally adding <strong>
                10,000 steps
              </strong>{" "}
              to your fitness tracker. You’re welcome 😌
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="space-y-4  space-x-4 text-sm font-medium">
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <Link href="/work" className="hover:underline">
              Our Work
            </Link>
            <Link href="/clients" className="hover:underline">
              Clients
            </Link>
            <Link href="/team" className="hover:underline">
              Our Team
            </Link>
          </div>

          {/* Links Column 2 */}
          <div className="space-y-4 text-sm font-medium space-x-4">
            <Link href="/awards" className="hover:underline">
              Awards
            </Link>
            <Link href="/careers" className="hover:underline">
              Careers
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact Us
            </Link>
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col gap-5 text-xl">
            <a
              aria-label="Instagram"
              href="#"
              className="hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
            <a
              aria-label="Twitter"
              href="#"
              className="hover:scale-110 transition"
            >
              <FaXTwitter />
            </a>
            <a
              aria-label="Facebook"
              href="#"
              className="hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>
            <a
              aria-label="LinkedIn"
              href="#"
              className="hover:scale-110 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="mt-14 max-w-5xl text-sm leading-relaxed text-black/80">
          Master Media is a full-stack digital & creative agency building brands
          that people remember. We mix strategy, creativity, tech, and just the
          right amount of madness to help businesses grow online.
          <br />
          If you’re reading this, congratulations — you clearly care about
          details. We like you already.
        </p>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-black/20 pt-6 text-xs md:flex-row">
          <span>
            © {new Date().getFullYear()} Master Media. Built with ☕ & ideas.
          </span>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 rounded-full border border-black px-4 py-2 font-medium hover:bg-black hover:text-yellow-400 transition"
          >
            Back to top <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
