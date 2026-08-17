# soltyai-marketing — reglas del repo

Motor de marketing de SoltyAI: la estrategia escrita (`01`–`14`) y los programas que la ejecutan
(`src/`). Contexto de la empresa: `../CLAUDE.md`. Estado vivo: `../ESTADO.md`.

## Antes de escribir una línea de copy

1. **`01-SOURCE-BRIEF.md` manda.** Si un dato no está ahí ni en los archivos que cita, se declara
   como **supuesto explícito**, no se presenta como hecho. Cero métricas fabricadas.
2. **`data/canon.json` es el mismo brief en formato máquina.** Si cambia un precio o la promesa, se
   cambia en el doc **y** en el canon, en el mismo commit. Si solo cambia uno, el linter miente.
3. **`business/13-guia-estilo-y-prompting.md`** define cómo escribimos: sin rayas (—), sin tono de
   IA, español de Colombia, tuteo.
4. `npm run check` antes de dar nada por listo.

## Las reglas que el CI hace cumplir

- **Un mensaje líder POR CANAL** (cambió el 2026-08-13, **y otra vez el 2026-08-17**). El **bot** es
  el titular en Meta, outbound y la landing; el **servicio a la medida** es el titular en Google
  Search, el Google Business Profile **y todo el orgánico** (linkedin, instagram, tiktok, youtube).
  El orgánico se movió el 17-ago porque el servicio es la línea que hoy factura y sostiene el
  runway; el porqué largo está en `16-CONTENIDO-VIDEO.md` y en `15-CANALES-Y-SECUENCIA.md §5`.
  Dentro de una misma pieza sigue habiendo **uno solo**: "hacemos software a la medida, páginas web,
  bots y marketing" en el mismo anuncio es la agencia genérica de la esquina. Mapa en
  `canon.json → mensajeLiderPorCanal`.
  ⚠️ **Esta regla NO la hace cumplir el CI, y hasta el 17-ago esta misma sección decía que sí.**
  `mensajeLiderPorCanal` no lo lee ninguna regla de `src/guardrails/` (grep: cero usos): es dato que
  se consulta a mano. Escribirlo acá como "regla que el CI hace cumplir" era el anti-patrón 3 del
  `ESQUEMA-MEMORIA.md`, y es peor que no tenerla porque sugiere una cobertura que no existe.
  Implementarla es un pendiente del tablero.
- **WhatsApp y Telegram se prometen; la web no.** WhatsApp quedó **vivo el 2026-08-07** (Meta aprobó
  a SoltyAI como Tech Provider el 6-ago). La prohibición `whatsappComoPromesa` fue **retirada** — el
  bloque quedó en el canon como registro, bajo una clave con `_` adelante, para que nadie la
  reinvente creyendo que falta. Lo que la reemplaza y **no caduca**: `asistenteGeneralIa` (la
  política de IA de WhatsApp prohíbe los bots de propósito general; vendemos bots de negocio
  **estructurados** por vertical) y `webComoPromesa` (el widget web sigue sin existir).
- **Pricing COP vigente:** Esencial $290.000 · Pro $490.000 · Premium $790.000 · setup $400.000 ·
  excedente $50.000/100 conversaciones. Los planes USD **Starter $49 / Growth $149 / Pro $399**
  están superados (ojo: "Pro" a secas SÍ es válido, es el plan COP).
- **Prueba social solo verificable:** hoy son Bucaradomi (piloto, con permiso) y Swisscontact
  (servicio). Nada de "+100 clientes" ni "líderes en".
- **Toda pieza publicable lleva `origin`** registrado con `npm run link nuevo`. Sin eso el lead
  llega sin fuente y la ronda no se puede evaluar. Fuentes válidas en `canon.json → utm.source`; el
  carril de Google agregó **`google`** (Search, pagado) y **`gbp`** (Business Profile, orgánico).
  ⚠️ **`gbp` NO está en `fuentesPagadas` a propósito:** el veredicto de la regla de corte sólo mide
  lo que cuesta plata. Es una decisión, no un olvido.
- **La economía de adquisición se recalibró el 2026-08-13** y vive en el canon, no en la prosa:
  corte por lead calificado **$120.000** (era $25.000), techo de CAC **$800.000** (era $400.000),
  LTV bruto 12 meses **$5.080.000**. El corte viejo estaba anclado al **setup** en vez de al LTV, y
  con CPLs B2B reales en Colombia de $80.000–$250.000 por lead hacía que la ronda se cortara sola.
- **El orden de los canales lo manda `15-CANALES-Y-SECUENCIA.md`:** Google Business Profile →
  orgánico a mano → Google Search → **Meta, relegado**. Ya no hay «3 rondas de Meta» ni
  «Google Search = fase 2».
- **Toda entrada del swipe file lleva su captura** en `swipe/`.

## Las skills del plugin `marketing` (Anthropic) — cómo se usan acá

Desde el 9-ago está instalado `marketing@knowledge-work-plugins`, que aporta `/draft-content`,
`/campaign-plan`, `/brand-review`, `/competitive-brief`, `/seo-audit`, `/email-sequence` y
`/performance-report`. Son plantillas de redacción genéricas y buenas, escritas en inglés y para
cualquier empresa. Eso las hace útiles y peligrosas por el mismo motivo: **no saben qué vendemos.**

Cuando se use cualquiera de ellas, en este orden:

1. **La brand voice NO es la que la skill pida configurar.** Es `business/13-guia-estilo-y-prompting.md`
   (sin rayas, sin tono de IA, español de Colombia, tuteo) y el tono de `01-SOURCE-BRIEF.md`. Si una
   skill ofrece "tono autoritativo / inspiracional / técnico", se ignora la lista y se usa la guía.
2. **Cualquier precio, plan, canal o garantía sale de `data/canon.json`.** Una skill que pida "tu
   pricing" recibe el canon, no la memoria. La D1 no se negocia porque el borrador venga de un plugin.
3. **El borrador pasa por `npm run guardrails` antes de mostrarse**, igual que el copy escrito a mano.
   La skill escribe; el guardrail decide. Un borrador que no pasó el linter no está listo.
4. **Nada se publica sin `origin`** (`npm run link nuevo`). Vale también para lo que salga de
   `/draft-content`.
5. **Sus 13 conectores MCP (Slack, HubSpot, Canva, Ahrefs…) no se autentican.** No los usamos, y
   cada uno autenticado sería una salida de datos nueva. La aprobación cubre las skills, no los
   conectores — condición registrada en `security/data/extensiones-aprobadas.json`.

⚠️ **`/seo-audit` y `/performance-report` asumen herramientas que no tenemos** (Ahrefs, Amplitude,
GA4). Hasta que el píxel y GA4 estén en la landing, lo que produzcan es una plantilla, no una
medición: se usa como guion, y los números salen de `src/reportes`.

## Cómo se agrega una regla nueva

Casi siempre es editar `data/canon.json` (patrones, exenciones, límites) — no hace falta tocar
código. Si la regla necesita lógica, va en `src/guardrails/reglas.js` **y** se agrega su caso al
fixture `copy/_pruebas/anuncio-malo.json` con su nombre en `_esperados`: una regla sin prueba se
apaga sola en el primer refactor.

Al ajustar patrones, revisar los **falsos positivos** contra los docs: un doc puede (y debe) nombrar
lo prohibido para explicarlo. Por eso las prohibiciones de mensaje solo aplican a `copy/`, las
exenciones se buscan en una ventana de ±1 línea y se ignoran los signos de énfasis de markdown.

## Convenciones

- Node 20, ESM, **sin dependencias**. Si algo necesita una librería, se discute primero.
- Los números del catálogo llevan `estado`: `vigente` (verificado, con fuente) · `supuesto`
  (estimación, sale marcado en cada cotización) · `legacy` (modelo USD viejo, sin reconciliar).
- **El banco de dolores (`data/dolores.json`) hereda esa disciplina y la endurece.** Cada frecuencia
  lleva `estado` + `base` (de dónde sale el número) o `npm run dolores validar` falla. Y mientras
  `parametros.costoHoraOperativa` siga en `supuesto`, **los videos hablan en horas, no en pesos**:
  las horas son aritmética que el espectador verifica contra su propio negocio, los pesos serían una
  cifra nuestra sin verificar. Proceso completo en `16-CONTENIDO-VIDEO.md`.
- `data/` se versiona (memoria de la empresa). Las listas con datos personales **no** (Ley 1581).
- Al cierre de sesión: `CHANGELOG.md` de este repo + lo que toque en `../ESTADO.md` y `../HISTORIAL.md`.
- **Este repo no despliega nada**, así que su `main` es 🟢 en la política de `../CLAUDE.md`: Claude
  commitea y pushea sin preguntar. Lo que sí se sigue respetando es la regla D1 — `data/canon.json`
  lo toca **una sesión a la vez**, y el doc que lo explica cambia en el MISMO commit.
