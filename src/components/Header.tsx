import React from 'react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
  onLogoClick: () => void;
}

export default function Header({ onCartClick, onLogoClick }: HeaderProps) {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-sm border-b border-amber-900/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button onClick={onLogoClick} className="flex items-center gap-2 group">
            <span className="text-2xl sm:text-3xl">☕</span>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-amber-50 group-hover:text-amber-300 transition-colors">
                Artisan Coffee
              </h1>
              <p className="text-[10px] sm:text-xs text-amber-400/70 tracking-widest uppercase hidden sm:block">
                Specialty Roasters
              </p>
            </div>
          </button>

          <button
            onClick={onCartClick}
            className="relative flex items-center gap-2 px-4 py-2 bg-amber-800/30 hover:bg-amber-800/50 border border-amber-700/40 rounded-full transition-all duration-200 group"
          >
            <svg className="w-5 h-5 text-amber-200 group-hover:text-amber-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <span className="text-amber-100 text-sm font-medium hidden sm:inline">Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-stone-900 text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
