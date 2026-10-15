// app/layout.tsx
import type { Metadata } from "next";
import {
  Raleway,
  Plus_Jakarta_Sans,
  Poppins,
  Tiro_Devanagari_Hindi,
} from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/siteConfig";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const tiroDeva = Tiro_Devanagari_Hindi({
  subsets: ["devanagari", "latin"],
  variable: "--font-tiro-deva",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.brandName} | ${SITE_CONFIG.tagline}`,
  description: "Consult India's top verified Vedic Astrologers, Tarot Readers, and Numerologists live.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${plusJakarta.variable} ${poppins.variable} ${tiroDeva.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}