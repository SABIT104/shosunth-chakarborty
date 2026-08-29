import React from 'react';
import { motion } from 'motion/react';
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  TrendingUp,
  Zap,
  Sparkles,
  Layers,
  Check
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Projects: React.FC = () => {
  const { projects, openProjectModal } = usePortfolio();

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#020617] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Crafted Projects & SEO Success
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A curated showcase of modern full-stack web applications, technical SEO overhauls, and high-impact digital architectures designed for scalable growth.
          </p>
        </div>

        {/* Projects Alternating Showcase */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Project Image Container */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div
                    onClick={() => openProjectModal(project)}
                    className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl cursor-pointer"
                  >
                    {/* Project Number Watermark */}
                    <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-amber-400 font-mono font-bold text-sm">
                      {project.number}
                    </div>

                    {/* Image */}
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 group-hover:brightness-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Gradient Overlay & Hover Explore Indicator */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] bg-black/30">
                      <span className="px-5 py-2.5 rounded-full bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-xl shadow-amber-500/40 font-mono">
                        <span>Explore Full Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Details Content */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'} space-y-5`}>
                  
                  {/* Category & Tagline */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight font-heading group-hover:text-amber-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm font-medium text-amber-300/90 leading-snug">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Metrics Row */}
                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-800">
                    {project.metrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx} className="bg-[#090d16] p-2.5 rounded-xl border border-slate-800">
                        <div className="text-xs text-slate-400 font-medium">{m.label}</div>
                        <div className="text-base font-bold text-amber-400 font-mono">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technology & SEO Tags */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techTags.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 text-xs font-medium border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.seoTags.map((seo, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 text-xs font-medium border border-amber-500/20"
                        >
                          {seo}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Explore Project CTA */}
                  <div className="pt-2">
                    <button
                      id={`explore-project-btn-${project.id}`}
                      onClick={() => openProjectModal(project)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-800 hover:border-amber-500/50 transition-all shadow-md group/btn font-mono"
                    >
                      <span>Explore Project Details</span>
                      <ArrowUpRight className="w-4 h-4 text-amber-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
