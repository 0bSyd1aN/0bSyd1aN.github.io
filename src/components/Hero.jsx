import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ArrowRight, Linkedin } from 'lucide-react';
import { NeuralCortex } from './3d/NeuralCortex';
import { ParticleField } from './3d/ParticleField';
import { MagneticPill } from './ui/MagneticPill';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
             {/* NeuralCortex removed */}
          </Float>
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center pointer-events-none">
        <motion.div style={{ y: y1 }} className="pointer-events-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium text-cyber-cyan mb-6 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            SYSTEM ONLINE
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
            Full Stack<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-blue-500 to-cyber-purple inline-block relative">
              Developer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12 leading-relaxed">
            Building high-performance web applications with modern architectures.
            <br />
            Specialized in React, Next.js, and Scalable Backend Systems.
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            <MagneticPill href="https://www.linkedin.com/in/sujan-r-v-2501b4292/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} /> <span className="text-sm font-semibold">LinkedIn</span>
            </MagneticPill>
            <MagneticPill href="https://github.com/0bSyd1aN" target="_blank" rel="noopener noreferrer">
              <Github size={18} /> <span className="text-sm font-semibold">GitHub</span>
            </MagneticPill>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
