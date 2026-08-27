export type MuseumProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  role: string;
  year: string;
  side: "left" | "right";
  z: number;
  palette: [string, string, string];
};

export type MuseumTuning = {
  moveSpeed: number;
  damping: number;
  cameraHeight: number;
  fov: number;
  interactionDistance: number;
  facingThreshold: number;
  mouseSensitivity: number;
};

export const DEFAULT_MUSEUM_TUNING: MuseumTuning = {
  moveSpeed: 4.2,
  damping: 8.5,
  cameraHeight: 1.68,
  fov: 64,
  interactionDistance: 5.6,
  facingThreshold: 0.84,
  mouseSensitivity: 0.72,
};

export const GALLERY_BOUNDS = {
  minX: -4.0,
  maxX: 4.0,
  minZ: -14.6,
  maxZ: 13.6,
};

export const museumProjects: MuseumProject[] = [
  {
    id: "aviation",
    title: "Cinematic Aviation Portfolio",
    category: "Creative Development",
    description:
      "A cinematic digital portfolio where atmosphere, motion and spatial storytelling shape the way the work is discovered.",
    technologies: ["Next.js", "Three.js", "GSAP"],
    role: "Creative Developer",
    year: "2026",
    side: "left",
    z: 4.5,
    palette: ["#d5c2a6", "#2f3f48", "#8d5f3f"],
  },
  {
    id: "architecture",
    title: "Immersive Architecture Studio",
    category: "3D Website",
    description:
      "An architectural web experience using restrained 3D, measured movement and editorial composition to turn a studio portfolio into a place.",
    technologies: ["React Three Fiber", "Three.js", "GSAP"],
    role: "3D Web Developer",
    year: "2026",
    side: "right",
    z: -2.4,
    palette: ["#d8d2c5", "#827263", "#22201d"],
  },
];
