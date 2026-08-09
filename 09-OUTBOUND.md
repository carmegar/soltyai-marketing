# 09 · OUTBOUND — Estrategia + Playbook del canal manual (SoltyAI)

> Canal **paralelo y gratuito** a la pauta de Meta: contacto directo 1-a-1 a negocios scrapeados de Google
> Maps, con el mismo gancho ("vive el bot ahora") y el mismo bot de demo. Ideal para presupuesto chico.
>
> **Documento en dos partes:** **PARTE A — Estrategia** (el "por qué": fuente de datos, priorización,
> diversificación, sinergia con Meta) y **PARTE B — Playbook** (el "al pie": guiones de mensajes, mini-guion
> de conversación, TODAS las objeciones, cierre por producto, hoja de conciliación, rutina diaria).
> Ten la PARTE B abierta mientras hablas con prospectos.
>
> Autoridad: `01-SOURCE-BRIEF.md`. Cruces: `04-STRATEGY.md` (embudo), `05-PRICING.md` (precios por producto),
> `08-TRACKING-SETUP.md` (conciliación), `11-PRE-LAUNCH-CHECKLIST.md` (preparativos).

---

# PARTE A — Estrategia

## A.1 Fuente de datos

- Archivo: `D:\Trabajo\portafolio\landing\outreach\prospectos.csv` (**906 prospectos**, scraping de Maps).
- Columnas: `ciudad, nombre, telefono, website, instagram, facebook, rating, resenas, direccion, maps_url, estado_embudo, canal, fecha_contacto, notas`.
- **El CSV ya es un mini-CRM:** las 4 últimas columnas (vacías) sirven para llevar el embudo.
- Distribución: **Bogotá 599 · Bucaramanga 154 · Medellín 153.** 705 con teléfono · 312 sin website · 7 con Instagram.
- Vertical dominante: **inmobiliarias** → cierra con el producto **SoltyAI Inmobiliario** (ver `05-PRICING.md`).

## A.2 Priorizar la lista (no contactar 906 a ciegas)

1. **Piloto en Bucaramanga** (sede → mejor soporte y primeros testimonios); ahí afinas el guion antes de
   escalar a Bogotá (el grueso).
2. Orden por **señal de dolor**: rating alto + muchas reseñas = negocio activo con volumen de clientes →
   pierde más leads fuera de horario.
3. Sub-segmento "**sin website**" (312): mensaje distinto (presencia digital), pero igual de válidos.

## A.3 Canal + gancho

- **WhatsApp 1-a-1 manual** (natural en Colombia; tienen teléfono). El diferenciador es el mismo de la
  pauta: **les mandas el bot de demo en vivo** (Telegram hoy) atendiendo a un cliente de **su rubro** →
  *viven el producto*, no leen un folleto.
- El moat del mensaje: **lo adaptamos a su negocio en la instalación** (su inventario, sus precios, su forma
  de atender) — eso justifica el setup y baja la barrera (ver §B cierre y `01-SOURCE-BRIEF.md`).

## A.4 Cadencia segura (no quemar WhatsApp)

- **30–50 mensajes/día por número**, personalizados, con número **calentado / de buena reputación**.
- WhatsApp **banea cuentas nuevas que envían masivo a desconocidos** → esto es manual y gradual, **NO un blast**.
- La WhatsApp Business API oficial aún **no está validada** (Meta Tech Provider pendiente) → este outbound
  es manual/personal, **no por API**.

## A.5 Legal (Ley 1581 / habeas data)

- Son datos públicos B2B, pero igual: **identifícate**, da **opt-out claro**, no revendas la lista.
- **NO subas estos teléfonos a Meta** (viola ToS + Ley 1581). Respeta de inmediato a quien pida no ser contactado.

## A.6 Sinergia con la pauta de Meta

- **Mismo bot de demo** para outbound e inbound.
- Lo que mejor responde en outbound (vertical/mensaje/objeción) **alimenta las creatividades de Meta**.
- Quien muestra interés y no cierra → semilla de retargeting (fase 2, ver `04-STRATEGY.md`).

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
- Sobre los **906**, techo teórico **~9–27 clientes** *si se trabajaran todos bien* (no realista de una;
  trabaja por lotes y prioriza calidad).
- Realista para un primer lote de ~150–200 (Bucaramanga + mejores de Bogotá): **~2–6 clientes (estimado).**
- La personalización y el **gancho de demo en vivo** mueven estas tasas hacia arriba; un mensaje genérico
  las hunde.

## A.9 Plan operativo (vista de pájaro — detalle al pie en PARTE B)

1. Lote piloto: **Bucaramanga (154)** + top de Bogotá por reseñas → ~150–200 prospectos.
2. Afina el guion con los primeros 30–40 (mide respuesta).
3. Escala a Bogotá; en paralelo, saca una lista de un **2º rubro** (citas o comercio) para diversificar.
4. Lleva todo en el CSV (`estado_embudo`) y reinvierte: los cierres de outbound + pauta financian la ronda 2.

---

# PARTE B — Playbook (al pie, para tener abierto mientras hablas)

> **Contexto fijo (no improvisar):** lista de **906 inmobiliarias**. Canal de contacto: **WhatsApp 1-a-1
> manual**. La demo es **el bot en vivo por Telegram** (Meta Tech Provider pendiente → **NO prometer
> WhatsApp API**). Voz de marca: **directa, tuteo, frases cortas, valor primero, opt-out siempre.**

## B.0 Reglas de oro (léelas una vez al día)

1. **Personaliza el primer toque.** Nombre real de la inmobiliaria + una señal concreta (reseñas, ciudad).
   Mensaje genérico = lo hunde todo.
2. **Un solo CTA:** hablar con el bot. No expliques precios en el toque 1.
3. **Opt-out explícito** en el primer mensaje ("si no te interesa me dices y no insisto"). Respétalo al instante.
4. **Cadencia segura:** 30–50 mensajes/día por número, número calentado. Manual y gradual, **no un blast**.
5. **El gancho es la demo, no el pitch.** Que vivan el producto atendiendo a un cliente de SU rubro.
6. **No subas estos teléfonos a Meta** (viola ToS + Ley 1581). Identifícate y da opt-out.
7. **Honestidad:** la demo es por Telegram hoy. No prometas lo que aún no está validado.

## B.1 Antes de empezar (preparación)

- [ ] **Bot de demo listo** en Telegram, pre-entrenado con el vertical inmobiliaria, atendiendo un caso real
      (precios, disponibilidad, agenda de visita).
- [ ] **Deep-link de atribución** por lote: `t.me/<bot>?start=outbound_inmo_<lote>` (ej. `..._bga` para
      Bucaramanga). Así sabes de qué lote vino cada lead (conecta con `08-TRACKING-SETUP.md`).
- [ ] **Número WhatsApp calentado** (no recién creado; con foto, nombre "SoltyAI", uso previo).
- [ ] **Hoja de conciliación abierta** (§B.7) o el CSV como CRM.
- [ ] **Lote del día definido** (30–50 contactos), priorizado según §A.2.

## B.2 Paso a paso operativo

1. **Prioriza el lote.** Empieza por **Bucaramanga (154)** — sede, mejor soporte y primeros testimonios.
   Dentro del lote, ordena por **rating alto + muchas reseñas**. Sub-segmento "sin website" (312) → Plantilla B.
2. **Toque 1 (Día 0):** mensaje personalizado + link al bot. Marca `contactado` en el CSV.
3. **Espera respuesta.** Si responden → §B.4 (conducir a la demo).
4. **Toque 2 (Día 2–3):** seguimiento suave a quien no respondió o abrió y no siguió. Marca `respondio`/`demo`.
5. **Toque 3 (Día 5–7):** oferta de setup + cierre. Marca `propuesta`/`cliente`/`descartado`.
6. **Registra TODO** en la hoja (estado, canal, fecha, notas). Sin registro no hay conciliación.
7. **Afina con los primeros 30–40:** mide tasa de respuesta, ajusta el mensaje ganador, recién ahí escala a Bogotá.

> ## ⚠️ Los mensajes de abajo quedaron desactualizados (2026-07-25)
>
> **Usa `redes/outbound-mensajes.txt`**, que es la versión vigente y está en texto plano para pegar
> directo en WhatsApp. Tres cosas cambiaron y por eso no sirve copiar de aquí:
>
> 1. **Precios en COP** (Esencial $290.000 / Pro $490.000 / Premium $790.000 + setup $400.000), no los
>    USD de abajo.
> 2. **Los asteriscos de markdown se pegan literales en WhatsApp** (`**así**`), contra la regla 10 de
>    `business/13`. El `.txt` va limpio.
> 3. **El gancho del toque 1 ya no es el link al bot, es el video.** El bot demo tiene compuerta
>    `accessMode: request`: quien entra sin autorización recibe una pre-calificación, no el bot
>    buscando inmuebles. El bot se ofrece **cuando responden y hay alguien para aprobar el acceso en
>    el momento**, que es un paso de ventas, no un obstáculo.
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
   > Es un asistente de IA conectado a tus proyectos. Responde precios, disponibilidad y agenda visitas por chat, 24/7, sin que tú estés. Tú recibes el cliente ya **calificado y con la visita agendada**.
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
| 6 | **"¿Es por WhatsApp?"** | "Hoy te lo muestro por **Telegram** (es idéntico para el cliente) y **WhatsApp viene en camino**. Lo importante es que veas **cómo conversa**. Mándale 'hola' 👉 [link]." |
| 7 | **"No tengo tiempo ahora"** | "Tranquilo, justo por eso existe 😅. ¿Te dejo el link y lo pruebas cuando puedas? Son 60 segundos 👉 [link]. Si te gusta, coordinamos 10 min y lo dejo listo yo." |
| 8 | **"¿Esto es seguro / qué hacen con mis datos?"** | "Buena pregunta. Tus datos son tuyos, los puedes exportar y no los revendemos; cumplimos la ley de datos (1581). El bot solo usa la info que TÚ le cargas de tu negocio." |
| 9 | **"¿Y si responde mal / dice algo equivocado?"** | "Solo responde con la info que le cargas (tus proyectos, precios, FAQ); si no sabe algo, **pasa el chat a un humano** en vez de inventar. Tú ves todas las conversaciones en un panel." |
| 10 | **"Mándame info / un PDF"** | "Mejor que un PDF: **habla con el bot 1 minuto** y lo vives 👉 [link]. Es la mejor 'info' que te puedo mandar. Después te paso el resumen de precios si te interesa." |
| 11 | **"¿Cómo sé que funciona / tienen casos?"** | "Estamos arrancando con pilotos en [ciudad] justamente por eso 🙂 — ya tenemos uno andando en domicilios. La mejor prueba es que lo veas tú: pruébalo con un caso de tu negocio 👉 [link] y me dices si te sirve." |
| 12 | **"¿Necesito saber de tecnología / instalarlo?"** | "Cero. **Nosotros lo montamos** con tus datos en días, sin que toques código. Tú solo lo usas desde el primer día — ese es justo el trabajo del setup." |
| 13 | **"Déjame pensarlo / lo hablo con mi socio"** | "Claro 👍. Para que lo decidan con algo en la mano, ¿quieres que se lo deje configurado **con datos reales de [Inmobiliaria X]** y así lo prueban los dos? Sin compromiso." |
| 14 | **"¿De dónde sacaste mi número?"** | "De tu perfil público en Google Maps 🙂. Te escribí porque [Inmobiliaria X] se ve activa y creo que esto te suma. Si prefieres que no te contacte más, lo respeto al instante." |
| 15 | **"¿Hay permanencia / contrato?"** | "Sin permanencia. Es mensual y lo cancelas cuando quieras; tus datos te los llevas. La idea es que te quedes porque te sirve, no porque estés amarrado." |

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

**Opción A — usar el CSV que ya tienes** (`prospectos.csv` es un mini-CRM). Llena estas columnas por fila:

| Columna | Qué poner |
|---|---|
| `estado_embudo` | `contactado` → `respondio` → `demo` → `setup-prueba` → `propuesta` → `cliente` / `descartado` |
| `canal` | `whatsapp` (o `telegram`/`llamada` si cambia) |
| `fecha_contacto` | fecha del toque 1 (YYYY-MM-DD) |
| `notas` | qué dijo, objeción, **rubro/vertical**, próximo paso, fecha del próximo toque |

> El estado **`setup-prueba`** (le dejamos el bot con sus datos reales) es el mismo de `08-TRACKING-SETUP.md`
> §5 — mide demo → setup-prueba → cierre para ver dónde se cae el embudo.

**Opción B — hoja resumen por lote** (para ver tasas de un vistazo; cópiala a Sheets/Excel):

| Lote | Contactados | Respondieron | Demos (entraron al bot) | Setup-prueba | Propuestas | Cierres | % Resp. | % Demo | % Cierre | Notas |
|---|---|---|---|---|---|---|---|---|---|---|
| Bucaramanga (piloto) | | | | | | | | | | |
| Bogotá lote 1 | | | | | | | | | | |
| Medellín lote 1 | | | | | | | | | | |
| **TOTAL** | | | | | | | | | | |

**Fórmulas:** `% Resp = Respondieron / Contactados` · `% Demo = Demos / Contactados` · `% Cierre = Cierres / Contactados`.

**Benchmarks de referencia (estimado — B2B frío bien personalizado con demo en vivo, **por WhatsApp
1-a-1 manual**; el cold email se mide contra `business/16` §8, ver el aviso de §A.8):**
- Responden **8–18 %** · Toman la demo **3–8 %** · **Cierran 1–3 %**.
- ≈ **1–3 clientes por cada 100 prospectos** bien trabajados (estimado).
- Primer lote de ~150–200 (Bga + top Bogotá): **~2–6 clientes** (estimado).

**Seguimiento individual (mini-tabla diaria del que está "en juego"):**

| Inmobiliaria | Ciudad | Estado | Último toque | Próximo toque | Objeción/Nota |
|---|---|---|---|---|---|
| | | | | | |

## B.8 Rutina diaria sugerida

1. **Mañana:** elige el lote del día (30–50), prioriza por rating/reseñas.
2. Envía los **toque 1** personalizados. Marca `contactado`.
3. **A lo largo del día:** responde a quien escriba (§B.4), conduce al bot, agenda.
4. **Programa los toque 2 y 3** según la fecha del CSV (Día 2–3 y 5–7).
5. **Tarde:** actualiza la hoja de conciliación (estados + notas + rubro).
6. **Cada viernes:** revisa tasas por lote, quédate con el mensaje ganador, escala al siguiente lote.

---

> **Sinergia (recordatorio):** lo que mejor responde aquí (vertical/mensaje/objeción) alimenta las
> creatividades de la pauta de Meta (`07-CAMPAIGN-BRIEF.md`). Quien muestra interés y no cierra → semilla de
> retargeting (fase 2). Mismo bot de demo para outbound e inbound.
