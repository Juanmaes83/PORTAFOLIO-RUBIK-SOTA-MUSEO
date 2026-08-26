# 01 — Pear Audit

Reference: https://pear.no/
Audit date: 2026-08-26
Purpose: extract principles, not copy layout or branding.

## What we are borrowing as design principles

### 1. Editorial scale contrast
Pear uses extremely large typographic statements and very compressed supporting copy. The hierarchy is carried primarily by scale and isolation, not by cards or decorative UI.

Rubik Sota translation:
- one dominant sentence/idea per beat;
- large display type with controlled tracking;
- secondary metadata stays small and quiet;
- avoid dashboard-like cards in the cinematic entry.

### 2. Chapter-based narrative
The current Pear page exposes chapter navigation (`The Model`, `The Work`, `The Terms`, `Questions`) and sequences its argument as a progression rather than a conventional feature grid.

Rubik Sota translation:
- the scroll intro is a sequence of authored beats;
- each beat has a clear narrative job;
- the user should feel movement through a story, not movement between unrelated sections.

### 3. Dense ideas, sparse surface
Pear communicates substantial positioning with a visually restrained surface. Large areas of negative space make each message feel intentional.

Rubik Sota translation:
- no decorative clutter;
- no generic gradient-card system;
- negative space is an active pacing tool;
- text only appears when the moving image gives it a reason to exist.

### 4. Continuous flow instead of slide jumps
The desired inspiration is the feeling of one continuous editorial surface. Rubik Sota must not implement page-sized snap sections that feel like disconnected slides.

Rubik Sota translation:
- one normalized scroll progress authority;
- smooth scrubbed media progression;
- copy cues overlap slightly through controlled enter/hold/exit windows;
- no hard section snapping in the cinematic sequence.

## What we explicitly do NOT copy

- Pear identity, name, messaging or wording;
- exact typeface;
- exact layout coordinates;
- exact colors;
- navigation labels;
- transitions as a 1:1 reproduction;
- any proprietary assets.

## New direction for Rubik Sota

Pear provides the editorial discipline. The Museum sources provide the product identity.

The new visual metaphor is:

`EDITORIAL FILM → THRESHOLD → MUSEUM SPACE`

The cinematic scroll is the foyer. The 3D museum is the portfolio.

## Rhythm targets

- Hero/intro copy: very large, low word count.
- Scene cue copy: 3–12 words headline + optional one-line support.
- Section gaps after cinematic intro: generous, but variable rather than mechanically equal.
- Motion: cinematic and damped, never bouncy.
- Typography transitions: clip/mask, line reveal, small vertical translation, controlled opacity.

## Motion rules

1. Scroll drives a normalized progress value `0..1`.
2. That progress drives video time.
3. The same progress selects and interpolates editorial copy states.
4. Text must never run on an independent autoplay timeline.
5. Reverse scroll must reverse both media and text choreography.
6. Reduced-motion mode must switch to a readable, non-scrubbed sequence.

## Mobile translation

Mobile is not a scaled desktop.

Desktop:
- long sticky cinematic viewport;
- precise scrub;
- large edge-to-edge display typography;
- transition into the 3D museum experience.

Mobile:
- shorter scroll range;
- lower scrub update frequency / less aggressive smoothing;
- smaller number of simultaneous effects;
- copy moves into safe readable zones;
- museum may route to the designed 2D fallback defined in the Museum sources.

## Acceptance statement

A successful result may remind a viewer of Pear's editorial confidence and continuous pacing, but must be unmistakably a Rubik Sota museum portfolio rather than a Pear clone.
