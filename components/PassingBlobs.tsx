import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

const Sphere = 'sphere' as any;
const MeshStandardMaterial = 'meshStandardMaterial' as any;
const Mesh = 'mesh' as any;
const Group = 'group' as any;

export const PassingBlobs: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const blob1Ref = useRef<THREE.Mesh>(null); // top-left
  const blob2Ref = useRef<THREE.Mesh>(null); // bottom-right
  const blob3Ref = useRef<THREE.Mesh>(null); // top-right
  const blob4Ref = useRef<THREE.Mesh>(null); // bottom-left
  const scroll = useScroll();

  useFrame(() => {
    if (!groupRef.current || !scroll) return;
    
    const progress = scroll.offset;
    
    // First pair: top-left appears at 0.8, bottom-right at 0.82
    // They pass through from z=-50 to z=50 between 0.8 and 0.88
    const blob1T = THREE.MathUtils.smoothstep(progress, 0.80, 0.88);
    const blob2T = THREE.MathUtils.smoothstep(progress, 0.82, 0.90);
    
    // Second pair: top-right appears at 0.88, bottom-left at 0.90
    // They pass through from z=-50 to z=50 between 0.88 and 0.96
    const blob3T = THREE.MathUtils.smoothstep(progress, 0.88, 0.96);
    const blob4T = THREE.MathUtils.smoothstep(progress, 0.90, 0.98);
    
    if (blob1Ref.current) {
      // Top-left: starts far back and moves forward through camera
      const x = -15;
      const y = 10;
      const z = THREE.MathUtils.lerp(-50, 50, blob1T);
      blob1Ref.current.position.set(x, y, z);
      blob1Ref.current.visible = progress >= 0.80 && progress <= 0.90;
    }
    
    if (blob2Ref.current) {
      // Bottom-right: starts far back and moves forward through camera
      const x = 15;
      const y = -10;
      const z = THREE.MathUtils.lerp(-50, 50, blob2T);
      blob2Ref.current.position.set(x, y, z);
      blob2Ref.current.visible = progress >= 0.82 && progress <= 0.92;
    }
    
    if (blob3Ref.current) {
      // Top-right: starts far back and moves forward through camera
      const x = 15;
      const y = 10;
      const z = THREE.MathUtils.lerp(-50, 50, blob3T);
      blob3Ref.current.position.set(x, y, z);
      blob3Ref.current.visible = progress >= 0.88 && progress <= 0.98;
    }
    
    if (blob4Ref.current) {
      // Bottom-left: starts far back and moves forward through camera
      const x = -15;
      const y = -10;
      const z = THREE.MathUtils.lerp(-50, 50, blob4T);
      blob4Ref.current.position.set(x, y, z);
      blob4Ref.current.visible = progress >= 0.90 && progress <= 1.0;
    }
  });

  return (
    <Group ref={groupRef}>
      {/* Blob 1: Top-left */}
      <Mesh ref={blob1Ref}>
        <Sphere args={[3, 32, 32]} />
        <MeshStandardMaterial 
          color="#ff00ff" 
          emissive="#ff00ff" 
          emissiveIntensity={2}
          transparent
          opacity={0.7}
        />
      </Mesh>
      
      {/* Blob 2: Bottom-right */}
      <Mesh ref={blob2Ref}>
        <Sphere args={[3, 32, 32]} />
        <MeshStandardMaterial 
          color="#00ffff" 
          emissive="#00ffff" 
          emissiveIntensity={2}
          transparent
          opacity={0.7}
        />
      </Mesh>
      
      {/* Blob 3: Top-right */}
      <Mesh ref={blob3Ref}>
        <Sphere args={[3, 32, 32]} />
        <MeshStandardMaterial 
          color="#ffff00" 
          emissive="#ffff00" 
          emissiveIntensity={2}
          transparent
          opacity={0.7}
        />
      </Mesh>
      
      {/* Blob 4: Bottom-left */}
      <Mesh ref={blob4Ref}>
        <Sphere args={[3, 32, 32]} />
        <MeshStandardMaterial 
          color="#ff8800" 
          emissive="#ff8800" 
          emissiveIntensity={2}
          transparent
          opacity={0.7}
        />
      </Mesh>
    </Group>
  );
};
