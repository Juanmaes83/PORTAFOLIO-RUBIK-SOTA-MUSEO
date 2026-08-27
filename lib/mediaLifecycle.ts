import type { InteractiveArtifact } from "@/lib/artifacts";
import type { ProjectMedia } from "@/lib/museum";

export type ArtifactLifecycleState = "dormant" | "preload" | "preview" | "inspect";

export type ArtifactLifecycleSnapshot = Record<string, ArtifactLifecycleState>;

export function resolveArtifactLifecycleState({
  artifact,
  distance,
  focused,
  inspecting,
}: {
  artifact: InteractiveArtifact;
  distance: number;
  focused: boolean;
  inspecting: boolean;
}): ArtifactLifecycleState {
  if (inspecting) return "inspect";
  if (focused && artifact.lifecycle.previewOnFocus) return "preview";
  if (distance <= artifact.lifecycle.preloadDistance) return "preload";
  return "dormant";
}

export function shouldReleaseArtifactMedia(
  artifact: InteractiveArtifact,
  distance: number,
) {
  return artifact.lifecycle.resetOnLeave && distance > artifact.lifecycle.unloadDistance;
}

export type PrimedMedia = HTMLImageElement | HTMLVideoElement;

export function primeProjectMedia(media?: ProjectMedia): PrimedMedia | null {
  if (!media?.src || typeof document === "undefined") return null;

  if (media.type === "image") {
    const image = new Image();
    image.decoding = "async";
    image.src = media.src;
    return image;
  }

  const video = document.createElement("video");
  video.preload = "metadata";
  video.muted = true;
  video.playsInline = true;
  video.src = media.src;
  video.load();
  return video;
}

export function releasePrimedMedia(media: PrimedMedia | null) {
  if (!media) return;
  if (media instanceof HTMLVideoElement) {
    media.pause();
    media.removeAttribute("src");
    media.load();
  } else {
    media.src = "";
  }
}
