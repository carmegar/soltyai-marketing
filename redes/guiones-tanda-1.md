# Tanda 1 de video: los 10 guiones

> **Sesión A de `16-CONTENIDO-VIDEO.md` §4.** Los 10 dolores salen de `npm run dolores tanda --n=10`.
>
> **Escritos el 2026-08-20.** Se graban los diez seguidos, mismo día, misma ropa, misma luz.
> Nunca uno por día: esa es la diferencia entre esto vivo en la semana 4 y esto muerto.
>
> ## 🔄 Reordenados el 2026-08-22 — y el motivo importa más que el orden
>
> El orden original ponía arriba las fichas con ★ (evidencia propia), que es un buen criterio de
> producción. El problema es que **siete de los diez guiones son de la línea `bot`**, y salían a
> LinkedIn, donde el canon dice desde el 17-ago que el mensaje líder es el **servicio**. Nada lo iba
> a cazar: el guardrail `mensajeLider` **excluye `redes/` a propósito** (`src/guardrails/reglas.js`),
> así que la primera tanda habría salido contradiciendo la decisión de hace cinco días — es el mismo
> modo de falla del caso Promatel, la regla existía y el patrón no alcanzaba la pieza.
>
> El orden nuevo sale de la arquitectura de oferta (**`../18-ARQUITECTURA-DE-OFERTA.md`**):
>
> | Abre | Guiones | Red | Por qué |
> |---|---|---|---|
> | **L1 producto vertical** | #1 (domicilios) | LinkedIn | Es la línea del **único cliente que paga**, y su evidencia es el piloto de Bucaradomi |
> | **L3 servicio a la medida** | #2, #3, #4 | LinkedIn | Es la línea que hoy factura y sostiene el runway |
> | **L2 bot** | #5 a #10 | IG + TikTok | Sigue vivo, pero deja de abrir: es lo que Meta regala |
>
> **No se reescribió ni un guion.** Sólo cambió el orden y se le puso destino a cada uno. Cada bloque
> conserva anotado su número viejo para que nada se pierda al comparar con el `dolores.json`.

## Cómo se usan

- **~140 palabras = 55 segundos.** Si al leerlo en voz alta pasa de 60, se corta del golpe 2.
- Se lee **de corrido**, no se memoriza. El tropiezo se edita, la lectura rígida no se arregla.
- Los números están **escritos en letras a propósito**: leídos en voz alta salen bien.
- **El supuesto se dice siempre.** No es un adorno de honestidad, es lo que hace que el que se
  reconoce corrija el número en su cabeza y se convenza solo.
- **Se habla en horas, nunca en pesos.** El costo-hora sigue sin verificar. Si el dueño quiere
  pesos, que ponga su número.
- Los tres sin ★ (**8, 9, 10** en el orden nuevo) **no tienen evidencia propia**: se cuenta el dolor
  y nunca un caso. Nada de «un cliente nuestro». No existe.
- La **primera línea del post** va aparte porque LinkedIn corta en «ver más» y esa línea decide si
  alguien pone play. No es el guion.

---

## 1 ★ ¿Cuántas veces te ha tocado repetirle la dirección al domiciliario?

`direccion-dictada-al-domiciliario` · Restaurante y domicilios · N1 Ordenar · bot
**Red:** LinkedIn · *(orden viejo: número 4)*
**Evidencia:** el piloto de Bucaradomi despacha así.

> ¿Cuántas veces te ha tocado repetirle la dirección al domiciliario?
>
> Veinticinco despachos al día, dos minutos entre dictar, confirmar y aclarar el punto de
> referencia. Dieciocho horas al mes. Es mi supuesto. Ajústalo a tu operación.
>
> Pero lo que de verdad duele no es dictar. Es la dirección mal escuchada: veinte minutos de moto
> para el lado equivocado y un cliente con la comida fría.
>
> Se puede hacer que el domiciliario reciba la dirección tal como la escribió el cliente, con el
> punto puesto en el mapa. Nadie la dicta y nadie la vuelve a escribir. Y si el cliente la escribió
> mal, al menos está mal una sola vez y no tres.
>
> Dieciocho horas al mes. Si quieres verlo funcionando, escríbeme y te lo muestro.

**Primera línea del post:** Una dirección mal escuchada son veinte minutos de moto y un cliente con
la comida fría.

---

## 2 ★ ¿Todavía tienes a alguien digitando facturas?

`digitar-la-factura-del-proveedor` · Contable y administrativo · N2 Automatizar · a la medida
**Red:** LinkedIn · *(orden viejo: número 5)*
**Evidencia:** es el motor contable, y podemos mostrarlo corriendo.

> ¿Todavía tienes a alguien digitando facturas?
>
> Ochenta facturas al mes, seis minutos cada una entre abrir, leer, digitar y verificar. Son ocho
> horas al mes. Suena poco, y por eso nadie lo pelea nunca.
>
> El costo real es otro. El dígito que se transpuso al escribir no lo detecta nadie hasta la
> conciliación, dos meses después, y para entonces averiguar qué pasó cuesta más que las ocho horas.
>
> Y acá está lo que casi nadie aprovecha: la factura electrónica ya viene en un formato que la
> máquina entiende. O sea que digitar es volver a escribir algo que ya está escrito. Ese trabajo no
> se acelera, se elimina entero.
>
> Ocho horas al mes y los errores que traen. Si te interesa verlo con tus facturas, escríbeme.

**Primera línea del post:** La factura electrónica ya viene en un formato que la máquina entiende.
Digitarla es volver a escribir algo que ya está escrito.

---

## 3 ★ ¿Todavía haces los recibos con talonario?

`recibo-y-cobro-a-mano-al-cierre` · Salud y consultorios · N1 Ordenar · a la medida
**Red:** LinkedIn · *(orden viejo: número 10)*
**Evidencia:** es lo que hace nuestro propio back-office, y por eso podemos mostrarlo funcionando.

> ¿Todavía haces los recibos con talonario?
>
> Veinte cobros al día, tres minutos entre escribir el recibo, entregarlo y anotarlo. Veintidós
> horas al mes, según mi supuesto. Y a eso súmale cuadrar la caja al cerrar.
>
> Lo que pasa es que ese trabajo no queda en ninguna parte. El recibo escrito a mano no te sirve de
> nada en diciembre, cuando toca declarar y te toca reconstruir el año a punta de memoria y
> talonarios.
>
> Se puede hacer que el cobro quede registrado en el momento en que ocurre, y que el soporte salga
> solo. Lo mismo que ya haces, pero contado una vez. En diciembre no hay nada que reconstruir.
>
> Veintidós horas al mes, y un cierre de año que deja de doler. Si quieres verlo, escríbeme.

**Primera línea del post:** El recibo escrito a mano no te sirve de nada en diciembre, cuando toca
reconstruir el año.

---

## 4 ★ Cada cotización que mandas, ¿la armas copiando la del mes pasado?

`cotizar-desde-cero-cada-vez` · Profesional independiente y agencia pequeña · N2 Automatizar · a la medida
**Red:** LinkedIn · *(orden viejo: número 6)*
**Evidencia:** nuestro back-office hace exactamente esto, y lo usamos todos los días.

> Cada cotización que mandas, ¿la armas copiando la del mes pasado?
>
> Si son ocho cotizaciones al mes y cada una te toma cincuenta minutos entre armarla, revisarla y
> darle formato, son casi siete horas. Ese es mi supuesto, y en tu caso puede ser peor si cotizas
> cosas distintas cada vez.
>
> Lo grave no son las horas. Es que copiar la anterior arrastra el precio y el alcance de la
> anterior. Así es como uno termina cotizando barato sin darse cuenta, durante meses.
>
> Se puede hacer que la cotización se arme sola desde un catálogo con los precios vigentes, y salga
> en PDF con tu marca puesta. El precio deja de depender de tu memoria.
>
> Casi siete horas al mes. Si quieres ver cómo se ve con tus servicios, escríbeme.

**Primera línea del post:** Copiar la cotización del mes pasado arrastra el precio del mes pasado.
Así es como uno cotiza barato sin darse cuenta.

---

## 5 ★ ¿Todavía copias a un cuaderno los pedidos que te llegan por WhatsApp?

`pedidos-de-whatsapp-al-cuaderno` · Comercio y distribución · N1 Ordenar · bot
**Red:** LinkedIn + IG · *(orden viejo: número 3)*
**Evidencia:** es exactamente lo que hace el piloto de Bucaradomi desde el año pasado.

> ¿Todavía copias a un cuaderno los pedidos que te llegan por WhatsApp?
>
> Digamos veinticinco pedidos al día, dos minutos cada uno entre leer el chat, escribirlo y
> verificar que quedó bien. Son dieciocho horas al mes. Es un supuesto, pero si vendes por chat
> sabes que no estoy exagerando.
>
> Y el problema de fondo no son las horas. Es que el pedido que no se copió no existe. Se despacha
> el que alguien recordó, y el que se perdió aparece cuando el cliente reclama.
>
> Lo que se puede hacer es que el pedido quede registrado solo cuando entra, con el nombre, lo que
> pidió y la dirección. Nadie transcribe nada, y al final del día la lista ya está armada.
>
> Dieciocho horas al mes. Si quieres ver cómo se vería con tus pedidos, escríbeme.

**Primera línea del post:** El pedido que no alcanzaste a copiar al cuaderno no existe. Y sólo te
enteras cuando el cliente reclama.

---

## 6 ★ ¿Tu recepcionista agenda o alcanza a hacer algo más?

`agendar-citas-contestando-el-telefono` · Salud y consultorios · N2 Automatizar · bot
**Red:** IG + TikTok · *(orden viejo: número 1)*
**Evidencia:** el vertical de citas está construido.

> ¿Tu recepcionista agenda, o alcanza a hacer algo más?
>
> Piensa en un día normal. Si son treinta llamadas para agendar y cada una toma cuatro minutos entre
> buscar el espacio, confirmar los datos y anotar, eso da cuarenta y cuatro horas al mes. Es un
> supuesto mío. Pon tu propio número, que seguro no baja mucho.
>
> Y hay algo que esa cuenta no muestra. El paciente que llamó a las siete de la noche no agendó
> nada. Y casi la mitad de esas llamadas son para reagendar algo que ya estaba puesto.
>
> Se puede hacer distinto. El paciente entra al chat, ve los espacios que de verdad están libres y
> queda agendado solo. Tu recepcionista atiende a los que están en la sala, que es lo único que ahí
> no se puede reemplazar.
>
> Cuarenta y cuatro horas al mes. Si quieres ver cómo se vería en tu consultorio, escríbeme.

**Primera línea del post:** Cuarenta y cuatro horas al mes contestando el teléfono para agendar. Y
el que llamó a las siete de la noche igual no agendó.

---

## 7 ★ ¿Cuántas veces mandaste hoy las mismas fotos del mismo apartamento?

`misma-ficha-del-inmueble-veinte-veces` · Inmobiliaria y arriendos · N2 Automatizar · bot
**Red:** IG + TikTok · *(orden viejo: número 2)*
**Evidencia:** el vertical inmobiliario está construido y probado punta a punta.

> ¿Cuántas veces mandaste hoy las mismas fotos del mismo apartamento?
>
> Si son veinte interesados al día y cada uno te toma cuatro minutos entre buscar las fotos,
> mandarlas y contestar las tres preguntas de siempre, son veintinueve horas al mes. Ese es mi
> supuesto. El tuyo sabrás si es más o menos.
>
> Lo caro no es eso. Es que el que preguntó el sábado a las diez de la noche recibe respuesta el
> lunes, y para el lunes ya vio otros cuatro.
>
> Lo que se puede hacer es que el interesado reciba la ficha completa apenas pregunta. Fotos,
> precio, administración y barrio, a la hora que sea. Tú entras cuando ya quiere ver el inmueble.
>
> Veintinueve horas al mes. Si quieres verlo con tus propios inmuebles, escríbeme.

**Primera línea del post:** El que te preguntó por el apartamento el sábado a las diez de la noche
ya vio otros cuatro antes de que le contestaras.

---

## 8 ¿Te ha pasado que dos clientas quedaron a la misma hora?

`agendar-por-dos-canales-al-tiempo` · Belleza y bienestar · N2 Automatizar · bot
**Red:** IG + TikTok · *(orden viejo: número 9)*
**Sin evidencia propia:** se cuenta el dolor. Nada de casos.

> ¿Te ha pasado que dos clientas quedaron a la misma hora?
>
> Pasa porque las citas entran por dos lados. Instagram por un lado, WhatsApp por el otro, y ninguna
> agenda que sepa lo que hizo la otra. Veinticinco solicitudes al día repartidas entre los dos
> chats, tres minutos cada una: veintiocho horas al mes.
>
> Pero el problema no son las horas. La doble reserva se resuelve haciendo esperar a alguien, y esa
> clienta no reclama. Simplemente no vuelve, y tú nunca sabes por qué.
>
> Lo que se puede hacer es que los dos chats escriban en la misma agenda. Cuando un espacio se
> ocupa, deja de ofrecerse en el otro canal. Sin que tú tengas que estar mirando los dos.
>
> Veintiocho horas al mes. Si quieres ver cómo funciona, escríbeme.

**Primera línea del post:** La clienta que hiciste esperar por una doble reserva no reclama.
Simplemente no vuelve.

---

## 9 ¿Cuántas fotos de motores tienes hoy en el chat sin contestar?

`cotizar-la-reparacion-por-chat-con-fotos` · Taller y servicio técnico · N2 Automatizar · bot
**Red:** IG + TikTok · *(orden viejo: número 8)*
**Sin evidencia propia:** se cuenta el dolor. Nada de casos.

> ¿Cuántas fotos de motores tienes hoy en el chat sin contestar?
>
> Quince consultas al día, seis minutos cada una entre ver las fotos, oír el audio, preguntar lo que
> falta y cotizar. Treinta y tres horas al mes. Ese es mi supuesto.
>
> Y lo que no se ve es lo caro. El que no recibió respuesta en dos horas ya llamó a otro taller. Tú
> ni siquiera sabes que existió, así que ese cliente perdido no aparece en ninguna cuenta.
>
> Lo que se puede hacer es que el cliente entregue los datos que siempre faltan antes de que tú
> mires el chat. Modelo, año, qué le pasa y desde cuándo. Cotizas una vez en vez de tres, y
> contestas al que estaba esperando.
>
> Treinta y tres horas al mes. Si quieres ver cómo se vería en tu taller, escríbeme.

**Primera línea del post:** El cliente que no recibió respuesta en dos horas ya llamó a otro taller.
Y tú ni sabes que existió.

---

## 10 En temporada de matrículas, ¿cuántas veces al día explicas lo mismo?

`las-mismas-diez-preguntas-de-matricula` · Educación y academias · N2 Automatizar · bot
**Red:** IG + TikTok · *(orden viejo: número 7)*
**Sin evidencia propia:** se cuenta el dolor. Nada de casos.

> En temporada de matrículas, ¿cuántas veces al día explicas lo mismo?
>
> Treinta y cinco consultas diarias en el pico, cuatro minutos cada una. Son cincuenta y una horas
> al mes. Es un supuesto, pero si tienes academia sabes que en temporada es más.
>
> Y fíjate en la trampa. El pico es justo cuando se define el año, y es justo cuando peor atiendes,
> porque estás repitiendo horarios y requisitos en vez de hablar con el que ya casi se matricula.
> La gente termina decidiendo con quien le contestó primero.
>
> Las preguntas de siempre se pueden contestar solas, a cualquier hora. Y a ti te llega sólo el que
> ya está decidiendo, que es con el que vale la pena sentarse.
>
> Cincuenta y una horas al mes. Si quieres verlo, escríbeme.

**Primera línea del post:** En temporada de matrículas atiendes peor justo cuando se define el año.
No es descuido: es volumen.

---

## Lista para la sesión B (grabación)

Se graban en este orden, que **cambió el 2026-08-22** (ver la nota del encabezado). Los cuatro
primeros son los que abren en LinkedIn: son los que hay que leer mejor.

| # | Gancho de arranque | Sector | Red | Línea |
|---|---|---|---|---|
| 1 | ¿Cuántas veces te ha tocado repetirle la dirección al domiciliario? | Domicilios | LinkedIn | **L1 producto vertical** |
| 2 | ¿Todavía tienes a alguien digitando facturas? | Contable | LinkedIn | L3 a la medida |
| 3 | ¿Todavía haces los recibos con talonario? | Salud | LinkedIn | L3 a la medida |
| 4 | Cada cotización que mandas, ¿la armas copiando la del mes pasado? | Profesional | LinkedIn | L3 a la medida |
| 5 | ¿Todavía copias a un cuaderno los pedidos que te llegan por WhatsApp? | Comercio | LinkedIn + IG | L2 bot |
| 6 | ¿Tu recepcionista agenda o alcanza a hacer algo más? | Salud | IG + TikTok | L2 bot |
| 7 | ¿Cuántas veces mandaste hoy las mismas fotos del mismo apartamento? | Inmobiliaria | IG + TikTok | L2 bot |
| 8 | ¿Te ha pasado que dos clientas quedaron a la misma hora? | Belleza | IG + TikTok | L2 bot |
| 9 | ¿Cuántas fotos de motores tienes hoy en el chat sin contestar? | Taller | IG + TikTok | L2 bot |
| 10 | En temporada de matrículas, ¿cuántas veces al día explicas lo mismo? | Educación | IG + TikTok | L2 bot |

**Recordatorio de la sesión D:** el link va en el primer comentario con su `origin`
(`npm run link nuevo`), nunca en el cuerpo del post. Sin `origin` el lead llega sin fuente y el
carril no se puede evaluar.
