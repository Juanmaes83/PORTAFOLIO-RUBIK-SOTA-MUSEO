# Phase 4 — Full 6-Project Museum + 360° keyboard yaw

Baseline: `1d94bad3808e229bbe6d1816f9e802e113ae4c75`

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

Mapping for Phase 4 validation:
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
No Higgsfield credits are spent before the complete interaction model passes technical and manual validation.

The six Phase 4 artworks remain lightweight original procedural compositions. Real project imagery will be generated or integrated only after the interaction baseline is frozen, following `docs/05-HIGGSFIELD-ASSET-GENERATION-PROTOCOL.md` and the maximum-two-generations-per-function rule.

## Acceptance gate
- [ ] six exhibits render in one gallery;
- [ ] all six can be focused and inspected;
- [ ] visited state increments once per unique project;
- [ ] progress reaches exactly `6 / 6`;
- [ ] final installation remains dormant before `6/6`;
- [ ] final installation activates at `6/6`;
- [ ] About / Contact opens from final installation;
- [ ] Q/R can rotate continuously beyond 360°;
- [ ] mouse-look and keyboard yaw coexist;
- [ ] W/S movement follows new facing direction;
- [ ] A/D + arrows retain approved translation semantics;
- [ ] E/click inspection does not regress;
- [ ] panel close restores control;
- [ ] TypeScript passes;
- [ ] production build passes;
- [ ] `/museum` manual validation passes;
- [ ] `/museum/lab` manual validation passes.

## Explicitly deferred
- final real Rubik Sota project media;
- dedicated mobile museum phase;
- PostgreSQL;
- attention engine;
- API;
- stats;
- dashboard.
