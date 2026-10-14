import React from 'react';
import { PageId } from '../types';
import { VERTICALS_LIST, ASSETS } from '../data/content';
import { PreFooterBanner } from '../components/PreFooterBanner';

interface VerticalsScreenProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
  onOpenDatasheet: (title: string) => void;
  onToast: (msg: string) => void;
}

export const VerticalsScreen: React.FC<VerticalsScreenProps> = ({
  onNavigate,
  onRequestQuote,
  onToast,
}) => {
  return (
    <div className="w-full flex flex-col bg-[#fbfbfb] text-[#191c1e]">
      {/* Hero section */}
      <section className="py-16 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl space-y-4 mb-12">
          <span className="text-orange-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-orange-600" />
            CORE VERTICALS
          </span>
          <h1 className="text-3xl sm:text-5xl font-light text-neutral-900 tracking-tight leading-tight">
            Specialized Battery &amp; Energy Storage Architectures
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            As a trusted partner for advanced battery solutions, AxiWatt offers a comprehensive range of products and services engineered for electric mobility, mission-critical telecom, commercial &amp; industrial BESS, clean lead replacement, and next-generation technologies.
          </p>
        </div>

        {/* 5 Verticals Grid (Image 3 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VERTICALS_LIST.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onNavigate(item.page)}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <div className="w-9 h-9 rounded-xl bg-orange-600 text-white flex items-center justify-center shadow-xs">
                    <span className="material-symbols-outlined text-lg">
                      {item.icon}
                    </span>
                  </div>
                  <span className="font-bold text-lg">{item.name}</span>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.tagline}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-gray-100 text-xs font-semibold text-primary">
                  <span>Explore {item.name} Specifications</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Giga-Plant Showcase Card */}
          <div className="bg-neutral-900 text-white rounded-3xl overflow-hidden border border-neutral-800 shadow-xs flex flex-col justify-between p-8 relative">
            <img
              src={ASSETS.homeGigaFactoryAerial}
              alt="AxiWatt Giga Factory"
              className="absolute inset-0 w-full h-full object-cover opacity-25"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10 space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-widest text-orange-400 bg-white/10 px-2 py-0.5 rounded">
                Manufacturing
              </span>
              <h3 className="text-2xl font-light text-white">
                1 GWh Advanced Production Facility
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                State-of-the-art automated robotics, laser welding, CT-scan quality assurance, and India&apos;s pioneering Sodium-Ion pilot lines.
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <button
                onClick={onRequestQuote}
                className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-lg text-xs font-semibold transition-all active:scale-95"
              >
                Schedule Facility Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer Banner */}
      <PreFooterBanner onToast={onToast} />
    </div>
  );
};
