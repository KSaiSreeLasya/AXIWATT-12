import React from 'react';
import { PageId } from '../types';
import {
  ASSETS,
  COMPANY_PROFILE,
  BESS_VALUE_CARDS,
  BESS_APPLICATIONS,
  BESS_CI_TABLE,
} from '../data/content';
import { PreFooterBanner } from '../components/PreFooterBanner';

interface BessScreenProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
  onOpenDatasheet: (title: string) => void;
  onToast: (msg: string) => void;
}

export const BessScreen: React.FC<BessScreenProps> = ({
  onRequestQuote,
  onOpenDatasheet,
  onToast,
}) => {
  return (
    <div className="w-full flex flex-col bg-[#fbfbfb] text-[#191c1e]">
      {/* 1. Hero Section (Image 6) */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-6 w-full">
        <div className="bg-[#f3f4f6] rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-orange-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-600" />
              BESS
            </span>
            <h1 className="text-3xl sm:text-5xl font-light text-neutral-900 leading-tight tracking-tight">
              Empowering your Energy 📻 Independence.
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

          {/* Right Hero Image (Wall-mounted BESS cabinet in sunlight) */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden h-[280px] sm:h-[340px] shadow-sm relative bg-neutral-200">
            <img
              src={ASSETS.bessHeroFacade}
              alt="Utility-scale BESS container energy storage farm"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 2. 3 Value Cards (Image 6) */}
      <section className="pb-16 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BESS_VALUE_CARDS.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-xs space-y-3"
            >
              <h3 className="font-bold text-base text-neutral-900">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Commercial & Industrial Section (Image 6) */}
      <section className="py-12 max-w-7xl mx-auto px-6 w-full">
        <div className="space-y-4 mb-10 max-w-4xl">
          <span className="text-orange-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-orange-600" />
            Commercial &amp; Industrial
          </span>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Battery Energy Storage Systems (BESS) have become a cornerstone of modern energy strategies in the Commercial and Industrial (C&amp;I) sector. They offer a range of benefits such as cost savings, energy resilience, power quality improvement, and facilitation of renewable energy integration. C&amp;I entities are increasingly deploying BESS to enhance operational efficiency, reduce dependency on the grid, and support sustainability goals.
          </p>
        </div>

        {/* 4 Feature Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {BESS_APPLICATIONS.map((app) => (
            <div
              key={app.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-3"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-orange-500 text-xl">
                  {app.icon}
                </span>
                <h4 className="font-bold text-sm text-neutral-900">{app.title}</h4>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {app.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Showcase: Dual Rack Photo + Specifications Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Dual Rack Image */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-neutral-950 h-[340px] sm:h-[460px] flex items-center justify-center p-4">
            <img
              src={ASSETS.bessCabinetDualRack}
              alt="AxiWatt Commercial & Industrial Dual-Rack BESS Cabinet"
              className="max-h-full object-contain"
            />
          </div>

          {/* Table */}
          <div className="lg:col-span-7 overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-neutral-400 font-semibold text-[11px] uppercase tracking-wider">
                  <th className="py-3 px-3">Application</th>
                  <th className="py-3 px-3">Typical Capacity</th>
                  <th className="py-3 px-3">Power Rating (kW)</th>
                  <th className="py-3 px-3">Backup Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-neutral-700">
                {BESS_CI_TABLE.map((row) => (
                  <tr key={row.application} className="hover:bg-neutral-50/60">
                    <td className="py-3.5 px-3 font-medium text-neutral-900">
                      {row.application}
                    </td>
                    <td className="py-3.5 px-3 font-mono text-xs">
                      {row.capacity}
                    </td>
                    <td className="py-3.5 px-3 font-mono text-xs">
                      {row.power}
                    </td>
                    <td className="py-3.5 px-3">
                      {row.backup}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pt-6 flex flex-wrap gap-4">
              <button
                onClick={onRequestQuote}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-lg text-xs font-semibold transition-all active:scale-95 shadow-sm"
              >
                Request Custom C&amp;I Sizing
              </button>
              <button
                onClick={() => onOpenDatasheet('AxiWatt Commercial & Industrial BESS Engineering Manual')}
                className="border border-neutral-300 hover:bg-neutral-100 text-neutral-800 px-6 py-2.5 rounded-lg text-xs font-semibold transition-all"
              >
                Download Architecture Whitepaper
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Banner: "Your Energy Future" (Image 6) */}
      <section className="relative w-full h-[280px] sm:h-[340px] overflow-hidden flex items-center mb-16">
        <img
          src={ASSETS.bessGoldenHourBanner}
          alt="BESS container array at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight max-w-lg">
            Your <br />
            <span className="font-semibold">Energy Future</span>
          </h2>
          <div className="pt-4">
            <button
              onClick={onRequestQuote}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-lg text-xs font-semibold transition-all active:scale-95"
            >
              Get Started with BESS
            </button>
          </div>
        </div>
      </section>

      {/* 5. Pre-Footer Banner */}
      <PreFooterBanner onToast={onToast} />
    </div>
  );
};
