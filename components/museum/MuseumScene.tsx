"use client";

import { useMemo } from "react";
import { MeshReflectorMaterial, Text } from "@react-three/drei";
import * as THREE from "three";
import { FINAL_INSTALLATION_ID, type MuseumProject } from "@/lib/museum";
import {
  DEFAULT_MATERIAL_PRESET,
  MATERIAL_PRESETS,
  PREMIUM_ZONE_PROJECT_IDS,
  type MaterialPresetName,
} from "@/lib/materialTokens";

type Props = {
  projects: MuseumProject[];
  focusedId: string | null;
  finalUnlocked: boolean;
  materialPreset?: MaterialPresetName;
  premiumDetails?: boolean;
  microInteractions?: boolean;
};

function LegacyArtwork({ project, focused }: { project: MuseumProject; focused: boolean }) {
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
      <spotLight position={[0, 1.75, 1.35]} angle={0.48} penumbra={0.75} intensity={focused ? 28 : 18} distance={5.5} color={focused ? "#ffd39b" : "#f2c996"} castShadow={false} />
    </group>
  );
}

function MuseumPlaque({ project, focused, metalColor }: { project: MuseumProject; focused: boolean; metalColor: string }) {
  return (
    <group position={[0, -1.55, 0.18]}>
      <mesh>
        <boxGeometry args={[2.65, 0.38, 0.055]} />
        <meshStandardMaterial color="#171816" roughness={0.52} metalness={0.2} />
      </mesh>
      <mesh position={[-1.16, 0, 0.034]}>
        <boxGeometry args={[0.055, 0.26, 0.018]} />
        <meshStandardMaterial color={metalColor} roughness={0.34} metalness={0.8} emissive={metalColor} emissiveIntensity={focused ? 0.2 : 0.03} />
      </mesh>
      <Text position={[-1.03, 0.035, 0.035]} fontSize={0.12} color="#e9e5dd" anchorX="left" anchorY="middle" maxWidth={2.0}>
        {project.title.toUpperCase()}
      </Text>
      <Text position={[-1.03, -0.105, 0.035]} fontSize={0.07} color="#918a80" anchorX="left" anchorY="middle" maxWidth={2.0}>
        {`${project.category.toUpperCase()} / ${project.year}`}
      </Text>
    </group>
  );
}

function PremiumFramedHero({ project, focused, preset, microInteractions }: { project: MuseumProject; focused: boolean; preset: ReturnType<typeof getPreset>; microInteractions: boolean }) {
  const [base, accent, dark] = project.palette;
  const boost = focused && microInteractions ? 1 : 0;
  return (
    <group>
      <mesh position={[0, 0, -0.12]} castShadow>
        <boxGeometry args={[3.76, 2.72, 0.18]} />
        <meshStandardMaterial color="#151615" roughness={0.48} metalness={0.32} />
      </mesh>
      <mesh position={[0, 0, -0.015]} castShadow>
        <boxGeometry args={[3.46, 2.42, 0.14]} />
        <meshStandardMaterial color={preset.metal.color} roughness={preset.metal.roughness} metalness={preset.metal.metalness} />
      </mesh>
      <mesh position={[0, 0, 0.075]}>
        <planeGeometry args={[3.18, 2.14]} />
        <meshStandardMaterial color={base} roughness={0.74} emissive={accent} emissiveIntensity={boost ? 0.045 : 0} />
      </mesh>
      <mesh position={[-0.64, 0.15, 0.09]}><planeGeometry args={[1.1, 1.28]} /><meshStandardMaterial color={accent} roughness={0.62} /></mesh>
      <mesh position={[0.61, -0.25, 0.095]} rotation={[0, 0, -0.15]}><planeGeometry args={[1.25, 0.54]} /><meshStandardMaterial color={dark} roughness={0.7} /></mesh>
      <mesh position={[0.48, 0.53, 0.102]}><circleGeometry args={[0.31, 48]} /><meshStandardMaterial color="#f1ede4" roughness={0.75} /></mesh>
      <MuseumPlaque project={project} focused={focused && microInteractions} metalColor={preset.metal.color} />
      <spotLight position={[0, 1.85, 1.7]} angle={0.45} penumbra={0.86} intensity={preset.light.exhibit + boost * preset.light.focusBoost} distance={6.4} color={preset.light.warm} />
    </group>
  );
}

function PremiumMediaWall({ project, focused, preset, microInteractions }: { project: MuseumProject; focused: boolean; preset: ReturnType<typeof getPreset>; microInteractions: boolean }) {
  const [base, accent, dark] = project.palette;
  const boost = focused && microInteractions ? 1 : 0;
  return (
    <group>
      <mesh position={[0, 0, -0.09]} castShadow>
        <boxGeometry args={[3.85, 2.58, 0.22]} />
        <meshStandardMaterial color="#111311" roughness={0.36} metalness={0.38} />
      </mesh>
      <mesh position={[0, 0.02, 0.045]}>
        <planeGeometry args={[3.52, 2.24]} />
        <meshStandardMaterial color={dark} roughness={0.31} metalness={0.12} emissive={accent} emissiveIntensity={0.13 + boost * 0.16} />
      </mesh>
      <mesh position={[0, 0.02, 0.075]}>
        <planeGeometry args={[3.42, 2.14]} />
        <meshPhysicalMaterial color={preset.glass.color} roughness={preset.glass.roughness} metalness={preset.glass.metalness} transparent opacity={preset.glass.opacity} transmission={0.08} />
      </mesh>
      <mesh position={[-0.9, 0.1, 0.095]}><planeGeometry args={[1.1, 1.15]} /><meshStandardMaterial color={base} roughness={0.5} /></mesh>
      <mesh position={[0.65, -0.18, 0.1]}><planeGeometry args={[1.38, 0.72]} /><meshStandardMaterial color={accent} roughness={0.46} /></mesh>
      <mesh position={[0, -1.46, -0.02]} castShadow><boxGeometry args={[3.15, 0.18, 0.52]} /><meshStandardMaterial color={preset.metal.color} roughness={0.38} metalness={0.72} /></mesh>
      <MuseumPlaque project={project} focused={focused && microInteractions} metalColor={preset.metal.color} />
      <spotLight position={[0, 1.8, 1.55]} angle={0.52} penumbra={0.88} intensity={preset.light.exhibit * 0.82 + boost * preset.light.focusBoost} distance={6.2} color={preset.light.neutral} />
    </group>
  );
}

function PremiumFloatingPanel({ project, focused, preset, microInteractions }: { project: MuseumProject; focused: boolean; preset: ReturnType<typeof getPreset>; microInteractions: boolean }) {
  const [base, accent, dark] = project.palette;
  const boost = focused && microInteractions ? 1 : 0;
  return (
    <group>
      <mesh position={[0, -0.05, -0.16]} castShadow>
        <boxGeometry args={[3.34, 2.52, 0.09]} />
        <meshStandardMaterial color="#1b1c1a" roughness={0.5} metalness={0.2} emissive={accent} emissiveIntensity={boost ? 0.08 : 0.015} />
      </mesh>
      <mesh position={[0, 0, 0.02]} castShadow>
        <boxGeometry args={[3.18, 2.32, 0.08]} />
        <meshStandardMaterial color={base} roughness={0.68} />
      </mesh>
      <mesh position={[-0.73, 0.14, 0.07]}><planeGeometry args={[1.0, 1.18]} /><meshStandardMaterial color={accent} roughness={0.6} /></mesh>
      <mesh position={[0.58, -0.22, 0.075]} rotation={[0, 0, -0.12]}><planeGeometry args={[1.28, 0.58]} /><meshStandardMaterial color={dark} roughness={0.68} /></mesh>
      <mesh position={[0, -1.56, -0.45]} castShadow><cylinderGeometry args={[0.5, 0.58, 0.86, 48]} /><meshStandardMaterial color="#232321" roughness={0.5} metalness={0.15} /></mesh>
      <mesh position={[0, -1.1, -0.45]} castShadow><cylinderGeometry args={[0.24, 0.31, 0.12, 48]} /><meshStandardMaterial color={preset.metal.color} roughness={preset.metal.roughness} metalness={preset.metal.metalness} /></mesh>
      <MuseumPlaque project={project} focused={focused && microInteractions} metalColor={preset.metal.color} />
      <pointLight position={[0, 0, -0.58]} intensity={0.7 + boost * 0.45} distance={3.4} color={preset.light.warm} />
      <spotLight position={[0, 1.9, 1.7]} angle={0.48} penumbra={0.9} intensity={preset.light.exhibit + boost * preset.light.focusBoost} distance={6.4} color={preset.light.warm} />
    </group>
  );
}

function getPreset(name: MaterialPresetName) {
  return MATERIAL_PRESETS[name];
}

function PremiumArtwork({ project, focused, presetName, microInteractions }: { project: MuseumProject; focused: boolean; presetName: MaterialPresetName; microInteractions: boolean }) {
  const x = project.side === "left" ? -4.62 : 4.62;
  const rotationY = project.side === "left" ? Math.PI / 2 : -Math.PI / 2;
  const preset = getPreset(presetName);
  return (
    <group position={[x, 1.92, project.z]} rotation={[0, rotationY, 0]}>
      {project.exhibitTreatment === "media-wall" ? (
        <PremiumMediaWall project={project} focused={focused} preset={preset} microInteractions={microInteractions} />
      ) : project.exhibitTreatment === "floating-panel" ? (
        <PremiumFloatingPanel project={project} focused={focused} preset={preset} microInteractions={microInteractions} />
      ) : (
        <PremiumFramedHero project={project} focused={focused} preset={preset} microInteractions={microInteractions} />
      )}
    </group>
  );
}

function PremiumArchitecture({ presetName, details }: { presetName: MaterialPresetName; details: boolean }) {
  const preset = getPreset(presetName);
  return (
    <group>
      <mesh position={[0, -0.075, 7.15]} receiveShadow>
        <boxGeometry args={[9.48, 0.15, 14.3]} />
        <MeshReflectorMaterial
          color={preset.floor.color}
          roughness={preset.floor.roughness}
          metalness={preset.floor.metalness}
          mirror={preset.floor.reflection}
          mixStrength={preset.floor.reflection * 2.1}
          mixBlur={1.15}
          blur={[preset.floor.blur, preset.floor.blur * 0.42]}
          resolution={512}
          depthScale={0.22}
          minDepthThreshold={0.72}
          maxDepthThreshold={1.2}
        />
      </mesh>

      <mesh position={[-4.86, 2.55, 7.15]} receiveShadow><boxGeometry args={[0.24, 5.1, 14.3]} /><meshStandardMaterial color={preset.wall.color} roughness={preset.wall.roughness} /></mesh>
      <mesh position={[4.86, 2.55, 7.15]} receiveShadow><boxGeometry args={[0.24, 5.1, 14.3]} /><meshStandardMaterial color={preset.wall.color} roughness={preset.wall.roughness} /></mesh>

      {details ? [1.0, 4.0, 7.0, 10.0, 13.0].map((z) => (
        <group key={z}>
          <mesh position={[-4.72, 2.55, z]}><boxGeometry args={[0.07, 4.55, 0.045]} /><meshStandardMaterial color={preset.wall.jointColor} roughness={0.66} /></mesh>
          <mesh position={[4.72, 2.55, z]}><boxGeometry args={[0.07, 4.55, 0.045]} /><meshStandardMaterial color={preset.wall.jointColor} roughness={0.66} /></mesh>
        </group>
      )) : null}

      <mesh position={[0, 5.01, 7.15]} receiveShadow><boxGeometry args={[9.7, 0.2, 14.3]} /><meshStandardMaterial color={preset.ceiling.color} roughness={preset.ceiling.roughness} /></mesh>

      {details ? [-2.7, 0, 2.7].map((x) => (
        <group key={x}>
          <mesh position={[x, 4.84, 7.1]}><boxGeometry args={[0.12, 0.16, 13.4]} /><meshStandardMaterial color={preset.ceiling.railColor} roughness={0.52} metalness={0.45} /></mesh>
          {[2.2, 5.2, 8.2, 11.2].map((z) => (
            <mesh key={z} position={[x, 4.69, z]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.09, 0.12, 0.22, 24]} />
              <meshStandardMaterial color="#151614" roughness={0.4} metalness={0.5} />
            </mesh>
          ))}
        </group>
      )) : null}

      {details ? (
        <>
          <group position={[0, 0.38, 4.0]}>
            <mesh castShadow receiveShadow><boxGeometry args={[2.45, 0.32, 0.82]} /><meshStandardMaterial color="#252522" roughness={0.5} metalness={0.08} /></mesh>
            <mesh position={[-0.94, -0.34, 0]}><boxGeometry args={[0.1, 0.66, 0.68]} /><meshStandardMaterial color={preset.metal.color} roughness={0.42} metalness={0.72} /></mesh>
            <mesh position={[0.94, -0.34, 0]}><boxGeometry args={[0.1, 0.66, 0.68]} /><meshStandardMaterial color={preset.metal.color} roughness={0.42} metalness={0.72} /></mesh>
          </group>
          <group position={[0, 0.72, 9.7]}>
            <mesh castShadow><cylinderGeometry args={[0.48, 0.6, 1.4, 48]} /><meshStandardMaterial color="#20211f" roughness={0.46} metalness={0.12} /></mesh>
            <mesh position={[0, 0.78, 0]} castShadow><torusKnotGeometry args={[0.34, 0.08, 96, 16]} /><meshStandardMaterial color={preset.metal.color} roughness={0.34} metalness={0.82} /></mesh>
          </group>
          <mesh position={[0, 2.55, 0.28]}><boxGeometry args={[8.9, 4.45, 0.07]} /><meshStandardMaterial color={preset.wall.panelColor} roughness={0.83} /></mesh>
          <mesh position={[0, 0.06, 0.34]}><boxGeometry args={[7.4, 0.025, 0.42]} /><meshStandardMaterial color={preset.metal.color} roughness={0.38} metalness={0.75} emissive={preset.metal.color} emissiveIntensity={0.06} /></mesh>
        </>
      ) : null}

      <ambientLight intensity={preset.light.ambient} color={preset.light.neutral} />
      <directionalLight position={[0, 8, 10]} intensity={preset.light.architectural} color={preset.light.neutral} />
      <pointLight position={[0, 4.25, 9.8]} intensity={1.0} distance={9} color={preset.light.warm} />
      <pointLight position={[0, 4.1, 3.0]} intensity={0.75} distance={8} color={preset.light.neutral} />
    </group>
  );
}

function FinalInstallation({ unlocked, focused }: { unlocked: boolean; focused: boolean }) {
  return (
    <group position={[0, 1.95, -14.82]}>
      <mesh><boxGeometry args={[4.6, 2.65, 0.12]} /><meshStandardMaterial color={unlocked ? (focused ? "#b98b56" : "#3a3027") : "#24211d"} roughness={0.66} emissive={unlocked ? "#5b3d21" : "#000000"} emissiveIntensity={unlocked ? (focused ? 0.55 : 0.24) : 0} /></mesh>
      <Text position={[0, 0.28, 0.09]} fontSize={0.34} color={unlocked ? "#f1e2ce" : "#756d62"} anchorX="center" anchorY="middle">{unlocked ? "COLLECTION COMPLETE" : "FINAL INSTALLATION"}</Text>
      <Text position={[0, -0.38, 0.09]} fontSize={0.14} color={unlocked ? "#cdb79c" : "#625d55"} anchorX="center" anchorY="middle">{unlocked ? "ABOUT / CONTACT — PRESS E" : "EXPLORE ALL SIX PROJECTS"}</Text>
      {unlocked ? <spotLight position={[0, 1.7, 2]} angle={0.58} penumbra={0.8} intensity={focused ? 34 : 22} distance={6} color="#f0be82" /> : null}
    </group>
  );
}

export default function MuseumScene({
  projects,
  focusedId,
  finalUnlocked,
  materialPreset = DEFAULT_MATERIAL_PRESET,
  premiumDetails = true,
  microInteractions = true,
}: Props) {
  const isBaseline = materialPreset === "baseline";
  const preset = getPreset(materialPreset);
  const legacyFloor = useMemo(() => new THREE.MeshStandardMaterial({ color: "#8a6d4e", roughness: 0.78, metalness: 0.03 }), []);

  return (
    <>
      <color attach="background" args={[isBaseline ? "#12110f" : preset.atmosphere.background]} />
      <fog attach="fog" args={[isBaseline ? "#15130f" : preset.atmosphere.fog, isBaseline ? 14 : preset.atmosphere.fogNear, isBaseline ? 34 : preset.atmosphere.fogFar]} />

      {isBaseline ? (
        <>
          <ambientLight intensity={1.35} color="#eee4d7" />
          <directionalLight position={[0, 8, 7]} intensity={1.2} color="#f6e7d1" />
          <mesh position={[0, -0.08, 0]} receiveShadow material={legacyFloor}><boxGeometry args={[9.5, 0.16, 31]} /></mesh>
          <mesh position={[-4.85, 2.55, 0]} receiveShadow><boxGeometry args={[0.22, 5.1, 31]} /><meshStandardMaterial color="#e9e4da" roughness={0.94} /></mesh>
          <mesh position={[4.85, 2.55, 0]} receiveShadow><boxGeometry args={[0.22, 5.1, 31]} /><meshStandardMaterial color="#e9e4da" roughness={0.94} /></mesh>
          <mesh position={[0, 5.02, 0]} receiveShadow><boxGeometry args={[9.7, 0.18, 31]} /><meshStandardMaterial color="#181714" roughness={0.92} /></mesh>
        </>
      ) : (
        <>
          <PremiumArchitecture presetName={materialPreset} details={premiumDetails} />
          <mesh position={[0, -0.08, -7.15]} receiveShadow material={legacyFloor}><boxGeometry args={[9.5, 0.16, 16.7]} /></mesh>
          <mesh position={[-4.85, 2.55, -7.15]} receiveShadow><boxGeometry args={[0.22, 5.1, 16.7]} /><meshStandardMaterial color="#e9e4da" roughness={0.94} /></mesh>
          <mesh position={[4.85, 2.55, -7.15]} receiveShadow><boxGeometry args={[0.22, 5.1, 16.7]} /><meshStandardMaterial color="#e9e4da" roughness={0.94} /></mesh>
          <mesh position={[0, 5.02, -7.15]} receiveShadow><boxGeometry args={[9.7, 0.18, 16.7]} /><meshStandardMaterial color="#181714" roughness={0.92} /></mesh>
        </>
      )}

      <mesh position={[0, 2.55, -15.1]}><boxGeometry args={[9.5, 5.1, 0.28]} /><meshStandardMaterial color="#ded6ca" roughness={0.9} /></mesh>
      <mesh position={[0, 2.55, 14.2]}><boxGeometry args={[9.5, 5.1, 0.28]} /><meshStandardMaterial color={isBaseline ? "#d9d1c4" : preset.wall.panelColor} roughness={0.86} /></mesh>

      {!isBaseline && premiumDetails ? null : (
        <>
          <group position={[0, 0.42, 3.8]}><mesh castShadow receiveShadow><boxGeometry args={[2.1, 0.42, 0.72]} /><meshStandardMaterial color="#54483d" roughness={0.72} /></mesh></group>
          <group position={[0, 0.42, -5]}><mesh castShadow receiveShadow><boxGeometry args={[2.1, 0.42, 0.72]} /><meshStandardMaterial color="#54483d" roughness={0.72} /></mesh></group>
        </>
      )}

      <FinalInstallation unlocked={finalUnlocked} focused={focusedId === FINAL_INSTALLATION_ID} />

      {projects.map((project) => {
        const premium = !isBaseline && PREMIUM_ZONE_PROJECT_IDS.has(project.id);
        return premium ? (
          <PremiumArtwork key={project.id} project={project} focused={focusedId === project.id} presetName={materialPreset} microInteractions={microInteractions} />
        ) : (
          <LegacyArtwork key={project.id} project={project} focused={focusedId === project.id} />
        );
      })}
    </>
  );
}
