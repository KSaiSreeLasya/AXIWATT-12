import React, { useState } from 'react';
import { PageId } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
  onOpenDatasheet: (title: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenDatasheet,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const items = [
    {
      title: 'NOVA PREMIUM 51100 Series (51.2V 100Ah Modular Rack)',
      category: 'C&I & Telecom BESS',
      page: 'products' as PageId,
      action: 'view_product',
    },
    {
      title: 'NATRIUM-Na 45140 (India’s 1st Commercial Sodium-Ion)',
      category: 'Sodium-Ion Battery',
      page: 'products' as PageId,
      action: 'view_product',
    },
    {
      title: 'V-STRUC 40 HC (5.2 MWh Utility Container BESS)',
      category: 'Grid-Scale Storage',
      page: 'products' as PageId,
      action: 'view_product',
    },
    {
      title: 'V-STRUC 20 (2.4 MWh Compact Substation BESS)',
      category: 'Substation BESS',
      page: 'products' as PageId,
      action: 'view_product',
    },
    {
      title: 'AXIWATT NOVA 12V 300 PRO & 24V 150 PRO Inverter Battery',
      category: 'Lead-Acid Replacement',
      page: 'products' as PageId,
      action: 'view_product',
    },
    {
      title: 'MCEME T-90 Tanker Military Lithium Power Pack',
      category: 'Defence & Tactical',
      page: 'products' as PageId,
      action: 'view_product',
    },
    {
      title: 'Hyderabad Giga-Plant (Nacharam IDA) & Automated Robotics',
      category: 'Manufacturing',
      page: 'manufacturing' as PageId,
      action: 'view_page',
    },
    {
      title: 'Sodium-Ion Pilot Production Line & In-Line X-Ray',
      category: 'R&D Innovation',
      page: 'manufacturing' as PageId,
      action: 'view_page',
    },
    {
      title: 'Closed-Loop Hydrometallurgical Battery Recycling Platform',
      category: 'Sustainability',
      page: 'sustainability' as PageId,
      action: 'view_page',
    },
    {
      title: 'AxiWatt 2024 Sustainability & ESG Report',
      category: 'ESG Report',
      page: 'sustainability' as PageId,
      action: 'datasheet',
    },
    {
      title: 'Contact Engineering & Sales (Hyderabad HQ)',
      category: 'Sales & Support',
      page: 'contact' as PageId,
      action: 'view_page',
    },
  ];

  const filtered = items.filter(
    (i) =>
      i.title.toLowerCase().includes(query.toLowerCase()) ||
      i.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white border border-outline-variant rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative">
        <div className="p-4 border-b border-outline-variant flex items-center gap-3 bg-surface-container-low">
          <span className="material-symbols-outlined text-primary text-2xl">search</span>
          <input
            autoFocus
            type="text"
            placeholder="Search products, datasheets, giga-factory, ESG..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-base text-on-surface outline-none placeholder:text-on-surface-variant/60"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-2 max-h-96 overflow-y-auto divide-y divide-outline-variant/50">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-on-surface-variant text-sm">
              No results found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onClose();
                  if (item.action === 'datasheet') {
                    onOpenDatasheet(item.title);
                  } else {
                    onNavigate(item.page);
                  }
                }}
                className="w-full text-left p-3 hover:bg-surface-container-low rounded-lg transition-colors flex items-center justify-between group"
              >
                <div>
                  <h4 className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-[11px] text-on-surface-variant uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary text-sm">
                  arrow_forward
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
