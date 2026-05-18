/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  link?: string;
  abstract?: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}
