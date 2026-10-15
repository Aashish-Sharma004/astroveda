// layout/Navbar.tsx
'use client';
import React from 'react';
import { Wallet, User } from 'lucide-react';
import BrandLogo from '@/components/atoms/BrandLogo';
import Button from '@/components/atoms/Button';
import ThemeToggle from '@/components/atoms/ThemeToggle';

export default function Navbar({
  walletBalance,
  onRechargeClick
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

          <button
            onClick={onRechargeClick}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-amber-300 hover:border-amber-500/40 cursor-pointer"
          >
            <Wallet className="w-4 h-4 text-amber-400" />
            <span>₹{walletBalance}</span>
          </button>

          <Button variant="primary" size="sm">
            <User className="w-3.5 h-3.5" /> Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}