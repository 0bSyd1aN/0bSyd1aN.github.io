import React, { useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export const MagneticPill = ({ children, href, className = "", ...props }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    x.set((clientX - (left + width / 2)) * 0.1);
    y.set((clientY - (top + height / 2)) * 0.1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      {...props}
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2 cursor-pointer overflow-hidden ${className}`}
    >
      {children}
    </motion.a>
  );
};
