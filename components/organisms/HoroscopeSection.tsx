// components/organisms/HoroscopeSection.tsx
import React from 'react';
import { ZODIAC_SIGNS } from '@/config/siteConfig';
import ZodiacPill from '@/components/molecules/ZodiacPill';

export default function HoroscopeSection() {
  return (
    <section id="horoscope" className="py-16 bg-[#0b0a09] border-y border-stone-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Clean Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#ffffff] tracking-tight">
            Choose your sign
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1.5">
            Select your zodiac sign to check your daily horoscope on our app.
          </p>
        </div>

        {/* 12 Zodiac Signs Grid (Clicking any card scrolls directly to #download-app) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {ZODIAC_SIGNS.map((sign) => (
            <ZodiacPill
              key={sign.name}
              sign={sign}
              redirectUrl="#download-app"
            />
          ))}
        </div>
      </div>
    </section>
  );
}