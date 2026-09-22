import React from 'react';
import { Terminal } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Digital Muneem (Accounting)',
    desc: 'Full-stack accounting platform with real-time financial tracking, multi-tenant architecture, and role-based access control supporting 100+ concurrent users.',
    tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
    highlight: 'Full Stack SaaS',
    statusColor: 'text-green-400',
    statusBg: 'bg-green-500/10',
    statusBorder: 'border-green-500/20'
  },
  {
    title: 'Uber Data Analytics Platform',
    desc: 'End-to-end automated ETL pipeline processing 1M+ ride records using Mage orchestration and GCP, reducing query latency by 40%.',
    tech: ['Python', 'GCP', 'BigQuery', 'Mage', 'Looker'],
    highlight: 'Data Engineering',
    statusColor: 'text-cyber-purple',
    statusBg: 'bg-cyber-purple/10',
    statusBorder: 'border-cyber-purple/20'
  },
  {
    title: 'Mental Health Chatbot',
    desc: 'Engineered a support chatbot utilizing TensorFlow for intent classification, backed by a Flask API and MySQL for secure interaction tracking.',
    tech: ['Python', 'Flask', 'TensorFlow', 'MySQL'],
    highlight: 'AI Integration',
    statusColor: 'text-orange-400',
    statusBg: 'bg-orange-500/10',
    statusBorder: 'border-orange-500/20'
  },
  {
    title: 'Neural Style Transfer',
    desc: 'Computer vision prototype employing VGG-19 CNN to fuse image content with artistic styles, optimized with gradient descent to minimize loss.',
    tech: ['Python', 'TensorFlow', 'PyTorch', 'NumPy'],
    highlight: 'Deep Learning',
    statusColor: 'text-cyber-cyan',
    statusBg: 'bg-cyber-cyan/10',
    statusBorder: 'border-cyber-cyan/20'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-16 flex items-end justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">PROJECTS</h2>
            <div className="h-1 w-20 bg-cyber-purple rounded-full shadow-[0_0_10px_#a855f7]" />
          </div>
          <div className="hidden md:block text-neutral-500 text-sm font-mono">2020 — 2025</div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <SpotlightCard key={i} className="h-full group">
              <div className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-cyber-cyan/50 transition-colors">
                    <Terminal size={20} className="text-cyber-cyan" />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold border ${project.statusBg} ${project.statusColor} ${project.statusBorder}`}>
                    {project.highlight}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyber-cyan transition-colors">{project.title}</h3>
                <p className="text-neutral-400 mb-8 leading-relaxed flex-grow">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 pt-8 border-t border-white/5">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono text-neutral-500 bg-white/5 px-2 py-1 rounded border border-transparent hover:border-cyber-cyan/30 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
