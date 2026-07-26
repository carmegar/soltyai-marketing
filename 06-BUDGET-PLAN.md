# 06 · BUDGET-PLAN — Economía de la ronda semilla US$400 en Meta (SoltyAI)

> Modelo financiero de paid media para la **ronda 1 de validación**, recalculado contra el
> **pricing POR PRODUCTO** (`01-SOURCE-BRIEF.md` + `05-PRICING.md`). La versión anterior estaba
> anclada a planes Starter/Growth/Pro — **superados y prohibidos**. Metodología: skill `ads-math`
> (Break-Even, LTV:CAC, Budget Forecasting, CPL/CPA, payback) — fórmulas con números.
>
> **Regla de honestidad:** la cuenta es nueva, no hay histórico. Toda tasa de conversión o benchmark va
> etiquetada **(estimado)** o **(supuesto)**. Con US$400 y B2B-PYME el resultado base realista es
> **1–4 cierres (base ~2)**: este documento **no infla**. Rangos pesimista/base/optimista, no promesas.

---

## 0. Resumen ejecutivo (los números que importan)

> El "cliente de referencia del modelo" ya **no** es Growth $149. Modelamos sobre los **productos reales**
> y tomamos como **caso base de planeación el producto de ticket más bajo, SoltyAI Agenda** ($65/mes +
> $250 setup), para no inflar la economía. Los demás productos son **upside** (§7).

| Indicador (caso base = **Agenda**) | Valor | Cómo se obtiene |
|---|---|---|
| **Caja mes 1 (Agenda)** | **$315** | Setup $250 + mensualidad $65 |
| **CAC máximo tolerable (break-even caja mes 1)** | **≈ $315** | = caja mes 1 del producto más barato |
| **CAC máx ajustado por margen 75%** | **≈ $236** | $315 × 0,75 |
| **LTV bruto (Agenda, 12 m)** | **$1.030** | $250 + $65 × 12 |
| **LTV:CAC base (CAC $200)** | **≈ 5,2 : 1** | $1.030 ÷ $200 |
| **Payback** | **< 1 mes (inmediato)** | Setup $250 ≥ CAC base $100–$200 |
| **Cierres para break-even de los $400** | **2 clientes Agenda** (caja $630 > $400) · **1** si es Pedidos/Inmobiliario | $400 ÷ caja mes 1 |
| **Presupuesto diario recomendado** | **$40/día × ~7 días** (corrida) | $280 corrida ÷ 7 |
| **Resultado base esperado** | **~120 calificados → ~2 cierres** (mezcla de productos) | Embudo base (§4) |

**Conclusión de una línea:** el **setup fee** convierte cada cierre en **caja positiva el mismo mes**.
Con el producto más barato (Agenda) hacen falta **2 cierres** para recuperar los $400; con Pedidos
($360), Inmobiliario entry ($849) o full ($2.150), **basta 1 cierre**. El escenario base (~2 cierres,
mezcla realista) **deja caja para la ronda 2 sin meter capital nuevo**.

---

## 1. Supuestos del modelo (todos explícitos)

### 1.1 Pricing real POR PRODUCTO (hecho, no supuesto) — `05-PRICING.md`

| Producto | Mensualidad | Setup único | Caja mes 1 (setup + mes) |
|---|---|---|---|
| **SoltyAI Agenda** (Citas) | $65/mes | $250 | **$315** |
| **SoltyAI Pedidos** (Comercio/domicilios) | $80/mes | $280 | **$360** |
| **SoltyAI Inmobiliario — entry** *(propuesto, validar)* | $249/mes | $600 | **$849** |
| **SoltyAI Inmobiliario — full** | $650/mes | $1.500 | **$2.150** |
| **Integraciones a medida** | desde $180/mes | desde $3.500 | **desde $3.680** |

- **Bundle:** **−10% desde el 2º producto** del mismo cliente. Ignorado en el modelo base (upside).
- ⚠️ El tier **Inmobiliario entry ($249/$600) es propuesto a validar** en esta ronda; el seed/landing hoy
  solo tienen el full. Lo usamos para el cierre outbound de PYME pequeña (`09-OUTBOUND.md`), marcado.
- **PROHIBIDO** modelar con Starter $49 / Growth $149 / Pro $399 — superados.

### 1.2 Caja del mes 1, LTV y costo de servir

> **Eje financiero de la ronda.** El mes 1 cobra setup + mensualidad juntos. El **setup financia el CAC**.

```
Caja mes 1          = Setup + Mensualidad
Caja mes N (N≥2)    = Mensualidad
LTV bruto (vida = N meses) = Setup + Mensualidad × N
```

| Producto | Caja mes 1 | LTV bruto 8 m | LTV bruto 12 m | LTV bruto 18 m |
|---|---|---|---|---|
| **Agenda** ($65 + $250) | **$315** | $250 + $65×8 = **$770** | **$1.030** | **$1.420** |
| **Pedidos** ($80 + $280) | **$360** | $250… → $280 + $80×8 = **$920** | **$1.240** | **$1.720** |
| **Inmob. entry** ($249 + $600) *(propuesto)* | **$849** | **$2.592** | **$3.588** | **$5.082** |
| **Inmob. full** ($650 + $1.500) | **$2.150** | **$6.700** | **$9.300** | **$13.200** |

**Costo de servir (de `01-SOURCE-BRIEF.md` §"Costo de servir") — sostiene margen ~75%:**

- **IA (Claude Haiku 4.5):** ~**$0.02–0.05 por conversación** con caché. 500 conv/mes ≈ $15–25;
  1.000 conv/mes ≈ $30–50. El **modo sin IA (0 tokens)** baja esto a ~0.
- **Infra:** VPS Hetzner CPX32 ~€20/mes **compartido** entre tenants → **~$1–2/cliente** a escala.
- **WhatsApp (cuando se active, Colombia):** primeras 1.000 conv/mes **gratis**; hoy el canal es
  Telegram = **$0**.
- **Conclusión:** márgenes **65–85%** en todos los productos. **Margen bruto del modelo = ~75%**
  *(supuesto, dentro de rango)*. El costo NO es la restricción; el precio se fija por valor/mercado.

### 1.3 Supuestos de negocio (etiquetados)

| Supuesto | Valor | Justificación |
|---|---|---|
| **Vida media del cliente** | **8 / 12 / 18 meses** (pesim./base/optim.) *(supuesto)* | SaaS PYME LATAM nuevo, sin churn medido. 12 m = ~8% churn mensual, conservador para B2B con setup invertido. |
| **Margen bruto** | **~75%** *(supuesto)* | Único costo variable relevante = API de IA (Haiku 4.5). Modo sin IA + topes por plan sostienen margen alto; SaaS típico 70–85%. |
| **Producto de cierre base** | **Agenda ($65/$250)** *(supuesto conservador)* | Ticket más bajo de la cartera → no infla la economía. Los demás son upside. |
| **% de cierres que pagan setup** | **100%** *(supuesto)* | El setup es la adaptación done-for-you, obligatoria. En promos podría descontarse — riesgo a la baja anotado. |

### 1.4 Supuestos del embudo (los más inciertos — todos `(supuesto)`)

> Embudo de `04-STRATEGY.md §4`: **anuncio → clic → destino (3 opciones) → conversación/lead calificado
> → demo → cierre.** Tasas = **hipótesis a validar con la corrida**, no hechos. Rangos compatibles con
> `04-STRATEGY.md §9` (CPC $0,10–$0,50; ~800–4.000 clics; clic→entrada 25–50%; calificados ~50–300;
> costo/calificado $2–$8).

| Paso del embudo | Pesimista | **Base** | Optimista | Nota / justificación |
|---|---|---|---|---|
| **CPC (clic en enlace)** | $0,40 | **$0,25** | $0,12 | Benchmark LATAM B2B-PYME, tráfico Meta *(estimado, no cuenta real)*. |
| **CTR (link)** | 0,8% | 1,3% | 2,0% | Solo informativo; el modelo parte del CPC. |
| **Clic → entrada** (chat/agenda/WhatsApp) | 20% | **30%** | 45% | **El número más frágil** (brecha de atribución + fricción de salir al destino). 3 opciones de entrada lo suben vs. solo-Telegram. |
| **Entrada → lead calificado** | 50% | **65%** | 80% | El bot/formulario descarta curiosos/no-PYME; califica rubro + intención. |
| **Lead calificado → demo** | 40% | **55%** | 70% | La demo es el propio bot / "te lo dejamos con tus datos" → fricción casi nula. |
| **Demo → cierre** | 3% | **5%** | 9% | B2B, decisión de dueño, marca nueva sin testimonios *(supuesto conservador)*. |

> **Por qué "demo → cierre" tan bajo:** cerrar exige confianza en una marca nueva sin testimonios
> todavía. Inflar este número sería el error más caro del modelo.

---

## 2. Break-even — CPA / CAC máximo tolerable

**Fórmulas (skill ads-math, Break-Even):**

```
CAC máx (break-even por caja mes 1) = Caja mes 1 del cliente
CAC máx (sano, regla 3:1)           = LTV bruto ÷ 3
Break-even con margen               = Caja mes 1 × Margen bruto
```

### 2.1 Break-even por caja del mes 1 (el umbral que de verdad manda en la ronda)

Como setup + primer mes entran el mismo mes, la ronda es rentable **en caja** si adquirir un cliente
cuesta menos que lo que paga el mes 1:

| Producto | Caja mes 1 | **CAC máx (caja)** | CAC máx (×margen 75%) |
|---|---|---|---|
| **Agenda** (base) | **$315** | **$315** | **$236** |
| **Pedidos** | $360 | **$360** | $270 |
| **Inmob. entry** *(propuesto)* | $849 | **$849** | $637 |
| **Inmob. full** | $2.150 | **$2.150** | $1.613 |

### 2.2 Break-even por LTV (techo "sano" para escalar, no para validar)

```
LTV bruto Agenda 12 m = $1.030
CAC máx 3:1           = $1.030 ÷ 3 = $343   (bruto)
CAC máx 3:1 ×margen   = $343 × 0,75 = $257
```

**Interpretación:** la ronda paga su CAC con la **caja del mes 1** sin tocar el LTV. El LTV solo amplía
el techo si más adelante quieres escalar con CAC más alto.

**Resultado:** el **CAC máximo tolerable de la ronda es ≈ $236–$315 por cliente Agenda** (margen vs. caja
bruta); **mucho mayor** si cierra Pedidos/Inmobiliario. Como el CAC efectivo esperado es **$100–$400**
(`04-STRATEGY.md §9`), estamos **dentro del umbral en el caso base, y holgados** si el mix sube de Agenda.
⚠️ **Matiz nuevo vs. la versión vieja:** con el producto más barato (Agenda, $315 de caja), el escenario
malo de **1 solo cierre gastando todo el budget ($400) NO da break-even de caja inmediata** (CAC $400 >
caja $315). Por eso el bot/asesor debe **calificar hacia el producto correcto** y, en frío PYME, el
**Inmobiliario entry ($849)** o **Pedidos ($360)** salvan el break-even con 1 cierre.

---

## 3. LTV:CAC y payback

**Fórmulas (skill ads-math, LTV:CAC):**

```
CAC          = Gasto total en ads ÷ Clientes nuevos
LTV bruto    = Caja mes 1 + Mensualidad × (Vida − 1)
LTV:CAC      = LTV ÷ CAC
Payback (m)  = CAC ÷ Caja del primer mes que lo cubre
```

### 3.1 LTV:CAC con 3 supuestos de vida media (caso base Agenda, CAC = $200)

> CAC base $200 = $400 ÷ **2 cierres** (escenario base, §4).

| Vida media *(supuesto)* | LTV bruto (Agenda) | LTV:CAC (CAC $200) | LTV:CAC (×margen 75%) | Lectura |
|---|---|---|---|---|
| **8 meses** (pesimista) | $770 | **3,9 : 1** | 2,9 : 1 | Sano (≈3:1); justo en el filo con margen. |
| **12 meses** (base) | $1.030 | **5,2 : 1** | 3,9 : 1 | Sano, margen para reinvertir. |
| **18 meses** (optimista) | $1.420 | **7,1 : 1** | 5,3 : 1 | Techo amplio. |

> Benchmark SaaS: 3:1 = sano, 5:1+ = posible sub-inversión. **Con Agenda (el ticket más bajo) la
> economía es sana pero ajustada**; con cualquier otro producto sube fuerte: p.ej. **Inmob. entry 12 m =
> $3.588 → LTV:CAC 17,9:1** (CAC $200). El cuello de botella **no es** la economía unitaria, es el
> **volumen de cierres** con $400 (§4).

### 3.2 Payback — **casi siempre < 1 mes** (destacado)

```
CAC base (2 cierres)      = $400 ÷ 2 = $200/cliente
Caja del mes 1 (Agenda)   = $315
Payback = $200 ÷ $315 < 1 mes  → SE RECUPERA EL MISMO MES DEL CIERRE
```

| Escenario (cierres con $400) | CAC efectivo | Caja mes 1 (Agenda) | **Payback** |
|---|---|---|---|
| 1 cierre (pesimista) | $400 | $315 | **caja NO cubre el CAC el mes 1** (déficit $85) → cubierto en mes 2 con la mensualidad, o evitado cerrando Pedidos/Inmob. |
| 2 cierres (base) | $200 | $315 | **< 1 mes** (caja $315 > CAC $200) |
| 4 cierres (optimista) | $100 | $315 | **< 1 mes** |

**El setup fee hace el payback inmediato en el base y el optimista.** Solo el escenario pesimista (1
cierre Agenda con todo el budget) deja un pequeño déficit de caja inmediata que el recurrente cubre en
semanas — **y se evita** si ese único cierre es Pedidos ($360) o Inmobiliario ($849+), donde **1 cierre
recupera los $400 de sobra**.

---

## 4. Escenarios con US$400 — embudo completo

**Fórmulas (skill ads-math, CPL/CPA + Budget Forecasting):**

```
Clics            = Presupuesto ÷ CPC
Entradas         = Clics × (clic→entrada)
Leads calific.   = Entradas × (entrada→lead)
Demos            = Leads × (lead→demo)
Cierres          = Demos × (demo→cierre)
Costo/calificado = Presupuesto ÷ Leads calificados
Caja generada    = Cierres × Caja mes 1 (mezcla de productos)
```

> Se aplica el embudo de §1.4 sobre **los $400 completos**. Cifras redondeadas.

### 4.1 Tabla de escenarios

| Paso | Pesimista | **Base** | Optimista |
|---|---|---|---|
| Presupuesto | $400 | $400 | $400 |
| CPC | $0,40 | $0,25 | $0,12 |
| **Clics** | **1.000** | **1.600** | **3.333** |
| Clic→entrada | 20% | 30% | 45% |
| **Entradas** | **200** | **480** | **1.500** |
| Entrada→lead calificado | 50% | 65% | 80% |
| **Leads calificados** | **100** | **~312** | **1.200** |
| **Costo por calificado** | **$4,00** | **$1,28** | **$0,33** |
| Lead→demo | 40% | 55% | 70% |
| **Demos** | **40** | **~172** | **840** |
| Demo→cierre | 3% | 5% | 9% |
| **CIERRES (mecánica)** | **~1–2** | **~9** | **~76** |
| **CIERRES (planeación realista)** | **1** | **~2** | **~4** |

> **Nota de honestidad — el "76 cierres" es IRREAL, se descarta explícitamente.** La multiplicación de
> tasas optimistas produce cifras absurdas (el optimista "≈76 cierres con $400" **no es creíble** para
> B2B y una marca nueva). La aritmética del embudo **se rompe en los extremos** porque cada tasa es
> incierta y los errores se multiplican. **Anclamos el resultado realista al rango del brief y de
> `04-STRATEGY.md`: 1–4 cierres con $400, base ~2.** Las filas "mecánica" muestran cómo opera el embudo;
> **la cifra de planeación es 1–4 (base ~2)**, no el producto literal de las tasas.

### 4.2 Caja generada (mezcla realista de productos)

El base de planeación = **~2 cierres**. La caja depende de qué se cierra. Tres mezclas plausibles:

| Mezcla de los ~2 cierres base | Caja mes 1 generada | Menos $400 ronda 1 | Lectura |
|---|---|---|---|
| 2 × Agenda ($315 c/u) | **$630** | **+$230** | Mezcla más pobre; aún en negro. |
| 1 Agenda + 1 Pedidos ($315 + $360) | **$675** | **+$275** | Mezcla típica esperada. |
| 1 Pedidos + 1 Inmob. entry ($360 + $849) *(entry propuesto)* | **$1.209** | **+$809** | Si entra un inmobiliario; financia bien la ronda 2. |

### 4.3 Cierres necesarios para break-even de los $400

```
Caja mes 1 por cierre:
  Agenda     $315  → 2 cierres ($630 > $400)
  Pedidos    $360  → 2 cierres ($720 > $400); 1 cierre ($360) queda a −$40, casi
  Inmob entry $849 → 1 cierre (sobra)
  Inmob full $2.150 → 1 cierre (paga ronda 1 y 2 de un tiro)
```

- **El producto cambia el umbral.** Con **Agenda** hacen falta **2 cierres**; con **Inmobiliario** basta
  **1**. **Implicación táctica:** el asesor/bot debe **calificar hacia el producto que el negocio
  necesita** y no subvender — un inmobiliario cerrado vale como 3 Agendas para el break-even de la ronda.

### 4.4 ¿Se autofinancia la ronda 2?

| Escenario | Cierres | Caja generada (mezcla típica) | Menos $400 | **Caja libre para ronda 2** |
|---|---|---|---|---|
| Pesimista | 1 (Agenda) | $315 | −$400 | **−$85** (cubierto en mes 2 con recurrente); en negro si el cierre es Pedidos/Inmob. |
| **Base** | **2 (Agenda + Pedidos)** | **$675** | −$400 | **$275** (+ recurrente $145/mes) → **sí autofinancia** |
| Optimista | 4 (mezcla con 1 inmob.) | $1.500–$2.000 (estimado) | −$400 | **$1.100–$1.600** (3–4× el budget inicial) |

**Veredicto:** en el **base (2 cierres, mezcla típica)** la ronda **genera más caja de la que costó** y
deja **~$275 + recurrente** para la ronda 2. En el **pesimista (1 cierre Agenda)** queda un pequeño
déficit inmediato que el recurrente ($65/mes) y el LTV ($770+) cubren en semanas — **y se evita** si ese
cierre es Pedidos/Inmobiliario. **Upside del outbound** (§8): cada cierre del canal gratis no resta de
los $400 → mejora todas estas filas.

---

## 5. Presupuesto diario y duración — velocidad vs. aprendizaje

> Tramo de **corrida inicial = $280** (70% de $400, `04-STRATEGY.md §8`). Aquí decidimos el **ritmo**.

**Fórmula:** `Días = Presupuesto corrida ÷ Gasto diario`

| Opción | Gasto/día | Días | $/día por ad set (3 ABO) | Trade-off |
|---|---|---|---|---|
| A — Rápida | $40/día | 7 días | ~$13 | Aprendizaje veloz; menos margen para leer. |
| **B — Recomendada** | **$40/día** | **~7 días + relectura** | **~$13** | Equilibrio: cada ad set sobre el mínimo de Meta, datos en 1 semana. |
| C — Lenta | $25/día | ~11 días | ~$8 | Más días de lectura, pero ~$8/ad set **roza el piso** donde Meta entrega mal. |

**Recomendación: $40/día durante ~7 días en la corrida ($280), luego decidir.**

- **Aprendizaje de Meta:** con optimización a **clic** (no conversión) el umbral es alcanzable con poco
  budget, pero **por debajo de ~$10/día por ad set la entrega se degrada**. $40/día ÷ 3 = ~$13/ad set
  queda holgado.
- **Si falta volumen, antes que bajar el diario, consolidar de 3 a 2 ad sets** (consistente con
  `04-STRATEGY.md §8`).
- **No gastar los $400 de golpe:** $280 en la corrida, **leer a las 48 h y al cierre**, y recién entonces
  entran los $80 de escalado y los $40 de reserva (§6) sobre el ganador.

```
Corrida:   $280 ÷ $40/día = 7 días   (≈ $13/día/ad set × 3)
Escalado:  $80  sobre el ad set ganador, +20%/vez (§6)
Reserva:   $40  para una variante/ángulo/ciudad según lo aprendido
```

---

## 6. Reparto de los $400 + reglas de poda y escalado

Estructura: **3 ad sets (ABO), 1 creatividad-ángulo por ad set** (`04-STRATEGY.md §6`). El marco
70/20/10 del skill se adapta a **probado / escalado / reserva** dentro de Meta.

### 6.1 Reparto

| Tramo | % | Monto | Uso |
|---|---|---|---|
| **Corrida inicial (test 3 verticales)** | 70% | **$280** | 3 ad sets en paralelo, **~$93 c/u** durante ~7 días (~$13/día/ad set). |
| **Escalado del ganador** | 20% | **$80** | Subir budget del ad set/ángulo ganador tras leer datos, +20%/paso. |
| **Reserva de prueba** | 10% | **$40** | Variante de creatividad / ángulo / ciudad / activar audiencia de respaldo D. |

> **Reparto inicial parejo entre los 3** ($93 c/u) **a propósito**: el objetivo es *leer qué vertical↔
> mensaje rinde*, no optimizar caja todavía. Por eso ABO (a mano) y no CBO (Meta concentraría y mataría
> el test).

### 6.2 Regla de poda (3x Kill Rule del skill, métrica = costo por calificado)

> Métrica de poda = **costo por conversación/lead calificado** (KPI primario), no CPC ni CTR sueltos.
> Techo de break-even por calificado: con demo→cierre 5% y lead→demo 55%, **~36 calificados = 1 cierre**.
> A CAC máx **$315 (Agenda)** ⇒ **~$8,75 por calificado** es el techo absoluto con el producto más barato
> (con Pedidos/Inmobiliario el techo sube). Podamos **muy por debajo** de eso.

| Señal del ad set (48 h y al cierre) | Acción |
|---|---|
| Costo/calificado **> $8** (techo del rango estimado) | **Advertencia** — revisar creatividad/audiencia. |
| Costo/calificado **> 3× el del mejor ad set** | **Matar** ese ad set (3x Kill Rule); reasignar al ganador o activar audiencia D. |
| CTR (link) **< 0,6%** sostenido | Creatividad floja → pausar el **anuncio**, no solo el ad set. |
| Costo/calificado **> ~$9** (techo de break-even con Agenda) | **Matar inmediato** — no rentable ni con caja mes 1 del producto más barato. |
| Audience Network trae tráfico basura (rebote, 0 entradas) | Excluir Audience Network del placement. |

### 6.3 Regla de escalado (20% del skill)

| Señal del ad set ganador | Acción |
|---|---|
| Costo/calificado **< $2** (piso del rango) **y** CTR sano | **Escalar +20%** de budget (nunca >+20% por vez, para no resetear aprendizaje). |
| Costo/calificado **$2–$8** estable | **Mantener**; mover reserva ($40) a una variante del ganador. |
| Un ad set domina claramente tras 48 h | Volcar el tramo de **escalado ($80)** ahí, +20% por paso. |

---

## 7. Sensibilidad por producto de cierre

| Producto que cierra | Caja mes 1 | Cierres p/ break-even $400 | LTV 12 m | LTV:CAC (CAC $200) | Lectura |
|---|---|---|---|---|---|
| **Agenda $65/$250** (base) | **$315** | **2** | $1.030 | **5,2:1** | **Caso del modelo.** Sano pero exige 2 cierres. |
| Pedidos $80/$280 | $360 | 2 (≈1) | $1.240 | 6,2:1 | Mejor que Agenda; 1 cierre queda casi en break-even. |
| Inmob. entry $249/$600 *(propuesto)* | $849 | **1** | $3.588 | 17,9:1 | Un cierre paga la ronda y deja caja. |
| Inmob. full $650/$1.500 | $2.150 | **1** (sobra) | $9.300 | 46,5:1 | Un solo full paga la ronda 1 **y** la 2. |
| Integraciones $180+/$3.500+ | $3.680+ | 1 (sobra) | $5.660+ | 28:1+ | Raro en ronda fría; gran upside si entra. |

**Implicación táctica:** el bot/asesor debe **calificar hacia el producto que el negocio necesita** (no
subvender a Agenda por reflejo). Para el break-even de la ronda, **un inmobiliario o un Pedidos valen
mucho más que un Agenda**. El **bundle (−10% desde el 2º producto)** es upside adicional si un cliente
toma 2 verticales.

---

## 8. Upside no modelado (mencionado, no contado en el base)

- **Outbound (canal gratis paralelo) — el upside más concreto.** WhatsApp 1-a-1 manual a **906
  inmobiliarias** (`09-OUTBOUND.md`), demo en Telegram, cierre con Inmobiliario (entry propuesto para
  PYME pequeña). **Cada cierre outbound NO carga CAC de pauta** → mejora la economía global de la ronda
  sin gastar de los $400. **No subir esos teléfonos a Meta** (ToS + Ley 1581).
- **Bundle (−10% desde el 2º producto):** un cliente que toma 2 verticales sube su caja mes 1 y su LTV.
- **Overage / uso intensivo de IA:** la suscripción incluye un tope; el uso por encima es margen
  incremental (o palanca para subir de plan). El **modo sin IA** protege el margen en flujos repetitivos.
- **Recurrencia más allá del mes 1:** el break-even usa solo caja mes 1; cada cliente que sobreviva
  aporta su mensualidad ($65–$650/mes) no contada en "cierres para break-even".
- **Lookalike + retargeting (fase 2):** las audiencias sembradas en ronda 1 (`04-STRATEGY.md §11`)
  abaratan el CAC de la ronda 2 → LTV:CAC sube sin tocar el modelo.
- **Testimonios:** el primer cierre produce prueba social que **levanta demo→cierre** en rondas
  siguientes (no asumido aquí).

---

## 9. Consistencia con los otros documentos

- **Reparto 70/20/10 ($280/$80/$40)** y **3 ad sets ABO** → idéntico a `04-STRATEGY.md §6/§8`.
- **CPC $0,10–$0,50, ~800–4.000 clics, calificados ~50–300, costo/calificado $2–$8, 1–4 cierres,
  CAC $100–$400** → rangos compatibles con `04-STRATEGY.md §9`. (Aquí CPC base $0,25 y costo/calificado
  base ~$1,28, **dentro** de esos rangos; el "~76 cierres" optimista se **descarta** por irreal, §4.1.)
- **Pricing por producto** → `05-PRICING.md` (Agenda/Pedidos/Inmobiliario entry-propuesto y full/
  Integraciones; bundle −10%). **Cero Starter/Growth/Pro.**
- **Costo de servir / margen ~75%** → `01-SOURCE-BRIEF.md` §"Costo de servir".
- **Embudo anuncio→clic→entrada→lead→demo→cierre** → mismo de `04-STRATEGY.md §4`.

---

> ## RECUADRO — Reglas de decisión de la ronda
>
> **Antes de lanzar**
> - Budget total $400 → **$280 corrida (70%) / $80 escalado (20%) / $40 reserva (10%)**.
> - Diario corrida: **$40/día × ~7 días**, ABO, ~$13/día por ad set. Nunca bajar de ~$10/día/ad set:
>   antes consolidar de 3 a 2 ad sets.
>
> **CAC y break-even (memorizar) — POR PRODUCTO**
> - **Caja mes 1:** Agenda **$315** · Pedidos **$360** · Inmob. entry **$849** *(propuesto)* · full **$2.150**.
> - **CAC máx tolerable (caja) = caja mes 1 del producto** (con margen 75%, ×0,75).
> - **Break-even de los $400:** **2 cierres Agenda** · **1 cierre** Pedidos(≈)/Inmobiliario. Califica hacia
>   el producto correcto: 1 inmobiliario > 3 Agendas para la ronda.
> - **Payback < 1 mes** en base/optimista (setup fee). Solo el pesimista (1 Agenda) deja déficit chico
>   que el recurrente cubre — se evita cerrando Pedidos/Inmobiliario.
>
> **Durante la corrida — poda (48 h y al cierre)**
> - Métrica norte = **costo por calificado**.
> - **> $8** → advertencia · **> 3× el mejor** → **matar** ese ad set (3x Kill Rule) · **> ~$9** → **matar ya**.
> - CTR link **< 0,6%** sostenido → pausar el **anuncio**. · Audience Network basura → excluir del placement.
>
> **Durante la corrida — escalado**
> - Costo/calificado **< $2** + CTR sano → **escalar +20%** (jamás >20% por vez).
> - $2–$8 estable → **mantener** y mover reserva a una variante del ganador.
>
> **Cierre de la ronda**
> - Éxito mínimo: **≥1 cierre** + costo/calificado en rango + ≥1 ad set con CTR sano → **reinvertir**.
> - Corte: ningún ad set baja de ~$10/calificado y CTR <0,6% tras el gasto de aprendizaje → **pausar y
>   re-trabajar oferta/creatividad** antes de gastar más.
> - **Base esperado realista: ~2 cierres (mezcla típica ≈$675 de caja), ~$275 libres + recurrente para
>   la ronda 2** (se autofinancia). **Outbound** suma cierres sin CAC de pauta.
