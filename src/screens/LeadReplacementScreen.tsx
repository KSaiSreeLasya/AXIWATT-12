import React, { useState } from 'react';
import { PageId } from '../types';
import {
  ASSETS,
  COMPANY_PROFILE,
  LEAD_ADVANTAGES,
} from '../data/content';
import { PreFooterBanner } from '../components/PreFooterBanner';

interface LeadReplacementScreenProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
  onOpenDatasheet: (title: string) => void;
  onToast: (msg: string) => void;
}

export const LeadReplacementScreen: React.FC<LeadReplacementScreenProps> = ({
  onRequestQuote,
  onOpenDatasheet,
  onToast,
}) => {
  const [selectedModel, setSelectedModel] = useState<'LFP-1212' | 'LFP-1206'>('LFP-1212');
  const [openAccordion, setOpenAccordion] = useState<'intro' | 'specs' | 'features' | null>('intro');

  return (
    <div className="w-full flex flex-col bg-[#fbfbfb] text-[#191c1e]">
      {/* 1. Hero Section (Image 7) */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-6 w-full">
        <div className="bg-[#f3f4f6] rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-orange-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-600" />
              LEAD REPLACEMENT
            </span>
            <h1 className="text-3xl sm:text-5xl font-light text-neutral-900 leading-tight tracking-tight">
              Optimize your energy storage 🔋 and reduce energy losses.
            </h1>

            {/* Trusted By */}
            <div className="pt-4 space-y-2">
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">
                TRUSTED BY
              </span>
              <div className="flex flex-wrap items-center gap-6 text-sm font-extrabold text-neutral-800">
                {COMPANY_PROFILE.trustedBrands.map((brand) => (
                  <span key={brand} className="tracking-wider">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Hero Image (NOVA 24V100Ah battery unit) */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden h-[280px] sm:h-[340px] shadow-sm relative bg-neutral-100 flex items-center justify-center p-6">
            <img
              src={ASSETS.leadNova24V}
              alt="AxiWatt NOVA 24V100Ah Lithium Lead Replacement Battery"
              className="max-h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 2. 5 Benefit Cards (Image 7) */}
      <section className="pb-16 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {LEAD_ADVANTAGES.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-3"
            >
              <h3 className="font-bold text-sm text-neutral-900">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Model Selector & Product Showcase (Image 7) */}
      <section className="max-w-7xl mx-auto px-6 w-full mb-16">
        <div className="bg-[#f3f4f6] rounded-3xl p-6 sm:p-8 space-y-6">
          {/* Model pills: LFP-1212 | LFP-1206 */}
          <div className="flex justify-center gap-3">
            {(['LFP-1212', 'LFP-1206'] as const).map((model) => (
              <button
                key={model}
                onClick={() => setSelectedModel(model)}
                className={`px-6 py-2 rounded-lg text-xs font-semibold transition-all ${
                  selectedModel === model
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-gray-200'
                }`}
              >
                {model}
              </button>
            ))}
          </div>

          {/* Product Showcase Card with Accordion */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-xs">
            {/* Left Image of Matte Black Chassis */}
            <div className="lg:col-span-5 rounded-xl overflow-hidden bg-neutral-900 h-[280px] sm:h-[360px] flex items-center justify-center p-4">
              <img
                src={ASSETS.leadInverterChassis}
                alt={`${selectedModel} AxiWatt Lithium Energy Hub`}
                className="max-h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right Accordion */}
            <div className="lg:col-span-7 space-y-3">
              {/* Introduction */}
              <div className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'intro' ? null : 'intro')}
                  className="w-full flex justify-between items-center px-5 py-4 text-left font-bold text-xs uppercase tracking-wider text-neutral-800 hover:bg-neutral-50"
                >
                  <span>INTRODUCTION</span>
                  <span className="material-symbols-outlined text-sm">
                    {openAccordion === 'intro' ? 'remove' : 'add'}
                  </span>
                </button>
                {openAccordion === 'intro' && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-gray-100 pt-3">
                    AxiWatt {selectedModel} directly replaces hazardous, heavy lead-acid tubular batteries in home UPS, telecom stations, and industrial backup systems. Delivering 3x longer life, zero acid fumes, maintenance-free operation, and up to 99% round-trip efficiency.
                  </div>
                )}
              </div>

              {/* Specifications */}
              <div className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'specs' ? null : 'specs')}
                  className="w-full flex justify-between items-center px-5 py-4 text-left font-bold text-xs uppercase tracking-wider text-neutral-800 hover:bg-neutral-50"
                >
                  <span>SPECIFICATIONS</span>
                  <span className="material-symbols-outlined text-sm">
                    {openAccordion === 'specs' ? 'remove' : 'add'}
                  </span>
                </button>
                {openAccordion === 'specs' && (
                  <div className="px-5 pb-4 text-xs text-neutral-600 leading-relaxed border-t border-gray-100 pt-3 space-y-1">
                    <p>• <strong>Nominal Voltage:</strong> 12.8V / 25.6V DC</p>
                    <p>• <strong>Capacity:</strong> {selectedModel === 'LFP-1212' ? '120Ah (1.53 kWh)' : '60Ah (768 Wh)'}</p>
                    <p>• <strong>Cycle Life:</strong> 4,000+ Cycles @ 80% DoD</p>
                    <p>• <strong>Weight:</strong> 70% lighter than equivalent tubular lead-acid battery</p>
                    <p>• <strong>Charging Time:</strong> 2 hours full recharge vs 10 hours for lead-acid</p>
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'features' ? null : 'features')}
                  className="w-full flex justify-between items-center px-5 py-4 text-left font-bold text-xs uppercase tracking-wider text-neutral-800 hover:bg-neutral-50"
                >
                  <span>FEATURES</span>
                  <span className="material-symbols-outlined text-sm">
                    {openAccordion === 'features' ? 'remove' : 'add'}
                  </span>
                </button>
                {openAccordion === 'features' && (
                  <div className="px-5 pb-4 text-xs text-neutral-600 leading-relaxed border-t border-gray-100 pt-3 space-y-1">
                    <p>• Plug-and-play drop-in replacement compatible with all standard home inverters</p>
                    <p>• Built-in Smart BMS with over-voltage, under-voltage, and thermal protection</p>
                    <p>• Zero maintenance — no distilled water top-ups, zero corrosive acid venting</p>
                    <p>• Wall-mountable and compact floor footprint</p>
                  </div>
                )}
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onOpenDatasheet(`AxiWatt ${selectedModel} Lead-Acid Replacement Datasheet`)}
                  className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2.5 rounded-lg text-xs font-semibold transition-all active:scale-95"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pre-Footer Banner */}
      <PreFooterBanner onToast={onToast} />
    </div>
  );
};
