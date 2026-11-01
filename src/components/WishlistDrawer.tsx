import React from 'react';
import { X, Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router';

export const WishlistDrawer: React.FC = () => {
  const { wishlistProducts, wishlistCount, isWishlistOpen, setIsWishlistOpen, toggleWishlist } =
    useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        onClick={() => setIsWishlistOpen(false)}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-[#FFF9F3]">
          <div className="flex items-center gap-2">
            <Heart size={20} className="fill-[#7A0B2E] text-[#7A0B2E]" />
            <h2 className="font-playfair text-xl font-bold text-[#1A0F07]">
              Saved Styles ({wishlistCount})
            </h2>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            aria-label="Close wishlist"
            className="p-1.5 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 divide-y divide-gray-100">
          {wishlistProducts.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-[#FCE4E6] flex items-center justify-center text-[#7A0B2E] mb-4">
                <Heart size={28} />
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#1A0F07] mb-2">
                Your wishlist is empty
              </h3>
              <p className="text-sm text-gray-500 font-lato max-w-xs mb-6">
                Save your favourite Western outfits to revisit or add to your bag later.
              </p>
              <button
                onClick={() => {
                  setIsWishlistOpen(false);
                  navigate('/shop');
                }}
                className="px-6 py-3 rounded-xl bg-[#7A0B2E] text-white text-xs font-semibold uppercase tracking-wider font-montserrat hover:bg-[#5C0822] transition-colors"
              >
                Explore Styles
              </button>
            </div>
          ) : (
            wishlistProducts.map((product) => (
              <div key={product.id} className="py-4 flex gap-4 items-center">
                <Link
                  to={`/product/${product.slug}`}
                  onClick={() => setIsWishlistOpen(false)}
                  className="w-20 h-24 rounded-lg overflow-hidden bg-[#F7EDE6] flex-shrink-0 border border-gray-100"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top"
                  />
                </Link>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-semibold uppercase text-[#7A0B2E] font-montserrat">
                        {product.category}
                      </span>
                      <Link
                        to={`/product/${product.slug}`}
                        onClick={() => setIsWishlistOpen(false)}
                        className="block text-sm font-semibold text-[#1A0F07] hover:text-[#7A0B2E] line-clamp-1 font-montserrat"
                      >
                        {product.name}
                      </Link>
                    </div>
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      aria-label="Remove item"
                      className="text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <span className="text-sm font-bold text-[#7A0B2E] font-montserrat">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>

                    <button
                      onClick={() => {
                        addToCart(product, product.availableSizes[0], 1);
                        toggleWishlist(product.id);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-[#7A0B2E] text-white text-xs font-semibold font-montserrat hover:bg-[#5C0822] flex items-center gap-1.5 transition-colors"
                    >
                      <ShoppingBag size={13} />
                      Move to Bag
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {wishlistProducts.length > 0 && (
          <div className="p-4 border-t border-gray-100 bg-[#FFF9F3]">
            <button
              onClick={() => {
                setIsWishlistOpen(false);
                navigate('/shop');
              }}
              className="w-full py-3 rounded-xl border border-[#7A0B2E] text-[#7A0B2E] hover:bg-[#7A0B2E] hover:text-white text-xs font-semibold uppercase tracking-wider font-montserrat transition-colors text-center"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

