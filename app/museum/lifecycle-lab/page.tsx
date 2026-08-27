import MuseumExperience from "@/components/museum/MuseumExperience";

export default function LifecycleLabPage() {
  return (
    <>
      <MuseumExperience lab />
      <aside
        style={{
          position: "fixed",
          right: 18,
          bottom: 18,
          zIndex: 45,
          width: 330,
          padding: 14,
          border: "1px solid rgba(220,200,170,.28)",
          background: "rgba(18,18,17,.9)",
          color: "#e8e1d7",
          fontFamily: "monospace",
          fontSize: 11,
          lineHeight: 1.55,
          pointerEvents: "none",
        }}
      >
        <strong style={{ display: "block", marginBottom: 8 }}>5.3B / MEDIA LIFECYCLE LAB</strong>
        <div>FAR → dormant: no semantic response.</div>
        <div>NEAR → preload: subtle low-energy rail.</div>
        <div>FOCUS → preview: light + controlled breathing.</div>
        <div>INSPECT → full state: Cinematic Inspect owns presentation.</div>
        <div>LEAVE → reset/release primed media when beyond unload distance.</div>
        <div style={{ marginTop: 8, opacity: 0.68 }}>Current project media slots have no real src, so this LAB validates lifecycle authority and behavior without inventing fake media.</div>
      </aside>
    </>
  );
}
