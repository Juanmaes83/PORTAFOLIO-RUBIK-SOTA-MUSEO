# MASTER REBUILD FROM ZERO — PHASES 1–5

Status: **CANONICAL AI HANDOFF / RECONSTRUCTION MANUAL**

Purpose: enable another AI or developer to understand and reconstruct RUBIK SOTA PORTFOLIO MUSEUM from zero without access to the original conversation, while preserving the architectural decisions, approved baselines, validation philosophy and evolution path that produced the current project.

This document is not a product pitch. It is an implementation and decision record.

---

# 1. PRODUCT THESIS

RUBIK SOTA PORTFOLIO MUSEUM is a premium portfolio experience with two connected modes:

```text
CINEMATIC EDITORIAL PORTFOLIO
        ↓
PORTAL / THRESHOLD
        ↓
INTERACTIVE 3D MUSEUM
        ↓
PROJECT EXPLORATION
        ↓
PROJECT INSPECTION
        ↓
COLLECTION PROGRESS
        ↓
FINAL INSTALLATION
        ↓
ABOUT / CONTACT
```

The product is the complete PORTFOLIO + MUSEUM experience.

The museum is not an isolated game. The landing is not a decorative intro. They form one authored narrative.

Product qualities:
- premium;
- editorial;
- cinematic;
- elegant;
- spatial;
- minimal but intentional;
- original;
- technically robust;
- visually validated;
- modular enough that its visual skin can evolve without destroying interaction logic.

Anti-goals:
- generic SaaS landing;
- generic AI-generated visual language;
- videogame progression;
- collectible/score mechanics;
- neon/sci-fi visual defaults;
- maze architecture;
- effect stacking;
- broad rewrites after an approved baseline;
- inventing missing production assets.

---

# 2. THREE SOURCES OF TRUTH

Before rebuilding anything, read:

## Source 01
`sources/01-prompt-museum-genesis.txt`

Defines original museum functionality:
- Next.js + TypeScript + React;
- Three.js + React Three Fiber + drei;
- one principal gallery;
- WASD/arrows + mouse;
- focus via distance + camera direction;
- E/click inspection;
- project panels;
- exploration progress;
- final installation/contact;
- mobile 2D fallback.

## Source 02
`sources/02-prompt-museum-evolution-analytics.txt`

Defines safe evolution:
- preserve approved frontend;
- never rewrite movement/camera/controls/panels without root cause;
- later add PostgreSQL, UUID anonymous tracking, attention metrics, API and stats;
- analytics failure must not break the museum.

Core rule:

> NEW VERSION = APPROVED BASELINE + NEW CAPABILITY.

## Source 03
`sources/03-analysis-video-museum-claude-abacus.md`

Defines the dependency order:

```text
CONCEPT
→ TECHNICAL PROMPT
→ 3D FRONTEND
→ TEST
→ APPROVED BASELINE
→ BACKEND / ANALYTICS
→ DASHBOARD
→ VALIDATION
```

Do not invert that sequence.

---

# 3. REQUIRED ENGINEERING PHILOSOPHY

## 3.1 ADN / NEURONAS / PIEL

### ADN — product invariants
- premium portfolio;
- cinematic editorial entry;
- museum as interface;
- one main gallery;
- focus by proximity + gaze;
- project inspect flow;
- six-project collection;
- progress;
- final installation / About / Contact;
- intentional mobile adaptation;
- evidence before approval.

### NEURONAS — functional logic
- scroll state;
- video scrub;
- master timeline;
- camera;
- movement;
- bounds;
- focus;
- inspect state;
- visited state;
- progress;
- cinematic inspect camera;
- pointer-lock state;
- future analytics/API/persistence.

### PIEL — replaceable visual system
- typography;
- spacing;
- color;
- architecture styling;
- materials;
- lighting;
- project supports;
- labels;
- transitions;
- media presentation;
- UI styling.

Rule:

> Replace PIEL freely only when ADN and NEURONAS remain protected.

## 3.2 FARO workflow

Every meaningful change follows:

```text
OBSERVE
→ MEASURE
→ ISOLATE
→ UNDERSTAND
→ FIX ROOT CAUSE
→ INTEGRATE WITHOUT DEGRADING
→ VISUALLY VALIDATE
→ DOCUMENT
→ REUSE
```

Failure log format:

```text
SYMPTOM
→ HYPOTHESIS
→ TEST
→ ROOT CAUSE
→ SOLUTION
→ REGRESSION CHECK
→ VALIDATION
→ LESSON
```

## 3.3 LAB first

When introducing a risky behavior:
- isolate it in a LAB;
- tune it there;
- validate visually;
- then integrate one production object;
- then propagate.

Never multiply an unapproved interaction across six projects.

---

# 4. CURRENT STACK

Current approved runtime stack:
- Next.js 16.3.3;
- React 19.2.0;
- TypeScript 5.9+;
- Three.js 0.185.1;
- `@react-three/fiber` 9.7.0;
- `@react-three/drei` 10.7.8.

Primary scripts:
- `npm run dev`
- `npm run typecheck`
- `npm run build`
- `npm run start`

CI:
- `.github/workflows/pr-verify.yml`
- `.github/workflows/vertical-slice.yml`

Required automated gate:
- dependency install;
- TypeScript;
- Next.js production build.

Required human gate:
- actual browser visual/interaction validation.

---

# 5. PROJECT FILE MAP

## Landing

```text
app/page.tsx
components/ScrollFilm.tsx
components/LandingContinuation.tsx
lib/cues.ts
lib/landing.ts
app/globals.css
```

## Museum

```text
app/museum/page.tsx
app/museum/layout.tsx
app/museum/museum.css
app/museum/phase4.css
app/museum/lab/page.tsx
app/museum/inspect-lab/page.tsx

components/museum/MuseumExperience.tsx
components/museum/MuseumScene.tsx
components/museum/FirstPersonRig.tsx
components/museum/CinematicInspectRig.tsx
components/museum/ProjectMediaStage.tsx

lib/museum.ts
```

## Design / documentation

```text
design/rubik-sota-museum-dna.json
sources/*
docs/*
AI-START-HERE.md
```

---

# 6. PHASE 1 — FOUNDATION / FIRST VERTICAL SLICE

Status: **APPROVED + MERGED**

PR:
https://github.com/Juanmaes83/PORTAFOLIO-RUBIK-SOTA-MUSEO/pull/1

PR head:
`e6ab1b757f89275a198d37356f78f179167d114b`

Approved main baseline after merge:
`c210791dd973471ca75f3470e227bc67abf03e2b`

## 6.1 Mission

Establish the project truths and prove the first editorial/motion slice without prematurely building the full museum.

Sequence:

```text
SOURCE FREEZE
→ ASSET INVENTORY
→ PEAR AUDIT
→ DESIGN DNA
→ ARCHITECTURE CONTRACT
→ SCROLL / VIDEO LAB
→ FIRST VERTICAL SLICE
```

## 6.2 Asset Inventory

Document:
`docs/00-ASSET-INVENTORY.md`

Critical finding:
- no production `public/media/rubik-sota-master.mp4` existed in the repository;
- no right to invent replacement production footage.

Canonical expected path:
`public/media/rubik-sota-master.mp4`

Behavior when absent:
- explicit visual proxy;
- `MEDIA PENDING`/development fallback;
- no false claim that final media exists.

This rule remains important today: missing asset is not permission to invent asset.

## 6.3 Pear audit

Reference:
https://pear.no/

Document:
`docs/01-PEAR-AUDIT.md`

Extracted principles:
- large editorial scale contrast;
- chapter-based argument;
- sparse surfaces;
- continuous scroll rather than slide snapping;
- strong negative space;
- one dominant idea per beat;
- restrained reveal/mask/clip motion;
- typography and media tied to one timeline.

Never copy Pear layout/identity.

## 6.4 Design DNA

Repo donor/tooling:
https://github.com/Juanmaes83/design-dna

Artifact:
`design/rubik-sota-museum-dna.json`

Key early DNA:
- warm neutral palette;
- dark structural contrast;
- restrained warm accent;
- large display type;
- 12-column editorial logic;
- generous space;
- low ornamentation;
- cinematic foyer → digital museum metaphor;
- no particles/shader spectacle as default.

## 6.5 Architecture contract

Document:
`docs/02-ARCHITECTURE-CONTRACT.md`

Important separation:
- Scroll/media logic remains separate from museum locomotion;
- PIEL remains replaceable;
- museum starts later as second spatial mode;
- mobile can be structurally different.

## 6.6 ScrollFilm

`components/ScrollFilm.tsx`

Core principle:

```text
MASTER SCROLL PROGRESS
├── media currentTime
├── visual state
├── copy cue
├── copy enter/exit
└── portal progression
```

Do not run independent clocks for video and copy.

Scroll down advances media.
Scroll up reverses media.

The loop must not be recreated on every progress render.

## 6.7 LAB

Route:
`/lab`

Purpose:
- observe normalized progress;
- inspect cue changes;
- debug media behavior;
- isolate motion before museum work.

## 6.8 Phase 1 acceptance

Automated:
- types;
- build.

Manual:
- editorial rhythm;
- no abrupt scroll states;
- clear narrative progression;
- missing media communicated honestly;
- mobile/reduced-motion remain usable.

## 6.9 Reconstruction instruction

When rebuilding Phase 1 from zero:
1. create Next/TS project;
2. freeze sources;
3. inventory assets before coding media;
4. create Design DNA;
5. write architecture contract;
6. build one normalized scroll authority;
7. map cues to that authority;
8. create `/lab`;
9. validate;
10. freeze baseline before Phase 2.

---

# 7. PHASE 2 — CINEMATIC LANDING

Status: **APPROVED + MERGED**

PR:
https://github.com/Juanmaes83/PORTAFOLIO-RUBIK-SOTA-MUSEO/pull/2

PR base:
`c210791dd973471ca75f3470e227bc67abf03e2b`

PR head:
`326dc8e14f13449379c11706875436076d70f2da`

Approved main baseline after merge:
`ec94e0840c813d04e958f81af8bffd588361c358`

Document:
`docs/04-LANDING-CINEMATIC-PHASE-2.md`

## 7.1 Mission

Finish the narrative portfolio landing before building the museum.

Do not modify the approved `ScrollFilm` engine unless root cause requires it.

## 7.2 Added system

`components/LandingContinuation.tsx`

`lib/landing.ts`

Extended:
- `app/page.tsx`
- `app/globals.css`

Narrative:
1. cinematic foyer;
2. Practice;
3. Work;
4. System;
5. disciplines/scope;
6. portal to museum.

## 7.3 Design principles

- one idea per chapter;
- big typography / low chrome;
- no generic cards;
- continuous scroll;
- restrained reversible motion;
- desktop/mobile compositions differ intentionally;
- reduced-motion must remain legible.

## 7.4 Important limitation

Phase 2 established structure and narrative, but later review concluded its visual impact is still below the desired final quality.

Therefore:
- Phase 2 is a protected functional/narrative baseline;
- its PIEL is not considered final;
- full landing visual uplift is intentionally deferred until the museum visual language is improved in Phase 5.

This distinction is critical.

## 7.5 Reconstruction instruction

1. start from approved ScrollFilm;
2. do not rewrite its scroll authority;
3. append editorial continuation;
4. keep chapter progress local to continuation;
5. create museum portal as narrative destination;
6. design mobile separately;
7. validate before adding any 3D museum.

---

# 8. HIGGSFIELD / ASSET PROTOCOL FREEZE

Document:
`docs/05-HIGGSFIELD-ASSET-GENERATION-PROTOCOL.md`

Rules:
- default one generation per visual purpose;
- absolute maximum two generations for same function;
- second generation only to fix identified defect or compare a meaningful alternative;
- no decorative generation without product role;
- target stable 2K-class quality;
- no AI gloss/fake HDR/watermarks/text unless explicitly part of asset;
- master prompt before spending credit;
- integrate only after structural role is known.

This prevented unnecessary asset spending in Phases 3–5.1.

---

# 9. PHASE 3 — MUSEUM FOUNDATION

Status: **APPROVED + MERGED**

PR:
https://github.com/Juanmaes83/PORTAFOLIO-RUBIK-SOTA-MUSEO/pull/3

PR base:
`5b392e3110c1f8d82075c6cd29b47fce7cff3dee`

PR head:
`de5d86d151289dfe783435b22c09c2a26b8e75ca`

Approved baseline after merge:
`1d94bad3808e229bbe6d1816f9e802e113ae4c75`

Document:
`docs/06-MUSEUM-FOUNDATION-PHASE-3.md`

## 9.1 Mission

Build the real museum movement/focus/inspect engine with only two exhibits.

Do NOT build six projects first.

## 9.2 Routes

`/museum`

`/museum/lab`

## 9.3 Core runtime

### `FirstPersonRig.tsx`
Responsible for:
- keyboard state;
- velocity/damping;
- camera yaw/pitch;
- pointer-lock mouse look;
- movement;
- bounds;
- focus;
- E/click inspect;
- lock state.

### Movement
- W/S forward/back;
- A/D lateral movement;
- arrows preserve approved translation equivalents;
- no jump;
- no physics engine;
- explicit gallery bounds.

### Focus
One authority only.

A project becomes focused only if:
1. inside interaction distance;
2. camera direction dot target direction passes facing threshold.

This same result drives:
- artwork highlight;
- focus prompt;
- inspect eligibility.

Never create separate competing focus calculations.

### `MuseumExperience.tsx`
Owns UI/product state:
- tuning;
- focus;
- selection;
- pointer lock;
- instructions;
- panel;
- mobile fallback.

### `MuseumScene.tsx`
Owns Phase 3 PIEL:
- one hall;
- floor/walls/ceiling;
- procedural artworks;
- lights;
- benches;
- far installation.

Important: scene styling can later be replaced without rewriting movement/focus.

## 9.4 Museum LAB

Tuning:
- speed;
- damping;
- mouse sensitivity;
- camera height;
- FOV;
- interaction distance;
- facing threshold.

## 9.5 Two-project gate

Phase 3 intentionally proved only the full interaction chain:

```text
MOVE
→ APPROACH
→ FACE PROJECT
→ FOCUS
→ VISUAL RESPONSE
→ E / CLICK
→ PANEL
→ CAMERA PAUSE
→ CLOSE
→ CONTROL RETURN
```

Only after human approval was scaling allowed.

## 9.6 Mobile

At this stage mobile is an intentional 2D foundation fallback.

Do not force desktop first-person controls onto touch devices.

## 9.7 Reconstruction instruction

1. create `/museum` and `/museum/lab`;
2. build one hall;
3. build FirstPersonRig before visual polish;
4. implement focus as distance + gaze;
5. implement E/click panel;
6. guarantee pause/restore;
7. use two projects only;
8. validate movement/focus/panel in browser;
9. freeze baseline.

---

# 10. PHASE 4 — FULL SIX-PROJECT MUSEUM + 360° KEYBOARD YAW

Status: **APPROVED + MERGED**

PR:
https://github.com/Juanmaes83/PORTAFOLIO-RUBIK-SOTA-MUSEO/pull/5

PR base:
`1d94bad3808e229bbe6d1816f9e802e113ae4c75`

PR head:
`3e161396cdb0a44e5717c5af597756cb8dcde702`

Document:
`docs/07-PHASE-4-FULL-MUSEUM.md`

## 10.1 Mission

Scale the approved museum without rewriting the engine.

Phase 4 = approved Phase 3 baseline + complete collection + keyboard yaw micro-improvement.

## 10.2 Donor pattern

Reference used:
`Juanmaes83/3DArtMuseum`

Useful pattern:
- data-driven left/right/front/back artwork placement;
- parameterized placement rather than six bespoke scene components.

Translation:
- `museumProjects` registry;
- `side + z` determine placement;
- one reusable artwork component.

## 10.3 Six-project registry

`lib/museum.ts`

Current projects:
1. `aviation`
2. `ai-workspace`
3. `fashion`
4. `architecture`
5. `analytics`
6. `creative-coding`

Project model includes:
- id;
- title;
- category;
- description;
- technology list;
- role;
- year;
- side;
- z;
- palette.

Phase 5.1 later extends it with media/cinematic inspect fields.

## 10.4 Visited / progress

Unique visits are stored in a `Set<string>`.

State machine:

```text
INSPECT PROJECT
→ add ID if absent
→ visitedCount = Set.size
→ progress = visitedCount / 6
```

No double-counting repeated inspections.

## 10.5 Final installation

Before 6/6:
- dormant;
- not meaningfully interactive.

At 6/6:
- illumination changes;
- becomes focusable;
- E/click opens About / Contact.

No score, achievement or game reward.

## 10.6 360° keyboard yaw

User requested keyboard-controlled continuous rotation without sacrificing existing lateral movement.

Conflict avoided:
- `E` remains inspect;
- Q/R chosen for yaw.

Mapping:
- Q = rotate left;
- R = rotate right.

Important implementation rule:
- mouse and keyboard mutate the SAME yaw authority;
- no second rotation controller;
- yaw continuous/unclamped;
- pitch remains clamped;
- movement vector recalculates after yaw;
- focus reads true camera direction.

`/museum/lab` adds `keyboard turn` tuning.

## 10.7 Why no final assets yet

The user explicitly wanted credit discipline.

Therefore all six projects remained lightweight procedural artworks while interaction baseline was validated.

## 10.8 Human approval gates passed

Approved manually:
- six exhibits;
- all focus/inspect;
- 0/6 → 6/6;
- final installation dormant/active behavior;
- About/Contact;
- >360° keyboard turning;
- W follows new facing direction;
- mouse + Q/R coexist;
- panel restore;
- `/museum`;
- `/museum/lab`.

## 10.9 Reconstruction instruction

1. keep Phase 3 engine intact;
2. expand data registry 2 → 6;
3. make scene data-driven;
4. add visited Set;
5. add progress UI;
6. add final-installation gate;
7. add About/Contact;
8. add Q/R to existing yaw ref;
9. tune in LAB;
10. run regression against all Phase 3 controls;
11. human validate;
12. freeze.

---

# 11. PHASE 5 — VISUAL + NAVIGATION UPLIFT

Status: **IN PROGRESS**

Reason Phase 5 exists:
- functional system is substantially proven;
- current perceived quality still reads too much like a technical 3D prototype;
- the next problem is visual authority, spatial storytelling and navigation choreography.

Phase 5 is deliberately NOT one large redesign.

It is decomposed into stones:

```text
5.1 CINEMATIC INSPECT
5.2 MATERIAL STONE
5.3 SEMANTIC LANDMARK
5.4 ENTRY RITUAL
5B  PROPAGATE APPROVED STONES
THEN LANDING VISUAL UPLIFT
```

Only after stones are approved are they multiplied.

---

# 12. PHASE 5 ARCHAEOLOGY — THREE APPROVED PRIMARY DONORS

Only these three donor repos are approved for this uplift:

## 12.1 3D Room Portfolio
https://github.com/Juanmaes83/3D-room-portofolio

Useful:
- object → interaction → response grammar;
- different objects perform different actions;
- embedded VideoTexture patterns;
- interactive micro-responses;
- pause media/render work when content is not active.

Do not copy:
- literal room identity;
- OrbitControls as replacement engine;
- day/night gimmick;
- toy-like sounds;
- generic carousel.

## 12.2 Hyacinth
https://github.com/Juanmaes83/hyacinth.im-site

Useful:
- world feels authored rather than gallery-generic;
- semantic landmarks;
- target registry;
- proximity context;
- distinct content types use distinct spatial destinations;
- media loads on demand;
- worldbuilding as portfolio personalization.

Do not copy:
- cat/circus identity;
- third-person replacement;
- achievements;
- collectibles;
- gamification;
- weather/NPC as mandatory features.

## 12.3 Galerium
https://github.com/Juanmaes83/galerium

Useful:
- cinematic camera inspect;
- artwork-specific lighting;
- architectural material hierarchy;
- controlled reflection;
- premium museum depth;
- media inspection patterns;
- entry ritual;
- Wikipedia/Wikimedia/institutional knowledge data.

Do not copy literally:
- classical/gold identity;
- artist-period timeline as default portfolio UI;
- room architecture that replaces our one-gallery baseline;
- navigation engine.

Full archaeology:
`docs/09-ARCHAEOLOGY-THREE-PRIMARY-DONORS.md`

---

# 13. PHASE 5.1 — CINEMATIC INSPECT STONE

Status: **APPROVED + MERGED**

PR:
https://github.com/Juanmaes83/PORTAFOLIO-RUBIK-SOTA-MUSEO/pull/6

PR base:
`960d5ff985e317f21efbc802b9c9f9b9121a237e`

PR head before merge:
`f5ba6f13f71396c2f2abed5d4472ac5c41303da2`

Merge commit:
`01cc75d4f5660413e2392ef6c4ebd99944f75439`

Plan:
`docs/11-PHASE-5.1-CINEMATIC-INSPECT-PLAN.md`

Implementation status:
`docs/12-PHASE-5.1-IMPLEMENTATION-STATUS.md`

Primary donor behavior:
Galerium camera inspection.

## 13.1 Problem

Old flow:

```text
FOCUS
→ E
→ PANEL OVER SCENE
```

Functional, but visually still a conventional modal.

Target flow:

```text
FOCUS
→ E / CLICK
→ CAMERA AUTHORITY CHANGES
→ CAMERA GLIDES TO PROJECT
→ HERO FRAMING
→ MEDIA STAGE
→ CLOSE
→ CAMERA RETURNS EXACTLY
→ NAVIGATION RESUMES
```

## 13.2 Pilot-only strategy

Only project `aviation` uses cinematic inspect.

Other five preserve Phase 4 panel.

Reason:
- direct A/B comparison inside same museum;
- no propagation before human approval.

## 13.3 `CinematicInspectRig.tsx`

State:

```text
idle
→ glide-in
→ inspect
→ glide-out
→ idle
```

On glide-in:
- capture exact camera position;
- capture exact quaternion;
- derive project center;
- derive inward wall normal;
- derive destination position using distance + offsets;
- build target orientation with `lookAt`;
- interpolate position;
- slerp quaternion.

On glide-out:
- start at current inspect pose;
- return to captured position/quaternion;
- signal return completion.

Motion uses refs/useFrame, not React state every frame.

## 13.4 Camera ownership problem solved

Most important seam:
- free navigation and cinematic rig must not write camera transform simultaneously.

Current implementation pauses FirstPersonRig while selected/transitioning.

After return, `FirstPersonRig` detects paused → unpaused and:
- derives Euler YXZ from restored camera quaternion;
- writes `yawRef`;
- writes/clamps `pitchRef`;
- resets velocity;
- clears keys.

This prevents the first mouse movement or Q/R input from snapping to stale yaw/pitch.

This is a critical lesson to preserve in any rebuild.

## 13.5 `ProjectMediaStage.tsx`

New media model:

```ts
ProjectMedia =
  | image
  | video
```

Project extension:
- `heroMedia`;
- `longDescription`;
- `cinematicInspect`.

Current media source can be empty.

When missing:
- show explicit prototype media surface;
- do not invent final project image/video.

Video rules:
- playsInline;
- metadata preload;
- no automatic audio;
- active media only.

## 13.6 Inspect LAB

Route:
`/museum/inspect-lab`

Only the pilot project is active.

Tuning:
- glide in duration;
- glide out duration;
- distance;
- vertical offset;
- side offset;
- content reveal threshold.

Shows:
- phase;
- transition progress;
- pointer lock.

Buttons:
- enter inspect;
- exit inspect;
- reset tuning.

## 13.7 Manual validation completed

Human validation approved:
- camera approach;
- Media Stage reveal;
- close;
- exact return;
- immediate mouse movement after return;
- Q/R after return;
- W follows restored orientation;
- repeated cycles;
- old five-project panel path remains valid;
- Phase 4 collection flow remains intact.

The stone is therefore frozen and merge-approved.

## 13.8 Reconstruction instruction

1. do NOT apply to all six;
2. choose one pilot;
3. add media contract;
4. build cinematic rig separately from FirstPersonRig;
5. capture exact pose;
6. implement target math;
7. implement glide-in;
8. build Media Stage;
9. implement glide-out;
10. resynchronize free-navigation yaw/pitch;
11. create inspect LAB;
12. compare pilot vs old five;
13. human validate;
14. only then freeze.

---

# 14. PHASE 5.2 — MATERIAL STONE

Status: **NEXT — PLANNED, NOT IMPLEMENTED**

Primary donor:
`Juanmaes83/galerium`

Mission:

> Make one zone of the current museum feel materially and spatially premium without altering approved geometry/movement/inspect logic.

Scope:
- one wall zone;
- one floor zone;
- one ceiling/structure relationship;
- one project;
- one local lighting system.

Expected LAB:
`/museum/material-lab`

Candidate tuning:
- floor roughness;
- controlled floor reflection;
- wall roughness;
- structure roughness/metalness;
- accent intensity;
- ambient intensity;
- project-light intensity;
- light temperature;
- shadow softness;
- exposure;
- fog density/range.

Do not:
- redesign all six projects;
- introduce semantic landmarks yet;
- change movement;
- change camera controls;
- connect CMS;
- implement Wikipedia;
- redesign landing yet.

Approval statement:

> The architecture must feel like it has weight, surface, depth and deliberate art direction—not simply higher brightness or more effects.

---

# 15. PHASE 5.3 — SEMANTIC LANDMARK STONE

Status: **FUTURE**

Primary donor:
Hyacinth.

Goal:
replace one generic framed-project treatment with a distinct spatial destination.

Examples of future grammar:

```text
FILM / MOTION
→ SCREENING INSTALLATION

WEB / INTERACTIVE
→ DIGITAL TERMINAL

3D WORLD
→ MAQUETTE / OBJECT TABLE

BRAND
→ MATERIAL INSTALLATION

PROCESS
→ ARCHIVE / WORKBENCH

EXPERIMENT
→ LIGHT / SPATIAL OBJECT
```

Do one landmark first.

Do not turn museum into a game.

---

# 16. PHASE 5.4 — ENTRY RITUAL

Status: **FUTURE**

Goal:
replace generic route-feeling transition with an authored threshold.

Current conceptual limitation:

```text
LANDING
→ CLICK
→ ROUTE
→ MUSEUM
```

Target:

```text
LANDING PORTAL
→ ACTIVATION
→ VISUAL TRANSFORMATION
→ REAL MUSEUM LOAD
→ THRESHOLD / REVEAL
→ CONTROL HANDOFF
```

Donors:
- Galerium door/readiness choreography;
- Hyacinth dissolve/loading-as-worldbuilding.

Do not hide actual loading behind fake progress.

---

# 17. AFTER PHASE 5 STONES

Only after 5.1–5.4 are approved:

## Phase 5B — propagate stones
- apply cinematic inspect to appropriate project types;
- apply approved Material DNA globally;
- introduce semantic project supports;
- preserve one coherent museum world;
- maintain data-driven registry.

## Landing visual uplift
The landing remains structurally valid but visually under target.

After museum visual DNA exists, propagate it backward into landing so the foyer foreshadows the world rather than looking like a separate site.

---

# 18. FUTURE AUTHOR MODE / CMS

Not current priority.

Donor:
Escaparates Pro existing panels.

Goal:
provide an owner panel to upload, save, preview and publish personal projects.

Required data:
- title;
- text;
- category;
- role;
- year;
- technologies;
- image;
- video;
- poster;
- media gallery;
- order;
- project visibility;
- exhibit/landmark type;
- placement.

Architecture intent:

```text
AUTHOR PANEL
→ PROJECT DATA MODEL
→ LANDING
→ MUSEUM
→ PROJECT MEDIA STAGE
```

One content source should feed all front-end representations.

Do not rebuild existing panel capability unless donor audit proves incompatibility.

---

# 19. FUTURE INSTITUTIONAL KNOWLEDGE LAYER

Document:
`docs/10-INSTITUTIONAL-KNOWLEDGE-LAYER-WIKIPEDIA-WIKIMEDIA.md`

Reason retained:
this project may later be offered to galleries/museums, not only used as a personal portfolio.

Potential external sources:
- Wikipedia;
- Wikidata;
- Wikimedia Commons.

Potential institutional fields:
- artist;
- artwork;
- period;
- history;
- external references;
- rights/licensing;
- provenance/context.

Authority rule:

```text
CURATOR / CLIENT CONTENT = PRIMARY
EXTERNAL KNOWLEDGE = ENRICHMENT / FALLBACK
```

Never let external data overwrite curator-controlled truth.

---

# 20. FUTURE BACKEND / ANALYTICS

Only after frontend experience is stable and visually approved.

Source 02 planned capabilities:
- PostgreSQL;
- anonymous UUID;
- artwork attention;
- panel attention;
- inspection events;
- `POST /api/inspections`;
- `GET /api/stats`;
- safe degradation;
- dashboard.

Non-negotiable:
analytics cannot break the visit.

---

# 21. MOBILE

Current state:
- desktop first-person museum exists;
- mobile uses intentional 2D fallback foundation;
- final premium mobile museum remains pending.

Do not simply shrink desktop.

Mobile should later receive its own designed interaction pattern while preserving:
- project hierarchy;
- editorial intent;
- progress/final narrative;
- media quality;
- performance.

---

# 22. PRODUCTION VIDEO STATUS

The canonical production video path defined early is:

`public/media/rubik-sota-master.mp4`

At the documented repository states through Phase 5.1, the production master has not been established in the repo tree.

Therefore:
- ScrollFilm's proxy is a development instrument;
- do not treat it as final PIEL;
- do not invent a generic video to fill the slot;
- when real video is added, record duration/fps/dimensions and create a shot/cue map before final timeline tuning.

---

# 23. PERFORMANCE RULES

Keep:
- one Canvas for museum;
- no heavy physics unless a demonstrated requirement appears;
- no network request inside render loop;
- no six videos decoding simultaneously;
- use refs/useFrame for frame-level camera math;
- controlled DPR;
- lightweight geometry while PIEL is still evolving;
- lazy/on-demand media lifecycle;
- no expensive post-processing by default.

Donor lesson:
quality must come first from art direction, materials, lighting, composition and choreography—not brute-force GPU effects.

---

# 24. VALIDATION MATRIX

## Automated

Every PR changing runtime must at minimum pass:
- install;
- typecheck;
- production build.

Add focused tests when pure logic grows.

## Browser / human

### Landing
- scroll smoothness;
- reversible progression;
- copy timing;
- typography;
- mobile composition;
- reduced motion;
- transition intent.

### Museum movement
- pointer lock;
- WASD/arrows;
- Q/R;
- mouse look;
- no jumps/snaps;
- bounds;
- focus threshold quality.

### Project inspect
- E/click;
- camera pause;
- cinematic approach;
- media-stage timing;
- exact return;
- no stale yaw/pitch;
- W follows restored facing.

### Collection
- unique visited count;
- exact 0/6 → 6/6;
- final installation gate;
- About/Contact.

### Visual uplift
- perceived material depth;
- no cheap HDR;
- no generic museum template;
- no donor identity leakage;
- premium Rubik Sota-specific character.

---

# 25. REBUILD ORDER — FROM EMPTY REPOSITORY TO CURRENT BASELINE

If another AI must reconstruct this project from zero, use this exact dependency order:

## Stage A — truth and contracts
1. create repository;
2. add three source files;
3. write README/product thesis;
4. inventory assets;
5. audit Pear principles;
6. create Design DNA;
7. freeze architecture contract.

## Stage B — Phase 1
8. scaffold Next/React/TS;
9. build ScrollFilm;
10. one scroll authority;
11. cue mapping;
12. missing-media proxy;
13. `/lab`;
14. CI;
15. human validate;
16. freeze baseline.

## Stage C — Phase 2
17. preserve ScrollFilm;
18. add LandingContinuation;
19. Practice/Work/System chapters;
20. disciplines statement;
21. museum portal;
22. mobile/reduced motion;
23. validate;
24. freeze.

## Stage D — Phase 3
25. add R3F/Three/drei;
26. `/museum`;
27. `/museum/lab`;
28. one gallery shell;
29. FirstPersonRig;
30. bounds;
31. focus by distance+gaze;
32. E/click panel;
33. pause/restore;
34. two exhibits only;
35. mobile fallback;
36. validate;
37. freeze.

## Stage E — Phase 4
38. registry 2 → 6;
39. data-driven Artwork renderer;
40. visited Set;
41. progress UI;
42. final installation 6/6 gate;
43. About/Contact;
44. Q/R continuous yaw using same yaw ref;
45. LAB turn-speed control;
46. full regression;
47. human validate;
48. freeze.

## Stage F — Phase 5.1
49. extend project media model;
50. build CinematicInspectRig;
51. pilot only on `aviation`;
52. capture exact pose;
53. compute target pose;
54. glide in;
55. ProjectMediaStage;
56. glide out;
57. restore exact pose;
58. resync yaw/pitch;
59. clear keys/velocity;
60. `/museum/inspect-lab`;
61. compare pilot against old five;
62. human validate repeated cycles;
63. freeze.

At this point the reconstruction matches the approved functional baseline through Phase 5.1.

---

# 26. WHAT NOT TO DO DURING RECONSTRUCTION

Do not:
- start with six exhibits;
- start with CMS;
- start with backend;
- replace movement because a donor repo has a different controller;
- convert to third-person;
- add achievements;
- copy Hyacinth's circus identity;
- copy Galerium's gold/classical identity;
- copy 3D Room literally;
- add final media before its role is fixed;
- spend generation credits on speculative decoration;
- merge before human validation;
- call a build green result “visually approved”.

---

# 27. TRACEABILITY — PR LEDGER

## PR #1
`V1 — Pear audit, Design DNA, Scroll/Video LAB and first vertical slice`

Head:
`e6ab1b757f89275a198d37356f78f179167d114b`

## PR #2
`Phase 2 — Complete cinematic portfolio landing before Museum`

Base:
`c210791dd973471ca75f3470e227bc67abf03e2b`

Head:
`326dc8e14f13449379c11706875436076d70f2da`

## PR #3
`Phase 3 — Museum Foundation, Movement LAB and 2 complete exhibits`

Base:
`5b392e3110c1f8d82075c6cd29b47fce7cff3dee`

Head:
`de5d86d151289dfe783435b22c09c2a26b8e75ca`

Approved Phase 3 baseline:
`1d94bad3808e229bbe6d1816f9e802e113ae4c75`

## PR #5
`Phase 4 — Full 6-Project Museum + 360° keyboard yaw`

Base:
`1d94bad3808e229bbe6d1816f9e802e113ae4c75`

Head:
`3e161396cdb0a44e5717c5af597756cb8dcde702`

## PR #6
`Phase 5.1 — Cinematic Inspect Stone`

Base:
`960d5ff985e317f21efbc802b9c9f9b9121a237e`

Head:
`f5ba6f13f71396c2f2abed5d4472ac5c41303da2`

Merge:
`01cc75d4f5660413e2392ef6c4ebd99944f75439`

---

# 28. CURRENT ROADMAP STATE

Completed:
- Phase 1 ✅
- Phase 2 ✅
- Phase 3 ✅
- Phase 4 ✅
- Phase 5.1 ✅

Next:
- Phase 5.2 Material Stone ⏭

Then:
- Phase 5.3 Semantic Landmark;
- Phase 5.4 Entry Ritual;
- Phase 5B propagation;
- landing visual uplift;
- real project media;
- premium mobile museum;
- Author Mode/CMS integration;
- institutional knowledge mode;
- backend/analytics/dashboard;
- regression/final harness;
- production.

---

# 29. SUCCESS CONDITION FOR ANOTHER AI

An AI has understood this project only if it can explain all of the following without guessing:

1. Why the landing and museum are one product.
2. Why PIEL can change but approved NEURONAS should not be rewritten.
3. Why Phase 3 used two exhibits first.
4. Why Phase 4 scaled through data rather than six bespoke scenes.
5. Why Q/R uses the same yaw authority as mouse look.
6. Why cinematic inspection must restore yaw/pitch refs after restoring camera quaternion.
7. Why only one project received 5.1 first.
8. Why final assets were deliberately deferred.
9. Why only three donor repos are approved for current visual/navigation uplift.
10. Why Wikipedia/Wikimedia matters for future institutional clients but is not current runtime priority.
11. Why CMS exists as future integration rather than current task.
12. Why browser validation is mandatory before merge.

If any of these answers are missing, reread `AI-START-HERE.md`, the three sources of truth and this document before modifying runtime.
