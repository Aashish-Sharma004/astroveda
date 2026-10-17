// components/molecules/TestimonialCard.tsx
import React from 'react';
import { Star, Quote, CheckCircle2, MessageCircle, PhoneCall } from 'lucide-react';
import { Testimonial } from '@/config/siteConfig';

interface TestimonialCardProps {
  item: Testimonial;
}

export default function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#111214] border border-stone-800/90 hover:border-amber-500/50 p-6 transition-all duration-300 flex flex-col justify-between h-full group">
      {/* Subtle Top-Right Golden Radial Glow */}
      <div
        className="pointer-events-none absolute -top-14 -right-14 w-36 h-36 rounded-full opacity-25 group-hover:opacity-45 transition-opacity"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.35) 0%, transparent 70%)'
        }}
      />

      <div>
        {/* Top Row: Category Pill + 5-Star Rating */}
        <div className="flex items-center justify-between gap-2">
          <span className="px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs font-bold text-amber-300 tracking-wide">
            {item.category}
          </span>

          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>

        {/* High-Contrast Review Quote Text */}
        <div className="mt-5">
          <div className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-400 mb-3">
            <Quote className="w-4 h-4 fill-amber-400/20" />
          </div>
          <p className="text-sm sm:text-[15px] text-stone-100 font-medium leading-relaxed">
            &ldquo;{item.review}&rdquo;
          </p>
        </div>
      </div>

      {/* Bottom Row: User Info + Consulted Astrologer Strip */}
      <div className="mt-6 pt-4 border-t border-stone-800/80">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.avatar}
              alt={item.name}
              className="w-11 h-11 rounded-full object-cover border-2 border-amber-400/60 shrink-0"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              </div>
              <p className="text-xs text-stone-400 truncate mt-0.5">
                {item.location} • <span className="font-semibold text-amber-400">{item.zodiac}</span>
              </p>
            </div>
          </div>

          <span className="text-[11px] font-medium text-stone-400 shrink-0">{item.date}</span>
        </div>

        {/* Consulted Astrologer Tag (Works cleanly in both Dark & Light mode) */}
        <div className="mt-3.5 px-3.5 py-2 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-between text-xs">
          <span className="text-stone-400 font-medium">
            Consulted: <strong className="text-amber-400 font-bold">{item.consultedWith}</strong>
          </span>
          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold">
            {item.serviceType === 'Call' ? (
              <PhoneCall className="w-3.5 h-3.5" />
            ) : (
              <MessageCircle className="w-3.5 h-3.5" />
            )}
            Verified {item.serviceType}
          </span>
        </div>
      </div>
    </div>
  );
}