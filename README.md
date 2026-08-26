# RUBIK SOTA — PORTFOLIO MUSEUM

> **Un portfolio editorial premium que utiliza un museo 3D como interfaz y una narrativa cinematográfica controlada por scroll como puerta de entrada.**

Este repositorio es la base oficial de **RUBIK SOTA — PORTFOLIO MUSEUM**.

No estamos construyendo un videojuego ni una landing genérica. Estamos construyendo una experiencia de portfolio premium, memorable y medible que combina:

1. una **entrada editorial cinematográfica** basada en scroll y vídeo;
2. un **museo 3D navegable** como núcleo del portfolio;
3. una **capa de contenido real de Rubik Sota**;
4. una **capa analítica** posterior para medir atención real sobre los proyectos;
5. un sistema de validación visual y técnica que impida degradar una baseline aprobada.

---

## PRINCIPIO DEL PROYECTO

**RUBIK SOTA PORTFOLIO MUSEUM no es un videojuego. Es un portfolio editorial premium que utiliza un espacio 3D como interfaz.**

La experiencia debe sentirse:

- premium;
- editorial;
- cinematográfica;
- elegante;
- minimalista;
- fluida;
- técnicamente impecable;
- memorable;
- original;
- Awwwards-level sin caer en animaciones gratuitas o decorativas.

No debe sentirse:

- como una landing genérica generada por IA;
- como un videojuego infantil;
- como un entorno sci-fi/neón;
- como una copia de otra web;
- como una colección de secciones independientes sin narrativa;
- como un museo pesado o un laberinto.

---

# 3 FUENTES DE VERDAD

Estas tres fuentes deben leerse antes de tomar decisiones estructurales importantes.

## SOURCE OF TRUTH 01 — GENESIS / FRONTEND MUSEUM

`/sources/01-prompt-museum-genesis.txt`

Define el ADN funcional original:

- Next.js + TypeScript + React;
- Three.js + React Three Fiber + drei;
- una sola galería principal;
- WASD/flechas + ratón;
- foco por distancia + dirección de cámara;
- `E` o clic para inspeccionar;
- paneles premium;
- progreso de proyectos explorados;
- instalación final/contacto;
- fallback móvil 2D;
- rendimiento y validación real.

La regla central heredada de esta fuente es:

> El museo debe sentirse como una web premium inmersiva, no como un videojuego complejo.

## SOURCE OF TRUTH 02 — SAFE EVOLUTION / ANALYTICS

`/sources/02-prompt-museum-evolution-analytics.txt`

Define cómo evolucionar una baseline ya aprobada sin romperla:

- no reconstruir el frontend;
- preservar movimiento, cámara, controles y paneles;
- refinamientos limitados de iluminación y placas;
- PostgreSQL real;
- UUID anónimo;
- tracking de atención de obra y panel;
- `POST /api/inspections`;
- `GET /api/stats`;
- degradación segura cuando analytics/DB fallen;
- pruebas y evidencia real;
- distinguir lo automatizable de lo que requiere revisión manual.

Regla central:

> **Nueva versión = baseline aprobada + capacidad nueva. Nunca reescribir lo aprobado sin una causa raíz demostrada.**

## SOURCE OF TRUTH 03 — VIDEO / RECONSTRUCTION ANALYSIS

`/sources/03-analysis-video-museum-claude-abacus.md`

Reconstruye el flujo real del proyecto de referencia y explica por qué funciona:

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

Esta fuente confirma que la división por fases es deliberada: primero se consigue una experiencia 3D estable y aprobada; después se añade backend y medición sin degradar el frontend.

---

# REPOS DE APOYO PRINCIPALES

## 1. Design DNA

https://github.com/Juanmaes83/design-dna

Función en este proyecto:

- extraer el lenguaje visual de referencias;
- convertir color, tipografía, spacing, composición, materialidad y motion en una especificación estructurada;
- separar percepción subjetiva de tokens medibles;
- versionar la **PIEL** visual del museo;
- evitar instrucciones vagas del tipo “hazlo premium”.

Artefacto esperado:

`/design/rubik-sota-museum-dna.json`

## 2. Harness Design

https://github.com/Juanmaes83/harness-design

Función en este proyecto:

- verificar implementación real en navegador;
- inspeccionar recursos, consola y red;
- comparar capturas con referencias;
- revisar tokens, estilo perceptivo y efectos;
- muestrear estados de animación;
- generar un bucle de corrección cuando la fidelidad esté por debajo del objetivo.

Harness no redefine el DNA: **mide si lo estamos respetando**.

---

# SKILLS / CAPABILITIES DE DISEÑO A UTILIZAR

El flujo creativo/técnico debe apoyarse en estas capacidades:

- `design-dna`
- `frontend-design`
- `design-taste-frontend`
- `scrollcraft`

Responsabilidades:

### `design-dna`
Analizar referencias y transformar su lenguaje visual en una especificación reproducible.

### `frontend-design`
Convertir la especificación visual en una dirección frontend coherente, original y técnicamente sólida.

### `design-taste-frontend`
Eliminar soluciones genéricas, subir el nivel editorial, reforzar jerarquía, composición, tensión visual, tipografía y detalle.

### `scrollcraft`
Construir la narrativa scroll, los estados, la progresión del vídeo, la sincronización tipográfica y las transiciones continuas.

---

# REFERENCIA EDITORIAL — PEAR

Referencia de inspiración:

https://pear.no/

**No copiar Pear.**

Debemos estudiar y reinterpretar:

- ritmo vertical;
- escala y grosor tipográfico;
- uso de espacio negativo;
- jerarquía editorial;
- densidad baja pero con alta intención;
- capítulos narrativos;
- continuidad entre estados;
- sensación de scroll como montaje, no como simple desplazamiento entre bloques.

Pear es una **verdad de ritmo/editorialidad**, no una plantilla visual ni un layout a clonar.

---

# ARQUITECTURA DE EXPERIENCIA

Pear no sustituye al museo.

La arquitectura objetivo es:

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
PROJECT DETAIL PANELS
        ↓
PROGRESS / FINAL INSTALLATION
        ↓
ABOUT / CONTACT
```

La capa editorial presenta la identidad y crea deseo de entrar.
El museo 3D es la experiencia principal de exploración del portfolio.

---

# VIDEO COMO MOTOR NARRATIVO

El vídeo del proyecto debe vivir en `public/` y actuar como **recurso multimedia principal de la entrada editorial**.

> Estado inicial del repo al crear este documento: el repositorio estaba completamente vacío; por tanto el vídeo todavía no está presente en GitHub. Cuando se incorpore el asset real, debe identificarse por nombre y registrarse en la documentación antes de implementar la timeline definitiva.

## Comportamiento obligatorio

No hacer autoplay lineal de principio a fin.

El vídeo debe estar controlado por la posición de scroll:

```text
SCROLL DOWN   → vídeo avanza
SCROLL SLOW   → vídeo avanza lentamente
SCROLL FAST   → vídeo avanza más rápido
SCROLL UP     → vídeo retrocede
```

El rango narrativo de scroll debe mapearse a la duración completa relevante del vídeo.

La sección puede permanecer sticky/fixed durante el scrub.

## Regla de sincronización

Vídeo y texto forman **una sola timeline maestra**.

Nunca:

```text
video animation clock
+
text animation clock independiente
```

Sí:

```text
MASTER SCROLL PROGRESS
        ├── video.currentTime
        ├── scene state
        ├── copy cue
        ├── copy enter
        ├── copy exit
        └── visual transition
```

La aparición de copy debe estar relacionada con momentos reales de la secuencia visual, no con posiciones arbitrarias de la página.

Transiciones permitidas cuando sean justificadas:

- reveal por máscara;
- línea por línea;
- desplazamiento vertical sutil;
- opacity controlada;
- clipping;
- cambios contenidos de escala;
- tracking tipográfico controlado.

Evitar el fade repetitivo aplicado a todo.

---

# DESKTOP VS MOBILE

## Desktop

Puede utilizar:

- scroll-scrub de vídeo más preciso;
- sticky cinematic section;
- tipografía de escala grande;
- composición más arriesgada;
- museo 3D WASD + ratón;
- interacción `E` / clic;
- WebGL completo si el dispositivo lo soporta.

## Mobile

No reducir el desktop sin criterio.

Debe adaptar:

- rango de scrub;
- frecuencia de actualización del vídeo;
- cantidad de capas simultáneas;
- escala tipográfica;
- duración/recorrido de la narrativa;
- densidad visual;
- fallback de museo a una galería 2D premium cuando el first-person 3D no sea apropiado.

La versión móvil debe conservar intención, narrativa e identidad, pero puede simplificar movimiento para proteger rendimiento y usabilidad.

---

# ADN / PIEL / NEURONAS

## ADN

Capacidades no negociables:

- portfolio premium;
- museo como interfaz;
- una galería principal, no laberinto;
- proyecto enfocable por proximidad + mirada;
- panel de detalle;
- progreso;
- final narrativo/contacto;
- experiencia desktop y móvil concebidas de forma distinta;
- narrativa editorial de entrada;
- evidencia antes de aprobación.

## NEURONAS / MOTOR

- scroll state;
- video scrub;
- master timeline;
- camera;
- movement;
- collision;
- focus;
- interaction;
- project state;
- visited progress;
- analytics;
- API;
- persistence.

## PIEL

- arquitectura visual;
- tipografía;
- spacing;
- materiales;
- iluminación;
- frames;
- placas;
- composición;
- UI;
- transiciones;
- motion;
- color;
- narrativa gráfica.

La PIEL puede evolucionar sin destruir ADN ni NEURONAS.

---

# FLUJO DE TRABAJO OBLIGATORIO

```text
3 FUENTES DE VERDAD
        ↓
REFERENCIA PEAR + VIDEO
        ↓
DESIGN DNA
        ↓
ARCHITECTURE CONTRACT
        ↓
MOTION / SCROLL LAB
        ↓
FIRST VERTICAL SLICE
        ↓
HARNESS VALIDATION
        ↓
ROOT CORRECTION
        ↓
BASELINE APPROVED
        ↓
COMPLETE MUSEUM
        ↓
BACKEND / ANALYTICS
        ↓
DASHBOARD
        ↓
REGRESSION
        ↓
FINAL HARNESS
        ↓
PRODUCTION
```

Metodología heredada de FARO:

```text
OBSERVAR
→ MEDIR
→ AISLAR
→ ENTENDER
→ CORREGIR LA RAÍZ
→ INTEGRAR SIN DEGRADAR
→ VALIDAR VISUALMENTE
→ DOCUMENTAR
→ REUTILIZAR
```

**FUNCIONA ≠ ESTÁ TERMINADO.**

---

# FIRST VERTICAL SLICE

No comenzar implementando seis obras + backend + dashboard a la vez.

El primer slice debe demostrar:

```text
EDITORIAL ENTRY
→ VIDEO SCRUB
→ 2–3 COPY CUES SINCRONIZADOS
→ TRANSICIÓN DE ENTRADA
→ GALERÍA 3D CORTA
→ 2 PROYECTOS
→ MOVIMIENTO
→ FOCUS
→ E / CLICK
→ PANEL
→ CERRAR
→ SEGUIR EXPLORANDO
```

Gate de aprobación:

- sensación premium;
- scrub fluido;
- texto realmente sincronizado con el vídeo;
- cero saltos abruptos;
- movimiento 3D usable;
- foco correcto;
- panel no rompe cámara;
- rendimiento aceptable;
- desktop y mobile intencionales;
- comparación visual documentada.

Solo después se escala a seis proyectos y a backend.

---

# ROADMAP DE ALTO NIVEL

1. Source Freeze
2. Asset Inventory
3. Pear Reference Audit
4. Rubik Sota Design DNA
5. Architecture Contract
6. Scroll / Video Motion LAB
7. First Vertical Slice
8. Harness Visual Validation
9. Root Correction
10. Full 6-Project Museum
11. Progress + Final Installation
12. Mobile Experience
13. Baseline Freeze
14. PostgreSQL
15. Attention Engine
16. API
17. Stats
18. Dashboard
19. Regression
20. Final Harness
21. Production Deployment

---

# VALIDATION RULES

No afirmar que algo funciona sin comprobarlo.

No aprobar por código o CI únicamente.

Separar siempre:

### AUTOMATIZABLE
- syntax;
- types;
- unit tests;
- build;
- API;
- DB schema;
- data validation;
- static contracts.

### MANUAL / BROWSER
- ritmo del scroll;
- sensación cinematográfica;
- comodidad de movimiento;
- calidad de cámara;
- iluminación;
- composición;
- legibilidad;
- sincronización perceptiva vídeo/copy;
- calidad mobile;
- polish general.

Toda regresión importante debe documentarse como:

```text
SÍNTOMA
→ HIPÓTESIS
→ PRUEBA
→ CAUSA RAÍZ
→ SOLUCIÓN
→ REGRESIÓN
→ VALIDACIÓN
→ LECCIÓN
```

---

# ESTADO ACTUAL

**Fase: 00 — SOURCE FREEZE**

- Repositorio inicial: limpio.
- Fuentes de verdad: identificadas y guardadas en `/sources`.
- Referencia editorial: Pear.
- Repos de apoyo: `design-dna` + `harness-design`.
- Skills de diseño/motion: registradas.
- Implementación frontend: todavía no iniciada.
- Vídeo principal: pendiente de incorporarse al repo `public/` o confirmar su ruta real.
- Deployment: no iniciado.

La siguiente fase será **Asset Inventory + Pear/Design DNA + Architecture Contract**, antes de empezar a construir el primer slice.
