// components/organisms/AppDownloadSection.tsx
'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  Star,
  Download,
  QrCode,
  BellRing,
  ShieldCheck,
  PhoneCall,
  Send,
  MessageCircle,
  Zap,
  Lock,
  Gift
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/siteConfig';

export default function AppDownloadSection() {
  const [phone, setPhone] = useState('');
  const [linkSent, setLinkSent] = useState(false);

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim().length >= 10) {
      setLinkSent(true);
      setTimeout(() => {
        setPhone('');
      }, 4000);
    }
  };

  const appFeatures = [
    {
      icon: Zap,
      title: 'Zero-Lag HD Calls',
      desc: '1-on-1 private voice & chat sessions'
    },
    {
      icon: BellRing,
      title: 'Daily Muhurat Alerts',
      desc: 'Personalized Rashifal & Rahu Kaal'
    },
    {
      icon: Gift,
      title: '₹100 Welcome Bonus',
      desc: 'Instant cashback in AstroWallet'
    },
    {
      icon: Lock,
      title: '100% Confidential',
      desc: 'End-to-end encrypted consultations'
    }
  ];

  return (
    <section id="download-app" className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Main Container: Adapts automatically to Dark Mode (#111214) & Light Mode (Warm White/Gold) */}
      <div className="relative overflow-hidden rounded-4xl bg-[#111214] border border-stone-800/90 p-6 sm:p-10 lg:p-14 shadow-2xl transition-colors duration-300">
        {/* Ambient Golden Glow Orbs */}
        <div
          className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-25 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.5) 0%, transparent 70%)'
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(234, 88, 12, 0.4) 0%, transparent 70%)'
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* =========================================================
             LEFT COLUMN: App Info, Bento Features, SMS Input & Stores (7 Cols)
             ========================================================= */}
          <div className="lg:col-span-7">
            {/* Top Promo Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{SITE_CONFIG.appBonusText || 'Get ₹100 Instant Bonus on App Install'}</span>
            </div>

            {/* Responsive Premium Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight mt-4 leading-[1.15]">
              Carry Your Personal Vedic Astrologer in Your Pocket with{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-amber-500 to-orange-500">
                {SITE_CONFIG.brandName} App
              </span>
            </h2>

            <p className="text-stone-300 text-sm sm:text-base mt-3.5 max-w-xl leading-relaxed">
              Experience instant Kundli matching, live Planetary Transit notifications, and 24/7 private consultations with India&apos;s top verified Acharyas on iOS and Android.
            </p>

            {/* 2x2 Bento Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-7">
              {appFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#141518] border border-stone-800/80 hover:border-amber-500/40 transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-white">{feat.title}</h3>
                      <p className="text-[11px] sm:text-xs text-stone-400 mt-0.5">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Get App Link via SMS / WhatsApp */}
            <form onSubmit={handleSendLink} className="mt-7 max-w-lg">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                Get Instant Download Link via SMS / WhatsApp
              </label>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-1.5 rounded-2xl bg-[#141518] border border-stone-800 focus-within:border-amber-400 transition-colors">
                <div className="flex items-center flex-1 px-2">
                  <span className="pl-2 pr-2 text-xs sm:text-sm font-bold text-amber-400 border-r border-stone-800 select-none">
                    +91
                  </span>
                  <input
                    type="tel"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm text-white placeholder:text-stone-400 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-linear-to-r from-amber-400 to-orange-500 text-stone-950 font-bold text-xs sm:text-sm whitespace-nowrap hover:from-amber-300 hover:to-orange-400 transition-all cursor-pointer shadow-md shadow-amber-500/20"
                >
                  <Send className="w-3.5 h-3.5" /> Send App Link
                </button>
              </div>
              {linkSent && (
                <p className="flex items-center gap-1.5 text-xs text-emerald-400 mt-2 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> App download link sent to your mobile number!
                </p>
              )}
            </form>

            {/* Store Badges + QR Code Scanner Strip */}
            <div className="mt-8 pt-6 border-t border-stone-800/80 flex flex-wrap items-center gap-4">
              {/* Google Play Store Button (Always crisp dark badge) */}
              <a
                href={SITE_CONFIG.playStoreUrl || '#'}
                className="keep-dark flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0b0a0e] hover:bg-stone-900 border border-stone-700/80 hover:border-amber-400 transition-all group shadow-md"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-amber-400 shrink-0">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.986 1.986 0 0 1-.61-1.434V3.248c0-.56.233-1.07.609-1.434zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-wider text-stone-300 leading-none">
                    GET IT ON
                  </span>
                  <span className="text-sm font-bold text-[#ffffff] group-hover:text-amber-300 transition-colors">
                    Google Play
                  </span>
                </div>
              </a>

              {/* Apple App Store Button (Always crisp dark badge) */}
              <a
                href={SITE_CONFIG.appStoreUrl || '#'}
                className="keep-dark flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0b0a0e] hover:bg-stone-900 border border-stone-700/80 hover:border-amber-400 transition-all group shadow-md"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-amber-400 shrink-0">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.33c.64-.78 1.08-1.86.96-2.94-.93.04-2.06.62-2.72 1.4-.58.68-1.1 1.79-.96 2.84 1.04.08 2.08-.52 2.72-1.3z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-wider text-stone-300 leading-none">
                    Download on the
                  </span>
                  <span className="text-sm font-bold text-[#ffffff] group-hover:text-amber-300 transition-colors">
                    App Store
                  </span>
                </div>
              </a>

              {/* QR Code Scanner Box (Adapts to Light & Dark Mode) */}
              <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-[#141518] border border-stone-800">
                <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-500/30 p-1.5 flex items-center justify-center shrink-0">
                  <QrCode className="w-full h-full text-amber-400" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Scan QR Code</span>
                  <span className="text-[11px] text-amber-400 font-medium">Instant Install</span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
             RIGHT COLUMN: Realistic 3D Smartphone App UI Showcase (5 Cols)
             ========================================================= */}
          <div className="lg:col-span-5 flex justify-center">
            {/* keep-dark ensures the inside of the phone screen always looks like a sleek dark mobile app */}
            <div className="keep-dark relative w-72 sm:w-80">
              {/* Outer Golden Halo behind phone */}
              <div
                className="pointer-events-none absolute -inset-4 rounded-[48px] opacity-40 blur-2xl"
                style={{
                  background: 'radial-gradient(circle, rgba(245, 158, 11, 0.45) 0%, transparent 70%)'
                }}
              />

              {/* Phone Hardware Bezel */}
              <div className="relative rounded-[44px] bg-[#09080c] border-[7px] border-[#26232d] p-4 shadow-2xl">
                {/* Dynamic Island Notch */}
                <div className="w-28 h-5 bg-[#15131a] rounded-full mx-auto mb-4 flex items-center justify-between px-3 border border-stone-800/70">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] font-semibold text-stone-300 tracking-wider uppercase">
                    Live Call
                  </span>
                </div>

                {/* App Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-stone-800/80">
                  <div>
                    <span className="text-xs font-extrabold text-[#ffffff] block">
                      {SITE_CONFIG.brandName}
                    </span>
                    <span className="text-[10px] text-amber-400 font-medium">
                      ● Vedic Guidance Active
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[10px] font-bold">
                    Wallet: ₹100
                  </span>
                </div>

                {/* Active Astrologer Consultation Card Inside Phone */}
                <div className="mt-3.5 p-4 rounded-3xl bg-linear-to-b from-[#17151f] to-[#111017] border border-stone-800 text-center">
                  <div className="relative w-16 h-16 mx-auto">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80"
                      alt="Acharya Ranjan"
                      className="w-16 h-16 rounded-full object-cover border-2 border-emerald-400 shadow-lg"
                    />
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#111017]" />
                  </div>

                  <div className="mt-2.5 flex items-center justify-center gap-1">
                    <h4 className="text-sm font-bold text-[#ffffff]">Acharya Ranjan</h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <p className="text-[11px] text-amber-300">Vedic, Kundli & Marriage</p>

                  {/* Live Call Timer Pill */}
                  <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 rounded-full">
                    <PhoneCall className="w-3 h-3 animate-bounce" /> 04:18 Mins • Free Session
                  </div>

                  {/* Quick In-App Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 mt-3.5">
                    <div className="py-1.5 px-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold flex items-center justify-center gap-1">
                      <MessageCircle className="w-3 h-3" /> Remedies
                    </div>
                    <div className="py-1.5 px-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-bold flex items-center justify-center gap-1">
                      <Sparkles className="w-3 h-3" /> Kundli Chart
                    </div>
                  </div>
                </div>

                {/* Daily Shubh Muhurat Push Notification Card */}
                <div className="mt-3 p-3 rounded-2xl bg-[#16141c] border border-amber-500/30 flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <BellRing className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#ffffff] block">
                      Today&apos;s Shubh Muhurat
                    </span>
                    <p className="text-[10px] text-stone-300 mt-0.5 leading-snug">
                      Abhijit Muhurat starts at 11:54 AM. Favorable for career & new ventures.
                    </p>
                  </div>
                </div>

                {/* App Rating Footer Bar Inside Phone */}
                <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1 text-amber-400 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" /> 4.9 ★ Rating
                  </div>
                  <div className="flex items-center gap-1 text-stone-300 font-medium">
                    <Download className="w-3.5 h-3.5 text-emerald-400" /> 1M+ Installs
                  </div>
                </div>
              </div>

              {/* Floating Glass Badge 1: Bottom-Left */}
              <div className="absolute -bottom-4 -left-3 sm:-left-7 px-3.5 py-2.5 rounded-2xl bg-[#121117]/95 border border-amber-400/50 backdrop-blur-md shadow-xl flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-[#ffffff] block leading-none">
                    100% Verified App
                  </span>
                  <span className="text-[10px] text-amber-300">Safe & Private Payments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}