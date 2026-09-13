import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-8 lg:py-16">
      <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Build Your Ideal <br />
          <span className="brand-gradient-text">Development Stack</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
          <a
            href="#technologies"
            className="px-6 py-2.5 rounded-full text-white font-medium text-sm bg-brand-gradient shadow-md hover:shadow-lg active:scale-95 transition"
          >
            Explore Technologies
          </a>
          <button className="px-6 py-2.5 rounded-full text-slate-700 font-medium text-sm border border-slate-200 bg-white hover:bg-slate-50 active:scale-95 transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="lg:col-span-5 flex justify-center">
        <div className="w-56 h-56 sm:w-72 sm:h-72 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
            alt="Development Stack"
            className="rounded-3xl shadow-xl object-cover ring-4 ring-pink-500/10"
          />
        </div>
      </div>
    </section>
  );
}