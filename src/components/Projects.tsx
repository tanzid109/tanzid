/* eslint-disable react/jsx-no-comment-textnodes */
"use client"
import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, ArrowUpRight, Code } from 'lucide-react';
import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent } from './ui/dialog';
import { PROJECTS } from '@/data/data';
import { Project } from '@/data/types';
import Image from 'next/image';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#0F0F0F] text-[#E5E5E5] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 border-b border-white/10 pb-6">
          <p className="text-[10px] font-mono tracking-[0.3em] text-[#F27D26] uppercase mb-2">// 04. SELECTED WORK</p>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white italic">
            Featured Projects
          </h2>
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <Card
              key={project.id}
              className="group border border-white/10 bg-[#151515] hover:border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col h-full rounded-2xl overflow-hidden text-left relative"
            >
              {/* Card Image Cover with Zoom & grayscale hover */}
              <div className="aspect-video w-full overflow-hidden bg-[#1A1A1A] border-b border-white/10 relative">
                <Image
                  height={500}
                  width={500}
                  src={project.image}
                  alt={project.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                {/* <div className="absolute top-3 right-3 flex gap-1.5 z-10">
                  <Badge className="bg-[#F27D26] hover:bg-[#F27D26] text-white text-[9px] font-mono py-0.5 border-none tracking-widest uppercase">
                    {project.techStack[0]}
                  </Badge>
                </div> */}
              </div>

              {/* Card Body */}
              <CardHeader className="p-6 pb-2">
                <CardTitle className="text-lg font-black uppercase text-white tracking-tight flex items-center justify-between">
                  <span>{project.name}</span>
                  <ArrowUpRight size={16} className="text-white/40 group-hover:text-[#F27D26] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm text-white/60 leading-relaxed mt-2 font-light">
                  {project.tagline}
                </CardDescription>
              </CardHeader>

              {/* Extra Spacer to Align Button at Bottom */}
              <div className="grow"></div>

              {/* Card Footer / View Details */}
              <CardFooter className="p-6 pt-4 border-t border-white/5 bg-white/1">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 border border-white/20 text-[10px] uppercase font-bold tracking-[0.2em] text-white hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer"
                >
                  View Blueprint / Details
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Dynamic Project Details Dialog */}
        <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-5xl! max-h-[90vh] overflow-y-auto bg-[#0F0F0F] text-[#E5E5E5] p-0 border border-white/10 rounded-xl">
            {selectedProject && (
              <div className="text-left font-sans">
                {/* Hero / Cover Photo */}
                <div className="aspect-video w-full overflow-hidden bg-[#1A1A1A] relative border-b border-white/10">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    height={500}
                    width={500}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-30 hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-xl sm:text-3xl font-black uppercase text-white tracking-tight">
                      {selectedProject.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  {/* Technology Tags */}
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 font-mono mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-[9px] font-mono tracking-widest px-3 py-1 bg-white/5 text-white/70 border border-white/10 rounded-md uppercase"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project Summary */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F27D26] font-mono flex items-center gap-1.5">
                      <Code size={14} />
                      <span>Overview</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Links Row */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white text-black text-[10px] uppercase font-bold tracking-widest hover:bg-transparent hover:text-white border border-white hover:border-white/40 transition-all duration-300"
                    >
                      <span>Live Project</span>
                      <ExternalLink size={12} />
                    </a>
      
                  </div>

                  <hr className="border-white/10" />

                  {/* Key Features */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F27D26] font-mono flex items-center gap-1.5">
                      <CheckCircle2 size={14} />
                      <span>Key Features</span>
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedProject.features.map((feature, i) => (
                        <li
                          key={i}
                          className="text-xs sm:text-sm text-white/70 leading-relaxed font-light flex items-start gap-2"
                        >
                          <span className="text-[#F27D26]">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}