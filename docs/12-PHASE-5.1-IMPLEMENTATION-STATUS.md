# PHASE 5.1 — CINEMATIC INSPECT STONE — IMPLEMENTATION STATUS

Branch: `feat/phase-5-1-cinematic-inspect`

PR: #6 — `Phase 5.1 — Cinematic Inspect Stone`

Base: `main` at `960d5ff985e317f21efbc802b9c9f9b9121a237e`

## Implemented

- one pilot project only: `aviation`;
- `CinematicInspectRig` isolated from the first-person movement rig;
- camera-state choreography: `idle → glide-in → inspect → glide-out → idle`;
- capture of exact pre-inspect camera position + quaternion;
- camera target computed from project center + inward wall normal;
- eased position interpolation + quaternion slerp;
- exact return to captured pose;
- `FirstPersonRig` yaw/pitch resynchronization from restored camera quaternion before controls resume;
- velocity/key reset when camera authority returns;
- existing five non-pilot projects preserve the Phase 4 panel for A/B comparison;
- `ProjectMediaStage` with a stable content contract for text + image/video media;
- media source is optional in 5.1: no fake asset is invented and no Higgsfield credit is spent;
- dedicated route `/museum/inspect-lab`;
- separate inspect tuning: glide-in, glide-out, distance, height offset, side offset, content reveal threshold;
- existing `/museum/lab` remains the movement/focus lab;
- no CMS, Wikipedia/Wikimedia implementation, semantic-landmark uplift, global material uplift or landing redesign in this phase.

## CI

Head validated by GitHub Actions before manual visual approval.

Workflow run `33070880890` — Pull request verification:
- checkout: PASS
- install dependencies: PASS
- TypeScript: PASS
- production build: PASS

Workflow run `33070880879` — vertical slice checks:
- checkout: PASS
- install: PASS
- TypeScript: PASS
- production build: PASS

## Vercel preview status

A deployment was attempted after CI. The available Vercel connector advertises `deploy_to_vercel` as a no-argument action, but the active backend rejects that invocation because it actually requires `target`, `name`, and `files`. Those arguments are not exposed by the loaded callable schema in this session.

Therefore no preview URL is claimed or fabricated. GitHub CI is green, but visual/browser validation remains an explicit gate before merge.

## Manual validation still required

1. Approach/focus the `aviation` pilot.
2. Press E or click.
3. Confirm movement/pointer lock releases cleanly.
4. Confirm camera glides to an intentional hero framing rather than jumping.
5. Confirm content stage appears during/after the approach without visual collision.
6. Close the project.
7. Confirm camera returns to the exact previous pose.
8. Immediately move mouse and use Q/R: no snap or yaw discontinuity.
9. Press W: movement follows the restored facing direction.
10. Repeat the inspect/return cycle multiple times.
11. Inspect any of the other five projects: old Phase 4 panel must remain unchanged.
12. Confirm progress, 6/6, final installation and About/Contact have not regressed.

## Merge rule

PR #6 remains DRAFT and MUST NOT merge until visual/manual validation approves the stone.

## Stone acceptance statement

The stone is approved only when the experience feels like:

> I selected a work and the museum carried me into an intentional inspection moment, then returned me exactly to my visit.

Not merely:

> a panel opened while the camera zoomed.
