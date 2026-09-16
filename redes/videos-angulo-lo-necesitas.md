# Serie «¿Y tú lo necesitas?»: cinco guiones para cuatro canales

> Cinco videos que explican qué es una cosa (página web, desarrollo a la medida, ERP, CRM, bot) y
> terminan diciéndote **si la necesitas o no**, incluido el caso en que la respuesta es que no.
> Para LinkedIn, Instagram, TikTok y YouTube Shorts, con mecánica de «comenta la palabra y te
> escribo».
>
> **La regla de la casa manda sobre la idea de la serie** (`16-CONTENIDO-VIDEO.md`): un video, un
> dolor concreto, plantilla de cuatro golpes, unas 140 palabras, se habla en horas y no en pesos, y
> el CTA es blando y de conversación.
>
> ### La tensión que hay que resolver antes de grabar, y cómo se resuelve
>
> «¿Qué es una página web?» es una **categoría**, y el doc 16 dice textualmente que una categoría no
> es un video: *«Automatización para pymes» no es un video. «¿Todavía copias a un cuaderno los
> pedidos que te llegan por WhatsApp?» sí, porque el que lo hace se reconoce en tres segundos.*
>
> La salida no es botar la idea del fundador, que es buena: es invertir el orden. **La categoría es
> el título de la serie; el video abre con la escena.** Ninguno de los cinco arranca definiendo
> nada. Arrancan con una tarea manual que el espectador hace, y la palabra (web, ERP, CRM, bot) sólo
> aparece en el tercer golpe, cuando ya se reconoció en el problema. La pregunta «¿lo necesitas?»
> va al final, y **en tres de los cinco la respuesta honesta incluye un «todavía no»**. Ese «no» es
> lo que hace creíble el «sí», y es lo que ningún competidor está diciendo.

---

## Orden de publicación

| # | Video | Palabra | Canales | Por qué ahí |
|---|---|---|---|---|
| 1 | Página web | `WEB` | LinkedIn, Instagram, Facebook, TikTok, YouTube Shorts | El escalón de entrada más barato y el que más gente reconoce. Abre |
| 2 | Desarrollo a la medida | `MEDIDA` | LinkedIn, Instagram, Facebook, TikTok, YouTube Shorts | La línea que hoy factura. Abre junto con el 1 |
| 3 | ERP | `ERP` | LinkedIn, Instagram, Facebook, TikTok, YouTube Shorts | Sube el nivel de conversación y filtra empresa con operación |
| 4 | CRM | `CRM` | LinkedIn, Instagram, Facebook, TikTok, YouTube Shorts | Igual, y engancha con el 3 |
| 5 | Bot | `BOT` | Instagram, Facebook, TikTok | **Va de último y no abre.** Ver el aviso de abajo |

**Cadencia:** uno por semana (el viernes, dentro de la cadencia diaria de `16 §5`), en ese orden,
video nativo subido a cada red. **Sin link en ningún post ni en ningún comentario:** el link vive en
Destacados del perfil de LinkedIn y en la bio de cada red, con su `origin` por red
(`npm run link nuevo`). El «link en el primer comentario» está suprimido en LinkedIn desde 2026.

> 🔄 **2026-09-15: cada video lleva dos cierres, uno por red** (`20-ORGANICO-QUE-CAMBIA.md` C3).
> «Comenta la palabra» es engagement bait en LinkedIn desde marzo-2026 (el post se suprime y el
> castigo dura semanas; cifras y fuentes en el doc 20), y sigue siendo válido en Instagram, Facebook
> y TikTok. Se graba el golpe 4
> dos veces, con la frase de cada red; el pipeline arma las dos versiones. Se grabaron marcados
> abajo en cada guion.

> ⚠️ **El video 5 sale con un 🟡 conocido del guardrail, y es a propósito.** Nombra la línea del bot,
> y `canon.json → mensajeLiderPorCanal` pone Instagram y TikTok en la lista de `servicio` desde el
> 17-ago, mientras `18-ARQUITECTURA-DE-OFERTA.md §4` mandó a propósito la línea del bot a esos dos
> canales el 22-ago. Las dos decisiones se contradicen y ninguna es un error de dedo: por eso sale
> aviso y no error. **Lo que sí es error 🔴 y no puede pasar: que un mismo video nombre las dos
> líneas.** Cada uno de los cinco nombra una sola.

---

## 1. Página web

<!-- canal: linkedin, instagram, facebook, tiktok, youtube -->

**Gancho para la primera línea del post (no es el guion del video):**
`Antes de pagar una página web, revisa si de verdad la necesitas. A veces no.`

**Guion (unas 145 palabras, 55 segundos):**

> **(0 a 3 s)** ¿Cuántas veces al día te toca explicar por WhatsApp lo mismo que debería estar
> escrito en algún lado? Qué vendes, dónde quedas, cuánto vale.
>
> **(3 a 15 s)** Pon un supuesto tuyo, no mío: diez veces al día, tres minutos cada una entre que
> buscas la foto, copias el texto y respondes el precio. Eso es media hora diaria, unas diez horas
> al mes escribiendo lo mismo. Y hay un costo que ni ves: el que te buscó en Google un domingo, no
> encontró nada, y le escribió a otro.
>
> **(15 a 40 s)** Una página web no es un folleto bonito. Es una sola dirección donde está qué
> haces, para quién, y un formulario que te llega al correo. Se arma con tu logo y tus colores,
> usando los textos que ya tienes escritos en el WhatsApp de tanto repetirlos, y sale publicada con
> tu dominio, a tu nombre.
>
> **(40 a 55 s)** Vuelve a esas diez horas del mes. ¿La necesitas? Si te buscan y no apareces, sí.
> Si vives de clientes que ya te conocen y no piensas crecer, todavía no.
> **Cierre IG/FB/TikTok:** Comenta WEB y te escribo.
> **Cierre LinkedIn/Shorts:** Si te pasa, escríbeme y te cuento cómo se vería en tu caso.

---

## 2. Desarrollo a la medida

**Gancho para la primera línea del post:**
`El programa que compraste hace casi todo. Para lo que no hace, contrataste a alguien. Ese sueldo es el precio real del programa.`

**Guion (unas 150 palabras):**

> **(0 a 3 s)** ¿Tienes un Excel que sólo una persona sabe manejar? ¿Y cuando esa persona sale a
> vacaciones el negocio entero se pone nervioso?
>
> **(3 a 15 s)** Supuesto: esa persona le mete dos horas diarias a mover datos de un lado a otro.
> Cuarenta horas al mes que no son su trabajo, son el pegante entre dos programas que no se hablan.
> Y el costo que no ves es que ese Excel es la memoria de tu negocio, y hoy vive en un computador y
> en una cabeza.
>
> **(15 a 40 s)** Software a la medida no es un sistema gigante ni un proyecto de un año. Casi
> siempre es una pieza chiquita que hace ese paso puntual: toma lo de allá, lo pone acá, y te avisa
> cuando algo no cuadra. Se construye encima de lo que ya tienes, no sobre las cenizas de lo que ya
> pagaste.
>
> **(40 a 55 s)** Vuelve a esas cuarenta horas. ¿Lo necesitas? Sólo si ese paso a mano ya te costó
> plata o un cliente. Si todavía no, guarda el video para cuando pase.
> **Cierre IG/FB/TikTok:** Comenta MEDIDA y te escribo.
> **Cierre LinkedIn/Shorts:** Si ya te pasó, escríbeme y te cuento cómo se resolvería en tu caso.

---

## 3. ERP

**Gancho para la primera línea del post:**
`Si la misma venta la digitas tres veces, el problema no es que te falte disciplina.`

**Guion (unas 145 palabras):**

> **(0 a 3 s)** ¿La misma venta la digitas tres veces? Una en el cuaderno, otra en el Excel del
> inventario, y otra cuando le pasas todo al contador.
>
> **(3 a 15 s)** Supuesto: veinte ventas al día, un minuto de más por cada digitada repetida. Es una
> hora diaria haciendo lo mismo tres veces. Y lo que de verdad duele no es la hora: es que las tres
> listas nunca dan igual, y llega el momento en que ya no sabes cuál creerte.
>
> **(15 a 40 s)** ERP es una palabra fea para algo simple: un solo lugar donde vive la información
> del negocio. Se registra una vez, y de ahí salen el inventario, la venta y lo que necesita el
> contador. No se trata de comprar el ERP más caro que exista. Se trata de que haya un solo dato, y
> que los demás lo lean en vez de volverlo a escribir.
>
> **(40 a 55 s)** Vuelve a esa hora diaria. ¿Lo necesitas? Si tu negocio cabe en dos Excel y una
> persona, todavía no. Si ya son tres personas digitando lo mismo, sí, y vas tarde.
> **Cierre IG/FB/TikTok:** Comenta ERP y te escribo.
> **Cierre LinkedIn/Shorts:** Si ya son tres, escríbeme y te cuento por dónde se empieza.

---

## 4. CRM

**Gancho para la primera línea del post:**
`¿Sabes quién te compró en marzo y no ha vuelto? Sin buscar en el WhatsApp.`

**Guion (unas 140 palabras):**

> **(0 a 3 s)** ¿Sabes quién te compró en marzo y no ha vuelto? Sin buscar en el WhatsApp, de
> memoria.
>
> **(3 a 15 s)** Ponle el número tú: ¿cuántos te compraron una sola vez este año y no volvieron?
> Ese dato lo tienes en la cabeza y seguro es más grande de lo que te gustaría. No se fueron
> bravos. Se les olvidó, igual que a ti. Y mientras tanto sigues pagando por conseguir clientes
> nuevos, que es lo más caro que hay.
>
> **(15 a 40 s)** CRM es la libreta de tus clientes, pero que se acuerda sola. Quién es, qué te
> compró, cuándo fue la última vez y qué quedó pendiente. Lo importante no es cuál herramienta:
> es que eso quede escrito en un lugar que no dependa de la memoria de una persona ni de un
> teléfono que se puede perder.
>
> **(40 a 55 s)** ¿Lo necesitas? Si vendes una vez y ya, no. Si tu cliente puede volver, sí, y cada
> mes sin eso es una lista que se enfría.
> **Cierre IG/FB/TikTok:** Comenta CRM y te escribo.
> **Cierre LinkedIn/Shorts:** Si tu cliente puede volver, escríbeme y te cuento cómo se arma.

<!-- /canal -->

---

## 5. Bot

<!-- canal: instagram, facebook, tiktok -->

**Gancho para la primera línea del post:**
`Te escriben el sábado a las nueve de la noche. Contestas el lunes. Ahí se fue la venta.`

**Guion (unas 145 palabras):**

> **(0 a 3 s)** ¿Te escriben el sábado a las nueve de la noche y contestas el lunes en la mañana?
>
> **(3 a 15 s)** Ponle tu número: ¿cuántos mensajes te entran fuera de horario en una semana? De
> esos, los que preguntan lo mismo de siempre, si tienen, cuánto vale, dónde quedan, no necesitaban
> esperarte a ti. Y el que preguntó el sábado y no recibió respuesta, el domingo ya le escribió a
> otro.
>
> **(15 a 40 s)** Un bot de negocio no es un robot que opine de todo. Es un flujo cerrado y corto:
> contesta las cinco preguntas que te hacen siempre, toma el pedido o agenda la cita, y apenas la
> conversación se sale de ese guion te la pasa a ti, con todo lo que ya se habló. Trabaja en
> WhatsApp y en Telegram, que es donde te escriben.
>
> **(40 a 55 s)** ¿Lo necesitas? Sólo si ya te escriben más de lo que alcanzas a contestar. Si te
> escriben cinco personas al día, contéstales tú, que te va a ir mejor. Comenta BOT y te escribo.

<!-- /canal -->

---

## Cómo se responde el comentario y el DM

Esto es la mitad del carril. Un video con dos mensajes bien contestados vale más que uno con muchas
vistas, y la métrica que manda es **conversaciones iniciadas por semana**, no vistas.

### El comentario público

Se contesta corto y **en los primeros 30 minutos** cuando se puede (es lo que más alcance da, `16
§5`): `Listo [NOMBRE], te escribo por interno.` Nada más. La conversación no pasa en los
comentarios. En LinkedIn nadie va a comentar una palabra porque el video no lo pide; el que comenta
algo de sustancia recibe respuesta de sustancia, y si pregunta por su caso, el DM de abajo.

**El DM se manda a mano.** ManyChat gratis bajó a 25 contactos activos al mes (marzo-2026); con el
volumen de hoy no se paga nada, y el día que 25 comentarios por video se queden cortos se compra la
herramienta, no antes.

### El DM: una pregunta, nunca un link

La regla dura es esa. El link es lo que convierte una conversación en publicidad, y el que comentó
una palabra todavía no pidió nada. **Se manda una sola pregunta, específica del video que comentó:**

| Comentó | El DM que se manda |
|---|---|
| `WEB` | Hola [NOMBRE], gracias por comentar. Antes de mandarte nada, cuéntame una cosa: ¿hoy tienes algo en internet, aunque sea una página de Facebook, o arrancarías de cero? |
| `MEDIDA` | Hola [NOMBRE], gracias por comentar. Una pregunta para no mandarte cosas genéricas: ¿cuál es el paso que hoy se hace a mano y que más les estorba? |
| `ERP` | Hola [NOMBRE], gracias por comentar. Cuéntame primero: ¿cuántos programas distintos tienen que abrir hoy para cerrar una sola venta? |
| `CRM` | Hola [NOMBRE], gracias por comentar. Antes de nada: ¿dónde vive hoy la lista de tus clientes, en el WhatsApp, en un Excel, o en algún programa? |
| `BOT` | Hola [NOMBRE], gracias por comentar. Para no hablar en el aire: ¿por dónde te escriben más, WhatsApp o Instagram, y como cuántos mensajes te entran en un día normal? |

**Lo que sigue, según lo que conteste:**

1. **Contesta con un problema real** → una segunda pregunta de implicación («¿y eso cuánto le come
   al día a la persona que lo hace?») y después la propuesta de veinte minutos. Ahí sí se puede
   mandar el enlace a `/contacto` para que agende.
2. **Contesta corto o vago** → una pregunta más, y si sigue vago se deja ahí en buenos términos. No
   se insiste tres veces.
3. **Pide el link o el precio de una** → ahí sí, `soltyai.com/contacto` con su `origin`. **El link a
   `/contacto` sale sólo cuando el prospecto lo pide**, o cuando ya hay una reunión que agendar.
4. **No contesta el DM** → una sola vez más a los cuatro días, y se para.

### Lo que nunca va en el DM

- Un link de entrada, un PDF, un catálogo ni una presentación.
- Un precio suelto sin haber entendido el alcance. Lo que sí se puede decir cuando pregunten:
  página sencilla **desde $400.000 + IVA**; proyecto a la medida, **sin cifra: «tú pones el
  presupuesto y el alcance se acomoda»** (forma `cotizacion` desde el 9-sep). Nada más de memoria.
- Ninguna métrica de resultado. No se han medido, y un número publicado lleva fuente o no va.
- Ningún audio. El que comentó una palabra no pidió un audio de dos minutos.

---

## Control

- **Plantilla:** los cinco siguen los cuatro golpes de `16-CONTENIDO-VIDEO.md §3`, entre 140 y 150
  palabras, unos 55 segundos.
- **Horas y no pesos:** toda la aritmética va en horas y declarada como supuesto del espectador.
  `parametros.costoHoraOperativa` quedó verificado el 15-sep-2026 ($15.200/h), y aun así ni un peso
  de ahorro estimado en cámara: las horas las verifica el espectador; un peso exige fuente y fecha al
  lado (`metricaSinFuente`).
- **Cero métricas de resultado y cero casos inventados.** Los cinco hablan del dolor, ninguno dice
  «un cliente nuestro logró».
- **Un video, un mensaje.** Ninguno mezcla las dos líneas. Los cuatro primeros llevan `servicio`,
  el quinto lleva `bot` y va declarado como tal.
- **Subtítulos quemados**, obligatorio: se ve en silencio.
- **Producción, no producciones:** cara a cámara, celular, luz de ventana, los cinco el mismo día,
  misma ropa y misma luz.
- **Precios:** salen de `data/catalogo.json` y de `canon.lineaServicios.pisoPrecio`. Este archivo no
  define ninguno.
