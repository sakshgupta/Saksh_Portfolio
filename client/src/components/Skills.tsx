import Tippy from "@tippyjs/react";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Placement } from "tippy.js";
import "tippy.js/dist/tippy.css";
import { Experience, Skill } from "typings";
import { client, urlFor } from "../client";

type Props = {
    experiences: Experience[];
    skills: Skill[];
    linkEnter: () => void;
    textLeave: () => void;
};

export default function Skills({
    textLeave,
    linkEnter,
    experiences,
    skills,
}: Props) {
    const [placement, setPlacement] = useState<Placement>("right");

    const handleResize = () => {
        const width = window.innerWidth;

        if (width <= 640) {
            setPlacement("bottom");
        } else {
            setPlacement("right");
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-0 sm:px-10 justify-evenly mx-auto items-center"
        >
            {/* <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl skill_section_title">
                Skills & Experience
            </h3> */}

            {/* app__skills-container */}
            <div className="w-[80%] lg:w-[100%] space-y-0 sm:space-y-[3rem] flex flex-col lg:flex-row mt-20 sm:mt-0">
                {/* app__skills-list */}
                <motion.div
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-1 flex-wrap justify-center items-center lg:justify-start lg:items-start mr-0 lg:mr-20"
                >
                    {skills
                        .sort((a, b) => (a.order > b.order ? 1 : -1))
                        .map((skill) => (
                            // app__skills-item
                            <div
                                className="flex flex-col text-center m-[0.5rem] sm:m-[1rem] transition ease-in-out"
                                key={skill._id}
                            >
                                <div className="flex w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] lg:w-[90px] lg:h-[90px] rounded-full justify-center items-center bg-[#333333] shadow-sm hover:shadow-[#414141]">
                                    <Image
                                        src={urlFor(skill.icon).url()}
                                        alt={skill.name}
                                        width={500}
                                        height={500}
                                        className="w-[50%] h-[50%] justify-center items-center"
                                    />
                                </div>
                                <p className="hidden sm:block sm:text-sm md:text-md font-medium mt-[0.5rem] 2xl:mt-1">
                                    {skill.name}
                                </p>
                            </div>
                        ))}
                </motion.div>
                {/* app__skills-exp */}
                <div className="flex flex-1 justify-start items-start flex-col mt-0 md:mt-[2rem]">
                    {experiences.map((experience: any) => (
                        // app__skills-exp-item
                        <motion.div
                            initial={{
                                x: 200,
                                opacity: 0,
                            }}
                            transition={{ duration: 1 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-[100%] flex flex-row justify-start items-start my-[1rem] mx-0"
                            key={experience._id}
                        >
                            {/* app__skills-exp-year */}
                            <div className="mr-[1rem] sm:mr-[3rem]">
                                <p className="text-sm sm:text-base bold-text font-extrabold text-[#f26c4f]">
                                    {experience.year}
                                </p>
                            </div>
                            {/* app__skills-exp-works */}
                            <div className="flex-1">
                                {experience.works.map((work: any) => (
                                    <div key={work._key}>
                                        {/* app__skills-exp-work */}
                                        <Tippy
                                            placement={placement}
                                            animation="fade"
                                            content={work.desc}
                                            key={work._key}
                                        >
                                            <div
                                                onMouseEnter={linkEnter}
                                                onMouseLeave={textLeave}
                                                className="flex flex-col justify-start items-start mb-[1rem] absolute"
                                            >
                                                <h4 className="text-sm sm:text-base bold-text font-medium cursor-pointer">
                                                    {work.role}
                                                </h4>
                                                <p className="text-sm sm:text-base font-normal text-[#D0CCCA] mt-[5px] cursor-pointer">
                                                    {work.company}
                                                </p>
                                            </div>
                                        </Tippy>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
