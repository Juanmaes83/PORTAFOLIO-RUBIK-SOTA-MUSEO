"use client";

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
  GALLERY_BOUNDS,
  type MuseumProject,
  type MuseumTuning,
} from "@/lib/museum";

type Props = {
  projects: MuseumProject[];
  tuning: MuseumTuning;
  paused: boolean;
  focusedId: string | null;
  onFocusChange: (projectId: string | null) => void;
  onInspect: (projectId: string) => void;
  onMovementStarted: () => void;
  onLockChange: (locked: boolean) => void;
};

const UP = new THREE.Vector3(0, 1, 0);

export default function FirstPersonRig({
  projects,
  tuning,
  paused,
  focusedId,
  onFocusChange,
  onInspect,
  onMovementStarted,
  onLockChange,
}: Props) {
  const { camera, gl } = useThree();
  const keysRef = useRef(new Set<string>());
  const velocityRef = useRef(new THREE.Vector3());
  const forwardRef = useRef(new THREE.Vector3());
  const rightRef = useRef(new THREE.Vector3());
  const desiredRef = useRef(new THREE.Vector3());
  const focusDirectionRef = useRef(new THREE.Vector3());
  const cameraDirectionRef = useRef(new THREE.Vector3());
  const lastFocusRef = useRef<string | null>(null);
  const movementStartedRef = useRef(false);
  const yawRef = useRef(0);
  const pitchRef = useRef(0);

  useEffect(() => {
    camera.rotation.order = "YXZ";
    camera.position.set(0, tuning.cameraHeight, 11.8);
    camera.rotation.set(0, 0, 0);
    yawRef.current = 0;
    pitchRef.current = 0;
  }, [camera, tuning.cameraHeight]);

  useEffect(() => {
    const canvas = gl.domElement;

    const isMovementKey = (code: string) =>
      [
        "KeyW",
        "KeyA",
        "KeyS",
        "KeyD",
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
      ].includes(code);

    const onKeyDown = (event: KeyboardEvent) => {
      if (paused) return;

      if (isMovementKey(event.code)) {
        event.preventDefault();
        keysRef.current.add(event.code);
        if (!movementStartedRef.current) {
          movementStartedRef.current = true;
          onMovementStarted();
        }
      }

      if (event.code === "KeyE" && focusedId) {
        event.preventDefault();
        onInspect(focusedId);
      }
    };

    const onKeyUp = (event: KeyboardEvent) => {
      keysRef.current.delete(event.code);
    };

    const onMouseMove = (event: MouseEvent) => {
      if (paused || document.pointerLockElement !== canvas) return;
      const sensitivity = 0.0018 * tuning.mouseSensitivity;
      yawRef.current -= event.movementX * sensitivity;
      pitchRef.current -= event.movementY * sensitivity;
      pitchRef.current = THREE.MathUtils.clamp(
        pitchRef.current,
        -Math.PI * 0.42,
        Math.PI * 0.42,
      );
      camera.rotation.y = yawRef.current;
      camera.rotation.x = pitchRef.current;
    };

    const onCanvasClick = () => {
      if (paused) return;
      if (document.pointerLockElement === canvas) {
        if (focusedId) onInspect(focusedId);
        return;
      }
      canvas.requestPointerLock?.();
    };

    const onPointerLockChange = () => {
      onLockChange(document.pointerLockElement === canvas);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("pointerlockchange", onPointerLockChange);
    canvas.addEventListener("click", onCanvasClick);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("pointerlockchange", onPointerLockChange);
      canvas.removeEventListener("click", onCanvasClick);
    };
  }, [camera, focusedId, gl, onInspect, onLockChange, onMovementStarted, paused, tuning.mouseSensitivity]);

  useEffect(() => {
    if (paused && document.pointerLockElement === gl.domElement) {
      document.exitPointerLock?.();
      keysRef.current.clear();
      velocityRef.current.set(0, 0, 0);
    }
  }, [gl, paused]);

  useFrame((_, delta) => {
    if (paused) return;

    camera.getWorldDirection(forwardRef.current);
    forwardRef.current.y = 0;
    if (forwardRef.current.lengthSq() > 0.0001) forwardRef.current.normalize();
    rightRef.current.crossVectors(forwardRef.current, UP).normalize();

    const keys = keysRef.current;
    const forwardInput =
      (keys.has("KeyW") || keys.has("ArrowUp") ? 1 : 0) -
      (keys.has("KeyS") || keys.has("ArrowDown") ? 1 : 0);
    const strafeInput =
      (keys.has("KeyD") || keys.has("ArrowRight") ? 1 : 0) -
      (keys.has("KeyA") || keys.has("ArrowLeft") ? 1 : 0);

    desiredRef.current.set(0, 0, 0);
    desiredRef.current.addScaledVector(forwardRef.current, forwardInput);
    desiredRef.current.addScaledVector(rightRef.current, strafeInput);
    if (desiredRef.current.lengthSq() > 1) desiredRef.current.normalize();
    desiredRef.current.multiplyScalar(tuning.moveSpeed);

    const alpha = 1 - Math.exp(-tuning.damping * delta);
    velocityRef.current.lerp(desiredRef.current, alpha);

    camera.position.addScaledVector(velocityRef.current, delta);
    camera.position.x = THREE.MathUtils.clamp(
      camera.position.x,
      GALLERY_BOUNDS.minX,
      GALLERY_BOUNDS.maxX,
    );
    camera.position.z = THREE.MathUtils.clamp(
      camera.position.z,
      GALLERY_BOUNDS.minZ,
      GALLERY_BOUNDS.maxZ,
    );
    camera.position.y = tuning.cameraHeight;

    camera.getWorldDirection(cameraDirectionRef.current).normalize();

    let bestId: string | null = null;
    let bestScore = -Infinity;

    for (const project of projects) {
      const projectX = project.side === "left" ? -4.42 : 4.42;
      focusDirectionRef.current.set(
        projectX - camera.position.x,
        1.72 - camera.position.y,
        project.z - camera.position.z,
      );
      const distance = focusDirectionRef.current.length();
      if (distance > tuning.interactionDistance || distance < 0.001) continue;
      focusDirectionRef.current.normalize();
      const facing = cameraDirectionRef.current.dot(focusDirectionRef.current);
      if (facing < tuning.facingThreshold) continue;
      const score = facing * 2 - distance * 0.06;
      if (score > bestScore) {
        bestScore = score;
        bestId = project.id;
      }
    }

    if (bestId !== lastFocusRef.current) {
      lastFocusRef.current = bestId;
      onFocusChange(bestId);
    }
  });

  return null;
}
