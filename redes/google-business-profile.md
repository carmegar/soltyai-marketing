# Google Business Profile de SoltyAI: todo escrito, listo para pegar

> **Para el pendiente** «Crear el Google Business Profile de SoltyAI SAS (verificación con la
> matrícula CCB)», vencido desde el 20-ago. El porqué del carril está en
> [`15-CANALES-Y-SECUENCIA.md`](../15-CANALES-Y-SECUENCIA.md) §4, y el orden de las líneas en
> [`18-ARQUITECTURA-DE-OFERTA.md`](../18-ARQUITECTURA-DE-OFERTA.md) §4 y §9.
>
> **Escrito el 2026-09-05.** Crear el perfil y verificarlo es del fundador: pide una cuenta de
> Google y grabar un video en vivo. Acá está todo lo que había que escribir, ya escrito. La lista
> de lo que **sólo él puede decidir** está al final, en §12.
>
> ### El mensaje líder de este canal es el servicio a la medida
>
> `data/canon.json → mensajeLiderPorCanal` pone `gbp` en la lista de `servicio` desde el 17-ago.
> Por eso el bloque de copy de abajo **no nombra los tres planes de suscripción de chatbot**: no es
> que se escondan (siguen publicados en la landing, que es su canal junto con Meta y el outbound),
> es que mezclar las dos líneas dentro de una misma pieza es el error 🔴 `canal:mezcla-de-lineas`
> que el guardrail bloquea. El bloque va marcado con `<!-- canal: gbp -->` para que el linter lo
> juzgue, igual que los guiones de video.
>
> ### Y por eso también se cae una categoría que el doc 15 proponía
>
> El doc 15 (13-ago) listaba **«Agencia de marketing en internet»** como categoría secundaria. Se
> descarta acá, y no por gusto: ocho días después, el 21-ago, la prohibición `servicioFantasma`
> retiró la línea de marketing de la landing porque **no está en `catalogo.json`**, no tiene costo
> de servir ni margen, y no la podemos entregar hoy. Una categoría de Google es una promesa de
> servicio con el mismo peso que una línea de la landing: atrae la búsqueda que después no sabemos
> atender. La lista de §2 sale del catálogo, no del doc 15.

## Los datos de la empresa (fuente, no para pegar tal cual)

| Dato | Valor | Fuente |
|---|---|---|
| Razón social | SOLTYAI S.A.S. | `business/23` §5 |
| NIT | 902.081.265-3 | `business/23` §5 |
| Matrícula mercantil | 731655 (Cámara de Comercio de Bucaramanga) | `business/09` |
| Inicio de actividades | 2026-07-02 | `business/23` §5 |
| Ciudad | Bucaramanga, Santander | `business/23` |
| Facturador electrónico DIAN | responsabilidad 52, prefijo `SOL`, resolución `18764113048579` | `business/09` |
| Dirección registrada | Carrera 19 No. 10-45 apto. 503 | `business/23` §5 |
| Correo del RUT | carmegar12@gmail.com | `business/23` §5 |
| Teléfono del RUT | 3016426577 | `business/23` §5 |

🔴 **Las tres últimas filas NO se publican.** La dirección es la vivienda del fundador y el teléfono
es su celular personal: publicarlos repite exactamente el problema que el frente de datos personales
está corrigiendo. La dirección sí se le muestra a Google **en privado**, durante la verificación, en
el certificado de la Cámara de Comercio (ver §11). El teléfono es la decisión de §12.

---

<!-- canal: gbp -->

## 1. Nombre del perfil

```
SoltyAI
```

Nada más. Sin ciudad, sin servicios, sin palabras clave pegadas: Google suspende perfiles por eso, y
el nombre tiene que ser el que el cliente ve en el mundo real (es el que está en soltyai.com, en el
logo y en la factura electrónica).

Si al verificar el revisor objeta que el certificado dice `SOLTYAI S.A.S.`, la corrección aceptada es
poner `SoltyAI S.A.S.` y **nunca** agregarle descripciones al nombre.

## 2. Categorías

**Principal**

```
Empresa de desarrollo de software
```

**Secundarias (tres, y sólo tres)**

```
Consultoría informática
Diseñador de sitios web
Servicio de asistencia informática
```

Cómo encontrarlas sin perder tiempo: en el selector de Google se escribe una palabra y él ofrece la
lista. Escribí `software` para la principal, y después `informát`, `sitios web` y `asistencia`.
El nombre exacto cambia un poco según el país, así que va también el nombre en inglés para que se
puedan reconocer: *Software company*, *Computer consultant*, *Website designer*,
*Computer support and services*.

Si alguna no aparece con ese nombre exacto, las alternativas equivalentes que suele ofrecer el
selector son `Empresa de software`, `Consultor informático`, `Empresa de diseño web` y
`Soporte informático`. **No** se agregan categorías de marketing, publicidad ni redes sociales
(el porqué está arriba, en el encabezado).

Tres secundarias es a propósito: cada categoría de más diluye la principal, que es la que decide en
qué búsquedas locales aparece el perfil.

## 3. Descripción del negocio

Cabe en el límite de 750 caracteres de Google. Se pega tal cual.

```
SoltyAI es un estudio de desarrollo de software en Bucaramanga. Hacemos software a la medida para negocios colombianos: nos conectamos a la operación que ya tienes y le quitamos el trabajo repetitivo.

Lo que nos diferencia no es el código, es lo colombiano. SOLTYAI S.A.S. está habilitada por la DIAN como facturador electrónico, con certificado y resolución de numeración propios. La retención en la fuente, el IVA, el régimen simple y el ICA los tenemos en cuenta desde el diseño, no como un anexo.

Empezamos por un diagnóstico pagado de tu proceso real, que te deja por escrito el mapa y el precio del proyecto. Después construimos y, si quieres, nos quedamos operando el sistema.

Atendemos Bucaramanga, Floridablanca, Girón y Piedecuesta.
```

## 4. Servicios

Google deja poner nombre, precio y una descripción corta por servicio. La regla que decide la forma
del precio es la de `canon.json → lineasDeOferta.reglaDePublicacion`: **precio público lo que tiene
alcance cerrado, «desde» lo que se cotiza, y nada en silencio.**

Todos los precios salen de `data/catalogo.json`, donde el importe es **base sin IVA** salvo
`domicilios-ops`, que se pactó con IVA incluido. Cada descripción cabe en el límite de 300
caracteres que pone Google.

### 4.1 · Desarrollo de software a la medida
**Precio:** `Desde $3.000.000 + IVA`

```
Construimos el sistema que tu operación necesita y que ningún software de estantería resuelve, y lo conectamos con lo que ya usas: sistema contable, ERP, inventario, formularios. Se cotiza por alcance, con la mitad al inicio y la mitad contra entrega. El precio publicado es el piso, no la tarifa.
```

### 4.2 · Diagnóstico de automatización
**Precio:** `$600.000 + IVA`

```
Sesión de 60 a 90 minutos sobre tu proceso real, mapa de los pasos manuales y documento con las oportunidades ordenadas por impacto, más la estimación de alcance y precio del proyecto que resolvería las dos primeras. Se descuenta completo del proyecto si contratas dentro de los 30 días siguientes.
```

### 4.3 · SoltyAI Domicilios, Plan Operativo
**Precio:** `$370.000 al mes, IVA incluido`

```
Plataforma operativa para empresas de domicilios y mensajería. Tablero de operador con pedidos, asignación y estados en vivo, zonas y tarifas que edita el dueño. Aplicación en el celular del domiciliario. Alojamiento, monitoreo y copias diarias cifradas fuera del servidor. Soporte en horario hábil.
```

*(En el catálogo la línea se llama `domicilios-ops`. Acá va sin la raya larga del nombre interno.)*

### 4.4 · Página web corporativa
**Precio:** `$1.500.000 + IVA`

```
Sitio nuevo desde cero: estructura, diseño, contenido, formulario de contacto y publicación con dominio propio.
```

### 4.5 · Rescate y republicación de un sitio existente
**Precio:** `$750.000 + IVA`

```
Para cuando el sitio ya existe y su código se puede reutilizar: dominio nuevo, migración, actualización de contenido y las piezas que de verdad hay que rehacer.
```

### 4.6 · Cuidado de sitio web
**Precio:** `$180.000 + IVA al mes`

```
Alojamiento del sitio, dominio registrado a tu nombre y renovado por nosotros con aviso 60 días antes del vencimiento, dos buzones de correo con tu dominio, una actualización de contenido al mes, monitoreo de disponibilidad y copia de seguridad.
```

### 4.7 · Soporte y evolución del sistema
**Precio:** `$490.000 + IVA al mes`

```
Alojamiento, monitoreo y copias de seguridad cifradas fuera del servidor. Hasta 3 horas al mes de ajustes y evolución. Soporte prioritario en horario hábil. Revisión de resultados de 30 minutos al mes, agendada.
```

## 5. Atributos

Google muestra atributos distintos según la categoría y el país, así que si alguno no aparece se
salta sin drama. Los que hay que encender:

- **Opciones de servicio:** «Consultas en línea» y «Citas en línea», sí. «Servicios en el lugar»,
  sí (vamos donde el cliente dentro del área metropolitana).
- **Planificación:** «Se requiere cita previa», sí. No hay atención sin agendar.
- **Formas de pago:** transferencia bancaria y pago por QR. 🔴 **Tarjeta débito o crédito, NO.**
  El comercio de Wompi todavía está en sandbox, así que hoy no podemos recibir tarjeta, y un
  atributo que promete un medio de pago que no existe se paga en la primera venta.
- **Accesibilidad:** no aplica, no hay local con atención al público.
- **Propiedad del negocio:** ninguno aplica.

## 6. Área de servicio

Va como **negocio de área de servicio**, es decir **sin dirección visible en el perfil**. No hay
local con atención al público, y publicar la dirección de la vivienda es justo lo que estamos
corrigiendo.

Los cuatro municipios del área metropolitana de Bucaramanga:

```
Bucaramanga, Santander
Floridablanca, Santander
Girón, Santander
Piedecuesta, Santander
```

Google admite hasta 20 zonas y recomienda no pasarse del radio que de verdad se puede atender.
Si se quiere alcance departamental, se agrega `Santander, Colombia` como quinta zona y listo.

## 7. Horario

```
Lunes    8:00 a.m. a 6:00 p.m.
Martes   8:00 a.m. a 6:00 p.m.
Miércoles 8:00 a.m. a 6:00 p.m.
Jueves   8:00 a.m. a 6:00 p.m.
Viernes  8:00 a.m. a 6:00 p.m.
Sábado   Cerrado
Domingo  Cerrado
```

**Fecha de apertura:** julio de 2026 (la matrícula mercantil es del 2 de julio de 2026).

## 8. Sitio web y enlaces con atribución

El campo «Sitio web» del perfil:

```
https://soltyai.com/servicios?utm_source=gbp&utm_medium=organic_local&utm_campaign=local_2026q3&utm_content=sitio&utm_term=local&origin=gbp_local_sitio
```

Apunta a `soltyai.com/servicios`, que es la página de la línea que este canal lidera y cuyo título ya
es «Desarrollo de software a la medida en Bucaramanga». La cola de parámetros es lo que hace que el
lead llegue con carril: sin `origin` no se puede evaluar la ronda.

Los cuatro enlaces quedaron registrados en `data/links.json` con `npm run link nuevo`:

| `origin` | Dónde va | Destino |
|---|---|---|
| `gbp_local_sitio` | campo «Sitio web» del perfil | `soltyai.com/servicios` |
| `gbp_domicilios_post1` | acción del post 1 | `soltyai.com/producto/domicilios-ops` |
| `gbp_pyme_post2` | acción del post 2 | `soltyai.com/servicios` |
| `gbp_pyme_post3` | acción del post 3 | `soltyai.com/servicios` |

Las URL completas de los otros tres van con cada post, en §10.

🔴 **`soltyai.com/producto/domicilios-ops` hoy responde 404** (verificado el 2026-09-05). La página
existe en el repo pero no está desplegada: es el punto 3 del §9 del doc 18, que sigue pendiente.
Mientras siga en 404, el post 1 se publica **sin acción de enlace**, o con el enlace de
`gbp_local_sitio`. Un enlace roto en el perfil es peor que ningún enlace.

## 9. Preguntas frecuentes

Google deja que el dueño publique la pregunta y la responda él mismo, y esas respuestas salen en la
búsqueda. Tres, que son las tres objeciones reales.

⚠️ Google **no publica** un límite de caracteres para las respuestas, y lo que se reporta afuera no
coincide: hay quien mide 440 caracteres y quien dice que acepta miles. Las de abajo están entre 200
y 510. Si el formulario rechaza alguna, se corta el **último párrafo** y queda completa igual.

**P1. ¿Cuánto cuesta un desarrollo a la medida con SoltyAI?**

```
El piso de un proyecto a la medida es $3.000.000 más IVA, y de ahí sube según el alcance. Se paga la mitad al inicio y la mitad contra entrega.

Antes del proyecto va un diagnóstico de $600.000 más IVA: una sesión de 60 a 90 minutos sobre tu proceso real y un documento con el mapa de los pasos manuales, las oportunidades ordenadas por impacto y la estimación del proyecto. Si contratas dentro de los 30 días siguientes, el diagnóstico se descuenta completo.
```

**P2. ¿El sistema que construyen puede emitir factura electrónica validada por la DIAN?**

```
SOLTYAI S.A.S. está habilitada ante la DIAN como facturador electrónico (responsabilidad 52), con certificado digital, prefijo y resolución de numeración propios, y emite así sus propias facturas.

Eso significa que ya recorrimos el trámite completo: firma electrónica del representante legal, certificado digital, rangos de numeración y notas crédito y débito. Cuando un proyecto necesita emitir, ese alcance se cotiza con el detalle a la vista desde el principio, no como una sorpresa a mitad de camino.
```

**P3. ¿Atienden negocios fuera de Bucaramanga?**

```
Sí. Trabajamos en remoto con clientes de cualquier parte de Colombia y el diagnóstico se puede hacer por videollamada.

En Bucaramanga, Floridablanca, Girón y Piedecuesta lo hacemos presencial si lo prefieres.
```

## 10. Los tres primeros posts

Los tres son del tipo «Novedades». Google corta a 1.500 caracteres; los tres caben con margen. Se
publican con una semana de separación, no los tres el mismo día.

### Post 1 · La plataforma de domicilios (línea L1)

**Acción:** «Más información» → `https://soltyai.com/producto/domicilios-ops?utm_source=gbp&utm_medium=organic_local&utm_campaign=local_2026q3&utm_content=post1&utm_term=domicilios&origin=gbp_domicilios_post1`
(🔴 sólo si la página ya responde, ver §8)

```
Coordinar domicilios con cuadernos y grupos de WhatsApp funciona hasta que el negocio crece. Ahí empieza el pedido que nadie asignó y la dirección que se dictó tres veces.

SoltyAI Domicilios, Plan Operativo, es la plataforma que usa hoy una empresa de domicilios de Bucaramanga para despachar. Tablero de operador con los pedidos, la asignación y los estados en vivo. Zonas y tarifas que edita el dueño, sin llamarnos. Una aplicación para que el domiciliario reciba su asignación y cambie el estado desde el celular.

Está en producción con su propio dominio. El alojamiento, el monitoreo y las copias de seguridad diarias cifradas corren por nuestra cuenta, con soporte en horario hábil. El contrato está firmado y el cobro sale por factura electrónica validada por la DIAN.

$370.000 al mes, IVA incluido.

Si tienes una operación de domicilios o de mensajería en el área metropolitana y quieres verla funcionando, escríbenos y te la mostramos.
```

### Post 2 · El servicio a la medida (línea L3)

**Acción:** «Más información» → `https://soltyai.com/servicios?utm_source=gbp&utm_medium=organic_local&utm_campaign=local_2026q3&utm_content=post2&utm_term=pyme&origin=gbp_pyme_post2`

```
La mayoría de los negocios no necesitan otro software. Necesitan que el que ya tienen deje de pedirles trabajo manual.

Somos un estudio de desarrollo en Bucaramanga y hacemos software a la medida para eso. Nos conectamos a lo que ya usas, sea tu sistema contable, tu ERP, tu inventario o tus formularios, y sacamos del medio la digitación que se repite todos los días.

No arrancamos cotizando. Arrancamos con un diagnóstico de automatización: una sesión de 60 a 90 minutos sobre el proceso real y, después, un documento con el mapa de los pasos manuales, las oportunidades ordenadas por impacto y la estimación de alcance y precio del proyecto que resolvería las dos primeras. Cuesta $600.000 más IVA y se descuenta completo si contratas dentro de los 30 días siguientes.

Si de ahí sale un proyecto, el piso es $3.000.000 más IVA, se paga mitad al inicio y mitad contra entrega, y antes de entregarlo te proponemos el plan de soporte y evolución.

Trabajamos un proyecto a la vez, y es a propósito.
```

### Post 3 · La facturación electrónica de la DIAN

**Acción:** «Más información» → `https://soltyai.com/servicios?utm_source=gbp&utm_medium=organic_local&utm_campaign=local_2026q3&utm_content=post3&utm_term=pyme&origin=gbp_pyme_post3`

```
En julio de 2026 SoltyAI cerró su propio tren de facturación electrónica ante la DIAN, de punta a punta: firma electrónica del representante legal, certificado digital emitido por una entidad de certificación, habilitación como facturador electrónico con la responsabilidad 52, resolución de numeración con prefijo propio y la primera factura emitida, validada por la DIAN y entregada al cliente.

Lo contamos por una razón práctica. Cuando un negocio colombiano manda a construir software, la parte que se subestima nunca es la pantalla: es la retención en la fuente, el IVA, el régimen simple, el ICA del municipio y el documento electrónico que la DIAN tiene que validar. Un proveedor que no ha pasado por ese trámite lo descubre a mitad del proyecto, y lo descubre con la plata del cliente.

Nosotros ya pasamos por ahí, con nuestro propio NIT y a nombre de la empresa. Si tu proyecto toca facturación, ese alcance se cotiza con el detalle a la vista desde el principio.

Estudio de desarrollo en Bucaramanga. Software a la medida para negocios colombianos.
```

<!-- /canal -->

---

## 11. Cómo verificarlo (el guion, paso a paso)

**Lo que Google exige hoy**, de su propia ayuda
([Verifica tu empresa con la grabación de un video](https://support.google.com/business/answer/14271705?hl=es-419),
consultada el 2026-09-05):

- El video tiene que ser **una grabación única y completa, sin ediciones ni interrupciones**, de
  **al menos 30 segundos**, tomada **en vivo desde un dispositivo móvil**. Los videos pregrabados
  no sirven.
- Tiene que mostrar **tres cosas**: (1) la ubicación, (2) que el negocio existe, (3) que vos lo
  administrás.
- Para un negocio de área de servicio sin local, lo que sustituye a la fachada son **documentos de
  la empresa**: «permiso comercial, factura o recibo de servicios públicos» cuyo nombre coincida
  con el del perfil.
- La revisión **tarda hasta 5 días hábiles**. A veces sale al instante.

Si en vez del video Google ofrece la **videollamada**, es lo mismo pero en vivo con un agente, y el
guion de abajo sirve igual.

### El documento que hay que tener en la mano

El **certificado de existencia y representación legal** de la Cámara de Comercio de Bucaramanga
(matrícula **731655**). Es el que dice a la vez el nombre `SOLTYAI S.A.S.`, el NIT y que Carlos
Meza es el representante legal, o sea que resuelve el punto (2) y el (3) de una sola vez. Que sea
reciente: se pide en línea en el portal de la CCB y tiene costo.

De apoyo, si el revisor pide más: el **RUT** (NIT 902.081.265-3).

### El guion de la grabación (unos 90 segundos, de un solo tirón)

1. **Afuera, 15 segundos.** Empezar en la calle: la placa de la nomenclatura, el número del
   edificio y un punto de referencia del sector. Es el punto (1), la ubicación.
2. **Entrando, 10 segundos.** Sin cortar, entrar al lugar desde donde se trabaja y llegar al
   escritorio.
3. **El documento, 25 segundos.** Mostrar el certificado de la CCB en papel o en pantalla, y
   detenerse lo suficiente en el nombre `SOLTYAI S.A.S.`, la matrícula 731655 y el NIT para que se
   lean. Es el punto (2).
4. **La administración, 25 segundos.** Sin cortar, mostrar el puesto de trabajo y abrir en vivo
   `soltyai.com`, y después el back office de la empresa con la sesión ya iniciada. Es el punto (3):
   acceso a lo que sólo tiene quien administra el negocio.
5. **Cierre, 15 segundos.** Decir en voz alta el nombre del negocio, la ciudad y que es un negocio
   de área de servicio que atiende el área metropolitana de Bucaramanga.

### 🔴 Lo que NO se filma

- **Ninguna factura emitida.** Las facturas tienen los datos de un cliente identificado, y la
  regla de datos personales no se afloja porque el que mira sea Google.
- **Ninguna pantalla con datos de clientes**: la suite abierta en un cliente, el tablero del piloto
  con pedidos reales, un chat de soporte.
- **Ninguna contraseña ni token.** La sesión se deja abierta **antes** de empezar a grabar; en el
  video nunca se teclea una clave.
- **Ningún portal de la DIAN con sesión iniciada.**

### Después de que quede verificado

1. Publicar el logo y la foto de portada (ver §12, ya hay archivos que sirven).
2. Publicar el post 1. El 2 y el 3, con una semana de separación.
3. **Pedir la primera reseña.** Es la razón número dos por la que este carril va primero: la reseña
   es la única prueba social de origen externo, y es la única clase que el guardrail del canon deja
   publicar sin discusión. El cliente al que se le puede pedir hoy es el del plan operativo de
   domicilios.

---

## 12. Antes de crear, verificá (esto sólo lo sabe él)

| # | Qué hay que decidir | Lo que recomienda este documento |
|---|---|---|
| 1 | 🔴 **Teléfono: `[verificar: número propio]`.** No hay número propio de SoltyAI decidido en ningún documento del repo. El único número escrito es el celular personal del fundador (RUT). | **Dejar el campo vacío.** Es opcional, el sitio web queda como vía de contacto, y la verificación por video no necesita una línea telefónica (doc 18 §9). Poner el celular personal repite el problema de datos personales; el número propio ya era el cuello de la tercera CTA de la landing. |
| 2 | 🔴 **Dirección: ¿se muestra o no?** | **Negocio de área de servicio, sin dirección visible.** No hay local con atención al público. La dirección se le enseña a Google en privado, en el certificado, durante la verificación. |
| 3 | **Nombre del perfil: `SoltyAI` o `SoltyAI S.A.S.`** | `SoltyAI`, que es el del mundo real. Si el revisor objeta contra el certificado, se cambia a `SoltyAI S.A.S.` |
| 4 | **Categoría principal, con el nombre exacto que ofrezca el selector.** | La que salga al escribir `software`. Ver §2 y las alternativas equivalentes. |
| 5 | 🔴 **Con qué cuenta de Google se crea.** El perfil queda amarrado a esa cuenta. | Hoy sólo existe `carmegar12@gmail.com`: el tenant de Google Workspace con `carlos@soltyai.com` está en pausa (`business/17` y `business/09`). Se puede crear con el Gmail y, cuando exista el correo corporativo, agregarlo como **propietario** y quitar el viejo. Lo que no se puede es dejarlo a nombre de una cuenta que después se abandone. |
| 6 | **Formas de pago que se declaran.** | Transferencia y QR. Tarjeta no, hasta que Wompi pase a producción. |
| 7 | **¿Se agrega `Santander, Colombia` como quinta zona?** | Es gratis y amplía el alcance, pero diluye la señal local del área metropolitana. Decisión suya. |
| 8 | **Fecha de apertura publicada: julio de 2026.** | Publicarla. Es verificable contra la matrícula y le dice al que llega que la empresa es nueva, que es cierto. |
| 9 | **Logo y portada.** | Logo: `redes/solty-fb-perfil.png` (1024x1024, cuadrado, por encima del mínimo de Google). Portada: `redes/solty-yt-banner.png` (2048x1152, que es 16:9 exacto, el formato que pide Google). ⚠️ El banner de LinkedIn (1128x191) **no sirve**: la proporción no es la de Google y quedaría recortado. Conviene mirar el de YouTube antes de subirlo, porque está diseñado con el contenido centrado. |

---

## Control

- **Canal:** `gbp`. Mensaje líder: `servicio` (`canon.json → mensajeLiderPorCanal`).
- **Enlaces con `origin`:** 4, registrados en `../data/links.json` con `npm run link nuevo`, fuente
  `gbp`, medium `organic_local`, campaña `local_2026q3`.
- **Precios:** todos salen de `../data/catalogo.json` y de `canon.lineaServicios.pisoPrecio`. Ninguno
  se escribió de memoria, y este archivo no define ninguno: si un precio cambia, cambia en la D1 y
  después acá.
- **Prueba social:** sólo hechos con testigo (contrato firmado, factura electrónica emitida, sistema
  en producción con dominio propio). Ni una métrica de rendimiento del piloto, porque no se han
  medido.
- **Lo que este archivo NO hace:** crear el perfil, crear cuentas, tocar `canon.json` ni cerrar el
  pendiente.
