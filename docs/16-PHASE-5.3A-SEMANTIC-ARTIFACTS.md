# PHASE 5.3A — SEMANTIC ARTIFACT + DIRECT ARTWORK CLICK

Status: IMPLEMENTED CANDIDATE — DO NOT MERGE BEFORE HUMAN VALIDATION.

## Scope
This stone intentionally implements only two approved Legacy capabilities:
1. artworks become real semantic objects;
2. click / E on the actual semantic artwork routes to Cinematic Inspect.

Deferred and explicitly NOT part of 5.3A:
- Wikipedia / Wikidata / Wikimedia;
- Collection Registry / artist selector;
- CMS;
- Media Lifecycle Controller;
- Hyacinth target registry expansion;
- analytics/backend;
- multi-room navigation.

## Architecture

```text
MuseumProject
    ↓
InteractiveArtifact Registry
    ↓
semantic type + explicit world anchor
    ↓
invisible stable Interaction Surface
    ↓
center crosshair ray / direct pointer ray
    ↓
focus
    ↓
E / click
    ↓
primary action = inspect
    ↓
existing CinematicInspectRig
```

## New semantic contract
`lib/artifacts.ts` defines `InteractiveArtifact` with:
- `id`;
- `projectId`;
- `semanticType`;
- explicit interaction anchor;
- interaction radius;
- facing threshold;
- surface size;
- primary action;
- focusable / inspectable state.

This removes the architectural dependency between interaction and `project.side + project.z`.

## Interaction surfaces
The semantic surfaces live inside `FirstPersonRig` and are visually invisible. They remain stable even if the frame, GLB, media wall or other PIEL geometry changes.

This enforces:

```text
PIEL geometry ≠ interaction authority
```

## Focus
Focus is now driven primarily by a center-camera raycast intersecting a semantic interaction surface plus distance/facing gates.

The final installation retains its existing protected focus logic.

## Click behavior
### Pointer locked
Center crosshair ray identifies the actual semantic artifact. Click or E executes its primary action.

### Pointer released
A pointer ray is created from the click coordinates. If the click hits a semantic artifact, it opens that artifact directly. Clicking empty gallery space continues to request pointer lock.

## Cinematic Inspect
All six projects now expose the existing approved Cinematic Inspect flow. No second modal/camera system was created.

## Validation route
`/museum/artifact-lab`

Validate:
- center ray only focuses the artwork actually under the crosshair;
- moving crosshair away clears focus;
- E opens focused artwork;
- locked click opens focused artwork;
- unlocked direct click on an artwork opens that artwork;
- click on empty gallery enters pointer lock rather than opening a nearby project;
- all six projects glide in/out and restore camera pose correctly;
- visited/progress and 6/6 remain intact.

## Protected neurons
Not rewritten:
- WASD/arrows;
- mouse-look;
- Q/R yaw;
- bounds;
- visited/progress;
- 6/6 final unlock;
- CinematicInspectRig;
- exact camera return;
- pointer-lock restoration;
- mobile fallback.

## Merge gate
Do not merge until:
- TypeScript passes;
- production build passes;
- CI passes;
- exact preview is READY;
- human validation approves both semantic focus and direct artwork click.
