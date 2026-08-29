import React from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  Clock,
  ArrowUpRight,
  BookOpen,
  Sparkles,
  Tag
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Blog: React.FC = () => {
  const { blogs, openBlogModal } = usePortfolio();

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-[#020617] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Insights</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Latest Articles & Search Insights
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Practical strategies, technical deep-dives into modern web development, Core Web Vitals optimization, and algorithmic search trends.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {(blogs || []).map((post, idx) => (
            <motion.article
              key={post.id}
              id={`blog-card-${post.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-gradient-to-b from-[#0f172a] to-[#090d16] border border-slate-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl overflow-hidden group flex flex-col justify-between"
            >
              {/* Blog Image */}
              <div
                onClick={() => openBlogModal(post)}
                className="relative aspect-[16/9] overflow-hidden bg-slate-900 cursor-pointer"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-[11px] font-mono font-bold tracking-wide backdrop-blur-md shadow-md">
                  {post.category}
                </div>
              </div>

              {/* Blog Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* Meta Bar: Date & Read Time */}
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-amber-400 font-bold">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => openBlogModal(post)}
                    className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2 mb-2 font-heading cursor-pointer leading-snug"
                  >
                    {post.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {post.shortDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {(post.tags || []).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono font-medium bg-slate-800/80 text-slate-400 px-2 py-0.5 rounded border border-slate-700/50"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Read Full Article Button */}
                <div className="pt-3 border-t border-slate-800/80">
                  <button
                    id={`read-article-btn-${post.id}`}
                    onClick={() => openBlogModal(post)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold font-mono border border-slate-800 hover:border-amber-500/40 transition-all flex items-center justify-between group/btn shadow-sm"
                  >
                    <span>Read Full Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
