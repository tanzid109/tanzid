import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FaNode, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { RiTailwindCssFill } from "react-icons/ri";
import NewButton from "./ui/NewButton";

export function Projects() {
    const data = [
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum soluta voluptas vel sint, inventore ab harum eveniet id, velit impedit molestiae temporibus eius asperiores facilis labore est. Adipisci explicabo similique, iure aut vero nobis ipsum, sed, culpa possimus cum fugiat impedit nam laudantium tenetur non accusamus sapiente deleniti neque corrupti!</p>
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum soluta voluptas vel sint, inventore ab harum eveniet id, velit impedit molestiae temporibus eius asperiores facilis labore est. Adipisci explicabo similique, iure aut vero nobis ipsum, sed, culpa possimus cum fugiat impedit nam laudantium tenetur non accusamus sapiente deleniti neque corrupti!</p>
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum soluta voluptas vel sint, inventore ab harum eveniet id, velit impedit molestiae temporibus eius asperiores facilis labore est. Adipisci explicabo similique, iure aut vero nobis ipsum, sed, culpa possimus cum fugiat impedit nam laudantium tenetur non accusamus sapiente deleniti neque corrupti!</p>
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
