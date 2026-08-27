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
- Phase 5.1 Vercel human preview validated and approved;
- Phase 5.2 Material + Atmosphere Stone approved by human visual validation on 2026-08-27;
- premium front gallery zone for projects 01–03 approved;
- three exhibit treatments approved: framed hero, media wall, floating panel;
- controlled reflective floor, panelled mineral walls, graphite ceiling, rails and local exhibit lighting approved;
- restrained focus microinteractions approved;
- `/museum/material-lab` A/B validation route approved;
- Phase 5.2 CI TypeScript and production build passed;
- exact Vercel deployment for PR #7 reached READY and generated `/museum` + `/museum/material-lab`;
- PR #7 merged successfully.

## Current approved baseline

Phase 5.2 merge SHA:

`9041cb50b7cf63563dcf76de0e20b8505af56d0a`

Post-merge documentation commit:

`58371f55902d5bc286cd0ac4791528716d3cf2ef`

This baseline includes Phase 5.1 Cinematic Inspect and the approved Phase 5.2 premium material/atmosphere stone.

## Automated gate

Every implementation phase must pass:

- dependency install;
- TypeScript typecheck;
- Next.js production build.

Automated success is necessary but not sufficient. Visual/browser validation remains required for experiential changes before freeze/merge.

## Phase 5.2 evidence

PR: `#7 — Phase 5.2 — Material + Atmosphere Stone`

Validated head:

`8e1ed4d274d9f8f38e021567a2b7f5bb85203cfc`

GitHub Actions:
- `Pull request verification` — success;
- `Rubik Sota vertical slice checks` — success.

Exact Vercel validation deployment:

`dpl_4kpvT42ya3PqkL78uCc5tDX6EUuU`

State: `READY`.

Generated routes included:
- `/museum`;
- `/museum/material-lab`;
- `/museum/inspect-lab`;
- `/museum/lab`.

Human visual approval: **2026-08-27**.

## Next validation target

Do not reinterpret the next stone as permission to rewrite the approved gallery.

The protected Phase 5.2 baseline must remain intact while the next visual/navigation capability is isolated and validated. Any propagation beyond projects 01–03 must preserve:
- the accepted Material DNA;
- movement/pointer lock;
- Cinematic Inspect exact return;
- focus semantics;
- 0/6 progress and visited state;
- final installation / About-Contact;
- material-lab comparison capability while visual propagation remains under development.

## Still not final

These remain outside the current approved baseline or are later roadmap work:

- production master landing video in `public/media/rubik-sota-master.mp4`;
- final six-project real media/content;
- semantic landmark propagation;
- full museum material propagation beyond the approved 01–03 premium stone;
- entry ritual;
- complete landing visual uplift;
- dedicated premium mobile museum;
- Escaparates Pro authoring/CMS integration;
- Wikipedia/Wikidata/Wikimedia institutional layer;
- backend, analytics and dashboard.

## Blocking landing asset

`public/media/rubik-sota-master.mp4` is not yet in GitHub.

The current landing visual proxy remains a development instrument, not a production replacement.
