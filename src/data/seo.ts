import { PageId } from '../types';
import { ASSETS } from './content';

export const SITE_URL = 'https://axiwatt.com';

interface SeoEntry {
  name: string;
  path: string;
  title: string;
  description: string;
}

export const SEO_PAGES: Partial<Record<PageId, SeoEntry>> = {
  home: {
    name: 'Home',
    path: '/',
    title: 'AxiWatt | Battery Energy Storage, EV and Telecom Batteries',
    description:
      'AxiWatt makes BESS, EV, telecom and lead-replacement batteries built for grid stability and long operating life.',
  },
  technology: {
    name: 'Technology',
    path: '/technology',
    title: 'Battery Technology | AxiWatt',
    description:
      'Explore the cell chemistry, battery management and safety engineering behind AxiWatt battery systems.',
  },
  verticals: {
    name: 'Industries',
    path: '/verticals',
    title: 'Industries We Serve | AxiWatt',
    description:
      'See how AxiWatt batteries support automotive, telecom, energy storage, lead replacement and future mobility markets.',
  },
  automotive: {
    name: 'Automotive',
    path: '/automotive',
    title: 'EV and Automotive Batteries | AxiWatt',
    description:
      'Battery packs for electric two-wheelers and other EV mobility applications, engineered for safe, efficient performance.',
  },
  telecom: {
    name: 'Telecom',
    path: '/telecom',
    title: 'Telecom Battery Solutions | AxiWatt',
    description:
      'Reliable telecom backup batteries for towers and network sites, with long cycle life and remote monitoring.',
  },
  bess: {
    name: 'BESS',
    path: '/bess',
    title: 'Battery Energy Storage Systems (BESS) | AxiWatt',
    description:
      'Utility and commercial battery energy storage systems that stabilise the grid, shift peak load and add resilience.',
  },
  'lead-replacement': {
    name: 'Lead Replacement',
    path: '/lead-replacement',
    title: 'Lead Acid Replacement Batteries | AxiWatt',
    description:
      'Lithium battery options to replace lead-acid batteries in existing systems, with longer service life.',
  },
  'future-technologies': {
    name: 'Future Technologies',
    path: '/future-technologies',
    title: 'Future Battery Technologies | AxiWatt',
    description:
      'Battery solutions from AxiWatt for medical care, defense, smart grids and other emerging energy applications.',
  },
  products: {
    name: 'Products',
    path: '/products',
    title: 'Battery Products and Specifications | AxiWatt',
    description:
      'Compare AxiWatt battery models by capacity, voltage and chemistry, and download datasheets for your project.',
  },
  manufacturing: {
    name: 'Manufacturing',
    path: '/manufacturing',
    title: 'Battery Manufacturing Facilities | AxiWatt',
    description:
      'Tour AxiWatt manufacturing lines, quality testing and facilities across India, from cell assembly to pack validation.',
  },
  sustainability: {
    name: 'Sustainability',
    path: '/sustainability',
    title: 'Sustainability and Battery Recycling | AxiWatt',
    description:
      'Learn how AxiWatt approaches battery recycling and sustainable energy storage.',
  },
  contact: {
    name: 'Contact',
    path: '/contact',
    title: 'Contact AxiWatt | Request a Battery Quote',
    description:
      'Contact AxiWatt for battery quotes, technical support and partnerships. Call +91 7416623434 or email info@axiwatt.com.',
  },
};

const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const BREADCRUMB_ID = 'breadcrumb-jsonld';

export const applySeo = (page: PageId) => {
  const entry = SEO_PAGES[page] ?? SEO_PAGES.home!;
  const url = `${SITE_URL}${entry.path}`;

  document.title = entry.title;
  setMeta('name', 'description', entry.description);
  setMeta('property', 'og:title', entry.title);
  setMeta('property', 'og:description', entry.description);
  setMeta('property', 'og:url', url);
  setLink('canonical', url);
  setLink('icon', ASSETS.logo);

  let breadcrumb = document.getElementById(BREADCRUMB_ID) as HTMLScriptElement | null;
  if (entry.path === '/') {
    breadcrumb?.remove();
    return;
  }
  if (!breadcrumb) {
    breadcrumb = document.createElement('script');
    breadcrumb.id = BREADCRUMB_ID;
    breadcrumb.type = 'application/ld+json';
    document.head.appendChild(breadcrumb);
  }
  breadcrumb.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: entry.name, item: url },
    ],
  });
};

export const pagePath = (page: PageId) => SEO_PAGES[page]?.path ?? '/';
