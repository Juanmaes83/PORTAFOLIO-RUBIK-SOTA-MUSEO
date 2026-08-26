# Analisis del video: Portfolio Museo 3D con Claude y Abacus AI

Fecha del analisis: 26 de agosto de 2026  
Video analizado: `https://www.youtube.com/watch?v=as1W0ijkCqA`  
Titulo: `Cree un portafolio de museo 3D que puedes explorar con Claude`  
Duracion: 18:17  
Material revisado: descripcion del video, capitulos, transcripcion completa de YouTube y los archivos `prompt1.txt` y `prompt2.txt` enlazados desde Google Drive.

## 1. Resumen ejecutivo

El video muestra como crear un portfolio web interactivo con formato de museo 3D. La idea principal es sustituir el portfolio clasico por una experiencia navegable: el visitante entra en una galeria, se mueve con teclado y raton, mira proyectos colocados como obras enmarcadas, abre paneles de detalle y, al mismo tiempo, el sistema registra que proyectos mira y durante cuanto tiempo.

La autora no construye todo a mano desde cero. El flujo real es:

1. Define la experiencia y el alcance.
2. Usa Claude/Fable 5 para convertir una idea narrativa en prompts tecnicos.
3. Pega el primer prompt en Abacus AI SuperComputer para generar el frontend 3D.
4. Revisa el resultado: museo, movimiento, colisiones, proyectos, paneles y zona de contacto.
5. Pega un segundo prompt para anadir backend, PostgreSQL, API, analitica y dashboard.
6. Prueba que el panel registra visitas reales a proyectos.
7. Revisa consumo de creditos y cierra explicando que el prompt detallado fue clave.

La conclusion importante: no es magia de un unico prompt improvisado. El resultado sale porque el prompt esta muy cerrado: define stack, controles, restricciones, estructura visual, comportamiento, validaciones, pruebas y limites de lo que la IA no debe cambiar.

## 2. Que esta construyendo exactamente

El producto final es un portfolio gamificado, pero no un juego completo. Es una web premium con una escena 3D ligera.

Componentes principales:

- Museo 3D con una unica galeria larga.
- Seis proyectos ficticios presentados como obras en pared.
- Movimiento en primera persona con WASD/flechas y raton.
- Interaccion con tecla `E` o clic cuando el usuario esta cerca y mirando un proyecto.
- Panel de detalle por proyecto.
- Indicador de progreso: proyectos explorados.
- Instalacion final de contacto desbloqueada tras revisar los seis proyectos.
- Fallback movil 2D con tarjetas, en vez de forzar la experiencia WASD en pantallas pequenas.
- Backend con PostgreSQL.
- API para registrar inspecciones y consultar estadisticas.
- Dashboard protegido con contrasena para ver datos de atencion.

## 3. Analisis de principio a fin

### 0:00-1:05 - Introduccion

La autora plantea el problema: un portfolio clasico es poco memorable. Su propuesta es convertirlo en una visita a un museo 3D. Desde el principio deja claro que no solo quiere una web visual, sino una aplicacion full-stack: frontend, backend, integraciones y analitica.

La metrica central del proyecto es muy buena: no solo saber si alguien entro, sino que proyecto miro y durante cuanto tiempo. Esto convierte el portfolio en una herramienta de aprendizaje comercial: ayuda a saber que piezas generan mas interes.

### 1:05-3:50 - Abacus AI y SuperComputer

Explica que Abacus AI SuperComputer funciona como una computadora remota accesible desde navegador. No se limita a responder texto: puede usar terminal, crear archivos, instalar dependencias, correr aplicaciones y manejar un entorno Linux.

Puntos tecnicos relevantes:

- Usa Ubuntu remoto.
- Puede trabajar con JavaScript, Node.js, Python, Go, Rust, Java, C++ y otras tecnologias Linux.
- Permite desarrollar frontend, backend y APIs.
- Puede conectarse con GitHub.
- Puede montar bases de datos como PostgreSQL, MySQL, MongoDB o Redis.
- Permite ver archivos del proyecto y descargarlos.
- Genera una URL de preview/despliegue.

El motivo de usar SuperComputer es claro: Claude puede ayudar mucho con el frontend 3D, pero para backend, base de datos y ejecucion real necesita un entorno operativo.

### 3:50-8:00 - Creacion del prompt con Claude/Fable 5

Esta es la parte mas importante del video. La autora no empieza pidiendo "hazme una web 3D". Primero redacta una idea amplia, luego la transforma en un prompt tecnico.

La estructura del prompt es:

- Identidad del rol: senior creative developer y 3D web engineer.
- Nombre del proyecto.
- Idea central.
- Referencia visual.
- Direccion estetica.
- Tecnologias concretas.
- Controles de escritorio.
- Sistema de movimiento.
- Estructura del museo.
- Lista de seis proyectos.
- Sistema de interaccion.
- Estado de proyectos visitados.
- Area final de contacto.
- Fallback movil.
- Requisitos de rendimiento.
- Lista extensa de pruebas y verificacion.

La autora insiste en algo clave: hay que decirle a la IA lo que debe hacer y tambien lo que no debe hacer. Por eso el prompt prohibe copiar referencias, usar arte protegido, meter neon excesivo, hacer un laberinto, anadir fisicas pesadas, saltos o assets enormes.

Tecnologias solicitadas en el prompt:

- Next.js
- TypeScript
- React
- Three.js
- React Three Fiber
- `@react-three/drei`
- Zustand solo si aporta valor
- Framer Motion o GSAP para transiciones
- CSS modular limpio o Tailwind CSS

Decision fuerte: divide el trabajo en dos prompts. El primero resuelve el frontend. El segundo agrega backend y base de datos sin romper lo aprobado.

### 8:00-11:55 - Generacion del frontend 3D

Pega el primer prompt en SuperComputer. La plataforma genera el proyecto, instala dependencias, crea archivos, ejecuta la aplicacion y abre preview.

El frontend que se busca tiene estas caracteristicas:

- Galeria con paredes claras, suelo de madera o piedra sutil y techo mas oscuro.
- Iluminacion calida tipo museo.
- Obras/proyectos enmarcados en paredes.
- Bancos simples.
- Punto focal al final.
- Loading screen.
- Movimiento suave.
- Colisiones para no atravesar paredes.
- Sin salto.
- Paneles de proyecto.
- Boton de contacto al final.

Durante la prueba se ve que el usuario puede recorrer la escena, acercarse a obras y pulsar `E` para abrir informacion. Tambien destaca un modelo/elemento giratorio en la zona final, pensado como llamada a la accion.

La idea comercial que defiende es que un portfolio 3D puede elevar la calidad percibida del creador. No sirve para todos los casos, pero para perfiles creativos, desarrolladores 3D, estudios de arquitectura, moda, producto digital o experiencias interactivas puede ser mas memorable que una pagina plana.

### 11:55-16:15 - Backend, analitica y dashboard

El segundo prompt parte de una premisa importante: el frontend ya funciona y no debe rehacerse. Solo se deben anadir backend, analitica y retoques visuales limitados.

El backend solicitado:

- Base de datos PostgreSQL real.
- Variable `DATABASE_URL`.
- Tabla de analitica de atencion.
- API `POST /api/inspections`.
- API `GET /api/stats`.
- Dashboard protegido por contrasena en `/dashboard`.

La tabla de analitica debe guardar:

- `id`
- `project_id`
- `session_id`
- `started_at`
- `dwell_ms`
- `source`, con valores `artwork` o `panel`
- `created_at`

La sesion del visitante:

- Debe ser un UUID anonimo.
- Se guarda en `localStorage`.
- Se reutiliza si el visitante vuelve.
- No debe usar fingerprinting.
- No debe recoger datos personales.

La logica de tracking es mas sofisticada que un simple clic. Un proyecto cuenta como "visto" solo si:

- El visitante esta a distancia razonable.
- La camara esta orientada hacia la obra.
- La condicion dura al menos 800 ms.
- La pestana esta visible y activa.
- No hay panel tapando la experiencia.

El sistema corta el temporizador si el usuario se aleja, mira otro proyecto, abre el panel, oculta la pestana o abandona la pagina. Tambien ignora visitas accidentales inferiores a 800 ms.

El panel de proyecto se mide por separado:

- Empieza al abrir el panel.
- Termina al cerrarlo, ocultar pestana o salir.
- Se registra con `source: "panel"`.

La autora prueba el dashboard: entra, observa que hay un visitante registrado, mira un proyecto que no tenia visualizaciones, vuelve al dashboard y confirma que se registro una visita en tiempo real.

### 16:15-17:00 - Creditos consumidos

Explica el consumo de creditos. Indica que habia usado alrededor de 13.000 creditos para tres intentos/proyectos, lo que da aproximadamente 4.333 creditos por proyecto. Justifica el gasto porque se trata de un proyecto grande: 3D, Three.js, modelo de alto nivel y flujo full-stack.

La lectura practica: este tipo de resultado no es barato si se itera varias veces con modelos potentes. Conviene preparar bien el prompt antes de ejecutar, porque cada iteracion completa puede consumir bastante.

### 17:00-18:17 - Cierre

La autora remarca que el resultado sale por la combinacion de Claude/Fable 5 para preparar prompts y SuperComputer para ejecutar el proyecto real. Su mensaje final es que el prompt engineering sigue siendo decisivo: sin un prompt detallado, el resultado no habria sido igual.

## 4. Como lo ha hecho, en terminos tecnicos

### Arquitectura probable

La arquitectura final se puede entender asi:

Frontend:

- Next.js con TypeScript.
- Escena 3D en React Three Fiber.
- Helpers de `@react-three/drei` para controles, carga y elementos 3D.
- Componentes separados para museo, obras, luces, controles, paneles y fallback movil.
- Estado local para proyecto enfocado, panel abierto y proyectos visitados.

Backend:

- Rutas API de Next.js.
- PostgreSQL como base de datos.
- Variable `DATABASE_URL`.
- Validacion de payloads en servidor.
- Insercion de eventos de atencion.
- Consulta agregada de estadisticas.

Analitica:

- UUID anonimo por navegador.
- Eventos de dwell time por obra y por panel.
- Envio al terminar cada periodo, no en cada frame.
- `sendBeacon` o `fetch keepalive` para registrar eventos al cerrar la pagina.

Dashboard:

- Ruta `/dashboard`.
- Login simple protegido por contrasena.
- Vista agregada por proyecto.
- Proyecto mas visto por tiempo total, usando numero de inspecciones como desempate.

## 5. Por que el prompt funciona tan bien

El prompt funciona porque evita ambiguedad. No dice solo "haz un museo bonito"; define:

- Experiencia de usuario.
- Controles exactos.
- Limites del mapa.
- Numero de proyectos.
- Contenido de cada proyecto.
- Reglas de interaccion.
- Version movil.
- Performance.
- Pruebas.
- Errores que no se deben ocultar.

El segundo prompt es todavia mas importante porque protege el trabajo ya hecho. Le dice a la IA que no reconstruya el frontend, no cambie los controles, no cambie los paneles, no renombre proyectos y no modifique comportamientos no relacionados. Eso reduce mucho el riesgo de que el modelo rompa lo que ya funcionaba.

## 6. Fortalezas del enfoque

- Muy impactante para marca personal o portfolio creativo.
- Convierte proyectos en una experiencia memorable.
- La analitica mide interes real, no solo visitas de pagina.
- El fallback movil evita forzar una experiencia incomoda en telefono.
- La division en dos prompts reduce complejidad.
- El segundo prompt incluye privacidad desde el diseno: no recoge IPs, emails ni fingerprinting.
- La verificacion esta descrita con detalle, lo que obliga al agente a probar.

## 7. Limitaciones y riesgos

- Una web 3D puede ser pesada si no se optimiza.
- El movimiento en primera persona no siempre es ideal para todos los usuarios.
- En movil la experiencia debe ser otra, no una copia reducida.
- La medicion de "mirar una obra" puede dar falsos positivos si la deteccion de direccion no esta bien ajustada.
- PostgreSQL local en un entorno tipo SuperComputer funciona para desarrollo, pero en produccion habria que definir hosting, backups, seguridad y despliegue.
- Un dashboard protegido solo por contrasena simple no basta para un producto serio.
- La IA puede romper el frontend si los prompts de backend no restringen los cambios.

## 8. Como replicarlo

### Paso 1: Definir el concepto

Antes de pedir codigo, definir:

- Tipo de portfolio.
- Numero de proyectos.
- Estilo visual.
- Recorrido del usuario.
- Interacciones.
- Que informacion debe mostrar cada proyecto.
- Que se quiere medir.

### Paso 2: Crear el prompt del frontend

Debe incluir:

- Rol experto.
- Stack.
- Estructura de componentes.
- Diseno de museo.
- Controles.
- Colisiones.
- Reglas de interaccion.
- Paneles.
- Estados visitados.
- Fallback movil.
- Performance.
- Lista de pruebas.

### Paso 3: Construir y probar el frontend

Verificar:

- Carga inicial.
- Movimiento.
- Camara.
- Colisiones.
- Interacciones con `E` y clic.
- Paneles.
- Progreso 0/6 a 6/6.
- Activacion del area final.
- Responsive/fallback movil.
- Build de produccion.

### Paso 4: Congelar el frontend aprobado

Antes del backend, declarar que el frontend ya esta aprobado. El segundo prompt debe prohibir redisenos y cambios no relacionados.

### Paso 5: Anadir backend y analitica

Implementar:

- PostgreSQL.
- Modelo `project_attention` o similar.
- `POST /api/inspections`.
- `GET /api/stats`.
- UUID anonimo.
- Tracking por obra.
- Tracking por panel.
- Envio no bloqueante.
- Validaciones estrictas.

### Paso 6: Crear dashboard

Minimo necesario:

- Login.
- Tabla por proyecto.
- Tiempo total mirando obra.
- Tiempo total en panel.
- Total combinado.
- Numero de inspecciones.
- Sesiones unicas.
- Proyecto mas visto.

### Paso 7: Verificacion

Probar con datos temporales:

- Insercion valida.
- Proyecto invalido.
- UUID invalido.
- Duracion invalida.
- Consulta de estadisticas.
- Limpieza de datos de prueba.
- Build final.

## 9. Recomendacion para hacerlo mejor que el video

Para un portfolio real, recomendaria estos ajustes:

- Usar un proveedor de base de datos gestionado, por ejemplo Neon, Supabase o Railway PostgreSQL.
- Usar autenticacion real para el dashboard.
- Anonimizar y agregar datos para privacidad.
- Medir tambien eventos utiles: contacto abierto, proyecto visitado, CTA pulsado.
- Crear una version accesible 2D como ruta principal alternativa.
- Reducir assets y usar geometria procedural.
- Implementar controles con sensibilidad configurable.
- Incluir boton visible para salir del modo primera persona.
- Preparar contenido real: imagenes, descripcion, rol, impacto, tecnologias y enlaces.

## 10. Plantilla de prompt recomendada

Usaria una estructura parecida a esta, adaptada al proyecto real:

```text
Actua como senior creative developer y 3D web engineer.

Construye un portfolio web interactivo tipo museo 3D con Next.js, TypeScript, React Three Fiber y drei.

Antes de codificar, resume arquitectura, sistema de movimiento, interacciones, estructura de archivos, fallback movil y plan de pruebas.

Luego implementa sin esperar aprobacion.

Requisitos:
- Una galeria principal, no un laberinto.
- Seis proyectos enmarcados.
- Movimiento WASD/flechas y mirada con raton.
- Sin salto.
- Colisiones ligeras.
- Panel al pulsar E o clic.
- Progreso de proyectos vistos.
- Area final de contacto.
- Fallback movil 2D.
- Performance optimizada.
- Build de produccion.

No uses assets pesados, no copies obras protegidas, no anadas mecanicas de juego innecesarias y no dejes errores sin resolver.
```

Para backend:

```text
El frontend actual ya funciona y esta aprobado. No lo rehagas.

Anade PostgreSQL, API de inspecciones, API de estadisticas, tracking anonimo de dwell time y dashboard protegido.

Preserva controles, layout, paneles, proyectos y comportamiento existente.

Valida todos los datos en servidor. No recojas informacion personal. No uses datos mock en produccion. Prueba endpoints, base de datos, validaciones y build final.
```

## 11. Conclusion

El video ensena un flujo moderno de desarrollo asistido por IA: no se trata de pedir una web y esperar, sino de dirigir al modelo como si fuera un equipo tecnico. La autora separa concepto, prompt engineering, frontend, backend, analitica, pruebas y despliegue.

Lo mas valioso no es el museo 3D en si, sino la metodologia:

- Primero definir experiencia.
- Despues convertirla en especificacion tecnica.
- Luego generar por fases.
- Finalmente probar y medir.

Ese mismo enfoque se puede aplicar a portfolios de arquitectura, inmobiliarias, moda, arte, producto digital, estudios creativos, restaurantes premium, showrooms, educacion interactiva o cualquier negocio donde la experiencia visual sea parte del valor.
