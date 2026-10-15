// components/molecules/ZodiacPill.tsx
import React from 'react';
import { ZodiacSign } from '@/config/siteConfig';

interface ZodiacPillProps {
  sign: ZodiacSign;
  active: boolean;
  onClick: () => void;
}

export default function ZodiacPill({ sign, active, onClick }: ZodiacPillProps) {
  return (
    <button
      onClick={onClick}
      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
        active
          ? 'bg-linear-to-br from-amber-500/20 to-orange-500/10 border-amber-400 shadow-lg shadow-amber-500/10'
          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
      }`}
    >
      <div className="text-2xl mb-1">{sign.symbol}</div>
      <div className="font-bold text-sm text-white">{sign.name}</div>
      <div className="text-xs text-amber-400/80">{sign.hindi}</div>
    </button>
  );
}