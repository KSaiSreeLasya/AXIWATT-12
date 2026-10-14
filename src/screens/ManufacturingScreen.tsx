import React, { useState } from 'react';
import { PageId } from '../types';
import { ASSETS } from '../data/content';

interface ManufacturingScreenProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
  onOpenDatasheet: (title: string) => void;
}

export const ManufacturingScreen: React.FC<ManufacturingScreenProps> = ({
  onRequestQuote,
  onOpenDatasheet,
}) => {
  const [thermalTemp, setThermalTemp] = useState(25);
  const [isStressTesting, setIsStressTesting] = useState(false);
  const [stabilityIndex, setStabilityIndex] = useState(0.998);

  const runThermalSimulation = () => {
    setIsStressTesting(true);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const simulatedTemp = step % 2 === 0 ? 85 : -40;
      setThermalTemp(simulatedTemp);
      setStabilityIndex(parseFloat((0.995 + Math.random() * 0.004).toFixed(3)));

      if (step >= 6) {
        clearInterval(interval);
        setThermalTemp(25);
        setStabilityIndex(0.998);
        setIsStressTesting(false);
      }
    }, 400);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 px-6 overflow-hidden bg-white border-b border-outline-variant">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Hyderabad Giga-Plant · Nacharam IDA</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-on-background leading-tight">
              Precision Engineered <br />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-500">
                Battery Ecosystems
              </span>
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Inside AxiWatt Technologies&apos; advanced manufacturing plant in Hyderabad: where automated high-speed robotics,
              pioneering Sodium-Ion pilot line, and defense-grade quality protocols converge to power industrial autonomy.
            </p>

            <div className="flex gap-8 pt-3">
              <div className="flex flex-col border-l-4 border-primary pl-4">
                <span className="text-3xl font-bold text-primary tabular-nums">2.4 GW</span>
                <span className="text-xs text-outline font-medium tracking-wider uppercase">
                  Annual Capacity Target
                </span>
              </div>
              <div className="flex flex-col border-l-4 border-primary pl-4">
                <span className="text-3xl font-bold text-primary tabular-nums">99.98%</span>
                <span className="text-xs text-outline font-medium tracking-wider uppercase">
                  Build Precision (0.01mm)
                </span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative h-[380px] sm:h-[460px]">
            <div className="absolute inset-0 bg-surface-container rounded-2xl overflow-hidden shadow-xl border border-outline-variant">
              <img
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                src={ASSETS.manufacturingGigaFactory}
                alt="AxiWatt Hyderabad industrial giga-factory interior with automated assembly line"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 glass-card p-4 rounded-xl shadow-lg hidden sm:block border border-outline-variant">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">
                  precision_manufacturing
                </span>
                <span className="text-xs font-bold text-on-surface">Nacharam Giga-Plant: Operational</span>
              </div>
              <div className="mt-2 h-1.5 w-44 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary-container w-[94%] animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automated Assembly Shell */}
      <section className="py-20 bg-surface-container-low px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-on-surface tracking-tight mb-2">
              Automated Assembly Shell
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Robotics */}
            <div className="group bg-surface-container-lowest border border-outline-variant p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-primary-container rounded-xl">
                  <span className="material-symbols-outlined text-on-primary-container text-2xl">
                    smart_toy
                  </span>
                </div>
                <span className="text-xs text-on-surface-variant font-mono bg-surface-container px-2.5 py-1 rounded">
                  Sync-Flow V4
                </span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-2">6-Axis Robotics</h3>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                Our high-speed cinematic robots execute 0.01mm tolerance placements, ensuring every
                BESS module and residential inverter is structurally perfect.
              </p>
              <div className="h-56 w-full bg-surface-container rounded-xl overflow-hidden relative border border-outline-variant/40">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={ASSETS.manufacturingRobotics}
                  alt="Industrial robotic arm performing delicate electronic assembly"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Laser Welding */}
            <div className="group bg-surface-container-lowest border border-outline-variant p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-primary-container rounded-xl">
                  <span className="material-symbols-outlined text-on-primary-container text-2xl">
                    bolt
                  </span>
                </div>
                <span className="text-xs text-on-surface-variant font-mono bg-surface-container px-2.5 py-1 rounded">
                  Cold-Beam Tech
                </span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-2">Fiber Laser Welding</h3>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                Integrated laser welding provides zero-contact thermal bonding, eliminating
                physical stress on delicate cell structures and microscopic interconnects.
              </p>
              <div className="h-56 w-full bg-surface-container rounded-xl overflow-hidden relative border border-outline-variant/40">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={ASSETS.manufacturingWelding}
                  alt="High-speed fiber laser welding process on industrial battery cells"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Bento */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-on-surface tracking-tight mb-2">
              Zero-Defect Protocol
            </h2>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Multi-spectral analysis ensures every unit leaving the facility meets the AxiWatt
              20-year reliability benchmark.
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/20" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* X-Ray Analysis */}
          <div className="md:col-span-2 relative overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest h-96 group shadow-sm">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={ASSETS.manufacturingXRay}
              alt="High-resolution X-ray inspection of internal battery assembly"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-black/40 to-transparent flex flex-col justify-end p-8 text-white">
              <h4 className="text-2xl font-bold mb-1.5">In-Line X-Ray Tomography</h4>
              <p className="text-white/90 text-sm max-w-lg leading-relaxed">
                Scanning every cell internal for particulate contamination and electrolyte
                distribution with sub-micron resolution.
              </p>
            </div>
            <div className="absolute top-6 right-6 bg-primary-container text-on-primary-container px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md animate-pulse">
              SCANNING...
            </div>
          </div>

          {/* Thermal Stress */}
          <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-8 flex flex-col justify-between shadow-sm">
            <div className="text-center space-y-3">
              <div className="inline-flex p-4 bg-surface-container-lowest rounded-full shadow-sm text-primary">
                <span className="material-symbols-outlined text-4xl">thermostat</span>
              </div>
              <h4 className="text-2xl font-bold text-on-surface">Thermal Dynamics</h4>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                Accelerated life testing ranging from -40°C to +85°C to simulate 20 years of field
                stress.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="bg-white p-4 rounded-xl flex justify-between items-center border border-outline-variant">
                <div>
                  <span className="text-xs text-on-surface-variant block">Current Temp</span>
                  <span className="text-lg font-bold text-on-surface font-mono">{thermalTemp}°C</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-on-surface-variant block">Stability Index</span>
                  <span className="text-xl font-bold text-primary font-mono tabular-nums">
                    {stabilityIndex}
                  </span>
                </div>
              </div>

              <button
                onClick={runThermalSimulation}
                disabled={isStressTesting}
                className="w-full py-2.5 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-lg text-xs font-bold transition-all disabled:opacity-50"
              >
                {isStressTesting ? 'Simulating Thermal Shock...' : 'Run Dynamic Stress Cycle'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Lab / Next-Gen Chemistry */}
      <section className="py-20 bg-on-background text-white relative overflow-hidden px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-primary-container text-xs font-bold tracking-widest uppercase">
                The Innovation Core
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Beyond Lithium: The Solid-State Frontier
              </h2>
              <p className="text-surface-variant text-base sm:text-lg leading-relaxed">
                Our R&amp;D lab is focused on the fundamental chemistry of energy. We are currently
                scaling polymer-based solid-state electrolytes that offer 3x energy density and
                inherent safety against thermal runaway.
              </p>
              <div className="space-y-5 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-fixed-dim/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary-fixed-dim text-xl">
                      science
                    </span>
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-base">Next-Gen Chemistry</h5>
                    <p className="text-surface-variant text-sm mt-0.5">
                      Transitioning to Cobalt-free cathode structures to ensure ethical supply chains.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-fixed-dim/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary-fixed-dim text-xl">
                      memory
                    </span>
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-base">AI-Driven Material Synthesis</h5>
                    <p className="text-surface-variant text-sm mt-0.5">
                      Machine learning algorithms predicting the next stable molecular configurations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20">
                  <span className="text-3xl font-bold text-primary-fixed-dim block tabular-nums">
                    450 Wh/kg
                  </span>
                  <span className="text-surface-variant text-xs mt-1 block">Target Density</span>
                </div>
                <div className="h-60 rounded-2xl overflow-hidden border border-white/20">
                  <img
                    className="w-full h-full object-cover"
                    src={ASSETS.manufacturingScientist}
                    alt="AxiWatt researcher working with advanced chemical formulations"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="h-60 rounded-2xl overflow-hidden border border-white/20">
                  <img
                    className="w-full h-full object-cover"
                    src={ASSETS.manufacturingMolecules}
                    alt="Abstract visualization of solid state electrolyte molecular structures"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20">
                  <span className="text-3xl font-bold text-primary-fixed-dim block tabular-nums">
                    &lt; 15 min
                  </span>
                  <span className="text-surface-variant text-xs mt-1 block">
                    Charge Cycle (0-80%)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-surface-container-highest rounded-3xl p-10 sm:p-14 flex flex-col md:flex-row justify-between items-center gap-8 border border-outline-variant shadow-sm">
          <div className="max-w-xl text-center md:text-left space-y-2">
            <h2 className="text-3xl font-bold text-on-surface tracking-tight">
              Partner with the Pioneers
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
              Looking for enterprise-scale BESS solutions or technical collaboration? Our engineering
              team is ready to discuss your specific infrastructure needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button
              onClick={() => onOpenDatasheet('AxiWatt Giga-Factory Standards & Engineering Whitepaper')}
              className="px-7 py-3.5 bg-on-background text-white rounded-lg text-sm font-semibold hover:bg-on-background/90 transition-all active:scale-95 shadow"
            >
              Download Tech Specs
            </button>
            <button
              onClick={onRequestQuote}
              className="px-7 py-3.5 bg-primary-container text-on-primary-container rounded-lg text-sm font-semibold hover:brightness-105 transition-all active:scale-95 shadow"
            >
              Speak to an Engineer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
