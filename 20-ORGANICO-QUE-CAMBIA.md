# 20 · Orgánico: qué cambia del plan para sacarle el mejor resultado posible

> **Escrito el 2026-09-15.** El fundador quiere publicar a diario en todas las redes, con el menor
> tiempo posible de su parte, y preguntó qué cambiaría del plan que ya está escrito. Este doc es la
> respuesta: **once cambios**, cada uno con la evidencia que lo motiva y con qué archivo toca. Se
> investigó en internet ese mismo día (fuentes al final). Lo que no cambia se dice también, porque
> el plan de `16-CONTENIDO-VIDEO.md` está bien en lo esencial y el problema no fue el plan: fue que
> **no se ha grabado nada desde el 22-ago**.
>
> **Estado: propuesta.** Ninguno de los once está aplicado. Los que tocan `canon.json`, los guiones
> o el tablero se aplican cuando el fundador diga cuáles sí (§4).

---

## 1. El diagnóstico de fondo, antes de los cambios

Hay 15 guiones escritos (10 de la tanda 1 y 5 de «¿lo necesitas?»), un banco de 54 dolores con su
CLI, la plantilla de cuatro golpes, la descripción de LinkedIn y el GBP redactados. **Cero grabado,
cero publicado.** El plan pedía una tarde de grabación cada tres semanas y esa tarde no ha pasado
en cuatro semanas. Entonces la pregunta útil no es «cómo publicar más» sino **«cómo bajar lo que
depende del fundador a lo mínimo que sí va a ocurrir»**, y que todo lo demás lo haga una máquina o
no exista.

Lo que investigar cambió, en una línea cada uno:

| Lo que el plan asume | Lo que dice la evidencia 2026 | Fuente |
|---|---|---|
| El link va en el primer comentario, con `origin` | LinkedIn **suprime los comentarios con link externo hasta 80%**; el atajo murió | van der Blom 2026, 1,3M posts |
| «Comenta la palabra y te escribo» en las 4 redes | En LinkedIn es **engagement bait** desde la actualización de marzo-2026 (50 a 80% menos alcance, 2 a 4 semanas de castigo). En Instagram y TikTok sigue siendo válido | LinkedInPreview jul-2026, Dataslayer feb-2026 |
| Se publica en «la página de LinkedIn» | El **perfil personal rinde 5 a 10 veces** más que la página de empresa; la página es credencial, no distribución | Balistro, Martal, Foundera 2026 |
| Video es el formato | El **carrusel PDF rinde más que el video** (6,6% vs 5,6% de engagement) y **no exige grabar** | Dataslayer feb-2026 |
| Un dolor por video, 9 sectores en la tanda | LinkedIn premia **autoridad temática**: 2 o 3 temas; el perfil disperso se suprime | van der Blom, Goodman 2026 |
| LinkedIn + IG + TikTok | Colombia oct-2025: TikTok 37,7M · **Facebook 36,4M** · **YouTube 31M** · Instagram 21,6M · LinkedIn 18M. Facebook y YouTube no están en el plan | Juan C. Mejía / DataReportal |
| 55 s en todas las redes | LinkedIn: 30 a 90 s. Instagram y TikTok: **15 a 35 s** | Hootsuite, Dataslayer 2026 |
| Publicar y seguir | **Contestar los comentarios en los primeros 30 min** da 64% más comentarios y 2,3× más vistas; sólo el 5% de los posts flojos en la primera hora se recupera | van der Blom 2026 |

---

## 2. Los once cambios

### C1. El video sale del perfil de Carlos, no de la página de SoltyAI

La página republica (o comparte) al día siguiente, y sirve para que quien googlee vea empresa
constituida. La distribución la hace la persona. **Toca:** el pendiente «Fijar el video como post
de la página de LinkedIn» pasa a «fijar en el perfil»; la descripción de la página queda como está.

### C2. En LinkedIn no va link. Ni en el post ni en el primer comentario

El `origin` se rescata de otra forma, sin perder la atribución:

- El link de `/contacto` con `origin=linkedin` va **en la sección Destacados del perfil** y en el
  campo de sitio web. Se registra una vez con `npm run link nuevo`.
- El **DM** lleva el link sólo cuando el prospecto lo pide (regla que ya está en
  `redes/videos-angulo-lo-necesitas.md`), y ese link lleva `origin=linkedin-dm`.
- Instagram y TikTok: el link vive en la bio, con su `origin` por red.

**Toca:** `16-CONTENIDO-VIDEO.md §5` (borrar «va en el primer comentario»), el recordatorio de la
sesión D en `redes/guiones-tanda-1.md`, y el pendiente «Publicar la tanda 1 en LinkedIn (3 por
semana) con origin registrado por pieza» que pasa a «con origin por red, no por pieza».

### C3. «Comenta la palabra» sólo en Instagram y TikTok. En LinkedIn, «escríbeme»

Los cinco guiones de «¿lo necesitas?» cierran con «Comenta WEB y te escribo». En LinkedIn ese
cierre es el patrón que el algoritmo castiga. **Toca:** en los guiones de esa serie, el golpe 4
tiene dos cierres, uno por red: `…Comenta WEB y te escribo` (IG/TikTok/Shorts) y `…Si te pasa,
escríbeme y te cuento cómo se ve en tu caso` (LinkedIn). Es una frase distinta al grabar, no un
video distinto: se graba el cierre dos veces y el pipeline arma las dos versiones (§3).

Y una consecuencia que el plan no tenía: **ManyChat gratis bajó a 25 contactos activos al mes**
(marzo-2026). No se contrata nada: el DM se contesta a mano con la tabla que ya existe, y si algún
día 25 comentarios por video se quedan cortos, ese día se paga la herramienta, no antes.

### C4. Un carrusel por semana en LinkedIn, generado sin grabar

Cada dolor del banco ya trae los cuatro golpes repartidos. Un carrusel de 6 láminas (escena,
supuesto, costo oculto, cómo se hace, el número, la puerta) sale **determinista** de
`dolores.json`, con el mismo texto que el guion. Es el formato que más rinde en LinkedIn en 2026 y
**cuesta cero minutos del fundador**. **Toca:** un generador `src/contenido/carrusel.js` que
produce el PDF (1080×1350, 6 láminas) desde el `id` del dolor. Sin dependencias nuevas si se hace
con SVG → PDF por el navegador, o con una sola aprobada si hace falta rasterizar; se decide con
`revisar-dependencia`.

### C5. LinkedIn se queda en dos temas; los sectores van a Instagram, TikTok y Facebook

Para la autoridad temática, en LinkedIn el perfil habla de **(a) operación colombiana y DIAN**
(motor contable, facturación, cotizaciones, cuentas de cobro, firma) y **(b) software a la medida
y domicilios** (Bucaradomi como lighthouse). Los dolores de peluquería, taller, academia e
inmobiliaria son valiosos, pero **su dueño no está en LinkedIn**: está en Facebook, Instagram y
TikTok. Eso ya coincide con el destino que la tanda 1 tiene desde el 22-ago (5 a 10 → IG/TikTok);
lo que cambia es que se vuelve regla del banco, no decisión por tanda. **Toca:** un campo `redes`
por dolor en `dolores.json` (o derivado del sector), y que `npm run dolores tanda` lo imprima.

### C6. Entran Facebook y YouTube Shorts, y se ordenan las herramientas gratis

Facebook tiene el doble de usuarios que Instagram en Colombia y es donde está el dueño de la
pyme de barrio; YouTube Shorts es **el único formato corto que Google indexa**, y la estrategia es
Google primero. La misma pieza sale a las cinco redes sin trabajo extra:

| Red | Cómo se programa | Costo |
|---|---|---|
| Facebook + Instagram | **Meta Business Suite**, nativo, sin límite de posts | $0 |
| LinkedIn (perfil) + TikTok + YouTube | **Buffer** gratis: 3 canales, 10 posts en cola por canal | $0 |
| Google Business Profile | Post semanal desde el panel del GBP (o Buffer si sobra canal) | $0 |

Metricool se descarta: su plan gratis **excluye LinkedIn**. YouTube Shorts lleva **título con la
búsqueda** («software a la medida en Bucaramanga: ¿lo necesitas?»), porque ahí el video se busca,
no se descubre. **Toca:** `15-CANALES-Y-SECUENCIA.md §5` (la lista de redes) y `canon.json →
mensajeLiderPorCanal` (agregar `facebook` y `youtube` a la lista de `servicio`).

### C7. Dos duraciones de la misma grabación: 55 s para LinkedIn y YouTube, 30 s para IG, TikTok y Facebook

No se graba dos veces. Se graba con **una pausa de un segundo entre golpes** y el pipeline (§3)
corta por silencio: la versión corta es golpes 1, 2 y 4 (escena, costo, número y puerta), y el
«cómo se hace» queda para la larga. En Reels y TikTok el que quiere saber cómo, escribe.
**Toca:** `16 §3` (la nota de la pausa) y la lista de la sesión B.

### C8. La cadencia: 3 videos + 1 carrusel + 1 post de texto por semana = diario entre semana

| Día | LinkedIn (perfil) | IG + FB + TikTok + Shorts |
|---|---|---|
| Lun | Video largo | Video corto |
| Mar | Post de texto: lo que se construyó esa semana (build-in-public, sin link) | — |
| Mié | Carrusel del dolor de la semana | Video corto (otro dolor) |
| Jue | Video largo | Video corto |
| Vie | Video largo | Video corto (el de «¿lo necesitas?») |

Tres videos por semana con 15 grabados son **cinco semanas** de LinkedIn. Los cortos de IG/TikTok
se sacan de los mismos 15. **La regla de las 8 semanas a mano sigue en pie** (`15 §5`): esto es
programar a mano en Buffer y Meta Business Suite, no un motor que publica.

### C9. El único bloque de tiempo del fundador que no se negocia: 20 minutos después de cada post

Los datos de 2026 son duros: la primera hora decide, y contestar en los primeros 30 minutos
multiplica el alcance por 2,3. Publicar a una hora en la que no puede contestar es peor que no
publicar. **Toca:** los posts se programan a una hora fija en la que Carlos sí está con el
teléfono (propuesta: **martes a viernes 8:00**, LinkedIn Colombia arranca temprano), y esos 20
minutos son el compromiso, no la grabación diaria. Los 15 minutos de comentar en posts de
prospectos (10 a 15 comentarios de sustancia al día) son el segundo motor de entrada y se dejan
como **opcional declarado**: si no hay tiempo, no se hace, y no se cuenta como fallo.

### C10. Grabación cada 5 semanas, 15 videos, y el pipeline hace el resto

La tarde de grabación deja de ser «cada 3 semanas, 10 videos» y pasa a **cada 5 semanas, 15
videos**, unas 2 horas. Después de eso el fundador no toca nada hasta la siguiente tanda: la
edición la hace el pipeline (§3) y la programación son 30 minutos con la carpeta ya lista.
**Toca:** `16 §4` (la tabla de sesiones) y el pendiente «Grabar y editar la tanda 1» que pasa a
«grabar 15 en una sesión» (los 10 de la tanda 1 + los 5 de «¿lo necesitas?»).

### C11. El 🟡 de los guiones `bot` se resuelve reetiquetando el banco, no moviendo el canon

Siete guiones llevan etiqueta `bot` y van a redes donde el canon manda `servicio`. Pero **ninguno
de los siete dice «bot»**: dicen «el pedido queda registrado solo», «el paciente ve los espacios
libres». Eso es la interfaz de un producto vertical, que es justo lo que decidió el 24-ago (el bot
no se vende suelto). Se cambia la etiqueta `linea: bot` por `linea: vertical` en esos dolores de
`dolores.json`, y el guardrail deja de avisar sin tocar `mensajeLiderPorCanal`. El video 5 de
«¿lo necesitas?» (el del bot) es el único que sí nombra la línea y se queda como está, en IG y
TikTok, con su 🟡 declarado.

---

## 3. El pipeline de edición: lo que sí se construye

Es la mitad del «casi no tengo tiempo». Corre en el PC, sin API, sin subir nada a ningún lado, y
se construye **sobre los archivos reales de la primera grabación**, no antes (regla de `15 §5`:
se automatiza un proceso que existe).

```
entrada/                      ← los MP4 crudos del celular, uno por guion, nombrados por id
  direccion-dictada-al-domiciliario.mp4
  …
salida/<id>/
  largo-9x16.mp4              ← recorte vertical, subtítulos quemados, 55 s
  corto-9x16.mp4              ← golpes 1, 2 y 4, cortado por silencio, ~30 s
  linkedin.txt                ← primera línea + texto del post (sin link)
  instagram.txt · tiktok.txt · facebook.txt · youtube.txt
  carrusel.pdf                ← 6 láminas desde dolores.json (C4)
```

Piezas: **ffmpeg** (recorte, subtítulos, cortes) y **faster-whisper** en local (transcripción
con marcas de tiempo por palabra, modelo `small` en español, unos 10 s por video en CPU). Ninguna
de las dos está instalada; las dos pasan por `node security/scripts/revisar-dependencia.mjs`
antes del `pip install` / descarga, y quedan en `dependencias-aprobadas.json` con motivo. El
texto de cada red **no lo escribe el pipeline**: sale del guion y de la primera línea que ya están
en el `.md`, y lo escribo yo en el arnés cuando se arma la tanda. El pipeline reformatea y
distribuye; no escribe. Eso es exactamente lo que `15 §5` dijo que la máquina podía ser.

Tiempo estimado de construcción: una sesión. Tiempo que ahorra: la sesión C entera (1,5 h por
tanda) y las decisiones de formato por red, que hoy son las que hacen que la tanda no salga.

---

## 4. Lo que decide el fundador

Los once cambios se aplican con un sí, pero cuatro son decisiones de negocio y no de técnica:

1. **C1 y C9:** el orgánico sale de **su** perfil y le pide 20 minutos después de cada post. Si eso
   no cabe, mejor 2 posts por semana con respuesta que 5 sin ella.
2. **C5 y C11:** LinkedIn se queda en dos temas y los siete dolores de sector pasan de `bot` a
   `vertical`. Es coherente con el 24-ago, pero mueve el banco.
3. **C6:** `facebook` y `youtube` entran al canon como canales con mensaje líder `servicio`.
   Toca `canon.json` (fuente única, una sesión a la vez).
4. **C3:** grabar dos cierres por video de la serie «¿lo necesitas?».

Lo que **no** cambia, para que quede dicho: se habla en horas y no en pesos; un video, un dolor;
sin casos inventados ni métricas de Bucaradomi; producción sin producciones; subtítulos quemados;
la métrica es **conversaciones iniciadas por semana**; y el semáforo de las 4 semanas.

**Lo que sigue, en orden:** el fundador graba los 15 (C10) → se construye el pipeline sobre esos
archivos (§3) → se programan cinco semanas en Buffer y Meta Business Suite (C6, C8) → a las 4
semanas se lee el semáforo.

---

## Fuentes consultadas el 2026-09-15

- Richard van der Blom, *Algorithm Insights Report 2026* (1,3M posts, 50k creadores): link en el
  cuerpo −18,8% de alcance mediano; comentarios con link externo suprimidos hasta 80%; responder
  en 30 min = +64% comentarios y 2,3× vistas. Vía [Creator Science #307](https://podcast.creatorscience.com/richard-van-der-blom-2/),
  [Postiv](https://postiv.ai/blog/how-to-post-a-link-on-linkedin), [Melanie Goodman](https://melaniegoodmanlinkedinconsultant.substack.com/p/linkedin-algorithm-2026-reach-topic-authority).
- [Dataslayer, LinkedIn Algorithm feb-2026](https://www.dataslayer.ai/blog/linkedin-algorithm-february-2026-whats-working-now):
  documentos 6,6% · video nativo 5,6% (30 a 90 s, vertical, 91% ve sin sonido) · texto 2 a 4% ·
  links externos −60% · engagement bait y encuestas penalizados desde marzo-2026.
- [LinkedInPreview, engagement bait jul-2026](https://linkedinpreview.com/blog/linkedin-engagement-bait-2026):
  los 7 patrones que se suprimen, castigo de 50 a 80% por post y 2 a 4 semanas de recuperación.
- Perfil personal vs página: [Balistro](https://www.balistro.com/linkedin-marketing-strategies-b2b-lead-generation-2026/),
  [Martal](https://martal.ca/linkedin-statistics-lb/), [Foundera](https://www.foundera.co/blog/founder-led-marketing-linkedin).
- Duraciones por red: [Hootsuite Reels 2026](https://blog.hootsuite.com/instagram-reels/),
  [ALM Corp](https://almcorp.com/blog/short-form-video-mastery-tiktok-reels-youtube-shorts-2026/).
- Shorts y Google: [Lawrence Hitches](https://www.lawrencehitches.com/youtube-shorts-seo/),
  [Joyspace](https://joyspace.ai/youtube-shorts-seo-2026-rank-google).
- Colombia por red (oct-2025): [Juan Carlos Mejía Llano / DataReportal](https://www.juancmejia.com/redes-sociales/usuarios-en-colombia-de-facebook-instagram-tiktok-linkedin-snapchat-y-twitter/).
- Herramientas: [Buffer vs Metricool](https://buffer.com/resources/buffer-vs-metricool/),
  [límites de Buffer gratis](https://boomp.net/blog/buffer-pricing-free-plan-limits-2026),
  [ManyChat gratis 25 contactos](https://setsmart.io/blog/manychat-pricing),
  [comment-to-DM sigue vigente en Instagram](https://help.manychat.com/hc/en-us/articles/16654065283100-Quick-Automation-Auto-DM-links-from-comments).
- Pipeline local: [ffmpeg-ai](https://hackaday.io/project/205368-ffmpeg-ai-fully-free-ai-video-cli-pipeline),
  [Whisper + ffmpeg](https://32blog.com/en/ffmpeg/ffmpeg-whisper-auto-subtitles).

## Relacionados

`15-CANALES-Y-SECUENCIA.md §5` · `16-CONTENIDO-VIDEO.md` · `18-ARQUITECTURA-DE-OFERTA.md §4` ·
`redes/guiones-tanda-1.md` · `redes/videos-angulo-lo-necesitas.md` · `data/dolores.json` ·
`data/canon.json → mensajeLiderPorCanal`
