/* eslint-disable no-unused-vars */
import React from 'react';
import { Layers, Code, Brain, Zap, Database, Smartphone, Server, Workflow, Figma, Activity } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';
import { motion } from 'framer-motion';

const skillsData = [
  // Frontend & Mobile
  { name: 'React', category: 'Frontend' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'UI/UX Design', category: 'Design' },
  
  // Backend & Lang
  { name: 'Go (Golang)', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'TypeScript', category: 'Lang' },
  { name: 'Python', category: 'Lang' },

  // Databases
  { name: 'SQL', category: 'DB' },
  { name: 'MySQL', category: 'DB' },
  { name: 'PostgreSQL', category: 'DB' },
  { name: 'MongoDB', category: 'DB' },

  // AI & Analytics
  { name: 'TensorFlow', category: 'AI' },
  { name: 'PyTorch', category: 'AI' },
  { name: 'Deep Learning', category: 'AI' },
  { name: 'OpenCV', category: 'AI' },

  // Beyond Technical
  { name: 'System Design', category: 'Architecture' },
  { name: 'Agile Workflows', category: 'Core' },
  { name: 'Problem Solving', category: 'Core' },
  { name: 'Team Leadership', category: 'Core' }
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Core Competencies</h2>
          <div className="h-1 w-20 bg-white/20 rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skillsData.map((skill, i) => (
            <SpotlightCard key={i} className="p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-neutral-900/50 flex items-center justify-center text-neutral-400 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
                {skill.category === 'Frontend' && <Layers size={20} />}
                {skill.category === 'Mobile' && <Smartphone size={20} />}
                {skill.category === 'Lang' && <Code size={20} />}
                {skill.category === 'Backend' && <Server size={20} />}
                {skill.category === 'AI' && <Brain size={20} />}
                {skill.category === 'Cloud' && <Zap size={20} />}
                {skill.category === 'DB' && <Database size={20} />}
                {skill.category === 'Architecture' && <Workflow size={20} />}
                {skill.category === 'Design' && <Figma size={20} />}
                {skill.category === 'Core' && <Activity size={20} />}
              </div>
              <div className="text-center">
                <div className="font-medium text-neutral-300 group-hover:text-white transition-colors">{skill.name}</div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1.5">{skill.category}</div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
