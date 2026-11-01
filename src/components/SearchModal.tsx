import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Tag } from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';
import { Link } from 'react-router';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setResults([]);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      setResults([]);
      return;
    }
    const filtered = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(trimmed) ||
        p.category.toLowerCase().includes(trimmed) ||
        p.color.toLowerCase().includes(trimmed) ||
        p.description.toLowerCase().includes(trimmed)
    );
    setResults(filtered);
  }, [query]);

  if (!isOpen) return null;

  const quickPicks = ['Party Wear', 'Blazer', 'Emerald Satin', 'Jumpsuit', 'Poplin Shirt', 'Tops'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 sm:px-6">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#7A0B2E]/15 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Input Bar */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center gap-3 bg-[#FFF9F3]">
          <Search size={22} className="text-[#7A0B2E]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Party Wear, Casuals, Tops, Colors..."
            className="flex-1 bg-transparent border-0 outline-none text-base sm:text-lg text-[#1A0F07] placeholder-gray-400 font-montserrat"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-gray-400 hover:text-gray-700 px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Close search"
            className="p-1.5 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        {!query && (
          <div className="p-6 bg-white">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 font-montserrat flex items-center gap-1.5">
              <Tag size={13} /> Popular Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {quickPicks.map((pick) => (
                <button
                  key={pick}
                  onClick={() => setQuery(pick)}
                  className="px-3 py-1.5 rounded-full bg-[#F7EDE6] hover:bg-[#FCE4E6] text-xs font-semibold text-[#4A4A4A] hover:text-[#7A0B2E] transition-colors font-montserrat"
                >
                  {pick}
                </button>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 font-montserrat">
                Featured Categories
              </p>
              <div className="grid grid-cols-3 gap-3">
                <Link
                  to="/shop?category=Party+Wear"
                  onClick={onClose}
                  className="p-3 rounded-xl border border-gray-100 hover:border-[#7A0B2E]/30 hover:bg-[#FFF9F3] text-center transition-all group"
                >
                  <p className="text-xs font-bold text-[#1A0F07] group-hover:text-[#7A0B2E] font-montserrat">
                    Party Wear
                  </p>
                  <p className="text-[10px] text-gray-500 font-lato">Evening edits</p>
                </Link>
                <Link
                  to="/shop?category=Casual+Wear"
                  onClick={onClose}
                  className="p-3 rounded-xl border border-gray-100 hover:border-[#7A0B2E]/30 hover:bg-[#FFF9F3] text-center transition-all group"
                >
                  <p className="text-xs font-bold text-[#1A0F07] group-hover:text-[#7A0B2E] font-montserrat">
                    Casual Wear
                  </p>
                  <p className="text-[10px] text-gray-500 font-lato">Denims & co-ords</p>
                </Link>
                <Link
                  to="/shop?category=Tops"
                  onClick={onClose}
                  className="p-3 rounded-xl border border-gray-100 hover:border-[#7A0B2E]/30 hover:bg-[#FFF9F3] text-center transition-all group"
                >
                  <p className="text-xs font-bold text-[#1A0F07] group-hover:text-[#7A0B2E] font-montserrat">
                    Tops
                  </p>
                  <p className="text-[10px] text-gray-500 font-lato">Shirts & blouses</p>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Results Box */}
        {query && (
          <div className="max-h-[60vh] overflow-y-auto p-4 divide-y divide-gray-100 bg-white">
            {results.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-sm font-semibold text-[#1A0F07] mb-1 font-montserrat">
                  No styles found for "{query}"
                </p>
                <p className="text-xs text-gray-500 font-lato mb-4">
                  Try searching for "Party Wear", "Satin", "Jumpsuit", "Blazer", or "Tops".
                </p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="text-xs font-semibold text-[#7A0B2E] underline font-montserrat"
                >
                  View All Western Wear &rarr;
                </Link>
              </div>
            ) : (
              <div>
                <p className="text-xs text-gray-400 font-montserrat px-2 py-1 mb-2">
                  Found {results.length} {results.length === 1 ? 'match' : 'matches'}
                </p>
                {results.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-[#FFF9F3] transition-colors group"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-14 h-16 object-cover object-top rounded-lg bg-[#F7EDE6] flex-shrink-0"
                    />
                    <div className="flex-1">
                      <span className="text-[10px] font-semibold uppercase text-[#7A0B2E] font-montserrat">
                        {product.category}
                      </span>
                      <p className="text-sm font-semibold text-[#1A0F07] group-hover:text-[#7A0B2E] line-clamp-1 font-montserrat">
                        {product.name}
                      </p>
                      <p className="text-xs text-gray-500 font-lato">
                        {product.color} • Sizes: {product.availableSizes.join(', ')}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-[#7A0B2E] font-montserrat">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      <ArrowRight
                        size={14}
                        className="ml-auto text-gray-300 group-hover:text-[#7A0B2E] group-hover:translate-x-1 transition-all mt-1"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Footer info */}
        <div className="p-3 bg-[#FFF9F3] border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-montserrat">
          <span>Press ESC to close</span>
          <span>Raadnyi Clothing Pune Demo</span>
        </div>
      </div>
    </div>
  );
};

