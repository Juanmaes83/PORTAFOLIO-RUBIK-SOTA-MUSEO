# 18 — CURRENT ROADMAP AND BRANCH STATE

Status: **CURRENT OPERATIONAL SOURCE OF TRUTH**  
Date: **2026-08-27**

This document records the current merged baseline, branch topology and the next Phase 5 stone. It complements the historical reconstruction manual in `docs/13-MASTER-REBUILD-FROM-ZERO-PHASES-1-5.md`.

---

# 1. CURRENT MAIN BASELINE

Current `main`:

`32d554fca07254010829bfc8d712be86879b20ce`

Commit meaning:

> Merge Phase 5.3B media lifecycle and semantic landmark behavior.

There are currently **no open pull requests**.

Approved Phase 5 chain now present in `main`:

```text
5.1 CINEMATIC INSPECT
→ 5.2 MATERIAL / ATMOSPHERE STONE
→ 5.2R VISUAL RECOVERY
→ 5.2R+ PREMIUM VISUAL CONSOLIDATION / PASS 2
→ 5.3A SEMANTIC ARTIFACTS + DIRECT ARTWORK CLICK
→ 5.3B MEDIA LIFECYCLE + SEMANTIC LANDMARK BEHAVIOR
```

Important: 5.3A and 5.3B are enabling neurons inside the broader **Phase 5.3 Semantic Landmark Stone**. The Phase 5.3 visual landmark pilot is not yet complete.

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
  - merge commit / current main: `32d554fca07254010829bfc8d712be86879b20ce`

---

# 3. BRANCH TOPOLOGY AUDIT

Audit against current `main` on 2026-08-27:

| Branch | Ahead of main | Behind main | Meaning |
|---|---:|---:|---|
| `feat/full-museum-phase4` | 0 | 68 | historical, fully absorbed |
| `feat/landing-cinematic-v2` | 0 | 90 | historical, fully absorbed |
| `feat/museum-foundation-v1` | 0 | 76 | historical, fully absorbed |
| `feat/pear-scroll-museum-v1` | 0 | 98 | historical, fully absorbed |
| `feat/phase-5-1-cinematic-inspect` | 0 | 53 | historical, fully absorbed |
| `feat/phase-5-2-material-atmosphere` | 0 | 37 | historical, fully absorbed |
| `feat/phase-5-2r-visual-recovery` | 0 | 22 | historical comparison stone, fully contained by main |
| `feat/phase-5-2r-plus-premium-consolidation` | 0 | 15 | approved PASS 2 branch, fully contained by main |
| `feat/phase-5-3a-semantic-artifacts` | 0 | 10 | approved 5.3A branch, fully contained by main |
| `feat/phase-5-3b-media-lifecycle` | 0 | 1 | approved 5.3B head; one merge commit behind main |

Conclusion:

> **There are no feature branches ahead of `main`. No approved runtime work is stranded outside `main`.**

The repository has several retained historical branches, but they are not divergent active development lines. They may be kept temporarily as archaeology/comparison references or deleted later as branch hygiene. Do not merge them again.

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

---

# 5. NEXT OFFICIAL STONE

The next work is **not Phase 5.4 yet**.

The canonical roadmap defines Phase 5.3 as:

> Replace one generic framed-project treatment with one distinct spatial destination. Do one landmark first.

5.3A and 5.3B prepared the neurons; the missing proof is the **first true spatial landmark**.

## Pilot selected

`architecture` — **Immersive Architecture Studio**

Current generic representation:

```text
PROJECT
→ WALL TREATMENT / FRAME
```

Target semantic landmark:

```text
IMMERSIVE ARCHITECTURE STUDIO
→ MAQUETTE / OBJECT TABLE
```

Why this pilot:
- category is `3D Website`;
- technologies include React Three Fiber / Three.js;
- architectural content is semantically legible as a physical maquette;
- it proves that a project can leave the wall without changing navigation architecture.

## Planned stone

Expected route:

`/museum/landmark-lab`

Implementation principles:
- one landmark only;
- explicit semantic type, not index-derived type;
- physical object table / maquette;
- center/semi-center spatial anchor;
- reuse existing `InteractiveArtifact`;
- reuse 5.3B lifecycle;
- reuse existing focus authority;
- reuse `CinematicInspectRig`;
- project-specific inspect pose only where required;
- no CMS;
- no Wikipedia/Wikidata/Wikimedia;
- no new room;
- no gamification;
- no propagation to all six before human validation.

Acceptance:
1. reads as architecture before click;
2. is not another framed rectangle;
3. does not block circulation;
4. focus/raycast use the true landmark anchor;
5. lifecycle states are visible but restrained;
6. E/click opens the correct project;
7. Cinematic Inspect frames correctly;
8. exact return remains intact;
9. progress 0/6 → 6/6 remains intact;
10. museum remains one coherent authored world.

---

# 6. ROADMAP FROM CURRENT MAIN

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

---

# 7. BRANCH HYGIENE RULE FROM NOW ON

For every new capability:

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

Historical branches must never be treated as newer truth simply because their names remain visible.

`main` + this document + `docs/03-VALIDATION-STATUS.md` define current operational truth.
