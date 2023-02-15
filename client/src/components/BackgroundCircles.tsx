import { motion } from "framer-motion";
import React from 'react';

type Props = {}

export default function BackgroundCircles({ }: Props) {
    return (
        <motion.div
        initial={{
            opacity:0,
        }}
        animate={{
            scale:[1,2,2,3,1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        }}
        transition={{
            duration: 2.5,
        }}
        className = "relative flex justify-center items-center">
            {/* <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping hero__ring"/> */}
            {/* <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 hero__ring"/> */}
            {/* <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 hero__ring"/> */}
            <div className="absolute border border-[#f26c4f] rounded-full h-[300px] w-[300px] sm:h-[550px] sm:w-[550px] mt-52 animate-pulse opacity-30 hero__ring"/>
            <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] sm:h-[800px] sm:w-[800px] mt-52 hero__ring"/>
        </motion.div>
    )
}