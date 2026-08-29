import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  Search,
  GitBranch,
  Layout,
  Code2,
  Zap,
  TrendingUp,
  Target,
  Rocket,
  BarChart3,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Search,
  GitBranch,
  Layout,
  Code2,
  Zap,
  TrendingUp,
  Target,
  Rocket,
  BarChart3
};

export const WorkProcess: React.FC = () => {
  const { workProcess } = usePortfolio();
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const steps = workProcess && workProcess.length > 0 ? workProcess : [];
  const activeStep = steps[activeStepIndex] || steps[0] || {
    stepNumber: '01',
    title: 'Discovery & Strategic Audit',
    subtitle: 'Comprehensive Research',
    description: 'Analyzing performance metrics and establishing technical roadmap.',
    deliverables: ['Technical SEO Audit', 'Competitor Benchmark'],
    iconName: 'Search'
  };
  const ActiveIcon = iconMap[activeStep.iconName] || Rocket;

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#020617] border-t border-slate-800/80">
      {/* Background ambience */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Methodology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
            10-Step Strategic Work Process
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            An end-to-end framework engineered to take brands from initial conceptualization to search engine dominance, high conversion velocity, and sustainable scale.
          </p>
        </div>

        {/* 10-Step Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Steps List (Scrollable / Grid) */}
          <div className="lg:col-span-6 space-y-2.5 max-h-[620px] overflow-y-auto pr-2 custom-scrollbar">
            {steps.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              const StepIcon = iconMap[step.iconName] || Sparkles;

              return (
                <motion.div
                  key={step.stepNumber}
                  id={`process-step-item-${step.stepNumber}`}
                  onClick={() => setActiveStepIndex(idx)}
                  whileHover={{ x: 4 }}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center justify-between ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#1e293b] to-[#0f172a] border-amber-500/60 shadow-lg shadow-amber-500/10'
                      : 'bg-slate-900/40 hover:bg-slate-900/80 border-slate-800/80 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Step Number Tag */}
                    <div
                      className={`w-9 h-9 rounded-xl font-mono font-bold text-xs flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {step.stepNumber}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-bold font-heading uppercase tracking-wider ${
                            isSelected ? 'text-amber-400' : 'text-slate-300'
                          }`}
                        >
                          {step.title}
                        </span>
                      </div>
                      <div className="text-xs text-slate-300 font-medium line-clamp-1">
                        {step.subtitle}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-amber-400 translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Detailed Step Focus Card */}
          <div className="lg:col-span-6 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.stepNumber}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#0f172a] to-[#090d16] border border-amber-500/30 shadow-2xl relative overflow-hidden"
              >
                {/* Background watermark step number */}
                <span className="absolute -bottom-6 -right-4 font-mono font-black text-8xl text-slate-800/20 select-none pointer-events-none">
                  {activeStep.stepNumber}
                </span>

                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/15">
                      <ActiveIcon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-amber-400 tracking-widest uppercase">
                        Phase {activeStep.stepNumber} of 10
                      </div>
                      <h3 className="text-2xl font-extrabold text-white font-heading">
                        {activeStep.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <h4 className="text-base font-semibold text-amber-300 mb-4 font-heading">
                  {activeStep.subtitle}
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {activeStep.description}
                </p>

                {/* Key Deliverables Section */}
                <div className="space-y-3 pt-5 border-t border-slate-800">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Key Phase Deliverables:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {(activeStep.deliverables || []).map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-200 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step navigation controls */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800 text-xs">
                  <button
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-800 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors font-semibold font-mono"
                  >
                    Previous Step
                  </button>

                  <span className="font-mono text-slate-400 font-medium">
                    {activeStep.stepNumber} / 10
                  </span>

                  <button
                    disabled={activeStepIndex === steps.length - 1}
                    onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
                    className="px-3.5 py-1.5 rounded-xl bg-amber-500 text-slate-950 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-amber-400 transition-colors font-bold font-mono flex items-center gap-1"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
