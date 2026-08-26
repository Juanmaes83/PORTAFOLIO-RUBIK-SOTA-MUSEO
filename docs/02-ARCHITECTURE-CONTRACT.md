# 02 — Architecture Contract

Status: FROZEN FOR V1 SLICE

## Product thesis

Rubik Sota Portfolio Museum is not a game and not a generic portfolio landing page.

It is a premium editorial web experience with two coordinated modes:

1. **Editorial Foyer** — cinematic scroll-controlled video + typography.
2. **Museum** — interactive 3D portfolio exploration.

Pear influences the editorial pacing only. The three Museum sources define the museum product DNA.

## Non-negotiable separation

### ADN
- premium portfolio expressed as a museum;
- one principal gallery, not a maze;
- project focus by distance + facing;
- E/click inspect;
- project information panel;
- progress through projects;
- final contact/featured installation;
- mobile gets an intentional 2D fallback.

### NEURONAS / ENGINE
- scroll progress authority;
- video scrub controller;
- copy cue state machine;
- transition/threshold controller;
- museum movement/camera;
- collision/bounds;
- artwork focus/interaction;
- visited state;
- later: attention analytics/API/database.

### PIEL
- typography;
- colors;
- spacing;
- lighting;
- frames/plaques;
- editorial composition;
- transitions;
- material treatment.

The PIEL may evolve without rewriting the ADN or NEURONAS.

## V1 route/experience model

`/` contains the Editorial Foyer and the first museum threshold.

For this first vertical slice the museum threshold is represented by a designed portal state, not yet the full 3D gallery. The purpose is to validate scroll/media/copy choreography before multiplying scope.

## Master timeline contract

One authoritative normalized value:

`progress ∈ [0, 1]`

Derived values:

- `videoTime = progress * videoDuration`
- `activeCue = cueMap(progress)`
- `copyEnter/hold/exit = cue-local progress`
- `visualTone = scene interpolation(progress)`
- `portalReadiness = threshold(progress)`

Forbidden:

- independent autoplay copy timelines;
- separate scroll trackers competing for authority;
- `setInterval`-driven media progression;
- hard page-snap transitions during the cinematic sequence;
- client requests from animation/render loops.

## Scroll engine

The cinematic section is tall (`~500vh` desktop, shorter mobile). A viewport-height stage remains sticky while scroll position advances the normalized timeline.

Pipeline:

`scrollTop → targetProgress → dampedProgress → video.currentTime + cue state + CSS vars`

Use `requestAnimationFrame` to damp toward target progress. Update `video.currentTime` only when media metadata exists.

## Cue model

Each cue owns:

- `id`
- `start`
- `peak`
- `end`
- `eyebrow`
- `headline`
- `body` (optional)
- layout zone

A cue is not simply visible/hidden. It has an enter, hold and exit window so neighboring messages can transition without abrupt jumps.

## Missing media behavior

Canonical production asset:

`public/media/rubik-sota-master.mp4`

Runtime URL:

`/media/rubik-sota-master.mp4`

If absent:

- app remains functional;
- timeline proxy remains visible;
- `MEDIA PENDING` development badge appears;
- no fake video is loaded from an external source;
- copy choreography remains testable.

## Desktop

- sticky full-viewport cinematic stage;
- precise reversible scrub;
- oversized editorial type;
- restrained chapter/progress UI;
- transition to museum threshold;
- future museum uses first-person WASD/mouse.

## Mobile

Not a shrink of desktop:

- shorter scroll runway;
- less smoothing latency;
- smaller display type and safe zones;
- fewer simultaneous parallax layers;
- no forced WASD museum;
- future museum becomes intentional 2D gallery/cards sharing project data and panels.

## Accessibility / resilience

- `prefers-reduced-motion`: no forced scrub; use readable sequential/sticky-light presentation.
- video is muted and `playsInline`; playback is controlled by time, not autoplay.
- no interaction is blocked if video fails.
- semantic headings and readable contrast remain available.

## Performance budget for V1

- no Three.js in the foyer slice yet;
- no shader dependency;
- no post-processing;
- one video element maximum;
- DOM transforms/opacity/clip only;
- `requestAnimationFrame` controller only while page is visible;
- avoid layout reads inside the update loop except cached geometry refreshed on resize.

## First vertical slice acceptance gate

The slice is accepted only when:

1. scroll forward advances normalized progress;
2. scroll backward reverses it;
3. video time follows progress when a real asset exists;
4. missing video does not break experience;
5. three scene-specific copy cues enter/hold/exit from the same progress value;
6. no abrupt section snaps;
7. desktop and mobile have different tuned layouts;
8. reduced-motion fallback exists;
9. build succeeds;
10. browser validation remains a separate required gate before merge.

## Deferred until this gate passes

- full 3D museum;
- six real projects;
- project panels;
- progress 0/6;
- final installation;
- PostgreSQL;
- attention tracking;
- stats/dashboard.

This deferral is deliberate scope control, not missing product intent.
