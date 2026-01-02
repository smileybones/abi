
import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { generateSpherePoints, generateTextPoints, randomVector } from '../utils/math';
import { CONSTANTS } from '../types';

const InstancedMesh = 'instancedMesh' as any;
const BoxGeometry = 'boxGeometry' as any;
const MeshStandardMaterial = 'meshStandardMaterial' as any;

const tempObject = new THREE.Object3D();

export const VoxelParticles: React.FC = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const scroll = useScroll();
  
  const count = CONSTANTS.VOXEL_COUNT;

  const { spherePositions, textPositions, randomOffsets } = useMemo(() => {
    // Generate sphere for start
    const sphere = generateSpherePoints(count, 1.5);
    // Generate text for end
    const text = generateTextPoints("ABI", 10, count);
    const randoms = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
        const r = randomVector(20); // Wider explosion
        randoms[i * 3] = r.x;
        randoms[i * 3 + 1] = r.y;
        randoms[i * 3 + 2] = r.z;
    }

    return { spherePositions: sphere, textPositions: text, randomOffsets: randoms };
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current || !scroll) return;
    
    const progress = scroll.offset;
    const time = state.clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const initial = spherePositions[i];
      const target = textPositions[i];
      const explosionDir = new THREE.Vector3(
        randomOffsets[i * 3],
        randomOffsets[i * 3 + 1],
        randomOffsets[i * 3 + 2]
      );

      let x = initial.x;
      let y = initial.y;
      let z = initial.z;

      // Subtle breathing while idle at top
      if (progress < 0.05) {
         const float = Math.sin(time * 2 + i) * 0.05;
         x += float; y += float; z += float;
      }

      const explodedX = initial.x + explosionDir.x;
      const explodedY = initial.y + explosionDir.y;
      const explodedZ = initial.z + explosionDir.z;

      let currentX, currentY, currentZ;

      if (progress < 0.3) {
          // PHASE 1: EXPLODE (Very fast onset)
          const t = THREE.MathUtils.smoothstep(progress, 0.0, 0.3);
          currentX = THREE.MathUtils.lerp(x, explodedX, t);
          currentY = THREE.MathUtils.lerp(y, explodedY, t);
          currentZ = THREE.MathUtils.lerp(z, explodedZ, t);
      } else {
          // PHASE 2: RE-ASSEMBLE (0.5 -> 0.79) - Forms logo right before hyperspace jump at 0.8
          const t = THREE.MathUtils.smoothstep(progress, 0.5, 0.79);
          currentX = THREE.MathUtils.lerp(explodedX, target.x, t);
          currentY = THREE.MathUtils.lerp(explodedY, target.y, t);
          currentZ = THREE.MathUtils.lerp(explodedZ, target.z, t);
      }
      
      // Keep voxels relatively stable while camera flies through
      // But add a "shimmer" effect during lightspeed
      if (progress > 0.8) {
          const shimmer = Math.sin(time * 10 + i) * 0.02 * THREE.MathUtils.smoothstep(progress, 0.8, 0.9);
          currentX += shimmer;
          currentY += shimmer;
      }

      tempObject.position.set(currentX, currentY, currentZ);
      
      // Orient voxels forward as logo forms - shortened spin duration
      const rotationT = THREE.MathUtils.smoothstep(progress, 0.3, 0.45);
      const rotationSpeed = (1 - rotationT) * (time + i * 0.1);
      tempObject.rotation.set(rotationSpeed, rotationSpeed, 0);

      const scale = 0.08;
      tempObject.scale.set(scale, scale, scale);
      
      tempObject.updateMatrix();
      meshRef.current.setMatrixAt(i, tempObject.matrix);
    }
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <InstancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <BoxGeometry args={[1, 1, 1]} />
      <MeshStandardMaterial 
        color={CONSTANTS.VOXEL_COLOR} 
        roughness={0.2} 
        metalness={0.8} 
        emissive={CONSTANTS.VOXEL_COLOR}
        emissiveIntensity={0.5}
      />
    </InstancedMesh>
  );
};
