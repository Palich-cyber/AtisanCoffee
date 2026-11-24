import React from 'react';
import { categories, roastLevels } from '../data/products';

interface FiltersProps {
  selectedCategory: string;
  selectedRoast: string;
  onCategoryChange: (category: string) => void;
  onRoastChange: (roast: string) => void;
}

export default function Filters({
  selectedCategory,
  selectedRoast,
  onCategoryChange,
  onRoastChange,
}: FiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full">
      <div className="flex flex-col gap-2">
        <label className="text-xs text-amber-400/70 uppercase tracking-wider font-medium">Category</label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-amber-700 text-amber-50 shadow-md shadow-amber-900/30'
                  : 'bg-stone-800/50 text-amber-300/70 hover:bg-stone-700/50 hover:text-amber-200 border border-amber-900/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs text-amber-400/70 uppercase tracking-wider font-medium">Roast Level</label>
        <div className="flex flex-wrap gap-2">
          {roastLevels.map((roast) => (
            <button
              key={roast}
              onClick={() => onRoastChange(roast)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedRoast === roast
                  ? 'bg-amber-700 text-amber-50 shadow-md shadow-amber-900/30'
                  : 'bg-stone-800/50 text-amber-300/70 hover:bg-stone-700/50 hover:text-amber-200 border border-amber-900/20'
              }`}
            >
              {roast}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
