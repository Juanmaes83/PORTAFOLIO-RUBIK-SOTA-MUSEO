"use client";

import { Suspense, useMemo } from "react";
import {
  ContactShadows,
  Environment,
  MeshReflectorMaterial,
  RoundedBox,
  Text,
  useGLTF,
  useTexture,
} from "@react-three/drei";
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

type PBRTextureSet = {
  map: THREE.Texture;
  roughnessMap: THREE.Texture;
  normalMap: THREE.Texture;
};

const OMI_MIRROR = "https://raw.githubusercontent.com/OmiAvi/artportfolio/128fa847cbcd9cc1627e96c0756aa3b10a4a9334";
const BUST_URL = "https://raw.githubusercontent.com/naver/mesh-simplifier/4a7645c44b6e368de343d904f70cf866f4c5f17a/demo/assets/marble_bust/marble_bust_01_1k.gltf";
const CHAIR_URL = "https://raw.githubusercontent.com/AndreTInfante/portalgi/333eab21bcc15b298435337decc723e598363201/assets/models/gltf/mid_century_lounge_chair/mid_century_lounge_chair_1k.gltf";
const HDRI_URL = `${OMI_MIRROR}/public/env/sculpture_exhibition_1k.hdr`;
const FLOOR = {
  map: `${OMI_MIRROR}/public/textures/floor/herringbone_parquet_diff_1k.jpg`,
  roughnessMap: `${OMI_MIRROR}/public/textures/floor/herringbone_parquet_rough_1k.jpg`,
  normalMap: `${OMI_MIRROR}/public/textures/floor/herringbone_parquet_nor_gl_1k.jpg`,
};
const WALL = {
  map: `${OMI_MIRROR}/public/textures/wall/white_stucco_diff_1k.jpg`,
  roughnessMap: `${OMI_MIRROR}/public/textures/wall/white_stucco_rough_1k.jpg`,
  normalMap: `${OMI_MIRROR}/public/textures/wall/white_stucco_nor_gl_1k.jpg`,
};

function tileTexture(texture: THREE.Texture, x: number, y: number, srgb = false) {
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(x, y);
  texture.anisotropy = 8;
  if (srgb) texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function useClonedAsset(url: string) {
  const gltf = useGLTF(url);
  return useMemo(() => {
    const scene = gltf.scene.clone(true);
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });
    return scene;
  }, [gltf.scene]);
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

function FocusHalo({ active }: { active: boolean }) {
  if (!active) return null;
  return <>
    <mesh position={[0, 0, -0.19]}><planeGeometry args={[4.04, 2.98]} /><meshBasicMaterial color="#e9c28d" transparent opacity={0.12} toneMapped={false} /></mesh>
    <pointLight position={[0, 0.15, 1.15]} intensity={3.8} distance={4.6} color="#ffd6a0" />
  </>;
}

function PremiumPlaque({ project, focused }: { project: MuseumProject; focused: boolean }) {
  return <group position={[0, -1.58, 0.25]}>
    <RoundedBox args={[2.82, 0.44, 0.09]} radius={0.035} smoothness={4} castShadow>
      <meshStandardMaterial color={focused ? "#292722" : "#171816"} roughness={0.38} metalness={0.36} />
    </RoundedBox>
    <mesh position={[-1.26, 0, 0.055]}><boxGeometry args={[0.045, 0.3, 0.026]} /><meshStandardMaterial color="#b99568" metalness={0.84} roughness={0.24} emissive="#b99568" emissiveIntensity={focused ? 1 : 0.08} /></mesh>
    <Text position={[-1.12, 0.055, 0.06]} fontSize={0.115} color={focused ? "#fff9ef" : "#e8e3da"} anchorX="left" maxWidth={2.1}>{project.title.toUpperCase()}</Text>
    <Text position={[-1.12, -0.106, 0.06]} fontSize={0.068} color={focused ? "#dbc8ae" : "#918a80"} anchorX="left">{`${project.category.toUpperCase()} / ${project.year}`}</Text>
  </group>;
}

function WallFrame({ base, accent, dark, focused, variant = 0 }: { base: string; accent: string; dark: string; focused: boolean; variant?: number }) {
  const frameColor = variant === 0 ? "#202220" : variant === 1 ? "#8b735a" : "#323633";
  const depth = variant === 2 ? 0.2 : 0.14;
  return <group>
    <RoundedBox args={[3.72, 2.62, depth]} radius={0.055} smoothness={5} position={[0, 0, -0.11]} castShadow>
      <meshPhysicalMaterial color={frameColor} roughness={variant === 1 ? 0.32 : 0.22} metalness={variant === 1 ? 0.58 : 0.68} clearcoat={0.32} clearcoatRoughness={0.18} />
    </RoundedBox>
    <RoundedBox args={[3.38, 2.28, 0.08]} radius={0.025} smoothness={4} position={[0, 0, 0.02]}>
      <meshStandardMaterial color="#ece7dd" roughness={0.82} />
    </RoundedBox>
    <mesh position={[0, 0, 0.075]}><planeGeometry args={[3.08, 1.98]} /><meshStandardMaterial color={base} roughness={0.62} emissive={accent} emissiveIntensity={focused ? 0.08 : 0.008} /></mesh>
    <mesh position={[-0.64, 0.2, 0.09]}><planeGeometry args={[1.02, 1.08]} /><meshStandardMaterial color={accent} roughness={0.48} /></mesh>
    <mesh position={[0.64, -0.22, 0.095]} rotation={[0, 0, -0.11]}><planeGeometry args={[1.18, 0.55]} /><meshStandardMaterial color={dark} roughness={0.56} /></mesh>
    {variant === 2 ? <mesh position={[0, 0, 0.11]}><planeGeometry args={[3.22, 2.1]} /><meshPhysicalMaterial transparent opacity={0.08} color="#dfe7e5" transmission={0.18} roughness={0.08} /></mesh> : null}
  </group>;
}

function MediaWall({ base, accent, dark, focused }: { base: string; accent: string; dark: string; focused: boolean }) {
  return <group>
    <RoundedBox args={[4.0, 2.76, 0.34]} radius={0.09} smoothness={6} position={[0, 0, -0.16]} castShadow>
      <meshPhysicalMaterial color="#111513" roughness={0.18} metalness={0.56} clearcoat={0.62} clearcoatRoughness={0.15} />
    </RoundedBox>
    <RoundedBox args={[3.58, 2.32, 0.11]} radius={0.055} smoothness={5} position={[0, 0.02, 0.07]}>
      <meshPhysicalMaterial color={dark} roughness={0.18} metalness={0.08} clearcoat={0.36} emissive={accent} emissiveIntensity={focused ? 0.36 : 0.1} />
    </RoundedBox>
    <mesh position={[-0.84, 0.12, 0.14]}><planeGeometry args={[1.12, 1.16]} /><meshStandardMaterial color={base} roughness={0.38} /></mesh>
    <mesh position={[0.68, -0.18, 0.145]}><planeGeometry args={[1.32, 0.7]} /><meshStandardMaterial color={accent} roughness={0.32} /></mesh>
    {[-1.4, -1.05, -0.7, -0.35, 0, 0.35, 0.7, 1.05, 1.4].map((x) => <mesh key={x} position={[x, -1.28, -0.34]}><boxGeometry args={[0.16, 0.035, 0.03]} /><meshStandardMaterial color="#4c514d" roughness={0.42} metalness={0.42} /></mesh>)}
    <RoundedBox args={[3.18, 0.16, 0.54]} radius={0.05} smoothness={4} position={[0, -1.46, -0.12]} castShadow>
      <meshStandardMaterial color="#a77c4e" roughness={0.3} metalness={0.76} />
    </RoundedBox>
    <mesh position={[0, 0.02, 0.155]}><planeGeometry args={[3.42, 2.16]} /><meshPhysicalMaterial color="#dce4e1" transparent opacity={0.07} transmission={0.16} roughness={0.1} /></mesh>
  </group>;
}

function Pedestal({ kind = 0 }: { kind?: number }) {
  if (kind === 1) return <group>
    <mesh castShadow receiveShadow><cylinderGeometry args={[0.47, 0.52, 0.86, 48]} /><meshStandardMaterial color="#bab3a8" roughness={0.82} /></mesh>
    <mesh position={[0, 0.46, 0]}><cylinderGeometry args={[0.5, 0.5, 0.06, 48]} /><meshStandardMaterial color="#8d755c" roughness={0.36} metalness={0.48} /></mesh>
  </group>;
  if (kind === 2) return <group>
    <RoundedBox args={[0.72, 0.78, 0.72]} radius={0.08} smoothness={5} castShadow receiveShadow><meshStandardMaterial color="#3c403d" roughness={0.44} metalness={0.38} /></RoundedBox>
    <RoundedBox args={[0.58, 0.08, 0.58]} radius={0.025} smoothness={4} position={[0, 0.43, 0]}><meshStandardMaterial color="#b08a61" roughness={0.26} metalness={0.78} /></RoundedBox>
  </group>;
  return <RoundedBox args={[0.88, 0.84, 0.78]} radius={0.08} smoothness={6} castShadow receiveShadow><meshStandardMaterial color="#c6c0b6" roughness={0.78} /></RoundedBox>;
}

function FloatingPanel({ base, accent, dark, focused }: { base: string; accent: string; dark: string; focused: boolean }) {
  return <group>
    <RoundedBox args={[3.46, 2.62, 0.12]} radius={0.075} smoothness={5} position={[0, -0.03, -0.18]} castShadow>
      <meshStandardMaterial color="#252724" roughness={0.3} metalness={0.34} emissive={accent} emissiveIntensity={focused ? 0.08 : 0.01} />
    </RoundedBox>
    <RoundedBox args={[3.18, 2.32, 0.095]} radius={0.04} smoothness={4} position={[0, 0.03, 0.025]} castShadow>
      <meshStandardMaterial color={base} roughness={0.58} />
    </RoundedBox>
    <mesh position={[-0.72, 0.15, 0.085]}><planeGeometry args={[1.02, 1.18]} /><meshStandardMaterial color={accent} roughness={0.48} /></mesh>
    <mesh position={[0.59, -0.2, 0.09]} rotation={[0, 0, -0.11]}><planeGeometry args={[1.24, 0.57]} /><meshStandardMaterial color={dark} roughness={0.58} /></mesh>
    <group position={[0, -1.62, -0.54]}><Pedestal kind={2} /></group>
  </group>;
}

function Exhibit({ project, focused, index }: { project: MuseumProject; focused: boolean; index: number }) {
  const x = project.side === "left" ? -4.52 : 4.52;
  const ry = project.side === "left" ? Math.PI / 2 : -Math.PI / 2;
  const [base, accent, dark] = project.palette;
  const variant = index % 4;
  return <group position={[x, 1.92, project.z]} rotation={[0, ry, 0]}>
    <FocusHalo active={focused} />
    {variant === 0 ? <WallFrame base={base} accent={accent} dark={dark} focused={focused} variant={0} /> : null}
    {variant === 1 ? <MediaWall base={base} accent={accent} dark={dark} focused={focused} /> : null}
    {variant === 2 ? <FloatingPanel base={base} accent={accent} dark={dark} focused={focused} /> : null}
    {variant === 3 ? <WallFrame base={base} accent={accent} dark={dark} focused={focused} variant={2} /> : null}
    <PremiumPlaque project={project} focused={focused} />
    <pointLight position={[0, 1.55, 1.25]} intensity={focused ? 3.2 : 1.35} distance={4.5} color={focused ? "#ffd7a4" : "#f1d5b5"} />
  </group>;
}

function MuseumSeating() {
  const chairA = useClonedAsset(CHAIR_URL);
  const chairB = useClonedAsset(CHAIR_URL);
  return <group position={[0, 0.02, 3.65]}>
    <primitive object={chairA} position={[-0.9, 0, 0]} rotation={[0, 0.18, 0]} scale={1.15} />
    <primitive object={chairB} position={[0.9, 0, 0]} rotation={[0, -0.18, 0]} scale={1.15} />
    <RoundedBox args={[0.85, 0.16, 0.62]} radius={0.06} smoothness={5} position={[0, 0.22, 0.05]} castShadow><meshStandardMaterial color="#8f7155" roughness={0.34} metalness={0.22} /></RoundedBox>
  </group>;
}

function MarbleBust() {
  const bust = useClonedAsset(BUST_URL);
  return <group position={[0, 0.02, 9.35]}>
    <group position={[0, 0.52, 0]}><Pedestal kind={1} /></group>
    <primitive object={bust} position={[0, 1.25, 0]} scale={2.65} />
    <spotLight position={[1.8, 3.75, 1.75]} intensity={42} angle={0.34} penumbra={0.88} distance={6.2} color="#f6d7af" castShadow />
    <pointLight position={[-1.4, 1.85, -0.7]} intensity={2.3} distance={4.6} color="#b9cad7" />
  </group>;
}

function TrackLightFixture({ x, z, side, focused = false }: { x: number; z: number; side: "left" | "right"; focused?: boolean }) {
  const target = useMemo(() => new THREE.Object3D(), []);
  const targetX = side === "left" ? -4.15 : 4.15;
  const yaw = side === "left" ? -0.72 : 0.72;
  return <>
    <group position={[x, 4.58, z]} rotation={[0, yaw, 0]}>
      <RoundedBox args={[0.16, 0.1, 0.36]} radius={0.035} smoothness={4} castShadow><meshStandardMaterial color="#171918" roughness={0.26} metalness={0.74} /></RoundedBox>
      <mesh position={[0, -0.12, 0.08]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.035, 0.035, 0.24, 18]} /><meshStandardMaterial color="#202321" roughness={0.26} metalness={0.7} /></mesh>
      <group position={[0, -0.28, 0.18]} rotation={[Math.PI / 2.55, 0, 0]}>
        <mesh castShadow><cylinderGeometry args={[0.14, 0.17, 0.34, 28]} /><meshStandardMaterial color="#202321" roughness={0.22} metalness={0.76} /></mesh>
        <mesh position={[0, 0.19, 0]}><cylinderGeometry args={[0.115, 0.115, 0.035, 28]} /><meshPhysicalMaterial color="#e1c59e" roughness={0.08} metalness={0.12} transmission={0.08} emissive="#e4bd83" emissiveIntensity={focused ? 0.55 : 0.16} /></mesh>
      </group>
    </group>
    <primitive object={target} position={[targetX, 1.75, z]} />
    <spotLight position={[x, 4.28, z + 0.18]} target={target} angle={0.34} penumbra={0.88} intensity={focused ? 38 : 24} distance={7.4} color={focused ? "#ffd6a0" : "#f4dcc0"} castShadow={Math.abs(z) < 8} />
  </>;
}

function RubikHeroInstallation() {
  return <group position={[0, 1.0, -5.2]}>
    <RoundedBox args={[2.7, 0.18, 1.7]} radius={0.07} smoothness={5} position={[0, -0.84, 0]} castShadow><meshStandardMaterial color="#a7a097" roughness={0.76} /></RoundedBox>
    {[[-0.58, 0, -0.42], [0, 0.42, 0], [0.58, 0.12, 0.42], [0, 0.92, -0.15]].map(([x, y, z], i) => <group key={i} position={[x, y, z]} rotation={[0.18 * i, 0.35 * i, 0.14 * (i - 1.5)]}>
      <RoundedBox args={[0.72, 0.72, 0.72]} radius={0.09} smoothness={6} castShadow>
        <meshPhysicalMaterial color={i % 2 === 0 ? "#9a744f" : "#35403f"} roughness={0.22} metalness={i % 2 === 0 ? 0.72 : 0.46} clearcoat={0.38} clearcoatRoughness={0.16} />
      </RoundedBox>
      <RoundedBox args={[0.42, 0.08, 0.42]} radius={0.03} smoothness={4} position={[0, 0, 0.39]}><meshBasicMaterial color={i % 2 === 0 ? "#e2bd88" : "#94b1ad"} toneMapped={false} /></RoundedBox>
    </group>)}
    <pointLight position={[0, 0.8, 1.4]} intensity={3.5} distance={5} color="#e8bd82" />
    <Text position={[0, -1.14, 0.85]} fontSize={0.12} color="#6c6256" anchorX="center">RUBIK / SYSTEM 02</Text>
  </group>;
}

function DisplayTable() {
  return <group position={[0, 0.0, -0.65]}>
    <RoundedBox args={[2.65, 0.16, 1.28]} radius={0.07} smoothness={5} position={[0, 0.82, 0]} castShadow receiveShadow><meshPhysicalMaterial color="#c8c1b6" roughness={0.56} clearcoat={0.12} /></RoundedBox>
    {[-0.95, 0.95].flatMap((x) => [-0.4, 0.4].map((z) => <RoundedBox key={`${x}-${z}`} args={[0.12, 1.55, 0.12]} radius={0.03} smoothness={4} position={[x, 0.05, z]} castShadow><meshStandardMaterial color="#343936" roughness={0.3} metalness={0.62} /></RoundedBox>))}
    <RoundedBox args={[1.32, 0.18, 0.72]} radius={0.05} smoothness={5} position={[0, 1.03, 0]} rotation={[0, 0.2, 0]} castShadow><meshPhysicalMaterial color="#6f5742" roughness={0.28} metalness={0.28} /></RoundedBox>
    <Text position={[0, 1.16, 0.38]} rotation={[-Math.PI / 2, 0, 0]} fontSize={0.09} color="#262522" anchorX="center">PROJECT / MATERIAL STUDY</Text>
  </group>;
}

function WallArchitecture({ wall }: { wall: PBRTextureSet }) {
  const reliefZ = [-12.2, -8.1, -4.0, 0.1, 4.2, 8.3, 12.3];
  return <>
    <mesh position={[-4.84, 2.55, 0]} receiveShadow><boxGeometry args={[0.22, 5.1, 30.2]} /><meshStandardMaterial {...wall} color="#f0ede6" roughness={0.92} normalScale={new THREE.Vector2(0.18, 0.18)} /></mesh>
    <mesh position={[4.84, 2.55, 0]} receiveShadow><boxGeometry args={[0.22, 5.1, 30.2]} /><meshStandardMaterial {...wall} color="#f0ede6" roughness={0.92} normalScale={new THREE.Vector2(0.18, 0.18)} /></mesh>
    {reliefZ.map((z, i) => <group key={z}>
      <RoundedBox args={[0.28, 4.55, 0.18]} radius={0.035} smoothness={3} position={[-4.64, 2.55, z]} castShadow><meshStandardMaterial color={i % 2 ? "#dad4ca" : "#e4dfd6"} roughness={0.8} /></RoundedBox>
      <RoundedBox args={[0.28, 4.55, 0.18]} radius={0.035} smoothness={3} position={[4.64, 2.55, z]} castShadow><meshStandardMaterial color={i % 2 ? "#dad4ca" : "#e4dfd6"} roughness={0.8} /></RoundedBox>
      <mesh position={[-4.48, 0.24, z]}><boxGeometry args={[0.08, 0.18, 2.72]} /><meshStandardMaterial color="#837769" roughness={0.56} /></mesh>
      <mesh position={[4.48, 0.24, z]}><boxGeometry args={[0.08, 0.18, 2.72]} /><meshStandardMaterial color="#837769" roughness={0.56} /></mesh>
    </group>)}
    {[-9.9, -5.8, -1.7, 2.4, 6.5, 10.6].map((z, i) => <group key={`niche-${z}`}>
      <RoundedBox args={[0.22, 3.55, 3.16]} radius={0.045} smoothness={4} position={[-4.61, 2.25, z]}><meshStandardMaterial color={i % 2 ? "#d9d2c7" : "#e8e3da"} roughness={0.88} /></RoundedBox>
      <RoundedBox args={[0.22, 3.55, 3.16]} radius={0.045} smoothness={4} position={[4.61, 2.25, z]}><meshStandardMaterial color={i % 2 ? "#d9d2c7" : "#e8e3da"} roughness={0.88} /></RoundedBox>
    </group>)}
  </>;
}

function CeilingArchitecture({ projects, focusedId }: { projects: MuseumProject[]; focusedId: string | null }) {
  const zones = [-11.7, -7.8, -3.9, 0, 3.9, 7.8, 11.7];
  return <>
    <mesh position={[0, 5.02, 0]} receiveShadow><boxGeometry args={[9.7, 0.18, 30.5]} /><meshStandardMaterial color="#292b29" roughness={0.72} /></mesh>
    {zones.map((z, i) => <group key={z}>
      <RoundedBox args={[8.65, 0.17, 3.2]} radius={0.05} smoothness={4} position={[0, 4.88, z]}><meshStandardMaterial color={i % 2 ? "#232522" : "#30322f"} roughness={0.66} /></RoundedBox>
      <mesh position={[0, 4.76, z + 1.47]}><boxGeometry args={[8.2, 0.045, 0.075]} /><meshBasicMaterial color="#cfa36c" toneMapped={false} /></mesh>
    </group>)}
    {[-2.75, 2.75].map((x) => <mesh key={x} position={[x, 4.68, 0]}><boxGeometry args={[0.11, 0.1, 28.4]} /><meshStandardMaterial color="#151716" roughness={0.28} metalness={0.72} /></mesh>)}
    {projects.map((project) => {
      const side = project.side;
      const x = side === "left" ? -2.75 : 2.75;
      return <TrackLightFixture key={`fixture-${project.id}`} x={x} z={project.z} side={side} focused={focusedId === project.id} />;
    })}
  </>;
}

function EntrancePortal() {
  return <group position={[0, 0, 11.2]}>
    {[-4.22, 4.22].map((x) => <group key={x} position={[x, 2.25, 0]}>
      <RoundedBox args={[0.52, 4.5, 1.15]} radius={0.09} smoothness={6} castShadow><meshPhysicalMaterial color="#514a42" roughness={0.3} metalness={0.4} clearcoat={0.22} /></RoundedBox>
      <RoundedBox args={[0.18, 3.8, 0.12]} radius={0.04} smoothness={4} position={[x < 0 ? 0.33 : -0.33, 0, -0.48]}><meshBasicMaterial color="#cf9f67" toneMapped={false} /></RoundedBox>
    </group>)}
    <RoundedBox args={[8.96, 0.5, 1.15]} radius={0.09} smoothness={6} position={[0, 4.45, 0]} castShadow><meshPhysicalMaterial color="#514a42" roughness={0.3} metalness={0.4} clearcoat={0.22} /></RoundedBox>
    <RoundedBox args={[7.85, 0.09, 0.18]} radius={0.03} smoothness={4} position={[0, 4.08, -0.5]}><meshBasicMaterial color="#e1b77f" toneMapped={false} /></RoundedBox>
    <Text position={[0, 3.75, -0.52]} rotation={[0, Math.PI, 0]} fontSize={0.145} color="#d8cab9" anchorX="center">RUBIK SOTA / COLLECTION</Text>
    <Text position={[0, 3.46, -0.52]} rotation={[0, Math.PI, 0]} fontSize={0.07} color="#92877b" anchorX="center">ENTER THE PRACTICE / SIX PROJECTS</Text>
  </group>;
}

function PremiumArchitecture({ projects, focusedId }: { projects: MuseumProject[]; focusedId: string | null }) {
  const floor = useTexture(FLOOR) as PBRTextureSet;
  const wall = useTexture(WALL) as PBRTextureSet;
  tileTexture(floor.map, 6, 11, true); tileTexture(floor.roughnessMap, 6, 11); tileTexture(floor.normalMap, 6, 11);
  tileTexture(wall.map, 3, 8, true); tileTexture(wall.roughnessMap, 3, 8); tileTexture(wall.normalMap, 3, 8);

  return <>
    <color attach="background" args={["#191918"]} />
    <fog attach="fog" args={["#191918", 22, 47]} />
    <Environment files={HDRI_URL} environmentIntensity={0.48} />
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]} receiveShadow>
      <planeGeometry args={[9.55, 30.3]} />
      <MeshReflectorMaterial {...floor} color="#c6a77e" roughness={0.77} metalness={0} mirror={0.06} mixStrength={0.26} mixBlur={5} blur={[600, 220]} resolution={512} depthScale={0.04} normalScale={new THREE.Vector2(0.22, 0.22)} />
    </mesh>
    <WallArchitecture wall={wall} />
    <mesh position={[0, 2.55, -15.08]} receiveShadow><boxGeometry args={[9.55, 5.1, 0.25]} /><meshStandardMaterial {...wall} color="#ece7dc" roughness={0.9} /></mesh>
    <mesh position={[0, 2.55, 14.18]} receiveShadow><boxGeometry args={[9.55, 5.1, 0.25]} /><meshStandardMaterial {...wall} color="#e8e2d7" roughness={0.9} /></mesh>
    <CeilingArchitecture projects={projects} focusedId={focusedId} />
    <EntrancePortal />
    {[-11.4, -7.4, -3.4, 0.6, 4.6, 8.6, 12.4].map((z) => <group key={z}>
      <rectAreaLight position={[-4.28, 3.55, z]} rotation={[0, Math.PI / 2, 0]} width={2.4} height={2.0} intensity={3.5} color="#ffe7c8" />
      <rectAreaLight position={[4.28, 3.55, z]} rotation={[0, -Math.PI / 2, 0]} width={2.4} height={2.0} intensity={3.5} color="#ffe7c8" />
    </group>)}
    <hemisphereLight args={["#fff7e8", "#3a3027", 0.8]} />
    <ambientLight intensity={0.24} color="#f7efe4" />
    <directionalLight position={[2.4, 8.5, 9]} intensity={1.16} color="#fff2df" castShadow />
    <pointLight position={[0, 4.15, 10]} intensity={3.8} distance={12} color="#f5c996" />
    <pointLight position={[0, 3.8, -8]} intensity={2.4} distance={11} color="#dce7ef" />
    <pointLight position={[0, 4.0, -13]} intensity={2.2} distance={8} color="#d7b17c" />
    <MuseumSeating />
    <MarbleBust />
    <DisplayTable />
    <RubikHeroInstallation />
    <ContactShadows position={[0, 0.025, 0]} opacity={0.4} scale={27} blur={2.1} far={8} resolution={512} />
  </>;
}

function FinalInstallation({ unlocked, focused, premium }: { unlocked: boolean; focused: boolean; premium: boolean }) {
  if (!premium) return <group position={[0, 1.95, -14.78]}>
    <mesh castShadow><boxGeometry args={[4.7, 2.75, 0.15]} /><meshStandardMaterial color={unlocked ? "#38312a" : "#292725"} roughness={0.52} /></mesh>
    <Text position={[0, 0.28, 0.1]} fontSize={0.34} color={unlocked ? "#f5eadb" : "#797267"}>{unlocked ? "COLLECTION COMPLETE" : "FINAL INSTALLATION"}</Text>
  </group>;

  return <group position={[0, 1.8, -14.48]}>
    {focused ? <pointLight position={[0, 0.5, 2]} intensity={5} distance={5.5} color="#f2c889" /> : null}
    <RoundedBox args={[6.7, 3.55, 0.48]} radius={0.14} smoothness={6} position={[0, 0.35, -0.28]} castShadow><meshPhysicalMaterial color="#19201d" roughness={0.2} metalness={0.48} clearcoat={0.54} clearcoatRoughness={0.15} /></RoundedBox>
    <RoundedBox args={[5.9, 2.82, 0.17]} radius={0.09} smoothness={5} position={[0, 0.35, 0.05]}><meshPhysicalMaterial color={unlocked ? "#654d37" : "#2d302d"} roughness={0.36} metalness={0.2} emissive={unlocked ? "#6b4323" : "#000000"} emissiveIntensity={unlocked ? (focused ? 0.48 : 0.18) : 0} /></RoundedBox>
    {[-2.35, -1.42, -0.48, 0.48, 1.42, 2.35].map((x, index) => <group key={x} position={[x, 0.55, 0.28]}>
      <RoundedBox args={[0.48, 1.85, 0.27]} radius={0.08} smoothness={5} rotation={[0, 0, (index - 2.5) * 0.035]}><meshPhysicalMaterial color={unlocked ? (index % 2 ? "#a8845e" : "#51615d") : "#4c4d49"} roughness={0.26} metalness={0.48} clearcoat={0.25} /></RoundedBox>
      {unlocked ? <mesh position={[0, 0.58, 0.16]}><boxGeometry args={[0.26, 0.035, 0.04]} /><meshBasicMaterial color="#f0c78d" toneMapped={false} /></mesh> : null}
    </group>)}
    <RoundedBox args={[4.9, 0.18, 1.25]} radius={0.06} smoothness={5} position={[0, -1.45, 0.62]} castShadow><meshStandardMaterial color="#b8b0a5" roughness={0.72} /></RoundedBox>
    <Text position={[0, 1.22, 0.22]} fontSize={0.27} color={unlocked ? "#fff0dc" : "#ada79d"} anchorX="center">{unlocked ? "COLLECTION COMPLETE" : "FINAL INSTALLATION"}</Text>
    <Text position={[0, 0.92, 0.23]} fontSize={0.09} color={unlocked ? "#d9c1a1" : "#77736d"} anchorX="center">{unlocked ? "6 / 6 · ABOUT · CONTACT" : "EXPLORE ALL SIX PROJECTS TO ACTIVATE"}</Text>
    <Text position={[0, -1.55, 1.27]} rotation={[-Math.PI / 2, 0, 0]} fontSize={0.085} color="#5f574f" anchorX="center">RUBIK SOTA / FINAL SYSTEM</Text>
  </group>;
}

function RecoveryScene({ projects, focusedId, finalUnlocked }: Props) {
  return <Suspense fallback={null}>
    <PremiumArchitecture projects={projects} focusedId={focusedId} />
    {projects.map((project, index) => <Exhibit key={project.id} project={project} focused={focusedId === project.id} index={index} />)}
    <FinalInstallation unlocked={finalUnlocked} focused={focusedId === FINAL_INSTALLATION_ID} premium />
  </Suspense>;
}

export default function MuseumScene(props: Props) {
  const materialPreset = props.materialPreset ?? DEFAULT_MATERIAL_PRESET;
  if (materialPreset === "baseline") return <BaselineScene projects={props.projects} focusedId={props.focusedId} finalUnlocked={props.finalUnlocked} />;
  void MATERIAL_PRESETS[materialPreset];
  return <RecoveryScene {...props} materialPreset={materialPreset} />;
}
