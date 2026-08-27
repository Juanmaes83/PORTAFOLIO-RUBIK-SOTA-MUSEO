import { museumProjects } from "@/lib/museum";

export type ArtifactSemanticType =
  | "artwork"
  | "media-wall"
  | "display"
  | "sculpture"
  | "installation";

export type ArtifactPrimaryAction = "inspect";

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
};

function semanticTypeFor(index: number): ArtifactSemanticType {
  if (index % 3 === 1) return "media-wall";
  if (index % 3 === 2) return "display";
  return "artwork";
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
}));

export const artifactById = new Map(artifactRegistry.map((artifact) => [artifact.id, artifact]));
export const artifactByProjectId = new Map(artifactRegistry.map((artifact) => [artifact.projectId, artifact]));

export function getArtifactForProject(projectId: string) {
  return artifactByProjectId.get(projectId) ?? null;
}
