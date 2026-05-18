/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import ResearchInterests from './components/sections/ResearchInterests';
import Publications from './components/sections/Publications';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <ResearchInterests />
        <Publications />
        <Projects />
        <Experience />
      </main>
      <Contact />
    </div>
  );
}

