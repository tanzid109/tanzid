/* eslint-disable react/jsx-no-comment-textnodes */
import * as Lucide from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { SKILLS } from '@/data/data';

export default function Skills() {
  const getIcon = (name: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const IconComp = (Lucide as any)[name];
    if (IconComp) {
      return <IconComp size={16} />;
    }
    return <Lucide.Code size={16} />;
  };

  const categories = ["All", "Frontend", "Backend", "Tools"];

  return (
    <section id="skills" className="py-24 bg-[#0F0F0F] text-[#E5E5E5] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 border-b border-white/10 pb-6">
          <p className="text-[10px] font-mono tracking-[0.3em] text-[#F27D26] uppercase mb-2">// 02. SKILLS & UTILITIES</p>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white italic">
            Tech Stack
          </h2>
        </div>

        <Tabs defaultValue="All" className="w-full flex flex-col items-start">
          {/* Tabs Navigation */}
          <TabsList className="bg-[#151515] p-1 border border-white/10 rounded-lg flex flex-wrap gap-1 mb-12 h-auto max-w-full">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white/50 data-[state=active]:bg-[#F27D26] data-[state=active]:text-white  rounded-md transition-all cursor-pointer"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content Panels */}
          {categories.map((cat) => {
            const filteredSkills = cat === "All"
              ? SKILLS
              : SKILLS.filter(s => s.category === cat);

            return (
              <TabsContent key={cat} value={cat} className="w-full focus-visible:outline-none focus-visible:ring-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                  {filteredSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-6 bg-[#151515] border border-white/10 rounded-xl hover:border-[#F27D26]/50 hover:-translate-y-1 duration-300 transition-all flex flex-col justify-between group"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 bg-white/5 border border-white/10 rounded-lg text-[#F27D26] group-hover:bg-[#F27D26] group-hover:scale-110  group-hover:text-white transition-colors duration-300">
                            {getIcon(skill.iconName)}
                          </div>
                          <span className="text-sm font-bold uppercase tracking-wider text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="px-2 py-1 rounded-full bg-[#F27D26]/10 text-[#F27D26] text-[11px] font-semibold">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full">
                        {/* Sleek Custom Track style for the Progress Bar */}
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden relative">
                          <div
                            className="h-full bg-linear-to-r from-[#F27D26] via-[#ff944d] to-[#ffb067] rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>

                        <div className="flex justify-between items-center mt-3">
                          <span className="text-[9px] font-mono uppercase tracking-widest text-white/40">
                            {skill.category}
                          </span>
                          <span className="text-[9px] font-mono text-white/0 group-hover:text-white/40 transition-all duration-300 uppercase tracking-widest">
                            Production Ready
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
