# src/reportes — tablero semanal, CAC real y la regla de corte calculada

Cierra el círculo de `08-TRACKING-SETUP.md` §6 y alimenta el tablero de los viernes
(`13-PLAN-12-CLIENTES.md` §8) con números reales, no con impresiones.

```
npm run reportes                                   # tablero de la última semana cargada
npm run reportes tablero -- --semana=2026-W31
npm run reportes ronda -- --ronda=R1               # la regla de corte, sobre la ronda completa
npm run reportes registrar -- --semana=2026-W31 --ronda=R1 --origin=meta_duenopyme_c2 \
    --gasto=300000 --leads=14 --calificados=6 --demos=2 --cierres=bot-pro:1,setup:1 \
    --fuente-demos=calendly --fuente-cierres=suite-mcp --nota="ángulo dolor"
npm run reportes validar                           # consistencia — corre en el CI
```

## Qué calcula

Por `origin` y por semana: **costo por lead calificado**, **costo por demo**, **CAC**, **MRR nuevo**,
**margen recurrente mensual** y en cuántos meses de margen se recupera lo gastado. Los precios y
costos salen de `data/catalogo.json`, así que el margen arrastra el estado (`vigente` / `supuesto`)
de los costos que usó y lo dice en pantalla.

## Las cuatro decisiones que lo hacen útil

1. **La regla de corte se calcula, no se estima.** Si ningún ángulo baja de **$25.000 por lead
   calificado** (`canon.tablero.cortePorLeadCalificado`), `ronda` lo dice en rojo y con el nombre de
   la regla. Escrita en un doc, esa regla se cumple cuando uno quiere; calculada, aparece sola el
   viernes que toca parar.
2. **Se evalúa sobre la ronda, no sobre la semana.** Una semana mala no significa que la oferta esté
   mal, y esperar al cierre de la ronda para mirar significa haberla gastado completa antes de saberlo.
3. **Todo número declara su `fuenteDato`.** Hoy varios son `manual` y así se imprimen. Éste era el
   hueco honesto del diseño original: el conteo del lado del bot no es automático, y un reporte que
   lo disimule vale menos que no tenerlo.
4. **Un cierre es un cliente, no una línea vendida.** El setup y los excedentes viajan pegados a una
   suscripción; contarlos aparte partiría el CAC por dos. Cuentan como cierre los servicios de tipo
   `recurrente`, `mixto` y `proyecto`.

## Lo que el CI hace cumplir (`npm run reportes validar`)

- Todo `origin` existe en `data/links.json`. Un lead sin origen registrado no se puede atribuir, y esa
  es toda la razón de ser de `src/links`.
- Toda métrica trae `fuenteDato` y está en `canon.tablero.fuentesDeDato`.
- No hay más calificados que leads, ni el mismo `origin` dos veces en una semana.
- Los cierres apuntan a ids que existen en `data/catalogo.json`.
- Sin semanas cargadas, pasa: el tablero arranca vacío y el CI no puede exigir datos que todavía no
  existen.

Avisa (sin fallar) cuando hay cierres sin demos —puede ser un referido, o puede faltar cargar la
demo— y cuando hubo gasto con cero leads, que casi siempre es el `origin` del anuncio distinto al de
aquí.

## Entradas

| Dato | De dónde sale hoy |
|---|---|
| `gasto` | export de Meta por ad set (`export-meta`) |
| `leads` | conteo del bot / registro de `src/links` (`manual` o `bot-log`) |
| `calificados` | los que pasan la pre-calificación del bot (`manual`) |
| `demos` | Calendly (`calendly`) |
| `cierres` | suite, MCP `listar_cotizaciones` / `resumen_dashboard` (`suite-mcp`) |

Los datos viven en `data/semanas.json`, que se versiona: es la memoria de qué se probó y qué costó.
