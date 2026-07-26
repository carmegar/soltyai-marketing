# src/reportes — tablero semanal y CAC real *(diseñado, sin construir)*

Cierra el círculo de `08-TRACKING-SETUP.md` §6 y alimenta el tablero de los viernes
(`13-PLAN-12-CLIENTES.md` §8) con números reales, no con impresiones.

**Qué debe hacer**
1. Entradas: gasto por ad set (export de Meta), leads por `origin` (registro de `src/links` +
   conteo del bot), demos agendadas (Calendly), cierres (suite, MCP `listar_cotizaciones` /
   `resumen_dashboard`).
2. Conciliar por la cadena `origin` — es la única clave que sobrevive el salto a Telegram.
3. Salida: costo por lead calificado, costo por demo, CAC por canal y margen del mes contra
   `data/catalogo.json`.
4. Aplicar la regla de corte de la ronda 1: si ningún ángulo baja de **~$25.000 por lead
   calificado**, se para y se retrabaja la oferta antes de gastar la ronda 2 (`ESTADO.md` §Marketing).

**Hueco honesto:** hoy el conteo del lado del bot puede ser manual (el `start` se lee del log). El
reporte debe aceptar entrada manual sin fingir que el dato es automático.
