import React, { useState } from 'react';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (data: QuoteFormData) => void;
  initialCapacity?: number;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialCapacity = 50,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    email: '',
    industry: 'Renewable Energy',
    capacityMWh: initialCapacity,
    projectScope: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onSuccess(formData);

      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-surface-container-lowest border border-outline-variant rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant bg-surface-container-low">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">
              request_quote
            </span>
            <h2 id="quote-title" className="text-xl font-bold text-on-surface">
              Request For Technical Quote
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
            aria-label="Close dialog"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface">Inquiry Dispatched</h3>
              <p className="text-on-surface-variant max-w-md mx-auto text-sm">
                Our lead integration engineering team has received your project specifications
                ({formData.capacityMWh} MWh for {formData.companyName || 'your enterprise'}). You will receive our technical proposal within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    required
                    className="w-full bg-white border border-outline-variant rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="e.g. John Doe"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                    Company Name
                  </label>
                  <input
                    className="w-full bg-white border border-outline-variant rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="e.g. Enterprise Systems Ltd"
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    required
                    className="w-full bg-white border border-outline-variant rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="e.g. j.doe@enterprise.com"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                    Industry Sector
                  </label>
                  <select
                    className="w-full bg-white border border-outline-variant rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  >
                    <option value="Renewable Energy">Renewable Energy</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Data Centers">Data Centers</option>
                    <option value="Grid Stability">Grid Stability</option>
                    <option value="Residential Solutions">Residential Solutions</option>
                  </select>
                </div>
              </div>

              {/* Range Slider for Capacity */}
              <div className="space-y-2 bg-surface-container-low p-4 rounded-xl border border-outline-variant">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold text-on-surface uppercase tracking-wider">
                    System Capacity Required (MWh)
                  </label>
                  <span className="text-base font-bold text-primary">
                    {formData.capacityMWh === 100 ? '100+ MWh' : `${formData.capacityMWh} MWh`}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  step="1"
                  value={formData.capacityMWh}
                  onChange={(e) =>
                    setFormData({ ...formData, capacityMWh: parseInt(e.target.value, 10) })
                  }
                  className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[11px] text-on-surface-variant font-mono">
                  <span>1 MWh (Microgrid / C&I)</span>
                  <span>50 MWh (Substation)</span>
                  <span>100+ MWh (Utility Scale)</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                  Project Scope & Technical Requirements
                </label>
                <textarea
                  className="w-full bg-white border border-outline-variant rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="Detail your storage requirements, site voltage, connection timeline, and redundancy tier..."
                  rows={3}
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-on-primary font-semibold text-sm px-6 py-3.5 rounded-lg hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-75 uppercase tracking-wider"
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-lg">sync</span>
                    <span>Engineering Review in Progress...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Formal Inquiry</span>
                    <span className="material-symbols-outlined text-lg">send</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
