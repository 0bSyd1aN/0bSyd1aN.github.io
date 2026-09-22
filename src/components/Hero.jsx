/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { MagneticPill } from './ui/MagneticPill';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        
        <motion.div 
          className="mb-8 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900/50 border border-neutral-800 backdrop-blur-md text-[10px] font-mono tracking-widest text-neutral-400 mb-8 uppercase">
            <span className="relative flex h-1.5 w-1.5">
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-neutral-300"></span>
            </span>
            Frontend Engineering
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.1] mb-6">
            Building Interfaces<br />
            <span className="text-neutral-500">That Flow.</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-neutral-400 max-w-xl mb-12 leading-relaxed font-light"
        >
          Crafting pixel-perfect, high-performance web layouts with a relentless focus on clean design and fluid interactions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <MagneticPill href="https://www.linkedin.com/in/sujan-r-v-2501b4292/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} /> <span className="text-xs font-semibold tracking-wide">LINKEDIN</span>
          </MagneticPill>
          <MagneticPill href="https://github.com/0bSyd1aN" target="_blank" rel="noopener noreferrer">
            <Github size={16} /> <span className="text-xs font-semibold tracking-wide">GITHUB</span>
          </MagneticPill>
        </motion.div>

      </div>
    </section>
  );
};
