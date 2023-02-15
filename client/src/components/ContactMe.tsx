// import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CiMail, CiPhone, CiLocationArrow1 } from "react-icons/ci";


type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {
    linkEnter: () => void;
    textLeave: () => void;
    imgHover: (e: any) => void;
    imgHoverLeave: (e: any) => void;
};

export default function ContactMe({ textLeave, linkEnter, imgHover, imgHoverLeave }: Props) {
    // basic react hook form template
    const { register, handleSubmit } = useForm<Inputs>();

    // when we submit the form what to do with form data is within onSubmit
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        const link = `mailto:sakshamjerry.dev@gmail.com?subject=${formData.subject}&body=Sending greetings from ${formData.name}, the bringer of good news!%0D%0AMy message: ${formData.message}.%0D%0A%0D%0AShould you require further communication, you can reach me at ${formData.email}.`;
        window.open(link, "_blank");
    };


    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Contact
            </h3>

            <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row gap-x-20">
                <div className="max-w-[500px]">
                    <h4 className="text-3xl lg:text-4xl font-semibold text-center md:text-left">
                        I have got just what you need.{" "}
                        <p className="decoration-[#f26c4f] underline">Lets Talk.</p>
                    </h4>

                    <div className="mt-10">
                        <div 
                            onClick={()=>{navigator.clipboard.writeText("sakshamgupta.dev@gmail.com");}}
                            className="flex items-center space-x-3 sm:space-x-5 cursor-pointer justify-center md:justify-start">
                            <CiMail className="text-[#f26c4f] h-5 w-5 lg:h-7 lg:w-7 animate-pulse" />
                            <p 
                            data-hover="Just click on me and the email address will be yours. 📧 " 
                            onMouseEnter={imgHover} 
                            onMouseLeave={imgHoverLeave}
                            className="text-lg sm:text-xl lg:text-2xl">sakshamgupta.dev@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col space-y-2 w-fit mx-auto"
                    >
                        <div className="flex w-fit flex-col md:flex-row md:space-x-2 md:space-y-0 space-y-2">
                            <input
                                {...register("name")}
                                className="contactInput"
                                type="text"
                                placeholder="Name"
                            />
                            <input
                                {...register("email")}
                                className="contactInput"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <input
                            {...register("subject")}
                            className="contactInput"
                            placeholder="Subject"
                            type="text"
                        />

                        <textarea
                            placeholder="Message"
                            {...register("message")}
                            className="contactInput"
                        />
                        <button
                            onMouseEnter={linkEnter}
                            onMouseLeave={textLeave}
                            type="submit"
                            className="bg-[#f26c4f] py-5 px-10 rounded-md text-black font-bold text-lg"
                        >
                            Mail time!
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
