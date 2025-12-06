import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';

export function ParticleField() {
  const ref = useRef();
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta * 0.05;
    }
  });
  return (
    <group ref={ref}>
      <Sparkles count={200} scale={[20, 20, 20]} size={2} speed={0.4} opacity={0.5} color="#00ffff" />
      <Stars radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}
