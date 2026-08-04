# Changelog · soltyai-marketing

## 2026-08-03 — ✅ La vía Calendly quedó montada, y cuatro checklists lo ignoraban

Barrida de los docs de campaña contra lo que de verdad quedó en producción el 3-ago. Sin cambios de
código ni de `canon.json`: sólo estado real donde había casillas sin marcar.

- **Changed** · `08-TRACKING-SETUP.md` §4.2 y §9 — la vía Calendly pasa a ✅. El formulario captura
  nombre, negocio, **rubro** (botones de opción, no texto libre, para que agrupe en el reporte) y
  teléfono, y los UTMs/`origin` llegan por query. **Verificado en vivo con `?a1=prueba_soltyai`.**
- **Notes** · 🔴 **Dos reglas nuevas del evento, que si se rompen se pierde la atribución en silencio:**
  (1) **la pregunta 1 no se puede reordenar** — `/ir` inyecta `a1=<origen>` y Calendly prellena con eso la
  respuesta a la pregunta 1, sea cual sea, así que si otra queda de primera el nombre del anuncio se
  escribe adentro de ésa; (2) **no ponerle la variable "Preguntas y respuestas" a ningún correo del
  evento** — viene por defecto y le devuelve al prospecto sus propias respuestas, **incluido el código
  interno de la campaña**, escrito en su calendario para siempre.
- **Changed** · §9 y §0: la vía Calendly **ya no depende de conteo manual para el origen**. El conteo
  manual que queda es el de avance del prospecto (§5), no el de procedencia.
- **Changed** · `11-PRE-LAUNCH-CHECKLIST.md` §A.1/§A.2 y la tabla de §A.4, que pasa de "lo que falta" a
  **estado por campo**: ✅ `saas.demoUrl`, `calendlyUrl`, `lead.endpoint`, redes · 🔴 `whatsappNumber`,
  `ga4MeasurementId`, `metaPixelId`. La landing principal quedó verificada **contra producción**: 23 CTAs
  de Calendly vivos en 8 páginas.
- **Changed** · `13-PLAN-12-CLIENTES.md` §semana 0: el punto 2 (Calendly), el 5 (**Formspree → endpoint
  propio en la suite**) y el 7 (`/ir`) pasan a ✅. Lo que bloquea la pauta se reduce a los IDs del punto 4
  y al número del punto 3.
- **Changed** · `10-IMPLEMENTATION-ROADMAP.md` y `12-QA-VALIDATION.md`, alineados con lo mismo.
- **Notes** · **`wa.me` no es un pendiente cosmético:** mientras `whatsappNumber` esté vacío, la landing
  aplica *vacío = apagado* y **el CTA de WhatsApp no se pinta en ninguna página**. Hoy `/ir` ofrece
  **2 vías, no 3**, y el reporte de conciliación (§6) tendrá dos columnas con datos, no tres. Los docs
  decían "3 CTAs" sin la salvedad.
- **Notes** · 🔴 **La lección que quedó escrita en `11` §A.4 y en `13`:** `calendlyUrl` y `whatsappNumber`
  traían placeholders **con forma de valor real**, y por eso los 8 CTAs de "Agenda una demo" apuntaron a
  un 404 **del 24-jul al 3-ago** sin que el build, el smoke test ni una revisión visual lo notaran. Los
  que faltan están en vacío o en `G-XXXXXXXXXX` a propósito: **la ausencia tiene que ser detectable.**

## 2026-07-26 (cierre 2) — 📊 `src/reportes` construido + 🎬 guion del video demo

### `src/reportes` — el tablero de los viernes deja de ser una hoja de cálculo

Era el último módulo *diseñado sin construir* que el `13` §8 y §10 exigían para poder gobernar la
pauta. Con él, la ronda 1 ya se puede evaluar el día que toca y no el día que se acabó la plata.

- **Added** · `src/reportes/index.js` con cuatro comandos: `tablero` (semana), `ronda` (la regla de
  corte sobre la ronda completa), `registrar` (lo que se llena el viernes en dos minutos) y
  `validar`, que **corre en el CI** dentro de `npm run check`.
- **Added** · `data/semanas.json` (memoria del tablero) y el bloque **`canon.tablero`**: KPI que
  manda (`demos`, meta 2/semana), corte de **$25.000 por lead calificado**, fuentes de dato válidas,
  fuentes pagadas y las **3 rondas** con su presupuesto ($1,2M / $1,3M / $1,5M).
- **Decided** · **La regla de corte se calcula, no se estima.** Escrita en un doc, una regla de
  "parar" se cumple cuando uno quiere. Calculada, aparece sola el viernes que toca pararse, con el
  nombre de la regla y el número que la disparó. Es la diferencia entre una política y un guardrail.
- **Decided** · **Se evalúa sobre la ronda, no sobre la semana.** Una semana mala no significa que la
  oferta esté mal; esperar al cierre de la ronda para mirar significa haberla gastado completa antes
  de saberlo. Por eso cada semana declara `ronda` y el veredicto se acumula.
- **Decided** · **Sin denominador no hay veredicto.** Con gasto pero cero calificados medidos, el
  comando dice *"sin datos suficientes"* en vez de declarar el corte. Declarar "parar" sin datos es
  tan malo como no parar teniéndolos.
- **Decided** · **Un cierre es un cliente, no una línea vendida.** El setup y los excedentes viajan
  pegados a una suscripción: contarlos aparte partía el CAC por dos. Cuentan como cierre los
  servicios `recurrente`, `mixto` y `proyecto`. **Lo cazó la prueba de humo**, que mostró CAC de
  $150.000 donde el real era $300.000.
- **Decided** · **Todo número declara `fuenteDato`, y el reporte imprime cuántos son manuales.** Era
  el "hueco honesto" que el propio README del módulo pedía respetar: el conteo del lado del bot no es
  automático, y un tablero que lo disimule vale menos que no tenerlo.
- **Notes** · El CI también exige que cada `origin` exista en `data/links.json`. Un lead sin origen
  registrado no se puede atribuir, que es toda la razón de ser de `src/links`. Sin semanas cargadas,
  `validar` pasa: el CI no puede exigir datos que todavía no existen.
- **Notes** · Margen y MRR salen de `data/catalogo.json` y arrastran el estado del costo, así que un
  margen calculado con el `setup` (costo supuesto) sale marcado con ▲ en pantalla.

### `redes/video-demo-guion.md` — el guion listo para grabar

- **Added** · Guion de 75–90 s con 7 tomas (gancho a las 11:42 p.m. → el bot atiende → fotos → visita
  → **aviso al asesor** → panel de leads → tarjeta final), versión corta de 30 s para el toque 1 del
  outbound, preparación, reglas de grabación, qué medir y la tabla de **lo que no se dice** (que son
  las prohibiciones que el CI ya hace cumplir).
- **Decided** · **La pre-calificación sale del video.** `ESTADO.md` §3b la ponía de primera, pero es
  *nuestra* compuerta de acceso a la demo, no una función del bot del cliente: mostrarla arriba hace
  creer al prospecto que su bot va a interrogar a sus clientes antes de mostrarles un apartamento, y
  además es la peor apertura posible para los 3 segundos que deciden si el video se ve. Va en la
  tarjeta final, en una línea.
- **Notes** · **Hallazgo que hay que resolver antes de grabar:** el aviso interno apunta a
  `config.notify.telegramChatId = 1815166113`, que es el chat personal del usuario. Grabando así, el
  "aviso al asesor" cae en la misma conversación donde se hace de cliente y la toma no se entiende.
  La solución que además es la realista: un **grupo de Telegram** con el bot adentro y el
  `telegramChatId` apuntando ahí. Toca sólo el tenant `demo-l0615`.
- **Notes** · La cifra del "78% que escribe a otra inmobiliaria" quedó marcada como **condicional a
  conseguir la fuente**, con reemplazo escrito sin dato. Cero métricas fabricadas también aplica a un
  guion.

## 2026-07-26 — 🛡️ La garantía del ángulo G deja de ser una frase y se vuelve dato canónico

- **`data/canon.json` → bloque `garantiaImplementacion` (nuevo).** El ángulo G venía con una deuda
  escrita en el propio doc (*"falta definir qué cuenta como atendiendo y qué se devuelve"*). Queda
  definido y auditable: plazo **7 días calendario**, "atendiendo" = bot en el canal del cliente con
  su catálogo o flujo cargado y **al menos una conversación real completada**, el reloj arranca con
  la información del onboarding completa y **se pausa** si falta algo, reclamo dentro de 15 días, y
  alcance limitado a la implementación estándar del vertical (las integraciones a la medida quedan
  fuera). Esto es lo que la regla `copy:garantia-sin-definir` del linter ya exigía a nivel de pieza:
  ahora existe la fuente contra la cual escribirla.
- **Escalonada por plan, no plana.** El 50% de anticipo del setup es fijo en los tres planes (es el
  filtro que separa al que va en serio del curioso); lo que escala es qué recupera el cliente si
  incumplimos: Esencial no se cobra el 50% restante · Pro además devuelve lo ya pagado · Premium
  además no cobra el primer mes. Exposición de caja: $0 / $200.000 / $990.000.
- **Por qué al revés del mercado, con la evidencia:** Cliengo, Whaticket y B2Chat dan prueba gratis
  de 7–14 días y **ninguna garantía**; los que sí garantizan (Richpanel, ContentBot, Agent Builder)
  devuelven **la suscripción** y **excluyen expresamente el setup y los servicios profesionales**.
  Tiene sentido para ellos: producto self-service, sin trabajo humano. Acá la adaptación **es** el
  trabajo humano y la suscripción es infra barata, así que garantizar la implementación es lo único
  que nadie del clúster ofrece. La aritmética lo respalda con los números de `data/catalogo.json`:
  regalar un setup completo se recupera en **1,4 / 1,0 / 0,7 meses** de margen según el plan.
- **Lo que se anuncia y lo que no queda escrito en el canon** (`mensajePublico` / `noSeAnuncia`): en
  pauta y en el toque 1 va solo *"arrancas pagando la mitad del setup, la otra mitad cuando tu bot
  esté atendiendo"*; la devolución completa y el mes gratis son la carta de la objeción al cerrar
  Pro o Premium, y de paso empujan al plan de arriba.
- **`data/catalogo.json`:** el ítem `setup` gana las reglas `setup5050` y `garantiaImplementacion`,
  ambas declaradas en el bloque `reglas` para que `npm run catalogo` las muestre al cotizar. La
  garantía **no aplica** a la línea de servicios: ahí sigue rigiendo `anticipo50`.
- **`03-competitor-analysis.md` §5, ángulo G reescrito:** sin la deuda abierta, con la comparación
  de mercado y con la nota de por qué el anticipo nunca baja a cero.
- Origen de la decisión: `business/22-decisiones-abiertas.md` A3 (cerrada 2026-07-26). `npm run check`
  en verde; los ▲ de márgenes supuestos de `setup` y `desarrollo-a-medida` son previos y siguen
  esperando la primera venta real.

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
