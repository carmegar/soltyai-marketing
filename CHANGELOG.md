# Changelog · soltyai-marketing

## 2026-07-25 — 🚀 El paquete de marketing se vuelve repo y gana motor propio

- **Repo nuevo `carmegar/soltyai-marketing`** (privado). Hasta hoy `marketing/` era una carpeta suelta
  sin versionar bajo `D:\Trabajo\soltyai\`; queda con el estándar de la casa: `README` (mapa,
  promovido desde `00-README.md`), `CHANGELOG`, `CLAUDE.md`, `.gitignore`, `.env.example` y CI.
  **Frontera decidida:** `tools/apps/prospeccion` NO se mueve — ejecuta el outbound; este repo mide y
  decide.
- **Guardrails de mensaje (`src/guardrails`) — el linter del marketing.** Convierte las decisiones ya
  escritas en reglas que fallan el CI: pricing COP vigente, planes USD superados, WhatsApp solo como
  "próximamente", ángulos quemados del `03` §3, prueba social no verificable, límites de caracteres
  de Meta, **coherencia de plazos y precios dentro de una misma pieza**, enlaces internos rotos y
  evidencia obligatoria del swipe file. Corre en 8 archivos de docs + las piezas de `copy/`.
- **El linter tiene su propia prueba (`npm run prueba`).** El fixture `copy/_pruebas/anuncio-malo.json`
  acumula a propósito los 7 errores que debe cazar y declara cuáles espera; si alguno deja de
  dispararse, el CI falla. Un guardrail que nunca falla no cuida nada.
- **Registro de links con atribución (`src/links`).** Genera UTMs + `origin` + deep-link de Telegram
  (`start`) + WhatsApp + Calendly según la nomenclatura del `08` §2, y los versiona en
  `data/links.json`. Valida el formato duro del `start` (A-Za-z0-9_-, ≤64) que Telegram descarta en
  silencio, y bloquea `origin` duplicados: dos piezas con el mismo origen se cuentan como una sola
  fuente. Primer link registrado: `meta_duenopyme_c2`.
- **Catálogo de servicios con margen (`src/catalogo`).** Las dos líneas del negocio juntas
  (suscripción + servicios) con precio, costo de servir y margen, y las reglas del `13` §10 aplicadas
  por código: margen mínimo **por línea** (60% suscripción / 35% servicios, porque el costo es de
  naturaleza distinta), piso de $3.000.000 y 50% de anticipo. Todo número sin verificar va marcado
  `supuesto` y sale marcado en cada cotización.
- **`data/canon.json`** — los hechos canónicos del `01-SOURCE-BRIEF` y de `ESTADO.md` en formato
  máquina. Es lo que hace que una decisión escrita se vuelva una regla ejecutable. Regla nueva: casi
  siempre es editar este archivo, no el código.
- **Dos hallazgos del propio código, ya corregidos:** el catálogo no le exigía anticipo a la línea de
  web (lo cazó `catalogo validar`), y la cotización aplicaba el descuento de lanzamiento a todo el
  periodo en vez de a los 3 meses autorizados — regalaba 4 veces lo aprobado.
- **`14-SWIPE-FILE.md` (nuevo, append-only)** — anuncios reales vistos en el feed con captura, qué
  robar y qué evitar; tapa el hueco que el `03` §6 admitía (no se revisaron creatividades vivas).
  Primera entrada: **SyroxTech** (desarrollo a la medida, no competidor), que promete 40 días en la
  imagen y 90 en el titular del destino. De ahí salió el **ángulo G "garantía con plazo"** del `03`
  §5 y el chequeo de coherencia de plazos del linter.
