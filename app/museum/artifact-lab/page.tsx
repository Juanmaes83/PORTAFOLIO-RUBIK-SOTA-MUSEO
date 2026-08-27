import MuseumExperience from "@/components/museum/MuseumExperience";

export default function ArtifactLabPage() {
  return (
    <>
      <MuseumExperience lab />
      <aside
        style={{
          position: "fixed",
          right: 18,
          bottom: 18,
          zIndex: 40,
          width: 300,
          padding: 14,
          border: "1px solid rgba(220,200,170,.28)",
          background: "rgba(18,18,17,.88)",
          color: "#e8e1d7",
          fontFamily: "monospace",
          fontSize: 11,
          lineHeight: 1.5,
          pointerEvents: "none",
        }}
      >
        <strong style={{ display: "block", marginBottom: 8 }}>5.3A / SEMANTIC ARTIFACT LAB</strong>
        <div>Crosshair ray → semantic interaction surface → project focus.</div>
        <div>E / locked click → artifact primary action → Cinematic Inspect.</div>
        <div>Unlocked direct click on artwork → inspect without entering pointer lock first.</div>
        <div style={{ marginTop: 8, opacity: 0.68 }}>Use the existing Movement / Focus LAB panel to verify live focus IDs.</div>
      </aside>
    </>
  );
}
