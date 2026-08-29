import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Cpu,
  MapPin,
  Target,
  FileText,
  Share2,
  Globe,
  Code,
  Palette,
  Terminal,
  Layers,
  Zap,
  Server,
  Database,
  Sparkles,
  Check
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { SkillCategory } from '../types';

const iconComponents: Record<string, React.ElementType> = {
  Search,
  Cpu,
  MapPin,
  Target,
  FileText,
  Share2,
  Globe,
  Code,
  Palette,
  Terminal,
  Layers,
  Zap,
  Server,
  Database
};

export const Skills: React.FC = () => {
  const { skills } = usePortfolio();
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'SEO', 'Frontend', 'Backend & CMS'];

  const filteredSkills = skills.filter((skill) => {
    if (selectedFilter === 'All') return true;
    return skill.category === selectedFilter;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#020617] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Skills & Specialized Expertise
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive suite of modern development technologies, search engine optimization disciplines, and technical frameworks engineered for performance.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                id={`filter-skill-${category.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedFilter(category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all duration-200 ${
                  selectedFilter === category
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {category === 'All' ? 'All Skills (14)' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const IconComp = iconComponents[skill.icon] || Code;
              return (
                <motion.div
                  layout
                  key={skill.id}
                  id={`skill-card-${skill.id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="p-5 rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#090d16] border border-slate-800 hover:border-amber-500/50 transition-all duration-300 shadow-lg hover:shadow-amber-500/10 group relative flex flex-col justify-between"
                >
                  {/* Top info */}
                  <div>
                    <div className="flex items-start justify-between mb-3.5">
                      <div className="w-11 h-11 rounded-xl bg-slate-800/90 text-amber-400 border border-slate-700 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300">
                        <IconComp className="w-5 h-5" />
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-mono font-semibold text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-700/60">
                          {skill.experienceYears}
                        </span>
                        {skill.highlight && (
                          <span className="w-2 h-2 rounded-full bg-amber-400" title="Core Specialization" />
                        )}
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors mb-1 font-heading">
                      {skill.name}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
                      {skill.description}
                    </p>
                  </div>

                  {/* Level progress bar */}
                  <div className="pt-3 border-t border-slate-800/80">
                    <div className="flex items-center justify-between text-[11px] mb-1.5 font-mono">
                      <span className="text-slate-400 uppercase font-semibold text-[10px] tracking-wider">Proficiency</span>
                      <span className="text-amber-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Technical Guarantee */}
        <div className="mt-14 p-6 rounded-2xl bg-[#090d16] border border-amber-500/20 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-heading">Continuous Skill Refinement</div>
              <div className="text-xs text-slate-400">Regularly updated with modern ECMAScript standards & Google Search algorithm updates.</div>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 text-xs font-semibold font-mono border border-amber-500/30 whitespace-nowrap transition-colors"
          >
            Hire for Project
          </a>
        </div>

      </div>
    </section>
  );
};
