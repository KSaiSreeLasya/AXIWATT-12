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
    title: 'AXIWATT | Battery Energy Storage & Power Solutions',
    description:
      'Explore AXIWATT battery solutions for energy storage, electric vehicles and telecom applications. Discover reliable power technologies for diverse needs.',
  },
  technology: {
    name: 'Technology',
    path: '/technology',
    title: 'Battery Technology & Energy Innovation | AXIWATT',
    description:
      'Explore battery technologies and energy solutions for modern power applications. Learn how AXIWATT supports evolving energy storage and mobility needs.',
  },
  verticals: {
    name: 'Industries',
    path: '/verticals',
    title: 'Battery Solutions for Multiple Industries | AXIWATT',
    description:
      'Explore battery and energy solutions for industrial, telecom, electric mobility and energy storage applications. Find solutions for your power requirements.',
  },
  automotive: {
    name: 'Automotive',
    path: '/automotive',
    title: 'Electric Vehicle Battery Packs | AXIWATT',
    description:
      'Discover battery pack solutions for electric mobility applications. Explore EV battery technologies, product specifications and power options from AXIWATT.',
  },
  telecom: {
    name: 'Telecom',
    path: '/telecom',
    title: 'Telecom Backup Batteries & Power Solutions | AXIWATT',
    description:
      'Explore AXIWATT telecom battery solutions for backup power and telecommunications infrastructure. Find suitable battery options for telecom power needs.',
  },
  bess: {
    name: 'BESS',
    path: '/bess',
    title: 'Battery Energy Storage Systems | AXIWATT',
    description:
      'Explore battery energy storage systems from AXIWATT for reliable power storage, energy management and commercial and industrial energy applications.',
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
    title: 'Battery Products & Energy Solutions | AXIWATT',
    description:
      'Browse AXIWATT battery products and energy solutions for storage, electric mobility and telecom applications. Explore product features and specifications.',
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
    title: 'Contact AXIWATT | Battery Solutions Enquiries',
    description:
      'Contact AXIWATT for enquiries about battery energy storage, EV batteries and telecom power solutions. Get in touch to discuss your requirements.',
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
