# 12 · QA-VALIDATION — Validaciones fechadas del paquete de marketing

> **Este documento tiene dos partes, y el orden importa.**
>
> - **PARTE I — Validación vigente (2026-08-13):** el paquete contra el canon de hoy.
> - **PARTE II — Registro histórico (2026-06-20):** la validación de la consolidación original.
>   Se conserva porque cuenta cómo quedó armado el paquete, **pero varios de sus ✅ ya no son
>   ciertos** y están marcados uno por uno. No se cita como si rigiera.
>
> **Por qué se partió en dos (y no se borró la parte vieja).** Hasta hoy este archivo era un
> certificado ✅ de reglas que ya no rigen: decía que el canal honesto era "Telegram hoy,
> WhatsApp próximamente" y que el pricing por producto en dólares estaba "uniforme en 11 archivos".
> Las dos cosas eran verdad en junio y son falsas desde julio y agosto. **Un documento de QA que
> afirma cosas falsas es peor que no tener QA:** da la tranquilidad sin el chequeo. Se fecha, se
> parte, y lo viejo queda como historia, que es lo único para lo que sirve.

---

# PARTE I — Validación vigente · **2026-08-13**

**Contra qué se valida:** `data/canon.json` + `01-SOURCE-BRIEF.md` + `15-CANALES-Y-SECUENCIA.md`.
**Cómo:** `npm run check` (linter del linter + guardrails + catálogo + reportes) más lectura del
canon. Lo que dice ✅ acá se ejecutó; lo que no se pudo verificar se dice, no se supone.

## 1. Puertas automáticas

| Puerta | Comando | Resultado |
|---|---|---|
| El linter muerde (todas las reglas esperadas se disparan sobre el fixture malo) | `npm run prueba` | ✅ |
| Guardrails sobre docs y `copy/` | `npm run guardrails` | ✅ **verde, 0 errores y 0 avisos** |
| Catálogo: márgenes y reglas de la línea de servicios | `npm run catalogo` | ✅ en orden |
| Reportes | `npm run reportes validar` | ✅ sin semanas cargadas todavía (el tablero arranca vacío, y eso es correcto) |

**Avisos que quedan abiertos a propósito** (no bloquean, y taparlos sería el error):

- `setup` con margen 40% contra un mínimo de 60%, y `desarrollo-a-medida` con 20% contra 35%. Los dos
  usan **costo supuesto**: se miden con la primera venta real, no antes.
- **7 servicios con números sin verificar** (`domicilios-ops`, `setup`, `desarrollo-a-medida`,
  `web-corporativa`, `web-redespliegue`, `web-cuidada`, `integracion-erp`). Toda cotización que los
  use sale marcada. Es la regla de honestidad funcionando, no una falla.

## 2. Canales — lo que se puede prometer

| Check | Resultado |
|---|---|
| `canon.canales.vivos` = **whatsapp, telegram** | ✅ |
| `canon.canales.proximamente` = **web** (el widget del sitio **no se promete**) | ✅ |
| Prohibición `whatsappComoPromesa` **retirada**, conservada en el canon bajo clave con `_` como registro | ✅ |
| La reemplazan **dos** reglas nuevas: `asistenteGeneralIa` (política de IA de WhatsApp) y `webComoPromesa` | ✅ |
| El matiz se conserva donde toca: canal probado contra **nuestro propio número**, conexión por **camino A (asistida)**, **sin autoservicio** | ✅ en `02`, `08` §4.3, `09` §B.5 y `11` bloque D |
| Ningún doc del paquete sigue diciendo "WhatsApp próximamente" ni "no prometer WhatsApp API" | ✅ (el único hit vivo está en `CHANGELOG.md`, que es historia y debe decirlo) |

> ⚠️ **Lo que este check NO prueba:** que el registro del WABA de un cliente real funcione. Se probó
> contra el número propio. Hasta que se haga una vez en vivo, **no se prometen plazos de conexión**.

## 3. Pricing

| Check | Resultado |
|---|---|
| Precios propios en **COP** y derivados del canon: Esencial $290.000 · Pro $490.000 · Premium $790.000 · setup $400.000 · excedente $50.000/100 conv. | ✅ |
| Todo precio del canon es **antes de IVA**, con la excepción marcada de `domicilios-ops` (contrato con IVA incluido) | ✅ |
| Cero pricing USD **superado** presentado como propio | ✅ — los hits restantes son avisos "PROHIBIDO/superado" o **precios de competidores** |
| Precios de competidores **en USD, sin convertir** | ✅ **a propósito**: son datos verificados con URL, y una TRM supuesta los degradaría a estimación |
| "Pro" a secas sigue siendo válido (es el plan COP de $490.000) | ✅ |

## 4. Economía de adquisición recalibrada

| Indicador | Canon | ✓ |
|---|---|---|
| Corte por lead calificado | **$120.000** (era $25.000) | ✅ |
| Advertencia · matar · escalar | **$180.000** · **$250.000** · **menos de $80.000** | ✅ |
| Techo de CAC | **$800.000** (era $400.000) | ✅ |
| LTV bruto 12 meses | **$5.080.000** | ✅ |
| Ticket promedio *(supuesto: mezcla Esencial/Pro)* · caja mes 1 | $390.000 · $790.000 | ✅ |
| KPI que manda | **reuniones agendadas**, meta **2 por semana** | ⚠️ ver §7 |

## 5. Atribución y carriles

| Check | Resultado |
|---|---|
| `utm.source` incluye **`google`** y **`gbp`** | ✅ |
| `utm.medium` incluye **`paid_search`** y **`organic_local`** | ✅ |
| `fuentesPagadas` incluye **`google`** | ✅ |
| `fuentesPagadas` **NO** incluye **`gbp`** | ✅ **es una decisión, no un olvido**: el GBP no cobra, y meterlo ahí le inventaría un costo por lead |
| `fuentesDeDato` incluye **`export-google`** | ✅ |
| Orden de carriles = GBP → orgánico → Google Search → Meta *(relegado)*, outbound en paralelo | ✅ |
| Ya no existe el calendario fijo de "3 rondas de Meta" | ✅ |
| `mensajeLiderPorCanal`: el **bot** en Meta/orgánico/outbound/landing, el **servicio** en Google Search y GBP | ✅ |
| Dentro de una misma pieza sigue habiendo **un** mensaje | ✅ (regla conservada en el canon y en los docs) |

## 6. Honestidad del mensaje

| Check | Resultado |
|---|---|
| Prueba social sólo verificable: **Bucaradomi** (piloto, con permiso) y **Swisscontact** (servicio, factura `SOL3`) | ✅ — no hay un solo "+100 clientes" ni "líderes en" como afirmación propia |
| Números sin fuente etiquetados **(estimado)** o **(supuesto)** | ✅ en las tasas de outbound y en el ticket promedio |
| Benchmarks externos declarados como externos (CPL B2B Colombia $80.000–$250.000) | ✅ |
| Nunca "un asistente de IA" abierto: se venden **bots de negocio estructurados** por vertical | ✅ corregido en `09` (§B.4 y el aviso de las plantillas viejas) |
| Toda pieza publicable lleva `origin` en `data/links.json` | ✅ lo hace cumplir el guardrail `copy:origen-sin-link` |

## 7. Hallazgos abiertos (lo que NO está resuelto)

1. 🟡 **El KPI cambió de nombre en la prosa, no en la clave.** `canon.tablero.kpiQueManda` sigue
   diciendo **`demos`**, con una nota que explica que el número es el mismo (una cita en el Calendly)
   y que **el renombre se hace en canon + código + README a la vez, nunca a medias**. Mientras tanto,
   `src/reportes` sigue recibiendo `--demos=` y guardando `demos`. Está documentado en los dos lados,
   así que no engaña a nadie, **pero es deuda**: un lector nuevo del código va a leer "demos" y
   pensar en demos.
2. 🟡 **`ga4MeasurementId` sigue en `G-XXXXXXXXXX` y `metaPixelId` vacío.** Ya no bloquean sólo a
   Meta: **bloquean también la conversión de Google Ads**, que es donde entra el primer peso.
3. 🔴 **Sigue sin haber número propio de SoltyAI**, y hoy bloquea tres cosas a la vez: la tercera CTA
   de la landing, el **teléfono del Google Business Profile** y el contestador de muestra 24/7.
4. 🟡 **Residuos del plan viejo en docs fuera de este parche** — quedan anotados, no corregidos acá:
   `04-STRATEGY.md` (el tier Inmobiliario $249/$600 en §196 y la lista de "906 inmobiliarias" en
   §338) y `13-PLAN-12-CLIENTES.md` (la lista de "906" en §125 y "2 demos por semana" en §390).
5. 🟡 **Ninguna semana cargada en `data/semanas.json`.** El tablero está correcto pero vacío: la
   primera lectura real de la regla de corte todavía no ha ocurrido.

---

# PARTE II — Registro histórico · **2026-06-20** *(superado, se conserva como historia)*

> 🔴 **Nada de esta parte rige.** Es el reporte de verificación de la consolidación original del
> paquete (17 archivos sueltos → 13 numerados). Lo que sigue siendo cierto es **cómo se armó**; lo
> que caducó son los hechos de producto y precio. Los ✅ que hoy son falsos están marcados.

## H.1 Estructura de entonces

```
README.md                               índice + cómo ejecutar + notas honestas
01-SOURCE-BRIEF.md         fuente canónica (contrato)
02-brand-dna.md            ADN de marca + promesa única
brand-profile.json         marca legible por máquina (insumo /ads) — JSON válido ✅
03-competitor-analysis.md  inteligencia competitiva (precios verificados con URL)
04-STRATEGY.md             estrategia + arquitectura de campaña (fusión)
05-PRICING.md              precios por producto + qué cubre
06-BUDGET-PLAN.md          unit economics recalculados
07-CAMPAIGN-BRIEF.md       conceptos + copy deck + video + image briefs
08-TRACKING-SETUP.md       tracking/atribución de las 3 vías + conciliación
09-OUTBOUND.md             estrategia + playbook (fusión)
10-IMPLEMENTATION-ROADMAP.md  cronograma día a día
11-PRE-LAUNCH-CHECKLIST.md prerrequisitos + onboarding
12-QA-VALIDATION.md        este reporte
```

**Fusiones:** `ADS-STRATEGY` + `CAMPAIGN-ARCHITECTURE` → `04-STRATEGY`; `OUTBOUND-STRATEGY` +
`OUTBOUND-PLAYBOOK` → `09-OUTBOUND`. **Eliminados** (consumidos en las fusiones/renumeraciones):
`_SOURCE-BRIEF`, `ADS-STRATEGY`, `CAMPAIGN-ARCHITECTURE`, `OUTBOUND-STRATEGY`, `OUTBOUND-PLAYBOOK`,
`PRICING`, `BUDGET-PLAN`, `campaign-brief`, `TRACKING-SETUP`, `IMPLEMENTATION-ROADMAP`,
`PRE-LAUNCH-CHECKLIST`, `brand-dna`, `competitor-analysis`, `README`, `QA-VALIDATION` (viejos).

> Desde entonces el paquete creció: se sumaron `13-PLAN-12-CLIENTES`, `14-SWIPE-FILE`,
> **`15-CANALES-Y-SECUENCIA`**, `data/`, `copy/`, `redes/` y `src/`. El índice vive en `README.md`.

## H.2 Cómo se produjo (orquestación) — *sigue siendo cierto*

Claude (orquestador) fijó el contrato `01-SOURCE-BRIEF.md` y lanzó **4 agentes en paralelo**
con **propiedad de archivos disjunta** (sin colisiones): A=estrategia+economía (04,06),
B=pricing+creatividades (05,07), C=tracking+outbound+ops (08–11), D=marca+intel+índice (00,02,03,json).
Integración, QA y ese reporte los hizo el orquestador. En ese momento `marketing/` **no era repo git**
→ sin worktree, sin build/test; el gate era la verificación de consistencia de abajo.
**Hoy sí es repo git y el gate es `npm run check`,** que corre en CI.

## H.3 Los checks de junio, con su veredicto de hoy

| Check de 2026-06-20 | Entonces | **Hoy** |
|---|---|---|
| `brand-profile.json` parsea como JSON | ✅ | ✅ sigue valiendo |
| Cero pricing viejo Starter/Growth/Pro como precio PROPIO | ✅ | ✅ sigue valiendo |
| Pricing por producto uniforme (Agenda $65/$250, Pedidos $80/$280, Inmob $249/$650, Integraciones $180/$3.500) en 11 archivos | ✅ | 🔴 **FALSO**: ese catálogo en dólares quedó **superado** por el canon COP el 22-jul-2026 |
| Tier Inmobiliario entry siempre marcado "(propuesto, validar)" | ✅ | 🔴 **sin objeto**: el tier ya no existe |
| 3 opciones de conversión (prueba bot / agenda / WhatsApp) | ✅ | 🟡 parcial: la vía WhatsApp **no se pinta** por falta de número propio |
| Canal honesto (Telegram hoy, WhatsApp/web **próximamente**; no prometer WhatsApp API) | ✅ | 🔴 **FALSO desde el 2026-08-07**: WhatsApp está **vivo** y sí se promete. Sólo la **web** sigue en *próximamente* |
| Referencias cruzadas con los nombres numerados nuevos | ✅ | ✅ y el guardrail `enlaces-rotos` lo vigila solo |
| Embudo sin TOFU/MOFU/BOFU formal en ronda 1 | ✅ | 🟡 el concepto de "ronda 1 de Meta" dejó de ser el eje del plan |
| Resultado realista 1–4 cierres; estimados etiquetados | ✅ | ✅ la regla de etiquetado sigue viva y la hace cumplir el catálogo |

## H.4 El hallazgo económico de junio *(superado)*

Decía que con el pricing por producto la caja del mes 1 más baja (**Agenda = $65 + $250 = $315**)
quedaba por debajo de los **US$400** de la ronda, o sea que un cierre no daba break-even inmediato.

**Qué queda de eso:** el diagnóstico de fondo era correcto y el número era el equivocado. Hoy la caja
del mes 1 es **$790.000** (setup $400.000 + un mes), el techo de CAC es **$800.000** y el payback
dejó de ser inmediato **a propósito**: se corre al **mes 2–3**, porque anclar la adquisición al setup
en vez de al LTV era justamente el error. La versión vigente está en `06-BUDGET-PLAN.md`.

## H.5 Los pendientes de junio, hoy

- ~~Validar el tier Inmobiliario entry ($249/$600)~~ → **sin objeto**: el catálogo por producto en
  dólares quedó **superado**.
- **Reemplazar placeholders** → siguen `whatsappNumber`, `ga4MeasurementId` y `metaPixelId`. Es el
  hallazgo 2 y 3 de la Parte I, y hoy pesa más que en junio.
- **Producción de creatividades** → sigue pendiente, pero **ya no es lo urgente**: Meta quedó
  relegado y el primer carril es el Google Business Profile, que no necesita creatividad.
- ~~Decidir si versionar `marketing/` en git~~ → **hecho**: es repo, con CI.
