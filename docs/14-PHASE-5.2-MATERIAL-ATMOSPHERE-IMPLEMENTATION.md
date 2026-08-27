# PHASE 5.2 — MATERIAL + ATMOSPHERE STONE

Status: **APPROVED, MERGED AND FROZEN AS CURRENT VISUAL BASELINE**

Branch: `feat/phase-5-2-material-atmosphere`

PR: `#7 — Phase 5.2 — Material + Atmosphere Stone`

Validated head: `8e1ed4d274d9f8f38e021567a2b7f5bb85203cfc`

Merged baseline: `9041cb50b7cf63563dcf76de0e20b8505af56d0a`

Human visual approval: **2026-08-27**

## Mission

Produce a large enough visual evolution to judge perceived quality, not a one-artwork micro-test.

Phase 5.2 transforms approximately the front 40–45% of the existing single gallery while preserving the approved rear half as a live baseline comparison.

Approved target statement:

> This half of the museum feels like another level of product.

## Sources and approved donors

Sources of truth remain authoritative:
- `sources/01-prompt-museum-genesis.txt`
- `sources/02-prompt-museum-evolution-analytics.txt`
- `sources/03-analysis-video-museum-claude-abacus.md`
- `design/rubik-sota-museum-dna.json`

Only the approved Phase 5 donors are used:

### `Juanmaes83/galerium`
Extracted:
- hierarchy of architectural materials;
- controlled reflective floor logic;
- work-specific lighting;
- depth through ceiling/wall/floor differentiation.

Not copied:
- classical/gold visual identity;
- historic museum information architecture.

### `Juanmaes83/3D-room-portofolio`
Extracted:
- environmental response;
- the principle that surfaces/objects can react subtly to interaction.

Asset audit found `assets/3d/scene-final.gltf`, but it is a complete room scene rather than a clean modular museum prop. It is deliberately NOT imported into Rubik Sota because it would transfer donor architecture/identity instead of a reusable capability.

### `Juanmaes83/hyacinth.im-site`
Used at the level of authored spatial staging only. Semantic landmark/world systems remain a later stone.

## Material DNA

Canonical candidate accepted:

`design/rubik-sota-material-dna.json`

Core families:
- soft mineral architectural white;
- dark stone / microcement floor;
- deep graphite ceiling/structure;
- warm satin metal accent;
- smoked museum glass;
- warm-neutral sculptural lighting.

Explicitly forbidden:
- mirror floor;
- classical gold museum;
- neon/sci-fi;
- Apple Store generic;
- fake HDR;
- prop clutter;
- game-like focus feedback.

## Material token system

Canonical implementation:

`lib/materialTokens.ts`

Presets:
- `baseline`
- `quiet`
- `cinematic` — approved default candidate
- `editorial`

The purpose of presets is A/B art direction, not product theme switching.

## Premium zone

Projects 01–03:
1. `aviation`
2. `ai-workspace`
3. `fashion`

Rear projects 04–06 deliberately retain the approved Phase 4 visual treatment.

This creates two approved comparison methods:

1. walk physically from premium front zone into approved baseline rear zone;
2. use `/museum/material-lab` to toggle the same scene between baseline and candidate presets.

## Three exhibit treatments

### Aviation — framed hero
- deep reveal;
- warm satin-metal trim;
- physical plaque;
- dedicated work light;
- restrained focus light boost.

### AI Workspace — media wall
- dark technical enclosure;
- emissive media plane;
- smoked-glass layer;
- metal plinth;
- focus-driven emissive wake-up.

### Fashion — floating editorial panel
- floating panel with shadow gap;
- sculptural cylindrical support;
- metal accent ring;
- restrained rear light response.

All three use the already-approved `CinematicInspectRig`.

## Architecture uplift

Front premium zone adds:
- controlled `MeshReflectorMaterial` floor;
- panelled mineral walls with shadow joints;
- graphite ceiling;
- three ceiling rails;
- repeated physical light fixtures;
- premium bench;
- sculptural accent object;
- material threshold between premium and baseline zones;
- architectural and local exhibit lighting.

The architecture remains one gallery. No new maze, room system or world engine is introduced.

## Microinteractions

Phase 5.2 uses focus-driven material/light response only:
- framed work warms slightly;
- plaque metal gains subtle luminance;
- media wall emissive intensity increases;
- floating-panel backlight increases;
- local spotlight receives restrained focus boost;
- premium-zone threshold remains legible spatially.

These are PIEL responses. They do not introduce a second interaction/target engine.

## GLB / texture decision

The approved plan allows GLBs and PBR textures when they clearly improve the project.

This implementation does NOT add arbitrary external binary assets because:
- the donor room GLTF is a whole authored room, not a modular prop;
- no approved source-clear modular GLB was identified as necessary for the current material decision;
- importing arbitrary decorative GLBs would reduce authorship and increase weight before the visual stone is approved.

Instead:
- bench, rail, luminaires, plinth and sculptural object are lightweight native R3F geometry;
- materials use physically based roughness/metalness and controlled reflection;
- the Material DNA explicitly remains GLB/PBR-texture ready for later source-clear assets.

## New route

`/museum/material-lab`

Controls:
- Baseline;
- Quiet Gallery;
- Cinematic Gallery;
- Editorial Gallery;
- architectural details/props ON/OFF;
- focus microinteractions ON/OFF;
- reset.

## Protected NEURONAS — regression gate passed

Preserved through the approved stone:
- WASD/arrows;
- Q/R 360 yaw;
- mouse look;
- bounds;
- focus by distance + gaze;
- E/click;
- visited Set;
- `0/6` progress;
- final installation;
- About/Contact;
- exact Cinematic Inspect return;
- yaw/pitch resync after return.

## Validation evidence

GitHub PR: `#7`

Validated head: `8e1ed4d274d9f8f38e021567a2b7f5bb85203cfc`

CI:
- `Pull request verification` — success;
- `Rubik Sota vertical slice checks` — success;
- TypeScript — success;
- Next.js production build — success.

Exact Vercel validation deployment:
- deployment id `dpl_4kpvT42ya3PqkL78uCc5tDX6EUuU`;
- state `READY`;
- routes generated: `/`, `/lab`, `/museum`, `/museum/inspect-lab`, `/museum/lab`, `/museum/material-lab`.

Human validation:
- `/museum` approved;
- `/museum/material-lab` approved;
- explicit user approval received on 2026-08-27.

Merge:
- PR #7 merged with merge commit `9041cb50b7cf63563dcf76de0e20b8505af56d0a`.

## Freeze rule after approval

`9041cb50b7cf63563dcf76de0e20b8505af56d0a` is now the protected Phase 5.2 visual baseline.

Future visual work must be additive and isolated. Do not rewrite movement, Cinematic Inspect, progress, final installation, or the approved material system without demonstrated root cause and regression validation.
