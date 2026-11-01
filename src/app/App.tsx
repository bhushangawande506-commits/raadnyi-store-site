import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { CartProvider } from '../context/CartContext';
import { WishlistProvider } from '../context/WishlistContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CartDrawer } from '../components/CartDrawer';
import { WishlistDrawer } from '../components/WishlistDrawer';
import { SearchModal } from '../components/SearchModal';
import { HomePage } from '../pages/HomePage';

// Route-level code splitting for secondary pages to minimize initial bundle size
const ShopPage = lazy(() => import('../pages/ShopPage').then((m) => ({ default: m.ShopPage })));
const ProductDetailPage = lazy(() =>
  import('../pages/ProductDetailPage').then((m) => ({ default: m.ProductDetailPage }))
);
const CheckoutPage = lazy(() =>
  import('../pages/CheckoutPage').then((m) => ({ default: m.CheckoutPage }))
);
const AboutPage = lazy(() => import('../pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() =>
  import('../pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);

// Fallback spinner matching brand colors during route transitions
const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center bg-[#FFF9F3]">
    <div className="w-9 h-9 rounded-full border-3 border-[#7A0B2E]/20 border-t-[#7A0B2E] animate-spin" />
  </div>
);

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-[#FFF9F3] text-[#4A4A4A] font-lato selection:bg-[#FCE4E6] selection:text-[#7A0B2E]">
            {/* Header */}
            <Header onOpenSearch={() => setIsSearchOpen(true)} />

            {/* Main Application Views with Suspense */}
            <main className="flex-1">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/shop" element={<ShopPage />} />
                  <Route path="/product/:slug" element={<ProductDetailPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="*" element={<HomePage />} />
                </Routes>
              </Suspense>
            </main>

            {/* Drawers & Modals */}
            <CartDrawer />
            <WishlistDrawer />
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

            {/* Footer */}
            <Footer />
          </div>
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  );
}
