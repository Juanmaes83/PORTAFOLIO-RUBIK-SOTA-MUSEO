# 04 — Landing Cinematográfica / Fase 2

## Objetivo

Completar la landing cinematográfica del portfolio antes de iniciar el museo 3D.

Esta fase NO desarrolla el museo. Preserva la baseline aprobada de V1 y amplía únicamente la experiencia editorial que conduce hacia él.

## Baseline protegida

Commit aprobado de partida:

`c210791dd973471ca75f3470e227bc67abf03e2b`

No se reescribe el motor ScrollFilm aprobado. La Fase 2 se añade después de esa experiencia.

## Narrativa

1. Foyer cinematográfico / video-scroll ya aprobado.
2. Capítulo 01 — Practice: las ideas se convierten en lugares que se pueden recorrer.
3. Capítulo 02 — Work: seis proyectos se presentan como colección, no como cards.
4. Capítulo 03 — System: dirección, identidad, digital y motion se entienden como un único sistema.
5. Scope / disciplinas del portfolio.
6. Portal final hacia el Museo.

## Reglas de diseño

- una idea dominante por beat;
- grandes contrastes tipográficos;
- mucha respiración y poco chrome;
- cero sistema de cards genéricas;
- continuidad, no scroll-snap;
- motion sobrio y reversible;
- versión móvil diseñada específicamente;
- reduced-motion legible y sin sticky narrative obligatorio.

## Arquitectura

`ScrollFilm` continúa siendo la autoridad del primer tramo.

La continuación editorial usa su propio progreso local únicamente para sus tres capítulos. No altera el timeline del vídeo ni el LAB aprobado.

La frontera se mantiene explícita:

`LANDING CINEMATOGRÁFICA → PORTAL → MUSEO 3D (fase posterior)`

## Archivos Fase 2

- `components/LandingContinuation.tsx`
- `lib/landing.ts`
- extensión de `app/page.tsx`
- extensión de `app/globals.css`

## Criterios de aceptación

Automáticos:
- TypeScript pasa;
- Next.js production build pasa.

Visuales/manuales:
- el primer slice no ha sido degradado;
- los tres capítulos se sienten como una narración continua;
- no parece una landing SaaS ni una colección de cards;
- desktop mantiene escala y aire;
- mobile mantiene intención, no solo reducción;
- el portal comunica claramente que el siguiente sistema será el Museo;
- todavía no se simula un museo falso.

## Activo pendiente

El vídeo maestro real sigue pendiente en:

`public/media/rubik-sota-master.mp4`

La ausencia de ese asset no autoriza a reemplazarlo por un vídeo genérico.
