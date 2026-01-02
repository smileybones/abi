import * as THREE from 'three';

// Generate points on a sphere surface or volume
export const generateSpherePoints = (count: number, radius: number) => {
  const points: THREE.Vector3[] = [];
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;
    
    const x = radius * Math.cos(theta) * Math.sin(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(phi);
    
    // Add some noise to make it filled, not just a shell
    const r = radius * Math.cbrt(Math.random()); 
    const vec = new THREE.Vector3(x, y, z).normalize().multiplyScalar(r);
    
    points.push(vec);
  }
  return points;
};

// Generate points from text rasterization
export const generateTextPoints = (text: string, size: number = 10, count: number) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return [];

  const width = 200;
  const height = 100;
  canvas.width = width;
  canvas.height = height;

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, width, height);
  
  ctx.fillStyle = 'white';
  ctx.font = 'bold 80px Inter, Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  const validPixels: THREE.Vector3[] = [];

  for (let y = 0; y < height; y += 2) { // Skip pixels for density control
    for (let x = 0; x < width; x += 2) {
      const index = (y * width + x) * 4;
      // If pixel is light enough
      if (data[index] > 128) {
        // Map to 3D space centered at origin
        const posX = (x - width / 2) * (size / width) * 2;
        const posY = -(y - height / 2) * (size / width) * 2; // Flip Y
        validPixels.push(new THREE.Vector3(posX, posY, 0));
      }
    }
  }

  // Resample to match exact count or return what we have
  const result: THREE.Vector3[] = [];
  if (validPixels.length === 0) return generateSpherePoints(count, 1); // Fallback

  for (let i = 0; i < count; i++) {
    const p = validPixels[i % validPixels.length];
    // Add slight jitter so stacked points aren't identical
    result.push(new THREE.Vector3(
      p.x + (Math.random() - 0.5) * 0.05,
      p.y + (Math.random() - 0.5) * 0.05,
      p.z
    ));
  }
  return result;
};

export const randomVector = (scale: number) => {
  return new THREE.Vector3(
    (Math.random() - 0.5) * scale,
    (Math.random() - 0.5) * scale,
    (Math.random() - 0.5) * scale
  );
};
