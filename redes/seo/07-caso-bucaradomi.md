# Caso 07 · Bucaradomi: de coordinar por chat a despachar con un sistema

> **Escrito el 2026-09-15.** URL sugerida: `/casos/bucaradomi`. Formato: problema → qué construimos
> → cómo se usa hoy. Es el caso de referencia de la línea L1 (`18-ARQUITECTURA-DE-OFERTA.md` §5:
> Bucaradomi pasa de «el piloto» a lighthouse customer).
>
> Fuentes: `data/catalogo.json → domicilios-ops` (alcance del contrato `SAI-DOMIOPS-20260703-001`),
> `clients/bucaradomi/anexo-encargo-tratamiento-datos.md` (contrato firmado el 22-jul-2026, inicio
> del servicio 4-jul-2026), `platform/apps/landing/src/components/sections/Casos.astro` y
> `src/data/productos.ts` (lo ya publicado del «antes» y del ciclo del pedido).
>
> 🔴 **Ni una cifra de rendimiento.** No se han medido (`canon → prohibiciones.metricaSinFuente`,
> doc 18 §5). Ni una cita firmada: nadie nos ha dado una por escrito
> (`prohibiciones.testimonialSinRespaldo`). Lo publicable son hechos con testigo: contrato,
> factura, sistema en producción.

<!-- canal: landing -->

## Title

```
Caso Bucaradomi: despacho de domicilios en Bucaramanga
```

## Meta description

```
Cómo una empresa de domicilios de Bucaramanga pasó de coordinar por chat a operar con un tablero de despacho y una app para el domiciliario. Sin cifras.
```

## H1

```
Bucaradomi: de coordinar por chat a despachar con un sistema
```

## Intro

Bucaradomi es una empresa de domicilios de Bucaramanga. Hoy opera con una plataforma de despacho construida por SoltyAI: un tablero para el operador y una aplicación para el domiciliario, en producción con su propio dominio, con contrato firmado y facturación mensual con factura electrónica validada por la DIAN. Este es el caso, contado con lo que se puede comprobar.

## El cliente

Una empresa de domicilios con flota de domiciliarios que reparte para varios comercios de la ciudad. Los pedidos llegan por WhatsApp y un operador los coordina. Es el tipo de negocio donde el servicio se mide en si el pedido llegó, a quién se le asignó y cuánto se cobró por la carrera.

## El problema

Los pedidos entraban por WhatsApp y se repartían por chat. Eso funciona hasta que el volumen crece, y ahí aparecen los tres problemas de siempre:

- **Nadie sabía en tiempo real qué domiciliario tenía qué pedido.** Preguntar «¿ya salió?» o «¿quién la lleva?» era escribir al grupo y esperar.
- **Las tarifas por barrio vivían en la cabeza de una persona.** Cuando esa persona no estaba, la tarifa se cobraba distinto.
- **La evidencia de entrega era «me dijo que sí la dejó».** Sin foto, sin hora, sin registro.

Ninguno de los tres se resuelve con más gente en el grupo. Se resuelve con un sistema donde el pedido tenga estado, responsable y hora.

## Qué construimos

Una plataforma operativa de despacho, en dos piezas:

**El tablero del operador.** Ahí se crea el pedido con el cliente, la dirección y la zona; la tarifa sale de la tabla que el propio cliente edita. El operador ve quién está libre y quién viene cargado, asigna, y sigue cada pedido por su estado, con hora. Las zonas y las tarifas las administra Bucaradomi, sin llamarnos.

**La aplicación del domiciliario.** Se abre desde el navegador del celular, sin pasar por una tienda de aplicaciones. Cada domiciliario ve solo sus asignaciones, cambia el estado en dos toques y cierra la entrega con foto y código. Al final del turno queda el registro de qué se despachó, quién lo llevó y cuánto se cobró.

**Y lo que va por nuestra cuenta:** alojamiento y operación en infraestructura de SoltyAI, monitoreo, copias de seguridad diarias cifradas fuera del servidor y soporte en horario hábil.

**Lo que quedó fuera, a propósito y por escrito en el contrato:** el chat automático con los clientes y la respuesta por conversación con inteligencia artificial. El problema de Bucaradomi no era contestar; era despachar. Los pedidos los sigue creando el operador.

## Cómo se usa hoy

- En producción, con dominio propio, con las dos aplicaciones andando todos los días.
- Con contrato firmado y servicio desde julio de 2026.
- Con facturación mensual mediante factura electrónica validada por la DIAN, emitida por SOLTYAI S.A.S. con su propio prefijo y su propia resolución.
- Con las zonas y las tarifas editadas por el cliente, no por nosotros.

## Lo que no publicamos, y por qué

Todavía no publicamos cifras de ahorro de tiempo ni de pedidos por día, porque no las hemos medido de forma que podamos sostenerlas. Cuando las midamos, van acá con su fuente y con la fecha en que se midieron. Tampoco publicamos una frase del cliente entre comillas: si quieres saber qué opina, te ponemos en contacto y se lo preguntas tú.

## Lo que salió de este caso

La plataforma que se construyó para Bucaradomi es hoy un producto: SoltyAI Domicilios. Se adapta a otra empresa de domicilios o de mensajería cambiando las zonas, las tarifas y los estados, y se cotiza por domiciliario activo, sin cobro de instalación. Es el ejemplo de cómo trabaja SoltyAI: lo que se construye a la medida una vez y le sirve a toda una industria, deja de cotizarse por proyecto y pasa a cobrarse por uso.

## Llamada a la acción (una sola)

```
¿Tu operación se parece? Cuéntanos cuántos domiciliarios coordinas → https://soltyai.com/contacto
```

Texto de apoyo: «Te mostramos el sistema andando. Y si quieres hablar con Bucaradomi antes de contratarnos, lo coordinamos.»

<!-- /canal -->

## Control

- **Canal:** `landing`. Línea: `servicio` (caso de la línea L1; no nombra la línea L2).
- **Hechos con testigo:** contrato `SAI-DOMIOPS-20260703-001` firmado el 22-jul-2026 (inicio del
  servicio 4-jul-2026), factura electrónica `SOL1` y cobranza mensual, sistema en producción con
  dominio propio. La descripción del «antes» es la que ya está publicada en la landing.
- **Cero cifras, cero citas.** Se dice en la página, no se esconde.
- **Alcance:** copiado del `incluye` del catálogo (el del contrato), incluida la exclusión del
  chat automático.
- **«Reparte para varios comercios de la ciudad»:** sale de la descripción general del cliente.
  🟠 Si el usuario prefiere no describir el tipo de comercios, se quita esa frase sin tocar el
  resto.
- **El dominio del sistema no se publica:** es la herramienta de trabajo del cliente, no una
  vitrina.
- **Supuestos:** ninguno.
