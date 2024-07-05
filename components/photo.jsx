"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const photo = () => {
  return (
    <div className="w-full h-full relative"> 
    <motion.div initial= {{opacity: 0}} animate={{opacity: 1,transition:{delay:2 ,duration:0.4,ease:"easeIn"}}}>
        <motion.div initial= {{opacity: 0}} animate={{opacity: 1,transition:{delay:2.4 ,duration:0.4,ease:"easeIn"}}} className="w-[298px] h-[298px] xl:w-[498-px] xl:h-[498px] rounded-full overflow-hidden mix-blend-lighten">
            <Image src = "/assets/photo.png" priority quality={100} fill alt="" className="object-contain rounded-full" />
        </motion.div>
    </motion.div>
    </div>
  )
}

export default photo