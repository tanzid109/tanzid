"use client";

import { PERSONAL_INFO } from '@/data/data';
import { ArrowDownRight, FileText } from 'lucide-react';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Hero() {

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#0F0F0F] text-[#E5E5E5]">
      {/* Structural background lines (Blueprint/Constructivist Grid style) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Profile Card Column (Adapting <aside> styling from theme) */}
        <div className="lg:col-span-4 flex flex-col p-6 sm:p-8 bg-[#151515] border border-white/10 rounded-xl relative">
          <div className="w-full aspect-square bg-[#1A1A1A] border border-white/10 overflow-hidden mb-6 relative group rounded-lg">
            <Image
              src={PERSONAL_INFO.avatar}
              alt={PERSONAL_INFO.name}
              referrerPolicy="no-referrer"
              height={500}
              width={500}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div className="space-y-6 text-left">
            <div>
              <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40 mb-3">Social Architecture</h3>
              <div className="flex gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-white/10 hover:border-white/40 flex items-center justify-center text-xs font-bold font-mono text-white/80 hover:text-white hover:bg-white/5 transition-all"
                >
                  <FaGithub size={25}/>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-white/10 hover:border-white/40 flex items-center justify-center text-xs font-bold font-mono text-white/80 hover:text-white hover:bg-white/5 transition-all"
                >
                  <FaLinkedinIn size={25} />
                </a>
                <a
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-white/10 hover:border-white/40 flex items-center justify-center text-xs font-bold font-mono text-white/80 hover:text-white hover:bg-white/5 transition-all"
                >
                  <FaXTwitter size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Typography & Intro Column */}
        <div className="lg:col-span-8 flex flex-col items-start text-left lg:pl-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5 text-white text-[10px] font-bold tracking-[0.25em] uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-emerald-500 animate-pulse"></span>
            ACTIVE STATUS // STABLE
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-[76px] font-black leading-[0.9] tracking-tighter uppercase text-white">
            tanzid un <span className="text-[#F27D26] italic">khalil</span>
          </h1>
          <h2 className="my-2 text-4xl md:text-4xl text-white font-medium">
            Full Stack Developer
          </h2>

          <p className="text-base sm:text-lg font-light leading-relaxed text-white/70 mb-8 max-w-2xl">
            I&apos;m a Full Stack Developer specializing in React, Next.js,
            TypeScript, Node.js, Express.js, and MongoDB. I enjoy <strong className="text-white font-semibold"> building
              modern, responsive, and scalable </strong> web applications with clean architecture and exceptional user experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <a
              href="/Tanzid_Un_Khalil_CV.pdf"
              download="Tanzid_Un_Khalil_CV.pdf"
              className="px-6 py-3.5 border border-white/20 text-xs uppercase font-bold tracking-[0.2em] bg-white text-black hover:bg-transparent hover:text-white hover:border-white/40 transition-all duration-300 flex items-center gap-2.5 cursor-pointer shadow-lg"
            >
              <FileText size={14} />
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => {
                const el = document.getElementById("projects");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3.5 border border-white/25 text-xs uppercase font-bold tracking-[0.2em] text-[#E5E5E5] hover:bg-white/5 hover:border-white transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Selected Work</span>
              <ArrowDownRight size={14} className="ml-1 text-[#F27D26]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
