import { museumProjects } from "@/lib/museum";

export type ArtifactSemanticType =
  | "artwork"
  | "media-wall"
  | "display"
  | "sculpture"
  | "installation";

export type LandmarkType =
  | "wall-artwork"
  | "media-wall"
  | "floating-display"
  | "object-table"
  | "digital-terminal"
  | "material-installation"
  | "process-archive"
  | "spatial-object";

export type ArtifactPrimaryAction = "inspect";

export type ArtifactLifecyclePolicy = {
  preloadDistance: number;
  unloadDistance: number;
  previewOnFocus: boolean;
  resetOnLeave: boolean;
  mediaPreload: "none" | "metadata" | "full";
};

export type ArtifactInspectPose = {
  center: [number, number, number];
  normal: [number, number, number];
  distance: number;
  heightOffset: number;
  sideOffset: number;
};

export type InteractiveArtifact = {
  id: string;
  projectId: string;
  semanticType: ArtifactSemanticType;
  landmarkType: LandmarkType;
  interaction: {
    anchor: [number, number, number];
    radius: number;
    facingThreshold: number;
    surfaceSize: [number, number];
    surfaceRotation: [number, number, number];
  };
  inspectPose?: ArtifactInspectPose;
  actions: {
    primary: ArtifactPrimaryAction;
  };
  state: {
    focusable: boolean;
    inspectable: boolean;
  };
  lifecycle: ArtifactLifecyclePolicy;
};

type ArtifactDefinition = Pick<InteractiveArtifact, "semanticType" | "landmarkType" | "interaction" | "inspectPose">;

const WALL_LEFT_ROTATION: [number, number, number] = [0, Math.PI / 2, 0];
const WALL_RIGHT_ROTATION: [number, number, number] = [0, -Math.PI / 2, 0];

const artifactDefinitions: Record<string, ArtifactDefinition> = {
  aviation: {
    semanticType: "artwork",
    landmarkType: "wall-artwork",
    interaction: {
      anchor: [-4.52, 1.92, 8.0],
      radius: 5.6,
      facingThreshold: 0.84,
      surfaceSize: [3.9, 2.9],
      surfaceRotation: WALL_LEFT_ROTATION,
    },
  },
  "ai-workspace": {
    semanticType: "media-wall",
    landmarkType: "media-wall",
    interaction: {
      anchor: [4.52, 1.92, 6.0],
      radius: 5.6,
      facingThreshold: 0.84,
      surfaceSize: [3.9, 2.9],
      surfaceRotation: WALL_RIGHT_ROTATION,
    },
  },
  fashion: {
    semanticType: "display",
    landmarkType: "floating-display",
    interaction: {
      anchor: [-4.52, 1.92, 1.6],
      radius: 5.6,
      facingThreshold: 0.84,
      surfaceSize: [3.9, 2.9],
      surfaceRotation: WALL_LEFT_ROTATION,
    },
  },
  architecture: {
    semanticType: "display",
    landmarkType: "object-table",
    interaction: {
      anchor: [2.25, 1.02, -2.65],
      radius: 5.6,
      facingThreshold: 0.78,
      surfaceSize: [3.05, 1.85],
      surfaceRotation: [-Math.PI / 2, 0, 0],
    },
    inspectPose: {
      center: [2.25, 1.02, -2.65],
      normal: [0, 0, 1],
      distance: 2.35,
      heightOffset: 0.68,
      sideOffset: -0.16,
    },
  },
  analytics: {
    semanticType: "media-wall",
    landmarkType: "media-wall",
    interaction: {
      anchor: [-4.52, 1.92, -6.8],
      radius: 5.6,
      facingThreshold: 0.84,
      surfaceSize: [3.9, 2.9],
      surfaceRotation: WALL_LEFT_ROTATION,
    },
  },
  "creative-coding": {
    semanticType: "display",
    landmarkType: "floating-display",
    interaction: {
      anchor: [4.52, 1.92, -8.8],
      radius: 5.6,
      facingThreshold: 0.84,
      surfaceSize: [3.9, 2.9],
      surfaceRotation: WALL_RIGHT_ROTATION,
    },
  },
};

function lifecycleFor(definition: ArtifactDefinition): ArtifactLifecyclePolicy {
  const mediaWall = definition.semanticType === "media-wall";
  const objectTable = definition.landmarkType === "object-table";
  return {
    preloadDistance: mediaWall ? 9.2 : objectTable ? 8.8 : 8.4,
    unloadDistance: mediaWall ? 11.2 : objectTable ? 10.8 : 10.4,
    previewOnFocus: true,
    resetOnLeave: true,
    mediaPreload: mediaWall ? "metadata" : "full",
  };
}

export const artifactRegistry: InteractiveArtifact[] = museumProjects.map((project) => {
  const definition = artifactDefinitions[project.id];
  if (!definition) {
    throw new Error(`Missing explicit semantic artifact definition for project: ${project.id}`);
  }
  return {
    id: `artifact-${project.id}-main`,
    projectId: project.id,
    ...definition,
    actions: { primary: "inspect" },
    state: { focusable: true, inspectable: true },
    lifecycle: lifecycleFor(definition),
  };
});

export const artifactById = new Map(artifactRegistry.map((artifact) => [artifact.id, artifact]));
export const artifactByProjectId = new Map(artifactRegistry.map((artifact) => [artifact.projectId, artifact]));

export function getArtifactForProject(projectId: string) {
  return artifactByProjectId.get(projectId) ?? null;
}
