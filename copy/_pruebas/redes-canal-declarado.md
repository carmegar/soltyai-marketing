<!-- FIXTURE — no es una pieza real y no se publica. Vive en copy/_pruebas/ y NO en redes/ a
propósito: si estuviera en redes/ entraría al alcance del linter de verdad y rompería el build,
que es exactamente lo que un fixture no debe hacer. Corre con `npm run prueba`. -->
<!-- esperados: canal:mezcla-de-lineas, canal:linea-que-no-le-toca, canal:desconocido -->

# Fixture · una pieza de `redes/` que declara su canal

Existe desde el 2026-09-05, cuando `mensajeLider` dejó de excluir `redes/`. Prueba las tres cosas
que la regla puede decir sobre un bloque declarado, y que el bloque cerrado deja de juzgarse.

Este párrafo está **antes del primer marcador**, así que no pertenece a ningún bloque y no se
juzga. Puede nombrar el bot y el software a la medida a la vez sin que pase nada: es la explicación
de la pieza, no su copy. Si algún día esto empieza a dar hallazgos, el corte de bloque se rompió.

<!-- canal: linkedin -->

## Bloque 1 · mezcla las dos líneas

Te dejamos el bot contestando en tu WhatsApp, y si tu caso es raro también hacemos software a la
medida para tu empresa.

<!-- canal: instagram, tiktok -->

## Bloque 2 · nombra sólo la línea que a su canal no le toca

Tu chatbot contesta solo, a cualquier hora, con la información real de tu negocio.

<!-- canal: linkedim -->

## Bloque 3 · el canal está mal escrito

Un dedazo en el marcador deja el bloque sin juzgar creyendo que lo juzga. Por eso es error y no
aviso: es el mismo modo de falla del patrón que no alcanza la pieza.

<!-- /canal -->

## Fuera de bloque

Acá se vuelve a nombrar el bot y el software a la medida a la vez. No se juzga porque el bloque se
cerró: es la tabla de control al final de un archivo de guiones, no copy de un canal.
