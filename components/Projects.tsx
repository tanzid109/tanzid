import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FaNode, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb, SiMongoose, SiNextdotjs } from "react-icons/si";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { RiTailwindCssFill } from "react-icons/ri";
import NewButton from "./ui/NewButton";
import { FaCircle } from "react-icons/fa6";

export function Projects() {
    const data = [
        {
            title: "DocMate",
            live: "https://doc-mate-two.vercel.app/",
            gitHub: "https://github.com/shafriki/DocMate",
            content: (
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <Image
                            src="/images/docmate.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/images/docmate_res.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                    <p> <span className="font-semibold">DocMate</span><br />
                        This is a team project.DocMate is a comprehensive medical tourism platform connecting patients from Africa to world-class healthcare services in India. The website offers detailed information on various medical departments, including Oncology, Spine Surgery, Organ Transplant, Heart Surgery, Neuro Surgery, and Orthopedic Surgery. Users can explore services, read patient testimonials, and book appointments directly through the site. The platform emphasizes advanced medical care, experienced professionals, and seamless patient experiences.</p>
                    <div className="flex gap-2">
                        <TextGenerateEffect
                            className='text-left text-sm md:text-md lg:text-lg'
                            words="Technology Used" />
                        <div className="flex flex-wrap gap-3 items-center justify-start">
                            <NewButton
                                icon={<SiNextdotjs />}
                                title='NextJS'
                                position='left'
                            />
                            <NewButton
                                icon={<FaCircle />}
                                title='Next Auth'
                                position='left'
                            />
                            <NewButton
                                icon={< SiMongoose />}
                                title='Mongoose'
                                position='left'
                            />
                            <NewButton
                                icon={<FaNode />}
                                title='Node'
                                position='left'
                            />
                            <NewButton
                                icon={<SiMongodb />}
                                title='MongoDB'
                                position='left'
                            />
                            <NewButton
                                icon={<RiTailwindCssFill />}
                                title='TailwindCSS'
                                position='left'
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Helper.AZ",
            live: "https://services-43f57.firebaseapp.com/",
            gitHub: "https://github.com/tanzid109/Helper.az",
            content: (
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <Image
                            src="/images/Helper.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/images/helper_res.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                    <p><span className="font-semibold">Service Booking Platform</span> <br />
                        A modern web application that allows users to browse and book various services with ease. Built with a responsive and user-friendly design, the platform ensures smooth navigation and an intuitive booking experience. This project showcases my skills in frontend development, dynamic routing, and state management.</p>
                    <div className="flex gap-2">
                        <TextGenerateEffect
                            className='text-left text-sm md:text-md lg:text-lg'
                            words="Technology Used" />
                        <div className="flex flex-wrap gap-3 items-center justify-start">
                            <NewButton
                                icon={<FaReact />}
                                title='React'
                                position='left'
                            />
                            <NewButton
                                icon={<IoLogoFirebase />}
                                title='Firebase'
                                position='left'
                            />
                            <NewButton
                                icon={<FaNode />}
                                title='Node'
                                position='left'
                            />
                            <NewButton
                                icon={<SiMongodb />}
                                title='MongoDB'
                                position='left'
                            />
                            <NewButton
                                icon={<RiTailwindCssFill />}
                                title='TailwindCSS'
                                position='left'
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Movie Portal",
            live: "https://movie-portal-a7883.web.app/",
            gitHub: "https://github.com/tanzid109/Movie-Portal",
            content: (
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <Image
                            src="/images/movie.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/images/movie_res.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                    <p><span className="font-semibold">Movie Portal</span><br />
                        An interactive web app for discovering movies, featuring real-time search functionality and dynamic movie details. Users can explore a wide range of films with poster previews, titles, and ratings. Designed with a sleek, responsive UI, this project highlights my ability to integrate APIs, manage state, and create an engaging user experience.</p>
                    <div className="flex gap-2">
                        <TextGenerateEffect
                            className='text-left text-sm md:text-md lg:text-lg'
                            words="Technology Used" />
                        <div className="flex flex-wrap gap-3 items-center justify-start">
                            <NewButton
                                icon={<FaReact />}
                                title='React'
                                position='left'
                            />
                            <NewButton
                                icon={<IoLogoFirebase />}
                                title='Firebase'
                                position='left'
                            />
                            <NewButton
                                icon={<FaNode />}
                                title='Node'
                                position='left'
                            />
                            <NewButton
                                icon={<SiMongodb />}
                                title='MongoDB'
                                position='left'
                            />
                            <NewButton
                                icon={<RiTailwindCssFill />}
                                title='TailwindCSS'
                                position='left'
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Eco Adventure",
            live: "https://eco-adventure-e282c.web.app/",
            gitHub: "https://github.com/tanzid109/Eco_Adventure",
            content: (
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <Image
                            src="/images/eco.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/images/eco_res.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                    <p><span className="font-semibold">Eco Adventure</span> <br />
                        A vibrant and inspiring travel website promoting eco-friendly adventures and tours. The site features engaging visuals, intuitive navigation, and detailed sections highlighting destinations and experiences. It emphasizes sustainability while offering users a smooth browsing experience. This project demonstrates strong frontend design skills, with a focus on layout, responsiveness, and user engagement.

                    </p>
                    <div className="flex gap-2">
                        <TextGenerateEffect
                            className='text-left text-sm md:text-md lg:text-lg'
                            words="Technology Used" />
                        <div className="flex flex-wrap gap-3 items-center justify-start">
                            <NewButton
                                icon={<FaReact />}
                                title='React'
                                position='left'
                            />
                            <NewButton
                                icon={<IoLogoFirebase />}
                                title='Firebase'
                                position='left'
                            />
                            <NewButton
                                icon={<FaNode />}
                                title='Node'
                                position='left'
                            />
                            <NewButton
                                icon={<RiTailwindCssFill />}
                                title='TailwindCSS'
                                position='left'
                            />
                        </div>
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div id="projects" className="w-full">
            <Timeline data={data} />
        </div>
    );
}
