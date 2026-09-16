# SoltyAI — marketing

Repo **privado** del motor de marketing de SoltyAI: la estrategia escrita (docs `01`–`14`) **y** los
programas que la ejecutan y la vigilan (`src/`). Todo en español de Colombia, tuteo, directo.

Nació como paquete de campaña para promocionar el **SaaS de chatbots especializados de SoltyAI** a
PYMEs en Colombia, producido con el plugin **claude-ads** mediante un pipeline de agentes en
paralelo; desde 2026-07-25 es también código.

**La promesa líder del bot** (titular en Meta y en el outbound; el orgánico y la landing llevan el
servicio a la medida desde ago/sep-2026):
*"Te devolvemos tiempo y ponemos orden en tu negocio: un asistente que atiende, vende y agenda 24/7
— adaptado a tu forma de trabajar."* · Tagline: *"Más tiempo, más orden, más ventas — con un bot
hecho a tu medida."* · Moat: **done-for-you — no te entregamos una herramienta para configurar tú; la
adaptamos a tu negocio en la instalación.**

> **Desde el 2026-08-13 hay un mensaje líder POR CANAL, no uno solo.** En **Google Search y en el
> Google Business Profile** el titular es la **línea de servicio a la medida**, que es la que hoy
> factura. Dentro de una misma pieza sigue habiendo uno solo. El porqué, en
> **`15-CANALES-Y-SECUENCIA.md`**.

---

## Mapa del paquete (orden de lectura)

| # | Archivo | Qué es |
|---|---|---|
| 00 | `README.md` | **Este mapa.** Orden de lectura, cómo ejecutar la ronda, notas honestas. |
| 01 | `01-SOURCE-BRIEF.md` | **Fuente canónica** del producto, pricing y mensaje. Manda sobre todo. Empieza aquí si retomas. |
| 02 | `02-brand-dna.md` + `brand-profile.json` | ADN de marca: promesa, diferenciador, 3 ejes (tiempo/orden/productividad), voz, colores navy/teal, Inter, público. Insumo de la creatividad. |
| 03 | `03-competitor-analysis.md` | Competencia por frente (refresco 16-sep-2026): Meta, bots, estudios e integración DIAN, domicilios; huecos y amenazas con URL y fecha. La ronda de junio (mapa, ángulos A–G) quedó archivada en su Anexo A. |
| 04 | `04-STRATEGY.md` | El **carril de Meta**, hoy **relegado**: objetivo, embudo, audiencias, KPIs. Sirve para cuando Meta entre. |
| 05 | `05-PRICING.md` | Pricing por producto + qué cubre cada cosa (y qué validar). |
| 06 | `06-BUDGET-PLAN.md` | Unit economics: CAC máx, LTV:CAC, escenarios, presupuesto diario, reglas de poda/escalado. |
| 07 | `07-CAMPAIGN-BRIEF.md` | **Brief accionable:** conceptos + copy deck (≤límites Meta) + guiones de video + image briefs. |
| 08 | `08-TRACKING-SETUP.md` | Tracking realista + puente de atribución Meta→Telegram + huecos honestos. |
| 09 | `09-OUTBOUND.md` | Adquisición dirigida sobre los **865 prospectos vivos en producción** — canal paralelo y gratis a la pauta. |
| 10 | `10-IMPLEMENTATION-ROADMAP.md` | Roadmap día a día de la ronda (prep → lanzamiento → poda → reinversión). |
| 11 | `11-PRE-LAUNCH-CHECKLIST.md` | Prerrequisitos antes de salir (operativo · legal para cobrar · diferido) + plan de la semana. |
| 12 | `12-QA-VALIDATION.md` | Reporte de verificación (JSON válido, conteos de copy, consistencia, honestidad). |
| 13 | **`13-PLAN-12-CLIENTES.md`** | **El plan vigente:** meta de +12 clientes a diciembre, mix por canal, semana 0 de desbloqueos, calendario ago→dic y tablero semanal. Manda sobre el cronograma del `10`. |
| 14 | `14-SWIPE-FILE.md` + `swipe/` | **Append-only:** anuncios reales vistos en el feed, con captura, qué robar y qué evitar. Tapa el hueco del `03` §6 (creatividades vivas no revisadas). Lo nuevo va arriba. |
| 15 | 🆕 **`15-CANALES-Y-SECUENCIA.md`** | **En qué orden se encienden los canales y por qué (2026-08-13).** GBP → orgánico a mano → Google Search → **Meta relegado**. Trae las reglas de corte recalibradas, la regla de las 8 semanas antes de la máquina de contenido, y qué se puede hacer hoy de la máquina de ventas. **Manda sobre la premisa del `04` y del `13` §5.** |

---

## El código (`src/`)

Node 20, ESM, **sin dependencias**: tiene que correr en segundos y no romperse por un `npm install`.

| Comando | Qué hace |
|---|---|
| `npm run guardrails` | **El linter del mensaje.** Convierte las decisiones ya escritas en reglas que fallan el CI: pricing COP, planes superados (USD) **y planes retirados** (los 3 de bot, despublicados el 15-sep-2026: el bot se cotiza), **el asistente de IA de propósito general** (política de WhatsApp) y **el canal web** como promesa, ángulos quemados del `03` §3, prueba social no verificable, límites de caracteres de Meta, coherencia de plazos y precios dentro de una pieza, enlaces internos rotos, fuentes de `origin` desconocidas, evidencia del swipe file. Mira `copy/`, `redes/`, los `.txt` y, **si está en disco al lado, los correos de `../tools/apps/prospeccion`** (si no está, lo dice y no finge). |
| `npm run prueba` | Verifica que el linter **muerde**: corre las reglas contra `copy/_pruebas/anuncio-malo.json`, que acumula a propósito todos los errores que debe cazar, y comprueba que cada `excluir` de una prohibición exime algo real. |
| `npm run link nuevo -- --fuente=meta --audiencia=duenopyme --creatividad=c2` | Genera y **registra** el link de una pieza: UTMs + `origin` + deep-link de Telegram + WhatsApp + `/contacto` (`08` §2). Los UTMs se pierden al saltar al bot; el `origin` es lo único que sobrevive, y a mano se rompe. |
| `npm run catalogo` | Tabla de todo lo vendible con precio, costo de servir y **margen**. |
| `npm run catalogo validar` | Aplica por código las reglas del `13` §10: margen mínimo por línea, piso de $3.000.000, 50% de anticipo. |
| `npm run catalogo cotizar -- bot-pro --meses=12 --descuento=0.3` | Cotización con IVA, margen y los avisos que correspondan. Un ítem en estado `referencia` (los planes de bot, el setup, `integracion-erp`) sale con el aviso de que el importe **no es publicable**: es la base para armar la cotización. |
| `npm run reportes` | Tablero semanal y regla de corte de la ronda, con **los dos cortes calculados**: $/lead calificado y **techo de CAC**. El KPI que manda son las **reuniones** (`--reuniones=`, `canon.tablero.metaReunionesSemana`; la clave se llamó `demos` hasta el 15-sep-2026). Los umbrales se leen del canon, no del código. |
| `npm run check` | Los **cinco** de arriba (`sin-dependencias` · `prueba` · `guardrails` · `catalogo validar` · `reportes validar`). Es lo que corre el CI. ⚠️ El workflow de Actions todavía corre sólo cuatro: le falta `reportes validar`. |

**Datos** (`data/`, versionados — son memoria de la empresa): `canon.json` (hechos canónicos en
formato máquina, espejo del `01` y de `ESTADO.md`) · `catalogo.json` (servicios, costos, márgenes) ·
`links.json` (registro de atribución). Fuera de git: `.env`, listas con datos personales (Ley 1581).

**Módulos diseñados y sin construir**, cada uno con su README y sus decisiones ya fijadas:
`src/contenido` (1 idea → 3 canales — **bloqueado a propósito** hasta que el orgánico a mano haya
corrido 8 semanas, ver `15 §5`) · `src/anuncios` (producción y validación de creatividades) ·
`src/cotizar` (puente al suite por MCP).

**Frontera con `tools/`:** `tools/apps/prospeccion` sigue siendo el ejecutor del outbound (tiene los
datos, el `.env` y las credenciales). Este repo **mide y decide**; no duplica el pipeline.

---

> `brand-profile.json` acompaña a `02-brand-dna.md` (mismo insumo de marca, formato máquina para los
> agentes de creatividad). No tiene número propio porque lo consume el plugin claude-ads por nombre.

---

## El orden en que se encienden los canales (2026-08-13)

🔴 **Esto reemplazó a "cómo ejecutar la ronda de Meta".** El detalle vive en
**`15-CANALES-Y-SECUENCIA.md`**; esto es el resumen.

| # | Carril | Cuándo | Cuánto | Su trabajo |
|---|---|---|---|---|
| 1 | **Google Business Profile** | esta semana | **$0** | Pack local + reseñas verificables |
| 2 | **Contenido a mano**, 2/semana | ya, 8 semanas | **$0** | El activo que prospecta sin manos |
| 3 | **Google Search** (servicio a la medida) | tras el GBP | **$400.000** | Capturar intención que ya existe |
| 4 | **Meta**, una vertical | cuando haga falta volumen | **$1.200.000** | Generar demanda |
| — | *(Outbound, en paralelo todo el tiempo)* | corriendo | **$0** | El motor de corto plazo |

**Presupuesto total $4.000.000 COP**, con **$2.400.000 sin asignar a propósito**: se asignan contra
resultados, no contra un plan escrito en agosto.

**El embudo, comprimido (un solo nivel de conversión):**

1. El anuncio **no pide la venta: pide la reunión.** El KPI es **reuniones agendadas**
   (`canon.tablero.kpiQueManda = "reuniones"`).
2. El destino ofrece **3 opciones de entrada**:
   - **Prueba el bot ahora** — demo viva por **WhatsApp o Telegram** (los dos vivos; la web no).
   - **Agenda una reunión** (la que hoy manda) — formulario de `/contacto` + invitación de Meet a
     mano, 15 minutos (no hay Calendly desde el 9-sep-2026).
   - **Escríbenos por WhatsApp** — click-to-chat humano. ✅ Línea comercial propia desde el 11-sep-2026 (Tigo prepago, 300 570 1661).
3. **Reunión** → oferta tester→cliente: *"te lo dejamos configurado con tus datos reales para que lo
   pruebes de verdad"* (el setup como prueba de valor).
4. **Cierre por cotización.** El bot se cotiza por prospecto desde el 15-sep-2026 (los 3 planes se
   retiraron de la publicación): un cobro único de adaptación, mitad al arrancar y mitad cuando el
   bot atiende, más una mensualidad según canales, volumen, IA e integraciones; los importes de
   referencia viven en `data/catalogo.json` (estado `referencia`) y no se publican. **Por proyecto** si
   entró por Google: se cotiza (el cliente pone el presupuesto, 50% de anticipo); sólo la línea de web
   lleva cifra pública («desde $400.000»).

**Canal paralelo y gratuito:** **outbound** 1-a-1 **manual** sobre los 865 prospectos vivos
(`09-OUTBOUND.md`). 🔴 **Nunca por la API de WhatsApp**, y **nunca subir esos teléfonos a Meta**
(ToS + Ley 1581).

Orden operativo detallado: `15-CANALES-Y-SECUENCIA.md` + `13-PLAN-12-CLIENTES.md` +
`11-PRE-LAUNCH-CHECKLIST.md`.

---

## Notas honestas (no las pierdas)

- **Resultado realista:** B2B con presupuesto chico da **1–4 cierres** por ronda — aprendizaje +
  primeros clientes, no escala. No inflar (nada de "76 cierres" de encadenar tasas optimistas).
- **Canal, versión 2026-08:** **WhatsApp y Telegram están vivos**; sólo la **web** sigue en
  "próximamente" y no se promete. Lo que tampoco se promete son **plazos de conexión al día**: el
  canal se probó contra nuestro propio número y el primer WABA de cliente real se registra en vivo.
  Y **nunca "un asistente de IA" abierto**: la política de IA de WhatsApp sólo permite bots de
  negocio estructurados, y romper eso no cuesta un anuncio, cuesta el canal.
- **Pricing honesto:** manda el canon **en COP**, y desde el 15-sep-2026 **el bot no lleva cifra
  pública**: sus 3 planes, el setup y el excedente son `referencia` (se cotiza con ellos, no se
  publican; prohibición `planesRetirados`). **Prohibido** Starter/Growth/Pro y todo el catálogo por
  producto en USD: están **superados**. El **motor contable no se ofrece** (no es producto a vender);
  la integración contable DIAN a la medida sí.
- **Atribución aproximada:** la plataforma no ve el salto al bot; se cierra con el parámetro `start`
  del deep-link + conteo manual de leads → reuniones → cierres (ver `08-TRACKING-SETUP.md`).
- **Versionado desde 2026-07-25** en su propio repo privado `carmegar/soltyai-marketing`.
- **Presupuesto:** **$4.000.000 COP**, y **ya no en 3 rondas de Meta** — ver
  `15-CANALES-Y-SECUENCIA.md`. Los docs `04`, `06`, `07` y `10` siguen valiendo **como método**
  (estrategia, economía unitaria, creatividad, día a día de una ronda); el orden, el monto y el
  calendario los mandan el `15` y el `13`.
- ✅ **El linter mira `redes/` y los `.txt` desde el 20-ago-2026**, y desde el **15-sep** también los
  correos del outbound en `../tools/apps/prospeccion` cuando el repo está en disco (si no está, lo
  dice; no finge). Hasta el 20-ago el copy realmente publicado nunca pasó por un guardrail, y por
  eso 4 líneas convivieron meses con una regla que las prohibía.

---

## Si retomas esto tras un `clear`

Todo el estado vive en esta carpeta. **Empieza por `01-SOURCE-BRIEF.md`** (producto + pricing +
decisiones canónicas) y sigue con **`15-CANALES-Y-SECUENCIA.md`** (qué se enciende y en qué orden).
Lo accionable de cada carril está en el doc de ese carril, no en el `07`, que hoy es sólo el de Meta.

El paquete está **listo para clear**: numerado, consistente con el canon COP, sin referencias a
Starter/Growth/Pro ni al embudo "solo Telegram", y con Meta marcado como relegado en los cuatro docs
que lo daban por primero (`04`, `07`, `10`, `13`).
