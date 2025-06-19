"use client";

import { motion } from "framer-motion";
import React from "react";

// 1. Declare your education data outside the component
const educationTimeline = [
  {
    year: "2021 – Present",
    institution: "National University of Singapore",
    degree: "Bachelor of Science in Business Analytics",
    details: [
      "Major in Business Analytics, minor in Quantitative Finance",
      "Double Specialization in Financial and Machine Learning Analytics",
      "Recipient of NUS Merit Scholarship",
      "Exchange program at UBC, Vancouver (Jan – May 2025)",
      "Programme's head of Sheares Hall Cultural Management Board",
      "Programme's head of Sheares Hall Overseas Community Service Programme"
    ],
  },
  {
    year: "2018 – 2019",
    institution: "Raffles Junior College",
    degree: "A-Levels",
    details: [
      "AAA/A in Physics, Mathematics, Chemistry, and Economics",
      "Achieved Raffles Academic Excellence Award 2019",
      "Recipient of MOE Pre-University Scholarship",
      "Vice-Captain of Raffles Squash",
    ],
  },
  {
    year: "2014 – 2017",
    institution: "Raffles Institution",
    degree: "Integrated Program",
    details: [
      "EAGLEs award for exemplary leadership",
      "Raffles COLOURS Award",
      "Vice-Captain of Raffles Squash"
    ],
  },
  {
    year: "2011 – 2013",
    institution: "Catholic High School (Primary)",
    degree: "Primary School Leaving Examination (PSLE)",
    details: [
      "Graduated with distinction in PSLE subjects",
      "Enrolled in Gifted Education Programme"
    ],
  },
  {
    year: "2008 – 2010",
    institution: "Ai Tong Primary School",
    degree: "",
    details: [
      "Top in class 2008,2009",
    ],
  },
];

export default function Education() {
  return (
    <section className="h-full">
      <h1 className="h1 justify-center text-center">Education</h1>
      <br />

      <div className="timeline-items">
        {educationTimeline.map((edu, idx) => (
          <motion.div
            key={idx}
            className="timeline-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx == 0 ? 2.4 + idx * 0.2 : idx * 0.2 }}
          >
            <div className="timeline-dot" />
            <div
              className="timeline-date text-6xl leading-none font-extrabold"
              style={{ WebkitTextStroke: "2px #ffb703", color: "transparent" }}
            >
              {edu.year}
            </div>

            <div className="timeline-content flex flex-col gap-8">
              <h2 className="h2 text-[36px]">{edu.institution}</h2>
              <p className="h3 text-[24px] text-accent">{edu.degree}</p>
              <ul className="list-disc list-inside text-left h4 text-white/60">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
