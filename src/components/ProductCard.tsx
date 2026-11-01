import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Check } from 'lucide-react';
import { Product } from '../data/products';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<'XS' | 'S' | 'M' | 'L' | 'XL'>(
    product.availableSizes[0]
  );
  const [showSizePicker, setShowSizePicker] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const isWished = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedSize, 1);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      setShowSizePicker(false);
    }, 1200);
  };

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-[#7A0B2E]/10 transition-all duration-300 hover:shadow-xl hover:border-[#7A0B2E]/25">
      {/* Product Image Box */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F7EDE6]">
        <Link to={`/product/${product.slug}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex flex-col gap-1 z-10">
          {product.isNewArrival && (
            <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase bg-[#7A0B2E] text-[#FFF9F3] rounded shadow-sm font-montserrat">
              New
            </span>
          )}
          {product.category === 'Party Wear' && (
            <span className="px-2 py-0.5 text-[9px] sm:text-[10px] font-medium tracking-wide bg-[#FCE4E6] text-[#7A0B2E] rounded font-montserrat">
              Party Edit
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          aria-label={isWished ? 'Remove from wishlist' : 'Add to wishlist'}
          className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 backdrop-blur-sm shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
        >
          <Heart
            size={16}
            className={isWished ? 'fill-[#7A0B2E] text-[#7A0B2E]' : 'text-[#4A4A4A] hover:text-[#7A0B2E]'}
          />
        </button>

        {/* Quick Actions Drawer on Hover (Desktop) / Quick Add Action */}
        <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1.5 sm:gap-2">
          {onQuickView && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onQuickView(product);
              }}
              className="px-2.5 py-1.5 sm:px-3 sm:py-2 bg-white/95 text-[#4A4A4A] hover:text-[#7A0B2E] text-[11px] sm:text-xs font-semibold rounded-lg shadow-sm flex items-center gap-1 transition-colors font-montserrat"
            >
              <Eye size={13} />
              <span className="hidden sm:inline">Quick View</span>
            </button>
          )}

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowSizePicker(!showSizePicker);
            }}
            className="flex-1 sm:flex-initial px-3 py-1.5 sm:px-3.5 sm:py-2 bg-[#7A0B2E] hover:bg-[#5C0822] text-[#FFF9F3] text-[11px] sm:text-xs font-semibold rounded-lg shadow-sm flex items-center justify-center gap-1.5 transition-colors font-montserrat"
          >
            <ShoppingBag size={13} />
            Quick Add
          </button>
        </div>

        {/* In-Card Size Selector Popup */}
        {showSizePicker && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-x-2 bottom-2 bg-white/98 backdrop-blur p-3 rounded-xl shadow-2xl border border-[#7A0B2E]/20 z-20 animate-in fade-in slide-in-from-bottom-2 duration-150"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#4A4A4A] font-montserrat">
                Select Size:
              </span>
              <button
                onClick={() => setShowSizePicker(false)}
                className="text-xs text-gray-400 hover:text-gray-700 px-1"
              >
                ✕
              </button>
            </div>

            <div className="flex gap-1 mb-2.5">
              {product.availableSizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                    selectedSize === sz
                      ? 'border-[#7A0B2E] bg-[#7A0B2E] text-white shadow-xs'
                      : 'border-gray-200 text-[#4A4A4A] hover:border-[#7A0B2E]'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>

            <button
              onClick={handleQuickAdd}
              disabled={justAdded}
              className="w-full py-2 bg-[#7A0B2E] hover:bg-[#5C0822] text-[#FFF9F3] text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 font-montserrat"
            >
              {justAdded ? (
                <>
                  <Check size={14} /> Added to Bag!
                </>
              ) : (
                `Add ${selectedSize} • ₹${product.price.toLocaleString('en-IN')}`
              )}
            </button>
          </div>
        )}
      </div>

      {/* Product Details Box */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between mb-1 text-[10px] sm:text-[11px]">
            <span className="font-semibold uppercase tracking-wider text-[#7A0B2E] font-montserrat">
              {product.category}
            </span>
            <span className="text-gray-400 font-lato">
              {product.availableSizes.join(' ')}
            </span>
          </div>

          <Link
            to={`/product/${product.slug}`}
            className="text-xs sm:text-sm font-semibold text-[#1A0F07] hover:text-[#7A0B2E] transition-colors line-clamp-1 mb-1 font-montserrat block"
          >
            {product.name}
          </Link>

          <p className="text-[11px] text-gray-500 line-clamp-1 mb-2 font-lato font-light">
            {product.color}
          </p>
        </div>

        <div className="mt-2 flex items-baseline gap-2 pt-2 border-t border-gray-100">
          <span className="text-sm sm:text-base font-bold text-[#7A0B2E] font-montserrat">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through font-lato">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
