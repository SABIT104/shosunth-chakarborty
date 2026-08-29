import React from 'react';
import {
  ArrowUp,
  Heart,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Settings
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const FOOTER_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' }
];

const socialIcons: Record<string, React.ElementType> = {
  Linkedin,
  Github,
  Facebook,
  Instagram
};

export const Footer: React.FC = () => {
  const { profile, openAdmin } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer id="main-footer" className="bg-[#020617] border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 p-[1.5px]">
                <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center font-bold font-mono text-amber-400 text-lg">
                  SC
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight font-heading">{profile.name}</h3>
                <p className="text-xs text-amber-400 font-mono">{profile.title}</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Crafting high-speed modern web applications and executing data-driven technical SEO to maximize online organic visibility and conversion growth.
            </p>

            <div className="flex items-center gap-2 pt-2">
              {(profile.socials || []).map((social) => {
                const IconComp = socialIcons[social.iconName] || Sparkles;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/40 text-slate-400 hover:text-amber-400 flex items-center justify-center transition-all"
                    title={social.platform}
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {FOOTER_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-slate-400 hover:text-amber-400 transition-colors inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-400 font-mono">
              <a
                href={profile.phoneTel}
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 font-mono transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{profile.phoneNumber}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{profile.location}</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-[11px] font-mono font-semibold text-amber-400 border border-amber-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
                Open for Q1/Q2 Projects
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p
            id="footer-copyright"
            onClick={openAdmin}
            className="cursor-default select-none hover:text-slate-300 transition-colors"
            title="Shosunth Chakarborty Portfolio"
          >
            © 2026 {profile.name}. All Rights Reserved.
          </p>

          <div className="flex items-center gap-3">
            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-amber-500/40 transition-all font-semibold font-mono text-xs"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
