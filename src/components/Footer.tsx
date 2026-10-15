import React, { useState } from 'react';
import { PageId } from '../types';
import { ASSETS } from '../data/content';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onToast: (msg: string) => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onToast,
  onRequestQuote,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      onToast(`Subscribed! Updates will be sent to ${email}`);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#0b0d0e] text-[#b3b7bc] w-full pt-16 pb-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-neutral-800">
        {/* Left Column: Brand & Newsletter */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-2.5">
            <img
              src={ASSETS.logo}
              alt="AxiWatt Logo"
              className="h-8 w-auto object-contain brightness-0 invert"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
            <span className="font-extrabold text-xl text-white tracking-widest uppercase">
              AXIWATT<span className="text-xs align-super ml-0.5">™</span>
            </span>
          </div>

          <form onSubmit={handleSubscribe} className="relative max-w-sm">
            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-neutral-900/90 border border-neutral-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-all pr-12"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-neutral-400 hover:text-white transition-colors"
              aria-label="Subscribe"
            >
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </form>

          {subscribed && (
            <p className="text-xs text-primary font-medium">Thank you for subscribing!</p>
          )}

          <div className="text-xs text-neutral-400 space-y-1 pt-2 leading-relaxed">
            <p className="text-neutral-300 font-medium">
              AxiWatt Group | Best Lithium-ion Battery Manufacturer in India
            </p>
            <p className="pt-2 font-mono text-neutral-300">info@axiwatt.com</p>
          </div>
        </div>

        {/* Right Columns: Navigation */}
        <div className="md:col-span-7 grid grid-cols-3 gap-6 text-sm">
          {/* Main Pages */}
          <div className="space-y-4">
            <p className="text-[11px] font-bold tracking-wider text-neutral-400 uppercase">
              MAIN PAGES
            </p>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('technology')}
                  className="hover:text-white transition-colors text-left"
                >
                  Technology
                </button>
              </li>
            </ul>
          </div>

          {/* Verticals */}
          <div className="space-y-4">
            <p className="text-[11px] font-bold tracking-wider text-neutral-400 uppercase">
              VERTICALS
            </p>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li>
                <button
                  onClick={() => onNavigate('automotive')}
                  className="hover:text-white transition-colors text-left"
                >
                  Automotive
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('telecom')}
                  className="hover:text-white transition-colors text-left"
                >
                  Telecom
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('bess')}
                  className="hover:text-white transition-colors text-left"
                >
                  Bess
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('lead-replacement')}
                  className="hover:text-white transition-colors text-left"
                >
                  Lead Replacement
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('future-technologies')}
                  className="hover:text-white transition-colors text-left"
                >
                  Future Technologies
                </button>
              </li>
            </ul>
          </div>

          {/* Other Pages */}
          <div className="space-y-4">
            <p className="text-[11px] font-bold tracking-wider text-neutral-400 uppercase">
              OTHER PAGES
            </p>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('updates-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Updates
                </button>
              </li>
              <li>
                <button
                  onClick={onRequestQuote}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onToast('AxiWatt Privacy Policy: Data is securely stored and protected.')}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-white hover:border-neutral-700 transition-colors"
          >
            <span className="text-xs font-bold font-mono">f</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-white hover:border-neutral-700 transition-colors"
          >
            <span className="text-xs font-bold font-mono">in</span>
          </a>
          <span>© AxiWatt. All Rights Reserved 2025. Licensing</span>
        </div>

        <div>
          <span>Powered by CABRA</span>
        </div>
      </div>
    </footer>
  );
};
