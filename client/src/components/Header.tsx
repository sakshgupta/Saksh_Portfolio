import { motion } from "framer-motion";
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Social } from "typings";

type Props = {
    socials: Social[];
    textLeave: () => void;
    linkEnter: () => void;
    imgHover: (e: any) => void;
    imgHoverLeave: (e: any) => void;
}

export default function Header({ socials, textLeave, linkEnter, imgHover, imgHoverLeave}: Props) {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center backdrop-blur-[2px]">
            <a href="#hero">
                <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                data-hover = "cool logo right? 😎"
                onMouseEnter={imgHover} 
                onMouseLeave={imgHoverLeave}
                className='flex flex-row items-center text-[#f26c4f] text-4xl cursor-pointer '>
                    sg.
                </motion.div>
            </a>
            <motion.div 
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5,
            }}
            className = "flex flex-row items-center">
                {/* Social Icons */}
                {socials
                    .sort((a, b) => a.order > b.order ? 1 : -1)
                    .map((social) => (
                        <SocialIcon 
                            url={social.url}
                            onMouseEnter={linkEnter} 
                            onMouseLeave={textLeave}
                            key={social._id}
                            target="_blank"
                            fgColor='gray' 
                            bgColor='transparent'
                        />
                    ))}
            </motion.div>
        </header>
    )
}