# 06 — MUSEUM FOUNDATION / PHASE 3

## Mission

Build the first real museum foundation **after the approved cinematic landing**, without scaling prematurely to all six projects or backend analytics.

Protected product sequence:

`APPROVED CINEMATIC PORTFOLIO → REAL MUSEUM ENTRY → MUSEUM FOUNDATION → MOVEMENT LAB → 2 COMPLETE TEST EXHIBITS → MANUAL VALIDATION`

## Baseline

Phase 3 starts from `main` after:

- Phase 2 cinematic landing approval and merge;
- Higgsfield asset-generation protocol freeze.

The landing is protected. Phase 3 changes its final portal only by turning the approved CTA into the real `/museum` route.

## Source-of-truth requirements implemented

From `sources/01-prompt-museum-genesis.txt`:

- one main elegant gallery hall;
- desktop first-person exploration;
- WASD / arrow movement;
- mouse look;
- E or click inspect;
- Escape releases camera / closes panel;
- no jumping;
- no heavy physics;
- lightweight gallery bounds instead of a physics engine;
- focus requires both reasonable distance and camera facing;
- premium project panel pauses camera control;
- mobile does not shrink desktop first-person controls.

## Architecture

### ADN

- portfolio remains the product;
- museum is the spatial portfolio interface;
- one gallery, not a maze;
- proximity + gaze focus;
- project inspection panel;
- desktop and mobile intentionally different.

### NEURONAS

- `FirstPersonRig.tsx`: keyboard state, camera yaw/pitch, damping, movement, bounds, focus engine, E/click inspection, pointer lock;
- `lib/museum.ts`: tuning and project contracts;
- `MuseumExperience.tsx`: product state, selected/focused project, HUD, panel, LAB;
- focus is a single authority shared by highlight, prompt and inspection.

### PIEL

- `MuseumScene.tsx`: lightweight gallery architecture, light, two procedural test artworks, bench and far-end focal installation;
- `app/museum/museum.css`: isolated museum UI skin;
- the visual layer can be upgraded without rewriting movement/focus logic.

## Routes

- `/museum` — clean Phase 3 museum experience;
- `/museum/lab` — same engine with movement/focus tuning controls.

## Movement LAB variables

- movement speed;
- damping;
- mouse sensitivity;
- camera height;
- FOV;
- interaction distance;
- facing threshold.

Gallery bounds remain explicit code constants and are not exposed as casual art-direction controls.

## Two-artwork limit

Phase 3 deliberately implements only:

1. Cinematic Aviation Portfolio;
2. Immersive Architecture Studio.

Each proves:

`DISTANCE → CAMERA FACING → FOCUS → LIGHT RESPONSE → PROMPT → E/CLICK → PANEL → CLOSE → CONTROL RETURN`

Do not multiply to six until this chain is manually approved.

## Asset / Higgsfield decision

No Higgsfield generation is required for Phase 3 foundation.

Reason:

- the source allows original abstract placeholder compositions;
- the current gate is movement, focus and interaction quality, not final artwork art direction;
- generating images now would spend credits before their exact production role is fixed.

When real exhibit assets are required, use `docs/05-HIGGSFIELD-ASSET-GENERATION-PROTOCOL.md` and never exceed two generations per visual function.

## Acceptance gate

Automated:

- dependency install;
- TypeScript;
- production build.

Manual browser:

- landing → museum route feels coherent;
- pointer lock is understandable;
- WASD/arrows feel smooth;
- camera look is comfortable;
- bounds prevent leaving the gallery;
- no jump or game-like mechanics;
- focus does not trigger from distance alone;
- focus does not trigger from gaze alone;
- E and click inspect focused exhibit;
- panel pauses camera;
- close returns to museum controls;
- `/museum/lab` tuning is useful;
- museum reads as premium website, not a game;
- mobile shows the intentional 2D foundation fallback.

## Explicitly deferred

- remaining four exhibits;
- 0/6 progress;
- final unlocked installation/contact;
- final generated artwork assets;
- mobile final collection UI;
- PostgreSQL;
- dwell analytics;
- APIs;
- dashboard.
