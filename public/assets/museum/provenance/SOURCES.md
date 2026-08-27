# Rubik Sota Museum Asset Library — Source Map

Status: APPROVED

This file records the approved source hierarchy for Rubik Sota 3D/PBR/environment assets.

## PRIMARY — CUSTOM / OWNED

Use for the assets the visitor should remember and for any element that defines Rubik Sota identity.

Approved custom families:

- RS-GLB-02 Track Light / Museum Spotlight
- RS-GLB-04 Media Wall
- RS-GLB-05 Pedestal System
- RS-GLB-06 Entrance Portal
- RS-GLB-07 Project Frame System — final Rubik variants
- RS-GLB-09 Signage / Plaque Family
- RS-GLB-10 Final Installation
- Rubik Sota Custom Hero Sculpture 01 under RS-GLB-03

## PRIMARY EXTERNAL — POLY HAVEN

Base URL: `https://polyhaven.com/`
License: `https://polyhaven.com/license`
Approved role: CC0 models, reference geometry, furniture and HDRIs.

Approved V1 candidates:

### Modular Street Seating
Source: `https://polyhaven.com/a/modular_street_seating`
Role: RS-GLB-01 seating / bench base.

### Mid Century Lounge Chair
Source: `https://polyhaven.com/a/mid_century_lounge_chair`
Role: RS-GLB-01 secondary seating candidate / geometry benchmark.

### Marble Bust 01
Source: `https://polyhaven.com/a/marble_bust_01`
Role: RS-GLB-03 approved real sculpture, lighting/material/scale benchmark, possible secondary or real exhibit.
Status: EXPLICITLY APPROVED / NOT YET IMPORTED.

### Standing Picture Frame 01
Source: `https://polyhaven.com/a/standing_picture_frame_01`
Role: RS-GLB-07 frame-system reference/base.

### Modern Coffee Table 01
Source: `https://polyhaven.com/a/modern_coffee_table_01`
Role: RS-GLB-08 display/object-table reference/base.

### Sculpture Exhibition HDRI
Source: `https://polyhaven.com/a/sculpture_exhibition`
Role: RS-HDRI-01 primary IBL/environment candidate.

### White Studio 01 HDRI
Source: `https://polyhaven.com/a/white_studio_01`
Role: RS-HDRI-02 LAB lighting alternative.

### Monochrome Studio 02 HDRI
Source: `https://polyhaven.com/a/monochrome_studio_02`
Role: RS-HDRI-03 LAB lighting alternative.

## PRIMARY PBR — ambientCG

Base URL: `https://ambientcg.com/`
Approved role: CC0 PBR surfaces.

Approved V1 material categories:

- mineral/plaster wall;
- stone/microcement-like floor;
- brushed/satin metal;
- dark graphite metal;
- selected wood.

Exact material asset IDs must be chosen and recorded before binary import.

Default web-resolution policy:

- 1K default;
- 2K for hero/large visible surfaces when justified;
- 4K only after isolated visual evidence demonstrates value.

## SECONDARY — Sketchfab CC0

Use only when Poly Haven/custom sources do not solve a concrete need.

Rules:

- verify exact asset license;
- verify original uploader/author;
- verify redistribution rights;
- save attribution/provenance even when CC0;
- reject reuploads with uncertain ownership.

## SECONDARY / CONTROLLED — Sketchfab CC BY

Use only for exceptional assets where attribution is worth the visual/product value.

Mandatory:

- author;
- original asset URL;
- exact license;
- required attribution text;
- modification record;
- redistribution compatibility.

## CONDITIONAL — BlenderKit

Use only after exact asset-by-asset license and raw-redistribution review.

Do not commit marketplace source files to this public repository merely because they can be used in rendered commercial projects.

## QA ONLY — Khronos glTF Sample Assets

Role: technical reference and loader/rendering QA.

Use for validating capabilities such as:

- glTF correctness;
- KTX2/Basis;
- Meshopt/Draco where appropriate;
- clearcoat;
- sheen;
- transmission;
- anisotropy;
- texture compression;
- GPU/memory behavior.

Do not treat Khronos sample models as Rubik Sota visual direction. Check each sample's own license before reuse.

## OWN REPOSITORY DONORS

### Juanmaes83/3D-room-portofolio

Approved donor role:

- named object → semantic action;
- video surfaces;
- object focus;
- media lifecycle;
- object reactions;
- discoverability.

Rejected direct import:

- complete bedroom scene as Rubik Sota visual skin.

Principle:

> Reuse its interaction neurons, not its bedroom skin.

## Import gate

No source becomes a production museum asset until it passes:

`SOURCE VERIFIED → LICENSE VERIFIED → RAW/DERIVATIVE PROVENANCE → OPTIMIZED → GLTF VALIDATED → LAB VISUAL VALIDATED → PERFORMANCE CHECKED → PRODUCTION APPROVED`
