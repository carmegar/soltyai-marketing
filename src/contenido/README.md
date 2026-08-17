# src/contenido — motor 1 idea → 3 canales *(diseñado, sin construir)*

> ⚠️ **`dolores.js`, en esta misma carpeta, NO es este motor y no lo desbloquea** (17-ago-2026).
> Valida el banco de `data/dolores.json` y arma las tandas de grabación: no escribe, no llama a
> ninguna API y no publica. Lo que está bloqueado abajo es **generar** contenido, no ordenar la
> materia prima. El proceso a mano que usa ese banco está en `../../16-CONTENIDO-VIDEO.md`.

Automatiza el playbook orgánico de `business/14-estrategia-organico-social.md`: una idea núcleo
produce el ancla de LinkedIn + la versión de Instagram + el guion de TikTok, escritos con la guía
anti-slop de `business/13-guia-estilo-y-prompting.md`.

**Qué debe hacer**
1. Leer el banco de 35 ideas (`business/14` §11) y el calendario en `data/contenido.json`.
2. Generar los 3 formatos con el SDK de Anthropic (`ANTHROPIC_API_KEY`), un pilar por idea.
3. Pasar cada borrador por los guardrails (`src/guardrails`) **antes** de mostrarlo.
4. Pedir un link de atribución a `src/links` por pieza publicada y dejarlo en el calendario.
5. Dejar el borrador en `out/` para revisión humana. **Nunca publica solo.**

## 🔴 La regla que decide CUÁNDO se construye: 8 semanas a mano primero

**Esto no se construye hasta que la versión a mano haya corrido 8 semanas seguidas = 16 posts**
(2 por semana), y queda **bloqueado en el tablero** hasta entonces
(`15-CANALES-Y-SECUENCIA.md` §5). Se automatiza un proceso que existe, **nunca uno que no**.

**Por qué la regla y no "construyámosla ya":** una máquina de contenido es un proyecto de código
precioso, divertido y bajo control total del fundador. Es exactamente la clase de trabajo que se come
tres semanas mientras los WhatsApp del sábado siguen sin responder. **El costo de equivocarse acá no
es el código: es el mes de prospección que no pasó.** Es la misma lógica con la que se pospuso el
Embedded Signup de WhatsApp hasta tener 3 clientes.

**Y cuando exista, no escribe: reformatea y distribuye.** El insumo son **20 minutos del fundador por
semana** contando lo que de verdad pasó —el motor contable que arma 90 de 92 asientos DIAN sin gastar
un token, el RCE contenido con su post-mortem, el tren de facturación electrónica cerrado por una
empresa de una persona—. Eso es material que un generador no produce, y es la razón exacta por la que
el contenido automatizado del competidor no alcanza. Una máquina que **escriba** produce el mismo
relleno que todos; una que **reformatee y distribuya** multiplica lo único que no se puede copiar.

**Decisiones ya tomadas que hay que respetar**
- El link al bot NO va en posts abiertos: la compuerta `accessMode: request` entrega una
  pre-calificación, no una demo (`ESTADO.md` §Marketing). El CTA es el video y el Calendly.
- Sin rayas (—) ni tono de IA: lo dice `business/13` y el linter de estilo va aquí.
- **Un mensaje líder POR CANAL** (cambió el 2026-08-13 y **otra vez el 2026-08-17**). El **bot** es
  el titular en Meta, outbound y la landing; el **servicio a la medida** es el titular en Google
  Search, el Google Business Profile **y todo el orgánico**. Como este motor produce orgánico, lo
  que salga de acá lleva **el servicio**, no el bot. El mapa está en `canon.mensajeLiderPorCanal`;
  el porqué, en `../../16-CONTENIDO-VIDEO.md` y `../../15-CANALES-Y-SECUENCIA.md §5`.
- **Dentro de una misma pieza sigue habiendo UN solo mensaje.** Nunca "hacemos software a la medida,
  páginas web, bots y marketing" en el mismo post: eso convierte la marca en la agencia genérica de
  la esquina, que compite por precio contra veinte iguales.
- El video sube **nativo a cada red** (todas castigan el link que saca gente de la plataforma): el
  CTA de agendar va en el texto y en el comentario fijado, con `origin` por canal.
- Cadencia: **2 posts/semana, no más.** 1 de build-in-public + 1 de demo/caso. Dos semanas seguidas
  sin publicar significa que la cadencia estaba mal calibrada, no que falte disciplina: se baja a 1
  por semana antes que dejar de publicar.
