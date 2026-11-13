import React, { useState } from 'react';
import { Product } from '../data/products';
import { Maximize2, Compass, Layers } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface ProductVisualProps {
  product: Product;
  className?: string;
  showBlueprintToggle?: boolean;
  aspect?: '16:9' | '4:3' | '1:1' | 'auto';
  onImageClick?: () => void;
}

export const ProductVisual: React.FC<ProductVisualProps> = ({
  product,
  className = '',
  showBlueprintToggle = false,
  aspect = '4:3',
  onImageClick,
}) => {
  const [viewMode, setViewMode] = useState<'photo' | 'detail' | 'blueprint'>('photo');
  const [imageError, setImageError] = useState(false);

  // Aspect ratio classes
  const aspectClass =
    aspect === '16:9'
      ? 'aspect-[16/9]'
      : aspect === '4:3'
      ? 'aspect-[4/3]'
      : aspect === '1:1'
      ? 'aspect-square'
      : '';

  // Get active photo from product or category fallback
  const activeImage =
    viewMode === 'detail' && product.detailImage
      ? product.detailImage
      : product.heroImage ||
        (product.category === 'sofas'
          ? IMAGES.taq106
          : product.category === 'recliners'
          ? IMAGES.taq810
          : product.category === 'beds'
          ? IMAGES.bed01
          : IMAGES.chair9808);

  // Primary color tone based on product data
  const primaryColor = product.colors[0] || 'Charcoal';
  const isLeather = product.materials.some((m) => m.toLowerCase().includes('leather') || m.toLowerCase().includes('cowhide'));
  const isBoucle = product.materials.some((m) => m.toLowerCase().includes('bouclé') || m.toLowerCase().includes('fabric'));

  // Color background tones for visual rendering
  const getColorTone = (colorName: string) => {
    const c = colorName.toLowerCase();
    if (c.includes('black') || c.includes('obsidian') || c.includes('charcoal')) return { bg: '#222223', text: '#FAF9F6', accent: '#3A3A3C', border: '#444' };
    if (c.includes('olive') || c.includes('forest')) return { bg: '#4A5340', text: '#FAF9F6', accent: '#5C6750', border: '#606C54' };
    if (c.includes('sage') || c.includes('eucalyptus') || c.includes('pistachio')) return { bg: '#6B7A6C', text: '#FAF9F6', accent: '#7E8F7F', border: '#8A9B8B' };
    if (c.includes('cognac') || c.includes('caramel') || c.includes('saddle') || c.includes('tan')) return { bg: '#8B5A2B', text: '#FAF9F6', accent: '#A06832', border: '#B8783B' };
    if (c.includes('terracotta') || c.includes('orange') || c.includes('rust')) return { bg: '#A34F2D', text: '#FAF9F6', accent: '#B85B35', border: '#C9653C' };
    if (c.includes('mocha') || c.includes('espresso') || c.includes('brown') || c.includes('chestnut')) return { bg: '#3D312A', text: '#FAF9F6', accent: '#4E3E36', border: '#5C4A40' };
    if (c.includes('grey') || c.includes('slate') || c.includes('graphite')) return { bg: '#4A5057', text: '#FAF9F6', accent: '#5C646D', border: '#6C7580' };
    if (c.includes('ivory') || c.includes('cream') || c.includes('white') || c.includes('oatmeal')) return { bg: '#EBE7DE', text: '#2A2927', accent: '#DFD9CE', border: '#CCC5B7' };
    return { bg: '#544F49', text: '#FAF9F6', accent: '#6B655E', border: '#7A736B' };
  };

  const tone = getColorTone(primaryColor);

  return (
    <div className={`relative overflow-hidden group bg-[#F5F4F0] ${aspectClass} ${className}`}>
      {/* Photo / Render View */}
      {viewMode === 'photo' ? (
        activeImage && !imageError ? (
          <div className="w-full h-full relative cursor-pointer" onClick={onImageClick}>
            <img
              src={activeImage}
              alt={product.name}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ) : (
          /* Editorial Studio Silhouette Render */
          <div
            className="w-full h-full flex flex-col items-center justify-center p-6 relative cursor-pointer select-none transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            onClick={onImageClick}
          >
            {/* Soft Studio Floor Reflection & Wall ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F2EFE9] via-[#FAF9F6] to-[#ECE8E0]" />
            <div className="absolute bottom-6 w-3/4 h-8 bg-black/10 rounded-full blur-xl transform scale-y-50" />

            {/* Studio Architectural Silhouette Representation */}
            <div className="relative z-10 w-full max-w-[85%] flex flex-col items-center">
              {product.category === 'sofas' && (
                <svg viewBox="0 0 400 160" className="w-full h-auto drop-shadow-md filter transition-all duration-500">
                  <defs>
                    <linearGradient id={`grad-${product.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={tone.accent} />
                      <stop offset="100%" stopColor={tone.bg} />
                    </linearGradient>
                  </defs>
                  {/* Sofa back cushion */}
                  <rect x="40" y="30" width="320" height="60" rx="8" fill={`url(#grad-${product.id})`} />
                  {/* Sofa seats / modular divisions */}
                  <rect x="30" y="80" width="165" height="50" rx="6" fill={tone.bg} stroke={tone.border} strokeWidth="1.5" />
                  <rect x="205" y="80" width="165" height="50" rx="6" fill={tone.bg} stroke={tone.border} strokeWidth="1.5" />
                  {/* Left and right arms */}
                  <rect x="20" y="55" width="40" height="75" rx="6" fill={tone.accent} />
                  <rect x="340" y="55" width="40" height="75" rx="6" fill={tone.accent} />
                  {/* Tufting or channel details */}
                  <line x1="112" y1="80" x2="112" y2="130" stroke={tone.border} strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                  <line x1="287" y1="80" x2="287" y2="130" stroke={tone.border} strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                  {/* Sleek low metal base */}
                  <rect x="45" y="132" width="310" height="6" rx="2" fill="#2A2A2A" />
                </svg>
              )}

              {product.category === 'recliners' && (
                <svg viewBox="0 0 400 170" className="w-full h-auto drop-shadow-md filter transition-all duration-500">
                  <defs>
                    <linearGradient id={`grad-${product.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={tone.accent} />
                      <stop offset="100%" stopColor={tone.bg} />
                    </linearGradient>
                  </defs>
                  {/* Recliner High ergonomic backrests */}
                  <rect x="35" y="20" width="140" height="70" rx="10" fill={`url(#grad-${product.id})`} />
                  <rect x="225" y="20" width="140" height="70" rx="10" fill={`url(#grad-${product.id})`} />
                  {/* Center Console with cup holders */}
                  <rect x="180" y="45" width="40" height="85" rx="6" fill="#1C1B1A" />
                  <circle cx="192" cy="65" r="5" fill="#444" stroke="#888" strokeWidth="1" />
                  <circle cx="208" cy="65" r="5" fill="#444" stroke="#888" strokeWidth="1" />
                  {/* Deep motion seat pads */}
                  <rect x="30" y="85" width="145" height="50" rx="6" fill={tone.bg} stroke={tone.border} strokeWidth="1" />
                  <rect x="225" y="85" width="145" height="50" rx="6" fill={tone.bg} stroke={tone.border} strokeWidth="1" />
                  {/* Articulated footrest hints */}
                  <rect x="35" y="136" width="135" height="8" rx="2" fill={tone.accent} opacity="0.9" />
                  <rect x="230" y="136" width="135" height="8" rx="2" fill={tone.accent} opacity="0.9" />
                </svg>
              )}

              {product.category === 'beds' && (
                <svg viewBox="0 0 400 180" className="w-full h-auto drop-shadow-md filter transition-all duration-500">
                  <defs>
                    <linearGradient id={`grad-${product.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={tone.accent} />
                      <stop offset="100%" stopColor={tone.bg} />
                    </linearGradient>
                  </defs>
                  {/* Padded luxury headboard */}
                  <rect x="40" y="15" width="320" height="85" rx="8" fill={`url(#grad-${product.id})`} stroke={tone.border} strokeWidth="1" />
                  {/* Dual pillowed bolsters or tufting lines */}
                  <rect x="55" y="25" width="135" height="60" rx="6" fill={tone.accent} opacity="0.8" />
                  <rect x="210" y="25" width="135" height="60" rx="6" fill={tone.accent} opacity="0.8" />
                  {/* Mattress dressed in crisp white linen */}
                  <rect x="50" y="85" width="300" height="50" rx="6" fill="#FBFBFA" stroke="#DCD8D0" strokeWidth="1.5" />
                  {/* Warm throw blanket runner */}
                  <rect x="190" y="86" width="158" height="48" fill={tone.accent} opacity="0.4" />
                  {/* Upholstered bed frame & ribbed slat foundation */}
                  <rect x="42" y="132" width="316" height="18" rx="4" fill={tone.bg} />
                  {/* Stiletto floating bed legs */}
                  <line x1="60" y1="150" x2="55" y2="168" stroke="#222" strokeWidth="3.5" strokeLinecap="round" />
                  <line x1="340" y1="150" x2="345" y2="168" stroke="#222" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              )}

              {product.category === 'chairs-tables' && (
                <svg viewBox="0 0 300 200" className="w-full max-w-[240px] h-auto drop-shadow-md filter transition-all duration-500">
                  <defs>
                    <linearGradient id={`grad-${product.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={tone.accent} />
                      <stop offset="100%" stopColor={tone.bg} />
                    </linearGradient>
                  </defs>
                  {product.model.includes('号') || product.model.includes('S-56') ? (
                    // Nightstand chest
                    <g>
                      <rect x="60" y="40" width="180" height="110" rx="6" fill={tone.bg} stroke={tone.border} strokeWidth="1.5" />
                      {/* Top stone/marble slab */}
                      <rect x="55" y="34" width="190" height="10" rx="2" fill="#F4F2EE" stroke="#CCC5B7" strokeWidth="1" />
                      {/* Drawers */}
                      <line x1="60" y1="92" x2="240" y2="92" stroke={tone.border} strokeWidth="1.5" />
                      <circle cx="150" cy="65" r="4" fill="#C29B38" />
                      <circle cx="150" cy="120" r="4" fill="#C29B38" />
                      {/* Slim Legs */}
                      <line x1="75" y1="150" x2="70" y2="180" stroke="#222" strokeWidth="3" />
                      <line x1="225" y1="150" x2="230" y2="180" stroke="#222" strokeWidth="3" />
                    </g>
                  ) : (
                    // Accent Swivel Chair
                    <g>
                      {/* Rounded barrel back */}
                      <path d="M 60 120 C 60 50, 240 50, 240 120 Z" fill={`url(#grad-${product.id})`} />
                      {/* Deep round seat */}
                      <ellipse cx="150" cy="125" rx="80" ry="32" fill={tone.bg} stroke={tone.border} strokeWidth="1" />
                      {/* Swivel star / circular base */}
                      <line x1="150" y1="155" x2="150" y2="175" stroke="#1A1A1A" strokeWidth="5" />
                      <ellipse cx="150" cy="178" rx="45" ry="8" fill="#1A1A1A" />
                    </g>
                  )}
                </svg>
              )}
            </div>

            {/* Model & Spec Overlay Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="text-[11px] font-mono tracking-wider font-semibold text-stone-700 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded shadow-xs border border-stone-200/80">
                {product.model}
              </span>
              {product.nameCn && (
                <span className="text-[11px] text-stone-500 font-medium">
                  {product.nameCn}
                </span>
              )}
            </div>

            {/* Material & Dimension callout at bottom */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-stone-500 font-mono">
              <span className="truncate max-w-[65%]">{product.dimensions.length} {product.dimensions.depth ? `× ${product.dimensions.depth}` : product.dimensions.width ? `× ${product.dimensions.width}` : ''}</span>
              <span className="font-sans text-stone-400">PDF P.{product.pageNumber}</span>
            </div>
          </div>
        )
      ) : (
        /* Blueprint & Technical Dimension Schematic Mode (Matching PDF Page Diagrams) */
        <div className="w-full h-full p-6 flex flex-col justify-between bg-[#191C1E] text-stone-200 select-none relative font-mono">
          {/* Blueprint subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'linear-gradient(#485D6C 1px, transparent 1px), linear-gradient(90deg, #485D6C 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          <div className="relative z-10 flex items-center justify-between border-b border-stone-700/80 pb-2.5">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-400" />
              <span className="text-xs tracking-wider text-amber-300 font-semibold">{product.model} ARCHITECTURAL SPECIFICATION</span>
            </div>
            <span className="text-[10px] text-stone-400 tracking-wider">CATALOGUE DIAGRAM · P.{product.pageNumber}</span>
          </div>

          {/* Dimension Drawing Vector */}
          <div className="relative z-10 my-auto py-4 flex flex-col items-center justify-center">
            <svg viewBox="0 0 360 140" className="w-full max-w-[320px] h-auto text-amber-200/90">
              {/* Outer boundary diagram line */}
              <rect x="50" y="30" width="260" height="70" fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="4 4" />
              
              {/* Main piece contour */}
              <rect x="55" y="35" width="250" height="60" fill="#1E293B" stroke="#93C5FD" strokeWidth="2" rx="4" />
              
              {/* Dimension Arrows - Width/Length */}
              <line x1="50" y1="18" x2="310" y2="18" stroke="#F59E0B" strokeWidth="1.5" />
              <polyline points="56,14 50,18 56,22" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
              <polyline points="304,14 310,18 304,22" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
              <text x="180" y="14" fill="#F59E0B" fontSize="11" textAnchor="middle" fontWeight="bold">
                {product.dimensions.length}
              </text>

              {/* Dimension Arrows - Depth / Width */}
              <line x1="330" y1="35" x2="330" y2="95" stroke="#F59E0B" strokeWidth="1.5" />
              <polyline points="326,41 330,35 334,41" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
              <polyline points="326,89 330,95 334,89" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
              <text x="348" y="70" fill="#F59E0B" fontSize="10" textAnchor="middle" transform="rotate(90 348 70)">
                {product.dimensions.depth || product.dimensions.width || '105 cm'}
              </text>

              {/* Internal section lines if modular */}
              {product.dimensions.breakdown && (
                <>
                  <line x1="140" y1="35" x2="140" y2="95" stroke="#60A5FA" strokeWidth="1.2" strokeDasharray="3 3" />
                  <line x1="220" y1="35" x2="220" y2="95" stroke="#60A5FA" strokeWidth="1.2" strokeDasharray="3 3" />
                </>
              )}
            </svg>

            {product.dimensions.breakdown && (
              <p className="text-[11px] text-stone-300 mt-2 text-center bg-stone-800/80 px-3 py-1 rounded border border-stone-700/60 max-w-sm">
                {product.dimensions.breakdown}
              </p>
            )}
          </div>

          <div className="relative z-10 pt-2 border-t border-stone-800 text-[10px] text-stone-400 flex items-center justify-between">
            <span>FRAME: {product.frameSpec || 'Reinforced Kiln-Dried Hardwood & Steel'}</span>
            <span>SCALE: 1:20 METRIC</span>
          </div>
        </div>
      )}

      {/* Blueprint / Detail / Photo Toggle Buttons */}
      <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
        {product.detailImage && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setViewMode((prev) => (prev === 'detail' ? 'photo' : 'detail'));
            }}
            className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded backdrop-blur-xs transition-colors shadow-sm cursor-pointer ${
              viewMode === 'detail'
                ? 'bg-amber-600 text-white'
                : 'bg-black/75 hover:bg-black text-white'
            }`}
            title="Toggle Detailed Angle View"
          >
            <span>{viewMode === 'detail' ? 'Overview' : 'Detail View'}</span>
          </button>
        )}

        {showBlueprintToggle && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setViewMode((prev) => (prev === 'blueprint' ? 'photo' : 'blueprint'));
            }}
            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium bg-black/75 hover:bg-black text-white rounded backdrop-blur-xs transition-colors shadow-sm cursor-pointer"
            title="Toggle Technical Blueprint Dimensions"
          >
            {viewMode === 'blueprint' ? (
              <>
                <Layers className="w-3.5 h-3.5 text-stone-300" />
                <span>Photo</span>
              </>
            ) : (
              <>
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>Blueprint</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Quick click zoom hint */}
      {onImageClick && viewMode === 'photo' && (
        <button
          type="button"
          onClick={onImageClick}
          className="absolute bottom-3 right-3 z-10 p-2 bg-white/80 hover:bg-white text-stone-700 rounded-full shadow-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          title="View Details & Gallery"
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};
