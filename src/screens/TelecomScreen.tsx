import React, { useState } from 'react';
import { PageId } from '../types';
import {
  ASSETS,
  COMPANY_PROFILE,
  TELECOM_ADVANTAGES,
  TELECOM_MODELS,
} from '../data/content';
import { PreFooterBanner } from '../components/PreFooterBanner';

interface TelecomScreenProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
  onOpenDatasheet: (title: string) => void;
  onToast: (msg: string) => void;
}

export const TelecomScreen: React.FC<TelecomScreenProps> = ({
  onRequestQuote,
  onOpenDatasheet,
  onToast,
}) => {
  const [selectedModel, setSelectedModel] = useState<string>('LFP 48100');
  const [openAccordion, setOpenAccordion] = useState<'intro' | 'specs' | 'features' | null>('intro');

  return (
    <div className="w-full flex flex-col bg-[#fbfbfb] text-[#191c1e]">
      {/* 1. Hero Section (Image 5) */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-6 w-full">
        <div className="bg-[#f3f4f6] rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-orange-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-600" />
              TELECOM
            </span>
            <h1 className="text-3xl sm:text-5xl font-light text-neutral-900 leading-tight tracking-tight">
              Empowering a one connected 🔋 world
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

          {/* Right Hero Image (Telecom Towers in open field under blue sky) */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden h-[280px] sm:h-[340px] shadow-sm relative">
            <img
              src={ASSETS.telecomHeroTowerField}
              alt="Telecom transmission tower field with outdoor battery shelters"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 2. 5 Advantage Cards (Image 5) */}
      <section className="pb-16 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {TELECOM_ADVANTAGES.map((item) => (
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

      {/* 3. Model Selector & Product Showcase ("■ TELEVAULT") */}
      <section className="max-w-7xl mx-auto px-6 w-full mb-16">
        <div className="bg-[#f3f4f6] rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <span className="text-orange-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-600" />
              TELEVAULT
            </span>
          </div>

          {/* Model pills: LFP 4850 | LFP 48100 */}
          <div className="flex gap-2">
            {TELECOM_MODELS.map((model) => (
              <button
                key={model}
                onClick={() => setSelectedModel(model)}
                className={`px-6 py-2 rounded-lg text-xs font-medium transition-all ${
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
            {/* Left Image of 19" 3U Rack Unit */}
            <div className="lg:col-span-5 rounded-xl overflow-hidden bg-neutral-950 h-[280px] sm:h-[340px] flex items-center justify-center p-4">
              <img
                src={ASSETS.telecomRackModule}
                alt={`${selectedModel} AxiWatt Telecom Battery Rack`}
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
                    AxiWatt TeleVault {selectedModel} is a standard 19-inch 3U rack-mounted telecom battery system engineered specifically for cell tower BTS base stations, optical transport hubs, and broadband nodes requiring uninterrupted 99.999% uptime under harsh grid conditions.
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
                    <p>• <strong>Nominal Voltage:</strong> 48V / 51.2V DC</p>
                    <p>• <strong>Rated Energy:</strong> {selectedModel === 'LFP 48100' ? '5.12 kWh (100Ah)' : '2.56 kWh (50Ah)'}</p>
                    <p>• <strong>Form Factor:</strong> Standard 19-inch 3U Rack Mount</p>
                    <p>• <strong>Cycle Life:</strong> 6,000+ Cycles @ 80% DoD</p>
                    <p>• <strong>Telemetry Interface:</strong> RS485 / CAN 2.0B / SNMP Cloud Gateway</p>
                    <p>• <strong>Operating Temperature:</strong> -20°C to +60°C</p>
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
                    <p>• Multi-rack parallel expansion up to 16 units (80+ kWh) without external combiner</p>
                    <p>• Built-in intelligent circuit breaker and anti-theft gyro GPS sensor</p>
                    <p>• Zero maintenance, silent operation, and complete thermal runaway immunity</p>
                    <p>• Proven 1st Sodium-Ion &amp; LiFePO4 commercial field pilot deployment</p>
                  </div>
                )}
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onOpenDatasheet(`AxiWatt TeleVault ${selectedModel} Technical Datasheet`)}
                  className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2.5 rounded-lg text-xs font-semibold transition-all active:scale-95"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Banner: "Partnering For A Sustainable Future" (Image 5) */}
      <section className="relative w-full h-[280px] sm:h-[340px] overflow-hidden flex items-center mb-16">
        <img
          src={ASSETS.telecomSunsetBanner}
          alt="Telecom transmission tower at dusk"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight max-w-lg">
            Partnering For A <br />
            <span className="font-semibold">Sustainable Future</span>
          </h2>
          <div className="pt-4">
            <button
              onClick={onRequestQuote}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-lg text-xs font-semibold transition-all active:scale-95"
            >
              Contact Telecom Specialists
            </button>
          </div>
        </div>
      </section>

      {/* 5. Pre-Footer Banner */}
      <PreFooterBanner onToast={onToast} />
    </div>
  );
};
