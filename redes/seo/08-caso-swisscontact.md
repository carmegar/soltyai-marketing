# Caso 08 · Swisscontact y la Fundación Zaranda: registro de recolecciones y certificado mensual

> **Escrito el 2026-09-15.** URL sugerida: `/casos/swisscontact-zaranda`. Formato: problema → qué
> construimos → cómo se usa hoy. Es el caso de la línea L3 (servicio a la medida) con entrega
> aprobada y factura electrónica.
>
> Fuentes leídas para no inventar: `clients/swisscontact/cobro-2026-07.md` (el caso en una línea,
> el cliente, el amparo sin IVA), `clients/swisscontact/factura-borrador-portal-dian.md` (factura
> `SOL3` del 4-ago-2026, validada por la DIAN, cobrada el 20-ago), `D:\Trabajo\zaranda\docs\ENTREGA.md`
> (acta de entrega del 15-jul-2026: qué se entregó, palabra por palabra),
> `D:\Trabajo\zaranda\docs\PLAN-PROYECTO.md` y `COTIZACION-ADICIONES.md` §C (informe mensual,
> desplegado el 18-ago-2026). Lo que ya está publicado en la landing: `Casos.astro`, tarjeta
> Swisscontact.
>
> 🔴 **Ni una cifra de resultado, ni una cita firmada.** Los números del acta (generadores
> cargados, puntajes de rendimiento del sitio) son datos del cliente o mediciones de un día, y no
> van. Lo publicable son hechos con testigo: entrega aprobada, factura, sistema en producción.

<!-- canal: landing -->

## Title

```
Caso Swisscontact: registro y certificados para Zaranda
```

## Meta description

```
Módulo web para una organización de recicladores de oficio en Cali, contratado por Swisscontact: registro en el celular y certificado mensual en PDF.
```

## H1

```
Swisscontact y la Fundación Zaranda: el registro de recolecciones y el certificado mensual, en un módulo web
```

## Intro

La Fundación Zaranda es una organización de recicladores de oficio en Cali. Dentro de un proyecto de economía circular, la sede colombiana de Swisscontact contrató a SoltyAI para fortalecer la plataforma web de la fundación: un módulo de registro de recolecciones que se usa desde el celular y que produce el certificado mensual de aprovechamiento para cada generador, más el sitio web público. Entregado, aprobado por el cliente y facturado con factura electrónica validada por la DIAN.

## El cliente

Swisscontact es una fundación de cooperación internacional con sede en Colombia. La Fundación Zaranda es la organización beneficiaria del proyecto: sus operarios recogen material aprovechable en los grandes generadores de la ciudad (empresas, centros comerciales, estaciones de servicio) y la fundación le certifica a cada generador, mes a mes, cuánto material le recuperó y de qué tipo.

## El problema

Tres cosas que se hacían a mano o no se hacían:

- **El registro de cada recolección** se llevaba en una hoja de cálculo. El operario que está en la calle no tiene un computador al frente, y la información llegaba después, de memoria o en papel.
- **El certificado mensual de aprovechamiento** había que armarlo generador por generador, consolidando a mano los kilos por categoría de material.
- **El sitio web** era una plantilla con contenido de demostración: servicios que no existían y un correo de contacto de ejemplo. No representaba a la fundación.

## Qué construimos

**Un módulo de registro y certificación**, en la dirección de la fundación:

- **Registro de material por visita, desde el celular.** Generador, materiales por categoría y subcategoría, kilos, observaciones y firma en pantalla de quien recibe. Funciona sin señal: lo que se guarda en la calle se sincroniza solo cuando vuelve la conexión.
- **Certificado mensual en PDF por generador**, con el logo y la tipografía de la marca, la firma del representante legal y el consolidado en las cuatro categorías de material. Se envía por correo desde el mismo módulo y queda copia en el Drive de la fundación.
- **Panel de administración:** generadores, catálogo de materiales, corrección de registros, importación de generadores pegando desde Excel, respaldo y registro de envíos.
- **Informe mensual** de todos los registros, con descarga para Excel y publicación en una hoja del Drive, que es el formato que la fundación necesita para reportar las cantidades por tipo de material. Se agregó después de la entrega, como adición cotizada aparte.
- Seis cuentas de acceso: un administrador y cinco operarios. Manual de uso en PDF.

**Y el sitio web público**, de seis páginas, hecho con los contenidos y las fotos que entregó la fundación y con su marca. Una particularidad: el contador de toneladas recuperadas que muestra el inicio sale del módulo de registro y se actualiza solo a medida que los operarios registran material. El módulo interno queda enlazado al pie, no en el menú: el menú es para los visitantes.

## Cómo se usa hoy

- En producción. El módulo fue aprobado por la fundación en junio de 2026 y el conjunto se entregó con acta en julio de 2026.
- Facturado a Swisscontact Colombia con factura electrónica validada por la DIAN, emitida por SOLTYAI S.A.S. Sin IVA, amparada por el certificado de utilidad común del proyecto de cooperación.
- Con alcance cerrado y entrega contra aprobación: lo que se cotizó fue lo que se entregó, y lo que se pidió después se cotizó como adición.

## Lo que este caso muestra de cómo trabajamos

- **Lo que se hace en la calle se diseña para la calle.** Celular, sin señal, firma con el dedo. Si el registro no se puede hacer en el momento, no se hace.
- **El reporte sale del dato, no al revés.** El certificado, el informe y hasta el contador del sitio web salen del mismo registro. Nadie vuelve a digitar.
- **Alcance escrito.** Lo que quedó fuera del contrato se dijo antes, y cuando el cliente lo pidió, se cotizó aparte.
- **Factura electrónica desde el primer proyecto.** Y con un amparo tributario que había que documentar bien: la venta sin IVA de un servicio pagado con recursos de cooperación internacional. Es el tipo de detalle colombiano que un proveedor que no factura electrónicamente descubre tarde.

## Lo que no publicamos

Ni cifras de tiempo ahorrado ni de registros por mes: no las hemos medido. Ni una frase del cliente entre comillas: nadie nos la ha dado por escrito. Si quieres una referencia, te ponemos en contacto y preguntas tú.

## Llamada a la acción (una sola)

```
¿Tienes un proceso que hoy se lleva en una hoja de cálculo? → https://soltyai.com/contacto
```

<!-- /canal -->

## Control

- **Canal:** `landing`. Línea: `servicio`.
- **Hechos con testigo:** acta de entrega del 15-jul-2026 (módulo aprobado el 18-jun-2026), factura
  electrónica `SOL3` del 4-ago-2026 validada por la DIAN (IVA 0, amparo CUC de APC Colombia),
  pagada el 20-ago-2026. La adición del informe mensual quedó desplegada el 18-ago-2026.
- **Qué se cuenta del alcance:** copiado del acta de entrega, sin agregar nada. El **precio no se
  publica** ($2.300.000 es la referencia interna de L3 en `canon.lineasDeOferta.L3.evidencia`;
  la forma pública de L3 es `cotizacion` y una cifra de un caso funciona como ancla).
- 🟠 **Nombrar a la Fundación Zaranda y a Cali:** la landing ya lo hace (`Casos.astro`). Confirmar
  que se puede repetir con este nivel de detalle (qué hace el módulo, seis cuentas, informe). Si se
  prefiere menos detalle, se quita la sección «Qué construimos» a viñetas y queda el párrafo.
- 🟠 **Nombrar el proyecto que financia** (Alcaldía de Zúrich, «Ciudades Circulares», APC
  Colombia): **no se nombra** en el copy; queda «proyecto de economía circular de cooperación
  internacional», que es lo que ya dice la landing. Si el usuario quiere nombrarlo, hay que
  preguntarle a Swisscontact primero.
- 🟠 **«El formato que la fundación necesita para reportar las cantidades por tipo de material»:**
  la adición C dice que el reporte va a la Superintendencia de Servicios Públicos. No se nombra la
  entidad en el copy; confirmar si se quiere nombrar.
- **La dirección del módulo (`/registro`) y las cuentas no se publican:** es una herramienta
  interna con clave.
- **Supuestos:** ninguno. Todo lo escrito sale del acta y de los docs del cobro.
