"use client";

import { useMemo } from "react";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { FINAL_INSTALLATION_ID, type MuseumProject } from "@/lib/museum";

type Props = {
  projects: MuseumProject[];
  focusedId: string | null;
  finalUnlocked: boolean;
};

function Artwork({ project, focused }: { project: MuseumProject; focused: boolean }) {
  const x = project.side === "left" ? -4.62 : 4.62;
  const rotationY = project.side === "left" ? Math.PI / 2 : -Math.PI / 2;
  const [base, accent, dark] = project.palette;

  return (
    <group position={[x, 1.75, project.z]} rotation={[0, rotationY, 0]}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[3.5, 2.45, 0.14]} />
        <meshStandardMaterial color={focused ? "#d9b37b" : "#2a2927"} roughness={0.48} metalness={0.05} />
      </mesh>
      <mesh position={[0, 0, 0.09]}>
        <planeGeometry args={[3.15, 2.1]} />
        <meshStandardMaterial color={base} roughness={0.9} />
      </mesh>
      <mesh position={[-0.58, 0.22, 0.105]}>
        <planeGeometry args={[1.08, 1.18]} />
        <meshStandardMaterial color={accent} roughness={0.72} />
      </mesh>
      <mesh position={[0.65, -0.28, 0.11]} rotation={[0, 0, -0.18]}>
        <planeGeometry args={[1.3, 0.58]} />
        <meshStandardMaterial color={dark} roughness={0.78} />
      </mesh>
      <mesh position={[0.42, 0.54, 0.115]} rotation={[0, 0, 0.12]}>
        <circleGeometry args={[0.34, 48]} />
        <meshStandardMaterial color="#f4eee3" roughness={0.82} />
      </mesh>
      <Text position={[0, -1.48, 0.1]} fontSize={0.16} color="#272522" anchorX="center" anchorY="middle" maxWidth={3.3}>
        {project.title.toUpperCase()}
      </Text>
      <spotLight
        position={[0, 1.75, 1.35]}
        angle={0.48}
        penumbra={0.75}
        intensity={focused ? 28 : 18}
        distance={5.5}
        color={focused ? "#ffd39b" : "#f2c996"}
        target-position={[0, 0, 0]}
        castShadow={false}
      />
    </group>
  );
}

function FinalInstallation({ unlocked, focused }: { unlocked: boolean; focused: boolean }) {
  return (
    <group position={[0, 1.95, -14.82]}>
      <mesh>
        <boxGeometry args={[4.6, 2.65, 0.12]} />
        <meshStandardMaterial
          color={unlocked ? (focused ? "#b98b56" : "#3a3027") : "#24211d"}
          roughness={0.66}
          emissive={unlocked ? "#5b3d21" : "#000000"}
          emissiveIntensity={unlocked ? (focused ? 0.55 : 0.24) : 0}
        />
      </mesh>
      <Text position={[0, 0.28, 0.09]} fontSize={0.34} color={unlocked ? "#f1e2ce" : "#756d62"} anchorX="center" anchorY="middle">
        {unlocked ? "COLLECTION COMPLETE" : "FINAL INSTALLATION"}
      </Text>
      <Text position={[0, -0.38, 0.09]} fontSize={0.14} color={unlocked ? "#cdb79c" : "#625d55"} anchorX="center" anchorY="middle">
        {unlocked ? "ABOUT / CONTACT — PRESS E" : "EXPLORE ALL SIX PROJECTS"}
      </Text>
      {unlocked ? (
        <spotLight position={[0, 1.7, 2.0]} angle={0.58} penumbra={0.8} intensity={focused ? 34 : 22} distance={6} color="#f0be82" target-position={[0, 0, 0]} />
      ) : null}
    </group>
  );
}

export default function MuseumScene({ projects, focusedId, finalUnlocked }: Props) {
  const floorMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#8a6d4e", roughness: 0.78, metalness: 0.03 }),
    [],
  );

  return (
    <>
      <color attach="background" args={["#12110f"]} />
      <fog attach="fog" args={["#15130f", 14, 34]} />
      <ambientLight intensity={1.35} color="#eee4d7" />
      <directionalLight position={[0, 8, 7]} intensity={1.2} color="#f6e7d1" />

      <mesh position={[0, -0.08, 0]} receiveShadow material={floorMaterial}><boxGeometry args={[9.5, 0.16, 31]} /></mesh>
      <mesh position={[-4.85, 2.55, 0]} receiveShadow><boxGeometry args={[0.22, 5.1, 31]} /><meshStandardMaterial color="#e9e4da" roughness={0.94} /></mesh>
      <mesh position={[4.85, 2.55, 0]} receiveShadow><boxGeometry args={[0.22, 5.1, 31]} /><meshStandardMaterial color="#e9e4da" roughness={0.94} /></mesh>
      <mesh position={[0, 5.02, 0]} receiveShadow><boxGeometry args={[9.7, 0.18, 31]} /><meshStandardMaterial color="#181714" roughness={0.92} /></mesh>
      <mesh position={[0, 2.55, -15.1]}><boxGeometry args={[9.5, 5.1, 0.28]} /><meshStandardMaterial color="#ded6ca" roughness={0.9} /></mesh>
      <mesh position={[0, 2.55, 14.2]}><boxGeometry args={[9.5, 5.1, 0.28]} /><meshStandardMaterial color="#d9d1c4" roughness={0.9} /></mesh>

      <group position={[0, 0.42, 3.8]}>
        <mesh castShadow receiveShadow><boxGeometry args={[2.1, 0.42, 0.72]} /><meshStandardMaterial color="#54483d" roughness={0.72} /></mesh>
        <mesh position={[-0.78, -0.37, 0]}><boxGeometry args={[0.12, 0.72, 0.58]} /><meshStandardMaterial color="#26221e" roughness={0.82} /></mesh>
        <mesh position={[0.78, -0.37, 0]}><boxGeometry args={[0.12, 0.72, 0.58]} /><meshStandardMaterial color="#26221e" roughness={0.82} /></mesh>
      </group>
      <group position={[0, 0.42, -5.0]}>
        <mesh castShadow receiveShadow><boxGeometry args={[2.1, 0.42, 0.72]} /><meshStandardMaterial color="#54483d" roughness={0.72} /></mesh>
        <mesh position={[-0.78, -0.37, 0]}><boxGeometry args={[0.12, 0.72, 0.58]} /><meshStandardMaterial color="#26221e" roughness={0.82} /></mesh>
        <mesh position={[0.78, -0.37, 0]}><boxGeometry args={[0.12, 0.72, 0.58]} /><meshStandardMaterial color="#26221e" roughness={0.82} /></mesh>
      </group>

      <FinalInstallation unlocked={finalUnlocked} focused={focusedId === FINAL_INSTALLATION_ID} />

      {projects.map((project) => (
        <Artwork key={project.id} project={project} focused={focusedId === project.id} />
      ))}
    </>
  );
}
