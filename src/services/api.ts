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
  SEOAuditReport
} from '../types';

const API_BASE = '/api';

async function fetchJson<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {})
    }
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(errorBody.error || `HTTP error! status: ${res.status}`);
  }

  const json = await res.json();
  return json.data !== undefined ? json.data : json;
}

export const api = {
  // Full Database
  getPortfolio: () => fetchJson<PortfolioDatabase>(`${API_BASE}/portfolio`),
  resetPortfolio: () => fetchJson<PortfolioDatabase>(`${API_BASE}/portfolio/reset`, { method: 'POST' }),
  restorePortfolio: (db: Partial<PortfolioDatabase>) =>
    fetchJson<PortfolioDatabase>(`${API_BASE}/portfolio/restore`, {
      method: 'POST',
      body: JSON.stringify(db)
    }),

  // Profile
  getProfile: () => fetchJson<PersonalProfile>(`${API_BASE}/profile`),
  updateProfile: (profile: Partial<PersonalProfile>) =>
    fetchJson<PersonalProfile>(`${API_BASE}/profile`, {
      method: 'PUT',
      body: JSON.stringify(profile)
    }),

  // Stats
  getStats: () => fetchJson<StatItem[]>(`${API_BASE}/stats`),
  updateStats: (stats: StatItem[]) =>
    fetchJson<StatItem[]>(`${API_BASE}/stats`, {
      method: 'PUT',
      body: JSON.stringify(stats)
    }),

  // Skills
  getSkills: () => fetchJson<SkillItem[]>(`${API_BASE}/skills`),
  createSkill: (skill: Omit<SkillItem, 'id'>) =>
    fetchJson<SkillItem>(`${API_BASE}/skills`, {
      method: 'POST',
      body: JSON.stringify(skill)
    }),
  updateSkill: (id: string, skill: Partial<SkillItem>) =>
    fetchJson<SkillItem>(`${API_BASE}/skills/${id}`, {
      method: 'PUT',
      body: JSON.stringify(skill)
    }),
  deleteSkill: (id: string) =>
    fetchJson<{ success: boolean }>(`${API_BASE}/skills/${id}`, {
      method: 'DELETE'
    }),

  // Projects
  getProjects: () => fetchJson<ProjectItem[]>(`${API_BASE}/projects`),
  createProject: (project: Omit<ProjectItem, 'id'>) =>
    fetchJson<ProjectItem>(`${API_BASE}/projects`, {
      method: 'POST',
      body: JSON.stringify(project)
    }),
  updateProject: (id: string, project: Partial<ProjectItem>) =>
    fetchJson<ProjectItem>(`${API_BASE}/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(project)
    }),
  deleteProject: (id: string) =>
    fetchJson<{ success: boolean }>(`${API_BASE}/projects/${id}`, {
      method: 'DELETE'
    }),

  // Experience
  getExperience: () => fetchJson<ExperienceItem[]>(`${API_BASE}/experience`),
  createExperience: (exp: Omit<ExperienceItem, 'id'>) =>
    fetchJson<ExperienceItem>(`${API_BASE}/experience`, {
      method: 'POST',
      body: JSON.stringify(exp)
    }),
  updateExperience: (id: string, exp: Partial<ExperienceItem>) =>
    fetchJson<ExperienceItem>(`${API_BASE}/experience/${id}`, {
      method: 'PUT',
      body: JSON.stringify(exp)
    }),
  deleteExperience: (id: string) =>
    fetchJson<{ success: boolean }>(`${API_BASE}/experience/${id}`, {
      method: 'DELETE'
    }),

  // Certifications
  getCertifications: () => fetchJson<CertificationItem[]>(`${API_BASE}/certifications`),
  createCertification: (cert: Omit<CertificationItem, 'id'>) =>
    fetchJson<CertificationItem>(`${API_BASE}/certifications`, {
      method: 'POST',
      body: JSON.stringify(cert)
    }),
  updateCertification: (id: string, cert: Partial<CertificationItem>) =>
    fetchJson<CertificationItem>(`${API_BASE}/certifications/${id}`, {
      method: 'PUT',
      body: JSON.stringify(cert)
    }),
  deleteCertification: (id: string) =>
    fetchJson<{ success: boolean }>(`${API_BASE}/certifications/${id}`, {
      method: 'DELETE'
    }),

  // Work Process
  getWorkProcess: () => fetchJson<WorkProcessStep[]>(`${API_BASE}/process`),
  updateWorkProcess: (steps: WorkProcessStep[]) =>
    fetchJson<WorkProcessStep[]>(`${API_BASE}/process`, {
      method: 'PUT',
      body: JSON.stringify(steps)
    }),

  // Blog
  getBlogPosts: () => fetchJson<BlogPostItem[]>(`${API_BASE}/blog`),
  createBlogPost: (post: Omit<BlogPostItem, 'id'>) =>
    fetchJson<BlogPostItem>(`${API_BASE}/blog`, {
      method: 'POST',
      body: JSON.stringify(post)
    }),
  updateBlogPost: (id: string, post: Partial<BlogPostItem>) =>
    fetchJson<BlogPostItem>(`${API_BASE}/blog/${id}`, {
      method: 'PUT',
      body: JSON.stringify(post)
    }),
  deleteBlogPost: (id: string) =>
    fetchJson<{ success: boolean }>(`${API_BASE}/blog/${id}`, {
      method: 'DELETE'
    }),

  // FAQ
  getFAQ: () => fetchJson<FAQItem[]>(`${API_BASE}/faq`),
  createFAQ: (faq: Omit<FAQItem, 'id'>) =>
    fetchJson<FAQItem>(`${API_BASE}/faq`, {
      method: 'POST',
      body: JSON.stringify(faq)
    }),
  updateFAQ: (id: string, faq: Partial<FAQItem>) =>
    fetchJson<FAQItem>(`${API_BASE}/faq/${id}`, {
      method: 'PUT',
      body: JSON.stringify(faq)
    }),
  deleteFAQ: (id: string) =>
    fetchJson<{ success: boolean }>(`${API_BASE}/faq/${id}`, {
      method: 'DELETE'
    }),

  // Resume
  getResume: () => fetchJson<ResumeData>(`${API_BASE}/resume`),
  updateResume: (resume: Partial<ResumeData>) =>
    fetchJson<ResumeData>(`${API_BASE}/resume`, {
      method: 'PUT',
      body: JSON.stringify(resume)
    }),

  // SEO & Audit
  getSEO: () => fetchJson<SEOSettings>(`${API_BASE}/seo`),
  updateSEO: (seo: Partial<SEOSettings>) =>
    fetchJson<SEOSettings>(`${API_BASE}/seo`, {
      method: 'PUT',
      body: JSON.stringify(seo)
    }),
  getSEOAudit: () => fetchJson<SEOAuditReport>(`${API_BASE}/seo/audit`),

  // Contact Messages Inbox
  getMessages: () => fetchJson<ContactMessage[]>(`${API_BASE}/messages`),
  sendMessage: (msg: { name: string; email: string; subject: string; message: string }) =>
    fetchJson<ContactMessage>(`${API_BASE}/messages`, {
      method: 'POST',
      body: JSON.stringify(msg)
    }),
  updateMessageStatus: (id: string, status: 'unread' | 'read' | 'replied' | 'archived', notes?: string) =>
    fetchJson<ContactMessage>(`${API_BASE}/messages/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ status, notes })
    }),
  deleteMessage: (id: string) =>
    fetchJson<{ success: boolean }>(`${API_BASE}/messages/${id}`, {
      method: 'DELETE'
    })
};
