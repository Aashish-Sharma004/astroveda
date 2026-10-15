// components/organisms/KundliSection.tsx
'use client';
import React, { useState } from 'react';
import Button from '@/components/atoms/Button';

export default function KundliSection() {
  const [name, setName] = useState('');
  const [generated, setGenerated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) setGenerated(true);
  };

  return (
    <section id="kundli" className="py-14 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Instant Computation</span>
          <h2 className="text-2xl font-bold text-white mt-1">Generate Free Janam Kundli</h2>
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <input
              type="text"
              required
              placeholder="Enter Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white"
            />
            <div className="grid grid-cols-2 gap-3">
              <input type="date" required className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white" />
              <input type="time" required className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white" />
            </div>
            <input
              type="text"
              required
              placeholder="Place of Birth (e.g., Jaipur, Rajasthan)"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white"
            />
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Generate Lagna Chart
            </Button>
          </form>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-center">
          <h3 className="text-base font-bold text-amber-400 mb-4">
            {generated ? `${name}'s North Indian Lagna Chart` : 'Sample North Indian Lagna Kundli'}
          </h3>
          <svg viewBox="0 0 200 200" className="w-64 h-64 mx-auto stroke-amber-400/70 fill-none stroke-[1.5]">
            <rect x="5" y="5" width="190" height="190" />
            <line x1="5" y1="5" x2="195" y2="195" />
            <line x1="195" y1="5" x2="5" y2="195" />
            <polygon points="100,5 195,100 100,195 5,100" />
            <text x="95" y="45" className="fill-amber-300 text-[10px] stroke-none font-bold">Su, Me</text>
            <text x="40" y="103" className="fill-white text-[10px] stroke-none">Mo</text>
            <text x="145" y="103" className="fill-emerald-400 text-[10px] stroke-none">Ju</text>
            <text x="95" y="160" className="fill-rose-400 text-[10px] stroke-none">Ma, Ve</text>
          </svg>
        </div>
      </div>
    </section>
  );
}