# PHASE 5.3 — SEMANTIC LANDMARK PILOT

Status: **CANDIDATE / AWAITING HUMAN VISUAL VALIDATION**

Pilot project: `architecture` — **Immersive Architecture Studio**

Landmark: **MAQUETTE / OBJECT TABLE**

Primary donor principle: Hyacinth semantic destinations — distinct content types should have distinct spatial forms. Supporting behavior: 3D Room object → interaction → response. Existing Rubik Sota focus, lifecycle and Cinematic Inspect remain authoritative.

## Mission

Prove one real Semantic Landmark before propagation.

Before:

```text
Architecture project
→ generic wall frame
→ focus
→ E/click
→ Cinematic Inspect
```

Candidate:

```text
Architecture project
→ spatial maquette / object table
→ proximity preload
→ gaze/raycast focus
→ restrained physical response
→ E/click
→ existing Cinematic Inspect
→ exact camera return
```

## What changed

### Explicit semantic contracts

`lib/artifacts.ts` no longer assigns semantic types by project index. All six current projects have explicit semantic definitions.

Architecture alone receives:
- `landmarkType: object-table`;
- spatial anchor inside the gallery rather than wall-derived placement;
- horizontal interaction surface;
- landmark-specific Cinematic Inspect pose;
- lifecycle distances appropriate to a spatial object.

The other five projects preserve their current wall/display treatments.

### Architecture landmark

New component:

`components/museum/landmarks/ArchitectureMaquetteLandmark.tsx`

Authored prototype contains:
- low mineral display table;
- dark metal support structure;
- conceptual architectural volumes;
- roof/slab layer;
- translucent material/glass study;
- small material samples;
- project identity plaque;
- local light rig;
- restrained focus micro-response.

The maquette is intentionally conceptual. It does not claim to reproduce a real architecture project for which no production asset exists.

### Interaction surface

`FirstPersonRig` remains the focus/raycast authority. It now honors each artifact's explicit `surfaceRotation`, enabling a horizontal semantic surface for the object table without introducing a second interaction engine.

### Lifecycle

5.3B remains authoritative:

```text
far → dormant
near → preload
focus → preview
E/click → inspect
leave → reset/release
```

The generic vertical lifecycle halo is not reused on the object table. The landmark receives a low spatial signal near the floor/table instead.

### Cinematic Inspect

`CinematicInspectRig` remains the only cinematic camera authority. It now accepts an optional artifact-specific pose from the semantic registry. Architecture uses a front/raised view suitable for a horizontal maquette; wall projects preserve existing calculations.

### Premium scene substitution

In the premium museum scene:
- Architecture's old wall exhibit is not rendered;
- its old wall track fixture is not rendered;
- the new Architecture maquette landmark is rendered instead;
- the other five project exhibits remain unchanged.

The baseline material comparison scene remains available and unchanged.

## Validation route

`/museum/landmark-lab`

## Protected neurons

Must not regress:
- WASD/arrows;
- Q/R yaw;
- mouse-look;
- pointer lock;
- semantic raycast/direct click;
- E action;
- MediaLifecycleController;
- visited/progress 0/6 → 6/6;
- final installation;
- CinematicInspectRig ownership;
- exact camera return;
- mobile fallback.

## Human acceptance gate

The pilot is NOT approved until visual/browser validation confirms:

1. Architecture no longer reads as another wall frame.
2. The object reads as architecture/material study before opening content.
3. Main circulation remains clear.
4. It does not visually collide with the existing central display table or Rubik hero.
5. Focus occurs only when the maquette is actually targeted.
6. Near/preload behavior is restrained.
7. Focus micro-response is visible but not game-like.
8. E and click open Architecture specifically.
9. Cinematic Inspect frames the horizontal landmark correctly.
10. Escape/close returns to the exact previous camera pose.
11. Movement and Q/R remain correct immediately after return.
12. Progress and final installation remain intact.
13. Other five project treatments remain unchanged.
14. No perceptible performance regression.

## Explicitly deferred

Do NOT propagate yet to:
- Aviation screening/cinema installation;
- AI digital terminal;
- Fashion material installation;
- Analytics semantic console;
- Creative Coding spatial/generative object.

Also deferred:
- Phase 5.4 Entry Ritual;
- real project media ingestion;
- CMS/Author Mode;
- Wikipedia/Wikidata/Wikimedia;
- backend/analytics/dashboard;
- multi-room navigation.

## Merge gate

CI + exact preview + human visual approval are required before merge.
