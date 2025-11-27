export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Smile' | 'ScanFace' | 'HeartPulse' | 'Sparkles';
  iconUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  role?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  addressLink: string;
  instagram: string;
  cro: string;
}