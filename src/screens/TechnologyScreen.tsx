import React, { useState } from 'react';
import { PageId } from '../types';
import { ASSETS, TECH_VALUES, TECH_CAPABILITIES_TABLE } from '../data/content';
import { PreFooterBanner } from '../components/PreFooterBanner';

interface TechnologyScreenProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
  onOpenDatasheet: (title: string) => void;
  onToast: (msg: string) => void;
}

export const TechnologyScreen: React.FC<TechnologyScreenProps> = ({
  onToast,
}) => {
  const [activeTab, setActiveTab] = useState<string>('cell-tech');

  const navLinks = [
    { id: 'cell-tech', label: 'Cell Technology' },
    { id: 'smart-elec', label: 'Smart Electrical and Electronics' },
    { id: 'cooling', label: 'Advanced Cooling Technologies' },
    { id: 'charging', label: 'Charging Technologies' },
    { id: 'inhouse', label: 'In House Capabilities' },
  ];

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex flex-col bg-[#fbfbfb] text-[#191c1e]">
        {/* 1. Hero Eco-House Banner (Image 2) */}
      <section className="relative w-full h-[360px] sm:h-[460px] overflow-hidden">
        <img
          src={ASSETS.techHeroEcoHouse}
          alt="Modern sustainable clean energy innovation campus"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </section>

      {/* 2. Headline & 4 Value Pillars (Image 2) */}
      <section className="py-16 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
          <span className="text-orange-600 font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-orange-600" />
            TECHNOLOGY
          </span>
          <h1 className="text-2xl sm:text-4xl font-light text-neutral-900 leading-snug tracking-tight">
            At AxiWatt Technologies, we&apos;re committed to driving innovation in battery packing solutions that prioritise safety, efficiency and sustainability
          </h1>
        </div>

        {/* 4 Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_VALUES.map((val) => (
            <div
              key={val.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-3"
            >
              <div className="flex items-center gap-2 text-neutral-800">
                <span className="material-symbols-outlined text-orange-500 text-xl">
                  {val.icon}
                </span>
                <h3 className="font-bold text-sm">{val.title}</h3>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Technology Content with Left Sticky Nav (Image 2) */}
      <section className="py-12 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Sticky Anchor Links */}
          <div className="lg:col-span-4 sticky top-28 bg-white p-6 rounded-2xl border border-gray-100 shadow-xs hidden lg:block space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`w-full text-left py-3 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeTab === link.id
                    ? 'bg-neutral-900 text-white font-semibold'
                    : 'text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Technology Sections */}
          <div className="lg:col-span-8 space-y-20">
            {/* Section 1: Cell Technology */}
            <div id="cell-tech" className="space-y-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-light text-neutral-900">
                Cell Technology
              </h2>
              {/* Dual showcase: 3D Engineering Cutaway & CT-scan Diagnostics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-neutral-900 h-[280px] sm:h-[340px]">
                  <img
                    src={ASSETS.techCellCutaway}
                    alt="Advanced LiFePO4 & NMC cell engineering architecture cutaway"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-neutral-900 h-[280px] sm:h-[340px]">
                  <img
                    src={ASSETS.techCellXRay}
                    alt="Internal X-ray and CT-scan analysis of battery cell integrity"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                At AxiWatt Technologies, with a deep understanding of emerging cell technologies such as solid-state batteries, lithium-sulfur batteries, sodium-ion batteries, and silicon anode batteries, we stay at the forefront of the industry.
              </p>
            </div>

            {/* Section 2: Smart Electrical and Electronics */}
            <div id="smart-elec" className="space-y-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-light text-neutral-900">
                Smart Electrical and Electronics
              </h2>
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-neutral-950 h-[340px] sm:h-[420px]">
                <img
                  src={ASSETS.techSmartBmsPcb}
                  alt="High voltage smart battery management system PCB"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                At AxiWatt Technologies, we&apos;re revolutionising battery management with innovative solutions that combine the power of IoT, smart electronics, and advanced High Voltage (HV) box technology. Our integrated systems enable real-time monitoring, predictive maintenance, and optimised performance, ensuring enhanced safety, efficiency, and reliability in battery packaging. With IoT connectivity, smart electronics, and HV box solutions, we&apos;re empowering smarter, more connected devices and vehicles that meet the demands of a rapidly evolving energy landscape.
              </p>
            </div>

            {/* Section 3: Advanced Cooling Technologies */}
            <div id="cooling" className="space-y-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-light text-neutral-900">
                Advanced Cooling Technologies
              </h2>
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-neutral-900 h-[340px] sm:h-[420px]">
                <img
                  src={ASSETS.techCoolingPlate}
                  alt="Serpentine liquid cooling thermal plate"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                At the heart of our battery innovation lies advanced cooling technologies that enable efficient thermal management, playing a vital role in enhancing battery performance, safety, and lifespan. By effectively regulating temperature, our advanced cooling systems ensure optimal battery operation, even in the most demanding applications, ultimately driving greater efficiency, reliability, and longevity in our energy storage solutions.
              </p>
            </div>

            {/* Section 4: Charging Technologies */}
            <div id="charging" className="space-y-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-light text-neutral-900">
                Charging Technologies
              </h2>
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-neutral-900 h-[340px] sm:h-[420px]">
                <img
                  src={ASSETS.techChargingScooter}
                  alt="EV scooter plugged into wall-mounted charging station"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Our charging technologies cater to diverse needs, from standard to ultra-fast charging solutions.
              </p>
            </div>

            {/* Section 5: In House Capabilities */}
            <div id="inhouse" className="space-y-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-light text-neutral-900">
                In House Capabilities
              </h2>
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-neutral-900 h-[340px] sm:h-[420px]">
                <img
                  src={ASSETS.techTestLab}
                  alt="Engineers in lab coats performing EV chassis dynamometer diagnostics"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Capabilities Testing Table */}
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <tbody className="divide-y divide-gray-100">
                    {TECH_CAPABILITIES_TABLE.map((row) => (
                      <tr key={row.stage} className="hover:bg-neutral-50/50">
                        <td className="py-4 px-6 font-semibold text-neutral-900 w-1/3">
                          {row.stage}
                        </td>
                        <td className="py-4 px-6 text-neutral-600 leading-relaxed">
                          {row.details}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
