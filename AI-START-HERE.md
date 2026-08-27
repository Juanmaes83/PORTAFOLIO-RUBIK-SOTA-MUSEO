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
- semantic focus and inspection;
- six-project collection;
- visited progress;
- final installation / About / Contact;
- desktop and mobile intentionally different;
- visual/manual validation before approval.

### NEURONAS
Approved logic/state systems now include:
- scroll authority;
- video scrub;
- camera;
- first-person movement;
- bounds;
- mouse-look;
- keyboard yaw;
- semantic focus/raycast;
- direct artwork click;
- `InteractiveArtifact` registry;
- inspection;
- visited state;
- progress;
- cinematic inspection camera;
- pointer-lock restoration;
- Media Lifecycle `dormant → preload → preview → inspect → reset/release`.

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
5. `docs/18-CURRENT-ROADMAP-AND-BRANCH-STATE.md` — current operational truth
6. `docs/02-ARCHITECTURE-CONTRACT.md`
7. `design/rubik-sota-museum-dna.json`
8. `docs/03-VALIDATION-STATUS.md`
9. `docs/13-MASTER-REBUILD-FROM-ZERO-PHASES-1-5.md` — historical reconstruction manual

Then read phase-specific documentation.

## 4. Current baseline

Current approved `main`:

`32d554fca07254010829bfc8d712be86879b20ce`

Meaning:

> Phase 5.3B Media Lifecycle + Semantic Landmark Behavior merged.

There are currently no open PRs at the documented state.

A branch audit confirms all retained feature branches are **0 commits ahead of `main`**. No approved runtime work is stranded outside `main`.

See:

`docs/18-CURRENT-ROADMAP-AND-BRANCH-STATE.md`

## 5. Phase history

### Phase 1 — Foundation / first vertical slice
**APPROVED + MERGED** — PR #1

Built source freeze, asset inventory, Pear audit, Design DNA, architecture contract, ScrollFilm, normalized scroll authority, reversible timeline, `/lab`, and explicit missing-media fallback.

### Phase 2 — Cinematic landing
**APPROVED + MERGED** — PR #2

Built LandingContinuation, editorial chapters, museum portal, desktop/mobile composition and reduced-motion fallback. Structural/narrative baseline approved; final visual uplift remains later work.

### Phase 3 — Museum Foundation
**APPROVED + MERGED** — PR #3

Built `/museum`, `/museum/lab`, R3F gallery, WASD/arrows, pointer-lock mouse-look, bounds, focus, E/click inspection, panel pause/restore and mobile 2D foundation.

### Phase 4 — Full Museum + keyboard 360°
**APPROVED + MERGED** — PR #5

Built six data-driven projects, visited Set, 0/6 progress, final unlock, About/Contact and Q/R continuous yaw.

### Phase 5.1 — Cinematic Inspect Stone
**APPROVED + MERGED** — PR #6

Built `CinematicInspectRig`, exact pose capture, glide-in/out, `ProjectMediaStage`, exact return, yaw/pitch resync and `/museum/inspect-lab`.

### Phase 5.2 — Material + Atmosphere Stone
**APPROVED + MERGED** — PR #7

Built material/light validation stone and `/museum/material-lab`.

### Phase 5.2R / 5.2R+ — Visual Recovery + Premium Consolidation
**APPROVED + MERGED** — PR #9

PASS 2 corrected failed asset integrations and established the current premium scene baseline including PBR/IBL/HDRI, corrected track lighting, clean seating, frame family, pedestal family, Media Wall V2, Display Table, Entrance Portal V2, Rubik System 02 and Final Installation V2.

### Phase 5.3A — Semantic Artifacts + Direct Artwork Click
**APPROVED + MERGED** — PR #10

Built:
- `InteractiveArtifact` registry;
- explicit world anchors;
- semantic interaction surfaces independent from PIEL;
- center-camera raycast;
- direct pointer click;
- E/click routing to actual semantic artifact;
- Cinematic Inspect across all six projects;
- `/museum/artifact-lab`.

### Phase 5.3B — Media Lifecycle + Semantic Landmark Behavior
**APPROVED + MERGED** — PR #11

Built:

```text
DORMANT
→ PRELOAD
→ PREVIEW
→ INSPECT
→ RESET / RELEASE
```

Includes lifecycle policy per artifact, resource priming/release contract and `/museum/lifecycle-lab` without inventing missing real media.

## 6. Next official stone

The next step is **NOT Phase 5.4 yet**.

The broader Phase 5.3 Semantic Landmark Stone still needs its visual proof:

> replace one generic project treatment with one genuinely distinct spatial destination.

Selected pilot:

```text
architecture / Immersive Architecture Studio
→ MAQUETTE / OBJECT TABLE
```

Expected route:

`/museum/landmark-lab`

Rules:
- one landmark first;
- explicit semantic type, not index-derived type;
- project leaves the wall;
- reuse current `InteractiveArtifact`;
- reuse 5.3B lifecycle;
- reuse current focus/raycast authority;
- reuse `CinematicInspectRig`;
- no CMS;
- no Wikipedia/Wikidata/Wikimedia;
- no new room;
- no gamification;
- no propagation to all six before human validation.

## 7. Approved donor archaeology for Phase 5

Only these three donor repositories are approved:

1. https://github.com/Juanmaes83/3D-room-portofolio
2. https://github.com/Juanmaes83/hyacinth.im-site
3. https://github.com/Juanmaes83/galerium

Read:
- `docs/08-VISUAL-NAVIGATION-UPLIFT-REPO-MAP.md`
- `docs/09-ARCHAEOLOGY-THREE-PRIMARY-DONORS.md`

Extract capabilities as stones. Do not clone entire engines.

Key roles:
- Galerium → cinematic inspect, material/light, entry ritual;
- Hyacinth → semantic landmarks, environmental information architecture, target grammar;
- 3D Room → object micro-interactions, media lifecycle behavior.

## 8. Legacy / knowledge future

Legacy Museum semantic/knowledge archaeology is preserved in:

`docs/15-LEGACY-MUSEUM-DONOR-SEMANTIC-KNOWLEDGE-ARCHAEOLOGY.md`

Wikipedia/Wikidata/Wikimedia remains future institutional enrichment only:

`docs/10-INSTITUTIONAL-KNOWLEDGE-LAYER-WIKIPEDIA-WIKIMEDIA.md`

Authority rule:

```text
CURATOR / CLIENT CONTENT = PRIMARY
EXTERNAL KNOWLEDGE = ENRICHMENT / FALLBACK
```

## 9. Future authoring / CMS

Do not build prematurely.

Future Author Mode should reuse compatible Escaparates Pro panel capability and feed one content source into Landing + Museum + ProjectMediaStage.

## 10. Core runtime files

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
- `app/museum/artifact-lab/page.tsx`
- `app/museum/lifecycle-lab/page.tsx`
- `components/museum/MuseumExperience.tsx`
- `components/museum/FirstPersonRig.tsx`
- `components/museum/MuseumScene.tsx`
- `components/museum/CinematicInspectRig.tsx`
- `components/museum/ProjectMediaStage.tsx`
- `lib/museum.ts`
- `lib/artifacts.ts`

## 11. Current interaction contract

Desktop:
- W/S = forward/back;
- A/D = strafe;
- arrows = approved translation semantics;
- Q = turn left;
- R = turn right;
- mouse = look;
- E or click = inspect actual semantic artifact;
- Esc = release/close depending state.

Focus authority:
- semantic interaction surface hit;
- interaction distance;
- facing threshold;
- one authority drives highlight + prompt + inspect eligibility.

Inspection:

`FREE → GLIDE_IN → INSPECT → GLIDE_OUT → FREE`

When free control returns:
- exact pose restored;
- yaw/pitch refs derived from restored quaternion;
- velocity zeroed;
- held keys cleared.

## 12. Validation philosophy

Never approve from code alone.

Automated gates:
- dependency install;
- TypeScript;
- production build;
- vertical slice;
- unit/data contracts when added.

Human/browser gates:
- visual quality;
- scroll feel;
- camera comfort;
- focus/raycast behavior;
- lifecycle quality;
- transition quality;
- lighting/materiality;
- exact inspect return;
- spatial legibility;
- overall premium perception.

Method:

`OBSERVE → MEASURE → ISOLATE → UNDERSTAND → FIX ROOT → INTEGRATE WITHOUT DEGRADING → VISUALLY VALIDATE → DOCUMENT → REUSE`

Failure record:

`SYMPTOM → HYPOTHESIS → TEST → ROOT CAUSE → SOLUTION → REGRESSION → VALIDATION → LESSON`

## 13. Reconstruction rule

Do not jump directly to current final code when rebuilding.

Rebuild dependency order:
1. sources + architecture contract;
2. scroll authority + LAB;
3. cinematic landing;
4. museum foundation with two exhibits;
5. validation;
6. six projects + progress/final;
7. cinematic inspect;
8. material/light stone;
9. premium visual consolidation;
10. semantic artifact authority;
11. media lifecycle;
12. first true semantic landmark pilot;
13. validate every stone before propagation.

## 14. Roadmap from current main

```text
5.1 CINEMATIC INSPECT                         ✅ MERGED
5.2 MATERIAL / ATMOSPHERE                     ✅ MERGED
5.2R / 5.2R+ VISUAL RECOVERY + PASS 2         ✅ MERGED
5.3A SEMANTIC ARTIFACTS + DIRECT CLICK         ✅ MERGED
5.3B MEDIA LIFECYCLE                           ✅ MERGED
5.3 SEMANTIC LANDMARK — MAQUETTE PILOT         ⏭ NEXT
5.4 ENTRY RITUAL                               ⏳
5B PROPAGATE APPROVED STONES                   ⏳
LANDING VISUAL UPLIFT                           ⏳
REAL PROJECT MEDIA                              ⏳
PREMIUM MOBILE                                  ⏳
AUTHOR MODE / CMS                               ⏳
INSTITUTIONAL KNOWLEDGE                         ⏳
BACKEND / ANALYTICS / DASHBOARD                 ⏳
FINAL REGRESSION / HARNESS                      ⏳
PRODUCTION                                      ⏳
```

For current status first read:

`docs/18-CURRENT-ROADMAP-AND-BRANCH-STATE.md`

For full historical reconstruction details continue with:

`docs/13-MASTER-REBUILD-FROM-ZERO-PHASES-1-5.md`
