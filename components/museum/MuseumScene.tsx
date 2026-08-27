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
const FRAME_URL = "https://raw.githubusercontent.com/ezEngine/store-sample/182401cf1f430401e800c2ea4452816bc7d539a3/PolyHaven/standing_picture_frame_01_1k/standing_picture_frame_01_1k.gltf";
const SEATING_URL = "https://raw.githubusercontent.com/HHSOLL/DeskteriorOnline/6102359dba9fd95f599408be1873abaa86e20730/apps/web/public/assets/models/modular_street_seating/modular_street_seating_1k.gltf";
const LAMP_URL = "https://raw.githubusercontent.com/mortennordbye/homelab/425bd3c97502ea9feeb83b532cbf0ac04be719bd/portfolio/public/models/fun/modern_ceiling_lamp_01/modern_ceiling_lamp_01.gltf";
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
    <mesh position={[0, 0, -0.2]}><planeGeometry args={[3.95, 2.92]} /><meshBasicMaterial color="#e7c18b" transparent opacity={0.085} toneMapped={false} /></mesh>
    <pointLight position={[0, 0.2, 1.05]} intensity={2.8} distance={4.2} color="#ffd8a3" />
  </>;
}

function PremiumPlaque({ project, focused }: { project: MuseumProject; focused: boolean }) {
  return <group position={[0, -1.58, 0.22]}>
    <RoundedBox args={[2.76, 0.43, 0.075]} radius={0.035} smoothness={4} castShadow>
      <meshStandardMaterial color={focused ? "#2c2924" : "#171816"} roughness={0.4} metalness={0.34} />
    </RoundedBox>
    <mesh position={[-1.23, 0, 0.047]}><boxGeometry args={[0.045, 0.29, 0.024]} /><meshStandardMaterial color="#b99568" metalness={0.84} roughness={0.24} emissive="#b99568" emissiveIntensity={focused ? 0.8 : 0.08} /></mesh>
    <Text position={[-1.1, 0.052, 0.052]} fontSize={0.115} color={focused ? "#fff9ef" : "#e8e3da"} anchorX="left" maxWidth={2.05}>{project.title.toUpperCase()}</Text>
    <Text position={[-1.1, -0.105, 0.052]} fontSize={0.068} color={focused ? "#dbc8ae" : "#918a80"} anchorX="left">{`${project.category.toUpperCase()} / ${project.year}`}</Text>
  </group>;
}

function FrameGLTF({ base, accent, focused }: { base: string; accent: string; focused: boolean }) {
  const frame = useClonedAsset(FRAME_URL);
  return <group>
    <primitive object={frame} position={[0, -0.7, 0]} scale={8.6} rotation={[0, 0, Math.PI / 2]} />
    <mesh position={[0, 0.04, 0.14]}><planeGeometry args={[2.95, 1.93]} /><meshStandardMaterial color={base} roughness={0.64} emissive={accent} emissiveIntensity={focused ? 0.085 : 0.012} /></mesh>
    <mesh position={[-0.62, 0.17, 0.16]}><planeGeometry args={[1.0, 1.05]} /><meshStandardMaterial color={accent} roughness={0.5} /></mesh>
    <mesh position={[0.62, -0.23, 0.17]} rotation={[0, 0, -0.12]}><planeGeometry args={[1.16, 0.52]} /><meshStandardMaterial color="#151b1d" roughness={0.6} /></mesh>
  </group>;
}

function MediaWall({ base, accent, dark, focused }: { base: string; accent: string; dark: string; focused: boolean }) {
  return <group>
    <RoundedBox args={[3.92, 2.66, 0.29]} radius={0.09} smoothness={5} position={[0, 0, -0.13]} castShadow>
      <meshPhysicalMaterial color="#111413" roughness={0.18} metalness={0.54} clearcoat={0.62} clearcoatRoughness={0.18} />
    </RoundedBox>
    <RoundedBox args={[3.58, 2.3, 0.11]} radius={0.055} smoothness={4} position={[0, 0.02, 0.065]}>
      <meshPhysicalMaterial color={dark} roughness={0.2} metalness={0.08} clearcoat={0.35} emissive={accent} emissiveIntensity={focused ? 0.34 : 0.11} />
    </RoundedBox>
    <mesh position={[-0.84, 0.12, 0.13]}><planeGeometry args={[1.12, 1.16]} /><meshStandardMaterial color={base} roughness={0.38} /></mesh>
    <mesh position={[0.68, -0.18, 0.135]}><planeGeometry args={[1.32, 0.7]} /><meshStandardMaterial color={accent} roughness={0.32} /></mesh>
    <RoundedBox args={[3.12, 0.17, 0.48]} radius={0.05} smoothness={4} position={[0, -1.45, -0.08]} castShadow>
      <meshStandardMaterial color="#a77c4e" roughness={0.3} metalness={0.76} />
    </RoundedBox>
    <mesh position={[0, 0.02, 0.145]}><planeGeometry args={[3.42, 2.16]} /><meshPhysicalMaterial color="#dce4e1" transparent opacity={0.08} transmission={0.12} roughness={0.12} /></mesh>
  </group>;
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
    <RoundedBox args={[0.82, 0.86, 0.72]} radius={0.09} smoothness={5} position={[0, -1.58, -0.54]} castShadow>
      <meshStandardMaterial color="#a9a39a" roughness={0.78} />
    </RoundedBox>
    <RoundedBox args={[0.52, 0.11, 0.52]} radius={0.04} smoothness={4} position={[0, -1.1, -0.54]}>
      <meshStandardMaterial color="#a77c4e" roughness={0.3} metalness={0.8} />
    </RoundedBox>
  </group>;
}

function Exhibit({ project, focused, index }: { project: MuseumProject; focused: boolean; index: number }) {
  const x = project.side === "left" ? -4.52 : 4.52;
  const ry = project.side === "left" ? Math.PI / 2 : -Math.PI / 2;
  const [base, accent, dark] = project.palette;
  const variant = index % 3;
  return <group position={[x, 1.92, project.z]} rotation={[0, ry, 0]}>
    <FocusHalo active={focused} />
    {variant === 0 ? <FrameGLTF base={base} accent={accent} focused={focused} /> : variant === 1 ? <MediaWall base={base} accent={accent} dark={dark} focused={focused} /> : <FloatingPanel base={base} accent={accent} dark={dark} focused={focused} />}
    <PremiumPlaque project={project} focused={focused} />
    <spotLight position={[0, 1.9, 1.6]} angle={0.46} penumbra={0.9} intensity={focused ? 41 : 26} distance={7.1} color={focused ? "#ffdaa8" : "#f2d4ae"} castShadow={index < 3} />
  </group>;
}

function MuseumSeating() {
  const seating = useClonedAsset(SEATING_URL);
  return <group position={[0, 0.03, 3.75]} rotation={[0, Math.PI / 2, 0]}>
    <primitive object={seating} scale={1.45} />
  </group>;
}

function MarbleBust() {
  const bust = useClonedAsset(BUST_URL);
  return <group position={[0, 0.02, 9.45]}>
    <RoundedBox args={[1.32, 1.22, 1.32]} radius={0.08} smoothness={5} position={[0, 0.62, 0]} castShadow receiveShadow>
      <meshStandardMaterial color="#d2ccc0" roughness={0.82} />
    </RoundedBox>
    <primitive object={bust} position={[0, 1.22, 0]} scale={2.65} />
    <spotLight position={[1.8, 3.65, 1.75]} intensity={44} angle={0.36} penumbra={0.82} distance={6.2} color="#f6d7af" castShadow />
    <pointLight position={[-1.5, 1.9, -0.7]} intensity={2.6} distance={4.6} color="#b8c9d5" />
  </group>;
}

function CeilingLamp({ x, z, rotationY = 0 }: { x: number; z: number; rotationY?: number }) {
  const lamp = useClonedAsset(LAMP_URL);
  return <group position={[x, 4.72, z]} rotation={[Math.PI, rotationY, 0]}>
    <primitive object={lamp} scale={0.72} />
  </group>;
}

function RubikHeroInstallation() {
  return <group position={[0, 1.22, -5.15]}>
    <RoundedBox args={[2.2, 0.16, 1.45]} radius={0.06} smoothness={4} position={[0, -1.11, 0]} castShadow>
      <meshStandardMaterial color="#a7a097" roughness={0.76} />
    </RoundedBox>
    {[-0.72, -0.24, 0.24, 0.72].map((x, i) => (
      <group key={x} position={[x, -0.18 + i * 0.08, 0]} rotation={[0.08 * (i - 1.5), 0.18 * (i - 1.5), 0.12 * (i - 1.5)]}>
        <RoundedBox args={[0.34, 2.15, 0.58]} radius={0.07} smoothness={5} castShadow>
          <meshPhysicalMaterial color={i % 2 === 0 ? "#aa8357" : "#3b4444"} roughness={0.27} metalness={i % 2 === 0 ? 0.82 : 0.48} clearcoat={0.28} />
        </RoundedBox>
      </group>
    ))}
    <pointLight position={[0, 0.4, 1.3]} intensity={2.2} distance={4.2} color="#e9bf82" />
    <Text position={[0, -1.52, 0.5]} fontSize={0.12} color="#6c6256" anchorX="center">RUBIK / SYSTEM 01</Text>
  </group>;
}

function WallArchitecture({ wall }: { wall: PBRTextureSet }) {
  const reliefZ = [-12.2, -8.1, -4.0, 0.1, 4.2, 8.3, 12.3];
  return <>
    <mesh position={[-4.84, 2.55, 0]} receiveShadow><boxGeometry args={[0.22, 5.1, 30.2]} /><meshStandardMaterial {...wall} color="#f0ede6" roughness={0.92} normalScale={new THREE.Vector2(0.18, 0.18)} /></mesh>
    <mesh position={[4.84, 2.55, 0]} receiveShadow><boxGeometry args={[0.22, 5.1, 30.2]} /><meshStandardMaterial {...wall} color="#f0ede6" roughness={0.92} normalScale={new THREE.Vector2(0.18, 0.18)} /></mesh>
    {reliefZ.map((z, i) => <group key={z}>
      <RoundedBox args={[0.28, 4.55, 0.18]} radius={0.035} smoothness={3} position={[-4.64, 2.55, z]} castShadow>
        <meshStandardMaterial color={i % 2 ? "#dad4ca" : "#e4dfd6"} roughness={0.8} />
      </RoundedBox>
      <RoundedBox args={[0.28, 4.55, 0.18]} radius={0.035} smoothness={3} position={[4.64, 2.55, z]} castShadow>
        <meshStandardMaterial color={i % 2 ? "#dad4ca" : "#e4dfd6"} roughness={0.8} />
      </RoundedBox>
      <mesh position={[-4.48, 0.26, z]}><boxGeometry args={[0.08, 0.2, 2.72]} /><meshStandardMaterial color="#837769" roughness={0.56} /></mesh>
      <mesh position={[4.48, 0.26, z]}><boxGeometry args={[0.08, 0.2, 2.72]} /><meshStandardMaterial color="#837769" roughness={0.56} /></mesh>
    </group>)}
    {[-9.9, -5.8, -1.7, 2.4, 6.5, 10.6].map((z, i) => <group key={`niche-${z}`}>
      <RoundedBox args={[0.22, 3.5, 3.15]} radius={0.045} smoothness={4} position={[-4.61, 2.25, z]}>
        <meshStandardMaterial color={i % 2 ? "#d9d2c7" : "#e8e3da"} roughness={0.88} />
      </RoundedBox>
      <RoundedBox args={[0.22, 3.5, 3.15]} radius={0.045} smoothness={4} position={[4.61, 2.25, z]}>
        <meshStandardMaterial color={i % 2 ? "#d9d2c7" : "#e8e3da"} roughness={0.88} />
      </RoundedBox>
    </group>)}
  </>;
}

function CeilingArchitecture() {
  const zones = [-11.7, -7.8, -3.9, 0, 3.9, 7.8, 11.7];
  return <>
    <mesh position={[0, 5.02, 0]} receiveShadow><boxGeometry args={[9.7, 0.18, 30.5]} /><meshStandardMaterial color="#2e2e2b" roughness={0.76} /></mesh>
    {zones.map((z, i) => <group key={z}>
      <RoundedBox args={[8.65, 0.17, 3.2]} radius={0.05} smoothness={4} position={[0, 4.88, z]}>
        <meshStandardMaterial color={i % 2 ? "#242523" : "#30302d"} roughness={0.68} />
      </RoundedBox>
      <mesh position={[0, 4.76, z + 1.47]}><boxGeometry args={[8.2, 0.045, 0.075]} /><meshBasicMaterial color="#d8b17a" toneMapped={false} /></mesh>
    </group>)}
    {[-2.75, 0, 2.75].map((x) => <mesh key={x} position={[x, 4.68, 0]}><boxGeometry args={[0.095, 0.11, 28.4]} /><meshStandardMaterial color="#171817" roughness={0.32} metalness={0.68} /></mesh>)}
    {[-10, -6, -2, 2, 6, 10].flatMap((z) => [-2.75, 2.75].map((x) => <CeilingLamp key={`${x}-${z}`} x={x} z={z} rotationY={x < 0 ? 0.18 : -0.18} />))}
  </>;
}

function EntrancePortal() {
  return <group position={[0, 0, 10.85]}>
    <RoundedBox args={[0.42, 4.45, 1.0]} radius={0.08} smoothness={5} position={[-4.28, 2.25, 0]} castShadow><meshStandardMaterial color="#5a5147" roughness={0.38} metalness={0.36} /></RoundedBox>
    <RoundedBox args={[0.42, 4.45, 1.0]} radius={0.08} smoothness={5} position={[4.28, 2.25, 0]} castShadow><meshStandardMaterial color="#5a5147" roughness={0.38} metalness={0.36} /></RoundedBox>
    <RoundedBox args={[8.98, 0.42, 1.0]} radius={0.08} smoothness={5} position={[0, 4.4, 0]} castShadow><meshStandardMaterial color="#5a5147" roughness={0.38} metalness={0.36} /></RoundedBox>
    <mesh position={[0, 4.13, -0.38]}><boxGeometry args={[7.8, 0.045, 0.07]} /><meshBasicMaterial color="#e3bd87" toneMapped={false} /></mesh>
    <Text position={[0, 3.82, -0.48]} rotation={[0, Math.PI, 0]} fontSize={0.13} color="#d5c6b3" anchorX="center">RUBIK SOTA / COLLECTION</Text>
  </group>;
}

function PremiumArchitecture() {
  const floor = useTexture(FLOOR) as PBRTextureSet;
  const wall = useTexture(WALL) as PBRTextureSet;
  tileTexture(floor.map, 6, 11, true); tileTexture(floor.roughnessMap, 6, 11); tileTexture(floor.normalMap, 6, 11);
  tileTexture(wall.map, 3, 8, true); tileTexture(wall.roughnessMap, 3, 8); tileTexture(wall.normalMap, 3, 8);

  return <>
    <color attach="background" args={["#1a1918"]} />
    <fog attach="fog" args={["#1a1918", 21, 46]} />
    <Environment files={HDRI_URL} environmentIntensity={0.46} />

    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]} receiveShadow>
      <planeGeometry args={[9.55, 30.3]} />
      <MeshReflectorMaterial {...floor} color="#c8aa80" roughness={0.76} metalness={0} mirror={0.07} mixStrength={0.3} mixBlur={4.5} blur={[560, 190]} resolution={512} depthScale={0.05} />
    </mesh>
    <WallArchitecture wall={wall} />
    <mesh position={[0, 2.55, -15.08]} receiveShadow><boxGeometry args={[9.55, 5.1, 0.25]} /><meshStandardMaterial {...wall} color="#ece7dc" roughness={0.9} /></mesh>
    <mesh position={[0, 2.55, 14.18]} receiveShadow><boxGeometry args={[9.55, 5.1, 0.25]} /><meshStandardMaterial {...wall} color="#e8e2d7" roughness={0.9} /></mesh>
    <CeilingArchitecture />
    <EntrancePortal />

    {[-11.4, -7.4, -3.4, 0.6, 4.6, 8.6, 12.4].map((z) => <group key={z}>
      <rectAreaLight position={[-4.28, 3.55, z]} rotation={[0, Math.PI / 2, 0]} width={2.4} height={2.0} intensity={3.7} color="#ffe7c8" />
      <rectAreaLight position={[4.28, 3.55, z]} rotation={[0, -Math.PI / 2, 0]} width={2.4} height={2.0} intensity={3.7} color="#ffe7c8" />
    </group>)}

    <hemisphereLight args={["#fff7e8", "#3a3027", 0.76]} />
    <ambientLight intensity={0.24} color="#f7efe4" />
    <directionalLight position={[2.4, 8.5, 9]} intensity={1.25} color="#fff2df" castShadow />
    <pointLight position={[0, 4.15, 10]} intensity={3.6} distance={12} color="#f5c996" />
    <pointLight position={[0, 3.8, -8]} intensity={2.2} distance={11} color="#dce7ef" />
    <pointLight position={[0, 4.0, -13]} intensity={1.7} distance={8} color="#d7b17c" />

    <MuseumSeating />
    <MarbleBust />
    <RubikHeroInstallation />
    <ContactShadows position={[0, 0.025, 0]} opacity={0.34} scale={26} blur={2.5} far={8} resolution={512} />
  </>;
}

function FinalInstallation({ unlocked, focused, premium }: { unlocked: boolean; focused: boolean; premium: boolean }) {
  if (!premium) return <group position={[0, 1.95, -14.78]}>
    <mesh castShadow><boxGeometry args={[4.7, 2.75, 0.15]} /><meshStandardMaterial color={unlocked ? "#38312a" : "#292725"} roughness={0.52} /></mesh>
    <Text position={[0, 0.28, 0.1]} fontSize={0.34} color={unlocked ? "#f5eadb" : "#797267"}>{unlocked ? "COLLECTION COMPLETE" : "FINAL INSTALLATION"}</Text>
  </group>;

  return <group position={[0, 2.0, -14.58]}>
    {focused ? <pointLight position={[0, 0.2, 2]} intensity={4.2} distance={5} color="#f2c889" /> : null}
    <RoundedBox args={[6.2, 3.35, 0.34]} radius={0.13} smoothness={6} position={[0, 0, -0.18]} castShadow>
      <meshPhysicalMaterial color="#1c211f" roughness={0.22} metalness={0.46} clearcoat={0.48} clearcoatRoughness={0.18} />
    </RoundedBox>
    <RoundedBox args={[5.58, 2.7, 0.16]} radius={0.09} smoothness={5} position={[0, 0, 0.06]}>
      <meshPhysicalMaterial color={unlocked ? "#5d4b3a" : "#2d2d2a"} roughness={0.38} metalness={0.18} emissive={unlocked ? "#6d4825" : "#000000"} emissiveIntensity={unlocked ? (focused ? 0.42 : 0.16) : 0} />
    </RoundedBox>
    {[-2.38, -1.43, -0.48, 0.48, 1.43, 2.38].map((x, index) => <RoundedBox key={x} args={[0.42, 1.75, 0.22]} radius={0.08} smoothness={5} position={[x, 0.12, 0.25]} rotation={[0, 0, (index - 2.5) * 0.045]}>
      <meshPhysicalMaterial color={unlocked ? (index % 2 ? "#b58b5c" : "#414c49") : "#55524d"} roughness={0.27} metalness={0.66} clearcoat={0.25} />
    </RoundedBox>)}
    <Text position={[0, -1.02, 0.3]} fontSize={0.3} color={unlocked ? "#fff0dd" : "#8b8378"} anchorX="center">{unlocked ? "COLLECTION COMPLETE" : "FINAL INSTALLATION"}</Text>
    <Text position={[0, -1.38, 0.31]} fontSize={0.12} color={unlocked ? "#d4bea1" : "#736c62"} anchorX="center">{unlocked ? "ABOUT / CONTACT — PRESS E" : "EXPLORE ALL SIX PROJECTS"}</Text>
    <spotLight position={[0, 2.5, 2.3]} angle={0.5} penumbra={0.88} intensity={unlocked ? (focused ? 40 : 26) : 11} distance={6.5} color="#efc894" castShadow />
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
  void MATERIAL_PRESETS[materialPreset];
  return <RecoveryScene {...props} materialPreset={materialPreset} />;
}
