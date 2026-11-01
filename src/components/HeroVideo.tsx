import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';

export const HeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted by browser until user gesture
      });
    }
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#1A0F07] h-[100svh] min-h-[85svh] lg:h-[calc(100vh-96px)] lg:min-h-[640px] lg:max-h-[840px]"
      style={{ minHeight: '85svh' }}
    >
      {/* Background Video with Responsive Framing */}
      {!videoError && (
        <video
          ref={videoRef}
          src="/videos/raadnyi hero video.mp4"
          poster="/images/Champagne Gold Embellished Gown Portrait.png"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover object-[center_15%] sm:object-[center_16%] lg:object-[68%_20%] xl:object-[70%_20%] transition-opacity duration-700"
          style={{
            opacity: videoLoaded ? 1 : 0.85,
            filter: 'brightness(0.96) contrast(1.04)',
          }}
        />
      )}

      {/* Fallback Image if video error or while loading */}
      {(videoError || !videoLoaded) && (
        <img
          src="/images/Champagne Gold Embellished Gown Portrait.png"
          alt="Raadnyi Western Wear Collection"
          className="absolute inset-0 w-full h-full object-cover object-[center_15%] lg:object-[68%_20%] filter brightness-95"
        />
      )}

      {/* Responsive Editorial Overlays */}
      {/* Mobile: Subtle vignette protecting text in middle without obscuring model's face or dress */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/15 lg:hidden pointer-events-none" />

      {/* Desktop: Gentle left-to-right gradient, leaving runway model on the right 100% visible and bright */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent pointer-events-none" />
      <div className="hidden lg:block absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

      {/* Foreground Hero Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 flex flex-col justify-center pb-6 sm:pb-8 lg:pb-0">
        <div className="w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[520px] text-[#FFF9F3]">
          {/* Eyebrow Label — Subtle & Minimal */}
          <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
            <span className="w-3.5 h-px bg-[#FCE4E6]/60 hidden sm:inline-block" />
            <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FCE4E6] font-montserrat">
              Women's Western Wear • Pune
            </span>
          </div>

          {/* Heading — Editorial 2-Line Hierarchy (Visibly compact desktop & mobile) */}
          <h1 className="font-playfair font-bold leading-[1.08] tracking-tight text-white mb-2 sm:mb-2.5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            <span className="block text-[28px] min-[360px]:text-[32px] min-[420px]:text-[34px] sm:text-[38px] md:text-[42px] lg:text-[50px] xl:text-[52px]">
              Your Style.
            </span>
            <span className="block italic font-normal text-[#FCE4E6] text-[26px] min-[360px]:text-[30px] min-[420px]:text-[32px] sm:text-[36px] md:text-[40px] lg:text-[46px] xl:text-[48px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
              Your Statement.
            </span>
          </h1>

          {/* Subtitle — Concise, controlled width */}
          <p className="font-lato font-light text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[17px] text-[#FFF9F3]/90 max-w-[340px] sm:max-w-[440px] lg:max-w-[500px] mb-4 sm:mb-5 lg:mb-6 leading-snug sm:leading-relaxed line-clamp-2 lg:line-clamp-none drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
            Discover curated Western silhouettes crafted for every mood and moment — from dazzling party edits to effortless daytime chic.
          </p>

          {/* Action Buttons — Compact & Well-proportioned */}
          <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <Link
              to="/shop"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 sm:px-6 h-[42px] sm:h-[44px] lg:h-[46px] rounded-xl bg-[#7A0B2E] hover:bg-[#5C0822] text-[#FFF9F3] text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-xl hover:shadow-2xl hover:translate-y-[-1px] font-montserrat group"
            >
              Shop Collection
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="#categories"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center px-4 sm:px-5 h-[42px] sm:h-[44px] lg:h-[46px] rounded-xl bg-black/45 hover:bg-black/65 text-[#FFF9F3] backdrop-blur-md border border-white/25 text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all font-montserrat text-center"
            >
              Explore Styles
            </a>
          </div>

          {/* Category Links — Hidden on mobile to prevent messy wrap; elegant on tablet & desktop */}
          <div className="hidden sm:flex items-center gap-3 sm:gap-4 text-xs font-montserrat tracking-wider uppercase text-white/80 border-t border-white/15 pt-3 sm:pt-3.5 mt-4 sm:mt-5">
            <Link
              to="/shop?category=Party+Wear"
              className="hover:text-white transition-colors py-0.5"
            >
              Party Wear
            </Link>
            <span className="text-white/30">•</span>
            <Link
              to="/shop?category=Casual+Wear"
              className="hover:text-white transition-colors py-0.5"
            >
              Casual Wear
            </Link>
            <span className="text-white/30">•</span>
            <Link
              to="/shop?category=Tops"
              className="hover:text-white transition-colors py-0.5"
            >
              Tops
            </Link>
          </div>
        </div>
      </div>

      {/* Video Sound Toggle Button (Bottom Right, Subtle & Unobtrusive) */}
      {!videoError && videoLoaded && (
        <button
          onClick={toggleSound}
          aria-label={isMuted ? 'Unmute hero video' : 'Mute hero video'}
          className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 p-2 sm:p-2.5 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white/90 hover:text-white transition-all border border-white/20 shadow-md"
        >
          {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>
      )}
    </section>
  );
};
