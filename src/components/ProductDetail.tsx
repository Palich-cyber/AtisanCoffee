import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDetail({ product, onClose }: ProductDetailProps) {
  const { addToCart } = useCart();

  const getRoastColor = (roast: string) => {
    switch (roast) {
      case 'Light': return 'bg-amber-200 text-amber-900';
      case 'Light-Medium': return 'bg-amber-300 text-amber-900';
      case 'Medium': return 'bg-amber-600 text-amber-50';
      case 'Dark': return 'bg-stone-700 text-amber-100';
      default: return 'bg-stone-600 text-amber-100';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-stone-900 border border-amber-900/30 rounded-2xl shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-stone-800/80 hover:bg-stone-700 border border-amber-900/30 rounded-full text-amber-300 hover:text-amber-100 transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="relative aspect-square md:aspect-auto md:h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 flex gap-2">
              <span className={`px-3 py-1 rounded-lg text-sm font-medium ${getRoastColor(product.roast)}`}>
                {product.roast} Roast
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 flex flex-col">
            <div className="mb-2">
              <span className="text-xs text-amber-500/70 uppercase tracking-wider font-medium">
                {product.category}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-amber-50 mb-2">
              {product.name}
            </h2>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-amber-400">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm text-amber-500/60">/ {product.weight}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-amber-900/20 border border-amber-800/30 rounded-md text-xs text-amber-300">
                📍 {product.origin}
              </span>
              <span className="px-2 py-1 bg-amber-900/20 border border-amber-800/30 rounded-md text-xs text-amber-300">
                📦 {product.weight}
              </span>
            </div>

            <p className="text-amber-200/70 text-sm leading-relaxed mb-6">
              {product.longDescription}
            </p>

            <div className="mb-6">
              <h4 className="text-xs text-amber-400/70 uppercase tracking-wider font-medium mb-2">
                Tasting Notes
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.notes.map((note) => (
                  <span
                    key={note}
                    className="px-3 py-1.5 bg-amber-800/20 border border-amber-700/30 rounded-full text-sm text-amber-200"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-amber-900/20">
              <button
                onClick={() => {
                  addToCart(product);
                  onClose();
                }}
                className="w-full px-6 py-3 bg-amber-700 hover:bg-amber-600 text-amber-50 font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-amber-900/30 hover:shadow-amber-800/40 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
