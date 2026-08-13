# 09 · OUTBOUND — Estrategia + Playbook del canal manual (SoltyAI)

> Canal **gratuito y de corto plazo**, que corre **en paralelo a todos los demás**: contacto directo
> 1-a-1 a negocios, con el mismo gancho ("vive el bot ahora") y el mismo bot de demo. Es el único
> carril que paga en **días** y no tiene CAC.
>
> **Documento en dos partes:** **PARTE A — Estrategia** (el "por qué": fuente de datos, priorización,
> diversificación, cómo encaja en la secuencia de canales) y **PARTE B — Playbook** (el "al pie":
> guiones de mensajes, mini-guion de conversación, TODAS las objeciones, cierre por producto, hoja de
> conciliación, rutina diaria). Ten la PARTE B abierta mientras hablas con prospectos.
>
> **Parche 2026-08-13, dos cosas:** (1) **WhatsApp ya se puede prometer** — Meta aprobó a SoltyAI como
> Tech Provider el 6-ago y el bot atiende por la API oficial desde el 7-ago. Todo lo que este doc decía
> de "no prometer WhatsApp API" quedó al revés y se reescribió. **Lo que NO cambió:** el outbound se
> sigue haciendo **a mano, nunca por la API**. (2) La lista dejó de ser un CSV de 906 filas: son **865
> prospectos vivos en la suite**.
>
> Autoridad: `01-SOURCE-BRIEF.md`. Cruces: `15-CANALES-Y-SECUENCIA.md` (el orden de los carriles),
> `business/16-motor-cold-email.md` (el carril de correo), `08-TRACKING-SETUP.md` (conciliación),
> `11-PRE-LAUNCH-CHECKLIST.md` (preparativos).

---

# PARTE A — Estrategia

## A.1 Fuente de datos

**La lista vive en la suite, no en un archivo.** Hoy son **865 prospectos en producción**, con estado,
fecha de contacto y bitácora por prospecto, repartidos en dos carriles que no se mezclan:

| Carril | Cuántos | Cómo se contacta |
|---|---|---|
| **CORREO** | **305** | secuencia de cold email por **Instantly** (`business/16-motor-cold-email.md`) |
| **DIRECTO** | **560** | 1-a-1 **a mano**: teléfono, WhatsApp, Instagram o visita |

Dentro de los 560 del carril DIRECTO: **164 con web viva** · **260 por teléfono/WhatsApp/Instagram** ·
**136 sin canal de contacto** · y **64 del área metropolitana de Bucaramanga**, que son los únicos a
quienes se les puede ofrecer **visita presencial**.

> El CSV viejo (`D:\Trabajo\portafolio\landing\outreach\prospectos.csv`, 906 filas scrapeadas de Maps)
> fue el punto de partida y **ya no es la fuente**. Si un número de este documento no cuadra con la
> suite, **manda la suite**.

- Vertical dominante de la lista original: **inmobiliarias** → cierra con el vertical inmobiliaria,
  normalmente en el plan **Pro** (§B.6).

## A.2 Priorizar la lista (no contactar 865 a ciegas)

1. **Empieza por los 64 del área metropolitana de Bucaramanga.** Es la sede, es donde se puede ofrecer
   **visita presencial**, y de ahí salen los primeros testimonios. Ahí se afina el guion antes de
   escalar al resto.
2. Orden por **señal de dolor**: rating alto + muchas reseñas = negocio activo con volumen de clientes →
   pierde más leads fuera de horario.
3. **Los 164 con web viva** son los que mejor toleran el correo (hay dirección pública y contexto para
   personalizar). **Los 260 con teléfono/WhatsApp/Instagram** son el lote del 1-a-1 manual.
4. **Los 136 sin canal** no se trabajan hasta encontrarles uno: contactar a ciegas gasta el tiempo que
   es el recurso escaso, no la lista.

## A.3 Canal + gancho

- **WhatsApp 1-a-1 manual** (natural en Colombia; tienen teléfono). El diferenciador es el mismo de
  siempre: **les mandas el video y el bot de demo en vivo** (el bot demo abierto corre por Telegram)
  atendiendo a un cliente de **su rubro** → *viven el producto*, no leen un folleto.
- **Y ahora hay un argumento nuevo que antes no existía:** cuando cierran, **el bot les queda
  atendiendo en su propio WhatsApp**, con la API oficial de Meta. Eso convierte la objeción más común
  del canal en el cierre (§B.5, objeción 6).
- El moat del mensaje: **lo adaptamos a su negocio en la instalación** (su inventario, sus precios, su forma
  de atender) — eso justifica el setup y baja la barrera (ver §B cierre y `01-SOURCE-BRIEF.md`).

## A.4 Cadencia segura (no quemar WhatsApp)

- **30–50 mensajes/día por número**, personalizados, con número **calentado / de buena reputación**.
- WhatsApp **banea cuentas nuevas que envían masivo a desconocidos** → esto es manual y gradual, **NO un blast**.
- 🔴 **La API oficial ya está habilitada, y aun así el outbound NO se hace por ahí. Nunca.** Son dos
  cosas distintas y conviene no volver a confundirlas: la WhatsApp Business API es **el producto que
  le entregamos al cliente**, no una herramienta de prospección. Mandar mensajes en frío a
  desconocidos por la API es la forma más rápida de perder el WABA que costó un App Review, y con él
  el canal de **todos** los clientes. **El outbound va a mano, uno por uno, desde un número personal
  calentado.** Lo que cambió el 7-ago es lo que se puede **prometer**, no cómo se **contacta**.

## A.5 Legal (Ley 1581 / habeas data)

- Son datos públicos B2B, pero igual: **identifícate**, da **opt-out claro**, no revendas la lista.
- **NO subas estos teléfonos a Meta** (viola ToS + Ley 1581). Respeta de inmediato a quien pida no ser contactado.

## A.6 Dónde encaja el outbound en la secuencia de canales

Meta **dejó de ser el primer carril pago** (`15-CANALES-Y-SECUENCIA.md`). El orden vigente es
**Google Business Profile (gratis, primero) → contenido orgánico a mano → Google Search ($400.000,
línea de servicio a la medida) → Meta ($1.200.000, cuando haga falta volumen)**. El outbound no está
en esa fila: corre **en paralelo, todo el tiempo**.

- **Es el que financia a los demás.** El GBP tarda semanas, el Search semanas, Meta meses y el
  orgánico entre 6 y 12 meses. Las reuniones de esta semana salen de acá.
- **Mismo bot y mismo video de demo** para outbound y para lo que se publique.
- Lo que mejor responde acá (vertical, mensaje, objeción) **es el insumo de los otros carriles**: hoy
  alimenta las keywords y el texto de Google, mañana las creatividades de Meta. Es investigación de
  mercado que no cuesta un peso.
- **Ojo con el mensaje líder:** acá el titular es **el bot**, igual que en orgánico, Meta y la landing.
  El **servicio a la medida** sólo es titular en Google Search y en el Business Profile. En una
  conversación de outbound el servicio se menciona como palanca, no como oferta de entrada.
- Quien muestra interés y no cierra → semilla de retargeting, cuando Meta entre.
- 🔴 **Nunca subir estos teléfonos a Meta** como audiencia (ToS + Ley 1581). Eso no cambia con nada.

## A.7 Diversificar con otras listas (otros rubros)

**Suma mucho** — cada nuevo rubro = una campaña de outbound con el bot **pre-entrenado por vertical**, y un
producto distinto que cerrar (ver `05-PRICING.md`):

- **Citas** (peluquerías, barberías, spas, estética, uñas, consultorios) → dolor agudo de agenda/no-shows →
  vertical **citas**, normalmente en **Esencial** (agendar y recordar no necesita IA, y sin IA el margen
  es mejor).
- **Domicilios / comercio** (restaurantes barrio, tiendas, distribuidoras) → catálogo + pedidos →
  verticales **comercio** / **domicilios**, normalmente en **Pro**. Probado en piloto real (Bucaradomi).
- **Automotor / servicios con agenda** → cotización/agenda → Agenda o Integraciones según el caso.

Recomendación: **un rubro nuevo a la vez** (no disperses), prioriza donde el bot es más fuerte y el dolor
más claro (citas y comercio son apuestas altas). Mismo guion de 3 toques, mensaje adaptado al rubro.

## A.8 Resultados esperados (estimados — son hipótesis a validar)

> Outbound a lista scrapeada = menor intención que el inbound de pauta, pero **gratis y dirigido**. Tasas
> de referencia para B2B en frío **bien personalizado** con gancho de demo en vivo:

| Métrica (estimado) | Rango |
|---|---|
| Responden | 8–18 % |
| Toman la demo | 3–8 % |
| **Cierran** | **1–3 %** |

> 🔴 **Estas tasas son de WhatsApp 1-a-1 manual, que es el canal de este documento. NO se le aplican
> al cold email.** El correo en frío responde mucho menos por su naturaleza, y su umbral sano es
> **3–5 % de respuestas** (`business/16-motor-cold-email.md` §8, junto con el resto del tablero de
> entregabilidad: bounce <3 %, spam ~0). Medir la tanda 1 de correo contra el 8–18 % de acá haría
> parecer fracasado un canal que está funcionando bien, y llevaría a reescribir un gancho que sirve.
> Regla: **el canal decide el umbral** — WhatsApp manual mira esta tabla, el correo mira la de `16`.

- **Por cada 100 prospectos bien trabajados → ~1–3 clientes (estimado).**
- Sobre los **865** vivos, techo teórico **~9–26 clientes (estimado)** *si se trabajaran todos bien*
  (no realista de una; trabaja por lotes y prioriza calidad).
- Realista para un primer lote de ~150–200 (los 64 del área metropolitana + los mejores del carril
  DIRECTO): **~2–6 clientes (estimado).**
- La personalización y el **gancho de demo en vivo** mueven estas tasas hacia arriba; un mensaje genérico
  las hunde.
- **Ojo con qué se cuenta hoy:** el KPI que manda pasó de "demos entregadas" a **reuniones agendadas**
  (meta: **2 por semana**). En este canal la demo y la reunión suelen ser el mismo evento, pero lo que
  entra al tablero es la **cita agendada**, no el "le mandé el link".

## A.9 Plan operativo (vista de pájaro — detalle al pie en PARTE B)

1. Lote piloto: los **64 del área metropolitana** + el top del carril DIRECTO por reseñas → ~150–200
   prospectos.
2. Afina el guion con los primeros 30–40 (mide respuesta).
3. Escala al resto de la lista; en paralelo, saca un **2º rubro** (citas o comercio) para diversificar.
4. **Lleva el estado en la suite**, no en un archivo aparte, y reinvierte: los cierres del outbound son
   los que financian el carril de Google.

---

# PARTE B — Playbook (al pie, para tener abierto mientras hablas)

> **Contexto fijo (no improvisar):** la lista vive en la suite — **865 prospectos**, 305 en CORREO y
> 560 en DIRECTO, con las inmobiliarias como rubro dominante. Canal de contacto: **WhatsApp 1-a-1
> manual, nunca por API.** La demo que se manda es **el video** y, cuando hay con quién aprobar el
> acceso, **el bot en vivo por Telegram** (es donde está el bot demo abierto).
> **WhatsApp sí se promete** como canal del producto: el bot atiende por la API oficial desde el
> 7-ago-2026. Voz de marca: **directa, tuteo, frases cortas, valor primero, opt-out siempre.**

## B.0 Reglas de oro (léelas una vez al día)

1. **Personaliza el primer toque.** Nombre real de la inmobiliaria + una señal concreta (reseñas, ciudad).
   Mensaje genérico = lo hunde todo.
2. **Un solo CTA:** hablar con el bot. No expliques precios en el toque 1.
3. **Opt-out explícito** en el primer mensaje ("si no te interesa me dices y no insisto"). Respétalo al instante.
4. **Cadencia segura:** 30–50 mensajes/día por número, número calentado. Manual y gradual, **no un blast**.
5. **El gancho es la demo, no el pitch.** Que vivan el producto atendiendo a un cliente de SU rubro.
6. **No subas estos teléfonos a Meta** (viola ToS + Ley 1581). Identifícate y da opt-out.
7. **Honestidad, versión 2026-08.** **WhatsApp sí se promete:** el bot atiende por la API oficial de
   Meta desde el 7-ago, y decirlo es un argumento de venta, no un riesgo. Lo que **no** se promete:
   el **widget web**, que sigue en *próximamente*; ni un plazo de conexión al día, porque el primer
   WABA de un cliente real se registra en vivo. Y la demo abierta corre por **Telegram**: se dice tal
   cual, no se disfraza.
8. 🔴 **Escribes tú, no la API.** Todo este canal es a mano desde un número calentado. La API oficial
   es lo que el cliente recibe cuando cierra, jamás por donde le llegas.

## B.1 Antes de empezar (preparación)

- [ ] **Bot de demo listo** en Telegram, pre-entrenado con el vertical inmobiliaria, atendiendo un caso real
      (precios, disponibilidad, agenda de visita).
- [ ] **Deep-link de atribución** por lote: `t.me/<bot>?start=outbound_inmo_<lote>` (ej. `..._bga` para
      Bucaramanga). Así sabes de qué lote vino cada lead (conecta con `08-TRACKING-SETUP.md`).
- [ ] **Número WhatsApp calentado** (no recién creado; con foto, nombre "SoltyAI", uso previo).
      **No es el número de la API**: ese es el del producto, este es el de la prospección a mano.
- [ ] **La suite abierta** con el lote del día, o la hoja de conciliación (§B.7) si trabajas offline.
- [ ] **Lote del día definido** (30–50 contactos), priorizado según §A.2.

## B.2 Paso a paso operativo

1. **Prioriza el lote.** Empieza por los **64 del área metropolitana** — sede, mejor soporte, visita
   posible y primeros testimonios. Dentro del lote, ordena por **rating alto + muchas reseñas**. Los
   que no tienen web → Plantilla B.
2. **Toque 1 (Día 0):** mensaje personalizado + el video. Marca `contactado` en la suite.
3. **Espera respuesta.** Si responden → §B.4 (conducir a la demo y a la reunión).
4. **Toque 2 (Día 2–3):** seguimiento suave a quien no respondió o abrió y no siguió. Marca `respondio`/`demo`.
5. **Toque 3 (Día 5–7):** oferta de setup + cierre. Marca `propuesta`/`cliente`/`descartado`.
6. **Registra TODO** (estado, canal, fecha, notas). Sin registro no hay conciliación.
7. **Afina con los primeros 30–40:** mide tasa de respuesta, ajusta el mensaje ganador, recién ahí
   escala al resto de la lista.

> ## ⚠️ Los mensajes de abajo quedaron desactualizados (2026-07-25)
>
> **Usa `redes/outbound-mensajes.txt`**, que es la versión vigente y está en texto plano para pegar
> directo en WhatsApp. Cuatro cosas cambiaron y por eso no sirve copiar de aquí:
>
> 1. **Precios en COP** (Esencial $290.000 / Pro $490.000 / Premium $790.000 + setup $400.000), no los
>    USD de abajo.
> 2. **Los asteriscos de markdown se pegan literales en WhatsApp** (`**así**`), contra la regla 10 de
>    `business/13`. El `.txt` va limpio.
> 3. **El gancho del toque 1 ya no es el link al bot, es el video.** El bot demo tiene compuerta
>    `accessMode: request`: quien entra sin autorización recibe una pre-calificación, no el bot
>    buscando inmuebles. El bot se ofrece **cuando responden y hay alguien para aprobar el acceso en
>    el momento**, que es un paso de ventas, no un obstáculo.
> 4. **Las plantillas dicen "un asistente de IA", y eso está prohibido desde el 2026-08-13.** La
>    política de IA de WhatsApp no admite bots de propósito general: se vende **un bot de atención
>    para inmobiliarias** que responde precios, disponibilidad y agenda visitas. Se nombra lo que
>    hace, no la tecnología con que lo hace. Es la corrección que más pesa de las cuatro, porque las
>    otras tres cuestan un mensaje y esta puede costar el canal.
>
> Lo demás de este documento (estrategia, priorización de la lista, cadencia, legal, conciliación)
> sigue vigente.

## B.3 Mensajes de entrada (copiar y pegar — rellena los [corchetes])

### Toque 1 — Plantilla A (inmobiliaria con buen rating)
> Hola [nombre] 👋, vi que **[Inmobiliaria X]** tiene muy buenas reseñas en [ciudad] 👏. Te escribo de **SoltyAI**: armamos un asistente de IA que responde y califica clientes 24/7 (precios, disponibilidad, agenda de visitas) — **adaptado a tu inventario y tu forma de trabajar**. ¿Te muestro cómo atendería a **TUS** clientes? Habla con el bot acá 👉 [link Telegram]. Si no te interesa, me dices y no insisto 🙏.

### Toque 1 — Plantilla B (negocio sin website)
> Hola [nombre] 👋, vi **[Inmobiliaria X]** en Google Maps. Muchos clientes escriben y a veces uno no alcanza a responder a tiempo… y se van a otra. Tenemos un asistente de IA que contesta y califica clientes por ti **24/7**, montado en días **con tus datos**. ¿Te lo muestro en vivo? 👉 [link]. Si prefieres que no te escriba más, dímelo 🙏.

### Toque 1 — Plantilla C (variante corta / directa)
> Hola [nombre], ¿qué tal? Soy de **SoltyAI**. Pregunta rápida: cuando un cliente le escribe a [Inmobiliaria X] **fuera de horario**, ¿quién responde? Tenemos un bot de IA que lo hace por ustedes y agenda visitas solo. Mira cómo funciona 👉 [link]. Si no aplica, sin problema 🙏.

### Toque 2 — Seguimiento (Día 2–3, a quien no respondió)
> Hola [nombre], te escribí hace un par de días 🙂. Te dejo el bot otra vez por si quieres verlo en 1 minuto 👉 [link]. La gracia es que vende y agenda **mientras tú haces otras cosas**. ¿Lo probamos?

### Toque 2 — Si abrió el bot pero no cerró
> Vi que alcanzaste a probar el bot 🙌. ¿Qué te pareció? Si quieres, **te lo dejo configurado con los datos reales de [Inmobiliaria X]** (tus proyectos, precios, zonas) para que veas cómo atendería de verdad, sin compromiso.

### Toque 3 — Oferta + cierre (Día 5–7)
> Hola [nombre], cierro el tema 🙂. Si te animas, lo montamos para [Inmobiliaria X] **esta semana**: setup de **$400.000** (lo dejamos andando con tu inventario, y pagas la mitad al firmar y el resto cuando ya esté atendiendo) y luego **$490.000/mes + IVA** todo incluido — IA + soporte, **sin sorpresas de tokens**. ¿Agendamos 10 min para dejarlo listo?

> 🔴 **Nota de precio (corregida 2026-08-09).** Los USD de arriba son del modelo viejo y **no se cotizan**.
> El precio vigente sale de la **D1**: `marketing/data/canon.json` + `catalogo.json`, y ningún doc
> —este incluido— lo define por su cuenta. Hoy: **Esencial $290.000/mes** (200 conversaciones, sin IA) ·
> **Pro $490.000/mes** (500, con IA) · **Premium $790.000/mes** (1500, con IA) · **setup $400.000**
> única vez (50 % al firmar, el resto cuando el bot ya atiende) · excedente **$50.000 por cada 100
> conversaciones**. **Todo eso es ANTES de IVA: el 19 % se suma encima.** El caballo de batalla en frío
> para una inmobiliaria PYME es **Pro**; Premium sólo con inventario grande o mucho volumen.
> Los planes **Starter / Growth** no existen — pero ojo, **"Pro" a secas SÍ existe**: es el plan COP de
> arriba, no el viejo tier en dólares.

## B.4 Cuando responden: conducir hacia la demo (mini-guion)

**Objetivo: que entren al bot y luego agendar 10 min.** No vendas precio antes de tiempo.

1. **Agradece + reengancha al bot:**
   > ¡Genial que respondas! 🙌 ¿Ya hablaste con el bot? Mándale "hola" y pregúntale por un inmueble como si fueras un cliente 👉 [link]. Te aviso: te va a sorprender lo natural que responde.
2. **Si dudan o preguntan "¿qué es exactamente?":**
   > Es un bot de atención para inmobiliarias, conectado a tus proyectos. Responde precios, disponibilidad y agenda visitas por chat, 24/7, sin que tú estés. Tú recibes el cliente ya **calificado y con la visita agendada**.
   >
   > 🔴 Fíjate en cómo está dicho: **"un bot para inmobiliarias que hace esto, esto y esto"**, nunca
   > "un asistente de IA". No es un matiz de estilo: la política de IA de WhatsApp **prohíbe** los
   > bots de propósito general, y posicionarnos así pone en riesgo el canal entero, no un mensaje.
3. **Después de que prueben el bot → cierra a reunión + ofrece el setup como prueba:**
   > ¿Cómo te pareció? Si te gusta, **te lo dejo configurado con los datos reales de [Inmobiliaria X]** para que lo pruebes de verdad. ¿Tienes 10 min hoy o mañana para dejarlo armado?
4. **Captura el lead** (nombre, inmobiliaria, ciudad, **rubro/vertical**, mejor horario) y márcalo
   `demo`/`propuesta` en la hoja.

## B.5 Objeciones (respuestas listas al pie)

> Regla: **valida la objeción primero**, luego responde corto, y **redirige al bot o a la reunión**. Nunca discutas.

| # | Objeción del prospecto | Respuesta lista |
|---|---|---|
| 1 | **"No me interesa / no gracias"** | "Sin problema, gracias por responder 🙏. Te dejo el bot por si algún día quieres verlo [link]. ¡Éxitos!" → marca `descartado`. (No insistas.) |
| 2 | **"¿Cuánto cuesta?"** (muy pronto) | "Depende de lo que necesites, pero para inmobiliaria el plan que mejor encaja es **Pro: $490.000/mes + IVA** (500 conversaciones, con IA), más un **setup de $400.000** donde te lo dejamos andando con tu inventario, y del setup pagas **la mitad al firmar y la otra mitad cuando el bot ya esté atendiendo**. Antes de hablar de plata, ¿quieres verlo funcionando con tus datos? Te toma 1 min 👉 [link]." |
| 3 | **"Está muy caro"** | "Te entiendo. Mira: un asesor cuesta $1.2M+/mes y no cubre 24/7. El bot responde **todos** los canales sin descanso por una fracción, e **incluimos la IA sin cobrarte tokens aparte**. Con que cierres **una venta extra** que hoy se te escapa de noche, ya se pagó. ¿Lo vemos con tus números?" |
| 4 | **"Ya tengo a alguien que responde / una secretaria"** | "Perfecto, el bot no la reemplaza: le **quita las 10 preguntas repetitivas** y atiende cuando ella no está (noches, fines). Ella se enfoca en cerrar, el bot filtra y agenda. ¿Te muestro cómo se reparten el trabajo?" |
| 5 | **"Ya uso WhatsApp Business / respuestas automáticas"** | "Esas son respuestas fijas; esto **entiende y conversa** como una persona: responde por precio, zona, disponibilidad y **agenda la visita solo**. Pruébalo 1 min y notas la diferencia 👉 [link]." |
| 6 | **"¿Es por WhatsApp?"** | **"Sí, por WhatsApp."** El bot atiende con la **API oficial de Meta**, no con un celular con una app pegada: SoltyAI es **Tech Provider aprobado por Meta**, así que queda montado sobre tu propia cuenta de WhatsApp Business, con tu número y tu nombre. **Y no te toca configurar nada:** nos agregas como socio y la conexión la hacemos nosotros. La demo te la muestro por **Telegram** porque ahí tengo el bot abierto para que lo pruebes sin permisos ni esperas; de cara a tu cliente es idéntico. Mándale 'hola' 👉 [link]." |
| 7 | **"No tengo tiempo ahora"** | "Tranquilo, justo por eso existe 😅. ¿Te dejo el link y lo pruebas cuando puedas? Son 60 segundos 👉 [link]. Si te gusta, coordinamos 10 min y lo dejo listo yo." |
| 8 | **"¿Esto es seguro / qué hacen con mis datos?"** | "Buena pregunta. Tus datos son tuyos, los puedes exportar y no los revendemos; cumplimos la ley de datos (1581). El bot solo usa la info que TÚ le cargas de tu negocio." |
| 9 | **"¿Y si responde mal / dice algo equivocado?"** | "Solo responde con la info que le cargas (tus proyectos, precios, FAQ); si no sabe algo, **pasa el chat a un humano** en vez de inventar. Tú ves todas las conversaciones en un panel." |
| 10 | **"Mándame info / un PDF"** | "Mejor que un PDF: **habla con el bot 1 minuto** y lo vives 👉 [link]. Es la mejor 'info' que te puedo mandar. Después te paso el resumen de precios si te interesa." |
| 11 | **"¿Cómo sé que funciona / tienen casos?"** | "Estamos arrancando con pilotos en [ciudad] justamente por eso 🙂 — ya tenemos uno andando en domicilios. La mejor prueba es que lo veas tú: pruébalo con un caso de tu negocio 👉 [link] y me dices si te sirve." |
| 12 | **"¿Necesito saber de tecnología / instalarlo?"** | "Cero. **Nosotros lo montamos** con tus datos en días, sin que toques código. Tú solo lo usas desde el primer día — ese es justo el trabajo del setup." |
| 13 | **"Déjame pensarlo / lo hablo con mi socio"** | "Claro 👍. Para que lo decidan con algo en la mano, ¿quieres que se lo deje configurado **con datos reales de [Inmobiliaria X]** y así lo prueban los dos? Sin compromiso." |
| 14 | **"¿De dónde sacaste mi número?"** | "De tu perfil público en Google Maps 🙂. Te escribí porque [Inmobiliaria X] se ve activa y creo que esto te suma. Si prefieres que no te contacte más, lo respeto al instante." |
| 15 | **"¿Hay permanencia / contrato?"** | "Sin permanencia. Es mensual y lo cancelas cuando quieras; tus datos te los llevas. La idea es que te quedes porque te sirve, no porque estés amarrado." |

> 🔴 **Tres cosas que la objeción 6 NO autoriza a decir**, y por eso quedan escritas al lado de ella:
> 1. **No prometas plazos de conexión.** El canal se probó contra **nuestro propio número**; el primer
>    WABA de un cliente real se registra en vivo. "Lo conectamos nosotros", sí. "Queda listo mañana",
>    no, hasta que lo hayamos hecho una vez.
> 2. **No ofrezcas autoservicio.** La conexión va por el **camino A (asistida)**: el cliente nos agrega
>    como socio y lo registramos nosotros. El Embedded Signup necesita un permiso que **no** quedó
>    aprobado y se construye con 3 clientes o más.
> 3. **No prometas el bot en la web.** El widget del sitio sigue en **próximamente**: no existe. Los
>    canales que se prometen son **WhatsApp y Telegram**, y nada más.

## B.6 Cierre (cuando hay interés real) — por producto

1. **Agenda 10 min** (call o WhatsApp) para configurar.
2. **Propón el plan** — la fuente es la **D1** (`marketing/data/canon.json`), no este doc. Para la lista
   actual (inmobiliarias), todo **antes de IVA**:
   - **Pro — $490.000/mes + setup $400.000.** El caballo de batalla en frío para una PYME de 3–15
     agentes: 500 conversaciones, con IA, RAG de inventario + pre-calificación + agenda de visitas.
   - **Premium — $790.000/mes + setup $400.000.** 1500 conversaciones. Sólo para inventarios grandes
     o mucho volumen de consultas.
   - **Esencial — $290.000/mes + setup $400.000.** 200 conversaciones y **sin IA** (flujo fijo): la
     salida cuando el presupuesto no da y el caso no necesita que el bot improvise.
   - Excedente: **$50.000 por cada 100 conversaciones** de más.
   - **Descuento autorizado:** primeros clientes **−30 % por 3 meses** (5 cupos, a cambio del caso de
     estudio). ONG/educación −25 % permanente, caso por caso. **No se acumulan: se aplica el mayor.**
3. **El setup ES la adaptación done-for-you** — se paga una vez, deja el bot andando con SU inventario, y
   es la prueba de valor que baja la barrera (no una barrera). El prospecto ve SU negocio funcionando antes
   de pagar mensualidad.
4. **Si el setup frena el cierre:** ofrece dejar primero el setup-prueba con sus datos reales para que lo
   viva, o ajustar el alcance del setup; nunca bajes a planes inexistentes.
5. **Bundle:** si toma un 2º producto (p. ej. agrega Citas para su recepción), **−10% desde el 2º producto**.
6. Marca `cliente` y pásalo a onboarding.

> **Para otros rubros** (si diversificas, §A.7): **los planes son los mismos** — lo que cambia es la
> vertical que se activa, no el precio. Una peluquería o un consultorio suele entrar por **Esencial**
> ($290.000/mes, sin IA, flujo fijo: agendar y recordar no necesita que el bot improvise); una tienda o
> un operador de domicilios con catálogo, por **Pro**. **Nunca** menciones Starter ni Growth: no existen.

## B.7 Hoja de conciliación (el tablero de conversión)

**Opción A — la suite, que es donde viven los 865 prospectos** (el CSV viejo quedó superado). Por
prospecto se lleva lo mismo de siempre:

| Campo | Qué poner |
|---|---|
| `estado_embudo` | `contactado` → `respondio` → `demo` → `setup-prueba` → `propuesta` → `cliente` / `descartado` |
| `canal` | `whatsapp` (o `telegram`/`llamada`/`correo` si cambia) |
| `fecha_contacto` | fecha del toque 1 (YYYY-MM-DD) |
| `notas` | qué dijo, objeción, **rubro/vertical**, próximo paso, fecha del próximo toque |

> El estado **`setup-prueba`** (le dejamos el bot con sus datos reales) es el mismo de `08-TRACKING-SETUP.md`
> §5 — mide demo → setup-prueba → cierre para ver dónde se cae el embudo.

**Opción B — hoja resumen por lote** (para ver tasas de un vistazo; cópiala a Sheets/Excel):

| Lote | Contactados | Respondieron | **Reuniones agendadas** | Setup-prueba | Propuestas | Cierres | % Resp. | % Reunión | % Cierre | Notas |
|---|---|---|---|---|---|---|---|---|---|---|
| Área metropolitana (piloto, 64) | | | | | | | | | | |
| DIRECTO lote 1 | | | | | | | | | | |
| CORREO tanda 1 (Instantly) | | | | | | | | | | |
| **TOTAL** | | | | | | | | | | |

**Fórmulas:** `% Resp = Respondieron / Contactados` · `% Reunión = Reuniones / Contactados` ·
`% Cierre = Cierres / Contactados`.

> **La columna cambió de nombre a propósito.** Era "Demos (entraron al bot)"; hoy es **reuniones
> agendadas**, que es el KPI que manda (meta: 2 por semana). Entrar al bot sigue siendo bueno y sigue
> valiendo la pena anotarlo en las notas, pero no es lo que se cuenta.

**Benchmarks de referencia (estimado — B2B frío bien personalizado con demo en vivo, **por WhatsApp
1-a-1 manual**; el cold email se mide contra `business/16` §8, ver el aviso de §A.8):**
- Responden **8–18 %** · Toman la demo **3–8 %** · **Cierran 1–3 %**.
- ≈ **1–3 clientes por cada 100 prospectos** bien trabajados (estimado).
- Primer lote de ~150–200 (los 64 del área metropolitana + top del DIRECTO): **~2–6 clientes** (estimado).

**Seguimiento individual (mini-tabla diaria del que está "en juego"):**

| Inmobiliaria | Ciudad | Estado | Último toque | Próximo toque | Objeción/Nota |
|---|---|---|---|---|---|
| | | | | | |

## B.8 Rutina diaria sugerida

1. **Mañana:** elige el lote del día (30–50), prioriza por rating/reseñas.
2. Envía los **toque 1** personalizados. Marca `contactado`.
3. **A lo largo del día:** responde a quien escriba (§B.4), conduce al bot, agenda.
4. **Programa los toque 2 y 3** según la fecha registrada (Día 2–3 y 5–7).
5. **Tarde:** actualiza el estado en la suite (estados + notas + rubro).
6. **Cada viernes:** revisa tasas por lote, quédate con el mensaje ganador, escala al siguiente lote.

---

> **Cómo alimenta este canal a los demás (recordatorio):** lo que mejor responde aquí
> (vertical/mensaje/objeción) es el insumo del carril que esté abierto. Hoy son **Google Business
> Profile y Google Search** —el orden vigente lo manda `15-CANALES-Y-SECUENCIA.md`—, y mañana las
> creatividades de Meta, que quedó **relegado hasta que haga falta volumen**. Quien muestra interés y
> no cierra → semilla de retargeting cuando Meta entre. Mismo bot y mismo video de demo para todo.
>
> Y el recordatorio que no caduca: **acá se escribe a mano.** La API oficial de WhatsApp es lo que el
> cliente recibe cuando cierra, nunca por donde se le contacta en frío.
