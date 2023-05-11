import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";
import { About } from "typings";
import { urlFor } from "../client";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
    about: About[];
    textEnter: () => void;
    textLeave: () => void;
    linkEnter: () => void;
    imgHover: (e: any) => void;
    imgHoverLeave: (e: any) => void;
};

export default function Hero({
    about,
    textEnter,
    textLeave,
    linkEnter,
    imgHover,
    imgHoverLeave,
}: Props) {
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            {about[0]?.heroimgUrl && (
                <Image
                    // src="https://i.postimg.cc/4d1rf88Y/resume-photo.png"
                    src={urlFor(about[0]?.heroimgUrl).url()}
                    height={500}
                    width={500}
                    priority={true}
                    alt="Me :)"
                    data-hover="Don't look too closely, or you might get lost in the intricate details. ✌️ "
                    onMouseEnter={imgHover}
                    onMouseLeave={imgHoverLeave}
                    className="relative rounded-full h-32 w-32 mx-auto object-cover hero__image"
                />
            )}
            <div className="z-20">
                <h2 className="text-xs sm:text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    {about[0]?.title}
                </h2>
                <h1
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    className="text-3xl sm:text-5xl lg:text-6xl font-semibold px-10"
                >
                    <Typewriter
                        options={{
                            strings: [
                                "*[_theName == “Saksham Gupta”]",
                                "Guy-who-loves-Coffee.tsx",
                                "{ButLovesToCodeMore}",
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 80,
                        }}
                    />
                </h1>

                <div className="pt-5">
                    <Link
                        href="#about"
                        onMouseEnter={linkEnter}
                        onMouseLeave={textLeave}
                    >
                        <button className="heroButton">About</button>
                    </Link>
                    <Link
                        href="#skills"
                        onMouseEnter={linkEnter}
                        onMouseLeave={textLeave}
                    >
                        <button className="heroButton">
                            Skills & Experience
                        </button>
                    </Link>
                    <Link
                        href="#projects"
                        onMouseEnter={linkEnter}
                        onMouseLeave={textLeave}
                    >
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
