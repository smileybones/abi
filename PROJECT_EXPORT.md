# ABI Voxel Reveal - Complete Project Code

## Project Structure
```
abi-voxel-reveal/
├── App.tsx
├── index.tsx
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── types.ts
├── components/
│   ├── Experience.tsx
│   ├── Overlay.tsx
│   ├── VoxelParticles.tsx
│   ├── FloatingPapers.tsx
│   ├── HyperSpaceStars.tsx
│   └── PassingBlobs.tsx
└── utils/
    └── math.ts
```

---

## package.json
```json
{
  "name": "abi-voxel-reveal",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@react-three/drei": "^9.88.0",
    "@react-three/fiber": "^8.15.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "three": "^0.158.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.37",
    "@types/react-dom": "^18.2.15",
    "@types/three": "^0.158.0",
    "@vitejs/plugin-react": "^4.2.0",
    "typescript": "^5.2.2",
    "vite": "^5.0.0"
  }
}
```

---

## App.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';

const App: React.FC = () => {
  const width = window.innerWidth;
  // Optimized for all phones (< 600px) and tablets (600-1024px)
  const cameraZ = width < 600 ? 23 : width < 1024 ? 18 : 15;
  const cameraFov = width < 600 ? 58 : width < 1024 ? 50 : 35;
  
  const [isAtSteps, setIsAtSteps] = useState(false);
  const [isAtWhyABI, setIsAtWhyABI] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Find the drei scroll container
      let scrollContainer = document.querySelector('div[style*="overflow-y"]') as HTMLElement;
      
      if (!scrollContainer) {
        // Fallback: find all divs and look for one with scrollable content
        const allDivs = document.querySelectorAll('div');
        for (const div of allDivs) {
          const style = window.getComputedStyle(div);
          if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
            scrollContainer = div as HTMLElement;
            break;
          }
        }
      }
      
      if (!scrollContainer) return;
      
      const scrollPercent = scrollContainer.scrollTop / (scrollContainer.scrollHeight - scrollContainer.clientHeight);
      // Steps are at pages 46-49, which is around scroll positions 0.92 to 0.98
      setIsAtSteps(scrollPercent >= 0.90 && scrollPercent <= 0.98);
      // Why ABI section is at page 50, which is around scroll position 0.98 to 1.0
      setIsAtWhyABI(scrollPercent >= 0.98);
    };
    
    // Use a small delay to ensure the scroll container is created
    const timeout = setTimeout(() => {
      let scrollContainer = document.querySelector('div[style*="overflow-y"]') as HTMLElement;
      
      if (!scrollContainer) {
        // Fallback: find all divs and look for one with scrollable content
        const allDivs = document.querySelectorAll('div');
        for (const div of allDivs) {
          const style = window.getComputedStyle(div);
          if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
            scrollContainer = div as HTMLElement;
            break;
          }
        }
      }
      
      if (scrollContainer) {
        console.log('Found scroll container:', scrollContainer);
        scrollContainer.addEventListener('scroll', handleScroll);
      }
    }, 500);
    
    return () => {
      clearTimeout(timeout);
      let scrollContainer = document.querySelector('div[style*="overflow-y"]') as HTMLElement;
      
      if (!scrollContainer) {
        const allDivs = document.querySelectorAll('div');
        for (const div of allDivs) {
          const style = window.getComputedStyle(div);
          if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
            scrollContainer = div as HTMLElement;
            break;
          }
        }
      }
      
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  
  const scrollToSteps = () => {
    console.log('Button clicked - searching for scroll container...');
    
    // Try multiple selectors to find the scroll container
    let scrollContainer = document.querySelector('div[style*="overflow-y"]') as HTMLElement;
    
    if (!scrollContainer) {
      // Fallback: find all divs and look for one with scrollable content
      const allDivs = document.querySelectorAll('div');
      console.log('Total divs found:', allDivs.length);
      
      for (const div of allDivs) {
        const style = window.getComputedStyle(div);
        if ((style.overflowY === 'auto' || style.overflowY === 'scroll') && div.scrollHeight > div.clientHeight) {
          scrollContainer = div as HTMLElement;
          console.log('Found scrollable container:', div);
          break;
        }
      }
    }
    
    if (!scrollContainer) {
      console.log('Scroll container not found - trying window scroll');
      // Last resort: try window scroll
      const viewportHeight = window.innerHeight;
      const targetPage = 44;
      window.scrollTo({ top: targetPage * viewportHeight, behavior: 'smooth' });
      return;
    }
    
    console.log('Scrolling to steps', {
      scrollContainer,
      scrollHeight: scrollContainer.scrollHeight,
      clientHeight: scrollContainer.clientHeight,
      currentScrollTop: scrollContainer.scrollTop
    });
    
    // Step 1 is at page 46 out of 50 pages (0.92)
    const targetScroll = 0.92 * (scrollContainer.scrollHeight - scrollContainer.clientHeight);
    console.log('Target scroll position:', targetScroll);
    scrollContainer.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };
  
  const scrollToWhyABI = () => {
    console.log('Why ABI button clicked - searching for scroll container...');
    
    // Try multiple selectors to find the scroll container
    let scrollContainer = document.querySelector('div[style*="overflow-y"]') as HTMLElement;
    
    if (!scrollContainer) {
      // Fallback: find all divs and look for one with scrollable content
      const allDivs = document.querySelectorAll('div');
      for (const div of allDivs) {
        const style = window.getComputedStyle(div);
        if ((style.overflowY === 'auto' || style.overflowY === 'scroll') && div.scrollHeight > div.clientHeight) {
          scrollContainer = div as HTMLElement;
          console.log('Found scrollable container:', div);
          break;
        }
      }
    }
    
    if (!scrollContainer) {
      console.log('Scroll container not found - trying window scroll');
      // Last resort: try window scroll
      const viewportHeight = window.innerHeight;
      const targetPage = 48;
      window.scrollTo({ top: targetPage * viewportHeight, behavior: 'smooth' });
      return;
    }
    
    console.log('Scrolling to Why ABI', {
      scrollContainer,
      scrollHeight: scrollContainer.scrollHeight,
      clientHeight: scrollContainer.clientHeight,
      currentScrollTop: scrollContainer.scrollTop
    });
    
    // Why ABI section is at page 50 out of 50 pages (1.0)
    const targetScroll = 1.0 * (scrollContainer.scrollHeight - scrollContainer.clientHeight);
    console.log('Target scroll position:', targetScroll);
    scrollContainer.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };
  
  return (
    <div className="w-full h-screen bg-black relative">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, cameraZ], fov: cameraFov }}
        gl={{ antialias: true }}
      >
        <Experience />
      </Canvas>
      
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 pointer-events-auto flex gap-2 sm:gap-3">
        <button 
          onClick={scrollToSteps}
          className={`px-4 py-2 sm:px-6 backdrop-blur-md border rounded-full text-[9px] sm:text-[10px] text-white font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl ${
            isAtSteps 
              ? 'bg-cyan-400/30 border-cyan-400 shadow-cyan-400/50' 
              : 'bg-white/5 border-white/20 hover:bg-cyan-400/20 hover:border-cyan-400'
          }`}
        >
          What we do
        </button>
        <button 
          onClick={scrollToWhyABI}
          className={`px-4 py-2 sm:px-6 backdrop-blur-md border rounded-full text-[9px] sm:text-[10px] text-white font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl ${
            isAtWhyABI 
              ? 'bg-cyan-400/30 border-cyan-400 shadow-cyan-400/50' 
              : 'bg-white/5 border-white/20 hover:bg-cyan-400/20 hover:border-cyan-400'
          }`}
        >
          Why ABI
        </button>
        <button className="px-4 py-2 sm:px-6 bg-white/5 backdrop-blur-md border border-white/20 rounded-full text-[9px] sm:text-[10px] text-white font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase transition-all duration-500 hover:bg-blue-600/30 hover:border-blue-400 hover:scale-105 active:scale-95 shadow-2xl">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default App;
```

---

## components/Experience.tsx
```typescript
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
      <ScrollControls pages={50} damping={0}>
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
```

---

## components/Overlay.tsx
(Due to length, showing first 100 lines - file contains text overlays for all scroll sections including Steps 1-4 and Why ABI comparison)

```typescript
import React from 'react';
import { Scroll } from '@react-three/drei';

export const Overlay: React.FC = () => {
  return (
    <Scroll html>
      {/* Section 1: Introduction */}
      <div className="relative w-screen h-screen flex flex-col justify-center items-center text-white p-6 md:p-10 pointer-events-none">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 opacity-90 text-center uppercase">
          ABI <br/> <span className="text-cyan-400">Automated Business Intelligence</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl opacity-60 max-w-md text-center px-4">
          Custom AI automations for healthcare operations. Done-for-you solutions, not DIY software.
        </p>
        <div className="absolute bottom-10 flex flex-col items-center animate-bounce opacity-50">
            <p className="text-xs font-bold tracking-widest uppercase mb-2">Scroll Down</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
        </div>
      </div>

      {/* Section 2: Transformation */}
      <div className="w-screen h-[100vh] flex items-center justify-start px-6 sm:px-12 md:px-20 text-white pointer-events-none">
          <div className="max-w-lg text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-cyan-400">TRANSFORMATION</h2>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed opacity-80">
                Turn spreadsheets, reports, and routine tasks <br/>
                into quiet, reliable automations.
            </p>
          </div>
      </div>

      {/* Section 2.5: Healthcare Operations */}
      <div className="w-screen h-[100vh] flex items-center justify-end px-6 sm:px-12 md:px-20 text-white pointer-events-none">
          <div className="max-w-lg text-right">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-cyan-400">HEALTHCARE OPERATIONS</h2>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed opacity-80">
                Tailored AI workflows for healthcare. <br/>
                Built, tested, and maintained for you.
            </p>
          </div>
      </div>

      {/* Multiple spacer sections... */}
      {/* Step 1-4 sections with "What we do" header... */}
      {/* Why ABI comparison section... */}
    </Scroll>
  );
};
```

---

## types.ts
```typescript
export const CONSTANTS = {
  VOXEL_SIZE: 0.15,
  GRID_SIZE: 20,
};

export const LOGO_LIST = [
  { name: 'Outlook', color: '#0078d4' },
  { name: 'Excel', color: '#217346' },
  { name: 'Adobe', color: '#ff0000' },
  { name: 'OpenAI', color: '#10a37f' },
  { name: 'Gmail', color: '#ea4335' },
  { name: 'Salesforce', color: '#00a1e0' },
  { name: 'ClickUp', color: '#7b68ee' },
  { name: 'Intuit', color: '#2ca01c' },
  { name: 'Oracle', color: '#f80000' },
  { name: 'Slack', color: '#4a154b' },
  { name: 'Zoom', color: '#2d8cff' },
  { name: 'Asana', color: '#f06595' },
] as const;
```

---

## Project Description

This is a React Three Fiber project featuring:

1. **3D Voxel Logo Animation**: Logo that assembles from particles
2. **Floating Brand Papers**: Logos from healthcare tech stack that explode and fly away
3. **Hyperspace Stars**: Star field effect during scroll
4. **Passing Blobs**: Colorful spheres that pass through the camera
5. **Smart Navigation**: Buttons that scroll to specific sections and highlight when viewing those sections
6. **Responsive Design**: Works on mobile, tablet, and desktop

Key Technologies:
- React + TypeScript
- Three.js via @react-three/fiber
- @react-three/drei for helpers
- Vite for build tooling
- Tailwind CSS for styling

To run:
```bash
npm install
npm run dev
```
