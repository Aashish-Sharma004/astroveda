// components/organisms/AboutUsContent.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG, ASTROLOGERS } from '@/config/siteConfig';

export default function AboutUsContent() {
  // Top 4 astrologers for the bottom showcase grid
  const featuredAstrologers = ASTROLOGERS.slice(0, 4);

  const galleryPhotos = [
    {
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
      alt: 'Team collaboration'
    },
    {
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80',
      alt: 'Product & astrology research'
    },
    {
      src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=80',
      alt: 'Customer support & operations'
    }
  ];

  return (
    <div className="relative overflow-hidden pb-16">
      {/* Subtle Zodiac Wheel Watermark in Background (Right Side, just like video) */}
      <div className="pointer-events-none fixed right-45 top-1/3 w-130 h-130 opacity-[0.06] z-0">
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-amber-500 fill-none stroke-[0.8]">
          <circle cx="100" cy="100" r="95" />
          <circle cx="100" cy="100" r="75" />
          <circle cx="100" cy="100" r="35" />
          <line x1="5" y1="100" x2="195" y2="100" />
          <line x1="100" y1="5" x2="100" y2="195" />
          <line x1="33" y1="33" x2="167" y2="167" />
          <line x1="167" y1="33" x2="33" y2="167" />
        </svg>
      </div>

      {/* =========================================================
          1. TOP TEAM GROUP BANNER + OVERLAPPING 3-COLUMN STATS CARD
         ========================================================= */}
      <section className="relative z-10">
        <div className="w-full h-75 sm:h-105 lg:h-120 overflow-hidden bg-stone-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&auto=format&fit=crop&q=85"
            alt={`${SITE_CONFIG.brandName} Team`}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Overlapping Floating Card */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-16 sm:-mt-20 relative z-20">
          <div className="rounded-3xl bg-[#111214] border border-stone-800/90 shadow-xl py-8 px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-stone-800 text-center">
            <div className="py-3 sm:py-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">2.5 Million+</div>
              <div className="text-xs sm:text-sm text-stone-400 mt-1">Happy Seekers</div>
            </div>
            <div className="py-3 sm:py-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">1,500+</div>
              <div className="text-xs sm:text-sm text-stone-400 mt-1">Verified Astrologers</div>
            </div>
            <div className="py-3 sm:py-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">45+</div>
              <div className="text-xs sm:text-sm text-stone-400 mt-1">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. WHO WE ARE (Centered Heading + 2 Clean Paragraphs)
         ========================================================= */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 text-center">
        <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-white">
          WHO WE ARE
        </h2>

        <div className="mt-6 space-y-5 text-sm sm:text-base text-stone-300 leading-relaxed">
          <p>
            {SITE_CONFIG.brandName} is a premier online platform for authentic Vedic astrology predictions and spiritual guidance. With a curated network of verified Vedic Acharyas, Tarot readers, Numerologists, and Vastu specialists, {SITE_CONFIG.brandName} lets you connect directly with seasoned experts over live chat and voice call to find clear answers to your life questions.
          </p>
          <p>
            From detailed Janam Kundli matching to accurate planetary dasha readings, visitors rely on {SITE_CONFIG.brandName} for reliable guidance across Marriage, Love, Career, Business, and Health. Every consultation is backed by time-tested Jyotish principles designed to bring peace of mind and actionable clarity.
          </p>
        </div>
      </section>

      {/* =========================================================
          3. MISSION & VISION (2 Rounded Cards with Generous Spacing)
         ========================================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Mission Card */}
          <div className="rounded-3xl bg-[#111214] border border-stone-800/90 shadow-lg p-8 sm:p-10 text-center">
            <h3 className="text-lg sm:text-xl font-extrabold uppercase tracking-wider text-white">
              MISSION
            </h3>
            <p className="mt-4 text-sm sm:text-base text-stone-300 leading-relaxed">
              Our mission is to build a supportive, fear-free community for individuals seeking authentic astrological guidance for the betterment of their lives. We aim to stand beside people going through uncertain phases and offer them honest direction in the most trusted way.
            </p>
          </div>

          {/* Vision Card */}
          <div className="rounded-3xl bg-[#111214] border border-stone-800/90 shadow-lg p-8 sm:p-10 text-center">
            <h3 className="text-lg sm:text-xl font-extrabold uppercase tracking-wider text-white">
              VISION
            </h3>
            <p className="mt-4 text-sm sm:text-base text-stone-300 leading-relaxed">
              Our vision is to deliver dependable Vedic and spiritual solutions to seekers facing crucial life crossroads. We strive to illuminate their path forward with the assistance of our 4-step verified, empathetic, and certified Acharyas.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. WE GOT YOUR BACK (Left Text + Right Office Image)
         ========================================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-white">
              WE GOT YOUR BACK
            </h2>
            <p className="mt-5 text-sm sm:text-base text-stone-300 leading-relaxed">
              Over 1,500+ dedicated astrologers and our in-house support team work together as one family to ensure a seamless consultation experience. Whether you are a student wondering which career stream to pursue or a couple navigating marriage compatibility, {SITE_CONFIG.brandName} helps everyone find genuine direction, confidence, and harmony in life.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-stone-800/80 shadow-xl h-65 sm:h-80">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&auto=format&fit=crop&q=80"
                alt="Team working together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. OUR STORY (Centered Narrative)
         ========================================================= */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 text-center">
        <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-white">
          OUR STORY
        </h2>
        <p className="mt-5 text-sm sm:text-base text-stone-300 leading-relaxed">
          {SITE_CONFIG.brandName} came into being with an aim to preserve the purity of traditional Vedic astrology while blending it with modern digital convenience to address real-world challenges like career stress, relationship doubts, and emotional well-being. With that foundational goal, our team has worked tirelessly to bring verified Acharyas onto a single transparent platform—touching every aspect of mental clarity through authentic spiritual wisdom.
        </p>
      </section>

      {/* =========================================================
          6. WHY BRAND_NAME (Full-Width Yellow Banner like Video)
         ========================================================= */}
      <section className="relative z-10 mt-20 sm:mt-24 bg-[#f5df4d] py-14 sm:py-16 px-4 sm:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-stone-950">
            WHY {SITE_CONFIG.brandName.toUpperCase()}
          </h2>
          <p className="mt-5 text-sm sm:text-base text-stone-900 font-medium leading-relaxed">
            {SITE_CONFIG.brandName} serves a growing community across 45+ countries with a vetted network of top Vedic astrologers, Tarot readers, Numerologists, and Vastu experts. Because every seeker deserves accurate predictions, we allow users to rate every session and highlight experts who consistently maintain a 4.8+ star rating. Alongside accuracy, protecting your 100% privacy and confidentiality remains our highest commitment.
          </p>
        </div>
      </section>

      {/* =========================================================
          7. LIFE AT BRAND_NAME (3-Photo Row)
         ========================================================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 text-center">
        <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-white mb-10">
          LIFE AT {SITE_CONFIG.brandName.toUpperCase()}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {galleryPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden border border-stone-800/80 h-56 sm:h-64 shadow-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          8. OUR ASTROLOGERS (Yellow Banner + 4 Clean Profile Cards)
         ========================================================= */}
      <section className="relative z-10 mt-20 sm:mt-24 bg-[#f5df4d] py-14 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-stone-950">
            OUR ASTROLOGERS
          </h2>
          <p className="text-sm sm:text-base font-medium text-stone-800 mt-1">
            1,500+ Best Astrologers from India for Online Consultation
          </p>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {featuredAstrologers.map((astro, index) => (
              <Link
                key={`${astro.id}-${index}`}
                href="/#astrologers"
                className="rounded-2xl bg-[#111214] border border-stone-800/80 p-7 flex flex-col items-center text-center shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-amber-400 shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={astro.avatar}
                    alt={astro.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-base font-bold text-white">{astro.name}</h3>
                <p className="text-xs text-stone-400 mt-1">{astro.skills[0]} Astrology</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}