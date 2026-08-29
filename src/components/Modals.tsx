import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Upload,
  Link as LinkIcon,
  Image as ImageIcon,
  Check,
  RotateCcw,
  Download,
  Printer,
  ExternalLink,
  Github,
  Calendar,
  Clock,
  Award,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Zap,
  Layers,
  Settings
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { AdminModal } from './Admin/AdminModal';

const PRESET_AVATARS = [
  {
    name: 'Professional Studio',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Executive Tech',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Modern Developer',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Creative Engineer',
    url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop'
  }
];

export const Modals: React.FC = () => {
  const {
    profile,
    updateProfileImage,
    resetProfileImage,
    selectedProject,
    closeProjectModal,
    selectedBlog,
    closeBlogModal,
    selectedCertificate,
    closeCertificateModal,
    isCvModalOpen,
    closeCvModal,
    isImageModalOpen,
    closeImageModal,
    toasts,
    removeToast,
    downloadCv,
    resumeData,
    experience,
    openAdmin
  } = usePortfolio();

  // Image Switcher State
  const [customUrlInput, setCustomUrlInput] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (PNG, JPG, WEBP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        updateProfileImage(result);
        closeImageModal();
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrlInput.trim()) {
      updateProfileImage(customUrlInput.trim());
      setCustomUrlInput('');
      closeImageModal();
    }
  };

  const handlePrintCv = () => {
    window.print();
  };

  return (
    <>
      {/* ========================================================
          1. DYNAMIC PROFILE IMAGE CUSTOMIZER MODAL
         ======================================================== */}
      <AnimatePresence>
        {isImageModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeImageModal}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg rounded-3xl bg-[#090d16] border border-slate-800 shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading">Update Profile Photo</h3>
                    <p className="text-xs text-slate-400 font-mono">Dynamic avatar management system</p>
                  </div>
                </div>
                <button
                  onClick={closeImageModal}
                  className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Current Preview */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 mb-6">
                <img
                  src={profile.profileImageUrl}
                  alt="Current Profile"
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-500/50 shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1">
                  <div className="text-xs font-semibold font-mono text-slate-300">Active Profile Photo</div>
                  <div className="text-[11px] font-mono text-slate-400 truncate max-w-[220px]">
                    {profile.profileImageUrl.startsWith('data:') ? 'Custom Uploaded File' : profile.profileImageUrl}
                  </div>
                </div>
                <button
                  onClick={resetProfileImage}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium font-mono flex items-center gap-1 border border-slate-700"
                  title="Reset to default placeholder"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Option A: Drag & Drop / File Upload */}
              <div className="mb-6">
                <label className="block text-xs font-semibold font-mono text-slate-300 mb-2">
                  Option 1: Upload Your Own Image File
                </label>
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all cursor-pointer ${
                    dragActive
                      ? 'border-amber-500 bg-amber-500/10'
                      : 'border-slate-700 bg-slate-900/50 hover:border-slate-600'
                  }`}
                  onClick={() => document.getElementById('avatar-file-input')?.click()}
                >
                  <input
                    type="file"
                    id="avatar-file-input"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleFileUpload(e.target.files[0]);
                      }
                    }}
                  />
                  <Upload className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-white mb-1">
                    Click to browse or drag & drop photo here
                  </p>
                  <p className="text-[11px] font-mono text-slate-400">PNG, JPG, WEBP, or GIF (max 10MB)</p>
                </div>
              </div>

              {/* Option B: Enter Direct URL */}
              <div className="mb-6">
                <label className="block text-xs font-semibold font-mono text-slate-300 mb-2">
                  Option 2: Paste Image URL
                </label>
                <form onSubmit={handleApplyUrl} className="flex gap-2">
                  <div className="relative flex-1">
                    <LinkIcon className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="url"
                      value={customUrlInput}
                      onChange={(e) => setCustomUrlInput(e.target.value)}
                      placeholder="https://example.com/my-photo.jpg"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:border-amber-500 outline-none font-mono"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-mono text-xs"
                  >
                    Apply URL
                  </button>
                </form>
              </div>

              {/* Option C: Presets */}
              <div>
                <label className="block text-xs font-semibold font-mono text-slate-300 mb-2">
                  Option 3: Choose Curated Professional Avatar
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {PRESET_AVATARS.map((avatar, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        updateProfileImage(avatar.url);
                        closeImageModal();
                      }}
                      className="group relative rounded-2xl overflow-hidden aspect-square border border-slate-700 hover:border-amber-500 transition-all"
                    >
                      <img
                        src={avatar.url}
                        alt={avatar.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Check className="w-4 h-4 text-amber-400" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================
          2. CV / RESUME PREVIEW & DOWNLOAD MODAL
         ======================================================== */}
      <AnimatePresence>
        {isCvModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCvModal}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl rounded-3xl bg-[#090d16] border border-slate-800 shadow-2xl z-10 my-8 max-h-[90vh] flex flex-col overflow-hidden"
            >
              {/* Modal Header Bar */}
              <div className="p-5 sm:p-6 bg-[#020617] border-b border-slate-800 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold font-mono">
                    CV
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                      Curriculum Vitae Preview — {profile.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">{profile.title} • {profile.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={downloadCv}
                    className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-bold font-mono text-xs flex items-center gap-1.5 shadow-md"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Download CV</span>
                  </button>
                  <button
                    onClick={closeCvModal}
                    className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Formatted CV Document Body */}
              <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#090d16] text-slate-300 text-sm">
                
                {/* Header Information */}
                <div className="pb-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-extrabold text-white font-heading">{profile.name}</h1>
                    <p className="text-sm font-semibold text-amber-400 font-mono mt-1">{profile.title}</p>
                  </div>
                  <div className="text-xs space-y-1 font-mono text-slate-400">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span>{profile.phoneNumber}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-orange-400" />
                      <span>{profile.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{profile.location}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Executive Summary</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {resumeData.executiveSummary || resumeData.summary}
                  </p>
                </div>

                {/* Core Competencies */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Core Technical & Strategic Competencies</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {(resumeData?.coreCompetencies || []).map((comp, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Professional Experience */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Professional Work Experience</span>
                  </h4>
                  <div className="space-y-6">
                    {(experience || []).map((exp) => (
                      <div key={exp.id} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                        <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                          <h5 className="text-sm font-bold text-white font-heading">{exp.jobTitle}</h5>
                          <span className="text-xs font-mono text-amber-400 font-semibold">{exp.date}</span>
                        </div>
                        <div className="text-xs text-orange-300 font-semibold font-mono mb-2">{exp.companyName} • {exp.location}</div>
                        <p className="text-xs text-slate-400 mb-3">{exp.shortDescription}</p>
                        <ul className="space-y-1 text-xs text-slate-300">
                          {(exp.responsibilities || []).map((r, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2">
                              <span className="text-amber-400 mt-0.5">•</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Background */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 mb-3 flex items-center gap-2">
                    <Award className="w-3.5 h-3.5" />
                    <span>Education & Academic Credentials</span>
                  </h4>
                  {(resumeData?.education || []).map((edu, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <span className="text-sm font-bold text-white font-heading">{edu.degree}</span>
                        <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                      </div>
                      <div className="text-xs text-slate-300 font-mono mt-1">{edu.institution} ({edu.grade})</div>
                      <p className="text-xs text-slate-400 mt-1">{edu.details}</p>
                    </div>
                  ))}
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 bg-[#020617] border-t border-slate-800 flex items-center justify-between text-xs font-mono shrink-0">
                <span className="text-slate-400">File: {profile.resumeFileName}</span>
                <button
                  onClick={downloadCv}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-bold font-mono flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download File Now</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================
          3. PROJECT DETAILS MODAL
         ======================================================== */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProjectModal}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl rounded-3xl bg-[#090d16] border border-slate-800 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Cover Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent" />
                <button
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-black/70 text-white hover:bg-amber-500 hover:text-slate-950 transition-colors backdrop-blur-md"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-lg bg-amber-500 text-slate-950 font-mono font-bold text-xs">
                  Case Study {selectedProject.number}
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <span className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-heading leading-snug">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm font-semibold text-orange-300 mt-2 font-heading">
                    {selectedProject.tagline}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                    Key Performance Metrics Achieved:
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {(selectedProject.metrics || []).map((metric, idx) => (
                      <div key={idx} className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 text-center">
                        <div className="text-lg font-bold text-amber-400 font-mono">{metric.value}</div>
                        <div className="text-[11px] font-mono text-slate-400 mt-0.5">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                    Case Study Background & Technical Architecture:
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Tech & SEO Tags */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                    Technologies & SEO Methodologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(selectedProject.techTags || []).map((tech, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 text-xs font-mono font-medium">
                        {tech}
                      </span>
                    ))}
                    {(selectedProject.seoTags || []).map((seo, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 text-xs font-mono font-medium border border-amber-500/30">
                        {seo}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href="#contact"
                    onClick={() => {
                      closeProjectModal();
                    }}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold font-mono text-xs shadow-md"
                  >
                    Request Similar Project
                  </a>

                  <button
                    onClick={closeProjectModal}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold font-mono"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================
          4. BLOG ARTICLE READER MODAL
         ======================================================== */}
      <AnimatePresence>
        {selectedBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeBlogModal}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl rounded-3xl bg-[#090d16] border border-slate-800 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Cover */}
              <div className="relative aspect-[21/9] w-full overflow-hidden bg-slate-900">
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent" />
                <button
                  onClick={closeBlogModal}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-black/70 text-white hover:bg-amber-500 hover:text-slate-950 transition-colors backdrop-blur-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold font-mono">
                      {selectedBlog.category}
                    </span>
                    <span>{selectedBlog.date}</span>
                    <span>•</span>
                    <span>{selectedBlog.readTime}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-tight">
                    {selectedBlog.title}
                  </h3>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed border-y border-slate-800 py-6">
                  {(selectedBlog.content || []).map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {(selectedBlog.tags || []).map((tag, idx) => (
                    <span key={idx} className="text-xs font-mono bg-slate-800 text-slate-300 px-3 py-1 rounded-lg">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={closeBlogModal}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold font-mono"
                  >
                    Done Reading
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================
          5. CERTIFICATE DETAILS MODAL
         ======================================================== */}
      <AnimatePresence>
        {selectedCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCertificateModal}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg rounded-3xl bg-[#090d16] border border-slate-800 shadow-2xl p-6 sm:p-8 z-10"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-heading">Credential Verification</h3>
                    <p className="text-xs text-slate-400 font-mono">{selectedCertificate.issuingOrganization}</p>
                  </div>
                </div>
                <button
                  onClick={closeCertificateModal}
                  className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.certificateName}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h4 className="text-lg font-bold text-white font-heading">
                  {selectedCertificate.certificateName}
                </h4>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Credential ID:</span>
                    <span className="text-amber-400 font-bold">{selectedCertificate.certificateId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Issue Date:</span>
                    <span className="text-slate-200">{selectedCertificate.issueDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Category:</span>
                    <span className="text-slate-200">{selectedCertificate.category}</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold font-mono text-slate-300 mb-2">Verified Competencies:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {(selectedCertificate.skillsCovered || []).map((skill, idx) => (
                      <span key={idx} className="text-xs font-mono bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between gap-3">
                  {selectedCertificate.credentialUrl && (
                    <a
                      href={selectedCertificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-bold font-mono text-xs flex items-center gap-1.5"
                    >
                      <span>Verify on Issuer Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    onClick={closeCertificateModal}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold font-mono"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================
          6. DYNAMIC ADMIN & CMS STUDIO MODAL (Hidden via /shosunth-seo/admin)
         ======================================================== */}
      <AdminModal />

      {/* ========================================================
          7. FLOATING INTERACTIVE TOAST NOTIFICATIONS
         ======================================================== */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full px-4">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="pointer-events-auto p-4 rounded-2xl bg-[#090d16]/95 border border-amber-500/40 text-white shadow-2xl backdrop-blur-xl flex items-start justify-between gap-3"
            >
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs font-medium font-mono text-slate-200">{toast.message}</div>
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-slate-400 hover:text-white p-0.5"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};
