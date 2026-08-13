# 13 · PLAN 12 CLIENTES — de aquí a diciembre de 2026

> 🔴 **RECORTADO EL 2026-08-13: la meta ya no son 12 suscripciones. Son 6 suscripciones + 2 proyectos
> de servicio.** El nombre del archivo se conserva a propósito (lo citan `data/canon.json → fuentes`,
> `CLAUDE.md`, `marketing/CLAUDE.md` y media docena de docs); renombrarlo rompería más de lo que
> aclara. **El título miente y este bloque es la corrección.**
>
> **Por qué se recortó, en la decisión del fundador:** 12 suscripciones exigen 2,4 cierres al mes
> sostenidos de agosto a diciembre. Al 13-ago hay **1** cliente de suscripción (Bucaradomi), 4 meses y
> medio de ventana, y **una sola persona que es a la vez el único vendedor y el único desarrollador**,
> con 8 pendientes vencidos que son casi todos de seguridad. El plan no falla por falta de ambición:
> falla porque la aritmética pedía un equipo que no existe.
>
> **Y el detonante fue de evidencia, no de ánimo.** El mismo día murió Chalá, y al archivarlo se vio
> que el «Chalá $800.000» que este doc citaba en §10 como prueba de que la línea de servicio factura
> **era una propuesta en DRAFT que nunca se envió**. La tesis se sostenía sobre dos casos y en realidad
> tenía uno.
>
> **Meta declarada originalmente (2026-07-25):** +12 clientes fijos antes de que acabe el año.
> **Presupuesto:** $4.000.000 COP del crédito personal, que se queda en la cuenta de Carlos y se
> gasta directo en pauta y prospección (ver §9 — figura contable).
>
> Este doc es el **plan de ejecución**. La estrategia creativa y el copy están en `07-CAMPAIGN-BRIEF.md`;
> la economía unitaria, en `06-BUDGET-PLAN.md`; el outbound, en `09-OUTBOUND.md`.
> Fecha: 2026-07-25 · **Recorte: 2026-08-13** · Ventana real: **agosto → diciembre (5 meses)**.

---

## 1. Qué significa la meta nueva: **6 suscripciones + 2 proyectos** (la aritmética, sin inflar)

**Ritmo necesario: ~1,2 suscripciones nuevas/mes + 1 proyecto de servicio por trimestre.** Contra las
2,4/mes del plan viejo, que nunca se acercó a cumplirse.

Con el pricing vigente en Colombia (`ESTADO.md` §Marketing — manda sobre el USD del paquete viejo):

| Concepto | Valor |
|---|---|
| Ticket promedio supuesto | **$390.000/mes** (mezcla Esencial $290k / Pro $490k) |
| Setup único | **$400.000** |
| **Caja del mes 1 por cliente** | **~$790.000** |
| 6 suscripciones → **MRR a diciembre** | **~$2.340.000/mes** |
| 6 suscripciones → **caja de setups** | **~$2.400.000** (una vez) |
| 2 proyectos de servicio → **caja** | **~$6.000.000** (piso $3.000.000 c/u, 50% de anticipo) |
| **LTV bruto 12 meses (suscripción)** | **~$5.080.000** ($400.000 + $390.000 × 12) |
| **Techo de CAC** | **~$800.000** (2× el setup: se recupera en el mes 2) |

### Por qué recortar a la mitad no cuesta la mitad de la caja

Esta es la razón de fondo del recorte, y es la que lo vuelve una decisión y no una rendición:

| | Plan viejo (12 subs) | **Plan nuevo (6 + 2)** |
|---|---|---|
| Cierres necesarios | **12** | **8** |
| Caja de setups | ~$4.800.000 | ~$2.400.000 |
| Caja de servicio | $0 (no estaba en el plan) | **~$6.000.000** |
| MRR a diciembre | ~$4.700.000 | ~$2.340.000 |
| **Caja total del semestre** | **alta, pero exige 12 cierres** | **comparable, con 8** |

Dos proyectos de servicio a piso de $3.000.000 aportan más caja en 2026 que seis suscripciones,
**porque la suscripción cobra por meses y el proyecto cobra de una.** La suscripción no está acá por
la caja de este año: está porque es lo único que sigue facturando sin horas nuevas.

> 🔴 **Lo que el recorte cambia de verdad: se mueve el cuello de botella.** Con 12 suscripciones el
> límite era **conseguir clientes**. Con 6 + 2 el límite pasa a ser **las semanas de Carlos**: un
> proyecto de $3.000.000 se come 3 a 6 semanas del único desarrollador, y dos proyectos entre agosto y
> diciembre ya rozan la regla propia de *1 simultáneo, máximo 1 por trimestre* (§10). Esto **no es un
> plan más fácil, es un plan distinto**: si algo lo hace fracasar ya no va a ser la falta de leads, va
> a ser aceptar un tercer proyecto o dejar que la entrega devore la prospección.

**El embudo que hay que sostener cada semana no baja en la misma proporción**, y es a propósito: las
2 reuniones semanales del §8 se mantienen. Con 8 cierres en vez de 12 sobra margen de conversión, y
ese margen es lo que permite **decir que no** a un mal encaje en vez de tomarlo por necesidad.

> 🔴 **Corregido el 2026-08-13, y el error valía plata.** Acá decía *«CAC máximo tolerable ~$400.000
> (el setup solo paga la adquisición)»*. Estaba **anclado a la métrica equivocada**: exigía que la
> caja del mes 1 pagara toda la adquisición. Con CPLs B2B reales en Colombia de **$80.000–$250.000
> por lead**, la suscripción sola **no puede pagar tráfico pago**. Se ancla al LTV y se acepta que el
> payback se corra al **mes 2–3**. Detalle en `06-BUDGET-PLAN.md`; los números en máquina, en
> `data/canon.json → tablero`.

> Con los primeros 3–5 al **−30% × 3 meses** (política ya autorizada, a cambio del caso de estudio),
> el MRR de diciembre baja ~$400k. Se acepta: el caso de estudio es lo que abarata los 7 siguientes.

**Embudo que hay que sostener cada semana** *(supuestos etiquetados, se corrigen con datos reales)*:

```
20 contactos outbound + tráfico pago     →  ~5 conversaciones reales
~5 conversaciones                        →  ~2 reuniones agendadas
~2 reuniones/semana × 4 = 8 reuniones    →  ~1,2 suscripciones/mes  (tasa reunión→cierre ~15% (supuesto))
```

> **Ojo con este supuesto (recorte del 13-ago):** el plan viejo asumía **~30%** de reunión→cierre para
> justificar 2,4 cierres/mes. Ese 30% **no está medido**: sale de un cierre real en toda la historia de
> la empresa. Acá se baja a **15%**, que es lo normal en B2B frío, y aun así alcanza para 1,2/mes. Si
> las primeras 8 reuniones cierran mejor que eso, se sube el número **con el dato en la mano**, no
> antes. Es la misma disciplina que impuso la muerte de Chalá: una cifra vale cuando está cerrada.

El número que hay que vigilar **no** es el gasto ni los seguidores: son **reuniones agendadas por
semana**. Menos de 2/semana = el mes no se cumple, sin importar qué digan las impresiones.

> **Por qué dejó de ser «demos» (2026-08-13):** el cold email pivotó a pedir **15 minutos** en vez de
> entregar una demo, y la venta se cierra en esa reunión (`business/16 §6c`). El número es el mismo
> —una cita en el Calendly— pero el nombre viejo hacía pensar que había que entregar algo antes de
> hablar. ⚠️ En `data/canon.json` y en `src/reportes` la clave **todavía se llama `demos`**: el
> renombre se hace en canon, código y README a la vez, no a medias.

---

## 2. De dónde salen los 12 (mix por canal)

> **Reordenado el 2026-08-13.** Antes este mix era «outbound + **pauta Meta** + orgánico», con Meta
> como único carril pago. Meta quedó **relegado** y entraron dos carriles de Google. El porqué
> completo está en **`15-CANALES-Y-SECUENCIA.md`**, que manda sobre esta tabla.

| Canal | Suscripciones | Proyectos | Costo | Por qué |
|---|---|---|---|---|
| **A · Outbound directo** (inmobiliarias + domis) | **2–3** | — | ~$0 (tiempo) | 865 prospectos vivos en producción, demo viva, control total del ritmo. Es el motor de corto plazo. |
| **B · Google Search + Business Profile** | — | **1** | $400.000 + $0 | Captura intención que **ya existe**. Titular: la línea de **servicio a la medida**. Con piso de $3.000.000, un cierre paga la ronda entera. |
| **C · Orgánico + referidos + clientes propios** | **2–3** | **1** | ~$0 (tiempo) | El canal más barato y el **peor aprovechado**: TRACE entró referido, y ni Bucaradomi ni Swisscontact tienen encima una propuesta de bot pese a que la regla 6 del §10 lo exige desde que se escribió. |
| **D · Pauta Meta** | **0–1** | — | $1.200.000 | **Relegado.** Genera demanda por vertical + ciudad cuando los otros no den volumen. Necesita píxel, GA4, número propio y creatividad por vertical. |

**Ninguno solo llega.** El outbound no escala; Google captura sólo lo que ya se busca; el orgánico no
llega a tiempo por sí solo; y Meta, hoy, es el más caro de encender.

**Si algo se tiene que caer, que se caiga D.** Es el más caro, el más lento y el que más preparación
pide. B y C cuestan $0 o casi, y arrancan esta semana.

> 🆕 **El recorte cambió quién es el favorito: ahora es C.** En el plan de 12, el outbound cargaba con
> 4–5 clientes porque hacía falta volumen a como diera lugar. Con 8 cierres en vez de 12, **el canal
> más rentable pasa a ser el que ya tienes y no usas**: clientes propios y referidos. TRACE llegó así,
> es hoy la oportunidad de servicio más grande viva, y no costó un peso de adquisición. La acción
> concreta que falta no es un canal nuevo, es **ejecutar la regla 6** con los clientes que ya pagaron.

---

## 3. Semana 0 — desbloqueos (antes de gastar un peso)

Nada de esto es opcional: son las tuberías por donde va a correr todo lo demás.

| # | Qué | Dueño | Estado |
|---|---|---|---|
| 1 | **Video demo grabado** (pre-calificación → búsqueda con fotos → visita → aviso al asesor → vista de leads) | Usuario | ⏳ **bloquea LinkedIn y todo el orgánico**: es la prueba visible del canal |
| 2 | **Calendly** creado (campos: nombre, negocio, **rubro**, teléfono) | Usuario | ✅ **3-ago** — `calendly.com/carlos-soltyai/30min`, con el `a1` de atribución verificado en vivo |
| 3 | **Número de WhatsApp** definido para click-to-chat + outbound | Usuario | ⏳ **sin él el CTA de WhatsApp no se pinta**: hoy la landing ofrece 2 vías, no 3 |
| 4 | **Píxel de Meta + GA4** creados → IDs a `site.ts` | Usuario crea, Claude integra | ⏳ **bloquea la pauta** |
| 5 | ~~**Formspree**~~ **Endpoint propio de captura** para el form de la landing | Claude | ✅ **3-ago** — `POST contratos.soltyai.com/api/leads` en la suite (que ya corre Next y ya tiene Resend), en vez de un servicio externo |
| 6 | **LinkedIn de empresa** creado (§6) | Usuario, con los textos de abajo | ⏳ |
| 7 | **Landing puente `/ir`** con las 3 CTAs + eventos `Lead` | Claude | ✅ construida y **desplegada el 3-ago** (2 CTAs vivas; la de WhatsApp espera el número) |
| 8 | **Deep-links `?start=` por canal** y hoja de conciliación | Claude | por construir |
| 9 | **Prueba E2E de las 3 vías** (clic → bot / Calendly / WhatsApp, con origen visible) | Ambos | 🔒 **gate: sin esto no se lanza pauta** — la vía Calendly ya está probada; faltan Telegram y WhatsApp |

| 10 | **Google Business Profile creado y verificado** | Usuario | ⏳ **es lo primero, y es gratis** (`15-CANALES-Y-SECUENCIA.md §4`) |
| 11 | **Landing propia de servicio a la medida** (no la home del bot) | Claude | ⏳ bloquea el carril de Google Search |

> **Lo que bloquea qué, después del 2026-08-13 — y ya no es lo mismo para todos los carriles:**
>
> - **Meta** sigue colgando de los IDs del punto 4 (`ga4MeasurementId`, `metaPixelId`) y del número
>   del punto 3. Mientras estén en placeholder, **no se enciende**: pagar clics sin píxel es tirar la
>   plata y el aprendizaje. Como Meta quedó **relegado**, eso ya no bloquea el plan entero.
> - **El Google Business Profile no depende de nada de eso** y cuesta $0. Por eso va primero: cada
>   semana que no existe es una semana de maduración perdida que hoy no cuesta nada recuperar.
> - **El número propio de SoltyAI (punto 3) subió de prioridad**, no bajó: además de la tercera CTA,
>   el GBP quiere un teléfono que conteste, y sin línea propia no hay **contestador de muestra 24/7**
>   —que va sin IA, cuesta $0 y es el mejor anuncio que existe, porque el prospecto le escribe al
>   producto que le estás vendiendo. Y poner ahí el personal repite el problema de datos personales
>   que se está corrigiendo.
>
> 🔴 **Ojo con cómo se dejan esos placeholders.** `calendlyUrl` y `whatsappNumber` traían valores **con
> forma de valor real** (`calendly.com/soltyai/demo`, `57XXXXXXXXXX`) y por eso los 8 CTAs de la landing
> apuntaron a un 404 **desde el 24-jul hasta el 3-ago** sin que el build, el smoke test ni una revisión
> visual lo notaran. Los que faltan están en vacío o en `G-XXXXXXXXXX` a propósito.

---

## 4. Canal A — Outbound (el motor, arranca ya)

**Objetivo: 20 contactos nuevos/semana, 80/mes.** No más: la calidad del primer mensaje decide todo.

**Cómo:**
1. **Tandas de 20–30** de los 865 prospectos vivos en producción (`09-OUTBOUND.md`), ordenadas por ciudad
   (Bucaramanga y área primero: se puede ofrecer visita presencial).
2. **Mensaje 1 — el gancho es la demo, no la explicación.** *"Le armé un bot con SUS inmuebles reales,
   pruébelo aquí"* pega más que cualquier descripción del producto. La demo `demo-l0615` con 29
   inmuebles y fotos ya prueba que se puede.
3. **Toque 2 a los 3 días** (valor, no insistencia: un dato de su vitrina, algo que note).
4. **Toque 3 a los 7 días** y cierre del hilo: *"¿lo dejo por ahora?"* — la salida elegante rescata
   más respuestas que la presión.
5. **Todo lead entra al dashboard** (mini-CRM operator, `ESTADO.md` 5c): estado, notas, próximo paso.

**Segundo frente, desde ~fin de agosto:** operadores de domicilios en ciudades intermedias, con
**Bucaradomi ya estabilizado** como caso real (`ESTADO.md` §Piloto). No antes: el caso insignia
necesita esas 4–6 semanas sin sobresaltos.

**Regla anti-quemadura:** nunca subir esos teléfonos a Meta como audiencia (viola ToS + Ley 1581).

---

## 5. Los carriles pagos ($4.000.000, y **no** en 3 rondas de Meta)

> **Cambio del 2026-08-13.** Acá había un calendario fijo de 3 rondas de Meta ($1,2M agosto · $1,3M
> septiembre · $1,5M oct-nov). **Se descartó.** El detalle y el porqué están en
> `15-CANALES-Y-SECUENCIA.md`; esto es el resumen operativo.

| Ronda | Carril | Cuándo | Monto | Objetivo |
|---|---|---|---|---|
| **G1** | Google Search | tras el GBP | **$400.000** | Validar el carril de servicio a la medida. 3–4 keywords de intención, geo Bucaramanga y área metropolitana |
| **R1** | Meta | cuando haga falta volumen | **$1.200.000** | Una vertical, 3 ángulos, objetivo **cita en el Calendly** |
| — | sin asignar | — | **$2.400.000** | **A propósito.** Se asignan contra resultados, no contra un plan escrito en agosto |

**Reglas de corte, recalibradas** (`canon.json → tablero`):

| Señal | Acción |
|---|---|
| Costo por lead calificado **> $180.000** a las 48 h | Advertencia: revisar creatividad o audiencia |
| **> $250.000** por calificado, o **3× el mejor** | **Matar** ese ad set o esa keyword |
| **< $80.000** por calificado y con volumen | **Escalar +20%**, nunca más por paso |
| CAC efectivo **> $800.000** | Se para el carril: por encima del techo no hay negocio |

**Reglas que no se negocian:**
- Los primeros 2–3 días **no se toca nada** salvo plomería rota (la plataforma está aprendiendo).
- Excluir **Audience Network** si entra tráfico basura.
- **Nunca vender «un asistente de IA»** abierto: la política de IA de WhatsApp sólo permite bots de
  negocio estructurados, y romperla no cuesta un anuncio, cuesta el canal.
- **Nunca subir los teléfonos del outbound** a Meta como audiencia (ToS + Ley 1581).
- En Google: **negativos desde el día 1** («gratis», «curso», «aprender», «empleo», «wordpress
  barato»). En Search la plata se va por ahí, no por el CPC.
- Si entran **2 proyectos a medida a la vez**, se pausa el carril de Google. No se contrata.

**Lo que se mide:** clics → entradas por vía → **leads calificados** → **reuniones** → cierres. El KPI
que manda es **reuniones agendadas**; el de poda, **$/lead calificado**. El CPC no manda nunca.

**Lo que ya se puede prometer, y antes no:** el bot **por WhatsApp**. Eso arregla el problema de
fondo que tenía la creatividad de Meta —vender un bot de Telegram a pymes colombianas que no usan
Telegram— y es la razón por la que Meta pasa de *bloqueado y sin sentido* a *relegado y viable*.

---

## 6. Canal C — Orgánico + LinkedIn de empresa

✅ **La página de empresa de LinkedIn existe desde el 2026-07-25.** Este § decía «falta crearla» y
quedó viejo; los datos de abajo se conservan porque son la ficha con la que se creó y sirven para
mantenerla al día. Las demás redes también están montadas (FB, IG + Threads, TikTok, X reservado,
YouTube).

**La regla nueva del orgánico (2026-08-13):** **2 posts/semana a mano durante 8 semanas antes de
construir la máquina de contenido.** Se automatiza un proceso que existe, nunca uno que no — la misma
lógica con la que se pospuso el Embedded Signup hasta tener 3 clientes. El insumo escaso no es
publicar: es tener algo que decir, y eso son 20 minutos del fundador por semana contando lo que de
verdad pasó. Detalle en `15-CANALES-Y-SECUENCIA.md §5`.

**La ficha con la que se creó** (se conserva para mantenerla): LinkedIn → *Para empresas* →
**Crear una página de empresa** → *Empresa pequeña*.

**Datos listos para pegar:**

```
Nombre:            SoltyAI
URL:               linkedin.com/company/soltyai
Sitio web:         https://soltyai.com
Sector:            Desarrollo de software
Tamaño:            2—10 empleados
Tipo de empresa:   De financiación privada       ← es la traducción de "Privately Held"
Sede:              Bucaramanga, Santander, Colombia
Fundación:         2026
Eslogan (máx 120): Bots de WhatsApp y Telegram que atienden, venden y agendan por tu negocio.
```

> **Tipo de empresa — el desplegable confunde.** Una S.A.S. va en **"De financiación privada"**
> (*Privately Held*: sociedad con dueños privados, sin cotizar en bolsa). **No** es "Empresa
> individual" (*Sole Proprietorship* = persona natural sin sociedad, justo lo que se dejó de ser al
> constituir la SAS) ni "Autónomo" (*Self-employed* = freelance). Ese campo lo miran los proveedores
> y los clientes B2B grandes: decir "empresa individual" contradice el certificado de la CCB.
>
> **Tamaño 2—10** es el correcto para presentarse: es el rango de una micro con colaboradores por
> proyecto, y "0—1" empuja al prospecto a preguntarse quién atiende si te enfermas. Si alguien
> pregunta directo, la respuesta honesta y que vende es *"equipo pequeño, con especialistas por
> proyecto"* — nunca inventar empleados que no existen.

**Assets listos (generados 2026-07-25, en `marketing/redes/`):**

| Archivo | Medida | Dónde va |
|---|---|---|
| `soltyai-linkedin-logo-300x300.png` | 300×300 | Logo de la página (LinkedIn pide exactamente esto) |
| `soltyai-linkedin-banner-1128x191.png` | 1128×191 | Portada. **El tercio izquierdo va vacío a propósito**: ahí LinkedIn superpone el logo de la página |

**Descripción (About)** — escrita con `business/13` Parte A (cero rayas largas, voz activa, sin
palabras de la lista slop). Pegar tal cual:

```
En muchos negocios las ventas se pierden por algo simple: nadie alcanzó a
responder a tiempo.

SoltyAI arma bots de WhatsApp y Telegram que atienden esa conversación.
Responden al instante, a cualquier hora, con la información real de tu
negocio: tu catálogo, tu agenda, tus precios. Preguntan lo que hay que
preguntar, agendan la visita o la cita, y te pasan el cliente cuando ya
vale la pena que hables tú.

No te entregamos una herramienta para que la configures. La dejamos
funcionando con tus datos y te enseñamos a usarla.

Trabajamos por sectores: inmobiliarias, domicilios, comercio y
agendamiento de citas. Si tu negocio no necesita inteligencia
artificial, lo hacemos con un flujo fijo: sale más barato y nunca
improvisa.

Somos de Bucaramanga, hablamos como acá y contesta una persona.

Mira cómo funciona y agenda una cita: soltyai.com
```

> El cierre **no lleva al bot**. Ver el flujo del canal aquí abajo.

### El flujo de LinkedIn: ver el video, agendar la cita

```
Post fijado con el VIDEO DEMO  →  "agenda una cita"  →  Calendly  →  cita con Carlos
                                                                      (ahí sí, el bot en vivo
                                                                       + setup-prueba con sus datos)
```

**Por qué el link al bot NO va en la descripción ni en los posts:**

1. El bot demo tiene la compuerta `accessMode: request` (a propósito): un chat no autorizado nunca
   llega al LLM, cero tokens. Quien entra por curiosidad **no ve el bot buscando inmuebles**, ve una
   pre-calificación de 5 pasos y queda esperando aprobación manual. Prometer "míralo funcionando" y
   entregar un formulario quema el primer contacto, que es el peor momento para decepcionar.
2. En LinkedIn la gente **mira**, no salta a otra app. El video entrega la prueba dentro de la red,
   sin pedirle nada al que todavía no decidió.
3. El bot sigue siendo la puerta en **outbound** (ahí el contexto ya está dado: "le armé uno con SUS
   inmuebles") y como una de las 3 vías de la landing puente en pauta. Cambia el canal, no el producto.

**Consecuencia de prioridad:** LinkedIn no se publica hasta tener **(a) el video demo grabado** y
**(b) el Calendly creado**. Son los dos primeros ítems de la Semana 0 y ahora bloquean un canal
completo, no solo la pauta.

**Al crearla:** subir logo + banner de la tabla de arriba · botón personalizado **"Visitar sitio web"** ·
Carlos se agrega como empleado (multiplica el alcance) · **el primer post, y el fijado, es el video
demo** con el CTA de agendar · agregar la URL a `site.ts` (hoy `social.linkedin` está vacío a propósito).

**Cadencia orgánica sostenible (2 posts/semana, no más):** 1 de build-in-public (lo que se construyó
esa semana) + 1 de demo/caso. La idea-núcleo se recicla a IG/TikTok (motor 1-idea→3-canales de
`business/14`). **El video sube nativo a cada red** (LinkedIn y las demás castigan el link que saca
gente de la plataforma): el CTA de agendar va en el texto y en el comentario fijado, con UTM por canal
para saber cuál trae las citas.

---

## 7. Calendario agosto → diciembre

| Mes | Foco | Suscripciones | Proyectos | Acumulado |
|---|---|---|---|---|
| **Agosto** | **Cobrar Swisscontact** + **cerrar TRACE** + GBP creado + Launch del cold email | **0–1** | **1** | 1 sub · 1 proy |
| **Septiembre** | Entrega del proyecto 1 + **G1 de Google Search** + landing de servicio + outbound domis con caso Bucaradomi | **1** | — | 2 · 1 |
| **Octubre** | Escalar lo que rindió + primeros casos de estudio + **8 semanas de orgánico cumplidas** + **regla 6 sobre los clientes propios** | **2** | — | 4 · 1 |
| **Noviembre** | **Proyecto 2** (el que traiga Google o un referido) + máquina de contenido si el orgánico sobrevivió + Meta si hace falta volumen | **1–2** | **1** | 5–6 · 2 |
| **Diciembre** | Cierre de año (mes corto: la 2ª quincena no vende) | **0–1** | — | **6 · 2** ✅ |

> **Diciembre es medio mes hábil**, y el peso sigue cargado en oct–nov por lo mismo de siempre.
>
> 🔴 **Lo que hay que vigilar en este calendario ya no son los cierres, son los choques.** El proyecto
> de agosto y el de noviembre están puestos **separados a propósito**: si el segundo se adelanta a
> septiembre u octubre, choca con la entrega del primero y rompe la regla de *1 simultáneo* del §10.
> Cuando eso pase —y va a pasar, porque la demanda no consulta el calendario— **la respuesta es correr
> el proyecto, no contratar y no tomar los dos.** Es la misma regla que ya dice «si entran 2 proyectos
> a la vez, se pausa el carril de Google».

---

## 8. Tablero semanal (15 min, viernes)

| Métrica | Meta semanal | De dónde sale |
|---|---|---|
| Contactos outbound nuevos | 20 | Hoja/CRM |
| Conversaciones reales | 5 | Bot + WhatsApp |
| **Reuniones agendadas** | **2** | Calendly |
| Cierres de suscripción | 0,3 (~1,2/mes) | Suite (propuestas firmadas) |
| **Semanas de Carlos comprometidas en entrega** | **≤ 3 de 4** | Honesto, a ojo, el viernes |
| $/lead calificado (pauta) | **< $120.000** | `npm run reportes` |
| Posts publicados | 2 | Calendario orgánico |

> 🆕 **La fila nueva es la que importa después del recorte** (13-ago). Con 6 + 2, el plan no se cae por
> falta de leads: se cae porque la entrega se come al vendedor. **Cuatro semanas de cuatro
> comprometidas en entregar = cero prospección = un enero sin pipeline**, y eso no lo detecta ninguna
> de las otras filas hasta que ya pasó. Se estima a ojo y se anota igual: un número honesto y crudo
> vale más que uno preciso que nadie llena.

**Semáforo:** 2 semanas seguidas con <2 reuniones → el problema es el **mensaje o la lista**, no el
volumen: se reescribe el gancho antes de gastar más. 2 semanas seguidas **sin publicar** → la
cadencia estaba mal calibrada: se baja a 1 post/semana antes que dejar de publicar, porque un carril
que compone sólo funciona si no se corta.

**El tablero ya no es una hoja de cálculo.** Se llena y se lee con `src/reportes`:

```
npm run reportes registrar -- --semana=2026-W31 --ronda=R1 --origin=<origin> \
    --gasto=300000 --leads=14 --calificados=6 --demos=2 --cierres=bot-pro:1,setup:1
npm run reportes            # tablero de la semana: $/calificado, $/demo, CAC, MRR y margen
npm run reportes ronda      # la regla de corte del §5, calculada sobre la ronda completa
```

Tres cosas que el programa hace y una hoja no: **calcula** la regla de corte (hoy **$120.000** por
lead calificado, leída de `canon.json`) en vez de dejarla a criterio del viernes que toca parar;
**exige** que cada `origin` exista en el registro de links (sin origen no hay atribución que
evaluar); y **obliga a declarar de dónde salió cada número**, así que los datos manuales se ven como
manuales en vez de pasar por automáticos.

---

## 9. La plata: cómo se registra (los $4M salen de la cuenta personal)

Decisión del 25-jul: los $4.000.000 **no** se transfieren a la SAS (evita el rendimiento presuntivo
del art. 35 ET — ver `business/18` §2). Se pagan directo desde la cuenta de Carlos, y cada gasto:

1. **Datos fiscales de la SAS en la cuenta publicitaria de Meta** (SOLTYAI S.A.S. · NIT 902081265-3)
   → la factura sale a nombre de la empresa aunque la tarjeta sea personal. **[contador]** confirmar
   el tratamiento del IVA de servicios digitales del exterior en RST.
2. **Se registra en el libro de caja** como egreso (`OTRO_EGRESO` / `SOFTWARE` según el caso) con
   nota *"pagado por el socio — por reembolsar"*, y la fila entra al inventario de `business/18` §3.
3. **La SAS reembolsa cuando haya caja**, por transferencia con concepto explícito.

🔴 **Corregido con el recorte del 13-ago, y cambia quién paga el crédito.** Acá decía *«Con 12 clientes
cerrados, la caja de setups (~$4,8M) cubre el reembolso completo del crédito»*. Con **6**
suscripciones la caja de setups es **~$2.400.000**, o sea **poco más de la mitad** de los $4.000.000.
Quien repaga el crédito pasa a ser **la línea de servicio**: los 2 proyectos a piso de $3.000.000
aportan ~$6.000.000 y lo cubren solos, con el 50% de anticipo entrando antes de terminar la entrega.

**Consecuencia práctica, y no es menor:** si los 2 proyectos no se cierran, **el crédito personal
queda descubierto** aunque las 6 suscripciones sí entren. Eso convierte a los proyectos de "meta
deseable" en "obligación de caja", y es una razón más para no gastar los $2.400.000 sin asignar del
§5 hasta que el primero esté firmado y con anticipo recibido.

---

## 10. La otra línea: desarrollo a la medida y web

**Ya es la realidad, no una idea:** el ingreso más grande de la empresa hoy es **Swisscontact
($2.300.000, módulo Zaranda)**, que es desarrollo a la medida. Negarlo en la estrategia sería escribir
un plan que no se parece a la caja real.

> 🔴 **Corregido el 2026-08-13, y la corrección incomoda.** Acá decía además *«La cotización de Chalá
> ($800.000) también»*. Chalá murió (el dueño terminó el proyecto) y esa cifra **nunca fue una venta:
> era una propuesta en DRAFT que jamás se envió**. Entonces la frase «la línea de servicio es la que
> hoy factura» se apoya en **un solo caso**, no en dos, y ese caso **todavía no está facturado** (cero
> cuentas de cobro en la suite; el SOL3 vence el 3-sep). La conclusión del §10 no cambia —el servicio
> sigue siendo lo único que ha movido plata de este tamaño— pero la evidencia es **la mitad de
> gruesa** de lo que este doc decía, y eso se lee antes de apostarle $400.000 al carril de Google.

**El papel de cada línea, y no se invierte:**

| Línea | Qué hace | Qué NO hace |
|---|---|---|
| **Desarrollo a la medida y web** | Paga las cuentas **ya**: tickets de $800k a $5M, cobrados contra entrega | No construye patrimonio: se acaba cuando se entrega, y depende de las horas de Carlos |
| **Bots por suscripción** | Acumula MRR: el negocio vale por esto y sigue facturando sin horas nuevas | No paga las cuentas de mañana: 6 clientes son ~$2,34M/mes, y recién en diciembre |

**El servicio financia, la suscripción acumula.** Sin la primera no hay con qué vivir mientras la
segunda crece; sin la segunda, esto es una agencia que depende de que Carlos facture horas para
siempre.

### El riesgo real (por eso hay reglas)

Un proyecto a medida de $3M se come 3 a 6 semanas del **único** desarrollador, que es también el
**único** vendedor. En esas semanas la prospección se detiene, el MRR no crece, y al terminar hay
que tomar otro proyecto para pagar las cuentas. Esa es la trampa de agencia y mata más empresas de
software chicas que la falta de clientes.

### Reglas para que financie sin canibalizar

1. **Un proyecto a medida en ejecución a la vez.** Máximo **uno por trimestre** mientras la meta de
   suscripciones esté viva. ⚠️ **Con el recorte del 13-ago esta regla dejó de ser una precaución y
   pasó a ser el corazón del plan:** los 2 proyectos ahora **son la meta**, no una distracción tolerada,
   y aun así siguen topados en 1 simultáneo. Que estén en el plan no autoriza un tercero.
2. **Piso de precio: $3.000.000.** Menos que eso no compensa parar el motor de suscripciones.
   Excepción: un proyecto chico que abra la puerta a un cliente grande, y se anota como tal.
3. **50% de anticipo** para arrancar. Sin anticipo no se agenda (a Swisscontact se le cobró contra
   entrega y hoy son $2,3M esperando factura: no se repite).
4. **La prospección no se suspende.** Los 20 contactos y las 2 reuniones por semana del §8 se sostienen
   aunque haya proyecto en curso. Si un proyecto obliga a bajarlos, es que estaba mal cotizado.
5. **Todo proyecto deja pieza reutilizable.** Lo que se construya a medida vuelve al `platform/` como
   módulo cuando aplique. Si no deja nada reutilizable, es trabajo por horas disfrazado.
6. **Todo cliente de servicio sale con propuesta de bot.** La web o el desarrollo es la puerta; la
   suscripción es la renta. Un cliente que ya pagó y quedó contento es el lead más barato que existe.

### Cómo se comunica (esto es lo que más se equivoca)

> 🔄 **Esta sección cambió el 2026-08-13.** Decía *«el servicio se ofrece, no se anuncia»*. Ya no:
> se abrió un carril pago para el servicio, en Google. Lo que **no** cambió es el riesgo que esa
> regla protegía, y por eso la nueva es más precisa, no más laxa.

- **Un mensaje líder POR CANAL, no un solo mensaje.** El **bot** es el titular en Meta, en orgánico,
  en outbound y en la landing. El **servicio a la medida** es el titular en **Google Search y en el
  Google Business Profile**, y sólo ahí. Nadie ve los dos a la vez, así que no confunde a nadie.
- **Por qué Google y no Meta:** el servicio es demanda que **ya existe** y se expresa en una
  búsqueda. Nadie busca «chatbot», pero sí se busca «desarrollo de software Bucaramanga». Y con piso
  de $3.000.000 y 50% de anticipo, **un cierre paga la ronda entera** y financia el carril del bot.
- **Dentro de una misma pieza sigue habiendo UNO.** Decir "hacemos software a la medida, páginas web,
  bots y marketing" en el mismo anuncio convierte la marca en la agencia genérica de la esquina, que
  compite por precio contra veinte iguales. Ese riesgo no desapareció: sólo dejó de resolverse
  callando una línea entera de negocio que **es la que más factura hoy**.
- **En la conversación sigue siendo palanca:** *"además del bot les montamos la página / la
  integración con su sistema"* cierra proyectos grandes con clientes que ya confían.
- **Todo cliente de servicio sale con propuesta de bot.** La web es la puerta; la suscripción es la
  renta. Un cliente que ya pagó y quedó contento es el lead más barato que existe.

### Métrica de gobierno

Se revisa cada mes junto al tablero del §8:

| Indicador | Meta a diciembre 2026 |
|---|---|
| Ingresos recurrentes (MRR) | **~$2.340.000/mes** (las 6 suscripciones) |
| Ingresos por servicio | **2 proyectos cerrados y cobrados**, no más |
| **% de costos fijos cubierto por MRR** | **100%** (VPS, API, herramientas, contador) |

> **La fila que no se movió es la que manda.** El recorte bajó el MRR objetivo a la mitad, pero
> **«100% de los costos fijos cubiertos por MRR» sigue igual**, y es el verdadero indicador de si esto
> es una empresa o un empleo disfrazado. Con ~$2.340.000/mes de MRR esa meta es **más fácil**, no más
> difícil: los costos fijos hoy son VPS, API, Workspace, Instantly y contador, no $4.700.000. El plan
> de 12 confundía «MRR grande» con «MRR suficiente».

Cuando el MRR cubra los costos fijos **y** los honorarios base del fundador, el servicio a medida
pasa a ser opcional: se toma solo si el proyecto es bueno, no porque haga falta la plata. Ese es el
punto en el que la empresa deja de depender de las horas de Carlos.

---

## Relacionados

`01-SOURCE-BRIEF.md` (fuente canónica) · `07-CAMPAIGN-BRIEF.md` (copy y creatividades) ·
`09-OUTBOUND.md` (guiones y lista) · `10-IMPLEMENTATION-ROADMAP.md` (día a día de una ronda) ·
`11-PRE-LAUNCH-CHECKLIST.md` (gate de lanzamiento) · `business/14` (orgánico) · `business/18` (la plata).
