import React from 'react';
import { COMPANY_INFO } from '../data/products';
import { IMAGES } from '../assets/images';
import { ArrowUp, Phone, MapPin, Globe, FileText } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'home' | 'collection' | 'categories' | 'about' | 'contact') => void;
  onRequestQuote: () => void;
  onOpenCatalogue: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onRequestQuote,
  onOpenCatalogue,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141312] text-stone-300 border-t border-stone-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-800">
          {/* Brand & Mission (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-auto flex-shrink-0 flex items-center justify-center rounded-xs bg-white px-2 py-1 shadow-sm border border-stone-700/60">
                <img
                  src={IMAGES.brandLogo}
                  alt="TIANAO Furniture Logo"
                  className="h-full w-auto max-h-10 object-contain"
                />
              </div>
              <div>
                <h3 className="font-editorial text-2xl font-bold text-white tracking-wider">
                  TIANAO FURNITURE
                </h3>
                <p className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">
                  天奥家具制造有限公司 · 5good
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Medium-to-large modern upholstered furniture enterprise integrating R&D, design, production, and sales. Established in July 2024 through a partnership between Uganda Tiantang Group and Hangzhou Aumere Furniture from China.
            </p>

            <div className="pt-2 text-xs font-mono text-amber-400">
              <p>Five Excellence Strategy: Good Health · Comfort · Design · Quality · Service</p>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home Showroom
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('collection')} className="hover:text-white transition-colors cursor-pointer">
                  Complete Catalogue
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categories')} className="hover:text-white transition-colors cursor-pointer">
                  Product Categories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">
                  Factory & Profile
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Showroom Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Product Series (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              Product Series
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>Modern Luxury Series</li>
              <li>High-End Minimalist Series</li>
              <li>High-End Simple Luxury Series</li>
              <li className="pt-2">
                <button
                  onClick={onOpenCatalogue}
                  className="text-amber-400 hover:underline flex items-center gap-1.5 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>36-Page Catalogue Index</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Manufacturing Location & Contacts (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              Plant & Showroom
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400 font-mono">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>Sino-Uganda Mbale Industrial Park, Mbale, Uganda</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a href="tel:+256744477777" className="hover:text-white">+256 744 477 777</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a href="tel:+256744377777" className="hover:text-white">+256 744 377 777</a>
              </p>
              <p className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a href="https://tianaofurniture.co.ug" target="_blank" rel="noopener noreferrer" className="hover:text-white truncate">
                  https://tianaofurniture.co.ug
                </a>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onRequestQuote}
                className="w-full py-2.5 bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer text-center"
              >
                Request a Custom Quote
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <p>
            © {new Date().getFullYear()} TIANAO Furniture Manufacturing Co., Ltd. (天奥家具制造有限公司). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Mbale, Uganda</span>
            <span>·</span>
            <span>Uganda Tiantang Group & Hangzhou Aumere Furniture</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
