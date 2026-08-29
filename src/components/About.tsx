import React from 'react';
import { motion } from 'motion/react';
import {
  Clock,
  Briefcase,
  Users,
  TrendingUp,
  Code,
  Search,
  Zap,
  Target,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const iconMap: Record<string, React.ElementType> = {
  Clock,
  Briefcase,
  Users,
  TrendingUp
};

export const About: React.FC = () => {
  const { profile, statistics, openCvModal } = usePortfolio();

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#020617] border-t border-slate-800/80">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          
          <h2
            id="about-section-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4 font-heading"
          >
            Driving Digital Growth & Building Modern Experiences
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Bridging precision full-stack engineering with data-driven search engine dominance to create fast, scalable, and high-converting web solutions.
          </p>
        </div>

        {/* Two Column Layout: Detailed Story & Core Competency Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Column: Personal Intro Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-5"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0f172a] to-[#090d16] border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none" />
              
              <h3 id="about-heading" className="text-2xl font-bold text-white mb-1 font-heading">
                {profile.aboutHeading}
              </h3>
              
              <h4 id="about-subheading" className="text-base font-semibold text-amber-400 mb-6 font-mono">
                {profile.aboutSubheading}
              </h4>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {(profile.aboutStory || []).map((paragraph, index) => (
                  <p key={index} className="text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-slate-800 text-xs">
                <div>
                  <span className="text-slate-500 uppercase tracking-wider block font-semibold font-mono mb-1">Location</span>
                  <span className="text-slate-200 font-medium">{profile.location}</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase tracking-wider block font-semibold font-mono mb-1">Direct Phone</span>
                  <a href={profile.phoneTel} className="text-amber-400 hover:underline font-mono font-bold">
                    {profile.phoneNumber}
                  </a>
                </div>
                <div>
                  <span className="text-slate-500 uppercase tracking-wider block font-semibold font-mono mb-1">Specialization</span>
                  <span className="text-slate-200 font-medium">Web Apps & Technical SEO</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase tracking-wider block font-semibold font-mono mb-1">Availability</span>
                  <span className="text-amber-400 font-medium flex items-center gap-1.5 font-mono">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    Open for Projects
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Professional Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* Pillar 1: Web Development */}
            <div className="p-6 rounded-2xl bg-[#090d16] border border-slate-800 hover:border-amber-500/40 transition-all hover:bg-slate-900/90 group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                <Code className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-heading">Modern Web Development</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Building fast, responsive web applications with React, Next.js, TypeScript, and Node.js. Clean architecture with modern UI/UX design.
              </p>
            </div>

            {/* Pillar 2: Technical SEO */}
            <div className="p-6 rounded-2xl bg-[#090d16] border border-slate-800 hover:border-orange-500/40 transition-all hover:bg-slate-900/90 group">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-heading">Technical & On-Page SEO</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Full-spectrum search optimization: crawl budget, structured JSON-LD schema, indexation mastery, and search intent keyword clusters.
              </p>
            </div>

            {/* Pillar 3: Core Web Vitals */}
            <div className="p-6 rounded-2xl bg-[#090d16] border border-slate-800 hover:border-amber-500/40 transition-all hover:bg-slate-900/90 group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-heading">Core Web Vitals & Speed</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Eliminating render-blocking resources, tuning LCP/INP/CLS metrics, and delivering sub-second experiences that rank on Google.
              </p>
            </div>

            {/* Pillar 4: CRO & Conversion */}
            <div className="p-6 rounded-2xl bg-[#090d16] border border-slate-800 hover:border-amber-500/40 transition-all hover:bg-slate-900/90 group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-heading">Conversion Optimization</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Transforming traffic into paying customers through user-journey optimization, CTA placement, GA4 tracking, and A/B insights.
              </p>
            </div>

            {/* Resume button callout */}
            <div className="sm:col-span-2 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 flex items-center justify-between">
              <span className="text-xs text-slate-300 font-medium">Interested in a complete overview of my qualifications?</span>
              <button
                onClick={openCvModal}
                className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors font-mono"
              >
                <span>View Full CV</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Animated Statistics Cards: Years of Exp, Projects, Clients, Growth Rate */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, idx) => {
            const IconComponent = iconMap[stat.iconName] || TrendingUp;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#090d16] border border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                    Verified
                  </span>
                </div>

                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-extrabold text-white tracking-tight font-heading group-hover:text-amber-300 transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-2xl font-bold text-amber-400 font-heading">
                    {stat.suffix}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-slate-200 mb-1 font-heading">
                  {stat.label}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
