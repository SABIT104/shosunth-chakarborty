import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Phone,
  ArrowUpRight,
  Download,
  Camera,
  FileText
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Process', href: '#process' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' }
];

export const Navbar: React.FC = () => {
  const { profile, openImageModal, openCvModal } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#020617]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group shrink-0"
            id="nav-brand-link"
          >
            <div className="relative shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-orange-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-amber-500/20">
                <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center font-bold text-amber-400 text-base font-mono">
                  SC
                </div>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#020617] rounded-full"></span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-amber-400 transition-colors font-heading whitespace-nowrap">
                {profile.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-wider text-slate-400 uppercase whitespace-nowrap">
                {profile.title}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 px-2 py-1 rounded-full border border-slate-800/90 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-slate-950 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full -z-10 shadow-sm shadow-amber-500/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs (Right side) */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            {/* Phone Quick Call Button */}
            <a
              id="nav-quick-call-btn"
              href={profile.phoneTel}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-all hover:border-amber-500/40 hover:text-amber-400 whitespace-nowrap shadow-sm"
              title="Direct Telephone Contact"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="font-mono">{profile.phoneNumberFormatted}</span>
            </a>

            {/* Quick CV Button */}
            <button
              id="nav-cv-btn"
              onClick={openCvModal}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 transition-all hover:border-amber-500/60 whitespace-nowrap"
              title="View & Download Resume"
            >
              <Download className="w-3.5 h-3.5 shrink-0" />
              <span className="font-mono font-bold">CV</span>
            </button>

            {/* Get in Touch CTA */}
            <a
              id="nav-contact-cta"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs font-mono shadow-md shadow-amber-500/20 hover:shadow-amber-500/35 transition-all whitespace-nowrap"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-image-customizer-btn"
              onClick={openImageModal}
              className="p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-amber-400 border border-slate-800"
              title="Change Profile Photo"
            >
              <Camera className="w-4 h-4" />
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 text-slate-200 hover:text-white border border-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden bg-[#090d16]/98 backdrop-blur-2xl border-b border-slate-800 shadow-2xl overflow-hidden mt-2"
          >
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-4">
              <div className="grid grid-cols-2 gap-2">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      id={`mobile-nav-${link.name.toLowerCase()}`}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                        isActive
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold'
                          : 'bg-slate-900/60 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800/80'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>}
                    </a>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-slate-800/80 space-y-2.5">
                <a
                  id="mobile-phone-call-btn"
                  href={profile.phoneTel}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 text-amber-300 border border-amber-500/30 font-semibold font-mono text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call: {profile.phoneNumberFormatted}</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openCvModal();
                    }}
                    className="py-2.5 rounded-xl bg-amber-500/10 text-amber-300 border border-amber-500/30 font-semibold text-xs flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-400" />
                    <span>View CV</span>
                  </button>
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5"
                  >
                    <span>Contact Me</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
