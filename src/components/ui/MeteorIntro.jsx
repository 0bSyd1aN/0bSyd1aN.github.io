/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const MeteorIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState('falling'); // falling -> exploding -> done

  useEffect(() => {
    // Meteor falls for 1s
    const fallTimer = setTimeout(() => {
      setPhase('exploding');
    }, 1000);

    // Completely unmount the component after it finishes fading
    const explodeTimer = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(fallTimer);
      clearTimeout(explodeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div 
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden pointer-events-none"
          initial={{ backgroundColor: 'rgba(0,0,0,1)' }}
          animate={{ backgroundColor: phase === 'exploding' ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,1)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          {/* Massive Realistic Accelerated Meteorite */}
          {phase === 'falling' && (
            <motion.div
              initial={{ x: window.innerWidth / 2 + 1000, y: -window.innerHeight / 2 - 1000 }}
              animate={{ x: 0, y: 0 }}
              transition={{ duration: 1, ease: "easeIn" }}
              className="absolute"
            >
              {/* Massive Meteor Head */}
              <div className="relative w-8 h-8 bg-[#ffffff] rounded-full shadow-[0_0_60px_30px_#ffffff,0_0_120px_60px_#f97316,0_0_200px_100px_#ea580c]">
                {/* Massive Intense Fire/Plasma Wake */}
                <div 
                  className="absolute top-1/2 left-1/2 h-[8px] bg-gradient-to-r from-transparent via-[#f97316] to-[#ffffff] transform -translate-y-1/2 origin-left rotate-[-135deg]" 
                  style={{ width: '1500px', left: '50%', top: '50%', filter: 'blur(2px)' }}
                />
                {/* Secondary Outer Wake for extra volume */}
                <div 
                  className="absolute top-1/2 left-1/2 h-[20px] bg-gradient-to-r from-transparent via-[#ea580c] to-transparent transform -translate-y-1/2 origin-left rotate-[-135deg] opacity-60" 
                  style={{ width: '1000px', left: '50%', top: '50%', filter: 'blur(8px)' }}
                />
              </div>
            </motion.div>
          )}

          {/* Huge Cinematic Explosion */}
          {phase === 'exploding' && (
            <>
              {/* Blinding screen-wide core flash that slowly fades directly into the stars */}
              <motion.div
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: [0, 50, 150], opacity: [1, 1, 0] }}
                transition={{ duration: 2, ease: "easeOut", times: [0, 0.1, 1] }}
                className="absolute w-16 h-16 bg-[#ffffff] rounded-full shadow-[0_0_300px_200px_#ffffff]"
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
