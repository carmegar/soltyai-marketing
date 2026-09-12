# Evento del viernes 11-sep-2026: el guion de los 60 segundos

> Para el evento con empresarios del viernes 11 de septiembre. Todo digital: no hay tarjetas, hay un
> QR en la pantalla del celular.
>
> **La línea que se habla es una sola: servicio a la medida (L3).** No es una preferencia de estilo,
> es la regla: dentro de una misma pieza hay un solo mensaje, y una conversación de venta es una
> pieza. Quien pregunte por el chat de WhatsApp recibe respuesta, pero eso no abre nunca.
> Fuente: `canon.json → mensajeLiderPorCanal` y `18-ARQUITECTURA-DE-OFERTA.md §4`.

<!-- canal: organico -->

## 0. Lo que se lleva encima

| Qué | Dónde | Estado |
|---|---|---|
| El QR a pantalla completa | foto en el carrete del celular, con brillo al máximo | hay que generarlo |
| Destino del QR | `https://soltyai.com/contacto?utm_source=evento&utm_medium=qr&utm_campaign=2026-09-11&utm_content=qr&utm_term=empresarios&origin=evento_empresarios_qr` | listo y registrado |
| WhatsApp Business instalado en **300 570 1661** | la SIM prepago Tigo del 11-sep | comprada; falta activar la app y pegar el perfil de `whatsapp-business-perfil.md` |
| Batería | cargador de bolsillo | el QR sin batería no existe |

Lo que la página del QR tiene que hacer en ese orden: **guardar el contacto (vCard), escribir por
WhatsApp, o dejar el caso en el formulario.** Guardar el contacto va primero porque es lo único que
sobrevive al lunes.

> ✅ **El origen ya existe y el enlace ya está registrado.** `evento` entró a `canon.json →
> utm.source` y `qr` a `canon.json → utm.medium` el 8-sep, y el link quedó en `../data/links.json`
> con `npm run link nuevo`, con el origin canónico **`evento_empresarios_qr`** (formato
> `fuente_audiencia_creatividad`). La fila del registro guarda además la forma larga con
> `utm_content=qr&utm_term=empresarios&origin=evento_empresarios_qr`; el QR lleva la corta de la
> tabla, que es la que la landing lee como `origen` y manda a la suite como fuente del lead. El lunes
> cada contacto se puede imputar a esta noche.

---

## 1. Los 60 segundos, golpe por golpe

**0 a 8 segundos. La presentación, una sola frase.**

> «Carlos Meza, tengo un estudio de desarrollo de software acá en Bucaramanga. Le hacemos a las
> empresas el sistema que necesitan y que no encuentran hecho.»

Se dice y se calla. No se agrega «y también páginas web, y bots, y automatización». <!-- guardrail:ignorar --> Esa lista es lo
que convierte a SoltyAI en la agencia genérica de la esquina, y la persona deja de acordarse de nada.

**8 a 20 segundos. La pregunta que abre.**

> «¿Qué es lo que en tu empresa todavía se hace a mano y todo el mundo sabe que se hace a mano?»

Es la única pregunta obligatoria de la noche. Funciona porque no pide un diagnóstico: pide una queja,
y de esas todo dueño tiene una lista. Después de preguntarla **se calla**. El silencio es la
herramienta; quien habla primero, pierde.

Si la persona se queda en blanco, la versión con muletas:

> «Te lo pregunto de otra forma: si mañana se te enferma una sola persona del equipo, ¿cuál es la que
> te para el negocio?»

**20 a 45 segundos. Escuchar, y devolver una sola pregunta de implicación.**

Acá no se vende nada. Se escucha y se hace **una** pregunta más, la que convierte «sí, me pasa» en
«tengo que arreglar eso». Elegí la que encaje:

- «¿Y eso cuánto le come al día a la persona que lo hace?»
- «¿Qué pasa cuando esa persona no está?»
- «¿Cuántas veces al mes toca corregir un error de ahí? ¿Qué cuesta corregirlo?»
- «Si mañana te entrara el doble de trabajo, ¿qué se rompe primero?»

Una, no cuatro. Esto es un evento, no una reunión de descubrimiento: el trabajo de esta noche es que
él nombre el problema en voz alta y se acuerde de que lo nombró.

**45 a 60 segundos. El cierre con el QR.**

> «Mira, eso que me contaste es exactamente lo que hacemos. Te muestro un código, lo escaneas y te
> queda mi contacto guardado. Ahí mismo puedes escribirme por WhatsApp cuando quieras, o dejarme el
> caso escrito si prefieres que hablemos con calma la otra semana. ¿Lo escaneas?»

Se saca el celular con el QR **ya abierto**, no se busca delante de la persona. Y se pide el escaneo
de forma directa: «¿lo escaneas?» es una pregunta cerrada que se contesta con un gesto, no con una
decisión de compra.

**Si él escanea, se anota el nombre.** En el momento, en las notas del celular: nombre, empresa, y la
frase con la que describió su problema, **textual**. Esa frase es la primera línea del mensaje del
sábado y después la primera línea de la propuesta. Una propuesta que empieza con la frase del cliente
no se discute igual que una que empieza con nuestras funcionalidades.

---

## 2. Las tres variantes, según lo que conteste

### Variante A · «Necesito una página, no tengo nada en internet»

> «Eso es lo más rápido de resolver de todo lo que hago. Una sola página con lo que haces, para
> quién, y un formulario que te llega al correo, arranca en $400.000 más IVA. Si lo que necesitas es
> un sitio con varias secciones, sube. Lo que sí te digo de una: el dominio queda a tu nombre, no al
> mío, porque ya me tocó rescatar sitios de gente que perdió el suyo.»

Cierre: «Escanea y te mando dos ejemplos el lunes para que veas de qué tamaño estoy hablando.»

⚠️ **$400.000 es el piso de la línea de web, no la tarifa de todo.** El alcance cerrado ES el margen:
una página, plantilla propia, textos que entrega el cliente. Si en la conversación aparece una
integración, una segunda página o «y que me escriban los textos», la respuesta correcta no es un
descuento mental, es: «eso ya es otra línea, deja te lo cotizo bien».

### Variante B · «Tengo un proceso que se hace a mano y me duele»

Esta es la buena. Es la línea que hoy factura.

> «Cuéntame el paso exacto. ¿Quién lo hace, cuántas veces al día, y qué pasa cuando se equivoca?»

Y después de que conteste:

> «Eso tiene arreglo. Lo que yo hago no es venderte otro programa: es meterme en ese paso puntual y
> hacer que deje de existir. Antes de proponerte nada hago un diagnóstico pagado, $600.000 más IVA,
> que es una sesión sobre tu proceso real y un documento con el mapa y el precio de lo que costaría
> arreglarlo. Si contratas dentro de los 30 días, ese diagnóstico se te descuenta completo. Los
> proyectos arrancan en $3.000.000 más IVA.»

**El precio se dice acá, de pie, y no se guarda para después.** No es para cerrar: es para
descalificar barato. Si a la persona eso le queda lejísimos, mejor saberlo en el minuto uno que
después de medio día escribiendo una propuesta.

Cierre: «Escanea y el sábado te escribo para ver si vale la pena sentarnos 20 minutos.»

### Variante C · «Ya tengo sistemas y quiero que hablen entre ellos»

> «Lo que casi siempre me encuentro es que la empresa ya compró un sistema, y después contrató a
> alguien para hacer a mano lo que el sistema no hace. Ese sueldo es el precio real de ese software,
> solo que no aparece en la factura. Yo no vengo a venderte otro sistema: conecto el que ya tienes
> para que ese paso a mano deje de existir.»

Y la pregunta que sigue, siempre:

> «¿Qué sistemas tienes andando hoy, y cuál es el paso que quedó por fuera?»

Si menciona facturación, contabilidad o DIAN, ahí va lo único que nadie más en el salón puede decir:

> «Nosotros estamos habilitados por la DIAN como facturadores electrónicos, con nuestro propio
> prefijo y resolución. Pasamos por el trámite completo. La mayoría del software que se vende acá
> viene de afuera y no sabe de retención en la fuente, de régimen simple ni de ICA.»

Cierre: «Escanea, y el lunes te mando por escrito qué se puede conectar y qué no. Eso no te cuesta.»

---

## 3. Lo que NO se dice esta noche

- 🔴 **La palabra «chatbot» no abre una conversación, nunca.** <!-- guardrail:ignorar --> Si alguien pregunta, se contesta
  («sí, también tenemos eso, es una suscripción aparte») y se vuelve a lo que él dijo que le duele.
  Es la línea que Meta regala gratis dentro de WhatsApp y la que no ha vendido nunca. Abrir con eso
  es competir de frente con algo que es casi gratis, y contra un producto de Meta.
- 🔴 **Ninguna métrica.** Nada de «le redujimos tiempos», «atiende X pedidos al día», «mejoramos en
  tanto por ciento». No se han medido. Lo que sí se puede decir son hechos con testigo: contrato
  firmado, factura electrónica emitida, sistema andando en producción con dominio propio.
- 🔴 **Nada gratis que consuma tiempo del fundador.** No existe el diagnóstico gratis, ni la
  auditoría gratuita, ni «déjame le echo un ojo y te digo». El diagnóstico es pagado y se descuenta
  del proyecto. Lo único gratis que sí se ofrece es mostrar algo que ya existe.
- **Ningún plazo de entrega improvisado.** «En dos semanitas te lo tengo» es la frase que arruina el
  primer proyecto. Lo correcto: «el plazo sale del diagnóstico, no de una corazonada».
- **Ninguna promesa de chat en la página web del cliente.** Ese widget no está construido.
- **Ningún precio que no esté en el catálogo.** Los cuatro que se pueden decir de memoria esta noche:
  página sencilla **$400.000**, diagnóstico **$600.000**, proyecto a la medida **desde $3.000.000**
  (todos más IVA) y la plataforma de domicilios **$370.000 al mes con IVA incluido**. Cualquier otra
  cifra: «deja lo miro bien y te lo mando por escrito».
- **La lista de todo lo que hacemos.** Un mensaje por conversación. Si de verdad hace falta nombrar
  dos cosas, la segunda va como respuesta a una pregunta suya, no como oferta nuestra.

---

## 4. El mensaje del sábado por WhatsApp

Se manda el **sábado 12 en la mañana**, no el domingo y no el lunes: el viernes en la noche todavía
está fresco y el lunes ya compite con la bandeja de entrada de la semana.

**Plantilla (263 caracteres con los campos llenos de ejemplo):**

```
Hola [NOMBRE], soy Carlos Meza, de SoltyAI. Nos vimos anoche en el evento.

Me quedé pensando en lo que me contaste de [LO QUE DIJO, con sus palabras]. Creo que eso tiene arreglo.

¿Te sirve que hablemos 20 minutos la otra semana y te digo de una si vale la pena o no?
```

**Las reglas del mensaje, que son las que hacen que conteste:**

1. **Una sola pregunta, y que se conteste con un sí o un no.** Nada de «cuéntame más».
2. **Su frase, con sus palabras.** Si dijo «se me pierden los pedidos del sábado», eso se escribe
   así, no traducido a «gestión de pedidos».
3. **Sin link.** El link es lo que hace que el mensaje parezca publicidad. Ya tiene el contacto
   guardado del QR, no hay nada que mandarle todavía.
4. **Sin PDF, sin presentación, sin catálogo adjunto.** Eso se manda cuando él lo pida.
5. **Texto plano.** Sin asteriscos, sin viñetas, sin emojis de más.
6. **Si no contesta, se escribe una sola vez más el jueves siguiente y se para.** Un tercer mensaje
   sin respuesta convierte un contacto tibio en un bloqueo.

**Variante para el que no contó ningún problema** (escaneó por cortesía):

```
Hola [NOMBRE], soy Carlos Meza, de SoltyAI, nos vimos anoche. Te escribo por si acaso: ¿hay algo en [SU EMPRESA] que hoy se haga a mano y que ya les esté estorbando? Si sí, te digo gratis si tiene arreglo o no. Si no, quedo por acá y con gusto.
```

*(238 caracteres.)*

---

## 5. El lunes, antes de cualquier otra cosa

Cada persona que escaneó entra a la suite **el lunes 14 a primera hora**, no «cuando haya tiempo»:
nombre, empresa, la frase textual que dijo, y de qué variante fue la conversación (A, B o C). Un
contacto que solo vive en las notas del celular deja de existir en cuatro días, y el motivo de cada
cierre y cada pérdida es lo único que va a permitir leer el patrón cuando haya diez.

<!-- /canal -->

---

## Control

- **Línea:** L3, servicio a la medida. No se nombra la línea del bot salvo como respuesta a una
  pregunta directa del interlocutor.
- **Precios:** los cuatro que se pueden decir salen de `data/catalogo.json` y de
  `canon.lineaServicios.pisoPrecio`. Este archivo no define ninguno.
- **Prueba social:** solo hechos con testigo. Cero métricas.
- **Canal declarado:** `organico`. Ojo con la confusión fácil: `evento` sí existe desde el 8-sep,
  pero como **fuente de atribución** (`canon.json → utm.source`), y el marcador `<!-- canal: … -->` se
  juzga contra otra lista, `canon.json → mensajeLiderPorCanal`, donde `evento` no está. Declararlo acá
  sería 🔴 `canal:desconocido` y dejaría el bloque sin vigilar creyendo que lo vigila. `organico`
  lleva `servicio`, que es justo la línea de esta noche; `outbound` habría sido peor porque lleva la
  del bot.
- **Origen:** `evento_empresarios_qr`, registrado en `../data/links.json` con `npm run link nuevo`,
  fuente `evento`, medio `qr`, campaña `2026-09-11`.
