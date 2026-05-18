/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Brain, Cpu, Database, Network } from 'lucide-react';

const INTERESTS = [
  {
    title: "Reinforcement Learning",
    description: "Developing scalable algorithms for high-dimensional continuous control tasks.",
    icon: Brain,
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    title: "Large Language Models",
    description: "Reasoning and planning capabilities of transformer-based agents in simulated worlds.",
    icon: Network,
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    title: "Robotics",
    description: "Sim-to-real transfer and low-latency motor control using neural networks.",
    icon: Cpu,
    color: "text-green-400",
    bg: "bg-green-400/10"
  },
  {
    title: "Data Efficiency",
    description: "Sample-efficient learning through structured priors and world models.",
    icon: Database,
    color: "text-orange-400",
    bg: "bg-orange-400/10"
  }
];

export default function ResearchInterests() {
  return (
    <section id="research" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {INTERESTS.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 glass-panel group hover:border-indigo-500/30 transition-all"
            >
              <div className={`w-12 h-12 rounded-2xl ${interest.bg} ${interest.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <interest.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{interest.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
