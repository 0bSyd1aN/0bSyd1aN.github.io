/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './ui/SpotlightCard';

const experience = [
  {
    company: 'StringLab Technologies pvt ltd',
    role: 'Full Stack Engineer Intern',
    period: '11/2025 - 03/2026',
    desc: 'Engineered testable application features, resolved system defects, and supported scalable deployment efforts across the complete software development lifecycle.'
  },
  {
    company: 'StringLab Technologies pvt ltd',
    role: 'Full Stack Engineer',
    period: '03/2026 - Present',
    desc: 'Architecting end-to-end software solutions by driving system design, automating CI/CD pipelines, and establishing robust testing standards for enterprise delivery.'
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-white mb-12 tracking-tight text-center">Professional Log</h2>
        
        <div className="relative space-y-8">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-cyan via-cyber-purple to-transparent opacity-20" />
          
          {experience.map((job, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-24"
            >
              <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-cyber-black border-2 border-cyber-cyan z-10" />
              <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-cyber-cyan animate-ping opacity-20" />
              
              <SpotlightCard className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{job.role}</h3>
                  <span className="text-cyber-cyan font-mono text-sm">{job.period}</span>
                </div>
                <div className="text-lg text-white/80 mb-4">{job.company}</div>
                <p className="text-neutral-400 leading-relaxed">{job.desc}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
