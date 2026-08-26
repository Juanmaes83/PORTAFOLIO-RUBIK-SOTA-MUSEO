"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
import { disciplines, landingChapters } from "@/lib/landing";

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

export default function LandingContinuation() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const read = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, section.offsetHeight - window.innerHeight);
      const passed = -rect.top;
      setProgress(clamp01(passed / travel));
    };

    read();
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);
    return () => {
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, []);

  return (
    <>
      <section className="landingNarrative" ref={sectionRef} aria-label="Rubik Sota portfolio narrative">
        <div className="landingSticky">
          <div className="landingAmbient" aria-hidden="true">
            <span className="ambientDisc ambientDiscA" style={{ transform: `translate3d(${progress * 7}vw, ${progress * -9}vh, 0) scale(${1 + progress * 0.08})` }} />
            <span className="ambientDisc ambientDiscB" style={{ transform: `translate3d(${progress * -9}vw, ${progress * 7}vh, 0) scale(${1.08 - progress * 0.05})` }} />
          </div>

          <div className="landingRail" aria-hidden="true">
            <span style={{ transform: `scaleX(${progress})` }} />
          </div>

          {landingChapters.map((chapter, index) => {
            const center = index / (landingChapters.length - 1);
            const distance = Math.abs(progress - center);
            const strength = clamp01(1 - distance / 0.34);
            const style = {
              opacity: strength,
              transform: `translate3d(0, ${(1 - strength) * 42}px, 0)`,
              clipPath: `inset(${(1 - strength) * 24}% 0 ${(1 - strength) * 8}% 0)`,
              pointerEvents: strength > 0.75 ? "auto" : "none",
            } as CSSProperties;

            return (
              <article
                key={chapter.id}
                className={`landingChapter landingChapter-${chapter.side}`}
                style={style}
                aria-hidden={strength < 0.08}
              >
                <div className="landingMeta">
                  <span>{chapter.index}</span>
                  <p>{chapter.eyebrow}</p>
                </div>
                <h2>{chapter.headline}</h2>
                <p className="landingBody">{chapter.body}</p>
              </article>
            );
          })}

          <aside className="landingChapterIndex" aria-hidden="true">
            {landingChapters.map((chapter, index) => {
              const center = index / (landingChapters.length - 1);
              const active = Math.abs(progress - center) < 0.23;
              return <span key={chapter.id} className={active ? "isActive" : ""}>{chapter.index}</span>;
            })}
          </aside>
        </div>
      </section>

      <section className="disciplineStatement">
        <div className="statementGrid">
          <p className="eyebrow">Portfolio / Scope</p>
          <h2>One practice.<br />Multiple forms.</h2>
          <ul>
            {disciplines.map((discipline, index) => (
              <li key={discipline}><span>{String(index + 1).padStart(2, "0")}</span>{discipline}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="museumPortal" id="museum-entry">
        <div className="portalFrame" aria-hidden="true"><span /><span /><span /></div>
        <div className="portalCopy">
          <p className="eyebrow">Next chapter / The Museum</p>
          <h2>The work leaves the page.</h2>
          <p>From here the portfolio becomes spatial: projects turn into exhibits, navigation becomes a visit, and the collection becomes the interface.</p>
          <a href="#museum">Enter the museum <span aria-hidden="true">↘</span></a>
        </div>
      </section>
    </>
  );
}
