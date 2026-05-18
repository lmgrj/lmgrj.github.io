/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, FileText, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-400/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-indigo-400 text-xs font-semibold mb-6 tracking-wider uppercase">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
              {PERSONAL_INFO.institution}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Pushing the boundaries of <span className="text-gradient">Artificial Intelligence</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 transition-all group">
                Recent Research <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 transition-all">
                Download CV <Download size={18} />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl overflow-hidden glass-panel p-2">
                <img 
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 glass-panel flex flex-col gap-1 shadow-2xl">
                <span className="text-2xl font-bold text-white">4+ Years</span>
                <span className="text-xs text-indigo-400 uppercase tracking-widest font-bold">Research Experience</span>
              </div>
              <div className="absolute -top-6 -left-6 p-4 glass-panel flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-xs font-semibold">Available for Collaborations</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
