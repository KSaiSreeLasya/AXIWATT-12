import React, { useState, useRef, useEffect } from 'react';
import { PageId } from '../types';
import { ASSETS, VERTICALS_LIST } from '../data/content';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onRequestQuote,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [verticalsDropdownOpen, setVerticalsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setVerticalsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isVerticalActive = [
    'verticals',
    'automotive',
    'telecom',
    'bess',
    'lead-replacement',
    'future-technologies',
  ].includes(currentPage);

  return (
    <header className="bg-white/95 backdrop-blur-md w-full top-0 sticky z-50 border-b border-gray-100 shadow-xs transition-all">
      <div className="flex justify-between items-center h-20 px-6 max-w-7xl mx-auto">
        {/* Brand Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg py-1"
          aria-label="AxiWatt Home"
        >
          <img
            src={ASSETS.logo}
            alt="AxiWatt Logo"
            className="h-9 md:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl tracking-tight text-neutral-900 leading-none">
              AXIWATT
            </span>
            <span className="text-[9px] uppercase tracking-widest text-primary font-bold mt-0.5">
              Energy Systems
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 relative">
          <button
            onClick={() => onNavigate('home')}
            className={`text-sm font-medium transition-colors ${
              currentPage === 'home' || currentPage === 'overview'
                ? 'text-neutral-950 font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => {
              onNavigate('home');
              setTimeout(() => {
                const el = document.getElementById('about-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className={`text-sm font-medium transition-colors ${
              currentPage === 'about'
                ? 'text-neutral-950 font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            About
          </button>

          <button
            onClick={() => onNavigate('technology')}
            className={`text-sm font-medium transition-colors ${
              currentPage === 'technology'
                ? 'text-neutral-950 font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Technology
          </button>

          {/* Verticals Dropdown trigger (Image 3 design) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setVerticalsDropdownOpen(!verticalsDropdownOpen)}
              onMouseEnter={() => setVerticalsDropdownOpen(true)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${
                isVerticalActive
                  ? 'text-neutral-950 font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <span>Verticals</span>
              <span
                className={`material-symbols-outlined text-base transition-transform duration-200 ${
                  verticalsDropdownOpen ? 'rotate-180' : ''
                }`}
              >
                expand_more
              </span>
            </button>

            {/* Dropdown Menu Popup (Image 3) */}
            {verticalsDropdownOpen && (
              <div
                onMouseLeave={() => setVerticalsDropdownOpen(false)}
                className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 z-50 animate-in fade-in zoom-in-95 duration-150 grid grid-cols-12 gap-6"
              >
                {/* Left 7 cols: Vertical items */}
                <div className="col-span-7 space-y-1.5">
                  {VERTICALS_LIST.map((item) => {
                    const isActive = currentPage === item.page;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          onNavigate(item.page);
                          setVerticalsDropdownOpen(false);
                        }}
                        className={`w-full flex items-start gap-3.5 p-3 rounded-2xl transition-all text-left ${
                          isActive
                            ? 'bg-amber-50/60 border border-amber-200'
                            : 'hover:bg-neutral-50'
                        }`}
                      >
                        <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-xl">
                            {item.icon}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-neutral-900">
                            {item.name}
                          </p>
                          <p className="text-xs text-neutral-500 mt-0.5 leading-snug">
                            {item.tagline}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Right 5 cols: Facility Preview Card */}
                <div className="col-span-5 relative rounded-2xl overflow-hidden border border-gray-100 shadow-xs flex flex-col justify-end p-5 group">
                  <img
                    src={ASSETS.homeGigaFactoryAerial}
                    alt="AxiWatt Giga-Facility"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                  <div className="relative z-10 text-white space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-primary-fixed bg-black/40 px-2 py-0.5 rounded">
                      Giga-Factory
                    </span>
                    <p className="text-sm font-bold">1 GWh Production Line</p>
                    <p className="text-[11px] text-white/80 leading-snug">
                      Automated robotics, cleanrooms &amp; zero-defect quality standards.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              onNavigate('home');
              setTimeout(() => {
                const el = document.getElementById('updates-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className={`text-sm font-medium transition-colors ${
              currentPage === 'updates'
                ? 'text-neutral-950 font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Updates
          </button>
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onRequestQuote}
            className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-sm active:scale-95"
          >
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-800 hover:bg-neutral-100 rounded-lg"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-6 py-5 space-y-3 animate-in slide-in-from-top-2">
          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 text-sm font-medium text-neutral-800 hover:text-primary"
          >
            Home
          </button>
          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
              setTimeout(() => {
                const el = document.getElementById('about-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }, 150);
            }}
            className="w-full text-left py-2 text-sm font-medium text-neutral-800 hover:text-primary"
          >
            About
          </button>
          <button
            onClick={() => {
              onNavigate('technology');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 text-sm font-medium text-neutral-800 hover:text-primary"
          >
            Technology
          </button>

          <div className="pt-2 border-t border-gray-100">
            <p className="text-xs uppercase font-bold text-neutral-400 mb-2">Verticals</p>
            <div className="space-y-1.5 pl-2">
              {VERTICALS_LIST.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-between py-2 text-sm text-neutral-700 hover:text-primary"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-orange-500 text-lg">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </span>
                  <span className="material-symbols-outlined text-neutral-400 text-sm">
                    arrow_forward
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-gray-100">
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
                setTimeout(() => {
                  const el = document.getElementById('updates-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }, 150);
              }}
              className="w-full text-left py-2 text-sm font-medium text-neutral-800 hover:text-primary"
            >
              Updates
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
