/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);

    divRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
    divRef.current.style.setProperty("--mouse-y", `${mouseY}px`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      drag
      dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
      dragElastic={0.1}
      whileDrag={{ scale: 1.02, zIndex: 50 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative rounded-2xl border border-neutral-800/50 bg-neutral-950/40 overflow-hidden group perspective-1000 cursor-grab active:cursor-grabbing backdrop-blur-md shadow-2xl shadow-black/50 transition-colors duration-500 hover:border-neutral-700/50 hover:bg-neutral-900/50",
        className
      )}
    >
      {/* Inner top highlight for that glass bevel effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.05), transparent 40%)`,
        }}
      />
      <div 
        className="relative h-full"
        style={{ transform: "translateZ(30px)" }}
      >{children}</div>
    </motion.div>
  );
};
