"use client";

import { Suspense, useMemo } from "react";
import { Environment, MeshReflectorMaterial, Text, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { FINAL_INSTALLATION_ID, type MuseumProject } from "@/lib/museum";
import { DEFAULT_MATERIAL_PRESET, MATERIAL_PRESETS, type MaterialPresetName } from "@/lib/materialTokens";

type Props = {
  projects: MuseumProject[];
  focusedId: string | null;
  finalUnlocked: boolean;
  materialPreset?: MaterialPresetName;
  premiumDetails?: boolean;
  microInteractions?: boolean;
};

const MIRROR = "https://raw.githubusercontent.com/OmiAvi/artportfolio/128fa847cbcd9cc1627e96c0756aa3b10a4a9334";
const BUST_URL = "https://raw.githubusercontent.com/naver/mesh-simplifier/4a7645c44b6e368de343d904f70cf866f4c5f17a/demo/assets/marble_bust/marble_bust_01_1k.gltf";
const HDRI_URL = `${MIRROR}/public/env/sculpture_exhibition_1k.hdr`;
const FLOOR = {
  map: `${MIRROR}/public/textures/floor/herringbone_parquet_diff_1k.jpg`,
  roughnessMap: `${MIRROR}/public/textures/floor/herringbone_parquet_rough_1k.jpg`,
  normalMap: `${MIRROR}/public/textures/floor/herringbone_parquet_nor_gl_1k.jpg`,
};
const WALL = {
  map: `${MIRROR}/public/textures/wall/white_stucco_diff_1k.jpg`,
  roughnessMap: `${MIRROR}/public/textures/wall/white_stucco_rough_1k.jpg`,
  normalMap: `${MIRROR}/public/textures/wall/white_stucco_nor_gl_1k.jpg`,
};

function tileTexture(texture: THREE.Texture, x: number, y: number, srgb = false) {
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(x, y);
  texture.anisotropy = 8;
  if (srgb) texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function BaselineArtwork({ project, focused }: { project: MuseumProject; focused: boolean }) {
  const x = project.side === "left" ? -4.62 : 4.62;
  const rotationY = project.side === "left" ? Math.PI / 2 : -Math.PI / 2;
  const [base, accent, dark] = project.palette;
  return (
    <group position={[x, 1.75, project.z]} rotation={[0, rotationY, 0]}>
      <mesh><boxGeometry args={[3.5, 2.45, 0.14]} /><meshStandardMaterial color={focused ? "#d9b37b" : "#2a2927"} roughness={0.48} /></mesh>
      <mesh position={[0, 0, 0.09]}><planeGeometry args={[3.15, 2.1]} /><meshStandardMaterial color={base} roughness={0.9} /></mesh>
      <mesh position={[-0.58, 0.22, 0.105]}><planeGeometry args={[1.08, 1.18]} /><meshStandardMaterial color={accent} /></mesh>
      <mesh position={[0.65, -0.28, 0.11]} rotation={[0, 0, -0.18]}><planeGeometry args={[1.3, 0.58]} /><meshStandardMaterial color={dark} /></mesh>
      <Text position={[0, -1.48, 0.1]} fontSize={0.16} color="#272522">{project.title.toUpperCase()}</Text>
    </group>
  );
}

function BaselineScene({ projects, focusedId, finalUnlocked }: Pick<Props, "projects" | "focusedId" | "finalUnlocked">) {
  return <>
    <color attach="background" args={["#12110f"]} />
    <fog attach="fog" args={["#15130f", 14, 34]} />
    <ambientLight intensity={1.35} color="#eee4d7" />
    <directionalLight position={[0, 8, 7]} intensity={1.2} color="#f6e7d1" />
    <mesh position={[0, -0.08, 0]} receiveShadow><boxGeometry args={[9.5, 0.16, 31]} /><meshStandardMaterial color="#8a6d4e" roughness={0.78} /></mesh>
    <mesh position={[-4.85, 2.55, 0]}><boxGeometry args={[0.22, 5.1, 31]} /><meshStandardMaterial color="#e9e4da" roughness={0.94} /></mesh>
    <mesh position={[4.85, 2.55, 0]}><boxGeometry args={[0.22, 5.1, 31]} /><meshStandardMaterial color="#e9e4da" roughness={0.94} /></mesh>
    <mesh position={[0, 5.02, 0]}><boxGeometry args={[9.7, 0.18, 31]} /><meshStandardMaterial color="#181714" roughness={0.92} /></mesh>
    <mesh position={[0, 2.55, -15.1]}><boxGeometry args={[9.5, 5.1, 0.28]} /><meshStandardMaterial color="#ded6ca" /></mesh>
    {projects.map((project) => <BaselineArtwork key={project.id} project={project} focused={focusedId === project.id} />)}
    <FinalInstallation unlocked={finalUnlocked} focused={focusedId === FINAL_INSTALLATION_ID} premium={false} />
  </>;
}

function FocusHalo({ active, color = "#e8c48f" }: { active: boolean; color?: string }) {
  if (!active) return null;
  return <>
    <mesh position={[0, 0, -0.12]}><planeGeometry args={[3.72, 2.72]} /><meshBasicMaterial color={color} transparent opacity={0.075} toneMapped={false} /></mesh>
    <pointLight position={[0, 0.2, 0.9]} intensity={2.2} distance={3.6} color={color} />
  </>;
}

function PremiumPlaque({ project, focused }: { project: MuseumProject; focused: boolean }) {
  return <group position={[0, -1.55, 0.18]}>
    <mesh castShadow><boxGeometry args={[2.72, 0.42, 0.065]} /><meshStandardMaterial color={focused ? "#25231f" : "#171816"} roughness={0.42} metalness={0.32} /></mesh>
    <mesh position={[-1.22, 0, 0.04]}><boxGeometry args={[0.045, 0.29, 0.022]} /><meshStandardMaterial color="#b99568" metalness={0.82} roughness={0.26} emissive="#b99568" emissiveIntensity={focused ? 0.7 : 0.08} /></mesh>
    <Text position={[-1.1, 0.05, 0.045]} fontSize={0.115} color={focused ? "#fff7e9" : "#e8e3da"} anchorX="left" maxWidth={2.05}>{project.title.toUpperCase()}</Text>
    <Text position={[-1.1, -0.1, 0.045]} fontSize={0.068} color={focused ? "#d7c6ae" : "#918a80"} anchorX="left">{`${project.category.toUpperCase()} / ${project.year}`}</Text>
  </group>;
}

function Exhibit({ project, focused, index }: { project: MuseumProject; focused: boolean; index: number }) {
  const x = project.side === "left" ? -4.58 : 4.58;
  const ry = project.side === "left" ? Math.PI / 2 : -Math.PI / 2;
  const [base, accent, dark] = project.palette;
  const variant = index % 3;
  return <group position={[x, 1.9, project.z]} rotation={[0, ry, 0]}>
    <FocusHalo active={focused} />
    {variant === 0 ? <>
      <mesh position={[0, 0, -0.13]} castShadow><boxGeometry args={[3.78, 2.7, 0.2]} /><meshPhysicalMaterial color="#171817" roughness={0.28} metalness={0.68} clearcoat={0.35} clearcoatRoughness={0.3} /></mesh>
      <mesh position={[0, 0, -0.01]} castShadow><boxGeometry args={[3.5, 2.44, 0.11]} /><meshStandardMaterial color="#a98258" roughness={0.3} metalness={0.8} /></mesh>
      <mesh position={[0, 0, 0.075]}><planeGeometry args={[3.2, 2.16]} /><meshStandardMaterial color={base} roughness={0.7} emissive={accent} emissiveIntensity={focused ? 0.08 : 0.01} /></mesh>
      <mesh position={[-0.62, 0.16, 0.09]}><planeGeometry args={[1.08, 1.2]} /><meshStandardMaterial color={accent} roughness={0.6} /></mesh>
      <mesh position={[0.62, -0.24, 0.095]}><planeGeometry args={[1.24, 0.58]} /><meshStandardMaterial color={dark} roughness={0.65} /></mesh>
    </> : variant === 1 ? <>
      <mesh position={[0, 0, -0.12]} castShadow><boxGeometry args={[3.9, 2.62, 0.26]} /><meshPhysicalMaterial color="#101312" roughness={0.2} metalness={0.52} clearcoat={0.55} clearcoatRoughness={0.2} /></mesh>
      <mesh position={[0, 0, 0.03]}><planeGeometry args={[3.5, 2.24]} /><meshStandardMaterial color={dark} roughness={0.28} emissive={accent} emissiveIntensity={focused ? 0.38 : 0.12} /></mesh>
      <mesh position={[-0.82, 0.12, 0.055]}><planeGeometry args={[1.15, 1.24]} /><meshStandardMaterial color={base} roughness={0.42} /></mesh>
      <mesh position={[0.68, -0.16, 0.06]}><planeGeometry args={[1.36, 0.72]} /><meshStandardMaterial color={accent} roughness={0.38} /></mesh>
      <mesh position={[0, -1.42, -0.08]} castShadow><boxGeometry args={[3.2, 0.16, 0.5]} /><meshStandardMaterial color="#a98258" roughness={0.32} metalness={0.8} /></mesh>
    </> : <>
      <mesh position={[0, -0.02, -0.18]} castShadow><boxGeometry args={[3.42, 2.58, 0.1]} /><meshStandardMaterial color="#222321" roughness={0.36} metalness={0.36} /></mesh>
      <mesh position={[0, 0.04, 0.02]} castShadow><boxGeometry args={[3.18, 2.3, 0.08]} /><meshStandardMaterial color={base} roughness={0.62} emissive={accent} emissiveIntensity={focused ? 0.1 : 0.015} /></mesh>
      <mesh position={[-0.72, 0.14, 0.07]}><planeGeometry args={[1.0, 1.18]} /><meshStandardMaterial color={accent} roughness={0.52} /></mesh>
      <mesh position={[0.58, -0.2, 0.075]}><planeGeometry args={[1.28, 0.58]} /><meshStandardMaterial color={dark} roughness={0.62} /></mesh>
      <mesh position={[0, -1.55, -0.5]} castShadow><cylinderGeometry args={[0.42, 0.56, 0.82, 48]} /><meshStandardMaterial color="#77726b" roughness={0.7} /></mesh>
    </>}
    <PremiumPlaque project={project} focused={focused} />
    <spotLight position={[0, 1.8, 1.55]} angle={0.48} penumbra={0.88} intensity={focused ? 38 : 24} distance={6.8} color={focused ? "#ffd9aa" : "#f4d7b4"} castShadow={index < 2} />
  </group>;
}

function MuseumBench() {
  return <group position={[0, 0.42, 3.9]}>
    <mesh castShadow receiveShadow><boxGeometry args={[2.7, 0.28, 0.92]} /><meshPhysicalMaterial color="#70543a" roughness={0.42} clearcoat={0.16} /></mesh>
    {[-1.05, 1.05].map((x) => <mesh key={x} position={[x, -0.34, 0]} castShadow><boxGeometry args={[0.1, 0.68, 0.7]} /><meshStandardMaterial color="#252321" metalness={0.72} roughness={0.34} /></mesh>)}
  </group>;
}

function MarbleBust() {
  const gltf = useGLTF(BUST_URL);
  const cloned = useMemo(() => gltf.scene.clone(true), [gltf.scene]);
  return <group position={[0, 0.02, 9.65]}>
    <mesh position={[0, 0.62, 0]} castShadow receiveShadow><cylinderGeometry args={[0.62, 0.7, 1.24, 64]} /><meshStandardMaterial color="#d4cec3" roughness={0.82} /></mesh>
    <primitive object={cloned} position={[0, 1.23, 0]} scale={2.65} castShadow />
    <spotLight position={[1.8, 3.6, 1.8]} target-position={[0, 1.4, 0]} intensity={42} angle={0.38} penumbra={0.8} distance={6} color="#f5d7b0" castShadow />
    <pointLight position={[-1.4, 1.7, -0.8]} intensity={2.4} distance={4} color="#b8c9d2" />
  </group>;
}

function PremiumArchitecture() {
  const floor = useTexture(FLOOR);
  const wall = useTexture(WALL);
  tileTexture(floor.map, 6, 11, true); tileTexture(floor.roughnessMap, 6, 11); tileTexture(floor.normalMap, 6, 11);
  tileTexture(wall.map, 3, 8, true); tileTexture(wall.roughnessMap, 3, 8); tileTexture(wall.normalMap, 3, 8);

  return <>
    <color attach="background" args={["#191817"]} />
    <fog attach="fog" args={["#191817", 19, 43]} />
    <Environment files={HDRI_URL} environmentIntensity={0.42} />

    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]} receiveShadow>
      <planeGeometry args={[9.55, 30.3]} />
      <MeshReflectorMaterial {...floor} color="#c9ab82" roughness={0.76} metalness={0} mirror={0.08} mixStrength={0.32} mixBlur={4} blur={[520, 180]} resolution={512} depthScale={0.06} />
    </mesh>
    <mesh position={[-4.84, 2.55, 0]} receiveShadow><boxGeometry args={[0.22, 5.1, 30.2]} /><meshStandardMaterial {...wall} color="#f0ede6" roughness={0.92} normalScale={new THREE.Vector2(0.18, 0.18)} /></mesh>
    <mesh position={[4.84, 2.55, 0]} receiveShadow><boxGeometry args={[0.22, 5.1, 30.2]} /><meshStandardMaterial {...wall} color="#f0ede6" roughness={0.92} normalScale={new THREE.Vector2(0.18, 0.18)} /></mesh>
    <mesh position={[0, 2.55, -15.08]} receiveShadow><boxGeometry args={[9.55, 5.1, 0.25]} /><meshStandardMaterial {...wall} color="#ece7dc" roughness={0.9} /></mesh>
    <mesh position={[0, 2.55, 14.18]} receiveShadow><boxGeometry args={[9.55, 5.1, 0.25]} /><meshStandardMaterial {...wall} color="#e8e2d7" roughness={0.9} /></mesh>

    <mesh position={[0, 5.02, 0]} receiveShadow><boxGeometry args={[9.7, 0.18, 30.5]} /><meshStandardMaterial color="#292927" roughness={0.78} /></mesh>
    {[-2.7, 0, 2.7].map((x) => <group key={x}>
      <mesh position={[x, 4.83, 0]}><boxGeometry args={[0.1, 0.12, 28.5]} /><meshStandardMaterial color="#1d1e1d" roughness={0.38} metalness={0.6} /></mesh>
      {[-11, -7, -3, 1, 5, 9, 13].map((z) => <mesh key={z} position={[x, 4.66, z]} rotation={[Math.PI/2, 0, 0]} castShadow><cylinderGeometry args={[0.09, 0.12, 0.24, 32]} /><meshStandardMaterial color="#20211f" roughness={0.3} metalness={0.7} /></mesh>)}
    </group>)}

    {[-11.5,-7.5,-3.5,0.5,4.5,8.5,12.5].map((z) => <group key={z}>
      <rectAreaLight position={[-4.35, 3.65, z]} rotation={[0, Math.PI/2, 0]} width={2.5} height={2.2} intensity={3.4} color="#ffe8cb" />
      <rectAreaLight position={[4.35, 3.65, z]} rotation={[0, -Math.PI/2, 0]} width={2.5} height={2.2} intensity={3.4} color="#ffe8cb" />
    </group>)}

    <hemisphereLight args={["#fff5e6", "#332b24", 0.72]} />
    <ambientLight intensity={0.28} color="#f7efe4" />
    <directionalLight position={[2, 8, 8]} intensity={1.15} color="#fff2df" castShadow />
    <pointLight position={[0, 4.2, 10]} intensity={3.2} distance={12} color="#f5c996" />
    <pointLight position={[0, 3.8, -7]} intensity={1.8} distance={10} color="#dce7ef" />

    <MuseumBench />
    <MarbleBust />
  </>;
}

function FinalInstallation({ unlocked, focused, premium }: { unlocked: boolean; focused: boolean; premium: boolean }) {
  return <group position={[0, 1.95, -14.78]}>
    {premium && focused ? <pointLight position={[0, 0, 1.2]} intensity={3} distance={4} color="#d9b47e" /> : null}
    <mesh castShadow><boxGeometry args={[4.7, 2.75, 0.15]} /><meshPhysicalMaterial color={unlocked ? (focused ? "#8c6844" : "#38312a") : "#292725"} roughness={0.42} metalness={premium ? 0.25 : 0.05} clearcoat={premium ? 0.25 : 0} emissive={unlocked ? "#6d4825" : "#000000"} emissiveIntensity={unlocked ? (focused ? 0.45 : 0.15) : 0} /></mesh>
    <Text position={[0, 0.28, 0.1]} fontSize={0.34} color={unlocked ? "#f5eadb" : "#797267"}>{unlocked ? "COLLECTION COMPLETE" : "FINAL INSTALLATION"}</Text>
    <Text position={[0, -0.4, 0.1]} fontSize={0.14} color={unlocked ? "#d3bea1" : "#6a645c"}>{unlocked ? "ABOUT / CONTACT — PRESS E" : "EXPLORE ALL SIX PROJECTS"}</Text>
  </group>;
}

function RecoveryScene({ projects, focusedId, finalUnlocked }: Props) {
  return <Suspense fallback={null}>
    <PremiumArchitecture />
    {projects.map((project, index) => <Exhibit key={project.id} project={project} focused={focusedId === project.id} index={index} />)}
    <FinalInstallation unlocked={finalUnlocked} focused={focusedId === FINAL_INSTALLATION_ID} premium />
  </Suspense>;
}

export default function MuseumScene(props: Props) {
  const materialPreset = props.materialPreset ?? DEFAULT_MATERIAL_PRESET;
  if (materialPreset === "baseline") return <BaselineScene projects={props.projects} focusedId={props.focusedId} finalUnlocked={props.finalUnlocked} />;
  // Presets remain an A/B control surface; 5.2R deliberately converges all premium presets on the quantified Recovery Skin.
  void MATERIAL_PRESETS[materialPreset];
  return <RecoveryScene {...props} materialPreset={materialPreset} />;
}

useGLTF.preload(BUST_URL);
