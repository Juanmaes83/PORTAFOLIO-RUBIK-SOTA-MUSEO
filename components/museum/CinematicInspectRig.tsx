"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import type { InspectTuning, MuseumProject } from "@/lib/museum";

export type InspectPhase = "idle" | "glide-in" | "inspect" | "glide-out";

type Props = {
  project: MuseumProject | null;
  phase: InspectPhase;
  tuning: InspectTuning;
  onProgress: (progress: number) => void;
  onReachedInspect: () => void;
  onReturned: () => void;
};

type CameraPose = {
  position: THREE.Vector3;
  quaternion: THREE.Quaternion;
};

const UP = new THREE.Vector3(0, 1, 0);

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function projectCenter(project: MuseumProject) {
  const x = project.side === "left" ? -4.62 : 4.62;
  return new THREE.Vector3(x, 1.75, project.z);
}

function projectNormal(project: MuseumProject) {
  return new THREE.Vector3(project.side === "left" ? 1 : -1, 0, 0);
}

export default function CinematicInspectRig({
  project,
  phase,
  tuning,
  onProgress,
  onReachedInspect,
  onReturned,
}: Props) {
  const { camera } = useThree();
  const originRef = useRef<CameraPose | null>(null);
  const fromRef = useRef<CameraPose | null>(null);
  const toRef = useRef<CameraPose | null>(null);
  const elapsedRef = useRef(0);
  const completedRef = useRef(false);
  const previousPhaseRef = useRef<InspectPhase>("idle");

  const scratch = useMemo(
    () => ({
      center: new THREE.Vector3(),
      normal: new THREE.Vector3(),
      right: new THREE.Vector3(),
      look: new THREE.Matrix4(),
      position: new THREE.Vector3(),
      quaternion: new THREE.Quaternion(),
    }),
    [],
  );

  useEffect(() => {
    if (!project || phase === previousPhaseRef.current) return;
    previousPhaseRef.current = phase;
    completedRef.current = false;
    elapsedRef.current = 0;
    onProgress(0);

    if (phase === "glide-in") {
      const origin = {
        position: camera.position.clone(),
        quaternion: camera.quaternion.clone(),
      };
      originRef.current = origin;
      fromRef.current = {
        position: origin.position.clone(),
        quaternion: origin.quaternion.clone(),
      };

      scratch.center.copy(projectCenter(project));
      scratch.normal.copy(projectNormal(project));
      scratch.right.crossVectors(UP, scratch.normal).normalize();
      scratch.position
        .copy(scratch.center)
        .addScaledVector(scratch.normal, tuning.distance)
        .addScaledVector(scratch.right, tuning.sideOffset);
      scratch.position.y += tuning.heightOffset;
      scratch.look.lookAt(scratch.position, scratch.center, UP);
      scratch.quaternion.setFromRotationMatrix(scratch.look);

      toRef.current = {
        position: scratch.position.clone(),
        quaternion: scratch.quaternion.clone(),
      };
      return;
    }

    if (phase === "glide-out" && originRef.current) {
      fromRef.current = {
        position: camera.position.clone(),
        quaternion: camera.quaternion.clone(),
      };
      toRef.current = {
        position: originRef.current.position.clone(),
        quaternion: originRef.current.quaternion.clone(),
      };
    }
  }, [camera, onProgress, phase, project, scratch, tuning.distance, tuning.heightOffset, tuning.sideOffset]);

  useEffect(() => {
    if (phase === "idle") {
      previousPhaseRef.current = "idle";
      originRef.current = null;
      fromRef.current = null;
      toRef.current = null;
      elapsedRef.current = 0;
      completedRef.current = false;
      onProgress(0);
    }
  }, [onProgress, phase]);

  useFrame((_, rawDelta) => {
    if (!project || (phase !== "glide-in" && phase !== "glide-out")) return;
    const from = fromRef.current;
    const to = toRef.current;
    if (!from || !to || completedRef.current) return;

    const duration = Math.max(0.2, phase === "glide-in" ? tuning.durationIn : tuning.durationOut);
    elapsedRef.current += Math.min(rawDelta, 0.05);
    const progress = THREE.MathUtils.clamp(elapsedRef.current / duration, 0, 1);
    const eased = easeInOutCubic(progress);

    camera.position.lerpVectors(from.position, to.position, eased);
    camera.quaternion.slerpQuaternions(from.quaternion, to.quaternion, eased);
    onProgress(progress);

    if (progress >= 1) {
      completedRef.current = true;
      if (phase === "glide-in") onReachedInspect();
      else onReturned();
    }
  });

  return null;
}
