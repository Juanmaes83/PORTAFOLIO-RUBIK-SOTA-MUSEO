# AI START HERE — RUBIK SOTA PORTFOLIO MUSEUM

This file is the canonical entry point for any AI, developer or collaborator who must understand, continue, audit or rebuild this project without access to the original conversation.

## 1. Product definition

RUBIK SOTA PORTFOLIO MUSEUM is a premium editorial portfolio whose entrance is a cinematic scroll experience and whose central interface is a navigable 3D museum.

It is NOT:
- a videogame;
- a generic AI landing page;
- a neon/sci-fi WebGL demo;
- a maze;
- a collection of unrelated effects.

It IS:
- editorial;
- cinematic;
- spatial;
- premium;
- authored;
- modular;
- progressively validated;
- designed so the visual skin can evolve without destroying approved interaction logic.

## 2. Mandatory mental model

### ADN
Product invariants that must survive every redesign:
- premium portfolio;
- cinematic editorial entrance;
- museum as spatial interface;
- one principal gallery, not a maze;
- focus by proximity + gaze;
- E/click inspection;
- six-project collection;
- visited progress;
- final installation / About / Contact;
- desktop and mobile intentionally different;
- visual/manual validation before approval.

### NEURONAS
Approved logic/state systems:
- scroll authority;
- video scrub;
- camera;
- first-person movement;
- bounds;
- mouse-look;
- keyboard yaw;
- focus;
- inspection;
- visited state;
- progress;
- cinematic inspection camera;
- pointer-lock restoration.

### PIEL
Replaceable visual layer:
- typography;
- color;
- materials;
- lighting;
- walls/floor/ceiling;
- project frames/landmarks;
- transitions;
- UI composition;
- media presentation.

Rule: **PIEL may evolve. ADN and approved NEURONAS must not be rewritten without demonstrated root cause.**

## 3. Source-of-truth reading order

Read these first:

1. `sources/01-prompt-museum-genesis.txt`
2. `sources/02-prompt-museum-evolution-analytics.txt`
3. `sources/03-analysis-video-museum-claude-abacus.md`
4. `README.md`
5. `docs/02-ARCHITECTURE-CONTRACT.md`
6. `design/rubik-sota-museum-dna.json`
7. `docs/13-MASTER-REBUILD-FROM-ZERO-PHASES-1-5.md`
8. `docs/03-VALIDATION-STATUS.md`

Then read phase-specific documentation.

## 4. Phase history

### Phase 1 — Foundation / first vertical slice — APPROVED + MERGED
PR #1: https://github.com/Juanmaes83/PORTAFOLIO-RUBIK-SOTA-MUSEO/pull/1

Built:
- source freeze;
- asset inventory;
- Pear editorial audit;
- Design DNA;
- architecture contract;
- Next.js/React scaffold;
- ScrollFilm;
- normalized scroll authority;
- reversible video timeline;
- editorial cues;
- `/lab`;
- missing-media proxy rather than invented production media.

Primary docs:
- `docs/00-ASSET-INVENTORY.md`
- `docs/01-PEAR-AUDIT.md`
- `docs/02-ARCHITECTURE-CONTRACT.md`

### Phase 2 — Cinematic landing — APPROVED + MERGED
PR #2: https://github.com/Juanmaes83/PORTAFOLIO-RUBIK-SOTA-MUSEO/pull/2

Built:
- preserved Phase 1 ScrollFilm;
- three-chapter editorial continuation;
- disciplines statement;
- final museum portal;
- desktop/mobile composition;
- reduced-motion fallback.

Primary doc:
- `docs/04-LANDING-CINEMATIC-PHASE-2.md`

### Phase 3 — Museum Foundation — APPROVED + MERGED
PR #3: https://github.com/Juanmaes83/PORTAFOLIO-RUBIK-SOTA-MUSEO/pull/3

Built:
- `/museum`;
- `/museum/lab`;
- Three.js + React Three Fiber + drei;
- one gallery;
- WASD/arrows;
- pointer-lock mouse-look;
- lightweight bounds;
- focus by distance + camera facing;
- E/click inspect;
- project panel;
- camera pause/restore;
- two test exhibits;
- mobile 2D foundation fallback.

Primary doc:
- `docs/06-MUSEUM-FOUNDATION-PHASE-3.md`

### Phase 4 — Full Museum + keyboard 360° — APPROVED + MERGED
PR #5: https://github.com/Juanmaes83/PORTAFOLIO-RUBIK-SOTA-MUSEO/pull/5

Built:
- 2 → 6 data-driven projects;
- visited Set;
- `0/6` progress;
- final installation dormant before completion;
- final installation active at `6/6`;
- About / Contact;
- continuous keyboard yaw with Q/R;
- mouse and keyboard share one yaw authority;
- keyboard-turn tuning in `/museum/lab`.

Primary doc:
- `docs/07-PHASE-4-FULL-MUSEUM.md`

### Phase 5 — Visual + Navigation Uplift — IN PROGRESS
Phase 5 is intentionally built as isolated reusable stones.

#### Phase 5.1 — Cinematic Inspect Stone — APPROVED + MERGED
PR #6: https://github.com/Juanmaes83/PORTAFOLIO-RUBIK-SOTA-MUSEO/pull/6

Built:
- `CinematicInspectRig`;
- one pilot project (`aviation`);
- exact camera pose capture;
- camera glide-in;
- quaternion slerp;
- `ProjectMediaStage`;
- text/image/video-ready media contract;
- glide-out;
- exact camera return;
- yaw/pitch resynchronization before free controls resume;
- `/museum/inspect-lab`;
- five projects remain old Phase 4 inspection for A/B comparison.

Primary docs:
- `docs/11-PHASE-5.1-CINEMATIC-INSPECT-PLAN.md`
- `docs/12-PHASE-5.1-IMPLEMENTATION-STATUS.md`

#### Phase 5.2 — Material Stone — NEXT
Do not execute until explicitly approved.

Goal:
- prove a premium Rubik Sota material/light system on ONE museum zone and ONE project before propagating globally.

Expected LAB:
- `/museum/material-lab`

Primary donor:
- `Juanmaes83/galerium`

Do not copy Galerium's classical/gold identity. Extract its hierarchy of architectural materials, controlled reflections, ambient light, work-specific light and spatial depth.

## 5. Approved donor archaeology for Phase 5

Only these three donor repositories are approved for this uplift:

1. https://github.com/Juanmaes83/3D-room-portofolio
2. https://github.com/Juanmaes83/hyacinth.im-site
3. https://github.com/Juanmaes83/galerium

Read:
- `docs/08-VISUAL-NAVIGATION-UPLIFT-REPO-MAP.md`
- `docs/09-ARCHAEOLOGY-THREE-PRIMARY-DONORS.md`

Important extracted stones:
- Cinematic Inspect Camera — Galerium;
- Material / Light System — Galerium;
- Semantic Landmarks — Hyacinth;
- Object micro-interactions — 3D Room;
- Project Media Stage — Galerium + Hyacinth;
- Media lifecycle / lazy loading — all three;
- Entry ritual — Galerium + Hyacinth;
- institutional knowledge enrichment — Galerium.

Do not clone entire donor engines.

## 6. Institutional future capability

Wikipedia/Wikimedia from Galerium is deliberately retained as a future institutional capability for museums/galleries.

Read:
- `docs/10-INSTITUTIONAL-KNOWLEDGE-LAYER-WIKIPEDIA-WIKIMEDIA.md`

Rule:
- curator/client content is PRIMARY;
- Wikipedia/Wikidata/Wikimedia are enrichment/fallback;
- external data must never overwrite authoritative curatorial content.

## 7. Future authoring / CMS requirement

A future Author Mode will integrate/reuse panels from Escaparates Pro.

Required content types:
- title;
- text;
- category;
- role;
- year;
- technologies;
- image;
- video;
- poster;
- preview;
- save;
- publish;
- ordering;
- landmark/exhibit type;
- museum placement.

Do NOT rebuild this CMS prematurely. The current priority is visual/navigation quality.

## 8. Core runtime files

Landing:
- `app/page.tsx`
- `components/ScrollFilm.tsx`
- `components/LandingContinuation.tsx`
- `lib/cues.ts`
- `lib/landing.ts`
- `app/globals.css`

Museum:
- `app/museum/page.tsx`
- `app/museum/lab/page.tsx`
- `app/museum/inspect-lab/page.tsx`
- `components/museum/MuseumExperience.tsx`
- `components/museum/FirstPersonRig.tsx`
- `components/museum/MuseumScene.tsx`
- `components/museum/CinematicInspectRig.tsx`
- `components/museum/ProjectMediaStage.tsx`
- `lib/museum.ts`
- `app/museum/museum.css`
- `app/museum/phase4.css`

## 9. Current interaction contract

Desktop:
- W/S = forward/back;
- A/D = strafe;
- arrows = approved translation semantics;
- Q = turn left;
- R = turn right;
- mouse = look;
- E or click = inspect focused target;
- Esc = release/close depending state.

Focus:
- must pass distance threshold;
- must pass camera-facing threshold;
- one focus authority drives highlight + prompt + inspect eligibility.

Inspection 5.1 pilot:
`FREE → GLIDE_IN → INSPECT → GLIDE_OUT → FREE`

When free control returns:
- camera pose has been restored;
- yaw/pitch refs are derived again from camera quaternion;
- velocity is zeroed;
- held keys are cleared.

## 10. Validation philosophy

Never approve from code alone.

Automated gates:
- install;
- TypeScript;
- production build;
- unit/data contracts when added.

Human/browser gates:
- visual quality;
- scroll feel;
- camera comfort;
- focus behavior;
- transition quality;
- lighting/materiality;
- no post-inspection camera snap;
- overall premium perception.

Method:
`OBSERVE → MEASURE → ISOLATE → UNDERSTAND → FIX ROOT → INTEGRATE WITHOUT DEGRADING → VISUALLY VALIDATE → DOCUMENT → REUSE`

Failure record:
`SYMPTOM → HYPOTHESIS → TEST → ROOT CAUSE → SOLUTION → REGRESSION → VALIDATION → LESSON`

## 11. Reconstruction rule

If rebuilding from zero, DO NOT jump directly to the current final code.

Rebuild in the original dependency order:

1. sources + architecture contract;
2. scroll authority + LAB;
3. cinematic landing;
4. museum foundation with 2 exhibits;
5. manual validation;
6. scale to 6 projects;
7. progress + final installation;
8. keyboard yaw;
9. manual validation;
10. cinematic inspect on one pilot;
11. manual validation;
12. then continue Phase 5 stones.

Each approved phase becomes the protected baseline for the next.

## 12. Current state

Current state after Phase 5.1:
- Phases 1–4: approved + merged;
- Phase 5.1: approved + merged;
- Phase 5.2 Material Stone: next planned execution;
- full landing visual uplift: still pending;
- full semantic museum worldbuilding: pending;
- real Rubik Sota project media: pending;
- final mobile museum: pending;
- CMS/Author Mode: pending;
- institutional Wikipedia/Wikimedia layer: documented, not implemented;
- backend/analytics/dashboard: pending.

For full reconstruction details, continue with:

`docs/13-MASTER-REBUILD-FROM-ZERO-PHASES-1-5.md`
