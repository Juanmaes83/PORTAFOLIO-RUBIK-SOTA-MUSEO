"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { InteractiveArtifact } from "@/lib/artifacts";
import type { ArtifactLifecycleSnapshot, ArtifactLifecycleState } from "@/lib/mediaLifecycle";
import type { MuseumProject } from "@/lib/museum";

type SignalProps = {
  artifact: InteractiveArtifact;
  project: MuseumProject;
  state: ArtifactLifecycleState;
};

function stateStrength(state: ArtifactLifecycleState) {
  if (state === "inspect") return 1;
  if (state === "preview") return 0.72;
  if (state === "preload") return 0.18;
  return 0;
}

function ObjectTableSignal({ artifact, state }: Pick<SignalProps, "artifact" | "state">) {
  const groupRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const targetStrength = stateStrength(state);
  const [x, , z] = artifact.interaction.anchor;

  useFrame(({ clock }, delta) => {
    const group = groupRef.current;
    const light = lightRef.current;
    if (!group || !light) return;
    const alpha = 1 - Math.exp(-7 * Math.min(delta, 0.05));
    const pulse = state === "preview" ? 0.985 + Math.sin(clock.elapsedTime * 1.7) * 0.015 : 1;
    group.scale.x = THREE.MathUtils.lerp(group.scale.x, 1 + targetStrength * 0.015 * pulse, alpha);
    group.scale.z = THREE.MathUtils.lerp(group.scale.z, 1 + targetStrength * 0.015 * pulse, alpha);
    light.intensity = THREE.MathUtils.lerp(light.intensity, targetStrength * 3.2, alpha);
  });

  if (state === "dormant") return null;

  return (
    <group ref={groupRef} position={[x, 0.055, z]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} renderOrder={-2}>
        <planeGeometry args={[3.45, 2.2]} />
        <meshBasicMaterial
          color="#c7a36f"
          transparent
          opacity={state === "inspect" ? 0.08 : state === "preview" ? 0.05 : 0.014}
          toneMapped={false}
          depthWrite={false}
        />
      </mesh>
      <pointLight ref={lightRef} position={[0, 1.35, 0.15]} intensity={0} distance={4.6} color="#e7c08c" />
    </group>
  );
}

function LifecycleSignal({ artifact, project, state }: SignalProps) {
  const groupRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const targetStrength = stateStrength(state);
  const rotationY = project.side === "left" ? Math.PI / 2 : -Math.PI / 2;
  const [x, y, z] = artifact.interaction.anchor;
  const accent = artifact.semanticType === "media-wall"
    ? "#9eb7b2"
    : artifact.semanticType === "display"
      ? "#c7a36f"
      : "#ddb982";

  useFrame(({ clock }, delta) => {
    const group = groupRef.current;
    const light = lightRef.current;
    if (!group || !light) return;
    const alpha = 1 - Math.exp(-7 * Math.min(delta, 0.05));
    const pulse = state === "preview" ? 0.96 + Math.sin(clock.elapsedTime * 2.1) * 0.04 : 1;
    group.scale.x = THREE.MathUtils.lerp(group.scale.x, 1 + targetStrength * 0.018 * pulse, alpha);
    group.scale.y = THREE.MathUtils.lerp(group.scale.y, 1 + targetStrength * 0.018 * pulse, alpha);
    light.intensity = THREE.MathUtils.lerp(light.intensity, targetStrength * 2.8, alpha);
  });

  if (state === "dormant") return null;

  return (
    <group ref={groupRef} position={[x, y, z]} rotation={[0, rotationY, 0]}>
      <mesh position={[0, 0, -0.24]} renderOrder={-2}>
        <planeGeometry args={[4.08, 3.02]} />
        <meshBasicMaterial
          color={accent}
          transparent
          opacity={state === "inspect" ? 0.095 : state === "preview" ? 0.065 : 0.018}
          toneMapped={false}
          depthWrite={false}
        />
      </mesh>
      <mesh position={[0, -1.46, 0.2]}>
        <boxGeometry args={[state === "inspect" ? 2.7 : state === "preview" ? 2.15 : 1.3, 0.026, 0.035]} />
        <meshBasicMaterial
          color={accent}
          transparent
          opacity={state === "preload" ? 0.28 : 0.92}
          toneMapped={false}
        />
      </mesh>
      <pointLight
        ref={lightRef}
        position={[0, 0.15, 1.05]}
        intensity={0}
        distance={4.8}
        color={accent}
      />
    </group>
  );
}

export default function SemanticLifecycleLayer({
  artifacts,
  projects,
  states,
}: {
  artifacts: InteractiveArtifact[];
  projects: MuseumProject[];
  states: ArtifactLifecycleSnapshot;
}) {
  return (
    <group name="semantic-landmark-lifecycle-layer">
      {artifacts.map((artifact) => {
        const project = projects.find((candidate) => candidate.id === artifact.projectId);
        if (!project) return null;
        const state = states[artifact.projectId] ?? "dormant";
        if (artifact.landmarkType === "object-table") {
          return <ObjectTableSignal key={artifact.id} artifact={artifact} state={state} />;
        }
        return (
          <LifecycleSignal
            key={artifact.id}
            artifact={artifact}
            project={project}
            state={state}
          />
        );
      })}
    </group>
  );
}
