import React from 'react';
import StackItem from './StackItem';

export default function Sidebar({ stack, onRemove, onClearAll }) {
  return (
    <aside className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs sticky top-24">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
        <p className="text-xs text-slate-500 mt-0.5">
          {stack.length === 0
            ? "No technologies selected yet."
            : `${stack.length} ${stack.length === 1 ? 'Technology' : 'Technologies'} Selected`}
        </p>
      </div>

      {stack.length === 0 ? (
        <div className="border border-dashed border-slate-200 rounded-xl py-10 px-4 text-center">
          <p className="text-xs text-slate-400 font-medium">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-0.5">
          {stack.map((item) => (
            <StackItem key={item.id} item={item} onRemove={onRemove} />
          ))}
          <div className="pt-3">
            <button
              onClick={onClearAll}
              className="w-full py-2 border border-rose-200 text-rose-600 hover:bg-rose-50 rounded-xl text-xs font-semibold transition"
            >
              Remove All
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}