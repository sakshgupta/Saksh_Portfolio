import { urlFor } from "@/client";
import { motion } from "framer-motion";
import React from 'react';
import { CiLocationArrow1 } from 'react-icons/ci';
import { FiArrowUpRight } from "react-icons/fi";
import { About } from 'typings';

type Props = {
    about: About[]
    linkEnter: () => void;
    textLeave: () => void;
    imgHover: (e: any) => void;
    imgHoverLeave: (e: any) => void;
};

export default function AboutContainer({ about, textLeave, linkEnter, imgHover, imgHoverLeave }: Props) {
    const rerouteToResume = () => window.open(`${about[0].resumeLink}`, "_blank")

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-3 sm:px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

            <div className="-mb-[8rem] md:mb-0 mt-5 sm:mt-3 md:mt-0 flex-shrink-0 w-[170px] h-[170px] rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] about__image__div">
                {about[0]?.profilePic && (
                <motion.img
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    src={urlFor(about[0]?.profilePic).url()}  
                    alt="Again Me :)"
                    data-hover="I know I'm camera-shy, but if you keep staring, I might just develop a permanent pose! 😐"
                    onMouseEnter={imgHover} 
                    onMouseLeave={imgHoverLeave}
                    className="-mb-20 md:mb-0 flex-shrink-0 w-[170px] h-[170px] rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] about__image"
                />
                )}
            </div>
            <div className="mt-7 sm:mt-0 space-y-5 sm:space-y-10 px-0 md:px-10 inline-flex flex-col items-center md:inline-block">
                <div className="flex flex-row justify-center items-center gap-2 about__small__image_div">
                {about[0]?.profilePic && (
                    <img
                        src={urlFor(about[0]?.profilePic).url()}  
                        alt="Again Me :)"
                        data-hover="I know I'm camera-shy, but if you keep staring, I might just develop a permanent pose! 😐"
                        onMouseEnter={imgHover} 
                        onMouseLeave={imgHoverLeave}
                        className="flex-shrink-0 w-[50px] h-[50px] rounded-full object-cover about__small_image"
                    />
                    )}
                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold about__subheading">Here is a {" "}
                        <span className="underline decoration-[#f26c4f]">little</span>
                        {" "}background
                    </h4>
                </div>
                {/* <p className="text-base">
                    As a pre-final year CSE student at VIT Bhopal, I am a problem-solver at heart and an introvert by nature. I possess a strong aptitude for analytical and logical thinking, which I have honed through my studies and projects. 
                    <br/>
                    My ability to work in a team and my constant engagement with emerging technologies make me an asset in any organization. I am a Full Stack Developer proficient in various tools and programming languages. I always strive for solution-oriented approaches and have a keen interest in developing software that addresses real-world problems. I am seeking a challenging career opportunity that will allow me to secure a solid work that supports learning and personal and professional development.
                    <br/>
                    When I am not coding, I like to keep myself active and engaged. I am an avid gym-goer, and playing badminton outside is one of my favourite pastime, and when I am not doing any of that I like to spend my time watching TV episodes and movies. 
                    <br/>
                    I am confident that my skills, experience, and interest align with the demands of the industry and I am excited to take on new challenges and to continue learning and growing in my career.
                </p> */}
                <p className="text-xs sm:text-sm lg:text-base">
                    {about[0]?.description?.map((para: string, _id: any) => (
                        <span key={_id}>
                            {para}
                            <br />
                        </span>
                    ))}
                </p>


                <button type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    onMouseEnter={linkEnter}
                    onMouseLeave={textLeave}
                    onClick={rerouteToResume}
                    className="rounded px-3 py-2 md:px-5 md:py-3 min-w-max overflow-hidden shadow relative bg-[color:var(--secondary-color)] text-white flex flex-row gap-x-2 justify-center items-center text-sm md:text-base">
                    My story, my resume
                    <FiArrowUpRight size='20' />
                </button>
            </div>
        </motion.div>
    )
}