# RUBIK SOTA — PORTFOLIO MUSEUM

> **Un portfolio editorial premium que utiliza una narrativa cinematográfica como entrada y un museo 3D navegable como interfaz central.**

Este repositorio es la base oficial de **RUBIK SOTA — PORTFOLIO MUSEUM**.

## AI / DEVELOPER START HERE

Si eres una IA, desarrollador o colaborador nuevo, lee primero:

1. [`AI-START-HERE.md`](./AI-START-HERE.md)
2. [`docs/18-CURRENT-ROADMAP-AND-BRANCH-STATE.md`](./docs/18-CURRENT-ROADMAP-AND-BRANCH-STATE.md) — **estado operativo actual**
3. [`docs/13-MASTER-REBUILD-FROM-ZERO-PHASES-1-5.md`](./docs/13-MASTER-REBUILD-FROM-ZERO-PHASES-1-5.md) — reconstrucción/histórico
4. las tres fuentes en `/sources`;
5. [`docs/02-ARCHITECTURE-CONTRACT.md`](./docs/02-ARCHITECTURE-CONTRACT.md)
6. [`design/rubik-sota-museum-dna.json`](./design/rubik-sota-museum-dna.json)
7. [`docs/03-VALIDATION-STATUS.md`](./docs/03-VALIDATION-STATUS.md)
8. [`docs/14-RUBIK-SOTA-ASSET-LIBRARY-MASTER.md`](./docs/14-RUBIK-SOTA-ASSET-LIBRARY-MASTER.md) y [`public/assets/museum/`](./public/assets/museum/) antes de cualquier uplift de materiales/GLB/HDRI.

No modifiques runtime antes de entender **ADN / NEURONAS / PIEL** y la regla de baseline protegida.

---

# PRODUCTO

No estamos construyendo un videojuego ni una landing genérica.

La experiencia completa es:

```text
EDITORIAL ENTRY / CINEMATIC SCROLL
        ↓
VIDEO SCRUB + TYPOGRAPHIC NARRATIVE
        ↓
TRANSITION / ENTER THE MUSEUM
        ↓
3D PORTFOLIO MUSEUM
        ↓
PROJECT EXPLORATION
        ↓
CINEMATIC PROJECT INSPECTION
        ↓
PROGRESS 0/6 → 6/6
        ↓
FINAL INSTALLATION
        ↓
ABOUT / CONTACT
```

Debe sentirse:
- premium;
- editorial;
- cinematográfica;
- elegante;
- minimalista;
- fluida;
- original;
- técnicamente sólida;
- memorable.

No debe sentirse:
- como SaaS genérico;
- como videojuego infantil;
- como sci-fi/neón por defecto;
- como demo WebGL sin dirección artística;
- como copia literal de otra web;
- como museo-laberinto.

---

# 3 FUENTES DE VERDAD

Leer siempre antes de cambios estructurales:

## 01 — Genesis / Frontend Museum
`sources/01-prompt-museum-genesis.txt`

Define:
- Next.js + TypeScript + React;
- Three.js + React Three Fiber + drei;
- una galería principal;
- WASD/flechas + ratón;
- focus por proximidad + mirada;
- E/click;
- paneles;
- progreso;
- final installation/contact;
- mobile 2D fallback.

## 02 — Safe Evolution / Analytics
`sources/02-prompt-museum-evolution-analytics.txt`

Regla central:

> **Nueva versión = baseline aprobada + capacidad nueva. Nunca reescribir lo aprobado sin causa raíz demostrada.**

Backend/analytics se añaden después de estabilizar y aprobar visualmente el frontend.

## 03 — Reconstruction Analysis
`sources/03-analysis-video-museum-claude-abacus.md`

Orden heredado:

```text
CONCEPTO
→ PROMPT TÉCNICO
→ FRONTEND 3D
→ PRUEBA
→ BASELINE APROBADA
→ BACKEND / ANALYTICS
→ DASHBOARD
→ VALIDACIÓN
```

---

# ADN / NEURONAS / PIEL

## ADN
No negociable:
- portfolio premium;
- landing cinematográfica;
- museo como interfaz;
- una galería principal;
- focus proximidad + gaze;
- inspección;
- seis proyectos;
- progress;
- final/contact;
- desktop/mobile intencionales;
- validación humana.

## NEURONAS
Motor aprobado actualmente:
- scroll authority;
- video scrub;
- camera;
- movement;
- bounds;
- mouse-look;
- Q/R keyboard yaw;
- semantic focus/raycast;
- direct artwork click;
- `InteractiveArtifact` registry;
- project state;
- visited/progress;
- cinematic inspect;
- pointer-lock restore;
- Media Lifecycle `dormant → preload → preview → inspect → reset/release`;
- future analytics/API/persistence.

## PIEL
Reemplazable/evolutiva:
- tipografía;
- color;
- materiales;
- iluminación;
- arquitectura visual;
- project supports / semantic landmarks;
- composición;
- UI;
- transiciones;
- media presentation.

La PIEL puede cambiar sin destruir ADN ni NEURONAS.

---

# ESTADO REAL — 27 AUG 2026

Current `main`:

`32d554fca07254010829bfc8d712be86879b20ce`

No hay PRs abiertas en el momento de esta actualización. La auditoría de ramas confirma que las ramas feature retenidas están **0 commits ahead de `main`**; no existe trabajo aprobado varado fuera de `main`.

Fuente exacta de topología:

[`docs/18-CURRENT-ROADMAP-AND-BRANCH-STATE.md`](./docs/18-CURRENT-ROADMAP-AND-BRANCH-STATE.md)

## FASE 1 — Foundation / First Vertical Slice
**APPROVED + MERGED**

PR #1.

Incluye Asset Inventory, Pear audit, Design DNA, Architecture Contract, ScrollFilm, normalized master scroll progress, reversible media/copy timeline, `/lab` y explicit missing-media proxy.

## FASE 2 — Cinematic Landing
**APPROVED + MERGED**

PR #2.

Arquitectura/narrativa aprobada. Su PIEL visual final sigue pendiente del uplift posterior.

## FASE 3 — Museum Foundation
**APPROVED + MERGED**

PR #3.

Incluye `/museum`, `/museum/lab`, one-gallery R3F scene, WASD/arrows, pointer-lock mouse-look, bounds, focus, E/click inspect y mobile 2D foundation.

## FASE 4 — Full 6-Project Museum + 360° keyboard yaw
**APPROVED + MERGED**

PR #5.

Incluye seis proyectos data-driven, visited Set, 0/6 progress, final unlock, About/Contact y Q/R continuous yaw.

## FASE 5 — Visual + Navigation Uplift
**IN PROGRESS**

### 5.1 — Cinematic Inspect Stone
**APPROVED + MERGED** — PR #6

Incluye `CinematicInspectRig`, exact pose capture, glide-in/out, `ProjectMediaStage`, exact camera return, yaw/pitch resync y `/museum/inspect-lab`.

### 5.2 — Material + Atmosphere Stone
**APPROVED + MERGED** — PR #7

Incluye Material/Light stone y `/museum/material-lab`.

### 5.2R / 5.2R+ — Visual Recovery + Premium Consolidation
**APPROVED + MERGED** — PR #9

PASS 2 consolidó:
- PBR/IBL/HDRI;
- premium architecture/ceiling;
- corrected track lighting;
- clean seating;
- RS Wall Frame family;
- RS Pedestal family;
- Media Wall V2;
- Display / Maquette Table V1;
- Entrance Portal V2;
- Rubik System 02;
- Final Installation V2.

### 5.3A — Semantic Artifacts + Direct Artwork Click
**APPROVED + MERGED** — PR #10

Incluye:
- `InteractiveArtifact`;
- explicit world anchors;
- semantic interaction surfaces independent from PIEL;
- center-camera raycast;
- direct pointer click;
- E/click → actual artifact → Cinematic Inspect;
- `/museum/artifact-lab`.

### 5.3B — Media Lifecycle + Semantic Landmark Behavior
**APPROVED + MERGED** — PR #11

Incluye:

```text
DORMANT
→ PRELOAD
→ PREVIEW
→ INSPECT
→ RESET / RELEASE
```

Añade resource priming/release y `/museum/lifecycle-lab` sin inventar media real inexistente.

### 5.3 — Semantic Landmark Stone / visual pilot
**NEXT**

5.3A y 5.3B prepararon las neuronas. Falta demostrar un verdadero destino espacial diferente.

Pilot seleccionado:

```text
Immersive Architecture Studio
→ MAQUETTE / OBJECT TABLE
```

Expected LAB:

`/museum/landmark-lab`

Regla: **un solo landmark primero**. No propagar a los seis antes de validación humana.

---

# PRIMARY DONORS PARA FASE 5

Solo estos tres repos están aprobados como donantes principales:

1. https://github.com/Juanmaes83/3D-room-portofolio
2. https://github.com/Juanmaes83/hyacinth.im-site
3. https://github.com/Juanmaes83/galerium

Leer:
- `docs/08-VISUAL-NAVIGATION-UPLIFT-REPO-MAP.md`
- `docs/09-ARCHAEOLOGY-THREE-PRIMARY-DONORS.md`

No clonar motores enteros. Extraer capacidades compatibles como piedras.

---

# RUBIK SOTA ASSET LIBRARY

Fuente de verdad:
- `docs/14-RUBIK-SOTA-ASSET-LIBRARY-MASTER.md`;
- `public/assets/museum/README.md`;
- `public/assets/museum/provenance/*`.

Estrategia:

```text
CUSTOM HERO
+ CC0 WORLD
+ PBR REALISM
+ IBL / HDRI
+ SEMANTIC INTERACTION
```

---

# LEGACY / KNOWLEDGE LAYERS

Legacy Museum archaeology and future semantic/knowledge connections are documented in:

`docs/15-LEGACY-MUSEUM-DONOR-SEMANTIC-KNOWLEDGE-ARCHAEOLOGY.md`

Wikipedia/Wikidata/Wikimedia remains future institutional enrichment only:

`docs/10-INSTITUTIONAL-KNOWLEDGE-LAYER-WIKIPEDIA-WIKIMEDIA.md`

Rule:

```text
CURATOR / CLIENT CONTENT = PRIMARY
EXTERNAL KNOWLEDGE = ENRICHMENT / FALLBACK
```

No está implementado en runtime.

---

# AUTHOR MODE / CMS FUTURO

No es prioridad inmediata.

La intención sigue siendo una única fuente de contenido para Landing + Museum + ProjectMediaStage, reutilizando capacidad existente de Escaparates Pro si la auditoría confirma compatibilidad.

---

# CONTROLES DESKTOP ACTUALES

```text
W / S     forward / back
A / D     strafe
Arrows    approved translation
Q         turn left
R         turn right
Mouse     look
E / click inspect semantic artifact
Esc       release / close by state
```

Focus authority actual = semantic raycast + interaction distance/facing constraints.

Cinematic inspection:

```text
FREE
→ GLIDE_IN
→ INSPECT
→ GLIDE_OUT
→ FREE
```

Al volver a FREE:
- pose restaurada;
- yaw/pitch resynchronizados;
- velocity = 0;
- held keys cleared.

---

# VIDEO MASTER

Ruta canónica:

`public/media/rubik-sota-master.mp4`

No asumir que existe hasta que el asset real esté en el repo. La proxy actual es instrumento de desarrollo.

---

# VALIDACIÓN

**FUNCIONA ≠ ESTÁ TERMINADO.**

Automatizable:
- install;
- TypeScript;
- build;
- vertical slice;
- data/API tests cuando existan.

Manual/browser:
- scroll feel;
- camera comfort;
- focus/raycast quality;
- lifecycle behavior;
- materiality;
- lighting;
- choreography;
- cinematic inspect return;
- mobile quality;
- overall premium perception.

Metodología:

```text
OBSERVAR
→ MEDIR
→ AISLAR
→ ENTENDER
→ CORREGIR RAÍZ
→ INTEGRAR SIN DEGRADAR
→ VALIDAR VISUALMENTE
→ DOCUMENTAR
→ REUTILIZAR
```

---

# ROADMAP DESDE CURRENT MAIN

```text
5.1 CINEMATIC INSPECT                         ✅ MERGED
5.2 MATERIAL / ATMOSPHERE                     ✅ MERGED
5.2R / 5.2R+ VISUAL RECOVERY + PASS 2         ✅ MERGED
5.3A SEMANTIC ARTIFACTS + DIRECT CLICK         ✅ MERGED
5.3B MEDIA LIFECYCLE                           ✅ MERGED
5.3 SEMANTIC LANDMARK — MAQUETTE PILOT         ⏭ NEXT
5.4 ENTRY RITUAL                               ⏳
5B PROPAGATE APPROVED STONES                   ⏳
LANDING VISUAL UPLIFT                           ⏳
REAL PROJECT MEDIA                              ⏳
PREMIUM MOBILE                                  ⏳
AUTHOR MODE / CMS                               ⏳
INSTITUTIONAL KNOWLEDGE                         ⏳
BACKEND / ANALYTICS / DASHBOARD                 ⏳
FINAL REGRESSION / HARNESS                      ⏳
PRODUCTION                                      ⏳
```

Para estado operativo y ramas, leer primero:

**`docs/18-CURRENT-ROADMAP-AND-BRANCH-STATE.md`**

Para reconstrucción completa/histórica:

**`docs/13-MASTER-REBUILD-FROM-ZERO-PHASES-1-5.md`**
