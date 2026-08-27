import { museumProjects } from "@/lib/museum";

export type ArtifactSemanticType =
  | "artwork"
  | "media-wall"
  | "display"
  | "sculpture"
  | "installation";

export type ArtifactPrimaryAction = "inspect";

export type ArtifactLifecyclePolicy = {
  preloadDistance: number;
  unloadDistance: number;
  previewOnFocus: boolean;
  resetOnLeave: boolean;
  mediaPreload: "none" | "metadata" | "full";
};

export type InteractiveArtifact = {
  id: string;
  projectId: string;
  semanticType: ArtifactSemanticType;
  interaction: {
    anchor: [number, number, number];
    radius: number;
    facingThreshold: number;
    surfaceSize: [number, number];
  };
  actions: {
    primary: ArtifactPrimaryAction;
  };
  state: {
    focusable: boolean;
    inspectable: boolean;
  };
  lifecycle: ArtifactLifecyclePolicy;
};

function semanticTypeFor(index: number): ArtifactSemanticType {
  if (index % 3 === 1) return "media-wall";
  if (index % 3 === 2) return "display";
  return "artwork";
}

function lifecycleFor(index: number): ArtifactLifecyclePolicy {
  const semanticType = semanticTypeFor(index);
  return {
    preloadDistance: semanticType === "media-wall" ? 9.2 : 8.4,
    unloadDistance: semanticType === "media-wall" ? 11.2 : 10.4,
    previewOnFocus: true,
    resetOnLeave: true,
    mediaPreload: semanticType === "media-wall" ? "metadata" : "full",
  };
}

export const artifactRegistry: InteractiveArtifact[] = museumProjects.map((project, index) => ({
  id: `artifact-${project.id}-main`,
  projectId: project.id,
  semanticType: semanticTypeFor(index),
  interaction: {
    anchor: [project.side === "left" ? -4.52 : 4.52, 1.92, project.z],
    radius: 5.6,
    facingThreshold: 0.84,
    surfaceSize: [3.9, 2.9],
  },
  actions: { primary: "inspect" },
  state: { focusable: true, inspectable: true },
  lifecycle: lifecycleFor(index),
}));

export const artifactById = new Map(artifactRegistry.map((artifact) => [artifact.id, artifact]));
export const artifactByProjectId = new Map(artifactRegistry.map((artifact) => [artifact.projectId, artifact]));

export function getArtifactForProject(projectId: string) {
  return artifactByProjectId.get(projectId) ?? null;
}
