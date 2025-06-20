"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs" 
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

import Link from "next/link"


const jobs = [
  {
    year: "2025",
    company: "Visenze Pte Ltd",
    image: "/assets/visenze.png",
    role: "Machine Learning Research Engineer",
    bullets: [
      "Conducted research and experimentation to improve dense and sparse transformer-based embeddings for ViSenze’s multi-modal search system",
      "Engineered and scaled large-scale hard negative mining workflows, culminating in an end-to-end continual improvement training pipeline for Visenze's sparse and dense models",
      "Conducted comprehensive analysis of search regressions, focusing on embedding drift detection and resolution using advanced diagnostic tools, alongside rigorous evaluation of retrieval effectiveness via mAP/NDGC metrics and offline re-ranking pipelines",
      "Leveraged and integrated LLM into research pipeline for structured annotation and generation, building an efficient MLOps codebase for future research purposes",
      "Fine-tuned and deployed feature set release for synonym improvement for fashion search products"
    ],
    stack: [{ name: "Tensorflow"},{ name: "Pytorch"},{ name: "CUDA"},{ name: "Langchain"},{ name: "Ollama"},{ name: "OpenAI"},{ name: "HuggingFace Transformers"}],
    github: "",
    live: ""
  },
  {
    year: "2024",
    company: "Deloitte & Touche",
    image: "/assets/deloitte.jpg",
    role: "Financial Forensic Data Analyst",
    bullets: [
      "Built an ensemble ML classifier (unsupervised + supervised) to flag risky/fraudulent customers & transactions",
      "Researched Graph Neural Network applications for fraud analytics",
      "Enhanced features in existing data-viz software",
      "Queried and managed transactional data via SQL in relational databases",
    ],
    stack: [{ name: "Python"}, { name: "Scikit-learn"}, { name: "Jupyterlab"}],
    github: "",
    live: ""
  },
  {
    year: "2023",
    company: "Land Transport Authority",
    image: "/assets/lta.jpeg",
    role: "Finance Software Engineer",
    bullets: [
      "Developed Python and UiPath bots to automate inefficient and manual financial processes",
      "Gathered requirements from relevant stakeholders and engaged in Software Development Life Cycle using SCRUM",
      "Streamlined workflows, reducing manual time by 65% (21 man-days saved/yr)",
      "Conducted multiple User Acceptance Testing cycles",
    ],
    stack: [{ name: "Python"}, { name: "Java"}],
    github: "",
    live: ""
  },
  {
    year: "2022",
    company: "PriceWaterhouseCoopers",
    image: "/assets/pwc.jpg",
    role: "Assurance Intern",
    bullets: [
      "Processed incoming Bank Confirmations before dissemination to relevant GA teams and Partners for further action",
      "Developed Python scripts to accelerate drawn-out manual workflows",
      "Facilitated processing and sending out of engagement letters to firms",
      "Used Excel and Outlook for business communications and data recording",
    ],
    stack: [],
    github: "",
    live: ""
  },
];

const Experiences = () => {
  const [job, setjob] = useState(jobs[0]);
  const handleSlideChange = (swiper) => {
    const currentIdx = swiper.activeIndex;
    setjob(jobs[currentIdx]);
  }
  return <motion.section 
    initial= {{opacity: 0}} 
    animate= {{opacity:1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}} 
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
    <div className= "container mx-auto">
      <div className= "flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"> 
          <div className= "flex flex-col gap-[30px]">
            <div className= "text-8xl leading-none font-extrabold text-transparent text-outline"
            style={{ WebkitTextStroke: "2px #ffb703", color: "transparent" }}>
              {job.year}
            </div>
            <h2 className= "text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
              {job.role} 
            </h2>
            <h3 className= "text-[24px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
              {job.company} 
            </h3>
            <ul className="text-white/60 space-y-4">
            {job.bullets.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
            <ul className="flex gap-4">
            {job.stack.map((item, idx) => (
                <li key={idx} className="text-xl text-accent">
                  {item.name}
                  {idx !== job.stack.length - 1 && ","}
                  </li>
              ))}
            </ul>
            <div className="border border-white/20"></div>
            <div className="flex items-center gap-4">
            <Link href = {job.live}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className = "w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className= "text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live job</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              <Link href = {job.github}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className = "w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className= "text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[50%]">
          <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
            {jobs.map((job,index)=> {
              return <SwiperSlide key = {index} className="w-full">
                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                <div className="relative w-full h-full">
                  <Image src={job.image} fill className="object-cover" alt=""/>
                </div>
                </div>
              </SwiperSlide>
            })}
            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
            btnStyles= "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
          </Swiper>
        </div>
      </div>
    </div>
  </motion.section>
};

export default Experiences;
