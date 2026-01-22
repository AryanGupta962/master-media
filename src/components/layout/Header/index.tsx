"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX, useEffect, useState } from "react";
import {
  FaInfoCircle,
  FaServicestack,
  FaBriefcase,
  FaRocket,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

type NavItem = {
  label: string;
  href: string;
  icon: JSX.Element;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", icon: <FaInfoCircle /> },
  { label: "Services", href: "/services", icon: <FaServicestack /> },
  { label: "Our Work", href: "/work", icon: <FaBriefcase /> },
  { label: "Careers", href: "/careers", icon: <FaRocket /> },
  { label: "Contact Us", href: "/contact", icon: <FaEnvelope /> },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-white"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link href="/" className="relative w-30 h-16">
            <Image
              src="/icons/master-media-logo.webp"
              alt="Master Media Logo"
              fill
              className="object-cover"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex items-center gap-2 text-sm font-medium transition ${
                    active ? "text-black" : "text-gray-600"
                  } hover:text-black`}
                >
                  <span
                    className={`transition-all duration-300 ${
                      active
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}
                  >
                    {item.icon}
                  </span>

                  <span>{item.label}</span>

                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-yellow-400 transition-transform duration-300 ${
                      active ? "scale-x-100" : "group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <button onClick={() => setOpen(true)} className="lg:hidden text-2xl">
            <FaBars />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[280px] bg-white p-6 shadow-lg transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setOpen(false)} className="text-xl">
            <FaTimes />
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-5">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 text-sm font-medium ${
                  active ? "text-black" : "text-gray-600"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="h-16" />
    </>
  );
}
