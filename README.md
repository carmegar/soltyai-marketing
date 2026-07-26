# SoltyAI — marketing

Repo **privado** del motor de marketing de SoltyAI: la estrategia escrita (docs `01`–`14`) **y** los
programas que la ejecutan y la vigilan (`src/`). Todo en español de Colombia, tuteo, directo.

Nació como paquete de campaña para promocionar el **SaaS de chatbots especializados de SoltyAI** a
PYMEs en Colombia, producido con el plugin **claude-ads** mediante un pipeline de agentes en
paralelo; desde 2026-07-25 es también código.

**La promesa líder (un solo mensaje en todo el paquete):**
*"Te devolvemos tiempo y ponemos orden en tu negocio: un asistente que atiende, vende y agenda 24/7
— adaptado a tu forma de trabajar."* · Tagline: *"Más tiempo, más orden, más ventas — con un bot
hecho a tu medida."* · Moat: **done-for-you — no te entregamos una herramienta para configurar tú; la
adaptamos a tu negocio en la instalación.**

---

## Mapa del paquete (orden de lectura)

| # | Archivo | Qué es |
|---|---|---|
| 00 | `README.md` | **Este mapa.** Orden de lectura, cómo ejecutar la ronda, notas honestas. |
| 01 | `01-SOURCE-BRIEF.md` | **Fuente canónica** del producto, pricing y mensaje. Manda sobre todo. Empieza aquí si retomas. |
| 02 | `02-brand-dna.md` + `brand-profile.json` | ADN de marca: promesa, diferenciador, 3 ejes (tiempo/orden/productividad), voz, colores navy/teal, Inter, público. Insumo de la creatividad. |
| 03 | `03-competitor-analysis.md` | Competidores PYME Colombia/LATAM (precios verificados + fuentes), el hueco a explotar (done-for-you) y 6 ángulos. |
| 04 | `04-STRATEGY.md` | Plan estratégico: objetivo Meta (Tráfico), embudo, audiencias, KPIs. |
| 05 | `05-PRICING.md` | Pricing por producto + qué cubre cada cosa (y qué validar). |
| 06 | `06-BUDGET-PLAN.md` | Unit economics: CAC máx, LTV:CAC, escenarios, presupuesto diario, reglas de poda/escalado. |
| 07 | `07-CAMPAIGN-BRIEF.md` | **Brief accionable:** conceptos + copy deck (≤límites Meta) + guiones de video + image briefs. |
| 08 | `08-TRACKING-SETUP.md` | Tracking realista + puente de atribución Meta→Telegram + huecos honestos. |
| 09 | `09-OUTBOUND.md` | Adquisición dirigida con la lista scrapeada (906 inmobiliarias) — canal paralelo y gratis a la pauta. |
| 10 | `10-IMPLEMENTATION-ROADMAP.md` | Roadmap día a día de la ronda (prep → lanzamiento → poda → reinversión). |
| 11 | `11-PRE-LAUNCH-CHECKLIST.md` | Prerrequisitos antes de salir (operativo · legal para cobrar · diferido) + plan de la semana. |
| 12 | `12-QA-VALIDATION.md` | Reporte de verificación (JSON válido, conteos de copy, consistencia, honestidad). |
| 13 | **`13-PLAN-12-CLIENTES.md`** | **El plan vigente (2026-07-25):** meta de +12 clientes a diciembre, mix por canal (outbound / pauta $4M en 3 rondas / orgánico), semana 0 de desbloqueos, **LinkedIn de empresa con textos listos**, calendario ago→dic y tablero semanal. Manda sobre el cronograma del `10`. |
| 14 | `14-SWIPE-FILE.md` + `swipe/` | **Append-only:** anuncios reales vistos en el feed, con captura, qué robar y qué evitar. Tapa el hueco del `03` §6 (creatividades vivas no revisadas). Lo nuevo va arriba. |

---

## El código (`src/`)

Node 20, ESM, **sin dependencias**: tiene que correr en segundos y no romperse por un `npm install`.

| Comando | Qué hace |
|---|---|
| `npm run guardrails` | **El linter del mensaje.** Convierte las decisiones ya escritas en reglas que fallan el CI: pricing COP vigente, planes superados, WhatsApp solo como "próximamente", ángulos quemados del `03` §3, prueba social no verificable, límites de caracteres de Meta, coherencia de plazos y precios dentro de una pieza, enlaces internos rotos, evidencia del swipe file. |
| `npm run prueba` | Verifica que el linter **muerde**: corre las reglas contra `copy/_pruebas/anuncio-malo.json`, que acumula a propósito todos los errores que debe cazar. |
| `npm run link nuevo -- --fuente=meta --audiencia=duenopyme --creatividad=c2` | Genera y **registra** el link de una pieza: UTMs + `origin` + deep-link de Telegram + WhatsApp + Calendly (`08` §2). Los UTMs se pierden al saltar al bot; el `origin` es lo único que sobrevive, y a mano se rompe. |
| `npm run catalogo` | Tabla de todo lo vendible con precio, costo de servir y **margen**. |
| `npm run catalogo validar` | Aplica por código las reglas del `13` §10: margen mínimo por línea, piso de $3.000.000, 50% de anticipo. |
| `npm run catalogo cotizar -- bot-pro --meses=12 --descuento=0.3` | Cotización con IVA, margen y los avisos que correspondan. |
| `npm run check` | Los tres de arriba. Es lo que corre el CI. |

**Datos** (`data/`, versionados — son memoria de la empresa): `canon.json` (hechos canónicos en
formato máquina, espejo del `01` y de `ESTADO.md`) · `catalogo.json` (servicios, costos, márgenes) ·
`links.json` (registro de atribución). Fuera de git: `.env`, listas con datos personales (Ley 1581).

**Módulos diseñados y sin construir**, cada uno con su README y sus decisiones ya fijadas:
`src/contenido` (1 idea → 3 canales) · `src/reportes` (tablero semanal, CAC y margen reales) ·
`src/anuncios` (producción y validación de creatividades) · `src/cotizar` (puente al suite por MCP).

**Frontera con `tools/`:** `tools/apps/prospeccion` sigue siendo el ejecutor del outbound (tiene los
datos, el `.env` y las credenciales). Este repo **mide y decide**; no duplica el pipeline.

---

> `brand-profile.json` acompaña a `02-brand-dna.md` (mismo insumo de marca, formato máquina para los
> agentes de creatividad). No tiene número propio porque lo consume el plugin claude-ads por nombre.

---

## Cómo ejecutar la ronda (resumen del embudo)

**Plataforma:** **Meta (Facebook + Instagram), una sola.** Objetivo **Tráfico** (Meta no tiene
objetivo nativo de "mensajes a Telegram"). Geo **Colombia**. Presupuesto **US$400** semilla que debe
generar caja para reinvertir.

**El embudo, comprimido (un solo nivel de conversión — sin TOFU/MOFU/BOFU pesado en ronda 1):**

1. **Meta Tráfico** → 3 creatividades activas, cada una un **ángulo** distinto (done-for-you /
   vertical pre-entrenado / recupera tiempo y orden), no etapas.
2. El clic lleva a un destino con las **3 opciones de entrada** (la landing puente / deep-link):
   - **Prueba el bot ahora** (CTA primario) — demo viva: **Telegram hoy** (WhatsApp/web próximamente).
   - **Agenda una demo** (secundario) — formulario / Calendly para quien prefiere hablar con una persona.
   - **Escríbenos por WhatsApp** (terciario) — click-to-chat humano `wa.me/<número>`.
3. **Demo / agenda** → oferta tester→cliente: *"te lo dejamos configurado con tus datos reales para
   que lo pruebes de verdad"* (el setup como prueba de valor).
4. **Cierre por producto** (Agenda $65 · Pedidos $80 · Inmobiliario $249 entry-propuesto/$650 full ·
   Integraciones desde $180; bundle −10% desde el 2º producto).

**Reinversión (fase 2, lean, 2 etapas):** TOFU frío-amplio (dolor: tiempo/orden) + BOFU retargeting
(prueba por vertical + adaptación + demo). Nunca 3 etapas pesadas.

**Canal paralelo y gratuito:** **outbound** WhatsApp 1-a-1 manual sobre la lista de 906 inmobiliarias
(`09-OUTBOUND.md`). NO subir esos teléfonos a Meta (viola ToS + Ley 1581).

Orden operativo detallado: ver `07-CAMPAIGN-BRIEF.md` + `10-IMPLEMENTATION-ROADMAP.md` +
`11-PRE-LAUNCH-CHECKLIST.md`.

---

## Notas honestas (no las pierdas)

- **Resultado realista:** con US$400 y B2B, **1–4 cierres** — ronda de **aprendizaje + primeros
  clientes para reinvertir**, no de escala. No inflar (nada de "76 cierres" de encadenar tasas optimistas).
- **Canal honesto:** la demo es por **Telegram** hoy; WhatsApp y web van como **"próximamente"**
  (Meta Tech Provider **pendiente de validación**; la SAS ya está constituida, solicitud desbloqueada). **No prometer WhatsApp API.**
- **Pricing honesto:** por producto. El tier **Inmobiliario entry ($249/$600) va marcado
  "propuesto (validar)"** — el seed/landing hoy solo tienen el full ($650/$1.500). **Prohibido**
  Starter/Growth/Pro (superados).
- **Atribución aproximada:** Meta no ve el salto a Telegram; se cierra con el parámetro `start` del
  deep-link + conteo manual de leads → demos → cierres (ver `08-TRACKING-SETUP.md`).
- **Versionado desde 2026-07-25** en su propio repo privado `carmegar/soltyai-marketing`.
- **Presupuesto actualizado (2026-07-25):** ya no son US$400 sino **$4.000.000 COP** en 3 rondas —
  ver `13-PLAN-12-CLIENTES.md` §5. Los docs 06 y 10 siguen siendo válidos como método (economía
  unitaria y día a día de una ronda); el monto y el calendario los manda el 13.
- **Pricing:** para Colombia manda el pricing **en COP** (Esencial $290k / Pro $490k / Premium $790k
  + setup $400k, `ESTADO.md` §Marketing). Las tablas en USD de los docs 05/06 son del modelo anterior.

---

## Si retomas esto tras un `clear`

Todo el estado vive en esta carpeta. **Empieza por `01-SOURCE-BRIEF.md`** (producto + pricing +
decisiones canónicas) y luego `07-CAMPAIGN-BRIEF.md` (lo accionable). El paquete está **listo para
clear**: numerado, consistente con la promesa única y el pricing por producto, sin referencias a
Starter/Growth/Pro ni al embudo "solo Telegram".
