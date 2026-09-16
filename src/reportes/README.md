# src/reportes — tablero semanal, CAC real y la regla de corte calculada

Cierra el círculo de `08-TRACKING-SETUP.md` §6 y alimenta el tablero de los viernes
(`13-PLAN-12-CLIENTES.md` §8) con números reales, no con impresiones.

```
npm run reportes                                   # tablero de la última semana cargada
npm run reportes tablero -- --semana=2026-W31
npm run reportes ronda -- --ronda=G1               # la regla de corte, sobre la ronda completa
npm run reportes registrar -- --semana=2026-W31 --ronda=G1 --origin=google_softwaremedida_lp1 \
    --gasto=180000 --leads=9 --calificados=4 --reuniones=2 --cierres=desarrollo-a-medida:1 \
    --fuente-gasto=export-google --fuente-reuniones=manual --fuente-cierres=suite-mcp \
    --nota="keyword exacta"
npm run reportes validar                           # consistencia — corre en el CI
```

> `--fuente-gasto` cae por defecto en `export-meta`. **En el carril de Google hay que pasarlo
> explícito** (`--fuente-google` no existe: es `--fuente-gasto=export-google`), o el gasto de Search
> queda registrado como si viniera del panel de Meta.

## Qué calcula

Por `origin` y por semana: **costo por lead calificado**, **costo por reunión**, **CAC**, **MRR
nuevo**, **margen recurrente mensual** y en cuántos meses de margen se recupera lo gastado. Los
precios y costos salen de `data/catalogo.json`, así que el margen arrastra el estado (`vigente` /
`supuesto`) de los costos que usó y lo dice en pantalla.

> ✅ **La clave se llama `reuniones` desde el 2026-09-15.** El KPI pasó a ser **reuniones agendadas**
> el 2026-08-13, cuando el cold email dejó de entregar demos y pasó a pedir 15 minutos
> (`business/16` §6c), pero la clave, el flag y el canon siguieron diciendo `demos` un mes. El
> renombre se hizo en **canon (`kpiQueManda`, `metaReunionesSemana`) + código + README + registro a
> la vez**, nunca a medias. Una reunión es una cita concretada con un tomador de decisión, por el
> formulario de `/contacto` más la invitación de Meet a mano (no hay Calendly desde el 9-sep-2026), y
> por eso su `fuenteDato` normal es `manual`. Un `semanas.json` con la clave vieja falla en `validar`
> con el mensaje que dice qué renombrar.

## Las cuatro decisiones que lo hacen útil

1. **La regla de corte se calcula, no se estima.** Si ningún ángulo baja de **$120.000 por lead
   calificado** (`canon.tablero.cortePorLeadCalificado`), `ronda` lo dice en rojo y con el nombre de
   la regla. Escrita en un doc, esa regla se cumple cuando uno quiere; calculada, aparece sola el
   viernes que toca parar.
   - **El corte subió de $25.000 a $120.000 el 2026-08-13**, y no por optimismo: el número viejo
     salía de exigir que el **setup** ($400.000) pagara toda la adquisición. Con CPLs B2B reales en
     Colombia de **$80.000 a $250.000 por lead**, la suscripción sola no puede pagar tráfico pago:
     hay que anclar al **LTV** ($5.080.000 a 12 meses) y aceptar que el payback se corre al mes 2–3.
     Con el corte viejo la ronda se cortaba sola y se leía como "la pauta no sirve", cuando el que
     estaba mal era el umbral. Los demás valores también viven en el canon y **desde el 2026-09-16 los
     lee este programa**: advertencia **$180.000** (▲▲), matar **$250.000** (✖), escalar por debajo de
     **$80.000** (↑) en la columna `$/calificado` de cada origin pagado; techo de CAC **$800.000**; y el
     **techo por reunión de $240.000** (`canon.tablero.techoPorReunion` = techo de CAC × la tasa
     reunión→cierre supuesta de 0,30, `tasaReunionCierreSupuesta`). Hasta ese día `$/reunión` se imprimía
     sin veredicto, que es el mismo hueco que tuvo el CAC hasta el 13-ago. Lo que sigue siendo MANUAL y
     no lee ningún código: el +20% por paso al escalar, el LTV y el ticket (`canon.tablero._notaKpi`).
   - **La reunión es el umbral que vale en todos los canales.** El lead calificado es un filtro manual
     que sólo existe con pauta; la reunión tiene testigo (la invitación de Meet) también en outbound y
     orgánico. Si la tasa de cierre se recalibra con las primeras 8 reuniones, `techoPorReunion` se
     recalcula en el mismo commit: es derivado, no una decisión aparte.
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

Avisa (sin fallar) cuando hay cierres sin reuniones —puede ser un referido, o puede faltar cargar la
reunión— y cuando hubo gasto con cero leads, que casi siempre es el `origin` del anuncio distinto al
de aquí.

## Entradas

| Dato | De dónde sale hoy |
|---|---|
| `gasto` | **`export-google`** (Google Ads, por grupo de anuncios) o **`export-meta`** (Meta, por ad set), según el carril. Los carriles gratis —GBP, orgánico, outbound— van con **gasto 0 explícito**, no en blanco |
| `leads` | conteo del bot / registro de `src/links` (`manual` o `bot-log`) |
| `calificados` | los que pasan la pre-calificación del bot (`manual`) |
| `reuniones` | formulario de `/contacto` + invitación de Meet a mano (`manual`). `calendly` salió de `fuentesDeDato` el 2026-09-16: no hay Calendly desde el 9-sep |
| `cierres` | suite, MCP `listar_cotizaciones` / `resumen_dashboard` (`suite-mcp`) |

> **Por qué `export-google` es una fuente aparte y no "el export de la pauta":** Google Search y Meta
> no miden lo mismo ni pagan en el mismo plazo (semanas contra meses), y mezclarlos en una sola
> columna borra justo la comparación que decide dónde va el siguiente peso. La lista completa está en
> `canon.tablero.fuentesDeDato`, y `validar` rechaza cualquier otra.
>
> **`gbp` también es fuente de dato, pero NO es fuente pagada.** El Google Business Profile trae leads
> y hay que atribuirlos; simplemente no cuesta plata, así que queda fuera de
> `canon.tablero.fuentesPagadas`. Es una decisión, no un olvido: meterlo ahí le inventaría un costo
> por lead a un carril gratis y ensuciaría la única regla que decide si algo se corta.

Los datos viven en `data/semanas.json`, que se versiona: es la memoria de qué se probó y qué costó.
