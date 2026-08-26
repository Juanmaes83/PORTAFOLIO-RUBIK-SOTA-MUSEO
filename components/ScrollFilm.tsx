"use client";

import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import { activeCueId, clamp01, cueStrength, editorialCues } from "@/lib/cues";

type MediaState = "loading" | "ready" | "missing";

type ScrollFilmProps = {
  lab?: boolean;
};

const VIDEO_SRC = "/media/rubik-sota-master.mp4";

export default function ScrollFilm({ lab = false }: ScrollFilmProps) {
  const runwayRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const targetRef = useRef(0);
  const renderedRef = useRef(0);
  const committedProgressRef = useRef(0);
  const frameRef = useRef<number | null>(null);
  const geometryRef = useRef({ start: 0, distance: 1 });
  const [progress, setProgress] = useState(0);
  const [mediaState, setMediaState] = useState<MediaState>("loading");
  const [videoDuration, setVideoDuration] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const activeCue = useMemo(() => activeCueId(progress), [progress]);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncQueries = () => {
      setIsMobile(mobileQuery.matches);
      setReducedMotion(motionQuery.matches);
    };

    syncQueries();
    mobileQuery.addEventListener("change", syncQueries);
    motionQuery.addEventListener("change", syncQueries);
    return () => {
      mobileQuery.removeEventListener("change", syncQueries);
      motionQuery.removeEventListener("change", syncQueries);
    };
  }, []);

  useEffect(() => {
    const refreshGeometry = () => {
      const runway = runwayRef.current;
      if (!runway) return;
      const rect = runway.getBoundingClientRect();
      const start = window.scrollY + rect.top;
      const distance = Math.max(1, runway.offsetHeight - window.innerHeight);
      geometryRef.current = { start, distance };
    };

    const readScroll = () => {
      const { start, distance } = geometryRef.current;
      targetRef.current = clamp01((window.scrollY - start) / distance);
    };

    const tick = () => {
      const target = targetRef.current;
      const current = renderedRef.current;
      const damping = reducedMotion ? 1 : isMobile ? 0.22 : 0.13;
      const next = Math.abs(target - current) < 0.0005 ? target : current + (target - current) * damping;
      renderedRef.current = next;

      if (stageRef.current) {
        stageRef.current.style.setProperty("--timeline", next.toFixed(5));
      }

      const video = videoRef.current;
      if (video && mediaState === "ready" && Number.isFinite(video.duration) && video.duration > 0) {
        const desired = next * Math.max(0, video.duration - 0.04);
        if (Math.abs(video.currentTime - desired) > 0.025) {
          try {
            video.currentTime = desired;
          } catch {
            // Seeking can fail transiently before enough media is buffered.
          }
        }
      }

      if (Math.abs(next - committedProgressRef.current) > 0.0015 || next === 0 || next === 1) {
        committedProgressRef.current = next;
        setProgress(next);
      }

      frameRef.current = window.requestAnimationFrame(tick);
    };

    refreshGeometry();
    readScroll();
    window.addEventListener("resize", refreshGeometry);
    window.addEventListener("scroll", readScroll, { passive: true });
    frameRef.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", refreshGeometry);
      window.removeEventListener("scroll", readScroll);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, [isMobile, mediaState, reducedMotion]);

  const portalStrength = clamp01((progress - 0.86) / 0.14);
  const stageStyle = { "--timeline": progress } as CSSProperties;

  return (
    <>
      <section className="scrollRunway" ref={runwayRef} aria-label="Rubik Sota cinematic introduction">
        <div className="filmStage" ref={stageRef} style={stageStyle}>
          <video
            ref={videoRef}
            className={`masterFilm ${mediaState === "ready" ? "isReady" : ""}`}
            muted
            playsInline
            preload="metadata"
            src={VIDEO_SRC}
            onLoadedMetadata={(event) => {
              setVideoDuration(event.currentTarget.duration || 0);
              setMediaState("ready");
              event.currentTarget.pause();
            }}
            onError={() => setMediaState("missing")}
            aria-hidden="true"
          />

          <div className="filmProxy" aria-hidden="true">
            <span className="proxyOrb proxyOrbA" />
            <span className="proxyOrb proxyOrbB" />
            <span className="proxyGrid" />
          </div>

          <div className="filmShade" aria-hidden="true" />

          <header className="filmChrome">
            <a className="wordmark" href="#top" aria-label="Rubik Sota home">RUBIK SOTA</a>
            <span className="chapter">PORTFOLIO / MUSEUM</span>
            <span className="counter">{String(Math.round(progress * 100)).padStart(2, "0")}%</span>
          </header>

          <div className="cueLayer" aria-live="polite">
            {editorialCues.map((cue) => {
              const strength = cueStrength(cue, progress);
              const cueStyle = {
                opacity: strength,
                transform: `translate3d(0, ${(1 - strength) * 30}px, 0)`,
                clipPath: `inset(${(1 - strength) * 36}% 0 ${(1 - strength) * 12}% 0)`,
                pointerEvents: strength > 0.8 ? "auto" : "none",
              } as CSSProperties;

              return (
                <article key={cue.id} className={`editorialCue cue-${cue.align}`} style={cueStyle} aria-hidden={strength < 0.08}>
                  <p className="eyebrow">{cue.eyebrow}</p>
                  <h1>{cue.headline}</h1>
                  {cue.body ? <p className="cueBody">{cue.body}</p> : null}
                </article>
              );
            })}
          </div>

          <div className="timelineRail" aria-hidden="true">
            <span style={{ transform: `scaleX(${progress})` }} />
          </div>

          {mediaState !== "ready" ? (
            <div className="mediaBadge" role="status">
              {mediaState === "loading" ? "MEDIA CHECK" : "MEDIA PENDING · /public/media/rubik-sota-master.mp4"}
            </div>
          ) : null}

          <div className="portalSignal" style={{ opacity: portalStrength, transform: `translateY(${(1 - portalStrength) * 24}px)` }}>
            <span>ENTER THE COLLECTION</span>
            <strong>MUSEUM</strong>
          </div>

          {lab ? (
            <aside className="labReadout" aria-label="Timeline diagnostics">
              <b>SCROLL / VIDEO LAB</b>
              <span>progress {progress.toFixed(3)}</span>
              <span>cue {activeCue}</span>
              <span>media {mediaState}</span>
              <span>duration {videoDuration ? `${videoDuration.toFixed(2)}s` : "—"}</span>
              <span>mode {isMobile ? "mobile" : "desktop"}</span>
              <span>motion {reducedMotion ? "reduced" : "full"}</span>
            </aside>
          ) : null}

          <div className="scrollPrompt" aria-hidden="true">
            <span>SCROLL TO ENTER</span>
            <i />
          </div>
        </div>
      </section>

      <section className="museumThreshold" id="museum">
        <p className="eyebrow">Vertical Slice / 01</p>
        <h2>The foyer ends. The museum begins.</h2>
        <p>
          This threshold is intentionally not the full 3D gallery yet. The next gate is to approve the film, type and scroll choreography before the museum engine is multiplied across six projects.
        </p>
        <a href={lab ? "/" : "/lab"}>{lab ? "Back to experience" : "Open Scroll / Video LAB"}</a>
      </section>
    </>
  );
}
