import React, { useState } from 'react';
import { PageId } from '../types';
import { ASSETS, GLOBAL_OFFICES } from '../data/content';

interface ContactScreenProps {
  onNavigate: (page: PageId) => void;
  onOpenDatasheet: (title: string) => void;
  onToast: (msg: string) => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({
  onOpenDatasheet,
  onToast,
}) => {
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    companyName: 'Enterprise Systems Ltd',
    email: 'j.doe@enterprise.com',
    industry: 'Renewable Energy',
    capacityMWh: 50,
    projectScope: '',
  });

  const [selectedOffice, setSelectedOffice] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onToast(`Formal Inquiry registered for ${formData.capacityMWh} MWh system capacity.`);

      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);
    }, 1200);
  };

  return (
    <div className="w-full flex-grow">
      {/* Hero Section */}
      <section className="relative py-16 px-6 overflow-hidden bg-surface-container-low border-b border-outline-variant">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#006d44 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="inline-block px-3.5 py-1 bg-primary-container/20 text-on-primary-container text-xs font-bold rounded-full uppercase tracking-wider">
                AxiWatt Technologies · Global Technical Sales
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-on-surface leading-tight">
                Precision Engineered Power Support.
              </h1>
              <p className="text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
                Connect directly with AxiWatt&apos;s senior integration engineers.
                We design and manufacture scalable, high-performance BESS and Sodium-Ion systems tailored
                for telecom, industrial enterprises, and defence infrastructure.
              </p>
            </div>

            <div className="hidden lg:block relative">
              <div className="w-full aspect-[2/1] rounded-2xl overflow-hidden shadow-xl border border-outline-variant">
                <img
                  className="w-full h-full object-cover"
                  src={ASSETS.contactControllerBoard}
                  alt="Industrial battery energy storage controller motherboard"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: RFQ Form (7 cols) */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-8 sm:p-10 rounded-2xl shadow-sm border border-outline-variant">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-on-surface">
                <span className="material-symbols-outlined text-primary text-2xl">request_quote</span>
                <span>Request For Quote</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      required
                      className="w-full bg-white border border-outline-variant rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="John Doe"
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
                      placeholder="Enterprise Systems Ltd"
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      required
                      className="w-full bg-white border border-outline-variant rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="j.doe@enterprise.com"
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
                      <option value="Commercial & Industrial BESS">Commercial &amp; Industrial BESS</option>
                      <option value="Telecom Infrastructure (Sodium-Ion / LiFePO4)">Telecom Infrastructure (Sodium-Ion / LiFePO4)</option>
                      <option value="Automotive & EV Rapid-Charge Fleets">Automotive &amp; EV Rapid-Charge Fleets</option>
                      <option value="Defence & Military Tactical Systems">Defence &amp; Military Tactical Systems (MCEME)</option>
                      <option value="Utility Grid & Substation Peaking">Utility Grid &amp; Substation Peaking</option>
                      <option value="NOVA Inverter Lead-Acid Replacement">NOVA Inverter Lead-Acid Replacement</option>
                      <option value="Battery Recycling & Closed-Loop Buyback">Battery Recycling &amp; Closed-Loop Buyback</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2 bg-surface-container-low p-4 rounded-xl border border-outline-variant">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-semibold text-on-surface uppercase tracking-wider">
                      System Capacity Required (MWh)
                    </label>
                    <span className="text-sm font-bold text-primary font-mono">
                      {formData.capacityMWh === 100 ? '100+ MWh' : `${formData.capacityMWh} MWh`}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      className="flex-grow accent-primary h-2 cursor-pointer"
                      max="100"
                      min="1"
                      type="range"
                      value={formData.capacityMWh}
                      onChange={(e) =>
                        setFormData({ ...formData, capacityMWh: parseInt(e.target.value, 10) })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                    Project Scope &amp; Technical Requirements
                  </label>
                  <textarea
                    className="w-full bg-white border border-outline-variant rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="Detail your storage needs, site conditions, voltage interconnect, and timeline..."
                    rows={4}
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  />
                </div>

                <button
                  className={`w-full text-on-primary font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-lg transition-all duration-200 shadow-md flex justify-center items-center gap-2 cursor-pointer ${
                    isSuccess
                      ? 'bg-on-primary-container'
                      : 'bg-primary hover:brightness-105 active:scale-98'
                  }`}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-base">sync</span>
                      <span>Processing Inquiry...</span>
                    </>
                  ) : isSuccess ? (
                    <>
                      <span className="material-symbols-outlined text-base">check_circle</span>
                      <span>Inquiry Sent Successfully</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Formal Inquiry</span>
                      <span className="material-symbols-outlined text-base">send</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right: Contact Cards & Support (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Technical Support Card */}
              <div className="bg-tertiary-container/30 p-6 rounded-2xl border border-tertiary-container shadow-xs">
                <h3 className="text-xl font-bold text-on-tertiary-container mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">engineering</span>
                  <span>Technical Support &amp; Consultation</span>
                </h3>
                <p className="text-xs sm:text-sm text-on-tertiary-container/90 mb-5 leading-relaxed">
                  Access AxiWatt&apos;s comprehensive battery documentation, cell cycler curves, or speak directly with an integration engineer.
                </p>
                <div className="grid grid-cols-1 gap-2.5">
                  <button
                    onClick={() => onOpenDatasheet('AxiWatt Comprehensive Documentation Portal')}
                    className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-tertiary-container/50 hover:bg-tertiary-container/20 transition-all text-left"
                  >
                    <span className="text-sm font-semibold text-on-surface">
                      Documentation Portal &amp; Whitepapers
                    </span>
                    <span className="material-symbols-outlined text-primary text-base">
                      open_in_new
                    </span>
                  </button>
                  <a
                    href="tel:+917416623434"
                    className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-tertiary-container/50 hover:bg-tertiary-container/20 transition-all"
                  >
                    <span className="text-sm font-semibold text-on-surface">Plant Direct Hotline</span>
                    <span className="font-bold text-primary text-sm font-mono">+91 7416623434</span>
                  </a>
                  <a
                    href="mailto:info@axiwatt.com"
                    className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-tertiary-container/50 hover:bg-tertiary-container/20 transition-all"
                  >
                    <span className="text-sm font-semibold text-on-surface">Corporate Inquiries</span>
                    <span className="font-bold text-primary text-sm font-mono">info@axiwatt.com</span>
                  </a>
                </div>
              </div>

              {/* Location & Map Section */}
              <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant shadow-xs flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-on-surface mb-5">Global Presence</h3>
                  <div className="space-y-4">
                    {GLOBAL_OFFICES.map((office, idx) => (
                      <button
                        key={office.name}
                        onClick={() => setSelectedOffice(idx)}
                        className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 ${
                          selectedOffice === idx
                            ? 'bg-white shadow-xs border border-primary/40'
                            : 'hover:bg-surface-container'
                        }`}
                      >
                        <span className="material-symbols-outlined text-primary mt-0.5 text-xl">
                          location_on
                        </span>
                        <div>
                          <p className="text-sm font-bold text-on-surface flex items-center gap-2">
                            <span>{office.name}</span>
                            <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded font-normal">
                              {office.tag}
                            </span>
                          </p>
                          <p className="text-xs text-on-surface-variant mt-0.5">{office.address}</p>
                          <p className="text-[11px] text-primary font-mono mt-0.5">
                            {office.status}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Integrated Mini Map with interactive feed overlay */}
                <div className="mt-6 h-48 rounded-xl overflow-hidden border border-outline shadow-inner relative group">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${ASSETS.contactMapFeed}')` }}
                  />
                  <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                  <div className="absolute top-2 left-2 bg-black/75 text-white px-2 py-0.5 rounded text-[10px] font-mono">
                    {GLOBAL_OFFICES[selectedOffice].coords}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-white/95 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-primary border border-outline-variant shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    <span>Live Operations Feed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Accreditation Row */}
      <section className="py-6 bg-surface-container-highest/40 border-t border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 sm:gap-14 opacity-75">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            <span className="material-symbols-outlined text-base text-primary">verified</span>
            <span>ISO 9001</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            <span className="material-symbols-outlined text-base text-primary">verified</span>
            <span>UL Certified</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            <span className="material-symbols-outlined text-base text-primary">verified</span>
            <span>CE Compliant</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            <span className="material-symbols-outlined text-base text-primary">verified</span>
            <span>RoHS</span>
          </div>
        </div>
      </section>
    </div>
  );
};
