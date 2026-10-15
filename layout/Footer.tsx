// layout/Footer.tsx
import React from 'react';
import BrandLogo from '@/components/atoms/BrandLogo';
import { SITE_CONFIG } from '@/config/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <BrandLogo size="sm" />
          <p className="text-xs text-slate-400 mt-3 max-w-sm">
            100% Verified Vedic Astrologers, Tarot Readers, and Numerologists available 24/7 for private chat and call consultations.
          </p>
        </div>
        <div className="text-xs text-slate-400 space-y-1">
          <p>Support: <span className="text-amber-300">{SITE_CONFIG.supportPhone}</span></p>
          <p>Email: <span className="text-amber-300">{SITE_CONFIG.supportEmail}</span></p>
          <p className="text-slate-600 pt-2">© 2026 {SITE_CONFIG.brandName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}