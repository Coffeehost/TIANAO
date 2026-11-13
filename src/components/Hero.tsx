import React from 'react';
import { ArrowRight, FileText, Sparkles, MapPin, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { IMAGES } from '../assets/images';

interface HeroProps {
  onExplore: () => void;
  onRequestQuote: () => void;
  onOpenCatalogue: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExplore,
  onRequestQuote,
  onOpenCatalogue,
}) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-[#141312] text-white overflow-hidden">
      {/* Editorial High-Resolution Background Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroLiving}
          alt="TIANAO Furniture Luxury Living Room"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Measured Contrast Scrim (Anti-AI Slop rule: Section 1.F) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 w-full flex flex-col justify-between">
        <div className="max-w-3xl space-y-6">
          {/* Subtle Top Kicker (Zero-Pill text with bullet) */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-widest uppercase text-amber-300">
            <span>5GOOD 天奥家具</span>
            <span aria-hidden="true">·</span>
            <span>TIANAO FURNITURE MANUFACTURING CO., LTD.</span>
            <span aria-hidden="true">·</span>
            <span>中乌姆巴莱工业园</span>
          </div>

          {/* Headline directly from document motto */}
          <div className="space-y-3">
            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] text-balance">
              Creating an Ideal Home Environment is the Best Homage to Life.
            </h1>
            <p className="font-editorial text-lg sm:text-xl text-amber-200/90 font-medium tracking-wide">
              打造这样一个理想的家居环境，并不意味需要奢华繁复。用经营自己的家，就是对生活最好的致敬。
            </p>
          </div>

          {/* Supporting Text directly from Catalogue philosophy & company description */}
          <div className="space-y-2 max-w-2xl">
            <p className="text-sm sm:text-base text-stone-200 font-light leading-relaxed">
              Adhering to a simple, fashionable, fresh, and natural design philosophy that follows global fashion trends while showcasing a unique cultural charm. A medium-to-large modern upholstered furniture manufacturing enterprise integrating R&D, design, production, and sales.
            </p>
            <p className="text-xs text-stone-300 font-mono">
              坚持简约、时尚、清新、自然的设计理念 · 秉承“创新、卓越、共赢”的企业精神
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onExplore}
              className="px-6 py-3.5 bg-white text-stone-900 hover:bg-stone-100 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg active:scale-95"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onRequestQuote}
              className="px-6 py-3.5 bg-black/60 hover:bg-black text-white border border-stone-400/60 hover:border-white text-xs font-semibold uppercase tracking-wider backdrop-blur-xs transition-all cursor-pointer"
            >
              Request a Quote
            </button>

            <button
              onClick={onOpenCatalogue}
              className="px-4 py-3.5 text-stone-300 hover:text-amber-300 text-xs font-mono flex items-center gap-2 transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Browse 36-Page Catalogue</span>
            </button>
          </div>
        </div>

        {/* Bottom Proof Metrics Ribbon (Claim-to-Proof Adjacency) */}
        <div className="mt-16 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 text-stone-300">
          <div>
            <span className="font-mono text-xl sm:text-2xl font-bold text-white block">20,000 m²</span>
            <span className="text-xs text-stone-400 font-sans">Manufacturing Facility</span>
          </div>
          <div>
            <span className="font-mono text-xl sm:text-2xl font-bold text-white block">1,000 m²</span>
            <span className="text-xs text-stone-400 font-sans">Flagship Showroom</span>
          </div>
          <div>
            <span className="font-mono text-xl sm:text-2xl font-bold text-white block">100+</span>
            <span className="text-xs text-stone-400 font-sans">Skilled Craftsmen & Staff</span>
          </div>
          <div>
            <span className="font-mono text-xl sm:text-2xl font-bold text-white block">3 Series</span>
            <span className="text-xs text-stone-400 font-sans">Luxury, Minimalist & Simple Luxury</span>
          </div>
        </div>
      </div>
    </section>
  );
};
