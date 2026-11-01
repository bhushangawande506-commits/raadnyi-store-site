import React from 'react';
import { Link } from 'react-router';
import { Sparkles, MapPin, Instagram, ArrowRight, ShieldCheck } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full bg-[#FFF9F3] py-12 sm:py-20 text-[#4A4A4A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7A0B2E] font-montserrat">
            Our Story
          </span>
          <h1 className="mt-2 text-3xl sm:text-5xl font-bold font-playfair text-[#1A0F07]">
            About Raadnyi Clothing
          </h1>
          <p className="font-lato text-sm sm:text-base text-gray-600 mt-4 font-light leading-relaxed">
            A contemporary women's Western Wear brand based in Pune, Maharashtra. Crafted to bring modern glamour, easy everyday style, and refined tailoring to every woman.
          </p>
          <div className="w-16 h-0.5 bg-[#7A0B2E] mx-auto mt-4" />
        </div>

        {/* Hero Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20 bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#7A0B2E]/10">
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-[#FCE4E6] text-[#7A0B2E] text-xs font-semibold uppercase tracking-wider font-montserrat">
              Women's Western Wear
            </span>

            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#1A0F07] leading-tight">
              Curated for Every Mood,<br />
              <span className="italic font-normal text-[#7A0B2E]">Designed for Confidence</span>
            </h2>

            <p className="font-lato text-sm sm:text-base text-gray-600 leading-relaxed font-light">
              At Raadnyi Clothing, we believe fashion should feel empowering and effortless. Rooted in Pune, our collections focus exclusively on Western silhouettes that blend flattering tailoring with trend-forward details.
            </p>

            <p className="font-lato text-sm sm:text-base text-gray-600 leading-relaxed font-light">
              Whether it’s a shimmering one-shoulder gown for a celebration, a structured blazer-and-trouser set for daytime chic, or a crisp cotton poplin shirt for coffee dates, Raadnyi provides versatile options for modern lifestyles.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <Link
                to="/shop"
                className="px-6 py-3 rounded-xl bg-[#7A0B2E] text-white text-xs font-semibold uppercase tracking-wider font-montserrat hover:bg-[#5C0822] transition-colors inline-flex items-center gap-2"
              >
                Explore Collections <ArrowRight size={14} />
              </Link>
              <a
                href="https://www.instagram.com/raadnyi_clothing/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-gray-200 text-[#4A4A4A] text-xs font-semibold uppercase tracking-wider font-montserrat hover:border-[#7A0B2E] transition-colors inline-flex items-center gap-2"
              >
                <Instagram size={14} /> Instagram
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F7EDE6] shadow-md border border-gray-100">
            <picture>
              <source srcSet="/images/Smiling South Asian Fashion Portrait.webp" type="image/webp" />
              <img
                src="/images/Smiling South Asian Fashion Portrait.png"
                alt="Raadnyi Western Wear Model"
                loading="lazy"
                width={500}
                height={625}
                className="w-full h-full object-cover object-top"
              />
            </picture>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#7A0B2E]/10">
            <div className="w-12 h-12 rounded-xl bg-[#FCE4E6] text-[#7A0B2E] flex items-center justify-center font-bold font-playfair text-xl mb-4">
              01
            </div>
            <h3 className="font-playfair text-xl font-bold text-[#1A0F07] mb-2">
              Party Wear
            </h3>
            <p className="font-lato text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
              Statement evening dresses, liquid satin cowl necks, and tailored jumpsuits crafted to turn heads at soirees and celebrations.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#7A0B2E]/10">
            <div className="w-12 h-12 rounded-xl bg-[#FCE4E6] text-[#7A0B2E] flex items-center justify-center font-bold font-playfair text-xl mb-4">
              02
            </div>
            <h3 className="font-playfair text-xl font-bold text-[#1A0F07] mb-2">
              Casual Wear
            </h3>
            <p className="font-lato text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
              Relaxed high-rise denims, breezy linen jumpsuits, and smart tailored blazers that effortlessly carry you through busy days.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#7A0B2E]/10">
            <div className="w-12 h-12 rounded-xl bg-[#FCE4E6] text-[#7A0B2E] flex items-center justify-center font-bold font-playfair text-xl mb-4">
              03
            </div>
            <h3 className="font-playfair text-xl font-bold text-[#1A0F07] mb-2">
              Tops & Blouses
            </h3>
            <p className="font-lato text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
              From crisp poplin button-downs to ribbed contour basics and draped satin blouses, built for endless styling versatility.
            </p>
          </div>
        </div>

        {/* Location & Brand Origin */}
        <div className="bg-[#1A0F07] text-[#FFF9F3] rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#FCE4E6] text-xs font-semibold font-montserrat uppercase tracking-wider">
              <MapPin size={16} /> Brand Location
            </div>
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold">
              Pune, Maharashtra, India
            </h3>
            <p className="font-lato text-xs sm:text-sm text-[#FFF9F3]/75 font-light max-w-lg">
              Official Instagram profile:{' '}
              <a
                href="https://www.instagram.com/raadnyi_clothing/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#FCE4E6]"
              >
                @raadnyi_clothing
              </a>
              . Follow for new arrivals, styling inspiration, and launch announcements.
            </p>
          </div>

          <div className="bg-white/10 border border-white/20 p-4 rounded-2xl text-center sm:text-right flex-shrink-0">
            <span className="text-[10px] uppercase tracking-widest font-montserrat text-[#FCE4E6] block">
              Frontend Showcase
            </span>
            <span className="text-xs text-white/80 font-lato">
              Demo Preview Build
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

