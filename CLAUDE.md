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

- **Un solo mensaje líder** (el bot). El desarrollo a la medida **se ofrece, no se anuncia**
  (`13-PLAN-12-CLIENTES.md` §10).
- **WhatsApp solo como "próximamente"** hasta que Meta valide a SoltyAI como Tech Provider. La CTA
  de WhatsApp humano (`wa.me`) sí es válida: la atiende una persona.
- **Pricing COP vigente:** Esencial $290.000 · Pro $490.000 · Premium $790.000 · setup $400.000 ·
  excedente $50.000/100 conversaciones. Los planes USD **Starter $49 / Growth $149 / Pro $399**
  están superados (ojo: "Pro" a secas SÍ es válido, es el plan COP).
- **Prueba social solo verificable:** hoy son Bucaradomi (piloto, con permiso) y Swisscontact
  (servicio). Nada de "+100 clientes" ni "líderes en".
- **Toda pieza publicable lleva `origin`** registrado con `npm run link nuevo`. Sin eso el lead
  llega sin fuente y la ronda no se puede evaluar.
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
- `data/` se versiona (memoria de la empresa). Las listas con datos personales **no** (Ley 1581).
- Al cierre de sesión: `CHANGELOG.md` de este repo + lo que toque en `../ESTADO.md` y `../HISTORIAL.md`.
- **Este repo no despliega nada**, así que su `main` es 🟢 en la política de `../CLAUDE.md`: Claude
  commitea y pushea sin preguntar. Lo que sí se sigue respetando es la regla D1 — `data/canon.json`
  lo toca **una sesión a la vez**, y el doc que lo explica cambia en el MISMO commit.
