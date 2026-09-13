import React from 'react';

export default function StackItem({ item, onRemove }) {
  return (
    <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between gap-3 shadow-xs">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center p-1.5 flex-shrink-0">
          <img
            src={item.icon}
            alt={item.name}
            className="w-5 h-5 object-contain"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${item.name}`;
            }}
          />
        </div>
        <div>
          <p className="text-xs font-bold text-slate-900 leading-tight">{item.name}</p>
          <span className="text-[10px] text-slate-500">{item.category}</span>
        </div>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="w-6 h-6 flex items-center justify-center rounded text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
        title="Remove"
      >
        ✕
      </button>
    </div>
  );
}