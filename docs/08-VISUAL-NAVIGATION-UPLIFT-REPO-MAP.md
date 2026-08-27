# Visual + Navigation Uplift — Donor Repo Map

Baseline after approved Phase 4 merge: `8545af4a881ee5a87fd9901704b6bf3143970f93`.

## Decision

The next phase is NOT CMS/backend/personal-content ingestion.

The project already has enough functional scaffolding to prove the architecture. The current priority is to raise the visual, spatial and navigational quality of BOTH:

1. the cinematic landing / portfolio entrance;
2. the 3D museum experience.

The content management panel is deferred. When the project reaches the content-integration phase, reuse the existing Escaparates Pro administration patterns to support text, image and video upload/save/preview instead of inventing a new CMS from zero.

---

## PRIMARY DONORS — MUSEUM / SPATIAL PORTFOLIO

### 1. `Juanmaes83/3D-room-portofolio`
https://github.com/Juanmaes83/3D-room-portofolio

Why it matters:
- personal Three.js + Blender portfolio;
- most room objects are interactive by click/hover;
- demonstrates portfolio information attached to authored physical objects rather than only wall frames;
- useful for richer museum object language, object affordances and interaction discovery.

Reuse target:
- interaction grammar;
- object-based storytelling;
- hover/click affordances;
- environmental portfolio semantics.

Do NOT copy its room literally. Translate the interaction grammar into Rubik Sota museum language.

### 2. `Juanmaes83/hyacinth.im-site`
https://github.com/Juanmaes83/hyacinth.im-site

Why it matters:
- explorable 3D portfolio plaza;
- authored low-poly/picture-book world;
- character-driven navigation;
- work boards open project pages with compressed MP4 playback;
- circus cinema acts as a screening room;
- guide character, radio, shop, social sculptures and biographical fragments turn the portfolio into a world;
- mobile controls and compact modal variants are deliberately designed;
- large media is loaded only when an interaction requires it.

Reuse target:
- cinematic/world navigation;
- environmental storytelling;
- authored destinations instead of generic hallway repetition;
- media-on-demand strategy;
- project modality;
- discovery cues;
- world-scale composition and memorable landmarks.

Do NOT turn Rubik Sota into a game or copy the cat/circus identity. Reuse the principles: landmarks, destinations, interaction choreography, discovery and authored traversal.

### 3. `Juanmaes83/galerium`
https://github.com/Juanmaes83/galerium

Why it matters:
- browser-based museum with a zoomable constellation/timeline entry;
- first-person gallery per artist;
- physically based materials, spotlights, reflective floors and wall labels;
- click painting -> camera glides into a close-up inspect view;
- desktop and touch navigation schemes differ intentionally.

Reuse target:
- camera glide to artwork;
- inspection choreography;
- museum material/lighting hierarchy;
- desktop/mobile interaction split;
- transition from overview/interface to spatial gallery.

### 4. `Juanmaes83/3D-art-gallery-threejs`
https://github.com/Juanmaes83/3D-art-gallery-threejs

Why it matters:
- focused interactive Three.js art gallery implementation;
- useful reference for realistic gallery materials, lighting, floor/ceiling/wall treatment and asset-performance trade-offs.

Reuse target:
- lighting/material study;
- gallery scale;
- texture budget and performance lessons.

### 5. `Juanmaes83/3DArtMuseum`
https://github.com/Juanmaes83/3DArtMuseum

Why it matters:
- data-driven artwork placement on left/right/front/back surfaces;
- already used in Phase 4 as an architectural donor.

Reuse target:
- keep exhibit content data-driven and independent from scene composition.

---

## PRIMARY DONORS — LANDING / CINEMATIC NAVIGATION

### 6. `Juanmaes83/scroll-cinematic-claude`
https://github.com/Juanmaes83/scroll-cinematic-claude

Why it matters:
- explicit cinematic scroll pipeline;
- Higgsfield hero + clips -> extracted frames -> canvas scroll scrub;
- forward/back scrub naturally follows scroll;
- includes a React/Next drop-in and compression tooling.

Reuse target:
- real visual media replacing current abstract proxy;
- scroll-frame strategy where appropriate;
- Higgsfield asset pipeline;
- compression/performance workflow.

Constraint:
- follow Rubik Sota Higgsfield protocol: max 2 generations per visual function; prefer 1.

### 7. `Juanmaes83/V1pEr---Scroll-Portfolio`
https://github.com/Juanmaes83/V1pEr---Scroll-Portfolio

Why it matters:
- React + Three.js + GSAP cinematic portfolio;
- seamless transitions between 3D scenes;
- 3D project carousel;
- scroll journey through an authored 3D environment;
- performance-oriented motion architecture.

Reuse target:
- transitions between chapters;
- spatial project navigation patterns;
- GSAP/ScrollTrigger timing ideas;
- richer movement between editorial states.

Do NOT reuse its cyberpunk identity.

### 8. `Juanmaes83/portfolio-HAMISH-HMW`
https://github.com/Juanmaes83/portfolio-HAMISH-HMW

Why it matters:
- real design portfolio using Remix + Three.js + Framer Motion;
- polished component-level approach;
- Storybook exists for interaction/component isolation.

Reuse target:
- premium portfolio UI discipline;
- 2D/3D relationship;
- component polish;
- transitions and project presentation.

### 9. `Juanmaes83/3D-sky-island-portfolio-threejs-react`
https://github.com/Juanmaes83/3D-sky-island-portfolio-threejs-react

Why it matters:
- authored 3D portfolio world rather than generic project cards;
- useful as a composition/worldbuilding reference.

Reuse target:
- environment as navigation;
- memorable spatial silhouette;
- project-world composition.

---

## SUPPORT DONORS

### `Juanmaes83/island`
https://github.com/Juanmaes83/island

2.5D Three.js interactive resume world with character movement, proximity dialogs, day/night mode, mobile-first controls and world-based project/skill presentation.

Useful for:
- proximity interaction;
- mobile traversal ideas;
- dialogue/overlay choreography;
- stateful environmental storytelling.

Avoid importing collectible/achievement game mechanics into Rubik Sota.

### `Juanmaes83/visitor-locomotion-immersive-worlds`
https://github.com/Juanmaes83/visitor-locomotion-immersive-worlds

This is the isolated R&D home for Visitor Presence / locomotion. Treat as research donor only unless explicitly promoted later.

Useful for:
- future locomotion/presence research;
- regression-safe experimentation outside production museum.

---

# NEXT PHASE — VISUAL + NAVIGATION UPLIFT

## Objective

Transform the already-functional portfolio + museum from a technically correct foundation into an authored premium experience.

### LANDING
- replace abstract/proxy visual language with real cinematic media;
- develop an actual visual narrative, not only typography over gradients;
- stronger scene-to-scene transitions;
- intentional camera/motion language;
- richer project foreshadowing before museum entry;
- preserve one master scroll authority.

### MUSEUM
- move beyond repeated flat wall frames;
- create landmarks, authored zones and environmental storytelling while preserving one principal gallery concept;
- introduce richer object-based project touchpoints where justified;
- improve materiality, lighting, depth, silhouette and focal hierarchy;
- improve interaction choreography: approach -> focus -> camera/visual response -> inspect -> return;
- use media only when it increases project understanding;
- preserve approved movement/focus/progress/panel state engine.

## Explicitly deferred
- CMS/admin panel integration;
- own-project upload/save system;
- PostgreSQL;
- analytics/attention engine;
- stats/dashboard.

## Future CMS contract
When activated later, the authoring panel must at minimum support:
- create/edit/delete project;
- title and structured text;
- images;
- video;
- preview;
- save/publish state;
- ordering/placement;
- mapping a project to its museum exhibit / landing representation.

Escaparates Pro is the primary donor for this future panel.

## Rule

`FUNCTIONAL BASELINE + VISUAL/NAVIGATION CAPABILITY`, never a rebuild from zero.
