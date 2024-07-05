"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Work = () => {
  return (
    <section className="h-full">
      <h1 className="h1 justify-center text-center">Work Experience</h1>
      <br />
      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2022</div>
          <motion.div
            className="timeline-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
          >
            <h2 className="h2">PriceWaterhouse Coopers</h2>
            <p className="h3">Assurance Intern</p>
            <br />
            <ul className="list-disc list-inside text-left h4">
              <li>Processed incoming Bank Confirmations before dissemination to relevant GA teams and Partners for further action</li>
              <li>Developed Python scripts to accelerate drawn-out manual workflows</li>
              <li>Facilitated processing and sending out of engagement letters to firms</li>
              <li>Used Excel and Outlook for business communications and data recording</li>
            </ul>
          </motion.div>
          
          
        </div>
        {/* Add more timeline items as needed */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2023</div>
          <motion.div
            className="timeline-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
          >
            <h2 className="h2">Land Transport Authority Singapore</h2>
            <p className="h3">Finance RPA Developer</p>
            <br />
            <ul className="list-disc list-inside text-left h4">
              <li>Developed Python and UiPath bots to automate inefficient and manual financial processes</li>
              <li>Gathered requirements from relevant stakeholders and engaged in Software Development Life Cycle using SCRUM</li>
              <li>Streamlined these workflows which resulted in 65% reduction in time spent on manual tasks, saving 21 man-days of work per year</li>
              <li>Conducted multiple User Acceptance Testing Cycles</li>
            </ul>
          </motion.div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2024</div>
          <motion.div
            className="timeline-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
          >
            <h2 className="h2">Deloitte & Touche</h2>
            <p className="h3">Finance Forensic Data Analyst</p>
            <br />
            <ul className="list-disc list-inside text-left h4">
              <li>Developed machine learning classification model, ensembling Unsupervised and Supervised methods to identify and segment risky
              and fraudulent customers and transactions for bank engagement</li>
              <li>Researched on possible deep learning applications, namely Graph Neural Networks integration into Fraud Analytics</li>
              <li>Feature development of pre-existing data visualization software</li>
              <li>Utilised SQL to query and manage transactional data in Relational Databases
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
