
import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { CONSTANTS, LOGO_LIST } from '../types';

const Group = 'group' as any;
const InstancedMesh = 'instancedMesh' as any;
const BoxGeometry = 'boxGeometry' as any;
const MeshStandardMaterial = 'meshStandardMaterial' as any;

const tempObject = new THREE.Object3D();
const textureLoader = new THREE.TextureLoader();

/**
 * Logo URLs from CDN for real brand icons
 */
const LOGO_URLS:{[key:string]:string}={
  'Outlook':'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftoutlook.svg',
  'Excel':'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftexcel.svg',
  'Adobe':'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobe.svg',
  'OpenAI':'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg',
  'Gmail':'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gmail.svg',
  'Salesforce':'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/salesforce.svg',
  'ClickUp':'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/clickup.svg',
  'Intuit':'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/intuit.svg',
  'Oracle':'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/oracle.svg',
  'Slack':'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/slack.svg',
  'Zoom':'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zoom.svg',
  'Asana':'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/asana.svg',
  'PointClickCare':'https://unavatar.io/pointclickcare.com',
  'MatrixCare':'https://unavatar.io/matrixcare.com',
  'WellSky':'https://unavatar.io/wellsky.com',
  'Netsmart':'https://unavatar.io/netsmart.com',
  'Cerner':'https://unavatar.io/cerner.com'
};

/**
 * Creates a texture with the brand icon on a colored background
 */
const createIconTexture = (logo: typeof LOGO_LIST[0]) => {
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.Texture();

  // Solid colored background
  ctx.fillStyle = logo.color;
  ctx.fillRect(0, 0, size, size);

  // Load and draw the icon
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    const iconSize = 300;
    const x = (size - iconSize) / 2;
    const y = (size - iconSize) / 2;
    ctx.drawImage(img, x, y, iconSize, iconSize);
    texture.needsUpdate = true;
  };
  img.src = LOGO_URLS[logo.name] || '';

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
};

export const FloatingPapers: React.FC = () => {
  const scroll = useScroll();
  const countPerLogo = 4;
  const totalCount = LOGO_LIST.length * countPerLogo;

  // Generate textures with real icons from CDN
  const logoTextures = useMemo(() => LOGO_LIST.map(logo => createIconTexture(logo)), []);

  const animationData = useMemo(() => {
    return new Array(totalCount).fill(0).map((_, i) => {
      const r = 0.8 * Math.cbrt(Math.random()); 
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const initial = new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );

      const expR = 8 + Math.random() * 4;
      const expTheta = Math.random() * Math.PI * 2;
      const expPhi = Math.acos(2 * Math.random() - 1);
      const exploded = new THREE.Vector3(
        expR * Math.sin(expPhi) * Math.cos(expTheta),
        expR * Math.sin(expPhi) * Math.sin(expTheta),
        expR * Math.cos(expPhi)
      );

      const exitTarget = new THREE.Vector3(
        (Math.random() - 0.5) * 120,
        (Math.random() - 0.5) * 120,
        80
      );

      return {
        initial,
        exploded,
        exitTarget,
        rotationOffset: new THREE.Euler(
          Math.random() * Math.PI, 
          Math.random() * Math.PI, 
          Math.random() * Math.PI
        ),
      };
    });
  }, [totalCount]);

  const meshesRef = useRef<(THREE.InstancedMesh | null)[]>([]);

  useFrame((state) => {
    if (!scroll) return;
    const progress = scroll.offset;
    const time = state.clock.getElapsedTime();

    LOGO_LIST.forEach((_, logoIdx) => {
      const mesh = meshesRef.current[logoIdx];
      if (!mesh) return;

      for (let i = 0; i < countPerLogo; i++) {
        const globalIdx = logoIdx * countPerLogo + i;
        const d = animationData[globalIdx];
        
        let x, y, z;
        let rx, ry, rz;
        let scaleFactor = 0.6;

        if (progress < 0.3) {
            const t = THREE.MathUtils.smoothstep(progress, 0.0, 0.3);
            x = THREE.MathUtils.lerp(d.initial.x, d.exploded.x, t);
            y = THREE.MathUtils.lerp(d.initial.y, d.exploded.y, t);
            z = THREE.MathUtils.lerp(d.initial.z, d.exploded.z, t);
            rx = d.rotationOffset.x;
            ry = d.rotationOffset.y;
            rz = d.rotationOffset.z;
        } else if (progress < 0.7) {
            const t = THREE.MathUtils.smoothstep(progress, 0.3, 0.7);
            x = THREE.MathUtils.lerp(d.exploded.x, d.exitTarget.x, t);
            y = THREE.MathUtils.lerp(d.exploded.y, d.exitTarget.y, t);
            z = THREE.MathUtils.lerp(d.exploded.z, d.exitTarget.z, t);
            scaleFactor = THREE.MathUtils.lerp(0.6, 0, THREE.MathUtils.smoothstep(progress, 0.5, 0.7));
            rx = d.rotationOffset.x;
            ry = d.rotationOffset.y;
            rz = d.rotationOffset.z;
        } else {
            scaleFactor = 0;
            x = d.exitTarget.x; y = d.exitTarget.y; z = d.exitTarget.z;
            rx = 0; ry = 0; rz = 0;
        }

        tempObject.position.set(x, y, z);
        tempObject.rotation.set(rx, ry, rz);
        tempObject.scale.set(scaleFactor, scaleFactor * 1.4, 0.02); // Taller "A4" paper ratio
        tempObject.updateMatrix();
        mesh.setMatrixAt(i, tempObject.matrix);
      }
      mesh.instanceMatrix.needsUpdate = true;
    });
  });

  return (
    <Group>
      {LOGO_LIST.map((logo, idx) => {
        return (
          <InstancedMesh 
            key={logo.name + idx}
            ref={(el: any) => (meshesRef.current[idx] = el)} 
            args={[undefined, undefined, countPerLogo]}
          >
            <BoxGeometry args={[1, 1, 1]} />
            <MeshStandardMaterial 
              map={logoTextures[idx]} 
              color="#ffffff"
              roughness={0.2} 
              metalness={0.0}
              side={THREE.DoubleSide}
            />
          </InstancedMesh>
        );
      })}
    </Group>
  );
};
