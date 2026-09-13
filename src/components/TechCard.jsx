import React from 'react';

export default function TechCard({ tech, onAdd, isAdded }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 flex items-center justify-center p-1 bg-slate-50 border border-slate-100 rounded-lg">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-6 h-6 object-contain"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${tech.name}&background=random`;
              }}
            />
          </div>
          <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full">
            {tech.badge}
          </span>
        </div>

        <h4 className="text-base font-bold text-slate-900">{tech.name}</h4>
        <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
          {tech.description}
        </p>

        <div className="flex items-center gap-2 mt-4 text-[11px] text-slate-500">
          <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
            {tech.category}
          </span>
          <span>&bull;</span>
          <span>{tech.difficulty}</span>
          <span className="ml-auto flex items-center gap-1 font-semibold text-slate-800">
            <span className="text-amber-400">★</span> {tech.rating}
          </span>
        </div>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`w-full mt-5 py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
          isAdded
            ? "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
            : "bg-slate-900 text-white hover:bg-slate-800 active:scale-[0.98]"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}