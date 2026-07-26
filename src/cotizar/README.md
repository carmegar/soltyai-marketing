# src/cotizar — del catálogo a la cotización real *(diseñado, sin construir)*

Puente entre el marketing y el back-office: toma un ítem de `data/catalogo.json` con su margen ya
calculado y crea la cotización en el suite.

**Qué debe hacer**
1. `node src/cotizar/index.js <servicio> --cliente=<id> [--meses] [--descuento]`.
2. Validar contra `src/catalogo` (piso de precio, anticipo, margen mínimo) **antes** de emitir.
3. Crear la cotización vía MCP del suite (`crear_cliente` si no existe → `crear_cotizacion`).
4. Devolver el id y el link, y anotar el origen del lead para que el reporte cierre el círculo.

**Regla del borde (no negociable):** todo lo que sale hacia el cliente en el suite —enviar,
rechazar, pagar, revocar— es de **dos pasos**: primero el preview, y sólo con aprobación explícita,
confirmar. Este módulo puede preparar y crear borradores; **enviar al cliente lo autoriza una
persona**. Vocabulario del suite: "propuesta" = el contrato que se firma; "cotización" = el paso
previo que se negocia.
