/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../../constants';

export default function Contact() {
  return (
    <footer className="py-24 border-t border-white/5 relative overflow-hidden">
       {/* Background elements */}
       <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Let's Connect</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-12 text-lg">
          I'm always open to discussing new research opportunities, collaborations, or speaking at technical conferences.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-3 px-8 py-4 glass-panel hover:bg-white/10 transition-all text-lg font-medium"
          >
            <Mail className="text-indigo-400" /> {PERSONAL_INFO.email}
          </a>
        </div>

        <div className="flex justify-center gap-8 mb-16">
          <a href={PERSONAL_INFO.github} className="p-4 rounded-2xl glass-panel hover:bg-white/10 hover:-translate-y-1 transition-all text-slate-400 hover:text-white">
            <Github size={24} />
          </a>
          <a href={PERSONAL_INFO.linkedin} className="p-4 rounded-2xl glass-panel hover:bg-white/10 hover:-translate-y-1 transition-all text-slate-400 hover:text-white">
            <Linkedin size={24} />
          </a>
          <a href={PERSONAL_INFO.twitter} className="p-4 rounded-2xl glass-panel hover:bg-white/10 hover:-translate-y-1 transition-all text-slate-400 hover:text-white">
            <Twitter size={24} />
          </a>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React & Tailwind CSS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
