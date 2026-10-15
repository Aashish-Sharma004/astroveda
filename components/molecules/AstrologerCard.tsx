// components/molecules/AstrologerCard.tsx
import React from 'react';
import { Star, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';
import { Astrologer } from '@/config/siteConfig';

interface AstrologerCardProps {
  astro: Astrologer;
  onConsult: (astro: Astrologer, mode: string) => void;
  variant?: 'slider' | 'grid'; // 'slider' shows Chat + Call; 'grid' shows full-width Chat now + strikethrough price
}

export default function AstrologerCard({
  astro,
  onConsult,
  variant = 'slider'
}: AstrologerCardProps) {
  const isOnline = astro.status === 'Online';

  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#111214] border border-stone-800/90 hover:border-amber-500/40 p-5 transition-all duration-300 flex flex-col justify-between group">
      {/* Subtle Top-Right Golden Radial Glow (Just like the video) */}
      <div
        className="pointer-events-none absolute -top-12 -right-12 w-36 h-36 rounded-full opacity-35 group-hover:opacity-55 transition-opacity"
        style={{
          background: 'radial-gradient(circle, rgba(217, 169, 78, 0.35) 0%, transparent 70%)'
        }}
      />

      <div>
        {/* Top Row: Avatar + Top-Right Ribbon Badge */}
        <div className="flex items-start justify-between gap-3">
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={astro.avatar}
              alt={astro.name}
              className={`w-16 h-16 rounded-full object-cover border-2 ${
                isOnline ? 'border-emerald-500' : 'border-rose-500'
              }`}
            />
          </div>

          {astro.badge && (
            <span
              className={`px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide ${
                astro.badge === 'Celebrity'
                  ? 'bg-[#5c3d1e] text-amber-200 border border-amber-500/30'
                  : 'bg-[#fef08a] text-stone-950 font-bold'
              }`}
            >
              {astro.badge}
            </span>
          )}
        </div>

        {/* Name + Verified Green Tick */}
        <div className="mt-4 flex items-center gap-1.5">
          <h3 className="text-lg font-bold text-white truncate">{astro.name}</h3>
          <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-500/20 shrink-0" />
        </div>

        {/* Skill Pills */}
        <div className="flex flex-wrap gap-1.5 mt-2.5">
          {astro.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-0.5 rounded-full bg-stone-900 border border-stone-800 text-[11px] text-stone-300 font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Languages & Experience */}
        <div className="mt-3.5 space-y-0.5 text-xs text-stone-400">
          <p className="truncate">{astro.languages.join(' · ')}</p>
          <p>{astro.exp} yrs exp</p>
        </div>
      </div>

      {/* Rating & Price Row */}
      <div className="mt-4 pt-3 border-t border-stone-800/80">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-stone-300">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-bold text-white">{astro.rating.toFixed(1)}</span>
            <span className="text-stone-600">|</span>
            <span className="text-stone-400">{astro.ordersLabel}</span>
          </div>

          <div className="text-right">
            {variant === 'grid' && astro.originalPrice && (
              <span className="block text-[11px] text-stone-500 line-through leading-none">
                ₹{astro.originalPrice}/min
              </span>
            )}
            <span className="text-base font-bold text-white">
              ₹{astro.price}
              <span className="text-xs font-normal text-stone-400">/min</span>
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        {variant === 'slider' ? (
          <div className="grid grid-cols-2 gap-2.5 mt-4">
            <button
              onClick={() => onConsult(astro, 'Chat')}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-full border border-emerald-500/70 text-emerald-400 hover:bg-emerald-500 hover:text-stone-950 text-xs font-semibold transition-all cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" /> Chat
            </button>
            <button
              onClick={() => onConsult(astro, 'Call')}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-full border border-emerald-500/70 text-emerald-400 hover:bg-emerald-500 hover:text-stone-950 text-xs font-semibold transition-all cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" /> Call
            </button>
          </div>
        ) : (
          <div className="mt-4">
            {isOnline ? (
              <button
                onClick={() => onConsult(astro, 'Chat')}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-emerald-500/80 text-emerald-400 hover:bg-emerald-500 hover:text-stone-950 text-xs font-semibold transition-all cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" /> Chat now
              </button>
            ) : (
              <button
                onClick={() => onConsult(astro, 'Waitlist')}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-rose-500/70 text-rose-400 hover:bg-rose-500/10 text-xs font-semibold transition-all cursor-pointer"
              >
                Wait ~ {astro.waitTime || '5m'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}