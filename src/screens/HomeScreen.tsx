import React, { useState } from 'react';
import { PageId } from '../types';
import {
  ASSETS,
  COMPANY_PROFILE,
  VERTICALS_LIST,
  HOME_UPDATES,
  HOME_PARTNERS,
} from '../data/content';
import { PreFooterBanner } from '../components/PreFooterBanner';

interface HomeScreenProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
  onOpenDatasheet: (title: string) => void;
  onToast: (msg: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onRequestQuote,
  onOpenDatasheet,
  onToast,
}) => {
  const [activeHeroTab, setActiveHeroTab] = useState<'automotive' | 'telecom' | 'bess' | 'lead-replacement'>('telecom');

  const heroData = {
    telecom: {
      title: 'Reliable telecom battery backup systems from AxiWatt Technologies.',
      page: 'telecom' as PageId,
    },
    automotive: {
      title: 'High-density, fast-charging EV power packs driving electric mobility.',
      page: 'automotive' as PageId,
    },
    bess: {
      title: 'Commercial & Industrial energy storage systems for grid stability.',
      page: 'bess' as PageId,
    },
    'lead-replacement': {
      title: 'Next-generation NOVA LiFePO4 batteries replacing hazardous lead-acid.',
      page: 'lead-replacement' as PageId,
    },
  };

  return (
    <div className="w-full flex flex-col bg-[#fbfbfb] text-[#191c1e]">
      {/* 1. Hero Section (Image 1) */}
      <section className="relative w-full h-[540px] sm:h-[620px] lg:h-[660px] overflow-hidden flex flex-col justify-between">
        <img
          src={ASSETS.homeHeroTelecomTower}
          alt="Clean Energy Battery Storage Facility at twilight"
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Dark crimson/dusk gradient overlay matching Image 1 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />

        {/* Hero Title */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 sm:pt-36">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.18]">
              {heroData[activeHeroTab].title}
            </h1>
            <div className="pt-2">
              <button
                onClick={() => onNavigate(heroData[activeHeroTab].page)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-fixed hover:underline"
              >
                <span>Learn more about {activeHeroTab.replace('-', ' ')}</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Bottom Horizontal Selector Bar */}
        <div className="relative z-10 w-full border-t border-white/20 bg-black/30 backdrop-blur-xs">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between overflow-x-auto py-4 gap-4 text-xs sm:text-sm font-medium text-white/70">
            <button
              onClick={() => {
                setActiveHeroTab('automotive');
                onNavigate('automotive');
              }}
              className={`hover:text-white transition-colors pb-1 whitespace-nowrap ${
                activeHeroTab === 'automotive' ? 'text-white border-b-2 border-white font-bold' : ''
              }`}
            >
              Automotive
            </button>
            <button
              onClick={() => {
                setActiveHeroTab('telecom');
                onNavigate('telecom');
              }}
              className={`hover:text-white transition-colors pb-1 whitespace-nowrap ${
                activeHeroTab === 'telecom' ? 'text-white border-b-2 border-white font-bold' : ''
              }`}
            >
              Telecom
            </button>
            <button
              onClick={() => {
                setActiveHeroTab('bess');
                onNavigate('bess');
              }}
              className={`hover:text-white transition-colors pb-1 whitespace-nowrap ${
                activeHeroTab === 'bess' ? 'text-white border-b-2 border-white font-bold' : ''
              }`}
            >
              BESS
            </button>
            <button
              onClick={() => {
                setActiveHeroTab('lead-replacement');
                onNavigate('lead-replacement');
              }}
              className={`hover:text-white transition-colors pb-1 whitespace-nowrap ${
                activeHeroTab === 'lead-replacement' ? 'text-white border-b-2 border-white font-bold' : ''
              }`}
            >
              Lead Replacement
            </button>
          </div>
        </div>
      </section>

      {/* 2. Our Company Section (Image 1) */}
      <section id="about-section" className="py-20 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Solar Panel Farm */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-sm h-[320px] sm:h-[400px]">
            <img
              src={ASSETS.homeOurCompanySolar}
              alt="Sustainable solar and eco-smart clean energy innovation campus"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right Card */}
          <div className="lg:col-span-6 bg-[#f3f4f6] rounded-3xl p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-orange-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-orange-600" />
                Our Company
              </span>
              <p className="text-neutral-800 text-lg sm:text-xl font-normal leading-relaxed">
                At AxiWatt, we&apos;re committed to driving a seamless transition to safe and clean energy.
              </p>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Our singular purpose is to empower a sustainable future, making us a go-to partner for advanced battery solutions.
              </p>
            </div>

            <div>
              <button
                onClick={() => onOpenDatasheet('AxiWatt Corporate Profile & Technical Capabilities')}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all active:scale-95 shadow-sm"
              >
                About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Five Stats Cards (Image 1) */}
      <section className="pb-16 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {COMPANY_PROFILE.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-2"
            >
              <p className="text-3xl font-light text-neutral-900 tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs text-neutral-500 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Sustainability Section (Image 1) */}
      <section className="py-12 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Text Card */}
          <div className="lg:col-span-6 bg-[#f3f4f6] rounded-3xl p-8 sm:p-12 space-y-5 flex flex-col justify-center">
            <span className="text-orange-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-600" />
              SUSTAINABILITY
            </span>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              AxiWatt Technologies is dedicated to accelerating positive change through innovative advanced battery solutions. By providing efficient and environmentally responsible energy solutions, we enable our partners and communities to thrive in a world powered by clean energy.
            </p>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Furthermore, we&apos;re pioneering a circular economy by giving spent batteries a secondary life through recycling, reducing waste, and conserving resources, underscoring our commitment to a more sustainable and environmentally friendly energy storage industry.
            </p>
          </div>

          {/* Right River Forest Aerial */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-sm h-[320px] sm:h-[400px]">
            <img
              src={ASSETS.homeSustainabilityRiver}
              alt="Lush green forest river horseshoe bend"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 5. Verticals Section (Image 1) */}
      <section className="py-20 max-w-7xl mx-auto px-6 w-full">
        <div className="space-y-3 mb-10">
          <span className="text-orange-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-orange-600" />
            Verticals
          </span>
          <p className="text-neutral-600 text-sm sm:text-base max-w-2xl">
            As a trusted partner for advanced battery solutions, we offer a comprehensive range of products and services.
          </p>
        </div>

        {/* 5 Vertical Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {VERTICALS_LIST.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.page)}
              className="group relative rounded-2xl overflow-hidden h-[300px] border border-gray-100 shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-end p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="relative z-10 text-white space-y-1">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-orange-400 text-lg">
                    {item.icon}
                  </span>
                  <span className="font-bold text-sm">{item.name}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 6. Updates / News Section (Image 1) */}
      <section id="updates-section" className="py-16 max-w-7xl mx-auto px-6 w-full">
        <div className="space-y-2 mb-10">
          <span className="text-orange-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-orange-600" />
            Updates
          </span>
          <p className="text-neutral-500 text-xs sm:text-sm">
            Get the latest updates on press releases and other announcements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOME_UPDATES.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenDatasheet(item.title)}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-medium text-neutral-400">
                    {item.date}
                  </span>
                  <h3 className="font-semibold text-neutral-900 text-sm mt-1 leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
                <span className="text-xs text-primary font-medium flex items-center gap-1 pt-2">
                  Read announcement <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Partners and Collaborations Section (Image 1) */}
      <section className="py-16 max-w-7xl mx-auto px-6 w-full">
        <div className="space-y-2 mb-10">
          <span className="text-orange-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-orange-600" />
            Partners and Collaborations
          </span>
          <p className="text-neutral-500 text-xs sm:text-sm">
            Get the latest updates on press releases and other announcements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOME_PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-xs space-y-4"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">
                  verified
                </span>
                <span className="font-extrabold text-base tracking-wider text-neutral-900">
                  {partner.name}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Pre-Footer Banner ("Your Complete Energy Partner") */}
      <PreFooterBanner onToast={onToast} />
    </div>
  );
};
