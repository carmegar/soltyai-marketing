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
  ✅ **Desde el 2026-08-20 el CI SÍ la hace cumplir** (regla `mensajeLider`). Antes era dato que se
  consultaba a mano, y esta misma sección llegó a decir que el CI la aplicaba cuando no: el
  anti-patrón 3 del `ESQUEMA-MEMORIA.md`, peor que no tener la regla porque sugiere una cobertura
  que no existe. Lo que hace cumplir, y sólo eso:
  - 🔴 **error** si una pieza nombra **las dos líneas** (`canal:mezcla-de-lineas`). Es la parte que
    no admite interpretación, y el `_cambio` del 17-ago la marca como el riesgo real.
  - 🟡 **aviso** si la pieza sólo nombra la línea que a su canal **no** le toca. Hay bordes
    legítimos (una mención de paso), así que no bloquea.
  - El vocabulario de cada línea vive en `canon.json → mensajeLiderPorCanal.vocabulario`, no en el
    código: es una decisión comercial, igual que un precio.
  - Alcance: las piezas de `copy/` que declaran `plataforma`, **y desde el 2026-09-05 también las de
    `redes/` que declaran su canal.** `redes/` estuvo fuera porque el canal habría que adivinarlo
    por el nombre del archivo, y adivinar es cómo un linter empieza a dar veredictos que nadie puede
    defender. La salida no fue adivinar: **la pieza declara**.
    ```markdown
    <!-- canal: linkedin -->            abre bloque; vale hasta el siguiente marcador
    <!-- canal: instagram, tiktok -->   varios canales; se juzga contra cada uno
    <!-- /canal -->                     cierra (índices, tablas de control, notas)
    ```
    Va **solo en su renglón** —a diferencia de `<!-- guardrail:ignorar -->`, que es inline porque
    exenta la línea donde va—; es **por bloque y no por archivo** porque los archivos de `redes/` son
    mixtos, igual que la exención de las prohibiciones. Lo de antes del primer marcador no se juzga.
    Lo que **no declara** sigue sin juzgarse, pero sale un 🟡 `canal:sin-declarar`: un hueco anunciado
    se puede cerrar, el de antes no se veía desde afuera. Un canal que no está en el canon es 🔴
    (`canal:desconocido`): un dedazo dejaba el bloque sin vigilar creyendo que lo vigilaba.
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
  ✅ **Y desde el 2026-09-05 tampoco cifras de resultado ni citas firmadas.** `pruebaSocialInventada`
  contaba clientes y nada más, y por eso el caso Promatel —métricas de un sistema que nunca atendió
  a nadie, más un testimonial atribuido a una empresa real— duró **tres meses publicado bajo un
  linter que corría en cada build**. Lo que faltaba entró como dos reglas hermanas:
  **`metricaSinFuente`** (porcentajes de reducción/aumento/mejora, `+N` consultas o flujos, «N
  atendidas por semana», horas recuperadas, «duplicamos tus ventas», `<24h`) y
  **`testimonialSinRespaldo`** (la firma: comilla de cierre + raya + cargo o nombre con empresa).
  La regla de fondo: **un número publicado lleva fuente, y si la fuente somos nosotros lleva fecha
  de medición, o no va** — «todavía no lo hemos medido» sí es publicable. Exime la línea que declara
  su fuente o dice «supuesto». No hay patrón para `\d+%` a secas y es a propósito: se midió, y daba
  3 falsos positivos de cada 4. Porqué largo en `17-RECONCILIACION-CONTENIDO.md §H1`.
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
- **El orden de las LÍNEAS lo manda `18-ARQUITECTURA-DE-OFERTA.md`** (22-ago): **L1** producto
  vertical (`domicilios-ops` — el único que hoy paga: $370.000/mes con contrato y factura) → **L3**
  servicio a la medida → **L2** bot, que sigue publicado pero **deja de abrir**. La regla que sale de
  ahí: **lleva precio público lo que tiene alcance cerrado, lleva «desde» lo que se cotiza, y nada
  lleva silencio** — el muro de «contáctanos» tiene ~38% más rebote. No cambia ningún precio: cambia
  qué se publica y en qué orden.
  ✅ **Desde el 2026-09-05 esto es dato, no memoria: `canon.json → lineasDeOferta`** (`ordenDeApertura`
  `["L1","L3","L2"]`, `reglaDePublicacion.formas` con `publico` / `desde` / `silencio: PROHIBIDO`, y
  una entrada por línea). **No copia ningún importe:** cada línea apunta a dónde vive su precio
  (`servicios[domicilios-ops].precioConIva`, `planes[].precioMes`, `lineaServicios.pisoPrecio`),
  porque una tercera copia del mismo número es una tercera fecha de vencimiento. La regla
  `lineasDeOferta` del linter **resuelve esas rutas en cada build**: un puntero roto parece una
  referencia y no lo es.
  ⚠️ **La landing queda atrás hasta que alguien la refresque:**
  `platform/apps/landing/src/data/canon.snapshot.json` es copia manual de este canon (es el H7 de
  `17-RECONCILIACION-CONTENIDO.md`, que ya derivó 8 días una vez).
  ✅ **El aviso que dejó quedó cerrado el 2026-09-05.** `mensajeLider` excluía `redes/`, y por ahí
  salió la tanda 1 de video con **7 de 10 guiones de la línea `bot`** apuntando a LinkedIn; se
  reordenó a mano el 22-ago, y a mano no escala. Ahora los diez guiones y la bio de LinkedIn
  **declaran su canal** con `<!-- canal: … -->` y entran al guardrail (ver arriba).
  ⚠️ **Y lo primero que cantó al encenderlo es una decisión pendiente, no un bug:** siete guiones
  llevan la etiqueta `bot` y salen a LinkedIn/IG/TikTok, que el canon asigna a `servicio` desde el
  17-ago, mientras `18-ARQUITECTURA-DE-OFERTA §4` los mandó ahí a propósito el 22-ago («L2 bot → IG
  + TikTok»). **Las dos decisiones se contradicen y ninguna es un error de dedo**, así que salen 🟡
  y no 🔴. Lo mismo la bio de LinkedIn, que abre con «bots de WhatsApp y Telegram» en un canal que
  lleva servicio. Se resuelve moviendo `mensajeLiderPorCanal` **o** el destino, nunca los dos.
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
lo prohibido para explicarlo. Las exenciones se buscan en una ventana de ±1 línea y se ignoran los
signos de énfasis de markdown.

### Los tres alcances (cambió el 2026-08-20)

Eran dos —`copy/` y «todo»— y en el medio se colaba la categoría más importante:

| Alcance | Qué es | Se le aplican las prohibiciones |
|---|---|---|
| `copy/*.json` | piezas de anuncio | ✅ |
| **`redes/**`** | **el copy que de verdad se publica**: la bio de LinkedIn, los textos de Facebook y YouTube, el outbound, los guiones de video | ✅ **desde el 20-ago** |
| el resto de `.md` | documentación | ❌ y con razón: un doc tiene que poder nombrar lo prohibido |

🔴 **`redes/` estuvo fuera desde siempre**, y era el hueco más grande: estaba en la lista de
`IGNORADOS` de `src/lib/io.js`, y encima los `.txt` no se listaban. O sea que la biografía que lee
todo el que llega al perfil podía prometer lo que quisiera, mientras el linter cuidaba los anuncios.

Sus archivos son **mixtos** —`solty-fb-textos.md` trae a la vez los textos para pegar y una tabla de
«nunca digas esto»—, así que la exención es **por línea** y no por archivo:

```markdown
- Nunca los ángulos quemados ("CRM para WhatsApp"). <!-- guardrail:ignorar -->
```

Es una **declaración, no un silenciador**: se ve en el diff y se cuenta con
`grep -rn "guardrail:ignorar" redes/`. Ponerlo sobre copy real es apagar la guarda a mano.
Mismo idioma que `<!-- archivo:ignorar -->` en la bitácora, a propósito.

`swipe/` sigue ignorado, y es otra cosa: es copy **de la competencia**, guardado para estudiarlo.

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
