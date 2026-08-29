import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award,
  Calendar,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Eye,
  Check
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Certifications: React.FC = () => {
  const { certifications, openCertificateModal } = usePortfolio();
  const [activeFilter, setActiveFilter] = useState<'All' | 'SEO' | 'Development' | 'Marketing'>('All');

  const categories: ('All' | 'SEO' | 'Development' | 'Marketing')[] = ['All', 'SEO', 'Development', 'Marketing'];

  const allCerts = certifications || [];
  const filteredCerts = allCerts.filter((cert) => {
    if (activeFilter === 'All') return true;
    return cert.category === activeFilter;
  });

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#020617] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Certifications & Industry Accreditations
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Officially verified accreditations from Google, Semrush, Meta, and HubSpot confirming technical proficiency and strategic acumen.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`cert-filter-${cat.toLowerCase()}`}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat === 'All' ? 'All Accreditations' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                key={cert.id}
                id={`cert-card-${cert.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-gradient-to-b from-[#0f172a] to-[#090d16] border border-slate-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl overflow-hidden group flex flex-col justify-between"
              >
                {/* Certificate Image / Banner */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                  <img
                    src={cert.image}
                    alt={cert.certificateName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent" />
                  
                  {/* Category Pill on top right */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold text-amber-400 border border-amber-500/30">
                    {cert.category}
                  </div>

                  {/* Issuing Organization Badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-xs font-semibold text-white font-mono">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>{cert.issuingOrganization}</span>
                  </div>
                </div>

                {/* Certificate Information */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2 mb-2 font-heading">
                      {cert.certificateName}
                    </h3>

                    {/* Certificate ID */}
                    <div className="flex items-center justify-between text-xs py-2 border-y border-slate-800/80 font-mono text-slate-400">
                      <span>ID: <strong className="text-slate-300 font-semibold">{cert.certificateId}</strong></span>
                      <span className="text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        {cert.issueDate}
                      </span>
                    </div>

                    {/* Skills covered pills */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {(cert.skillsCovered || []).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div className="pt-2">
                    <button
                      id={`view-cert-btn-${cert.id}`}
                      onClick={() => openCertificateModal(cert)}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold border border-slate-800 hover:border-amber-500/50 transition-all flex items-center justify-center gap-2 group/btn shadow-sm font-mono"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-400 group-hover/btn:scale-110 transition-transform" />
                      <span>View Credential Details</span>
                    </button>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
