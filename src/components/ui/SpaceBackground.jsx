import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const RotatingStars = () => {
  const groupRef = useRef();
  const { viewport } = useThree();

  useFrame((state) => {
    if (groupRef.current) {
      // Slow, majestic endless rotation
      const time = state.clock.getElapsedTime();
      groupRef.current.rotation.y = time * 0.02;
      groupRef.current.rotation.x = time * 0.01;

      // 11/10 Cursor Parallax Effect - smooth and subtle
      const targetX = (state.pointer.x * viewport.width) * 0.03;
      const targetY = (state.pointer.y * viewport.height) * 0.03;

      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      {/* 
        Small, bright, realistic stars.
        factor=3 keeps them tiny and sharp. 
        count=10000 ensures a dense, beautiful galaxy.
      */}
      <Stars 
        radius={100} 
        depth={50} 
        count={10000} 
        factor={3} 
        saturation={0} 
        fade={true} 
        speed={1} 
      />
    </group>
  );
};

export const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-auto bg-[#000000]">
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        eventSource={document.body}
        eventPrefix="client"
      >
        <RotatingStars />
      </Canvas>
    </div>
  );
};
