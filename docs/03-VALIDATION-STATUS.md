# 03 — Validation Status

## Verified

- repository asset inventory;
- three sources of truth present;
- Pear public reference audit completed;
- Design DNA v1 created from documented schema;
- architecture contract frozen;
- first scroll/video slice implemented;
- `/lab` route implemented;
- missing video handled explicitly;
- scroll loop corrected so it is not recreated on every progress render;
- media proxy layering corrected;
- Phase 4 full six-project museum approved and merged;
- 360° keyboard yaw approved;
- six-project visited state and 0/6 progress approved;
- final installation unlock and About / Contact approved;
- Phase 5.1 Cinematic Inspect Stone approved by human visual validation on 2026-08-27;
- `aviation` pilot cinematic inspect approved;
- glide-in / inspect / glide-out camera choreography approved;
- exact return to captured camera pose approved;
- FirstPersonRig yaw/pitch resynchronization approved;
- ProjectMediaStage shell approved for the pilot;
- `/museum/inspect-lab` approved;
- Phase 5.1 CI TypeScript and production build passed;
- Phase 5.1 Vercel human preview validated and approved.

## Current approved baseline

Merge SHA:

`01cc75d4f5660413e2392ef6c4ebd99944f75439`

This baseline includes Phase 5.1 and is the starting point for Phase 5.2.

## Automated gate

Every implementation phase must pass:

- dependency install;
- TypeScript typecheck;
- Next.js production build.

Automated success is necessary but not sufficient. Visual/browser validation remains required for experiential changes before freeze/merge.

## Next validation target

### Phase 5.2 — Material Stone

Validate one limited museum zone and one project only before propagation:

- architectural wall material;
- floor material and restrained reflection;
- ceiling/dark structure material;
- accent material;
- ambient light;
- local project light;
- shadow quality;
- contrast/readability;
- frame/material hierarchy;
- performance impact;
- no degradation to movement, focus, cinematic inspect, 6/6 progress, final installation or pointer lock.

The gate is not "more realistic". The gate is: the same geometry must feel materially authored, premium and recognizably Rubik Sota without becoming a generic luxury museum or a Galerium clone.

## Still not final

These remain outside the current approved baseline or are later roadmap work:

- production master landing video in `public/media/rubik-sota-master.mp4`;
- final six-project real media/content;
- semantic landmark propagation;
- full museum material propagation;
- entry ritual;
- complete landing visual uplift;
- dedicated premium mobile museum;
- Escaparates Pro authoring/CMS integration;
- Wikipedia/Wikidata/Wikimedia institutional layer;
- backend, analytics and dashboard.

## Blocking landing asset

`public/media/rubik-sota-master.mp4` is not yet in GitHub.

The current landing visual proxy remains a development instrument, not a production replacement.
