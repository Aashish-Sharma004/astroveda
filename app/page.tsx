// app/page.tsx
'use client';

import React, { useState } from 'react';
import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';
import HeroSection from '@/components/organisms/HeroSection';
import AstrologerDirectory from '@/components/organisms/AstrologerDirectory';
import HoroscopeSection from '@/components/organisms/HoroscopeSection';

import AppDownloadSection from '@/components/organisms/AppDownloadSection';
import ConsultationModal, { ModalAstroTarget } from '@/components/organisms/ConsultationModal';
import { Astrologer } from '@/config/siteConfig';
import TestimonialSection from '@/components/organisms/TestimonialSection';

export default function HomePage() {
  const [walletBalance, setWalletBalance] = useState(0);
  const [modalData, setModalData] = useState<{
    astro: Astrologer | ModalAstroTarget;
    mode: string;
  } | null>(null);

  const handleConsult = (astro: Astrologer, mode: string) => {
    setModalData({ astro, mode });
  };

  const handleWalletRecharge = () => {
    setModalData({ astro: { name: 'Wallet' }, mode: 'Wallet' });
  };

  const handleAddMoney = (amount: number) => {
    setWalletBalance((prev) => prev + amount);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-400 selection:text-slate-950">
      <Navbar walletBalance={walletBalance} onRechargeClick={handleWalletRecharge} />

      <main>
        <HeroSection />
        <AstrologerDirectory onConsult={handleConsult} />
        <HoroscopeSection />
        
        <TestimonialSection />
        <AppDownloadSection />
      </main>

      <Footer />

      <ConsultationModal
        activeAstro={modalData?.astro ?? null}
        mode={modalData?.mode || 'Chat'}
        onClose={() => setModalData(null)}
        onAddMoney={handleAddMoney}
      />
    </div>
  );
}