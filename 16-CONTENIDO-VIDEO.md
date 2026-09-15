# 16 · La serie de video: enseñar qué hace el software por un negocio

> **Decidido el 2026-08-17.** El fundador pidió una máquina para producir contenido de video de
> buena calidad **rápido**, para LinkedIn primero y las demás redes después, con el objetivo de
> generar flujo mientras la línea grande madura. Este doc es esa máquina.
>
> **Cambia una regla del 13-ago:** el orgánico deja de llevar el bot como mensaje líder y pasa a
> llevar el **servicio a la medida**. El motivo, textual: *«no pongamos reglas que nos impidan
> obtener beneficios a nivel de empresa, hoy por hoy lo que nos tiene con vida es justamente el
> desarrollo a la medida»*. El canon ya se movió (`data/canon.json → mensajeLiderPorCanal._cambio`).
>
> 🔄 **Actualizado el 2026-08-22 — la tanda 1 se reordenó ANTES de grabarse.** Al auditar la oferta
> salió que **7 de los 10 guiones eran de la línea `bot`** y abrían en LinkedIn, donde el canon manda
> `servicio`. Nada lo cazaba: el guardrail `mensajeLider` excluye `redes/` a propósito. El orden nuevo
> abre con **L1 (producto vertical, domicilios — el único que hoy paga)**, sigue con **L3 (a la
> medida)** y manda los de bot a IG/TikTok. Ningún guion se reescribió. Arquitectura completa:
> **`18-ARQUITECTURA-DE-OFERTA.md`**; el orden nuevo, en `redes/guiones-tanda-1.md`.
> Complementa a `15-CANALES-Y-SECUENCIA.md §5`, no lo reemplaza: la regla de las 8 semanas a mano
> **sigue en pie**.
>
> 🆕 **Nuevo el 2026-09-08: el ángulo «¿lo necesitas?».** Los cinco guiones que explican qué es una
> cosa (página web, desarrollo a la medida, ERP, CRM, bot) y terminan diciendo si la necesitas o no,
> con la mecánica de «comenta la palabra y te escribo», viven en
> **`redes/videos-angulo-lo-necesitas.md`**. Respetan lo de acá: cuatro golpes (§3), unas 140 palabras
> y aritmética en horas y no en pesos (§2). La categoría es el título de la serie, nunca el arranque
> del video, que abre con la escena. **Y el DM se contesta con una pregunta, no con un link:** el
> enlace a `/contacto` sale sólo cuando el prospecto lo pide o cuando ya hay una reunión que agendar,
> porque mandarlo de entrada es lo que convierte la conversación en publicidad.
>
> 🔄 **Reescrito el 2026-09-15 con la evidencia de 2026 (`20-ORGANICO-QUE-CAMBIA.md`).** Cuatro
> cosas que este doc daba por buenas ya no lo son: **el link en el primer comentario está suprimido**
> en LinkedIn (hasta 80%), **«comenta la palabra» es engagement bait** ahí desde marzo-2026, el
> **perfil personal rinde 5 a 10 veces la página**, y **el carrusel PDF rinde más que el video** sin
> exigir grabar. Cambian §3 (la pausa entre golpes y los dos cierres), §4 (15 videos cada 5 semanas
> y el pipeline de edición) y §5 entero (dónde y cómo se publica). Lo demás sigue igual.

---

## 1. El diagnóstico, en una línea

Lo que mata la producción de video no son las ideas: es sentarse a pensar qué decir cada vez, y
grabar de a uno. Las dos cosas se atacan con lo mismo, que es **quitarle decisiones al momento de
grabar**. Por eso la máquina tiene cuatro piezas y ninguna es una herramienta.

| # | Pieza | Qué elimina | Estado |
|---|---|---|---|
| 1 | **Banco de dolores** (`data/dolores.json`) | «¿de qué hablo hoy?» | ✅ construido 17-ago, 54 dolores |
| 2 | **Plantilla de guion de 4 golpes** | «¿cómo lo estructuro?» | ✅ definida acá (§3) |
| 3 | **Producción en lote** | «grabar es un evento» | ⏳ falta correr la tanda 1 |
| 4 | **Publicación con `origin`** | «¿esto sirvió?» | ⏳ falta el primer post |

---

## 2. Pieza 1 — El banco de dolores

**La unidad no es un tema: es una tarea manual concreta que un negocio hace hoy.** «Automatización
para pymes» no es un video. «¿Todavía copias a un cuaderno los pedidos que te llegan por WhatsApp?»
sí, porque el que lo hace se reconoce en tres segundos.

Vive en **`data/dolores.json`**: 54 dolores, 9 sectores, cada uno con la escena, la frecuencia
supuesta, el costo oculto y cómo se resuelve. Se maneja con el CLI:

```bash
npm run dolores                       # la tabla completa, agrupada por sector
npm run dolores validar               # entra en `npm run check`, falla el CI
npm run dolores tanda -- --n=10       # los 10 siguientes a grabar, en orden
npm run dolores ver -- <id>           # la ficha con los 4 golpes ya repartidos
```

### 🔴 La regla que sostiene la honestidad de la serie: **se habla en horas, no en pesos**

Cada dolor trae una frecuencia (*25 veces al día × 2 minutos*) que el CLI convierte en horas al mes.
Ese número **no es una afirmación sobre el mercado**: es aritmética de un supuesto declarado, y el
video lo dice así. *«Si tú haces esto 25 veces al día…»*. Quien se reconoce corrige el número en su
cabeza y se convence solo; quien no, no era el cliente.

Los **pesos** son otra cosa: exigen un costo-hora que hoy está en `parametros.costoHoraOperativa`
marcado `supuesto` y **sin verificar** (falta confirmar el SMMLV 2026 y el factor prestacional).
Mientras siga así, en cámara se habla en horas. Si el dueño quiere pesos, pone su propio número.
El validador grita el aviso en cada corrida para que no se olvide.

### Los tres niveles: la columna vertebral

No son categorías de archivo, son **el marco que la serie le enseña al espectador**. Es lo que
convierte 54 videos sueltos en una serie que alguien sigue:

| Nivel | Nombre | Qué hace | La promesa |
|---|---|---|---|
| 1 | **Ordenar** | El trabajo se sigue haciendo, pero queda registrado y se consulta | *Dejas de buscar* |
| 2 | **Automatizar** | La máquina hace el paso repetido | *Dejas de hacerlo* |
| 3 | **Decidir** | El sistema te dice algo que no sabías | *Dejas de adivinar* |

El nivel 3 es el que vende servicio a la medida, y casi nadie lo cuenta. «Cuántas clientas tuyas
llevan tres meses sin volver» no lo resuelve un bot de catálogo.

### El campo `evidencia` no es decoración

Las filas con `evidencia` (★ en la tabla) son las que **sólo nosotros podemos grabar**: el motor
contable que arma los asientos de un lote real de documentos DIAN, el back-office que manda las
cuentas de cobro, la firma electrónica funcionando, el piloto de domicilios. Un competidor puede
copiar el guion; no puede copiar la grabación de pantalla. **Se agotan primero**, y por eso el
comando `tanda` las pone arriba.

Lo simétrico también es regla: **el dolor sin evidencia se cuenta como dolor, nunca como caso.**
Nada de «un cliente nuestro ahorró X» si ese cliente no existe.

---

## 3. Pieza 2 — La plantilla de 4 golpes

Misma estructura **siempre**. Eso es exactamente lo que permite grabar diez seguidos sin pensar, y
lo que hace que el espectador reconozca la serie al tercer video.

**~140 palabras = 55 segundos.**

| Tiempo | Golpe | Qué va | Sale de |
|---|---|---|---|
| **0-3 s** | La escena | La tarea manual, dicha con nombre propio y en pregunta | `escena` |
| **3-15 s** | El costo | La aritmética en horas, presentada como supuesto, y el costo oculto | `frecuencia` + `costoOculto` |
| **15-40 s** | Cómo se hace | En español, sin una sola palabra técnica | `conTecnologia` |
| **40-55 s** | El número y la puerta | Las horas otra vez + «si quieres ver cómo se ve en tu negocio, escríbeme» | calculado |

Reglas de escritura que no se negocian (salen de `business/13-guia-estilo-y-prompting.md`):

- Sin rayas (—), sin tono de IA, español de Colombia, **tuteo**.
- **Cero jerga** en el golpe 3. Si hay que decir «API», «integración» o «webhook», el guion está mal.
- **Un video, un dolor, un mensaje.** Nunca dos dolores en la misma pieza y nunca «también hacemos».
- El CTA es **blando y de conversación**, no un link. La gente escribe; la venta pasa en el chat.
- **Una pausa de un segundo entre golpe y golpe** al grabar. No se nota en el video largo y es lo
  que le permite al pipeline (§4) cortar por silencio la versión de 30 s para Instagram, Facebook y
  TikTok: golpes 1, 2 y 4. El «cómo se hace» queda para la larga; en Reels el que quiere saber cómo,
  escribe.
- **El cierre se graba dos veces cuando el video va a LinkedIn y a Instagram/TikTok.** En LinkedIn
  es «si te pasa, escríbeme y te cuento cómo se ve en tu caso». En Instagram, Facebook y TikTok puede
  ser «comenta [PALABRA] y te escribo». **Nunca al revés:** en LinkedIn «comenta X» es engagement
  bait desde marzo-2026 y cuesta de 50 a 80% del alcance del post más 2 a 4 semanas de castigo.

---

## 4. Pieza 3 — Producción en lote

**Nunca un video por día.** Es la diferencia entre esto vivo en la semana 4 y esto muerto.

| Sesión | Qué | Cuánto | Quién |
|---|---|---|---|
| A | Elegir la tanda (`npm run dolores tanda -- --n=15`), escribir los 15 guiones y el texto de cada post por red | ~1,5 h | Claude, en el arnés, sin gastar API |
| B | Grabar los 15 seguidos, mismo día, misma ropa, misma luz, pausa de un segundo entre golpes | ~2 h | Carlos |
| C | Recorte vertical, subtítulos quemados, versión de 30 s, textos por red y carrusel | ~10 min | **El pipeline**, en el PC (abajo) |
| D | Programar 5 semanas en Buffer y Meta Business Suite | ~30 min | Carlos |

Una tarde de trabajo = **cinco semanas publicando** a diario entre semana. La sesión A no espera a
la B: los guiones de la tanda 2 se pueden escribir mientras se graba la 1. Del fundador salen la B,
la D y los 20 minutos después de cada post (§5); nada más.

### El pipeline de edición (2026-09-15)

Corre en el PC, sin API y sin subir nada a ningún lado. Se construye **sobre los archivos reales
de la primera grabación**, no antes (la regla de `15 §5`: se automatiza un proceso que existe).

```
entrada/<id>.mp4                 ← el MP4 crudo del celular, nombrado por el id del dolor
salida/<id>/
  largo-9x16.mp4                 ← recorte vertical, subtítulos quemados, ~55 s (LinkedIn, YouTube)
  corto-9x16.mp4                 ← golpes 1, 2 y 4 cortados por silencio, ~30 s (IG, FB, TikTok)
  linkedin.txt · instagram.txt · facebook.txt · tiktok.txt · youtube.txt
  carrusel.pdf                   ← 6 láminas desde dolores.json, sin grabar nada
```

Piezas: **ffmpeg** (recorte, subtítulos, cortes) y **faster-whisper** local (transcripción con
marcas por palabra, modelo `small` en español). Ninguna está instalada: las dos pasan por
`node security/scripts/revisar-dependencia.mjs` antes de instalarse. **El pipeline no escribe:**
los textos por red salen del guion y de la primera línea que ya están en el `.md` de la tanda, y
el carrusel repite los cuatro golpes del dolor. Reformatea y distribuye, que es exactamente lo que
`15 §5` dijo que la máquina podía ser. Lo que sigue bloqueado es el motor que **escribe** y
**publica** solo.

**Producción, no producciones.** Cara a cámara, celular, luz de ventana. Al que compra desarrollo a
la medida le compra a una persona, y la producción cara le resta credibilidad en vez de sumarla.
El único requisito técnico que sí es innegociable son los **subtítulos quemados**: se ve en silencio.

---

## 5. Pieza 4 — Publicación, y cómo sabemos si sirvió

**LinkedIn es la red de registro, y el que publica es Carlos, no la página.** Es donde está la
audiencia con presupuesto para un proyecto a la medida y donde el servicio se posiciona sin competir
con el Meta Business Agent. En 2026 el perfil personal rinde **5 a 10 veces** la página de empresa:
la página republica al día siguiente y sirve para que quien googlee vea empresa constituida; la
distribución la hace la persona.

**Cinco redes, una pieza.** Las demás reciben el mismo video sin producción adicional, y cada una
tiene su porqué en Colombia (DataReportal oct-2025):

| Red | Usuarios en Colombia | Qué hace ahí | Cómo se programa |
|---|---|---|---|
| LinkedIn (perfil) | 18M | La red de registro. Dos temas: operación colombiana y DIAN, y a la medida y domicilios | Buffer (gratis, 3 canales) |
| Facebook | 36,4M | El dueño de la pyme de barrio. Los dolores de sector | Meta Business Suite (gratis, nativo) |
| Instagram | 21,6M | Igual que Facebook, más joven | Meta Business Suite |
| TikTok | 37,7M | Igual, y el mayor crecimiento del país | Buffer |
| YouTube Shorts | 31M | **Lo único corto que Google indexa.** Título con la búsqueda, no con el gancho | Buffer |
| Google Business Profile | — | Un post semanal con el video de la semana | Desde el panel del GBP |

Metricool se descartó: su plan gratis excluye LinkedIn. A qué redes va cada dolor lo dice el banco
(`npm run dolores ver -- <id>` → `Redes`), derivado del sector: LinkedIn premia la **autoridad
temática** y un perfil que salta entre nueve sectores se suprime.

### Las reglas de publicación, con la evidencia de 2026

- **Video nativo**, subido a cada red. Todas castigan el link que saca gente de la plataforma.
- **En LinkedIn no va link. Ni en el post ni en el primer comentario.** El post con link externo
  pierde 18,8% de alcance mediano y **el comentario con link se suprime hasta 80%** (van der Blom
  2026, 1,3M posts): el atajo del «link en el primer comentario» murió. El `origin` no se pierde:
  el link de `/contacto` con `origin=linkedin` va **en Destacados del perfil** y en el campo de
  sitio web, registrado una vez con `npm run link nuevo`; el DM lleva el link sólo cuando el
  prospecto lo pide, con `origin=linkedin-dm`. En Instagram, Facebook y TikTok el link vive en la
  bio, con su `origin` por red. La atribución es **por red**, no por pieza.
- **El gancho va en la primera línea del texto del post**, no sólo en el video: LinkedIn corta en
  «ver más» y esa línea decide si alguien pone play.
- El texto del post **no es el guion del video**: el video se ve, el post se lee. Se escriben aparte.
- **«Comenta la palabra» sólo en Instagram, Facebook y TikTok.** En LinkedIn el cierre es
  «escríbeme» (§3). Y el DM se contesta **a mano** con la tabla de
  `redes/videos-angulo-lo-necesitas.md`: ManyChat gratis bajó a 25 contactos al mes en marzo-2026 y
  no se paga una herramienta hasta que 25 comentarios por video se queden cortos.
- **Un carrusel PDF por semana en LinkedIn**, generado desde `dolores.json` (6 láminas: escena,
  supuesto, costo oculto, cómo se hace, el número, la puerta). Es el formato que más rinde en
  LinkedIn en 2026 (6,6% contra 5,6% del video) y cuesta cero minutos de grabación.
- **Los 20 minutos después de publicar son el único bloque del fundador que no se negocia.** El
  algoritmo prueba el post con el 2 a 5% de la red en la primera hora; contestar los comentarios
  en los primeros 30 minutos da 64% más comentarios y 2,3× más vistas, y sólo el 5% de los posts
  flojos en esa hora se recupera. Por eso se programa a una hora fija en la que Carlos sí está con
  el teléfono (**martes a viernes, 8:00**), y publicar a una hora en la que no puede contestar es
  peor que no publicar. Comentar en posts de prospectos (10 a 15 al día, de sustancia) es el
  segundo motor de entrada y queda como **opcional declarado**: si no hay tiempo, no se cuenta como
  fallo.

### La cadencia: diario entre semana, con tres videos

| Día | LinkedIn (perfil de Carlos) | Instagram + Facebook + TikTok + Shorts |
|---|---|---|
| Lun | Video largo (55 s) | Video corto (30 s) |
| Mar | Post de texto: lo que se construyó esa semana, sin link | — |
| Mié | Carrusel del dolor de la semana | Video corto (otro dolor) |
| Jue | Video largo | Video corto |
| Vie | Video largo | Video corto (el de «¿lo necesitas?») |

Tres videos por semana con 15 grabados son **cinco semanas**. Los cortos salen de los mismos 15.
Esto es programar a mano en Buffer y Meta Business Suite, no un motor que publica: la regla de las
8 semanas a mano de `15 §5` sigue en pie.

### La métrica es **conversaciones iniciadas por semana**, no vistas

Un video de 300 vistas con 2 mensajes le gana a uno de 5.000 con cero. Las vistas se miran sólo para
comparar ganchos entre sí, nunca como resultado. El resultado es el mensaje que llega.

**Semáforo, a las 4 semanas (12 videos):** 0 conversaciones = el problema es el dolor elegido o el
gancho, no la cadencia. Se cambia de sector antes que de frecuencia.

---

## 6. Lo que este doc NO cambia

- **La regla de las 8 semanas a mano sigue en pie** (`15-CANALES-Y-SECUENCIA.md §5`). El banco de
  dolores, su CLI y el pipeline de edición (§4) **no** son la máquina de contenido: no escriben, no
  llaman a ninguna API y no publican. Ordenan y reformatean la materia prima, que es lo que hacía
  falta para que las 8 semanas sean llevaderas. El motor 1-idea→3-canales que escribe y publica
  sigue bloqueado en el tablero, y con razón.
- **El orden de los canales:** Google Business Profile primero. Es gratis, no depende de nada y
  captura intención. El contenido no lo reemplaza, lo alimenta.
- **El contenido no es el motor de flujo de este trimestre.** Compone en 3 a 6 meses. Lo que trae
  las llamadas ahora es la prospección y el GBP; el contenido hace que el que te googlee te crea.
  Si en algún momento la producción de video le está quitando horas a la prospección, la regla es
  bajar a 1 video por semana, no pausar la prospección.

---

## Relacionados

- `data/dolores.json` · `src/contenido/dolores.js` — el banco y su CLI
- `15-CANALES-Y-SECUENCIA.md` — el orden de los canales y la regla de las 8 semanas
- `data/canon.json → mensajeLiderPorCanal` — qué mensaje lidera en cada canal, y el cambio del 17-ago
- `business/13-guia-estilo-y-prompting.md` — cómo escribimos
- `business/14-estrategia-organico-social.md` — el playbook orgánico previo
