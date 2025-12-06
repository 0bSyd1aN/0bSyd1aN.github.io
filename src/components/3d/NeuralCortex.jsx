import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Icosahedron } from '@react-three/drei';

export function NeuralCortex() {
  const meshRef = useRef();
  const materialRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.1;
      meshRef.current.rotation.y = t * 0.15;
    }
    if (materialRef.current) {
      materialRef.current.distort = 0.4 + Math.sin(t * 0.5) * 0.2;
      materialRef.current.color.setHSL((t * 0.05) % 1, 0.5, 0.5);
    }
  });

  return (
    <Icosahedron args={[1, 15]} ref={meshRef} scale={[2.5, 2.5, 2.5]}>
      <MeshDistortMaterial
        ref={materialRef}
        color="#ffffff"
        envMapIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0}
        metalness={0.1}
        roughness={0.1}
        distort={0.4}
        speed={2}
      />
    </Icosahedron>
  );
}
