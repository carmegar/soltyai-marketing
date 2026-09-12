# WhatsApp Business de SoltyAI: todo escrito, listo para pegar

> **Escrito el 2026-09-11**, el día que se compró la SIM. Es el gemelo de
> [`google-business-profile.md`](google-business-profile.md): acá está todo lo que hay que pegar en
> la app al activar el número, en el orden en que la app lo pide. Lo que sólo puede decidir el
> fundador va marcado 🟠 y está resumido al final, en §13.
>
> **El número es `300 570 1661`** (SIM prepago Tigo, comprada el 2026-09-11). Es el mismo que va en
> el Google Business Profile, en el QR del evento y en la landing: un número por canal es cómo se
> pierde el rastro de dónde vino cada quien.
>
> ⚠️ **Esto es la app de WhatsApp Business, no la Cloud API.** Acá contesta una persona. Nada de lo
> que sigue promete plazos de conexión de la API para un cliente, porque ese plazo todavía no se
> puede sostener (`business/estrategia/11` §0.2). El régimen de recarga de la línea, con fuente y
> fecha, está en `business/estrategia/11` §0.3.

---

## 1. Nombre del negocio

```
SoltyAI
```

Igual que en el Google Business Profile y en la landing: el nombre del mundo real, sin ciudad, sin
palabras clave pegadas. WhatsApp deja cambiar el nombre pocas veces, así que se escribe una vez y se
deja quieto.

## 2. Categoría

La app pide una sola, de una lista corta y cerrada. La que corresponde:

```
Servicio profesional
```

Si la lista de tu versión de la app la ofrece con otro nombre, las equivalentes aceptables son
`Servicios profesionales` o `Empresa de informática`. 🔴 **No** se elige «Compras y ventas» ni
«Educación»: cada una cambia qué le sugiere WhatsApp a quien te escribe.

## 3. Foto de perfil

```
redes/solty-fb-perfil.png
```

1024x1024, cuadrada, la misma del Google Business Profile. WhatsApp la recorta en círculo, así que
conviene mirarla antes de subirla para que el logo no quede mordido.

<!-- canal: organico -->

## 4. Descripción del negocio

Cabe en el límite de 512 caracteres (ver la nota de abajo). Se pega tal cual.

```
SoltyAI es un estudio de desarrollo de software en Bucaramanga. Hacemos software a la medida para negocios colombianos: nos conectamos a la operación que ya tienes y le quitamos el trabajo repetitivo.

SOLTYAI S.A.S. está habilitada por la DIAN como facturador electrónico, con certificado y resolución propios. La retención en la fuente, el IVA, el régimen simple y el ICA los tenemos en cuenta desde el diseño.

Empezamos con un diagnóstico pagado que te deja por escrito el mapa de tu proceso y el precio.
```

**El límite, verificado:** la referencia de Meta para el perfil de empresa fija la descripción en
**512 caracteres**, el campo «info» (el estado corto) entre 1 y 139, y la dirección en 256.
⚠️ **La página oficial de esa referencia**
(`developers.facebook.com/docs/whatsapp/cloud-api/reference/business-profiles`) **devolvió HTTP 500
el 2026-09-11 y no se pudo leer de primera mano**; los tres números salen de documentación de
terceros que la citan (docs de 360dialog y de Woztell), así que van marcados como **fuente
secundaria**. El texto de arriba tiene **508 caracteres**, o sea que cabe incluso si el límite real
fuera un poco menor.

## 5. Estado corto (el campo «info», 139 caracteres)

```
Estudio de desarrollo en Bucaramanga. Software a la medida para negocios colombianos. Facturador electrónico habilitado por la DIAN.
```

132 caracteres, dentro del máximo de 139.

## 6. Dirección

🔴 **No se pone dirección.** La única que existe es la vivienda del fundador, y publicarla en
WhatsApp es exactamente lo que el Google Business Profile evita al ir como negocio de área de
servicio. En el campo de ubicación, si la app insiste, se escribe:

```
Bucaramanga, Colombia
```

Y nada más. Si la app pide fijar un pin en el mapa, se salta el paso.

## 7. Horario de atención

🟠 **Decisión del usuario.** Lo que este documento propone, por una razón y no por gusto: es el mismo
horario que ya quedó publicado en el Google Business Profile §7, y dos horarios distintos para el
mismo negocio es una promesa rota en el primer lead que llama.

```
Lunes a viernes, 8:00 a.m. a 6:00 p.m.
Sábado y domingo, cerrado
```

En la app se elige **«Horario personalizado»**, no «Siempre abierto»: «siempre abierto» apaga el
mensaje de ausencia, que es justo la pieza que evita que un mensaje de las 11 de la noche se quede
sin respuesta hasta la mañana.

## 8. Correo y sitio web

```
hola@soltyai.com
```

```
https://soltyai.com
```

Un solo sitio, sin parámetros de campaña: el enlace del perfil de WhatsApp no es un carril de
atribución (el lead ya está adentro del chat) y una URL larga con cola de parámetros se ve como spam
en la ficha. Los enlaces con `origin` siguen viviendo donde sirven: el QR del evento y el campo
«Sitio web» del Google Business Profile.

## 9. Mensaje de bienvenida

Se activa para «Todos los que te escriban por primera vez». Sin formato, sin asteriscos: el cliente
lee texto plano.

```
Hola, soy Carlos de SoltyAI, estudio de desarrollo de software en Bucaramanga.

Cuéntame en una frase qué es lo que en tu negocio todavía se hace a mano, y te digo de una si eso se puede resolver y por dónde se empieza.

Si prefieres, en soltyai.com/contacto queda el caso por escrito y te respondo ahí mismo.
```

Por qué abre con esa pregunta y no con un menú: es la misma que abre la conversación en vivo
(`evento-2026-09-11-guion.md` §1), y funciona porque no pide un diagnóstico, pide una queja.

## 10. Mensaje de ausencia

Se activa con **«Fuera del horario de atención»**, que toma el horario del §7 y no hay que repetirlo.

```
Gracias por escribir. Ahora mismo no estoy en línea: atiendo de lunes a viernes, de 8 a 6.

Déjame acá el mensaje y te contesto apenas abra. Si es urgente o prefieres dejarlo por escrito con más detalle, en soltyai.com/contacto queda registrado y me llega al correo.
```

🔴 Lo que este mensaje **no** dice es un tiempo de respuesta en horas. No se ha medido, y un número
publicado lleva fuente o no va (`canon.json → prohibiciones.metricaSinFuente`).

<!-- /canal -->

## 11. Respuestas rápidas

> **Este bloque no declara canal a propósito, y no es un descuido.** Una respuesta rápida no es una
> pieza de un canal: es el archivador de las respuestas que damos cuando el cliente ya preguntó, y
> `/precios` tiene que poder nombrar a la vez la línea de servicio y la página del chatbot porque el
> que pregunta no sabe de nuestras líneas. Juzgarlo con `mensajeLider` daría 🔴
> `canal:mezcla-de-lineas` sobre algo que está bien. Las prohibiciones del canon sí se le aplican,
> como a todo `redes/`.

La app guarda hasta **50** respuestas rápidas (límite del centro de ayuda de WhatsApp, consultado el 2026-09-11; el máximo de caracteres del atajo **no** lo publica la fuente oficial, así que los de acá se dejaron cortos a propósito). Se escriben sin formato y sin emojis. El atajo se
escribe sin la barra: la app la pone sola.

### `/precios`

```
Te cuento cómo cobramos, que es distinto según qué necesites.

Lo que tiene alcance cerrado va con precio publicado: una página web sencilla desde $400.000 más IVA, y el diagnóstico de automatización en $600.000 más IVA (sesión sobre tu proceso real y documento con el mapa, las oportunidades y la estimación del proyecto; se descuenta completo si contratas dentro de los 30 días).

El desarrollo a la medida se cotiza por alcance: tú pones el presupuesto y acomodamos qué entra, mitad al inicio y mitad contra entrega.

Los planes del chatbot están publicados con su precio en soltyai.com/producto/chatbot.

Cuéntame cuál es tu caso en soltyai.com/contacto y te paso el número de lo tuyo.
```

### `/web`

```
Hacemos tres cosas distintas con páginas web, según de dónde partas.

Una sola página con todo ahí mismo (qué haces, para quién y el formulario que te llega al correo), sobre plantilla propia con tu logo y tus colores, adaptada al celular y publicada con dominio: desde $400.000 más IVA, con una ronda de ajustes. Los textos y las fotos las pones tú.

Sitio corporativo desde cero: $1.500.000 más IVA.

Si ya tienes sitio y su código se puede reutilizar, lo rescatamos y republicamos por $750.000 más IVA.

En los tres casos te proponemos el cuidado mensual del sitio, porque el que se queda sin quien le renueve el dominio lo pierde.

Mándame el caso por soltyai.com/contacto.
```

### `/domicilios`

```
Tenemos SoltyAI Domicilios, Plan Operativo: la plataforma que usa hoy una empresa de domicilios de Bucaramanga para despachar.

Tablero de operador con los pedidos, la asignación y los estados en vivo. Zonas y tarifas que edita el dueño, sin llamarnos. Aplicación en el celular del domiciliario. Alojamiento, monitoreo y copias diarias cifradas fuera del servidor, con soporte en horario hábil.

Se cobra mensual por domiciliario activo en la plataforma, así que el valor depende del tamaño de tu operación y se cotiza por empresa.

Escríbeme por soltyai.com/contacto y te la muestro funcionando.
```

### `/contable`

```
Sí, y es la parte que más se subestima cuando un negocio manda a construir software.

SOLTYAI S.A.S. está habilitada ante la DIAN como facturador electrónico, con responsabilidad 52, certificado digital, prefijo y resolución de numeración propios, y emite así sus propias facturas. O sea que ya recorrimos el trámite completo: firma electrónica del representante legal, certificado, rangos de numeración y notas crédito y débito.

Conectar tu sistema contable o tu ERP con lo que hoy se digita a mano es de lo que más hacemos. Si tu proyecto toca facturación, ese alcance se cotiza con el detalle a la vista desde el principio.

Cuéntame qué sistema tienes andando en soltyai.com/contacto.
```

🔴 **Ojo con esta:** habla de **integrarnos** con el sistema contable del cliente y de nuestra propia
habilitación DIAN, que son hechos con testigo. **No** ofrece el motor contable para firmas contables,
que no está en `data/catalogo.json` y por lo tanto no se vende todavía (prohibición
`servicioFantasma`). Si alguien pregunta por eso, se contesta a mano.

### `/cita`

```
Con gusto. Pídela en soltyai.com/contacto?quiero=llamada, y te mando la invitación de Meet al correo que dejes ahí.

Si me adelantas en una frase de qué se trata, llego con el terreno preparado y no gastamos la reunión en presentaciones.
```

## 12. Catálogo de WhatsApp

**Recomendación, una línea: no llenarlo hoy.** El catálogo de WhatsApp está pensado para productos
con foto y precio fijo, y hoy dos de nuestras tres líneas se cotizan por alcance: llenarlo obligaría
a publicar una cifra donde el canon dice «se cotiza», o a dejar tarjetas sin precio, que es el
silencio que `canon.json → lineasDeOferta.reglaDePublicacion` prohíbe. 🟠 Se revisa cuando haya tres
o más ítems de alcance cerrado y precio publicado que valga la pena vitrinear (hoy serían las líneas
de web y el diagnóstico).

## 13. Lo que decide el usuario

| # | Qué | Recomendación de este documento |
|---|---|---|
| 1 | 🟠 **Horario de atención** (§7) | Lunes a viernes de 8 a 6, igual al del Google Business Profile. Dos horarios distintos para el mismo negocio es una promesa rota en el primer lead. |
| 2 | 🟠 **Catálogo: ¿se llena?** (§12) | Hoy no. Se revisa cuando haya tres ítems con precio publicado. |
| 3 | **Categoría exacta** (§2) | La que la app ofrezca más cerca de «Servicio profesional». La lista cambia entre versiones. |
| 4 | **Si se usa el mismo celular para lo personal** | WhatsApp y WhatsApp Business pueden convivir en un mismo teléfono con dos números. Lo que no puede pasar es que el número personal termine contestando como la empresa. |

## 14. Lo que NO se pone, pase lo que pase

- 🔴 **El celular personal del fundador** (el del RUT). Es dato de la DIAN, no de marketing, y no se
  copia a ningún documento de este repo ni a ningún campo del perfil.
- 🔴 **La dirección.** Es la vivienda del fundador. En el perfil va «Bucaramanga, Colombia» y punto.
- 🔴 **Precios que no estén en `data/catalogo.json` o en `data/canon.json`.** Si el cliente pregunta
  por algo sin precio publicado, la respuesta es cómo se cobra, nunca una cifra improvisada.
- 🔴 **Tiempos de respuesta, plazos de entrega o plazos de conexión de WhatsApp para un cliente.**
  Ninguno de los tres se ha medido.
- 🔴 **Números de resultado del piloto.** No se han medido, así que no existen para publicar.
- 🔴 **El widget de chat en el sitio del cliente.** Ese canal sigue en «próximamente» y no se promete
  (`canon.json → prohibiciones.webComoPromesa`).

---

## Control

- **Canal:** `organico` para el §4 al §10 (la ficha pública, que lleva la línea de servicio). El §11
  no declara canal, y el porqué está escrito ahí mismo.
- **Precios:** salen de `../data/catalogo.json` (`web-basica`, `web-corporativa`,
  `web-redespliegue`, `diagnostico-automatizacion`) y de `../data/canon.json →
  lineasDeOferta`. Este archivo no define ninguno.
- **Número:** `300 570 1661`, SIM prepago Tigo del 2026-09-11. Vive además en
  `google-business-profile.md` §12 y en `platform/apps/landing/src/data/site.ts → whatsappNumber`.
- **Lo que este archivo NO hace:** activar la línea, instalar la app, ni tocar el canon.
