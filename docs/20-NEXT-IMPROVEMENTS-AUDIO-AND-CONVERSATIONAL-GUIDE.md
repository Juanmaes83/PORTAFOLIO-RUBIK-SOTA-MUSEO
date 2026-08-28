# 20 — NEXT IMPROVEMENTS: MUSEUM AUDIO + CONVERSATIONAL GUIDE

Status: **APPROVED AS NEXT IMPROVEMENTS / NOT IMPLEMENTED YET**  
Date: **2026-08-28**

This document freezes two newly approved product directions for the Rubik Sota Museum. It is a planning/architecture document only. It does **not** authorize runtime implementation until an explicit implementation plan is approved.

---

# 1. EXECUTIVE DECISION

The next two improvements to add to the museum roadmap are:

1. **Museum Audio System**
2. **Conversational Museum Guide Pilot**

They must be treated as two separate stones, with separate LABs and human validation.

Core rule:

> Audio and guide intelligence must enrich the museum without turning it into a noisy multimedia player or a generic chatbot/game NPC.

---

# 2. IMPROVEMENT A — MUSEUM AUDIO SYSTEM

## 2.1 Goal

Create one coherent audio authority for the museum supporting several mutually exclusive user modes.

Allowed user-facing modes:

```text
SILENCE
or
AUDIOGUIDE
or
MUSIC
or
RADIO
```

Only **one mode may be active at a time**.

The system must never allow uncontrolled overlapping audio sources.

## 2.2 Proposed runtime authority

Create a single controller:

`MuseumAudioController`

Do not scatter independent `<audio>` elements across scene components.

Suggested states:

```text
idle
ambient
narrating
ducked
project-media
muted
```

## 2.3 Priority / ducking rules

Expected authority order:

```text
PROJECT MEDIA / GUIDE SPEECH
        ↓ highest priority
AUDIOGUIDE
        ↓
AMBIENT MUSIC / RADIO
        ↓
SILENCE
```

Examples:
- when audioguide narration starts, music/radio ducks;
- when guide avatar speaks, background music/radio ducks;
- when project media owns audio during Cinematic Inspect, ambient sound yields;
- when narration ends, ambient level restores smoothly;
- Silence mutes all museum-controlled audio.

## 2.4 Landmark connection

Audio must use the existing semantic object architecture.

Conceptual flow:

```text
SEMANTIC LANDMARK
→ focus / inspect
→ optional audio action
→ MuseumAudioController
```

Possible future per-landmark declaration:

```ts
audio: {
  guide?: "/audio/architecture-guide.mp3",
  ambientCue?: "architecture",
  duckAmbient: true,
}
```

Do not auto-play full audioguide narration merely because a visitor passes near a landmark.

Preferred UX:

```text
FOCUS LANDMARK
→ LISTEN available
→ explicit user activation
```

## 2.5 Audio modes

### Audioguide
Contextual narration linked to project / landmark.

### Music
Curated continuous museum soundtrack / hilo musical.

### Radio
Optional curated Rubik Sota Radio concept. Must remain mutually exclusive with Music and Audioguide mode.

### Silence
Full user-controlled mute state.

## 2.6 Audio LAB

Future route:

`/museum/audio-lab`

Minimum validation:
- switch between modes;
- confirm only one active mode;
- mute/unmute;
- ducking during narration;
- restore ambient level after narration;
- enter/leave Cinematic Inspect;
- one audioguide sample;
- one ambient music sample;
- no duplicate playback after repeated inspect/open/close cycles.

## 2.7 Explicitly NOT NOW

Do not implement yet:
- spatial multi-speaker simulation;
- multiple simultaneous radio/music streams;
- autonomous soundtrack composition;
- automatic narration on every proximity event;
- complex binaural soundscape unless separately approved.

---

# 3. IMPROVEMENT B — CONVERSATIONAL MUSEUM GUIDE PILOT

## 3.1 Goal

Add an embodied or semi-embodied museum guide that can answer visitor questions using current museum context.

The guide must not be a generic chatbot.

It should know at minimum:
- current project / landmark;
- focused artifact;
- visited projects;
- progress;
- whether the visitor is inspecting a project;
- museum-approved content available for that project.

## 3.2 Proposed context contract

Conceptual type:

```ts
type MuseumGuideContext = {
  currentProjectId?: string;
  focusedArtifactId?: string;
  currentPosition: [number, number, number];
  visitedProjectIds: string[];
  progress: number;
  inspectState: boolean;
};
```

The context builder should consume existing museum state rather than creating parallel truth.

## 3.3 Guide architecture

```text
MUSEUM STATE
→ GUIDE CONTEXT BUILDER
→ GUIDE INTELLIGENCE
→ RESPONSE
→ TEXT + VOICE
→ AVATAR PRESENTATION
```

Future intelligence must respect a source hierarchy:

```text
1. Rubik Sota curated project content
2. museum/project metadata
3. approved museum knowledge layer
4. optional institutional/external enrichment
```

The guide must not invent facts about a project when source content is missing.

## 3.4 Pilot scope — Guide A

The first pilot should be intentionally constrained:
- fixed or semi-fixed guide presence;
- no autonomous walking;
- text question input;
- contextual text answer;
- voice output;
- restrained avatar animation;
- optional simple lip-sync;
- contextual questions tied to the current landmark.

Example questions:
- "What am I looking at?"
- "Explain this project."
- "What technology was used here?"
- "What have I not seen yet?"
- "What should I see next?"

## 3.5 Future Guide B

Only after Guide A is approved:
- voice input / speech-to-text;
- museum commands;
- recommend next landmark;
- activate audioguide;
- lower/mute music;
- highlight or point toward a destination;
- navigation intent such as "take me to the AI project".

## 3.6 Future Guide C — optional embodied locomotion

Do **not** begin with a fully autonomous walking NPC.

That later option would require:
- navmesh;
- pathfinding;
- collision/avoidance;
- locomotion animation state machine;
- turn-in-place;
- gaze behavior;
- idle behavior;
- destination synchronization;
- conversation/animation synchronization.

This is explicitly deferred until the conversational value is proven.

## 3.7 Avatar visual principle

Preferred first direction:

> **Museum guide, not game character.**

Avoid an uncanny hyperreal NPC as the first stone.

Prefer:
- elegant editorial human figure;
- restrained movement;
- premium Rubik Sota visual language;
- minimal idle animation;
- no constant wandering;
- no game HUD presentation.

## 3.8 Guide LAB

Future route:

`/museum/guide-lab`

Minimum validation:
- ask by text;
- answer references current landmark correctly;
- answer changes when current landmark changes;
- visited/progress context works;
- voice output plays through MuseumAudioController;
- background audio ducks while guide speaks;
- guide does not claim unsupported project facts;
- no conflict with Cinematic Inspect or pointer-lock controls.

---

# 4. AUDIO + GUIDE SHARED AUTHORITY

The guide must **not** create its own independent audio stack.

Required relationship:

```text
MuseumGuideController
        ↓ speech request
MuseumAudioController
        ↓
duck ambient
play guide voice
restore ambient
```

This avoids competing audio ownership.

---

# 5. RECOMMENDED ORDER

These improvements should be approached sequentially:

```text
A. MUSEUM AUDIO SYSTEM
   → controller
   → one-active-mode rule
   → ducking
   → landmark hooks
   → /museum/audio-lab
   → human approval

B. CONVERSATIONAL MUSEUM GUIDE PILOT
   → guide context builder
   → text conversation
   → fixed/semi-fixed avatar
   → voice output through audio controller
   → /museum/guide-lab
   → human approval

C. OPTIONAL GUIDE EXPANSION
   → voice input
   → museum commands
   → destination guidance
   → only later consider embodied locomotion
```

---

# 6. ACCEPTANCE PRINCIPLES

## Audio
- one active mode only;
- no accidental overlaps;
- smooth ducking/restoration;
- no autoplay abuse;
- no duplicated playback after repeated interactions;
- respects Cinematic Inspect media ownership;
- explicit mute/silence always available.

## Guide
- contextual, not generic;
- answers only from available/approved knowledge;
- knows focused/visited/progress state;
- does not interfere with navigation;
- voice integrates through MuseumAudioController;
- avatar remains visually premium and restrained;
- no autonomous locomotion in first pilot.

---

# 7. STATUS FREEZE

As of 2026-08-28:

```text
MUSEUM AUDIO SYSTEM                 APPROVED AS NEXT IMPROVEMENT / NOT IMPLEMENTED
CONVERSATIONAL MUSEUM GUIDE PILOT  APPROVED AS NEXT IMPROVEMENT / NOT IMPLEMENTED
FULL WALKING GUIDE / NPC            DEFERRED
```

This document is a roadmap decision record only. Implementation requires a separate approved execution plan before touching runtime.
