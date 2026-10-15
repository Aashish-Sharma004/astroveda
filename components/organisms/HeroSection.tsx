// components/organisms/HeroSection.tsx
'use client';

import React from 'react';
import {
  MessageCircle,
  PhoneCall,
  Sparkles,
  Compass,
  HeartHandshake,
  ShieldCheck,
  Star,
  Users,
  ArrowUpRight,
  
} from 'lucide-react';
import Button from '@/components/atoms/Button';
import VideoBackground from '@/components/atoms/VideoBackground';
import { SITE_CONFIG } from '@/config/siteConfig';

export default function HeroSection() {
  const quickServices = [
    {
      title: 'Chat with Astrologer',
      desc: 'Instant live text session with remedies',
      badge: 'First 5m Free',
      icon: MessageCircle,
      href: '#astrologers'
    },
    {
      title: 'Talk to Astrologer',
      desc: '1-on-1 private voice call guidance',
      badge: '24/7 Live',
      icon: PhoneCall,
      href: '#astrologers'
    },
    {
      title: 'Free Janam Kundli',
      desc: 'Detailed Lagna, Navamsa & Dasha',
      badge: '100% Free',
      icon: Compass,
      href: '#kundli'
    },
    {
      title: 'Kundli Matching',
      desc: 'Ashtakoot 36 Gun Milan for marriage',
      badge: 'Vedic Report',
      icon: HeartHandshake,
      href: '#kundli'
    }
  ];

  const popularQuestions = [
    '💍 When will I get married?',
    '💼 Job change or promotion in 2026?',
    '❤️ Will my ex come back?',
    '📈 Business & wealth योग'
  ];

  const videoSrc = SITE_CONFIG.heroVideoUrl || '/hero-zodiac.mp4';

  return (
    <section className="relative overflow-hidden pt-6 pb-9 sm:pt-2 sm:pb-16 border-b border-stone-800/80 bg-[#070609]">
      {/* 1. Ambient Full-Bleed Cosmic Video Background (Reusable Atom) */}
      <VideoBackground
        src={videoSrc}
        videoClassName="w-full h-full object-cover scale-110 opacity-65 blur-[2px]"
        overlayClassName="bg-linear-to-r from-[#070609] via-[#070609]/85 to-[#070609]/60"
      />

      {/* Top Radial Golden Spotlight */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-187.5 h-95 rounded-full opacity-65 blur-2.5xl"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.45) 0%, transparent 65%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT COLUMN: Premium Content & CTAs (7 Cols) */}
          <div className="lg:col-span-7 text-left">
            {/* Live Pill Badge */}
            

            {/* Royal Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-[56px] font-bold text-[#ffffff] tracking-tight mt-4 leading-[1.12]">
              Decode Your Destiny with{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-amber-400 to-orange-500">
                Authentic Vedic
              </span>{' '}
              Astrologers
            </h1>

            <p className="text-stone-300 max-w-2xl mt-5 text-sm sm:text-base leading-relaxed">
              Get accurate predictions and time-tested Vedic remedies for Love, Marriage, Career, and Kundli Doshas from India&apos;s top 4-step verified Astrologers, Tarot Readers, and Numerologists.
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a href="#astrologers">
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-full shadow-xl shadow-amber-500/25 hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5" /> Chat with Astrologer
                </Button>
              </a>
              <a href="#astrologers">
                <Button
                  variant="secondary"
                  size="lg"
                  className="rounded-full bg-stone-900/90 border-amber-500/40 text-amber-200 hover:bg-stone-800"
                >
                  <PhoneCall className="w-5 h-5 text-amber-400" /> Talk to Astrologer
                </Button>
              </a>
            </div>

            {/* Instant Question Chips */}
            <div className="mt-7">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Ask our experts instantly:
              </p>
              <div className="flex flex-wrap gap-2">
                {popularQuestions.map((q) => (
                  <a
                    key={q}
                    href="#astrologers"
                    className="px-3.5 py-1.5 rounded-full bg-stone-900/80 hover:bg-amber-500/15 border border-stone-800 hover:border-amber-400/50 text-xs text-stone-300 hover:text-amber-200 transition-all"
                  >
                    {q}
                  </a>
                ))}
              </div>
            </div>

            {/* Trust Metrics Bar */}
            <div className="mt-9 pt-6 border-t border-stone-800/80 grid grid-cols-3 gap-4 max-w-lg">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 shrink-0">
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-white">4.9 / 5</div>
                  <div className="text-[11px] text-stone-400">Customer Rating</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-white">100% Private</div>
                  <div className="text-[11px] text-stone-400">Confidential Chat</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400 shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-white">2.5M+</div>
                  <div className="text-[11px] text-stone-400">Happy Users</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Centerpiece Zodiac Video Portal (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-102.5 lg:h-102.5 flex items-center justify-center">
              {/* Outer Pulsing Halo Ring */}
              <div className="absolute inset-0 rounded-full border border-amber-500/25 animate-pulse" />
              <div className="absolute -inset-3 rounded-full border border-dashed border-amber-400/20" />

              {/* Circular Video Frame showcasing the Spinning Zodiac Wheel */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-amber-400/50 shadow-[0_0_80px_rgba(245,158,11,0.35)] bg-black">
                <VideoBackground
                  src={videoSrc}
                  showOverlay={false}
                  className="w-full h-full"
                  videoClassName="w-full h-full object-cover scale-125"
                />
                {/* Subtle inner vignette so circular edges blend seamlessly */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-full"
                  style={{
                    boxShadow: 'inset 0 0 45px 18px rgba(7, 6, 9, 0.85)'
                  }}
                />
              </div>

             

              {/* Floating Glass Badge 2: Bottom-Right */}
              <div className="absolute -bottom-3 -right-2 sm:bottom-5 sm:-right-5 px-4 py-2.5 rounded-2xl bg-stone-950/90 border border-amber-500/30 backdrop-blur-md shadow-xl flex items-center gap-2.5">
                
                
              </div>
            </div>
          </div>
        </div>

        {/* 4 Premium Service Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {quickServices.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <a
                key={idx}
                href={srv.href}
                className="relative overflow-hidden p-5 rounded-2xl bg-[#111214]/90 backdrop-blur-md border border-stone-800/90 hover:border-amber-400/60 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-stone-950 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-stone-900 border border-stone-700 text-[10px] font-semibold text-amber-300">
                    {srv.badge}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-bold text-white text-base group-hover:text-amber-300 transition-colors">
                    {srv.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="text-xs text-stone-400 mt-1">{srv.desc}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}