// layout/Navbar.tsx
'use client';
import React from 'react';
// Removed unused Wallet and User imports
import BrandLogo from '@/components/atoms/BrandLogo';
import Button from '@/components/atoms/Button';
import ThemeToggle from '@/components/atoms/ThemeToggle';

export default function Navbar({
  

}: {
  walletBalance: number;
  onRechargeClick: () => void;
}) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/85 border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-17 flex items-center justify-between">
        <BrandLogo size="md" />

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#astrologers" className="hover:text-amber-400 transition-colors">Chat with Astrologer</a>
          <a href="#horoscope" className="hover:text-amber-400 transition-colors">Daily Horoscope</a>
          <a href="#kundli" className="hover:text-amber-400 transition-colors">Free Kundli & Matching</a>
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* ☀️ / 🌙 Dark & Light Mode Switcher */}
          <ThemeToggle />

          <Button variant="primary" size="sm">
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}