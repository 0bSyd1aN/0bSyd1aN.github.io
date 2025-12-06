import React from 'react';
import { Layers, Code, Brain, Zap, Database } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'React', category: 'Frontend' },
  { name: 'HTML | CSS', category: 'Frontend' },
  { name: 'PostgreSQL', category: 'DB' },
  { name: 'MongoDB', category: 'DB' },
  { name: 'TypeScript', category: 'Lang' },
  { name: 'Express.js', category: 'Lang' },
  { name: 'Python', category: 'Lang' },
  { name: 'Node.js', category: 'Lang' },
  { name: 'TensorFlow', category: 'AI' },
  { name: 'PyTorch', category: 'AI' },
  { name: 'Deep Learning', category: 'AI' },
  { name: 'OpenCV', category: 'AI' },

];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Technical Arsenal</h2>
          <div className="h-1 w-20 bg-cyber-cyan rounded-full shadow-[0_0_10px_#00ffff]" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillsData.map((skill, i) => (
            <SpotlightCard key={i} className="p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-colors group cursor-crosshair">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-cyber-cyan/20 group-hover:text-cyber-cyan transition-all duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                {skill.category === 'Frontend' && <Layers size={24} />}
                {skill.category === 'Lang' && <Code size={24} />}
                {skill.category === 'AI' && <Brain size={24} />}
                {skill.category === 'Cloud' && <Zap size={24} />}
                {skill.category === 'DB' && <Database size={24} />}
              </div>
              <div className="text-center">
                <div className="font-bold text-white group-hover:text-cyber-cyan transition-colors">{skill.name}</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">{skill.category}</div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
