import React, { useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code, Database, Brain, Zap, Award, Play } from 'lucide-react';
import * as THREE from 'three';

export default function Portfolio() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, 300);
    renderer.setClearColor(0x000000, 0.1);
    mount.appendChild(renderer.domElement);
    
    camera.position.z = 5;

    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshPhongMaterial({ 
      color: 0x00ff88,
      wireframe: false,
      emissive: 0x00ff88,
      emissiveIntensity: 0.3
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x00ffff }));
    cube.add(line);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.008;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (mount) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, 300);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mount && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  const skills = {
    programming: ['Python', 'C++', 'JavaScript', 'Java'],
    webDev: ['React', 'Node.js', 'Express.js', 'HTML/CSS'],
    data: ['SQL', 'SparkSQL', 'MongoDB', 'PostgreSQL'],
    tools: ['BigQuery', 'Looker Studio', 'GCP', 'AWS']
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      desc: 'Full-stack e-commerce solution with payment integration',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      highlight: 'Secure payment processing & responsive UI'
    },
    {
      title: 'Neural Style Transfer',
      desc: 'Deep learning model for artistic image transformation',
      tech: ['Python', 'CNN', 'VGG-19', 'TensorFlow'],
      highlight: 'VGG-19 architecture with custom loss functions'
    },
    {
      title: 'Uber Data Analytics',
      desc: 'End-to-end analytics pipeline with interactive dashboards',
      tech: ['Python', 'BigQuery', 'GCP', 'Looker Studio'],
      highlight: 'NYC TLC data analysis with trend insights'
    },
    {
      title: 'Attendance Management System',
      desc: 'SQL-optimized system for student record management',
      tech: ['Python', 'SQL', 'Indexing', 'Triggers'],
      highlight: '30% query performance improvement'
    }
  ];

  const experience = [
    {
      company: 'STRINGLAB TECHNOLOGY SOLUTIONS',
      position: 'Full Stack Developer Intern',
      duration: 'Oct 2025 - Mar 2026',
      dept: 'Development & Testing',
      responsibilities: [
        'Develop and test full-stack applications',
        'Collaborate on project implementation',
        'Participate in code reviews',
        'Learn and implement new technologies'
      ]
    }
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            SUJAN RV
          </div>
          <div className="flex gap-8 text-sm">
            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div ref={mountRef} className="absolute inset-0 opacity-50" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="mb-8 animate-pulse">
            <div className="inline-block px-6 py-2 border border-cyan-400 rounded-full text-cyan-400 text-sm mb-6">
              Welcome to My Digital Space
            </div>
          </div>
          
          <h1 className="text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Building the Future
            </span>
            <br />with Code & Data
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer | Data Engineer | AI/ML Enthusiast
            <br />
            Crafting innovative solutions through cutting-edge technology
          </p>

          <div className="flex gap-6 justify-center mb-16">
            <button className="px-8 py-3 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-all hover:scale-105 flex items-center gap-2">
              <Play size={20} /> Explore My Work
            </button>
            <button className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/10 transition-all">
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center gap-6 text-gray-400">
            <a href="#" className="hover:text-cyan-400 transition-colors"><Github size={24} /></a>
            <a href="#" className="hover:text-cyan-400 transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-cyan-400 transition-colors"><Mail size={24} /></a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-cyan-400">
          <ChevronDown size={32} />
        </div>
      </section>

      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">About Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a Computer Science graduate from RV College of Engineering with a passion for building scalable solutions. My expertise spans full-stack development, data engineering, and AI/ML applications.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently interning as a Full Stack Developer at STRINGLAB, I'm working on real-world applications while continuously learning emerging technologies.
              </p>
              <div className="flex gap-4 pt-6">
                <div className="flex-1 p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/30">
                  <div className="text-2xl font-bold text-cyan-400">8.17</div>
                  <div className="text-sm text-gray-400">B.E. GPA</div>
                </div>
                <div className="flex-1 p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/30">
                  <div className="text-2xl font-bold text-cyan-400">4+</div>
                  <div className="text-sm text-gray-400">Major Projects</div>
                </div>
                <div className="flex-1 p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/30">
                  <div className="text-2xl font-bold text-cyan-400">5</div>
                  <div className="text-sm text-gray-400">Certifications</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code, label: 'Full Stack Dev' },
                { icon: Database, label: 'Data Engineer' },
                { icon: Brain, label: 'AI/ML' },
                { icon: Zap, label: 'Cloud Tech' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/30 text-center hover:border-cyan-500/60 transition-all hover:scale-105">
                  <item.icon className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                  <div className="text-sm font-semibold">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-black to-blue-950/20 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Technical Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="p-6 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-lg border border-cyan-500/20 hover:border-cyan-500/60 transition-all">
                <h3 className="text-lg font-bold text-cyan-400 mb-4 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h3>
                <div className="space-y-2">
                  {items.map(skill => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Featured Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="group p-6 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-lg border border-cyan-500/20 hover:border-cyan-500/60 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.desc}</p>
                <div className="mb-4 p-3 bg-cyan-500/10 rounded border border-cyan-500/30">
                  <p className="text-sm text-cyan-300">{project.highlight}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/40">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-32 px-6 bg-gradient-to-b from-black to-blue-950/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Work Experience</span>
          </h2>

          {experience.map((exp, i) => (
            <div key={i} className="p-8 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-lg border border-cyan-500/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400">{exp.position}</h3>
                  <p className="text-lg text-blue-300">{exp.company}</p>
                  <p className="text-sm text-gray-400">{exp.dept}</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p className="text-cyan-400 font-semibold">{exp.duration}</p>
                </div>
              </div>
              <div className="space-y-2">
                {exp.responsibilities.map((resp, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">{resp}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Certifications</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Java Certification', org: 'Infosys Springboard', date: '08/2022' },
              { name: 'AI Primer', org: 'Infosys Springboard', date: '06/2023' },
              { name: 'Joy of Computing', org: 'NPTEL Online', date: '01-04/2023' },
              { name: 'AI Tools Workshop', org: 'be10x', date: '09/2023' },
              { name: 'AWS Cloud Computing', org: 'Cloudplus AI', date: '10-12/2023' }
            ].map((cert, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-lg border border-cyan-500/20 flex items-center gap-4">
                <Award className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-cyan-400">{cert.name}</p>
                  <p className="text-sm text-gray-400">{cert.org}</p>
                  <p className="text-xs text-gray-500">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-gradient-to-b from-black to-blue-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Let's Connect</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">Open to opportunities, collaborations, and interesting conversations</p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
            <a href="mailto:sujanrv99@gmail.com" className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-all flex items-center gap-2 justify-center">
              <Mail size={20} /> Email Me
            </a>
            <a href="https://github.com/0bSyd1aN" className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/10 transition-all flex items-center gap-2 justify-center">
              <Github size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/sujan-r-v-2501b4292/" className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/10 transition-all flex items-center gap-2 justify-center">
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>

          <div className="space-y-4 text-gray-400">
            <p>📍 Srinivaspur, Kolar - 563135, Karnataka</p>
            <p>📞 +91-9535993269</p>
            <p className="pt-6 border-t border-cyan-500/20">
              Designed & Built with React, Three.js & Tailwind CSS
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}