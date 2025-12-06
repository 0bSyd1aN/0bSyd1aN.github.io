import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { MagneticPill } from './components/ui/MagneticPill';
import { Mail, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-white selection:bg-cyber-cyan/30 font-sans">
      <nav className="fixed top-0 w-full z-50 bg-cyber-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="text-lg font-bold tracking-tighter text-white hover:text-cyber-cyan transition-colors z-50">
            SUJAN<span className="text-cyber-cyan"> R V</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            <a href="#skills" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Projects</a>
            <MagneticPill href="#contact">
              <Mail size={14} /> <span className="hidden sm:inline">Contact</span>
            </MagneticPill>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-50">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-cyber-cyan transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-0 w-full bg-cyber-black/95 backdrop-blur-xl border-b border-white/10 md:hidden flex flex-col p-6 gap-4 shadow-2xl"
            >
              <a 
                href="#skills" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-neutral-300 hover:text-cyber-cyan"
              >
                Skills
              </a>
              <a 
                href="#experience" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-neutral-300 hover:text-cyber-cyan"
              >
                Experience
              </a>
              <a 
                href="#projects" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-neutral-300 hover:text-cyber-cyan"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-neutral-300 hover:text-cyber-cyan"
              >
                Contact
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        
        <footer className="py-12 border-t border-white/5 bg-black text-center">
          <p className="text-neutral-600 text-sm font-mono">
            SYSTEM STATUS: ONLINE | DESIGNED BY SUJAN R V
          </p>
        </footer>
      </main>
    </div>
  );
}