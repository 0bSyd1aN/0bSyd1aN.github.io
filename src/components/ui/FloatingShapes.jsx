import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function FloatingShape({ className, delay = 0, xFactor = 1, yFactor = 1, rotateFactor = 1, mouseX, mouseY, type = 'hexagon' }) {
  const springConfig = { damping: 25, stiffness: 150 };
  
  const moveX = useSpring(useMotionValue(0), springConfig);
  const moveY = useSpring(useMotionValue(0), springConfig);

  useEffect(() => {
    const unsubscribeX = mouseX.on("change", (latest) => {
        const xOffset = (latest - window.innerWidth / 2) * 0.05 * xFactor;
        moveX.set(xOffset);
    });
    const unsubscribeY = mouseY.on("change", (latest) => {
        const yOffset = (latest - window.innerHeight / 2) * 0.05 * yFactor;
        moveY.set(yOffset);
    });

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [mouseX, mouseY, xFactor, yFactor, moveX, moveY]);

  // Shape rending logic
  const renderShape = () => {
      if (type === 'reticle') {
          return (
              <div className={`relative w-full h-full border border-cyber-cyan/30 flex items-center justify-center ${className}`}>
                  {/* Corners */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-cyan" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-cyan" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-cyan" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-cyan" />
                  {/* Center Target */}
                  <div className="w-2 h-2 bg-cyber-cyan/50 rounded-full" />
                  <div className="absolute w-[80%] h-[1px] bg-cyber-cyan/20" />
                  <div className="absolute h-[80%] w-[1px] bg-cyber-cyan/20" />
              </div>
          );
      } else if (type === 'circuit') {
           // Simple SVG Circuit Trace
          return (
              <svg className={`w-full h-full ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M10 90 L10 50 L40 20 L90 20" stroke="rgba(0, 255, 255, 0.4)" strokeWidth="2" />
                   <circle cx="10" cy="90" r="3" fill="rgba(0, 255, 255, 0.6)" />
                   <circle cx="90" cy="20" r="3" fill="rgba(0, 255, 255, 0.6)" />
                   <path d="M20 90 L20 60 L45 35" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" /> 
              </svg>
          );
      }
      return <div className={className} />;
  };

  return (
    <motion.div
      className={`absolute ${type === 'circuit' ? '' : ''}`} 
      style={{
        x: moveX,
        y: moveY,
      }}
      animate={{
        x: [0, 30 * xFactor, -30 * xFactor, 0], // Increased range
        y: [0, -30 * yFactor, 20 * yFactor, 0], // Increased range
        rotate: type === 'reticle' ? [0, 360] : [0, 10, -10, 0], // Circuits now rock/sway
        scale: [1, 1.1, 0.95, 1], // "Breathing" effect for everything
      }}
      transition={{
        duration: type === 'reticle' ? 20 : 15 + Math.random() * 10, // Faster
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
    >
        {renderShape()}
    </motion.div>
  );
}

export function FloatingShapes() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Reticle Top Left */}
      <div className="absolute top-[15%] left-[5%] w-[100px] h-[100px]">
        <FloatingShape 
            type="reticle"
            mouseX={mouseX} mouseY={mouseY}
            xFactor={0.1} yFactor={0.1}
            className="opacity-50"
        />
      </div>

      {/* Circuit Right */}
      <div className="absolute top-[30%] right-[10%] w-[150px] h-[150px]">
        <FloatingShape 
            type="circuit"
            mouseX={mouseX} mouseY={mouseY}
            xFactor={-0.1} yFactor={0.1}
            className="opacity-60"
        />
      </div>

       {/* Large Circuit Bottom */}
       <div className="absolute bottom-[10%] left-[20%] w-[300px] h-[300px]">
        <FloatingShape 
            type="circuit"
            mouseX={mouseX} mouseY={mouseY}
            xFactor={0.1} yFactor={-0.1}
            className="opacity-30"
        />
      </div>
      
      {/* Tiny Reticle Center */}
      <div className="absolute top-[60%] left-[60%] w-[60px] h-[60px]">
        <FloatingShape 
            type="reticle"
            mouseX={mouseX} mouseY={mouseY}
            xFactor={0.05} yFactor={0.05}
            className="opacity-40"
        />
      </div>
    </div>
  );
}
