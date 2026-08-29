import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HelpCircle,
  ChevronDown,
  Code2,
  Search,
  Sparkles,
  MessageCircleQuestion
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const FAQ: React.FC = () => {
  const { faqs } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState<'All' | 'Web Development' | 'SEO & Search'>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-web-1');

  const faqItems = faqs || [];
  const filteredFaqs = faqItems.filter((faq) => {
    if (activeCategory === 'All') return true;
    return faq.category === activeCategory;
  });

  const toggleAccordion = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#020617] border-t border-slate-800/80">
      {/* Subtle Background */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Everything you need to know about engineering capabilities, project timelines, deliverables, and search engine optimization methodologies.
          </p>

          {/* Category Toggle Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all duration-200 ${
                activeCategory === 'All'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/20'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Questions ({faqItems.length})
            </button>
            <button
              onClick={() => setActiveCategory('Web Development')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all duration-200 flex items-center gap-1.5 ${
                activeCategory === 'Web Development'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/20'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Web Development FAQs</span>
            </button>
            <button
              onClick={() => setActiveCategory('SEO & Search')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all duration-200 flex items-center gap-1.5 ${
                activeCategory === 'SEO & Search'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/20'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>SEO & Search FAQs</span>
            </button>
          </div>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.2 }}
                  className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isOpen
                      ? 'bg-gradient-to-b from-[#0f172a] to-[#090d16] border-amber-500/40 shadow-xl shadow-amber-500/5'
                      : 'bg-slate-900/60 hover:bg-slate-900/90 border-slate-800'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isOpen
                            ? 'bg-amber-500/20 text-amber-400'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        <MessageCircleQuestion className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-semibold text-amber-400/80 uppercase block mb-1">
                          {faq.category}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white font-heading leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'bg-amber-500 text-slate-950 rotate-180 shadow-md shadow-amber-500/30'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-800/80 pl-14 sm:pl-16">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-[#090d16] border border-slate-800 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white font-heading">Have a specific question not listed here?</h4>
            <p className="text-xs text-slate-400">Feel free to reach out directly via call, email, or message.</p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold font-mono text-xs shadow-md shadow-amber-500/20 hover:shadow-amber-500/35 transition-all whitespace-nowrap"
          >
            Ask a Question
          </a>
        </div>

      </div>
    </section>
  );
};
