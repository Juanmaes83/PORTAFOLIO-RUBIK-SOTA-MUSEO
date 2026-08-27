# Rubik Sota Museum Asset Library — Licensing Policy

Status: APPROVED

This file governs third-party and custom assets used by the Rubik Sota museum.

## Preferred licenses

### CC0

Preferred for third-party geometry, textures and HDRI because it minimizes operational friction for commercial reuse, modification and redistribution.

Primary approved CC0 ecosystems:

- Poly Haven
- ambientCG

Even for CC0 assets, exact source and asset identity must be recorded in `ASSET-REGISTRY.json` and `SOURCES.md`.

### OWNED / CUSTOM

Preferred for identity-critical Rubik Sota assets:

- track-light system;
- media wall;
- pedestal family;
- entrance portal;
- custom hero sculpture;
- signage system;
- final installation.

Custom assets must still record authoring source, derivative history where applicable and optimization metadata.

## Conditional licenses

### CC BY

Allowed only when:

1. the asset adds exceptional value;
2. attribution is practical in the final product;
3. attribution text, author and source are recorded before integration;
4. modification/redistribution terms are compatible with our use.

Attribution must never be invented or inferred.

### BlenderKit / other marketplaces

Do not assume that a marketplace asset may be redistributed as a raw source file in a public GitHub repository simply because it may be used in a commercial project.

Each asset requires explicit license and redistribution verification before raw binary commit.

## Rejected / quarantine classes

- Non-commercial (`NC`) for a commercializable Rubik Sota product.
- No-derivatives (`ND`) when modification/optimization is required.
- Unknown license.
- Missing provenance.
- Scraped/reuploaded models with uncertain ownership.
- Assets whose marketplace terms permit rendered use but prohibit raw redistribution.

Such assets must be marked `QUARANTINED` and must not ship.

## Approved explicit asset

### Poly Haven — Marble Bust 01

Registry ID: `RS-GLB-03`
Status: `APPROVED_FOR_LIBRARY_NOT_YET_IMPORTED`
License family: CC0
Source: `https://polyhaven.com/a/marble_bust_01`
License reference: `https://polyhaven.com/license`

Its role may be:

- actual sculpture in the museum;
- secondary sculptural object;
- material/lighting benchmark;
- scale/silhouette benchmark;
- comparison baseline against the current procedural torus-knot placeholder.

Its approval does not prevent creation of a separate custom Rubik Sota hero sculpture.

Before committing the binary, verify the exact download artifact and preserve the source record.

## Derivatives

When a CC0 or otherwise modifiable asset is adapted in Blender:

- preserve original source URL;
- preserve original asset name and license;
- identify the Rubik derivative;
- record what changed;
- record new triangle/file-size/texture metadata;
- compute checksum when the binary is introduced;
- do not erase the original provenance chain.

## Public repository rule

This repository is public. Therefore raw third-party binaries must only be committed when redistribution is clearly permitted.

If redistribution is uncertain, store only metadata/instructions and obtain the asset during a controlled build or authoring step until licensing is resolved.
