import React from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  Download,
  Eye,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Award,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Resume: React.FC = () => {
  const { profile, resumeData, openCvModal, downloadCv } = usePortfolio();

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-[#020617] border-t border-slate-800/80">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Professional Qualifications & Resume
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive track record of software engineering leadership, technical SEO campaign execution, and verified academic credentials.
          </p>
        </div>

        {/* Resume Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Experience Summary & Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Professional Summary Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0f172a] to-[#090d16] border border-slate-800 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">Professional Experience Summary</h3>
                  <p className="text-xs text-slate-400">Core achievements & technical leadership</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {resumeData.executiveSummary || resumeData.summary}
              </p>

              {/* Key Bullet Highlights */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                {(resumeData.highlights || resumeData.coreCompetencies || []).slice(0, 4).map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 font-medium">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-b from-[#0f172a] to-[#090d16] border border-slate-800 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-heading">Academic Education</h3>
                  <p className="text-xs text-slate-400">Foundational Software Engineering degree</p>
                </div>
              </div>

              {(resumeData.education || []).map((edu, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="text-sm font-bold text-white font-heading">{edu.degree}</h4>
                    <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-slate-400">{edu.institution} • <span className="text-amber-300 font-semibold">{edu.grade}</span></div>
                  <p className="text-xs text-slate-400 mt-2">{edu.details}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: CV Preview Card & Interactive Buttons */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0f172a] to-[#090d16] border border-slate-800 shadow-2xl flex-1 flex flex-col justify-between relative overflow-hidden">
              
              {/* Top Card Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-bold text-white font-mono">{profile.resumeFileName}</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">PDF • Updated {profile.resumeLastUpdated}</span>
              </div>

              {/* Visual Document Layout Mockup */}
              <div className="relative rounded-2xl bg-[#020617] p-5 border border-slate-800 shadow-inner mb-6 space-y-4 font-mono text-[11px] text-slate-400">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-300">
                  <div>
                    <div className="text-white font-bold text-xs">{profile.name}</div>
                    <div className="text-amber-400 text-[10px]">{profile.title}</div>
                  </div>
                  <div className="text-right text-[10px]">
                    <div>{profile.phoneNumber}</div>
                    <div>{profile.email}</div>
                  </div>
                </div>

                <div>
                  <div className="text-white font-bold text-[10px] uppercase mb-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    Core Competencies
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {(resumeData.coreCompetencies || []).slice(0, 6).map((comp, idx) => (
                      <span key={idx} className="bg-slate-800/90 text-slate-300 px-1.5 py-0.5 rounded text-[10px]">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-white font-bold text-[10px] uppercase mb-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                    Certifications Included
                  </div>
                  <p className="text-[10px] text-slate-400">Google Analytics 4 • Semrush Technical SEO • Meta Front-End Engineering</p>
                </div>
              </div>

              {/* Action Buttons: Preview CV & Download CV */}
              <div className="space-y-3">
                <button
                  id="resume-preview-btn"
                  onClick={openCvModal}
                  className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-800 hover:border-amber-500/50 transition-all flex items-center justify-center gap-2 group shadow-md font-mono"
                >
                  <Eye className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span>Preview CV Online</span>
                </button>

                <button
                  id="resume-download-btn"
                  onClick={downloadCv}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all flex items-center justify-center gap-2 font-mono"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV ({profile.resumeFileName})</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
