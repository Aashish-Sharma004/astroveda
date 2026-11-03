// components/atoms/BrandLogo.tsx
import React from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/config/siteConfig';

export default function BrandLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  // Horizontal logo ke liye height set ki hai aur width 'w-auto' rakhi hai taaki logo bada aur full-width dikhe
  const logoSizes = {
    sm: 'h-9 sm:h-11 w-auto max-w-[180px] sm:max-w-[210px]',
    md: 'h-10 sm:h-12 w-auto max-w-[200px] sm:max-w-[240px]',
    lg: 'h-12 sm:h-14 w-auto max-w-[230px] sm:max-w-[280px]'
  };

  const darkLogo = SITE_CONFIG.logoDarkUrl || SITE_CONFIG.logoUrl;
  const lightLogo = SITE_CONFIG.logoLightUrl || SITE_CONFIG.logoUrl;

  return (
    <Link href="/" className="inline-flex items-center shrink-0 group">
      {darkLogo && lightLogo ? (
        <>
          {/* 🌙 Dark Mode Horizontal Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={darkLogo}
            alt={SITE_CONFIG.brandName}
            className={`theme-logo-dark ${logoSizes[size]} object-contain object-left group-hover:scale-[1.02] transition-transform`}
          />

          {/* ☀️ Light Mode Horizontal Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightLogo}
            alt={SITE_CONFIG.brandName}
            className={`theme-logo-light ${logoSizes[size]} object-contain object-left group-hover:scale-[1.02] transition-transform`}
          />
        </>
      ) : (
        <div className="h-11 px-4 rounded-xl bg-linear-to-br from-amber-400 to-orange-600 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
          <Sparkles className="w-5 h-5 text-slate-950 fill-slate-950" />
          <span className="text-lg font-extrabold text-slate-950 tracking-tight">
            {SITE_CONFIG.brandName}
          </span>
        </div>
      )}
    </Link>
  );
}