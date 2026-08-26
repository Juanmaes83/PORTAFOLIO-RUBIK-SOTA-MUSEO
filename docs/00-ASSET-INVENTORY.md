# 00 — Asset Inventory

Status: VERIFIED AGAINST REPOSITORY
Branch baseline: `main@cdbd78f21822fbb52fcab9097401e2e3d064edc9`
Audit date: 2026-08-26

## Repository root observed

- `README.md`
- `docs/MASTER-BRIEF-RUBIK-SOTA-MUSEUM.md`
- `sources/01-prompt-museum-genesis.txt`
- `sources/02-prompt-museum-evolution-analytics.txt`
- `sources/03-analysis-video-museum-claude-abacus.md`

## Media inventory

No `public/` directory exists in the repository at the time of this audit.

Therefore the repository currently contains:

- no MP4/WebM video asset;
- no Rubik Sota project imagery;
- no logos;
- no font files;
- no GLB/GLTF assets;
- no texture files.

## Consequence

The implementation MUST NOT pretend that the requested master video already exists in GitHub.

The scroll/video engine will use the canonical expected path:

`/media/rubik-sota-master.mp4`

When the file is later added at:

`public/media/rubik-sota-master.mp4`

it should be consumed without changing the timeline architecture.

Until then, the LAB and vertical slice must show an explicit visual proxy and a visible development-state note when the video cannot load. The proxy exists only to validate scroll progress, cue choreography, typography and transition logic. It is not a substitute production asset.

## Asset gate before production visual approval

Required:

1. master video file;
2. confirmed duration, fps and dimensions;
3. shot/cue map derived from the actual video;
4. Rubik Sota identity assets if they exist;
5. real portfolio project media before gallery completion.

## Rule

`MISSING ASSET != PERMISSION TO INVENT ASSET`
