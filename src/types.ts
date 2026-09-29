export type Language = 'pt' | 'en';

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  image: string;
  features: string[];
  recommendedFor: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'casamentos' | 'corporativos' | 'celebracoes' | 'sociais';
  categoryLabel: string;
  subtitle: string;
  date: string;
  location: string;
  guestsCount: string;
  image: string;
  galleryImages: string[];
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  roleOrEvent: string;
  eventDate: string;
  avatar: string;
  rating: number;
  quote: string;
  highlightPhrase: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface TeamMember {
  name: string;
  surname: string;
  role: string;
  bio: string;
  signature: string;
  instagram: string;
  instagramUrl: string;
  photo: string;
  quote: string;
  badges: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  content: string[];
  author: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  locationCity: string;
  budgetRange: string;
  message: string;
  servicesInterested: string[];
}
