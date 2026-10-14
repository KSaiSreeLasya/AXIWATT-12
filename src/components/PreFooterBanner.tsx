import React, { useState } from 'react';
import { ASSETS } from '../data/content';

interface PreFooterBannerProps {
  onToast: (msg: string) => void;
}

export const PreFooterBanner: React.FC<PreFooterBannerProps> = ({ onToast }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      onToast(`Thank you! An AxiWatt energy specialist will contact ${email}.`);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section className="relative overflow-hidden w-full h-[360px] sm:h-[440px] flex items-center">
      {/* Background Giga-Factory Aerial */}
      <img
        src={ASSETS.homeGigaFactoryAerial}
        alt="AxiWatt Giga-Factory Complex"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-2xl space-y-6">
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight">
            Your Complete <br />
            <span className="font-semibold">Energy Partner</span>
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md pt-2">
            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-black/40 border border-white/30 text-white placeholder-white/60 px-4 py-3 rounded-lg text-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/80 transition-all flex-grow"
            />
            <button
              type="submit"
              className="bg-white/80 hover:bg-white text-black font-medium px-7 py-3 rounded-lg text-sm transition-all shadow-md active:scale-95 shrink-0"
            >
              {submitted ? 'Submitted!' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
