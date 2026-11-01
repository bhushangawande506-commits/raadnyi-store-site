import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router';

export const CartDrawer: React.FC = () => {
  const {
    items,
    totalItems,
    subtotal,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
  } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-[#FFF9F3]">
          <div className="flex items-center gap-2.5">
            <ShoppingBag size={20} className="text-[#7A0B2E]" />
            <h2 className="font-playfair text-xl font-bold text-[#1A0F07]">
              Shopping Bag ({totalItems})
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
            className="p-1.5 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Strip */}
        <div className="bg-[#FCE4E6]/40 px-4 py-2 border-b border-[#7A0B2E]/10 text-xs text-[#7A0B2E] font-montserrat flex items-center justify-between">
          <span>Western Wear • Pune</span>
          <span className="font-semibold uppercase tracking-wider">Free Delivery Applied</span>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 divide-y divide-gray-100">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-[#F7EDE6] flex items-center justify-center text-[#7A0B2E] mb-4">
                <ShoppingBag size={28} />
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#1A0F07] mb-2">
                Your bag is empty
              </h3>
              <p className="text-sm text-gray-500 font-lato max-w-xs mb-6 font-light">
                Explore our curated Western Wear collection of party dresses, tailored co-ords, and chic tops.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  navigate('/shop');
                }}
                className="px-6 py-3 rounded-xl bg-[#7A0B2E] text-white text-xs font-semibold uppercase tracking-wider font-montserrat hover:bg-[#5C0822] transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.product.id}-${item.selectedSize}`} className="py-4 flex gap-4">
                {/* Thumbnail */}
                <Link
                  to={`/product/${item.product.slug}`}
                  onClick={() => setIsCartOpen(false)}
                  className="w-20 h-24 rounded-lg overflow-hidden bg-[#F7EDE6] flex-shrink-0 border border-gray-100"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                </Link>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={`/product/${item.product.slug}`}
                        onClick={() => setIsCartOpen(false)}
                        className="text-sm font-semibold text-[#1A0F07] hover:text-[#7A0B2E] line-clamp-1 font-montserrat"
                      >
                        {item.product.name}
                      </Link>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                        aria-label="Remove item"
                        className="text-gray-400 hover:text-red-600 transition-colors p-0.5"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-[#F7EDE6] text-[#7A0B2E] rounded font-montserrat">
                        Size: {item.selectedSize}
                      </span>
                      <span className="text-xs text-gray-300">•</span>
                      <span className="text-xs text-gray-500 font-lato">
                        {item.product.category}
                      </span>
                    </div>
                  </div>

                  {/* Quantity & Line Total */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.selectedSize, item.quantity - 1)
                        }
                        className="px-2.5 py-1 text-gray-500 hover:bg-gray-100 transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="px-3 text-xs font-semibold font-montserrat text-[#1A0F07]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.selectedSize, item.quantity + 1)
                        }
                        className="px-2.5 py-1 text-gray-500 hover:bg-gray-100 transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    <span className="text-sm font-bold text-[#7A0B2E] font-montserrat">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with totals & checkout */}
        {items.length > 0 && (
          <div className="p-5 border-t border-gray-100 bg-[#FFF9F3] space-y-4">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-gray-500 font-lato">
                <span>Subtotal</span>
                <span className="font-semibold text-[#1A0F07] font-montserrat">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between text-gray-500 font-lato">
                <span>Shipping</span>
                <span className="text-emerald-700 font-semibold font-montserrat">FREE</span>
              </div>
              <div className="h-px bg-gray-200 my-2" />
              <div className="flex justify-between text-base font-bold text-[#1A0F07]">
                <span className="font-montserrat">Total</span>
                <span className="text-[#7A0B2E] font-montserrat">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsCartOpen(false);
                navigate('/checkout');
              }}
              className="w-full py-4 rounded-xl bg-[#7A0B2E] hover:bg-[#5C0822] text-[#FFF9F3] text-xs sm:text-sm font-semibold tracking-wider uppercase font-montserrat transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#7A0B2E]/20"
            >
              Proceed to Checkout
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full py-1 text-xs text-gray-500 hover:text-[#7A0B2E] font-montserrat uppercase tracking-wider text-center"
            >
              Continue Browsing
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
