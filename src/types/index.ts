export type Language = 'ar' | 'en';

export type DisciplineId = 'legal' | 'accounting' | 'research';

export type PageRoute =
  | { name: 'home' }
  | { name: 'about' }
  | { name: 'services'; filter?: DisciplineId | 'all' }
  | { name: 'service-detail'; slug: string }
  | { name: 'blog' }
  | { name: 'blog-detail'; slug: string }
  | { name: 'contact' }
  | {
      name: 'request';
      preselectedService?: string;
      preselectedDiscipline?: DisciplineId;
      preselectedSubScope?: string;
    };

export interface LocalizedText {
  ar: string;
  en: string;
}

export interface ServiceSubScope {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface ServiceItem {
  id: string;
  slug: string;
  indexNumber: string;
  discipline: DisciplineId;
  secondaryDisciplines?: DisciplineId[];
  title: LocalizedText;
  shortTagline: LocalizedText;
  summary: LocalizedText;
  detailedExplanation: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  subScopes: ServiceSubScope[];
  deliverables: LocalizedText[];
  assignedSpecialists: DisciplineId[];
  estimatedTimeline: LocalizedText;
  jurisdictionNote: LocalizedText;
}

export interface SpecialistRole {
  id: DisciplineId;
  title: LocalizedText;
  pluralTitle: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  capabilities: LocalizedText[];
  typicalDeliverables: LocalizedText[];
}

export interface CreatorProfile {
  id: string;
  name: LocalizedText;
  role: LocalizedText;
  division: DisciplineId | 'executive';
  divisionLabel: LocalizedText;
  experienceYears: string;
  bio: LocalizedText;
  specialties: LocalizedText[];
  initials: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  category: LocalizedText;
  readTime: LocalizedText;
  publishedDate: LocalizedText;
  title: LocalizedText;
  excerpt: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  sections: {
    heading: LocalizedText;
    body: LocalizedText;
  }[];
  relatedServiceSlug: string;
}

export interface SubmittedRequest {
  referenceId: string;
  createdAt: string;
  clientName: string;
  organization: string;
  email: string;
  phone: string;
  requestMode: 'service' | 'specialist';
  serviceId: string;
  subScopes: string[];
  specialistType: DisciplineId | 'integrated';
  urgency: 'standard' | 'priority' | 'urgent';
  notes: string;
}
