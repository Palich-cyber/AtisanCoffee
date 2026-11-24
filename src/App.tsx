import React, { useState, useMemo } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import CartPanel from './components/CartPanel';
import Checkout from './components/Checkout';
import { products } from './data/products';
import { Product } from './types';

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRoast, setSelectedRoast] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search filter
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.origin.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.notes.some((note) => note.toLowerCase().includes(query));

      // Category filter
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      // Roast filter
      const matchesRoast =
        selectedRoast === 'All' || product.roast === selectedRoast;

      return matchesSearch && matchesCategory && matchesRoast;
    });
  }, [searchQuery, selectedCategory, selectedRoast]);

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-amber-50">
      <Header
        onCartClick={() => setIsCartOpen(true)}
        onLogoClick={() => {
          setSearchQuery('');
          setSelectedCategory('All');
          setSelectedRoast('All');
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-stone-950 to-stone-950" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-amber-600 rounded-full blur-3xl" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-800 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
            Exceptional Coffee,
            <br />
            <span className="text-amber-100">Extraordinary Moments</span>
          </h2>
          <p className="text-base sm:text-lg text-amber-200/60 max-w-2xl mx-auto mb-8">
            Discover our curated selection of specialty coffees from the world's finest growing regions. 
            Each bean is carefully sourced, roasted, and delivered to elevate your daily ritual.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-amber-400/70">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Ethically Sourced
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Freshly Roasted
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Free Shipping
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Search and Filters */}
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex justify-center">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
          <div className="flex justify-center">
            <Filters
              selectedCategory={selectedCategory}
              selectedRoast={selectedRoast}
              onCategoryChange={setSelectedCategory}
              onRoastChange={setSelectedRoast}
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-amber-400/50">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'coffee' : 'coffees'}
            {searchQuery && <span className="text-amber-300/70"> for "{searchQuery}"</span>}
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={setSelectedProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <span className="text-5xl mb-4 block">🔍</span>
            <h3 className="text-xl font-semibold text-amber-200/70 mb-2">No coffees found</h3>
            <p className="text-amber-400/50">Try adjusting your search or filters</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-amber-900/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">☕</span>
                <span className="text-lg font-bold text-amber-100">Artisan Coffee</span>
              </div>
              <p className="text-sm text-amber-200/50">
                Specialty coffee roasters dedicated to bringing you the world's finest beans, 
                roasted to perfection.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-amber-200 uppercase tracking-wider mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-amber-200/50">
                <li className="hover:text-amber-200 cursor-pointer transition-colors">Our Story</li>
                <li className="hover:text-amber-200 cursor-pointer transition-colors">Brewing Guides</li>
                <li className="hover:text-amber-200 cursor-pointer transition-colors">Subscription</li>
                <li className="hover:text-amber-200 cursor-pointer transition-colors">Wholesale</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-amber-200 uppercase tracking-wider mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-amber-200/50">
                <li>hello@artisancoffee.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Mon-Fri: 8am - 6pm</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-amber-900/20 text-center text-xs text-amber-400/40">
            © 2026 Artisan Coffee. All rights reserved. Crafted with passion.
          </div>
        </div>
      </footer>

      {/* Modals */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <CartPanel
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

      {isCheckoutOpen && (
        <Checkout onClose={handleCloseCheckout} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
