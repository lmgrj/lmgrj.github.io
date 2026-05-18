/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BookOpen, ExternalLink, Hash, FileText } from 'lucide-react';
import { PUBLICATIONS } from '../../constants';

export default function Publications() {
  return (
    <section id="publications" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Publications</h2>
            <p className="text-slate-400 max-w-2xl">
              Selected research papers published in top-tier conferences and journals.
            </p>
          </div>
          <button className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-2 transition-colors">
            View Google Scholar <ExternalLink size={16} />
          </button>
        </div>

        <div className="grid gap-6">
          {PUBLICATIONS.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 group hover:bg-white/10 transition-colors"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                    <BookOpen size={24} />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-indigo-600/10 text-indigo-400 text-xs font-bold rounded-lg uppercase tracking-wider">
                      {pub.venue}
                    </span>
                    <span className="text-slate-500 text-sm">{pub.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                    {pub.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-2 text-sm text-slate-400 mb-4">
                    {pub.authors.map((author, i) => (
                      <span key={author} className={author.includes("Alex") ? "text-white font-medium" : ""}>
                        {author}{i < pub.authors.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2 md:line-clamp-none italic">
                    "{pub.abstract}"
                  </p>
                  <div className="flex items-center gap-4">
                    {pub.tags.map(tag => (
                      <span key={tag} className="flex items-center gap-1 text-xs text-slate-500 font-mono">
                        <Hash size={12} /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-start">
                  <button className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                    <FileText size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
