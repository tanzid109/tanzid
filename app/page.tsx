import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

import { navItems } from "@/data";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full min-h-screen">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    </main>
  );
}
