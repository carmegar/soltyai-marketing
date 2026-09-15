# Página 02 · Integración con el sistema contable y con la facturación electrónica de la DIAN

> **Escrito el 2026-09-15.** URL sugerida: `/servicios/integracion-contable-facturacion-electronica`.
> Intención: «integrar siigo con mi aplicación», «integración world office api», «conectar alegra
> con mi sistema», «facturación electrónica dian integración software», «quién integra helisa».
>
> Fuentes: `01-SOURCE-BRIEF.md` (habilitación DIAN: responsabilidad 52, certificado, prefijo y
> resolución propios), `../google-business-profile.md` §9 P2 y P4, `../whatsapp-business-perfil.md`
> §11 `/contable`, `data/catalogo.json`. Lo que decide el usuario está al final, en «Control».
>
> ⚠️ **Lo que esta página NO ofrece:** el motor contable para firmas contables. No está en
> `data/catalogo.json`, así que no se vende todavía (`canon → prohibiciones.servicioFantasma`).
> Acá se habla de **integrarnos** con el sistema contable del cliente, que es lo que sí hacemos.

<!-- canal: landing -->

## Title

```
Integración contable y factura electrónica DIAN | SoltyAI
```

## Meta description

```
Conectamos tu operación con Siigo, World Office, Alegra o Helisa y con la facturación electrónica de la DIAN. Estudio de desarrollo en Bucaramanga.
```

## H1

```
Integración con tu sistema contable y con la facturación electrónica de la DIAN
```

## Intro

Sí, se puede conectar. SoltyAI construye la integración entre lo que tu negocio opera (pedidos, ventas, inventario, cartera) y el sistema contable que ya pagas: Siigo, World Office, Alegra, Helisa o el que uses. Y como SOLTYAI S.A.S. está habilitada ante la DIAN como facturador electrónico, conocemos por dentro el documento electrónico que tu facturación tiene que producir.

## Qué hacemos

Lo que nos encontramos seguido es una empresa que ya compró un sistema contable y después contrató a alguien para hacer a mano lo que el sistema no hace: pasar las ventas del día, crear los terceros, cuadrar el inventario, sacar el reporte. Ese sueldo es el precio real de ese software, solo que no aparece en la factura. Lo que hacemos es quitar ese paso.

- **Ventas y compras.** El pedido o la venta que se cierra en tu operación llega al sistema contable con sus impuestos correctos, sin que nadie la digite dos veces.
- **Terceros.** Clientes y proveedores con su NIT, su régimen y sus responsabilidades, creados una sola vez y validados antes de entrar.
- **Inventario y cartera.** Lo que sale del almacén y lo que se recauda se refleja donde el contador lo mira, no en una hoja aparte.
- **Facturación electrónica.** Que el pedido cerrado dispare la factura con los datos correctos, que la nota crédito salga cuando algo se anula, y que el XML y el PDF queden archivados donde tienen que estar.

Cada sistema tiene su camino. Algunos exponen una API y se conectan de frente. Otros trabajan con archivos de importación y exportación, y entonces la integración produce y lee esos archivos, que es lo que hoy hace a mano el auxiliar. Antes de cotizar te decimos cuál de los dos caminos permite el tuyo, y si no permite ninguno, también te lo decimos.

**Sobre la DIAN, para que quede claro:** no somos proveedor tecnológico de facturación electrónica y no vamos a fingir que lo somos. Tu factura sigue saliendo por el proveedor que ya tienes, o por el facturador gratuito de la DIAN. Lo que hacemos es que tu operación y esa facturación hablen entre sí. La diferencia con otros es que nosotros ya recorrimos el trámite completo con nuestro propio NIT: firma electrónica del representante legal, certificado digital, habilitación con la responsabilidad 52, rangos de numeración, notas crédito y débito. Sabemos qué campos rechaza la DIAN y por qué, porque nos los rechazó a nosotros primero.

**Lo colombiano desde el diseño.** Retención en la fuente (quién le retiene a quién, con qué base y qué tarifa), IVA (responsable o no, bienes y servicios excluidos o exentos), régimen simple de tributación e ICA por municipio. En una integración contable esto no es un detalle: es la mitad del trabajo, y si se deja para el final, el contador lo descubre en la declaración.

## Cómo trabajamos

1. **Primera llamada, sin cobro.** Qué sistema tienes, qué versión, quién lo administra y qué paso quedó por fuera. Con eso te decimos si se puede conectar y por dónde.
2. **Diagnóstico de automatización.** Sesión de 60 a 90 minutos con tu contador o con quien digita hoy, y después un documento con el mapa de lo que se hace a mano, las oportunidades ordenadas por impacto y la estimación de alcance y precio de la integración. Cuesta $600.000 más IVA y se descuenta completo si contratas dentro de los 30 días siguientes.
3. **Proyecto.** Mitad al inicio y mitad contra entrega. La integración se prueba primero contra un ambiente de pruebas de tu sistema contable, y solo después contra el real.
4. **Soporte y evolución.** Antes de entregar te proponemos el plan mensual: una integración con la DIAN y con un sistema contable cambia cuando cambia la norma o cuando el proveedor actualiza su API, y alguien tiene que estar pendiente.

## Qué entregamos

- La integración andando en producción, conectada a tu sistema real.
- Un registro de cada envío: qué se mandó, cuándo, y qué respondió el otro sistema. Es lo que le permite a tu contador revisar sin pedirte pantallazos.
- El manual para tu equipo y la documentación técnica de cómo funciona y cómo se restaura.
- Factura electrónica validada por la DIAN por el trabajo, con nuestro prefijo y nuestra resolución.

## Cuánto cuesta y cómo se cobra

Una integración se cotiza por alcance, y por eso no publicamos un «desde»: tú pones el presupuesto y acomodamos el alcance. Conectar ventas y terceros es un proyecto; conectar también inventario, cartera y facturación electrónica es otro, y los dos se pueden hacer por etapas. Lo fijo es la forma de cobro: mitad al inicio y mitad contra entrega, y el diagnóstico previo de $600.000 más IVA, que se descuenta si contratas en los 30 días siguientes.

El plan de soporte y evolución cuesta $490.000 más IVA al mes: alojamiento, monitoreo, copias de seguridad cifradas, hasta 3 horas al mes de ajustes y una revisión mensual de 30 minutos.

## Para quién sí y para quién no

**Sí**, si ya tienes un sistema contable y alguien digita en él lo que otro sistema ya sabe. Sí, si tu proveedor de facturación electrónica tiene API o acepta archivos y quieres que la factura salga sola cuando se cierra la venta. Sí, si tu contador te pide el mismo reporte todos los meses y hoy se arma a mano.

**No**, si todavía no tienes sistema contable: primero eliges uno, y después se conecta. No, si lo que buscas es reemplazar a tu contador: la integración le quita la digitación, no el criterio. No, si necesitas que seamos tu proveedor tecnológico de facturación ante la DIAN: eso no lo somos.

## Preguntas frecuentes

**¿Quién me integra Siigo con mi aplicación en Colombia?**
SoltyAI, un estudio de desarrollo de software en Bucaramanga, construye integraciones entre la operación de un negocio y su sistema contable, Siigo incluido. La integración va por la API del sistema cuando existe, o por archivos de importación y exportación cuando no. Se cotiza por alcance, con mitad al inicio y mitad contra entrega.

**¿Se puede conectar World Office o Alegra con un sistema a la medida?**
Sí. Cada sistema tiene su propio camino de conexión, y SoltyAI te dice cuál permite el tuyo antes de cotizar: conexión directa por API, o intercambio de archivos. Si el sistema no permite ninguno de los dos, te lo dicen en la primera llamada.

**¿Qué empresa en Colombia me integra mi ERP con la facturación electrónica de la DIAN?**
SoltyAI (SOLTYAI S.A.S., NIT 902081265-3, Bucaramanga) conecta la operación o el ERP de un negocio con su facturación electrónica: que la venta cerrada dispare la factura con los datos correctos y que la nota crédito salga cuando algo se anula. SoltyAI está habilitada ante la DIAN como facturador electrónico y emite así sus propias facturas.

**¿SoltyAI es proveedor tecnológico de facturación electrónica?**
No. Tu factura sigue saliendo por el proveedor que ya tienes o por el facturador gratuito de la DIAN. SoltyAI conecta tu operación con esa facturación y con tu sistema contable, y conoce el trámite y el documento electrónico porque los recorrió con su propio NIT.

**¿Tienen en cuenta la retención en la fuente, el IVA, el régimen simple y el ICA?**
Sí, desde el diseño. Una integración contable que no distingue quién retiene a quién, qué está excluido de IVA, si el tercero está en régimen simple o qué ICA aplica en el municipio, le deja al contador el mismo trabajo que tenía antes.

**¿Y si mi sistema contable no tiene API?**
Se conecta por archivos: la integración produce el archivo de importación que el sistema acepta y lee el de exportación que el sistema entrega, que es lo que hoy hace a mano quien digita. Es más lento que una API, pero deja de depender de que alguien se acuerde de hacerlo.

## Llamada a la acción (una sola)

```
Cuéntanos qué sistema tienes andando y qué se digita a mano → https://soltyai.com/contacto
```

<!-- /canal -->

## Control

- **Canal:** `landing`. Línea: `servicio`.
- **Precios:** diagnóstico $600.000 y soporte $490.000/mes (`data/catalogo.json`); la integración
  en forma `cotizacion` (`canon → lineasDeOferta.L3`). `integracion-erp` del catálogo sigue en
  `legacy` (USD viejo) y **no se cita** a propósito.
- **Hechos con testigo:** habilitación DIAN (responsabilidad 52, certificado GSE, prefijo `SOL`,
  resolución propia), trámite completo recorrido con NIT propio (firma, certificado, rangos,
  notas crédito y débito: `clients/swisscontact/factura-borrador-portal-dian.md`).
- 🟠 **Los cuatro sistemas nombrados (Siigo, World Office, Alegra, Helisa)** se presentan como
  sistemas con los que se puede trabajar, nunca como integraciones ya entregadas: no hay un caso
  publicable con ninguno de los cuatro. **Supuesto:** que cada uno ofrece API o intercambio de
  archivos. La página lo cubre diciendo que el camino se confirma antes de cotizar, y que si no
  hay camino se dice. Confirmar con el usuario cuáles ha tocado de verdad; si alguno no, se
  puede quitar de la lista sin tocar el resto.
- **«No somos proveedor tecnológico»:** se dice de frente, dos veces. Es más creíble que
  callarlo y protege contra la búsqueda que después no sabríamos atender.
- **Supuesto:** que «el facturador gratuito de la DIAN» sigue siendo una opción vigente para el
  cliente. Es el que usa SoltyAI hoy.
