import React, { useState } from 'react';
import { Product, COMPANY_INFO } from '../data/products';
import { X, Trash2, Send, CheckCircle, Plus, Minus, PhoneCall, ShieldCheck, Mail, Building } from 'lucide-react';

export interface QuoteItem {
  product: Product;
  quantity: number;
  notes?: string;
}

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: QuoteItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearAll: () => void;
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearAll,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    location: '',
    projectType: 'Residential',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClearAll();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-[#FBFBFA] h-full shadow-2xl flex flex-col border-l border-[#E8E6E1] animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-6 border-b border-[#E8E6E1] flex items-center justify-between bg-white">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 font-semibold">
              OFFICIAL QUOTATION INQUIRY
            </span>
            <h2 className="font-editorial text-2xl font-bold text-[#191919]">
              Request a Quotation
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-800 transition-colors cursor-pointer"
            aria-label="Close quote drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {submitted ? (
            /* Success State */
            <div className="py-12 px-4 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center border border-emerald-200">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-editorial text-3xl font-bold text-stone-900">
                Quotation Request Received
              </h3>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-stone-900">{formData.fullName}</strong>. Our sales engineering team at{' '}
                <strong>TIANAO Furniture Sino-Uganda Mbale Industrial Park</strong> will prepare an official tailored specification sheet and quotation for you within 24 hours.
              </p>

              <div className="bg-[#F5F4F0] p-4 text-left border border-stone-200 text-xs font-mono space-y-1.5 my-6 max-w-md mx-auto">
                <p className="font-bold text-stone-900 uppercase">Inquiry Reference Summary:</p>
                <p>Contact: {formData.phone} · {formData.email}</p>
                <p>Location: {formData.location || 'Uganda / International'}</p>
                <p>Items Requested: {items.reduce((acc, i) => acc + i.quantity, 0)} units ({items.map((i) => i.product.model).join(', ')})</p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+256744477777"
                  className="px-5 py-2.5 bg-[#191919] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Showroom Direct (+256 744 477 777)</span>
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 border border-stone-300 hover:border-stone-500 text-stone-700 text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Return to Catalogue
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Selected Items Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-mono uppercase tracking-widest font-semibold text-stone-600">
                    Selected Items ({items.length})
                  </h3>
                  {items.length > 0 && (
                    <button
                      onClick={onClearAll}
                      className="text-[11px] text-stone-400 hover:text-rose-600 transition-colors underline cursor-pointer"
                    >
                      Clear List
                    </button>
                  )}
                </div>

                {items.length === 0 ? (
                  <div className="p-6 bg-[#F5F4F0] border border-dashed border-stone-300 text-center">
                    <p className="text-xs text-stone-500 mb-2">No furniture models added yet.</p>
                    <p className="text-[11px] text-stone-400">
                      Browse our collection below and click "Add to Quotation Request" on any sofa, bed, recliner or chair.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    {items.map((item) => (
                      <div
                        key={item.product.id}
                        className="p-3.5 bg-white border border-stone-200 flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-stone-900">{item.product.model}</span>
                            <span className="text-stone-400">·</span>
                            <span className="truncate text-stone-700 font-medium">{item.product.name}</span>
                          </div>
                          <p className="text-[11px] text-stone-500 truncate mt-0.5">
                            {item.notes || `${item.product.dimensions.length} · ${item.product.series}`}
                          </p>
                        </div>

                        <div className="flex items-center gap-3 flex-shrink-0">
                          <div className="flex items-center border border-stone-200 bg-stone-50">
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                              className="p-1 hover:bg-stone-200 text-stone-600"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 font-mono font-semibold text-stone-800 text-[11px]">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1 hover:bg-stone-200 text-stone-600"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.product.id)}
                            className="p-1 text-stone-400 hover:text-rose-600 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-[#E8E6E1]">
                <h3 className="text-xs font-mono uppercase tracking-widest font-semibold text-stone-600">
                  Customer & Quotation Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. David Mukasa"
                      className="w-full px-3 py-2 text-xs border border-stone-300 focus:border-black focus:outline-hidden bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+256 700 000 000"
                      className="w-full px-3 py-2 text-xs border border-stone-300 focus:border-black focus:outline-hidden bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3 py-2 text-xs border border-stone-300 focus:border-black focus:outline-hidden bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Delivery Location / City
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Kampala, Mbale, Nairobi, etc."
                      className="w-full px-3 py-2 text-xs border border-stone-300 focus:border-black focus:outline-hidden bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Company / Organization (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Residential / Hotel / Developer"
                      className="w-full px-3 py-2 text-xs border border-stone-300 focus:border-black focus:outline-hidden bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-stone-300 focus:border-black focus:outline-hidden bg-white"
                    >
                      <option value="Residential">Private Home / Residence</option>
                      <option value="Hospitality">Hotel / Lodge / Resort</option>
                      <option value="Commercial">Commercial / Corporate Office</option>
                      <option value="Wholesale">Wholesale & Showroom Distribution</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Specific Requirements or Questions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify custom leather finish preferences, room dimensions, quantity timelines, or showroom visit requests..."
                    className="w-full px-3 py-2 text-xs border border-stone-300 focus:border-black focus:outline-hidden bg-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-[#191919] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Submitting Quotation Request...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Official Quotation Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>

        {/* Footer Factory Info */}
        <div className="p-4 bg-[#F5F4F0] border-t border-[#E8E6E1] text-[11px] text-stone-500 font-mono flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building className="w-3.5 h-3.5 text-stone-600" />
            <span>20,000 m² Factory · 1,000 m² Showroom</span>
          </div>
          <span className="font-semibold text-stone-700">+256 744 477 777</span>
        </div>
      </div>
    </div>
  );
};
