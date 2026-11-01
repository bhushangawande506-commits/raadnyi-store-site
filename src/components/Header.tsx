import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface HeaderProps {
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const { totalItems, setIsCartOpen } = useCart();
  const { wishlistCount, setIsWishlistOpen } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar — Clean brand and location information without prototype badges */}
      <div className="bg-[#7A0B2E] text-[#FFF9F3] text-[11px] sm:text-xs py-2 px-4 text-center tracking-widest font-montserrat flex items-center justify-center gap-2 select-none">
        <span className="font-semibold uppercase">Raadnyi Clothing</span>
        <span className="text-[#FCE4E6]/50">•</span>
        <span>Women's Western Wear</span>
        <span className="text-[#FCE4E6]/50">•</span>
        <span>Pune, Maharashtra</span>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#FFF9F3]/95 backdrop-blur-md border-b border-[#7A0B2E]/10 transition-all shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="p-2 text-[#4A4A4A] hover:text-[#7A0B2E] transition-colors rounded-lg hover:bg-[#F7EDE6]"
            >
              <Menu size={22} />
            </button>
          </div>

          {/* Brand Logo & Wordmark */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Original Logo Image — Preserved Unchanged */}
            <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-sm border border-[#7A0B2E]/15 group-hover:border-[#7A0B2E]/30 transition-all flex-shrink-0">
              <img
                src="/images/raadnyi logo.png"
                alt="Raadnyi Clothing Official Logo"
                className="w-full h-full object-contain p-0.5"
              />
            </div>

            {/* Typography */}
            <div className="flex flex-col">
              <span className="font-playfair text-xl sm:text-2xl font-bold tracking-tight text-[#1A0F07] group-hover:text-[#7A0B2E] transition-colors leading-none">
                Raadnyi
              </span>
              <span className="font-montserrat text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#7A0B2E] font-semibold mt-1">
                Clothing • Pune
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-montserrat text-xs font-semibold uppercase tracking-wider">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors hover:text-[#7A0B2E] py-2 border-b-2 ${
                  isActive ? 'text-[#7A0B2E] border-[#7A0B2E]' : 'text-[#4A4A4A] border-transparent'
                }`
              }
            >
              Home
            </NavLink>

            {/* Shop Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
            >
              <Link
                to="/shop"
                className="flex items-center gap-1 text-[#4A4A4A] hover:text-[#7A0B2E] py-2 transition-colors"
              >
                Shop
                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              {shopDropdownOpen && (
                <div className="absolute top-full left-0 w-52 bg-white border border-[#7A0B2E]/10 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link
                    to="/shop"
                    onClick={() => setShopDropdownOpen(false)}
                    className="block px-4 py-2 text-xs font-bold text-[#7A0B2E] hover:bg-[#F7EDE6] tracking-wide"
                  >
                    All Western Wear
                  </Link>
                  <div className="h-px bg-gray-100 my-1" />
                  <Link
                    to="/shop?category=Party+Wear"
                    onClick={() => setShopDropdownOpen(false)}
                    className="block px-4 py-2 text-xs text-[#4A4A4A] hover:bg-[#F7EDE6] hover:text-[#7A0B2E] tracking-wide font-medium"
                  >
                    Party Wear
                  </Link>
                  <Link
                    to="/shop?category=Casual+Wear"
                    onClick={() => setShopDropdownOpen(false)}
                    className="block px-4 py-2 text-xs text-[#4A4A4A] hover:bg-[#F7EDE6] hover:text-[#7A0B2E] tracking-wide font-medium"
                  >
                    Casual Wear
                  </Link>
                  <Link
                    to="/shop?category=Tops"
                    onClick={() => setShopDropdownOpen(false)}
                    className="block px-4 py-2 text-xs text-[#4A4A4A] hover:bg-[#F7EDE6] hover:text-[#7A0B2E] tracking-wide font-medium"
                  >
                    Tops & Blouses
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/shop?filter=new"
              className={({ isActive }) =>
                `transition-colors hover:text-[#7A0B2E] py-2 border-b-2 ${
                  isActive ? 'text-[#7A0B2E] border-[#7A0B2E]' : 'text-[#4A4A4A] border-transparent'
                }`
              }
            >
              New Arrivals
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-colors hover:text-[#7A0B2E] py-2 border-b-2 ${
                  isActive ? 'text-[#7A0B2E] border-[#7A0B2E]' : 'text-[#4A4A4A] border-transparent'
                }`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-colors hover:text-[#7A0B2E] py-2 border-b-2 ${
                  isActive ? 'text-[#7A0B2E] border-[#7A0B2E]' : 'text-[#4A4A4A] border-transparent'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              aria-label="Open search"
              className="p-2 sm:p-2.5 text-[#4A4A4A] hover:text-[#7A0B2E] hover:bg-[#F7EDE6] rounded-full transition-colors"
            >
              <Search size={19} />
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              aria-label={`Wishlist contains ${wishlistCount} items`}
              className="relative p-2 sm:p-2.5 text-[#4A4A4A] hover:text-[#7A0B2E] hover:bg-[#F7EDE6] rounded-full transition-colors"
            >
              <Heart size={19} />
              {wishlistCount > 0 && (
                <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-[#7A0B2E] text-white text-[9px] font-bold flex items-center justify-center font-montserrat">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label={`Cart contains ${totalItems} items`}
              className="relative p-2 sm:p-2.5 text-[#4A4A4A] hover:text-[#7A0B2E] hover:bg-[#F7EDE6] rounded-full transition-colors"
            >
              <ShoppingBag size={19} />
              {totalItems > 0 && (
                <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-[#7A0B2E] text-white text-[9px] font-bold flex items-center justify-center font-montserrat">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Side Drawer */}
          <div className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-[#FFF9F3] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#7A0B2E]/10">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/raadnyi logo.png"
                    alt="Raadnyi Clothing Logo"
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <span className="font-playfair text-lg font-bold text-[#1A0F07]">
                      Raadnyi
                    </span>
                    <p className="text-[10px] font-montserrat text-[#7A0B2E] uppercase tracking-wider font-semibold">
                      Women's Western Wear
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-800 rounded-lg hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-6 flex flex-col gap-3 font-montserrat text-xs font-semibold uppercase tracking-wider">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-[#4A4A4A] hover:text-[#7A0B2E]"
                >
                  Home
                </Link>

                <div className="py-2 border-y border-gray-100 flex flex-col gap-2">
                  <Link
                    to="/shop"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#7A0B2E] font-bold flex items-center justify-between py-1"
                  >
                    Shop All Western Wear &rarr;
                  </Link>
                  <Link
                    to="/shop?category=Party+Wear"
                    onClick={() => setMobileMenuOpen(false)}
                    className="pl-3 py-1 text-[#4A4A4A] hover:text-[#7A0B2E] normal-case text-sm"
                  >
                    • Party Wear & Gowns
                  </Link>
                  <Link
                    to="/shop?category=Casual+Wear"
                    onClick={() => setMobileMenuOpen(false)}
                    className="pl-3 py-1 text-[#4A4A4A] hover:text-[#7A0B2E] normal-case text-sm"
                  >
                    • Casual Wear & Denim
                  </Link>
                  <Link
                    to="/shop?category=Tops"
                    onClick={() => setMobileMenuOpen(false)}
                    className="pl-3 py-1 text-[#4A4A4A] hover:text-[#7A0B2E] normal-case text-sm"
                  >
                    • Tops & Blouses
                  </Link>
                </div>

                <Link
                  to="/shop?filter=new"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-[#4A4A4A] hover:text-[#7A0B2E]"
                >
                  New Arrivals
                </Link>

                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-[#4A4A4A] hover:text-[#7A0B2E]"
                >
                  About Us
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-[#4A4A4A] hover:text-[#7A0B2E]"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="pt-6 border-t border-[#7A0B2E]/10 text-xs text-gray-500 font-lato">
              <p className="font-semibold text-[#7A0B2E] mb-1 font-montserrat">
                Raadnyi Clothing • Pune, Maharashtra
              </p>
              <a
                href="https://www.instagram.com/raadnyi_clothing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7A0B2E] underline font-montserrat"
              >
                @raadnyi_clothing on Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
