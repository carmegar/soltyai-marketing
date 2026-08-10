# Changelog · soltyai-marketing

## 2026-08-09 (herramientas) — Entra el plugin de marketing de Anthropic, amarrado al canon

Se buscó qué skills podían alimentar el frente y la respuesta útil fue incómoda: **lo que más
faltaba ya estaba instalado y sin usar.** `claude-ads` lleva desde el 17-jun con 25 skills cubriendo
pauta en 8 redes — sólo que más de la mitad **audita cuentas que todavía no existen**, así que hoy
sirven `/ads dna`, `/ads plan`, `/ads create`, `/ads math`, `/ads competitor` y `/ads landing`, y las
de auditoría esperan a que haya gasto.

El hueco de verdad era el **orgánico**, que es justo donde `src/contenido/` dice *«diseñado, sin
construir»*. Se instaló **`marketing@knowledge-work-plugins`** (Anthropic, 8 skills:
`/draft-content`, `/campaign-plan`, `/brand-review`, `/competitive-brief`, `/seo-audit`,
`/email-sequence`, `/performance-report`).

**Added** · `CLAUDE.md` §*Las skills del plugin `marketing`*. Son plantillas genéricas, en inglés y
para cualquier empresa: útiles y peligrosas por el mismo motivo — **no saben qué vendemos**. El
amarre, en orden: la brand voice es `business/13`, no la que la skill ofrezca configurar; todo
precio, plan o canal sale de `data/canon.json`; el borrador pasa por `npm run guardrails` antes de
mostrarse; y nada se publica sin `origin`. **La skill escribe; el guardrail decide.**

⚠️ Y lo que hay que saber antes de usarlas: **`/seo-audit` y `/performance-report` asumen Ahrefs,
Amplitude y GA4**, que no tenemos. Hasta que el píxel y GA4 estén en la landing, lo que produzcan es
un guion, no una medición.

🔴 **El plugin trae 13 servidores MCP de terceros** (Slack, HubSpot, Canva, Figma, Ahrefs, Klaviyo…).
**Ninguno se autentica**, y esa es una condición registrada, no un detalle: lo aprobado son las
skills. Que el plugin sea de Anthropic responde por el plugin, no por Slack. Revisión completa en
`security/data/extensiones-aprobadas.json`, bajo la política nueva
`security/politicas/extensiones-del-agente.md`.

## 2026-08-09 (outbound) — El playbook cotizaba en dólares y medía el correo con la vara de WhatsApp

Preparando la tanda 1 del cold email aparecieron dos cosas en `09-OUTBOUND.md`, las dos en la
**PARTE B**, que es justo la que se tiene abierta mientras se habla con un prospecto.

**Los precios seguían en USD.** El banner de §B.3 avisaba que los mensajes estaban viejos y mandaba a
`redes/outbound-mensajes.txt`, pero enumeraba lo que quedaba vigente —estrategia, priorización,
cadencia, legal, conciliación— y **ni las objeciones ni el cierre estaban en esa lista**. Así que
§B.5 y §B.6 quedaron en tierra de nadie cotizando `$249/mes + $600 setup` y `$650/$1.500`, contra la
D1 que dice Esencial $290.000 · Pro $490.000 · Premium $790.000 · setup $400.000, todo antes de IVA.
El `.txt` vigente no tiene precios, así que esas tablas eran el único lugar donde alguien buscaría un
número en vivo. Corregidas a COP, con el pago partido del setup, los descuentos autorizados y la
aclaración de que **«Pro» a secas sí existe** (es el plan COP; los que no existen son Starter y
Growth — el doc decía lo contrario). También cayeron los productos por vertical (`SoltyAI Agenda
$65/mes`, `SoltyAI Pedidos $80/mes`): hoy el plan es el mismo y lo que cambia es la vertical.

**Y los benchmarks se estaban aplicando al canal equivocado.** §A.8 y §B.7 daban «responden 8–18 %»,
que son tasas de **WhatsApp 1-a-1 manual**, el canal de ese documento. El umbral sano del correo en
frío es **3–5 %** (`business/16` §8). Medir la tanda 1 de correo contra el 8–18 % habría hecho parecer
fracasado un canal que está funcionando bien, y llevado a reescribir un gancho que sirve. Queda dicho
que **el canal decide el umbral**.

**`data/links.json`:** registrados los tres primeros origins del correo
(`outbound_inmobiliarias_email1/2/3`, fuente `outbound`, medium `email`). Hasta hoy el registro tenía
**uno solo** y era de Meta, así que un lead de la tanda 1 habría entrado sin fuente y el canal no se
habría podido comparar contra la pauta — que es el punto entero de medirlo. De paso cada origin trae
su deep-link de Telegram tagueado, que es el `{{link_demo}}` del toque 2.

## 2026-08-08 (seguridad) — «Sin dependencias a propósito» deja de ser un comentario

El tablero traía un pendiente que decía que este repo *«no tiene lockfile commiteado, el build
resuelve versiones que nadie aprobó»*. Al abrir el código, el hecho es otro: **este repo no tiene ni
una dependencia**. `package.json` no declara ningún bloque, los `import` del `src/` son todos
relativos o `node:`, y el workflow nunca corre un install. No había versiones sin aprobar porque no
había versiones.

Lo que sí era cierto es la otra mitad: la decisión de no tener dependencias vivía en **un comentario
del workflow**, y un comentario no es una guarda. El día que alguien agregue una librería, nada
avisa — el CI no instala, así que el `import` revienta en ejecución, y el repo entra a la política de
dependencias por la puerta de atrás (`../security/politicas/dependencias.md`).

**`src/sin-dependencias.js`** (nuevo) lo convierte en chequeo, mirando las dos caras del mismo hecho:

- **lo declarado** — si aparece cualquier bloque de dependencias, exige lockfile commiteado;
- **lo usado** — recorre los `import` del `src/` (estáticos y dinámicos) y falla ante cualquiera que
  no sea relativo ni `node:`. Un paquete se puede usar sin declararlo, y ahí el `package.json` limpio
  miente.

Corre **primero** en el workflow y primero en `npm run check`: si eso se rompió, lo de abajo no
significa nada. Probado en sus dos caminos —los cinco casos, incluido el verde con lockfile— porque
un chequeo que nunca se vio fallar no es un chequeo.

## 2026-08-05 (política) — El `main` de este repo pasa a 🟢: no despliega nada

La regla de push deja de ser una línea igual para todo el monorepo y pasa a depender de **la
consecuencia**: los repos cuyo `main` dispara un deploy piden ok, los que no —este— no. El control se
movió al lugar donde importa, el environment `produccion` con revisor requerido en los 4 workflows que
entran al VPS (`../infra/runbooks/aprobacion-de-deploys.md`). La política completa vive en
`../CLAUDE.md`; acá quedó el puntero.

La regla D1 **no** cambia: `data/canon.json` lo toca una sesión a la vez, y el doc que lo explica va en
el mismo commit.

## 2026-08-04 (tooling) — El CHANGELOG fusiona solo; `canon.json` no, y a propósito

`.gitattributes` gana `CHANGELOG.md merge=union`: cuando dos sesiones trabajan en paralelo, este es el
único archivo que **las dos** tocan siempre. Con union, git se queda con las líneas de los dos lados en
vez de marcar conflicto. ⚠️ Con el filo escrito al lado: **union nunca falla, así que tampoco avisa**.

🔴 **`data/canon.json` queda fuera de union deliberadamente.** Es la fuente de verdad del precio (D1):
ahí un conflicto es la señal **correcta** —dos versiones del canon tienen que resolverse a mano— y
fusionarlas automáticamente dejaría un JSON roto o, peor, dos precios conviviendo sin que nadie se
entere. La regla quedó escrita en el propio `.gitattributes` para que no se agregue por descuido.

## 2026-08-04 (catálogo) — 🌐 La web deja de ser una línea sola: rescate, cuidado recurrente y el ONG que vivía fuera del canon

Salió de cotizarle a la Fundación Colombia Unida y Grande (caso TRACE / Hernán Linares) y de
descubrir que el catálogo no sabía distinguir **construir** de **volver a publicar lo que ya
existe** — con el agravante de que el cliente ya había pagado por ese código.

- **Added** · `catalogo → web-redespliegue` (**$750.000**, costo 7 h = $420.000, margen 44%):
  rescate y republicación cuando el código **ya existe**. Precio fijado a propósito **por debajo de
  los $800.000** que ese mismo cliente pagó en 2025 por ese mismo código: el gesto ES el argumento de
  venta. Lleva `noAcumulaDescuentos` porque aplicarle el −25% de ONG lo dejaría en $562.500 con
  margen del 25%, **bajo el mínimo del 35%** de la línea de servicios.
- **Added** · `catalogo → web-cuidada` (**$180.000/mes**, costo $55.000, margen 69%): hosting,
  dominio renovado por nosotros, 2 buzones, 1 actualización al mes y monitoreo. Nace de que la
  fundación **perdió su dominio** (vencido el 12-jun-2026, tomado por un tercero que hoy sirve un
  casino): el producto ES la promesa de que no vuelva a pasar.
- **Notes** · ⚠️ **El proveedor de correo decide si `web-cuidada` gana o pierde.** Con Zoho
  (~$4.200/buzón/mes) el margen a precio ONG es ~59%; con **Google Workspace** (US$8,40 ≈ $33.600 a
  TRM 4.000) dos buzones cuestan $67.200 y la línea da **margen negativo** a $135.000/mes. Queda en
  `notas`, no escondido detrás del promedio.
- **Fixed** · `catalogo → web-corporativa` decía *"Sin precio verificado"* cuando **sí había una
  venta real**: $800.000 cobrados por el fundador **como freelance** en 2025. Queda registrada como
  referencia, con la advertencia de que no es comparable de frente (persona natural, sin IVA ni
  estructura de SAS). Se le agregó además que su costo de $900.000 **asume construir desde cero** —
  usarlo sobre código propio existente era el error que inflaba el margen y hundía la credibilidad.
- **Added** · `canon → descuentoOng` (**−25% permanente, caso por caso**). Existía desde siempre en
  `business/estrategia/07-pricing.md` §69 y **nunca había subido al canon**, así que se citaba en
  cotizaciones como "autorizado por política" sin política verificable por máquina: exactamente lo
  que la decisión **D1** vino a evitar. Va con `noAcumulacionDescuentos` (ONG, primeros clientes y
  precio ya rebajado son excluyentes: se aplica el mayor, nunca dos).
- **Added** · Reglas nuevas del catálogo: **`dominioBajoAdministracion`** (el dominio se registra a
  nombre del cliente pero en la cuenta de SoltyAI, con auto-renovación, alerta a 60 días y
  transferencia sin costo al salir — la promesa no es cumplible si la renovación depende de que el
  cliente se acuerde), **`buzonesTopados`**, **`excepcionPisoWeb`** y **`noAcumulaDescuentos`**.
- **Notes** · Precios de mercado verificados el 2026-08-04 y citados en `fuente`: web institucional
  $650k–$1,2M · corporativa en ciudades principales $2,5M–$6M · mantenimiento preventivo
  $150k–$300k/mes · dominio `.co` $21.700–$60.000/año. El **`.org.co` no tiene precio público**
  (Registro Colombia lo informa al presentar la solicitud): no prometerlo hasta cotizarlo.
- **Notes** · `npm run check` verde. El validador cazó `web-redespliegue` por no declarar la
  excepción al piso de $3M — la exención se declara con la frase literal *"Excepción explícita al
  piso"* en `notas`, no con una regla en el array.

## 2026-08-03 (coherencia) — 🚚 Domicilios entra al canon, y los patrones de WhatsApp por fin muerden

Los dos frentes que le tocaban a este repo de la auditoría `business/24-coherencia-producto-empresa.md`
(decisión **D3** y hallazgo **H3**).

- **Added** · `data/canon.json → verticales` pasa de 4 a 5: entra **`domicilios`**. Era el hallazgo
  **H2**: la única línea con facturación recurrente hoy no estaba en ninguna doc de empresa, así que
  su margen no lo gobernaba nada. Va con `verticalesNota`, que fija la frontera que se venía
  confundiendo: **`comercio` es el bot que toma pedidos por chat; `domicilios` es la plataforma
  operativa de despacho, sin chat automático** (`vertical-logistica` ↔ `08-domicilios-ops`).
- **Added** · `data/catalogo.json → domicilios-ops`: base **$310.924** + `precioConIva` **$370.000**
  (verificado contra el contrato `SAI-DOMIOPS-20260703-001`, la factura `SOL1` y la serie recurrente).
  Estado **`supuesto`** a propósito: el precio está verificado, **el costo no** — se usó la banda de
  infra ya verificada, sin medir el despliegue real del piloto.
- **Notes** · ⚠️ El margen del 97,4% que sale de ese costo **no incluye las horas de soporte en
  horario hábil ni la operación**, que en esta línea son justamente lo que puede comerse el margen.
  Queda escrito en `notas`, no escondido detrás de un número bonito.
- **Added** · **`canon.ivaConvencion`** (+ `catalogo._iva` y un bloque en `01-SOURCE-BRIEF.md`): todo
  precio del canon es **base, sin IVA**; la excepción se declara con `precioConIva` y su fuente. Sin
  esa regla, la línea de domicilios se leería como comparable a los $290k/$490k/$790k y no lo es.
- **Fixed** · `prohibiciones.whatsappComoPromesa` cazaba **1 de las 8** líneas de evidencia de H3: se
  escapaban el par de canales sin verbo (*"WhatsApp y Telegram, con o sin IA"*), el verbo en plural
  (*"Atienden por WhatsApp y Telegram"*), el sustantivo con adjetivo (*"bot inteligente de
  WhatsApp"*) y **todo el inglés**. Ahora **8 de 8**, con `patronesEn`/`exencionesEn`, que es lo que
  consume el chequeo nuevo de la landing.
- **Notes** · **Cero falsos positivos** sobre 15 formas legítimas de prueba, incluidas las tres que
  costarían caro: *"Escríbenos por WhatsApp"* (CTA humana), *"Teléfono / WhatsApp"* (label de
  formulario) y la enumeración legal *"canales como WhatsApp, web, Telegram"*. Los patrones piden
  **adyacencia**, y la CTA humana va en primera persona del plural mientras la promesa del bot va en
  tercera.
- **Notes** · Queda abierto: `src/catalogo/index.js:94` le suma el setup de $400.000 a **toda**
  suscripción recurrente, y esta línea no lleva cobro inicial (cotizarla con `--sin-setup` mientras
  tanto) · `patronesEn`/`exencionesEn` son **inertes** en el linter de este repo (`src/guardrails/
  reglas.js` sólo lee `patrones`): hoy da igual porque todo `copy/` es español · **`05-PRICING.md`
  sigue entero en el modelo USD superado** y necesita el mismo tratamiento que recibieron
  `estrategia/03` y `07` en el repo `business`.

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
