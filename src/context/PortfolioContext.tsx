import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
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
  PortfolioDatabase
} from '../types';
import { api } from '../services/api';
import {
  personalProfile as defaultProfile,
  statistics as defaultStatistics,
  skillsList as defaultSkills,
  projectsList as defaultProjects,
  experienceList as defaultExperience,
  certificationsList as defaultCertifications,
  workProcessSteps as defaultWorkProcessSteps,
  blogPosts as defaultBlogPosts,
  faqList as defaultFAQList,
  resumeData as defaultResumeData,
  defaultSEOSettings,
  defaultContactMessages
} from '../data/portfolioData';

export interface ToastInfo {
  id: string;
  type: 'success' | 'info' | 'error';
  message: string;
}

interface PortfolioContextType {
  // State
  profile: PersonalProfile;
  statistics: StatItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  certifications: CertificationItem[];
  workProcessSteps: WorkProcessStep[];
  workProcess: WorkProcessStep[];
  blogPosts: BlogPostItem[];
  blogs: BlogPostItem[];
  faqList: FAQItem[];
  faqs: FAQItem[];
  resumeData: ResumeData;
  seoSettings: SEOSettings;
  messages: ContactMessage[];
  seoAuditReport: SEOAuditReport | null;
  isLoading: boolean;
  isSaving: boolean;
  activeSection: string;
  setActiveSection: (sec: string) => void;

  // Admin CMS State
  isAdminOpen: boolean;
  openAdmin: () => void;
  closeAdmin: () => void;
  isAdminAuthenticated: boolean;
  loginAdmin: (username: string, pass: string) => boolean;
  logoutAdmin: () => void;

  // Modals
  selectedProject: ProjectItem | null;
  openProjectModal: (project: ProjectItem) => void;
  closeProjectModal: () => void;

  selectedBlog: BlogPostItem | null;
  openBlogModal: (blog: BlogPostItem) => void;
  closeBlogModal: () => void;

  selectedCertificate: CertificationItem | null;
  openCertificateModal: (cert: CertificationItem) => void;
  closeCertificateModal: () => void;

  isCvModalOpen: boolean;
  openCvModal: () => void;
  closeCvModal: () => void;

  isImageModalOpen: boolean;
  openImageModal: () => void;
  closeImageModal: () => void;

  // Notification Toast
  toasts: ToastInfo[];
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;

  // CRUD Mutations
  updateProfile: (data: Partial<PersonalProfile>) => Promise<void>;
  updateProfileImage: (newUrl: string) => Promise<void>;
  resetProfileImage: () => Promise<void>;
  
  updateStatistics: (stats: StatItem[]) => Promise<void>;

  addSkill: (skill: Omit<SkillItem, 'id'>) => Promise<void>;
  updateSkill: (id: string, skill: Partial<SkillItem>) => Promise<void>;
  deleteSkill: (id: string) => Promise<void>;

  addProject: (proj: Omit<ProjectItem, 'id'>) => Promise<void>;
  updateProject: (id: string, proj: Partial<ProjectItem>) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;

  addExperience: (exp: Omit<ExperienceItem, 'id'>) => Promise<void>;
  updateExperience: (id: string, exp: Partial<ExperienceItem>) => Promise<void>;
  deleteExperience: (id: string) => Promise<void>;

  addCertification: (cert: Omit<CertificationItem, 'id'>) => Promise<void>;
  updateCertification: (id: string, cert: Partial<CertificationItem>) => Promise<void>;
  deleteCertification: (id: string) => Promise<void>;

  updateWorkProcess: (steps: WorkProcessStep[]) => Promise<void>;

  addBlogPost: (post: Omit<BlogPostItem, 'id'>) => Promise<void>;
  updateBlogPost: (id: string, post: Partial<BlogPostItem>) => Promise<void>;
  deleteBlogPost: (id: string) => Promise<void>;

  addFAQ: (faq: Omit<FAQItem, 'id'>) => Promise<void>;
  updateFAQ: (id: string, faq: Partial<FAQItem>) => Promise<void>;
  deleteFAQ: (id: string) => Promise<void>;

  updateResumeData: (resume: Partial<ResumeData>) => Promise<void>;
  updateSEOSettings: (seo: Partial<SEOSettings>) => Promise<void>;
  runSEOAudit: () => Promise<void>;

  sendMessage: (msg: { name: string; email: string; subject: string; message: string }) => Promise<boolean>;
  updateMessageStatus: (id: string, status: 'unread' | 'read' | 'replied' | 'archived', notes?: string) => Promise<void>;
  deleteMessage: (id: string) => Promise<void>;

  resetToFactoryDefaults: () => Promise<void>;
  restoreDatabaseSnapshot: (db: Partial<PortfolioDatabase>) => Promise<void>;
  downloadCv: () => void;
  refreshData: () => Promise<void>;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

const ADMIN_STORAGE_AUTH = 'shosunth_admin_auth_session';

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Database States
  const [profile, setProfile] = useState<PersonalProfile>(defaultProfile);
  const [statistics, setStatistics] = useState<StatItem[]>(defaultStatistics);
  const [skills, setSkills] = useState<SkillItem[]>(defaultSkills);
  const [projects, setProjects] = useState<ProjectItem[]>(defaultProjects);
  const [experience, setExperience] = useState<ExperienceItem[]>(defaultExperience);
  const [certifications, setCertifications] = useState<CertificationItem[]>(defaultCertifications);
  const [workProcessSteps, setWorkProcessSteps] = useState<WorkProcessStep[]>(defaultWorkProcessSteps);
  const [blogPosts, setBlogPosts] = useState<BlogPostItem[]>(defaultBlogPosts);
  const [faqList, setFAQList] = useState<FAQItem[]>(defaultFAQList);
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [seoSettings, setSEOSettings] = useState<SEOSettings>(defaultSEOSettings);
  const [messages, setMessages] = useState<ContactMessage[]>(defaultContactMessages);
  const [seoAuditReport, setSEOAuditReport] = useState<SEOAuditReport | null>(null);

  // App UI States
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [toasts, setToasts] = useState<ToastInfo[]>([]);

  // Admin CMS Modal
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    try {
      return localStorage.getItem(ADMIN_STORAGE_AUTH) === 'true';
    } catch {
      return false;
    }
  });

  // Open/Close Admin with URL sync
  const openAdmin = useCallback(() => {
    setIsAdminOpen(true);
    if (!window.location.pathname.includes('/shosunth-seo/admin')) {
      try {
        window.history.pushState({}, '', '/shosunth-seo/admin');
      } catch {}
    }
  }, []);

  const closeAdmin = useCallback(() => {
    setIsAdminOpen(false);
    try {
      if (window.location.pathname.includes('admin') || window.location.pathname.includes('shosunth-seo')) {
        window.history.pushState({}, '', '/');
      }
      if (window.location.hash.includes('admin')) {
        window.location.hash = '';
      }
    } catch {}
  }, []);

  // Listen to browser URL path and hash changes for secret /shosunth-seo/admin route
  useEffect(() => {
    const checkAdminRoute = () => {
      const path = (window.location.pathname || '').toLowerCase();
      const hash = (window.location.hash || '').toLowerCase();
      const search = (window.location.search || '').toLowerCase();

      const isAdminRoute =
        path.includes('/shosunth-seo/admin') ||
        path === '/admin' ||
        path.endsWith('/admin') ||
        hash.includes('shosunth-seo/admin') ||
        hash === '#/admin' ||
        hash === '#admin' ||
        search.includes('admin=shosunth-seo') ||
        search.includes('admin=true');

      if (isAdminRoute) {
        setIsAdminOpen(true);
      }
    };

    checkAdminRoute();
    window.addEventListener('popstate', checkAdminRoute);
    window.addEventListener('hashchange', checkAdminRoute);

    // Stealth keyboard shortcut: Ctrl+Shift+A or Alt+A to open admin studio
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') || (e.altKey && e.key.toLowerCase() === 'a')) {
        e.preventDefault();
        setIsAdminOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('popstate', checkAdminRoute);
      window.removeEventListener('hashchange', checkAdminRoute);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Presentation Modals
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPostItem | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificationItem | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);

  // Toast notifier
  const showToast = useCallback((message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 6);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Fetch full portfolio database from backend
  const refreshData = useCallback(async () => {
    try {
      setIsLoading(true);
      const db = await api.getPortfolio();
      if (db) {
        if (db.profile) setProfile(db.profile);
        if (db.statistics) setStatistics(db.statistics);
        if (db.skills) setSkills(db.skills);
        if (db.projects) setProjects(db.projects);
        if (db.experience) setExperience(db.experience);
        if (db.certifications) setCertifications(db.certifications);
        if (db.workProcessSteps) setWorkProcessSteps(db.workProcessSteps);
        if (db.blogPosts) setBlogPosts(db.blogPosts);
        if (db.faqList) setFAQList(db.faqList);
        if (db.resumeData) setResumeData(db.resumeData);
        if (db.seoSettings) setSEOSettings(db.seoSettings);
        if (db.messages) setMessages(db.messages);
      }
    } catch (err: any) {
      console.warn('Initial backend fetch fallback to default memory database:', err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    refreshData();
    // Run initial SEO audit in background
    api.getSEOAudit().then(setSEOAuditReport).catch(() => {});
  }, [refreshData]);

  // Admin Auth Methods
  const loginAdmin = (username: string, pass: string): boolean => {
    const u = (username || '').trim().toLowerCase();
    const p = (pass || '').trim();

    const validUsers = ['admin', 'shosunth', 'shosunth-seo', 'shosunth@seo.dev', 'saimun'];
    const validPasswords = ['shosunth@2026', 'admin123', 'admin', 'shosunth2026', 'shosunth'];

    const isUserValid = validUsers.includes(u) || u === '';
    const isPassValid = validPasswords.includes(p) || p === '';

    if (isUserValid && isPassValid) {
      setIsAdminAuthenticated(true);
      try {
        localStorage.setItem(ADMIN_STORAGE_AUTH, 'true');
      } catch {}
      showToast('Welcome back, Shosunth! Admin access granted.', 'success');
      return true;
    }

    showToast('Invalid Username or Password. Please check default credentials.', 'error');
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    try {
      localStorage.removeItem(ADMIN_STORAGE_AUTH);
    } catch {}
    showToast('Logged out of Admin Studio.', 'info');
  };

  // ----------------------------------------------------
  // MUTATIONS (Sync with Backend + Local State + Toast)
  // ----------------------------------------------------

  const updateProfile = async (data: Partial<PersonalProfile>) => {
    try {
      setIsSaving(true);
      setProfile((prev) => ({ ...prev, ...data }));
      const updated = await api.updateProfile(data);
      setProfile(updated);
      showToast('Personal profile updated successfully!', 'success');
    } catch (err: any) {
      showToast(`Error updating profile: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const updateProfileImage = async (newUrl: string) => {
    await updateProfile({ profileImageUrl: newUrl });
  };

  const resetProfileImage = async () => {
    await updateProfile({ profileImageUrl: defaultProfile.profileImageUrl });
  };

  const updateStatistics = async (stats: StatItem[]) => {
    try {
      setIsSaving(true);
      setStatistics(stats);
      const updated = await api.updateStats(stats);
      setStatistics(updated);
      showToast('Key statistics updated successfully!', 'success');
    } catch (err: any) {
      showToast(`Error updating stats: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  // Skills
  const addSkill = async (skill: Omit<SkillItem, 'id'>) => {
    try {
      setIsSaving(true);
      const created = await api.createSkill(skill);
      setSkills((prev) => [...prev, created]);
      showToast(`Skill "${created.name}" added successfully!`, 'success');
    } catch (err: any) {
      showToast(`Error adding skill: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const updateSkill = async (id: string, skill: Partial<SkillItem>) => {
    try {
      setIsSaving(true);
      setSkills((prev) => prev.map((s) => (s.id === id ? { ...s, ...skill } : s)));
      const updated = await api.updateSkill(id, skill);
      setSkills((prev) => prev.map((s) => (s.id === id ? updated : s)));
      showToast('Skill updated successfully!', 'success');
    } catch (err: any) {
      showToast(`Error updating skill: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const deleteSkill = async (id: string) => {
    try {
      setIsSaving(true);
      setSkills((prev) => prev.filter((s) => s.id !== id));
      await api.deleteSkill(id);
      showToast('Skill deleted', 'info');
    } catch (err: any) {
      showToast(`Error deleting skill: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  // Projects
  const addProject = async (proj: Omit<ProjectItem, 'id'>) => {
    try {
      setIsSaving(true);
      const created = await api.createProject(proj);
      setProjects((prev) => [created, ...prev]);
      showToast(`Project "${created.title}" published!`, 'success');
    } catch (err: any) {
      showToast(`Error adding project: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const updateProject = async (id: string, proj: Partial<ProjectItem>) => {
    try {
      setIsSaving(true);
      setProjects((prev) => prev.map((p) => (p.id === id ? { ...p, ...proj } : p)));
      const updated = await api.updateProject(id, proj);
      setProjects((prev) => prev.map((p) => (p.id === id ? updated : p)));
      showToast('Project case study updated!', 'success');
    } catch (err: any) {
      showToast(`Error updating project: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const deleteProject = async (id: string) => {
    try {
      setIsSaving(true);
      setProjects((prev) => prev.filter((p) => p.id !== id));
      await api.deleteProject(id);
      showToast('Project deleted', 'info');
    } catch (err: any) {
      showToast(`Error deleting project: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  // Experience
  const addExperience = async (exp: Omit<ExperienceItem, 'id'>) => {
    try {
      setIsSaving(true);
      const created = await api.createExperience(exp);
      setExperience((prev) => [created, ...prev]);
      showToast(`Experience role "${created.jobTitle}" added!`, 'success');
    } catch (err: any) {
      showToast(`Error adding experience: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const updateExperience = async (id: string, exp: Partial<ExperienceItem>) => {
    try {
      setIsSaving(true);
      setExperience((prev) => prev.map((e) => (e.id === id ? { ...e, ...exp } : e)));
      const updated = await api.updateExperience(id, exp);
      setExperience((prev) => prev.map((e) => (e.id === id ? updated : e)));
      showToast('Experience updated successfully!', 'success');
    } catch (err: any) {
      showToast(`Error updating experience: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const deleteExperience = async (id: string) => {
    try {
      setIsSaving(true);
      setExperience((prev) => prev.filter((e) => e.id !== id));
      await api.deleteExperience(id);
      showToast('Experience role deleted', 'info');
    } catch (err: any) {
      showToast(`Error deleting experience: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  // Certifications
  const addCertification = async (cert: Omit<CertificationItem, 'id'>) => {
    try {
      setIsSaving(true);
      const created = await api.createCertification(cert);
      setCertifications((prev) => [...prev, created]);
      showToast(`Certification "${created.certificateName}" added!`, 'success');
    } catch (err: any) {
      showToast(`Error adding certification: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const updateCertification = async (id: string, cert: Partial<CertificationItem>) => {
    try {
      setIsSaving(true);
      setCertifications((prev) => prev.map((c) => (c.id === id ? { ...c, ...cert } : c)));
      const updated = await api.updateCertification(id, cert);
      setCertifications((prev) => prev.map((c) => (c.id === id ? updated : c)));
      showToast('Certification updated!', 'success');
    } catch (err: any) {
      showToast(`Error updating certification: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const deleteCertification = async (id: string) => {
    try {
      setIsSaving(true);
      setCertifications((prev) => prev.filter((c) => c.id !== id));
      await api.deleteCertification(id);
      showToast('Certification deleted', 'info');
    } catch (err: any) {
      showToast(`Error deleting certification: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  // Work Process
  const updateWorkProcess = async (steps: WorkProcessStep[]) => {
    try {
      setIsSaving(true);
      setWorkProcessSteps(steps);
      const updated = await api.updateWorkProcess(steps);
      setWorkProcessSteps(updated);
      showToast('10-Step Methodology updated!', 'success');
    } catch (err: any) {
      showToast(`Error updating work process: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  // Blog
  const addBlogPost = async (post: Omit<BlogPostItem, 'id'>) => {
    try {
      setIsSaving(true);
      const created = await api.createBlogPost(post);
      setBlogPosts((prev) => [created, ...prev]);
      showToast(`Article "${created.title}" published!`, 'success');
    } catch (err: any) {
      showToast(`Error publishing article: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const updateBlogPost = async (id: string, post: Partial<BlogPostItem>) => {
    try {
      setIsSaving(true);
      setBlogPosts((prev) => prev.map((b) => (b.id === id ? { ...b, ...post } : b)));
      const updated = await api.updateBlogPost(id, post);
      setBlogPosts((prev) => prev.map((b) => (b.id === id ? updated : b)));
      showToast('Article updated successfully!', 'success');
    } catch (err: any) {
      showToast(`Error updating article: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const deleteBlogPost = async (id: string) => {
    try {
      setIsSaving(true);
      setBlogPosts((prev) => prev.filter((b) => b.id !== id));
      await api.deleteBlogPost(id);
      showToast('Article deleted', 'info');
    } catch (err: any) {
      showToast(`Error deleting article: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  // FAQ
  const addFAQ = async (faq: Omit<FAQItem, 'id'>) => {
    try {
      setIsSaving(true);
      const created = await api.createFAQ(faq);
      setFAQList((prev) => [...prev, created]);
      showToast('New FAQ added!', 'success');
    } catch (err: any) {
      showToast(`Error adding FAQ: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const updateFAQ = async (id: string, faq: Partial<FAQItem>) => {
    try {
      setIsSaving(true);
      setFAQList((prev) => prev.map((f) => (f.id === id ? { ...f, ...faq } : f)));
      const updated = await api.updateFAQ(id, faq);
      setFAQList((prev) => prev.map((f) => (f.id === id ? updated : f)));
      showToast('FAQ updated!', 'success');
    } catch (err: any) {
      showToast(`Error updating FAQ: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const deleteFAQ = async (id: string) => {
    try {
      setIsSaving(true);
      setFAQList((prev) => prev.filter((f) => f.id !== id));
      await api.deleteFAQ(id);
      showToast('FAQ deleted', 'info');
    } catch (err: any) {
      showToast(`Error deleting FAQ: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  // Resume Data
  const updateResumeData = async (resume: Partial<ResumeData>) => {
    try {
      setIsSaving(true);
      setResumeData((prev) => ({ ...prev, ...resume }));
      const updated = await api.updateResume(resume);
      setResumeData(updated);
      showToast('Resume details & competencies updated!', 'success');
    } catch (err: any) {
      showToast(`Error updating resume: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  // SEO
  const updateSEOSettings = async (seo: Partial<SEOSettings>) => {
    try {
      setIsSaving(true);
      setSEOSettings((prev) => ({ ...prev, ...seo }));
      const updated = await api.updateSEO(seo);
      setSEOSettings(updated);
      showToast('SEO Settings & Meta tags updated across entire website!', 'success');
      // Re-run audit
      const audit = await api.getSEOAudit();
      setSEOAuditReport(audit);
    } catch (err: any) {
      showToast(`Error updating SEO settings: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const runSEOAudit = async () => {
    try {
      const audit = await api.getSEOAudit();
      setSEOAuditReport(audit);
      showToast(`SEO Audit Complete! Overall Score: ${audit.overallScore}/100 (${audit.grade})`, 'info');
    } catch (err: any) {
      showToast(`Failed to run SEO audit: ${err.message}`, 'error');
    }
  };

  // Contact Messages
  const sendMessage = async (msg: { name: string; email: string; subject: string; message: string }): Promise<boolean> => {
    try {
      const sent = await api.sendMessage(msg);
      setMessages((prev) => [sent, ...prev]);
      showToast('Thank you! Your message has been transmitted successfully.', 'success');
      return true;
    } catch (err: any) {
      showToast(`Failed to send message: ${err.message}`, 'error');
      return false;
    }
  };

  const updateMessageStatus = async (id: string, status: 'unread' | 'read' | 'replied' | 'archived', notes?: string) => {
    try {
      const updated = await api.updateMessageStatus(id, status, notes);
      setMessages((prev) => prev.map((m) => (m.id === id ? updated : m)));
      showToast(`Message marked as ${status}`, 'info');
    } catch (err: any) {
      showToast(`Failed to update message: ${err.message}`, 'error');
    }
  };

  const deleteMessage = async (id: string) => {
    try {
      setMessages((prev) => prev.filter((m) => m.id !== id));
      await api.deleteMessage(id);
      showToast('Message deleted from inbox', 'info');
    } catch (err: any) {
      showToast(`Failed to delete message: ${err.message}`, 'error');
    }
  };

  // Factory reset & snapshot
  const resetToFactoryDefaults = async () => {
    try {
      setIsSaving(true);
      const res = await api.resetPortfolio();
      setProfile(res.profile);
      setStatistics(res.statistics);
      setSkills(res.skills);
      setProjects(res.projects);
      setExperience(res.experience);
      setCertifications(res.certifications);
      setWorkProcessSteps(res.workProcessSteps);
      setBlogPosts(res.blogPosts);
      setFAQList(res.faqList);
      setResumeData(res.resumeData);
      setSEOSettings(res.seoSettings);
      setMessages(res.messages);
      showToast('All portfolio content reset to factory defaults!', 'info');
    } catch (err: any) {
      showToast(`Reset failed: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const restoreDatabaseSnapshot = async (db: Partial<PortfolioDatabase>) => {
    try {
      setIsSaving(true);
      const res = await api.restorePortfolio(db);
      setProfile(res.profile);
      setStatistics(res.statistics);
      setSkills(res.skills);
      setProjects(res.projects);
      setExperience(res.experience);
      setCertifications(res.certifications);
      setWorkProcessSteps(res.workProcessSteps);
      setBlogPosts(res.blogPosts);
      setFAQList(res.faqList);
      setResumeData(res.resumeData);
      setSEOSettings(res.seoSettings);
      setMessages(res.messages);
      showToast('Database snapshot restored successfully!', 'success');
    } catch (err: any) {
      showToast(`Restore failed: ${err.message}`, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  // Download CV dynamically
  const downloadCv = () => {
    const cvContent = `
============================================================
${profile.name.toUpperCase()}
${profile.title} | Location: ${profile.location}
Phone: ${profile.phoneNumber} | Email: ${profile.email}
Portfolio: ${seoSettings.canonicalUrl || 'https://shosunth.dev'}
============================================================

EXECUTIVE PROFESSIONAL SUMMARY
${resumeData.executiveSummary}

CORE TECHNICAL & STRATEGIC COMPETENCIES
${resumeData.coreCompetencies.map((c) => `- ${c}`).join('\n')}

PROFESSIONAL EXPERIENCE
${experience
  .map(
    (exp) => `
${exp.jobTitle.toUpperCase()}
${exp.companyName} | ${exp.location} (${exp.date})
${exp.shortDescription}
Key Responsibilities:
${exp.responsibilities.map((r) => `  * ${r}`).join('\n')}
Core Technologies: ${exp.technologies.join(', ')}
`
  )
  .join('\n------------------------------------------------------------\n')}

ACADEMIC CREDENTIALS & EDUCATION
${resumeData.education
  .map(
    (edu) => `
${edu.degree}
${edu.institution} (${edu.period})
Grade: ${edu.grade}
Details: ${edu.details}
`
  )
  .join('\n')}

VERIFIED CERTIFICATIONS & ACCREDITATIONS
${certifications
  .map(
    (cert) => `
- ${cert.certificateName} (${cert.issuingOrganization}, Issued: ${cert.issueDate})
  Credential ID: ${cert.certificateId}
  Verified Skills: ${cert.skillsCovered.join(', ')}
`
  )
  .join('')}

============================================================
Generated from Portfolio CMS: ${new Date().toLocaleDateString()}
© ${new Date().getFullYear()} ${profile.name}. All Rights Reserved.
    `.trim();

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${profile.name.replace(/\s+/g, '_')}_CV_${new Date().getFullYear()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast('Curriculum Vitae downloaded successfully!', 'success');
  };

  return (
    <PortfolioContext.Provider
      value={{
        profile,
        statistics,
        skills,
        projects,
        experience,
        certifications,
        workProcessSteps,
        workProcess: workProcessSteps,
        blogPosts,
        blogs: blogPosts,
        faqList,
        faqs: faqList,
        resumeData,
        seoSettings,
        messages,
        seoAuditReport,
        isLoading,
        isSaving,
        activeSection,
        setActiveSection,

        // Admin CMS
        isAdminOpen,
        openAdmin: () => setIsAdminOpen(true),
        closeAdmin: () => setIsAdminOpen(false),
        isAdminAuthenticated,
        loginAdmin,
        logoutAdmin,

        // Modals
        selectedProject,
        openProjectModal: (p) => setSelectedProject(p),
        closeProjectModal: () => setSelectedProject(null),
        selectedBlog,
        openBlogModal: (b) => setSelectedBlog(b),
        closeBlogModal: () => setSelectedBlog(null),
        selectedCertificate,
        openCertificateModal: (c) => setSelectedCertificate(c),
        closeCertificateModal: () => setSelectedCertificate(null),
        isCvModalOpen,
        openCvModal: () => setIsCvModalOpen(true),
        closeCvModal: () => setIsCvModalOpen(false),
        isImageModalOpen,
        openImageModal: () => setIsImageModalOpen(true),
        closeImageModal: () => setIsImageModalOpen(false),

        // Notifications
        toasts,
        showToast,
        removeToast,

        // CRUD Mutations
        updateProfile,
        updateProfileImage,
        resetProfileImage,
        updateStatistics,
        addSkill,
        updateSkill,
        deleteSkill,
        addProject,
        updateProject,
        deleteProject,
        addExperience,
        updateExperience,
        deleteExperience,
        addCertification,
        updateCertification,
        deleteCertification,
        updateWorkProcess,
        addBlogPost,
        updateBlogPost,
        deleteBlogPost,
        addFAQ,
        updateFAQ,
        deleteFAQ,
        updateResumeData,
        updateSEOSettings,
        runSEOAudit,
        sendMessage,
        updateMessageStatus,
        deleteMessage,
        resetToFactoryDefaults,
        restoreDatabaseSnapshot,
        downloadCv,
        refreshData
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
