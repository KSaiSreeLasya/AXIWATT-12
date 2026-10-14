import React, { useState } from 'react';
import { PageId } from '../types';
import { ASSETS, ESG_REPORTS } from '../data/content';

interface SustainabilityScreenProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
  onOpenDatasheet: (title: string) => void;
  onToast: (msg: string) => void;
}

export const SustainabilityScreen: React.FC<SustainabilityScreenProps> = ({
  onRequestQuote,
  onOpenDatasheet,
  onToast,
}) => {
  const [showArchive, setShowArchive] = useState(false);

  return (
    <div className="w-full space-y-16 py-8">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-surface-container h-[460px] sm:h-[500px] flex items-center shadow-lg border border-outline-variant">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/75 to-transparent z-10" />
            <img
              src={ASSETS.sustainabilityAerialFacility}
              alt="Aerial view of AxiWatt energy storage facility powered by solar and wind"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="relative z-20 max-w-2xl px-8 sm:px-12 space-y-5">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">energy_savings_leaf</span>
              <span>Circular Economy &amp; Battery Recycling</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-on-surface leading-tight">
              Engineered for a <br className="hidden sm:inline" />
              Circular Future
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
              AxiWatt Technologies&apos; commitment to sustainability is anchored by our closed-loop battery
              recycling platform, long-term buyback agreements for end-of-life cells, and 100% cobalt-free battery chemistries.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onOpenDatasheet('AxiWatt 2024 Sustainability & ESG Report')}
                className="bg-primary text-on-primary px-7 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-on-primary-container active:scale-95 transition-all shadow"
              >
                <span>Download ESG Report</span>
                <span className="material-symbols-outlined text-base">download</span>
              </button>
              <button
                onClick={() => onOpenDatasheet('AxiWatt Closed-Loop Recycling Whitepaper')}
                className="bg-transparent border border-outline px-6 py-3 rounded-lg text-sm font-semibold text-on-surface hover:bg-surface-container-low transition-colors"
              >
                View Recycling Framework
              </button>
            </div>
          </div>
        </section>

        {/* ESG Stats Bento */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 bg-surface-container-lowest border border-outline-variant rounded-2xl flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">
              energy_savings_leaf
            </span>
            <div>
              <div className="text-4xl font-bold text-primary tracking-tight tabular-nums">
                100%
              </div>
              <div className="text-sm font-medium text-on-surface-variant mt-1">
                Solar-Powered Manufacturing
              </div>
            </div>
          </div>

          <div className="p-8 bg-surface-container-lowest border border-outline-variant rounded-2xl flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">recycling</span>
            <div>
              <div className="text-4xl font-bold text-primary tracking-tight tabular-nums">
                98%
              </div>
              <div className="text-sm font-medium text-on-surface-variant mt-1">
                Material Recyclability Rate
              </div>
            </div>
          </div>

          <div className="p-8 bg-surface-container-lowest border border-outline-variant rounded-2xl flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">
              verified_user
            </span>
            <div>
              <div className="text-4xl font-bold text-primary tracking-tight tabular-nums">
                0%
              </div>
              <div className="text-sm font-medium text-on-surface-variant mt-1">
                Cobalt-Free Chemistry
              </div>
            </div>
          </div>

          <div className="p-8 bg-surface-container-lowest border border-outline-variant rounded-2xl flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">handshake</span>
            <div>
              <div className="text-4xl font-bold text-primary tracking-tight tabular-nums">
                450+
              </div>
              <div className="text-sm font-medium text-on-surface-variant mt-1">
                Ethical Supply Partners
              </div>
            </div>
          </div>
        </section>

        {/* Circular Economy Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-6">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-container text-on-primary-container text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">autorenew</span>
              <span>Circular Economy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">
              Beyond Lifecycle Management
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              We&apos;ve engineered the AxiWatt BESS (Battery Energy Storage System) to be fully modular,
              serving both industrial and residential sectors. At end-of-life, components are
              harvested, not discarded. Our proprietary &ldquo;Closed Loop&rdquo; process ensures
              that lithium, iron, and phosphate are recovered and re-introduced into the
              manufacturing pipeline.
            </p>
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-2xl mt-0.5">
                  check_circle
                </span>
                <div>
                  <p className="font-bold text-sm text-on-surface">Direct Re-manufacturing</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    Components designed for disassembly and rapid deployment in second-life microgrids.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-2xl mt-0.5">
                  check_circle
                </span>
                <div>
                  <p className="font-bold text-sm text-on-surface">Material Recovery</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    Proprietary hydrometallurgical recycling reducing landfill footprint by 95%.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-md border border-outline-variant bg-surface-container-low h-[380px] sm:h-[420px] group">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src={ASSETS.sustainabilityRecyclingLab}
              alt="High-tech lab with robotic arms disassembling battery module for recycling"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Clean Production & Supply Chain Transparency */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 bg-surface-container-highest rounded-2xl border border-outline-variant relative overflow-hidden group shadow-sm">
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-bold text-on-surface">Clean Production</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Our Gigafactory operates on 100% renewable energy, utilizing an on-site 50MW solar
                array and AxiWatt&apos;s own storage systems to maintain zero-carbon operations 24/7,
                powering the transition for industrial and residential communities alike.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                  <span>Carbon Neutrality</span>
                  <span className="text-primary font-bold">Target Met (Scope 1 & 2)</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-2.5 overflow-hidden">
                  <div className="bg-primary h-full rounded-full w-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10 bg-on-tertiary-fixed-variant text-on-tertiary rounded-2xl border border-outline-variant relative overflow-hidden group shadow-sm">
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-bold text-white">Supply Chain Transparency</h3>
              <p className="text-sm text-tertiary-fixed leading-relaxed">
                We have eliminated Cobalt from our LFP chemistry to avoid human rights risks. Every
                gram of raw material is tracked via cryptographic blockchain ledger from the mine
                to the module.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3.5 py-1 rounded-full border border-tertiary-fixed-dim text-xs font-semibold text-white bg-white/5">
                  Cobalt-Free
                </span>
                <span className="px-3.5 py-1 rounded-full border border-tertiary-fixed-dim text-xs font-semibold text-white bg-white/5">
                  Conflict-Free
                </span>
                <span className="px-3.5 py-1 rounded-full border border-tertiary-fixed-dim text-xs font-semibold text-white bg-white/5">
                  Blockchain-Verified
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ESG Reports Section */}
        <section className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-on-surface tracking-tight mb-2">
                Leadership & Governance
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Our ESG performance is audited annually by independent third-party agencies to ensure
                compliance with Global Reporting Initiative (GRI) and SASB standards.
              </p>
            </div>
            <button
              onClick={() => {
                setShowArchive(!showArchive);
                onToast(showArchive ? 'Closed archive' : 'Displaying archive for years 2018–2023');
              }}
              className="bg-on-surface text-surface px-5 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 hover:bg-inverse-surface transition-colors cursor-pointer"
            >
              <span>{showArchive ? 'Hide Archive' : 'Archive (2018-2023)'}</span>
              <span className="material-symbols-outlined text-base">history</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ESG_REPORTS.map((report) => (
              <div
                key={report.id}
                className="group p-6 border border-outline-variant rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 flex flex-col justify-between bg-surface-container-lowest"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      {report.icon}
                    </span>
                    <span className="text-xs text-on-surface-variant bg-surface-container px-3 py-1 rounded-full font-mono">
                      {report.size}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-on-surface mb-1">{report.title}</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {report.description}
                  </p>
                </div>
                <button
                  onClick={() => onOpenDatasheet(report.title)}
                  className="mt-6 flex items-center gap-1.5 text-primary text-xs font-bold group-hover:gap-2.5 transition-all self-start cursor-pointer"
                >
                  <span>Download</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            ))}
          </div>

          {showArchive && (
            <div className="mt-8 pt-6 border-t border-outline-variant grid grid-cols-2 sm:grid-cols-4 gap-4 animate-in fade-in duration-200">
              {['2023 GRI Report', '2022 ESG Audit', '2021 Impact Study', '2020 NetZero Pledge'].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => onOpenDatasheet(item)}
                    className="p-3 bg-surface-container-low rounded-lg text-xs text-left font-medium text-on-surface hover:text-primary transition-colors flex items-center justify-between"
                  >
                    <span>{item}</span>
                    <span className="material-symbols-outlined text-sm">download</span>
                  </button>
                )
              )}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="rounded-2xl overflow-hidden bg-primary-container p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="max-w-xl text-center md:text-left space-y-2">
            <h2 className="text-3xl font-bold text-on-primary-fixed tracking-tight">
              Let&apos;s build a zero-waste grid.
            </h2>
            <p className="text-sm sm:text-base text-on-primary-fixed-variant leading-relaxed">
              Partner with AxiWatt for sustainable, industrial-grade storage solutions that don&apos;t
              compromise the planet.
            </p>
          </div>
          <button
            onClick={onRequestQuote}
            className="bg-on-primary-fixed text-primary-fixed-dim px-8 py-3.5 rounded-full text-sm font-bold shadow-lg hover:scale-105 active:scale-95 transition-transform shrink-0"
          >
            Consult With Our ESG Team
          </button>
        </section>
      </div>
    </div>
  );
};
