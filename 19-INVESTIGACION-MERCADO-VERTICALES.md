# 19 · INVESTIGACIÓN DE MERCADO — zapateros, restaurantes y los otros terrenos donde hay demanda

> **Fecha: 2026-08-22.** Encargo del fundador: *«qué tipo de productos puedo diseñar para ofrecerle a
> mercados muy presentes en Bucaramanga —los zapateros y los restaurantes— para cobrarles mes a mes o
> anualidades que sean rentables; y busca demanda de software en cualquier otro terreno para
> expandirnos y no depender de lo que venimos haciendo»*.
>
> Este doc **no cambia ningún precio ni publica nada**. Es investigación con fuentes, y termina en una
> recomendación de **orden**, no en un catálogo nuevo. Los precios los sigue mandando la D1
> (`data/canon.json` + `data/catalogo.json`).
>
> Se lee después de **`18-ARQUITECTURA-DE-OFERTA.md`**, del que hereda el vocabulario L1/L2/L3 y el
> playbook de réplica vertical.

---

## 0. La respuesta corta

**Tres hallazgos, en orden de qué tan rápido convierten en plata:**

1. **Restaurantes: no entrar por el POS —está muerto para nosotros— sino por la comisión de Rappi.**
   Es el único de los tres donde **el producto ya existe y está en producción** (`domicilios-ops`), el
   ahorro se calcula con una factura que el cliente ya tiene en la mano, y hay ~6.500 puertas
   formales a 20 minutos de la casa.
2. **Zapateros: la palabra tapa dos mercados distintos, y uno de los dos no es mercado.** El zapatero
   de reparación de la esquina no puede pagar una suscripción. La **fábrica de calzado** sí: son
   ~1.800 empresas registradas en Santander, con ~36.000 empleos. Pero ahí **ya hay competencia
   despierta y apuntando a Santander por nombre**, y el ciclo de venta es largo. Va a descubrimiento,
   no a construcción.
3. **Los otros terrenos: el filtro que sirve no es «qué sector tiene plata» sino «qué sector tiene
   FECHA».** Una obligación con calendario y multa produce compradores que ya decidieron comprar; lo
   único que eligen es a quién. Con ese filtro quedan dos candidatos reales —**salud (FEV+RIPS)** y
   **transporte de carga (RNDC)**— y dos descartes con argumento —**propiedad horizontal** y **nómina
   horizontal**—.

Y el dato que ordena los tres: **el piso mental de una pyme colombiana para "software" está en
$37.000–$180.000/mes** (planes contables para micro y pequeña empresa). Nuestro plan más barato
cuesta el doble del techo de esa banda. Eso **no** significa que estemos caros: significa que
**vender "software" nos deja siempre por encima del precio de referencia**, y que lo único que
sostiene el ticket es vender **un reemplazo con nombre** — una persona que hoy digita, una comisión
que hoy se paga, una multa que hoy se arriesga. Es exactamente el ancla que `18 §6` ya dejó escrita.

---

## 1. Qué es esta investigación y qué NO probó

Método: búsqueda web el 22-ago-2026, fuentes de prensa económica colombiana, gremios (ACICAM,
ACODRES), entidades (IMEBU, Alcaldía de Bucaramanga, MinSalud, MinTransporte) y páginas de producto de
los competidores. Todas las cifras llevan fuente al final.

**Lo que esto NO es, y conviene decirlo antes de que alguien lo cite como si lo fuera:**

- **No hay una sola entrevista con un cliente.** Todo lo de acá es escritorio. Un dolor leído en
  prensa y un dolor que alguien te dice en su fábrica no son el mismo dato, y el segundo es el que
  vale.
- **Los números vienen de prensa y de gremios, no de registro primario.** El registro primario existe
  y es gratis: la base de empresas de la **Cámara de Comercio de Bucaramanga** está publicada en
  Datos Abiertos, y **Compite 360** permite filtrar por actividad económica. Esa es la fuente para
  contar de verdad — y de paso **es la lista de prospección**, o sea que el mismo trabajo sirve dos
  veces (`tools/apps/prospeccion`).
- **Ningún precio de acá está validado contra nadie.** Los anclas de §2.4 y §3.4 son aritmética sobre
  cifras públicas, no cotizaciones aceptadas.

---

## 2. Zapateros — dos mercados con el mismo nombre

### 2.1 · Los datos

**Santander es el segundo clúster de calzado y marroquinería del país**, después de
Bogotá–Cundinamarca y por delante de Norte de Santander:

| Dato | Santander | Fuente |
|---|---|---|
| Empresas registradas | **~1.800** | El Tiempo, ago-2026 |
| Empleos | **~36.000** | El Tiempo, ago-2026 |
| Producción formal | **10,6 millones de pares/año** | El Tiempo, ago-2026 |
| Dónde están | Bucaramanga, Floridablanca, Piedecuesta y parte de Girón | El Tiempo, ago-2026 |
| Exportaciones ene–may 2026 | US$14,4M · 922.000 pares (EE.UU. 25%, Ecuador 13%, Costa Rica 12%) | El Tiempo, ago-2026 |
| Producción abr-2025 → abr-2026 | **+1,8%** | El Tiempo, ago-2026 |

Aparte, existe el **clúster formal como programa** —que es un subconjunto mucho más pequeño y mucho
más accesible—:

| Dato | Clúster (programa) | Fuente |
|---|---|---|
| Empresas | **88** (84 locales + 4 externas con operación regional) | Alcaldía de Bucaramanga / IMEBU, abr-2026 |
| Empleos directos | 1.116 | ídem |
| Ventas 2024 | **$124.353 millones** | ídem |
| Exportaciones | $6.150 millones | ídem |

> **Esos 88 son la puerta, no el mercado.** Ventas de $124.353M entre 88 empresas dan un promedio de
> **~$1.413 millones al año por empresa** (~$118M/mes). Una suscripción de $500.000/mes es el
> **0,4% de la venta mensual promedio**. El tamaño no es el problema.

Y el contexto nacional explica el humor del sector: en Colombia se consumen ~120 millones de pares al
año y **sólo el 35% es producción nacional formal** — 33% importado, 27% informal, 5% contrabando. La
producción informal creció de 21 millones de pares (2022) a 25,5 millones (2023). ACICAM lo resume en
que el mercado es **altamente sensible al precio**.

**Lo que eso significa para nosotros, y es incómodo:** un sector que compite por precio contra
contrabando asiático **no compra software por moda**. Compra lo que baja el costo por par o lo que
evita perder un pedido de exportación. Cualquier pitch de «digitalización» rebota.

### 2.2 · El mercado que NO es mercado: la reparación de calzado

«Los zapateros que están por todos lados» son, en buena parte, **talleres de reparación** (CIIU 9523),
no fábricas. Para esos, la respuesta honesta es **no**:

- Ticket de servicio de $10.000–$40.000, operación de una o dos personas, informalidad casi total.
- No tienen el problema que un software resuelve: no manejan curva de tallas, ni satélites, ni
  órdenes de producción, ni costeo por referencia.
- Una suscripción de $290.000/mes es una fracción enorme de su utilidad mensual. **Ninguna versión de
  nuestro producto cabe ahí.**

> No lo pongo como descarte perezoso: lo pongo porque **es el que se ve por la ventana**, y por eso es
> el que uno se tienta a atacar. La densidad visible y la capacidad de pago no son la misma variable.

### 2.3 · El mercado que sí: la fábrica, y su dolor real

Los procesos que un ERP de calzado ataca —y que se repiten en toda la literatura del sector— son
cuatro, y ninguno tiene que ver con chat:

1. **Órdenes de producción por referencia × color × curva de tallas.** Un pedido no es «200 pares»:
   son 200 pares repartidos en una curva del 35 al 42 que hay que cortar, montar y despachar completa.
2. **Consumo de materia prima teórico vs. real.** El software registra el consumo de cuero real de
   cada orden y lo compara con el teórico de la ficha, para ver la desviación. Ahí está el
   desperdicio, y ahí está el margen.
3. **Los satélites.** El grueso del trabajo se subcontrata por etapa (corte, guarnición, montaje,
   terminado) a talleres externos que cobran por par. Controlar qué salió, qué volvió y qué se paga
   **sin pelea** es el problema operativo central. Un competidor lo vende con esas palabras: *«controla
   satélites sin disputas»*.
4. **Trazabilidad en planta.** Seguimiento en vivo por etapa (Corte → Guarnición → Montaje → Soldadura
   de suela → Terminado → Empaque), típicamente por QR.

### 2.4 · La competencia, que existe y está despierta

Esto es lo que baja el entusiasmo, y hay que verlo antes de invertir semanas:

| Quién | Qué ofrece | Señal |
|---|---|---|
| **PyloERP** | Satélites, curva de tallas, consumo por talla, matriz visual de stock 36–45 por referencia y bodega | Producto colombiano, ya resuelve el core |
| **Tikno** | 5 módulos (inventario, órdenes, planta por QR, calidad, despachos). Dice lograr **15–25% menos desperdicio** y **+30% cumplimiento de entregas** | 🔴 **Tiene un artículo dedicado a «Santander»**: ya está pescando en nuestro estanque |
| **SamDataSoft** | Control de producción, remisiones, códigos por talla/estilo/color para etiquetas de caja | Nicho, colombiano |
| **Distritok**, **Planeo**, **Gextia** | ERP textil-calzado | España, enlatados grandes |

> **Conclusión sin adornos: el calzado NO es un océano azul.** Hay producto colombiano que ya hace lo
> difícil. Entrar de frente a competir por funcionalidad de ERP con nuestro tamaño es perder.

### 2.5 · Dónde SÍ hay una rendija, y es específicamente nuestra

Tres cosas que los de arriba no tienen y nosotros sí:

1. **WhatsApp en el satélite.** El taller satélite **no va a entrar a un ERP web**. Pero ya vive en
   WhatsApp. «Reportá 40 pares terminados de la orden 1182» por WhatsApp, y que eso caiga en la
   trazabilidad de la fábrica, es exactamente nuestro stack —canal aprobado, multi-tenant, bot
   estructurado de negocio (no asistente abierto, que la política de Meta prohíbe)—. **Ese es el
   pedazo del problema que los ERP no cierran**, porque asumen que el proveedor se sienta en un
   computador.
2. **Estar acá.** Bucaramanga, Floridablanca, Piedecuesta y Girón: se puede ir a la fábrica el mismo
   día. Contra un enlatado español eso no es marketing, es implementación.
3. **La puerta institucional ya está abierta y con plata.** La **hoja de ruta 2026 del clúster**
   —firmada por Alcaldía, IMEBU y la Cámara de Comercio, que acaba de adoptar el clúster— incluye
   explícitamente **inversión en tecnología y equipos** y la **transformación digital de las
   fábricas**. Y el IMEBU ya corre **«Mi Empresa Crece» con 55 empresas de calzado**. Eso es un canal
   de distribución que no hay que construir: 88 empresas convocadas periódicamente por una entidad
   pública, con presupuesto de fortalecimiento.

**El ancla de precio**, con la lógica de `18 §6` (el reemplazo, no el costo): un auxiliar de
producción o de costeo cuesta ~$1.900.000/mes. Y la desviación de cuero de una fábrica que corta
10.000 pares al mes es plata de verdad. Un producto entre **$500.000 y $900.000/mes** cabe en esa
conversación. En una página publicada, sin embargo, **se habla en horas, no en pesos**, hasta que
`parametros.costoHoraOperativa` deje de estar marcado `supuesto`.

---

## 3. Restaurantes — la puerta no es el POS

### 3.1 · Los datos

| Dato | Valor | Fuente |
|---|---|---|
| Restaurantes en el área metropolitana | **~6.500 formales** (Cámara de Comercio), **~8.000** contando informalidad | prensa, ene-2026 |
| Cierres en Bucaramanga en 2025 | **45** | ACODRES |
| Cierres en Colombia en un año | **~2.000** | ACODRES |
| Nómina sobre costos operativos | **25%–35%** | ACODRES |
| Inflación Bucaramanga 2025 | **5,78%** — la más alta del país | Vanguardia |
| IVA de bebidas alcohólicas | pasó de **5% a 19%** | Vanguardia |

Sumado a la reforma laboral (§4.3), es un sector **en contracción de márgenes**. Eso corta en dos
direcciones: hay menos plata para gastar, pero hay **urgencia real** por cualquier cosa que baje un
costo grande y demostrable. Lo que no se vende ahí es «mejorá tu experiencia»; lo que se vende es
«dejá de pagar esto».

### 3.2 · Por qué el POS está muerto para nosotros

El precio de mercado del software de restaurante en Colombia en 2026 va de **$9.000 a $279.990/mes**:

- **Fudo:** $62.900/mes base; con todos los módulos relevantes (mesas, apps de domicilio, KDS,
  facturación) llega a ~$245.600/mes.
- **Siigo POS Gastrobar:** $87.494/mes (otra fuente reporta desde ~$99.993).

Nuestro plan más barato es **$290.000/mes**. Entrar a competir en POS significa llegar 3–4 veces por
encima del líder de precio, contra productos con años de camino, integraciones de plataformas y
soporte 24/7. **No.** Y hay una razón de fondo: el POS es **horizontal disfrazado de vertical** —
mismo producto para todo restaurante del país, guerra de precio garantizada. Es lo contrario del
playbook de `18 §3.3`.

### 3.3 · La puerta que sí sirve: la comisión de las apps

Los números de 2026:

- **Rappi cobra 27%–32%** del valor del pedido a restaurantes en Colombia (otras fuentes reportan
  25%–30%), **más** una comisión de plataforma de **$3.000–$8.000 por pedido**.
- El ejemplo trabajado que circula en el sector: pedido de **$35.000**, comisión del 27% = **$9.450**.
  El restaurante recibe $25.550, y tras insumos (35%), empaque y nómina proporcional le queda un
  margen real de **19,4% contra 46,4%** vendiendo por canal propio.
- La recomendación del propio sector es **50/50 entre apps y canal propio en 6–12 meses**.

**La aritmética del pitch** (ejemplo, no promesa): un restaurante que factura **$10.000.000/mes por
Rappi** con ticket de $35.000 hace ~286 pedidos y paga:

```
comisión 27%              $2.700.000
comisión por pedido       $  857.000  (286 × $3.000, extremo bajo)
                          ──────────
total al mes              $3.557.000   (y hasta ~$5.000.000 en el extremo alto)
```

Recuperar **una cuarta parte** de esos pedidos al canal propio libera **~$890.000/mes**. Una
suscripción de $370.000–$590.000 se paga sola una vez y media, y el cliente lo comprueba **con su
propio extracto**, no con una promesa nuestra.

> 🔴 **La honestidad que hay que mantener en ese pitch:** el ahorro **no es la comisión completa**. La
> comisión de Rappi incluye el domiciliario. El ahorro real es *comisión − costo de repartir por
> cuenta propia*, y **ese número no lo tenemos**. Prometerlo como neto sería exactamente la métrica
> sin fuente que `17 §3` prohíbe. Es lo primero que hay que medir.

### 3.4 · Y acá está lo que nadie más puede armar

**Ya tenemos los dos lados del problema:**

- El software de operación de domicilios, **en producción y pagado** (`domicilios-ops`, Bucaradomi).
- Y **Bucaradomi es una empresa de domicilios con flota**.

O sea: al restaurante no hay que venderle «montá tu propia flota» —que es la objeción que mata el
pitch de canal propio—. Se le vende **el canal propio con la flota resuelta**: SoltyAI pone la
plataforma, Bucaradomi reparte. Eso convierte el «costo de repartir por cuenta propia» de una
incógnita en un precio que se puede cotizar.

⚠️ **Dos cosas que verificar antes de moverse con esto**, y ninguna es opcional:

1. **Hablarlo con Bucaradomi primero.** Es cliente, no proveedor nuestro; llevarle restaurantes es una
   conversación comercial que él tiene que querer tener. Si además el contrato tiene la cláusula de
   *un negocio nuevo por bimestre* que aparece en la memoria de la renegociación —**no está en
   `clients/bucaradomi/contrato-trial-2026-07.md`, hay que confirmarlo contra la propuesta firmada en
   la suite**—, esto la cumple en vez de pelearla.
2. **Zonas y capacidad.** Un restaurante en Cabecera y uno en Girón no son el mismo problema de flota.

### 3.5 · El tercer ángulo, que es de cumplimiento

El **tiquete POS de papel ya no existe**: desde julio de 2024 es **Documento Equivalente Electrónico
(DEE)**, sin límite de valor y **transmitido a la DIAN en tiempo real**. Seguir imprimiendo papel sin
transmitir expone a multas de hasta **950 UVT = $49.755.300** (UVT 2026: $52.374) o cierre del
establecimiento.

**Cómo NO jugarla:** construyendo facturación electrónica. Hay **más de 80 proveedores tecnológicos
habilitados** por la DIAN y ser uno de ellos tiene requisitos técnicos, financieros y de seguridad.
Nosotros estamos habilitados como **facturador electrónico de nuestras propias facturas** (prefijo
`SOL`), que **no es lo mismo** y no autoriza a facturar por terceros.

**Cómo sí:** el cumplimiento entra **integrado por Factus** —que ya es proveedor autorizado y con el
que la suite ya está integrada— como **parte del paquete**, nunca como el producto. Es el argumento
que abre la puerta («¿ya estás transmitiendo tus tiquetes?»), no la cosa que se vende.

---

## 4. Los otros terrenos — el filtro es la FECHA, no el sector

Buscando «dónde hay demanda de software» aparece de todo. El filtro que hace la investigación útil es
este:

> **Un sector con una obligación legal, con calendario y con multa, produce compradores que ya
> decidieron comprar. Lo único que están eligiendo es a quién.** Eso reduce el trabajo de venta de
> «convencerte de que esto importa» a «acá está la solución», que es un ciclo mucho más corto — y con
> el runway que hay, el ciclo de venta es la variable que manda.

Aplicado, quedan estos:

| Terreno | La fecha / la multa | Veredicto |
|---|---|---|
| **Salud — FEV + RIPS** | Obligatorio para el **100% de prestadores desde jun-2025**. **Resolución 948 de 2026** (MinSalud, 14-may-2026) reafirma RIPS como soporte obligatorio de la factura y el MUV como validador. La EPS **rechaza el pago** si no hay RIPS dentro de los 5 días hábiles tras el cierre de mes. Supersalud: multas hasta **5.000 SMLMV** y suspensión de habilitación | 🟢 **Candidato fuerte** |
| **Transporte de carga — RNDC** | Desde el **1-may-2026** son obligatorios los formatos únicos de manifiesto electrónico y de cumplido (Res. 20263040016075). El **Decreto 1017 de 2025** exige reportar tiempos logísticos reales por sistemas de monitoreo de flota | 🟢 **Candidato, y encaja con lo que ya sabemos hacer** |
| **Nómina electrónica / reforma laboral** | Obligatoria para prácticamente todo empleador; transmisión en los primeros 10 días hábiles del mes siguiente. Sanciones: 1% (tope 7.500 UVT) por no enviar, 0,7% con errores, 0,5% extemporánea, **más pérdida de deducibilidad** del gasto de nómina | 🟡 **Como módulo, nunca solo** |
| **Propiedad horizontal (Ley 675)** | Sin fecha nueva | 🔴 **Descartado por precio** |
| **Contable (documento DIAN → asiento)** | Ya es producto propio | ➡️ Ver `contable/` |

### 4.1 · Salud (FEV + RIPS) — por qué es el más interesante

- El dolor es **de cobro, no de cumplimiento**: si el RIPS no cuadra, la EPS **no paga**. Eso convierte
  el software en cartera, que es el argumento más fácil de vender que existe.
- El más golpeado es el **consultorio independiente y la IPS pequeña**, que no tiene con quién.
- **Y encaja con un motor que ya construimos:** `contable/` ya es «documento electrónico DIAN → asiento
  contable», determinista primero. La mecánica de validar estructura, cruzar contra la factura y
  cantar la excepción es **la misma forma** del problema RIPS.

⚠️ **Los frenos, que son serios:** es un sector regulado con **datos sensibles de salud** (habeas data
e historia clínica), lo que sube el requisito de contrato y de infraestructura por encima de todo lo
que hemos hecho; y hay proveedores establecidos (SaludTools, Medifolios, softwares médicos). No es un
frente para abrir con el runway corto — es el que se explora **después** del primero que produzca caja.

### 4.2 · Transporte de carga (RNDC)

Encaja con lo que ya construimos —operación, despachos, estados en vivo, seguimiento— y Santander es
corredor de carga. La obligación de mayo de 2026 es reciente, o sea que **hay empresas que todavía no
la resolvieron**. Es el más cercano a `domicilios-ops` en forma. Va a la lista, detrás de restaurantes.

### 4.3 · Reforma laboral — no es un producto, es un argumento de venta

La **Ley 2466 de 2025** cambió dos cosas que le pegan directo a restaurantes, comercio y hotelería:

- **Recargo nocturno del 35% desde las 7:00 p.m.** (antes 9:00 p.m.), vigente desde el **25-dic-2025**.
  Dos horas más de recargo, todos los días.
- **Recargo dominical y festivo del 80% → 90%** desde el **1-jul-2026**. Colombia tiene más de 18
  festivos al año.
- Jornada de 42 horas.

Con la nómina en 25%–35% de los costos de un restaurante, esto es un golpe medible. **Pero no
construyas un software de nómina**: ahí están Siigo, Alegra, Buk y Symplifica, y es horizontal puro.
Lo que sí es nuestro es la **programación de turnos que simula el costo antes de programarlo** — un
módulo dentro de un vertical, no un producto. Y sobre todo: es **la frase que abre la llamada** con
cualquier restaurante hoy.

### 4.4 · Propiedad horizontal — descartado, con el número que lo descarta

Denso en Bucaramanga y con norma propia (Ley 675 de 2001), pero el precio de mercado lo mata:

- **Resia:** desde **$800 por unidad al mes** — un conjunto de 100 apartamentos paga **$80.000/mes**. Y
  tiene **plan gratuito permanente hasta 50 unidades**.
- **Vecindapp:** asambleas desde $299.000 (evento), citofonía virtual desde $99.000/mes.

Para llegar a nuestro piso habría que vender conjuntos de 400+ unidades contra un competidor que
regala el escalón de entrada. **No.**

### 4.5 · El contexto que explica por qué esto es difícil en general

- **37% de las pymes colombianas no tiene previsto digitalizarse en 2026.**
- Sólo **4 de cada 10 microempresas** alcanza un nivel básico de madurez digital (iNNpulsa).
- **36,6% destina menos del 10%** de su presupuesto anual a tecnología, y esa cifra no se ha movido en
  tres años.
- Pero **66% ya usa alguna solución de IA** — o sea que la barrera no es el miedo a la tecnología: es
  el presupuesto y la prioridad.

**La lectura útil:** no se vende «digitalización» a quien no tiene plan de digitalizarse. Se vende
**una obligación que hay que cumplir o una plata que se está yendo**. Los dos primeros hallazgos de
este doc son exactamente eso.

---

## 5. Recomendación — el orden, y qué cuesta cada paso

Con el runway que hay, el criterio no es «cuál es el mercado más grande» sino **«cuál produce una
factura primero con lo que ya está construido»**.

### Ahora (semanas 0–6) · Restaurantes por el canal propio de domicilios

- **Por qué primero:** cero construcción. `domicilios-ops` está en producción y pagado. El pitch se
  calcula con el extracto de Rappi del propio cliente. 6.500 puertas formales acá mismo.
- **Los pasos, en orden:** (1) hablar con Bucaradomi sobre la flota y confirmar la cláusula del
  contrato; (2) **medir el costo de repartir** para poder decir un número honesto; (3) sacar la lista
  real de Compite 360 / Datos Abiertos filtrando restaurantes del AMB; (4) 20 conversaciones.
- **Riesgo:** que el ahorro neto contra la flota propia no dé. **Si no da, se sabe en la semana 2 y no
  se gastó nada** — que es justamente por qué va primero.

### En paralelo, y sólo descubrimiento (semanas 0–8) · Calzado

- **Nada de código.** 10 visitas a fábricas del clúster, buscando responder §6. La puerta institucional
  (IMEBU / Cámara de Comercio / hoja de ruta 2026) es la forma barata de conseguir esas 10.
- **La pregunta que decide todo:** *¿el problema de los satélites está resuelto con los ERP que ya
  existen, o el satélite sigue reportando por WhatsApp y a mano?* Si es lo segundo, hay producto. Si es
  lo primero, se cierra el frente sin pena.

### Después (y no antes de que uno de los dos produzca caja) · RNDC o Salud

Se elige con lo que haya aparecido, no ahora.

### Nunca

Zapaterías de reparación · POS de restaurante · software de propiedad horizontal · nómina horizontal.
Cada uno con su razón escrita arriba, para que no se re-abran por intuición dentro de dos meses.

> **Y la regla que ya existe y aplica sola a todo esto:** `canon.json → tablero.cortePorVertical` —
> *si a los 90 días una vertical no pasa el 4% de respuesta sobre al menos 150 contactados, se cambia
> de vertical*. No se retrabaja el copy por cuarta vez. Esta investigación **no crea una excepción**.

---

## 6. Lo que hay que ir a preguntar (y sin lo cual no se construye nada)

Cinco preguntas por vertical. Si al terminar 10 entrevistas no hay una respuesta repetida, no hay
producto.

**Calzado:**
1. ¿Cómo sabés hoy cuántos pares te debe cada satélite, y cuándo te enterás de que no cuadró?
2. ¿Cuánto cuero se te va en desviación al mes, y cómo lo medís?
3. ¿Qué usás hoy: Excel, un ERP, un cuaderno? Si es un ERP, ¿qué no te resuelve?
4. ¿Cuánto le pagás al mes a la persona que hace ese control?
5. ¿Perdiste alguna vez un pedido por no despachar la curva completa a tiempo?

**Restaurantes:**
1. ¿Cuánto te facturó Rappi el mes pasado en comisión? *(que abra la app; sin ese número no hay venta)*
2. ¿Qué porcentaje de tus pedidos entra por app y qué porcentaje por WhatsApp o teléfono?
3. Los pedidos que ya entran por WhatsApp, ¿quién los toma y cómo los despacha?
4. ¿Tenés domiciliarios propios? ¿Cuánto te cuestan al mes, todo incluido?
5. ¿Ya estás transmitiendo tiquetes electrónicos a la DIAN?

---

## 7. Lo que este doc NO autoriza

- **No mueve ningún precio.** La D1 sigue siendo `canon.json` + `catalogo.json`.
- **No agrega productos al catálogo.** `18 §8`: nada se cotiza si no está en `catalogo.json`.
- **No cambia el mensaje líder de ningún canal.** Sumar verticales no autoriza el «también hacemos».
- **No publica ninguna cifra de este doc en una página.** Son cifras de prensa sobre terceros; las
  nuestras siguen siendo sólo las verificables (contrato, factura, sistema en producción).
- **No abre dos frentes de construcción a la vez.** Sigue vigente: un proyecto de servicio simultáneo.

---

## Fuentes

**Calzado**
- [Clúster de Calzado y Marroquinería trazó su hoja de ruta 2026 — Alcaldía de Bucaramanga](https://www.bucaramanga.gov.co/noticias/cluster-de-calzado-y-marroquineria-trazo-su-hoja-de-ruta-2026-con-apoyo-institucional/)
- [Hoja de Ruta 2026 para el clúster del calzado y la marroquinería en Bucaramanga — Corrillos](https://www.corrillos.com.co/hoja-de-ruta-2026-para-el-cluster-del-calzado-y-la-marroquineria-en-bucaramanga/)
- [Santander es el segundo clúster de calzado y marroquinería del país — El Tiempo](https://www.eltiempo.com/colombia/santander/santander-es-el-segundo-cluster-de-calzado-y-marroquineria-en-el-pais-y-sigue-siendo-referente-a-nivel-nacional-e-internacional-asi-estan-las-cifras-3574414)
- [«Mi Empresa Crece» fortalecerá 55 empresas del sector calzado — IMEBU](https://imebu.gov.co/mi-empresa-crece-fortalecera-55-empresas-del-sector-calzado-en-bucaramanga/)
- [El calzado colombiano pierde terreno: importaciones baratas e informalidad — Infobae](https://www.infobae.com/colombia/2025/12/21/el-calzado-colombiano-pierde-terreno-importaciones-baratas-e-informalidad-ya-dominan-mas-del-60-del-mercado/)
- [Industria del calzado pierde participación: alerta de ACICAM — Valora Analitik](https://www.valoraanalitik.com/industria-calzado-alerta-acicam/)
- [PyloERP para Calzado](https://pyloerp.com/calzado/) · [Tikno — Software de producción de calzado en Santander](https://tikno.pro/blog/software-gestion-produccion-calzado-santander) · [SamDataSoft](https://samdatasoft.wixsite.com/inicio) · [Distritok](https://www.distritok.com/aplicaciones/sectores/fabricantes-zapatos-calzado/)

**Restaurantes**
- [Crisis de la gastronomía en Bucaramanga: van 45 restaurantes cerrados — El Frente](https://elfrente.com.co/crisis-de-la-gastronomia-en-bucaramanga-se-cuece-a-fuego-lento-van-45-restaurantes-cerrados/)
- [En un año, más de dos mil restaurantes cerraron en Colombia (ACODRES) — El Tiempo](https://www.eltiempo.com/colombia/santander/en-un-ano-mas-de-dos-mil-restaurantes-cerraron-en-colombia-dice-acodres-en-jaque-esta-el-sector-gastronomico-que-pide-salvarse-al-gobierno-3526642)
- [Restaurantes de Bucaramanga: así golpean la inflación y la reforma laboral — Vanguardia](https://www.vanguardia.com/area-metropolitana/bucaramanga/2026/01/18/restaurantes-de-bucaramanga-asi-golpean-la-inflacion-y-reforma-laboral/)
- [Software para restaurantes: precios Colombia 2026 — Warocol](https://warocol.com/blog/software-para-restaurantes-precio)
- [Comisiones Rappi, PedidosYa y Uber Eats 2026 — GDA](https://blog.growthdeliveryapp.com/es/blog/comisiones-rappi-pedidosya-uber-eats)
- [Rappi para restaurantes: cómo integrar pedidos sin perder el margen — Bibisoft](https://bibisoft.co/rappi-restaurantes-colombia)
- [Factura electrónica para restaurantes en Colombia 2026 — Warocol](https://warocol.com/blog/facturacion-electronica-restaurante-colombia)
- [Documentos equivalentes electrónicos 2026 — Cuenti](https://cuenti.com/software-contable/documentos-equivalentes-electronicos-2026-guia-de-automatizacion/)

**Otros terrenos**
- [Resolución 948 de 2026 — MinSalud (PDF)](https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-0948-de-2026.pdf) · [Guía RIPS y FEV — Software Médico](https://softwaremedico.com.co/resolucion-948-de-2026/) · [Facturación electrónica en salud 2026 — SaludTools](https://www.saludtools.com/articulo/facturacion-electronica-salud-2026-dian)
- [Resolución 20263040016075 de 29-04-2026 — MinTransporte (PDF)](https://mintransporte.gov.co/info/mintransporte/media/anexos/dx2Es4bu.pdf) · [Manifiesto de carga 2026: qué exige el RNDC — Ofima](https://www.ofima.com/blog/manifiesto-de-carga/) · [RNDC en 2026: cambios regulatorios — Tractocar](https://tractocar.com/rndc-en-2026-cambios-regulatorios-y-como-afectan-al-generador-de-carga/)
- [Nómina electrónica 2026: plazos y sanciones — N1](https://n1.app/blog/nomina-electronica-2026-colombia-plazos-sanciones) · [Nómina electrónica DIAN 2026](https://dian.com.co/nomina-electronica-dian-2026/)
- [Nuevo recargo nocturno con la reforma laboral — Buk](https://www.buk.co/blog/nuevo-recargo-nocturno-con-reforma-laboral) · [Reforma laboral: los dos cambios de julio de 2026 — Gestión Legal Colombia](https://gestionlegalcolombia.com/reforma-laboral-colombia-julio-2026-42-horas-recargo-dominical/)
- [Precios y planes 2026 — Vecindapp](https://vecindapp.com.co/precios/) · [Resia — software de propiedad horizontal](https://resia.cloud/)
- [37% de las pymes colombianas sigue sin plan digital para 2026 — ACIS](https://www.acis.org.co/blog/noticias-2/con-un-nuevo-congreso-37-de-las-pymes-colombianas-sigue-sin-plan-digital-para-2026-7252) · [DPL News](https://dplnews.com/colombia-37-de-las-pymes-sigue-sin-plan-digital-para-2026/)
- [Precios de software contable en Colombia 2026](https://programascontabilidad.com/comparativas-de-software/precios-de-software-contable-colombia-2026/)
- [Proveedor Tecnológico DIAN Colombia 2026 — Facele](https://facele.co/proveedor-tecnologico-dian-colombia-2026/) · [Requisitos de software de facturación — Concepto DIAN 13246 de 2025](https://www.gydconsulting.com/requisitos-software-facturacion-electronica-dian/)

**Fuentes primarias que NO se usaron y son el siguiente paso**
- [Base de datos de empresas — Cámara de Comercio de Bucaramanga (Datos Abiertos)](https://www.datos.gov.co/Estad-sticas-Nacionales/BASE-DE-DATOS-DE-EMPRESAS-CAMARA-DE-COMERCIO-DE-BU/wf53-j577/data)
- [Informes sectoriales — Cámara de Comercio de Bucaramanga](https://www.camaradirecta.com/actualidad-empresarial/informes_sectoriales)
