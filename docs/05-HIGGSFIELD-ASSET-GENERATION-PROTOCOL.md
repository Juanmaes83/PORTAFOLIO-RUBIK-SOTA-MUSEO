# 05 — HIGGSFIELD ASSET GENERATION PROTOCOL

## Purpose

Define the controlled production protocol for every AI-generated image or video used by RUBIK SOTA — PORTFOLIO MUSEUM.

This document extends the project README without changing its ADN / PIEL / NEURONAS contract.

## Credit discipline — mandatory

For one visual function / one narrative purpose:

- default: **1 generation**;
- maximum: **2 generations**;
- a second generation is allowed only when it is a genuinely useful alternative or when the first output exposes a concrete defect that can be corrected;
- never run 3+ speculative versions for the same function;
- never spend credits to generate decorative assets with no clear role in the product.

Before any paid generation, define:

1. exact function in the experience;
2. target route / section / scene;
3. whether image or video is actually required;
4. aspect ratio;
5. target resolution / quality;
6. duration for video;
7. expected camera language;
8. lighting and palette;
9. motion role;
10. negative constraints;
11. acceptance criteria.

## Required quality target

Unless a specific destination requires otherwise:

- target quality: **2K-class output or the highest stable 2K-capable setting supported by the selected model**;
- default aspect ratio for cinematic web media: **16:9**;
- final delivery must preserve enough detail for full-width desktop presentation;
- avoid artificial oversharpening, fake HDR, crushed blacks, clipped highlights and generic AI gloss;
- no visible text rendered inside generated media unless explicitly required;
- no watermarks, logos, UI chrome or fake interface elements unless explicitly authored for the composition.

If the selected model cannot produce native 2K output, document the limitation and use the best supported generation mode plus a controlled upscale only when visually justified.

## Prompt quality contract

Every production prompt must be written as a MASTER PROMPT, not a short generic sentence.

A production image prompt should define, where relevant:

- visual objective;
- exact role in Rubik Sota Portfolio Museum;
- composition;
- subject hierarchy;
- environment / architecture;
- camera body / lens language or equivalent photographic perspective;
- framing;
- depth and focus behaviour;
- lighting direction, quality and temperature;
- materials and surface realism;
- palette;
- atmosphere;
- editorial / cinematic intent;
- negative space needed for web typography when applicable;
- realism and finishing language;
- exclusions / negative prompt;
- aspect ratio and quality target.

A production video prompt should additionally define:

- opening frame intent;
- ending frame intent;
- exact duration;
- shot progression / beats;
- camera path;
- subject motion;
- environment motion;
- speed / acceleration characteristics;
- transitions;
- temporal continuity;
- frame-to-frame consistency;
- whether footage must support scroll scrubbing;
- moments intended for typography / copy cues;
- motion that must NOT occur;
- loop / non-loop behaviour when relevant.

## Scroll-scrub video requirement

For media intended for the cinematic landing:

- motion must remain legible when the user moves forward OR backward through time;
- avoid edits whose meaning depends on autoplay timing alone;
- prefer visually continuous transitions over chaotic montage;
- avoid excessive motion blur that degrades frame-by-frame seeking;
- create clean visual beats that can be mapped to editorial copy cues;
- preserve usable frames across the full timeline, not only a strong beginning and end;
- video and typography will ultimately be driven by the same master scroll progress in the frontend.

## Museum asset requirement

Generated museum imagery/video must support the established Design DNA:

- contemporary premium gallery;
- calm, architectural, editorial;
- warm neutral materials;
- controlled museum lighting;
- no sci-fi neon;
- no game-like fantasy architecture;
- no clutter;
- no giant labyrinth;
- no generic AI museum aesthetics;
- one elegant primary gallery language.

## Repositories and skills that must inform production

Primary documentation / repositories:

- `Juanmaes83/PORTAFOLIO-RUBIK-SOTA-MUSEO`
- `Juanmaes83/design-dna`
- `Juanmaes83/harness-design`

Design / motion capabilities defined in the project README:

- `design-dna`
- `frontend-design`
- `design-taste-frontend`
- `scrollcraft`

Generation must therefore follow this sequence:

```text
FUNCTION IN PRODUCT
→ DESIGN DNA
→ FRONTEND / EDITORIAL DIRECTION
→ MOTION / SCROLL ROLE
→ MASTER PROMPT
→ COST / MODEL CHECK WHEN NEEDED
→ GENERATION 01
→ VISUAL REVIEW
→ OPTIONAL GENERATION 02 ONLY IF JUSTIFIED
→ SELECT
→ INTEGRATE
→ HARNESS / BROWSER VALIDATION
```

## Generation log

Every asset accepted for the project should be documented with:

- asset id / filename;
- purpose;
- prompt version;
- model;
- generation number (01 or 02);
- aspect ratio;
- output quality / resolution;
- selected / rejected;
- reason;
- target project path;
- integration status.

## Non-negotiable rule

**The purpose is not to generate more media. The purpose is to generate the minimum amount of high-quality media required to make the experience better.**
