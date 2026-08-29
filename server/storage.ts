import fs from 'fs';
import path from 'path';
import {
  PortfolioDatabase,
  PersonalProfile,
  StatItem,
  SkillItem,
  ProjectItem,
  ExperienceItem,
  CertificationItem,
  WorkProcessStep,
  BlogPostItem,
  FAQItem,
  ResumeData,
  SEOSettings,
  ContactMessage,
  SEOAuditReport,
  SEOAuditCheck
} from '../src/types';
import { getDefaultDatabase } from './defaultData';

const DB_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DB_DIR, 'db.json');

// In-memory cache
let inMemoryDb: PortfolioDatabase | null = null;

function ensureDbDirectory(): void {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }
}

export function getDatabase(): PortfolioDatabase {
  if (inMemoryDb) {
    return inMemoryDb;
  }

  ensureDbDirectory();

  if (fs.existsSync(DB_FILE)) {
    try {
      const raw = fs.readFileSync(DB_FILE, 'utf-8');
      const parsed = JSON.parse(raw) as PortfolioDatabase;
      inMemoryDb = {
        ...getDefaultDatabase(),
        ...parsed,
        profile: { ...getDefaultDatabase().profile, ...(parsed.profile || {}) },
        seoSettings: { ...getDefaultDatabase().seoSettings, ...(parsed.seoSettings || {}) },
        resumeData: { ...getDefaultDatabase().resumeData, ...(parsed.resumeData || {}) }
      };
      return inMemoryDb;
    } catch (err) {
      console.error('Failed to read db.json, falling back to defaults:', err);
    }
  }

  // Seed default database
  const defaultData = getDefaultDatabase();
  saveDatabase(defaultData);
  return defaultData;
}

export function saveDatabase(db: PortfolioDatabase): void {
  ensureDbDirectory();
  db.lastUpdated = new Date().toISOString();
  inMemoryDb = db;
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to write db.json:', err);
  }
}

export function resetDatabase(): PortfolioDatabase {
  const fresh = getDefaultDatabase();
  saveDatabase(fresh);
  return fresh;
}

export function restoreDatabase(restored: Partial<PortfolioDatabase>): PortfolioDatabase {
  const current = getDatabase();
  const merged: PortfolioDatabase = {
    ...current,
    ...restored,
    lastUpdated: new Date().toISOString()
  };
  saveDatabase(merged);
  return merged;
}

// Profile
export function getProfile(): PersonalProfile {
  return getDatabase().profile;
}

export function updateProfile(updated: Partial<PersonalProfile>): PersonalProfile {
  const db = getDatabase();
  db.profile = { ...db.profile, ...updated };
  saveDatabase(db);
  return db.profile;
}

// Stats
export function getStats(): StatItem[] {
  return getDatabase().statistics;
}

export function updateStats(stats: StatItem[]): StatItem[] {
  const db = getDatabase();
  db.statistics = stats;
  saveDatabase(db);
  return db.statistics;
}

// Skills
export function getSkills(): SkillItem[] {
  return getDatabase().skills;
}

export function createSkill(skill: Omit<SkillItem, 'id'> & { id?: string }): SkillItem {
  const db = getDatabase();
  const newSkill: SkillItem = {
    ...skill,
    id: skill.id || `skill-${Date.now()}`
  };
  db.skills.push(newSkill);
  saveDatabase(db);
  return newSkill;
}

export function updateSkill(id: string, updated: Partial<SkillItem>): SkillItem | null {
  const db = getDatabase();
  const index = db.skills.findIndex((s) => s.id === id);
  if (index === -1) return null;
  db.skills[index] = { ...db.skills[index], ...updated };
  saveDatabase(db);
  return db.skills[index];
}

export function deleteSkill(id: string): boolean {
  const db = getDatabase();
  const initLen = db.skills.length;
  db.skills = db.skills.filter((s) => s.id !== id);
  if (db.skills.length !== initLen) {
    saveDatabase(db);
    return true;
  }
  return false;
}

// Projects
export function getProjects(): ProjectItem[] {
  return getDatabase().projects;
}

export function createProject(proj: Omit<ProjectItem, 'id'> & { id?: string }): ProjectItem {
  const db = getDatabase();
  const num = (db.projects.length + 1).toString().padStart(2, '0');
  const newProj: ProjectItem = {
    ...proj,
    id: proj.id || `proj-${Date.now()}`,
    number: proj.number || num
  };
  db.projects.unshift(newProj);
  saveDatabase(db);
  return newProj;
}

export function updateProject(id: string, updated: Partial<ProjectItem>): ProjectItem | null {
  const db = getDatabase();
  const index = db.projects.findIndex((p) => p.id === id);
  if (index === -1) return null;
  db.projects[index] = { ...db.projects[index], ...updated };
  saveDatabase(db);
  return db.projects[index];
}

export function deleteProject(id: string): boolean {
  const db = getDatabase();
  const initLen = db.projects.length;
  db.projects = db.projects.filter((p) => p.id !== id);
  if (db.projects.length !== initLen) {
    saveDatabase(db);
    return true;
  }
  return false;
}

// Experience
export function getExperience(): ExperienceItem[] {
  return getDatabase().experience;
}

export function createExperience(exp: Omit<ExperienceItem, 'id'> & { id?: string }): ExperienceItem {
  const db = getDatabase();
  const newExp: ExperienceItem = {
    ...exp,
    id: exp.id || `exp-${Date.now()}`
  };
  db.experience.unshift(newExp);
  saveDatabase(db);
  return newExp;
}

export function updateExperience(id: string, updated: Partial<ExperienceItem>): ExperienceItem | null {
  const db = getDatabase();
  const index = db.experience.findIndex((e) => e.id === id);
  if (index === -1) return null;
  db.experience[index] = { ...db.experience[index], ...updated };
  saveDatabase(db);
  return db.experience[index];
}

export function deleteExperience(id: string): boolean {
  const db = getDatabase();
  const initLen = db.experience.length;
  db.experience = db.experience.filter((e) => e.id !== id);
  if (db.experience.length !== initLen) {
    saveDatabase(db);
    return true;
  }
  return false;
}

// Certifications
export function getCertifications(): CertificationItem[] {
  return getDatabase().certifications;
}

export function createCertification(cert: Omit<CertificationItem, 'id'> & { id?: string }): CertificationItem {
  const db = getDatabase();
  const newCert: CertificationItem = {
    ...cert,
    id: cert.id || `cert-${Date.now()}`
  };
  db.certifications.push(newCert);
  saveDatabase(db);
  return newCert;
}

export function updateCertification(id: string, updated: Partial<CertificationItem>): CertificationItem | null {
  const db = getDatabase();
  const index = db.certifications.findIndex((c) => c.id === id);
  if (index === -1) return null;
  db.certifications[index] = { ...db.certifications[index], ...updated };
  saveDatabase(db);
  return db.certifications[index];
}

export function deleteCertification(id: string): boolean {
  const db = getDatabase();
  const initLen = db.certifications.length;
  db.certifications = db.certifications.filter((c) => c.id !== id);
  if (db.certifications.length !== initLen) {
    saveDatabase(db);
    return true;
  }
  return false;
}

// Work Process
export function getWorkProcess(): WorkProcessStep[] {
  return getDatabase().workProcessSteps;
}

export function updateWorkProcess(steps: WorkProcessStep[]): WorkProcessStep[] {
  const db = getDatabase();
  db.workProcessSteps = steps;
  saveDatabase(db);
  return db.workProcessSteps;
}

// Blog
export function getBlogPosts(): BlogPostItem[] {
  return getDatabase().blogPosts;
}

export function createBlogPost(post: Omit<BlogPostItem, 'id'> & { id?: string }): BlogPostItem {
  const db = getDatabase();
  const slug = post.slug || post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const newPost: BlogPostItem = {
    ...post,
    id: post.id || `blog-${Date.now()}`,
    slug
  };
  db.blogPosts.unshift(newPost);
  saveDatabase(db);
  return newPost;
}

export function updateBlogPost(id: string, updated: Partial<BlogPostItem>): BlogPostItem | null {
  const db = getDatabase();
  const index = db.blogPosts.findIndex((b) => b.id === id);
  if (index === -1) return null;
  db.blogPosts[index] = { ...db.blogPosts[index], ...updated };
  saveDatabase(db);
  return db.blogPosts[index];
}

export function deleteBlogPost(id: string): boolean {
  const db = getDatabase();
  const initLen = db.blogPosts.length;
  db.blogPosts = db.blogPosts.filter((b) => b.id !== id);
  if (db.blogPosts.length !== initLen) {
    saveDatabase(db);
    return true;
  }
  return false;
}

// FAQ
export function getFAQ(): FAQItem[] {
  return getDatabase().faqList;
}

export function createFAQ(faq: Omit<FAQItem, 'id'> & { id?: string }): FAQItem {
  const db = getDatabase();
  const newFaq: FAQItem = {
    ...faq,
    id: faq.id || `faq-${Date.now()}`
  };
  db.faqList.push(newFaq);
  saveDatabase(db);
  return newFaq;
}

export function updateFAQ(id: string, updated: Partial<FAQItem>): FAQItem | null {
  const db = getDatabase();
  const index = db.faqList.findIndex((f) => f.id === id);
  if (index === -1) return null;
  db.faqList[index] = { ...db.faqList[index], ...updated };
  saveDatabase(db);
  return db.faqList[index];
}

export function deleteFAQ(id: string): boolean {
  const db = getDatabase();
  const initLen = db.faqList.length;
  db.faqList = db.faqList.filter((f) => f.id !== id);
  if (db.faqList.length !== initLen) {
    saveDatabase(db);
    return true;
  }
  return false;
}

// Resume Data
export function getResumeData(): ResumeData {
  return getDatabase().resumeData;
}

export function updateResumeData(resume: Partial<ResumeData>): ResumeData {
  const db = getDatabase();
  db.resumeData = { ...db.resumeData, ...resume };
  saveDatabase(db);
  return db.resumeData;
}

// SEO Settings
export function getSEOSettings(): SEOSettings {
  return getDatabase().seoSettings;
}

export function updateSEOSettings(seo: Partial<SEOSettings>): SEOSettings {
  const db = getDatabase();
  db.seoSettings = { ...db.seoSettings, ...seo };
  saveDatabase(db);
  return db.seoSettings;
}

// Contact Messages Inbox
export function getMessages(): ContactMessage[] {
  return getDatabase().messages;
}

export function createMessage(msg: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>): ContactMessage {
  const db = getDatabase();
  const newMsg: ContactMessage = {
    ...msg,
    id: `msg-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    createdAt: new Date().toISOString(),
    status: 'unread'
  };
  db.messages.unshift(newMsg);
  saveDatabase(db);
  return newMsg;
}

export function updateMessageStatus(
  id: string,
  status: 'unread' | 'read' | 'replied' | 'archived',
  notes?: string
): ContactMessage | null {
  const db = getDatabase();
  const index = db.messages.findIndex((m) => m.id === id);
  if (index === -1) return null;
  db.messages[index].status = status;
  if (notes !== undefined) {
    db.messages[index].notes = notes;
  }
  saveDatabase(db);
  return db.messages[index];
}

export function deleteMessage(id: string): boolean {
  const db = getDatabase();
  const initLen = db.messages.length;
  db.messages = db.messages.filter((m) => m.id !== id);
  if (db.messages.length !== initLen) {
    saveDatabase(db);
    return true;
  }
  return false;
}

// SEO Audit Engine
export function performSEOAudit(): SEOAuditReport {
  const db = getDatabase();
  const seo = db.seoSettings;
  const checks: SEOAuditCheck[] = [];

  // Check 1: Title length
  const titleLen = seo.siteTitle.length;
  const titleOk = titleLen >= 30 && titleLen <= 65;
  checks.push({
    id: 'title-length',
    category: 'Meta',
    title: 'Meta Title Length (30-65 chars)',
    passed: titleOk,
    score: titleOk ? 100 : titleLen < 30 ? 50 : 70,
    details: `Current title length is ${titleLen} characters. Ideal length is 30–65 characters.`,
    recommendation: !titleOk ? 'Optimize title length between 45-60 characters for maximum SERP visibility.' : undefined
  });

  // Check 2: Meta description length
  const descLen = seo.metaDescription.length;
  const descOk = descLen >= 120 && descLen <= 165;
  checks.push({
    id: 'meta-description',
    category: 'Meta',
    title: 'Meta Description Optimization (120-165 chars)',
    passed: descOk,
    score: descOk ? 100 : descLen < 100 ? 40 : 75,
    details: `Current description is ${descLen} characters long.`,
    recommendation: !descOk ? 'Craft a description between 130-160 characters containing core primary keywords.' : undefined
  });

  // Check 3: Canonical URL
  const canonicalOk = Boolean(seo.canonicalUrl && seo.canonicalUrl.startsWith('http'));
  checks.push({
    id: 'canonical-url',
    category: 'Technical',
    title: 'Self-Referencing Canonical Tag',
    passed: canonicalOk,
    score: canonicalOk ? 100 : 0,
    details: canonicalOk ? `Canonical URL configured: ${seo.canonicalUrl}` : 'Missing or invalid canonical URL.',
    recommendation: !canonicalOk ? 'Set a valid HTTPS canonical URL to prevent duplicate content indexing.' : undefined
  });

  // Check 4: Structured Data JSON-LD
  let schemaOk = false;
  try {
    const parsed = JSON.parse(seo.structuredDataJson);
    schemaOk = Boolean(parsed['@context'] && parsed['@type']);
  } catch {
    schemaOk = false;
  }
  checks.push({
    id: 'structured-data',
    category: 'Technical',
    title: 'JSON-LD Schema Markup Validity',
    passed: schemaOk,
    score: schemaOk ? 100 : 0,
    details: schemaOk ? `Valid Schema.org ${seo.schemaType} graph embedded.` : 'JSON-LD syntax is invalid or missing required keys.',
    recommendation: !schemaOk ? 'Fix JSON-LD schema syntax to enable Google Rich Results and Knowledge Graph snippets.' : undefined
  });

  // Check 5: OpenGraph & Social Cards
  const ogOk = Boolean(seo.ogImage && seo.twitterHandle);
  checks.push({
    id: 'opengraph-social',
    category: 'Social',
    title: 'OpenGraph & Twitter Card Tags',
    passed: ogOk,
    score: ogOk ? 100 : 50,
    details: ogOk ? 'OpenGraph image and Twitter card credentials configured.' : 'Missing OpenGraph social preview image or Twitter handle.',
    recommendation: !ogOk ? 'Add a high-resolution 1200x630 OG image and Twitter creator handle.' : undefined
  });

  // Check 6: Keyword density & keywords list
  const kwOk = seo.keywords.length >= 5;
  checks.push({
    id: 'keywords-target',
    category: 'Content',
    title: 'Target Keyword Coverage (5+ Primary Entities)',
    passed: kwOk,
    score: kwOk ? 100 : 60,
    details: `${seo.keywords.length} target keywords configured.`,
    recommendation: !kwOk ? 'Define at least 5-10 primary search keywords to track.' : undefined
  });

  // Check 7: Robots Indexing directives
  const robotsOk = seo.robotsIndex && seo.robotsFollow;
  checks.push({
    id: 'robots-directives',
    category: 'Technical',
    title: 'Robots.txt & Search Crawling Permissions',
    passed: robotsOk,
    score: robotsOk ? 100 : 0,
    details: robotsOk ? 'Robots index: true, follow: true' : 'Search engine indexing is currently blocked (noindex).',
    recommendation: !robotsOk ? 'Enable robots index and follow to allow search engines to crawl pages.' : undefined
  });

  // Check 8: XML Sitemap
  const sitemapOk = seo.sitemapEnabled;
  checks.push({
    id: 'xml-sitemap',
    category: 'Technical',
    title: 'Dynamic XML Sitemap Generation',
    passed: sitemapOk,
    score: sitemapOk ? 100 : 0,
    details: sitemapOk ? 'Dynamic XML sitemap active at /api/sitemap.xml' : 'XML sitemap is disabled.',
    recommendation: !sitemapOk ? 'Enable XML sitemap generation for rapid Googlebot discovery.' : undefined
  });

  const totalScore = Math.round(checks.reduce((acc, c) => acc + c.score, 0) / checks.length);
  const passedCount = checks.filter((c) => c.passed).length;
  let grade: 'A+' | 'A' | 'B' | 'C' | 'D' = 'D';
  if (totalScore >= 95) grade = 'A+';
  else if (totalScore >= 85) grade = 'A';
  else if (totalScore >= 70) grade = 'B';
  else if (totalScore >= 55) grade = 'C';

  return {
    overallScore: totalScore,
    grade,
    passedCount,
    totalChecks: checks.length,
    checks,
    lastAuditedAt: new Date().toISOString()
  };
}
