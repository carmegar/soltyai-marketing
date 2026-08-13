# 06 · BUDGET-PLAN — La economía de adquisición en COP (recalibrada 2026-08-13)

> Modelo financiero de la pauta, en **pesos**, contra el **pricing COP vigente** (`05-PRICING.md`) y
> la **secuencia de canales** que manda (`15-CANALES-Y-SECUENCIA.md`). Metodología: skill `ads-math`
> (break-even, LTV:CAC, payback, forecasting), fórmulas con números a la vista.
>
> **Reescrito el 2026-08-13, y no fue un ajuste de cifras: fue un cambio de anclaje.** La versión
> anterior modelaba una ronda de **US$400 en Meta** sobre un catálogo USD por producto que ya no
> existe, y anclaba el CAC máximo a la **caja del mes 1**. Decía textualmente *"la ronda paga su CAC
> con la caja del mes 1 sin tocar el LTV"*. Eso era el error, y §1 explica qué rompía.
>
> **Regla de honestidad:** la cuenta publicitaria es **nueva y no tiene histórico**. Cada tasa de
> conversión va marcada **(supuesto)**; los CPL vienen de **benchmarks externos verificados**, no de
> nuestra cuenta. Acá no se infla nada: los escenarios base salen chicos a propósito.

---

## 0. Resumen ejecutivo

| Indicador | Valor | De dónde sale |
|---|---|---|
| Ticket promedio mensual | **$390.000** *(supuesto: mezcla Esencial/Pro)* | canon |
| Caja del mes 1 por cliente | **$790.000** | adaptación $400.000 más el primer mes |
| **LTV bruto a 12 meses** | **$5.080.000** | $400.000 más $390.000 × 12 |
| **Techo de CAC** | **$800.000** | 2 veces el cobro inicial; se recupera con la caja acumulada del mes 2 |
| **Corte por lead calificado** | **$120.000** | techo $800.000 ÷ 6,7 calificados por cierre *(supuesto)* |
| Advertencia · matar · escalar | **$180.000** · **$250.000** · **menos de $80.000** | §5 |
| **Payback** | **mes 2 a 3** | ya **no** es inmediato, y eso es lo correcto |
| Margen mínimo por línea | suscripción **60%**, servicios **35%** | canon, y no se cruza |
| KPI que manda | **reuniones agendadas**, meta **2 por semana** | el correo pivotó a reunión |
| Presupuesto total de pauta | **$4.000.000** | $400.000 Google · $1.200.000 Meta · **$2.400.000 sin asignar** |

**Conclusión de una línea:** con CPL B2B reales en Colombia, **la suscripción sola no puede pagar
tráfico pago dentro del mes**. Se ancla al LTV, se acepta payback al mes 2 o 3, y **se entra por el
carril que produce caja rápido**: un cierre de servicio de $3.000.000 con 50% de anticipo pone
$1.500.000 en la cuenta y financia varias rondas de bot.

---

## 1. Por qué cambió el anclaje: del cobro inicial al LTV

Esta sección es el motivo de la reescritura. Sin ella, los números nuevos parecen optimismo.

### 1.1 El anclaje viejo

El modelo anterior decía: **CAC máximo = caja del mes 1**. Como la caja del mes 1 es cobro inicial más
mensualidad, en la práctica el techo era **el cobro inicial**. De ahí salían dos números:

```
Techo de CAC viejo  = $400.000            (el cobro inicial, y nada más)
Corte por lead      = $400.000 ÷ ~16 calificados por cierre = $25.000
```

*(La reconstrucción del ÷16 sale del embudo que asumía la versión vieja: no era un dato medido.)*

### 1.2 Qué se rompía, en orden de gravedad

1. **El corte estaba de 3 a 10 veces por debajo del piso del mercado.** El benchmark externo
   verificado para CPL B2B en Colombia es **$80.000 a $250.000 por lead**. Un corte de $25.000 no lo
   cumple ninguna campaña, ni bien hecha ni mal hecha.
2. **Consecuencia mecánica: la ronda se cortaba sola.** La primera lectura de cualquier carril daba
   "matar" antes de que hubiera nada que leer. El umbral no filtraba campañas malas: filtraba
   **todas**.
3. **Y el informe habría dicho "la pauta no sirve".** Ese es el daño real. Es el peor tipo de error de
   medición: el que produce una conclusión **con forma de dato**, con toda la autoridad de una regla
   escrita, sobre una pregunta que nunca se llegó a hacer.
4. **El error de fondo: pedirle al cobro inicial que pagara la adquisición.** Los $400.000 están
   dimensionados para cubrir la implementación (unas 4 horas de trabajo), no para ser el presupuesto
   de marketing de un negocio B2B con ciclo de venta de semanas.
5. **Bonus, y no es menor: "lead calificado" cambió de significado.** En el modelo viejo era cualquiera
   que entrara al bot y pasara el filtro de rubro, y costaba US$2 a US$8. En el modelo nuevo, a
   $120.000 (≈ US$30), es un **SQL B2B**, que es exactamente lo que miden los benchmarks (US$25 a
   US$80 por SQL en software). Comparar los dos números como si fueran la misma cosa era parte del
   error.

### 1.3 El anclaje nuevo

```
Techo de CAC = 2 × cobro inicial = $800.000
Comprobación por LTV:  $5.080.000 ÷ $800.000 = 6,4 : 1 bruto  ·  4,8 : 1 con margen 75%
Comprobación por caja: caja acumulada del mes 2 = $1.180.000 > $800.000  → payback mes 2
Corte por lead = $800.000 ÷ 6,7 calificados por cierre = $120.000
```

**Qué cambia en la práctica:**

- El cobro inicial deja de ser el presupuesto de adquisición y pasa a ser **lo que amortigua el
  payback**. Sin él, la caja acumulada solo llegaría a $1.170.000 en el mes 3: el payback del techo
  sería mes 3 en vez de mes 2. Ese es su verdadero aporte financiero, y es grande.
- **Se acepta que el payback se corra al mes 2 o 3.** Es el precio de jugar en un mercado con CPL
  reales, y **exige caja para flotarlo**. Por eso el carril de servicio en Google entra primero.

**Qué NO cambia, y conviene decirlo fuerte:** anclar al LTV **no es gastar lo que sea**. El techo sigue
existiendo, solo que ahora está calculado en vez de heredado, y descansa sobre un supuesto de vida
media que **no está medido** (§7).

---

## 2. Supuestos del modelo, todos explícitos

### 2.1 Hechos (no supuestos), de `05-PRICING.md` y del canon

| Dato | Valor |
|---|---|
| Planes vigentes | Esencial $290.000 · Pro $490.000 · Premium $790.000, antes de IVA |
| Adaptación inicial | $400.000 única vez, 50% al firmar y 50% cuando el bot atiende |
| Excedente | $50.000 cada 100 conversaciones |
| Piso de la línea de servicio | $3.000.000, con 50% de anticipo para agendar |
| Costo de servir | IA US$0,02 a US$0,05 por conversación · infra US$1 a US$2 por cliente al mes · modo sin IA = 0 |
| Márgenes reales por plan | 65% a 85% *(la banda que se comunica)* |

### 2.2 Supuestos de negocio, etiquetados

| Supuesto | Valor | Por qué |
|---|---|---|
| Ticket promedio | **$390.000/mes** *(supuesto)* | Mezcla de Esencial y Pro. Queda entre los dos planes que de verdad se van a vender. |
| Vida media del cliente | **12 meses** *(supuesto)* | **El número más frágil del documento.** No hay churn medido: la única línea recurrente lleva un mes de facturación. Sensibilidad en §7. |
| Margen de suscripción para modelar | **75%** *(supuesto, dentro del rango verificado 65% a 85%)* | Piso que no se cruza: 60%. |
| Calificado → reunión agendada | **50%** *(supuesto)* | Un calificado a $120.000 ya es un SQL, no un curioso. |
| Reunión → cierre | **30%** *(supuesto)* | B2B, decisión de dueño, marca nueva con dos referencias verificables. |
| **Calificados por cierre** | **6,7** *(derivado)* | 1 ÷ (0,50 × 0,30). Es el número que convierte el techo de CAC en el corte por lead. |
| CPL por lead calificado | **$80.000 a $250.000** *(benchmark externo verificado, no nuestro)* | CPL B2B Colombia. Base de planeación: $120.000. |

> ⚠️ **Las dos tasas del embudo son las cifras más inciertas y se multiplican entre sí.** Si
> reunión→cierre resulta ser 15% en vez de 30%, los calificados por cierre suben a 13,3 y el corte
> real cae a **$60.000**, que está por debajo del piso de mercado. **Ese es el escenario que mata la
> tesis**, y es lo primero que hay que medir con reuniones reales, no con clics.

---

## 3. Las fórmulas

```
Caja mes 1            = Cobro inicial + Ticket
Caja acumulada mes N  = Cobro inicial + Ticket × N
LTV bruto (N meses)   = Cobro inicial + Ticket × N
LTV neto              = LTV bruto × Margen

Calificados           = Presupuesto ÷ CPL
Reuniones agendadas   = Calificados × (calificado→reunión)
Cierres               = Reuniones × (reunión→cierre)

CAC                   = Presupuesto ÷ Cierres  =  CPL × Calificados por cierre
LTV:CAC               = LTV ÷ CAC
Payback               = primer mes en que la caja acumulada ≥ CAC
Break-even de la ronda= Presupuesto ÷ Caja mes 1  =  cierres necesarios
```

**Los cuatro números aplicados:**

```
Caja mes 1     = $400.000 + $390.000 = $790.000
Caja acumulada = m1 $790.000 · m2 $1.180.000 · m3 $1.570.000 · m4 $1.960.000
LTV bruto 12 m = $400.000 + $390.000 × 12 = $5.080.000
LTV neto 12 m  = $5.080.000 × 0,75 = $3.810.000   (supuesto de margen)
```

---

## 4. Break-even y techo de CAC

### 4.1 El techo, por los dos caminos

| Camino | Cálculo | Techo |
|---|---|---|
| **Por caja** (el que manda para decidir si se puede flotar) | primer mes en que la caja acumulada cubre el CAC | **$800.000** se cubre en el **mes 2** |
| **Por LTV, regla 3:1 sobre el bruto** | $5.080.000 ÷ 3 | $1.693.000 |
| **Por LTV neto, regla 3:1 sobre el margen** | $3.810.000 ÷ 3 | $1.270.000 |

**Se adopta $800.000**, que es el más conservador de los tres y además tiene una lectura simple: **dos
veces el cobro inicial, recuperado en el mes 2**. Los otros dos techos existen para saber cuánta
holgura hay antes de que la economía deje de ser sana, no para gastar hasta ahí.

### 4.2 Cierres para recuperar cada ronda

```
Break-even de la ronda = Presupuesto ÷ Caja mes 1

Google Search $400.000    ÷ $1.500.000 (anticipo de un cierre de servicio) = 0,27 cierres
Meta          $1.200.000  ÷ $790.000   (caja mes 1 de un cliente de bot)   = 1,52 → 2 cierres
```

- **Google:** un solo cierre paga la ronda **3,75 veces con el anticipo**, y 7,5 veces con el contrato
  completo. Incluso al margen mínimo de servicios (35%), un cierre deja **$1.050.000** de margen, que
  son **2,6 rondas**.
- **Meta:** hacen falta **2 cierres para recuperar la ronda dentro del mes 1**. El caso base son 1,5
  cierres, así que la ronda **no se recupera en el mes en que se gasta**: se recupera en el mes 2 o 3.
  Eso no es un defecto del carril, es exactamente lo que dice el anclaje nuevo.

---

## 5. La escalera del corte: LTV:CAC y payback en cada umbral

Todos los umbrales del tablero salen de una sola tabla. **El corte no es una opinión: es la fila donde
el LTV:CAC deja de ser sano.**

| CPL por calificado | CAC = CPL × 6,67 | LTV:CAC bruto | LTV:CAC neto *(margen 75%)* | Payback | Decisión |
|---|---|---|---|---|---|
| **menos de $80.000** | menos de $533.000 | más de 9,5 : 1 | más de 7,1 : 1 | **mes 1** | **escalar +20%**, nunca más por paso |
| $80.000 a $120.000 | $533.000 a $800.000 | 9,5 a 6,4 : 1 | 7,1 a 4,8 : 1 | mes 1 a 2 | **mantener** |
| **$120.000 (corte)** | **$800.000 (techo)** | **6,4 : 1** | **4,8 : 1** | **mes 2** | **es el límite, no la meta** |
| **$180.000 (advertencia)** | $1.200.000 | 4,2 : 1 | **3,2 : 1** | mes 3 | revisar creatividad, keyword o audiencia |
| **$250.000 (matar)** | $1.667.000 | 3,0 : 1 | **2,3 : 1** | mes 4 | **matar** ese ad set o esa keyword |

**Cómo leer la escalera, que es lo que hace falta en la operación:**

- **El corte de $120.000 es el límite, no el objetivo.** Operar justo en el corte significa operar
  **justo en el techo de CAC**: cero holgura. La meta de verdad es $80.000, donde el payback vuelve al
  mes 1.
- **La advertencia a $180.000 está puesta donde está por una razón:** el LTV:CAC neto cruza el 3:1
  sano en un CPL de **$190.500** *(calculado: $3.810.000 ÷ 3 ÷ 6,67)*. La advertencia se dispara justo
  antes de cruzarlo, no después.
- **Se evalúa sobre la ronda completa, no sobre una semana suelta.** Una semana mala con n de 3 leads
  no es una señal, es ruido.
- ⚠️ **El payback de esta tabla usa caja bruta.** Con márgenes reales por línea se corre un mes: ver
  el riesgo anotado en §7.3.

---

## 6. Escenarios por carril

El presupuesto **no se reparte entre productos** (eso era el modelo viejo), se reparte **entre
carriles**, porque cada carril vende una línea distinta, a un ticket distinto y con un reloj distinto.

### 6.1 Carril Google Search: $400.000, línea de servicio a la medida

**Qué se anuncia:** desarrollo a la medida, integraciones y web. **No el bot.** Es el único carril
donde el servicio es el titular.

| | Pesimista | **Base** | Optimista |
|---|---|---|---|
| CPL *(benchmark externo)* | $250.000 | **$120.000** | $80.000 |
| Leads calificados | 1,6 | **3,3** | 5,0 |
| Reuniones agendadas | 0,8 | **1,7** | 2,5 |
| Cierres de servicio | 0,24 | **0,50** | 0,75 |
| Anticipo esperado *(50% del piso)* | $360.000 | **$750.000** | $1.125.000 |

> 🔴 **Lo que esta ronda NO puede responder.** Con $400.000 se compran **3 leads** en el caso base.
> Tres leads no dicen nada sobre la tasa de cierre, ni sobre el ticket, ni sobre la línea. La
> aritmética de arriba es esperanza matemática sobre una muestra menor que 1: **no es una predicción,
> es la razón por la que la apuesta es barata.**
>
> **La única pregunta que sí responde en dos semanas:** ¿las keywords traen a la persona correcta
> (rubro, tamaño, ciudad) y a qué precio? Eso se lee con 3 leads. Lo demás, no.

**Reglas propias del carril:**

- **Objetivo: reuniones agendadas.** No clics, no formularios descargables, no descargas de PDF.
- **3 o 4 keywords de intención**, exactas o de frase, **nunca amplias**. Geo: Bucaramanga y área
  metropolitana primero.
- **Negativos desde el día 1:** "gratis", "curso", "aprender", "empleo", "plantilla", "wordpress
  barato". En Search la plata se va por ahí, no por el CPC.
- **Landing propia de servicio**, no la home del bot, con el mismo Calendly y su `origin` registrado.
- **Corte del carril:** se corta a las 2 semanas si el costo por calificado pasa $250.000 **o** si
  ninguno de los leads que llegaron es del perfil.
- **Si entran 2 proyectos a la vez, se pausa el carril.** La regla de 1 proyecto simultáneo no se
  rompe por tener demanda.

**Por qué este carril va primero pese a ser el más chico:** es el que produce caja rápido, y la caja es
lo que permite flotar el payback de mes 2 a 3 del otro carril. Además, el techo de CAC del servicio es
**más alto** que el del bot (margen mínimo de un proyecto piso = $1.050.000), así que aplicarle el
mismo corte de $120.000 es el criterio conservador, no el laxo.

### 6.2 Carril Meta: $1.200.000, línea de bot, y entra relegado

**Cuándo entra:** cuando haga falta volumen que los otros carriles no den, y **nunca antes** de tener
las cuatro cosas: píxel y GA4 vivos, número propio de WhatsApp, geo redirect en producción, y
creatividad por vertical.

| | Pesimista | **Base** | Optimista |
|---|---|---|---|
| CPL *(benchmark externo)* | $250.000 | **$120.000** | $80.000 |
| Leads calificados | 4,8 | **10** | 15 |
| Reuniones agendadas | 2,4 | **5** | 7,5 |
| Cierres | 0,72 | **1,50** | 2,25 |
| **CAC efectivo** | $1.667.000 | **$800.000** | $533.000 |
| Caja generada en el mes 1 | $568.800 | **$1.185.000** | $1.777.500 |
| Recuperación de la ronda | no se recupera | **mes 2** | mes 1 |
| LTV:CAC neto | 2,3 : 1 ✖ | **4,8 : 1** ✓ | 7,1 : 1 ✓ |

> 🔴 **El hallazgo que hay que tener presente: en el caso base, Meta empata exactamente con el techo.**
> $1.200.000 ÷ 1,5 cierres = **$800.000**, que es el techo de CAC, ni un peso de holgura. No es
> casualidad aritmética: el corte de $120.000 se derivó del techo, así que **operar en el corte es
> operar en el techo**. Un carril que en su escenario base empata con su propio límite es un carril
> que solo vale la pena **por debajo del corte**, y esa es la razón económica (además de las cuatro
> razones estratégicas de `15-CANALES-Y-SECUENCIA.md`) por la que Meta va relegado.

**Y la otra lectura incómoda:** 5 reuniones en toda la ronda del caso base, contra una meta de **2
reuniones por semana**. Meta no es el motor de reuniones ni pretende serlo: **el motor de corto plazo
es el outbound**, que no carga CAC.

**Cómo entra cuando entre:** una sola vertical, 3 ángulos en ABO con presupuesto parejo a propósito
(la ronda es para leer qué ángulo rinde, no para optimizar caja), el anuncio **llena el Calendly** en
vez de pedir la venta, nunca "un asistente de IA", y **nunca subir los teléfonos del outbound** como
audiencia (ToS y Ley 1581).

### 6.3 Los carriles que cuestan $0 y van antes que los dos

No entran en este modelo porque **no tienen CAC**, pero sí cambian el resultado de los que sí:

| Carril | Presupuesto | Su trabajo | Paga en |
|---|---|---|---|
| **Google Business Profile** | $0 | Pack local y reseñas verificables | semanas |
| **Contenido orgánico a mano** | $0 | Construir el activo que prospecta sin manos | 6 a 12 meses |
| **Outbound** | $0 | El motor de corto plazo, sin CAC | días |

**Nunca se juzga un carril con la métrica de otro.** El orgánico no se mide por leads de la semana ni
Google por alcance. Un carril evaluado con la métrica ajena siempre parece un fracaso.

### 6.4 Los $2.400.000 sin asignar

De los $4.000.000 quedan **$2.400.000 sin repartir, y es a propósito**, no un olvido ni una reserva
ociosa. Se asignan **contra resultados**, no contra un plan escrito en agosto.

- Van **al carril que baje del corte**, y solo a ese.
- **Máximo +20% por paso**, nunca más, para no resetear el aprendizaje de la plataforma.
- Lo que sobra del carril que no rinda **se mueve al que sí**, en vez de "darle una oportunidad más".

---

## 7. Sensibilidad y riesgos anotados

### 7.1 Si la vida media no es 12 meses

Es el supuesto que sostiene todo el anclaje nuevo, y **no está medido**.

| Vida media *(supuesto)* | LTV bruto | LTV:CAC con CAC $800.000 | Neto *(margen 75%)* | Lectura |
|---|---|---|---|---|
| **6 meses** | $2.740.000 | 3,4 : 1 | **2,6 : 1** ⚠ | El techo queda apretado: habría que bajarlo a ~$685.000 y el corte a ~$102.000 |
| **12 meses (base)** | $5.080.000 | 6,4 : 1 | **4,8 : 1** ✓ | Sano, con holgura para reinvertir |
| **18 meses** | $7.420.000 | 9,3 : 1 | **7,0 : 1** ✓ | Holgado |

**Qué hacer con esto:** la vida media no se adivina, se mide. El primer dato real llega cuando el
cliente recurrente cumpla 6 meses de facturación. Hasta entonces, el techo de $800.000 se usa **con la
consciencia de que descansa sobre un supuesto**, y no se escala por encima de él por ningún motivo.

### 7.2 Si reunión → cierre es la mitad de lo supuesto

Ya está dicho en §2.2 y se repite porque es el otro punto de quiebre: con 15% en vez de 30%, los
calificados por cierre pasan de 6,7 a 13,3 y **el corte real cae a $60.000**, por debajo del piso de
mercado. Si eso pasa, el problema no es la pauta: es que la oferta no cierra, y se retrabaja la oferta
antes de comprar más tráfico.

### 7.3 El margen del cobro inicial no es el de la suscripción *(riesgo anotado)*

El 75% aplica a la suscripción, donde el costo es infra e IA. El catálogo estima el margen de la
adaptación en **40%**: precio $400.000 contra un costo supuesto de $240.000 (4 horas del fundador).
Con caja **neta** en vez de bruta, el mes 1 aporta $452.500 y el acumulado del mes 2 llega a $745.000:
el payback del techo se corre del **mes 2 al mes 3**. No cambia ninguna decisión de la tabla de §5,
pero sí cambia cuánta caja hay que tener guardada para flotarlo.

### 7.4 Riesgos operativos que no son financieros

- **Un fundador solo** es el único desarrollador, el único vendedor y el que entrega. Tres carriles a
  la vez es la trampa de agencia aplicada al marketing. **Si algo se tiene que caer, que se caiga
  Meta:** es el más caro, el más lento y el que más preparación pide.
- **El primer registro de un WABA de cliente real será en vivo** (hasta hoy solo se probó contra
  nuestro propio número). No prometer plazos de conexión al día en ninguna pieza.
- **Sin `origin` registrado el lead llega sin fuente** y la ronda entera deja de ser evaluable. Es la
  falla que convierte todo este documento en decoración.

---

## 8. Upside no modelado

Nada de esto entra en los escenarios de §6, y todo mejora el resultado si aparece:

- **Outbound.** Cada cierre de ese carril **no carga CAC de pauta**. Hoy es el único motor con reuniones
  de verdad, y baja el CAC promedio de toda la operación sin gastar un peso de los $4.000.000.
- **Todo cliente de servicio sale con propuesta de bot.** Un cierre de Google puede convertirse en
  suscripción sin CAC adicional: el LTV del cliente pasa a ser proyecto **más** recurrente.
- **Reseñas del Google Business Profile.** Prueba social verificable de origen externo, gratis, que
  levanta la conversión de todos los carriles a la vez.
- **Excedentes de conversaciones.** El uso por encima del tope es margen incremental, o la excusa
  natural para subir de plan.
- **Recurrencia más allá del mes 12.** El LTV del modelo se corta en 12 meses por prudencia, no porque
  el cliente se vaya ese día.
- **Retargeting y lookalike** sobre las audiencias que siembre la primera ronda, cuando Meta entre.

---

## 9. Consistencia con los otros documentos

- **Pricing, planes, descuentos, garantía y márgenes** → `05-PRICING.md` y `data/canon.json`. Cero
  catálogo USD.
- **Secuencia de carriles, presupuestos y reglas de corte** → `15-CANALES-Y-SECUENCIA.md` §3 y §8. Los
  umbrales de §5 de este doc son los mismos, acá con la derivación completa.
- **Benchmarks externos de CPL, CPM y mix Google/Meta** → `01-SOURCE-BRIEF.md` §Mercado.
- **Reglas de la línea de servicios** (piso, anticipo, 1 por trimestre) → `13-PLAN-12-CLIENTES.md` §10.
- **Outbound y por qué no carga CAC** → `09-OUTBOUND.md`.
- **`04-STRATEGY.md` está desactualizado en su premisa** (asume Meta como primer carril y presupuesto
  en USD). Se mantiene como el detalle táctico de Meta **para cuando entre**, no como el plan.

---

> ## RECUADRO — Reglas de decisión
>
> **Antes de gastar**
> - Presupuesto total de pauta **$4.000.000**: **$400.000** Google Search · **$1.200.000** Meta cuando
>   entre · **$2.400.000 sin asignar a propósito**, se reparten contra resultados.
> - **Primero lo que cuesta $0:** Google Business Profile y contenido a mano. Después Google Search.
>   Meta de último.
> - **Ninguna pieza sale sin `origin` registrado.** Sin fuente, el lead no cuenta.
>
> **Los números que se memorizan**
> - Caja del mes 1 por cliente: **$790.000**. LTV bruto a 12 meses: **$5.080.000** *(supuesto de vida
>   media)*.
> - **Techo de CAC $800.000.** **Corte por lead calificado $120.000**, y es el límite, no la meta.
> - **Payback esperado: mes 2 a 3.** Ya no es inmediato, y esperar que lo sea es el error viejo.
> - **6,7 calificados por cierre** *(supuesto)* es el número que traduce techo de CAC a corte por lead.
>
> **Durante la ronda** *(métrica norte: costo por lead calificado · KPI: reuniones agendadas, meta 2 por semana)*
> - **Menos de $80.000** y con volumen → **escalar +20%**, jamás más por paso.
> - **$80.000 a $120.000** → **mantener**.
> - **Más de $180.000** a las 48 horas → **advertencia**: revisar creatividad, keyword o audiencia.
> - **Más de $250.000** → **matar** ese ad set o esa keyword.
> - Se evalúa sobre **la ronda completa**, nunca sobre una semana suelta.
>
> **Cierre de la ronda**
> - **Google:** se corta a las 2 semanas si el costo por calificado pasa $250.000 o si ninguno de los
>   leads es del perfil. Un solo cierre paga la ronda 3,75 veces con el anticipo.
> - **Meta:** en el caso base **empata con el techo**. Si no baja del corte, **no se escala**.
> - **Si ningún ángulo baja del corte, se para y se retrabaja la oferta** antes de gastar la ronda
>   siguiente. El problema entonces no es el tráfico.
> - **Toda métrica declara de dónde salió** (`export-google`, `export-meta`, `gbp`, `calendly`,
>   `suite-mcp`, `manual`). Que un dato sea manual está bien; fingir que es automático, no.
