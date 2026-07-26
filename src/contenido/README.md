# src/contenido — motor 1 idea → 3 canales *(diseñado, sin construir)*

Automatiza el playbook orgánico de `business/14-estrategia-organico-social.md`: una idea núcleo
produce el ancla de LinkedIn + la versión de Instagram + el guion de TikTok, escritos con la guía
anti-slop de `business/13-guia-estilo-y-prompting.md`.

**Qué debe hacer**
1. Leer el banco de 35 ideas (`business/14` §11) y el calendario en `data/contenido.json`.
2. Generar los 3 formatos con el SDK de Anthropic (`ANTHROPIC_API_KEY`), un pilar por idea.
3. Pasar cada borrador por los guardrails (`src/guardrails`) **antes** de mostrarlo.
4. Pedir un link de atribución a `src/links` por pieza publicada y dejarlo en el calendario.
5. Dejar el borrador en `out/` para revisión humana. **Nunca publica solo.**

**Decisiones ya tomadas que hay que respetar**
- El link al bot NO va en posts abiertos: la compuerta `accessMode: request` entrega una
  pre-calificación, no una demo (`ESTADO.md` §Marketing). El CTA es el video y el Calendly.
- Sin rayas (—) ni tono de IA: lo dice `business/13` y el linter de estilo va aquí.
- Un solo mensaje líder. Los servicios a medida no se anuncian (`13-PLAN-12-CLIENTES` §10).
