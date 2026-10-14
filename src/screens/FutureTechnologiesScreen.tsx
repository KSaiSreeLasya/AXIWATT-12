import React, { useState } from 'react';
import { PageId } from '../types';
import {
  ASSETS,
  COMPANY_PROFILE,
  FUTURE_SECTORS,
} from '../data/content';
import { PreFooterBanner } from '../components/PreFooterBanner';

interface FutureTechnologiesScreenProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
  onOpenDatasheet: (title: string) => void;
  onToast: (msg: string) => void;
}

export const FutureTechnologiesScreen: React.FC<FutureTechnologiesScreenProps> = ({
  onRequestQuote,
  onOpenDatasheet,
  onToast,
}) => {
  const [currentSectorIdx, setCurrentSectorIdx] = useState(0);

  const prevSector = () => {
    setCurrentSectorIdx((prev) => (prev === 0 ? FUTURE_SECTORS.length - 1 : prev - 1));
  };

  const nextSector = () => {
    setCurrentSectorIdx((prev) => (prev === FUTURE_SECTORS.length - 1 ? 0 : prev + 1));
  };

  const activeSector = FUTURE_SECTORS[currentSectorIdx];

  return (
    <div className="w-full flex flex-col bg-[#fbfbfb] text-[#191c1e]">
      {/* 1. Hero Section (Image 8) */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-6 w-full">
        <div className="bg-[#f3f4f6] rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-orange-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-600" />
              FUTURE TECHNOLOGIES
            </span>
            <h1 className="text-3xl sm:text-5xl font-light text-neutral-900 leading-tight tracking-tight">
              Empowering a Safer, More 🔋 Efficient Energy Future.
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

          {/* Right Hero Image (Solar farm sunset with wind turbines) */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden h-[280px] sm:h-[340px] shadow-sm relative bg-neutral-100">
            <img
              src={ASSETS.futureHeroSolarSunset}
              alt="Solar energy farm at sunset with wind turbines"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 2. Spotlight Critical Care & Healthcare Card with Carousel (Image 8) */}
      <section className="py-8 max-w-7xl mx-auto px-6 w-full mb-16">
        <div className="bg-[#f3f4f6] rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Medical / Sector Image */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden h-[340px] sm:h-[420px] bg-neutral-900 shadow-sm relative">
            <img
              src={activeSector.image}
              alt={activeSector.name}
              className="w-full h-full object-cover transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right: Sector Content & Carousel Switcher */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-8">
            <div className="space-y-4">
              <p className="text-2xl sm:text-3xl font-light text-neutral-800 leading-snug">
                {activeSector.headline}
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-xl">
                {activeSector.details}
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <span className="text-base sm:text-lg font-semibold text-neutral-900">
                {activeSector.name}
              </span>

              {/* Navigation Arrows [<] [>] */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSector}
                  className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 transition-all active:scale-95 shadow-xs"
                  aria-label="Previous Sector"
                >
                  <span className="material-symbols-outlined text-lg">arrow_back</span>
                </button>
                <button
                  onClick={nextSector}
                  className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 transition-all active:scale-95 shadow-xs"
                  aria-label="Next Sector"
                >
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenDatasheet(`AxiWatt ${activeSector.name} Engineering Overview`)}
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2.5 rounded-lg text-xs font-semibold transition-all active:scale-95 shadow-xs"
              >
                Download {activeSector.name} Specifications
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pre-Footer Banner */}
      <PreFooterBanner onToast={onToast} />
    </div>
  );
};
