// components/atoms/BrandLogo.tsx
import React from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/config/siteConfig';

export default function BrandLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const iconSizes = { sm: 'w-8 h-8', md: 'w-10 h-10', lg: 'w-12 h-12' };
  const textSizes = { sm: 'text-lg', md: 'text-xl', lg: 'text-2xl' };

  const darkLogo = SITE_CONFIG.logoDarkUrl || SITE_CONFIG.logoUrl;
  const lightLogo = SITE_CONFIG.logoLightUrl || SITE_CONFIG.logoUrl;

  return (
    <Link href="/" className="flex items-center gap-3 group">
      {darkLogo && lightLogo ? (
        <>
          {/* 🌙 Dark Mode Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={darkLogo}
            alt={`${SITE_CONFIG.brandName} Dark Logo`}
            className={`theme-logo-dark ${iconSizes[size]} object-contain rounded-xl group-hover:scale-105 transition-transform`}
          />

          {/* ☀️ Light Mode Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightLogo}
            alt={`${SITE_CONFIG.brandName} Light Logo`}
            className={`theme-logo-light ${iconSizes[size]} object-contain rounded-xl group-hover:scale-105 transition-transform`}
          />
        </>
      ) : (
        <div
          className={`${iconSizes[size]} rounded-xl bg-linear-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform`}
        >
          <Sparkles className="w-5 h-5 text-slate-950 fill-slate-950" />
        </div>
      )}

      <div>
        <span className={`${textSizes[size]} font-bold tracking-tight text-white block leading-none`}>
          {SITE_CONFIG.brandName}
        </span>
        <span className="text-[11px] text-amber-400/80 font-medium tracking-wider uppercase">
          {SITE_CONFIG.tagline}
        </span>
      </div>
    </Link>
  );
}