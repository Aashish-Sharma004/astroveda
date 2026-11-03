// app/layout.tsx
import type { Metadata } from "next";
import {
  Ubuntu,
  Raleway,
  Plus_Jakarta_Sans,
  Poppins,
  Tiro_Devanagari_Hindi,
} from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/siteConfig";

// 👇 Exact Logo Font (Ubuntu)
const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["400", "500", "700"],
  display: "swap",
});

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
  description:
    "Consult India's top verified Vedic Astrologers, Tarot Readers, and Numerologists live.",
  // 👇 Favicon और Manifest सेटअप यहाँ जोड़ा गया है:
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ubuntu.variable} ${raleway.variable} ${plusJakarta.variable} ${poppins.variable} ${tiroDeva.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}