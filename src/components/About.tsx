/* eslint-disable react/jsx-no-comment-textnodes */

import { PERSONAL_INFO } from '@/data/data';
import { Heart, Coffee, Compass, BookOpen, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#111111] text-[#E5E5E5] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 border-b border-white/10 pb-6">
          <p className="text-[10px] font-mono tracking-[0.3em] text-[#F27D26] uppercase mb-2">// 01. ABOUT ME</p>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white italic">
            Who am i ?
          </h2>
        </div>

        {/* Story Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Detailed Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-left text-white/70 leading-relaxed text-sm sm:text-base">
            <div>
              <h3 className="text-xs font-bold uppercase font-mono tracking-[0.2em] text-white/90 mb-3 flex items-center gap-2">
                <BookOpen size={14} className="text-[#F27D26]" />
                <span>The Spark</span>
              </h3>
              <p className="font-light">{PERSONAL_INFO.aboutMe.journey}</p>
            </div>

            <div className="pt-4">
              <h3 className="text-xs font-bold uppercase font-mono tracking-[0.2em] text-white/90 mb-3 flex items-center gap-2">
                <Heart size={14} className="text-[#F27D26]" />
                <span>The Philosophy</span>
              </h3>
              <p className="font-light">{PERSONAL_INFO.aboutMe.workEnjoyed}</p>
            </div>
            
            <div className="p-5 bg-white/5 border border-white/10 text-xs font-mono text-white/60 flex items-start gap-3">
              <Sparkles size={16} className="text-[#F27D26] shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                &quot;I believe great software isn&apos;t just about writing code-it&apos;s about solving real problems through thoughtful design, performance, and user experience.&quot;
              </span>
            </div>
          </div>

          {/* Interactive Personality Grid (Bento Boxes) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="sm:col-span-2 p-6 bg-[#151515] border border-white/10 rounded-xl flex items-start gap-4 hover:border-[#F27D26]/40 transition-all">
              <div className="p-3 bg-white/5 text-[#F27D26] rounded-lg">
                <Compass size={20} />
              </div>

              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-2">
                  Continuous Learning
                </h4>

                <p className="text-xs text-white/60 leading-relaxed">
                  I enjoy exploring new technologies, modern frontend architectures,
                  and best development practices to continuously improve my skills.
                </p>
              </div>
            </div>

            <div className="p-6 bg-[#151515] border border-white/10 rounded-xl hover:border-[#F27D26]/40 transition-all">
              <div className="p-3 bg-white/5 text-[#F27D26] rounded-lg inline-flex mb-4">
                <BookOpen size={18} />
              </div>

              <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-2">
                Learning
              </h4>

              <p className="text-xs text-white/60 leading-relaxed">
                Currently expanding my knowledge in TypeScript, Prisma,
                backend architecture, and scalable full-stack applications.
              </p>
            </div>

            <div className="p-6 bg-[#151515] border border-white/10 rounded-xl hover:border-[#F27D26]/40 transition-all">
              <div className="p-3 bg-white/5 text-[#F27D26] rounded-lg inline-flex mb-4">
                <Coffee size={18} />
              </div>

              <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-2">
                Beyond Coding
              </h4>

              <p className="text-xs text-white/60 leading-relaxed">
                I enjoy exploring new tech, building personal projects,
                watching programming content, and continuously improving
                my development workflow.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
