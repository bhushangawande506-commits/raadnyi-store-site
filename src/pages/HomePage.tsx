import React, { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Sparkles, Instagram, Check, Heart, ShoppingBag, X } from 'lucide-react';
import { HeroVideo } from '../components/HeroVideo';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, CATEGORIES, Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export const HomePage: React.FC = () => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<'XS' | 'S' | 'M' | 'L' | 'XL'>('M');
  const [selectedImage, setSelectedImage] = useState<string>('');
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const handleOpenQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setSelectedSize(product.availableSizes[0] || 'M');
    setSelectedImage(product.image);
  };

  const newArrivals = PRODUCTS.filter((p) => p.isNewArrival).slice(0, 4);
  const featuredStyles = PRODUCTS.filter((p) => p.isFeatured && !p.isNewArrival).slice(0, 4);

  return (
    <div className="w-full bg-[#FFF9F3] text-[#4A4A4A] overflow-x-hidden">
      {/* Hero Video Section */}
      <HeroVideo />

      {/* Marquee Strip (Seamless Transition from Hero) */}
      <div className="overflow-hidden py-3 border-y border-[#7A0B2E]/15 bg-[#F7EDE6]">
        <div
          className="flex gap-12 whitespace-nowrap animate-marquee"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#7A0B2E',
            animation: 'marquee 30s linear infinite',
          }}
        >
          {Array(3)
            .fill(null)
            .map((_, gi) =>
              [
                'Party Wear & Evening Gowns',
                'Tailored Western Co-ords',
                'Chic Daywear & Blouses',
                'Designed for Modern Elegance',
                'Pune, Maharashtra',
                'Curated Western Silhouettes',
              ].map((t, i) => (
                <span key={`${gi}-${i}`} className="flex items-center gap-4 font-semibold">
                  {t}
                  <span className="text-[#C4922A]">✦</span>
                </span>
              ))
            )}
        </div>
      </div>

      {/* Section C: Shop by Category (3 Prominent Cards with smooth scroll margin) */}
      <section id="categories" className="scroll-mt-24 sm:scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 md:py-20">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7A0B2E] font-montserrat">
            Curated Western Collections
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-[#1A0F07]">
            Shop by Category
          </h2>
          <div className="w-16 h-0.5 bg-[#7A0B2E] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${encodeURIComponent(cat.name)}`}
              className="group relative overflow-hidden rounded-2xl shadow-md border border-[#7A0B2E]/10 transition-all duration-500 hover:shadow-2xl hover:border-[#7A0B2E]/30 h-[440px] sm:h-[480px] lg:h-[520px] bg-[#F7EDE6]"
            >
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-106"
              />
              {/* Subtle Gradient Scrim ensuring high readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity group-hover:opacity-90" />

              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white">
                <span className="inline-block px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase bg-[#7A0B2E]/85 backdrop-blur-sm rounded mb-2 font-montserrat">
                  {cat.count}
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                  {cat.name}
                </h3>
                <p className="font-lato text-xs sm:text-sm text-white/85 mb-5 font-light line-clamp-2">
                  {cat.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FCE4E6] group-hover:gap-4 transition-all duration-300 font-montserrat">
                  Explore {cat.name} <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section D: New Arrivals (Filtered from single product source) */}
      <section className="bg-[#F7EDE6]/50 border-y border-[#7A0B2E]/10 py-14 sm:py-18 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7A0B2E] font-montserrat">
                Fresh Releases
              </span>
              <h2 className="mt-1 sm:mt-2 text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-[#1A0F07]">
                New Arrivals
              </h2>
            </div>
            <Link
              to="/shop?filter=new"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A0B2E] hover:text-[#5C0822] font-montserrat group"
            >
              View All New Styles
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={handleOpenQuickView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section E: Featured Styles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 md:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7A0B2E] font-montserrat">
              Wardrobe Essentials
            </span>
            <h2 className="mt-1 sm:mt-2 text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-[#1A0F07]">
              Featured Styles
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A0B2E] hover:text-[#5C0822] font-montserrat group"
          >
            Explore Complete Catalogue
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6">
          {featuredStyles.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={handleOpenQuickView}
            />
          ))}
        </div>
      </section>

      {/* Section F: Brand Story / Our Story (Warm Peach & Gold Editorial Design) */}
      <section
        className="relative overflow-hidden border-y border-[#C78D5A]/25"
        style={{
          background: 'radial-gradient(ellipse at 70% 30%, #FDF4EC 0%, #F8E3D2 32%, #F4D2BD 68%, #E9BE9F 100%)',
          boxShadow: 'inset 0 0 100px rgba(199, 141, 90, 0.22)',
        }}
      >
        {/* Top-Left Golden Accents */}
        <svg
          className="absolute -top-6 -left-6 w-56 h-56 sm:w-80 sm:h-80 pointer-events-none opacity-85 z-0"
          viewBox="0 0 320 320"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="goldCurveTL1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D6A84F" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#F4D2BD" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#C78D5A" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="goldCurveTL2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D6A84F" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#E5B962" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#F4D2BD" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M -20,160 C 80,140 180,60 220,-20"
            stroke="url(#goldCurveTL1)"
            strokeWidth="1.5"
          />
          <path
            d="M -20,200 C 90,180 200,90 260,-20"
            stroke="url(#goldCurveTL2)"
            strokeWidth="2"
          />
        </svg>

        {/* Top-Right Dappled Foliage Shadow */}
        <svg
          className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px] pointer-events-none opacity-15 mix-blend-multiply z-0"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <filter id="leafBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" />
            </filter>
          </defs>
          <g filter="url(#leafBlur)" fill="#8C5338">
            <path d="M400,0 C360,40 320,70 280,90 C250,105 210,120 180,130 C190,120 220,95 240,75 C270,45 340,15 400,0 Z" />
            <path d="M360,30 C320,60 290,100 270,140 C280,120 310,90 330,70 C350,50 380,20 360,30 Z" />
            <path d="M310,70 C270,95 230,140 210,180 C225,160 260,125 285,100 Z" />
            <path d="M350,100 C310,120 280,160 260,200 C270,180 300,150 320,130 Z" />
            <path d="M260,110 C220,135 180,180 160,220 C175,200 210,165 235,140 Z" />
            <path d="M220,150 C180,175 140,220 120,260 C135,240 170,205 195,180 Z" />
            <path d="M290,140 C250,165 210,210 190,250 C205,230 240,195 265,170 Z" />
          </g>
        </svg>

        {/* Bottom-Right Golden Accents */}
        <svg
          className="absolute -bottom-8 -right-8 w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] pointer-events-none opacity-85 z-0"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="goldCurveBR1" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#D6A84F" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#F4D2BD" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#C78D5A" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="goldCurveBR2" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#E5B962" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#D6A84F" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#F4D2BD" stopOpacity="0" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path
            d="M 420,240 C 300,260 180,330 110,420"
            stroke="url(#goldCurveBR1)"
            strokeWidth="1.5"
            filter="url(#goldGlow)"
          />
          <path
            d="M 420,190 C 280,225 140,315 70,420"
            stroke="url(#goldCurveBR2)"
            strokeWidth="2"
          />
        </svg>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 xl:px-16 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-20 items-center">
            {/* Image Column: 38–42% on desktop (5 cols out of 12) */}
            <div className="w-full lg:col-span-5 flex justify-center lg:justify-start">
              <div
                className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[450px] aspect-[3/4] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#E8CDBB]/40"
                style={{
                  border: '1.5px solid #D6A84F',
                  boxShadow:
                    '0 20px 45px rgba(110, 60, 30, 0.16), 0 0 25px rgba(214, 168, 79, 0.22), inset 0 0 0 1px rgba(255, 255, 255, 0.25)',
                }}
              >
                <picture>
                  <source srcSet="/images/Elegant Ivory Satin Fashion Portrait.webp" type="image/webp" />
                  <img
                    src="/images/Elegant Ivory Satin Fashion Portrait.png"
                    alt="Raadnyi Western Wear - Ivory Satin Outfit"
                    width={450}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </picture>
              </div>
            </div>

            {/* Content Column: 58–62% on desktop (7 cols out of 12) */}
            <div className="w-full lg:col-span-7 flex flex-col justify-center text-left">
              {/* Eyebrow Label with Golden Lines */}
              <div className="inline-flex items-center gap-3 mb-3 sm:mb-4">
                <span className="w-6 sm:w-8 h-[1.5px] bg-[#D6A84F]" />
                <span className="text-xs sm:text-[13px] font-semibold tracking-[0.25em] uppercase text-[#7A0B2E] font-montserrat">
                  OUR STORY
                </span>
                <span className="w-6 sm:w-8 h-[1.5px] bg-[#D6A84F]" />
              </div>

              {/* Main Heading */}
              <h2 className="font-playfair text-[28px] min-[360px]:text-[32px] sm:text-[38px] md:text-[42px] lg:text-[46px] xl:text-[50px] font-bold text-[#7A0B2E] leading-[1.12] mb-4 sm:mb-5 tracking-tight">
                Style That Feels Like You.
              </h2>

              {/* Supporting Text */}
              <div className="space-y-3.5 sm:space-y-4 text-[#35221C] font-lato text-[15px] sm:text-[16px] leading-relaxed max-w-xl font-normal mb-7 sm:mb-9">
                <p>
                  Discover Western wear for every mood and moment, from statement-making party outfits to easy everyday styles and versatile tops.
                </p>
                <p>
                  At Raadnyi Clothing, we believe great style should feel effortless, comfortable, and uniquely yours.
                </p>
              </div>

              {/* Functional CTA Button */}
              <div>
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center gap-3 px-8 sm:px-9 h-[48px] min-h-[48px] rounded-2xl bg-[#7A0B2E] hover:bg-[#5C0822] text-[#FFF9F3] text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#7A0B2E]/25 hover:shadow-xl hover:translate-y-[-1px] font-montserrat w-full sm:w-auto"
                >
                  <span>Discover Our Collection</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section G: Instagram Lookbook Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 md:py-20 text-center">
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7A0B2E] font-montserrat">
          Follow Our Lookbook
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-playfair text-[#1A0F07] mb-2">
          Styled on Instagram
        </h2>
        <a
          href="https://www.instagram.com/raadnyi_clothing/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#7A0B2E] hover:underline font-montserrat mb-8 sm:mb-10"
        >
          <Instagram size={17} />
          @raadnyi_clothing
        </a>

        {/* 4 Image Lookbook Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
          {[
            { img: '/images/Burgundy Puff-Sleeve Elegance.webp', fallback: '/images/Burgundy Puff-Sleeve Elegance.png', label: 'Party Edit' },
            { img: '/images/Blush Blazer, Charcoal Trousers.webp', fallback: '/images/Blush Blazer, Charcoal Trousers.png', label: 'Tailored Chic' },
            { img: '/images/Sky Blue Shirt Editorial Portrait.webp', fallback: '/images/Sky Blue Shirt Editorial Portrait.png', label: 'Casual Poplin' },
            { img: '/images/Emerald Satin Dress Portrait.webp', fallback: '/images/Emerald Satin Dress Portrait.png', label: 'Satin Mood' },
          ].map((item, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/raadnyi_clothing/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl bg-[#F7EDE6] shadow-sm border border-gray-100 block"
            >
              <picture>
                <source srcSet={item.img} type="image/webp" />
                <img
                  src={item.fallback}
                  alt={`Raadnyi Western Wear - ${item.label}`}
                  loading="lazy"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-106"
                />
              </picture>
              <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white p-4">
                <div className="text-center">
                  <Instagram size={24} className="mx-auto mb-1.5 text-[#FCE4E6]" />
                  <span className="text-xs font-semibold font-montserrat block">{item.label}</span>
                  <span className="text-[10px] text-white/80 font-lato">View on Instagram &rarr;</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setQuickViewProduct(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-10 grid grid-cols-1 md:grid-cols-2 max-h-[90vh]">
            {/* Modal Image */}
            <div className="relative bg-[#F7EDE6] p-4 flex flex-col justify-between overflow-hidden">
              <img
                src={selectedImage || quickViewProduct.image}
                alt={quickViewProduct.name}
                className="w-full h-64 sm:h-80 md:h-96 object-cover object-[center_20%] rounded-2xl"
              />
              {/* Gallery Thumbnails */}
              <div className="flex gap-2 mt-3 overflow-x-auto">
                {quickViewProduct.gallery.map((gImg, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(gImg)}
                    className={`w-14 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                      (selectedImage || quickViewProduct.image) === gImg
                        ? 'border-[#7A0B2E]'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={gImg} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Info */}
            <div className="p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold uppercase text-[#7A0B2E] tracking-wider font-montserrat">
                    {quickViewProduct.category}
                  </span>
                  <button
                    onClick={() => setQuickViewProduct(null)}
                    className="p-1 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100"
                  >
                    <X size={20} />
                  </button>
                </div>

                <h3 className="font-playfair text-2xl font-bold text-[#1A0F07] mt-1 mb-2">
                  {quickViewProduct.name}
                </h3>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-[#7A0B2E] font-montserrat">
                    ₹{quickViewProduct.price.toLocaleString('en-IN')}
                  </span>
                  {quickViewProduct.originalPrice && (
                    <span className="text-sm text-gray-400 line-through font-lato">
                      ₹{quickViewProduct.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-gray-600 font-lato mb-6 leading-relaxed font-light">
                  {quickViewProduct.description}
                </p>

                {/* Size Selector */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs font-semibold mb-2 font-montserrat text-[#4A4A4A]">
                    <span>Select Size:</span>
                    <span className="text-[#7A0B2E]">{selectedSize}</span>
                  </div>
                  <div className="flex gap-2">
                    {quickViewProduct.availableSizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`w-11 h-11 rounded-xl text-xs font-semibold border transition-all font-montserrat ${
                          selectedSize === sz
                            ? 'border-[#7A0B2E] bg-[#7A0B2E] text-white shadow-sm'
                            : 'border-gray-200 text-[#4A4A4A] hover:border-[#7A0B2E]'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <button
                  onClick={() => {
                    addToCart(quickViewProduct, selectedSize, 1);
                    setQuickViewProduct(null);
                  }}
                  className="w-full py-3.5 rounded-xl bg-[#7A0B2E] hover:bg-[#5C0822] text-white text-xs font-semibold uppercase tracking-wider font-montserrat transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <ShoppingBag size={15} />
                  Add to Bag • ₹{quickViewProduct.price.toLocaleString('en-IN')}
                </button>

                <div className="flex gap-3">
                  <button
                    onClick={() => toggleWishlist(quickViewProduct.id)}
                    className="flex-1 py-2.5 rounded-xl border border-gray-200 hover:border-[#7A0B2E] text-xs font-semibold font-montserrat flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Heart
                      size={14}
                      className={
                        isInWishlist(quickViewProduct.id)
                          ? 'fill-[#7A0B2E] text-[#7A0B2E]'
                          : 'text-[#4A4A4A]'
                      }
                    />
                    {isInWishlist(quickViewProduct.id) ? 'Saved' : 'Wishlist'}
                  </button>

                  <Link
                    to={`/product/${quickViewProduct.slug}`}
                    onClick={() => setQuickViewProduct(null)}
                    className="flex-1 py-2.5 rounded-xl border border-[#7A0B2E]/20 text-[#7A0B2E] hover:bg-[#FFF9F3] text-xs font-semibold font-montserrat text-center flex items-center justify-center gap-1"
                  >
                    View Details &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
