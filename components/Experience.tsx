
import React, { Suspense, useRef } from 'react';
import { ScrollControls, Environment, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { VoxelParticles } from './VoxelParticles';
import { FloatingPapers } from './FloatingPapers';
import { HyperSpaceStars } from './HyperSpaceStars';
import { PassingBlobs } from './PassingBlobs';
import { Overlay } from './Overlay';

const Color = 'color' as any;
const AmbientLight = 'ambientLight' as any;
const SpotLight = 'spotLight' as any;
const PointLight = 'pointLight' as any;
const Group = 'group' as any;

/**
 * Handles the camera movement to create the "flying through" effect.
 */
const CameraHandler = () => {
  const scroll = useScroll();
  const lastOffset = useRef(0);
  
  useFrame((state) => {
    if (!scroll) return;
    
    const offset = scroll.offset;
    const width = state.size.width;
    
    // We want the camera to dive forward as we reach the logo
    // Camera starts at Z=23 (phones), Z=18 (tablets), or Z=15 (desktop)
    // Between 0.8 and 1.0 scroll, we dive through to Z=-25
    const diveT = THREE.MathUtils.smoothstep(offset, 0.8, 1.0);
    const startZ = width < 600 ? 23 : width < 1024 ? 18 : 15;
    const cameraZ = THREE.MathUtils.lerp(startZ, -25, diveT);
    
    state.camera.position.z = cameraZ;
    
    // Add a slight tilt/zoom effect
    const startFOV = width < 600 ? 58 : width < 1024 ? 50 : 35;
    state.camera.fov = THREE.MathUtils.lerp(startFOV, 65, diveT);
    state.camera.updateProjectionMatrix();

    // Subtle parallax shift based on mouse position to keep it interactive
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.mouse.x * 2, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.mouse.y * 2, 0.05);
    
    // Look slightly ahead
    state.camera.lookAt(0, 0, -50);
  });

  return null;
};

export const Experience: React.FC = () => {
  return (
    <>
      <Color attach="background" args={['#050505']} />
      
      <AmbientLight intensity={0.4} />
      <SpotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
      <PointLight position={[-10, -10, -10]} intensity={1} />
      
      <Suspense fallback={null}>
        <Environment preset="city" />
      </Suspense>

      {/* No damping for instant scroll response */}
      <ScrollControls pages={58} damping={0}>
        <CameraHandler />
        
        <Suspense fallback={null}>
            <HyperSpaceStars />
            <PassingBlobs />
        </Suspense>

        <Group position={[0, 0, 0]}>
            <Suspense fallback={null}>
                <VoxelParticles />
                <FloatingPapers />
            </Suspense>
        </Group>
        <Overlay />
      </ScrollControls>
    </>
  );
};
