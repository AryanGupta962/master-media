import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
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
  manifest: "/manifest.json",
  themeColor: "#9e00fe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${montserrat.variable}
          antialiased
        `}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
