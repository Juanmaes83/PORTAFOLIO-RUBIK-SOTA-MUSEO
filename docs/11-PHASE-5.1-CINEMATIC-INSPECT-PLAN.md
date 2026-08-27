# PHASE 5.1 — CINEMATIC INSPECT STONE

Status: **PLAN — awaiting user approval before implementation**

Repository: `Juanmaes83/PORTAFOLIO-RUBIK-SOTA-MUSEO`

Primary donor: `Juanmaes83/galerium`

Supporting archaeology only:
- `Juanmaes83/3D-room-portofolio`
- `Juanmaes83/hyacinth.im-site`

This phase does **not** execute the full Visual + Navigation Uplift. It isolates one high-value capability and proves it on one project before it is allowed to propagate to the full museum.

---

# 0. WHY PHASE 5.1 EXISTS

The current museum is functionally approved: movement, mouse-look, 360° keyboard yaw, focus, E/click, six projects, visited state, 0/6 progress, final installation and panel restoration all work.

The main weakness is now perceived quality.

Current inspection choreography is approximately:

```text
FOCUS
→ E / CLICK
→ PROJECT PANEL
→ CLOSE
→ RETURN TO MOVEMENT
```

This works, but it still reads as a conventional web modal placed on top of a 3D scene.

Phase 5.1 must transform inspection into a spatial event:

```text
APPROACH
→ FOCUS RESPONSE
→ E / CLICK
→ CONTROL LOCK
→ CINEMATIC CAMERA GLIDE
→ HERO VIEW OF PROJECT
→ PROJECT MEDIA STAGE
→ CLOSE
→ CAMERA RETURNS TO EXACT PRE-INSPECT POSE
→ POINTER / KEYBOARD CONTROL RESTORED
→ CONTINUE VISIT
```

The goal is not more features. The goal is a visible jump from `functional 3D demo` to `premium authored museum interaction`.

---

# 1. PRIMARY DONOR — GALERIUM

The direct donor capability is `CameraRig.tsx` from `Juanmaes83/galerium`.

Relevant behavior:

1. find inspected artwork placement;
2. obtain artwork center;
3. obtain its wall normal;
4. derive an ideal inspection distance from artwork dimensions;
5. calculate destination camera position;
6. derive destination quaternion with a `lookAt` matrix;
7. interpolate camera position and quaternion;
8. finish the glide without replacing the normal navigation engine.

We will reproduce this **behavioral contract**, not copy the Galerium component literally.

Reasons:

- our stack is newer (`React 19 / R3F 9 / Three 0.185`);
- our camera state is currently owned by `FirstPersonRig`;
- our navigation/focus/progress engine is already approved and must not be replaced;
- the new stone must be compatible with future semantic landmarks, video screens and institutional museum content, not only flat paintings.

---

# 2. PHASE 5.1 SCOPE

## IN SCOPE

Exactly **one project** will become the proof object.

It will demonstrate:

- existing focus detection;
- existing E/click entry;
- capture of current camera pose before inspection;
- movement/pointer-lock release;
- cinematic camera glide to project;
- stable hero framing;
- media-first project inspection stage;
- support for text + image + video at the data-contract level;
- close action;
- reverse camera glide;
- exact/near-exact restore of previous camera pose;
- pointer-lock/control restoration;
- return to current museum without resetting progress or position;
- LAB diagnostics for the camera choreography.

## OUT OF SCOPE

Do NOT implement yet:

- all six projects with the new system;
- semantic landmarks;
- new museum materials across the complete gallery;
- final Landing → Museum ritual;
- Wikipedia/Wikimedia institutional enrichment;
- CMS / Escaparates Pro;
- uploads;
- database;
- analytics;
- backend;
- mobile museum redesign;
- generated final artwork/media;
- Higgsfield spend unless explicitly required after the interaction stone proves itself.

---

# 3. PROTECTED BASELINE — REGRESSIONS FORBIDDEN

The following current capabilities are frozen and must keep working:

- `/museum`;
- `/museum/lab`;
- WASD / arrows;
- Q/R continuous keyboard yaw;
- mouse-look;
- gallery bounds;
- current focus engine;
- E/click inspection entry;
- six projects;
- visited state;
- progress `0/6`;
- final installation unlock at `6/6`;
- About / Contact;
- existing LAB tuning;
- landing route and portal;
- desktop performance baseline.

Rule:

> Phase 5.1 extends inspection. It does not rewrite locomotion, focus, progress or project registry.

---

# 4. TARGET ARCHITECTURE

The current `FirstPersonRig` owns free-navigation camera state. Phase 5.1 must introduce an explicit camera state machine rather than allow two systems to fight over the same camera.

## Proposed state machine

```text
FREE
│
├─ focus only → FREE
│
└─ inspect request
   ↓
CAPTURE
   ↓
GLIDE_IN
   ↓
INSPECT
   ↓
GLIDE_OUT
   ↓
RESTORE
   ↓
FREE
```

### `FREE`
Current approved locomotion owns the camera.

### `CAPTURE`
Store:

```ts
CameraPose {
  position: Vector3
  quaternion: Quaternion
  yaw: number
  pitch: number
}
```

This is the exact return target.

### `GLIDE_IN`
Locomotion is disabled.

Camera interpolates from captured pose to target inspect pose.

### `INSPECT`
Camera remains static/controlled by inspect system.

Media stage becomes active.

### `GLIDE_OUT`
Media stage closes first or transitions out in sync.

Camera interpolates from inspect pose back to captured pose.

### `RESTORE`
Synchronize `FirstPersonRig` internal yaw/pitch refs with restored quaternion before returning authority.

### `FREE`
Locomotion resumes.

This synchronization step is mandatory. Without it, the restored camera can visually jump the next time mouse/keyboard look updates.

---

# 5. STONE A — `CinematicInspectRig`

Create a reusable subsystem that receives an inspect target and owns camera choreography only while inspection is active.

Proposed contract:

```ts
InspectTarget {
  id: string
  center: [number, number, number]
  normal: [number, number, number]
  width?: number
  height?: number
  preferredDistance?: number
  preferredOffset?: [number, number, number]
}
```

Possible component API:

```tsx
<CinematicInspectRig
  target={activeInspectTarget}
  state={inspectState}
  onGlideInComplete={...}
  onGlideOutComplete={...}
  onPoseRestored={...}
/>
```

## Target-position formula

Default:

```text
sizeReference = max(width, height)
distance = clamp(sizeReference * factor + padding, min, max)
toPosition = center + normal * distance + optionalOffset
```

Destination orientation:

```text
lookAt(toPosition, center)
→ Matrix4
→ Quaternion
```

## Motion

Initial target:

- duration: approximately 750–950 ms;
- easing: premium non-linear curve (`easeInOutCubic` or equivalent);
- position: Vector3 interpolation;
- orientation: quaternion slerp;
- no artificial camera roll;
- no instant FOV snap.

All motion constants must live in tuning/config rather than magic numbers inside render code.

---

# 6. STONE B — `ProjectMediaStage`

Phase 5.1 must NOT build a final CMS, but its UI contract must already accept the media forms that future CMS/author mode will provide.

## Data model extension

The proof project's model should support:

```ts
ProjectMedia =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster?: string; mutedPreview?: boolean }

MuseumProject {
  ...existing fields
  heroMedia?: ProjectMedia
  gallery?: ProjectMedia[]
  longDescription?: string
}
```

Phase 5.1 only needs one example project populated enough to prove the contract.

No external asset generation is required for approval of the interaction stone; a controlled local/procedural/test asset is acceptable if the repo still lacks final project media.

## UI behavior

The media stage should be visually subordinate to the 3D approach, not feel like an unrelated full-page application.

Desktop target composition:

```text
[ MEDIA / PROJECT HERO ] [ EDITORIAL INFORMATION ]
```

Minimum content:

- category / year;
- project title;
- concise description;
- role;
- technology;
- media area;
- close control;
- optional `VIEW PROJECT` placeholder action if final destination is not connected.

## Image behavior

For Phase 5.1:

- responsive contain/cover decision based on project format;
- no full Galerium pan/zoom requirement yet unless it is trivial and does not delay the stone;
- architecture must not block future zoom/pan.

## Video behavior

- do not autoplay audio;
- `playsInline`;
- poster/metadata strategy;
- only active inspect video plays;
- pause on close;
- do not keep hidden video decoding unnecessarily.

---

# 7. CONTROL OWNERSHIP — CRITICAL CONTRACT

This is the highest-risk seam.

Today `FirstPersonRig` stores:

- `yawRef`;
- `pitchRef`;
- movement keys;
- velocity;
- camera rotation;
- focus logic.

If `CinematicInspectRig` moves the camera while `FirstPersonRig` still writes camera transform, jitter/fighting will occur.

## Required solution

Introduce a single explicit control authority state:

```ts
cameraMode: "free" | "transition" | "inspect"
```

`FirstPersonRig`:

- updates movement/focus normally only in `free`;
- does not update transform in `transition` or `inspect`;
- can expose/import a pose synchronization callback when control returns.

`CinematicInspectRig`:

- owns transform only in `transition` / `inspect`;
- never computes free movement;
- returns exact pose ownership to `FirstPersonRig` after synchronization.

No second permanent camera controller.

---

# 8. POINTER LOCK / INPUT CHOREOGRAPHY

Expected desktop sequence:

```text
FREE WALK
pointer lock = ON

E / click inspect
↓
pointer lock exit
movement keys cleared
velocity zeroed / damped to zero
↓
GLIDE IN
↓
INSPECT
cursor available
↓
CLOSE / ESC
↓
GLIDE OUT
↓
pose restored
↓
request pointer lock
↓
FREE WALK
```

Important:

- pressing `Esc` while inspecting closes the stage, not the browser flow unexpectedly;
- repeated E/click during transition must be ignored;
- keyboard movement during transition must not accumulate and fire after return;
- close must be idempotent;
- pointer-lock denial must not leave the museum broken; show the existing resume hint/fallback behavior.

---

# 9. INSPECT TARGET REGISTRY PREPARATION

Do not build full Hyacinth-style semantic target registry yet.

However, Phase 5.1 must avoid hardcoding `left wall project #1` into the cinematic camera.

Introduce a minimal inspect geometry contract derived from current project data:

```ts
getProjectInspectTarget(project): InspectTarget
```

Current project side/z values are enough to derive:

- center;
- wall-facing normal;
- approximate width/height.

This ensures Phase 5.3 can later replace a framed project with a screen, terminal or maquette without rewriting the camera stone.

---

# 10. LAB — `/museum/inspect-lab`

Create a dedicated LAB route or mode for Phase 5.1.

It must isolate camera choreography from the six-project experience.

## LAB requirements

Show one proof project and expose:

- transition duration;
- inspect distance;
- vertical offset;
- optional horizontal offset;
- easing preset/identifier;
- media-stage delay relative to glide;
- return delay if any;
- current camera mode;
- captured position;
- target position;
- transition progress;
- pointer-lock state.

Useful test buttons:

- `ENTER INSPECT`;
- `EXIT INSPECT`;
- `RESET CAMERA`;
- `RESTORE DEFAULT TUNING`.

Do not clutter the production `/museum` with these diagnostics.

---

# 11. VISUAL CHOREOGRAPHY

The camera movement alone is not enough. The interface should participate subtly.

Proposed timing:

```text
0 ms      E / CLICK
0–100     focus prompt fades / controls release
0–850     camera glide
450–850   project title/media stage begins to appear
850       stable inspect frame

CLOSE
0–180     media stage fades/recedes
100–950   camera returns
950       free controls restored
```

Exact timing is LAB-tunable.

Principles:

- no hard white flash;
- no giant scale animation;
- no cheap zoom effect;
- no motion blur dependency;
- camera movement must feel deliberate, weighted and calm;
- content should not cover the project before the camera has established it;
- reduced-motion behavior must avoid long spatial travel.

---

# 12. REDUCED MOTION

For `prefers-reduced-motion: reduce`:

```text
inspect request
→ very short positional settle or direct pose change
→ media stage
→ close
→ direct/short restore
```

Do not remove functionality.

---

# 13. PERFORMANCE CONTRACT

Phase 5.1 must not materially worsen the current baseline.

Rules:

- do not add a second Canvas;
- do not add heavy post-processing;
- do not load six videos;
- only active media is allowed to play/decode aggressively;
- static inspect state may later switch to demand rendering, but that optimization is optional in 5.1 unless cleanly implementable;
- no new physics engine;
- no network call in render loop;
- camera interpolation stays inside `useFrame` with refs, not React state per frame.

---

# 14. EXPECTED FILE PLAN

Exact filenames may adjust after implementation review, but expected structure is:

```text
components/museum/
  CinematicInspectRig.tsx        NEW
  ProjectMediaStage.tsx          NEW
  MuseumExperience.tsx           MODIFY
  FirstPersonRig.tsx             MINIMAL MODIFY
  MuseumScene.tsx                MINIMAL MODIFY if target geometry metadata needed

lib/
  museum.ts                      EXTEND media/inspect contracts
  inspect.ts                     NEW pure target/camera helpers (preferred)

app/museum/inspect-lab/
  page.tsx                       NEW

docs/
  12-PHASE-5.1-VALIDATION.md     NEW during execution
```

Optional CSS remains in existing museum styles unless isolation is cleaner.

---

# 15. IMPLEMENTATION ORDER

## STEP 1 — Freeze current camera contract

Document current `FirstPersonRig` responsibilities and identify exact places writing camera transform.

No code redesign yet.

## STEP 2 — Pure camera math

Implement and test helpers:

- derive project center/normal;
- derive inspect distance;
- derive destination quaternion;
- capture/clone pose;
- interpolate pose.

## STEP 3 — `/museum/inspect-lab`

Build one-project LAB before modifying production museum behavior.

Gate:

> camera enters and returns repeatedly without drift or jump.

## STEP 4 — Control authority seam

Add `cameraMode` / equivalent and prevent camera ownership conflicts.

Gate:

> no jitter, no input accumulation, no rotation snap after restore.

## STEP 5 — ProjectMediaStage

Add media/text stage for one proof project.

Gate:

> project feels like a designed inspection experience, not a generic modal.

## STEP 6 — Integrate one production project

Only one of the six uses Phase 5.1 system.

The other five remain current baseline.

This is deliberate A/B comparison inside the real museum.

## STEP 7 — Regression pass

Validate all protected baseline controls and `0/6` behavior.

## STEP 8 — CI / preview / visual approval

- typecheck;
- production build;
- GitHub PR;
- exact Vercel preview;
- `/museum`;
- `/museum/inspect-lab`;
- user manual validation.

Do not merge until visually approved.

---

# 16. ACCEPTANCE GATES

Phase 5.1 is approved only if ALL are true.

## Functional

- [ ] existing focus still selects the proof project correctly;
- [ ] E opens cinematic inspection;
- [ ] click opens cinematic inspection;
- [ ] player cannot move during transition/inspect;
- [ ] camera reaches repeatable hero framing;
- [ ] image/text media stage renders correctly;
- [ ] video contract is supported and pauses on close;
- [ ] close begins return choreography;
- [ ] camera returns to pre-inspect position;
- [ ] camera returns to pre-inspect orientation;
- [ ] no yaw/pitch snap on first mouse movement after return;
- [ ] WASD resumes in the restored facing direction;
- [ ] Q/R resumes without discontinuity;
- [ ] pointer lock/control can be restored;
- [ ] inspected project still counts as visited once;
- [ ] `0/6` logic is unchanged;
- [ ] final installation logic is unchanged.

## Visual

- [ ] transition feels intentional rather than automatic zoom;
- [ ] project becomes visual protagonist before content dominates;
- [ ] media stage feels connected to museum, not pasted over it;
- [ ] close/return feels as polished as entry;
- [ ] no obvious camera clipping through wall/frame;
- [ ] no large visual jump between free and cinematic cameras;
- [ ] no cheap/game-like animation.

## Technical

- [ ] no permanent second camera authority;
- [ ] no per-frame React state loop;
- [ ] no new physics dependency;
- [ ] TypeScript passes;
- [ ] production build passes;
- [ ] existing `/museum/lab` still works;
- [ ] `/museum/inspect-lab` works;
- [ ] Vercel preview works.

---

# 17. FAILURE CONDITIONS / ROOT-FIX RULE

Do not paper over these failures:

### Camera jumps after close
Likely cause: internal yaw/pitch refs not synchronized with restored quaternion.

Root fix: synchronize controller state before re-enabling `FREE`.

### Camera jitters during glide
Likely cause: `FirstPersonRig` and inspect rig both writing transform.

Root fix: explicit camera ownership mode.

### Player moves after inspection unexpectedly
Likely cause: stale keys or velocity retained during pause.

Root fix: clear keys and zero velocity on capture/transition entry.

### Pointer lock cannot resume
Do not force fake state.

Root fix: separate restored camera pose from pointer-lock permission and preserve click-to-resume fallback.

### Media loads but frame rate collapses
Root fix: enforce active-only media lifecycle before adding more visual effects.

---

# 18. WOW TARGET

The test is not merely `does the camera move?`.

A visitor should perceive:

> "I selected a work and the museum itself brought me closer to it."

Not:

> "A modal opened with a camera animation."

Target perceived uplift from current inspection: **9+/10**.

If the movement feels merely decorative, Phase 5.1 is not approved even if technically correct.

---

# 19. WHY ONLY ONE PROJECT

Implementing this directly across all six would hide design mistakes and increase regression surface.

One-project proof gives us:

- direct A/B comparison with the five current projects;
- easy tuning;
- cheap rollback;
- clear visual validation;
- reusable stone only after approval.

Rule:

```text
ONE PROJECT
→ PROVE
→ VALIDATE
→ FREEZE STONE
→ THEN MULTIPLY
```

---

# 20. AFTER PHASE 5.1

Only after approval:

### Phase 5.2 — Museum Material Stone
One wall / one floor / one ceiling / one project / one lighting language.

### Phase 5.3 — Semantic Landmark Stone
Replace one generic framed work with one authored spatial destination.

### Phase 5.4 — Museum Entry Ritual
Transform route change into an authored landing→museum arrival.

Then:

### Phase 5B — full propagation
Apply approved stones to the complete six-project museum and feed the resulting visual DNA back into the landing.

Institutional Wikipedia/Wikimedia knowledge, CMS/admin, analytics and backend remain protected future layers and are not pulled forward into Phase 5.1.

---

# APPROVAL REQUEST

If this plan is approved, implementation will begin on a new branch from current `main`, with Phase 5.1 isolated as a Draft PR and no merge until browser/visual validation is approved by the user.
