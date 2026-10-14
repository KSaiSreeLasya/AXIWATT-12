export type PageId =
  | 'home'
  | 'overview'
  | 'about'
  | 'technology'
  | 'verticals'
  | 'automotive'
  | 'telecom'
  | 'bess'
  | 'lead-replacement'
  | 'future-technologies'
  | 'products'
  | 'manufacturing'
  | 'sustainability'
  | 'updates'
  | 'contact';

export interface ProductSpec {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  capacity: string;
  image: string;
  description?: string;
  features: string[];
  datasheetUrl?: string;
  specs?: {
    powerOutput?: string;
    cycleLife?: string;
    voltageRange?: string;
    coolingSystem?: string;
    roundTripEfficiency?: string;
    footprint?: string;
    enclosureRating?: string;
  };
}

export interface ESGReport {
  id: string;
  title: string;
  description: string;
  size: string;
  icon: string;
  year: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  email: string;
  industry: string;
  capacityMWh: number;
  projectScope: string;
}
