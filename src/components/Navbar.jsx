import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <a href="#" className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center text-white font-extrabold text-xs shadow-sm">
              DS
            </span>
            <span className="font-bold text-lg tracking-tight text-slate-900">Dev Stack</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#home" className="hover:text-slate-900 transition">Home</a>
          <a href="#technologies" className="hover:text-slate-900 transition">Technologies</a>
          <a href="#projects" className="hover:text-slate-900 transition">Projects</a>
          <a href="#about" className="hover:text-slate-900 transition">About</a>
          <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 px-2 sm:px-3 py-1.5 transition">
            Sign In
          </button>
          <button className="text-xs sm:text-sm font-medium text-white bg-brand-gradient px-3.5 sm:px-4 py-1.5 rounded-full shadow-sm hover:opacity-95 active:scale-95 transition">
            Sign Up
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3 space-y-1 text-sm font-medium text-slate-600 shadow-sm">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-slate-900">Home</a>
          <a href="#technologies" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-slate-900">Technologies</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-slate-900">Projects</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-slate-900">About</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-slate-900">Contact</a>
        </div>
      )}
    </header>
  );
}