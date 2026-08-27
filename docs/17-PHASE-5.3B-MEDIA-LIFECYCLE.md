# PHASE 5.3B — MEDIA LIFECYCLE + SEMANTIC LANDMARK BEHAVIOR

Status: IMPLEMENTED CANDIDATE — DO NOT MERGE BEFORE CI + EXACT PREVIEW + HUMAN VALIDATION.

## Mission
Build on approved 5.3A semantic artifacts so museum objects are not only clickable but stateful and resource-aware.

Approved state model:

```text
FAR
→ dormant

NEAR
→ preload

FOCUS
→ preview / semantic response

INSPECT
→ full presentation authority

LEAVE
→ pause / reset / release
```

## Donor basis — 3D-room-portofolio
Reviewed donor files:
- `script/index.js`
- `script/dom.js`

Reusable behavior recovered:
- activate only the media relevant to the current interaction;
- pause previous media when state changes;
- pause media on close;
- avoid unnecessary render/media work when content is inactive.

Not copied:
- old carousel UI;
- modal styling;
- legacy DOM architecture;
- bedroom visual identity.

Rubik Sota reimplements the behavior as a semantic artifact lifecycle state machine.

## Runtime architecture

```text
InteractiveArtifact
    ↓
lifecycle policy
    ↓
camera distance + semantic focus + inspect state
    ↓
MediaLifecycleController
    ├ dormant
    ├ preload
    ├ preview
    └ inspect
    ↓
resource preparation / release
    +
semantic landmark visual response
```

## New files
- `lib/mediaLifecycle.ts`
- `components/museum/SemanticLifecycleLayer.tsx`
- `app/museum/lifecycle-lab/page.tsx`

## Updated files
- `lib/artifacts.ts`
- `components/museum/FirstPersonRig.tsx`

## Lifecycle policy
Each `InteractiveArtifact` now defines:
- `preloadDistance`;
- `unloadDistance`;
- `previewOnFocus`;
- `resetOnLeave`;
- `mediaPreload` policy.

This keeps lifecycle behavior data-driven instead of hard-coded per visual mesh.

## Resource policy
If `heroMedia.src` exists:
- image resources can be primed before inspect;
- video resources load metadata before inspect;
- primed video is paused and src released when the artifact leaves its unload radius;
- inspect remains owned by the existing `ProjectMediaStage`.

Current six project `heroMedia` slots do not contain real `src` values. Therefore 5.3B MUST NOT invent fake project media merely to demonstrate playback.

The lifecycle is fully wired and resource-ready; current validation focuses on state authority and semantic response.

## Semantic landmark behavior
A separate PIEL-independent layer gives restrained physical feedback:
- `dormant`: no response;
- `preload`: very low-energy rail/backlight;
- `preview`: controlled light response + subtle breathing;
- `inspect`: strongest local state before/while Cinematic Inspect owns the presentation.

No neon outline, game HUD or arbitrary particles are introduced.

## Protected neurons
Unchanged:
- WASD / arrows;
- mouse look;
- Q/R yaw;
- bounds;
- semantic raycast from 5.3A;
- direct click;
- E action;
- visited/progress;
- 6/6 final unlock;
- CinematicInspectRig;
- exact camera return;
- mobile fallback.

## Explicitly deferred
Still NOT part of this phase:
- real project media ingestion;
- Semantic Landmark Diversity / different physical project types;
- Wikipedia / Wikidata / Wikimedia;
- Collection Registry;
- CMS;
- Hyacinth expansion;
- analytics/backend;
- multi-room navigation.

## Human validation
Use `/museum/lifecycle-lab` and verify:
1. far objects remain dormant;
2. approaching an object produces only a subtle preload response;
3. crosshair focus produces a clearly stronger but premium preview response;
4. click/E still enters the correct Cinematic Inspect;
5. return from inspect restores exact camera/control state;
6. leaving the object resets the semantic response;
7. no unrelated artifact activates;
8. 0/6 → 6/6 still works.

## Gate
No merge until:
- TypeScript passes;
- production build passes;
- exact branch preview is READY;
- `/museum` and `/museum/lifecycle-lab` are reachable;
- human validation approves behavior.
