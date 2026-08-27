# 03 — Validation Status

Status: **CURRENT THROUGH PHASE 5.3B**  
Date: **2026-08-27**

For current branch topology and the next operational stone, also read:

`docs/18-CURRENT-ROADMAP-AND-BRANCH-STATE.md`

---

## Verified / approved

### Foundation through Phase 4

- repository asset inventory;
- three sources of truth present;
- Pear public reference audit completed;
- Design DNA created;
- architecture contract frozen;
- first scroll/video slice implemented;
- `/lab` route implemented;
- missing landing video handled explicitly;
- Phase 4 full six-project museum approved and merged;
- 360° keyboard yaw approved;
- six-project visited state and 0/6 progress approved;
- final installation unlock and About / Contact approved.

### Phase 5.1 — Cinematic Inspect

**APPROVED + MERGED**

- `CinematicInspectRig` approved;
- glide-in / inspect / glide-out choreography approved;
- exact return to captured camera pose approved;
- FirstPersonRig yaw/pitch resynchronization approved;
- `ProjectMediaStage` contract approved;
- `/museum/inspect-lab` approved;
- TypeScript + production build passed;
- human browser validation completed.

PR #6.

### Phase 5.2 — Material + Atmosphere Stone

**APPROVED + MERGED**

- premium material/atmosphere stone approved;
- controlled floor reflection;
- wall/structure material hierarchy;
- local exhibit lighting;
- restrained focus response;
- `/museum/material-lab` approved;
- TypeScript + production build passed;
- PR #7 merged.

### Phase 5.2R / 5.2R+ — Visual Recovery + Premium Consolidation

**APPROVED + MERGED**

PASS 2 corrected three visual integration defects at root:
- removed upside-down decorative lamp misuse;
- removed broken modular seating integration;
- removed standing picture frame misuse and enlarged stand/support.

Approved PASS 2 includes:
- RS Track Light 01 authored fixture + spotlight binding;
- clean lounge-chair GLTF seating;
- RS Wall Frame A/B/C;
- RS Pedestal P01/P02/P03;
- Media Wall V2;
- Display / Maquette Table V1;
- Entrance Portal V2;
- Rubik System 02;
- Final Installation V2;
- PBR floor/walls + IBL/HDRI;
- contact grounding and local exhibit lighting.

PR #9 approved head:

`8a90b342ad06c5ad135d9b0fe212d8e5d68cecdc`

Merge commit:

`9d6184add57a154e30b8c3c9451830ac161abe29`

### Phase 5.3A — Semantic Artifacts + Direct Artwork Click

**APPROVED + MERGED**

Validated:
- `InteractiveArtifact` contract;
- explicit world anchors;
- semantic interaction surfaces independent from PIEL geometry;
- center-camera raycast;
- direct pointer click;
- E/click action routed to the real semantic artifact;
- all six projects use Cinematic Inspect;
- exact camera return preserved;
- `/museum/artifact-lab` implemented;
- production build + TypeScript passed;
- exact Vercel preview reached READY;
- human validation approved.

PR #10 approved head:

`c2a75111c37ea93bafef02ad3265b19b239e0e3d`

Merge commit:

`42af1a1476c40eaeda6d350778660aa285331de1`

### Phase 5.3B — Media Lifecycle + Semantic Landmark Behavior

**APPROVED + MERGED**

Validated lifecycle:

```text
DORMANT
→ PRELOAD
→ PREVIEW
→ INSPECT
→ RESET / RELEASE
```

Validated:
- lifecycle policy per artifact;
- resource priming/release contract;
- semantic visual response independent from PIEL geometry;
- state authority wired into `FirstPersonRig`;
- no fake project media invented;
- `/museum/lifecycle-lab` implemented;
- donor behavior grounded in `3D-room-portofolio` media pause/play/close patterns;
- GitHub Actions `Pull request verification` success;
- GitHub Actions `Rubik Sota vertical slice checks` success;
- exact Vercel preview READY;
- human validation approved.

PR #11 approved head:

`f72cae67095383891bc91562ac5b5be1b29d1460`

Current `main` merge commit:

`32d554fca07254010829bfc8d712be86879b20ce`

---

## Current approved baseline

Current operational baseline is:

`main @ 32d554fca07254010829bfc8d712be86879b20ce`

It contains all approved runtime work through Phase 5.3B.

There are currently **no open pull requests**.

Branch audit confirms all retained feature branches are **0 commits ahead of `main`**. Therefore no approved implementation is stranded outside `main`.

See exact branch table:

`docs/18-CURRENT-ROADMAP-AND-BRANCH-STATE.md`

---

## Automated gate

Every implementation phase must pass:

- dependency install;
- TypeScript typecheck;
- Next.js production build;
- vertical-slice checks where applicable.

Automated success is necessary but not sufficient.

Required human/browser validation remains mandatory for:
- camera feel;
- focus quality;
- click targeting;
- lifecycle response;
- materiality;
- lighting;
- choreography;
- exact inspect return;
- spatial legibility;
- overall premium perception.

---

## Next validation target

The next target is **the remaining visual proof of Phase 5.3 Semantic Landmark Stone**, not Phase 5.4 yet.

5.3A and 5.3B prepared the semantic and lifecycle neurons. The next stone must prove that one project can become a truly distinct spatial destination.

Pilot:

`architecture` — **Immersive Architecture Studio**

Target representation:

`MAQUETTE / OBJECT TABLE`

Expected LAB:

`/museum/landmark-lab`

The pilot must prove:
1. it reads as architecture before click;
2. it is no longer another framed rectangle;
3. it does not block circulation;
4. focus/raycast use its real landmark anchor;
5. lifecycle states remain restrained and legible;
6. E/click opens the correct project;
7. Cinematic Inspect frames correctly;
8. exact camera return remains intact;
9. 0/6 → 6/6 remains intact;
10. museum remains one coherent authored world.

Do not propagate to all six projects before human approval.

---

## Protected neurons

Do not rewrite without demonstrated root cause:
- WASD/arrows movement;
- mouse-look;
- Q/R yaw;
- bounds;
- semantic raycast/direct click;
- one focus authority;
- visited/progress;
- 6/6 final unlock;
- `CinematicInspectRig`;
- exact return;
- pointer-lock restore;
- Media Lifecycle state authority;
- mobile fallback.

---

## Still not final

These remain later roadmap work:

- first true Phase 5.3 semantic landmark visual pilot;
- Phase 5.4 Entry Ritual;
- Phase 5B propagation of approved stones;
- production master landing video in `public/media/rubik-sota-master.mp4`;
- real final media/content for six projects;
- landing visual uplift;
- premium mobile museum;
- Author Mode / CMS;
- Wikipedia/Wikidata/Wikimedia institutional knowledge layer;
- backend / analytics / dashboard;
- final regression / harness;
- production freeze.

---

## Blocking landing asset

Canonical expected path:

`public/media/rubik-sota-master.mp4`

Until a real production asset exists in the repository, the current landing proxy remains a development instrument and must not be presented as final footage.
