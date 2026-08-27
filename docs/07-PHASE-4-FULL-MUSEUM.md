# Phase 4 — Full 6-Project Museum + 360° keyboard yaw

Status: **APPROVED + MERGED**

Protected starting baseline: `1d94bad3808e229bbe6d1816f9e802e113ae4c75`

PR: https://github.com/Juanmaes83/PORTAFOLIO-RUBIK-SOTA-MUSEO/pull/5

PR head: `3e161396cdb0a44e5717c5af597756cb8dcde702`

## Mission
Scale the approved two-exhibit Museum Foundation into the complete six-project collection without rewriting the approved movement/focus/panel engine.

## Sources used

### Project source of truth
`sources/01-prompt-museum-genesis.txt`

Phase 4 implements the source requirements that follow the first vertical slice:
- six projects in one principal gallery;
- visited/explored state;
- `0/6` progress;
- final installation activated only at `6/6`;
- About / Contact panel;
- no scores, collectibles or game mechanics.

### Reuse audit — `Juanmaes83/3DArtMuseum`
The repository documents a data-driven gallery approach (`addToLeft`, `addToRight`, `addToFront`, `addToBack`) where artwork placement is parameterized rather than hard-coded as six bespoke scenes.

Translation into Rubik Sota:
- keep one `museumProjects` registry;
- side + z position drives placement;
- one reusable `Artwork` component renders all six works;
- the gallery remains one authored hall, not a maze.

### Design DNA / architecture rules
Preserved:
- warm off-white museum surfaces;
- restrained dark ceiling;
- warm artwork lighting;
- procedural lightweight geometry;
- editorial UI secondary to the spatial experience;
- no sci-fi/neon/game HUD treatment.

## 360° micro-improvement
Keyboard yaw is deliberately added to the existing camera authority rather than creating a second control system.

Mapping:
- `Q` = rotate left;
- `R` = rotate right;
- `E` remains inspect and is never overloaded.

Implementation contract:
- keyboard and mouse mutate the same yaw state;
- yaw is not clamped;
- pitch remains clamped;
- translation is calculated after current yaw is applied;
- focus uses actual current camera direction;
- `/museum/lab` exposes keyboard turn speed.

## Progress / final installation state machine

```text
inspect project
  -> add project id to visited Set
  -> visitedCount = Set.size
  -> progress = visitedCount / 6

visitedCount < 6
  -> final installation dormant

visitedCount == 6
  -> final installation illuminated
  -> final installation becomes focusable
  -> E / click opens About / Contact
```

No backend or analytics is involved in this phase.

## Asset / Higgsfield rule
No Higgsfield credits were spent before the complete interaction model passed technical and manual validation.

The six Phase 4 artworks remain lightweight original procedural compositions. Real project imagery will be generated or integrated only after the interaction baseline is frozen, following `docs/05-HIGGSFIELD-ASSET-GENERATION-PROTOCOL.md` and the maximum-two-generations-per-function rule.

## Acceptance gate — FINAL
- [x] six exhibits render in one gallery;
- [x] all six can be focused and inspected;
- [x] visited state increments once per unique project;
- [x] progress reaches exactly `6 / 6`;
- [x] final installation remains dormant before `6/6`;
- [x] final installation activates at `6/6`;
- [x] About / Contact opens from final installation;
- [x] Q/R can rotate continuously beyond 360°;
- [x] mouse-look and keyboard yaw coexist;
- [x] W/S movement follows new facing direction;
- [x] A/D + arrows retain approved translation semantics;
- [x] E/click inspection does not regress;
- [x] panel close restores control;
- [x] TypeScript passes;
- [x] production build passes;
- [x] `/museum` manual validation passes;
- [x] `/museum/lab` manual validation passes.

Human approval was explicitly given before merge.

## Frozen capability after Phase 4

The following becomes protected baseline for later phases:
- one six-project gallery;
- data-driven project registry;
- movement;
- pointer-lock mouse look;
- keyboard 360° yaw;
- focus;
- E/click inspect;
- visited/progress;
- final installation;
- About/Contact;
- Movement/Focus LAB.

## Explicitly deferred after Phase 4
- final real Rubik Sota project media;
- dedicated mobile museum phase;
- global visual/material uplift;
- semantic landmarks;
- cinematic inspect (implemented later in Phase 5.1);
- PostgreSQL;
- attention engine;
- API;
- stats;
- dashboard.
