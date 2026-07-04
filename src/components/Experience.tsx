/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { Badge } from './ui/badge';
import { EXPERIENCES } from '@/data/data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#111111] text-[#E5E5E5] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 border-b border-white/10 pb-6">
          <p className="text-[10px] font-mono tracking-[0.3em] text-[#F27D26] uppercase mb-2">// 03. HISTORY</p>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white italic">
            Professional Experience
          </h2>
        </div>

        {/* Timeline representation */}
        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-8 sm:pl-12 group text-left">
              {/* Timeline Bullet Node */}
              <div className="absolute -left-3.5 top-1 h-7 w-7 rounded-full border border-white/10 bg-[#151515] text-[#F27D26] group-hover:text-white group-hover:border-[#F27D26] group-hover:scale-115 flex items-center justify-center transition-all duration-300 shadow-lg z-10">
                <Briefcase size={12} />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 bg-[#151515] border border-white/10 hover:border-white/20 rounded-2xl transition-all duration-300 relative">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-black uppercase text-white tracking-tight group-hover:text-[#F27D26] transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-white/50 font-mono mt-1">
                      <Building2 size={13} className="text-[#F27D26]" />
                      <span className="text-white/95 font-bold">{exp.company}</span>
                      <span>•</span>
                      <MapPin size={12} className="text-white/40" />
                      <span>Dhaka, Bangladesh (Onsite)</span>
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/10 bg-white/5 text-white text-[10px] font-mono font-bold uppercase tracking-wider self-start sm:self-center">
                    <Calendar size={11} className="text-[#F27D26]" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                      <CheckCircle2 size={14} className="text-[#F27D26] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
                  {exp.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-[9px] font-mono tracking-widest px-2.5 py-0.5 bg-white/5 text-white/60 border border-white/10 rounded uppercase hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
