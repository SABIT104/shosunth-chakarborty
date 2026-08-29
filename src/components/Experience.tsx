import React from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Experience: React.FC = () => {
  const { experience } = usePortfolio();
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#020617] border-t border-slate-800/80">
      {/* Background glow elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Professional Experience Timeline
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A progressive history of engineering robust web products, leading technical SEO transformations, and delivering measurable commercial impact.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central Vertical Line for Desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-amber-500 via-orange-500 to-slate-800" />
          
          {/* Left Vertical Line for Mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-amber-500 via-orange-500 to-slate-800" />

          <div className="space-y-12 md:space-y-16">
            {(experience || []).map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  id={`experience-item-${exp.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Indicator */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#020617] border-2 border-amber-500 flex items-center justify-center z-10 shadow-lg shadow-amber-500/20">
                    <Briefcase className="w-4 h-4 text-amber-400" />
                  </div>

                  {/* Content Container (Split 50% on desktop) */}
                  <div className={`w-full pl-14 md:pl-0 md:w-1/2 ${
                    isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                  }`}>
                    
                    {/* Experience Card */}
                    <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#0f172a] to-[#090d16] border border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl group text-left">
                      
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono font-semibold">
                          <Calendar className="w-3.5 h-3.5 text-amber-400" />
                          <span>{exp.date}</span>
                        </span>
                        
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider shadow-sm font-mono">
                            Current Role
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors font-heading">
                        {exp.jobTitle}
                      </h3>

                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-3 font-mono">
                        <span className="text-amber-400">{exp.companyName}</span>
                        <span>•</span>
                        <span className="text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {exp.shortDescription}
                      </p>

                      {/* Key Responsibilities */}
                      <div className="space-y-2 pt-3 border-t border-slate-800/80">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1">
                          Key Responsibilities & Deliverables:
                        </div>
                        {(exp.responsibilities || []).map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-slate-800/60">
                        {(exp.technologies || []).map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-mono bg-slate-800/90 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
