import React from 'react';
import { Product } from '../data/products';
import { ProductVisual } from './ProductVisual';
import { ArrowUpRight, Plus, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuickAddQuote: (product: Product) => void;
  isInQuote?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onQuickAddQuote,
  isInQuote = false,
}) => {
  return (
    <article
      className="group relative flex flex-col bg-white border border-[#E8E6E1] hover:border-stone-400 transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer"
      onClick={() => onSelect(product)}
    >
      {/* Product Image / Visual Showcase */}
      <div className="relative w-full overflow-hidden bg-[#F5F4F0]">
        <ProductVisual
          product={product}
          aspect="4:3"
          showBlueprintToggle={true}
          className="w-full"
        />

        {/* Quick Action Overlay on hover */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(product);
            }}
            className="px-3 py-1.5 bg-white/95 hover:bg-white text-stone-900 text-xs font-semibold uppercase tracking-wider shadow-sm flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuickAddQuote(product);
            }}
            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider shadow-sm flex items-center gap-1 transition-all cursor-pointer ${
              isInQuote
                ? 'bg-emerald-800 text-white'
                : 'bg-[#191919] hover:bg-black text-white active:scale-95'
            }`}
            title="Add to quotation inquiry"
          >
            {isInQuote ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>In Quote</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Quote</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Unboxed Metadata (Zero-Pill Discipline) */}
          <div className="flex items-center gap-2 text-[11px] text-stone-500 font-mono mb-1.5">
            <span className="uppercase tracking-wider font-semibold text-stone-700">
              {product.model}
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="uppercase tracking-wide">{product.categoryLabel}</span>
            {product.nameCn && (
              <>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span className="text-stone-600">{product.nameCn}</span>
              </>
            )}
          </div>

          {/* Product Name */}
          <h3 className="font-editorial text-xl font-bold text-[#191919] group-hover:text-stone-700 transition-colors leading-snug line-clamp-1">
            {product.name}
          </h3>

          {/* Dimensions & Specifications */}
          <p className="text-xs font-mono text-stone-600 mt-1">
            {product.dimensions.length}
            {product.dimensions.depth ? ` × ${product.dimensions.depth}` : product.dimensions.width ? ` × ${product.dimensions.width}` : ''}
            {product.dimensions.height ? ` · H ${product.dimensions.height}` : ''}
          </p>

          {/* Short description / tagline */}
          <p className="text-xs text-stone-500 line-clamp-2 mt-2 leading-relaxed">
            {product.tagline || product.description}
          </p>
        </div>

        {/* Footer info: Materials & Catalogue page reference */}
        <div className="pt-3 border-t border-[#F0EFEB] flex items-center justify-between text-[11px] text-stone-400 font-mono">
          <span className="truncate max-w-[70%] text-stone-500">
            {product.materials[0]}
          </span>
          <span className="hover:text-stone-700 transition-colors font-semibold">
            PDF P.{product.pageNumber}
          </span>
        </div>
      </div>
    </article>
  );
};
