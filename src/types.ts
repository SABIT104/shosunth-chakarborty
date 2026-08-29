export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
  iconName: string;
}

export type SkillCategory = 'SEO' | 'Frontend' | 'Backend & CMS' | 'Strategy & Tools';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  level: number; // 0-100
  icon: string;
  experienceYears: string;
  description: string;
  highlight?: boolean;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  category: 'Full-Stack' | 'SEO & Growth' | 'E-Commerce' | 'Web Application';
  techTags: string[];
  seoTags: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  jobTitle: string;
  companyName: string;
  location: string;
  date: string;
  period: string;
  shortDescription: string;
  responsibilities: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface CertificationItem {
  id: string;
  certificateName: string;
  issuingOrganization: string;
  issueDate: string;
  expiryDate?: string;
  certificateId: string;
  category: 'All' | 'SEO' | 'Development' | 'Marketing';
  image: string;
  credentialUrl?: string;
  skillsCovered: string[];
}

export interface WorkProcessStep {
  stepNumber: string; // e.g. "01"
  title: string;      // e.g. "DISCOVER"
  subtitle: string;   // e.g. "Understand the Business & Goals"
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  category: 'SEO & Search' | 'Web Development' | 'Performance & CRO' | 'Strategy';
  date: string;
  readTime: string;
  shortDescription: string;
  content: string[];
  tags: string[];
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Web Development' | 'SEO & Search';
}

export interface SocialLink {
  platform: 'LinkedIn' | 'Facebook' | 'GitHub' | 'Instagram';
  url: string;
  username: string;
  iconName: string;
}

export interface PersonalProfile {
  name: string;
  badge: string;
  title: string;
  heroHeading: string;
  heroIntro: string;
  aboutHeading: string;
  aboutSubheading: string;
  aboutIntro: string;
  aboutStory: string[];
  phoneNumber: string;
  phoneNumberFormatted: string;
  phoneTel: string;
  email: string;
  location: string;
  country: string;
  availability: string;
  profileImageUrl: string;
  resumeFileName: string;
  resumeLastUpdated: string;
  socials: SocialLink[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  details: string;
}

export interface ResumeData {
  executiveSummary: string;
  summary?: string;
  highlights?: string[];
  coreCompetencies: string[];
  education: EducationItem[];
}

export interface SEOSettings {
  siteTitle: string;
  titleTemplate: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl: string;
  author: string;
  ogImage: string;
  ogType: string;
  twitterHandle: string;
  twitterCard: 'summary' | 'summary_large_image';
  robotsIndex: boolean;
  robotsFollow: boolean;
  googleVerificationId: string;
  bingVerificationId: string;
  schemaType: 'Person' | 'ProfessionalService' | 'WebSite';
  structuredDataJson: string;
  sitemapEnabled: boolean;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'unread' | 'read' | 'replied' | 'archived';
  notes?: string;
}

export interface SEOAuditCheck {
  id: string;
  category: 'Meta' | 'Content' | 'Technical' | 'Social';
  title: string;
  passed: boolean;
  score: number; // 0-100
  details: string;
  recommendation?: string;
}

export interface SEOAuditReport {
  overallScore: number;
  grade: 'A+' | 'A' | 'B' | 'C' | 'D';
  passedCount: number;
  totalChecks: number;
  checks: SEOAuditCheck[];
  lastAuditedAt: string;
}

export interface PortfolioDatabase {
  profile: PersonalProfile;
  statistics: StatItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  certifications: CertificationItem[];
  workProcessSteps: WorkProcessStep[];
  blogPosts: BlogPostItem[];
  faqList: FAQItem[];
  resumeData: ResumeData;
  seoSettings: SEOSettings;
  messages: ContactMessage[];
  lastUpdated: string;
}

