import React, { useState } from 'react';
import { PageId } from '../types';
import {
  ASSETS,
  COMPANY_PROFILE,
  AUTOMOTIVE_ADVANTAGES,
  AUTOMOTIVE_MODELS,
} from '../data/content';
import { PreFooterBanner } from '../components/PreFooterBanner';

interface AutomotiveScreenProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
  onOpenDatasheet: (title: string) => void;
  onToast: (msg: string) => void;
}

export const AutomotiveScreen: React.FC<AutomotiveScreenProps> = ({
  onRequestQuote,
  onOpenDatasheet,
  onToast,
}) => {
  const [activeCategory, setActiveCategory] = useState<'E 2W' | 'E 3W' | 'E BIKE'>('E 2W');
  const [selectedModel, setSelectedModel] = useState<string>('NMC 6039');
  const [openAccordion, setOpenAccordion] = useState<'intro' | 'specs' | 'features' | null>('intro');

  return (
    <div className="w-full flex flex-col bg-[#fbfbfb] text-[#191c1e]">
      {/* 1. Hero Section (Image 4) */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-6 w-full">
        <div className="bg-[#f3f4f6] rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-orange-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-600" />
              AUTOMOTIVE
            </span>
            <h1 className="text-3xl sm:text-5xl font-light text-neutral-900 leading-tight tracking-tight">
              Empowering Change, one Electric 🔋 vehicle at a time
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

          {/* Right Hero Image (Clean-tech EV powertrain showcase) */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden h-[280px] sm:h-[340px] bg-neutral-900 shadow-sm relative">
            <img
              src={ASSETS.autoHeroBike}
              alt="Electric mobility powertrain showcase and modular lithium battery pack"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 2. 5 Advantage Cards (Image 4) */}
      <section className="pb-16 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {AUTOMOTIVE_ADVANTAGES.map((item) => (
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

      {/* 3. Sub-Category Tabs [ E 2W | E 3W | E BIKE ] */}
      <section className="max-w-7xl mx-auto px-6 w-full text-center mb-6">
        <div className="inline-flex p-1.5 bg-[#f3f4f6] rounded-xl gap-2">
          {(['E 2W', 'E 3W', 'E BIKE'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 4. Model Selector Bar ("■ VELOCITI") */}
      <section className="max-w-7xl mx-auto px-6 w-full mb-12">
        <div className="bg-[#f3f4f6] rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <span className="text-orange-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-600" />
              VELOCITI
            </span>
          </div>

          {/* Model pills */}
          <div className="flex flex-wrap gap-2">
            {AUTOMOTIVE_MODELS.map((model) => (
              <button
                key={model}
                onClick={() => setSelectedModel(model)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  selectedModel === model
                    ? 'bg-neutral-900 text-white shadow-xs font-semibold'
                    : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-gray-200'
                }`}
              >
                {model}
              </button>
            ))}
          </div>

          {/* Product Showcase Card with Accordion */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-xs">
            {/* Left Image of Battery Pack */}
            <div className="lg:col-span-5 rounded-xl overflow-hidden bg-neutral-100 h-[280px] sm:h-[340px] flex items-center justify-center p-4">
              <img
                src={ASSETS.autoBatteryPack}
                alt={`${selectedModel} AxiWatt Lithium Battery Pack`}
                className="max-h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right Accordion */}
            <div className="lg:col-span-7 space-y-3">
              {/* Introduction Accordion Item */}
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
                    The AxiWatt {selectedModel} is an automotive-grade {selectedModel.includes('LFP') ? 'Lithium Iron Phosphate (LiFePO4)' : 'Nickel Manganese Cobalt (NMC)'} battery system engineered for high thermal tolerance, fast charging, and maximum energy density in {activeCategory} electric mobility applications.
                  </div>
                )}
              </div>

              {/* Specifications Accordion Item */}
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
                    <p>• <strong>Nominal Voltage:</strong> {selectedModel.includes('60') ? '60V' : selectedModel.includes('72') ? '72V' : selectedModel.includes('51') ? '51.2V' : '48V'}</p>
                    <p>• <strong>Nominal Capacity:</strong> {selectedModel.slice(-2)} Ah</p>
                    <p>• <strong>Cycle Life:</strong> 2,500+ cycles @ 80% DoD</p>
                    <p>• <strong>Protection Rating:</strong> IP67 Weatherproof Sealed Enclosure</p>
                    <p>• <strong>Cell Chemistry:</strong> {selectedModel.includes('LFP') ? 'Tier-1 LiFePO4 Prismatic' : 'High Energy Density NMC'}</p>
                  </div>
                )}
              </div>

              {/* Features Accordion Item */}
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
                    <p>• Intelligent Bluetooth &amp; CAN 2.0B Telemetry with companion mobile app</p>
                    <p>• Multi-stage active thermal regulation and short-circuit isolation</p>
                    <p>• Fast-charging compatible: 0% to 80% charge in 34 minutes</p>
                    <p>• Certified under AIS-156 and UN 38.3 standards</p>
                  </div>
                )}
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onOpenDatasheet(`AxiWatt Velociti ${selectedModel} Specification Sheet`)}
                  className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2.5 rounded-lg text-xs font-semibold transition-all active:scale-95"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Banner: "Joining The Ev Revolution" (Image 4) */}
      <section className="relative w-full h-[280px] sm:h-[340px] overflow-hidden flex items-center mb-16">
        <img
          src={ASSETS.autoEvPlugBanner}
          alt="EV charging connector plugged in with glowing illumination"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight max-w-lg">
            Joining The <br />
            <span className="font-semibold">Ev Revolution</span>
          </h2>
          <div className="pt-4">
            <button
              onClick={onRequestQuote}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-lg text-xs font-semibold transition-all active:scale-95"
            >
              Request Fleet Quote
            </button>
          </div>
        </div>
      </section>

      {/* 6. Pre-Footer Banner */}
      <PreFooterBanner onToast={onToast} />
    </div>
  );
};
