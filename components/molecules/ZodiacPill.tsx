// components/molecules/ZodiacPill.tsx
import React from 'react';
import { ZodiacSign } from '@/config/siteConfig';

interface ZodiacPillProps {
  sign: ZodiacSign;
  redirectUrl?: string;
}

export default function ZodiacPill({
  sign,
  redirectUrl = '#download-app'
}: ZodiacPillProps) {
  return (
    <a
      href={redirectUrl}
      className="group relative flex flex-col items-center justify-center py-7 px-4 rounded-2xl bg-[#121212] border border-stone-800/80 hover:border-amber-400/60 hover:bg-[#161616] transition-all duration-200 cursor-pointer"
    >
      {/* Circular Zodiac Avatar Image */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={sign.image}
          alt={sign.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Zodiac Sign Name Only (No Dates) */}
      <h3 className="mt-4 text-base sm:text-lg font-bold text-[#ffffff] tracking-tight group-hover:text-amber-300 transition-colors">
        {sign.name}
      </h3>
    </a>
  );
}