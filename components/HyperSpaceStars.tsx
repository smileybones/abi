
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

const InstancedMesh = 'instancedMesh' as any;
const BoxGeometry = 'boxGeometry' as any;
const MeshStandardMaterial = 'meshStandardMaterial' as any;

const COUNT = 800;
const tempObject = new THREE.Object3D();

export const HyperSpaceStars: React.FC = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const scroll = useScroll();

  const starData = useMemo(() => {
    const data = [];
    for (let i = 0; i < COUNT; i++) {
      // Create a tunnel-like distribution
      const radius = 10 + Math.random() * 60;
      const angle = Math.random() * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = (Math.random() - 0.5) * 200;
      const speed = 0.5 + Math.random() * 2;
      data.push({ x, y, z, speed });
    }
    return data;
  }, []);

  // Track an internal "motion time" that we can freeze
  const motionTimeRef = useRef(0);

  useFrame((state, delta) => {
    if (!meshRef.current || !scroll) return;

    const progress = scroll.offset;
    
    // lightspeedFactor: Starts at 0.8 for a quicker, more intense jump
    // It ramps up from 0.8 to 0.95 for the final jump.
    const lightspeedFactor = THREE.MathUtils.smoothstep(progress, 0.8, 0.95);
    
    // stopFactor: ramps from 0 to 1 between 0.96 and 1.0
    // This will freeze the motion at the very end of the scroll
    const stopFactor = THREE.MathUtils.smoothstep(progress, 0.96, 1.0);
    
    // Pause stars during blob phase (0.8 to 0.98), then resume
    const blobPhase = progress >= 0.8 && progress <= 0.98;
    const pauseFactor = blobPhase ? 0 : (1 - stopFactor);
    
    // Accumulate time based on scroll state. If stopFactor is 1, time stops advancing.
    motionTimeRef.current += delta * pauseFactor;
    const mTime = motionTimeRef.current;

    starData.forEach((star, i) => {
      // Use our controlled motion time instead of absolute clock time
      let currentZ = star.z + mTime * 0.2;
      
      // Hyperdrive boost that also freezes when motion stops - reduced intensity
      const boost = lightspeedFactor * 150 * star.speed * (mTime % 100);
      currentZ += boost;
      
      const wrappedZ = ((currentZ + 100) % 200) - 100;
      
      tempObject.position.set(star.x, star.y, wrappedZ);
      
      // Stars stretch during jump but shrink back/freeze their state when stopping - reduced stretch
      const stretchIntensity = 1 - stopFactor;
      const lengthScale = 1 + (lightspeedFactor * 30 * star.speed * stretchIntensity);
      const thickness = 0.08 * (1 - lightspeedFactor * 0.6);
      
      tempObject.scale.set(thickness, thickness, lengthScale);
      tempObject.rotation.set(0, 0, 0);
      tempObject.updateMatrix();
      meshRef.current!.setMatrixAt(i, tempObject.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <InstancedMesh ref={meshRef} args={[undefined, undefined, COUNT]}>
      <BoxGeometry args={[1, 1, 1]} />
      <MeshStandardMaterial 
        color="#ffffff" 
        emissive="#4488ff" 
        emissiveIntensity={3} 
        transparent 
        opacity={0.8}
      />
    </InstancedMesh>
  );
};
