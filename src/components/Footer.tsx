import React, { useState } from 'react';
import { Link } from 'react-router';
import { Instagram, MapPin, ArrowRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-[#1A0F07] text-[#FFF9F3] pt-14 pb-8 border-t border-[#7A0B2E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid — Clean 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-12 border-b border-white/10">
          {/* Brand Column (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-full overflow-hidden bg-white p-0.5 shadow-md flex-shrink-0">
                <picture>
                  <source srcSet="/images/raadnyi-logo.webp" type="image/webp" />
                  <img
                    src="/images/raadnyi logo.png"
                    alt="Raadnyi Clothing Official Logo"
                    width={44}
                    height={44}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </picture>
              </div>
              <div>
                <span className="font-playfair text-2xl font-bold tracking-tight text-white group-hover:text-[#FCE4E6] transition-colors leading-none block">
                  Raadnyi Clothing
                </span>
                <span className="text-[10px] font-montserrat uppercase tracking-[0.25em] text-[#FCE4E6] font-semibold">
                  Women's Western Wear • Pune
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#FFF9F3]/75 font-lato leading-relaxed max-w-sm font-light">
              Designing statement party outfits, tailored casual co-ords, and chic tops crafted to empower the modern Indian woman with effortless elegance.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-[#FFF9F3]/80 font-montserrat">
              <div className="flex items-center gap-2 text-[#FCE4E6]">
                <MapPin size={15} />
                <span>Pune, Maharashtra, India</span>
              </div>
              <a
                href="https://www.instagram.com/raadnyi_clothing/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-[#FCE4E6] transition-colors"
              >
                <Instagram size={15} />
                <span className="underline">@raadnyi_clothing on Instagram</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* Collections Column (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="font-montserrat text-xs uppercase tracking-[0.2em] font-bold text-[#FCE4E6] mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs font-montserrat text-[#FFF9F3]/80 font-medium">
              <li>
                <Link to="/shop?category=Party+Wear" className="hover:text-white transition-colors">
                  Party Wear & Gowns
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Casual+Wear" className="hover:text-white transition-colors">
                  Casual Wear & Denim
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Tops" className="hover:text-white transition-colors">
                  Tops & Blouses
                </Link>
              </li>
              <li>
                <Link to="/shop?filter=new" className="hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">
                  View All Styles
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="font-montserrat text-xs uppercase tracking-[0.2em] font-bold text-[#FCE4E6] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-montserrat text-[#FFF9F3]/80 font-medium">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Raadnyi
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">
                  Sizing Guide
                </Link>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/raadnyi_clothing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram Lookbook
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Connect Column (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-montserrat text-xs uppercase tracking-[0.2em] font-bold text-[#FCE4E6] mb-2">
              Stay in Touch
            </h4>
            <p className="text-xs text-[#FFF9F3]/70 font-lato leading-relaxed font-light">
              Be the first to preview new lookbook drops, Pune studio showcases, and private edits.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-montserrat flex items-center gap-2">
                <Check size={16} /> Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder-white/40 outline-none focus:border-[#FCE4E6] font-montserrat"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#7A0B2E] hover:bg-[#5C0822] text-white text-xs font-semibold uppercase tracking-wider font-montserrat transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50 font-lato">
          <p>© 2024-2026 Raadnyi Clothing, Pune. All rights reserved.</p>
          <div className="flex items-center gap-4 font-montserrat text-[11px] text-white/60">
            <span>Women's Western Wear</span>
            <span>•</span>
            <span>Pune, Maharashtra</span>
            <span>•</span>
            <a
              href="https://www.instagram.com/raadnyi_clothing/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline"
            >
              @raadnyi_clothing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
