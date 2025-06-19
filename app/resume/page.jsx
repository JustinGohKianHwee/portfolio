"use client"
import Photostatic from "@/components/photostatic"
import {
    FaHtml5,
    FaCss3,
    FaPython,
    FaJava,
    FaJs,
    FaReact,
    FaDocker,
    FaNodeJs
} from "react-icons/fa"

import { 
    SiUipath,
    SiNextdotjs,
    SiPytorch,
    SiTensorflow,
    SiOpenai,
    SiLangchain,
    SiHuggingface,
    SiRstudioide,
    SiMysql
 } from "react-icons/si";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
  } from "@/components/ui/tooltip";

import { motion } from "framer-motion";

const about = {
    title: "About Me",
    description: "I’m a Machine Learning Engineer with a passion for turning data into impactful, real-world solutions. Over the years I’ve built and deployed end-to-end ML pipelines, from data collection and feature engineering to model training, evaluation, and production monitoring.",
    description2: "If you’re looking for someone to drive your next AI or software initiative—be it prototyping a proof-of-concept or scaling production systems—let’s connect! Feel free to reach out to explore opportunities or discuss how we might work together.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Goh Kian Hwee Justin",
        },
        {
            fieldName: "Phone",
            fieldValue: "+65 8290 9567",
        },
        {
            fieldName: "Email",
            fieldValue: "gohkhjustin@gmail.com",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Singapore Citizen",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Mandarin",
        }
    ]
}

const technologies = {
    title: "Tech Stack",
    description: "Technologies that I am proficient in",
    techList: [
        {
            icon: <SiPytorch />,
            name: "Pytorch"
        },
        {
            icon: <SiTensorflow />,
            name: "Tensorflow"
        },
        {
            icon: <SiOpenai />,
            name: "OpenAI"
        },
        {
            icon: <SiLangchain />,
            name: "LangChain"
        },
        {
            icon: <SiHuggingface />,
            name: "HuggingFace"
        },
        {
            icon: <SiRstudioide />,
            name: "R Studio"
        },
        {
            icon: <SiMysql />,
            name: "MySQL"
        },
        {
            icon: <SiUipath />,
            name: "UiPath"
        },
        {
            icon: <FaDocker />,
            name: "Docker"
        },
        {
            icon: <FaReact />,
            name: "React"
        },
        {
            icon: <FaNodeJs />,
            name: "NodeJs"
        },
        {
            icon: <SiNextdotjs />,
            name: "Nexj.js"
        },
        
    ]
}

const languages = {
    title: "Languages",
    description: "Coding languages that I am proficient in",
    langList: [
        {
            icon: <FaPython />,
            name: "Python"
        },
        {
            icon: <FaJava />,
            name: "Java"
        },
        {
            icon: <FaJs />,
            name: "Javascript"
        },
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
        {
            icon: <FaCss3 />,
            name: "Css 3"
        },
        {
            icon: <SiRstudioide />,
            name: "R"
        },
        {
            icon: <SiMysql />,
            name: "SQL"
        },
        
    ]
}
const skills = {
  title: "Skills",
  description: "Core professional skills I bring to every project",
  skillList: [
    "Deep Learning",
    "Machine Learning",
    "Clustering",
    "Data Science",
    "LLMs",
    "Prompt Engineering",
    "Problem Solving",
    "Communication",
    "Team Leadership",
    "Agile/Scrum",
    "Data Visualization",
    "Unit Testing",
    "CI/CD",
    "Version Control (Git)",
  ],
};

const Resume = () => {
    return (
        <motion.div 
        initial= {{opacity: 0}}
        animate= {{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
        }}
        className="min-h-[70vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="About Me"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="About Me">About Me</TabsTrigger>
                        <TabsTrigger value="Languages">Languages</TabsTrigger>
                        <TabsTrigger value="Tech Stack">Tech Stack</TabsTrigger>
                        <TabsTrigger value="Skills">Skills</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full pb-8">
                        <TabsContent value="About Me" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex item-center justify-center">
                                    <Photostatic/>
                                </div>
                                <h3 className="text-4xl font-bold ">
                                    {about.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}  </p>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description2}  </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[800px] mx-auto xl:mx-0">
                                    {about.info.map((item,index) => {
                                        return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}:</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="Languages" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {languages.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {languages.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                                    {languages.langList.map((lang,index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                            {lang.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{lang.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="Tech Stack" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {technologies.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {technologies.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                                    {technologies.techList.map((tech,index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                            {tech.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{tech.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="Skills" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {skills.description}
                                </p>
                                </div>

                                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
                                {skills.skillList.map((skill, idx) => (
                                    <li key={idx}>
                                    <div className="group w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center text-center">
                                        <span className="text-xl text-white group-hover:text-accent transition-colors duration-300">{skill}</span>
                                    </div>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            </TabsContent>

                    </div>
                </Tabs>

            </div>
        </motion.div>
    )
}

export default Resume