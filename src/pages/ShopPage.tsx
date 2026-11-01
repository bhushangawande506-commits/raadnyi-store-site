import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { PRODUCTS, CATEGORIES, Product } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { SlidersHorizontal, Search, X, Sparkles } from 'lucide-react';

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read initial query params
  const initialCategory = searchParams.get('category') || 'All';
  const initialFilter = searchParams.get('filter');

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [onlyNew, setOnlyNew] = useState<boolean>(initialFilter === 'new');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'newest'>('featured');

  // Sync state if URL changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
    const flt = searchParams.get('filter');
    if (flt === 'new') setOnlyNew(true);
  }, [searchParams]);

  const categories = ['All', 'Party Wear', 'Casual Wear', 'Tops'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }
      // New arrival filter
      if (onlyNew && !product.isNewArrival) {
        return false;
      }
      // Text query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          product.name.toLowerCase().includes(q) ||
          product.category.toLowerCase().includes(q) ||
          product.color.toLowerCase().includes(q) ||
          product.description.toLowerCase().includes(q);
        if (!matches) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, onlyNew, searchQuery, sortBy]);

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setOnlyNew(false);
    setSearchQuery('');
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <div className="w-full bg-[#FFF9F3] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7A0B2E] font-montserrat">
            Raadnyi Catalogue
          </span>
          <h1 className="mt-2 text-3xl sm:text-5xl font-bold font-playfair text-[#1A0F07]">
            {selectedCategory === 'All' ? 'Women’s Western Wear' : selectedCategory}
          </h1>
          <p className="font-lato text-sm sm:text-base text-gray-600 mt-3 font-light">
            Explore curated Western silhouettes tailored for modern Indian women — based in Pune, Maharashtra.
          </p>
          <div className="w-16 h-0.5 bg-[#7A0B2E] mx-auto mt-4" />
        </div>

        {/* Filter & Controls Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-[#7A0B2E]/10 mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleSelectCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider font-montserrat transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#7A0B2E] text-white shadow-md'
                      : 'bg-[#F7EDE6] text-[#4A4A4A] hover:bg-[#FCE4E6] hover:text-[#7A0B2E]'
                  }`}
                >
                  {cat}
                </button>
              ))}

              <button
                onClick={() => setOnlyNew(!onlyNew)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold tracking-wider font-montserrat transition-all flex items-center gap-1.5 ${
                  onlyNew
                    ? 'bg-[#C4922A] text-white shadow-md'
                    : 'bg-[#F7EDE6] text-[#4A4A4A] hover:bg-[#FCE4E6]'
                }`}
              >
                <Sparkles size={13} />
                New Arrivals
              </button>
            </div>

            {/* Search Input & Sort Dropdown */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1 sm:w-64">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by keyword..."
                  className="w-full pl-9 pr-8 py-2 text-xs rounded-xl border border-gray-200 outline-none focus:border-[#7A0B2E] font-montserrat text-[#1A0F07] bg-[#FFF9F3]/60"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 text-xs font-semibold rounded-xl border border-gray-200 bg-white font-montserrat text-[#4A4A4A] outline-none focus:border-[#7A0B2E]"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest Releases</option>
              </select>
            </div>
          </div>

          {/* Active Filter Badges */}
          {(selectedCategory !== 'All' || onlyNew || searchQuery) && (
            <div className="flex items-center gap-2 pt-2 border-t border-gray-100 text-xs font-montserrat flex-wrap">
              <span className="text-gray-400 text-[11px] uppercase tracking-wider">Active:</span>
              {selectedCategory !== 'All' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#FCE4E6] text-[#7A0B2E] font-semibold text-[11px]">
                  Category: {selectedCategory}
                  <button onClick={() => handleSelectCategory('All')}>
                    <X size={12} />
                  </button>
                </span>
              )}
              {onlyNew && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#FCE4E6] text-[#7A0B2E] font-semibold text-[11px]">
                  New Arrivals Only
                  <button onClick={() => setOnlyNew(false)}>
                    <X size={12} />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#FCE4E6] text-[#7A0B2E] font-semibold text-[11px]">
                  Keyword: "{searchQuery}"
                  <button onClick={() => setSearchQuery('')}>
                    <X size={12} />
                  </button>
                </span>
              )}
              <button
                onClick={handleClearFilters}
                className="text-[11px] text-gray-500 hover:text-[#7A0B2E] underline ml-2"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* Results Counter & Product Grid */}
        <div className="mb-4 flex items-center justify-between text-xs text-gray-500 font-montserrat">
          <span>
            Showing <strong className="text-[#1A0F07]">{filteredProducts.length}</strong> styles
          </span>
          <span className="text-[11px] uppercase tracking-wider text-gray-400">
            Pune Collection
          </span>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-dashed border-gray-300 max-w-md mx-auto my-12">
            <SlidersHorizontal size={36} className="mx-auto text-gray-300 mb-3" />
            <h3 className="font-playfair text-xl font-bold text-[#1A0F07] mb-2">
              No matching styles found
            </h3>
            <p className="text-xs text-gray-500 font-lato mb-6 leading-relaxed">
              We couldn’t find any Western Wear items matching your current filters. Try resetting or selecting another category.
            </p>
            <button
              onClick={handleClearFilters}
              className="px-6 py-2.5 rounded-xl bg-[#7A0B2E] text-white text-xs font-semibold uppercase tracking-wider font-montserrat hover:bg-[#5C0822] transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

