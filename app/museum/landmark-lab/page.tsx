import MuseumExperience from "@/components/museum/MuseumExperience";

export default function LandmarkLabPage() {
  return (
    <>
      <MuseumExperience lab />
      <aside
        style={{
          position: "fixed",
          right: 18,
          bottom: 18,
          zIndex: 46,
          width: 350,
          padding: 14,
          border: "1px solid rgba(220,200,170,.28)",
          background: "rgba(18,18,17,.92)",
          color: "#e8e1d7",
          fontFamily: "monospace",
          fontSize: 11,
          lineHeight: 1.55,
          pointerEvents: "none",
        }}
      >
        <strong style={{ display: "block", marginBottom: 8 }}>5.3 / SEMANTIC LANDMARK PILOT</strong>
        <div>pilot: Immersive Architecture Studio</div>
        <div>landmark: MAQUETTE / OBJECT TABLE</div>
        <div>wall frame: removed in premium scene</div>
        <div>interaction: horizontal semantic surface</div>
        <div>lifecycle: dormant → preload → preview → inspect</div>
        <div>inspect: landmark-specific camera pose → existing CinematicInspectRig</div>
        <div style={{ marginTop: 8, opacity: 0.7 }}>
          Validate: spatial legibility, circulation, focus accuracy, restrained micro-response, inspect framing and exact camera return. Other five projects must remain unchanged.
        </div>
      </aside>
    </>
  );
}
