// components/organisms/AppDownloadSection.tsx
'use client';

import React, { useState } from 'react';
import {

  CheckCircle2,
  Star,
  Download,
  QrCode,
  BellRing,
  ShieldCheck,
  PhoneCall,
  Send
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
    'Live 1-on-1 Voice & Video Calls with Zero Lag',
    'Daily Personalized Push Rashifal & Rahu Kaal Alerts',
    'App-Exclusive ₹100 Welcome Cashback in AstroWallet',
    '100% Private & Encrypted Chat History'
  ];

  return (
    <section id="download-app" className="py-14 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="keep-dark relative overflow-hidden rounded-4xl bg-linear-to-br from-[#121016] via-[#17131d] to-[#1f1610] border border-amber-500/30 p-6 sm:p-10 lg:p-14 shadow-2xl">
        {/* Ambient Golden Glow Orbs */}
        <div
          className="pointer-events-none absolute -top-28 -right-28 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.55) 0%, transparent 70%)'
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-28 -left-28 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(234, 88, 12, 0.45) 0%, transparent 70%)'
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT COLUMN: App Info, SMS Link Input, Store Buttons & QR (7 Cols) */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#ffffff] tracking-tight mt-4 leading-[1.15]">
              Carry Your Personal Vedic Astrologer in Your Pocket with the{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-amber-400 to-orange-400">
                {SITE_CONFIG.brandName} App
              </span>
            </h2>

            <p className="text-stone-300 text-sm sm:text-base mt-3 max-w-xl leading-relaxed">
              Experience faster consultations, instant Kundli matching, and real-time planetary transit alerts anytime, anywhere on iOS and Android.
            </p>

            {/* Feature Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {appFeatures.map((feat) => (
                <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Get App Link via SMS / WhatsApp */}
            <form onSubmit={handleSendLink} className="mt-7 max-w-md">
              <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300/90 mb-2">
                Get Download Link via SMS / WhatsApp
              </label>
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-stone-950/90 border border-stone-800 focus-within:border-amber-400">
                <span className="pl-3 text-xs font-bold text-stone-400 select-none">+91</span>
                <input
                  type="tel"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="Enter 10-digit mobile number"
                  className="w-full bg-transparent px-2 py-2 text-xs sm:text-sm text-[#ffffff] focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-linear-to-r from-amber-400 to-orange-500 text-stone-950 font-bold text-xs whitespace-nowrap hover:from-amber-300 hover:to-orange-400 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" /> Get Link
                </button>
              </div>
              {linkSent && (
                <p className="text-xs text-emerald-400 mt-2 font-medium">
                  ✓ App download link sent to your mobile number!
                </p>
              )}
            </form>

            {/* Store Badges + QR Code Box */}
            <div className="mt-8 pt-6 border-t border-stone-800/80 flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex flex-wrap gap-3">
                {/* Google Play Button */}
                <a
                  href={SITE_CONFIG.playStoreUrl || '#'}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-stone-950 hover:bg-stone-900 border border-stone-700 hover:border-amber-400/60 transition-all group"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-amber-400 shrink-0">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.986 1.986 0 0 1-.61-1.434V3.248c0-.56.233-1.07.609-1.434zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  <div className="text-left">
                    <span className="block text-[10px] uppercase tracking-wider text-stone-400 leading-none">
                      GET IT ON
                    </span>
                    <span className="text-sm font-bold text-[#ffffff] group-hover:text-amber-300 transition-colors">
                      Google Play
                    </span>
                  </div>
                </a>

                {/* Apple App Store Button */}
                <a
                  href={SITE_CONFIG.appStoreUrl || '#'}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-stone-950 hover:bg-stone-900 border border-stone-700 hover:border-amber-400/60 transition-all group"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-amber-400 shrink-0">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.33c.64-.78 1.08-1.86.96-2.94-.93.04-2.06.62-2.72 1.4-.58.68-1.1 1.79-.96 2.84 1.04.08 2.08-.52 2.72-1.3z" />
                  </svg>
                  <div className="text-left">
                    <span className="block text-[10px] uppercase tracking-wider text-stone-400 leading-none">
                      Download on the
                    </span>
                    <span className="text-sm font-bold text-[#ffffff] group-hover:text-amber-300 transition-colors">
                      App Store
                    </span>
                  </div>
                </a>
              </div>

              {/* Scan QR Code Mini Widget */}
              <div className="flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-stone-950/80 border border-stone-800">
                <div className="w-11 h-11 rounded-xl bg-[#ffffff] p-1.5 flex items-center justify-center shrink-0">
                  <QrCode className="w-full h-full text-stone-950" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#ffffff] block">Scan to Download</span>
                  <span className="text-[11px] text-amber-400">iOS & Android</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive 3D Phone Mockup Preview (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-70 sm:w-75">
              {/* Phone Frame */}
              <div className="relative rounded-[40px] bg-[#0b0a0e] border-[6px] border-stone-800 p-4 shadow-[0_0_70px_rgba(245,158,11,0.25)]">
                {/* Top Dynamic Island Notch */}
                <div className="w-24 h-4 bg-stone-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* App Header Inside Phone */}
                <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                  <div>
                    <span className="text-xs font-extrabold text-[#ffffff] block">
                      {SITE_CONFIG.brandName}
                    </span>
                    <span className="text-[10px] text-amber-400">● Live Consultation</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 text-[10px] font-bold">
                    ₹100 Free
                  </span>
                </div>

                {/* Simulated Live Astrologer Call Screen Inside Phone */}
                <div className="mt-4 p-3.5 rounded-2xl bg-stone-900/90 border border-stone-800 text-center">
                  <div className="relative w-16 h-16 mx-auto">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80"
                      alt="Acharya Ranjan"
                      className="w-16 h-16 rounded-full object-cover border-2 border-emerald-400"
                    />
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-stone-950" />
                  </div>
                  <h4 className="text-sm font-bold text-[#ffffff] mt-2">Acharya Ranjan</h4>
                  <p className="text-[11px] text-amber-300">Vedic & Marriage Expert</p>
                  <div className="mt-2 inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                    <PhoneCall className="w-3 h-3 animate-bounce" /> 04:18 Mins (Free Session)
                  </div>
                </div>

                {/* Simulated Daily Push Notification Inside Phone */}
                <div className="mt-3 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-2.5">
                  <BellRing className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-bold text-[#ffffff] block">
                      Today&apos;s Shubh Muhurat
                    </span>
                    <p className="text-[10px] text-stone-300 mt-0.5 leading-snug">
                      Abhijit Muhurat starts at 11:54 AM. Favorable for career & new ventures.
                    </p>
                  </div>
                </div>

                {/* App Rating Strip Inside Phone */}
                <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1 text-amber-400 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" /> 4.9 App Rating
                  </div>
                  <div className="flex items-center gap-1 text-stone-400">
                    <Download className="w-3.5 h-3.5 text-emerald-400" /> 1M+ Downloads
                  </div>
                </div>
              </div>

              {/* Floating Badge Outside Phone */}
              <div className="absolute -bottom-4 -left-4 sm:-left-8 px-4 py-2.5 rounded-2xl bg-stone-950 border border-amber-400/40 shadow-xl flex items-center gap-2.5">
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