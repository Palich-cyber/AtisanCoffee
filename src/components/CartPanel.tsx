import React from 'react';
import { useCart } from '../context/CartContext';

interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export default function CartPanel({ isOpen, onClose, onCheckout }: CartPanelProps) {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-stone-950/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-stone-900 border-l border-amber-900/30 shadow-2xl flex flex-col animate-slide-in">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-amber-900/20">
          <h2 className="text-xl font-bold text-amber-50 flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            Your Cart
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center bg-stone-800 hover:bg-stone-700 border border-amber-900/30 rounded-full text-amber-300 hover:text-amber-100 transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <span className="text-5xl mb-4">🛒</span>
              <p className="text-amber-200/60 text-lg mb-2">Your cart is empty</p>
              <p className="text-amber-400/40 text-sm">Add some specialty coffee to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 p-3 bg-stone-800/40 border border-amber-900/20 rounded-xl"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-amber-50 truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-amber-400/60 mt-0.5">{item.product.weight}</p>
                    <p className="text-sm font-medium text-amber-400 mt-1">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center bg-stone-700 hover:bg-stone-600 border border-amber-900/30 rounded-md text-amber-200 text-sm transition-colors"
                      >
                        −
                      </button>
                      <span className="text-sm font-medium text-amber-100 w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center bg-stone-700 hover:bg-stone-600 border border-amber-900/30 rounded-md text-amber-200 text-sm transition-colors"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="ml-auto w-7 h-7 flex items-center justify-center text-red-400/60 hover:text-red-400 hover:bg-red-900/20 rounded-md transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 sm:p-6 border-t border-amber-900/20 bg-stone-800/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-amber-200/70">Subtotal</span>
              <span className="text-xl font-bold text-amber-50">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between mb-4 text-sm">
              <span className="text-amber-400/50">Shipping</span>
              <span className="text-amber-300/70">Free</span>
            </div>
            <div className="flex items-center justify-between mb-6 pt-3 border-t border-amber-900/20">
              <span className="text-lg font-semibold text-amber-100">Total</span>
              <span className="text-2xl font-bold text-amber-400">${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full px-6 py-3 bg-amber-700 hover:bg-amber-600 text-amber-50 font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-amber-900/30 hover:shadow-amber-800/40"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
