# 01 · SOURCE-BRIEF — Hechos canónicos de SoltyAI (NO inventar fuera de aquí)

> **Fuente única de verdad** del producto, el precio y el mensaje para TODO el paquete de marketing.
> Si un dato no está aquí ni en los archivos citados, decláralo como supuesto explícito
> ("**Supuesto:** …"), no lo presentes como hecho. Nada de métricas fabricadas.
>
> **Reescrito 2026-08-13.** La versión anterior (2026-06-20) quedó vieja en cuatro cosas a la vez:
> decía que la SAS estaba "en constitución" (se constituyó el 2-jul), publicaba el catálogo **USD**
> como tabla principal (superado por el canon COP desde el 22-jul), daba WhatsApp por "próximamente"
> (Meta aprobó el 6-ago y el bot contesta desde el 7-ago) y anclaba toda la estrategia a **US$400 en
> Meta**, que dejó de ser el primer carril. La secuencia nueva de canales vive en
> **`15-CANALES-Y-SECUENCIA.md`**.

---

## Empresa / producto

- **Marca:** SoltyAI (SIEMPRE con "AI"). **SoltyAI S.A.S., constituida el 2026-07-02** — matrícula
  CCB 731655, **NIT 902081265-3** con régimen simple (RST).
- **Factura electrónica:** habilitada ante la DIAN desde el **26-jul-2026** (responsabilidad 52,
  certificado GSE, prefijo `SOL`, resolución `18764113048579`). La SAS emite factura validada por la
  DIAN, no cuenta de cobro. Esto **es un argumento de venta** frente al freelance y la agencia
  informal: el cliente descuenta el gasto.
- **Sede:** Bucaramanga, Santander, Colombia. Geo ancla: **Colombia**, con **área metropolitana de
  Bucaramanga primero** (es donde se puede ofrecer visita presencial).
- **Qué vende:** plataforma **SaaS multi-tenant de chatbots especializados por industria** para
  WhatsApp, Telegram y web, conectados al catálogo / agenda / CRM del negocio. **Done-for-you:**
  nosotros lo montamos y lo **adaptamos a la forma de trabajar del cliente**.
- **Verticales construidos y vendibles HOY** (5): **Citas, Comercio (pedidos por chat), Domicilios
  (plataforma operativa de despacho), Inmobiliaria, Integraciones a medida.** (La estrategia de
  negocio lista más productos a futuro —POS, ERP DIAN, Marketing IA—; **NO** se promocionan: aún no
  existen como producto vendible.)
- **Domicilios NO es lo mismo que Comercio**, y entró al canon el 2026-08-03 (decisión D3 de
  `business/24-coherencia-producto-empresa.md`): Comercio es el **bot** que toma pedidos por chat;
  Domicilios es la **plataforma operativa** de despacho (dashboard de operador + PWA del
  domiciliario), **sin chat automático**. En el producto es `packages/vertical-logistica`, en la
  suite el producto `08-domicilios-ops`, y en el catálogo el servicio `domicilios-ops`. Es la
  **única línea de suscripción con facturación recurrente hoy** (piloto Bucaradomi).
- **Modo con y sin IA:** el bot puede operar con IA (Claude Haiku 4.5) o en **modo determinista sin
  IA (0 tokens)** para flujos repetitivos → costo controlado, sin sorpresas de tokens.

### Canales — WhatsApp está VIVO desde el 2026-08-07

| Canal | Estado | Desde | Qué se puede prometer |
|---|---|---|---|
| **WhatsApp** | **vivo** | 7-ago-2026 | El bot atiende por WhatsApp Business API oficial. SoltyAI es **Tech Provider aprobado por Meta** (App Review aprobado el 6-ago, app `SoltyAI Platform` en Live), probado E2E contra el tenant `demo-l0615`. |
| **Telegram** | **vivo** | — | Canal de demos y de los bots en producción. |
| **Web** | próximamente | — | Widget web: **no se promete**. |

**Cómo se conecta el WhatsApp de un cliente — el camino A (asistida).** El cliente nos agrega como
socio a su WABA y lo registramos con `tools/scripts/registrar-waba.mjs`. **No hay autoservicio:** el
Embedded Signup necesita el permiso `business_management`, que **no** quedó aprobado, y se construye
cuando haya 3+ clientes. En la venta esto no es una limitación, es el moat: **lo conectamos nosotros**.

> ⚠️ **Lo único que todavía no está probado:** el canal se validó contra **nuestro propio número**.
> El primer registro de un WABA de cliente real será en vivo. No prometer plazos de conexión al día.

**Política de IA de WhatsApp (rige desde el 15-ene-2026) — restringe QUÉ se puede vender.** Meta
prohíbe los **chatbots de IA de propósito general**. SoltyAI vende y posiciona **solo bots de negocio
estructurados** por vertical: soporte, pedidos, reservas, recordatorios, calificación y ruteo de
leads. **Nunca "un asistente de IA" a secas.** Vale también en Telegram, para no rediseñar al migrar.

**Sin tarifa de Meta hacia nosotros:** el cliente paga su propio uso de la API de WhatsApp; SoltyAI
cobra la suscripción.

---

## La promesa — **un mensaje líder POR CANAL** (cambio del 2026-08-13)

Hasta hoy la regla era **un solo mensaje líder** (el bot) y "el servicio a la medida se ofrece, no se
anuncia". Se relaja a **un mensaje líder por canal**, porque al abrir el carril pago de Google para la
línea de servicio **nadie ve los dos mensajes a la vez**:

| Canal | Mensaje líder | Por qué ahí |
|---|---|---|
| **Meta, orgánico, outbound, landing** | **El bot** (suscripción) | Es demanda que hay que generar: el prospecto no busca "chatbot", hay que mostrarle el dolor. |
| **Google Search, Google Business Profile** | **El servicio a la medida y web** | Es demanda que ya existe: la gente **busca** "desarrollo de software Bucaramanga". Ticket $3M+, un cierre paga la ronda. |

**Lo que NO cambia:** dentro de una misma pieza sigue habiendo **un** mensaje. Decir "hacemos software
a la medida, páginas web, bots y marketing" en el mismo anuncio convierte la marca en la agencia
genérica de la esquina, que compite por precio contra veinte iguales. Y **todo cliente de servicio
sale con propuesta de bot**: la web es la puerta, la suscripción es la renta.

### El mensaje del bot

- **Promesa central:** *"Te devolvemos tiempo y ponemos orden en tu negocio: un asistente que
  atiende, vende y agenda 24/7 — adaptado a tu forma de trabajar."*
- **Tagline corto:** *"Más tiempo, más orden, más ventas — con un bot hecho a tu medida."*
- **Diferenciador / moat:** *"No te entregamos una herramienta para que la configures tú. La
  adaptamos a tu negocio en la instalación: tu catálogo, tus precios, tu forma de atender."* — esto a
  la vez **justifica el setup fee** (el setup ES la adaptación, no una barrera).
- **Tres ejes de valor:** **tiempo** (24/7 sin contratar más gente) · **orden** (todo registrado,
  agendado, sin caos) · **productividad** (tus asesores dejan de repetir lo mismo).

### El moat, actualizado por la competencia real (junio 2026)

**Meta lanzó su propio agente de IA nativo el 3-jun-2026** (Meta Business Agent, global en WhatsApp,
Messenger e Instagram): gratis para arrancar, se activa en minutos, y hace textualmente *responder
preguntas, recomendar productos, agendar citas, calificar leads y escalar a un humano*. Ya tiene más
de un millón de negocios instalados, y desde el **1-ago-2026 cobra por tokens** (US$2 por millón).

**Consecuencia directa para el mensaje: la categoría está muerta como argumento.** Anunciar "te armo
un chatbot con IA para WhatsApp" es competir contra un producto gratis del dueño de la plataforma,
dentro de la plataforma. Lo que Meta **no** hace, y es todo lo que vendemos:

1. **Configurarlo con tus datos.** Meta te da la herramienta; nadie te la deja andando con tus 29
   inmuebles, tus tarifas por zona y tu forma de cotizar. Eso es el setup, y es el moat.
2. **Vertical ya entrenado.** No un asistente genérico: el flujo de una inmobiliaria, de un operador
   de domicilios, de una barbería.
3. **Modo sin IA, 0 tokens.** Cuando el flujo es fijo, no se paga inferencia. Protege el margen del
   cliente y el nuestro. Meta cobra por token siempre.
4. **Español de Colombia y una persona que contesta.** Soporte local, no un centro de ayuda.
5. **Empresa formal que factura electrónicamente.** El cliente descuenta el gasto.

- **NO usar** los ángulos ya quemados del mercado (ver `03-competitor-analysis.md` §3): "atiende
  24/7" a secas, "centraliza WhatsApp", "CRM para WhatsApp", "tu bot no vende, el nuestro sí".
- **NO usar** tampoco el ángulo de categoría ("chatbot con IA para tu negocio"): en 2026 es lo que
  dicen Meta gratis, Wati, ManyChat, Zenvia, Atendio y veinte agencias locales. **El ángulo es el
  resultado, en tu vertical y en tu ciudad.**

---

## Pricing vigente — **COP, y el canon manda**

> 🔴 La fuente es **`data/canon.json` + `data/catalogo.json`** (decisión D1,
> `business/24-coherencia-producto-empresa.md`). Esta tabla es su espejo legible: si difieren, el
> canon gana y esta tabla está mal.

| Plan | Precio/mes | Conversaciones | IA |
|---|---|---|---|
| **Esencial** | **$290.000** | 200 | sin IA (determinista) |
| **Pro** | **$490.000** | 500 | con IA |
| **Premium** | **$790.000** | 1.500 | con IA |

- **Setup:** **$400.000** única vez. **50% al firmar, 50% cuando el bot esté atendiendo.**
- **Excedente:** **$50.000 cada 100 conversaciones** por encima del tope del plan.
- **IVA 19%:** todo precio de arriba es **antes de IVA** y se suma encima. La excepción marcada es
  `domicilios-ops` (contrato firmado con IVA incluido) — regla completa en `canon.json → ivaConvencion`.
- **Descuentos autorizados, y **no se acumulan** (se aplica el mayor, nunca dos):
  - **Primeros clientes: −30% por 3 meses**, 5 cupos, a cambio del caso de estudio.
  - **ONG / educación: −25% permanente**, caso por caso, no automático.
- **Sin permanencia**, mensual, datos exportables (Ley 1581). Setup no reembolsable salvo garantía.

**Garantía de implementación (7 días calendario).** Lo que se anuncia es una sola frase: *"Arrancas
pagando la mitad del setup. La otra mitad solo cuando tu bot esté atendiendo."* La devolución completa
y el mes gratis **NO se anuncian**: son la carta que se juega en la objeción, cerrando Pro o Premium.
Detalle y tiers en `canon.json → garantiaImplementacion`.

### La línea que ya factura en COP

| Producto | Para quién | Suscripción | Cobro inicial |
|---|---|---|---|
| **SoltyAI Domicilios — Plan Operativo** (`08-domicilios-ops`) | operadores de domicilios y mensajería | **$370.000/mes, IVA incluido** (base $310.924,37 + IVA $59.075,63) | **$0** |

Dashboard de operador + PWA del domiciliario, alojado y operado por SoltyAI. **Sin chat automático.**
Contrato firmado `SAI-DOMIOPS-20260703-001`, cobrado con la factura electrónica `SOL1`.

### La segunda línea: servicio a la medida y web

**Es la que más factura hoy**, y desde el 13-ago **sí se anuncia, pero solo en Google y GBP**:

| Regla | Valor |
|---|---|
| **Piso de precio** | **$3.000.000** (excepción: proyecto chico que abra la puerta a un cliente grande, y se anota como tal) |
| **Anticipo** | **50% para arrancar.** Sin anticipo no se agenda |
| **Simultáneos** | **1**, y máximo 1 por trimestre mientras la meta de los 12 clientes esté viva |
| **La prospección no se suspende** | Los contactos y las reuniones semanales se sostienen aunque haya proyecto en curso |
| **Deja pieza reutilizable** | Lo que se construya vuelve a `platform/` como módulo. Si no deja nada, es trabajo por horas disfrazado |
| **Sale con propuesta de bot** | Siempre |

Referencias reales: Swisscontact **$2.300.000** (módulo Zaranda, factura `SOL3`), Chalá **$800.000**
(cotización), Zaranda adición C **$300.000**.

> ⚠️ **PROHIBIDO** modelar o citar los planes USD **superados**: Starter $49 / Growth $149 / Pro $399,
> y el catálogo por producto Agenda $65/$250, Pedidos $80/$280, Inmobiliario $249/$600 y $650/$1.500,
> Integraciones $180/$3.500. Ese catálogo **ya no existe**; quedó reemplazado por el canon COP.
> (Ojo: "Pro" **a secas sí es válido** — es el plan COP de $490.000.)

---

## Costo de servir (para unit economics — `06-BUDGET-PLAN.md`)

- **IA (Claude Haiku 4.5, tarifa verificada):** input US$1/MTok, output US$5/MTok, caché lectura
  US$0,10/MTok, caché escritura US$1,25/MTok. **Costo por conversación con IA ≈ US$0,02–0,05** (con
  caché de prompt). 500 conv/mes ≈ US$15–25; 1.000 conv/mes ≈ US$30–50. El **modo sin IA baja esto a ~0**.
- **Infra:** VPS Hetzner CPX32 ~€20/mes **compartido** entre todos los tenants → ~US$1–2/cliente a escala.
- **WhatsApp (Colombia, ya vivo):** servicio iniciado por el cliente, **primeras 1.000 conv/mes
  gratis**; marketing ~US$0,02/msg, utilidad ~US$0,001/msg. **Lo paga el cliente**, no SoltyAI.
- **Conclusión:** márgenes 65–85% en todos los planes. El costo NO es la restricción; el precio se fija
  por valor/mercado, no cost-plus. Margen mínimo por línea: **suscripción 60%, servicios 35%**.

---

## Mercado (Colombia / LATAM PYME) — ver `03-competitor-analysis.md`

- **Competidor de plataforma (el que más pesa):** **Meta Business Agent**, gratis, nativo, un millón de
  negocios. No se compite por precio ni por "existencia del bot" (ver el moat, arriba).
- Entrada: Chately US$39, Cliengo US$45, Whaticket US$49 (self-serve, **tokens IA cobrados aparte**,
  sin setup). Media: Leadsales US$97, Chately top US$159, B2Chat ~US$50–300. Suman Wati, ManyChat,
  Zenvia y Atendio en el clúster LatAm.
- PYME colombiana paga cómodo **US$40–100/mes** todo incluido. **Nuestro Esencial ($290.000 ≈ US$72)
  está dentro; el Premium está arriba y se sostiene solo con el done-for-you.**
- **Hueco/moat:** done-for-you + vertical ya entrenado + IA incluida sin sorpresa de tokens + soporte
  local + adaptación en la instalación + empresa formal que factura. Nadie en PYME-LATAM combina eso.

### Benchmarks de adquisición (verificados 2026-08-13, fuentes externas)

Números de mercado, **no de nuestra cuenta** (la cuenta es nueva y no tiene histórico):

- **CPL B2B en Colombia: $80.000–$250.000 COP por lead.** En USD, los rangos publicados van de
  US$25–80 por SQL en software y US$40–150 en consultoría.
- **Meta no es motor de leads B2B de servicio complejo.** Captura mal la intención alta; funciona en
  mid-funnel. **Google captura demanda existente.** El mix recomendado para servicios B2B en Colombia
  es **~65% Google / 35% Meta**.
- **CPM de Meta B2B Colombia: US$4–12** (contra US$22–65 de LinkedIn). Los decisores pasan **1h47 al
  día en Meta contra 23 min en LinkedIn** en LATAM: el alcance está, la intención no.
- **Estacionalidad:** el CPM global bajó de US$25,22 en noviembre-2025 a US$15,74 en enero-2026 (−37%).
  Q1 y Q2 son los tramos baratos para probar.

> **Lo que estos números cambiaron:** el corte viejo de **$25.000 por lead calificado** estaba **3 a 10
> veces por debajo del mercado**, y no por optimismo sino por un error de anclaje: se calculó para que
> el **setup ($400.000) pagara la adquisición**. Con CPLs reales, la suscripción sola **no puede pagar
> tráfico pago**. Hay que anclar al **LTV**. Recalibración completa en `06-BUDGET-PLAN.md`.

---

## Economía de adquisición recalibrada (2026-08-13)

| Indicador | Antes | **Ahora** | De dónde sale |
|---|---|---|---|
| Ticket promedio supuesto | $390.000/mes | **$390.000/mes** *(supuesto: mezcla Esencial/Pro)* | canon |
| Caja mes 1 por cliente | $790.000 | **$790.000** | setup $400.000 + mes 1 |
| **LTV bruto 12 meses** | no se usaba | **$5.080.000** | $400.000 + $390.000 × 12 |
| **Techo de CAC** | $400.000 | **$800.000** | 2× el setup; se recupera en el mes 2 |
| **Corte por lead calificado** | $25.000 | **$120.000** | $800.000 ÷ ~6,7 calificados por cierre |
| Matar ad set / keyword | >$9 USD | **>$250.000 por calificado** | ~2× el corte |
| **KPI que manda** | demos entregadas | **reuniones agendadas** | el correo pivotó a reunión (`business/16 §6c`) |

**Payback:** deja de ser inmediato y pasa al **mes 2–3**. Es el precio de jugar en un mercado con CPLs
reales, y exige caja para flotarlo — por eso el carril de servicio en Google entra primero: **un cierre
de $3.000.000 con 50% de anticipo financia varias rondas de bot.**

---

## Oferta de conversión — el prospecto ELIGE cómo entrar

1. **Prueba el bot ahora** (CTA primario) — demo viva. Para el curioso que quiere ver el producto al
   instante. Es el diferenciador "vive el producto".
2. **Agenda una reunión** (CTA que hoy manda) — Calendly, 15 minutos. Captura nombre, negocio,
   **rubro**, teléfono. **Es el KPI de la semana.**
3. **Escríbenos por WhatsApp** (terciario) — click-to-chat humano (`wa.me/<número>`).

> 🔴 **La vía 3 sigue sin número propio de SoltyAI**, y eso ahora bloquea más que antes: sin línea
> propia no hay **contestador de muestra 24/7** —que va sin IA, cuesta $0 y es el mejor anuncio que
> existe, porque el prospecto le escribe al producto que le estás vendiendo.

**Onboarding tester → cliente:** tras probar o agendar, ofrecer *"te lo dejamos configurado con tus
datos reales para que lo pruebes de verdad"* → el prospecto ve SU negocio funcionando antes de pagar.

**Ojo con la demo abierta:** el bot demo tiene la compuerta `accessMode: request` a propósito (un chat
no autorizado nunca llega al LLM, cero tokens). Quien entra en frío **no ve el bot buscando inmuebles**:
ve una pre-calificación y queda esperando aprobación. Por eso el link al bot va en **outbound** (donde
el contexto ya está dado) y no en orgánico ni en la descripción de una red.

---

## Canales de adquisición — la secuencia manda, y vive en `15-CANALES-Y-SECUENCIA.md`

Resumen de una línea por carril:

| Carril | Trabajo | Paga en | Estado |
|---|---|---|---|
| **Google Business Profile** | Pack local + reseñas verificables | Semanas | **por crear** — es lo primero |
| **Google Search** | Capturar intención existente del servicio a la medida | Semanas | por abrir, $400.000 de prueba |
| **Orgánico / contenido** | Construir el activo que prospecta sin manos | 6–12 meses | a mano, 2 posts/semana |
| **Outbound** | El motor de corto plazo | Días | corriendo (865 prospectos) |
| **Meta Ads** | Generar demanda por vertical + geo | Meses | **relegado** hasta que haga falta |

**Presupuesto total de pauta: $4.000.000 COP**, del crédito personal, que se queda en la cuenta de
Carlos y se paga directo (art. 35 ET — `business/18` §2). Los datos fiscales de la cuenta publicitaria
van a nombre de **SOLTYAI S.A.S. · NIT 902081265-3**, y cada gasto se registra en el libro de caja como
egreso con nota *"pagado por el socio — por reembolsar"*.

**Outbound (canal vivo):** **865 prospectos en producción** en la suite — CORREO 305 (Instantly) y
DIRECTO 560 (164 con web viva · 260 por tel/WA/IG · 136 sin canal · **64 del área metropolitana** =
visita). 🔴 **El carril directo se contacta a mano, NUNCA por la API de WhatsApp.** Y **nunca subir
esos teléfonos a Meta** como audiencia (viola ToS + Ley 1581).

---

## Identidad de marca — ver `02-brand-dna.md` / `brand-profile.json`

- **Colores:** fondo navy `#0A1628`; **teal primary `#0EA5E9`**; acentos `#10B981`/`#22D3EE`/`#67E8F9`;
  texto slate `#CBD5E1`. Nada de fondos blancos.
- **Tipografía:** **Inter** (Variable, self-hosted), una sola familia.
- **Estética:** dark/navy tech, grid sutil, orbes/líneas estilo red neuronal, minimal, mucho espacio
  negativo. NO stock cursi, NO lifestyle de consumo, NO personas genéricas sonriendo a cámara.
- **Tono:** español de Colombia, tuteo, directo, técnico-accesible, orientado a resultados. Guía
  completa: `business/13-guia-estilo-y-prompting.md` (sin rayas largas, sin tono de IA).

---

## Prueba social — solo lo verificable

Hoy son **dos, y nada más**: **Bucaradomi** (piloto real, con permiso) y **Swisscontact** (servicio
entregado, factura `SOL3`). Prohibido "+100 clientes", "líderes en", "miles de negocios".

**Lo que va a ampliar esta lista, y por eso importa:** las **reseñas del Google Business Profile** son
prueba social verificable de origen externo. Es la razón número dos para crearlo ya.

---

## Reglas de calidad para TODOS los entregables

- Español de Colombia, tuteo, claro y concreto. Sin relleno corporativo vacío.
- Cualquier número estimado → etiquétalo "**(estimado)**" o "**(supuesto)**" y explica el supuesto.
- **Canal honesto, versión 2026-08:** WhatsApp y Telegram **sí se prometen**; la **web no**. Y nunca se
  vende "un asistente de IA" abierto: son **bots de negocio estructurados** (política de WhatsApp).
- **Pricing honesto:** el canon COP manda. Cero USD legacy, cero Starter/Growth/Pro **superados**.
- **Un mensaje líder por canal**, y uno solo dentro de cada pieza.
- **Toda pieza publicable lleva `origin`** registrado (`npm run link nuevo`): sin fuente, el lead no se
  puede evaluar y la ronda no se puede leer.
- `npm run check` antes de dar nada por listo. El guardrail decide, no el borrador.

---

## Archivos del paquete (orden de lectura)

`README` (mapa) · **`01-SOURCE-BRIEF` (este)** · `02-brand-dna` + `brand-profile.json` ·
`03-competitor-analysis` · **`15-CANALES-Y-SECUENCIA`** (la secuencia vigente) · `04-STRATEGY` (Meta,
para cuando entre) · `05-PRICING` · `06-BUDGET-PLAN` · `07-CAMPAIGN-BRIEF` · `08-TRACKING-SETUP` ·
`09-OUTBOUND` · `10-IMPLEMENTATION-ROADMAP` · `11-PRE-LAUNCH-CHECKLIST` · `12-QA-VALIDATION` ·
`13-PLAN-12-CLIENTES` · `14-SWIPE-FILE`.

## Archivos fuente del producto (rutas absolutas, si necesitas más detalle)

- **Canon (manda):** `D:\Trabajo\soltyai\marketing\data\canon.json` + `...\data\catalogo.json`
- Landing: `D:\Trabajo\soltyai\platform\apps\landing\src\data\site.ts`, `...\plans.ts`, `...\useCases.ts`
- Catálogo del back-office: `D:\Trabajo\soltyai\suite\apps\dashboard\prisma\seed.ts`
- Política de precios/descuentos: `D:\Trabajo\soltyai\business\estrategia\07-pricing.md`
- Costos IA: `D:\Trabajo\soltyai\platform\packages\core\src\agent\ai-pricing.ts`
- WhatsApp / Tech Provider: `D:\Trabajo\soltyai\business\estrategia\11-whatsapp-2026-ia-y-tech-provider.md`
