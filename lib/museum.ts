export type ProjectMedia =
  | { type: "image"; src?: string; alt: string; poster?: string }
  | { type: "video"; src?: string; poster?: string; alt: string };

export type ExhibitTreatment = "frame" | "media-wall" | "floating-panel";

export type MuseumProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  role: string;
  year: string;
  side: "left" | "right";
  z: number;
  palette: [string, string, string];
  heroMedia?: ProjectMedia;
  cinematicInspect?: boolean;
  exhibitTreatment?: ExhibitTreatment;
};

export type MuseumTuning = {
  moveSpeed: number;
  damping: number;
  cameraHeight: number;
  fov: number;
  interactionDistance: number;
  facingThreshold: number;
  mouseSensitivity: number;
  keyboardTurnSpeed: number;
};

export type InspectTuning = {
  durationIn: number;
  durationOut: number;
  distance: number;
  heightOffset: number;
  sideOffset: number;
  revealAt: number;
};

export const DEFAULT_MUSEUM_TUNING: MuseumTuning = {
  moveSpeed: 4.2,
  damping: 8.5,
  cameraHeight: 1.68,
  fov: 64,
  interactionDistance: 5.6,
  facingThreshold: 0.84,
  mouseSensitivity: 0.72,
  keyboardTurnSpeed: 1.65,
};

export const DEFAULT_INSPECT_TUNING: InspectTuning = {
  durationIn: 0.9,
  durationOut: 0.72,
  distance: 2.35,
  heightOffset: 0.06,
  sideOffset: 0,
  revealAt: 0.62,
};

export const GALLERY_BOUNDS = {
  minX: -4.0,
  maxX: 4.0,
  minZ: -14.6,
  maxZ: 13.6,
};

export const FINAL_INSTALLATION_ID = "final-installation";
export const FINAL_INSTALLATION_POSITION = { x: 0, y: 1.9, z: -14.55 };
export const CINEMATIC_INSPECT_PILOT_ID = "aviation";

export const museumProjects: MuseumProject[] = [
  {
    id: "aviation",
    title: "Cinematic Aviation Portfolio",
    category: "Creative Development",
    description: "A cinematic digital portfolio where atmosphere, motion and spatial storytelling shape the way the work is discovered.",
    longDescription: "A study in authored digital movement: editorial pacing, atmospheric composition and spatial navigation are treated as one continuous experience rather than separate interface layers.",
    technologies: ["Next.js", "Three.js", "GSAP"],
    role: "Creative Developer",
    year: "2026",
    side: "left",
    z: 8.0,
    palette: ["#d5c2a6", "#2f3f48", "#8d5f3f"],
    heroMedia: { type: "image", alt: "Cinematic Aviation Portfolio media stage" },
    cinematicInspect: true,
    exhibitTreatment: "frame",
  },
  {
    id: "ai-workspace",
    title: "AI Design Workspace",
    category: "AI Product",
    description: "A focused workspace for human-directed AI creation, balancing speed, traceability and an interface that keeps decisions visible.",
    longDescription: "A product environment for directing AI with visible decisions, structured iteration and deliberate human authorship rather than opaque generation.",
    technologies: ["React", "TypeScript", "AI APIs"],
    role: "Product & Creative Developer",
    year: "2026",
    side: "right",
    z: 6.0,
    palette: ["#d9d2c4", "#5c6f70", "#25282a"],
    heroMedia: { type: "image", alt: "AI Design Workspace media stage" },
    cinematicInspect: true,
    exhibitTreatment: "media-wall",
  },
  {
    id: "fashion",
    title: "Interactive Fashion Experience",
    category: "E-Commerce",
    description: "An editorial commerce experience where product, motion and interaction behave as one visual system instead of a conventional catalogue.",
    longDescription: "A fashion-commerce study that treats interface, product imagery, motion and spatial hierarchy as one editorial system rather than a sequence of catalogue cards.",
    technologies: ["Next.js", "WebGL", "Headless CMS"],
    role: "Experience Designer & Developer",
    year: "2026",
    side: "left",
    z: 1.6,
    palette: ["#d8c8c1", "#7f4f4b", "#29201f"],
    heroMedia: { type: "image", alt: "Interactive Fashion Experience media stage" },
    cinematicInspect: true,
    exhibitTreatment: "floating-panel",
  },
  {
    id: "architecture",
    title: "Immersive Architecture Studio",
    category: "3D Website",
    description: "An architectural web experience using restrained 3D, measured movement and editorial composition to turn a studio portfolio into a place.",
    longDescription: "A spatial portfolio system where architecture, restrained camera movement and editorial pacing work together to make the practice itself navigable.",
    technologies: ["React Three Fiber", "Three.js", "GSAP"],
    role: "3D Web Developer",
    year: "2026",
    side: "right",
    z: -0.6,
    palette: ["#d8d2c5", "#827263", "#22201d"],
    heroMedia: { type: "image", alt: "Immersive Architecture Studio media stage" },
    cinematicInspect: true,
    exhibitTreatment: "frame",
  },
  {
    id: "analytics",
    title: "Intelligent Analytics Platform",
    category: "SaaS Interface",
    description: "A decision-oriented analytics environment that reduces dashboard noise and turns complex signals into a legible operating picture.",
    longDescription: "A decision-oriented product study focused on hierarchy, signal clarity and reducing the cognitive weight of complex analytical interfaces.",
    technologies: ["React", "TypeScript", "Data Visualization"],
    role: "Product Designer & Frontend Developer",
    year: "2026",
    side: "left",
    z: -6.8,
    palette: ["#c9d1cd", "#3c5f78", "#1f292d"],
    heroMedia: { type: "image", alt: "Intelligent Analytics Platform media stage" },
    cinematicInspect: true,
    exhibitTreatment: "media-wall",
  },
  {
    id: "creative-coding",
    title: "Creative Coding Laboratory",
    category: "Experimental Web",
    description: "A browser laboratory for spatial interaction, sound and procedural graphics, built to turn technical experiments into reusable creative capabilities.",
    longDescription: "An experimental web laboratory where spatial interaction, procedural graphics and sound are treated as reusable creative capabilities rather than isolated demos.",
    technologies: ["Three.js", "GLSL", "Web Audio"],
    role: "Creative Technologist",
    year: "2026",
    side: "right",
    z: -8.8,
    palette: ["#cfc5af", "#7a6952", "#24221e"],
    heroMedia: { type: "image", alt: "Creative Coding Laboratory media stage" },
    cinematicInspect: true,
    exhibitTreatment: "floating-panel",
  },
];