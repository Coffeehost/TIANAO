import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/products';
import { MapPin, Phone, Mail, Globe, Clock, CheckCircle, Send, Building2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Showroom Visit & General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-[#FBFBFA] border-b border-[#E8E6E1]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest font-semibold text-stone-500 block mb-2">
            CONNECT WITH TIANAO · 联系我们
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#191919] leading-tight">
            Visit Our Showroom or Inquire Directly.
          </h2>
          <p className="text-sm text-stone-600 mt-3 font-sans max-w-xl">
            Experience our 1,000 m² modern showroom and 20,000 m² manufacturing plant located inside the Sino-Uganda Mbale Industrial Park.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Card (7 Cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-white border border-[#E8E6E1] p-8 space-y-6 shadow-2xs">
              <h3 className="font-editorial text-2xl font-bold text-stone-900 border-b border-stone-200 pb-3">
                TIANAO Furniture Manufacturing Co., Ltd.
              </h3>
              <p className="text-xs text-stone-500 font-mono">天奥家具制造有限公司 · 5good</p>

              <div className="space-y-4 text-xs font-sans text-stone-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-medium">Headquarters & Factory Address:</strong>
                    <span>Sino-Uganda Mbale Industrial Park, Mbale, Uganda</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-medium">Mobile Phone Lines:</strong>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 font-mono text-stone-800">
                      <a href="tel:+256744477777" className="hover:text-black underline">+256 744 477 777</a>
                      <a href="tel:+256744377777" className="hover:text-black underline">+256 744 377 777</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-medium">Official Website:</strong>
                    <a
                      href="https://tianaofurniture.co.ug"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-stone-800 hover:text-black underline"
                    >
                      https://tianaofurniture.co.ug
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-medium">Showroom & Factory Scale:</strong>
                    <span>20,000 m² Manufacturing Facility · 1,000 m² Display Showroom</span>
                  </div>
                </div>
              </div>

              {/* Showroom Hours & Visit Note */}
              <div className="pt-4 border-t border-stone-200 text-xs text-stone-600 space-y-1 bg-[#F5F4F0] p-4">
                <p className="font-semibold text-stone-900">Showroom Operating Hours:</p>
                <p>Monday – Saturday: 8:30 AM – 6:00 PM (EAT)</p>
                <p className="text-[11px] text-stone-500">Private appointments and architectural consultations available upon request.</p>
              </div>
            </div>

            {/* Industrial Park Location Map Mockup / Card */}
            <div className="bg-[#141312] text-white p-6 border border-stone-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                  REGIONAL STRATEGIC HUB
                </span>
                <h4 className="font-editorial text-lg font-bold">
                  Sino-Uganda Mbale Industrial Park
                </h4>
                <p className="text-xs text-stone-400 font-sans mt-0.5">
                  Serving Uganda, Kenya, Rwanda, Tanzania, and International Markets.
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center flex-shrink-0 text-amber-400 font-mono text-xs font-bold">
                UG
              </div>
            </div>
          </div>

          {/* Quick Message / Showroom Appointment Form (6 Cols) */}
          <div className="lg:col-span-6 bg-white border border-[#E8E6E1] p-8 shadow-2xs">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-editorial text-2xl font-bold text-stone-900">
                  Message Dispatched
                </h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto">
                  Thank you for reaching out to TIANAO Furniture. Our representative will contact you via phone or email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 border border-stone-300 text-xs font-semibold uppercase tracking-wider"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest font-semibold text-stone-500 block mb-1">
                    DIRECT INQUIRY FORM
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-stone-900">
                    Send a Direct Message
                  </h3>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full px-3 py-2 text-xs border border-stone-300 focus:border-black focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+256..."
                      className="w-full px-3 py-2 text-xs border border-stone-300 focus:border-black focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@email.com"
                      className="w-full px-3 py-2 text-xs border border-stone-300 focus:border-black focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Subject / Purpose
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-stone-300 focus:border-black focus:outline-hidden bg-white"
                  >
                    <option value="Showroom Visit & General Inquiry">Schedule a Showroom Visit</option>
                    <option value="Residential Living Project">Residential Living Project</option>
                    <option value="Commercial & Hotel Procurement">Commercial & Hotel Procurement</option>
                    <option value="Dealership & Wholesale Distribution">Wholesale & Dealership Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the models you are interested in, your timeline, or request a catalog consultation..."
                    className="w-full px-3 py-2 text-xs border border-stone-300 focus:border-black focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#191919] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
