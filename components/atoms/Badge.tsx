
import React from 'react';

export default function Badge({ children, color = 'amber' }: { children: React.ReactNode; color?: 'amber' | 'green' | 'rose' }) {
  const styles = {
    amber: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    green: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    rose: "bg-rose-500/15 text-rose-400 border-rose-500/30"
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[color]}`}>
      {children}
    </span>
  );
}