// layout/Navbar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BrandLogo from '@/components/atoms/BrandLogo';
import Button from '@/components/atoms/Button';
import ThemeToggle from '@/components/atoms/ThemeToggle';

interface NavbarProps {
  walletBalance?: number;
  onRechargeClick?: () => void;
}

export default function Navbar(_props: NavbarProps) {
  void _props;
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/85 dark:bg-slate-950/85 border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-17 flex items-center justify-between">
        <BrandLogo size="md" />

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700 dark:text-slate-300">
          <Link
            href="/"
            className={`hover:text-amber-500 dark:hover:text-amber-400 transition-colors ${
              pathname === '/' ? 'text-amber-600 dark:text-amber-400 font-semibold' : ''
            }`}
          >
            Home
          </Link>
          <Link href="/#astrologers" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
            Chat with Astrologer
          </Link>
          <Link href="/#horoscope" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
            Daily Horoscope
          </Link>
          <Link href="/#kundli" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
            Free Kundli &amp; Matching
          </Link>
          <Link
            href="/about-us"
            className={`hover:text-amber-500 dark:hover:text-amber-400 transition-colors ${
              pathname === '/about-us' ? 'text-amber-600 dark:text-amber-400 font-semibold' : ''
            }`}
          >
            About Us
          </Link>
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* ☀️ / 🌙 Dark & Light Mode Switcher */}
          <ThemeToggle />

          <Link href="/#download-app">
            <Button variant="primary" size="sm">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}