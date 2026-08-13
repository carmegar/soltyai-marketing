# 13 · PLAN 12 CLIENTES — de aquí a diciembre de 2026

> **Meta declarada por el fundador (2026-07-25): +12 clientes fijos antes de que acabe el año**,
> prospectando en serio por todos los canales (orgánico + tráfico pago).
> **Presupuesto:** $4.000.000 COP del crédito personal, que se queda en la cuenta de Carlos y se
> gasta directo en pauta y prospección (ver §9 — figura contable).
>
> Este doc es el **plan de ejecución**. La estrategia creativa y el copy están en `07-CAMPAIGN-BRIEF.md`;
> la economía unitaria, en `06-BUDGET-PLAN.md`; el outbound, en `09-OUTBOUND.md`.
> Fecha: 2026-07-25 · Ventana real: **agosto → diciembre (5 meses)**.

---

## 1. Qué significa "12 clientes" (la aritmética, sin inflar)

**Ritmo necesario: ~2,4 clientes nuevos/mes.** Es exigente pero está dentro de lo que ya se
había fijado como techo realista para un fundador solo (2–3/mes).

Con el pricing vigente en Colombia (`ESTADO.md` §Marketing — manda sobre el USD del paquete viejo):

| Concepto | Valor |
|---|---|
| Ticket promedio supuesto | **$390.000/mes** (mezcla Esencial $290k / Pro $490k) |
| Setup único | **$400.000** |
| **Caja del mes 1 por cliente** | **~$790.000** |
| 12 clientes → **MRR a diciembre** | **~$4.700.000/mes** |
| 12 clientes → **caja de setups** | **~$4.800.000** (una vez) |
| **LTV bruto 12 meses** | **~$5.080.000** ($400.000 + $390.000 × 12) |
| **Techo de CAC** | **~$800.000** (2× el setup: se recupera en el mes 2) |

> 🔴 **Corregido el 2026-08-13, y el error valía plata.** Acá decía *«CAC máximo tolerable ~$400.000
> (el setup solo paga la adquisición)»*. Estaba **anclado a la métrica equivocada**: exigía que la
> caja del mes 1 pagara toda la adquisición. Con CPLs B2B reales en Colombia de **$80.000–$250.000
> por lead**, la suscripción sola **no puede pagar tráfico pago**. Se ancla al LTV y se acepta que el
> payback se corra al **mes 2–3**. Detalle en `06-BUDGET-PLAN.md`; los números en máquina, en
> `data/canon.json → tablero`.

> Con los primeros 3–5 al **−30% × 3 meses** (política ya autorizada, a cambio del caso de estudio),
> el MRR de diciembre baja ~$400k. Se acepta: el caso de estudio es lo que abarata los 7 siguientes.

**Embudo que hay que sostener cada semana** *(supuestos etiquetados, se corrigen con datos reales)*:

```
20 contactos outbound + tráfico pago     →  ~5 conversaciones reales
~5 conversaciones                        →  ~2 reuniones agendadas
~2 reuniones/semana × 4 = 8 reuniones    →  ~2,4 cierres/mes  (tasa reunión→cierre ~30% (supuesto))
```

El número que hay que vigilar **no** es el gasto ni los seguidores: son **reuniones agendadas por
semana**. Menos de 2/semana = el mes no se cumple, sin importar qué digan las impresiones.

> **Por qué dejó de ser «demos» (2026-08-13):** el cold email pivotó a pedir **15 minutos** en vez de
> entregar una demo, y la venta se cierra en esa reunión (`business/16 §6c`). El número es el mismo
> —una cita en el Calendly— pero el nombre viejo hacía pensar que había que entregar algo antes de
> hablar. ⚠️ En `data/canon.json` y en `src/reportes` la clave **todavía se llama `demos`**: el
> renombre se hace en canon, código y README a la vez, no a medias.

---

## 2. De dónde salen los 12 (mix por canal)

> **Reordenado el 2026-08-13.** Antes este mix era «outbound + **pauta Meta** + orgánico», con Meta
> como único carril pago. Meta quedó **relegado** y entraron dos carriles de Google. El porqué
> completo está en **`15-CANALES-Y-SECUENCIA.md`**, que manda sobre esta tabla.

| Canal | Clientes esperados | Costo | Por qué |
|---|---|---|---|
| **A · Outbound directo** (inmobiliarias + domis) | **4–5** | ~$0 (tiempo) | 865 prospectos vivos en producción, demo viva, control total del ritmo. Es el motor de corto plazo. |
| **B · Google Search + Business Profile** | **3–4** | $400.000 + $0 | Captura intención que **ya existe**. Titular: la línea de **servicio a la medida**, que es la que hoy factura. Con piso de $3.000.000, un cierre paga la ronda entera. |
| **C · Orgánico + referidos** | **2–3** | ~$0 (tiempo) | LinkedIn/IG/TikTok + Bucaradomi y Swisscontact como prueba social. Madura lento, cierra barato y **compone**. Flujo: video → agendar cita, no al bot. |
| **D · Pauta Meta** | **1–2** | $1.200.000 | **Relegado.** Genera demanda por vertical + ciudad cuando los otros no den volumen. Necesita píxel, GA4, número propio y creatividad por vertical. |

**Ninguno solo llega a 12.** El outbound no escala; Google captura sólo lo que ya se busca; el
orgánico no llega a tiempo por sí solo; y Meta, hoy, es el más caro de encender.

**Si algo se tiene que caer, que se caiga D.** Es el más caro, el más lento y el que más preparación
pide. B y C cuestan $0 o casi, y arrancan esta semana.

---

## 3. Semana 0 — desbloqueos (antes de gastar un peso)

Nada de esto es opcional: son las tuberías por donde va a correr todo lo demás.

| # | Qué | Dueño | Estado |
|---|---|---|---|
| 1 | **Video demo grabado** (pre-calificación → búsqueda con fotos → visita → aviso al asesor → vista de leads) | Usuario | ⏳ **bloquea LinkedIn y todo el orgánico**: es la prueba visible del canal |
| 2 | **Calendly** creado (campos: nombre, negocio, **rubro**, teléfono) | Usuario | ✅ **3-ago** — `calendly.com/carlos-soltyai/30min`, con el `a1` de atribución verificado en vivo |
| 3 | **Número de WhatsApp** definido para click-to-chat + outbound | Usuario | ⏳ **sin él el CTA de WhatsApp no se pinta**: hoy la landing ofrece 2 vías, no 3 |
| 4 | **Píxel de Meta + GA4** creados → IDs a `site.ts` | Usuario crea, Claude integra | ⏳ **bloquea la pauta** |
| 5 | ~~**Formspree**~~ **Endpoint propio de captura** para el form de la landing | Claude | ✅ **3-ago** — `POST contratos.soltyai.com/api/leads` en la suite (que ya corre Next y ya tiene Resend), en vez de un servicio externo |
| 6 | **LinkedIn de empresa** creado (§6) | Usuario, con los textos de abajo | ⏳ |
| 7 | **Landing puente `/ir`** con las 3 CTAs + eventos `Lead` | Claude | ✅ construida y **desplegada el 3-ago** (2 CTAs vivas; la de WhatsApp espera el número) |
| 8 | **Deep-links `?start=` por canal** y hoja de conciliación | Claude | por construir |
| 9 | **Prueba E2E de las 3 vías** (clic → bot / Calendly / WhatsApp, con origen visible) | Ambos | 🔒 **gate: sin esto no se lanza pauta** — la vía Calendly ya está probada; faltan Telegram y WhatsApp |

| 10 | **Google Business Profile creado y verificado** | Usuario | ⏳ **es lo primero, y es gratis** (`15-CANALES-Y-SECUENCIA.md §4`) |
| 11 | **Landing propia de servicio a la medida** (no la home del bot) | Claude | ⏳ bloquea el carril de Google Search |

> **Lo que bloquea qué, después del 2026-08-13 — y ya no es lo mismo para todos los carriles:**
>
> - **Meta** sigue colgando de los IDs del punto 4 (`ga4MeasurementId`, `metaPixelId`) y del número
>   del punto 3. Mientras estén en placeholder, **no se enciende**: pagar clics sin píxel es tirar la
>   plata y el aprendizaje. Como Meta quedó **relegado**, eso ya no bloquea el plan entero.
> - **El Google Business Profile no depende de nada de eso** y cuesta $0. Por eso va primero: cada
>   semana que no existe es una semana de maduración perdida que hoy no cuesta nada recuperar.
> - **El número propio de SoltyAI (punto 3) subió de prioridad**, no bajó: además de la tercera CTA,
>   el GBP quiere un teléfono que conteste, y sin línea propia no hay **contestador de muestra 24/7**
>   —que va sin IA, cuesta $0 y es el mejor anuncio que existe, porque el prospecto le escribe al
>   producto que le estás vendiendo. Y poner ahí el personal repite el problema de datos personales
>   que se está corrigiendo.
>
> 🔴 **Ojo con cómo se dejan esos placeholders.** `calendlyUrl` y `whatsappNumber` traían valores **con
> forma de valor real** (`calendly.com/soltyai/demo`, `57XXXXXXXXXX`) y por eso los 8 CTAs de la landing
> apuntaron a un 404 **desde el 24-jul hasta el 3-ago** sin que el build, el smoke test ni una revisión
> visual lo notaran. Los que faltan están en vacío o en `G-XXXXXXXXXX` a propósito.

---

## 4. Canal A — Outbound (el motor, arranca ya)

**Objetivo: 20 contactos nuevos/semana, 80/mes.** No más: la calidad del primer mensaje decide todo.

**Cómo:**
1. **Tandas de 20–30** de los 865 prospectos vivos en producción (`09-OUTBOUND.md`), ordenadas por ciudad
   (Bucaramanga y área primero: se puede ofrecer visita presencial).
2. **Mensaje 1 — el gancho es la demo, no la explicación.** *"Le armé un bot con SUS inmuebles reales,
   pruébelo aquí"* pega más que cualquier descripción del producto. La demo `demo-l0615` con 29
   inmuebles y fotos ya prueba que se puede.
3. **Toque 2 a los 3 días** (valor, no insistencia: un dato de su vitrina, algo que note).
4. **Toque 3 a los 7 días** y cierre del hilo: *"¿lo dejo por ahora?"* — la salida elegante rescata
   más respuestas que la presión.
5. **Todo lead entra al dashboard** (mini-CRM operator, `ESTADO.md` 5c): estado, notas, próximo paso.

**Segundo frente, desde ~fin de agosto:** operadores de domicilios en ciudades intermedias, con
**Bucaradomi ya estabilizado** como caso real (`ESTADO.md` §Piloto). No antes: el caso insignia
necesita esas 4–6 semanas sin sobresaltos.

**Regla anti-quemadura:** nunca subir esos teléfonos a Meta como audiencia (viola ToS + Ley 1581).

---

## 5. Los carriles pagos ($4.000.000, y **no** en 3 rondas de Meta)

> **Cambio del 2026-08-13.** Acá había un calendario fijo de 3 rondas de Meta ($1,2M agosto · $1,3M
> septiembre · $1,5M oct-nov). **Se descartó.** El detalle y el porqué están en
> `15-CANALES-Y-SECUENCIA.md`; esto es el resumen operativo.

| Ronda | Carril | Cuándo | Monto | Objetivo |
|---|---|---|---|---|
| **G1** | Google Search | tras el GBP | **$400.000** | Validar el carril de servicio a la medida. 3–4 keywords de intención, geo Bucaramanga y área metropolitana |
| **R1** | Meta | cuando haga falta volumen | **$1.200.000** | Una vertical, 3 ángulos, objetivo **cita en el Calendly** |
| — | sin asignar | — | **$2.400.000** | **A propósito.** Se asignan contra resultados, no contra un plan escrito en agosto |

**Reglas de corte, recalibradas** (`canon.json → tablero`):

| Señal | Acción |
|---|---|
| Costo por lead calificado **> $180.000** a las 48 h | Advertencia: revisar creatividad o audiencia |
| **> $250.000** por calificado, o **3× el mejor** | **Matar** ese ad set o esa keyword |
| **< $80.000** por calificado y con volumen | **Escalar +20%**, nunca más por paso |
| CAC efectivo **> $800.000** | Se para el carril: por encima del techo no hay negocio |

**Reglas que no se negocian:**
- Los primeros 2–3 días **no se toca nada** salvo plomería rota (la plataforma está aprendiendo).
- Excluir **Audience Network** si entra tráfico basura.
- **Nunca vender «un asistente de IA»** abierto: la política de IA de WhatsApp sólo permite bots de
  negocio estructurados, y romperla no cuesta un anuncio, cuesta el canal.
- **Nunca subir los teléfonos del outbound** a Meta como audiencia (ToS + Ley 1581).
- En Google: **negativos desde el día 1** («gratis», «curso», «aprender», «empleo», «wordpress
  barato»). En Search la plata se va por ahí, no por el CPC.
- Si entran **2 proyectos a medida a la vez**, se pausa el carril de Google. No se contrata.

**Lo que se mide:** clics → entradas por vía → **leads calificados** → **reuniones** → cierres. El KPI
que manda es **reuniones agendadas**; el de poda, **$/lead calificado**. El CPC no manda nunca.

**Lo que ya se puede prometer, y antes no:** el bot **por WhatsApp**. Eso arregla el problema de
fondo que tenía la creatividad de Meta —vender un bot de Telegram a pymes colombianas que no usan
Telegram— y es la razón por la que Meta pasa de *bloqueado y sin sentido* a *relegado y viable*.

---

## 6. Canal C — Orgánico + LinkedIn de empresa

✅ **La página de empresa de LinkedIn existe desde el 2026-07-25.** Este § decía «falta crearla» y
quedó viejo; los datos de abajo se conservan porque son la ficha con la que se creó y sirven para
mantenerla al día. Las demás redes también están montadas (FB, IG + Threads, TikTok, X reservado,
YouTube).

**La regla nueva del orgánico (2026-08-13):** **2 posts/semana a mano durante 8 semanas antes de
construir la máquina de contenido.** Se automatiza un proceso que existe, nunca uno que no — la misma
lógica con la que se pospuso el Embedded Signup hasta tener 3 clientes. El insumo escaso no es
publicar: es tener algo que decir, y eso son 20 minutos del fundador por semana contando lo que de
verdad pasó. Detalle en `15-CANALES-Y-SECUENCIA.md §5`.

**La ficha con la que se creó** (se conserva para mantenerla): LinkedIn → *Para empresas* →
**Crear una página de empresa** → *Empresa pequeña*.

**Datos listos para pegar:**

```
Nombre:            SoltyAI
URL:               linkedin.com/company/soltyai
Sitio web:         https://soltyai.com
Sector:            Desarrollo de software
Tamaño:            2—10 empleados
Tipo de empresa:   De financiación privada       ← es la traducción de "Privately Held"
Sede:              Bucaramanga, Santander, Colombia
Fundación:         2026
Eslogan (máx 120): Bots de WhatsApp y Telegram que atienden, venden y agendan por tu negocio.
```

> **Tipo de empresa — el desplegable confunde.** Una S.A.S. va en **"De financiación privada"**
> (*Privately Held*: sociedad con dueños privados, sin cotizar en bolsa). **No** es "Empresa
> individual" (*Sole Proprietorship* = persona natural sin sociedad, justo lo que se dejó de ser al
> constituir la SAS) ni "Autónomo" (*Self-employed* = freelance). Ese campo lo miran los proveedores
> y los clientes B2B grandes: decir "empresa individual" contradice el certificado de la CCB.
>
> **Tamaño 2—10** es el correcto para presentarse: es el rango de una micro con colaboradores por
> proyecto, y "0—1" empuja al prospecto a preguntarse quién atiende si te enfermas. Si alguien
> pregunta directo, la respuesta honesta y que vende es *"equipo pequeño, con especialistas por
> proyecto"* — nunca inventar empleados que no existen.

**Assets listos (generados 2026-07-25, en `marketing/redes/`):**

| Archivo | Medida | Dónde va |
|---|---|---|
| `soltyai-linkedin-logo-300x300.png` | 300×300 | Logo de la página (LinkedIn pide exactamente esto) |
| `soltyai-linkedin-banner-1128x191.png` | 1128×191 | Portada. **El tercio izquierdo va vacío a propósito**: ahí LinkedIn superpone el logo de la página |

**Descripción (About)** — escrita con `business/13` Parte A (cero rayas largas, voz activa, sin
palabras de la lista slop). Pegar tal cual:

```
En muchos negocios las ventas se pierden por algo simple: nadie alcanzó a
responder a tiempo.

SoltyAI arma bots de WhatsApp y Telegram que atienden esa conversación.
Responden al instante, a cualquier hora, con la información real de tu
negocio: tu catálogo, tu agenda, tus precios. Preguntan lo que hay que
preguntar, agendan la visita o la cita, y te pasan el cliente cuando ya
vale la pena que hables tú.

No te entregamos una herramienta para que la configures. La dejamos
funcionando con tus datos y te enseñamos a usarla.

Trabajamos por sectores: inmobiliarias, domicilios, comercio y
agendamiento de citas. Si tu negocio no necesita inteligencia
artificial, lo hacemos con un flujo fijo: sale más barato y nunca
improvisa.

Somos de Bucaramanga, hablamos como acá y contesta una persona.

Mira cómo funciona y agenda una cita: soltyai.com
```

> El cierre **no lleva al bot**. Ver el flujo del canal aquí abajo.

### El flujo de LinkedIn: ver el video, agendar la cita

```
Post fijado con el VIDEO DEMO  →  "agenda una cita"  →  Calendly  →  cita con Carlos
                                                                      (ahí sí, el bot en vivo
                                                                       + setup-prueba con sus datos)
```

**Por qué el link al bot NO va en la descripción ni en los posts:**

1. El bot demo tiene la compuerta `accessMode: request` (a propósito): un chat no autorizado nunca
   llega al LLM, cero tokens. Quien entra por curiosidad **no ve el bot buscando inmuebles**, ve una
   pre-calificación de 5 pasos y queda esperando aprobación manual. Prometer "míralo funcionando" y
   entregar un formulario quema el primer contacto, que es el peor momento para decepcionar.
2. En LinkedIn la gente **mira**, no salta a otra app. El video entrega la prueba dentro de la red,
   sin pedirle nada al que todavía no decidió.
3. El bot sigue siendo la puerta en **outbound** (ahí el contexto ya está dado: "le armé uno con SUS
   inmuebles") y como una de las 3 vías de la landing puente en pauta. Cambia el canal, no el producto.

**Consecuencia de prioridad:** LinkedIn no se publica hasta tener **(a) el video demo grabado** y
**(b) el Calendly creado**. Son los dos primeros ítems de la Semana 0 y ahora bloquean un canal
completo, no solo la pauta.

**Al crearla:** subir logo + banner de la tabla de arriba · botón personalizado **"Visitar sitio web"** ·
Carlos se agrega como empleado (multiplica el alcance) · **el primer post, y el fijado, es el video
demo** con el CTA de agendar · agregar la URL a `site.ts` (hoy `social.linkedin` está vacío a propósito).

**Cadencia orgánica sostenible (2 posts/semana, no más):** 1 de build-in-public (lo que se construyó
esa semana) + 1 de demo/caso. La idea-núcleo se recicla a IG/TikTok (motor 1-idea→3-canales de
`business/14`). **El video sube nativo a cada red** (LinkedIn y las demás castigan el link que saca
gente de la plataforma): el CTA de agendar va en el texto y en el comentario fijado, con UTM por canal
para saber cuál trae las citas.

---

## 7. Calendario agosto → diciembre

| Mes | Foco | Meta de cierres | Acumulado |
|---|---|---|---|
| **Agosto** | **GBP creado** + outbound a full + orgánico a mano arranca + experimento 15/30 del cold email | **2** | 2 |
| **Septiembre** | **G1 de Google Search** + landing de servicio + outbound domis con caso Bucaradomi | **2–3** | 4–5 |
| **Octubre** | Escalar lo que rindió + primeros casos de estudio publicados + **8 semanas de orgánico cumplidas** | **3** | 7–8 |
| **Noviembre** | Referidos + **máquina de contenido** (si el orgánico a mano sobrevivió) + **Meta si hace falta volumen** | **3** | 10–11 |
| **Diciembre** | Cierre de año (mes corto: la 2ª quincena no vende) | **1–2** | **12** ✅ |

> **Diciembre es medio mes hábil.** Por eso el plan carga el peso en oct–nov: llegar a 10 en noviembre
> es lo que hace que 12 sea alcanzable.

---

## 8. Tablero semanal (15 min, viernes)

| Métrica | Meta semanal | De dónde sale |
|---|---|---|
| Contactos outbound nuevos | 20 | Hoja/CRM |
| Conversaciones reales | 5 | Bot + WhatsApp |
| **Reuniones agendadas** | **2** | Calendly |
| Cierres | 0,6 (~2,4/mes) | Suite (propuestas firmadas) |
| $/lead calificado (pauta) | **< $120.000** | `npm run reportes` |
| Posts publicados | 2 | Calendario orgánico |

**Semáforo:** 2 semanas seguidas con <2 reuniones → el problema es el **mensaje o la lista**, no el
volumen: se reescribe el gancho antes de gastar más. 2 semanas seguidas **sin publicar** → la
cadencia estaba mal calibrada: se baja a 1 post/semana antes que dejar de publicar, porque un carril
que compone sólo funciona si no se corta.

**El tablero ya no es una hoja de cálculo.** Se llena y se lee con `src/reportes`:

```
npm run reportes registrar -- --semana=2026-W31 --ronda=R1 --origin=<origin> \
    --gasto=300000 --leads=14 --calificados=6 --demos=2 --cierres=bot-pro:1,setup:1
npm run reportes            # tablero de la semana: $/calificado, $/demo, CAC, MRR y margen
npm run reportes ronda      # la regla de corte del §5, calculada sobre la ronda completa
```

Tres cosas que el programa hace y una hoja no: **calcula** la regla de corte (hoy **$120.000** por
lead calificado, leída de `canon.json`) en vez de dejarla a criterio del viernes que toca parar;
**exige** que cada `origin` exista en el registro de links (sin origen no hay atribución que
evaluar); y **obliga a declarar de dónde salió cada número**, así que los datos manuales se ven como
manuales en vez de pasar por automáticos.

---

## 9. La plata: cómo se registra (los $4M salen de la cuenta personal)

Decisión del 25-jul: los $4.000.000 **no** se transfieren a la SAS (evita el rendimiento presuntivo
del art. 35 ET — ver `business/18` §2). Se pagan directo desde la cuenta de Carlos, y cada gasto:

1. **Datos fiscales de la SAS en la cuenta publicitaria de Meta** (SOLTYAI S.A.S. · NIT 902081265-3)
   → la factura sale a nombre de la empresa aunque la tarjeta sea personal. **[contador]** confirmar
   el tratamiento del IVA de servicios digitales del exterior en RST.
2. **Se registra en el libro de caja** como egreso (`OTRO_EGRESO` / `SOFTWARE` según el caso) con
   nota *"pagado por el socio — por reembolsar"*, y la fila entra al inventario de `business/18` §3.
3. **La SAS reembolsa cuando haya caja**, por transferencia con concepto explícito.

Con 12 clientes cerrados, la caja de setups (~$4,8M) cubre el reembolso completo del crédito.

---

## 10. La otra línea: desarrollo a la medida y web

**Ya es la realidad, no una idea:** el ingreso más grande de la empresa hoy es **Swisscontact
($2.300.000, módulo Zaranda)**, que es desarrollo a la medida. La cotización de Chalá ($800.000)
también. Negarlo en la estrategia sería escribir un plan que no se parece a la caja real.

**El papel de cada línea, y no se invierte:**

| Línea | Qué hace | Qué NO hace |
|---|---|---|
| **Desarrollo a la medida y web** | Paga las cuentas **ya**: tickets de $800k a $5M, cobrados contra entrega | No construye patrimonio: se acaba cuando se entrega, y depende de las horas de Carlos |
| **Bots por suscripción** | Acumula MRR: el negocio vale por esto y sigue facturando sin horas nuevas | No paga las cuentas de mañana: 12 clientes son ~$4,7M/mes, pero recién en diciembre |

**El servicio financia, la suscripción acumula.** Sin la primera no hay con qué vivir mientras la
segunda crece; sin la segunda, esto es una agencia que depende de que Carlos facture horas para
siempre.

### El riesgo real (por eso hay reglas)

Un proyecto a medida de $3M se come 3 a 6 semanas del **único** desarrollador, que es también el
**único** vendedor. En esas semanas la prospección se detiene, el MRR no crece, y al terminar hay
que tomar otro proyecto para pagar las cuentas. Esa es la trampa de agencia y mata más empresas de
software chicas que la falta de clientes.

### Reglas para que financie sin canibalizar

1. **Un proyecto a medida en ejecución a la vez.** Máximo **uno por trimestre** mientras la meta de
   los 12 clientes esté viva.
2. **Piso de precio: $3.000.000.** Menos que eso no compensa parar el motor de suscripciones.
   Excepción: un proyecto chico que abra la puerta a un cliente grande, y se anota como tal.
3. **50% de anticipo** para arrancar. Sin anticipo no se agenda (a Swisscontact se le cobró contra
   entrega y hoy son $2,3M esperando factura: no se repite).
4. **La prospección no se suspende.** Los 20 contactos y las 2 reuniones por semana del §8 se sostienen
   aunque haya proyecto en curso. Si un proyecto obliga a bajarlos, es que estaba mal cotizado.
5. **Todo proyecto deja pieza reutilizable.** Lo que se construya a medida vuelve al `platform/` como
   módulo cuando aplique. Si no deja nada reutilizable, es trabajo por horas disfrazado.
6. **Todo cliente de servicio sale con propuesta de bot.** La web o el desarrollo es la puerta; la
   suscripción es la renta. Un cliente que ya pagó y quedó contento es el lead más barato que existe.

### Cómo se comunica (esto es lo que más se equivoca)

> 🔄 **Esta sección cambió el 2026-08-13.** Decía *«el servicio se ofrece, no se anuncia»*. Ya no:
> se abrió un carril pago para el servicio, en Google. Lo que **no** cambió es el riesgo que esa
> regla protegía, y por eso la nueva es más precisa, no más laxa.

- **Un mensaje líder POR CANAL, no un solo mensaje.** El **bot** es el titular en Meta, en orgánico,
  en outbound y en la landing. El **servicio a la medida** es el titular en **Google Search y en el
  Google Business Profile**, y sólo ahí. Nadie ve los dos a la vez, así que no confunde a nadie.
- **Por qué Google y no Meta:** el servicio es demanda que **ya existe** y se expresa en una
  búsqueda. Nadie busca «chatbot», pero sí se busca «desarrollo de software Bucaramanga». Y con piso
  de $3.000.000 y 50% de anticipo, **un cierre paga la ronda entera** y financia el carril del bot.
- **Dentro de una misma pieza sigue habiendo UNO.** Decir "hacemos software a la medida, páginas web,
  bots y marketing" en el mismo anuncio convierte la marca en la agencia genérica de la esquina, que
  compite por precio contra veinte iguales. Ese riesgo no desapareció: sólo dejó de resolverse
  callando una línea entera de negocio que **es la que más factura hoy**.
- **En la conversación sigue siendo palanca:** *"además del bot les montamos la página / la
  integración con su sistema"* cierra proyectos grandes con clientes que ya confían.
- **Todo cliente de servicio sale con propuesta de bot.** La web es la puerta; la suscripción es la
  renta. Un cliente que ya pagó y quedó contento es el lead más barato que existe.

### Métrica de gobierno

Se revisa cada mes junto al tablero del §8:

| Indicador | Meta a diciembre 2026 |
|---|---|
| Ingresos recurrentes (MRR) | ~$4.700.000/mes (los 12 clientes) |
| Ingresos por servicio | 2 o 3 proyectos en el semestre, no más |
| **% de costos fijos cubierto por MRR** | **100%** (VPS, API, herramientas, contador) |

Cuando el MRR cubra los costos fijos **y** los honorarios base del fundador, el servicio a medida
pasa a ser opcional: se toma solo si el proyecto es bueno, no porque haga falta la plata. Ese es el
punto en el que la empresa deja de depender de las horas de Carlos.

---

## Relacionados

`01-SOURCE-BRIEF.md` (fuente canónica) · `07-CAMPAIGN-BRIEF.md` (copy y creatividades) ·
`09-OUTBOUND.md` (guiones y lista) · `10-IMPLEMENTATION-ROADMAP.md` (día a día de una ronda) ·
`11-PRE-LAUNCH-CHECKLIST.md` (gate de lanzamiento) · `business/14` (orgánico) · `business/18` (la plata).
