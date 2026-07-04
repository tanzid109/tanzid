import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { TooltipProvider } from '@/components/ui/tooltip';

export default function Home() {
  const navigationSections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-[#0F0F0F] text-[#E5E5E5] selection:bg-[#F27D26] selection:text-white antialiased font-sans">
        {/* Responsive, sticky Navigation bar */}
        <Navbar sections={navigationSections}/>

        {/* Content stream */}
        <main>
          {/* Hero segment */}
          <Hero />

          {/* Detailed About Me segment */}
          <About />

          {/* Visual skills mapping */}
          <Skills />

          {/* Career timeline */}
          <Experience />

          {/* Multi-modal Project grids */}
          <Projects />

          {/* Action Contact forms */}
          <Contact />
        </main>

        {/* Elegant footer representation */}
        <Footer />
      </div>
    </TooltipProvider>
  );
}
