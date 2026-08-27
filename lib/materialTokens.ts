export type MaterialPresetName = "baseline" | "quiet" | "cinematic" | "editorial";

export type MaterialPreset = {
  id: MaterialPresetName;
  label: string;
  floor: { color: string; roughness: number; metalness: number; reflection: number; blur: number };
  wall: { color: string; roughness: number; panelColor: string; jointColor: string };
  ceiling: { color: string; railColor: string; roughness: number };
  metal: { color: string; roughness: number; metalness: number };
  glass: { color: string; roughness: number; metalness: number; opacity: number };
  light: { ambient: number; architectural: number; exhibit: number; focusBoost: number; warm: string; neutral: string };
  atmosphere: { background: string; fog: string; fogNear: number; fogFar: number };
};

export const MATERIAL_PRESETS: Record<MaterialPresetName, MaterialPreset> = {
  baseline: {
    id: "baseline",
    label: "Baseline",
    floor: { color: "#8a6d4e", roughness: 0.78, metalness: 0.03, reflection: 0, blur: 0 },
    wall: { color: "#e9e4da", roughness: 0.94, panelColor: "#e9e4da", jointColor: "#cfc7ba" },
    ceiling: { color: "#181714", railColor: "#25231f", roughness: 0.92 },
    metal: { color: "#54483d", roughness: 0.72, metalness: 0.08 },
    glass: { color: "#d8d2c8", roughness: 0.24, metalness: 0, opacity: 0.18 },
    light: { ambient: 1.35, architectural: 1.2, exhibit: 18, focusBoost: 10, warm: "#f2c996", neutral: "#eee4d7" },
    atmosphere: { background: "#12110f", fog: "#15130f", fogNear: 14, fogFar: 34 },
  },
  quiet: {
    id: "quiet",
    label: "Quiet Gallery",
    floor: { color: "#332f2a", roughness: 0.44, metalness: 0.06, reflection: 0.24, blur: 680 },
    wall: { color: "#ece9e2", roughness: 0.82, panelColor: "#e2ded6", jointColor: "#b8afa2" },
    ceiling: { color: "#171817", railColor: "#262724", roughness: 0.72 },
    metal: { color: "#9c8060", roughness: 0.42, metalness: 0.72 },
    glass: { color: "#bcc2be", roughness: 0.18, metalness: 0.05, opacity: 0.24 },
    light: { ambient: 0.9, architectural: 1.45, exhibit: 22, focusBoost: 7, warm: "#efc99a", neutral: "#f2ede4" },
    atmosphere: { background: "#111210", fog: "#171714", fogNear: 17, fogFar: 36 },
  },
  cinematic: {
    id: "cinematic",
    label: "Cinematic Gallery",
    floor: { color: "#242321", roughness: 0.3, metalness: 0.1, reflection: 0.42, blur: 520 },
    wall: { color: "#e8e5de", roughness: 0.76, panelColor: "#d9d5cd", jointColor: "#8f877c" },
    ceiling: { color: "#101111", railColor: "#242624", roughness: 0.58 },
    metal: { color: "#ae8a5f", roughness: 0.34, metalness: 0.82 },
    glass: { color: "#9fa9a5", roughness: 0.12, metalness: 0.08, opacity: 0.3 },
    light: { ambient: 0.68, architectural: 1.85, exhibit: 27, focusBoost: 10, warm: "#f3c78e", neutral: "#f4efe8" },
    atmosphere: { background: "#0d0e0d", fog: "#111310", fogNear: 16, fogFar: 33 },
  },
  editorial: {
    id: "editorial",
    label: "Editorial Gallery",
    floor: { color: "#2c2925", roughness: 0.38, metalness: 0.07, reflection: 0.32, blur: 610 },
    wall: { color: "#f0ede5", roughness: 0.79, panelColor: "#ded8cd", jointColor: "#a69b8e" },
    ceiling: { color: "#131313", railColor: "#302d29", roughness: 0.64 },
    metal: { color: "#b28d64", roughness: 0.38, metalness: 0.76 },
    glass: { color: "#adb6b2", roughness: 0.16, metalness: 0.04, opacity: 0.27 },
    light: { ambient: 0.78, architectural: 1.62, exhibit: 24, focusBoost: 9, warm: "#f0c99a", neutral: "#f7f0e7" },
    atmosphere: { background: "#10100f", fog: "#161512", fogNear: 18, fogFar: 37 },
  },
};

export const PREMIUM_ZONE_PROJECT_IDS = new Set(["aviation", "ai-workspace", "fashion"]);

export const DEFAULT_MATERIAL_PRESET: MaterialPresetName = "cinematic";
