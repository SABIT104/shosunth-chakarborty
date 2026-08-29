import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Resume } from './components/Resume';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { WorkProcess } from './components/WorkProcess';
import { Blog } from './components/Blog';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';

export function App() {
  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-amber-500/20 selection:text-amber-300 relative selection:rounded">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Resume />
          <Projects />
          <Experience />
          <Certifications />
          <WorkProcess />
          <Blog />
          <FAQ />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Dynamic Modals & Customizers */}
        <Modals />
      </div>
    </PortfolioProvider>
  );
}

export default App;
