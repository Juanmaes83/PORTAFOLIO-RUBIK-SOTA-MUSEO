# ARCHAEOLOGY — THREE PRIMARY DONORS

Baseline under analysis: `8545af4a881ee5a87fd9901704b6bf3143970f93`

Approved donor scope:

1. `Juanmaes83/3D-room-portofolio`
2. `Juanmaes83/hyacinth.im-site`
3. `Juanmaes83/galerium`

No other visual/navigation repository is part of this archaeology.

---

# 0. EXECUTIVE DECISION

The current Rubik Sota portfolio already has the functional skeleton required for a premium experience: landing, scroll timeline, museum, first-person movement, 360° keyboard yaw, focus, E/click inspection, six projects, visited progress, final installation and project/contact panels.

Its current weakness is not architecture. It is perceived authorship.

The museum is still visually close to `corridor + six framed placeholders + panel`; the landing is still structurally stronger than it is visually cinematic. Therefore the next improvement must not add random features. It must extract a small number of high-value capabilities from the three donors and turn them into isolated, reusable stones.

The three donors solve different parts of the problem:

- **3D Room Portfolio** teaches how a portfolio becomes personal when ordinary objects carry interaction, media, sound and micro-animation.
- **Hyacinth** teaches how a portfolio becomes a memorable authored world through semantic landmarks, different content modalities, proximity interaction and contextual navigation.
- **Galerium** teaches how a digital museum becomes premium through camera choreography, materiality, lighting, entry ritual and close inspection.

The target is NOT a hybrid copy of the three sites.

The target is:

```text
RUBIK SOTA ADN
+ approved movement/focus/progress engine
+ semantic world language from Hyacinth
+ object interaction grammar from 3D Room
+ museography + camera choreography from Galerium
= authored portfolio museum
```

---

# 1. METHOD

Every donor capability was filtered through five questions:

1. Does it clearly improve the current Rubik Sota baseline?
2. Does it preserve the existing ADN and approved movement/focus engine?
3. Can it be isolated as a reusable capability instead of importing an entire foreign architecture?
4. Does it improve either perceived quality, navigation, understanding of the work, or personalization?
5. Is the implementation cost justified by the visible result?

Classification used in this document:

- **INSPIRAR** — preserve the principle, design an original Rubik Sota implementation.
- **COPIAR COMPORTAMIENTO** — reproduce the interaction contract because it is directly useful, but adapt implementation to our stack and visual DNA.
- **CLONAR COMO PIEDRA** — isolate/rebuild a reusable subsystem with a stable interface and integrate it into Rubik Sota without importing the donor application around it.
- **DESCARTAR** — do not carry it into the project.

Important: `copiar` in this document does not mean copying visual identity, content, assets, characters or branding.

---

# 2. OUR CURRENT BASELINE — WHAT MUST NOT BE REBUILT

Current stack:

- Next.js 16.3.3
- React 19.2
- React Three Fiber 9.7
- drei 10.7
- Three.js 0.185

Already approved:

- landing route;
- cinematic scroll state machine;
- museum route;
- WASD/arrows movement;
- mouse look;
- Q/R 360° keyboard yaw;
- focus by distance + facing;
- E/click inspection;
- unique visited state;
- `0/6` progress;
- final installation unlock;
- project panel;
- contact panel;
- LAB tuning.

Do not replace these simply because a donor has a different movement engine.

Current visual limitations identified against the donors:

1. all six project surfaces use essentially the same flat-frame grammar;
2. focus changes lighting, but inspection does not yet create a cinematic camera event;
3. museum architecture is intentionally simple and still lacks authored spatial landmarks;
4. project media is not yet integrated as an environmental experience;
5. the final project view is a conventional side panel rather than a media-first inspection stage;
6. landing-to-museum entry is still more like navigation between routes than an authored arrival ritual;
7. mobile remains a fallback rather than a spatial/touch experience.

These are the gaps the donor stones must attack.

---

# 3. DONOR A — 3D ROOM PORTFOLIO

Repository:
https://github.com/Juanmaes83/3D-room-portofolio

## 3.1 What it actually is

A compact personal portfolio built with vanilla Three.js + Blender. The scene is one authored room. The interaction model is not based on walking around; it uses OrbitControls around the room and attaches interactions to named GLTF objects.

The repository includes:

- one principal GLTF scene;
- video assets for projects;
- audio effects;
- day/night environment handling;
- direct object click/hover interaction;
- animated GLTF objects;
- video texture on the computer screen;
- modal project carousel;
- contact interaction;
- an explicit interaction hint mode;
- render-loop pause when modal content is open.

License: MIT. Direct code reuse is legally possible with the required notice, but most of the code should still be translated rather than copied because its architecture is vanilla Three.js and conflicts with our React/R3F engine.

## 3.2 Strongest archaeological findings

### A. Named object → semantic action

The scene is traversed after GLTF load and objects are stored by name. Interactions are then attached to semantic objects such as:

- `screen-video` → projects;
- `letter` / `letter-box` → contact;
- `lamp` → light;
- `keyboard` → sound;
- `radio` → sound;
- `globe`, `mouse`, `chair`, `drawer`, `book`, `paraglider` → micro-animations.

This is more personal than our current repeated artwork frame because the content is represented by meaningful things.

### B. Environment responds even when no panel opens

Many clicks do not open a modal. They simply animate, toggle light or play sound.

This matters because a premium immersive portfolio needs small moments of discovery that reward curiosity without forcing every interaction into `project panel`.

### C. In-world video surface

The computer screen is a `VideoTexture` with emissive treatment. This is a useful precedent for turning a screen, installation, lightbox or projected surface into live project media.

### D. Media lifecycle

Only the active carousel slide plays. Videos pause when slides change and when the modal closes. The 3D render loop is cancelled while the modal is open and restarted on close.

This is technically simple but perceptually important: rich media does not need to mean uncontrolled GPU/CPU cost.

### E. Interaction discovery

After eight seconds without interaction, the room triggers a hint animation. There is also a manual `?` hint that temporarily recolors interactable objects.

The visual treatment itself is crude, but the principle is strong: immersive navigation needs discoverability.

## 3.3 What we should INSPIRAR

### Object-based autobiographical storytelling

Do not reproduce the bedroom. Instead, ask:

> Which physical or spatial objects represent Rubik Sota's actual practice?

Potential Rubik Sota translations:

- monitor / projection surface → motion or film work;
- model / architectural maquette → spatial/3D project;
- phone-like display → mobile/digital product;
- material sample / printed object → brand system;
- light installation → experimental work;
- desk artifact / notebook → process / making-of.

Why it improves us:

- breaks the repeated `six framed pictures` grammar;
- increases personal authorship;
- helps the visitor understand project category before opening anything;
- creates memorable spatial silhouettes.

Difficulty: **MEDIUM**.

Perceived improvement: **8.5/10**.

Personalization: **9.5/10**.

Decision: **INSPIRAR + build original Rubik Sota objects.**

## 3.4 What we should COPIAR COMPORTAMIENTO

### Microinteraction contract

```text
approach / hover / focus
→ object acknowledges you
→ click / E
→ small physical reaction
→ optional content action
```

Examples in Rubik Sota:

- a monitor wakes before opening a film;
- a maquette light switches on;
- a drawer reveals a project label;
- a projector begins a silent loop;
- a physical object rotates or unfolds subtly.

Why:

Our current focus response is mostly `frame highlight + UI prompt`. A physical acknowledgement creates a much stronger sense that the space is alive.

Difficulty: **MEDIUM**.

Perceived improvement: **8/10**.

Personalization: **9/10**.

Decision: **COPIAR COMPORTAMIENTO, not the donor animation/assets.**

## 3.5 What we should CLONAR COMO PIEDRA

### STONE A1 — `InteractiveArtifact`

A reusable R3F component/contract:

```ts
InteractiveArtifact {
  id
  projectId?
  interactionType
  focusResponse
  primaryAction
  ambientAction?
  media?
}
```

It should support:

- focus/highlight;
- click/E;
- optional animation;
- optional sound;
- optional project opening;
- optional video surface;
- cleanup on close/unmount.

Do NOT transplant `InteractionManager`; our existing focus engine remains authoritative.

Why this is a stone:

It lets future projects have different physical embodiments without rewriting interaction logic each time.

Implementation difficulty: **MEDIUM**.

Risk: **LOW-MEDIUM** if built on top of existing focus state rather than replacing it.

### STONE A2 — `MediaLifecycleController`

Contract:

```text
inactive project → media paused / not decoding when possible
focused preview → lightweight poster / silent teaser only
open project → real media starts
close project → media pauses + releases resource where justified
modal/static inspection → reduce or pause unnecessary 3D work
```

Why:

This enables more ambitious media without destroying performance.

Implementation difficulty: **LOW-MEDIUM**.

Perceived impact: **6/10 directly, 9/10 as an enabler**.

## 3.6 What we should DESCARTAR

- OrbitControls camera model — conflicts with approved first-person navigation.
- entire room GLTF — wrong identity.
- day/night switch — decorative for our current mission.
- novelty sounds on every object — easily becomes game-like.
- red global interaction hint — too crude visually.
- its project carousel UI — inferior to the richer inspection direction available from Galerium/Hyacinth.

---

# 4. DONOR B — HYACINTH.IM-SITE

Repository:
https://github.com/Juanmaes83/hyacinth.im-site

## 4.1 What it actually is

A public deployment artifact for a much richer private React/Vite/TypeScript/R3F source project. The source production workspace is intentionally not exposed in this repository; the repo contains built JS/CSS, optimized media, models and documentation.

This limits literal code extraction, but the compiled bundle still exposes enough architecture to reconstruct the behavioral contracts.

Core experience:

- authored 3D portfolio plaza;
- controllable character;
- semantic landmarks;
- project boards;
- Circus Cinema;
- collaboration shop;
- guide character;
- radio/podcast object;
- making-notes/tutorial object;
- social sculptures;
- autobiographical artifact sculptures;
- contextual interaction hints;
- exploration tracking;
- mobile joystick + interaction button;
- weather variation;
- large video loaded only when a work/cinema modal is opened;
- dynamic scene chunk and deferred heavy runtime loading.

## 4.2 Strongest archaeological findings

### A. One world, many semantic destinations

The crucial innovation is not the cat or circus. It is that each content type has a different physical destination:

- work → poster board;
- film collection → cinema tent;
- contact → shop;
- podcast → radio;
- tutorials → book;
- biography → sculptures;
- social links → physical social sculptures;
- guide → character.

This means the environment itself explains the information architecture.

Our museum currently treats the six projects almost identically. Hyacinth proves that personalization can happen by giving different kinds of content different spatial forms.

### B. Unified target registry

The compiled code builds one target list containing:

- id;
- type;
- label;
- position;
- radius;
- optional work/social/sculpture metadata.

The active target is computed by proximity and the closest eligible target wins.

This registry then drives:

- hints;
- interaction button;
- keyboard E;
- modal type;
- visited/explored state;
- highlighting.

This is architecturally important and compatible with our current project registry/focus engine.

### C. Contextual affordance instead of permanent HUD

Hyacinth shows interaction guidance only when relevant. The copy changes according to target type and mobile/desktop.

This improves polish because the world is not covered by persistent instructions.

### D. Highlight is spatial, not only UI

The active target changes emissive response and can display a ring at its base. The world itself acknowledges focus before the modal appears.

### E. Third-person navigation has inertia and authored camera

The character rotates into movement direction, camera follows with damping, and direction is continuous. This specific control model is NOT compatible with our approved first-person ADN, but its motion quality is a useful benchmark.

### F. Media on demand

The README and compiled runtime both confirm:

- posters/lightweight assets exist in the world;
- videos use `preload="metadata"`;
- video is opened inside work/cinema UI;
- video resources are paused and source can be removed on teardown;
- background music mutes when project video starts;
- large physics is not eagerly preloaded in initial HTML.

This is a strong production pattern for our future image/video-heavy portfolio.

### G. Loading is part of the experience

Instead of a generic spinner, the loading overlay is an authored shader/paper dissolve with copy explaining that the plaza is being prepared. The world appears through the dissolve.

This is directly relevant to our landing→museum transition.

### H. Content modality makes the portfolio personal

A single portfolio contains:

- finished films;
- screenings;
- process/tutorials;
- podcast appearances;
- biography;
- contact;
- socials.

This is more personal than a flat list of case studies.

## 4.3 What we should INSPIRAR

### Semantic landmarks

This is the single strongest personalization lesson of all three donors.

Rubik Sota translation should not literally create a circus tent or shop. Instead, define 3–5 landmark archetypes that belong to Rubik Sota's visual language.

Possible examples:

- **SCREENING WALL / CINEMA INSTALLATION** — film/motion work;
- **OBJECT TABLE / MAQUETTE** — spatial/brand/world projects;
- **DIGITAL TERMINAL** — interactive/web work;
- **PROCESS ARCHIVE** — sketches, making-of, experimentation;
- **FINAL DESK / STUDIO TABLE** — About / Contact.

Why it improves us:

- turns the museum from corridor into authored world;
- each content type becomes immediately legible;
- increases discovery;
- creates screenshots people remember;
- allows future works to be placed by meaning rather than only sequence.

Difficulty: **HIGH**.

Perceived improvement: **10/10**.

Personalization: **10/10**.

Decision: **PRIMARY INSPIRATION OF PHASE 5.**

### Environmental information architecture

Navigation should answer `what is this?` before a panel opens.

Decision: **INSPIRAR strongly.**

## 4.4 What we should COPIAR COMPORTAMIENTO

### Target registry + interaction routing

Desired Rubik Sota contract:

```ts
MuseumTarget {
  id
  type
  projectId?
  position
  focusDistance
  interactionDistance
  label
  visitedGroup?
  action
}
```

One target system should drive:

- proximity/facing;
- world highlight;
- contextual hint;
- E/click;
- project/content route;
- visited state.

Why:

Our current system already has focus by project. Generalizing it to semantic target types is a contained evolution, not a rebuild.

Difficulty: **MEDIUM**.

Perceived improvement: **7.5/10**.

Personalization: **9/10**.

Decision: **COPIAR COMPORTAMIENTO.**

### Context-aware interaction hints

Replace persistent generic HUD after onboarding with target-specific minimal prompts.

Difficulty: **LOW**.

Perceived improvement: **7/10**.

Personalization: **7/10**.

Decision: **COPIAR COMPORTAMIENTO.**

### Media modal orchestration

One project can open a project detail; a cinema landmark can open a curated film selector; another artifact can open process material.

Difficulty: **MEDIUM**.

Perceived improvement: **8.5/10**.

Personalization: **10/10**.

Decision: **COPIAR COMPORTAMIENTO, redesign UI.**

## 4.5 What we should CLONAR COMO PIEDRA

Because the public repo is a compiled deployment artifact rather than the source workspace, these should be **clean reimplementations of the observable contracts**, not copied minified code.

### STONE B1 — `MuseumTargetRegistry`

Generalizes our current project-only focus logic to multiple target archetypes without adding a second interaction authority.

### STONE B2 — `SemanticLandmark`

Reusable landmark shell:

```ts
SemanticLandmark {
  type
  targetId
  transform
  geometry / model
  focusResponse
  idleMotion?
  interactionSurface
}
```

### STONE B3 — `ContextualInteractionPrompt`

Desktop and mobile-aware prompt system with minimal copy.

### STONE B4 — `MuseumEntryDissolve`

A loading/entry transition that:

- begins immediately after leaving the cinematic landing;
- preloads essential museum assets;
- expresses loading as authored motion;
- reveals the museum rather than cutting to it.

This can use our own Rubik Sota visual language; only the behavior contract comes from Hyacinth.

Implementation difficulty: **MEDIUM**.

Perceived improvement: **8.5/10**.

## 4.6 What we should DESCARTAR

- cat/avatar identity;
- third-person character as the default museum controller;
- game-like achievement framing;
- collectibles;
- weather cycling as a feature;
- dialogue NPC as a mandatory navigation layer;
- circus/shop/radio styling itself;
- social network sculptures unless later justified by Rubik Sota identity;
- full Rapier world import solely to imitate Hyacinth.

The lesson is semantic worldbuilding, not gamification.

---

# 5. DONOR C — GALERIUM

Repository:
https://github.com/Juanmaes83/galerium

## 5.1 What it actually is

A React + Three.js art-history museum with a complete, readable source tree.

Relevant stack:

- React 18;
- R3F 8;
- drei 9;
- Three 0.169;
- Zustand;
- Vite.

It is structurally close to our project, but versions differ from our React 19/R3F 9 stack, so components should be ported conceptually and retested rather than copied blindly.

The repository does not expose an obvious permissive license file in the current tree and its package is marked private. Therefore treat code as a reference implementation unless licensing is separately confirmed.

## 5.2 Strongest archaeological findings

### A. Cinematic camera inspection

`CameraRig.tsx` is one of the most valuable pieces in the entire archaeology.

When a painting enters inspect mode:

1. find painting placement;
2. calculate center and wall normal;
3. compute a viewing distance based on painting size;
4. calculate target camera position;
5. calculate target quaternion looking at painting center;
6. animate camera position + rotation with an easing function over ~850ms.

Our current project immediately opens a side panel. Adding a cinematic approach before content appears would create a major perceived-quality jump without changing navigation architecture.

### B. Inspection becomes a dedicated media experience

`InspectOverlay.tsx` does more than show text:

- high-resolution media stage;
- wheel zoom;
- drag pan;
- double-click magnification;
- touch pinch zoom;
- mobile double-tap;
- structured story/facts panel.

For Rubik Sota, the same concept should become a multi-media project stage supporting image AND video rather than an art-only lightbox.

### C. Museography is authored through materials and light

`Room.tsx` includes:

- reflective floor with controlled blur;
- plaster walls;
- ceiling texture and laylight;
- crown/baseboard treatment;
- benches;
- environment map;
- spot lighting;
- individual picture lights;
- warm entrance wash;
- metallic/gilded elements;
- actual 3D signage.

Our current museum uses basic box geometry and flat materials. This donor demonstrates how relatively simple geometry can feel premium through material hierarchy and lighting.

### D. Opening doors make loading meaningful

`DoorsTransition.tsx` holds the visitor while textures load, then opens only after loading and a minimum dwell.

This is an excellent answer to the current hard seam between landing and museum.

### E. Render-loop efficiency during inspection

When an inspection overlay is open, the gallery waits for the camera glide to finish and then changes the R3F frameloop to `demand`.

This complements the media-lifecycle lesson from 3D Room and Hyacinth.

### F. Touch is not an afterthought

Galerium provides:

- joystick movement;
- drag-to-look fallback;
- touch inspect;
- pinch zoom.

This is valuable for a future mobile phase, but it should not distract the current visual/navigation uplift unless desktop stones are already stable.

### G. Stable data-driven room specification

`computeRoom` produces placements from content dimensions and a room tier, including painting normals. The normal is then reused by the camera rig.

We do not need its multi-tier art-history room system, but the pattern `placement owns facing normal + display bounds` is useful for camera choreography.

## 5.3 What we should INSPIRAR

### Museum material hierarchy

Do not copy gold/walnut/plaster literally. Translate the principle into Rubik Sota Design DNA:

```text
one dominant architectural material
+ one floor material
+ one dark structural material
+ one restrained accent metal/material
+ localized light per project
+ environmental light
+ controlled reflections
```

Why:

The current corridor reads as primitive geometry because surfaces have little material hierarchy. Materiality can raise perceived quality without increasing interaction complexity.

Difficulty: **MEDIUM**.

Perceived improvement: **9/10**.

Personalization: **7.5/10** if materials are derived from Rubik Sota rather than copied.

Decision: **PRIMARY VISUAL INSPIRATION.**

### Entrance ritual

Use the concept of `doors / threshold / reveal`, but invent a Rubik Sota mechanism.

Examples:

- architectural panels part;
- a dark aperture reveals the gallery;
- a projection surface dissolves into real geometry;
- light reveals the museum in stages.

Difficulty: **LOW-MEDIUM**.

Perceived improvement: **8.5/10**.

Personalization: **8/10**.

Decision: **INSPIRAR + CLONAR behavior as stone.**

## 5.4 What we should COPIAR COMPORTAMIENTO

### Cinematic inspect camera

This behavior should become mandatory for premium project inspection.

Rubik Sota version:

```text
focus target
→ E/click
→ controls freeze
→ camera glides to curated inspect pose
→ target media gains visual priority
→ project detail UI enters
→ close
→ camera returns to stored pose
→ control resumes
```

Important improvement over Galerium: store and restore the exact pre-inspection camera position/quaternion so the visitor returns seamlessly to exploration.

Difficulty: **MEDIUM**.

Perceived improvement: **9.5/10**.

Personalization: **8.5/10**.

Decision: **HIGHEST-PRIORITY BEHAVIOR COPY.**

### Pause expensive 3D work during media inspection

Difficulty: **LOW**.

Perceived improvement: indirect.

Decision: **COPY PERFORMANCE CONTRACT.**

## 5.5 What we should CLONAR COMO PIEDRA

### STONE C1 — `CinematicInspectRig`

Inputs:

```ts
{
  activeTarget,
  inspectPose,
  duration,
  onArrive,
  onReturn
}
```

Responsibilities:

- snapshot current camera pose;
- calculate or receive target pose;
- ease position/quaternion;
- signal UI when arrival reaches threshold;
- reverse/restore on close;
- coexist with current pointer-lock rig.

This is the most valuable technical stone from Galerium.

### STONE C2 — `ProjectMediaStage`

Rubik Sota adaptation of Galerium's InspectOverlay:

Supports:

- image;
- image gallery;
- video;
- optional zoom/pan for stills;
- metadata/case-study copy;
- responsive split layout;
- media lifecycle hooks.

This later connects naturally to the future CMS that accepts text, image and video.

Difficulty: **MEDIUM-HIGH**.

Perceived improvement: **9/10**.

Personalization: **10/10**, because it becomes the real presentation system for the user's own work.

### STONE C3 — `MuseumMaterialKit`

A reusable visual kit rather than scattered material literals:

- wall;
- floor;
- ceiling;
- accent;
- exhibit frame/surface;
- local project light;
- reflection quality tiers.

Difficulty: **MEDIUM**.

### STONE C4 — `MuseumEntryRitual`

Coordinates loading state + visual transition + control activation.

Difficulty: **LOW-MEDIUM**.

## 5.6 What we should DESCARTAR

- art-history timeline;
- Wikipedia/Wikimedia data layer;
- artist-specific room tiers;
- gilded classical museum identity as a literal style;
- source/facts/copyright UX specific to paintings;
- replacing our progress/final installation logic;
- replacing our current first-person rig wholesale.

---

# 6. CROSS-DONOR STONE MAP

These are the only capabilities recommended for Phase 5 extraction.

| Priority | Stone / Capability | Main donor | WOW | Personalization | Difficulty | Decision |
|---|---|---|---:|---:|---|---|
| 1 | Semantic landmarks / different exhibit archetypes | Hyacinth | 10.0 | 10.0 | HIGH | Build |
| 2 | Cinematic inspect camera + return | Galerium | 9.5 | 8.5 | MEDIUM | Build first |
| 3 | Project Media Stage: image + video + editorial detail | Galerium + Hyacinth | 9.0 | 10.0 | MEDIUM-HIGH | Build |
| 4 | Museum material + lighting hierarchy | Galerium | 9.0 | 7.5 | MEDIUM | Build |
| 5 | Object microinteractions / live artifacts | 3D Room | 8.5 | 9.5 | MEDIUM | Build selectively |
| 6 | Entry/loading ritual landing → museum | Galerium + Hyacinth | 8.5 | 8.0 | LOW-MEDIUM | Build |
| 7 | General target registry + contextual affordances | Hyacinth | 7.5 | 9.0 | MEDIUM | Generalize existing engine |
| 8 | Media lifecycle / pause / deferred video | All three | 6.0 visible / 9.0 enabling | 7.0 | LOW-MEDIUM | Mandatory infrastructure |

---

# 7. ORDER BY PERCEIVED IMPROVEMENT / WOW

## 1 — Semantic landmarks

Biggest visible transformation.

Current:
`hallway + repeated framed exhibits`

Target:
`authored museum with recognisable project destinations`

Why first in WOW ranking:

A visitor can understand the improvement in one screenshot or five seconds of navigation.

## 2 — Cinematic inspect camera

Turns inspection from a UI event into a spatial event.

## 3 — Project Media Stage

Makes the actual work feel premium instead of secondary to the 3D wrapper.

## 4 — Material / lighting art direction

Raises every frame of the museum simultaneously.

## 5 — Object microinteractions

Adds delight and personality in the spaces between project openings.

## 6 — Entry ritual

Makes landing and museum feel like one authored experience rather than two routes.

## 7 — Contextual interaction system

Less spectacular in screenshots, but dramatically improves perceived polish and usability.

## 8 — Media lifecycle

Mostly invisible, but required to support everything above safely.

---

# 8. ORDER BY USER PERSONALIZATION

## 1 — Project Media Stage — 10/10

Directly presents the user's own images, video and text.

## 2 — Semantic landmarks — 10/10

Allows the spatial world to express the kinds of work the user actually makes.

## 3 — Object microinteractions — 9.5/10

Can turn personal tools, motifs or processes into interactive artifacts.

## 4 — Target registry / content modalities — 9/10

Allows future projects, making-of, film, process and other content types to behave differently.

## 5 — Cinematic inspect camera — 8.5/10

Curated inspect poses can be authored per project.

## 6 — Entry ritual — 8/10

Can be branded strongly, but it is less directly tied to individual works.

## 7 — Material kit — 7.5/10

Strong identity layer but shared across the whole collection.

## 8 — Media lifecycle — 7/10

Enables personalization technically but is not itself expressive.

---

# 9. WHAT TO CLONE, WHAT NOT TO CLONE

## Clone/rebuild as stones

- `CinematicInspectRig`
- `ProjectMediaStage`
- `MuseumTargetRegistry`
- `SemanticLandmark`
- `InteractiveArtifact`
- `MuseumEntryRitual`
- `MuseumMaterialKit`
- `MediaLifecycleController`

## Never clone wholesale

- 3D Room's entire `World` / OrbitControls architecture;
- Hyacinth's entire plaza or third-person character engine;
- Galerium's entire gallery application/store/timeline;
- any donor's branding, models, art assets or project content.

Reason:

Wholesale cloning would create competing camera/state/render authorities and would violate the project's rule:

`NEW VERSION = APPROVED BASELINE + NEW CAPABILITY`.

---

# 10. IMPLEMENTATION DIFFICULTY AND RISK

## LOW / LOW-MEDIUM

### MuseumEntryRitual

Contained transition layer. Main risk is making it decorative instead of synchronized with real asset readiness.

### ContextualInteractionPrompt

Mostly UI/state work on existing focus data.

### Media lifecycle improvements

Contained if implemented around selected/focused state.

## MEDIUM

### CinematicInspectRig

Main technical challenge: pointer lock + camera ownership + exact return pose.

Mitigation:

- one camera authority;
- snapshot pose before inspection;
- pause rig during glide;
- restore pose before re-locking;
- test in `/museum/lab`.

### InteractiveArtifact

Challenge: heterogeneous behavior without one-off spaghetti code.

Mitigation: strict artifact registry and small action contracts.

### MuseumMaterialKit

Challenge: GPU cost and over-decoration.

Mitigation: quality tiers, controlled reflections and localized lights.

### MuseumTargetRegistry

Challenge: generalizing without breaking current project focus.

Mitigation: convert existing project registry into a superset rather than adding a parallel engine.

## MEDIUM-HIGH / HIGH

### ProjectMediaStage

Challenge: image/video/gallery responsive layouts, media lifecycle and content variation.

Worth doing because it becomes the permanent presentation surface for real work and later connects directly to the future CMS.

### Semantic landmarks

Hardest and highest-value visual task.

Challenge is not code alone. It requires art direction:

- what destinations exist;
- what each project becomes spatially;
- silhouette;
- lighting;
- material;
- how the visitor understands each landmark without labels everywhere.

This should be designed before building all six landmarks.

---

# 11. PHASE 5 RECOMMENDED EXECUTION ORDER

The next phase should be treated as **VISUAL + NAVIGATION UPLIFT**, not content/CMS/backend.

## 5.1 — Inspection Stone LAB

First integrate one project only:

```text
existing focus
→ E/click
→ camera glide
→ media stage
→ close
→ camera returns exactly
→ control restores
```

Why first:

High WOW, contained risk, and immediately reusable across all project types.

Gate:

- no camera jump;
- no lost pointer lock;
- exact return pose;
- image/video content both supported;
- performance stable.

## 5.2 — Museum Skin / Material LAB

Apply Rubik Sota material hierarchy to one controlled slice:

- floor;
- wall;
- ceiling;
- one exhibit;
- localized light;
- one accent material;
- reflection budget.

Do not redesign all museum geometry before approving this slice.

## 5.3 — Semantic Landmark Prototype

Replace only ONE of the six repeated frames with one authored landmark.

Test:

- can visitor recognise it as different content?
- does it remain portfolio, not game?
- does it preserve navigation?
- does it create a better screenshot / memory?

Only after approval expand the grammar across the other project types.

## 5.4 — Target Registry Generalization

Generalize project-only focus to semantic targets while preserving existing distance + facing logic.

## 5.5 — Microinteraction Layer

Add restrained artifact reactions only where they add meaning.

## 5.6 — Landing → Museum Entry Ritual

Connect the already-built landing to the upgraded museum with a real loading/reveal transition.

## 5.7 — Expand to all six projects

Only after the three main stones are approved:

- cinematic inspect;
- material system;
- landmark grammar.

---

# 12. CMS / AUTHORING PANEL RELATIONSHIP — DEFERRED BUT ARCHITECTURALLY IMPORTANT

The user has already defined that future project authoring must support:

- text;
- image;
- video;
- upload;
- save;
- preview/visualization;
- later placement inside the portfolio/museum.

This phase does NOT build that panel.

However `ProjectMediaStage` and `MuseumTargetRegistry` should be designed so future CMS data can feed them without rewriting the museum.

Future data shape should be able to express:

```ts
Project {
  id
  title
  description
  category
  year
  role
  technologies
  coverImage?
  images[]
  video?
  mediaType
  exhibitType
  exhibitPlacement
  inspectConfig
  status
}
```

This is the bridge between the visual uplift and the later Escaparates Pro panel integration.

---

# 13. EXPLICIT REJECT LIST

These were examined and must NOT enter the current project merely because they exist in the donors:

### From 3D Room

- orbit-only camera;
- literal bedroom;
- day/night toggle;
- novelty sound toy behavior;
- generic carousel UI;
- red interaction-flash hint.

### From Hyacinth

- cat/avatar identity;
- circus aesthetic;
- third-person controller;
- achievements/collectibles;
- weather system as feature;
- guide NPC requirement;
- social statues;
- game framing.

### From Galerium

- historical timeline;
- Wikipedia data model;
- room tiers;
- classical gilded museum styling copied literally;
- painter-specific metadata/copyright UI;
- its store/application architecture wholesale.

---

# 14. FINAL RECOMMENDATION

The project should stop adding broad functionality until three perceptual problems are solved:

1. **Every project currently feels too similar spatially.**
   - Solve with semantic landmarks + InteractiveArtifact.

2. **Opening a project is still primarily a UI-panel event.**
   - Solve with CinematicInspectRig + ProjectMediaStage.

3. **The museum still looks like a functional prototype.**
   - Solve with MuseumMaterialKit + authored entry ritual.

Highest-value sequence:

```text
CINEMATIC INSPECT STONE
        ↓
PROJECT MEDIA STAGE
        ↓
MATERIAL / LIGHTING SKIN
        ↓
ONE SEMANTIC LANDMARK
        ↓
VALIDATE
        ↓
GENERALIZE TARGET REGISTRY
        ↓
EXPAND LANDMARK LANGUAGE TO 6 PROJECTS
        ↓
MICROINTERACTIONS
        ↓
LANDING→MUSEUM ENTRY RITUAL
```

The single biggest creative principle extracted from the archaeology is:

> **Rubik Sota should not feel like six projects hung in a museum. The museum itself should be a spatial portrait of Rubik Sota, and each project should reveal a different part of that practice.**

That is the route with the highest combined WOW, personalization and long-term value while preserving the functional baseline already approved.
