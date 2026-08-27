# PHASE 5.2R — VISUAL RECOVERY

Status: **IMPLEMENTED / CI GREEN / HUMAN VISUAL VALIDATION PENDING**

Branch: `feat/phase-5-2r-visual-recovery`
PR: #8 — `Phase 5.2R — Visual DNA + PBR + GLB + IBL recovery`
Base main at branch creation: `95822e17753d700b2f22b15a3e7af72abbc7fa27`

## Why this recovery exists

Phase 5.2 was technically valid but failed its real visual objective. Human review identified:

- floor reading as a painted dark plane;
- insufficient visible materiality;
- primitive Three.js-demo feeling;
- weak atmosphere;
- insufficient lighting hierarchy;
- too much dead black;
- weak spatial depth;
- premium exhibit focus becoming too subtle to understand;
- procedural torus-knot sculpture reading as a placeholder rather than a curated object.

The recovery does not rewrite locomotion or project-state neurons. It replaces the visual skin while preserving the approved museum engine.

## Protected neurons

Do not regress:

- WASD/arrows movement;
- mouse-look;
- Q/R 360-degree yaw;
- bounds;
- proximity + gaze focus authority;
- E/click inspect;
- visited state and 0/6 → 6/6 progress;
- final installation unlock;
- Cinematic Inspect;
- exact camera return / pointer-lock recovery.

## Visual DNA V2

Canonical quantified file:

`design/rubik-sota-visual-dna-v2.json`

It converts vague terms such as `premium`, `subtle`, `warm` and `cinematic` into visual gates for:

- surface distribution;
- lighting distribution;
- tonal distribution;
- detail density;
- foreground / midground / background depth;
- material legibility;
- maximum dead-black area;
- material roughness / reflection / normal ranges;
- focus legibility;
- asset-source ratios.

Methodology is informed by the approved `Juanmaes83/design-dna` repository: measurable design tokens + qualitative style + visual effects as a versioned machine-readable DNA artifact.

## Real assets used in 5.2R

### Marble Bust 01

Asset library ID: `RS-GLB-03`
Original source: Poly Haven — `Marble Bust 01`
Original URL: `https://polyhaven.com/a/marble_bust_01`
License: CC0
Purpose in 5.2R: replace the procedural torus-knot placeholder with a materially credible museum sculpture and act as a lighting/material/scale benchmark.

LAB runtime uses a commit-pinned GitHub mirror of the Poly Haven glTF so the preview is deterministic:

`https://raw.githubusercontent.com/naver/mesh-simplifier/4a7645c44b6e368de343d904f70cf866f4c5f17a/demo/assets/marble_bust/marble_bust_01_1k.gltf`

The glTF references its real binary geometry and PBR maps (base color, normal, roughness). This is a real glTF asset, not a procedural approximation.

### Sculpture Exhibition HDRI

Asset library ID: `RS-HDRI-01`
Original source: Poly Haven — `Sculpture Exhibition`
Original URL: `https://polyhaven.com/a/sculpture_exhibition`
License: CC0
Purpose: image-based lighting / coherent environment response for sculpture, metal, reflective floor and frames.

LAB runtime pinned mirror:

`https://raw.githubusercontent.com/OmiAvi/artportfolio/128fa847cbcd9cc1627e96c0756aa3b10a4a9334/public/env/sculpture_exhibition_1k.hdr`

### Herringbone Parquet PBR

Source family: Poly Haven / CC0
LAB runtime maps:

- `herringbone_parquet_diff_1k.jpg`
- `herringbone_parquet_rough_1k.jpg`
- `herringbone_parquet_nor_gl_1k.jpg`

Purpose: eliminate the flat painted-floor look and provide readable albedo, roughness and normal response.

### White Stucco PBR

Source family: Poly Haven / CC0
LAB runtime maps:

- `white_stucco_diff_1k.jpg`
- `white_stucco_rough_1k.jpg`
- `white_stucco_nor_gl_1k.jpg`

Purpose: replace flat wall color with subtle mineral/plaster surface response.

## Lighting / atmosphere recovery

The recovery scene now uses a layered hierarchy:

1. HDRI / IBL environment;
2. hemisphere + restrained ambient fill;
3. architectural directional light;
4. repeated wall-oriented area-light washes;
5. local exhibit spotlights;
6. warm/cool sculptural key/fill around Marble Bust;
7. focus-specific light gain.

The intention is not to make the museum brighter everywhere; it is to create readable materials, controlled pools of light, depth and curatorial hierarchy.

## Focus language recovery

Focused exhibits now combine:

- local light gain;
- restrained warm halo behind the exhibit;
- plaque luminance/material response;
- warm metal emissive accent;
- artwork/media emissive response;
- existing crosshair state;
- existing E/click contextual prompt.

The gate is perceptual: the active exhibit must be identifiable in under one second without using a videogame-style neon outline.

## Spatial / exhibit recovery

The candidate skin now affects the whole gallery rather than a single frame. Six exhibits use three repeated-but-distinct display families:

- deep framed hero;
- media wall;
- floating panel / pedestal.

The museum also includes a physical bench, lighting rails / fixtures and the real Marble Bust centerpiece to increase human scale, silhouette complexity and midground depth.

## CI evidence

Head validated before documentation commit: `6794b0270633484f0b8e78e10a29b42140883654`

GitHub Actions:

- Pull request verification — run `33086411442` — SUCCESS
- Rubik Sota vertical slice checks — run `33086411354` — SUCCESS

Checks include TypeScript and production build.

## Exact preview deployment

Vercel project: `rubik-sota-phase52r-exact`
Project ID: `prj_vQTH7yAurkUsgEWou2bGv0k8fH9G`
Deployment ID: `dpl_9s4tuM5Mnf3GdZyUJWuuDgFP2aHa`
Canonical preview host: `https://rubik-sota-phase52r-exact.vercel.app`

The deployment bootstrap clones `feat/phase-5-2r-visual-recovery` directly from GitHub and builds the branch source in Vercel. Routes `/museum` and `/museum/material-lab` returned HTTP 200 after deployment.

### Known non-blocking build warning

The first exact preview logs contain `ReferenceError: ProgressEvent is not defined` during static prerender because `useGLTF.preload()` attempts browser-oriented loading during the server build. Compilation, TypeScript, route generation and deployment all complete successfully. This warning is NOT considered production-clean and must be removed before merge/freeze. It does not justify hiding or replacing the real GLB.

## Human validation gate

PR #8 must remain Draft and unmerged until the user visually validates:

1. floor reads as a real material rather than a dark painted plane;
2. walls show subtle PBR material response;
3. Marble Bust reads as materially/geometrically superior to the torus placeholder;
4. the room has clear light hierarchy and atmosphere;
5. depth is visible across foreground / midground / background;
6. the focused exhibit is immediately legible;
7. six exhibits no longer read as six identical primitive frames;
8. movement, yaw, focus authority, inspect, progress and final installation still behave correctly;
9. the result no longer reads as a primitive Three.js demo;
10. the visual improvement is large enough to justify freezing a new skin baseline.

**FUNCIONA ≠ ESTÁ TERMINADO. HUMAN VISUAL APPROVAL IS THE FINAL GATE.**
