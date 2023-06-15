import { urlFor } from '@/client';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Project } from 'typings';


type Props = {
    projects: Project[]
}

export default function Projects({ projects }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-3 sm:px-10 justify-evenly mx-auto items-center project_section"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl hidden md:block project_section_title">
                Projects
            </h3>

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
            >
                <Splide aria-label="My Favorite Projects">
                    {projects
                        .sort((a, b) => (a.order > b.order ? 1 : -1))
                        .map((project) => (
                            // project__section
                            <SplideSlide key={project._id}>
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 space-y-5 p-2 md:p-20 h-screen cursor-move">
                                    <div className="flex justify-center mt-3 items-end md:items-center">
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href={project.projectLink}
                                        >
                                            <Image
                                                src={urlFor(
                                                    project.imgUrl
                                                ).url()}
                                                // src='/homepage.png'
                                                className="w-screen lg:w-[92%] rounded-lg project__image"
                                                alt="Project Images"
                                                height={5000}
                                                width={5000}
                                                quality="100"
                                            />
                                        </a>
                                    </div>
                                    <div className="flex flex-col justify-start md:justify-center align-middle max-w-[45rem] project__description">
                                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#f26c4f]">
                                            {project.title}
                                        </h1>
                                        <p className="mt-4 text-sm sm:text-md md:text-lg">
                                            {project.description}
                                        </p>

                                        <ul className="mt-8 text-sm flex flex-row flex-wrap gap-y-1	sm:gap-y-3 gap-x-1 sm:gap-x-5 text-[#D0CCCA] project_section_bottomtags">
                                            {project.tags?.map((tag: any) => (
                                                <li
                                                    className="border-2 border-[#D0CCCA] rounded-xl p-1"
                                                    key={tag}
                                                >
                                                    {tag}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-row gap-x-3 mt-[1.6rem]">
                                            <a
                                                target="_blank"
                                                rel="noreferrer"
                                                href={project.codeLink}
                                            >
                                                <FiGithub
                                                    size={20}
                                                    className="hover:text-[#f26c4f]"
                                                />
                                            </a>
                                            {project.projectLink ? (
                                                <a
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    href={project.projectLink}
                                                >
                                                    <FiExternalLink
                                                        size={20}
                                                        className="hover:text-[#f26c4f]"
                                                    />
                                                </a>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                </Splide>
            </motion.div>
        </motion.div>
    );
}