// components/organisms/AstrologerDirectory.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  ArrowRight,
  ArrowLeft,
  ArrowUpDown,
  Flame,
  CheckCircle2,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { ASTROLOGERS, Astrologer, getAstrologersList } from '@/config/siteConfig';
import AstrologerCard from '@/components/molecules/AstrologerCard';

const CATEGORIES = ['All', 'Love', 'Education', 'Career', 'Marriage', 'Vedic', 'Tarot', 'Numerology'];

export default function AstrologerDirectory({
  onConsult
}: {
  onConsult: (astro: Astrologer, mode: string) => void;
}) {
  // Data state (Initialized with demo data, easily replaceable with backend API)
  const [astrologers, setAstrologers] = useState<Astrologer[]>(ASTROLOGERS);
  const [showAllDirectory, setShowAllDirectory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'priceLow' | 'priceHigh' | 'exp'>('popular');

  const sliderRef = useRef<HTMLDivElement>(null);

  // Ready for Backend API replacement
  useEffect(() => {
    getAstrologersList().then((data) => {
      setAstrologers(data);
    });
  }, []);

  // Filter & Sort logic
  const filteredAstrologers = astrologers
    .filter((a) => {
      const matchesCat =
        selectedCategory === 'All' ||
        a.skills.some((s) => s.toLowerCase() === selectedCategory.toLowerCase());
      const matchesSearch =
        a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        a.languages.some((l) => l.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'priceLow') return a.price - b.price;
      if (sortBy === 'priceHigh') return b.price - a.price;
      if (sortBy === 'exp') return b.exp - a.exp;
      return b.orders - a.orders;
    });

  const trendingAstrologers = astrologers.filter((a) => a.isTrending);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const scrollAmount = 320;
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="astrologers" className="py-14 max-w-7xl mx-auto px-4 sm:px-6">
      {!showAllDirectory ? (
        /* =========================================================
           VIEW 1: "RATED ASTROLOGERS" HORIZONTAL SLIDER (0:00 - 0:08 in video)
           ========================================================= */
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                <span className="text-[#a17c43]"> Top Rated</span> Astrologers
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 mt-2 max-w-xl leading-relaxed">
                Every astrologer below has cleared a 4-step verification — qualification, panel interview, live audits, and a 30-day probation.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-end">
              {/* Slider Arrow Controls */}
              <div className="hidden sm:flex items-center gap-2">
                <button
                  onClick={() => scrollSlider('left')}
                  aria-label="Scroll Left"
                  className="p-2.5 rounded-full bg-stone-900 border border-stone-800 text-stone-300 hover:border-amber-500/40 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollSlider('right')}
                  aria-label="Scroll Right"
                  className="p-2.5 rounded-full bg-stone-900 border border-stone-800 text-stone-300 hover:border-amber-500/40 cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* White Pill "View all astrologers ->" Button */}
              <button
                onClick={() => setShowAllDirectory(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-stone-950 font-semibold text-xs sm:text-sm hover:bg-amber-100 transition-all cursor-pointer shadow-md"
              >
                View all astrologers <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4-Card Horizontal Carousel */}
          <div
            ref={sliderRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none"
            style={{ scrollbarWidth: 'none' }}
          >
            {astrologers.map((astro) => (
              <div
                key={astro.id}
                className="min-w-67.5 sm:min-w-71.25 lg:min-w-73.75 snap-start"
              >
                <AstrologerCard astro={astro} onConsult={onConsult} variant="slider" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* =========================================================
           VIEW 2: FULL "CHAT WITH ASTROLOGER" DIRECTORY + TRENDING SIDEBAR (0:09 - 0:15 in video)
           ========================================================= */
        <div>
          {/* Breadcrumb & Back Toggle */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-stone-400">
              <button
                onClick={() => setShowAllDirectory(false)}
                className="hover:text-amber-400 cursor-pointer"
              >
                HOME
              </button>
              <span>•</span>
              <span className="text-amber-400">CHAT WITH ASTROLOGERS</span>
            </div>

            <button
              onClick={() => setShowAllDirectory(false)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:underline cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Rated Slider
            </button>
          </div>

          {/* Header Banner */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Chat With Astrologer</h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-2 max-w-3xl leading-relaxed">
              Chat with an astrologer to get instant solutions to all your astrology needs. Be it personal life issues or professional life challenges, connect 24/7 with verified experts. All your information remains 100% confidential.
            </p>
          </div>

          {/* Search Bar + Sort Dropdown + Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search name, skill, language..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-[#141518] border border-stone-800 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Sort Select Pill */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'popular' | 'priceLow' | 'priceHigh' | 'exp')}
                className="appearance-none pl-4 pr-8 py-2 rounded-full bg-[#141518] border border-stone-800 text-xs font-semibold text-stone-200 focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                <option value="popular">Sort: Popularity</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
                <option value="exp">Experience: High to Low</option>
              </select>
              <ArrowUpDown className="w-3.5 h-3.5 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#fef08a] text-stone-950 font-bold'
                      : 'bg-[#141518] text-stone-300 border border-stone-800 hover:border-stone-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Main Layout: 3-Column Card Grid (Left) + Trending Sidebar (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left 9 Columns: 3-Card Responsive Grid */}
            <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredAstrologers.map((astro) => (
                <AstrologerCard
                  key={astro.id}
                  astro={astro}
                  onConsult={onConsult}
                  variant="grid"
                />
              ))}
            </div>

            {/* Right 3 Columns: "TRENDING NOW - Most consulted this week" Sticky Box */}
            <aside className="lg:col-span-4 xl:col-span-3 bg-[#111214] border border-stone-800/90 rounded-3xl p-5 lg:sticky lg:top-24">
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-400">
                <Flame className="w-3.5 h-3.5 fill-amber-400" /> TRENDING NOW
              </div>
              <h3 className="text-base font-bold text-white mt-1">Most consulted this week</h3>
              <p className="text-xs text-stone-400 mt-0.5">
                The astrologers everyone is talking to right now.
              </p>

              <div className="mt-5 space-y-4 divide-y divide-stone-800/70">
                {trendingAstrologers.map((item) => (
                  <div key={item.id} className="pt-4 first:pt-0 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-10 h-10 rounded-full object-cover border border-emerald-500 shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-1">
                          <h4 className="text-xs font-bold text-white truncate">{item.name}</h4>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        </div>
                        <p className="text-[11px] text-stone-400 truncate">
                          {item.skills.slice(0, 2).join(' · ')}
                        </p>
                        <div className="flex items-center gap-1 text-[11px] text-stone-300 mt-0.5">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span>{item.rating.toFixed(1)}</span>
                          <span>·</span>
                          {item.originalPrice && (
                            <span className="line-through text-stone-500">₹{item.originalPrice}/min</span>
                          )}
                          <span className="font-bold text-white">₹{item.price}/min</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onConsult(item, 'Chat')}
                      className="px-3.5 py-1.5 rounded-full border border-emerald-500/70 text-emerald-400 hover:bg-emerald-500 hover:text-stone-950 text-xs font-semibold transition-all cursor-pointer shrink-0"
                    >
                      Chat
                    </button>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      )}
    </section>
  );
}