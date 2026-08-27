"use client";

import { Canvas } from "@react-three/fiber";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import FirstPersonRig from "@/components/museum/FirstPersonRig";
import MuseumScene from "@/components/museum/MuseumScene";
import {
  DEFAULT_MUSEUM_TUNING,
  FINAL_INSTALLATION_ID,
  museumProjects,
  type MuseumProject,
  type MuseumTuning,
} from "@/lib/museum";

type Props = { lab?: boolean };

function RangeControl({ label, value, min, max, step, onChange }: {
  label: string; value: number; min: number; max: number; step: number; onChange: (value: number) => void;
}) {
  return (
    <label className="museumLabControl">
      <span>{label}</span><b>{value.toFixed(step < 0.1 ? 2 : 1)}</b>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(Number(event.target.value))} />
    </label>
  );
}

function MobileMuseumFallback() {
  return (
    <main className="museumMobileFallback">
      <a href="/" className="museumBackLink">← Portfolio</a>
      <p className="museumKicker">Rubik Sota / Museum</p>
      <h1>Six projects. One collection.</h1>
      <p className="museumMobileIntro">
        The full first-person museum is designed for keyboard and mouse. Mobile remains an intentional 2D collection foundation until its dedicated roadmap phase.
      </p>
      <div className="museumMobileProjects">
        {museumProjects.map((project, index) => (
          <article key={project.id}>
            <span>{String(index + 1).padStart(2, "0")} / {project.category}</span>
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
  const [visitedIds, setVisitedIds] = useState<Set<string>>(() => new Set());
  const [locked, setLocked] = useState(false);
  const [instructionsVisible, setInstructionsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const visitedCount = visitedIds.size;
  const finalUnlocked = visitedCount === museumProjects.length;
  const contactOpen = selectedId === FINAL_INSTALLATION_ID;
  const focusedProject = useMemo(() => museumProjects.find((project) => project.id === focusedId) ?? null, [focusedId]);
  const selectedProject = useMemo(() => museumProjects.find((project) => project.id === selectedId) ?? null, [selectedId]);
  const focusedFinal = focusedId === FINAL_INSTALLATION_ID && finalUnlocked;

  const closePanel = useCallback(() => {
    setSelectedId(null);
    requestAnimationFrame(() => canvasRef.current?.requestPointerLock?.());
  }, []);

  const inspectProject = useCallback((projectId: string) => {
    if (projectId === FINAL_INSTALLATION_ID) {
      if (finalUnlocked) setSelectedId(FINAL_INSTALLATION_ID);
      return;
    }
    if (!museumProjects.some((project) => project.id === projectId)) return;
    setVisitedIds((current) => {
      if (current.has(projectId)) return current;
      const next = new Set(current);
      next.add(projectId);
      return next;
    });
    setSelectedId(projectId);
  }, [finalUnlocked]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 820px), (pointer: coarse)");
    const sync = () => setIsMobile(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.code === "Escape" && selectedId) closePanel();
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [closePanel, selectedId]);

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
        onCreated={({ gl }) => { canvasRef.current = gl.domElement; }}
      >
        <MuseumScene projects={museumProjects} focusedId={focusedId} finalUnlocked={finalUnlocked} />
        <FirstPersonRig
          projects={museumProjects}
          tuning={tuning}
          paused={Boolean(selectedProject) || contactOpen}
          focusedId={focusedId}
          finalUnlocked={finalUnlocked}
          onFocusChange={setFocusedId}
          onInspect={inspectProject}
          onMovementStarted={() => setInstructionsVisible(false)}
          onLockChange={setLocked}
        />
      </Canvas>

      <header className="museumHudTop">
        <a href="/" className="museumWordmark">RUBIK SOTA</a>
        <span>MUSEUM / COMPLETE COLLECTION</span>
        <a href={lab ? "/museum" : "/museum/lab"}>{lab ? "EXPERIENCE" : "MOVEMENT LAB"}</a>
      </header>

      <div className="museumProgress" aria-live="polite">
        <span>PROJECTS EXPLORED</span><strong>{visitedCount} / {museumProjects.length}</strong>
        <i><b style={{ transform: `scaleX(${visitedCount / museumProjects.length})` }} /></i>
      </div>

      <div className={`museumCrosshair ${focusedProject || focusedFinal ? "hasFocus" : ""}`} aria-hidden="true"><i /></div>

      {instructionsVisible ? (
        <div className="museumInstructions">
          <b>{locked ? "EXPLORE" : "CLICK TO ENTER"}</b>
          <span>WASD / arrows to move</span>
          <span>Q / R to rotate 360°</span>
          <span>Mouse to look</span>
          <span>E or click to inspect</span>
          <span>Esc to release</span>
        </div>
      ) : null}

      {!locked && !selectedProject && !contactOpen ? <div className="museumResumeHint">CLICK THE GALLERY TO CONTROL CAMERA</div> : null}

      {focusedProject && !selectedProject && !contactOpen ? (
        <button className="museumFocusPrompt" onClick={() => inspectProject(focusedProject.id)}>
          <small>{visitedIds.has(focusedProject.id) ? "EXPLORED" : focusedProject.category}</small>
          <strong>{focusedProject.title}</strong>
          <span>PRESS E / CLICK TO INSPECT</span>
        </button>
      ) : null}

      {focusedFinal && !contactOpen ? (
        <button className="museumFocusPrompt museumFinalPrompt" onClick={() => inspectProject(FINAL_INSTALLATION_ID)}>
          <small>COLLECTION COMPLETE</small><strong>About / Contact</strong><span>PRESS E / CLICK TO OPEN</span>
        </button>
      ) : null}

      {selectedProject ? <ProjectPanel project={selectedProject} explored={visitedIds.has(selectedProject.id)} onClose={closePanel} /> : null}
      {contactOpen ? <ContactPanel onClose={closePanel} /> : null}

      {finalUnlocked ? <div className="museumUnlockNotice">THE FINAL INSTALLATION IS NOW ACTIVE</div> : null}

      {lab ? (
        <aside className="museumLabPanel">
          <div className="museumLabHeader">
            <b>MOVEMENT / FOCUS LAB</b>
            <span>{focusedId ? `focus: ${focusedId}` : "focus: none"}</span>
            <span>{locked ? "pointer: locked" : "pointer: released"}</span>
            <span>{`visited: ${visitedCount}/${museumProjects.length}`}</span>
          </div>
          <RangeControl label="move speed" value={tuning.moveSpeed} min={2} max={7} step={0.1} onChange={(value) => updateTuning("moveSpeed", value)} />
          <RangeControl label="damping" value={tuning.damping} min={2} max={16} step={0.1} onChange={(value) => updateTuning("damping", value)} />
          <RangeControl label="mouse" value={tuning.mouseSensitivity} min={0.25} max={1.6} step={0.05} onChange={(value) => updateTuning("mouseSensitivity", value)} />
          <RangeControl label="keyboard turn" value={tuning.keyboardTurnSpeed} min={0.5} max={3.5} step={0.05} onChange={(value) => updateTuning("keyboardTurnSpeed", value)} />
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

function ProjectPanel({ project, explored, onClose }: { project: MuseumProject; explored: boolean; onClose: () => void }) {
  return (
    <div className="museumPanelBackdrop" role="dialog" aria-modal="true" aria-labelledby={`project-${project.id}`}>
      <article className="museumProjectPanel">
        <button className="museumPanelClose" onClick={onClose} aria-label="Close project panel">×</button>
        <p className="museumKicker">{project.category} / {project.year} / {explored ? "Explored" : "New"}</p>
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

function ContactPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="museumPanelBackdrop" role="dialog" aria-modal="true" aria-labelledby="museum-contact-title">
      <article className="museumProjectPanel museumContactPanel">
        <button className="museumPanelClose" onClick={onClose} aria-label="Close contact panel">×</button>
        <p className="museumKicker">Rubik Sota / Complete Collection</p>
        <h2 id="museum-contact-title">The visit ends. The conversation begins.</h2>
        <p className="museumProjectDescription">Creative direction, brand systems, digital experiences, motion and interactive worlds brought together as one authored practice.</p>
        <dl>
          <div><dt>Practice</dt><dd>Creative Direction · Digital Experience · Interactive Worlds</dd></div>
          <div><dt>Collection</dt><dd>6 / 6 projects explored</dd></div>
          <div><dt>Next</dt><dd>Contact route to be connected to the final Rubik Sota identity layer.</dd></div>
        </dl>
        <button className="museumViewProject" type="button">START A CONVERSATION</button>
      </article>
    </div>
  );
}
