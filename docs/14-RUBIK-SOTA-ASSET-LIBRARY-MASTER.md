# RUBIK SOTA ASSET LIBRARY — MASTER

Status: APPROVED
Owner: Rubik Sota
Repository: `Juanmaes83/PORTAFOLIO-RUBIK-SOTA-MUSEO`
Purpose: create a governed, reusable and licensable 3D/PBR asset system for the Rubik Sota portfolio + museum.

## 1. Core decision

Rubik Sota will NOT depend on one generic GLB library.

The approved strategy is a hybrid library:

- CUSTOM / OWNED GLB for identity-critical and memorable objects.
- POLY HAVEN CC0 for high-quality secondary geometry, furniture, reference geometry and HDRI.
- ambientCG CC0 for PBR material realism.
- Sketchfab CC0 as selective fallback.
- Sketchfab CC BY only when an exceptional asset justifies attribution.
- Khronos glTF Sample Assets for technical QA, not for art direction.
- BlenderKit only after asset-by-asset license and redistribution verification.
- Existing Rubik-owned repositories as donor sources when provenance is clear.

Approved direction-art heuristic:

- 40% CUSTOM / OWNED: identity-critical objects.
- 30% POLY HAVEN CC0: supporting geometry and props.
- 20% ambientCG CC0: PBR materials and surfaces.
- 10% SELECTIVE EXTERNAL: only exceptional, fully documented assets.

This is an art-direction heuristic, not a licensing rule.

## 2. Golden rule

> CC0 for secondary visual infrastructure. Custom GLB for what the visitor should remember.

The goal is to avoid both extremes:

1. all-custom: too slow and expensive;
2. all-downloaded: visually generic and dependent on stock aesthetics.

Target result:

`CUSTOM HERO + CC0 WORLD + PBR REALISM + IBL/HDRI + SEMANTIC INTERACTION`

## 3. Approved Rubik Sota GLB Library V1

### RS-GLB-01 — SEATING / BENCH

Status: APPROVED
Role: spatial scale, inhabitable museum, secondary geometry.
Primary source candidate: Poly Haven — Modular Street Seating.
Secondary candidate: Poly Haven — Mid Century Lounge Chair.

Strategy:

- do not necessarily use the donor literally;
- clean or modify in Blender when appropriate;
- replace materials with Rubik Sota material system;
- optimize geometry;
- export governed GLB;
- record original and derivative provenance.

Verdict: PRIMARY for prototyping / derivation.

### RS-GLB-02 — TRACK LIGHT / MUSEUM SPOTLIGHT

Status: APPROVED
Role: visible physical luminaire synchronized with Three.js spotlight behavior.

Strategy: CUSTOM / OWNED GLB.

Target structure:

- rail;
- articulated arm;
- cylindrical spotlight body;
- lens;
- internal reflector;
- mounting detail.

Target geometry: approximately 2K–4K tris per reusable luminaire before optimization.

Interaction concept:

`GLB luminaire + Three spotlight = one semantic lighting system`

On exhibit focus the fixture may react subtly, e.g. a minimal rotation and controlled intensity increase.

Verdict: CUSTOM PRIMARY.

### RS-GLB-03 — HERO SCULPTURE

Status: APPROVED
Role: replace the generic procedural torus-knot/demo feeling with a believable sculptural object.

#### Approved real library asset: Poly Haven — Marble Bust 01

Status: APPROVED_FOR_LIBRARY / NOT_YET_IMPORTED
Source: Poly Haven
License family: CC0
Approximate geometry observed during research: ~17K tris.
Reason for approval:

- materially and geometrically much more credible than the current torus-knot style placeholder;
- gives us a real benchmark for surface response, scale, silhouette, shadows and museum lighting;
- useful as an actual exhibit, secondary sculpture, lighting/material calibration object, or visual-quality benchmark.

IMPORTANT: its approval is explicit. It must NOT be silently removed from the library merely because a future custom hero sculpture is also built.

#### Custom Rubik Sota Hero Sculpture

Status: ALSO APPROVED
Strategy: CUSTOM / OWNED GLB.

Possible visual DNA:

- abstraction derived from Rubik Sota identity;
- fragmented structure;
- kinetic assembly;
- geometric transformation;
- creative-technology metaphor.

Potential semantic interaction:

- IDLE: nearly imperceptible motion;
- PROXIMITY: layers separate subtly;
- FOCUS: controlled internal light / material response;
- ACTIVATE: short micro-choreography.

Final policy:

`Marble Bust 01` and a future custom Rubik Sota sculpture are NOT mutually exclusive.

The bust is part of the approved asset library. The custom sculpture is the preferred long-term identity hero when ready.

### RS-GLB-04 — MEDIA WALL

Status: APPROVED
Strategy: CUSTOM / OWNED GLB.

Physical features:

- enclosure;
- real depth/profile;
- inset screen;
- seams/vents;
- wall stand-off;
- glass layer;
- subtle physical indicator detail.

Semantic states:

- DORMANT → poster;
- PROXIMITY → lightweight preview;
- FOCUS → preview active;
- INSPECT → cinematic Project Media Stage.

Verdict: CUSTOM PRIMARY.

### RS-GLB-05 — PEDESTAL SYSTEM

Status: APPROVED
Strategy: CUSTOM geometry + CC0 PBR materials.

Family:

- P01 rectangular stone/mineral;
- P02 cylindrical mineral;
- P03 slim metal/display pedestal.

Requirements:

- bevels;
- seams;
- shadow gaps;
- physically believable base/contact;
- clean UVs;
- material overrides through MuseumMaterialKit.

### RS-GLB-06 — ENTRANCE PORTAL

Status: APPROVED
Strategy: CUSTOM / OWNED GLB.

Role:

- transform museum entry from “entering a box” into an architectural threshold;
- connect cinematic portfolio and museum;
- foreshadow the same design DNA.

Components may include:

- frame;
- lintel;
- profile depth;
- integrated lighting;
- Rubik Sota sign/plate;
- reveal/door geometry.

Narrative:

`PORTFOLIO → MUSEUM THRESHOLD → COLLECTION`

Verdict: CUSTOM PRIMARY.

### RS-GLB-07 — PROJECT FRAME SYSTEM

Status: APPROVED
Reference candidate: Poly Haven — Standing Picture Frame 01.
Strategy: derive a Rubik family rather than repeat raw boxGeometry.

Approved frame family:

- FRAME A — deep black aluminium;
- FRAME B — floating metal;
- FRAME C — glass media enclosure.

Use instancing/reuse instead of six unrelated frame models.

### RS-GLB-08 — DISPLAY / OBJECT TABLE

Status: APPROVED
Reference candidate: Poly Haven — Modern Coffee Table 01.
Role: support projects that should exist as physical objects/maquettes rather than wall frames.

Potential content:

- maquette;
- model;
- documents;
- layered process artifacts;
- architecture/spatial project;
- interactive object.

This is strategically important for Semantic Landmarks because the museum must stop behaving like “six pictures on walls”.

### RS-GLB-09 — SIGNAGE / PLAQUE FAMILY

Status: APPROVED
Strategy: CUSTOM / OWNED, lightweight.

Requirements:

- real support/depth;
- mineral or metal body;
- wall separation;
- hidden fixing logic;
- subtle bevel/edge;
- material hierarchy;
- optional restrained light detail.

Goal: no longer read as a flat dark UI rectangle floating in 3D.

### RS-GLB-10 — FINAL INSTALLATION

Status: APPROVED
Strategy: CUSTOM HERO GLB.

Role:

- spatial reward after visiting six projects;
- physically express completion;
- combine sculpture, display, brand, progress and contact.

It should unlock/activate at 6/6 rather than behave like a generic panel.

Verdict: CUSTOM HERO.

## 4. Approved environment and PBR layer

### Poly Haven — PRIMARY external 3D / HDRI source

Why:

- consistent CC0 catalog;
- glTF availability on many models;
- PBR-ready assets;
- metadata useful for web optimization;
- high-value HDRIs;
- simple commercial-use posture.

Approved initial candidates:

- Modular Street Seating;
- Mid Century Lounge Chair;
- Marble Bust 01;
- Standing Picture Frame 01;
- Modern Coffee Table 01;
- Sculpture Exhibition HDRI;
- White Studio 01 HDRI — LAB alternative;
- Monochrome Studio 02 HDRI — LAB alternative.

### ambientCG — PRIMARY PBR source

Approved material families:

- mineral/plaster wall;
- stone/microcement-like floor;
- brushed/satin metal;
- dark graphite metal;
- selected wood.

Web texture policy:

- 1K default;
- 2K for hero/large visible surfaces when justified;
- 4K only after visual evidence proves a need.

### IBL / HDRI

Primary initial candidate: Poly Haven — Sculpture Exhibition HDRI.

Use case:

- environment lighting / IBL;
- metal reflections;
- glass response;
- sculpture surface response;
- floor/reflection coherence;
- frame realism.

Do not require the HDRI to be visible as background.

## 5. Approved source hierarchy

1. CUSTOM / OWNED — 10/10 for identity.
2. Poly Haven — PRIMARY external geometry + HDRI.
3. ambientCG — PRIMARY external PBR materials.
4. Sketchfab CC0 — selective fallback.
5. Sketchfab CC BY — exceptional use only, attribution mandatory.
6. Khronos glTF Sample Assets — technical QA only.
7. BlenderKit — conditional; verify exact asset license and redistribution before repo storage.

## 6. Sources deliberately NOT treated as direct visual-library imports

### `3D-room-portofolio`

Approved role: interaction donor / semantic-object donor.

Do NOT import the complete bedroom/scene as Rubik Sota visual identity.

Keep its useful “neurons”:

- named node → semantic action;
- video surfaces;
- object focus;
- media lifecycle;
- reactive objects;
- discoverability.

Principle:

> Take its object neurons, not its bedroom skin.

### Khronos sample assets

Use to test loaders and rendering capabilities such as:

- KTX2;
- transmission;
- clearcoat;
- sheen;
- anisotropy;
- compression;
- GPU/memory behavior.

Do not use as the art-direction source of Rubik Sota.

## 7. Required GitHub architecture

Target asset tree:

```text
public/assets/museum/
├── glb/
│   ├── architecture/
│   ├── lighting/
│   ├── seating/
│   ├── display/
│   ├── sculpture/
│   └── signage/
├── textures/
│   ├── mineral/
│   ├── stone/
│   ├── metal/
│   └── wood/
├── environment/
└── provenance/
```

Repository governance files:

- `public/assets/museum/README.md`
- `public/assets/museum/provenance/ASSET-REGISTRY.json`
- `public/assets/museum/provenance/LICENSES.md`
- `public/assets/museum/provenance/SOURCES.md`

## 8. Asset metadata contract

Every imported or custom asset must eventually record:

- `asset_id`;
- `name`;
- `source`;
- `original_url`;
- `author`;
- `license`;
- `license_url`;
- `modified`;
- `derivative_of` when applicable;
- original file size;
- optimized file size;
- triangle count;
- material count;
- texture list;
- texture resolution;
- compression;
- checksum/SHA-256;
- semantic role;
- interaction role;
- collision strategy;
- LOD strategy;
- import status;
- approval status.

## 9. Runtime architecture target

Avoid unmanaged repeated `<primitive object={scene} />` usage.

Target system:

`MuseumAssetRegistry → AssetLoader → Optimization/LOD → MaterialOverride → SemanticRole → Interaction`

Example concept:

```text
RS_TRACK_LIGHT_01
source: CUSTOM
role: exhibit-light
interactive: true
collision: none
instances: many
```

```text
RS_SEATING_01
source: POLY_HAVEN_CC0
role: spatial-scale
interactive: false
collision: simple-box
LOD: enabled if justified
```

## 10. Performance and conversion policy

Before production use, assets should pass an optimization pipeline when appropriate:

1. import source into Blender or controlled conversion pipeline;
2. inspect transform/scale/origin;
3. remove hidden/unnecessary geometry;
4. reduce material count;
5. clean UVs;
6. preserve or bake required normals;
7. resize textures to justified web resolution;
8. evaluate Draco/Meshopt where useful;
9. evaluate KTX2/Basis texture compression;
10. export GLB;
11. validate glTF;
12. measure file size / triangles / draw calls;
13. record derivative provenance;
14. browser visual regression before approval.

Optimization must NOT be applied blindly if it visibly damages the asset.

## 11. Licensing rules

- CC0: preferred for reusable third-party raw assets.
- CC BY: allowed only when attribution is operationally acceptable and documented.
- NC: reject for commercial product/library use.
- ND: reject when modification is required.
- Unknown/ambiguous license: quarantine; do not integrate.
- “usable in a project” does not automatically mean “raw source may be redistributed in a public GitHub repository”.

For every non-owned raw file, verify redistribution rights before committing the binary itself.

## 12. Phase integration

This library feeds the visual recovery / uplift path:

`DNA V2 QUANTIFIED`
`+ VISUAL TOKENS`
`+ PBR LIBRARY`
`+ GLB LIBRARY`
`+ IBL/HDRI`
`+ LIGHTING RECOVERY`
`+ FOCUS LANGUAGE`
`+ ATMOSPHERE`
`→ NEW RUBIK SOTA SKIN`

It is intended to work with, not replace:

- Cinematic Inspect Stone;
- Museum Material Stone;
- Semantic Landmark Stone;
- Entry Ritual;
- future Project Media Stage/CMS;
- future institutional knowledge layer.

## 13. Current state

The library DESIGN and selection are approved and now versioned in GitHub.

This document does NOT claim that external binary `.glb`, texture or HDRI files are already downloaded into the repository.

Asset import must happen asset-by-asset after exact license/redistribution verification, optimization and visual validation.

`Marble Bust 01` is explicitly approved as part of the Rubik Sota library and must remain in the registry unless a later deliberate decision deprecates it.
