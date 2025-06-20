// components/ProjectsGridFlip.jsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Fake News Classification",
    imageUrl: "/assets/fake-news.png",
    description: `Spearheaded the development and experimentation of deep learning Convolutional Neural Networks, and Ensembled Classical Methods to identify fraudulent news articles.`,
  },
  {
    title: "Part-of-Speech Tagging, Viterbi Algorithm",
    imageUrl: "/assets/pos-tagging.jpg",
    description: `Implemented a Twitter POS tagging system integrating Hidden Markov Models, Viterbi Algorithm, and Naïve Bayes classifiers. Engineered intricate feature extraction pipeline, encompassing morphological attributes, linguistic nuances and domain-specific
insights intrinsic to Twitter communication, enriching the modelling processes with enhanced contextual understanding
.`,
  },
  {
    title: "Automated Machine Learning Platform",
    imageUrl: "/assets/mlbb.png",
    description: "Built a full‐stack AutoML solution using a React front end and Flask back end to streamline end-to-end model development. Applies automated data cleaning and feature transformations, and then trains. It also visualizes performance, and validates against hold-out data, before exporting the final model as a production-ready artifact.",
  },
  {
    title: "POPTrade",
    imageUrl: "/assets/poptrade.png",
    description: "Built a trading platform using Vue.js and Google Firebase for collectibles.",
  },
];

export default function ProjectsGridFlip() {
  const [flip, setFlips] = useState({});

  const toggle = (i) => {
    setFlips((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <motion.section 
        initial= {{opacity: 0}} 
        animate= {{opacity:1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}} 
        className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((proj, i) => {
          const isFlipped = flip[i] === true;
          return (
            <div
              key={i}
              className="w-full h-80 perspective cursor-pointer"
              onClick={() => toggle(i)}
            >
              {/* 1) Outer motion.div — sets up the overall size */}
              <motion.div
                style={{ width: "100%", height: "100%" }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.7 }}
              >
                {/* 2) Card container */}
                <motion.div
                  className="relative w-full h-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.7 }}
                >
                  {/* 3) Front face */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    <Image
                      src={proj.imageUrl}
                      alt={proj.title}
                      fill
                      className="object-cover opacity-50"
                    />
                    <div className="flex absolute inset-0 bg-black/30" />
                    <h3 className="justify-content relative z-10 p-4 text-4xl font-bold text-white text-center flex">
                      {proj.title}
                    </h3>
                  </motion.div>

                  {/* 4) Back face */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center p-4"
                    initial={{ rotateY: 180 }}
                    animate={{ rotateY: isFlipped ? 0 : 180 }}
                    transition={{ duration: 0.7 }}
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    <Image
                      src={proj.imageUrl}
                      alt={proj.title}
                      fill
                      className="object-cover opacity-10"
                    />
                    <p className="text-white">
                      {proj.description}
                    </p>
                  </motion.div>

                  
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </motion.section>
  );
}
