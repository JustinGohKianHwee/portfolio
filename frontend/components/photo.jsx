"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const photo = () => {
  return (
    <div className="w-full h-full relative"> 
    <motion.div initial= {{opacity: 0}} animate={{opacity: 1,transition:{delay:2 ,duration:0.4,ease:"easeIn"}}}>
        <motion.div initial= {{opacity: 0}} animate={{opacity: 1,transition:{delay:2.4 ,duration:0.4,ease:"easeIn"}}} className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full overflow-hidden mix-blend-normal absolute">
            <Image src = "/assets/montreal_final.png" priority quality={100} fill alt="" className="object-contain rounded-full" />
        </motion.div>
    </motion.div>
    <motion.svg className= "w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" fill="transparent"
    viewBox= "0 0 506 506" xmlns="http://www.w3.org/2000/svg">
        <motion.circle cx= "253" cy= "253" r ="250" stroke = "#ffb703" strokeWidth="4" strokeLinecap="round" strokeLinejoin= "round"
        initial = {{opacity: 0, strokeDasharray:"24 10 0 0"}} 
        animate = {{
            opacity:[0,1],
            strokeDasharray: ["15 120 25 25", "16 25 92 72","4 250 22 22"],
            rotate: [120,360],
        }}
        transition = {{
            opacity: { delay: 2.4, duration: 0.01 },
            delay : 2.4,
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
        }}/>
    </motion.svg>
    </div>
  )
}

export default photo