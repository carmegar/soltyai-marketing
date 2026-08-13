# 15 · CANALES Y SECUENCIA — en qué orden se encienden, y por qué

> **Decidido el 2026-08-13.** Este doc reemplaza la premisa de `04-STRATEGY.md` y `13-PLAN-12-CLIENTES.md §5`
> de que **Meta era el primer carril pago**. No lo es. Meta queda **relegado hasta que haga falta**, y
> el orden nuevo es **Google Business Profile → Google Search → orgánico → Meta**, con el outbound
> corriendo en paralelo todo el tiempo.
>
> Los hechos que sostienen la decisión (competencia, benchmarks, CPLs) están en `01-SOURCE-BRIEF.md`.
> La economía recalculada, en `06-BUDGET-PLAN.md`. Este doc es **la secuencia y las reglas de corte**.

---

## 1. Por qué cambió el orden

Cuatro razones, en orden de peso:

**1. Meta lanzó nuestro producto, gratis, dentro de la app donde íbamos a pautar.** El Meta Business
Agent salió global el 3-jun-2026: se activa en minutos y hace textualmente responder preguntas,
recomendar productos, **agendar citas, calificar leads** y escalar a un humano. Más de un millón de
negocios instalados. Pautar "te armo un chatbot de WhatsApp" **dentro de Meta** es pagarle a Meta por
una audiencia que Meta está convirtiendo a su propio producto en la misma pantalla. El mensaje
genérico de categoría **está muerto ahí**. El mensaje por vertical y ciudad sigue vivo, pero es más
caro de construir y necesita creatividad que todavía no existe.

**2. Meta no captura intención B2B; Google sí.** El mix recomendado para servicios B2B en Colombia es
~65% Google / 35% Meta. Meta tiene el alcance (los decisores pasan 1h47 al día ahí, contra 23 min en
LinkedIn) pero no la intención. Y la línea que **hoy factura** —servicio a la medida, $2,3M de
Swisscontact, $800k de Chalá— es exactamente el tipo de compra que la gente **busca**.

**3. Meta es el carril más bloqueado que tenemos.** Píxel y GA4 siguen en `G-XXXXXXXXXX`, no hay
número propio de WhatsApp para la tercera CTA, el geo-redirect no corre en producción, y no hay
creatividad por vertical. El GBP, en cambio, es **gratis, no depende de nada de eso, y tarda semanas
en madurar**: cada semana que no existe es una semana perdida que no cuesta nada recuperar hoy y sí
cuesta después.

**4. El dinero es de un crédito personal y hay una sola persona.** $4.000.000 no alcanzan para
dispersar, y el fundador es el único desarrollador **y** el único vendedor. El carril que primero
produce caja es el que financia a los demás.

---

## 2. Los tres carriles y su reloj

Cada carril tiene un **trabajo distinto**. Confundirlos es lo que hace que se juzguen con la métrica
equivocada y se apaguen antes de tiempo.

| Carril | Su trabajo | Paga en | Métrica que lo juzga |
|---|---|---|---|
| **Google Search + GBP** | Capturar demanda que **ya existe** | Semanas | Reuniones agendadas, y **$/reunión** |
| **Meta** | **Generar** demanda por vertical + geo | Meses | $/lead calificado |
| **Orgánico / contenido** | Construir el activo que prospecta **sin manos** | 6–12 meses | Publicaciones sostenidas, después alcance |
| *(Outbound, en paralelo)* | El motor de corto plazo, sin CAC | Días | Reuniones agendadas |

> **Regla de lectura:** nunca se juzga el orgánico por leads de la semana ni Google por alcance. Un
> carril evaluado con la métrica de otro siempre parece un fracaso.

---

## 3. La secuencia, con fechas y plata

| # | Qué | Cuándo | Cuánto | Bloqueado por |
|---|---|---|---|---|
| **1** | **Google Business Profile** | esta semana (vence 20-ago) | **$0** | nada |
| **2** | **Contenido a mano**, 2 posts/semana | arranca ya, 8 semanas (hasta 8-oct) | **$0** | nada |
| **3** | **Google Search**, línea de servicio | tras el GBP | **$400.000** | GBP + landing de servicio |
| **4** | **Máquina de contenido** (`src/contenido`) | noviembre, si el (2) sobrevivió | tiempo | 8 semanas de (2) |
| **5** | **Meta**, una vertical | cuando haga falta volumen | **$1.200.000** | píxel + GA4 + número propio + creatividad por vertical |
| **6** | **Máquina de ventas predecible** | 2027 | — | ~10 cierres con motivo registrado |

**Reparto de los $4.000.000:** $400.000 Google Search (prueba) · $1.200.000 Meta R1 cuando entre ·
$2.400.000 sin asignar, y **es a propósito**: se asignan contra resultados, no contra un plan escrito
en agosto. Lo que sobra del carril que no rinda, se mueve al que sí.

---

## 4. Carril 1 — Google Business Profile *(gratis, es lo primero)* {#gbp}

**Por qué es el primero pese a ser el menos glamoroso:** hace tres cosas a la vez y no cuesta un peso.

1. **Pack local.** Mete a SoltyAI en Google Maps y en el bloque local de búsquedas como "desarrollo de
   software Bucaramanga", que es la línea que **ya factura**.
2. **Reseñas = prueba social verificable.** Es la única clase de prueba social que el guardrail del
   canon deja publicar, y hoy solo tenemos dos referencias (Bucaradomi y Swisscontact). Las reseñas
   son de origen externo: valen más que cualquier cosa que escribamos.
3. **Cimiento del carril 3.** Las extensiones de ubicación y la credibilidad local abaratan el Search.

**Datos para crearlo:**

```
Nombre:              SoltyAI
Razón social:        SOLTYAI S.A.S.  ·  NIT 902081265-3
Categoría principal: Desarrollador de software
Categorías extra:    Servicio de consultoría de software · Agencia de marketing en internet
Zona de servicio:    Bucaramanga y área metropolitana (Floridablanca, Girón, Piedecuesta) + Santander
Sitio web:           https://soltyai.com
Teléfono:            el número propio de SoltyAI (⚠️ ver bloqueo abajo)
Horario:             lunes a viernes, 8:00–18:00 COT
```

- **Va como negocio de área de servicio** (*service-area business*), **sin dirección visible**: no hay
  local con atención al público, y publicar la dirección personal es exactamente lo que estamos
  corrigiendo en el frente de datos personales.
- **La verificación puede pedir el certificado de existencia de la CCB** (matrícula 731655). Está a mano.
- **Primeras 3 publicaciones del perfil:** el caso Bucaradomi, el caso Swisscontact/Zaranda, y el bot
  contestando por WhatsApp. Con `origin` registrado, como cualquier pieza.

> 🔴 **Ojo con el teléfono.** El GBP quiere un número que conteste. Si se pone el personal, se repite
> el problema que ya estamos arreglando. Esto encadena el GBP al **número propio de SoltyAI**, que ya
> era el cuello de la tercera CTA de la landing.

---

## 5. Carril 2 — Orgánico a mano, y la máquina después {#organico}

### La regla que se acordó: **8 semanas a mano antes de construir la máquina**

Se automatiza un proceso que existe, **nunca uno que no**. La máquina de contenido (`src/contenido`,
el motor 1-idea→3-canales de `business/14`) queda **bloqueada en el tablero** hasta que la versión a
mano haya corrido **8 semanas seguidas = 16 posts**. Es la misma lógica con la que se pospuso el
Embedded Signup hasta tener 3 clientes.

**Por qué esta regla y no "construyámosla ya":** una máquina de contenido es un proyecto de código
precioso, divertido y bajo control total del fundador. Es exactamente la clase de trabajo que se come
tres semanas mientras los 15 WhatsApp del sábado siguen pendientes. El costo de equivocarse acá no es
el código: es el mes de prospección que no pasó.

### El insumo escaso no es publicar: es tener algo que decir

Y ahí SoltyAI tiene lo que casi nadie en la categoría tiene, porque no se puede inventar:

- Un motor que arma **90 de 92 asientos contables DIAN sin gastar un solo token**.
- Un **RCE real en producción** (react2shell, 5-ago) contenido, con los 6 secretos rotados y el
  post-mortem escrito.
- El **tren de facturación electrónica cerrado** de punta a punta por una empresa de una persona.
- Un **RLS construido entero que no rige**, y contarlo.
- **Backups que por fin se pudieron restaurar**, y lo que costó descubrir que antes no.

Eso es material que un generador de contenido no produce, y es la razón exacta por la que el contenido
automatizado del competidor no alcanza. **La máquina, cuando exista, no escribe: reformatea y
distribuye.** El input son 20 minutos del fundador por semana contando lo que de verdad pasó.

### Cadencia sostenible

**2 posts/semana, no más:** 1 de build-in-public (lo que se construyó esa semana) + 1 de demo/caso. La
idea-núcleo se recicla a las otras redes con el motor 1-idea→3-canales. **El video sube nativo a cada
red** (todas castigan el link que saca gente de la plataforma): el CTA de agendar va en el texto y en
el comentario fijado, con `origin` por canal.

**Semáforo:** 2 semanas seguidas sin publicar = la cadencia estaba mal calibrada, no falta disciplina.
Se baja a 1 post/semana antes que dejar de publicar. Un carril que compone solo funciona si no se corta.

---

## 6. Carril 3 — Google Search para la línea de servicio {#google-search}

**Qué se anuncia:** desarrollo a la medida, integraciones y web. **No el bot.** Es el cambio de la
regla de "un solo mensaje líder" a **un mensaje líder por canal** (ver `01-SOURCE-BRIEF.md`).

**Por qué acá y no en Meta:** es demanda que ya existe y se expresa en una búsqueda. Y con **piso de
$3.000.000 y 50% de anticipo, un solo cierre paga la ronda entera y financia el carril del bot.**

**Estructura de la prueba ($400.000):**

- **3–4 keywords de intención**, exactas o de frase, nunca amplias. Geo: Bucaramanga + área
  metropolitana primero, Santander después. Ejemplos del tipo correcto: *desarrollo de software a la
  medida*, *integración de facturación electrónica*, *desarrollo web para empresas*, *automatización
  de procesos*.
- **Landing propia de servicio** (no la home del bot), con el mismo Calendly y el mismo `origin`.
- **Objetivo: reuniones agendadas.** No clics, no formularios descargables.
- **Negativos desde el día 1:** "gratis", "curso", "aprender", "empleo", "plantilla", "wordpress
  barato". En Search la plata se va por ahí, no por el CPC.

**Reglas de corte:** ver §8. Y una específica de este carril: **si entran 2 proyectos a la vez, se
pausa el carril**, no se contrata. La regla de 1 proyecto simultáneo no se rompe por tener demanda.

---

## 7. Carril 4 — Meta, relegado *(no cancelado)*

**Cuándo entra:** cuando haga falta volumen que los otros carriles no den, y **nunca antes** de tener
las cuatro cosas: píxel + GA4 vivos, número propio de WhatsApp, geo-redirect corriendo en producción, y
creatividad por vertical.

**Cómo entra cuando entre** (esto sí se mantiene de `04-STRATEGY.md`):

- **Una sola vertical**, no tres. Vertical + ciudad + done-for-you es lo único que el Meta Business
  Agent no puede copiar: Meta te da la herramienta, no te la deja andando con tus 29 inmuebles.
- **El anuncio no pide la venta: llena el Calendly.** Coherente con el pivote del cold email a reunión.
- **Objetivo Tráfico**, optimización a clic al arrancar. 3 ángulos en ABO, presupuesto parejo a
  propósito: la ronda es para leer qué ángulo rinde, no para optimizar caja.
- **Nunca "un asistente de IA"** en la creatividad: bots de negocio estructurados (política de WhatsApp).
- **Nunca subir los teléfonos del outbound** como audiencia (ToS + Ley 1581).

**Lo que sí cambia respecto del plan viejo:** ya **se puede prometer WhatsApp**. Eso arregla el
problema de fondo que tenía la creatividad —vender un bot de Telegram a pymes colombianas que no usan
Telegram— y es la razón por la que Meta pasa de "bloqueado y sin sentido" a "relegado y viable".

---

## 8. Las reglas de corte, recalibradas

> El corte viejo de **$25.000 por lead calificado** no estaba solo bajo: estaba **anclado a la métrica
> equivocada**. Salía de exigir que el setup ($400.000) pagara la adquisición. Con CPLs B2B reales en
> Colombia de $80.000–$250.000 por lead, **la suscripción sola no puede pagar tráfico pago**. Se ancla
> al LTV y se acepta que el payback se corra al mes 2–3.

| Regla | Valor |
|---|---|
| **LTV bruto 12 meses** | **$5.080.000** ($400.000 setup + $390.000 × 12) |
| **Techo de CAC** | **$800.000** (2× el setup, se recupera en el mes 2) |
| **Corte por lead calificado** | **$120.000** |
| **Matar ad set / keyword** | **> $250.000 por calificado** |
| **Advertencia** | **> $180.000 por calificado** a las 48 h |
| **Escalar** | < $80.000 por calificado y con volumen → **+20%**, nunca más por paso |
| **KPI que manda** | **reuniones agendadas por semana** |
| Meta semanal de reuniones | **2** |

**Qué esperar de la R1 de Meta con esto:** $1.200.000 ÷ $120.000 ≈ **10 leads calificados → ~1,5
cierres**. Sigue siendo coherente con el "1–4 cierres, base ~2" que ya estaba escrito; lo que cambió es
que ahora el número **es alcanzable** en vez de una condena a cortar temprano.

**Regla de honestidad que no se toca:** cada métrica declara de dónde salió (`export-meta`, `calendly`,
`suite-mcp`, `manual`…). Que un dato sea manual está bien; fingir que es automático, no.

---

## 9. La máquina de ventas predecible — qué sí se puede hacer hoy

La idea es correcta y llega **después**, por una razón simple: un cierre repetible se ve después de
~10 cierres, y hoy hay **uno**. No se puede sistematizar lo que no se ha hecho.

**Lo que sí se puede hacer ya, y no cuesta una línea de código nuevo:** la instrumentación **ya
existe** —la suite como expediente de cliente, `src/reportes`, la atribución por `origin`—. Lo único
que falta es la disciplina de que **cada cierre y cada pérdida queden escritos con su motivo**. Así,
cuando el patrón aparezca, aparece como dato y no como anécdota.

**La condición de salida:** cuando haya ~10 cierres con motivo registrado, se lee el patrón (qué
vertical, qué objeción mató la venta, cuántos toques hicieron falta, qué canal trajo a los que sí
cerraron) y **ahí** se diseña la máquina. Antes es adivinar con la estética de un proceso.

---

## 10. El riesgo de todo esto, dicho en voz alta

Son **tres carriles + contenido + outbound + entrega**, para un fundador solo que además es el único
desarrollador. Es la trampa de agencia de `13-PLAN-12-CLIENTES.md §10`, pero aplicada al marketing.

**Si algo se tiene que caer, que se caiga Meta**: es el más caro, el más lento y el que más trabajo de
preparación pide. El GBP y el contenido a mano cuestan $0 y horas sueltas; el Search cuesta $400.000 y
se corta en dos semanas si no rinde.

---

## Relacionados

`01-SOURCE-BRIEF.md` (hechos canónicos, manda) · `06-BUDGET-PLAN.md` (la economía recalculada) ·
`04-STRATEGY.md` (Meta en detalle, para cuando entre) · `13-PLAN-12-CLIENTES.md` (la meta y el mix) ·
`09-OUTBOUND.md` · `business/14-estrategia-organico-social.md` (el motor 1-idea→3-canales) ·
`business/16-motor-cold-email.md` (el pivote a reunión) · `data/canon.json` (las reglas en máquina).
