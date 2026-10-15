// components/organisms/HoroscopeSection.tsx
'use client';
import React, { useState } from 'react';
import { ZODIAC_SIGNS } from '@/config/siteConfig';
import ZodiacPill from '@/components/molecules/ZodiacPill';
import Badge from '@/components/atoms/Badge';

export default function HoroscopeSection() {
  const [activeSign, setActiveSign] = useState(ZODIAC_SIGNS[0]);

  return (
    <section id="horoscope" className="py-14 bg-slate-900/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Daily Rashifal</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-8">Today&apos;s Vedic Horoscope</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 grid grid-cols-3 gap-3">
            {ZODIAC_SIGNS.map((sign) => (
              <ZodiacPill
                key={sign.name}
                sign={sign}
                active={activeSign.name === sign.name}
                onClick={() => setActiveSign(sign)}
              />
            ))}
          </div>

          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{activeSign.symbol}</span>
                <div>
                  <h3 className="text-xl font-bold text-white">{activeSign.name} ({activeSign.hindi})</h3>
                  <p className="text-xs text-slate-400">{activeSign.dates} • Element: {activeSign.element}</p>
                </div>
              </div>
              <Badge color="amber">Lucky No: {activeSign.luckyNum}</Badge>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-5">
              {activeSign.prediction}
            </p>

            <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <span className="text-xs font-bold uppercase text-amber-400 block">Vedic Remedy (Upay)</span>
              <p className="text-xs sm:text-sm text-amber-100 mt-1">{activeSign.remedy}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}