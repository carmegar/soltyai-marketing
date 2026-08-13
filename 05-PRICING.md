# 05 · PRICING — Precios vigentes en COP, qué incluye cada cosa y cómo se defiende

> 🔴 **La fuente es `data/canon.json` + `data/catalogo.json`** (decisión D1,
> `business/24-coherencia-producto-empresa.md`). Este doc es su versión legible y vendible: si
> difiere del canon, **el canon gana y este doc está mal**. El espejo en prosa de negocio vive en
> `01-SOURCE-BRIEF.md` §Pricing.
>
> **Reescrito el 2026-08-13.** La versión anterior publicaba un catálogo **USD por producto** (Agenda,
> Pedidos, Inmobiliario entry y full, Integraciones) que **ya no existe**: quedó reemplazado por el
> canon COP el 22-jul-2026. Nada de lo que había acá se puede citar en una venta.
>
> **Regla de honestidad:** todo número sin cuenta real detrás va marcado **(estimado)** o
> **(supuesto)**. Los precios de competidores están en USD a propósito: son datos verificados **de
> terceros**, no nuestros.

---

## 1. Los tres planes

Un solo producto (el bot de negocio, adaptado a tu vertical) en tres tamaños. Lo que cambia entre
planes es **volumen de conversaciones** y **si hay IA o no**, no las funciones.

| Plan | Precio/mes *(antes de IVA)* | Conversaciones/mes | IA | Canales |
|---|---|---|---|---|
| **Esencial** | **$290.000** | 200 | Sin IA, flujos deterministas | 1 canal |
| **Pro** | **$490.000** | 500 | Con IA (Claude Haiku 4.5), topada | 1 canal |
| **Premium** | **$790.000** | 1.500 | Con IA, topada | 1 canal, multi-sede |

**Lo que llevan los tres, sin costo aparte:**

- **Alojamiento y operación** en la infraestructura de SoltyAI. El cliente no monta ni paga servidor.
- **La IA va incluida dentro del tope del plan.** No se cobran tokens aparte ni llega factura sorpresa
  por conversación. Es el diferenciador más concreto contra el clúster self-serve del mercado.
- **Modo sin IA (0 tokens)** para los flujos repetitivos, disponible en todos los planes. Baja el
  costo del cliente y **es la palanca que hace sostenible incluir la IA**.
- **Mantenimiento, actualizaciones y soporte** en horario hábil, en español de Colombia.
- **Sin permanencia.** Mensual, se cancela cuando el cliente quiera.
- **Datos exportables** (Ley 1581, habeas data).
- **Factura electrónica validada por la DIAN** (prefijo `SOL`, resolución `18764113048579`). El cliente
  descuenta el gasto. Frente al freelance y a la agencia informal, esto se vende solo.

### El canal: WhatsApp o Telegram, y quién paga qué

- **WhatsApp está vivo desde el 7-ago-2026.** SoltyAI es Tech Provider aprobado por Meta, y el bot
  atiende por WhatsApp Business API oficial. **Telegram** sigue vivo y es el canal de demos.
- **La conexión la hacemos nosotros** (camino asistido): el cliente nos agrega como socio a su WABA y
  lo registramos. No hay autoservicio, y en la venta eso no es una limitación, es el moat.
- ⚠️ **El consumo de la API de WhatsApp lo paga el cliente**, no va dentro de la suscripción. En
  Colombia las **primeras 1.000 conversaciones de servicio al mes son gratis** para él, así que en los
  volúmenes de estos planes su costo real tiende a cero. Decirlo de frente evita el reclamo del mes 2.
- ⚠️ **El widget web no existe.** La web sigue siendo "próximamente" y **no se promete**. Vender una
  página web (línea de servicio, §8) es otra cosa distinta y sí se puede ofrecer.
- ⚠️ Nunca se vende "un asistente de IA que responde lo que sea": la política de IA de WhatsApp
  (rige desde el 15-ene-2026) prohíbe los chatbots de propósito general. Vendemos **bots de negocio
  estructurados** por vertical: soporte, pedidos, reservas, recordatorios, calificación y ruteo de
  leads. Romper esto no cuesta un anuncio, cuesta el canal.

---

## 2. Cómo elegir el plan en una llamada

| Si el negocio... | Va a... | Por qué |
|---|---|---|
| Repite las mismas 10 preguntas y quiere dejar de contestarlas | **Esencial** | Flujo fijo, sin IA, costo controlado. Es el plan que más protege el margen de los dos lados. |
| Necesita que el bot entienda cómo pregunta la gente de verdad | **Pro** | Es el plan de referencia y el que cierra la mayoría. |
| Tiene varias sedes o volumen alto de chat | **Premium** | 1.500 conversaciones y multi-sede. |

**Regla práctica:** si el prospecto duda entre dos, se cotiza el de abajo. Subir de plan al mes 3
porque se pasó del tope es una conversación fácil; bajar de plan es una renegociación.

---

## 3. El setup: $400.000, una sola vez

> **El setup no es una barrera. ES el producto.** Es el trabajo de dejar el bot funcionando **con los
> datos del cliente**: su catálogo, sus precios, su agenda, su forma de atender. El cliente no recibe
> una herramienta para configurarla él (que es lo que le da el mercado, incluido Meta gratis); recibe
> el bot ya andando en su negocio. Eso es el moat, y por eso se cobra.

**Qué cubre:**

- Carga del catálogo, inventario, tarifas, FAQ y datos del negocio.
- Ajuste de los flujos y del tono a la forma de trabajar del cliente.
- Configuración del vertical (citas, comercio, domicilios, inmobiliaria).
- Conexión del canal, incluido el registro del WABA cuando es WhatsApp.
- Pruebas con datos reales antes de salir en vivo.

**Cómo se cobra:** en dos partes.

- **50% al aceptar la cotización** y **50% cuando el bot ya está atendiendo.**
- En pesos: $200.000 para arrancar y $200.000 contra el bot funcionando.
- El anticipo **nunca baja a cero** en ningún plan: es el filtro que separa al que va en serio del
  curioso.
- No es reembolsable, salvo por la garantía de implementación (§6).

---

## 4. Excedente: $50.000 cada 100 conversaciones

Por encima del tope del plan se cobra **$50.000 por cada 100 conversaciones adicionales**.

- Existe para que el uso alto no se coma el margen del plan, no para castigar al cliente.
- Cuando el excedente se vuelve costumbre, la conversación correcta es **subir de plan**, no seguir
  facturando excedentes. Sale más barato para él y es MRR para nosotros.

---

## 5. IVA 19%

**Todos los precios de este documento son antes de IVA.** El 19% se suma encima.

| | Esencial | Pro | Premium |
|---|---|---|---|
| Base | $290.000 | $490.000 | $790.000 |
| IVA 19% | $55.100 | $93.100 | $150.100 |
| **Total a pagar al mes** | **$345.100** | **$583.100** | **$940.100** |

Con IVA, el cobro inicial de la adaptación queda en un total de **$476.000** ($400.000 más $76.000).

**La única excepción del catálogo** es `domicilios-ops` (§7): ahí el contrato firmado pactó el total
**con IVA incluido**, así que su precio de lista es la base y el total va aparte. Regla completa en
`canon.json → ivaConvencion`.

---

## 6. Descuentos autorizados, y no se acumulan

Hay **dos**, y son **excluyentes: se aplica el mayor, nunca los dos.**

| | Esencial | Pro | Premium |
|---|---|---|---|
| Lista | $290.000 | $490.000 | $790.000 |
| **Primeros clientes, −30% por 3 meses** | $203.000 | $343.000 | $553.000 |
| **ONG y educación, −25% permanente** | $217.500 | $367.500 | $592.500 |

- **Primeros clientes:** **5 cupos**, −30% durante **3 meses**, **a cambio del caso de estudio**. No es
  un descuento de cierre, es un intercambio: si el cliente no acepta que contemos su caso, no aplica.
- **ONG, ESAL y educación:** −25% **permanente**, **caso por caso**. No es automático: se decide y se
  anota por cliente.
- La regla de no acumulación vale también **contra un precio de lista que ya viene rebajado a
  propósito** (el caso `web-redespliegue` de §8, que sale por debajo de lo que el cliente ya pagó).
- **El setup no se descuenta.** Es trabajo humano ya hecho; regalarlo es regalar horas, no margen.

---

## 7. Garantía de implementación (7 días calendario)

**Lo que se anuncia es una sola frase, y solo esta:**

> **"Arrancas pagando la mitad del setup. La otra mitad solo cuando tu bot esté atendiendo."**

**Lo que NO se anuncia** (ni en piezas, ni en la landing, ni en el primer toque del outbound): la
devolución completa y el mes gratis. **Son la carta que se juega en la objeción**, y sirven para
cerrar Pro o Premium, no para poner en un anuncio.

| Plan | Si no cumplimos en 7 días |
|---|---|
| Esencial | No se cobra la mitad restante de la adaptación. El cliente no paga más hasta que el bot atienda. |
| Pro | Lo anterior y además se devuelve lo ya pagado del cobro inicial: queda en cero. |
| Premium | Lo anterior y además el primer mes de suscripción no se cobra. |

**Las condiciones, que hay que saber decir:**

- **Atendiendo** significa: bot en el canal del cliente, con su catálogo o flujo cargado, y **al menos
  una conversación real completada de punta a punta**.
- **El reloj arranca cuando el cliente entrega completa la información del onboarding**, y se pausa
  mientras falte algo. Sin esto la garantía es impagable.
- **Ventana de reclamo: 15 días.**
- **Alcance: solo el setup estándar del vertical.** Integraciones o desarrollos fuera del onboarding
  normal quedan fuera y se cotizan aparte.
- **No aplica a la línea de servicios** (§8), donde rige el anticipo del 50%.

**Por qué es barata:** regalar un setup completo se recupera en 1,4 meses de margen del Esencial, 1,0
del Pro y 0,7 del Premium *(estimado, sobre los costos del catálogo)*. El riesgo caro nunca fue la
devolución, era no cerrar.

---

## 8. Las otras dos líneas que se venden hoy

### 8.1 La que ya factura: SoltyAI Domicilios, Plan Operativo

| Producto | Para quién | Suscripción | Cobro inicial |
|---|---|---|---|
| **Plan Operativo** (`08-domicilios-ops`) | operadores de domicilios y mensajería | **$370.000/mes, IVA incluido** | **$0** |

- El total pactado es **$370.000 con IVA incluido**, o sea base $310.924,37 más IVA $59.075,63. Es la
  **única línea del catálogo cuyo precio se pactó con IVA adentro**: no se le suma 19% encima.
- **No lleva cobro inicial.** Al cotizarlo hay que pasar `--sin-setup` en el CLI del catálogo, que por
  ser suscripción recurrente se lo agrega por defecto.
- Incluye: dashboard de operador (pedidos, asignación, estados en vivo, zonas y tarifas editables),
  PWA para domiciliarios (asignaciones, cambio de estado, evidencia de entrega), alojamiento y
  monitoreo, copias de seguridad diarias cifradas fuera del servidor, y soporte en horario hábil.
- **No incluye chat automático ni IA por conversación.** Es una plataforma operativa de despacho, no
  un bot. Confundirla con la vertical de Comercio es el error de venta de esta línea.
- Es la **única línea con facturación recurrente hoy**: piloto Bucaradomi, contrato
  `SAI-DOMIOPS-20260703-001`, factura electrónica `SOL1`.

### 8.2 La que más factura: servicio a la medida y web

Es la línea de proyecto, y desde el 13-ago **sí se anuncia, pero solo en Google Search y en el Google
Business Profile**. En Meta, orgánico, outbound y la landing el titular sigue siendo el bot.

| Regla | Valor |
|---|---|
| **Piso de precio** | **$3.000.000**. Excepción anotada: proyecto chico que abre la puerta a un cliente grande |
| **Anticipo** | **50% para arrancar.** Sin anticipo no se agenda (lección Swisscontact: $2,3M cobrados contra entrega) |
| **Simultáneos** | **1**, y máximo **1 por trimestre** mientras la meta de los 12 clientes esté viva |
| **La prospección no se suspende** | Los contactos y las reuniones semanales se sostienen aunque haya proyecto en curso |
| **Deja pieza reutilizable** | Vuelve a `platform/` como módulo. Si no deja nada, es trabajo por horas disfrazado |
| **Sale con propuesta de bot** | **Siempre.** El proyecto es la puerta, la suscripción es la renta |
| **Si entran 2 proyectos a la vez** | Se **pausa el carril de Google**, no se contrata |

**Las excepciones explícitas al piso**, porque son puerta de entrada barata y no proyectos a la medida:

| Línea | Precio | Qué es |
|---|---|---|
| Página web corporativa (construcción nueva) | **$1.500.000** | Sitio institucional nuevo, con formulario |
| Rescate y republicación de sitio existente | **$750.000** | Cuando el código ya existe y es reutilizable |
| Cuidado del sitio (hosting, dominio, administración) | **$180.000/mes** | Dominio a nombre del cliente con auto renovación, 2 buzones, 1 actualización al mes |

⚠️ **La web nunca se entrega sola:** sale con el cuidado mensual (si no, el cliente vuelve a perder el
dominio) y con propuesta de suscripción. Y **los buzones van topados**: ofrecer "correos" sin número
explícito es la fuga que puede volver negativa esa línea.

**Referencias reales:** Swisscontact **$2.300.000** (módulo Zaranda, factura `SOL3`), Zaranda adición
C **$300.000**.

> 🔴 **2026-08-13: se retiró «Chalá $800.000 (cotización)».** El proyecto murió por decisión del
> dueño, y de paso quedó claro que esa cifra era una propuesta **en DRAFT y nunca enviada**. Una
> referencia sólo cuenta si se envió y se aceptó. Detalle en `01-SOURCE-BRIEF.md` (que manda).

⚠️ **Integraciones a ERP o sistema legacy:** el ítem `integracion-erp` del catálogo sigue en el modelo
USD **legacy** y **no está reconciliado** con el pricing COP. Hasta que se le fije precio en pesos, una
integración se cotiza **dentro de la línea de servicio a la medida**, con el piso de $3.000.000.

---

## 9. Posicionamiento: por qué somos más caros, y por qué está bien

> Los precios de esta tabla son **de terceros, en USD, verificados** (`03-competitor-analysis.md`). La
> columna en pesos es una conversión de referencia con **TRM supuesta de $4.000**, solo para comparar:
> **no se usa en una cotización sin actualizarla contra la TRM real**.

| Competidor | Precio de lista | ≈ COP *(TRM supuesta $4.000)* | Modelo |
|---|---|---|---|
| **Meta Business Agent** | gratis, luego US$2 por millón de tokens | variable | Nativo de la plataforma, lo activas tú en minutos |
| **Chately** | US$39/mes | ≈ $156.000 | Self-serve, tokens de IA aparte, lo montas tú |
| **Cliengo** | US$45/mes | ≈ $180.000 | Self-serve, IA limitada o aparte, lo montas tú |
| **Whaticket** | US$49/mes | ≈ $196.000 | Self-serve, IA con costo variable, lo montas tú |
| **Leadsales** | US$97/mes | ≈ $388.000 | Bandeja compartida y CRM |
| **B2Chat** | US$50 a US$300/mes | ≈ $200.000 a $1.200.000 | Multiagente, por escalones |

**La PYME colombiana paga cómodo US$40 a US$100 al mes todo incluido.** Nuestro plan de entrada
($290.000 ≈ US$72) cae dentro de esa banda; el de arriba se sale, y se sostiene solo con el
done-for-you.

**El argumento no es el precio, son las cinco cosas que nadie combina:**

1. **Te lo dejamos andando con tus datos.** Meta te da la herramienta; nadie te la deja funcionando con
   tus 29 inmuebles, tus tarifas por zona y tu forma de cotizar. Eso es la adaptación, y es el moat.
2. **Vertical ya entrenado.** El flujo de una inmobiliaria, de un operador de domicilios, de una
   barbería. No un asistente genérico.
3. **IA incluida sin sorpresa de tokens.** Mensualidad fija. Los baratos te cobran la IA por fuera.
4. **Modo sin IA, 0 tokens.** Cuando el flujo es fijo no se paga inferencia. Protege el margen del
   cliente y el nuestro. Meta cobra por token siempre.
5. **Empresa formal que factura electrónicamente**, en Bucaramanga, con una persona que contesta.

**Lo que NO se hace:** competir por precio, ni vender "la existencia del bot". Desde junio de 2026 esa
categoría la regala Meta dentro de su propia app. El ángulo es **el resultado, en tu vertical y en tu
ciudad**.

---

## 10. Cómo se dice el precio, y las tres objeciones

**Cómo se dice:** primero el resultado, después el cobro inicial explicado como trabajo, y de último la
mensualidad. Nunca al revés. "Te lo dejamos andando con tu catálogo por $400.000 de adaptación, y de
ahí en adelante son $490.000 al mes más IVA, sin permanencia."

| Objeción | Respuesta |
|---|---|
| **"Está caro contra el de US$49"** | Ese lo montas tú y la IA te la cobran aparte. Compara contra lo que te cuesta una persona contestando el chat, no contra otro software. |
| **"¿Y el cobro inicial?"** | Es la adaptación con tus datos, y arrancas pagando la mitad: la otra mitad solo cuando tu bot esté atendiendo. *(Si insiste, y solo ahí, entra la garantía completa de §7.)* |
| **"¿Me amarra a un contrato?"** | No hay permanencia, es mensual, y tus datos son exportables. |

---

## 11. Márgenes y costo de servir

**Costo verificado:**

- **IA (Claude Haiku 4.5):** **US$0,02 a US$0,05 por conversación** con caché de prompt. El **modo sin
  IA baja esto a 0**.
- **Infra:** VPS Hetzner compartido entre todos los tenants, **US$1 a US$2 por cliente al mes** a escala.
- **WhatsApp:** lo paga el cliente, no entra en nuestro costo.

**Margen por línea** *(estimado, sobre los costos del catálogo, TRM supuesta $4.000)*:

| | Esencial | Pro | Premium | Adaptación inicial |
|---|---|---|---|---|
| Precio | $290.000 | $490.000 | $790.000 | $400.000 |
| Costo *(estimado)* | ~$8.000 | ~$78.000 | ~$218.000 | ~$240.000 |
| Margen bruto *(estimado)* | ~97% | ~84% | ~72% | ~40% |

- **Hacia afuera la banda que se comunica es 65% a 85%**, no el 97%: estos costos **no incluyen las
  horas de soporte ni el onboarding**, que son lo que de verdad se puede comer el margen del plan bajo.
- **Margen mínimo por línea, y no se cruza:** **suscripción 60%**, **servicios 35%**.
- **El Premium es el de margen porcentual más bajo.** Si el uso real se pega al tope, hay que vigilarlo.
- **El costo no es la restricción.** El precio se fija por valor y mercado, no cost-plus. La IA incluida
  es viable **porque existe el modo sin IA** y porque los topes de conversaciones son reales.

Cómo entra todo esto en la economía de la pauta: **`06-BUDGET-PLAN.md`**.

---

## 12. Lo que ya no existe y no se puede citar

> ⚠️ **PROHIBIDO** cotizar, modelar o mencionar los planes USD **superados** Starter $49 / Growth $149
> / Pro $399. (Ojo: **"Pro" a secas SÍ es válido**, es el plan COP de $490.000.)

> ⚠️ **PROHIBIDO** también el catálogo USD por producto, igualmente **superado**: Agenda $65 y $250,
> Pedidos $80 y $280, Inmobiliario $249 y $600, Inmobiliario full $650 y $1.500, Integraciones $180 y
> $3.500. Ese catálogo **ya no existe**: lo reemplazó el canon COP el 22-jul-2026, y con él se fueron
> el "bundle −10% desde el 2º producto" y el tier "Inmobiliario entry propuesto".

**Qué hacer si alguien lo cita:** mandarlo a `data/canon.json`. Un precio que no está en el canon no es
un precio, es un recuerdo.

---

## Relacionados

`01-SOURCE-BRIEF.md` (hechos canónicos) · `data/canon.json` y `data/catalogo.json` (la fuente) ·
`06-BUDGET-PLAN.md` (la economía de adquisición) · `03-competitor-analysis.md` (los precios de
terceros) · `15-CANALES-Y-SECUENCIA.md` (en qué canal se anuncia qué) ·
`13-PLAN-12-CLIENTES.md` (las reglas de la línea de servicios) ·
`business/estrategia/07-pricing.md` (la política de descuentos).
