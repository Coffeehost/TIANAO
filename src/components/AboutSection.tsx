import React from 'react';
import { COMPANY_INFO } from '../data/products';
import { IMAGES } from '../assets/images';
import { Factory, ShieldCheck, Award, Users, CheckCircle2, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FBFBFA] border-b border-[#E8E6E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header with Official Brand Logo */}
        <div className="max-w-4xl mb-16 flex items-start gap-5">
          <div className="h-16 sm:h-20 w-auto flex-shrink-0 bg-white border border-stone-200/90 px-3 py-1.5 shadow-xs rounded-xs flex items-center justify-center">
            <img
              src={IMAGES.brandLogo}
              alt="TIANAO Furniture Logo"
              className="h-full w-auto max-h-14 sm:max-h-16 object-contain"
            />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-widest font-semibold text-stone-500 block mb-1">
              COMPANY PROFILE · 企业简介 · 5GOOD 天奥家具
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#191919] leading-tight">
              天奥家具制造有限公司
            </h2>
            <p className="text-stone-600 font-mono text-xs uppercase tracking-wider mt-1">
              TIANAO FURNITURE MANUFACTURING CO., LTD. · SINO-UGANDA MBALE INDUSTRIAL PARK
            </p>
          </div>
        </div>

        {/* Split Showcase: High-Res Architecture + Verbatim Editorial Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden bg-stone-200 border border-stone-300 shadow-sm sticky top-28">
              <img
                src={IMAGES.factoryFacility}
                alt="Sino-Uganda Mbale Industrial Park - TIANAO Furniture 20,000 sqm Manufacturing Plant"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover aspect-[16/9]"
              />
              <div className="p-6 bg-[#191919] text-white font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                  <span className="text-amber-400 font-bold uppercase tracking-wider">中乌姆巴莱工业园生产基地</span>
                  <span className="text-stone-400">JULY 2024</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center pt-1">
                  <div>
                    <span className="text-white font-bold block text-sm">20,000 m²</span>
                    <span className="text-stone-400 text-[10px]">厂房面积</span>
                  </div>
                  <div>
                    <span className="text-white font-bold block text-sm">1,000 m²</span>
                    <span className="text-stone-400 text-[10px]">展厅面积</span>
                  </div>
                  <div>
                    <span className="text-white font-bold block text-sm">100+</span>
                    <span className="text-stone-400 text-[10px]">员工人数</span>
                  </div>
                </div>
                <div className="border-t border-stone-800 pt-2 text-[11px] text-stone-300">
                  <p>乌干达天唐集团 · 中国杭州奥默家具 合资成立</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8 font-sans">
            {/* Box 1: Verbatim Chinese Text from Document Page 2 */}
            <div className="p-6 sm:p-8 bg-white border border-[#E8E6E1] shadow-2xs space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
                  <h3 className="font-editorial text-2xl font-bold text-stone-900">
                    企业简介
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">
                  CATALOGUE PAGE 02 · 官方原文
                </span>
              </div>
              <p className="text-base text-stone-800 leading-relaxed font-sans font-medium">
                天奥家具制造有限公司是一家集研发、设计、生产、销售为一体的大中型现代软体家具制造企业。由乌干达天唐集团与中国杭州奥默家具于2024年7月合资成立，位于中乌姆巴莱工业园，目前占地厂房面积20,000平方米，展厅面积1,000平方米，员工100余人。公司拥有先进的生产设备和工艺技术，采用优质原材料，生产高品质的软体家具产品，成为东非区域行业的佼佼者。
              </p>
              <div className="p-4 bg-[#F5F4F0] border-l-3 border-stone-900 space-y-1">
                <p className="text-sm font-semibold text-stone-900 leading-relaxed">
                  坚持简约、时尚、清新、自然的设计理念，紧跟国际时尚潮流，彰显独特的文化魅力。未来，天奥家具将继续秉承“创新、卓越、共赢”的企业精神。
                </p>
              </div>
            </div>

            {/* Box 2: Verbatim English Text from Document Page 2 */}
            <div className="p-6 sm:p-8 bg-white border border-[#E8E6E1] shadow-2xs space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-stone-900 rounded-full" />
                  <h3 className="font-editorial text-2xl font-bold text-stone-900">
                    Company Profile
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">
                  OFFICIAL ENGLISH VERSION
                </span>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed font-sans">
                TIANAO Furniture Co., Ltd. is a medium-to-large modern upholstered furniture manufacturing enterprise integrating R&D, design, production, and sales. Established in July 2024 through a partnership between <strong>Uganda Tiantang Group</strong> and <strong>Hangzhou Aumere Furniture</strong> from China, located in Sino-Uganda Mbale Industrial Park, currently covering a factory area of 20,000 square meters and a showroom area of 1,000 square meters, with over 100 employees. The company boasts advanced production equipment and technology, utilizing high-quality raw materials to produce top-notch upholstered products, making it a leader in the East African regional and global industry.
              </p>
              <div className="p-4 bg-stone-50 border-l-3 border-amber-600 text-xs text-stone-700 italic leading-relaxed">
                "We adhere to a simple, fashionable, fresh, and natural design philosophy that follows global fashion trends while showcasing a unique cultural charm. In the future, TIANAO Furniture will continue to embrace the corporate spirit of 'Innovation, Excellence, and Win-Win'."
              </div>
            </div>
          </div>
        </div>

        {/* The 5 Excellence Strategy (Direct from PDF Page 2) */}
        <div className="pt-12 border-t border-[#E8E6E1]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-semibold block mb-1">
              THE 5GOOD PILLARS · 5大发展战略
            </span>
            <h3 className="font-editorial text-3xl font-bold text-stone-900">
              The Five Excellence Development Strategy
            </h3>
            <p className="text-xs text-stone-500 mt-2 font-mono">
              好健康 · 好舒适 · 好设计 · 好品质 · 好服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {COMPANY_INFO.fiveExcellence.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[#E8E6E1] hover:border-black transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-4">
                    <span>0{idx + 1}</span>
                    <span className="text-stone-700 font-semibold">{item.cn}</span>
                  </div>
                  <h4 className="font-editorial text-xl font-bold text-stone-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-100 flex items-center text-[11px] font-mono text-stone-500">
                  <span>TIANAO STANDARD</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
