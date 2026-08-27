"use client";

import { Canvas } from "@react-three/fiber";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import CinematicInspectRig, { type InspectPhase } from "@/components/museum/CinematicInspectRig";
import FirstPersonRig from "@/components/museum/FirstPersonRig";
import MuseumScene from "@/components/museum/MuseumScene";
import ProjectMediaStage from "@/components/museum/ProjectMediaStage";
import {
  CINEMATIC_INSPECT_PILOT_ID,
  DEFAULT_INSPECT_TUNING,
  DEFAULT_MUSEUM_TUNING,
  FINAL_INSTALLATION_ID,
  museumProjects,
  type InspectTuning,
  type MuseumProject,
  type MuseumTuning,
} from "@/lib/museum";

type Props = { lab?: boolean; inspectLab?: boolean };

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

export default function MuseumExperience({ lab = false, inspectLab = false }: Props) {
  const [tuning, setTuning] = useState<MuseumTuning>(DEFAULT_MUSEUM_TUNING);
  const [inspectTuning, setInspectTuning] = useState<InspectTuning>(DEFAULT_INSPECT_TUNING);
  const [inspectPhase, setInspectPhase] = useState<InspectPhase>("idle");
  const [inspectProgress, setInspectProgress] = useState(0);
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [visitedIds, setVisitedIds] = useState<Set<string>>(() => new Set());
  const [locked, setLocked] = useState(false);
  const [instructionsVisible, setInstructionsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const activeProjects = useMemo(
    () => inspectLab ? museumProjects.filter((project) => project.id === CINEMATIC_INSPECT_PILOT_ID) : museumProjects,
    [inspectLab],
  );
  const visitedCount = visitedIds.size;
  const finalUnlocked = !inspectLab && visitedCount === museumProjects.length;
  const contactOpen = selectedId === FINAL_INSTALLATION_ID;
  const focusedProject = useMemo(() => activeProjects.find((project) => project.id === focusedId) ?? null, [activeProjects, focusedId]);
  const selectedProject = useMemo(() => museumProjects.find((project) => project.id === selectedId) ?? null, [selectedId]);
  const cinematicProject = selectedProject?.cinematicInspect ? selectedProject : null;
  const focusedFinal = focusedId === FINAL_INSTALLATION_ID && finalUnlocked;
  const controlsPaused = Boolean(selectedProject) || contactOpen || inspectPhase !== "idle";

  const restorePointerLock = useCallback(() => {
    requestAnimationFrame(() => canvasRef.current?.requestPointerLock?.());
  }, []);

  const closePanel = useCallback(() => {
    if (cinematicProject && inspectPhase !== "idle") {
      if (inspectPhase === "inspect") setInspectPhase("glide-out");
      return;
    }
    setSelectedId(null);
    restorePointerLock();
  }, [cinematicProject, inspectPhase, restorePointerLock]);

  const markVisited = useCallback((projectId: string) => {
    setVisitedIds((current) => {
      if (current.has(projectId)) return current;
      const next = new Set(current);
      next.add(projectId);
      return next;
    });
  }, []);

  const inspectProject = useCallback((projectId: string) => {
    if (projectId === FINAL_INSTALLATION_ID) {
      if (finalUnlocked) setSelectedId(FINAL_INSTALLATION_ID);
      return;
    }
    const project = museumProjects.find((candidate) => candidate.id === projectId);
    if (!project) return;
    markVisited(projectId);
    setSelectedId(projectId);
    if (project.cinematicInspect) {
      setInspectProgress(0);
      setInspectPhase("glide-in");
    }
  }, [finalUnlocked, markVisited]);

  const completeReturn = useCallback(() => {
    setInspectPhase("idle");
    setInspectProgress(0);
    setSelectedId(null);
    restorePointerLock();
  }, [restorePointerLock]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 820px), (pointer: coarse)");
    const sync = () => setIsMobile(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.code !== "Escape" || !selectedId) return;
      if (cinematicProject && inspectPhase === "inspect") {
        event.preventDefault();
        setInspectPhase("glide-out");
        return;
      }
      if (!cinematicProject) closePanel();
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [cinematicProject, closePanel, inspectPhase, selectedId]);

  const updateTuning = <K extends keyof MuseumTuning>(key: K, value: MuseumTuning[K]) => {
    setTuning((current) => ({ ...current, [key]: value }));
  };
  const updateInspectTuning = <K extends keyof InspectTuning>(key: K, value: InspectTuning[K]) => {
    setInspectTuning((current) => ({ ...current, [key]: value }));
  };

  if (isMobile) return <MobileMuseumFallback />;

  return (
    <main className={`museumExperience ${lab || inspectLab ? "isLab" : ""} ${inspectLab ? "isInspectLab" : ""}`}>
      <Canvas
        className="museumCanvas"
        camera={{ position: [0, tuning.cameraHeight, 11.8], fov: tuning.fov, near: 0.1, far: 80 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        onCreated={({ gl }) => { canvasRef.current = gl.domElement; }}
      >
        <MuseumScene projects={activeProjects} focusedId={focusedId} finalUnlocked={finalUnlocked} />
        <FirstPersonRig
          projects={activeProjects}
          tuning={tuning}
          paused={controlsPaused}
          focusedId={focusedId}
          finalUnlocked={finalUnlocked}
          onFocusChange={setFocusedId}
          onInspect={inspectProject}
          onMovementStarted={() => setInstructionsVisible(false)}
          onLockChange={setLocked}
        />
        <CinematicInspectRig
          project={cinematicProject}
          phase={inspectPhase}
          tuning={inspectTuning}
          onProgress={setInspectProgress}
          onReachedInspect={() => setInspectPhase("inspect")}
          onReturned={completeReturn}
        />
      </Canvas>

      <header className="museumHudTop">
        <a href="/" className="museumWordmark">RUBIK SOTA</a>
        <span>{inspectLab ? "MUSEUM / CINEMATIC INSPECT LAB" : "MUSEUM / COMPLETE COLLECTION"}</span>
        <a href={inspectLab ? "/museum" : lab ? "/museum" : "/museum/lab"}>{inspectLab || lab ? "EXPERIENCE" : "MOVEMENT LAB"}</a>
      </header>

      {!inspectLab ? (
        <div className="museumProgress" aria-live="polite">
          <span>PROJECTS EXPLORED</span><strong>{visitedCount} / {museumProjects.length}</strong>
          <i><b style={{ transform: `scaleX(${visitedCount / museumProjects.length})` }} /></i>
        </div>
      ) : null}

      <div className={`museumCrosshair ${focusedProject || focusedFinal ? "hasFocus" : ""}`} aria-hidden="true"><i /></div>

      {instructionsVisible && inspectPhase === "idle" ? (
        <div className="museumInstructions">
          <b>{locked ? "EXPLORE" : "CLICK TO ENTER"}</b>
          <span>WASD / arrows to move</span>
          <span>Q / R to rotate 360°</span>
          <span>Mouse to look</span>
          <span>E or click to inspect</span>
          <span>Esc to release</span>
        </div>
      ) : null}

      {!locked && !selectedProject && !contactOpen && inspectPhase === "idle" ? <div className="museumResumeHint">CLICK THE GALLERY TO CONTROL CAMERA</div> : null}

      {focusedProject && !selectedProject && inspectPhase === "idle" ? (
        <button className="museumFocusPrompt" onClick={() => inspectProject(focusedProject.id)}>
          <small>{visitedIds.has(focusedProject.id) ? "EXPLORED" : focusedProject.category}</small>
          <strong>{focusedProject.title}</strong>
          <span>{focusedProject.cinematicInspect ? "PRESS E / CLICK — CINEMATIC INSPECT" : "PRESS E / CLICK TO INSPECT"}</span>
        </button>
      ) : null}

      {focusedFinal && !contactOpen ? (
        <button className="museumFocusPrompt museumFinalPrompt" onClick={() => inspectProject(FINAL_INSTALLATION_ID)}>
          <small>COLLECTION COMPLETE</small><strong>About / Contact</strong><span>PRESS E / CLICK TO OPEN</span>
        </button>
      ) : null}

      {cinematicProject && inspectPhase !== "idle" ? (
        <ProjectMediaStage
          project={cinematicProject}
          phase={inspectPhase}
          transitionProgress={inspectProgress}
          revealAt={inspectTuning.revealAt}
          onClose={() => setInspectPhase("glide-out")}
        />
      ) : null}

      {selectedProject && !selectedProject.cinematicInspect ? <ProjectPanel project={selectedProject} explored={visitedIds.has(selectedProject.id)} onClose={closePanel} /> : null}
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

      {inspectLab ? (
        <aside className="museumLabPanel inspectLabPanel">
          <div className="museumLabHeader">
            <b>CINEMATIC INSPECT STONE</b>
            <span>{`phase: ${inspectPhase}`}</span>
            <span>{`transition: ${Math.round(inspectProgress * 100)}%`}</span>
            <span>{locked ? "pointer: locked" : "pointer: released"}</span>
          </div>
          <RangeControl label="glide in" value={inspectTuning.durationIn} min={0.35} max={1.8} step={0.05} onChange={(value) => updateInspectTuning("durationIn", value)} />
          <RangeControl label="glide out" value={inspectTuning.durationOut} min={0.3} max={1.6} step={0.05} onChange={(value) => updateInspectTuning("durationOut", value)} />
          <RangeControl label="distance" value={inspectTuning.distance} min={1.5} max={4.2} step={0.05} onChange={(value) => updateInspectTuning("distance", value)} />
          <RangeControl label="height offset" value={inspectTuning.heightOffset} min={-0.6} max={0.8} step={0.02} onChange={(value) => updateInspectTuning("heightOffset", value)} />
          <RangeControl label="side offset" value={inspectTuning.sideOffset} min={-1.2} max={1.2} step={0.02} onChange={(value) => updateInspectTuning("sideOffset", value)} />
          <RangeControl label="content reveal" value={inspectTuning.revealAt} min={0.25} max={0.95} step={0.01} onChange={(value) => updateInspectTuning("revealAt", value)} />
          <button disabled={Boolean(selectedProject)} onClick={() => inspectProject(CINEMATIC_INSPECT_PILOT_ID)}>ENTER INSPECT</button>
          <button disabled={inspectPhase !== "inspect"} onClick={() => setInspectPhase("glide-out")}>EXIT INSPECT</button>
          <button disabled={Boolean(selectedProject)} onClick={() => setInspectTuning(DEFAULT_INSPECT_TUNING)}>RESET TUNING</button>
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
