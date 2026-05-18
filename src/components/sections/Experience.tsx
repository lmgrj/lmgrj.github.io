/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar, GraduationCap } from 'lucide-react';
import { EXPERIENCE, EDUCATION } from '../../constants';

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                <Briefcase size={20} />
              </div>
              <h2 className="text-2xl font-bold">Experience</h2>
            </div>
            
            <div className="space-y-12">
              {EXPERIENCE.map((exp, index) => (
                <div key={exp.id} className="relative pl-8 border-l border-white/10">
                  <div className="absolute top-0 left-[-5px] w-[9px] h-[9px] rounded-full bg-indigo-600" />
                  <div className="mb-2">
                    <h3 className="text-lg font-bold">{exp.role}</h3>
                    <div className="text-indigo-400 font-medium">{exp.organization}</div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-4 font-medium uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {exp.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {exp.location}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400">
                <GraduationCap size={20} />
              </div>
              <h2 className="text-2xl font-bold">Education</h2>
            </div>

            <div className="space-y-12">
              {EDUCATION.map((edu, index) => (
                <div key={edu.institution} className="relative pl-8 border-l border-white/10">
                  <div className="absolute top-0 left-[-5px] w-[9px] h-[9px] rounded-full bg-purple-600" />
                  <div className="mb-2">
                    <h3 className="text-lg font-bold">{edu.degree}</h3>
                    <div className="text-purple-400 font-medium">{edu.institution}</div>
                  </div>
                  <div className="text-xs text-slate-500 mb-3 font-medium uppercase tracking-wider">
                    {edu.year}
                  </div>
                  {edu.details && (
                    <p className="text-slate-400 text-sm leading-relaxed italic">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
