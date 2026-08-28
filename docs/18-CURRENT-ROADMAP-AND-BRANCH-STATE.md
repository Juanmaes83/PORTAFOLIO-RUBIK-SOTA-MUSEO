# 18 — CURRENT ROADMAP AND BRANCH STATE

Status: **CURRENT OPERATIONAL SOURCE OF TRUTH**  
Date: **2026-08-28**

This document records the current merged baseline, branch topology and the next approved roadmap improvements. It complements the historical reconstruction manual in `docs/13-MASTER-REBUILD-FROM-ZERO-PHASES-1-5.md`.

---

# 1. CURRENT MAIN BASELINE

Current `main` includes the approved **Phase 5.3 Semantic Landmark Pilot** and the subsequent documentation decision that records Audio + Conversational Guide as the next improvements.

Latest implementation merge relevant to runtime:

`5b69d398b50ce6c086f342f5103389ceb8c1dce4`

Commit meaning:

> Merge Phase 5.3 Semantic Landmark Pilot — Architecture Maquette / Object Table.

Latest documentation commit:

`c410e7d33eded1ee519ffb06f717f08dc89fe6f5`

Approved Phase 5 chain now present in `main`:

```text
5.1 CINEMATIC INSPECT
→ 5.2 MATERIAL / ATMOSPHERE STONE
→ 5.2R VISUAL RECOVERY
→ 5.2R+ PREMIUM VISUAL CONSOLIDATION / PASS 2
→ 5.3A SEMANTIC ARTIFACTS + DIRECT ARTWORK CLICK
→ 5.3B MEDIA LIFECYCLE + SEMANTIC LANDMARK BEHAVIOR
→ 5.3 SEMANTIC LANDMARK PILOT — ARCHITECTURE MAQUETTE
```

Phase 5.3 is now a real approved visual stone, not only enabling neurons.

---

# 2. APPROVED MERGES RELEVANT TO CURRENT BASELINE

- Phase 5.1 Cinematic Inspect — PR #6 — merged.
- Phase 5.2 Material + Atmosphere — PR #7 — merged.
- Phase 5.2R+ Premium Visual Consolidation / PASS 2 — PR #9 — merged.
  - approved visual head: `8a90b342ad06c5ad135d9b0fe212d8e5d68cecdc`
  - merge commit: `9d6184add57a154e30b8c3c9451830ac161abe29`
- Phase 5.3A Semantic Artifacts + Direct Artwork Click — PR #10 — merged.
  - approved head: `c2a75111c37ea93bafef02ad3265b19b239e0e3d`
  - merge commit: `42af1a1476c40eaeda6d350778660aa285331de1`
- Phase 5.3B Media Lifecycle + Semantic Landmark Behavior — PR #11 — merged.
  - approved head: `f72cae67095383891bc91562ac5b5be1b29d1460`
  - merge commit: `32d554fca07254010829bfc8d712be86879b20ce`
- Phase 5.3 Semantic Landmark Pilot — PR #13 — merged.
  - approved head before merge: `7fdc58f4b2d8884d96555d9abb76f870c2c5dd2b`
  - merge commit: `5b69d398b50ce6c086f342f5103389ceb8c1dce4`
  - pilot: `architecture` → **MAQUETTE / OBJECT TABLE**

---

# 3. BRANCH TOPOLOGY PRINCIPLE

The operating rule remains:

```text
CURRENT MAIN
→ ONE FEATURE BRANCH
→ LAB / IMPLEMENTATION
→ CI
→ EXACT PREVIEW
→ HUMAN APPROVAL
→ MERGE TO MAIN
→ VERIFY BRANCH IS 0 AHEAD
```

Do not stack several unmerged feature branches unless an explicit dependency requires it.

Historical branches may remain for archaeology/comparison but must not be interpreted as newer truth simply because they remain visible.

`main` + this document + `docs/03-VALIDATION-STATUS.md` define current operational truth.

---

# 4. CURRENT PHASE 5 STATUS

## 5.1 — Cinematic Inspect
**APPROVED + MERGED**

Protected neurons:
- exact pose capture;
- glide-in / inspect / glide-out;
- exact camera return;
- pointer-lock restore;
- yaw/pitch resync.

## 5.2 / 5.2R / 5.2R+ — Material and Premium Visual Consolidation
**APPROVED + MERGED**

Current approved visual baseline includes:
- PBR floor/walls;
- IBL/HDRI;
- premium architecture and ceiling articulation;
- corrected lighting hardware;
- corrected seating integration;
- wall-specific frame family;
- pedestal family;
- media wall / display table;
- entrance portal V2;
- Rubik System 02;
- Final Installation V2;
- contact grounding and local exhibit lighting.

## 5.3A — Semantic Artifacts + Direct Artwork Click
**APPROVED + MERGED**

Adds:
- `InteractiveArtifact` registry;
- explicit world anchors;
- semantic interaction surfaces independent from PIEL geometry;
- center-camera raycast;
- direct pointer click;
- E/click routing to the actual artifact;
- Cinematic Inspect across all six projects.

## 5.3B — Media Lifecycle + Semantic Landmark Behavior
**APPROVED + MERGED**

Adds:

```text
DORMANT
→ PRELOAD
→ PREVIEW
→ INSPECT
→ RESET / RELEASE
```

Adds resource ownership and behavior ready for real media without inventing missing sources.

## 5.3 — Semantic Landmark Pilot
**APPROVED + MERGED**

Pilot:

```text
IMMERSIVE ARCHITECTURE STUDIO
→ MAQUETTE / OBJECT TABLE
```

Approved proof:
- one project leaves the wall;
- semantic type is explicit rather than index-derived;
- spatial anchor is independent from wall side;
- interaction surface can be horizontal;
- existing focus/raycast authority is reused;
- existing lifecycle authority is reused;
- Cinematic Inspect supports an optional landmark-specific pose;
- Architecture reads as a distinct spatial destination before click;
- the other five projects remain unpropagated until a later explicit decision.

---

# 5. NEXT APPROVED PRODUCT IMPROVEMENTS

Two new improvements are now approved **as roadmap items only**. They are not implemented yet.

Full architecture and gates are frozen in:

`docs/20-NEXT-IMPROVEMENTS-AUDIO-AND-CONVERSATIONAL-GUIDE.md`

## 5.3D — Museum Audio System
**APPROVED AS NEXT IMPROVEMENT / NOT IMPLEMENTED**

Goal:

Create one central audio authority supporting mutually exclusive user modes:

```text
SILENCE
or
AUDIOGUIDE
or
MUSIC
or
RADIO
```

Core principles:
- only one active user mode at a time;
- `MuseumAudioController` owns museum audio;
- guide/project voice ducks background audio;
- Cinematic Inspect media may temporarily take priority;
- no scattered uncontrolled `<audio>` elements;
- explicit silence/mute always available;
- first validation route: `/museum/audio-lab`.

## 5.3E — Conversational Museum Guide Pilot
**APPROVED AS NEXT IMPROVEMENT / NOT IMPLEMENTED**

Goal:

Add a contextual museum guide/avatar that can answer questions based on real museum state instead of behaving like a generic chatbot.

Minimum context:
- focused artifact;
- current project/landmark;
- visitor position;
- visited projects;
- progress;
- inspect state;
- approved project/museum knowledge.

First pilot principles:
- fixed or semi-fixed avatar;
- text questions first;
- contextual answers;
- voice output through `MuseumAudioController`;
- restrained premium avatar presentation;
- no autonomous walking NPC in the first stone;
- first validation route: `/museum/guide-lab`.

Future expansions such as voice input, museum commands, destination guidance and autonomous locomotion remain deferred until the pilot proves value.

---

# 6. IMPORTANT DEPENDENCY BETWEEN AUDIO AND GUIDE

The guide must not create a parallel sound system.

Required architecture:

```text
MuseumGuideController
        ↓ speech request
MuseumAudioController
        ↓
duck ambient
play guide voice
restore ambient
```

Therefore the recommended execution order is:

```text
FIRST  → MUSEUM AUDIO SYSTEM
SECOND → CONVERSATIONAL MUSEUM GUIDE PILOT
```

---

# 7. ROADMAP FROM CURRENT MAIN

```text
5.1 CINEMATIC INSPECT                         ✅ MERGED
5.2 MATERIAL / ATMOSPHERE                     ✅ MERGED
5.2R / 5.2R+ VISUAL RECOVERY + PASS 2         ✅ MERGED
5.3A SEMANTIC ARTIFACTS + DIRECT CLICK         ✅ MERGED
5.3B MEDIA LIFECYCLE                           ✅ MERGED
5.3 SEMANTIC LANDMARK — MAQUETTE PILOT         ✅ MERGED

5.3D MUSEUM AUDIO SYSTEM                       ⏭ APPROVED NEXT / NOT IMPLEMENTED
5.3E CONVERSATIONAL MUSEUM GUIDE PILOT         ⏭ APPROVED NEXT / NOT IMPLEMENTED

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

Important: adding 5.3D and 5.3E to the roadmap does not automatically authorize their runtime implementation. Each must receive an explicit implementation-plan approval before code changes.

---

# 8. CURRENT DECISION FREEZE

As of 2026-08-28:

```text
SEMANTIC LANDMARK PILOT            APPROVED + MERGED
MUSEUM AUDIO SYSTEM                APPROVED AS NEXT IMPROVEMENT / NOT IMPLEMENTED
CONVERSATIONAL MUSEUM GUIDE        APPROVED AS NEXT IMPROVEMENT / NOT IMPLEMENTED
FULL AUTONOMOUS WALKING GUIDE      DEFERRED
```

Do not interpret future audio/guide documentation as evidence that runtime work already exists.
