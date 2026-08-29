import React from 'react';
import { motion } from 'motion/react';
import {
  Download,
  ArrowRight,
  Sparkles,
  Search,
  Code2,
  TrendingUp,
  Camera,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Hero: React.FC = () => {
  const { profile, downloadCv, openImageModal } = usePortfolio();

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const offset = 80;
      const pos = contactEl.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden bg-[#020617]"
    >
      {/* Background ambient lighting and grid pattern */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[130px] animate-pulse-glow" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-orange-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px]" />
        
        {/* Subtle geometric grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415515_1px,transparent_1px),linear-gradient(to_bottom,#33415515_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Small Badge: SEO Expert */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold font-mono tracking-wider shadow-sm mb-6 backdrop-blur-sm"
              id="hero-badge"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{profile.badge}</span>
            </motion.div>

            {/* Main Heading: Hi, I am Shosunth Chakarborty */}
            <h1
              id="hero-main-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-3 font-heading"
            >
              {profile.heroHeading}
            </h1>

            {/* Professional Title: Web Developer & SEO Expert */}
            <div className="relative mb-6">
              <h2
                id="hero-professional-title"
                className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 bg-clip-text text-transparent font-heading"
              >
                {profile.title}
              </h2>
            </div>

            {/* Short Introduction */}
            <p
              id="hero-intro-text"
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal"
            >
              {profile.heroIntro}
            </p>

            {/* CTA Buttons: Download CV & Get In Touch */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              {/* Button 1: Download CV */}
              <button
                id="hero-download-cv-btn"
                onClick={downloadCv}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all active:translate-y-0"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>

              {/* Button 2: Get In Touch */}
              <a
                id="hero-get-in-touch-btn"
                href="#contact"
                onClick={handleScrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 font-semibold text-sm border border-slate-800 hover:border-amber-500/50 transition-all hover:-translate-y-0.5 shadow-md active:translate-y-0 group"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Key Value Points Mini Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 w-full max-w-xl text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Core Web Vitals 95+</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Modern React / Next.js</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Data-Driven SEO</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Profile Image & Interactive Visual Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Glowing Border Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-600 rounded-3xl blur-md opacity-25 group-hover:opacity-50 transition duration-1000"></div>

              {/* Main Card Container */}
              <div className="relative rounded-3xl bg-gradient-to-b from-[#0f172a] to-[#090d16] border border-slate-800 p-3 sm:p-4 shadow-2xl shadow-black/80 overflow-hidden">
                
                {/* Profile Image with replacement overlay */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-900 group">
                  <img
                    id="hero-profile-image"
                    src={profile.profileImageUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback avatar if external image fails
                      (e.currentTarget as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop';
                    }}
                  />

                  {/* Gradient shadow overlay at bottom of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />

                  {/* Change Profile Photo Button */}
                  <button
                    id="hero-change-photo-btn"
                    onClick={openImageModal}
                    className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 hover:bg-amber-600 text-white text-xs font-semibold backdrop-blur-md border border-white/10 transition-all opacity-90 hover:opacity-100 hover:scale-105 shadow-lg"
                    title="Upload or change your profile image"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Change Photo</span>
                  </button>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white tracking-wide font-heading">{profile.name}</div>
                      <div className="text-[11px] text-amber-400 font-mono font-medium">{profile.title}</div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500/20 text-[10px] font-mono font-semibold text-amber-300 border border-amber-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
                      Available
                    </span>
                  </div>
                </div>

                {/* Floating Badge 1: SEO Rank Metric (Top Left) */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -left-4 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#090d16]/95 border border-amber-500/30 shadow-xl backdrop-blur-md"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono font-semibold text-slate-400">SEO Growth</div>
                    <div className="text-xs font-bold text-amber-400 font-mono">+280% Traffic</div>
                  </div>
                </motion.div>

                {/* Floating Badge 2: Tech Stack (Bottom Right) */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-3 -right-3 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#090d16]/95 border border-orange-500/30 shadow-xl backdrop-blur-md"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono font-semibold text-slate-400">Full-Stack</div>
                    <div className="text-xs font-bold text-orange-300 font-mono">React • Next.js</div>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
