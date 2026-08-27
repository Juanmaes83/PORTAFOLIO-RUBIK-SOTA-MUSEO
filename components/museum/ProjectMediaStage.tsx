"use client";

import type { MuseumProject } from "@/lib/museum";
import type { InspectPhase } from "@/components/museum/CinematicInspectRig";

type Props = {
  project: MuseumProject;
  phase: InspectPhase;
  transitionProgress: number;
  revealAt: number;
  onClose: () => void;
};

export default function ProjectMediaStage({ project, phase, transitionProgress, revealAt, onClose }: Props) {
  const media = project.heroMedia;
  const revealed = phase === "inspect" || (phase === "glide-in" && transitionProgress >= revealAt);
  const [base, accent, dark] = project.palette;

  return (
    <div
      className={`projectMediaStage ${revealed ? "isRevealed" : ""} ${phase === "glide-out" ? "isLeaving" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`media-stage-${project.id}`}
      style={{
        "--media-base": base,
        "--media-accent": accent,
        "--media-dark": dark,
      } as React.CSSProperties}
    >
      <div className="projectMediaVisual" aria-label={media?.alt ?? `${project.title} media`}>
        {media?.type === "image" && media.src ? (
          <img src={media.src} alt={media.alt} />
        ) : media?.type === "video" && media.src ? (
          <video src={media.src} poster={media.poster} controls playsInline preload="metadata" />
        ) : (
          <div className="projectMediaPrototype" aria-label="Media slot ready for image or video">
            <span className="projectMediaPrototypeDisc" />
            <span className="projectMediaPrototypePlane" />
            <small>MEDIA SLOT / IMAGE OR VIDEO READY</small>
          </div>
        )}
      </div>

      <article className="projectMediaCopy">
        <div className="projectMediaMeta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h2 id={`media-stage-${project.id}`}>{project.title}</h2>
        <p>{project.longDescription ?? project.description}</p>
        <dl>
          <div><dt>Role</dt><dd>{project.role}</dd></div>
          <div><dt>Technology</dt><dd>{project.technologies.join(" · ")}</dd></div>
        </dl>
      </article>

      <button className="projectMediaClose" type="button" onClick={onClose} disabled={phase !== "inspect"}>
        <span>Close project</span><b>×</b>
      </button>
      <div className="projectMediaTransitionRail" aria-hidden="true"><span style={{ transform: `scaleX(${phase === "glide-out" ? 1 - transitionProgress : transitionProgress})` }} /></div>
    </div>
  );
}
