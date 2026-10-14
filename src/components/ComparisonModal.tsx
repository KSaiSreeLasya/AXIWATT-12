import React from 'react';

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuoteWithModel?: (model: string) => void;
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({
  isOpen,
  onClose,
  onRequestQuoteWithModel,
}) => {
  if (!isOpen) return null;

  const models = [
    {
      name: 'V-STRUC 40 HC',
      category: 'Utility-Scale BESS',
      capacity: '5.2 MWh',
      power: '2.6 MW',
      discharge: '2 Hours to 8 Hours',
      cellChemistry: 'LiFePO4 (LFP) Prismatic',
      cooling: 'Precision Liquid Thermal Loop',
      footprint: '40ft High Cube Container',
      bestFor: 'Grid-scale firming, transmission congestion relief & utility solar/wind parks',
    },
    {
      name: 'V-STRUC 20',
      category: 'Substation & C&I',
      capacity: '2.4 MWh',
      power: '1.2 MW',
      discharge: '2 Hours to 4 Hours',
      cellChemistry: 'LiFePO4 & Natrium Na-Ion',
      cooling: 'Advanced Liquid / Hybrid Air',
      footprint: '20ft ISO Standard Enclosure',
      bestFor: 'Distribution substations, fast deployment & space-constrained factories',
    },
    {
      name: 'NOVA PREMIUM 51100',
      category: 'Telecom & C&I Rack',
      capacity: '5.12 kWh / 100Ah',
      power: '5.0 kW (Expandable to MWs)',
      discharge: '1 Hour to 10 Hours',
      cellChemistry: 'Automotive Grade LiFePO4',
      cooling: 'Fanless Natural Convection',
      footprint: '19-inch 3U Standard Rack',
      bestFor: 'Telecom tower shelters, data center UPS, corporate backup & microgrids',
    },
    {
      name: 'NATRIUM-Na 45140',
      category: 'Sodium-Ion Benchmark',
      capacity: '3.5 kWh - 10 kWh',
      power: 'High-Rate 3C Discharge',
      discharge: '30 Mins to 5 Hours',
      cellChemistry: 'Sodium-Ion (Na-Ion) Non-Flammable',
      cooling: 'Extreme Ambient (-40°C to +65°C)',
      footprint: 'Modular Compact Module',
      bestFor: 'Extreme climate telecom, sub-zero battery storage & lithium-free supply resilience',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white border border-outline-variant rounded-2xl w-full max-w-5xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant bg-surface-container-low shrink-0">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">analytics</span>
            <div>
              <h3 className="font-bold text-lg text-on-surface">
                AxiWatt Battery Comparison Matrix
              </h3>
              <p className="text-xs text-on-surface-variant">
                Side-by-side engineering specifications for utility containers, NOVA 51100, and Sodium-Ion systems
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Table content */}
        <div className="overflow-x-auto p-6 flex-grow">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="p-3 bg-surface-container-low font-bold text-on-surface uppercase tracking-wider text-[11px] w-40">
                  Feature / Spec
                </th>
                {models.map((m) => (
                  <th key={m.name} className="p-3 font-bold text-on-surface min-w-[200px]">
                    <span className="text-primary font-bold block text-sm">{m.name}</span>
                    <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-normal">
                      {m.category}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              <tr>
                <td className="p-3 font-semibold text-on-surface-variant bg-surface-container-low/40">
                  Energy Capacity
                </td>
                {models.map((m) => (
                  <td key={m.name} className="p-3 font-bold text-primary text-sm">
                    {m.capacity}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-on-surface-variant bg-surface-container-low/40">
                  Power Output
                </td>
                {models.map((m) => (
                  <td key={m.name} className="p-3 font-medium">
                    {m.power}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-on-surface-variant bg-surface-container-low/40">
                  Discharge Duration
                </td>
                {models.map((m) => (
                  <td key={m.name} className="p-3 text-on-surface-variant">
                    {m.discharge}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-on-surface-variant bg-surface-container-low/40">
                  Cell Chemistry
                </td>
                {models.map((m) => (
                  <td key={m.name} className="p-3 text-on-surface-variant">
                    {m.cellChemistry}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-on-surface-variant bg-surface-container-low/40">
                  Thermal Architecture
                </td>
                {models.map((m) => (
                  <td key={m.name} className="p-3 text-on-surface-variant">
                    {m.cooling}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-on-surface-variant bg-surface-container-low/40">
                  Footprint / Form Factor
                </td>
                {models.map((m) => (
                  <td key={m.name} className="p-3 text-on-surface-variant">
                    {m.footprint}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-on-surface-variant bg-surface-container-low/40">
                  Target Application
                </td>
                {models.map((m) => (
                  <td key={m.name} className="p-3 text-on-surface-variant text-[11px] leading-relaxed">
                    {m.bestFor}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-on-surface-variant bg-surface-container-low/40">
                  Procurement
                </td>
                {models.map((m) => (
                  <td key={m.name} className="p-3">
                    <button
                      onClick={() => {
                        onClose();
                        onRequestQuoteWithModel?.(m.name);
                      }}
                      className="w-full py-1.5 px-3 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded text-xs font-semibold transition-colors"
                    >
                      Request Quote
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-outline-variant bg-surface-container-low flex justify-between items-center text-xs text-on-surface-variant">
          <span>* All systems include 20-year linear performance warranty & Axi-Control AI edge operating system.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-on-surface text-white rounded font-medium hover:bg-inverse-surface"
          >
            Close Matrix
          </button>
        </div>
      </div>
    </div>
  );
};
