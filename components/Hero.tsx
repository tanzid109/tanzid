import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { BackgroundBeams } from './ui/background-beams';
import { TypewriterEffectDemo } from './ui/TyperWritterText';
import { ImageDp } from './ui/ImageDp';
import MagicButton from './ui/MagicButton';
import { IoMdDownload } from 'react-icons/io';

const Hero = () => {
    return (
        <div className=' pt-32 '>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>
            {/* <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div> */}
            <BackgroundBeams />
            <div className='flex justify-between items-center flex-col-reverse lg:flex-row relative mt-30 z-10 gap-6'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-start justify-center gap-4'>
                    <h2 className='uppercase  tracking-widest text-xs lg:text-2xl text-center text-blue-100 max-w-80 lg:max-w-full'>
                        MERN stack web developer
                    </h2>
                    <TypewriterEffectDemo />
                    <TextGenerateEffect
                        className='text-left text-sm md:text-md lg:text-lg'
                        words="I'm Tanzid, a passionate fullstack developer with expertise in building scalable web and mobile applications. I specialize in crafting seamless user experiences and robust backend systems. I'm always eager to learn and collaborate on innovative projects!" />

                    <a href="/Tanzid.pdf" download="Tanzid_CV.pdf">
                        <MagicButton
                            icon={<IoMdDownload />}
                            title='Download CV' 
                            position='right'
                            />
                    </a>
                </div>
                <div className='rounded-full '>
                    <ImageDp />
                </div>
            </div>
        </div>
    );
};

export default Hero;