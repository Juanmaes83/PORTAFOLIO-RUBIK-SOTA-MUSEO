# MASTER BRIEF — RUBIK SOTA PORTFOLIO MUSEUM

Fecha de congelación: 2026-08-26

## 1. Misión

Diseñar y construir un sitio web premium, original y cinematográfico para **Rubik Sota Portfolio Museum**.

La experiencia combinará una **entrada editorial basada en vídeo y scroll** con un **portfolio-museo 3D navegable**.

La referencia editorial principal de sensación y ritmo es:

- https://pear.no/

La referencia debe estudiarse, no copiarse.

Debemos analizar y reinterpretar:

- ritmo;
- grosor tipográfico;
- espaciado;
- minimalismo;
- densidad;
- narrativa basada en desplazamiento;
- continuidad visual;
- sensación editorial premium.

El resultado debe ser una nueva dirección visual propia de Rubik Sota.

---

## 2. Fuentes de verdad

Antes de implementar deben consultarse:

1. `/sources/01-prompt-museum-genesis.txt`
2. `/sources/02-prompt-museum-evolution-analytics.txt`
3. `/sources/03-analysis-video-museum-claude-abacus.md`

No deben ser sustituidas por interpretaciones posteriores sin documentar el cambio.

---

## 3. Repositorios y capacidades de apoyo

### Repositorios

- https://github.com/Juanmaes83/design-dna
- https://github.com/Juanmaes83/harness-design

### Skills / capacidades

- `design-dna`
- `frontend-design`
- `design-taste-frontend`
- `scrollcraft`

### Flujo de uso

1. `design-dna`
   - analizar Pear y otras referencias aprobadas;
   - extraer lenguaje de diseño, spacing, tipografía, densidad, motion y efectos;
   - producir un DNA versionable.

2. `frontend-design`
   - traducir el DNA a una dirección frontend sólida, original y técnicamente consistente.

3. `design-taste-frontend`
   - elevar composición, tensión editorial, jerarquía, detalle, ritmo, materialidad y personalidad;
   - eliminar patrones genéricos de landing generada por IA.

4. `scrollcraft`
   - construir narrativa scroll;
   - coordinar sticky sections, progress, vídeo, texto y transiciones;
   - evitar saltos abruptos y animaciones aisladas.

5. `harness-design`
   - verificar navegador, recursos, consola, capturas, efectos y alineación visual;
   - generar evidencia y bucle de corrección.

---

## 4. Dirección de diseño

Objetivo:

- Awwwards-level;
- fluido;
- elegante;
- refinado;
- cinematográfico;
- editorial;
- original;
- sobrio;
- premium.

Evitar:

- animaciones baratas;
- elementos superfluos;
- tarjetas genéricas;
- UI tipo dashboard de IA;
- scroll por bloques sin continuidad;
- efectos aplicados sin relación narrativa;
- sobrecarga visual;
- copia literal de Pear.

---

## 5. Uso del vídeo

El archivo de vídeo debe estar disponible en `public/` y actuar como el recurso multimedia principal de la entrada editorial.

**No reproducir el vídeo automáticamente de principio a fin.**

El vídeo debe controlarse por scroll.

Comportamiento:

- scroll hacia abajo → avanzar vídeo;
- scroll lento → avance lento;
- scroll rápido → avance más rápido;
- scroll hacia arriba → vídeo hacia atrás;
- la posición de scroll debe mapearse a la timeline completa o al tramo narrativo aprobado del vídeo.

La experiencia debe sentirse como si el usuario controlara el montaje cinematográfico mediante desplazamiento.

Puede mantenerse la sección de vídeo fija/sticky mientras la secuencia avanza.

### Estado actual del asset

En el momento de congelar este brief el repositorio GitHub estaba vacío y no contenía todavía un directorio `public/` ni un archivo de vídeo. Antes de implementar la timeline definitiva debe identificarse y registrarse el asset real.

---

## 6. Narrativa scroll

Flujo conceptual:

```text
SCROLL
→ VIDEO PROGRESS
→ VISUAL SCENE CHANGE
→ COPY ENTER
→ COPY HOLD
→ COPY EXIT
→ NEXT VISUAL SCENE
→ NEXT COPY
```

No deben existir dos sistemas de animación independientes para vídeo y texto.

Debe existir una **timeline / progress authority única**.

Ejemplo conceptual:

```text
masterProgress 0.00 ───────────────────────────── 1.00
        │
        ├── video.currentTime
        ├── sceneIndex
        ├── textCueIndex
        ├── typography enter/exit
        └── transition state
```

El copy debe responder a momentos concretos del vídeo.

No introducir mensajes en posiciones arbitrarias sólo porque el usuario ha llegado a una sección.

---

## 7. Transiciones tipográficas

Posibles técnicas:

- máscara;
- reveal línea a línea;
- clipping;
- desplazamiento vertical sutil;
- opacity con intención;
- cambios moderados de escala;
- cambios de tracking controlados.

Evitar:

- fade-in repetido en todas las piezas;
- entradas exageradas;
- movimientos sin relación con el contenido;
- animaciones simultáneas compitiendo por atención.

---

## 8. Arquitectura de la experiencia

La referencia Pear debe mejorar la entrada editorial, **no sustituir el museo 3D**.

Arquitectura prevista:

```text
HOME / EDITORIAL ENTRY
↓
SCROLL-DRIVEN VIDEO STORY
↓
TRANSITION INTO MUSEUM
↓
3D MUSEUM
↓
PROJECT FOCUS / INSPECTION
↓
PROJECT DETAIL
↓
VISITED PROGRESS
↓
FINAL INSTALLATION
↓
ABOUT / CONTACT
```

---

## 9. Museo 3D

Se conserva el ADN definido por las fuentes originales:

- una galería principal;
- sin laberintos;
- portfolio, no videojuego;
- movimiento suave;
- WASD/flechas + mouse desktop;
- `E` / clic;
- foco por distancia + orientación;
- panel premium;
- progreso de proyectos;
- final de colección/contacto;
- rendimiento como prioridad.

Los seis proyectos ficticios del prompt original son **referencia estructural**, no contenido final obligatorio de Rubik Sota. El contenido final debe ser real o explícitamente aprobado.

---

## 10. Desktop

La versión desktop puede utilizar:

- vídeo scrub preciso;
- sticky cinematic section;
- tipografía de gran escala;
- layouts con mayor tensión editorial;
- museo 3D completo;
- navegación WASD + mouse;
- WebGL completo si hardware y rendimiento lo permiten.

---

## 11. Mobile

La versión móvil no debe ser una reducción mecánica del desktop.

Debe conservar:

- narrativa;
- lenguaje visual;
- orden de mensajes;
- calidad editorial;
- intención cinematográfica.

Puede simplificar:

- frecuencia de scrub;
- capas simultáneas;
- efectos;
- profundidad 3D;
- distancia de scroll;
- cantidad de motion activo.

El museo puede usar el fallback 2D premium descrito en la fuente original cuando el first-person no sea adecuado.

---

## 12. Performance

Prioridades:

- evitar seek de vídeo innecesariamente agresivo;
- evitar work pesado por cada evento `scroll` sin suavizado;
- usar una autoridad de progress y un loop controlado cuando proceda;
- limitar postprocesado;
- optimizar vídeo para web;
- lazy load de 3D cuando sea apropiado;
- respetar `prefers-reduced-motion`;
- degradación elegante cuando WebGL o capacidades de vídeo sean insuficientes.

---

## 13. Metodología de construcción

No implementar toda la visión de una vez.

```text
SOURCE FREEZE
→ ASSET INVENTORY
→ PEAR AUDIT
→ DESIGN DNA
→ ARCHITECTURE CONTRACT
→ SCROLL / VIDEO LAB
→ FIRST VERTICAL SLICE
→ HARNESS
→ ROOT CORRECTION
→ BASELINE
→ FULL MUSEUM
→ MOBILE
→ BACKEND
→ ANALYTICS
→ DASHBOARD
→ REGRESSION
→ FINAL VALIDATION
```

Primer vertical slice recomendado:

```text
hero editorial
+ vídeo scrub
+ 2–3 cues de copy
+ transición
+ tramo corto de museo
+ 2 proyectos
+ movimiento
+ focus
+ E/click
+ panel
```

No ampliar hasta validar este slice.

---

## 14. Validación

Después de implementar cada slice:

- ejecutar proyecto;
- corregir build errors;
- corregir runtime errors;
- inspeccionar consola del navegador;
- verificar vídeo/scroll;
- verificar reversibilidad al scroll up;
- verificar sincronización vídeo/copy;
- verificar desktop;
- verificar mobile;
- verificar movimiento 3D cuando corresponda;
- proporcionar URL real de revisión.

No afirmar validación visual sólo porque build/CI pasa.

No entregar enlaces sin comprobarlos.

---

## 15. Reglas de preservación

Una vez aprobado un slice:

```text
NUEVA VERSIÓN = BASELINE APROBADA + CAPACIDAD NUEVA
```

No reescribir componentes aprobados para resolver problemas no relacionados.

Errores importantes deben registrar:

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

## 16. Definición de éxito

El proyecto estará en camino correcto cuando:

- la entrada tenga ritmo editorial propio;
- el vídeo parezca editado por el scroll;
- copy y vídeo formen un solo sistema;
- no existan saltos entre escenas;
- la transición hacia el museo sea coherente;
- el museo conserve experiencia premium y usable;
- mobile se sienta diseñado, no reducido;
- el diseño no parezca una copia de Pear;
- el diseño no parezca una landing generada por IA;
- cada avance pueda demostrarse en navegador.
