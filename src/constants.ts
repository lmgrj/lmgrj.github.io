/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Publication, Project, Experience, Education } from './types';

export const PERSONAL_INFO = {
  name: "Dr. Alex Rivera",
  role: "PhD Candidate in Artificial Intelligence",
  institution: "Stanford University",
  bio: "I am a PhD student focused on the intersection of Large Language Models and Reinforcement Learning. My research aims to create more efficient and interpretable agents for complex decision-making tasks.",
  email: "alex.rivera@stanford.edu",
  location: "Palo Alto, CA",
  github: "https://github.com/alexrivera-phd",
  twitter: "https://twitter.com/arivera_cs",
  linkedin: "https://linkedin.com/in/alex-rivera-cs",
  profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
};

export const PUBLICATIONS: Publication[] = [
  {
    id: "1",
    title: "Sparse Reinforcement Learning in High-Dimensional State Spaces",
    authors: ["Alex Rivera", "J. Smith", "K. Chen"],
    venue: "NeurIPS 2025",
    year: 2025,
    tags: ["Reinforcement Learning", "Sparsity", "Efficiency"],
    abstract: "We introduce a novel framework for learning sparse representations in deep RL agents, achieving state-of-the-art results on MuJoCo environments with 40% fewer parameters.",
  },
  {
    id: "2",
    title: "Interpretable Attention Mechanisms for Robotics Navigation",
    authors: ["Alex Rivera", "M. Doe"],
    venue: "ICML 2024",
    year: 2024,
    tags: ["Robotics", "Attention", "Explainability"],
    abstract: "This paper explores how cross-modal attention can be pruned to improve interpretability in vision-language models used for robotics.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "NeuroPath Simulator",
    description: "A high-performance simulator for testing neural-based pathfinding algorithms in chaotic environments.",
    technologies: ["PyTorch", "C++", "OpenGL"],
    github: "http://github.com/example/neuropath",
  },
  {
    id: "2",
    title: "DocuSense AI",
    description: "An open-source RAG (Retrieval Augmented Generation) pipeline optimized for legal documents.",
    technologies: ["LangChain", "OpenAI", "React"],
    github: "http://github.com/example/docusense",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Research Intern",
    organization: "Google DeepMind",
    location: "London, UK",
    period: "May 2024 - Aug 2024",
    description: [
      "Developed new exploration strategies for multi-agent reinforcement learning systems.",
      "Collaborated with the Robotics team to implement real-world transfer learning algorithms.",
    ],
  },
  {
    id: "2",
    role: "Graduate Teaching Assistant",
    organization: "Stanford University",
    location: "Palo Alto, CA",
    period: "Sep 2022 - Present",
    description: [
      "Teaching assistant for CS221: Artificial Intelligence: Principles and Techniques.",
      "Leading weekly discussion sections and managing grading for 200+ students.",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "Ph.D. in Computer Science",
    institution: "Stanford University",
    year: "2022 - 2026 (Expected)",
    details: "Dissertation: Efficient Decision Making in Large-Scale Environments.",
  },
  {
    degree: "B.S. in Computer Science & Math",
    institution: "MIT",
    year: "2018 - 2022",
    details: "Summa Cum Laude. Minor in Philosophy.",
  },
];
