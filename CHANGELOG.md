# Changelog · soltyai-marketing

## 2026-08-22 — arquitectura de oferta: el único cliente que paga no compró nada de lo que publicamos

Nace de una pregunta del fundador sobre el pricing (*«habíamos dicho que no iba a haber pricing para
productos porque todo es bajo cotización, ¿piensas que no debe ser así?»*) con encargo explícito de
investigar en internet qué hacen otros. La pregunta literal tenía respuesta corta; lo que apareció al
verificarla no.

### La respuesta a la pregunta: esa decisión ya estaba tomada, y está bien

`business/24:131`, **D7** del 3-ago: *«La landing publica los 3 planes… Decisión del usuario. El
precio deja de ser "por cotización": filtra curiosos y acorta el ciclo.»* Verificado contra el sitio
vivo: la home y `/precios` publican $290k/$490k/$790k; `/servicios` no publica nada. Ya es híbrido, y
la evidencia externa lo respalda — «contact for pricing» tiene **~38% más rebote**, y los productized
services rinden **30–40% mejor margen** que cotizar cada caso.

### 🔴 El hallazgo: lo que se publica arriba de todo no es lo que alguien está pagando

**Bucaradomi paga $370.000/mes IVA incluido.** Eso es `domicilios-ops`: dashboard de operador + PWA de
domiciliarios + hosting + backups + soporte, con precio verificado por contrato `SAI-DOMIOPS-20260703-001`
y factura `SOL1`. Y con esta línea textual en el catálogo: **«Sin chat automático y sin IA por
conversación (está fuera del alcance del plan)»**. Sin setup, además: `setup_fee_cop = 0`.

Junto a eso: los **3 planes de bot publicados tienen cero clientes**, 10 de los 13 productos del
catálogo están marcados `supuesto`, y en la home «Domicilios y logística» sale como **vertical del
chatbot** — describiendo un producto que no es el que se vende.

O sea: **el único cliente que paga no compró un chatbot.** Compró software operativo vertical.

**Y la lección de sistema es la de siempre:** la D1 vigila que los precios no diverjan entre planos, y
funciona. Lo que ninguna regla vigila es la pregunta anterior — *¿lo publicado arriba de todo es lo
que alguien paga?*. Misma forma que el backup de las nueve noches: preguntar por el proceso, no por el
resultado.

### Lo que quedó decidido — `18-ARQUITECTURA-DE-OFERTA.md` (nuevo)

Tres líneas con trabajos distintos, y el bot deja de abrir:

| | Qué es | Su trabajo | Precio |
|---|---|---|---|
| **L1** | Producto vertical (`domicilios-ops`) | renta recurrente y **réplica** | público, $370k/mes |
| **L3** | Servicio a la medida | **caja hoy** | «desde $3.000.000» |
| **L2** | Bot por suscripción | entrada barata | público (ya está) |

La regla que queda: **lleva precio público lo que tiene alcance cerrado, lleva «desde» lo que se
cotiza, y nada lleva silencio.** Bucaradomi pasa de «el piloto» a **lighthouse customer** del playbook
de réplica vertical (35–60% más retención que el horizontal; el modelo servicio→producto tarda 1–3
años en el 43% de los casos).

⚠️ **No se movió ningún precio.** Lo que cambia es qué se publica, en qué orden y con qué historia.

### La tanda 1 de video se reordenó ANTES de grabarse

**7 de los 10 guiones eran de la línea `bot`** y abrían en LinkedIn, donde el canon manda `servicio`
desde el 17-ago. Nada lo iba a cazar: el guardrail `mensajeLider` **excluye `redes/` a propósito**
(`src/guardrails/reglas.js`) — tercera repetición del modo de falla de Promatel y del backup, la regla
existe y el patrón no alcanza la pieza.

Orden nuevo: abre **#1 domicilios (L1, evidencia = el piloto de Bucaradomi)**, siguen los tres de «a la
medida» (L3) en LinkedIn, y los seis de bot van a IG + TikTok. **Ningún guion se reescribió**; cada
bloque conserva anotado su número viejo.

### También

- `15-CANALES-Y-SECUENCIA.md` §5 — el orgánico deja de liderar con «servicio» a secas: primero L1,
  después L3. El razonamiento del 17-ago no se cae, se completa.
- `16-CONTENIDO-VIDEO.md` — nota del reordenamiento en el encabezado.
- **GBP destrabado sin gastar un peso:** el teléfono es **campo opcional**; lo que Google pide en 2026
  para un negocio de área de servicio es **verificación por video**, no una línea. El motivo por el que
  llevaba dos días vencido («son más gastos operacionales») no existía.

## 2026-08-21 — la auditoría de reconciliación: nueve hallazgos, y un caso de éxito que era falso

Nace de una sospecha del fundador (*«la página y algunos otros espacios entre la documentación no
están conciliados bajo la misma estrategia»*) y de `investigacion_de_venta.md`, una investigación
de mercado que aportó él. La sospecha era correcta y se quedaba corta: salieron **nueve**
hallazgos, en `17-RECONCILIACION-CONTENIDO.md`.

### El peor no era una incoherencia

La landing publicaba, desde junio, un caso de éxito de **Promatel** con cuatro métricas (85% de
reducción en tiempo de respuesta, +200 consultas por semana, 4 horas/día recuperadas) y un
**testimonial entre comillas** firmado «Equipo Comercial, Promatel».

Promatel **nunca entró en producción**. `business/estrategia/02-portafolio.md:16` lo describe como
«70% completo, bloqueado en credenciales del cliente» y `business/24:44` lista su carpeta entre los
proyectos muertos. Métricas de un sistema que jamás atendió a nadie, y palabras que el equipo de
una empresa real nunca dijo. Se arregló en `platform`; acá quedó la regla.

**Y el motivo por el que sobrevivió tres meses es lo que hay que recordar:** el guardrail de la
landing corre en cada build, pero el patrón de `pruebaSocialInventada` dice
`(clientes|empresas|negocios|proyectos)` y la pieza decía «flujos» y «consultas». La regla estaba;
el patrón no la alcanzaba. Es la versión de contenido del backup del 18-ago: no preguntar «¿corrió
el chequeo?» sino «¿existe hoy el resultado que el chequeo debía producir?».

### Los dos escalones que faltaban en el catálogo

Entre la suscripción más cara ($790.000/mes) y el piso del proyecto ($3.000.000) no había nada, y
el proyecto no tenía **ninguna** línea recurrente detrás: Swisscontact entregó $2.300.000 y después
$0/mes. Las agencias sin ingreso recurrente son no rentables ~60% del tiempo.

- **`diagnostico-automatizacion`** — $600.000, se descuenta 100% del proyecto si contratan en 30
  días. Su trabajo no es facturar: es **descalificar barato**. Una propuesta escrita para alguien
  que nunca iba a pagar cuesta medio día del único vendedor.
- **`soporte-evolutivo`** — $490.000/mes. Alojamiento, monitoreo, respaldos, 3 horas/mes topadas y
  una revisión mensual agendada.

Los dos entran como **`supuesto`**: nadie los ha pagado. La construcción de cada precio está en su
campo `fuente`, incluida la razón por la que **no** se usó la banda internacional de la
investigación (US$300–1.500 para el diagnóstico): son rate cards para cliente de EE.UU., no
disposición a pagar de una pyme de Bucaramanga.

### Reglas nuevas en el canon

- **`servicioFantasma`** y **`diagnosticoGratis`**, las dos con su caso en el fixture. La primera
  cazó, el mismo día en que se escribió, un «Growth Marketing» que llevaba tres meses publicado en
  el FAQ de la landing — una línea de negocio entera que no estaba en ningún catálogo y que
  prometía gestionar pauta mientras nuestro propio píxel sigue en `G-XXXXXXXXXX`.
- **`tablero.cortePorVertical`**: 4% de respuesta a los 90 días sobre 150+ contactados, o se cambia
  de vertical. Había reglas de corte para la plata y **ninguna** para el nicho: las 906
  inmobiliarias podían comerse tres meses sin que nada dijera basta.
- **`lineaServicios.escaleraDeValor`** y tres reglas: nada se entrega sin proponer el recurrente,
  nada gratis que consuma tiempo del fundador, **nada se cotiza si no está en `catalogo.json`**.
- **`_alcanceDelPiso`**: el piso de $3.000.000 aplica a `desarrollo-a-medida`, no a las líneas de
  web. El catálogo ya tenía la excepción escrita; el canon no, así que se contradecían a la vista
  de cualquiera que leyera sólo uno. No cambió ningún precio.

### Lo que queda abierto

El catálogo de producción de la suite sigue sin recibir la D1 (los 3 planes del canon no existen
como producto, 7 legacy en USD siguen cotizables, y `05-marketing-starter` a US$480/mes sigue
activo). Es el único plano que escribe en datos reales, así que va con aviso previo y aprobación.


## 2026-08-20 — el guardrail deja de mirar para otro lado, y los 10 guiones de la tanda 1

### El hueco grande: el copy publicado nunca pasó por el linter

`redes/` estaba en la lista de `IGNORADOS` de `src/lib/io.js` y los `.txt` no se listaban. O sea
que la descripción del perfil de LinkedIn, los textos de Facebook y YouTube, los mensajes de
outbound y el guion del video demo —el copy que de verdad lee el cliente— no lo miraba **ninguna**
regla, mientras el linter cuidaba las piezas de `copy/`, que hoy están congeladas.

Y abrir la carpeta no alcanzaba: de las 7 prohibiciones sólo UNA tenía `alcance: todo`. Ahora hay
**tres alcances** y no dos: `copy/` (piezas), `redes/` (copy publicado) y el resto de `.md`
(documentación, que debe poder nombrar lo prohibido para explicarlo).

Los 3 errores que saltaron al abrirla eran los 3 falsos positivos de ese tipo: líneas dentro de
tablas de «no decir». Los archivos de `redes/` son **mixtos** (textos para pegar + reglas de
estilo en el mismo archivo), así que la exención quedó **por línea**, con el mismo idioma que la
bitácora: `<!-- guardrail:ignorar -->`. Es una declaración que se ve en el diff, no un silenciador.

Probado en los dos sentidos: con un archivo sembrado en `redes/` el linter muerde (2 errores), y
sin él vuelve a verde.

### `mensajeLiderPorCanal` deja de ser un dato que nadie hace cumplir

Existía desde el 13-ago y **cero reglas lo leían**. El propio canon lo confesaba en su `_fuente`,
y el `CLAUDE.md` de este repo llegó a decir que el CI lo aplicaba cuando no.

La regla nueva (`mensajeLider`) hace cumplir sólo lo que no admite interpretación:

- 🔴 **error** si una pieza nombra las DOS líneas (`canal:mezcla-de-lineas`) — el riesgo que el
  cambio del 17-ago marcó como el real.
- 🟡 **aviso** si la pieza sólo nombra la línea que a su canal no le toca.

El vocabulario de cada línea entró a `canon.json → mensajeLiderPorCanal.vocabulario`: es una
decisión comercial, igual que un precio, así que vive en el canon y no en el código. Y el fixture
`copy/_pruebas/anuncio-malo.json` la cubre, porque una regla sin prueba se apaga sola en el primer
refactor.

No cubre `redes/`: ahí el canal habría que adivinarlo por el nombre del archivo, y adivinar es cómo
un linter empieza a dar veredictos que nadie puede defender.

### Los 10 guiones de la tanda 1

`redes/guiones-tanda-1.md` — la sesión A de `16-CONTENIDO-VIDEO.md` §4, que desbloquea grabar,
subir y publicar. Los 10 dolores salen de `npm run dolores tanda --n=10`, en el orden que pone
arriba las fichas con evidencia propia. Cada uno con sus 4 golpes, ~140 palabras, el supuesto
declarado, en horas y nunca en pesos, y la primera línea del post aparte (LinkedIn corta en «ver
más» y esa línea decide si alguien pone play). Los tres sin evidencia se cuentan como dolor y
nunca como caso.

Pasaron el linter — que es lo que ahora significa algo, porque viven en `redes/`.


## 2026-08-17 — arranca el carril de video, y el orgánico cambia de mensaje líder

El fundador pidió una máquina para producir video de buena calidad **rápido**, para LinkedIn primero,
con el objetivo de traer flujo mientras la línea grande madura. Y puso una condición sobre la regla
del 13-ago: *«no pongamos reglas que nos impidan obtener beneficios a nivel de empresa, hoy por hoy
lo que nos tiene con vida es justamente el desarrollo a la medida»*.

**El cambio de la D1 (canon + los cinco docs, en este commit):** `mensajeLiderPorCanal` mueve
**todo el orgánico** (`linkedin`, `instagram`, `tiktok`, `youtube`, `organico`) de `bot` a
`servicio`. El `bot` queda liderando en Meta, outbound y la landing, que son embudos de oferta
cerrada. El razonamiento del 13-ago no se cae, se completa: si Meta se relegó porque **regala**
nuestro producto adentro de la app, el orgánico tampoco puede liderar con ese producto. Lidera con
la línea que factura. Lo que **no** cambió: dentro de una pieza sigue habiendo un solo mensaje.
Planos movidos: `data/canon.json` (`mensajeLiderPorCanal` + `lineaServicios.reglas`),
`15-CANALES-Y-SECUENCIA.md §5`, `CLAUDE.md` de este repo, `src/contenido/README.md` y el `CLAUDE.md`
de la raíz.

**`data/dolores.json` — el banco de dolores (54 filas, 9 sectores).** La unidad del contenido no es
«un tema», es **una tarea manual concreta que un negocio hace hoy**: copiar los pedidos del chat a un
cuaderno, dictarle la dirección al domiciliario, mandar la misma ficha del apartamento veinte veces,
digitar facturas que ya vienen en XML. Cada fila trae la escena de 0-3 s, la frecuencia, el costo
oculto y cómo se resuelve. Cada fila es un video.

🔴 **La regla que sostiene la honestidad de la serie: se habla en HORAS, no en pesos.** Las horas
salen de aritmética sobre un supuesto declarado (*«si haces esto 25 veces al día a 2 minutos»*), y
el espectador la verifica contra su propio negocio. Los pesos exigirían un costo-hora que hoy está
en `parametros.costoHoraOperativa` marcado `supuesto` y sin fuente, y decirlo en cámara sería una
cifra inventada con apariencia de dato. `npm run dolores validar` **falla** si una frecuencia no
trae `estado` + `base`, y avisa en cada corrida mientras el costo-hora siga sin verificar.

**`src/contenido/dolores.js` — el CLI** (`listar`, `validar`, `tanda`, `ver`), sin dependencias y
sin API, agregado a `npm run check`. `tanda` decide qué se graba primero con dos criterios: lo que
tiene **evidencia propia** (el motor contable sobre documentos DIAN reales, las cuentas de cobro, la
firma electrónica, el piloto de domicilios) va arriba porque nadie más puede grabarlo, y después se
rota por sector, porque 10 videos del mismo sector son un canal de nicho, no una serie.

**`16-CONTENIDO-VIDEO.md`** — el doc: las 4 piezas, la plantilla de 4 golpes (0-3 s la escena · 3-15 s
el costo · 15-40 s cómo se hace sin jerga · 40-55 s el número y la puerta), el lote de una tarde = tres
semanas publicando, y la métrica: **conversaciones iniciadas por semana, no vistas**.

⚠️ **Hallazgo de paso, y es de los que importan: `mensajeLiderPorCanal` no lo hace cumplir ninguna
regla.** Grep en todo `src/`: cero usos. El `CLAUDE.md` de este repo lo listaba bajo *«las reglas que
el CI hace cumplir»* desde el 13-ago. Es el anti-patrón 3, y es peor que no tener la regla porque
sugiere una cobertura que no existe, que es exactamente el diagnóstico que este mismo repo escribió
en agosto sobre `patronesEn`. La frase quedó corregida; la regla quedó como pendiente del tablero.

⚠️ **Lo que NO se levantó: la regla de las 8 semanas a mano.** El banco y su CLI no escriben, no
llaman a ninguna API y no publican: ordenan la materia prima. La máquina 1-idea→3-canales sigue
bloqueada, y el `README.md` de `src/contenido/` ahora lo dice arriba para que nadie confunda los dos
archivos que viven en la misma carpeta.

## 2026-08-13 (noche) — el sello de frescura del canon derivó, y el hook publicaba esa deriva en cada sesión

`data/canon.json`: `actualizado` pasa de **`2026-08-04`** a **`2026-08-13`**, que es lo que el archivo
era desde la mañana. Contenía `canales._cambio` y `_whatsappComoPromesa_RETIRADA`, los dos fechados el
13, mientras el sello seguía diciendo el 4.

**El daño no era el campo, era quién lo leía.** `scripts/contexto-sesion.mjs` lo inyecta al arrancar
CADA sesión como *«Canon actualizado: 2026-08-04 (hace 9 días)»*, o sea que le decía al agente
**desconfía de esto** sobre un canon que estaba al día. Es el anti-patrón 2 al revés: el de siempre
hace citar de memoria un dato viejo; éste hace ir a rehacer un dato que ya estaba bien.

**La guarda quedó en código, no en la costumbre:** desde hoy el hook toma la fecha del **último commit
del archivo** (`git log -1 --format=%cI -- marketing/data/canon.json`), manda la más reciente de las
dos, y si el campo se queda atrás lo dice en 🟡 con las dos fechas a la vista. git no puede derivar —
el commit existe aunque nadie lo declare—, así que el sello a mano queda como lo que siempre fue: la
anotación de cuándo se revisó a conciencia, no la de cuándo cambió un byte. Se sigue actualizando.

⚠️ Y en el mismo hook se borró una línea que **transcribía a mano un hecho comercial**: la advertencia
«el BOT no se promete en WhatsApp hasta que Meta valide a SoltyAI» estaba escrita en el `.mjs`, era
falsa desde el 7-ago, y salía pegada al `vivos: whatsapp` que sí leía del canon. Ahora de `canales`
sólo se imprime lo que `canales` diga (`nota`, `notaRiesgo`, `web`). **Una advertencia nueva se escribe
en `canon.json`, nunca en el script** — si no, el hook vuelve a ser un plano paralelo de la D1.

## 2026-08-13 (tarde) — Chalá murió, y al archivarlo se cayó una «referencia real» que era un borrador propio

El dueño de Distribuciones El Charaleño le dijo a Carlos que el proyecto del canal digital no se va a
hacer. Se archiva: cliente en **EX_CLIENTE**, `COT-SOLTYA-20260708-001` y `SAI-PEDIDOS-20260708-001`
en **REJECTED** con motivo escrito (ninguna de las dos se envió nunca), expediente conservado entero
en `clients/charala/` por si el dueño vuelve. **No había ningún pendiente del tablero asociado**, así
que no se quitó ninguno.

**Lo que importa acá no es la pérdida, es lo que destapó.** Cuatro documentos citaban «Chalá
**$800.000**» como *referencia real* de la línea de servicio a la medida: `01-SOURCE-BRIEF §
referencias`, `05-PRICING`, `13-PLAN-12-CLIENTES §10` y `15-CANALES-Y-SECUENCIA §1`, además del
`_cambioRegla` del canon. Ese $800.000 **era una propuesta en DRAFT que jamás salió de la suite**. Se
estaba usando un borrador propio como evidencia de mercado, y encima como uno de los dos pilares del
argumento con el que **esa misma mañana** se decidió abrir el carril pago de Google.

**La regla que queda, y vale más que la corrección:** una cifra entra a «referencias reales» cuando
está **enviada y aceptada**, no cuando está escrita. Con eso aplicado, la línea de servicio a la
medida tiene hoy **un solo** caso (Swisscontact $2.300.000) y ni ese está facturado: la suite no
tiene **ninguna** cuenta de cobro emitida, y el `SOL3` vence el 3-sep.

**Qué NO cambia:** la decisión de `15-CANALES-Y-SECUENCIA` sigue en pie. Meta relegado y el GBP
primero no dependían de Chalá, y el GBP es gratis. Lo que cambia es el peso de la apuesta: los
$400.000 de Google Search se apoyan ahora en una prueba, no en dos, así que **cerrar el segundo caso
de servicio vale más que escalar el carril**.

Corregidos en el mismo commit: los cuatro docs + `data/canon.json` (`_correccionMismoDia`). Los
`canon.snapshot.json` de `platform` y `suite` quedan sin regenerar a propósito: ambos repos están en
ramas con PR abierto (#21, #41) y el campo tocado es narrativo, no un precio ni una promesa publicada.

## 2026-08-13 (estrategia) — Meta dejó de ir primero, y el corte por lead estaba anclado al número equivocado

Reconciliación completa del paquete de marketing después de cuatro decisiones del fundador: mover
WhatsApp a canal vivo, abrir un carril pago para la línea de servicio a la medida, crear el Google
Business Profile, y recalibrar el costo por lead calificado. Sale un doc nuevo, **`15-CANALES-Y-SECUENCIA.md`**,
que manda sobre la premisa de `04-STRATEGY` y `13 §5`.

**El hallazgo que dio vuelta el plan: Meta lanzó nuestro producto, gratis, dentro de la app donde
íbamos a pautar.** El Meta Business Agent salió global el 3-jun-2026: se activa en minutos y hace
textualmente responder preguntas, recomendar productos, **agendar citas, calificar leads** y escalar a
un humano. Más de un millón de negocios instalados, y desde el 1-ago cobra por tokens. Pautar "te armo
un chatbot de WhatsApp" **dentro de Meta** es pagarle a Meta por una audiencia que Meta está
convirtiendo a su propio producto en la misma pantalla: **el mensaje genérico de categoría está
muerto ahí.** Sobrevive el ángulo por vertical y ciudad, que es más caro de construir y todavía no
existe. Sumado a que Meta no captura intención B2B (el mix recomendado en Colombia es ~65% Google /
35% Meta) y a que es el carril **más bloqueado** que tenemos —píxel, GA4, número propio, creatividad—,
el orden quedó: **GBP (gratis) → orgánico a mano → Google Search → Meta**.

**El error que costaba más: el corte por lead calificado no estaba bajo, estaba mal anclado.** Los
$25.000 salían de exigir que el **setup** ($400.000) pagara toda la adquisición. Con CPLs B2B reales
en Colombia de **$80.000–$250.000 por lead**, la suscripción sola **no puede pagar tráfico pago**. Se
ancla al LTV ($5.080.000 a 12 meses), el techo de CAC sube a **$800.000** y el corte a **$120.000**, y
el payback se acepta en el mes 2–3. Con el umbral viejo, la ronda 1 se cortaba sola y se iba a leer
como *"la pauta no sirve"* cuando el que estaba mal era el umbral.

**Lo que cambió en el canon** (`data/canon.json`, D1, en el mismo commit que los docs):

- `canales`: WhatsApp pasó de `proximamente` a `vivos`. La **web sigue en `proximamente`** y no se promete.
- `prohibiciones.whatsappComoPromesa` **retirada**, y el bloque conservado bajo una clave con `_`
  adelante para que nadie la reinvente creyendo que falta. **Llevaba una semana haciendo fallar el CI
  sobre copy publicado y cierto:** `redes/solty-fb-textos.md:23,31` y `redes/solty-yt-textos.md:21`
  dicen "WhatsApp y Telegram" desde antes de la aprobación. La regla pasó de proteger a mentir.
- Dos reglas nuevas que **no caducan**: `asistenteGeneralIa` (la política de IA de WhatsApp prohíbe
  los bots de propósito general; vendemos bots de negocio **estructurados**, y romper eso no cuesta un
  anuncio, cuesta el canal) y `webComoPromesa`.
- `tablero`: corte $120.000, techo de CAC $800.000, advertencia $180.000, matar $250.000, LTV, los
  carriles con su reloj, y el presupuesto con **$2.400.000 sin asignar a propósito**.
- `utm.source` suma `google` y `gbp`; `fuentesPagadas` suma `google` **y no `gbp`** — el veredicto de
  corte sólo mide lo que cuesta plata, y eso fue una decisión, no un olvido.
- `lineaServicios.reglas`: cae *"el servicio se ofrece, no se anuncia"* y entra **un mensaje líder por
  canal** (`mensajeLiderPorCanal`), porque nadie ve los dos mensajes a la vez.

**Cuatro huecos del propio linter, encontrados al tocarlo:**

1. **`patronesEn` y `exencionesEn` nunca se leían.** El bucle de `prohibiciones()` iteraba sólo
   `patrones`, así que los 5 patrones en inglés del canon **no protegían nada desde que se
   escribieron**. Ahora se unen. Una regla que declara cubrir el inglés y no lo cubre es peor que no
   tenerla: sugiere una cobertura que no existe.
2. **`registroDeLinks` no validaba la fuente.** Validaba el formato del `origin` y los duplicados,
   pero un `links.json` con una fuente inventada pasaba el CI limpio y el lead quedaba sin carril al
   que imputarse. Con dos carriles nuevos el error de dedo deja de ser hipotético.
3. **`npm run link nuevo` avisaba y registraba igual** (`console.error` sin salida), y su medium por
   defecto era `paid_social` para todo — falso para Google Search y para el GBP. Ahora falla, y el
   medium se deriva de la fuente.
4. **El CAC se imprimía sin veredicto.** `reportes` calculaba el CAC y no lo comparaba con nada, y
   `ronda()` ni siquiera lo agregaba. Un número sin umbral al lado no para nada, y era justo el número
   que decide si la adquisición tiene negocio.

**Lo que NO se pudo cerrar acá:** `src/lib/io.js` sigue ignorando `redes/` y sólo lee una extensión a
la vez, así que **el copy realmente publicado nunca pasa por un guardrail**. Es la razón por la que
esas 4 líneas vivieron meses fuera de la regla sin que el CI dijera nada. Queda anotado.

---

## 2026-08-10 (mensaje) — Los 45 correos decían la verdad, pero los 45 la decían igual

Primera vez que se usa `/brand-review` del plugin nuevo, con la voz de `business/13` y el canon como
referencia en vez de la que la skill ofrece configurar. El encargo era que los correos **generaran
ventas** y se leyeran **como un correo personal escrito después de encontrar al prospecto**, no como
una campaña.

El contenido estaba bien: gancho real por prospecto (cruzado contra `04-ia.json`), cero precios
inventados, cero prueba social falsa, línea de supresión en los 45. **Lo que los delataba era la
forma.** Tres cosas, todas medidas antes y después:

- **La línea de Ley 1581 estaba en el primer párrafo de los 45.** *«le escribo a esta dirección
  porque su web la publica como contacto comercial»*, y en 3 casos con el agravante de decir *«(lo
  exige la ley de datos)»*. Nadie que te encontró en Google explica la base legal en la línea 2. No
  se podía borrar —`business/16 §7` la adoptó como práctica— pero §7 exige *decir por qué escribís*,
  **no** que sea lo segundo que se lee. Bajó al pie, junto a la de supresión, en los 45.
- **El esqueleto era idéntico:** 43/45 *«responde al instante»*, 43/45 *«pregunta zona y
  presupuesto»*, 41/45 *«agenda la visita»*, siempre en el mismo orden. Importa más acá que en otro
  lado: dos de los correos mencionan que son miembros de **la Lonja y la Red MLS**, o sea que **se
  conocen entre ellos**. Quedó en 16/45, 11/45 y 12/45, sin cuerpos repetidos.
- **El narrador cambiaba de persona dentro del mismo correo** (*«Soy Carlos… Nosotros armamos…
  Monto asistentes…»*) y 3 cerraban en plural. Todo a primera persona; SoltyAI sólo en la firma.

**El hallazgo que más sirve:** el dato más "te busqué" ya estaba en los datos y no se usaba. El CSV
original trae **rating y reseñas de Google Maps de toda la lista**, y sólo **1 de 45** lo citaba.
Ahora lo hacen 23. Con una regla, porque el dato tiene filo: hay ratings de **1.7, 2.3 y 2.5** en la
lista, y felicitar a alguien por sus 1.7 estrellas es un insulto. Se cita rating + número desde 4.3
con 20 reseñas; sólo el número entre 3.5 y 4.2; y **nada** por debajo de 3.5.

⚠️ **Lo que NO se pudo hacer y hay que decir:** los 45 leads traen `instagram: ""` y `facebook: ""`.
No hay presencia de redes en los datos, así que los correos dicen la verdad de cómo se encontró al
prospecto —Google Maps y su web— en vez de inventar un *«los vi en Instagram»*.

🔴 **Y el bloqueador que apareció al preguntar qué debe hacer el prospecto después de leer:** el
toque 2 manda a los 45 el mismo `t.me/inmobiliaria_solty_bot`, cargado con el tenant `demo-l0615` =
**Serrano**, que es uno de los 45 y competidor de los otros 44. El toque 1 promete la demo con *sus*
propiedades. Detalle y las tres salidas en `business/16 §6b`.

**Y la decisión de embudo, que se tomó por la negativa:** no se arma el embudo ramificado para la
tanda 1. Con 45 correos al umbral de §8 son 1-2 respuestas: no hay a quién ramificar, las ramas no
se pueden diseñar sin leer respuestas, el video demo está bloqueado en cadena, y romper el máximo de
1 link de §6 en dominios de 14 días es caro. Se ramifica **a mano después de responder**, con las 5
respuestas guardadas en `tools/apps/prospeccion/RESPUESTAS-GUARDADAS.md`.

**Added** · pendientes nuevos en el tablero: el bot compartido (11-ago), el guardrail que no mira
`tools/`, y el embudo ramificado para cuando haya datos.

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
