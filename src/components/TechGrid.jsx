import React from 'react';
import TechCard from './TechCard';

export default function TechGrid({ technologies, stack, onAdd, loading }) {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-slate-400">
        <div className="w-8 h-8 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mb-3"></div>
        <span className="text-sm font-medium">Loading technologies...</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          onAdd={onAdd}
          isAdded={stack.some((item) => item.id === tech.id)}
        />
      ))}
    </div>
  );
}