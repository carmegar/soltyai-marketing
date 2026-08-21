# 17 · RECONCILIACIÓN DE CONTENIDO — qué decía cada plano, y qué dice ahora

> **Auditoría y ejecución del 2026-08-21.** Arranca de una sospecha del fundador: *«la página y
> algunos otros espacios entre la documentación no están conciliados bajo la misma estrategia»*.
> La sospecha era correcta y se quedaba corta. Este doc es el inventario de lo que se encontró, lo
> que se arregló hoy y lo que queda, con nombre y archivo.
>
> El insumo estratégico es `investigacion_de_venta.md`; el guion que salió de él,
> `business/26-guion-de-descubrimiento.md`. Este doc es **dónde se publica cada cosa**.

---

## 1. El resumen en una tabla

Nueve hallazgos. La columna de la derecha dice si quedó cerrado hoy.

| # | Hallazgo | Gravedad | Hoy |
|---|---|---|---|
| **H1** | La landing publicaba un **caso de éxito falso** con nombre de empresa real y testimonial inventado | 🔴 la más grave | ✅ reemplazado |
| **H2** | El **Hero de servicios** publicaba tres métricas inventadas | 🔴 | ✅ reemplazado |
| **H3** | **`Growth Marketing con IA`**: línea de negocio publicada y cotizable que no existe en el catálogo | 🔴 | ✅ en landing y canon · ⏳ falta la suite |
| **H4** | La línea que **más factura** se publicaba como el sobrante del producto, en `/agencia` | 🟠 | ✅ movida a `/servicios` y reencuadrada |
| **H5** | El **catálogo de producción** nunca recibió la D1: 3 planes del canon no existen, 7 legacy en USD siguen cotizables | 🔴 | ⏳ pide aprobación |
| **H6** | **Diagnóstico gratis** publicado, contra la decisión de que sea pagado | 🟠 | ✅ retirado y prohibido |
| **H7** | El **snapshot del canon** de la landing estaba 8 días atrasado: el cambio del 17-ago nunca llegó | 🟠 | ✅ refrescado |
| **H8** | El **piso de precio** del canon contradecía dos líneas del catálogo | 🟡 | ✅ aclarado |
| **H9** | No existía **escalón de entrada** ni **línea recurrente** para el servicio | 🟠 | ✅ ambos en el catálogo |

---

## 2. H1 — el caso de éxito falso *(lo más grave que se encontró)*

**Qué publicaba `CaseStudy.astro`**, en la página de servicios, desde junio:

- Título: «**Promatel**: Automatización de Atención Comercial».
- Cuatro métricas: **85%** de reducción en tiempo de respuesta · **+200** consultas atendidas por
  semana · **4 hrs/día** recuperadas · 24/7.
- Un **testimonial entre comillas**: *«Antes perdíamos clientes porque no respondíamos a tiempo.
  Ahora el bot atiende en segundos…»*, firmado «— **Equipo Comercial, Promatel**».

**Qué dicen nuestros propios documentos sobre Promatel:**

- `business/estrategia/02-portafolio.md:16` → *«Chatbot FSM + SISPRO. **70% completo, bloqueado en
  credenciales del cliente**. Uso estratégico: motor FSM reutilizable, no producto directo.»*
- `business/24-coherencia-producto-empresa.md:44` → lista su carpeta entre las **«carpetas de
  proyectos muertos»**.

O sea: **el sistema nunca atendió a un solo cliente.** Las cuatro métricas son de algo que no
existió, y el testimonial son palabras que el equipo de una empresa real nunca dijo.

**Por qué esto no es un problema de copy.** `canon.prohibiciones.pruebaSocialInventada` existe
justamente para esto y nombra las dos únicas referencias que podemos usar: Bucaradomi y
Swisscontact. Pero acá hay algo peor que incumplir una regla interna: es una afirmación falsa sobre
un **tercero identificado con nombre propio**, publicada en un sitio indexado, con una cita
fabricada. Y destruye precisamente el argumento sobre el que descansa toda la línea de servicio,
que es que somos verificables.

> ⚠️ **Y el motivo por el que sobrevivió tres meses es el que hay que recordar:** el guardrail de la
> landing sí corre, pero su patrón dice `(clientes|empresas|negocios|proyectos)` y esta pieza decía
> «flujos» y «consultas». **La regla estaba; el patrón no la alcanzaba.** Es el mismo modo de fallo
> del `CLAUDE.md` que decía que el CI aplicaba `mensajeLider` cuando no: una guarda que se cree
> puesta es peor que ninguna.

**Qué quedó en su lugar:** el caso Bucaradomi, **sin una sola métrica de rendimiento**, porque no
las hemos medido. Sólo hechos con testigo: contrato firmado, factura electrónica emitida, sistema
en producción con dominio propio, y las dos aplicaciones que existen. Más una oferta que ningún
competidor con casos inventados puede hacer: *«si quieres hablar con ellos antes de contratarnos,
lo coordinamos»*.

---

## 3. H2 — las tres cifras del Hero

Decía **«+50 flujos automatizados»**, **«98% uptime garantizado»** y **«<24h tiempo de respuesta»**.
No hay 50 flujos; el SLA que sí firmamos es **99%**, no 98 (`catalogo → domicilios-ops.sla`); y
nadie mide ese «<24h». Se reemplazaron por tres hechos que cualquiera puede verificar: la SAS está
constituida (matrícula CCB 731655), la facturación electrónica DIAN está habilitada, y hay clientes
en producción.

**La regla que sale de H1 y H2, y que vale para todo lo que se publique de acá en adelante:**

> Un número en una página publicada lleva **fuente** o no va. Y si la fuente somos nosotros, lleva
> **fecha de medición**. «Todavía no lo hemos medido» es una frase publicable; una cifra inventada
> no.

---

## 4. H3 — el servicio fantasma

`Growth Marketing con IA` se publicaba en la landing (12 a 20 piezas al mes, gestión de pauta en
Meta y Google Ads, reporte mensual de ROI) y existía en el catálogo de producción de la suite como
`05-marketing-starter`, a **US$480/mes**.

**No estaba en `canon.json` ni en `catalogo.json`.** Una línea de negocio entera sin costo de
servir, sin margen mínimo y sin ninguna regla que la gobernara — exactamente lo que la decisión D1
vino a impedir.

Y hay una segunda razón, más incómoda: **prometía gestionar pauta que nosotros mismos no sabemos
gestionar todavía.** El píxel propio sigue en `G-XXXXXXXXXX` y el carril de Meta está relegado
justamente por no tener creatividad ni medición (`15-CANALES §1`, razón 3). Vender la competencia
que uno no tiene es la forma más rápida de perder el primer cliente que la compre.

**Qué se hizo:** salió de la landing, entró la prohibición `servicioFantasma` al canon (con su
patrón, su porqué y sus exenciones), y en su lugar quedó `soporte-evolutivo`, que sí está en el
catálogo y sí sabemos entregar porque es lo que ya hacemos con el piloto.

**Lo que falta:** desactivar `05-marketing-starter` en la suite. Ver §8.

---

## 5. H4 — la línea que factura estaba publicada como el sobrante

La página del servicio a la medida vivía en **`/agencia`**, `/servicios` era un **302 hacia ella**,
y arriba de todo tenía una banda que decía: *«¿Tu caso no cabe en nuestros planes de producto?»*.

Tres cosas mal, y ninguna es cosmética:

1. **La jerarquía estaba invertida.** Desde el 17-ago el servicio a la medida es el mensaje líder en
   Google, el GBP **y todo el orgánico**, porque es la línea que factura y sostiene el runway. La
   página lo presentaba como el plan B del producto.
2. **La URL peleaba con el canal.** El carril pago que se abre para esta línea es Google Search, y
   lo que se busca es *«desarrollo de software a la medida»*, no *«agencia»*.
3. **La URL peleaba con el canon.** `mensajeLiderPorCanal.vocabulario.servicio` dice «estudio de
   desarrollo» y **nunca** «agencia», y hay un pendiente abierto para que SoltyAI deje de leerse
   como agencia genérica. Publicar `/agencia` lo contradecía desde la barra de direcciones.

**Qué se hizo:** la página es ahora `/servicios`, `/agencia` quedó como **301** (no se borra: está
en el sitemap desde junio), y la banda de cruce dejó de ser una disculpa: las dos líneas se cruzan
como pares. El `<title>` y la descripción se reescribieron para la intención de búsqueda real, y el
`source` del formulario pasó de `landing-agencia` a `landing-servicios`.

> Con esto queda cerrado el bloqueo que `15-CANALES §3` le ponía al carril de Google Search:
> *«landing de servicio»*. Ya existe, y no es la home del bot.

---

## 6. H6 a H9 — los otros cuatro

**H6 · Diagnóstico gratis.** La landing ofrecía «Agendar Diagnóstico Gratuito · reunión de 15
minutos» en cuatro sitios, mientras el diagnóstico pasaba a ser un producto pagado. Además decía 15
minutos y el evento real del Calendly es de **30**. Se retiró en los cuatro, entró la prohibición
`diagnosticoGratis`, y quedó dicho con precisión qué sí es gratis: **la primera llamada**. Escuchar
no cuesta; diagnosticar sí.

**H7 · El snapshot atrasado.** `platform/apps/landing/src/data/canon.snapshot.json` estaba copiado
del 13-ago con la fecha del 04-ago, contra un canon del 20. La deriva concreta: su
`mensajeLiderPorCanal` todavía tenía el orgánico en `bot`. **La decisión del 17-ago nunca llegó a la
landing.** Refrescado con `node tests/guardrails.mjs --refrescar`.

> El archivo documenta su propia limitación con una honestidad que hay que reconocer: *«esto es una
> COPIA, no una referencia viva… el CI sigue en verde contra una versión vieja y no avisa nada»*.
> Saberlo no lo arregla: mientras siga siendo copia manual, va a volver a pasar. Queda pendiente.

**H8 · El piso de precio.** El canon decía `pisoPrecio: 3.000.000` para «la línea de servicios», y
el catálogo tiene `web-corporativa` en $1.500.000 y `web-redespliegue` en $750.000 dentro de esa
misma línea. El catálogo **sí** tenía la excepción escrita (`excepcionPisoWeb`); el canon no. Quien
leyera sólo el canon concluía que se estaba vendiendo por debajo del mínimo. **No cambió ningún
precio:** se nombró a qué aplica el piso (`_alcanceDelPiso`).

**H9 · Los dos escalones que faltaban.** Entre la suscripción más cara ($790.000/mes) y el piso del
proyecto ($3.000.000) no había nada, y el proyecto no tenía **ninguna** línea recurrente detrás:
Swisscontact entregó $2.300.000 y después $0/mes. Entraron al catálogo, los dos marcados
`supuesto` porque nadie los ha pagado todavía:

| Nuevo | Precio | Qué resuelve |
|---|---|---|
| `diagnostico-automatizacion` | **$600.000**, se descuenta 100% del proyecto si contratan en 30 días | El escalón de entrada. Su trabajo no es facturar: es **descalificar barato** |
| `soporte-evolutivo` | **$490.000/mes** | Que el proyecto deje de ser un ingreso de una sola vez |

> 🔴 **Los dos precios son decisiones comerciales sin un solo caso vendido detrás**, y por eso salen
> marcados en amarillo en toda cotización. La construcción de cada uno está escrita en su campo
> `fuente` del catálogo, incluida la razón por la que **no** se usó la banda internacional de la
> investigación: son rate cards para cliente de EE.UU., no disposición a pagar de una pyme de
> Bucaramanga.

---

## 7. Lo que la auditoría dice del sistema, no de las piezas

Tres patrones, y los tres se repiten:

**1. La deriva entra por donde la copia es manual.** El snapshot del canon, el catálogo de la suite
y los docs de estrategia derivaron por el mismo mecanismo: alguien tiene que acordarse de copiar.
Lo que no derivó nunca fue lo que se lee en vivo (`src/catalogo` leyendo `catalogo.json`). La
lección no es «acordarse más»: es que **cada copia manual es una fecha de vencimiento**.

**2. Una guarda con el patrón equivocado se ve igual que una guarda.** El caso Promatel pasó tres
meses bajo un linter que corría en cada build. Nadie se equivocó al escribir la regla; el patrón
simplemente no alcanzaba a la pieza. Es la versión de contenido de lo que
`security/hallazgos/2026-08-18` cuenta del backup: **no preguntar «¿corrió el chequeo?» sino
«¿existe hoy el resultado que el chequeo debía producir?»**.

**3. Lo que no está en el catálogo se publica igual.** `Growth Marketing` y el caso Promatel
llegaron a producción sin pasar por ninguna decisión registrada. La regla nueva
(`nada se cotiza si no está en catalogo.json`) cierra la puerta hacia adelante, pero la que la hace
cumplir es el guardrail, no la buena intención.

---

## 8. Lo que queda — y por qué no se hizo hoy

**El catálogo de producción de la suite** (pendiente `cmsz6eq2s…`, vencía el 21-ago). Es el plano
más desalineado de todos y el único que **escribe en datos reales**, así que va con aviso previo y
aprobación explícita (regla cero). Estado verificado hoy contra producción:

| Qué | Estado |
|---|---|
| Los 3 planes del canon (Esencial / Pro / Premium) | **No existen** como producto |
| 7 productos legacy en USD (`01-agenda` … `07-integracion`) | **Activos y cotizables** |
| `05-marketing-starter` (US$480/mes) | **Activo** — es el gemelo del servicio fantasma |
| `08-domicilios-ops`, `09` a `11` (web) | Al día, en COP, con alcance y SLA |
| `diagnostico-automatizacion`, `soporte-evolutivo` | No existen todavía |

Lo demás que queda abierto, en el tablero: el snapshot del canon sigue siendo copia manual (H7); el
guardrail de la landing necesita patrones que cubran métricas y no sólo conteos de clientes (H1); y
falta decidir con el contador si una SAS en RST puede facturar servicios al exterior, que es la
única forma de capturar el arbitraje de precio que describe la investigación sin abrir una LLC.

---

## Relacionados

`investigacion_de_venta.md` (el insumo) · `business/26-guion-de-descubrimiento.md` (qué se dice en
la reunión) · `15-CANALES-Y-SECUENCIA.md` (en qué orden se encienden los canales) ·
`business/24-coherencia-producto-empresa.md` (la D1, de donde sale la regla de los planos) ·
`data/canon.json` y `data/catalogo.json` (todo lo de arriba, en máquina).
