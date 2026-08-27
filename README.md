# RUBIK SOTA — PORTFOLIO MUSEUM

> **Un portfolio editorial premium que utiliza una narrativa cinematográfica como entrada y un museo 3D navegable como interfaz central.**

Este repositorio es la base oficial de **RUBIK SOTA — PORTFOLIO MUSEUM**.

## AI / DEVELOPER START HERE

Si eres una IA, desarrollador o colaborador nuevo, lee primero:

1. [`AI-START-HERE.md`](./AI-START-HERE.md)
2. [`docs/13-MASTER-REBUILD-FROM-ZERO-PHASES-1-5.md`](./docs/13-MASTER-REBUILD-FROM-ZERO-PHASES-1-5.md)
3. las tres fuentes en `/sources`;
4. [`docs/02-ARCHITECTURE-CONTRACT.md`](./docs/02-ARCHITECTURE-CONTRACT.md)
5. [`design/rubik-sota-museum-dna.json`](./design/rubik-sota-museum-dna.json)
6. [`docs/03-VALIDATION-STATUS.md`](./docs/03-VALIDATION-STATUS.md)
7. [`docs/14-RUBIK-SOTA-ASSET-LIBRARY-MASTER.md`](./docs/14-RUBIK-SOTA-ASSET-LIBRARY-MASTER.md) y [`public/assets/museum/`](./public/assets/museum/) antes de cualquier uplift de materiales/GLB/HDRI.

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
CINEMATIC / STANDARD PROJECT INSPECTION
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
Motor aprobado:
- scroll authority;
- video scrub;
- camera;
- movement;
- bounds;
- mouse-look;
- Q/R keyboard yaw;
- focus;
- project state;
- visited/progress;
- cinematic inspect;
- pointer-lock restore;
- future analytics/API/persistence.

## PIEL
Reemplazable/evolutiva:
- tipografía;
- color;
- materiales;
- iluminación;
- arquitectura visual;
- project supports;
- composición;
- UI;
- transiciones;
- media presentation.

La PIEL puede cambiar sin destruir ADN ni NEURONAS.

---

# ESTADO REAL — 27 AUG 2026

## FASE 1 — Foundation / First Vertical Slice
**APPROVED + MERGED**

PR #1:
https://github.com/Juanmaes83/PORTAFOLIO-RUBIK-SOTA-MUSEO/pull/1

Incluye:
- Asset Inventory;
- Pear audit;
- Design DNA;
- Architecture Contract;
- ScrollFilm;
- normalized master scroll progress;
- reversible media/copy timeline;
- `/lab`;
- explicit missing-media proxy.

## FASE 2 — Cinematic Landing
**APPROVED + MERGED**

PR #2:
https://github.com/Juanmaes83/PORTAFOLIO-RUBIK-SOTA-MUSEO/pull/2

Incluye:
- LandingContinuation;
- Practice / Work / System chapters;
- disciplines statement;
- final Museum portal;
- desktop/mobile composition;
- reduced-motion fallback.

Nota: su arquitectura está aprobada, pero su PIEL visual final todavía debe subir de nivel en el uplift posterior.

## FASE 3 — Museum Foundation
**APPROVED + MERGED**

PR #3:
https://github.com/Juanmaes83/PORTAFOLIO-RUBIK-SOTA-MUSEO/pull/3

Incluye:
- `/museum`;
- `/museum/lab`;
- one-gallery R3F scene;
- WASD/arrows;
- pointer-lock mouse-look;
- bounds;
- focus distance + facing;
- E/click inspect;
- panel pause/restore;
- two-project validation slice;
- mobile 2D foundation.

## FASE 4 — Full 6-Project Museum + 360° keyboard yaw
**APPROVED + MERGED**

PR #5:
https://github.com/Juanmaes83/PORTAFOLIO-RUBIK-SOTA-MUSEO/pull/5

Incluye:
- 6 data-driven projects;
- visited Set;
- 0/6 progress;
- final installation dormant → active at 6/6;
- About/Contact;
- Q/R continuous yaw;
- mouse + keyboard sharing same yaw authority;
- turn-speed tuning in Museum LAB.

## FASE 5 — Visual + Navigation Uplift
**IN PROGRESS**

### 5.1 — Cinematic Inspect Stone
**APPROVED + MERGED**

PR #6:
https://github.com/Juanmaes83/PORTAFOLIO-RUBIK-SOTA-MUSEO/pull/6

Merge:
`01cc75d4f5660413e2392ef6c4ebd99944f75439`

Incluye:
- `CinematicInspectRig`;
- pilot `aviation`;
- exact camera pose capture;
- glide-in;
- quaternion slerp;
- `ProjectMediaStage`;
- image/video-ready contract;
- glide-out;
- exact return;
- yaw/pitch resync;
- key/velocity reset;
- `/museum/inspect-lab`.

Validado manualmente por el usuario antes del merge.

### 5.2 — Material Stone
**NEXT — NOT IMPLEMENTED**

Objetivo:
probar materialidad/iluminación premium en una única zona y una única obra antes de propagarla al museo completo.

Expected route:
`/museum/material-lab`

La ejecución 5.2 y su recuperación visual deben usar la biblioteca aprobada de GLB/PBR/HDRI y su registro de procedencia; no introducir assets arbitrarios fuera de ese sistema.

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

Piedras identificadas:
- Cinematic Inspect — Galerium;
- Material/Light System — Galerium;
- Semantic Landmarks — Hyacinth;
- Object Micro-interactions — 3D Room;
- Project Media Stage;
- Media Lifecycle;
- Entry Ritual;
- Institutional Knowledge Layer.

---

# RUBIK SOTA ASSET LIBRARY — APPROVED

La biblioteca GLB/PBR/HDRI es una dependencia oficial de la PIEL del museo.

Fuente de verdad:
- `docs/14-RUBIK-SOTA-ASSET-LIBRARY-MASTER.md`
- `public/assets/museum/README.md`
- `public/assets/museum/provenance/ASSET-REGISTRY.json`
- `public/assets/museum/provenance/LICENSES.md`
- `public/assets/museum/provenance/SOURCES.md`

Estrategia aprobada:

```text
CUSTOM HERO
+ CC0 WORLD
+ PBR REALISM
+ IBL / HDRI
+ SEMANTIC INTERACTION
```

Fuentes:
- CUSTOM / OWNED para identidad crítica;
- Poly Haven CC0 como PRIMARY externo para geometría/HDRI;
- ambientCG CC0 como PRIMARY PBR;
- Sketchfab CC0 como fallback selectivo;
- CC BY solo bajo atribución controlada;
- Khronos glTF Sample Assets para QA técnico;
- BlenderKit solo tras verificación de licencia/redistribución.

`RS-GLB-03` incluye expresamente **Poly Haven — Marble Bust 01** como asset aprobado de biblioteca, además de una futura escultura hero propia de Rubik Sota. El busto no debe eliminarse silenciosamente cuando exista el hero custom.

Estado actual: selección, gobernanza y arquitectura APPROVED + VERSIONED. Los binarios externos siguen `NOT_YET_IMPORTED` hasta verificar el artefacto exacto, licencia/redistribución, optimización y validación visual.

---

# WIKIPEDIA / WIKIMEDIA

La capacidad de Galerium para enriquecer obras con información cultural externa NO se descarta.

Está documentada para un futuro modo institucional en:

`docs/10-INSTITUTIONAL-KNOWLEDGE-LAYER-WIKIPEDIA-WIKIMEDIA.md`

Regla:
- contenido de curador/cliente = PRIMARY;
- Wikipedia/Wikidata/Wikimedia = enrichment/fallback.

No está implementada aún en runtime.

---

# AUTHOR MODE / CMS FUTURO

No es prioridad inmediata.

Se reutilizarán paneles existentes de Escaparates Pro siempre que su auditoría confirme compatibilidad.

Debe soportar:
- texto;
- imagen;
- vídeo;
- poster;
- preview;
- save;
- publish;
- orden;
- metadata;
- exhibit/landmark type;
- museum placement.

La intención es una única fuente de contenido para Landing + Museum + ProjectMediaStage.

---

# CONTROLES DESKTOP ACTUALES

```text
W / S     forward / back
A / D     strafe
Arrows    approved translation
Q         turn left
R         turn right
Mouse     look
E / click inspect
Esc       release / close by state
```

Focus = distance + camera-facing threshold.

Pilot cinematic inspection:

```text
FREE
→ GLIDE_IN
→ INSPECT
→ GLIDE_OUT
→ FREE
```

Cuando vuelve FREE:
- pose restaurada;
- yaw/pitch derivados de quaternion restaurado;
- velocity = 0;
- held keys cleared.

---

# VIDEO MASTER

Ruta canónica:

`public/media/rubik-sota-master.mp4`

El asset de producción no debe asumirse existente hasta que aparezca realmente en el repo.

La proxy actual es instrumento de desarrollo, no vídeo final.

---

# VALIDACIÓN

**FUNCIONA ≠ ESTÁ TERMINADO.**

Automatizable:
- install;
- TypeScript;
- build;
- data/API tests cuando existan.

Manual/browser:
- scroll feel;
- camera comfort;
- focus quality;
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

# ROADMAP DESDE AQUÍ

```text
5.1 CINEMATIC INSPECT           ✅
ASSET LIBRARY V1               ✅ APPROVED + VERSIONED
5.2 MATERIAL STONE              ⏭ NEXT
5.3 SEMANTIC LANDMARK           ⏳
5.4 ENTRY RITUAL                ⏳
5B  PROPAGATE APPROVED STONES   ⏳
LANDING VISUAL UPLIFT            ⏳
REAL PROJECT MEDIA               ⏳
PREMIUM MOBILE                   ⏳
AUTHOR MODE / CMS                ⏳
INSTITUTIONAL KNOWLEDGE          ⏳
BACKEND / ANALYTICS / DASHBOARD  ⏳
FINAL REGRESSION / HARNESS       ⏳
PRODUCTION                       ⏳
```

Para reconstrucción completa, no continuar desde este README únicamente. Leer:

**`docs/13-MASTER-REBUILD-FROM-ZERO-PHASES-1-5.md`**
