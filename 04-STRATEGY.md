# 04 · STRATEGY — El carril de Meta (SoltyAI)

> # ⚠️ ESTE CARRIL ESTÁ RELEGADO (2026-08-13)
>
> **Meta ya no es el primer carril pago, ni el único.** La secuencia vigente es
> **Google Business Profile → orgánico a mano → Google Search → Meta**, y vive en
> **`15-CANALES-Y-SECUENCIA.md`**, que **manda sobre este documento**.
>
> Este doc **no se archiva**: es el playbook de Meta y sirve tal cual el día que Meta entre. Lo que
> cambió, y hay que leer con eso en la cabeza:
>
> - **El presupuesto ya no es US$400.** Es **$1.200.000 COP** para la ronda de Meta, dentro de un
>   total de $4.000.000 del que **$2.400.000 quedan sin asignar a propósito**. Donde el doc diga
>   US$400 / $280 / $80 / $40, la proporción 70/20/10 sigue valiendo; la cifra no.
> - **El corte por lead calificado ya no es ~$10 USD ni $25.000 COP: es $120.000 COP**, con
>   advertencia en $180.000 y muerte en $250.000. Techo de CAC **$800.000**. El porqué, en
>   `06-BUDGET-PLAN.md` y en `15 §8`.
> - **WhatsApp está VIVO** (ver §2, que cambió de raíz).
> - **El KPI que manda es reuniones agendadas**, no demos entregadas.
> - **Google Search dejó de ser "fase 2"**: es el carril que va **antes** que este.
> - El pricing por producto en USD que este doc cita quedó **superado**: manda el canon COP.

> Estrategia + arquitectura de paid media para el carril de Meta de SoltyAI.
> Fuente de verdad: `01-SOURCE-BRIEF.md` (manda sobre todo). Este doc fusiona y actualiza
> la estrategia y la estructura de cuenta en uno solo. Unit economics → `06-BUDGET-PLAN.md`.
> Copy y specs → `07-CAMPAIGN-BRIEF.md`. Tracking/atribución → `08-TRACKING-SETUP.md`.
> Outbound (canal gratis paralelo) → `09-OUTBOUND.md`. Cronograma → `10-IMPLEMENTATION-ROADMAP.md`.
>
> Todo número sin fuente de cuenta real va etiquetado **(estimado)**. La cuenta es nueva: no hay histórico.

---

## 1. Resumen ejecutivo

Con **US$400 de semilla** compramos **conversaciones calificadas** de dueños/administradores de PYMEs
colombianas a través de **una sola plataforma: Meta (Facebook + Instagram)**. El anuncio es **tráfico
con CTA conversacional**: lleva a un destino donde el prospecto **elige cómo entrar** —probar el bot,
agendar una demo o escribir por WhatsApp— y donde, si elige el bot, **usa el producto en vivo** (demo
por Telegram hoy). El prospecto no "ve" el SaaS: lo **usa**. Ese es el diferenciador y el motor de
conversión.

No es una campaña de marca ni un budget recurrente: es **una corrida de prueba de ~7 días + relectura**
diseñada para (a) validar que Meta trae conversaciones a costo razonable, (b) producir los primeros
cierres y testimonios en Colombia, y (c) **generar caja para reinvertir**. El eje financiero está en
el ticket del mes 1 (setup + mensualidad por producto): basta cerrar **1–2 clientes** para que la
ronda quede en negro. Detalle en `06-BUDGET-PLAN.md`.

**Lo que NO es esta ronda:** no es un funnel TOFU/MOFU/BOFU formal. Con US$400 y cuenta fría no hay
datos ni presupuesto para nutrir tres etapas. Es **un solo nivel de conversión**: las 3 creatividades
prueban **ÁNGULOS/mensajes** (no etapas), y el embudo se comprime en **la oferta con 3 opciones de
entrada** (probar / agendar / WhatsApp). El funnel lean de 2 etapas llega **en la reinversión (fase 2)**,
no ahora (§10).

**Resultado base realista con US$400 y B2B: 1–4 cierres (base ~2).** Ronda de aprendizaje + primeros
clientes, no de escala. NO inflar.

---

## 2. Objetivo de campaña en Meta (la sutileza, explicada)

### El problema — y cómo se disolvió el 2026-08-07

> 🔄 **Esta sección cambió de raíz.** Decía que WhatsApp API oficial **no estaba disponible** para
> nosotros y que por eso el objetivo tenía que ser **Tráfico**. Meta aprobó a SoltyAI como Tech
> Provider el 6-ago-2026 y el bot contesta por WhatsApp desde el 7-ago. **La restricción que
> justificaba toda esta sección ya no existe.**

El embudo deseado es conversacional. En Meta eso se hace con el objetivo **Interacción → Mensajes**,
que abre un hilo dentro de un canal de Meta (Messenger, Instagram Direct o **WhatsApp**). **Telegram
sigue sin ser uno de esos canales** — eso no cambió y no va a cambiar. Lo que cambió es que **WhatsApp
sí lo es, y ahora lo tenemos.**

**Consecuencia práctica, y es la mejor noticia que trajo el cambio de canal para este carril:** el
**Click-to-WhatsApp** pasó de imposible a disponible. Es el formato que mejor convierte en LATAM
porque elimina el salto fuera de la app: el prospecto toca el anuncio y ya está escribiendo, sin
landing intermedia, sin fricción, y del otro lado contesta el mismo bot que le estamos vendiendo.

**Y arregla el problema de fondo que tenía la creatividad:** antes esto era vender un bot de Telegram
a pymes colombianas que **no usan Telegram para su negocio**. Ningún ángulo salvaba eso. Por eso Meta
pasó de *bloqueado y sin sentido* a *relegado y viable*.

### La decisión

**Cuando Meta entre, el objetivo por defecto es Mensajes → WhatsApp**, y Tráfico queda como
alternativa cuando se quiera medir con píxel propio o mandar a la landing de servicio. La tabla de
abajo se conserva porque su razonamiento sigue siendo correcto para el caso Tráfico:

| Capa | Elección | Por qué |
|---|---|---|
| **Objetivo de campaña** | **Tráfico (Traffic)** | Único objetivo que permite **destino URL externo** (landing puente o `t.me/<bot>`). "Mensajes" no acepta Telegram; "Leads" abre un formulario nativo dentro de Meta (rompe "vive el producto"). |
| **Optimización del ad set** | **Clics en el enlace (Link clicks)** para arrancar | Sin píxel maduro, optimizar a clic da volumen y aprendizaje rápido con poco budget. Si la landing puente carga rápido (<2 s), probar **Vistas de la landing (LPV)** en una relectura. |
| **CTA del anuncio** | **"Enviar mensaje"** o **"Más información"** | "Enviar mensaje" comunica el embudo conversacional aunque el destino sea un enlace; "Más información" es el fallback seguro. Probar ambos. |
| **Destino** | **Landing puente con las 3 opciones** (recomendado) → fallback **deep-link `t.me/<bot>?start=<utm>`** | La landing puente aloja el píxel, da las 3 opciones de entrada y limpia la atribución; el `start=` viaja al bot. Ver `08-TRACKING-SETUP.md`. |

> **Alternativa descartada para ronda 1:** objetivo **Leads** con formulario instantáneo. Más barato
> por lead, pero entrega un email frío, no una conversación caliente, y **mata el diferenciador** (el
> prospecto no usa el producto). Anotado como test de fase 2 si Tráfico no rinde.

> **Por qué no "Ventas/Conversiones" todavía:** optimizar a conversión exige un volumen de eventos del
> píxel que US$400 no genera (Meta necesita ~50 conversiones/semana por ad set para salir de aprendizaje
> — **(estimado, regla general de Meta)**). Arrancamos por clic y subimos de escalón solo al reinvertir.

---

## 3. Por qué Meta (y una sola plataforma)

- **Donde está la PYME colombiana.** Dueños y administradores de pequeños negocios (peluquerías,
  restaurantes/tiendas, inmobiliarias) viven en Facebook e Instagram y gestionan ahí su presencia.
  Reach barato y segmentación por intereses de negocio decente para B2B-PYME local.
- **Un presupuesto chico no alcanza para dispersar.** Repartir entre Meta + Google + TikTok a la vez
  deja a cada plataforma sin señal estadística. **Concentrar = aprender.**
  🔄 **Lo que cambió el 13-ago:** concentrar sigue siendo correcto, pero **la plataforma en la que se
  concentra primero ya no es Meta**. Google Search captura intención que ya existe y Meta la genera;
  para servicios B2B en Colombia el mix recomendado es ~65% Google / 35% Meta. Google dejó de ser
  "fase 2": es la **fase 1**. Meta entra después, y con **una sola vertical**, no con tres.
- **El formato encaja.** Tráfico conversacional es nativo de Meta y se alinea con un producto cuyo
  gancho es "habla con el bot ahora mismo" / "míralo con tus datos".
- **Atribución manejable.** Una sola plataforma = un solo píxel, un solo set de UTMs, un solo panel
  que conciliar contra el bot y los leads.

---

## 4. El embudo — un nivel, comprimido en la oferta (NO TOFU/MOFU/BOFU)

La ronda 1 tiene **un solo nivel de conversión**. No hay etapas de nutrición. El embudo "se comprime"
porque el destino **ofrece 3 puertas de entrada** y deja que el prospecto elija la fricción que tolera.
Las 3 creatividades NO son etapas: son **ángulos distintos** apuntando a la misma oferta (§7).

```
[Meta Ad — FB/IG]  CTA "Enviar mensaje" / "Más información"  (3 ángulos = 3 ad sets)
        │  (clic; UTM en el destino)
        ▼
[Destino: landing puente con 3 opciones de entrada]  ← aquí elige el prospecto
   1. PRUEBA EL BOT AHORA   → deep-link t.me/<bot>?start=meta_<adset>  (demo viva en Telegram hoy)
   2. AGENDA UNA DEMO       → formulario / Calendly (nombre, negocio, rubro/vertical, teléfono → reunión)
   3. ESCRÍBENOS POR WHATSAPP → wa.me/<número> (click-to-chat humano)
        │
        ▼
[Conversación / reunión]  ← se califica el rubro y se hace demo en vivo (el bot mismo es la demo)
        │
        ▼
[Onboarding tester → cliente]  "te lo dejamos configurado con tus datos reales para que lo pruebes
   de verdad"  ← el setup como prueba de valor: ve SU negocio funcionando antes de pagar
        │
        ▼
[Cierre de suscripción]  producto correcto por vertical (Agenda / Pedidos / Inmobiliario / Integraciones)
   + setup único (la adaptación done-for-you, ver 05-PRICING.md)
```

- **Por qué 3 opciones y no solo Telegram.** No todos quieren chatear con un bot frío: algunos prefieren
  agendar o escribir a una persona. Bajar la fricción dando opciones **sube la tasa de entrada**. Las 3
  ya existen en la landing (`platform/apps/landing/src/data/site.ts`: `demoUrl`, `calendlyUrl`,
  `whatsappNumber`, `lead.endpoint`).
- **La landing puente es funcional, no decorativa.** Aloja el píxel, da las 3 opciones y limpia la
  atribución (mide el clic a Telegram con un evento). Recomendada como **default** sobre el deep-link
  directo (ver `08-TRACKING-SETUP.md`).
- **Canal honesto, versión 2026-08.** La demo corre por **WhatsApp y Telegram**, los dos vivos; sólo
  la **web** sigue en "próximamente". Lo que no se promete son **plazos de conexión al día**: el canal
  se probó contra nuestro propio número y el primer WABA de cliente real se registra en vivo. Y nunca
  se vende "un asistente de IA" abierto: la política de IA de WhatsApp sólo permite bots de negocio
  estructurados.
- **El onboarding "con tus datos reales" es la palanca de cierre.** Convierte testers en clientes:
  el setup deja de ser una barrera y pasa a ser la prueba de valor (ver promesa en `01-SOURCE-BRIEF.md`).

---

## 5. Audiencias a probar — por vertical/dolor (3 ad sets ABO)

Probamos **3 audiencias en 3 ad sets paralelos** (una creatividad-ángulo por ad set). Segmentamos
**por vertical/dolor** (no por "etapa de funnel"), porque el producto vende soluciones por industria.
Geo: **Colombia urbana** — Bogotá, Medellín, Cali, Barranquilla, Bucaramanga (radio ciudad). Edad
**25–55**, todos los géneros, idioma español.

> **Tamaño de audiencia con poco budget:** con ~US$40/día total, audiencias demasiado anchas
> desperdician impresiones. Mantén cada ad set en un rango **(estimado)** de **300k–2M personas** para
> Colombia urbana; ni nicho asfixiante ni masa sin foco.

### Ad set A — "Citas / agenda" (peluquerías, barberías, spa, estética, uñas, consultorios)
Intereses: *Peluquería, Barbería, Salón de belleza, Spa, Estética, Uñas/manicure, Consultorio,
Citas y reservas, Belleza y cuidado personal*.
**Dolor:** la silla vacía y el teléfono que no para; doble-reserva y no-shows; agendar a mano.
**Promesa:** un asistente que **agenda, reagenda y recuerda solo** 24/7. → Producto **SoltyAI Agenda**.

### Ad set B — "Comercio / domicilios" (restaurantes de barrio, tiendas, domicilios)
Intereses: *Restaurante, Comida a domicilio, Tienda/minimarket, Comercio local, WhatsApp Business,
Mercado Libre, Atención al cliente, Pequeño comercio*.
**Dolor:** perder pedidos por no contestar a tiempo; tomar pedidos a mano; caos del domicilio.
**Promesa:** **catálogo + carrito + pedido** por chat, contraentrega o pago en línea. → Producto
**SoltyAI Pedidos** (probado en piloto real).

### Ad set C — "Inmobiliaria" (inmobiliarias 3–15 agentes / inventarios grandes)
Intereses: *Inmobiliaria, Agente inmobiliario, Bienes raíces, Arriendo/venta de propiedades,
Finca raíz, CRM inmobiliario*.
**Dolor:** asesores repitiendo lo mismo, leads sin calificar, agenda de visitas desordenada.
**Promesa:** **pre-califica leads, responde del inventario (RAG) y agenda visitas** sola. → Producto
el **vertical inmobiliaria**, que se vende con los planes del canon: **Esencial $290.000 / Pro
$490.000 / Premium $790.000** al mes + setup $400.000, antes de IVA (`05-PRICING.md`). El tier
"entry" en USD que decía acá quedó **superado** con el resto del catálogo por producto.

> **Audiencia D — "dueño-general" (de respaldo, NO un 4º ad set):** intereses de propietario
> (*Emprendimiento, Pequeña empresa, Propietario de empresa, Herramientas/software de negocios*) bajo
> el ángulo transversal "tiempo + orden". **Solo se activa** si uno de los 3 ad sets verticales hay
> que matarlo (§reglas de poda en `06-BUDGET-PLAN.md`); reutiliza su budget en vez de abrir un 4º ad set
> (el budget de la ronda no aguanta 4). No se lanza de entrada.

> **Retargeting: NO en ronda 1.** US$400 no genera el volumen de visitantes/engagers que hace rentable
> una audiencia de remarketing. En ronda 1 solo **sembramos** las audiencias (ver §10 y
> `08-TRACKING-SETUP.md`).

---

## 6. Estructura de cuenta y campaña

### 6.1 Jerarquía

```
Cuenta de anuncios de Meta (SoltyAI)
│
├── Business Manager: SoltyAI  ← Página FB + cuenta IG + Píxel + cuenta de anuncios
│
└── CAMPAÑA (1)  ── Objetivo: TRÁFICO (Traffic)
    │              Presupuesto: a NIVEL DE AD SET (ABO, no CBO) — control fino con poco budget
    │
    ├── AD SET A — "Citas/agenda"        └── Anuncio A — Ángulo 1 (Agenda)
    ├── AD SET B — "Comercio/domicilios"  └── Anuncio B — Ángulo 2 (Pedidos)
    └── AD SET C — "Inmobiliaria"         └── Anuncio C — Ángulo 3 (Inmobiliario)
```

> **ABO (Ad Set Budget Optimization), no CBO.** Con US$400 queremos **garantizar** que cada vertical
> reciba gasto suficiente para aprender. CBO dejaría que Meta concentre todo en el ad set que arranque
> mejor y mataría el test antes de tener datos. Repartimos a mano.

> **1 creatividad-ángulo por ad set, no 3 en cada uno.** Con el budget de la ronda, meter 3 anuncios por
> ad set fragmenta el gasto y ninguno sale de aprendizaje. Atamos **1 vertical ↔ 1 mensaje** para leer
> señal limpia. Las variaciones del ganador se prueban en la reinversión.

### 6.2 Configuración por nivel

**Campaña**

| Parámetro | Valor | Nota |
|---|---|---|
| Objetivo | **Tráfico** | Único objetivo con destino URL externo. |
| Categoría especial de anuncio | **Ninguna** | No es empleo/crédito/vivienda/política. (Inmobiliaria = software para inmobiliarias, no anuncio de vivienda — verificar en el review.) |
| Presupuesto | **A nivel de ad set (ABO)** | Control manual del reparto. |
| Pruebas A/B nativas | Off | El test de ángulos ya está en los 3 ad sets. |

**Ad sets (los tres comparten esta base)**

| Parámetro | Valor | Nota |
|---|---|---|
| Optimización de la entrega | **Clics en el enlace** | Arranque con poco budget; LPV como alternativa en la relectura. |
| Estrategia de puja | **Costo más bajo (Lowest cost)**, sin tope | Dejar a Meta encontrar el clic más barato en aprendizaje. |
| Ventana de atribución | **7 días clic, 1 día visualización** (default) | La conversión real ocurre fuera del píxel; sirve para clics/LPV. |
| Ubicaciones | **Advantage+ Placements (automáticas)** | Con poco budget, dejar que Meta optimice. Excluir Audience Network si llega tráfico basura (revisar a las 48 h). |
| Geo | **Colombia urbana** (Bogotá, Medellín, Cali, Barranquilla, Bucaramanga) | Densidad urbana = mejor entrega. Ampliar a todo CO si falta volumen. |
| Edad / Género / Idioma | **25–55 / Todos / Español** | Núcleo de dueños/administradores. |
| Programación | Continua los días de la corrida | Sin day-parting en ronda 1 (poco volumen para leerlo). |

**Anuncios**

| Parámetro | Valor | Nota |
|---|---|---|
| Formato | **Imagen única** o **video corto 9:16 / 1:1** | Empezar con imagen estática (más barata); video como prueba en reinversión. Specs en `07-CAMPAIGN-BRIEF.md`. |
| CTA | **"Enviar mensaje"** (preferido) o **"Más información"** | Refuerza el embudo conversacional. Probar ambos si el review lo permite. |
| Destino (URL) | **Landing puente con UTM** (default) → fallback deep-link Telegram | Ver `08-TRACKING-SETUP.md`. |
| Texto / título / descripción | Por ángulo (Agenda / Pedidos / Inmobiliario) | Copy y conteo de caracteres en `07-CAMPAIGN-BRIEF.md`. Marca **siempre "SoltyAI"**. |
| Identidad | Página FB + cuenta IG de SoltyAI | Necesarias antes de lanzar (ver `10-IMPLEMENTATION-ROADMAP.md`). |

### 6.3 Convención de nombres

Formato: `[Plataforma]_[Objetivo]_[Audiencia/Vertical]_[Geo]_[Fecha]`

**Campaña**
```
META_TRAFFIC_Prospecting_CO_2026Q2
```

**Ad sets**
```
META_TRAFFIC_Citas_CO_2026Q2
META_TRAFFIC_Comercio_CO_2026Q2
META_TRAFFIC_Inmobiliaria_CO_2026Q2
```

**Anuncios (incluyen el ángulo para lectura rápida)**
```
AD_Agenda_Citas_2026Q2
AD_Pedidos_Comercio_2026Q2
AD_Inmobiliario_Inmobiliaria_2026Q2
```

> El nombre refleja el **vertical + ángulo**, para que el reporte se lea de un vistazo. El `start=` del
> deep-link (`08-TRACKING-SETUP.md`) replica esta nomenclatura para conciliar con el bot.

---

## 7. Ángulos de mensaje (uno por ad set, alineado a su vertical)

Tres ángulos, uno por creatividad/ad. Voz: español de Colombia, tuteo, foco en producto y resultado.
El copy fino con conteo de caracteres lo cierra `07-CAMPAIGN-BRIEF.md`; aquí va la dirección.

| # | Vertical | Ángulo | Gancho | Promesa SoltyAI |
|---|---|---|---|---|
| **A** | **Citas/agenda** | "Tu agenda llena sin contestar el teléfono" | El bot **agenda, reagenda y recuerda** solo, 24/7; sin doble-reserva ni no-shows. | Más tiempo + orden — SoltyAI Agenda |
| **B** | **Comercio/domicilios** | "Deja de perder pedidos por no contestar a tiempo" | **Catálogo + carrito + pedido** por chat; contraentrega o pago en línea. Probado en piloto real. | Más ventas — SoltyAI Pedidos |
| **C** | **Inmobiliaria** | "Tus asesores dejan de repetir lo mismo" | **Pre-califica leads, responde del inventario y agenda visitas** sola. | Más productividad — SoltyAI Inmobiliario |

> **Diferenciador transversal en los 3 (el moat):** *"No te entregamos una herramienta para que la
> configures tú. La adaptamos a tu negocio en la instalación: tu catálogo, tus precios, tu forma de
> atender."* Esto justifica el setup fee y debe aparecer en cada ángulo (ver `01-SOURCE-BRIEF.md`).

> **NO usar** los ángulos quemados del mercado: "atiende 24/7" a secas, "centraliza WhatsApp", "CRM para
> WhatsApp", "tu bot no vende, el nuestro sí". **Prueba social (testimonios):** se reserva para cuando
> existan; hoy no hay casos cerrados → **no inventar testimonios** (el piloto Bucaradomi se puede citar
> como "probado en piloto real" sin nombre, solo en el ángulo B/Pedidos).

---

## 8. Reparto operativo del budget (alto nivel)

> El **detalle financiero** (unit economics, break-even, escenarios, reglas de poda/escalado) lo lleva
> `06-BUDGET-PLAN.md`. Aquí solo el **reparto operativo** para montar la estructura.

Marco 70/20/10 del skill `ads-plan`, adaptado a una sola plataforma y a "semilla, no recurrente":
repartimos entre **probado / escalado / reserva** dentro de Meta.

| Tramo | % | Monto (sobre los **$1.200.000 COP** de la ronda de Meta) | Uso |
|---|---|---|---|
| **Corrida inicial** | ~70% | **$840.000** | 3 ad sets en paralelo, $280.000 c/u durante ~7 días (≈ $40.000/día por ad set). |
| **Escalado del ganador** | ~20% | **$240.000** | Subir budget del ad set/ángulo ganador tras la lectura, +20% por paso. |
| **Reserva de prueba** | ~10% | **$120.000** | Variante de creatividad, nuevo ángulo o nueva ciudad según lo aprendido. |

> 🔄 **Convertido el 13-ago.** Acá el reparto estaba en US$400 / $280 / $80 / $40. La **proporción**
> 70/20/10 es lo que valía y se conserva; las cifras eran del presupuesto viejo. Y el test ya no es
> "de 3 verticales": cuando Meta entre, es **una sola vertical** con 3 **ángulos** (`15 §7`).

> **Mínimo de Meta:** el piso por ad set es ~US$1–2/día; ~$13/día por ad set queda holgado sobre el
> mínimo. Si Meta exige más volumen para salir de aprendizaje, **se consolida de 3 a 2 ad sets** antes
> que bajar el diario por debajo de ~$10/día/ad set (que arruina la entrega).

> **Upside sin CAC de pauta — el outbound.** En paralelo corre el canal **outbound gratis**
> (`09-OUTBOUND.md`): contacto 1-a-1 **manual** sobre los **865 prospectos vivos en producción**, con demo en
> Telegram, cerrando con el producto Inmobiliario (tier entry propuesto para PYME pequeña). Esos cierres
> **no cargan CAC de pauta** y mejoran la economía global de la ronda. **No subir esos teléfonos a Meta**
> (viola ToS + Ley 1581).

---

## 9. KPIs de la ronda (rangos estimados)

> **Todos los números son (estimado)** de benchmarks de industria para tráfico Meta B2B-PYME en LATAM,
> **no** datos de la cuenta. Semáforo, no promesa. Las tasas de conversión finas y los escenarios viven
> en `06-BUDGET-PLAN.md`.

| Métrica | Rango objetivo (estimado) | Cómo se mide | Nota |
|---|---|---|---|
| **CPM** | $3–$8 / 1.000 impresiones | Meta Ads Manager | LATAM suele estar por debajo de US/EU. |
| **CTR (link)** | 0,8%–2,0% | Meta Ads Manager | <0,6% = creatividad o audiencia floja. |
| **CPC (link click)** | $0,10–$0,50 | Meta Ads Manager | Costo real de "mandar al destino". |
| **Clics totales** | **~800–4.000** con $400 | Meta Ads Manager | Piso/techo del embudo. |
| **Tasa clic→entrada** (chat/agenda/WhatsApp) | 25%–50% (estimado) | Conteo en el destino (UTM + `start` + eventos landing) | **El número más incierto** — la brecha Meta→destino. |
| **Conversaciones/leads calificados** | **~50–300** | Panel del bot + leads del formulario + conteo manual | KPI primario de la ronda. |
| **Costo por conversación/lead calificado** | **$2–$8** (estimado) | $400 ÷ calificados | Métrica norte de eficiencia y de poda. |
| **Cierres (suscripción)** | **1–4** (base ~2) | Conteo manual de ventas | Con 1–2 la ronda se autofinancia (ticket mes 1). |
| **CAC efectivo** | $100–$400 / cliente | $400 ÷ cierres | Comparar contra caja mes 1 por producto → `06-BUDGET-PLAN.md`. |

**Criterio de éxito (mínimo viable):** ≥1 cierre **y** costo por calificado en rango **y** ≥1 ad set con
CTR sano → hay señal para reinvertir.
**Criterio de corte:** si tras el gasto de aprendizaje ningún ad set baja de ~$10 por calificado
(estimado) y CTR sigue <0,6%, se pausa y se re-trabaja oferta/creatividad antes de gastar más.

---

## 10. Riesgos y honestidad sobre el estado

- **Brecha de atribución Meta→destino (riesgo #1).** El píxel de Meta **no ve** lo que pasa dentro de
  Telegram. Sin el parámetro `start`, los eventos de la landing puente y el conteo manual, "clics" y
  "conversaciones" quedan desconectados. Mitigación completa en `08-TRACKING-SETUP.md`.
- **Política de Meta sobre enlaces a apps de mensajería de terceros.** Mandar tráfico a `t.me` es
  permitido como enlace externo normal, pero **vigilar rechazos** del review por "destino fuera de la
  experiencia". Por eso la **landing puente es el default** (mide el clic con el píxel y limpia
  atribución) y `t.me` directo es fallback.
- **Anuncio inmobiliario y categoría especial.** Vendemos *software para inmobiliarias*, no vivienda;
  aun así Meta puede marcarlo. Si el review exige "categoría especial: vivienda", reformular el copy
  hacia "herramienta para agentes" y, si persiste, mover ese budget a la audiencia de respaldo D.
- ✅ **WhatsApp SÍ.** Meta aprobó a SoltyAI como Tech Provider el 6-ago-2026 y el bot contesta desde el 7-ago. Lo que sigue sin prometerse: **plazos de conexión al día** y el canal **web**.
- **Cuenta nueva = sin histórico.** Los KPIs son estimados de industria; la verdad la da la corrida.
- **Presupuesto chico = aprendizaje caro.** Meta penaliza ad sets famélicos. Por eso 3 ad sets, no 8;
  y optimización a clic, no a conversión.

---

## 11. Retargeting y funnel lean — SOLO fase 2 (reinversión)

Con US$400 **no** montamos retargeting ni funnel formal: el volumen de ronda 1 es muy chico para que una
audiencia de remarketing tenga entrega rentable. En ronda 1 solo **sembramos**:

- Píxel activo en la landing puente desde el día 1 (`08-TRACKING-SETUP.md`).
- Audiencias personalizadas en segundo plano: **"interactuaron con el anuncio (FB/IG)"**, **"visitaron
  la landing (180 días)"**, **"hicieron clic a Telegram / iniciaron chat"** (vía evento en la landing).

**Fase 2 (al reinvertir caja real) — funnel LEAN de 2 etapas, nunca 3 pesadas:**

- **TOFU** frío-amplio: dolor transversal (**tiempo / orden**), audiencia ancha + lookalike 1% sobre los
  cierres de ronda 1.
- **BOFU** retargeting: **prueba por vertical + adaptación + demo** a quienes interactuaron/visitaron.
- **MOFU ligero** (sub-conjunto del retargeting): **caso del piloto Bucaradomi como prueba social**, una
  vez exista el primer testimonio.
- Posible apertura de **Google Search** (alta intención). La estructura de fase 2 se diseña **con datos
  reales**, no ahora.

---

## 12. Cómo se conecta con los otros documentos

- **Precios por producto, bundle, tier entry propuesto:** `05-PRICING.md`.
- **Unit economics, break-even, CAC vs LTV, escenarios, reglas de poda/escalado:** `06-BUDGET-PLAN.md`.
- **Copy final y specs de creatividades:** `07-CAMPAIGN-BRIEF.md`.
- **Tracking, píxel, UTMs/deep-link, atribución, landing puente, conteo manual:** `08-TRACKING-SETUP.md`.
- **Outbound (canal gratis paralelo, lista de inmobiliarias):** `09-OUTBOUND.md`.
- **Cronograma día a día (prep → lanzamiento → optimización → reinversión):** `10-IMPLEMENTATION-ROADMAP.md`.
