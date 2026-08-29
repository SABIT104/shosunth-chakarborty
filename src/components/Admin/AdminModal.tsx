import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  LayoutDashboard,
  User,
  FolderGit2,
  Search,
  Wrench,
  FileText,
  Briefcase,
  Award,
  ListOrdered,
  BookOpen,
  HelpCircle,
  Mail,
  Database,
  Save,
  RotateCcw,
  Sparkles,
  Plus,
  Trash2,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Lock,
  Unlock,
  Eye,
  Download,
  Upload,
  RefreshCw
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  SkillCategory,
  ProjectItem,
  SkillItem,
  ExperienceItem,
  CertificationItem,
  BlogPostItem,
  FAQItem,
  WorkProcessStep,
  EducationItem
} from '../../types';

type AdminTab =
  | 'overview'
  | 'profile'
  | 'seo'
  | 'projects'
  | 'skills'
  | 'resume'
  | 'experience'
  | 'certifications'
  | 'process'
  | 'blog'
  | 'faq'
  | 'messages'
  | 'backup';

export const AdminModal: React.FC = () => {
  const {
    isAdminOpen,
    closeAdmin,
    isAdminAuthenticated,
    loginAdmin,
    logoutAdmin,
    profile,
    updateProfile,
    statistics,
    updateStatistics,
    skills,
    addSkill,
    updateSkill,
    deleteSkill,
    projects,
    addProject,
    updateProject,
    deleteProject,
    experience,
    addExperience,
    updateExperience,
    deleteExperience,
    certifications,
    addCertification,
    updateCertification,
    deleteCertification,
    workProcessSteps,
    updateWorkProcess,
    blogPosts,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost,
    faqList,
    addFAQ,
    updateFAQ,
    deleteFAQ,
    resumeData,
    updateResumeData,
    seoSettings,
    updateSEOSettings,
    seoAuditReport,
    runSEOAudit,
    messages,
    updateMessageStatus,
    deleteMessage,
    resetToFactoryDefaults,
    restoreDatabaseSnapshot,
    isSaving,
    showToast
  } = usePortfolio();

  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');

  // Local form states for editing
  const [profileForm, setProfileForm] = useState(profile);
  const [seoForm, setSeoForm] = useState(seoSettings);
  const [resumeForm, setResumeForm] = useState(resumeData);
  const [statsForm, setStatsForm] = useState(statistics);

  // When profile/seo/resume updates in context, keep form in sync
  React.useEffect(() => {
    setProfileForm(profile);
  }, [profile]);

  React.useEffect(() => {
    setSeoForm(seoSettings);
  }, [seoSettings]);

  React.useEffect(() => {
    setResumeForm(resumeData);
  }, [resumeData]);

  React.useEffect(() => {
    setStatsForm(statistics);
  }, [statistics]);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    const success = loginAdmin(usernameInput, passwordInput);
    if (!success) {
      setAuthError('Invalid username or password. Default is: admin / admin123');
    }
  };

  const handleFillDemoCredentials = () => {
    setUsernameInput('admin');
    setPasswordInput('admin123');
    setAuthError('');
  };

  if (!isAdminOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeAdmin}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="relative w-full max-w-7xl h-[92vh] rounded-3xl bg-[#090d16] border border-slate-800 shadow-2xl z-10 flex flex-col overflow-hidden text-slate-100 font-sans"
        >
          {/* Top Bar Header */}
          <div className="px-5 py-3.5 bg-[#020617] border-b border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 p-[1.5px] shrink-0">
                <div className="w-full h-full bg-[#090d16] rounded-[9px] flex items-center justify-center font-mono font-bold text-amber-400 text-xs">
                  CMS
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-sm sm:text-base font-bold text-white font-heading">
                    Shosunth SEO & Developer Admin Studio
                  </h2>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    /shosunth-seo/admin
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
                  Live CRUD CMS, Dynamic Portfolio Editor & Technical SEO Management Panel
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              {isSaving && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-mono border border-amber-500/20">
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  <span className="hidden sm:inline">Saving...</span>
                </div>
              )}

              {isAdminAuthenticated && (
                <button
                  onClick={logoutAdmin}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-mono font-semibold transition-all"
                  title="Sign Out of Admin"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              )}

              <button
                onClick={closeAdmin}
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                title="Close Studio & Return to Website"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Authentication Barrier */}
          {!isAdminAuthenticated ? (
            <div className="flex-1 flex items-center justify-center p-4 sm:p-6 bg-[#020617]/70 overflow-y-auto">
              <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-[#090d16] border border-slate-800 shadow-2xl space-y-6">
                <div className="text-center space-y-2">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto shadow-inner">
                    <Lock className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading">Admin Studio Login</h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Protected Control Center — <span className="text-amber-400">/shosunth-seo/admin</span>
                  </p>
                </div>

                {authError && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                    <span>{authError}</span>
                  </div>
                )}

                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-medium text-slate-300">
                      Username / Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={usernameInput}
                        onChange={(e) => setUsernameInput(e.target.value)}
                        placeholder="admin"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none font-mono transition-all"
                        autoFocus
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-medium text-slate-300">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none font-mono transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300"
                      >
                        {showPassword ? <Unlock className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold font-mono text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span>Sign In to Dashboard</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </form>

                {/* Default Credentials Helper Card */}
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold text-slate-400">
                      Default Credentials:
                    </span>
                    <button
                      type="button"
                      onClick={handleFillDemoCredentials}
                      className="text-[11px] font-mono font-bold text-amber-400 hover:text-amber-300 underline cursor-pointer"
                    >
                      1-Click Auto Fill
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800/80">
                      <span className="text-slate-500 block text-[10px]">USER:</span>
                      <span className="text-slate-200 font-bold">admin</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800/80">
                      <span className="text-slate-500 block text-[10px]">PASSWORD:</span>
                      <span className="text-slate-200 font-bold">admin123</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Authenticated Admin Workspace */
            <div className="flex-1 flex overflow-hidden">
              {/* Left Sidebar Navigation */}
              <div className="w-64 bg-[#020617]/90 border-r border-slate-800 flex flex-col shrink-0 overflow-y-auto">
                <div className="p-3 space-y-1">
                  {[
                    { id: 'overview', label: 'Overview & Health', icon: LayoutDashboard, badge: null },
                    { id: 'profile', label: 'Profile & Bio', icon: User, badge: null },
                    { id: 'seo', label: 'SEO & Search Engine', icon: Search, badge: 'Crucial' },
                    { id: 'projects', label: 'Projects & Work', icon: FolderGit2, count: projects.length },
                    { id: 'skills', label: 'Skills & Stats', icon: Wrench, count: skills.length },
                    { id: 'resume', label: 'CV & Competencies', icon: FileText, badge: null },
                    { id: 'experience', label: 'Work Experience', icon: Briefcase, count: experience.length },
                    { id: 'certifications', label: 'Certifications', icon: Award, count: certifications.length },
                    { id: 'process', label: '10-Step Process', icon: ListOrdered, count: workProcessSteps.length },
                    { id: 'blog', label: 'Articles & Insights', icon: BookOpen, count: blogPosts.length },
                    { id: 'faq', label: 'FAQ Database', icon: HelpCircle, count: faqList.length },
                    {
                      id: 'messages',
                      label: 'Inquiries Inbox',
                      icon: Mail,
                      count: messages.filter((m) => m.status === 'unread').length
                    },
                    { id: 'backup', label: 'Backup & Reset', icon: Database, badge: null }
                  ].map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as AdminTab)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-mono transition-all ${
                          isActive
                            ? 'bg-amber-500/15 text-amber-400 font-bold border border-amber-500/30'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                          <span className="truncate">{tab.label}</span>
                        </div>
                        {tab.badge && (
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-500/20 text-amber-300">
                            {tab.badge}
                          </span>
                        )}
                        {tab.count !== undefined && tab.count > 0 && (
                          <span
                            className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                              tab.id === 'messages'
                                ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {tab.count}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Status Box */}
                <div className="mt-auto p-4 border-t border-slate-800/80 bg-slate-950/40 text-xs font-mono space-y-2">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Admin Mode:</span>
                    <span className="text-amber-400 font-bold">Authenticated</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>SEO Score:</span>
                    <span className="text-emerald-400 font-bold">
                      {seoAuditReport ? `${seoAuditReport.overallScore}% (${seoAuditReport.grade})` : '98%'}
                    </span>
                  </div>
                  <button
                    onClick={logoutAdmin}
                    className="w-full mt-2 py-1.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-[11px] border border-slate-800 flex items-center justify-center gap-1.5"
                  >
                    <Lock className="w-3 h-3" />
                    <span>Lock Session</span>
                  </button>
                </div>
              </div>

              {/* Main Tab Content Area */}
              <div className="flex-1 overflow-y-auto p-6 bg-[#090d16]/50">
                {/* 1. OVERVIEW */}
                {activeTab === 'overview' && (
                  <div className="space-y-6 max-w-5xl">
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                          Executive Control Center
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mt-1">
                          Welcome, {profile.name}
                        </h3>
                        <p className="text-xs text-slate-400 font-mono mt-1">
                          All modifications update backend storage immediately and reflect live on the website.
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            runSEOAudit();
                            showToast('Running comprehensive SEO audit...', 'info');
                          }}
                          className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-mono text-xs flex items-center gap-1.5 shadow-md"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Run SEO Audit</span>
                        </button>
                        <button
                          onClick={closeAdmin}
                          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs flex items-center gap-1.5 border border-slate-700"
                        >
                          <Eye className="w-3.5 h-3.5 text-slate-400" />
                          <span>Preview Live Site</span>
                        </button>
                      </div>
                    </div>

                    {/* Metric Cards Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                        <div className="text-xs font-mono text-slate-400">Total Projects</div>
                        <div className="text-2xl font-bold text-white font-mono mt-1">{projects.length}</div>
                        <div className="text-[11px] font-mono text-amber-400 mt-1">
                          {projects.filter((p) => p.featured).length} Featured on Homepage
                        </div>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                        <div className="text-xs font-mono text-slate-400">Published Skills</div>
                        <div className="text-2xl font-bold text-white font-mono mt-1">{skills.length}</div>
                        <div className="text-[11px] font-mono text-amber-400 mt-1">4 Technical Categories</div>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                        <div className="text-xs font-mono text-slate-400">Unread Messages</div>
                        <div className="text-2xl font-bold text-orange-400 font-mono mt-1">
                          {messages.filter((m) => m.status === 'unread').length}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 mt-1">Total {messages.length} inquiries</div>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                        <div className="text-xs font-mono text-slate-400">SEO Health Score</div>
                        <div className="text-2xl font-bold text-emerald-400 font-mono mt-1">
                          {seoAuditReport ? `${seoAuditReport.overallScore}/100` : '98/100'}
                        </div>
                        <div className="text-[11px] font-mono text-emerald-400 mt-1">
                          Grade {seoAuditReport ? seoAuditReport.grade : 'A+'} — Zero Issues
                        </div>
                      </div>
                    </div>

                    {/* Quick Shortcuts */}
                    <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                      <h4 className="text-sm font-bold text-white font-heading">Quick Actions & Shortcuts</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                        <button
                          onClick={() => setActiveTab('seo')}
                          className="p-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-left transition-colors flex items-start gap-3"
                        >
                          <Search className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <div className="font-bold text-white">Optimize SEO & Meta</div>
                            <div className="text-[11px] text-slate-400 mt-0.5">Edit title, description, schema & XML</div>
                          </div>
                        </button>
                        <button
                          onClick={() => setActiveTab('projects')}
                          className="p-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-left transition-colors flex items-start gap-3"
                        >
                          <FolderGit2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <div className="font-bold text-white">Add New Project</div>
                            <div className="text-[11px] text-slate-400 mt-0.5">Publish case studies & metrics</div>
                          </div>
                        </button>
                        <button
                          onClick={() => setActiveTab('resume')}
                          className="p-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-left transition-colors flex items-start gap-3"
                        >
                          <FileText className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <div className="font-bold text-white">Update CV & Bio</div>
                            <div className="text-[11px] text-slate-400 mt-0.5">Modify summary & competencies</div>
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* SEO Health Breakdown */}
                    {seoAuditReport && (
                      <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-white font-heading">SEO Audit Report & Validation</h4>
                          <span className="text-xs font-mono text-slate-400">
                            Audited: {new Date(seoAuditReport.lastAuditedAt).toLocaleTimeString()}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {seoAuditReport.checks.map((chk) => (
                            <div
                              key={chk.id}
                              className={`p-3 rounded-xl border text-xs font-mono flex items-start gap-2.5 ${
                                chk.passed
                                  ? 'bg-emerald-500/5 border-emerald-500/20 text-slate-300'
                                  : 'bg-orange-500/5 border-orange-500/20 text-orange-200'
                              }`}
                            >
                              {chk.passed ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              ) : (
                                <AlertCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                              )}
                              <div className="flex-1">
                                <div className="font-bold text-white">{chk.title}</div>
                                <div className="text-[11px] text-slate-400 mt-0.5">{chk.details}</div>
                                {chk.recommendation && (
                                  <div className="text-[10px] text-amber-400 mt-1">Tip: {chk.recommendation}</div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* 2. PROFILE & BIO */}
                {activeTab === 'profile' && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      updateProfile(profileForm);
                    }}
                    className="space-y-6 max-w-4xl"
                  >
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                      <div>
                        <h3 className="text-lg font-bold text-white font-heading">Personal Profile & Bio</h3>
                        <p className="text-xs text-slate-400 font-mono">
                          Updates Name, Titles, Hero intros, About narrative, Contact phone, Email & Socials
                        </p>
                      </div>
                      <button
                        type="submit"
                        disabled={isSaving}
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-bold font-mono text-xs flex items-center gap-2 shadow-md"
                      >
                        <Save className="w-4 h-4" />
                        <span>Save Profile Changes</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">Full Name</label>
                        <input
                          type="text"
                          value={profileForm.name}
                          onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                          Badge / Status Tag
                        </label>
                        <input
                          type="text"
                          value={profileForm.badge}
                          onChange={(e) => setProfileForm({ ...profileForm, badge: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                          Primary Title / Designation
                        </label>
                        <input
                          type="text"
                          value={profileForm.title}
                          onChange={(e) => setProfileForm({ ...profileForm, title: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                          Hero Main Headline
                        </label>
                        <input
                          type="text"
                          value={profileForm.heroHeading}
                          onChange={(e) => setProfileForm({ ...profileForm, heroHeading: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                          Hero Introduction Paragraph
                        </label>
                        <textarea
                          rows={3}
                          value={profileForm.heroIntro}
                          onChange={(e) => setProfileForm({ ...profileForm, heroIntro: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                          Phone Number (Display)
                        </label>
                        <input
                          type="text"
                          value={profileForm.phoneNumber}
                          onChange={(e) => setProfileForm({ ...profileForm, phoneNumber: e.target.value, phoneNumberFormatted: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                          Phone Tel Link (e.g. tel:+8801910227780)
                        </label>
                        <input
                          type="text"
                          value={profileForm.phoneTel}
                          onChange={(e) => setProfileForm({ ...profileForm, phoneTel: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={profileForm.email}
                          onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">Location</label>
                        <input
                          type="text"
                          value={profileForm.location}
                          onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                          Availability Text
                        </label>
                        <input
                          type="text"
                          value={profileForm.availability}
                          onChange={(e) => setProfileForm({ ...profileForm, availability: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                          Profile Image URL / Photo Source
                        </label>
                        <input
                          type="text"
                          value={profileForm.profileImageUrl}
                          onChange={(e) => setProfileForm({ ...profileForm, profileImageUrl: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                        />
                      </div>
                    </div>

                    {/* About Story Paragraphs */}
                    <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-mono font-semibold text-slate-300">
                          About Me Story Paragraphs ({profileForm.aboutStory.length})
                        </label>
                        <button
                          type="button"
                          onClick={() =>
                            setProfileForm({
                              ...profileForm,
                              aboutStory: [...profileForm.aboutStory, 'New story paragraph.']
                            })
                          }
                          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-amber-400 font-mono flex items-center gap-1"
                        >
                          <Plus className="w-3 h-3" /> Add Paragraph
                        </button>
                      </div>
                      {profileForm.aboutStory.map((para, idx) => (
                        <div key={idx} className="flex gap-2">
                          <textarea
                            rows={2}
                            value={para}
                            onChange={(e) => {
                              const updated = [...profileForm.aboutStory];
                              updated[idx] = e.target.value;
                              setProfileForm({ ...profileForm, aboutStory: updated });
                            }}
                            className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const updated = profileForm.aboutStory.filter((_, i) => i !== idx);
                              setProfileForm({ ...profileForm, aboutStory: updated });
                            }}
                            className="p-2 text-slate-500 hover:text-red-400 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </form>
                )}

                {/* 3. SEO & SEARCH STUDIO */}
                {activeTab === 'seo' && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      updateSEOSettings(seoForm);
                    }}
                    className="space-y-6 max-w-4xl"
                  >
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-white font-heading">Backend SEO & Meta Engine</h3>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 font-bold">
                            Live Injection
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 font-mono">
                          Directly modifies document title, meta tags, OpenGraph, JSON-LD Schema, robots.txt & XML sitemap.
                        </p>
                      </div>
                      <button
                        type="submit"
                        disabled={isSaving}
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-bold font-mono text-xs flex items-center gap-2 shadow-md"
                      >
                        <Save className="w-4 h-4" />
                        <span>Save & Apply SEO</span>
                      </button>
                    </div>

                    {/* Live SERP Snippet Preview */}
                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                      <div className="text-[11px] font-mono uppercase text-slate-500 font-bold">
                        Google SERP Live Snippet Simulator
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#090d16] border border-slate-800/80 space-y-1">
                        <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                          <span>{seoForm.canonicalUrl || 'https://shosunth.dev'}</span>
                          <span>›</span>
                          <span className="text-slate-500">home</span>
                        </div>
                        <div className="text-base font-medium text-blue-400 hover:underline cursor-pointer font-heading">
                          {seoForm.siteTitle || 'Shosunth Chakarborty — Web Developer & SEO Expert'}
                        </div>
                        <p className="text-xs text-slate-300 line-clamp-2">
                          {seoForm.metaDescription ||
                            'High-performance Full-Stack Web Development, technical SEO architecture, and Core Web Vitals optimization.'}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <div className="flex justify-between items-center mb-1">
                          <label className="text-xs font-mono font-semibold text-slate-300">
                            Meta Site Title ({seoForm.siteTitle.length} / 60 chars)
                          </label>
                          <span
                            className={`text-[10px] font-mono font-bold ${
                              seoForm.siteTitle.length >= 30 && seoForm.siteTitle.length <= 65
                                ? 'text-emerald-400'
                                : 'text-amber-400'
                            }`}
                          >
                            {seoForm.siteTitle.length >= 30 && seoForm.siteTitle.length <= 65 ? 'Optimal' : 'Needs Check'}
                          </span>
                        </div>
                        <input
                          type="text"
                          value={seoForm.siteTitle}
                          onChange={(e) => setSeoForm({ ...seoForm, siteTitle: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <div className="flex justify-between items-center mb-1">
                          <label className="text-xs font-mono font-semibold text-slate-300">
                            Meta Description ({seoForm.metaDescription.length} / 160 chars)
                          </label>
                          <span
                            className={`text-[10px] font-mono font-bold ${
                              seoForm.metaDescription.length >= 120 && seoForm.metaDescription.length <= 165
                                ? 'text-emerald-400'
                                : 'text-amber-400'
                            }`}
                          >
                            {seoForm.metaDescription.length >= 120 && seoForm.metaDescription.length <= 165
                              ? 'Optimal'
                              : 'Recommended 130-160 chars'}
                          </span>
                        </div>
                        <textarea
                          rows={3}
                          value={seoForm.metaDescription}
                          onChange={(e) => setSeoForm({ ...seoForm, metaDescription: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                          Canonical HTTPS URL
                        </label>
                        <input
                          type="text"
                          value={seoForm.canonicalUrl}
                          onChange={(e) => setSeoForm({ ...seoForm, canonicalUrl: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                          Meta Author / Publisher
                        </label>
                        <input
                          type="text"
                          value={seoForm.author}
                          onChange={(e) => setSeoForm({ ...seoForm, author: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                          OpenGraph Image URL (1200x630px)
                        </label>
                        <input
                          type="text"
                          value={seoForm.ogImage}
                          onChange={(e) => setSeoForm({ ...seoForm, ogImage: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                          Twitter Creator Handle
                        </label>
                        <input
                          type="text"
                          value={seoForm.twitterHandle}
                          onChange={(e) => setSeoForm({ ...seoForm, twitterHandle: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                          Google Search Console Verification Token
                        </label>
                        <input
                          type="text"
                          value={seoForm.googleVerificationId}
                          onChange={(e) => setSeoForm({ ...seoForm, googleVerificationId: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                          Bing Webmaster Verification Code
                        </label>
                        <input
                          type="text"
                          value={seoForm.bingVerificationId}
                          onChange={(e) => setSeoForm({ ...seoForm, bingVerificationId: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                        />
                      </div>
                    </div>

                    {/* Target Keywords Tags Editor */}
                    <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                      <label className="block text-xs font-mono font-semibold text-slate-300">
                        Target Entities & Keywords ({seoForm.keywords.length})
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {seoForm.keywords.map((kw, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-amber-300 text-xs font-mono"
                          >
                            <span>{kw}</span>
                            <button
                              type="button"
                              onClick={() => {
                                const updated = seoForm.keywords.filter((_, i) => i !== idx);
                                setSeoForm({ ...seoForm, keywords: updated });
                              }}
                              className="text-slate-500 hover:text-red-400"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          id="new-keyword-input"
                          placeholder="Type new keyword and click Add..."
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              const input = e.currentTarget;
                              if (input.value.trim()) {
                                setSeoForm({
                                  ...seoForm,
                                  keywords: [...seoForm.keywords, input.value.trim()]
                                });
                                input.value = '';
                              }
                            }
                          }}
                          className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const input = document.getElementById('new-keyword-input') as HTMLInputElement;
                            if (input && input.value.trim()) {
                              setSeoForm({
                                ...seoForm,
                                keywords: [...seoForm.keywords, input.value.trim()]
                              });
                              input.value = '';
                            }
                          }}
                          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-mono text-xs font-semibold"
                        >
                          Add Keyword
                        </button>
                      </div>
                    </div>

                    {/* Robots & Sitemaps Directives */}
                    <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                      <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                        Crawling & Indexation Directives
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={seoForm.robotsIndex}
                            onChange={(e) => setSeoForm({ ...seoForm, robotsIndex: e.target.checked })}
                            className="w-4 h-4 accent-amber-500 rounded"
                          />
                          <div className="text-xs font-mono">
                            <div className="font-bold text-white">Robots Index</div>
                            <div className="text-[10px] text-slate-400">Allow search crawlers</div>
                          </div>
                        </label>

                        <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={seoForm.robotsFollow}
                            onChange={(e) => setSeoForm({ ...seoForm, robotsFollow: e.target.checked })}
                            className="w-4 h-4 accent-amber-500 rounded"
                          />
                          <div className="text-xs font-mono">
                            <div className="font-bold text-white">Robots Follow</div>
                            <div className="text-[10px] text-slate-400">Follow on-page links</div>
                          </div>
                        </label>

                        <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={seoForm.sitemapEnabled}
                            onChange={(e) => setSeoForm({ ...seoForm, sitemapEnabled: e.target.checked })}
                            className="w-4 h-4 accent-amber-500 rounded"
                          />
                          <div className="text-xs font-mono">
                            <div className="font-bold text-white">XML Sitemap</div>
                            <div className="text-[10px] text-slate-400">Auto-generated endpoint</div>
                          </div>
                        </label>
                      </div>

                      <div className="flex flex-wrap gap-3 pt-1 text-xs font-mono">
                        <a
                          href="/api/sitemap.xml"
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 flex items-center gap-1.5 border border-slate-700"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>View Live /api/sitemap.xml</span>
                        </a>
                        <a
                          href="/api/robots.txt"
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 flex items-center gap-1.5 border border-slate-700"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>View Live /api/robots.txt</span>
                        </a>
                      </div>
                    </div>

                    {/* JSON-LD Schema Editor */}
                    <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-mono font-semibold text-slate-300">
                          Structured Data JSON-LD Graph (Schema.org)
                        </label>
                        <button
                          type="button"
                          onClick={() => {
                            try {
                              const parsed = JSON.parse(seoForm.structuredDataJson);
                              setSeoForm({ ...seoForm, structuredDataJson: JSON.stringify(parsed, null, 2) });
                              showToast('JSON-LD formatted successfully!', 'success');
                            } catch {
                              showToast('Invalid JSON syntax', 'error');
                            }
                          }}
                          className="text-xs font-mono text-amber-400 hover:underline"
                        >
                          Format JSON
                        </button>
                      </div>
                      <textarea
                        rows={8}
                        value={seoForm.structuredDataJson}
                        onChange={(e) => setSeoForm({ ...seoForm, structuredDataJson: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-amber-300 focus:border-amber-500 outline-none font-mono"
                      />
                    </div>
                  </form>
                )}

                {/* 4. PROJECTS MANAGER */}
                {activeTab === 'projects' && (
                  <div className="space-y-6 max-w-5xl">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                      <div>
                        <h3 className="text-lg font-bold text-white font-heading">Projects & Case Studies Manager</h3>
                        <p className="text-xs text-slate-400 font-mono">
                          Add, edit, reorder or remove case studies with live metrics, SEO tags & tech stacks.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          addProject({
                            number: (projects.length + 1).toString().padStart(2, '0'),
                            title: 'New High-Impact Web & SEO Project',
                            tagline: 'Achieved Significant Growth and Sub-Second Core Web Vitals',
                            description: 'Description of the architectural engineering and SEO optimization performed.',
                            longDescription:
                              'Comprehensive case study detailing challenge, methodology, execution, and outcomes.',
                            image:
                              'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
                            category: 'Full-Stack',
                            techTags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
                            seoTags: ['Technical SEO', 'Core Web Vitals', 'Schema.org'],
                            metrics: [
                              { label: 'Traffic Increase', value: '+250%' },
                              { label: 'PageSpeed', value: '99/100' }
                            ],
                            featured: true
                          });
                        }}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-bold font-mono text-xs flex items-center gap-1.5 shadow-md"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Create New Project</span>
                      </button>
                    </div>

                    <div className="space-y-4">
                      {projects.map((proj) => (
                        <div
                          key={proj.id}
                          className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 font-mono font-bold text-xs">
                                #{proj.number}
                              </span>
                              <span className="text-xs font-mono font-semibold text-amber-400">{proj.category}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <label className="flex items-center gap-1.5 text-xs font-mono text-slate-300 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={proj.featured}
                                  onChange={(e) => updateProject(proj.id, { featured: e.target.checked })}
                                  className="accent-amber-500"
                                />
                                <span>Featured</span>
                              </label>
                              <button
                                onClick={() => deleteProject(proj.id)}
                                className="p-1.5 text-slate-500 hover:text-red-400 transition-colors"
                                title="Delete Project"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="md:col-span-2">
                              <label className="block text-[11px] font-mono text-slate-400 mb-1">Project Title</label>
                              <input
                                type="text"
                                value={proj.title}
                                onChange={(e) => updateProject(proj.id, { title: e.target.value })}
                                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                              />
                            </div>
                            <div className="md:col-span-2">
                              <label className="block text-[11px] font-mono text-slate-400 mb-1">Tagline / Key Result</label>
                              <input
                                type="text"
                                value={proj.tagline}
                                onChange={(e) => updateProject(proj.id, { tagline: e.target.value })}
                                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-orange-300 focus:border-amber-500 outline-none font-mono"
                              />
                            </div>
                            <div className="md:col-span-2">
                              <label className="block text-[11px] font-mono text-slate-400 mb-1">Summary Description</label>
                              <textarea
                                rows={2}
                                value={proj.description}
                                onChange={(e) => updateProject(proj.id, { description: e.target.value })}
                                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:border-amber-500 outline-none font-mono"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-mono text-slate-400 mb-1">Category</label>
                              <select
                                value={proj.category}
                                onChange={(e) => updateProject(proj.id, { category: e.target.value as any })}
                                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                              >
                                <option value="Full-Stack">Full-Stack</option>
                                <option value="SEO & Growth">SEO & Growth</option>
                                <option value="E-Commerce">E-Commerce</option>
                                <option value="Web Application">Web Application</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-[11px] font-mono text-slate-400 mb-1">Cover Image URL</label>
                              <input
                                type="text"
                                value={proj.image}
                                onChange={(e) => updateProject(proj.id, { image: e.target.value })}
                                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-mono text-slate-400 mb-1">
                                Tech Stack Tags (comma separated)
                              </label>
                              <input
                                type="text"
                                value={proj.techTags.join(', ')}
                                onChange={(e) =>
                                  updateProject(proj.id, {
                                    techTags: e.target.value
                                      .split(',')
                                      .map((t) => t.trim())
                                      .filter(Boolean)
                                  })
                                }
                                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-mono text-slate-400 mb-1">
                                SEO Tags (comma separated)
                              </label>
                              <input
                                type="text"
                                value={proj.seoTags.join(', ')}
                                onChange={(e) =>
                                  updateProject(proj.id, {
                                    seoTags: e.target.value
                                      .split(',')
                                      .map((t) => t.trim())
                                      .filter(Boolean)
                                  })
                                }
                                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. SKILLS & STATS */}
                {activeTab === 'skills' && (
                  <div className="space-y-6 max-w-5xl">
                    {/* Key Statistics Form */}
                    <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-white font-heading">Key Statistics Counters</h4>
                        <button
                          type="button"
                          onClick={() => updateStatistics(statsForm)}
                          className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs font-mono"
                        >
                          Save Stats
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                        {statsForm.map((stat, idx) => (
                          <div key={stat.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                            <label className="block text-[10px] font-mono text-slate-400">{stat.label}</label>
                            <div className="flex gap-2">
                              <input
                                type="number"
                                value={stat.value}
                                onChange={(e) => {
                                  const updated = [...statsForm];
                                  updated[idx].value = Number(e.target.value);
                                  setStatsForm(updated);
                                }}
                                className="w-20 px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-sm font-bold text-amber-400 font-mono"
                              />
                              <input
                                type="text"
                                value={stat.suffix}
                                onChange={(e) => {
                                  const updated = [...statsForm];
                                  updated[idx].suffix = e.target.value;
                                  setStatsForm(updated);
                                }}
                                className="w-12 px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-sm font-mono text-white text-center"
                              />
                            </div>
                            <input
                              type="text"
                              value={stat.description}
                              onChange={(e) => {
                                const updated = [...statsForm];
                                updated[idx].description = e.target.value;
                                setStatsForm(updated);
                              }}
                              className="w-full px-2 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="flex items-center justify-between pt-2">
                      <h4 className="text-sm font-bold text-white font-heading">Skills & Competencies ({skills.length})</h4>
                      <button
                        onClick={() =>
                          addSkill({
                            name: 'New Skill',
                            category: 'SEO',
                            level: 90,
                            icon: 'Search',
                            experienceYears: '4+ Years',
                            description: 'Description of technical proficiency and business impact.',
                            highlight: true
                          })
                        }
                        className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-mono text-xs flex items-center gap-1"
                      >
                        <Plus className="w-3.5 h-3.5" /> Add Skill
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {skills.map((s) => (
                        <div key={s.id} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                          <div className="flex items-center justify-between">
                            <input
                              type="text"
                              value={s.name}
                              onChange={(e) => updateSkill(s.id, { name: e.target.value })}
                              className="font-bold text-sm text-white bg-transparent border-b border-slate-700 pb-0.5 focus:border-amber-400 outline-none font-heading"
                            />
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono font-bold text-amber-400">{s.level}%</span>
                              <button
                                onClick={() => deleteSkill(s.id)}
                                className="text-slate-500 hover:text-red-400"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="block text-[10px] font-mono text-slate-400">Category</label>
                              <select
                                value={s.category}
                                onChange={(e) => updateSkill(s.id, { category: e.target.value as SkillCategory })}
                                className="w-full px-2 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200"
                              >
                                <option value="SEO">SEO</option>
                                <option value="Frontend">Frontend</option>
                                <option value="Backend & CMS">Backend & CMS</option>
                                <option value="Strategy & Tools">Strategy & Tools</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-[10px] font-mono text-slate-400">Experience</label>
                              <input
                                type="text"
                                value={s.experienceYears}
                                onChange={(e) => updateSkill(s.id, { experienceYears: e.target.value })}
                                className="w-full px-2 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
                              <span>Proficiency Level Slider</span>
                              <span>{s.level}%</span>
                            </div>
                            <input
                              type="range"
                              min="10"
                              max="100"
                              value={s.level}
                              onChange={(e) => updateSkill(s.id, { level: Number(e.target.value) })}
                              className="w-full accent-amber-500"
                            />
                          </div>
                          <textarea
                            rows={2}
                            value={s.description}
                            onChange={(e) => updateSkill(s.id, { description: e.target.value })}
                            className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 6. RESUME & CV STUDIO */}
                {activeTab === 'resume' && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      updateResumeData(resumeForm);
                    }}
                    className="space-y-6 max-w-4xl"
                  >
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                      <div>
                        <h3 className="text-lg font-bold text-white font-heading">CV & Resume Builder</h3>
                        <p className="text-xs text-slate-400 font-mono">
                          Updates executive summary, core competencies list & education records
                        </p>
                      </div>
                      <button
                        type="submit"
                        disabled={isSaving}
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-bold font-mono text-xs flex items-center gap-2 shadow-md"
                      >
                        <Save className="w-4 h-4" />
                        <span>Save Resume Data</span>
                      </button>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                          Executive Professional Summary
                        </label>
                        <textarea
                          rows={4}
                          value={resumeForm.executiveSummary}
                          onChange={(e) => setResumeForm({ ...resumeForm, executiveSummary: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-500 outline-none font-mono"
                        />
                      </div>

                      {/* Core Competencies */}
                      <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-mono font-semibold text-slate-300">
                            Core Strategic Competencies ({resumeForm.coreCompetencies.length})
                          </label>
                          <button
                            type="button"
                            onClick={() =>
                              setResumeForm({
                                ...resumeForm,
                                coreCompetencies: [...resumeForm.coreCompetencies, 'New Strategic Competency']
                              })
                            }
                            className="px-2.5 py-1 rounded-lg bg-slate-800 text-amber-400 text-xs font-mono flex items-center gap-1"
                          >
                            <Plus className="w-3 h-3" /> Add Competency
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {resumeForm.coreCompetencies.map((comp, idx) => (
                            <div key={idx} className="flex gap-1.5 items-center">
                              <input
                                type="text"
                                value={comp}
                                onChange={(e) => {
                                  const updated = [...resumeForm.coreCompetencies];
                                  updated[idx] = e.target.value;
                                  setResumeForm({ ...resumeForm, coreCompetencies: updated });
                                }}
                                className="flex-1 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white font-mono"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  const updated = resumeForm.coreCompetencies.filter((_, i) => i !== idx);
                                  setResumeForm({ ...resumeForm, coreCompetencies: updated });
                                }}
                                className="p-1 text-slate-500 hover:text-red-400"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Education */}
                      <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-mono font-semibold text-slate-300">
                            Academic Background & Degrees ({resumeForm.education.length})
                          </label>
                          <button
                            type="button"
                            onClick={() =>
                              setResumeForm({
                                ...resumeForm,
                                education: [
                                  ...resumeForm.education,
                                  {
                                    id: `edu-${Date.now()}`,
                                    degree: 'B.Sc. Degree Title',
                                    institution: 'University Name',
                                    period: '2020 — 2024',
                                    grade: 'First Class Honors',
                                    details: 'Specialization in Computer Science and Software Systems.'
                                  }
                                ]
                              })
                            }
                            className="px-2.5 py-1 rounded-lg bg-slate-800 text-amber-400 text-xs font-mono flex items-center gap-1"
                          >
                            <Plus className="w-3 h-3" /> Add Degree
                          </button>
                        </div>
                        {resumeForm.education.map((edu, idx) => (
                          <div key={edu.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                            <div className="flex justify-between items-center">
                              <input
                                type="text"
                                value={edu.degree}
                                onChange={(e) => {
                                  const updated = [...resumeForm.education];
                                  updated[idx].degree = e.target.value;
                                  setResumeForm({ ...resumeForm, education: updated });
                                }}
                                className="font-bold text-xs text-white bg-transparent border-b border-slate-700 pb-0.5 focus:border-amber-400 outline-none font-mono"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  const updated = resumeForm.education.filter((_, i) => i !== idx);
                                  setResumeForm({ ...resumeForm, education: updated });
                                }}
                                className="text-slate-500 hover:text-red-400"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                              <input
                                type="text"
                                placeholder="Institution"
                                value={edu.institution}
                                onChange={(e) => {
                                  const updated = [...resumeForm.education];
                                  updated[idx].institution = e.target.value;
                                  setResumeForm({ ...resumeForm, education: updated });
                                }}
                                className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                              />
                              <input
                                type="text"
                                placeholder="Period"
                                value={edu.period}
                                onChange={(e) => {
                                  const updated = [...resumeForm.education];
                                  updated[idx].period = e.target.value;
                                  setResumeForm({ ...resumeForm, education: updated });
                                }}
                                className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                              />
                              <input
                                type="text"
                                placeholder="Grade"
                                value={edu.grade}
                                onChange={(e) => {
                                  const updated = [...resumeForm.education];
                                  updated[idx].grade = e.target.value;
                                  setResumeForm({ ...resumeForm, education: updated });
                                }}
                                className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                              />
                            </div>
                            <textarea
                              rows={2}
                              value={edu.details}
                              onChange={(e) => {
                                const updated = [...resumeForm.education];
                                updated[idx].details = e.target.value;
                                setResumeForm({ ...resumeForm, education: updated });
                              }}
                              className="w-full px-2 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </form>
                )}

                {/* 7. EXPERIENCE TIMELINE */}
                {activeTab === 'experience' && (
                  <div className="space-y-6 max-w-5xl">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                      <div>
                        <h3 className="text-lg font-bold text-white font-heading">Work Experience Timeline</h3>
                        <p className="text-xs text-slate-400 font-mono">
                          Manage career milestones, roles, companies, key achievements & technologies.
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          addExperience({
                            jobTitle: 'Senior Full-Stack Developer & SEO Lead',
                            companyName: 'Tech Innovations Ltd',
                            location: 'Dhaka, Bangladesh',
                            date: '2024 — Present',
                            period: '2024 — Present',
                            shortDescription:
                              'Leading web architecture and technical SEO strategies for enterprise clients.',
                            responsibilities: [
                              'Architect scalable React & Next.js web applications.',
                              'Optimize Core Web Vitals and organic search indexation.'
                            ],
                            technologies: ['React', 'Next.js', 'Node.js', 'SEO'],
                            isCurrent: true
                          })
                        }
                        className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-mono text-xs flex items-center gap-1.5"
                      >
                        <Plus className="w-4 h-4" /> Add Role
                      </button>
                    </div>

                    <div className="space-y-4">
                      {experience.map((exp) => (
                        <div key={exp.id} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <input
                                type="text"
                                value={exp.jobTitle}
                                onChange={(e) => updateExperience(exp.id, { jobTitle: e.target.value })}
                                className="font-bold text-sm text-white bg-transparent border-b border-slate-700 pb-0.5 focus:border-amber-400 outline-none font-heading"
                              />
                              <div className="flex gap-2 mt-1">
                                <input
                                  type="text"
                                  value={exp.companyName}
                                  onChange={(e) => updateExperience(exp.id, { companyName: e.target.value })}
                                  className="text-xs text-orange-300 font-mono bg-transparent border-b border-slate-700 focus:border-amber-400 outline-none"
                                />
                                <span className="text-slate-600">•</span>
                                <input
                                  type="text"
                                  value={exp.location}
                                  onChange={(e) => updateExperience(exp.id, { location: e.target.value })}
                                  className="text-xs text-slate-400 font-mono bg-transparent border-b border-slate-700 focus:border-amber-400 outline-none"
                                />
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <input
                                type="text"
                                value={exp.date}
                                onChange={(e) => updateExperience(exp.id, { date: e.target.value, period: e.target.value })}
                                className="text-xs font-mono font-bold text-amber-400 bg-slate-950 px-2 py-1 rounded border border-slate-800 text-right"
                              />
                              <button
                                onClick={() => deleteExperience(exp.id)}
                                className="p-1 text-slate-500 hover:text-red-400"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <textarea
                            rows={2}
                            value={exp.shortDescription}
                            onChange={(e) => updateExperience(exp.id, { shortDescription: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 font-mono"
                          />

                          <div>
                            <label className="block text-[10px] font-mono text-slate-400 mb-1">
                              Responsibilities (one per line)
                            </label>
                            <textarea
                              rows={3}
                              value={exp.responsibilities.join('\n')}
                              onChange={(e) =>
                                updateExperience(exp.id, {
                                  responsibilities: e.target.value.split('\n').filter(Boolean)
                                })
                              }
                              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 8. CERTIFICATIONS */}
                {activeTab === 'certifications' && (
                  <div className="space-y-6 max-w-5xl">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                      <div>
                        <h3 className="text-lg font-bold text-white font-heading">Certifications & Accreditations</h3>
                        <p className="text-xs text-slate-400 font-mono">
                          Add and verify professional certifications from Google, Semrush, Meta, etc.
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          addCertification({
                            certificateName: 'Google Cloud Certified Professional',
                            issuingOrganization: 'Google Cloud',
                            issueDate: '2025',
                            certificateId: `GCP-${Date.now().toString().slice(-6)}`,
                            category: 'Development',
                            image:
                              'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop',
                            credentialUrl: 'https://cloud.google.com/certification',
                            skillsCovered: ['Cloud Architecture', 'Serverless', 'Security']
                          })
                        }
                        className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-mono text-xs flex items-center gap-1.5"
                      >
                        <Plus className="w-4 h-4" /> Add Credential
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {certifications.map((cert) => (
                        <div key={cert.id} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                          <div className="flex justify-between items-start">
                            <input
                              type="text"
                              value={cert.certificateName}
                              onChange={(e) => updateCertification(cert.id, { certificateName: e.target.value })}
                              className="font-bold text-xs text-white bg-transparent border-b border-slate-700 pb-0.5 focus:border-amber-400 outline-none font-heading flex-1"
                            />
                            <button
                              onClick={() => deleteCertification(cert.id)}
                              className="text-slate-500 hover:text-red-400 ml-2"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                            <input
                              type="text"
                              placeholder="Issuer"
                              value={cert.issuingOrganization}
                              onChange={(e) => updateCertification(cert.id, { issuingOrganization: e.target.value })}
                              className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-orange-300 text-xs"
                            />
                            <input
                              type="text"
                              placeholder="Issue Date"
                              value={cert.issueDate}
                              onChange={(e) => updateCertification(cert.id, { issueDate: e.target.value })}
                              className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300 text-xs"
                            />
                            <input
                              type="text"
                              placeholder="Credential ID"
                              value={cert.certificateId}
                              onChange={(e) => updateCertification(cert.id, { certificateId: e.target.value })}
                              className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-amber-400 text-xs font-bold"
                            />
                            <input
                              type="text"
                              placeholder="Verification URL"
                              value={cert.credentialUrl || ''}
                              onChange={(e) => updateCertification(cert.id, { credentialUrl: e.target.value })}
                              className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300 text-xs"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 9. 10-STEP WORK PROCESS */}
                {activeTab === 'process' && (
                  <div className="space-y-6 max-w-5xl">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                      <div>
                        <h3 className="text-lg font-bold text-white font-heading">10-Step Execution Methodology</h3>
                        <p className="text-xs text-slate-400 font-mono">
                          Customize titles, subtitles, narratives and deliverables for all 10 project phases.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          updateWorkProcess(workProcessSteps);
                          showToast('Work process saved successfully!', 'success');
                        }}
                        className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-mono text-xs flex items-center gap-1.5"
                      >
                        <Save className="w-4 h-4" /> Save Methodology
                      </button>
                    </div>

                    <div className="space-y-3">
                      {workProcessSteps.map((step, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                          <div className="flex items-center gap-3">
                            <span className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-mono font-bold text-xs flex items-center justify-center">
                              {step.stepNumber}
                            </span>
                            <input
                              type="text"
                              value={step.title}
                              onChange={(e) => {
                                const updated = [...workProcessSteps];
                                updated[idx].title = e.target.value;
                                updateWorkProcess(updated);
                              }}
                              className="font-bold text-xs text-white bg-transparent border-b border-slate-700 pb-0.5 focus:border-amber-400 outline-none font-mono"
                            />
                            <span className="text-slate-600">—</span>
                            <input
                              type="text"
                              value={step.subtitle}
                              onChange={(e) => {
                                const updated = [...workProcessSteps];
                                updated[idx].subtitle = e.target.value;
                                updateWorkProcess(updated);
                              }}
                              className="text-xs text-orange-300 font-mono bg-transparent border-b border-slate-700 pb-0.5 focus:border-amber-400 outline-none flex-1"
                            />
                          </div>
                          <textarea
                            rows={2}
                            value={step.description}
                            onChange={(e) => {
                              const updated = [...workProcessSteps];
                              updated[idx].description = e.target.value;
                              updateWorkProcess(updated);
                            }}
                            className="w-full px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 10. BLOG & INSIGHTS */}
                {activeTab === 'blog' && (
                  <div className="space-y-6 max-w-5xl">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                      <div>
                        <h3 className="text-lg font-bold text-white font-heading">Technical Articles & Blog</h3>
                        <p className="text-xs text-slate-400 font-mono">
                          Publish, edit or delete technical SEO guides and full-stack development tutorials.
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          addBlogPost({
                            title: 'New Technical SEO & Full-Stack Architecture Guide',
                            slug: `guide-${Date.now()}`,
                            category: 'SEO & Search',
                            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
                            readTime: '6 min read',
                            shortDescription: 'Executive summary and key architectural takeaways from the guide.',
                            content: [
                              'First comprehensive paragraph discussing architecture and search algorithms.',
                              'Second paragraph breaking down implementation details and code patterns.'
                            ],
                            tags: ['Technical SEO', 'React', 'Performance'],
                            image:
                              'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
                          })
                        }
                        className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-mono text-xs flex items-center gap-1.5"
                      >
                        <Plus className="w-4 h-4" /> Publish Article
                      </button>
                    </div>

                    <div className="space-y-4">
                      {blogPosts.map((post) => (
                        <div key={post.id} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                          <div className="flex justify-between items-start">
                            <input
                              type="text"
                              value={post.title}
                              onChange={(e) => updateBlogPost(post.id, { title: e.target.value })}
                              className="font-bold text-sm text-white bg-transparent border-b border-slate-700 pb-0.5 focus:border-amber-400 outline-none font-heading flex-1"
                            />
                            <button
                              onClick={() => deleteBlogPost(post.id)}
                              className="text-slate-500 hover:text-red-400 ml-3"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <input
                              type="text"
                              value={post.category}
                              onChange={(e) => updateBlogPost(post.id, { category: e.target.value as any })}
                              className="px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-amber-400"
                            />
                            <input
                              type="text"
                              value={post.readTime}
                              onChange={(e) => updateBlogPost(post.id, { readTime: e.target.value })}
                              className="px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300"
                            />
                            <input
                              type="text"
                              value={post.date}
                              onChange={(e) => updateBlogPost(post.id, { date: e.target.value })}
                              className="px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300"
                            />
                          </div>
                          <textarea
                            rows={2}
                            value={post.shortDescription}
                            onChange={(e) => updateBlogPost(post.id, { shortDescription: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 font-mono"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 11. FAQS */}
                {activeTab === 'faq' && (
                  <div className="space-y-6 max-w-5xl">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                      <div>
                        <h3 className="text-lg font-bold text-white font-heading">Frequently Asked Questions</h3>
                        <p className="text-xs text-slate-400 font-mono">
                          Add or adjust client questions regarding web engineering, timelines, and SEO deliverables.
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          addFAQ({
                            question: 'What is your typical project turnaround time?',
                            answer:
                              'Standard modern web applications typically take 2 to 4 weeks from discovery to deployment. Technical SEO audits are delivered within 5 business days.',
                            category: 'Web Development'
                          })
                        }
                        className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-mono text-xs flex items-center gap-1.5"
                      >
                        <Plus className="w-4 h-4" /> Add FAQ
                      </button>
                    </div>

                    <div className="space-y-3">
                      {faqList.map((faq) => (
                        <div key={faq.id} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                          <div className="flex justify-between items-center">
                            <input
                              type="text"
                              value={faq.question}
                              onChange={(e) => updateFAQ(faq.id, { question: e.target.value })}
                              className="font-bold text-xs text-white bg-transparent border-b border-slate-700 pb-0.5 focus:border-amber-400 outline-none font-heading flex-1"
                            />
                            <div className="flex items-center gap-2 ml-2">
                              <select
                                value={faq.category}
                                onChange={(e) => updateFAQ(faq.id, { category: e.target.value as any })}
                                className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-amber-400"
                              >
                                <option value="Web Development">Web Development</option>
                                <option value="SEO & Search">SEO & Search</option>
                              </select>
                              <button onClick={() => deleteFAQ(faq.id)} className="text-slate-500 hover:text-red-400">
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                          <textarea
                            rows={2}
                            value={faq.answer}
                            onChange={(e) => updateFAQ(faq.id, { answer: e.target.value })}
                            className="w-full px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 12. MESSAGES INBOX */}
                {activeTab === 'messages' && (
                  <div className="space-y-6 max-w-5xl">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                      <div>
                        <h3 className="text-lg font-bold text-white font-heading">Inquiries & Contact Inbox</h3>
                        <p className="text-xs text-slate-400 font-mono">
                          Review contact submissions received through the portfolio's contact channel.
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-xl bg-slate-900 text-amber-400 font-mono font-bold text-xs border border-slate-800">
                        {messages.length} Messages Total
                      </span>
                    </div>

                    {messages.length === 0 ? (
                      <div className="p-8 text-center rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400 font-mono text-xs">
                        Inbox is empty. When visitors submit the contact form, their inquiries appear here in real time.
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {messages.map((msg) => (
                          <div
                            key={msg.id}
                            className={`p-5 rounded-2xl border transition-all ${
                              msg.status === 'unread'
                                ? 'bg-amber-500/5 border-amber-500/30'
                                : 'bg-slate-900/60 border-slate-800'
                            }`}
                          >
                            <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-sm text-white font-heading">{msg.name}</span>
                                <span className="text-xs font-mono text-amber-400">({msg.email})</span>
                                {msg.status === 'unread' && (
                                  <span className="px-2 py-0.5 rounded text-[9px] font-bold font-mono bg-orange-500/20 text-orange-400 border border-orange-500/30">
                                    NEW
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                                <span>{new Date(msg.createdAt).toLocaleDateString()}</span>
                                <select
                                  value={msg.status}
                                  onChange={(e) => updateMessageStatus(msg.id, e.target.value as any)}
                                  className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-xs text-slate-200"
                                >
                                  <option value="unread">Unread</option>
                                  <option value="read">Read</option>
                                  <option value="replied">Replied</option>
                                  <option value="archived">Archived</option>
                                </select>
                                <button
                                  onClick={() => deleteMessage(msg.id)}
                                  className="p-1 text-slate-500 hover:text-red-400"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                            <div className="text-xs font-mono font-bold text-slate-300 mb-1">{msg.subject}</div>
                            <p className="text-xs text-slate-300 bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 whitespace-pre-wrap font-sans">
                              {msg.message}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* 13. BACKUP & FACTORY RESET */}
                {activeTab === 'backup' && (
                  <div className="space-y-6 max-w-4xl">
                    <div className="pb-4 border-b border-slate-800">
                      <h3 className="text-lg font-bold text-white font-heading">Database Snapshot & Factory Reset</h3>
                      <p className="text-xs text-slate-400 font-mono">
                        Export your full dynamic database as a JSON file, restore a prior snapshot, or reset to defaults.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Export */}
                      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                        <div className="flex items-center gap-3 text-amber-400">
                          <Download className="w-6 h-6" />
                          <h4 className="text-sm font-bold text-white font-heading">Export Database Snapshot</h4>
                        </div>
                        <p className="text-xs text-slate-400 font-mono">
                          Download complete JSON snapshot containing your profile, projects, SEO settings, CV, and messages.
                        </p>
                        <button
                          onClick={async () => {
                            const db = {
                              profile,
                              statistics,
                              skills,
                              projects,
                              experience,
                              certifications,
                              workProcessSteps,
                              blogPosts,
                              faqList,
                              resumeData,
                              seoSettings,
                              messages,
                              exportedAt: new Date().toISOString()
                            };
                            const blob = new Blob([JSON.stringify(db, null, 2)], { type: 'application/json' });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = `portfolio_database_backup_${Date.now()}.json`;
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);
                            URL.revokeObjectURL(url);
                            showToast('Database backup JSON downloaded successfully!', 'success');
                          }}
                          className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-mono font-bold text-xs flex items-center justify-center gap-2 border border-slate-700"
                        >
                          <Download className="w-4 h-4" /> Download JSON Backup
                        </button>
                      </div>

                      {/* Import */}
                      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                        <div className="flex items-center gap-3 text-orange-400">
                          <Upload className="w-6 h-6" />
                          <h4 className="text-sm font-bold text-white font-heading">Restore Snapshot File</h4>
                        </div>
                        <p className="text-xs text-slate-400 font-mono">
                          Upload a previously exported JSON backup file to overwrite and restore all portfolio items.
                        </p>
                        <input
                          type="file"
                          id="backup-file-input"
                          accept=".json"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onload = (evt) => {
                                try {
                                  const parsed = JSON.parse(evt.target?.result as string);
                                  restoreDatabaseSnapshot(parsed);
                                } catch {
                                  showToast('Invalid JSON file format', 'error');
                                }
                              };
                              reader.readAsText(file);
                            }
                          }}
                        />
                        <button
                          onClick={() => document.getElementById('backup-file-input')?.click()}
                          className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-orange-300 font-mono font-bold text-xs flex items-center justify-center gap-2 border border-slate-700"
                        >
                          <Upload className="w-4 h-4" /> Select Backup JSON File
                        </button>
                      </div>
                    </div>

                    {/* Reset to Factory Defaults */}
                    <div className="p-6 rounded-2xl bg-red-950/20 border border-red-500/20 space-y-3">
                      <div className="flex items-center gap-2 text-red-400">
                        <RotateCcw className="w-5 h-5" />
                        <h4 className="text-sm font-bold text-white font-heading">Factory Reset Portfolio</h4>
                      </div>
                      <p className="text-xs text-slate-400 font-mono">
                        Reverts all content, case studies, skills, SEO tags, and CV data to default template values.
                      </p>
                      <button
                        onClick={() => {
                          if (window.confirm('Are you sure you want to reset all portfolio data to factory defaults?')) {
                            resetToFactoryDefaults();
                          }
                        }}
                        className="px-5 py-2.5 rounded-xl bg-red-600/80 hover:bg-red-600 text-white font-bold font-mono text-xs flex items-center gap-2"
                      >
                        <RotateCcw className="w-4 h-4" />
                        <span>Confirm Reset to Factory Defaults</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
