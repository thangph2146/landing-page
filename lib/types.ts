// Types for Finance Banking Landing Page

export interface TrustBadge {
  id: string;
  name: string;
  imageUrl: string;
  alt: string;
}

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  videoUrl?: string;
  backgroundImage?: string;
  ctaText: string;
  trustBadges: TrustBadge[];
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  isHighlighted?: boolean;
}

export interface TestimonialProps {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  program: string;
  graduationYear?: number;
}

export interface CareerOpportunity {
  id: string;
  title: string;
  description: string;
  averageSalary: string;
  growthRate: string;
  companies: string[];
}

export interface ProgramFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  interest: 'student' | 'parent';
  preferredContact: 'email' | 'phone' | 'whatsapp';
  questions?: string;
  source?: string;
}

export interface AdmissionStep {
  id: string;
  step: number;
  title: string;
  description: string;
  requirements?: string[];
  timeline?: string;
}

export interface FacilityItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export interface PartnerCompany {
  id: string;
  name: string;
  logo: string;
  industry: string;
  partnershipType: 'internship' | 'recruitment' | 'collaboration';
}

export interface StatisticItem {
  id: string;
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface LeadMagnet {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  targetAudience: 'student' | 'parent' | 'both';
  downloadCount?: number;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  website: string;
  socialMedia: {
    facebook?: string;
    youtube?: string;
    linkedin?: string;
    zalo?: string;
  };
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

// Form validation schemas
export interface FormErrors {
  [key: string]: string | undefined;
}

// Animation and UI states
export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing?: string;
}

export interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  duration?: number;
  delay?: number;
  threshold?: number;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: FormErrors;
}

export interface SubmissionResponse {
  id: string;
  status: 'pending' | 'confirmed' | 'failed';
  message: string;
  nextSteps?: string[];
}