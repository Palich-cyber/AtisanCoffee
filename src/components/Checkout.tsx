import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

interface CheckoutProps {
  onClose: () => void;
}

export default function Checkout({ onClose }: CheckoutProps) {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order processing
    setTimeout(() => {
      setStep('success');
      clearCart();
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (step === 'success') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm" />
        <div className="relative w-full max-w-md bg-stone-900 border border-amber-900/30 rounded-2xl p-8 text-center shadow-2xl">
          <div className="w-20 h-20 mx-auto mb-6 bg-green-900/30 border border-green-700/40 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-amber-50 mb-2">Order Confirmed!</h2>
          <p className="text-amber-200/60 mb-2">
            Thank you for your order. Your specialty coffee is being prepared with care.
          </p>
          <p className="text-sm text-amber-400/50 mb-6">
            Order #{Math.random().toString(36).substr(2, 8).toUpperCase()} • Confirmation sent to {formData.email || 'your email'}
          </p>
          <button
            onClick={onClose}
            className="px-8 py-3 bg-amber-700 hover:bg-amber-600 text-amber-50 font-semibold rounded-xl transition-all duration-200"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-stone-900 border border-amber-900/30 rounded-2xl shadow-2xl">
        <div className="sticky top-0 bg-stone-900/95 backdrop-blur-sm border-b border-amber-900/20 p-4 sm:p-6 flex items-center justify-between z-10">
          <h2 className="text-xl font-bold text-amber-50">Checkout</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center bg-stone-800 hover:bg-stone-700 border border-amber-900/30 rounded-full text-amber-300 hover:text-amber-100 transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-6">
          {/* Order Summary */}
          <div className="bg-stone-800/40 border border-amber-900/20 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-amber-200 mb-3 uppercase tracking-wider">Order Summary</h3>
            <div className="space-y-2">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between text-sm">
                  <span className="text-amber-200/70">
                    {item.product.name} × {item.quantity}
                  </span>
                  <span className="text-amber-100 font-medium">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-amber-900/20 flex justify-between">
              <span className="font-semibold text-amber-100">Total</span>
              <span className="text-lg font-bold text-amber-400">${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Shipping Info */}
          <div>
            <h3 className="text-sm font-semibold text-amber-200 mb-3 uppercase tracking-wider">Shipping Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="sm:col-span-2">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full px-4 py-2.5 bg-stone-800/50 border border-amber-900/30 rounded-lg text-amber-50 placeholder-amber-700/50 focus:outline-none focus:ring-2 focus:ring-amber-600/50 transition-all"
                />
              </div>
              <div className="sm:col-span-2">
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full px-4 py-2.5 bg-stone-800/50 border border-amber-900/30 rounded-lg text-amber-50 placeholder-amber-700/50 focus:outline-none focus:ring-2 focus:ring-amber-600/50 transition-all"
                />
              </div>
              <div className="sm:col-span-2">
                <input
                  type="text"
                  required
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  className="w-full px-4 py-2.5 bg-stone-800/50 border border-amber-900/30 rounded-lg text-amber-50 placeholder-amber-700/50 focus:outline-none focus:ring-2 focus:ring-amber-600/50 transition-all"
                />
              </div>
              <div>
                <input
                  type="text"
                  required
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                  className="w-full px-4 py-2.5 bg-stone-800/50 border border-amber-900/30 rounded-lg text-amber-50 placeholder-amber-700/50 focus:outline-none focus:ring-2 focus:ring-amber-600/50 transition-all"
                />
              </div>
              <div>
                <input
                  type="text"
                  required
                  placeholder="ZIP Code"
                  value={formData.zip}
                  onChange={(e) => handleChange('zip', e.target.value)}
                  className="w-full px-4 py-2.5 bg-stone-800/50 border border-amber-900/30 rounded-lg text-amber-50 placeholder-amber-700/50 focus:outline-none focus:ring-2 focus:ring-amber-600/50 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h3 className="text-sm font-semibold text-amber-200 mb-3 uppercase tracking-wider">Payment Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-3">
                <input
                  type="text"
                  required
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={(e) => handleChange('cardNumber', e.target.value)}
                  className="w-full px-4 py-2.5 bg-stone-800/50 border border-amber-900/30 rounded-lg text-amber-50 placeholder-amber-700/50 focus:outline-none focus:ring-2 focus:ring-amber-600/50 transition-all"
                />
              </div>
              <div>
                <input
                  type="text"
                  required
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={(e) => handleChange('expiry', e.target.value)}
                  className="w-full px-4 py-2.5 bg-stone-800/50 border border-amber-900/30 rounded-lg text-amber-50 placeholder-amber-700/50 focus:outline-none focus:ring-2 focus:ring-amber-600/50 transition-all"
                />
              </div>
              <div>
                <input
                  type="text"
                  required
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={(e) => handleChange('cvv', e.target.value)}
                  className="w-full px-4 py-2.5 bg-stone-800/50 border border-amber-900/30 rounded-lg text-amber-50 placeholder-amber-700/50 focus:outline-none focus:ring-2 focus:ring-amber-600/50 transition-all"
                />
              </div>
            </div>
            <p className="mt-2 text-xs text-amber-500/40 flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              This is a demo — no real payment will be processed
            </p>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3.5 bg-amber-700 hover:bg-amber-600 text-amber-50 font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-amber-900/30 hover:shadow-amber-800/40 text-lg"
          >
            Place Order — ${totalPrice.toFixed(2)}
          </button>
        </form>
      </div>
    </div>
  );
}
