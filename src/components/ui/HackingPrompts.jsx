import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const commands = [
  "INITIALIZING...", "ACCESS_GRANTED", "DECRYPTING_DATA", "SYSTEM_OVERRIDE", 
  "BYPASS_FIREWALL", "UPLOADING_VIRUS", "NETWORK_SCAN", "ROOT_ACCESS",
  "0x1A4F2", "0x9B3C1", "1011001", "0010110"
];

function CodeColumn({ delay, duration, xPos }) {
  const [text, setText] = useState("");

  useEffect(() => {
    // Randomly regenerate text to simulate changing code
    const interval = setInterval(() => {
        setText(commands[Math.floor(Math.random() * commands.length)]);
    }, 2000 + Math.random() * 3000);
    
    setText(commands[Math.floor(Math.random() * commands.length)]);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute top-0 text-[10px] md:text-xs font-mono text-cyber-cyan/50 whitespace-nowrap writing-vertical-lr"
      style={{ left: `${xPos}%`, writingMode: 'vertical-rl' }}
      animate={{
        y: [-100, window.innerHeight + 100],
        opacity: [0, 1, 0]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: delay
      }}
    >
      {text}
    </motion.div>
  );
}

export function HackingPrompts() {
  const [columnCount, setColumnCount] = useState(20);

  useEffect(() => {
      const updateColumns = () => {
          // Calculate needed columns based on approximate Character width (tight packing)
          const needed = Math.ceil(window.innerWidth / 12); 
          setColumnCount(needed);
      };
      
      updateColumns();
      window.addEventListener('resize', updateColumns);
      return () => window.removeEventListener('resize', updateColumns);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-60">
      {Array.from({ length: columnCount }).map((_, i) => (
        <CodeColumn 
          key={i} 
          delay={Math.random() * 5} 
          duration={5 + Math.random() * 10} 
          xPos={i * (100 / columnCount)} // Evenly distribute
        />
      ))}
    </div>
  );
}

