"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Text } from "@react-three/drei";
import * as THREE from "three";
import { getArtifactForProject } from "@/lib/artifacts";
import type { MuseumProject } from "@/lib/museum";

const ARCHITECTURE_ARTIFACT = getArtifactForProject("architecture");
const LANDMARK_POSITION: [number, number, number] = ARCHITECTURE_ARTIFACT
  ? [ARCHITECTURE_ARTIFACT.interaction.anchor[0], 0.02, ARCHITECTURE_ARTIFACT.interaction.anchor[2]]
  : [2.25, 0.02, -2.65];

export default function ArchitectureMaquetteLandmark({
  project,
  focused,
}: {
  project: MuseumProject;
  focused: boolean;
}) {
  const roofRef = useRef<THREE.Group>(null);
  const volumeRef = useRef<THREE.Group>(null);
  const glassRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((_, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    const alpha = 1 - Math.exp(-7 * delta);
    const focus = focused ? 1 : 0;

    if (roofRef.current) {
      roofRef.current.position.y = THREE.MathUtils.lerp(roofRef.current.position.y, 1.31 + focus * 0.008, alpha);
    }
    if (volumeRef.current) {
      volumeRef.current.position.x = THREE.MathUtils.lerp(volumeRef.current.position.x, 0.42 - focus * 0.006, alpha);
    }
    if (glassRef.current) {
      glassRef.current.position.y = THREE.MathUtils.lerp(glassRef.current.position.y, 1.16 + focus * 0.01, alpha);
    }
    if (lightRef.current) {
      lightRef.current.intensity = THREE.MathUtils.lerp(lightRef.current.intensity, focused ? 4.4 : 2.1, alpha);
    }
  });

  return (
    <group position={LANDMARK_POSITION} name="architecture-maquette-landmark">
      <RoundedBox args={[3.05, 0.16, 1.72]} radius={0.065} smoothness={5} position={[0, 0.78, 0]} castShadow receiveShadow>
        <meshPhysicalMaterial color="#c9c2b7" roughness={0.58} clearcoat={0.12} />
      </RoundedBox>

      {[-1.12, 1.12].flatMap((x) => [-0.62, 0.62].map((z) => (
        <RoundedBox key={`${x}-${z}`} args={[0.1, 1.5, 0.1]} radius={0.025} smoothness={4} position={[x, 0.02, z]} castShadow>
          <meshStandardMaterial color="#2f3431" roughness={0.3} metalness={0.66} />
        </RoundedBox>
      )))}

      <RoundedBox args={[2.45, 0.08, 1.24]} radius={0.035} smoothness={4} position={[0, 0.91, 0]} castShadow>
        <meshStandardMaterial color="#877664" roughness={0.5} />
      </RoundedBox>

      <group position={[-0.52, 0, -0.08]}>
        <RoundedBox args={[0.92, 0.54, 0.58]} radius={0.025} smoothness={4} position={[0, 1.2, 0]} castShadow>
          <meshStandardMaterial color="#e7e1d6" roughness={0.82} />
        </RoundedBox>
        <mesh position={[0.18, 1.49, 0.08]} castShadow>
          <boxGeometry args={[0.54, 0.12, 0.42]} />
          <meshStandardMaterial color="#b7afa3" roughness={0.68} />
        </mesh>
      </group>

      <group ref={volumeRef} position={[0.42, 0, 0.22]}>
        <RoundedBox args={[0.78, 0.74, 0.48]} radius={0.025} smoothness={4} position={[0, 1.26, 0]} castShadow>
          <meshStandardMaterial color="#d4cec3" roughness={0.76} />
        </RoundedBox>
        <mesh position={[0.18, 1.08, 0.28]} castShadow>
          <boxGeometry args={[0.46, 0.18, 0.3]} />
          <meshStandardMaterial color="#766555" roughness={0.5} />
        </mesh>
      </group>

      <group ref={roofRef} position={[0.08, 1.31, -0.18]}>
        <RoundedBox args={[1.28, 0.09, 0.72]} radius={0.02} smoothness={4} rotation={[0, -0.14, 0]} castShadow>
          <meshPhysicalMaterial color="#f0ebe2" roughness={0.6} clearcoat={0.08} />
        </RoundedBox>
      </group>

      <mesh ref={glassRef} position={[0.86, 1.16, -0.36]} rotation={[0, -0.18, 0]}>
        <boxGeometry args={[0.7, 0.045, 0.46]} />
        <meshPhysicalMaterial color="#b8c5c4" transparent opacity={0.28} transmission={0.36} roughness={0.12} metalness={0.04} />
      </mesh>

      <group position={[-0.92, 0.95, 0.58]}>
        <mesh position={[0, 0, 0]}><boxGeometry args={[0.28, 0.045, 0.28]} /><meshStandardMaterial color="#88745f" roughness={0.72} /></mesh>
        <mesh position={[0.36, 0, 0]}><boxGeometry args={[0.28, 0.045, 0.28]} /><meshStandardMaterial color="#464b48" roughness={0.32} metalness={0.58} /></mesh>
        <mesh position={[0.72, 0, 0]}><boxGeometry args={[0.28, 0.045, 0.28]} /><meshPhysicalMaterial color="#bcc8c7" roughness={0.1} transmission={0.22} /></mesh>
      </group>

      <RoundedBox args={[1.92, 0.1, 0.42]} radius={0.035} smoothness={4} position={[0.32, 0.93, -0.62]}>
        <meshStandardMaterial color={focused ? "#242724" : "#30322f"} roughness={0.4} metalness={0.3} />
      </RoundedBox>
      <Text position={[-0.56, 0.99, -0.615]} rotation={[-Math.PI / 2, 0, 0]} fontSize={0.078} color={focused ? "#f6e8d6" : "#ddd5ca"} anchorX="left" maxWidth={1.65}>
        {project.title.toUpperCase()}
      </Text>
      <Text position={[-0.56, 0.988, -0.48]} rotation={[-Math.PI / 2, 0, 0]} fontSize={0.052} color="#978c7e" anchorX="left">
        {`${project.category.toUpperCase()} / ${project.year}`}
      </Text>

      <pointLight ref={lightRef} position={[0.3, 2.65, 0.65]} intensity={2.1} distance={5.2} color="#f0cfa2" />
      <spotLight position={[-1.3, 3.7, 1.6]} intensity={30} angle={0.4} penumbra={0.9} distance={6} color="#f5dec2" castShadow />
    </group>
  );
}
