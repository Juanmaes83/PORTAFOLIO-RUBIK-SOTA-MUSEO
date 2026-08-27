# LEGACY MUSEUM DONOR — SEMANTIC / KNOWLEDGE ARCHAEOLOGY

**Status:** `APPROVED_AS_KNOWLEDGE / DEFERRED / DO_NOT_IMPLEMENT_NOW`

**Date:** 2026-08-27

**Target future phase:** Phase 5.3 — Semantic Landmark / Interactive Artifact / Knowledge Object System

**Runtime authorization:** **NONE.** This document preserves approved archaeology and future design knowledge only. It does **not** authorize changes to the current museum runtime, PR #9, navigation, scene composition, media system, knowledge adapters, APIs, CMS, Wikipedia/Wikidata/Wikimedia calls, or analytics.

---

## 0. WHY THIS DOCUMENT EXISTS

A Legacy museum reference video supplied during human review showed capabilities that are strategically valuable for the future Rubik Sota Museum, even though its visual skin and likely technical implementation are old.

The important conclusion is:

> **Do not reuse the Legacy PIEL. Recover selected NEURONAS and its content model.**

The reference is important because it proves that the historical project already contained the intent to connect:

```text
COLLECTION
↓
SPATIAL GALLERY
↓
ARTWORK / OBJECT
↓
INSPECTION
↓
INFORMATION / KNOWLEDGE
```

This future direction also connects naturally with the already approved donor `Juanmaes83/3D-room-portofolio`, Hyacinth archaeology, Cinematic Inspect, the Rubik Sota Asset Library, and the deferred institutional Wikipedia/Wikidata/Wikimedia layer.

**Reference evidence:** user-provided video `prueba museo de otros referencia e inspiración.mp4` reviewed in conversation on 2026-08-27. The binary video itself is not committed by this documentation change.

---

# 1. EXECUTIVE VERDICT

The Legacy reference is **high-value for Phase 5.3**, but primarily for information architecture, semantic interaction, collection structure, inspection flow, and knowledge linkage.

Perceived reuse value by capability:

| Capability | Relevance | Future decision |
|---|---:|---|
| Interactive Artifact | 10/10 | PRIMARY concept |
| Collection / Project Registry | 9/10 | PRIMARY concept |
| Knowledge integration | 10/10 | PRIMARY concept |
| Media / artwork inspection | 9/10 | Merge with Cinematic Inspect |
| Lighting per exhibit | 8/10 | Preserve principle, redesign implementation |
| Spatial navigation clarity | 8/10 | Preserve principle |
| Reusable visual design | 3/10 | Do not reuse |
| Architectural visual design | 4/10 | Do not copy |
| Direct technology reuse | UNKNOWN | Video alone does not prove source/runtime suitability |

The Legacy reference should therefore be treated as:

> **CONTENT + SEMANTIC + NAVIGATION DONOR, NOT A VISUAL DONOR.**

---

# 2. CAPABILITIES OBSERVED AND APPROVED FOR FUTURE USE

## 2.1 Collection / artist selector before entering the spatial world

The Legacy flow begins with an index-like selection layer for artists or collections. A selection can expose a card/information layer before entering the gallery.

Future Rubik interpretation:

```text
PORTFOLIO / COLLECTION INDEX
↓
PROJECT / COLLECTION CARD
↓
ENTER EXPERIENCE
↓
SPATIAL WORLD / LANDMARK
```

Possible Rubik portfolio collections:

```text
Creative Direction
Interactive Worlds
AI
Brand
Motion
Experimental
```

Possible institutional reuse:

```text
Dalí
Picasso
Miró
Sorolla
...
```

This is strategically important because it suggests the museum engine can become reusable beyond a single six-project portfolio.

---

## 2.2 Configurable gallery / world template

The Legacy reference demonstrates the idea that one spatial/gallery template can change its identity through content/configuration rather than requiring an entirely new engine for each collection.

Future abstraction:

```text
MuseumWorldTemplate
+
CollectionConfig
+
ExhibitRegistry
+
KnowledgeSourceRegistry
```

The room/world may change:
- title/identity;
- works/projects;
- media;
- descriptions;
- semantic landmark types;
- final identity anchor;
- related knowledge sources.

This aligns with the future CMS/personalization roadmap, but **CMS implementation remains deferred**.

---

## 2.3 Artwork as a semantic interactive object

The Legacy museum treats an artwork as more than decoration: the visitor approaches/selects it and can obtain a larger/detail view and information.

Future Rubik abstraction:

```ts
InteractiveArtifact {
  id
  entityType
  projectId?
  collectionId?
  worldPosition
  interactionRadius
  focusPolicy
  media
  action
  knowledgeSources
  lifecycleState
}
```

Potential `entityType` values must not be limited to `project`:

```text
project
artwork
artifact
sculpture
terminal
maquette
archive
installation
collection
artist
institutional-object
```

This preserves the future institutional direction.

---

## 2.4 Physical artifact → cinematic inspection

The Legacy opens an artwork into a larger inspection/detail layer.

Rubik already has a better technical foundation: **Cinematic Inspect**.

Future evolution:

```text
PHYSICAL 3D LANDMARK
↓
FOCUS
↓
CINEMATIC CAMERA GLIDE
↓
MEDIA STAGE
↓
DETAIL / STORY / PROCESS / KNOWLEDGE
↓
EXACT RETURN TO WORLD
```

Do **not** regress from Cinematic Inspect to a simple legacy popup.

The Legacy contributes the semantic/content intent; Rubik contributes the modern cinematic interaction.

---

## 2.5 External / authoritative knowledge connection

The Legacy reference visibly connects museum content to external informational/knowledge pages.

This validates a historically compatible direction:

```text
ARTWORK
↓
MUSEUM EXPERIENCE
↓
KNOWLEDGE
```

Future Rubik/institutional hierarchy must be:

```text
AUTHOR / CURATOR DATA
PRIMARY
↓
RELATED AUTHORITATIVE KNOWLEDGE
SECONDARY
↓
Wikipedia / Wikidata / Wikimedia
SUPPORT / FALLBACK / CONTEXT
```

This must integrate with the existing deferred institutional architecture:

- `InstitutionalKnowledgeAdapter`
- `CulturalSourceRegistry`
- `ProvenanceAndRightsBlock`

Rules:
- author/curator-controlled content stays PRIMARY;
- Wikipedia is never the sole authority for critical curated content;
- Wikidata can support structured entities/relationships;
- Wikimedia can support media only with rights/provenance validation;
- provenance and licensing remain visible/auditable;
- no live Wikipedia/Wikidata/Wikimedia runtime implementation in the current phase.

---

## 2.6 Strong longitudinal navigation clarity

The Legacy gallery is visually simple, but spatial orientation is immediately understandable:

- clear corridor;
- clear walls;
- clear exhibits;
- clear forward destination.

Future lesson:

> **Semantic Landmarks must increase meaning without reducing spatial legibility.**

Rubik must not become a cluttered object field or game-like maze.

Keep:
- strong direction of travel;
- clear visual hierarchy;
- readable destinations;
- controlled density;
- intentional foreground/midground/background.

---

## 2.7 One exhibit = one lighting intention

The Legacy visibly applies individual lighting pools to artworks.

Future 5.3 principle:

```text
LANDMARK
↓
OWN LIGHT RIG
↓
OWN FOCUS RESPONSE
↓
OWN MEDIA BEHAVIOR
```

This should evolve the current Rubik `RS Track Light` / exhibit-light system rather than reusing the old visual style.

Possible states:

```text
DORMANT
PROXIMITY
FOCUS
READY
INSPECT
RETURN
```

The light rig may respond subtly across these states while avoiding neon/game feedback.

---

## 2.8 Variable exhibit scale and rhythm

The Legacy reference does not force every work into an identical size.

Future Rubik rule:

```text
small artifact
medium display
large hero
vertical work
horizontal cinematic wall
table installation
sculpture
archive
terminal
```

This helps break the repetitive `picture / picture / picture` pattern and directly supports Semantic Landmarks.

---

## 2.9 End wall / destination as identity anchor

The Legacy uses the far end of the gallery as a strong identity destination.

Future Rubik interpretation:

```text
ENTRY
↓
PROJECT / LANDMARK SEQUENCE
↓
HERO IDENTITY ANCHOR
↓
FINAL INSTALLATION
```

The final wall/space should not be dead architecture. It can become collection identity, narrative destination, progress reward, or final semantic landmark.

---

# 3. WHAT MUST NOT BE COPIED FROM LEGACY

## 3.1 Visual skin — reject

Do not recover:
- beige/archive-like interface styling;
- traditional gold-frame identity;
- old dark floor treatment;
- classical gallery styling by default;
- old typography;
- simple legacy modal styling;
- crude circular lighting pools;
- visually flat corridor architecture;
- any element that would regress the current PBR / GLB / IBL / premium direction.

## 3.2 Technical implementation — not approved from video evidence

The video alone does **not** prove that the Legacy implementation is suitable for direct code reuse.

Do not assume/reuse without source archaeology:
- old navigation implementation;
- old raycasting implementation;
- old loading system;
- old popup implementation;
- old routing/external-window logic;
- obsolete libraries/dependencies;
- any hidden backend/API assumptions.

If Legacy source code is located later, it must be audited separately before any reuse decision.

---

# 4. CONNECTION WITH `3D-room-portofolio`

Approved donor:

`Juanmaes83/3D-room-portofolio`

Its strategic contribution is different from Legacy.

## Legacy Museum gives us:

```text
COLLECTION
ENTITY
ARTWORK / PROJECT
INSPECTION
KNOWLEDGE
```

## 3D Room gives us:

```text
PHYSICAL OBJECT
FOCUS / PROXIMITY
SEMANTIC ROLE
ACTION
MEDIA
STATE / LIFECYCLE
```

Previously identified reusable patterns:

### `InteractiveArtifact`
A world object is not decoration; it has a semantic role and a defined action.

### `MediaLifecycleController`
Media should not load/play permanently without context. It follows world state.

Possible lifecycle:

```text
FAR
→ dormant / unloaded

NEAR
→ preload

FOCUS
→ preview ready / subtle response

INSPECT
→ full media active

LEAVE / RETURN
→ pause / release / reset
```

Important protected decision:

> Do not import the full `scene-final.gltf` room as Rubik architecture.

Use 3D Room as a behavior/interaction donor, not as the final Rubik world skin.

---

# 5. CONNECTION WITH HYACINTH

Hyacinth remains a major future donor for authored semantic destinations.

Useful future concepts already identified:
- one authored world containing many meaningful destinations;
- target registry;
- contextual prompts;
- media orchestration;
- spatial staging;
- entry/transition ritual;
- discoverability without excessive HUD.

Do not copy:
- cat/avatar identity;
- circus/world identity;
- third-person default;
- achievements/game mechanics;
- mandatory NPC;
- wholesale physics/plaza environment.

Future fusion:

```text
LEGACY
content + collection + knowledge model

+

3D ROOM
interactive-object neurons + media lifecycle

+

HYACINTH
semantic destination registry + authored spatial staging

+

RUBIK CURRENT BASELINE
premium PIEL + PBR + GLBs + Cinematic Inspect + navigation/progress
```

---

# 6. FUTURE PHASE 5.3 — REDEFINED MISSION

Approved future working title:

# `5.3 — SEMANTIC LANDMARK + KNOWLEDGE OBJECT SYSTEM`

This name is intentionally broader than the earlier `Semantic Landmark` label.

It recognizes four interconnected layers.

---

## LAYER A — Semantic Registry

Every meaningful world object knows what it is.

Example mapping for the current six-project portfolio (illustrative, not runtime-approved yet):

```text
Aviation
→ cinematic media wall

AI Workspace
→ interactive terminal

Fashion
→ physical/spatial installation

Architecture
→ maquette / display table

Creative Coding
→ generative object

Sixth project
→ archive / documents / alternate semantic landmark
```

The exact mapping must be approved before implementation.

---

## LAYER B — InteractiveArtifact

Each landmark can define:
- position;
- orientation;
- focus policy;
- interaction distance;
- semantic role;
- action;
- state;
- media;
- knowledge sources;
- light rig;
- accessibility fallback.

Conceptual contract:

```ts
interface InteractiveArtifact {
  id: string
  entityType: string
  semanticRole: string
  transform: WorldTransform
  focus: FocusPolicy
  action: ArtifactAction
  media?: MediaDescriptor[]
  knowledge?: KnowledgeSourceRef[]
  lifecycle?: LifecyclePolicy
  lightRig?: LightRigPolicy
}
```

This is a future design contract, not current runtime code.

---

## LAYER C — Media Lifecycle

Inspired mainly by `3D-room-portofolio` and compatible with current Cinematic Inspect.

Future desired flow:

```text
FAR
→ dormant

NEAR
→ preload

FOCUS
→ teaser / controlled activation

READY
→ clear interaction affordance

INSPECT
→ full-resolution media / cinematic stage

RETURN
→ pause / cleanup / restore world state
```

Example:

```text
MEDIA WALL
→ proximity wakes display
→ focus starts controlled teaser
→ click/E enters Cinematic Inspect
→ full media plays in ProjectMediaStage
→ return pauses/resets teaser
```

---

## LAYER D — Knowledge Layer

Legacy proves the value of connecting an exhibit to broader knowledge.

Future architecture:

```text
ARTIFACT
↓
CURATED PROJECT / ARTWORK DATA
↓
OPTIONAL RELATED KNOWLEDGE
↓
INSTITUTIONAL ADAPTER
↓
WIKIDATA / WIKIPEDIA / WIKIMEDIA
↓
PROVENANCE + RIGHTS
```

This must remain modular and optional for ordinary portfolio projects.

---

# 7. FUTURE COLLECTION ENGINE OPPORTUNITY

The Legacy reference suggests a larger commercial/product opportunity.

Rubik Sota Museum could eventually evolve from a single portfolio into a reusable museographic engine:

```text
ENGINE
+
COLLECTION CONFIG
+
ENTITY REGISTRY
+
ASSET REGISTRY
+
KNOWLEDGE SOURCES
+
BRAND / MATERIAL DNA
=
NEW MUSEUM / COLLECTION EXPERIENCE
```

Possible use cases:
- Rubik Sota portfolio collections;
- artists;
- galleries;
- museums;
- temporary exhibitions;
- brand archives;
- architecture portfolios;
- cultural institutions.

This is a strategic future direction only. It does not change the current scope.

---

# 8. FUTURE 5.3 ARCHITECTURAL PRINCIPLES

When Phase 5.3 is eventually authorized:

1. Preserve approved movement/navigation neurons.
2. Preserve current premium PIEL unless a specific root cause justifies change.
3. Add semantic capability incrementally.
4. Do not turn the gallery into a maze.
5. Do not turn every object into a clickable gimmick.
6. Every interactive artifact must have a product/content reason.
7. Spatial clarity must remain immediately understandable.
8. Landmark type should follow project/content type, not decorative variety.
9. Media must follow lifecycle rules.
10. Knowledge sources must preserve provenance and authority hierarchy.
11. Cinematic Inspect remains the preferred high-value inspection transition.
12. All new landmarks require LAB + visual/human validation before propagation.

---

# 9. POTENTIAL 5.3 VALIDATION SLICE — FUTURE ONLY

Do **not** build now.

A future minimum slice could test three semantically different artifacts while preserving the other three as approved baseline:

```text
01 CINEMATIC MEDIA WALL
→ proximity wake
→ focus teaser
→ Cinematic Inspect

02 INTERACTIVE TERMINAL
→ dormant UI
→ focus activation
→ inspect/details

03 MAQUETTE / DISPLAY TABLE
→ physical 3D object
→ layer/light response
→ inspect/project story
```

Validation questions:
- Does each object clearly communicate a different semantic role?
- Does the visitor still understand where to go?
- Is interaction discoverable without game HUD?
- Does media load/play only when useful?
- Does the landmark improve the project story?
- Does the world remain premium and coherent?
- Does Cinematic Inspect still return exactly?
- Can the same registry support an artwork/institutional entity later?

---

# 10. RELATIONSHIP TO CURRENT WORK

Current active visual work and future semantic work must remain separated.

```text
CURRENT
5.2R+ / PASS 2
premium visual consolidation
asset correction
architecture / lighting / focus

NOT NOW
5.3
semantic landmarks
interactive artifact registry
media lifecycle expansion
collection registry
knowledge adapters
Wikipedia/Wikidata/Wikimedia
CMS
```

**Do not use this document as authorization to modify PR #9 runtime.**

---

# 11. DECISION FREEZE

The following knowledge is now approved and preserved:

- Legacy Museum is a high-value semantic/content donor.
- Its PIEL is not approved for reuse.
- `InteractiveArtifact` is a future core abstraction.
- `MediaLifecycleController` remains a future core pattern from 3D Room.
- Collection/Project Registry is valuable.
- Configurable gallery/world templates are valuable.
- Individual landmark light rigs are valuable.
- Variable exhibit scale is valuable.
- End-wall/final destination identity is valuable.
- Cinematic Inspect should modernize Legacy inspection behavior.
- Institutional Knowledge Layer is strategically compatible with Legacy intent.
- Wikipedia/Wikidata/Wikimedia remain secondary/support sources behind curated content.
- Legacy + 3D Room + Hyacinth + current Rubik premium baseline is the intended future donor fusion.
- Phase 5.3 is redefined conceptually as `Semantic Landmark + Knowledge Object System`.
- **Implementation is explicitly deferred until separately approved.**

---

# 12. ONE-SENTENCE FUTURE ARCHITECTURE

> **A curated semantic entity becomes a physical 3D landmark, gains proximity/focus/action/media state, opens through Cinematic Inspect, and can optionally connect to authoritative external knowledge without sacrificing the premium Rubik Sota spatial experience.**
