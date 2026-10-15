/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { SEO_PAGES, applySeo, pagePath } from './data/seo';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { SearchModal } from './components/SearchModal';
import { DatasheetModal } from './components/DatasheetModal';
import { ComparisonModal } from './components/ComparisonModal';

import { HomeScreen } from './screens/HomeScreen';
import { TechnologyScreen } from './screens/TechnologyScreen';
import { VerticalsScreen } from './screens/VerticalsScreen';
import { AutomotiveScreen } from './screens/AutomotiveScreen';
import { TelecomScreen } from './screens/TelecomScreen';
import { BessScreen } from './screens/BessScreen';
import { LeadReplacementScreen } from './screens/LeadReplacementScreen';
import { FutureTechnologiesScreen } from './screens/FutureTechnologiesScreen';
import { ProductsScreen } from './screens/ProductsScreen';
import { ManufacturingScreen } from './screens/ManufacturingScreen';
import { SustainabilityScreen } from './screens/SustainabilityScreen';
import { ContactScreen } from './screens/ContactScreen';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [datasheetModal, setDatasheetModal] = useState<{ open: boolean; title: string }>({
    open: false,
    title: '',
  });
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const syncFromUrl = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash && pagePath(hash as PageId) !== '/') {
        window.history.replaceState(null, '', pagePath(hash as PageId));
      }
      const slug = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
      const page = (Object.keys(SEO_PAGES) as PageId[]).find((id) => pagePath(id) === `/${slug}`);
      setCurrentPage(page ?? 'home');
    };

    syncFromUrl();
    window.addEventListener('popstate', syncFromUrl);
    return () => window.removeEventListener('popstate', syncFromUrl);
  }, []);

  useEffect(() => {
    applySeo(currentPage);
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.history.pushState(null, '', pagePath(page));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 3800);
  };

  const openDatasheet = (title: string) => {
    setDatasheetModal({ open: true, title });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface font-sans selection:bg-primary-container selection:text-on-primary-container">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-on-background text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-outline-variant/40 animate-in slide-in-from-bottom-3 duration-200 text-sm">
          <span className="material-symbols-outlined text-primary-container text-xl">
            info
          </span>
          <span>{toast}</span>
          <button
            onClick={() => setToast(null)}
            className="ml-2 hover:opacity-75"
            aria-label="Dismiss toast"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>
      )}

      {/* Top Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onRequestQuote={() => setIsQuoteOpen(true)}
      />

      {/* Screen Views */}
      <main className="flex-grow flex flex-col">
        {(currentPage === 'home' || currentPage === 'overview' || currentPage === 'about') && (
          <HomeScreen
            onNavigate={handleNavigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
            onOpenDatasheet={openDatasheet}
            onToast={showToast}
          />
        )}

        {currentPage === 'technology' && (
          <TechnologyScreen
            onNavigate={handleNavigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
            onOpenDatasheet={openDatasheet}
            onToast={showToast}
          />
        )}

        {currentPage === 'verticals' && (
          <VerticalsScreen
            onNavigate={handleNavigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
            onOpenDatasheet={openDatasheet}
            onToast={showToast}
          />
        )}

        {currentPage === 'automotive' && (
          <AutomotiveScreen
            onNavigate={handleNavigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
            onOpenDatasheet={openDatasheet}
            onToast={showToast}
          />
        )}

        {currentPage === 'telecom' && (
          <TelecomScreen
            onNavigate={handleNavigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
            onOpenDatasheet={openDatasheet}
            onToast={showToast}
          />
        )}

        {currentPage === 'bess' && (
          <BessScreen
            onNavigate={handleNavigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
            onOpenDatasheet={openDatasheet}
            onToast={showToast}
          />
        )}

        {currentPage === 'lead-replacement' && (
          <LeadReplacementScreen
            onNavigate={handleNavigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
            onOpenDatasheet={openDatasheet}
            onToast={showToast}
          />
        )}

        {currentPage === 'future-technologies' && (
          <FutureTechnologiesScreen
            onNavigate={handleNavigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
            onOpenDatasheet={openDatasheet}
            onToast={showToast}
          />
        )}

        {currentPage === 'products' && (
          <ProductsScreen
            onNavigate={handleNavigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
            onOpenDatasheet={openDatasheet}
            onOpenComparison={() => setIsComparisonOpen(true)}
          />
        )}

        {currentPage === 'manufacturing' && (
          <ManufacturingScreen
            onNavigate={handleNavigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
            onOpenDatasheet={openDatasheet}
          />
        )}

        {currentPage === 'sustainability' && (
          <SustainabilityScreen
            onNavigate={handleNavigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
            onOpenDatasheet={openDatasheet}
            onToast={showToast}
          />
        )}

        {currentPage === 'contact' && (
          <ContactScreen
            onNavigate={handleNavigate}
            onOpenDatasheet={openDatasheet}
            onToast={showToast}
          />
        )}
      </main>

      {/* Site Footer */}
      <Footer
        onNavigate={handleNavigate}
        onRequestQuote={() => setIsQuoteOpen(true)}
        onToast={showToast}
      />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        onSuccess={(data) => {
          showToast(`RFQ submitted for ${data.capacityMWh} MWh (${data.fullName})`);
        }}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
        onOpenDatasheet={openDatasheet}
      />

      <DatasheetModal
        isOpen={datasheetModal.open}
        title={datasheetModal.title}
        onClose={() => setDatasheetModal({ open: false, title: '' })}
        onToast={showToast}
      />

      <ComparisonModal
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
        onRequestQuoteWithModel={(model) => {
          setIsQuoteOpen(true);
          showToast(`Configuring quote for ${model}`);
        }}
      />
    </div>
  );
}
