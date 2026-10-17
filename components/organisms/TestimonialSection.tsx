// components/organisms/TestimonialSection.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, ShieldCheck, Users } from 'lucide-react';
import {
  TESTIMONIALS,
  Testimonial,
  getTestimonialsList,
  SITE_CONFIG
} from '@/config/siteConfig';
import TestimonialCard from '@/components/molecules/TestimonialCard';

const FILTER_TABS = [
  'All',
  'Marriage & Love',
  'Career & Abroad',
  'Kundli & Vastu',
  'Business'
];

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS);
  const [activeTab, setActiveTab] = useState('All');
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getTestimonialsList().then((data) => {
      setTestimonials(data);
    });
  }, []);

  const filtered = testimonials.filter(
    (t) => activeTab === 'All' || t.category === activeTab
  );

  const scrollSlider = (dir: 'left' | 'right') => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: dir === 'left' ? -360 : 360,
      behavior: 'smooth'
    });
  };

  return (
    <section id="testimonials" className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Top Header + Slider Arrows */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Real Stories • Real Transformations
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-1">
            Loved by <span className="text-amber-400">2.5 Million+</span> Seekers
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-2 max-w-2xl leading-relaxed">
            See how authentic Vedic guidance and simple remedies from {SITE_CONFIG.brandName} experts helped people overcome life&apos;s biggest hurdles.
          </p>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center gap-2 self-start md:self-end">
          <button
            onClick={() => scrollSlider('left')}
            aria-label="Previous testimonial"
            className="p-2.5 rounded-full bg-stone-900 border border-stone-800 text-stone-300 hover:border-amber-500/50 cursor-pointer transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollSlider('right')}
            aria-label="Next testimonial"
            className="p-2.5 rounded-full bg-stone-900 border border-stone-800 text-stone-300 hover:border-amber-500/50 cursor-pointer transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Category Filter Pills + Overall Rating Strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-linear-to-r from-amber-400 to-orange-500 text-stone-950 shadow-md shadow-amber-500/20'
                  : 'bg-[#141518] text-stone-300 border border-stone-800 hover:border-amber-400/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Mini Trust Pill */}
        <div className="hidden lg:flex items-center gap-4 px-4 py-2 rounded-full bg-[#111214] border border-stone-800 text-xs text-stone-300">
          <span className="flex items-center gap-1 font-bold text-white">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> 4.9/5 Average Rating
          </span>
          <span className="text-stone-400">|</span>
          <span className="flex items-center gap-1 font-semibold text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" /> 100% Verified Reviews
          </span>
          <span className="text-stone-400">|</span>
          <span className="flex items-center gap-1 font-semibold text-amber-400">
            <Users className="w-3.5 h-3.5" /> 98% Satisfaction
          </span>
        </div>
      </div>

      {/* Horizontal Scrollable Cards */}
      <div
        ref={sliderRef}
        className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none"
        style={{ scrollbarWidth: 'none' }}
      >
        {filtered.map((item) => (
          <div
            key={item.id}
            className="min-w-75 sm:min-w-87.5 lg:min-w-95 snap-start"
          >
            <TestimonialCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}