import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
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
    <div className="group bg-stone-800/40 backdrop-blur-sm border border-amber-900/20 rounded-2xl overflow-hidden hover:border-amber-700/40 hover:shadow-xl hover:shadow-amber-900/10 transition-all duration-300">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`px-2 py-1 rounded-md text-xs font-medium ${getRoastColor(product.roast)}`}>
            {product.roast}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 bg-stone-900/80 backdrop-blur-sm rounded-md text-xs font-medium text-amber-300">
            {product.origin}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base sm:text-lg font-semibold text-amber-50 group-hover:text-amber-200 transition-colors">
            {product.name}
          </h3>
          <span className="text-lg font-bold text-amber-400 whitespace-nowrap">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className="text-sm text-amber-200/60 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.notes.slice(0, 3).map((note) => (
            <span
              key={note}
              className="px-2 py-0.5 bg-amber-900/20 border border-amber-800/30 rounded-full text-xs text-amber-300/80"
            >
              {note}
            </span>
          ))}
          {product.notes.length > 3 && (
            <span className="px-2 py-0.5 text-xs text-amber-500/60">
              +{product.notes.length - 3}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onViewDetails(product)}
            className="flex-1 px-3 py-2 bg-stone-700/50 hover:bg-stone-700 border border-amber-900/30 text-amber-200 text-sm font-medium rounded-lg transition-all duration-200"
          >
            Details
          </button>
          <button
            onClick={() => addToCart(product)}
            className="flex-1 px-3 py-2 bg-amber-700 hover:bg-amber-600 text-amber-50 text-sm font-medium rounded-lg transition-all duration-200 shadow-md shadow-amber-900/20 hover:shadow-amber-800/30"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
