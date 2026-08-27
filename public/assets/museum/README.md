# Rubik Sota Museum Asset Library

This directory is the governed source-of-truth for 3D, PBR and environment assets used by the Rubik Sota portfolio + museum.

## Principles

1. Identity-critical objects are CUSTOM / OWNED whenever practical.
2. Secondary geometry may use carefully selected CC0 sources.
3. PBR materials prefer CC0 sources with clear provenance.
4. Every third-party binary must be license-checked before committing the raw file.
5. Every imported/derived asset must be registered in `provenance/ASSET-REGISTRY.json`.
6. No asset is considered production-approved solely because it loads in Three.js.
7. Browser visual validation and performance checks are mandatory.

## Planned tree

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
    ├── ASSET-REGISTRY.json
    ├── LICENSES.md
    └── SOURCES.md
```

## Status vocabulary

- `APPROVED_FOR_LIBRARY`: concept/source is accepted for Rubik Sota.
- `NOT_YET_IMPORTED`: no binary has been committed yet.
- `SOURCE_VERIFIED`: exact source and license checked.
- `IMPORTED_RAW`: original permitted binary copied into the repo.
- `OPTIMIZED_DERIVATIVE`: web-optimized Rubik derivative created.
- `LAB_VALIDATED`: tested visually/performance-wise in an isolated LAB.
- `PRODUCTION_APPROVED`: accepted into the museum baseline.
- `QUARANTINED`: source/license/provenance unresolved; must not ship.
- `DEPRECATED`: deliberately superseded but retained in history/provenance.

## Approved V1 roles

- RS-GLB-01 Seating / Bench
- RS-GLB-02 Track Light / Museum Spotlight
- RS-GLB-03 Hero Sculpture
- RS-GLB-04 Media Wall
- RS-GLB-05 Pedestal System
- RS-GLB-06 Entrance Portal
- RS-GLB-07 Project Frame System
- RS-GLB-08 Display / Object Table
- RS-GLB-09 Signage / Plaque Family
- RS-GLB-10 Final Installation

`RS-GLB-03` explicitly includes Poly Haven `Marble Bust 01` as an approved library asset in addition to the future custom Rubik Sota hero sculpture.

See `docs/13-RUBIK-SOTA-ASSET-LIBRARY-MASTER.md` for the full art direction, source hierarchy, performance pipeline and runtime architecture.
