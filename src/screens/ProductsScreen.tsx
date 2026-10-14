import React, { useState } from 'react';
import { PageId } from '../types';
import { ASSETS, TECHNICAL_SPECS_DATA } from '../data/content';

interface ProductsScreenProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
  onOpenDatasheet: (title: string) => void;
  onOpenComparison: () => void;
}

export const ProductsScreen: React.FC<ProductsScreenProps> = ({
  onNavigate,
  onRequestQuote,
  onOpenDatasheet,
  onOpenComparison,
}) => {
  const [activeChemistryTab, setActiveChemistryTab] = useState<'both' | 'lfp' | 'nmc'>('both');

  const scrollToSpecs = () => {
    document.getElementById('tech-specs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 px-6 overflow-hidden bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <span className="inline-block bg-primary-container text-on-primary-container px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
              INDUSTRIAL GRADE BESS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-on-background leading-tight">
              Engineered Energy Resilience.
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
              AxiWatt delivers high-density, utility-scale battery energy storage systems designed
              for extreme performance and technical reliability in grid-balancing and industrial
              applications.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => {
                  document.getElementById('utility-solutions')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary text-on-primary px-7 py-3.5 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-on-primary-container active:scale-95 transition-all shadow-md"
              >
                Explore Solutions
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
              <button
                onClick={scrollToSpecs}
                className="border border-outline px-7 py-3.5 rounded-lg text-sm font-semibold text-on-surface-variant hover:bg-surface-container-low active:scale-95 transition-colors"
              >
                Technical Specs
              </button>
            </div>
          </div>

          <div className="relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden shadow-xl border border-outline-variant group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={ASSETS.productsHeroBESS}
              alt="AxiWatt V-STRUC utility-scale container units deployed at a solar installation"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Product Categories: Utility-Scale */}
      <section id="utility-solutions" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-on-background tracking-tight">
            Utility-Scale Solutions
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* V-STRUC 40 HC */}
          <div className="group bg-surface-container-lowest rounded-2xl border border-outline-variant overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="h-72 relative overflow-hidden bg-surface-container-low">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={ASSETS.vstruc40hc}
                alt="V-STRUC 40 HC 5.2 MWh high cube container"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-on-background/85 text-white px-3 py-1 rounded text-xs font-semibold backdrop-blur-md uppercase tracking-wider">
                ULTRA-HIGH DENSITY
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-on-surface">V-STRUC 40 HC</h3>
                  <p className="text-on-surface-variant text-sm">High-Cube Powerhouse</p>
                </div>
                <span className="text-primary font-bold text-xl tabular-nums">5.2 MWh</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>Optimized for Grid-Scale Peaking & Transmission Firming</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>Advanced Liquid Cooling Thermal Management</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>20-Year Operational Lifespan with Degradation Guarantees</span>
                </li>
              </ul>

              <button
                onClick={() => onOpenDatasheet('V-STRUC 40 HC Datasheet & Mechanical Specs')}
                className="w-full py-3.5 border border-outline rounded-lg text-sm font-semibold hover:bg-primary hover:text-white hover:border-primary active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">download</span>
                <span>Download Datasheet</span>
              </button>
            </div>
          </div>

          {/* V-STRUC 20 */}
          <div className="group bg-surface-container-lowest rounded-2xl border border-outline-variant overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="h-72 relative overflow-hidden bg-surface-container-low">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={ASSETS.vstruc20}
                alt="V-STRUC 20 modular container"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider">
                MODULAR VERSATILITY
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-on-surface">V-STRUC 20</h3>
                  <p className="text-on-surface-variant text-sm">Compact Grid Interface</p>
                </div>
                <span className="text-primary font-bold text-xl tabular-nums">2.4 MWh</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>Rapid Deployment Footprint for Space-Constrained Sites</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>Seamless Multi-Unit Parallel Interconnection</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>IP66-Rated Corrosion-Proof Environmental Enclosure</span>
                </li>
              </ul>

              <button
                onClick={() => onOpenDatasheet('V-STRUC 20 Datasheet & Substation Spec')}
                className="w-full py-3.5 border border-outline rounded-lg text-sm font-semibold hover:bg-primary hover:text-white hover:border-primary active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">download</span>
                <span>Download Datasheet</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specification Table */}
      <section id="tech-specs" className="py-20 bg-surface-container-low px-6 border-y border-outline-variant">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-on-background tracking-tight">
              Technical Specifications
            </h2>
            <p className="text-on-surface-variant text-sm mt-1">
              Performance benchmarks for AxiWatt utility-scale and commercial fleet
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-outline-variant bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-surface-container-highest">
                <tr>
                  <th className="p-4 font-semibold text-on-surface border-b border-outline-variant">
                    Parameter
                  </th>
                  <th className="p-4 font-semibold text-primary border-b border-outline-variant">
                    V-STRUC 40 HC
                  </th>
                  <th className="p-4 font-semibold text-primary border-b border-outline-variant">
                    V-STRUC 20
                  </th>
                  <th className="p-4 font-semibold text-on-surface border-b border-outline-variant">
                    V-MOD CORE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {TECHNICAL_SPECS_DATA.map((row, idx) => (
                  <tr
                    key={row.parameter}
                    className={idx % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface'}
                  >
                    <td className="p-4 font-semibold text-on-surface">{row.parameter}</td>
                    <td className="p-4 text-on-surface-variant font-mono">{row.vstruc40}</td>
                    <td className="p-4 text-on-surface-variant font-mono">{row.vstruc20}</td>
                    <td className="p-4 text-on-surface-variant font-mono">{row.vmodCore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Commercial & Industrial Section: Bento Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-on-background tracking-tight">
            Commercial & Industrial (C&I)
          </h2>
          <p className="text-on-surface-variant text-sm mt-1">
            Flexible power architecture for enterprise infrastructure and high-load campuses
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* NOVA PREMIUM 51100: Large Bento Item (8 cols) */}
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-2xl border border-outline-variant p-8 flex flex-col md:flex-row gap-8 group overflow-hidden shadow-xs hover:shadow-md transition-shadow">
            <div className="flex-1 space-y-4">
              <span className="text-secondary text-xs font-bold uppercase tracking-wider">
                FLAGSHIP C&amp;I &amp; TELECOM BESS
              </span>
              <h3 className="text-2xl font-bold text-on-surface">NOVA PREMIUM 51100</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                The pinnacle of modular battery engineering. The NOVA PREMIUM 51100 series (51.2V 100Ah / 5.12 kWh)
                features an integrated intelligent Battery Management System (BMS), compact 3U rack form factor,
                dual RS485/CAN communication, and 6,000+ cycle reliability for data centers, telecom towers, and commercial microgrids.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-3">
                <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/50">
                  <p className="text-xs text-on-surface-variant">Capacity &amp; Voltage</p>
                  <p className="font-bold text-primary text-base">51.2V · 100Ah (5.12 kWh)</p>
                </div>
                <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/50">
                  <p className="text-xs text-on-surface-variant">Intelligent BMS</p>
                  <p className="font-bold text-primary text-base">Real-time Telemetry &amp; Protection</p>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onOpenDatasheet('NOVA PREMIUM 51100 Series Datasheet')}
                  className="text-primary font-semibold text-xs flex items-center gap-1 hover:underline cursor-pointer"
                >
                  Download NOVA 51100 Specifications
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </button>
              </div>
            </div>

            <div className="flex-1 rounded-xl overflow-hidden min-h-[260px] relative border border-outline-variant/40">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={ASSETS.vmodCore}
                alt="NOVA PREMIUM 51100 battery module rack array"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* NATRIUM-Na 45140: Small Bento Item (4 cols) */}
          <div className="lg:col-span-4 bg-surface-container-lowest rounded-2xl border border-outline-variant p-8 flex flex-col gap-4 shadow-xs hover:shadow-md transition-shadow">
            <div className="h-44 rounded-xl overflow-hidden border border-outline-variant/40">
              <img
                className="w-full h-full object-cover"
                src={ASSETS.vmodEdge}
                alt="NATRIUM-Na Sodium-Ion Battery Module"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-secondary text-xs font-bold uppercase tracking-wider block mb-1">
                INDIA’S 1ST COMMERCIAL DEPLOYMENT
              </span>
              <h3 className="text-xl font-bold text-on-surface">NATRIUM-Na 45140</h3>
              <p className="text-on-surface-variant text-xs sm:text-sm mt-1 leading-relaxed">
                Pioneering Sodium-Ion (Na-Ion) chemistry engineered for extreme operating temperatures (-40°C to +65°C),
                zero thermal runaway risk, and abundant raw material supply without lithium or cobalt dependencies.
              </p>
            </div>
            <div className="mt-auto pt-2">
              <button
                onClick={() => onOpenDatasheet('NATRIUM-Na 45140 Sodium-Ion Technical Spec')}
                className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-1.5 transition-all cursor-pointer"
              >
                <span>View Sodium-Ion Specs</span>
                <span className="material-symbols-outlined text-base">open_in_new</span>
              </button>
            </div>
          </div>

          {/* Technical Matrix Trigger: Bento Item (12 cols) */}
          <div className="lg:col-span-12 bg-primary text-on-primary rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-3xl">analytics</span>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-1">AxiWatt Battery Comparison Matrix</h4>
                <p className="text-sm opacity-90 max-w-xl">
                  Side-by-side comparison of our Utility BESS containers, NOVA 51100 racks, and Sodium-Ion series
                  for tailored procurement and lifecycle analysis.
                </p>
              </div>
            </div>
            <button
              onClick={onOpenComparison}
              className="bg-white text-primary px-8 py-3.5 rounded-lg text-sm font-bold hover:bg-surface-container-low transition-all shrink-0 shadow active:scale-95 cursor-pointer"
            >
              Compare Models
            </button>
          </div>
        </div>
      </section>

      {/* Advanced Cell Chemistry Section */}
      <section className="py-20 bg-on-background text-on-primary-fixed-variant px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Advanced Cell Chemistry &amp; Innovation
            </h2>
            <p className="text-slate-400 mt-2 text-sm">
              Tailored electro-physics for specific mission requirements: LiFePO4 vs. Sodium-Ion (Na-Ion)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LiFePO4 */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">bolt</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">LiFePO4 (LFP)</h3>
                  <span className="text-xs text-primary font-mono">Long-Duration &amp; C&amp;I Benchmark</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Lithium Iron Phosphate is our primary chemistry for long-duration storage and NOVA series, offering
                unrivaled safety, zero cobalt risk, and exceptional cycle life up to 8,000+ cycles.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="text-slate-400">Cycle Stability</span>
                    <span className="text-white font-mono">8,000+ Cycles (@ 80% DoD)</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[95%] transition-all duration-1000" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="text-slate-400">Thermal Safety Margin</span>
                    <span className="text-white font-mono">Exceptional (Self-Limiting)</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[98%] transition-all duration-1000" />
                  </div>
                </div>
              </div>
            </div>

            {/* Sodium-Ion */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-fixed-dim/50 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-fixed-dim/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-2xl">science</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Sodium-Ion (Na-Ion)</h3>
                  <span className="text-xs text-primary-fixed-dim font-mono">
                    Next-Gen Supply Resilience &amp; Cold-Weather Benchmark
                  </span>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Commercialized by AxiWatt for telecom and grid pilot deployments. Abundant, low-cost raw materials,
                zero cobalt or nickel, safe 0V discharge transport, and superior low-temperature performance down to -40°C.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="text-slate-400">Cold-Temp Operational Margin</span>
                    <span className="text-white font-mono">-40°C to +65°C Operating Range</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary-fixed-dim h-full w-[96%] transition-all duration-1000" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="text-slate-400">Resource Abundance &amp; Safety</span>
                    <span className="text-white font-mono">Cobalt-Free · Non-Flammable</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary-fixed-dim h-full w-[94%] transition-all duration-1000" />
                  </div>
                </div>
              </div>
            </div>

            {/* NMC */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-fixed-dim/50 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-fixed-dim/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-2xl">speed</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">NMC High-Density</h3>
                  <span className="text-xs text-primary-fixed-dim font-mono">
                    High-Rate Ancillary Tier
                  </span>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Nickel Manganese Cobalt chemistry engineered for extreme power density, rapid response
                frequency regulation, and severe space-constrained industrial footprints.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="text-slate-400">Energy Density</span>
                    <span className="text-white font-mono">Highest Tier (240 Wh/kg)</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary-fixed-dim h-full w-[96%] transition-all duration-1000" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="text-slate-400">Fast-Charge Capability</span>
                    <span className="text-white font-mono">Optimized (Sub-Hour Ready)</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary-fixed-dim h-full w-[90%] transition-all duration-1000" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Solutions */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-on-background tracking-tight">
            Residential Solutions
          </h2>
          <p className="text-on-surface-variant text-sm mt-1">
            Smart energy management for modern homes and distributed estates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group bg-surface-container-lowest rounded-2xl border border-outline-variant overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="h-64 relative overflow-hidden bg-surface-container-low">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={ASSETS.vhomeInverter}
                alt="Solar Home Inverter"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider">
                NEW RELEASE
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-on-surface">V-HOME Smart Inverter</h3>
                  <p className="text-on-surface-variant text-sm">Hybrid Residential Power</p>
                </div>
                <span className="text-primary font-bold text-lg">5kW - 10kW</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>98.4% Peak Efficiency with Bi-Directional Charging</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>Integrated Smart App Monitoring & Weather Forecasting</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>Seamless Battery Backup Ready (10ms Transition)</span>
                </li>
              </ul>

              <button
                onClick={() => onOpenDatasheet('V-HOME Smart Residential System Specs')}
                className="w-full py-3.5 bg-primary text-on-primary rounded-lg text-sm font-semibold hover:bg-on-primary-container active:scale-98 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>View Home Solutions</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-2xl p-8 flex flex-col justify-center border border-outline-variant border-dashed">
            <div className="text-center space-y-4 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">home_app_logo</span>
              </div>
              <h4 className="text-2xl font-bold text-on-surface">Smart Ecosystem</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Control your entire home energy production, battery storage reserve, and EV charging
                schedules from a single intuitive interface. Real-time analytics and AI-driven
                dynamic tariff savings.
              </p>
              <div className="pt-2">
                <button
                  onClick={onRequestQuote}
                  className="px-6 py-2.5 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  Configure Residential Setup
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Scale Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-surface-container-highest rounded-3xl p-10 sm:p-14 shadow-lg border border-outline-variant space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">
            Ready to Scale?
          </h2>
          <p className="text-on-surface-variant text-base max-w-xl mx-auto">
            Our engineering team is ready to assist with project modeling, financial ROI simulation,
            and technical deployment strategies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <button
              onClick={onRequestQuote}
              className="bg-primary text-on-primary px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-on-primary-container transition-all active:scale-95 shadow"
            >
              Contact Engineering
            </button>
            <button
              onClick={() => onOpenDatasheet('AxiWatt Technical Resource Center & Documentation')}
              className="bg-surface-container-lowest text-primary border border-primary px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-surface-container-low transition-all active:scale-95"
            >
              Resource Center
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
