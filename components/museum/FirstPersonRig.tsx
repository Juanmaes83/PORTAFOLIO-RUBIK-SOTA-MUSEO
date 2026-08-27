"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { artifactRegistry, type InteractiveArtifact } from "@/lib/artifacts";
import {
  FINAL_INSTALLATION_ID,
  FINAL_INSTALLATION_POSITION,
  GALLERY_BOUNDS,
  type MuseumProject,
  type MuseumTuning,
} from "@/lib/museum";

type Props = {
  projects: MuseumProject[];
  tuning: MuseumTuning;
  paused: boolean;
  focusedId: string | null;
  finalUnlocked: boolean;
  onFocusChange: (projectId: string | null) => void;
  onInspect: (projectId: string) => void;
  onMovementStarted: () => void;
  onLockChange: (locked: boolean) => void;
};

const UP = new THREE.Vector3(0, 1, 0);
const CENTER = new THREE.Vector2(0, 0);

export default function FirstPersonRig({
  projects,
  tuning,
  paused,
  focusedId,
  finalUnlocked,
  onFocusChange,
  onInspect,
  onMovementStarted,
  onLockChange,
}: Props) {
  const { camera, gl, scene } = useThree();
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
  const wasPausedRef = useRef(paused);
  const raycasterRef = useRef(new THREE.Raycaster());
  const pointerRef = useRef(new THREE.Vector2());

  const activeArtifacts = useMemo(() => {
    const projectIds = new Set(projects.map((project) => project.id));
    return artifactRegistry.filter((artifact) => projectIds.has(artifact.projectId));
  }, [projects]);
  const activeArtifactById = useMemo(
    () => new Map(activeArtifacts.map((artifact) => [artifact.id, artifact])),
    [activeArtifacts],
  );

  const resolveArtifactHit = (ndc: THREE.Vector2): InteractiveArtifact | null => {
    const raycaster = raycasterRef.current;
    raycaster.setFromCamera(ndc, camera);
    const hits = raycaster.intersectObjects(scene.children, true);
    for (const hit of hits) {
      const artifactId = hit.object.userData.semanticArtifactId as string | undefined;
      if (!artifactId) continue;
      const artifact = activeArtifactById.get(artifactId);
      if (!artifact || !artifact.state.focusable) continue;
      const anchor = artifact.interaction.anchor;
      const distance = camera.position.distanceTo(new THREE.Vector3(anchor[0], anchor[1], anchor[2]));
      if (distance <= Math.min(tuning.interactionDistance, artifact.interaction.radius) + 0.35) return artifact;
    }
    return null;
  };

  useEffect(() => {
    camera.rotation.order = "YXZ";
    camera.position.set(0, tuning.cameraHeight, 11.8);
    camera.rotation.set(0, 0, 0);
    yawRef.current = 0;
    pitchRef.current = 0;
  }, [camera]);

  useEffect(() => {
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = tuning.fov;
      camera.updateProjectionMatrix();
    }
  }, [camera, tuning.fov]);

  useEffect(() => {
    const canvas = gl.domElement;
    const controlKeys = new Set([
      "KeyW", "KeyA", "KeyS", "KeyD",
      "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight",
      "KeyQ", "KeyR",
    ]);

    const onKeyDown = (event: KeyboardEvent) => {
      if (paused) return;
      if (controlKeys.has(event.code)) {
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

    const onKeyUp = (event: KeyboardEvent) => keysRef.current.delete(event.code);

    const onMouseMove = (event: MouseEvent) => {
      if (paused || document.pointerLockElement !== canvas) return;
      const sensitivity = 0.0018 * tuning.mouseSensitivity;
      yawRef.current -= event.movementX * sensitivity;
      pitchRef.current -= event.movementY * sensitivity;
      pitchRef.current = THREE.MathUtils.clamp(pitchRef.current, -Math.PI * 0.42, Math.PI * 0.42);
      camera.rotation.y = yawRef.current;
      camera.rotation.x = pitchRef.current;
    };

    const onCanvasClick = (event: MouseEvent) => {
      if (paused) return;
      if (document.pointerLockElement === canvas) {
        const artifact = resolveArtifactHit(CENTER);
        if (artifact?.state.inspectable) onInspect(artifact.projectId);
        return;
      }

      const rect = canvas.getBoundingClientRect();
      pointerRef.current.set(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1,
      );
      const artifact = resolveArtifactHit(pointerRef.current);
      if (artifact?.state.inspectable) {
        onFocusChange(artifact.projectId);
        onInspect(artifact.projectId);
        return;
      }
      canvas.requestPointerLock?.();
    };

    const onPointerLockChange = () => onLockChange(document.pointerLockElement === canvas);

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
  }, [camera, focusedId, gl, onFocusChange, onInspect, onLockChange, onMovementStarted, paused, scene, tuning.interactionDistance, tuning.mouseSensitivity, activeArtifactById]);

  useEffect(() => {
    if (paused && document.pointerLockElement === gl.domElement) {
      document.exitPointerLock?.();
      keysRef.current.clear();
      velocityRef.current.set(0, 0, 0);
    }
  }, [gl, paused]);

  useEffect(() => {
    if (wasPausedRef.current && !paused) {
      const restored = new THREE.Euler().setFromQuaternion(camera.quaternion, "YXZ");
      yawRef.current = restored.y;
      pitchRef.current = THREE.MathUtils.clamp(restored.x, -Math.PI * 0.42, Math.PI * 0.42);
      camera.rotation.order = "YXZ";
      camera.rotation.y = yawRef.current;
      camera.rotation.x = pitchRef.current;
      velocityRef.current.set(0, 0, 0);
      keysRef.current.clear();
    }
    wasPausedRef.current = paused;
  }, [camera, paused]);

  useFrame((_, rawDelta) => {
    if (paused) return;
    const delta = Math.min(rawDelta, 0.05);
    const keys = keysRef.current;

    const keyboardTurnInput = (keys.has("KeyR") ? 1 : 0) - (keys.has("KeyQ") ? 1 : 0);
    if (keyboardTurnInput !== 0) {
      yawRef.current -= keyboardTurnInput * tuning.keyboardTurnSpeed * delta;
      camera.rotation.y = yawRef.current;
      camera.rotation.x = pitchRef.current;
    }

    camera.getWorldDirection(forwardRef.current);
    forwardRef.current.y = 0;
    if (forwardRef.current.lengthSq() > 0.0001) forwardRef.current.normalize();
    rightRef.current.crossVectors(forwardRef.current, UP).normalize();

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
    camera.position.x = THREE.MathUtils.clamp(camera.position.x, GALLERY_BOUNDS.minX, GALLERY_BOUNDS.maxX);
    camera.position.z = THREE.MathUtils.clamp(camera.position.z, GALLERY_BOUNDS.minZ, GALLERY_BOUNDS.maxZ);
    camera.position.y = tuning.cameraHeight;

    let bestId: string | null = null;
    const rayArtifact = resolveArtifactHit(CENTER);
    if (rayArtifact) {
      const [x, y, z] = rayArtifact.interaction.anchor;
      focusDirectionRef.current.set(x - camera.position.x, y - camera.position.y, z - camera.position.z);
      const distance = focusDirectionRef.current.length();
      if (distance > 0.001) {
        focusDirectionRef.current.normalize();
        camera.getWorldDirection(cameraDirectionRef.current).normalize();
        const facing = cameraDirectionRef.current.dot(focusDirectionRef.current);
        if (facing >= Math.min(tuning.facingThreshold, rayArtifact.interaction.facingThreshold)) {
          bestId = rayArtifact.projectId;
        }
      }
    }

    if (!bestId && finalUnlocked) {
      focusDirectionRef.current.set(
        FINAL_INSTALLATION_POSITION.x - camera.position.x,
        FINAL_INSTALLATION_POSITION.y - camera.position.y,
        FINAL_INSTALLATION_POSITION.z - camera.position.z,
      );
      const distance = focusDirectionRef.current.length();
      if (distance <= tuning.interactionDistance + 1.25 && distance > 0.001) {
        focusDirectionRef.current.normalize();
        camera.getWorldDirection(cameraDirectionRef.current).normalize();
        const facing = cameraDirectionRef.current.dot(focusDirectionRef.current);
        if (facing >= tuning.facingThreshold - 0.08) bestId = FINAL_INSTALLATION_ID;
      }
    }

    if (bestId !== lastFocusRef.current) {
      lastFocusRef.current = bestId;
      onFocusChange(bestId);
    }
  });

  return (
    <group name="semantic-artifact-interaction-layer">
      {activeArtifacts.map((artifact) => {
        const [x, y, z] = artifact.interaction.anchor;
        const [width, height] = artifact.interaction.surfaceSize;
        const project = projects.find((candidate) => candidate.id === artifact.projectId);
        const rotationY = project?.side === "left" ? Math.PI / 2 : -Math.PI / 2;
        return (
          <mesh
            key={artifact.id}
            position={[x, y, z]}
            rotation={[0, rotationY, 0]}
            userData={{ semanticArtifactId: artifact.id, semanticProjectId: artifact.projectId, semanticType: artifact.semanticType }}
            renderOrder={-100}
          >
            <planeGeometry args={[width, height]} />
            <meshBasicMaterial transparent opacity={0} depthWrite={false} colorWrite={false} />
          </mesh>
        );
      })}
    </group>
  );
}