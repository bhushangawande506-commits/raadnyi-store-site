import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { Heart, ShoppingBag, ArrowRight, Check, ShieldCheck, Truck, RotateCcw, AlertCircle } from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { ProductCard } from '../components/ProductCard';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const product = PRODUCTS.find((p) => p.slug === slug);

  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<'XS' | 'S' | 'M' | 'L' | 'XL' | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [sizeError, setSizeError] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      setSelectedSize(product.availableSizes[0] || 'M');
      setSizeError(false);
      window.scrollTo(0, 0);
    }
  }, [product, slug]);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <AlertCircle size={48} className="mx-auto text-[#7A0B2E] mb-4" />
        <h1 className="font-playfair text-3xl font-bold text-[#1A0F07] mb-2">
          Product Not Found
        </h1>
        <p className="text-sm text-gray-500 font-lato mb-6 font-light">
          The requested Western Wear item could not be found or may have been retired.
        </p>
        <Link
          to="/shop"
          className="px-6 py-3 rounded-xl bg-[#7A0B2E] text-white text-xs font-semibold uppercase tracking-wider font-montserrat hover:bg-[#5C0822] transition-colors"
        >
          Return to Western Catalogue
        </Link>
      </div>
    );
  }

  const isWished = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    addToCart(product, selectedSize, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    addToCart(product, selectedSize, quantity);
    navigate('/checkout');
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="w-full bg-[#FFF9F3] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 font-montserrat mb-8">
          <Link to="/" className="hover:text-[#7A0B2E]">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[#7A0B2E]">
            Shop
          </Link>
          <span>/</span>
          <Link
            to={`/shop?category=${encodeURIComponent(product.category)}`}
            className="hover:text-[#7A0B2E]"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-[#1A0F07] font-semibold line-clamp-1">{product.name}</span>
        </nav>

        {/* Product Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#7A0B2E]/10">
          {/* Left Column: Image Gallery */}
          <div className="space-y-4">
            {/* Main Stage Image */}
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#F7EDE6] border border-gray-100 shadow-inner">
              <img
                src={selectedImage || product.image}
                alt={product.name}
                className="w-full h-full object-cover object-[center_20%] transition-all duration-300"
              />

              {product.isNewArrival && (
                <span className="absolute top-4 left-4 px-3 py-1 rounded bg-[#7A0B2E] text-white text-xs font-semibold uppercase tracking-wider font-montserrat shadow-sm">
                  New Arrival
                </span>
              )}

              <button
                onClick={() => toggleWishlist(product.id)}
                aria-label={isWished ? 'Remove from wishlist' : 'Save to wishlist'}
                className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/95 shadow-md flex items-center justify-center transition-all hover:scale-110"
              >
                <Heart
                  size={20}
                  className={
                    isWished ? 'fill-[#7A0B2E] text-[#7A0B2E]' : 'text-[#4A4A4A] hover:text-[#7A0B2E]'
                  }
                />
              </button>
            </div>

            {/* Thumbnails */}
            {product.gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.gallery.map((imgUrl, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`w-20 h-24 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                      (selectedImage || product.image) === imgUrl
                        ? 'border-[#7A0B2E] shadow-sm'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt="Angle thumbnail" className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Information & Actions */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#7A0B2E] font-montserrat">
                  {product.category}
                </span>
                <span className="text-gray-300">•</span>
                <span className="text-xs text-emerald-700 font-medium font-montserrat flex items-center gap-1">
                  <Check size={13} /> {product.availability}
                </span>
              </div>

              <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#1A0F07] mb-3 leading-tight">
                {product.name}
              </h1>

              {/* Price Presentation */}
              <div className="flex items-baseline gap-3 mb-6 p-4 rounded-xl bg-[#FFF9F3] border border-[#7A0B2E]/10">
                <span className="text-3xl font-bold text-[#7A0B2E] font-montserrat">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-gray-400 line-through font-lato">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="ml-auto text-xs text-emerald-700 font-montserrat font-semibold">
                  Taxes Included
                </span>
              </div>

              {/* Description */}
              <p className="font-lato text-sm sm:text-base text-gray-600 leading-relaxed mb-6 font-light">
                {product.description}
              </p>

              {/* Color Details */}
              <div className="mb-6 flex items-center gap-2 text-xs font-montserrat">
                <span className="font-semibold text-[#1A0F07]">Color:</span>
                <span className="text-gray-600">{product.color}</span>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1A0F07] font-montserrat">
                    Select Size:
                  </span>
                  <span className="text-[11px] text-gray-400 font-montserrat">
                    Sizes: XS – XL
                  </span>
                </div>

                <div className="flex gap-2.5">
                  {product.availableSizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => {
                        setSelectedSize(sz);
                        setSizeError(false);
                      }}
                      className={`w-12 h-12 rounded-xl text-sm font-semibold border transition-all font-montserrat ${
                        selectedSize === sz
                          ? 'border-[#7A0B2E] bg-[#7A0B2E] text-white shadow-md'
                          : 'border-gray-200 text-[#4A4A4A] hover:border-[#7A0B2E] hover:bg-[#F7EDE6]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>

                {sizeError && (
                  <p className="text-xs text-red-600 font-montserrat mt-2 flex items-center gap-1">
                    <AlertCircle size={13} /> Please choose a size before adding to bag.
                  </p>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="mb-8 flex items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1A0F07] font-montserrat">
                  Quantity:
                </span>
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-[#FFF9F3]">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3.5 py-2 text-gray-500 hover:bg-gray-200 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 text-sm font-semibold font-montserrat text-[#1A0F07]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                    className="px-3.5 py-2 text-gray-500 hover:bg-gray-200 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <div className="flex gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 py-4 rounded-xl bg-[#7A0B2E] hover:bg-[#5C0822] text-[#FFF9F3] text-xs font-semibold uppercase tracking-wider font-montserrat transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#7A0B2E]/20"
                  >
                    <ShoppingBag size={16} />
                    Add to Bag • ₹{(product.price * quantity).toLocaleString('en-IN')}
                  </button>

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="w-14 rounded-xl border border-gray-200 hover:border-[#7A0B2E] flex items-center justify-center text-gray-600 transition-colors"
                    aria-label="Wishlist"
                  >
                    <Heart
                      size={20}
                      className={isWished ? 'fill-[#7A0B2E] text-[#7A0B2E]' : 'text-[#4A4A4A]'}
                    />
                  </button>
                </div>

                <button
                  onClick={handleBuyNow}
                  className="w-full py-3.5 rounded-xl border-2 border-[#7A0B2E] text-[#7A0B2E] hover:bg-[#7A0B2E] hover:text-white text-xs font-semibold uppercase tracking-wider font-montserrat transition-all"
                >
                  Buy Now &rarr;
                </button>
              </div>

              {addedToast && (
                <div className="mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-montserrat flex items-center gap-2 animate-in fade-in">
                  <Check size={16} /> Added {quantity} × {product.name} ({selectedSize}) to bag!
                </div>
              )}
            </div>

            {/* Product Specifications & Details */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1A0F07] font-montserrat mb-3">
                Garment Highlights & Care
              </h3>
              <ul className="space-y-2 text-xs text-gray-600 font-lato">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#7A0B2E]">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Service Badges */}
              <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-gray-100 text-center">
                <div className="p-2.5 rounded-xl bg-[#FFF9F3] border border-[#7A0B2E]/10">
                  <Truck size={18} className="mx-auto text-[#7A0B2E] mb-1" />
                  <p className="text-[10px] font-semibold uppercase font-montserrat text-[#1A0F07]">
                    Free Delivery
                  </p>
                  <p className="text-[10px] text-gray-500 font-lato">Pune & Across India</p>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FFF9F3] border border-[#7A0B2E]/10">
                  <ShieldCheck size={18} className="mx-auto text-[#7A0B2E] mb-1" />
                  <p className="text-[10px] font-semibold uppercase font-montserrat text-[#1A0F07]">
                    Quality Fabric
                  </p>
                  <p className="text-[10px] text-gray-500 font-lato">Premium Western Cut</p>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FFF9F3] border border-[#7A0B2E]/10">
                  <RotateCcw size={18} className="mx-auto text-[#7A0B2E] mb-1" />
                  <p className="text-[10px] font-semibold uppercase font-montserrat text-[#1A0F07]">
                    Easy Exchange
                  </p>
                  <p className="text-[10px] text-gray-500 font-lato">Standard Window</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 sm:mt-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7A0B2E] font-montserrat">
                  Complete The Look
                </span>
                <h2 className="mt-1 text-2xl sm:text-3xl font-bold font-playfair text-[#1A0F07]">
                  More from {product.category}
                </h2>
              </div>
              <Link
                to={`/shop?category=${encodeURIComponent(product.category)}`}
                className="text-xs font-semibold uppercase tracking-wider text-[#7A0B2E] hover:underline font-montserrat flex items-center gap-1"
              >
                View Category &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
