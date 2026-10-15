// components/atoms/ThemeToggle.tsx
'use client';

import React, { useEffect, useSyncExternalStore } from 'react';
import { Sun, Moon } from 'lucide-react';

// Custom event listener to sync theme changes across the client
function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('astro-theme-change', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('astro-theme-change', callback);
  };
}

// Client-side snapshot (reads from localStorage)
function getSnapshot(): 'dark' | 'light' {
  const saved = localStorage.getItem('astro-theme');
  return saved === 'light' ? 'light' : 'dark';
}

// Server-side snapshot (always returns 'dark' during SSR so hydration never fails)
function getServerSnapshot(): 'dark' | 'light' {
  return 'dark';
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Sync the <html> class whenever theme updates
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('astro-theme', nextTheme);
    window.dispatchEvent(new Event('astro-theme-change'));
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Light/Dark Mode"
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 hover:border-amber-500/40 transition-all cursor-pointer active:scale-95"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  );
}