
import { Vector3 } from 'three';

export interface ParticleData {
  initial: Vector3;
  target: Vector3;
}

export interface PaperData {
  initial: Vector3;
  rotationInitial: [number, number, number];
  exploded: Vector3;
  rotationExploded: [number, number, number];
  stacked: Vector3;
  rotationStacked: [number, number, number];
}

export interface LogoConfig {
  name: string;
  color: string;
  textColor: string;
}

/**
 * Metadata for brand-themed 'files'. 
 * We generate textures dynamically using these colors and names 
 * to ensure 100% reliability and zero network dependencies.
 */
export const LOGO_LIST: LogoConfig[] = [
  { name: 'Outlook', color: '#0078d4', textColor: '#ffffff' },
  { name: 'Excel', color: '#217346', textColor: '#ffffff' },
  { name: 'Adobe', color: '#ff0000', textColor: '#ffffff' },
  { name: 'OpenAI', color: '#10a37f', textColor: '#ffffff' },
  { name: 'Gmail', color: '#ea4335', textColor: '#ffffff' },
  { name: 'Salesforce', color: '#00a1e0', textColor: '#ffffff' },
  { name: 'ClickUp', color: '#7b68ee', textColor: '#ffffff' },
  { name: 'Intuit', color: '#2ca01c', textColor: '#ffffff' },
  { name: 'Oracle', color: '#f80000', textColor: '#ffffff' },
  { name: 'Slack', color: '#4a154b', textColor: '#ffffff' },
  { name: 'Zoom', color: '#2d8cff', textColor: '#ffffff' },
  { name: 'Asana', color: '#f06595', textColor: '#ffffff' },
];

export const CONSTANTS = {
  VOXEL_COLOR: '#3b82f6',
  PAPER_COLOR: '#f3f4f6',
  BG_COLOR: '#050505',
  VOXEL_COUNT: 1500,
  PAPER_COUNT: LOGO_LIST.length * 4,
};
