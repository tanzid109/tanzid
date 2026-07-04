"use client";

import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-8 bg-white text-black border-t border-black/10 shrink-0">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
            TK
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em]">
              TANZID UN KHALIL
            </h3>

            <p className="text-[11px] text-black/60">
              © {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>

        {/* Center Text */}
        <p className="text-sm text-black/60">
          Designed & Developed by <span className="font-semibold">Tanzid Un Khalil</span>
        </p>

        {/* Back To Top */}
        <button
          onClick={scrollToTop}
          className="h-10 px-5 border border-black/20 hover:bg-black hover:text-white hover:border-black transition-all flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] font-semibold cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}