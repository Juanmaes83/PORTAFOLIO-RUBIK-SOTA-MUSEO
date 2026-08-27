"use client";

import { Canvas } from "@react-three/fiber";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import FirstPersonRig from "@/components/museum/FirstPersonRig";
import MuseumScene from "@/components/museum/MuseumScene";
import {
  DEFAULT_MUSEUM_TUNING,
  museumProjects,
  type MuseumProject,
  type MuseumTuning,
} from "@/lib/museum";

type Props = {
  lab?: boolean;
};

function RangeControl({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="museumLabControl">
      <span>{label}</span>
      <b>{value.toFixed(step < 0.1 ? 2 : 1)}</b>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

function MobileMuseumFallback() {
  return (
    <main className="museumMobileFallback">
      <a href="/" className="museumBackLink">← Portfolio</a>
      <p className="museumKicker">Rubik Sota / Museum</p>
      <h1>The collection is spatial on desktop.</h1>
      <p className="museumMobileIntro">
        This Phase 3 preview keeps mobile intentionally 2D. The full first-person museum is designed for keyboard and mouse; the mobile collection will be built as its own premium experience in a later phase.
      </p>
      <div className="museumMobileProjects">
        {museumProjects.map((project) => (
          <article key={project.id}>
            <span>{project.category}</span>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default function MuseumExperience({ lab = false }: Props) {
  const [tuning, setTuning] = useState<MuseumTuning>(DEFAULT_MUSEUM_TUNING);
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);
  const [instructionsVisible, setInstructionsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const focusedProject = useMemo(
    () => museumProjects.find((project) => project.id === focusedId) ?? null,
    [focusedId],
  );
  const selectedProject = useMemo(
    () => museumProjects.find((project) => project.id === selectedId) ?? null,
    [selectedId],
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 820px), (pointer: coarse)");
    const sync = () => setIsMobile(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.code !== "Escape") return;
      if (selectedId) setSelectedId(null);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [selectedId]);

  const inspectProject = useCallback((projectId: string) => {
    setSelectedId(projectId);
  }, []);

  const closePanel = useCallback(() => {
    setSelectedId(null);
    requestAnimationFrame(() => canvasRef.current?.requestPointerLock?.());
  }, []);

  const updateTuning = <K extends keyof MuseumTuning>(key: K, value: MuseumTuning[K]) => {
    setTuning((current) => ({ ...current, [key]: value }));
  };

  if (isMobile) return <MobileMuseumFallback />;

  return (
    <main className={`museumExperience ${lab ? "isLab" : ""}`}>
      <Canvas
        className="museumCanvas"
        camera={{ position: [0, tuning.cameraHeight, 11.8], fov: tuning.fov, near: 0.1, far: 80 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          canvasRef.current = gl.domElement;
        }}
      >
        <MuseumScene projects={museumProjects} focusedId={focusedId} />
        <FirstPersonRig
          projects={museumProjects}
          tuning={tuning}
          paused={Boolean(selectedProject)}
          focusedId={focusedId}
          onFocusChange={setFocusedId}
          onInspect={inspectProject}
          onMovementStarted={() => setInstructionsVisible(false)}
          onLockChange={setLocked}
        />
      </Canvas>

      <header className="museumHudTop">
        <a href="/" className="museumWordmark">RUBIK SOTA</a>
        <span>MUSEUM / FOUNDATION V1</span>
        <a href={lab ? "/museum" : "/museum/lab"}>{lab ? "EXPERIENCE" : "MOVEMENT LAB"}</a>
      </header>

      <div className={`museumCrosshair ${focusedProject ? "hasFocus" : ""}`} aria-hidden="true">
        <i />
      </div>

      {instructionsVisible ? (
        <div className="museumInstructions">
          <b>{locked ? "EXPLORE" : "CLICK TO ENTER"}</b>
          <span>WASD / arrows to move</span>
          <span>Mouse to look</span>
          <span>E or click to inspect</span>
          <span>Esc to release</span>
        </div>
      ) : null}

      {!locked && !selectedProject ? (
        <div className="museumResumeHint">CLICK THE GALLERY TO CONTROL CAMERA</div>
      ) : null}

      {focusedProject && !selectedProject ? (
        <button className="museumFocusPrompt" onClick={() => inspectProject(focusedProject.id)}>
          <small>{focusedProject.category}</small>
          <strong>{focusedProject.title}</strong>
          <span>PRESS E / CLICK TO INSPECT</span>
        </button>
      ) : null}

      {selectedProject ? (
        <ProjectPanel project={selectedProject} onClose={closePanel} />
      ) : null}

      {lab ? (
        <aside className="museumLabPanel">
          <div className="museumLabHeader">
            <b>MOVEMENT LAB</b>
            <span>{focusedId ? `focus: ${focusedId}` : "focus: none"}</span>
            <span>{locked ? "pointer: locked" : "pointer: released"}</span>
          </div>
          <RangeControl label="move speed" value={tuning.moveSpeed} min={2} max={7} step={0.1} onChange={(value) => updateTuning("moveSpeed", value)} />
          <RangeControl label="damping" value={tuning.damping} min={2} max={16} step={0.1} onChange={(value) => updateTuning("damping", value)} />
          <RangeControl label="mouse" value={tuning.mouseSensitivity} min={0.25} max={1.6} step={0.05} onChange={(value) => updateTuning("mouseSensitivity", value)} />
          <RangeControl label="camera height" value={tuning.cameraHeight} min={1.45} max={1.9} step={0.01} onChange={(value) => updateTuning("cameraHeight", value)} />
          <RangeControl label="FOV" value={tuning.fov} min={48} max={82} step={1} onChange={(value) => updateTuning("fov", value)} />
          <RangeControl label="focus distance" value={tuning.interactionDistance} min={2.5} max={8} step={0.1} onChange={(value) => updateTuning("interactionDistance", value)} />
          <RangeControl label="facing threshold" value={tuning.facingThreshold} min={0.55} max={0.98} step={0.01} onChange={(value) => updateTuning("facingThreshold", value)} />
          <button onClick={() => setTuning(DEFAULT_MUSEUM_TUNING)}>RESET TUNING</button>
        </aside>
      ) : null}
    </main>
  );
}

function ProjectPanel({ project, onClose }: { project: MuseumProject; onClose: () => void }) {
  return (
    <div className="museumPanelBackdrop" role="dialog" aria-modal="true" aria-labelledby={`project-${project.id}`}>
      <article className="museumProjectPanel">
        <button className="museumPanelClose" onClick={onClose} aria-label="Close project panel">×</button>
        <p className="museumKicker">{project.category} / {project.year}</p>
        <h2 id={`project-${project.id}`}>{project.title}</h2>
        <p className="museumProjectDescription">{project.description}</p>
        <dl>
          <div><dt>Role</dt><dd>{project.role}</dd></div>
          <div><dt>Technology</dt><dd>{project.technologies.join(" · ")}</dd></div>
          <div><dt>Year</dt><dd>{project.year}</dd></div>
        </dl>
        <button className="museumViewProject" type="button">VIEW PROJECT</button>
        <p className="museumPanelHint">Close to return directly to museum controls.</p>
      </article>
    </div>
  );
}
