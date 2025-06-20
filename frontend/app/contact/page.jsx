"use client"

import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const info  = [
    {
        icon: <FaPhoneAlt/>,
        title: "Phone",
        desc: "+65 82909567"
    },
    {
        icon: <FaEnvelope/>,
        title: "Email",
        desc: "gohkhjustin@gmail.com"
    },
]

const contact = () => {
    return (
        <motion.section 
            initial={{ opacity: 0}}
            animate={{
                opacity:1,
                transition: { delay:2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="py-6">
        <div className="container mx-auto">
            <div className= "flex flex-col xl:flex-row gap-[30px]">
                <div className= "xl:w-[54%] order-2 xl:order-none">
                    <form className= "flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                        <h3 className= "text-4xl text-accent">Let's Work Together!</h3>
                        <p className= "text-white/60">
                            Feel free to reach out blbablanakdnifjgbisegieFeel free to reach out blbablanakdnifjgbisegieFeel free to reach out blbablanakdnifjgbisegieFeel free to reach out blbablanakdnifjgbisegie
                        </p>
                        <div className= "grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type= "firstname" placeholder = "Firstname"/>
                            <Input type= "lastname" placeholder = "Lastname"/>
                            <Input type= "email" placeholder = "Email Address"/>
                            <Input type= "phone" placeholder = "Phone Number"/>
                        </div>
                        <Textarea className= "h-[200px] border-white/10 bg-primary placeholder:text-white/60 focus-visible:outline-none focus-visible-ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50" 
                        placeholder= "Type your message here"></Textarea>
                        <Button size= "lg" className="max-w-40">
                            Send Message
                        </Button>
                    </form>
                </div>
                <div className= "flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                    <ul className="flex flex-col gap-10">
                        {info.map((item,index) => {
                            return (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[72px] h-[72px] xl:w-[104px] xl:h-[104px] bg-[#27272c] text-accent rounded-md flex items-center justify-center text-2xl">
                                        <div>{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60 text-xl">{item.title}</p>
                                        <h3 className="text-2xl">{item.desc}</h3>
                                    </div>
                                </li>

                            );
                        })}
                    </ul>
                </div>
                

            </div>

        </div>
        </motion.section>
    )
}

export default contact