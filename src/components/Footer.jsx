import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20 text-sm text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-brand-gradient flex items-center justify-center text-white font-bold text-xs">
              DS
            </span>
            <span className="font-bold text-base text-slate-900">Dev Stack</span>
          </div>
          <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex gap-4 text-xs font-medium text-slate-500 pt-1">
            <a href="#" className="hover:text-slate-900 transition">GitHub</a>
            <a href="#" className="hover:text-slate-900 transition">Twitter</a>
            <a href="#" className="hover:text-slate-900 transition">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Product</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#home" className="hover:text-slate-900 transition">Home</a></li>
            <li><a href="#technologies" className="hover:text-slate-900 transition">Technologies</a></li>
            <li><a href="#projects" className="hover:text-slate-900 transition">Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Company</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#about" className="hover:text-slate-900 transition">About</a></li>
            <li><a href="#contact" className="hover:text-slate-900 transition">Contact</a></li>
            <li><a href="#" className="hover:text-slate-900 transition">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Legal</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-slate-900 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-slate-900 transition">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-100 py-4 text-center text-xs text-slate-400">
        &copy; 2026 Dev Stack. All rights reserved.
      </div>
    </footer>
  );
}