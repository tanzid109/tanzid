"use client"
import React, { useState, useEffect } from 'react';
import { Menu, } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from './ui/sheet';

interface NavbarProps {
  sections: { id: string; label: string }[];
}

export default function Navbar({ sections }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Find current active section
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 64; // height of sticky navbar h-16
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Tanzid_Un_Khalil_CV.pdf";
    link.download = "Tanzid_Un_Khalil_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#0F0F0F]/90 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-[#0F0F0F]/50 backdrop-blur-xs border-b border-white/5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo with AR initials circle as requested by the theme */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 font-sans tracking-tighter text-base font-bold text-white group"
        >
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="text-black font-black text-xs">TK</span>
          </div>
          <span className="uppercase font-semibold tracking-widest text-xs text-white/90">TANZID UN <br />KHALIL</span>
        </button>

        {/* Desktop Navigation with high contrast, uppercase text and tracking as requested */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-[10px] uppercase font-bold tracking-[0.2em] pb-1 transition-all border-b-2 ${activeSection === section.id
                    ? 'text-white border-[#F27D26]'
                    : 'text-white/70 border-transparent hover:text-white'
                  }`}
              >
                {section.label}
              </button>
            ))}
          </div>
          <div className="ml-2 pl-4 border-l border-white/10">
            <button
              onClick={handleResumeDownload}
              className="px-4 py-2 border border-white/20 text-[10px] uppercase font-bold tracking-[0.15em] text-white hover:bg-white hover:text-black transition-all cursor-pointer"
            >
              Download Resume
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-white/70 hover:text-white hover:bg-white/10">
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-71.25 bg-[#0F0F0F] border-l border-white/10 p-6 text-white">
              <SheetHeader className="mb-8 text-left border-b border-white/10 pb-4">
                <SheetTitle className="flex items-center gap-3 font-sans font-bold text-white">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black font-black text-xs">AR</span>
                  </div>
                  <span className="uppercase tracking-widest text-xs">ALEX RIVERA</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      scrollToSection(section.id);
                    }}
                    className={`w-full text-left py-2 text-xs uppercase font-bold tracking-[0.15em] border-b transition-colors ${activeSection === section.id
                        ? 'text-[#F27D26] border-[#F27D26]/40'
                        : 'text-white/60 border-transparent hover:text-white'
                      }`}
                  >
                    {section.label}
                  </button>
                ))}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <button
                    onClick={handleResumeDownload}
                    className="w-full py-3 border border-white/20 text-[10px] uppercase font-bold tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all"
                  >
                    Resume Download
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
