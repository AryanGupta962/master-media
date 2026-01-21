import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Master Media",
    template: "%s | Master Media",
  },
  description:
    "Master Media is a creative digital agency delivering modern websites, branding, and digital solutions.",
  keywords: [
    "Master Media",
    "Digital Agency",
    "Web Development",
    "Branding",
    "UI UX Design",
  ],
  authors: [{ name: "Master Media" }],
  creator: "Master Media",
  metadataBase: new URL("https://mastermedia.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-white
          text-neutral-900
        `}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
