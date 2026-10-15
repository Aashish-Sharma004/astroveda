// components/organisms/ConsultationModal.tsx
'use client';
import React from 'react';
import { X } from 'lucide-react';
import Button from '@/components/atoms/Button';
import { Astrologer } from '@/config/siteConfig';

export interface ModalAstroTarget {
  name: string;
  price?: number;
}

export default function ConsultationModal({
  activeAstro,
  mode,
  onClose,
  onAddMoney
}: {
  activeAstro: Astrologer | ModalAstroTarget | null;
  mode: string;
  onClose: () => void;
  onAddMoney: (amt: number) => void;
}) {
  if (!activeAstro) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-slate-400 hover:text-white cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-lg font-bold text-white">
          {mode === 'Wallet' ? 'Recharge AstroWallet' : `Start ${mode} with ${activeAstro.name}`}
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          {mode === 'Wallet'
            ? 'Add balance for uninterrupted consultations'
            : `Consultation charge: ₹${activeAstro.price ?? 20}/min (First 5 mins FREE)`}
        </p>

        <div className="grid grid-cols-3 gap-2.5 my-5">
          {[100, 250, 500].map((amt) => (
            <button
              key={amt}
              onClick={() => {
                onAddMoney(amt);
                onClose();
              }}
              className="p-3 rounded-xl bg-slate-950 border border-amber-500/30 hover:border-amber-400 text-center cursor-pointer"
            >
              <span className="text-sm font-bold text-white block">+₹{amt}</span>
              <span className="text-[10px] text-emerald-400">Extra 10% Off</span>
            </button>
          ))}
        </div>

        <Button variant="primary" className="w-full" onClick={onClose}>
          Proceed Now
        </Button>
      </div>
    </div>
  );
}