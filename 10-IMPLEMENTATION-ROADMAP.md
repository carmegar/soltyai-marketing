# 10 · IMPLEMENTATION-ROADMAP — Ronda semilla US$400 en Meta (compacto)

> Roadmap **compactado** a la ronda de validación: no es el plan de 12 semanas del skill, sino una
> corrida de **~2 semanas de punta a punta** (preparación → lanzamiento → 5–7 días de gasto → lectura →
> reinversión).
>
> Autoridad: `01-SOURCE-BRIEF.md`. Cruces: `04-STRATEGY.md`, `06-BUDGET-PLAN.md`, `07-CAMPAIGN-BRIEF.md`,
> `08-TRACKING-SETUP.md`, `11-PRE-LAUNCH-CHECKLIST.md`.

---

## Vista de pájaro

| Fase | Días | Qué pasa | Gasto |
|---|---|---|---|
| **0. Preparación** | D-3 a D-1 | Cuentas, píxel, landing puente con 3 CTAs, creatividades, bot leyendo `start` | $0 |
| **1. Lanzamiento** | D1 | Publicar las 3 audiencias juntas; monitoreo intensivo | empieza ~$280 |
| **2. Estabilización** | D2–D3 | Salir de aprendizaje; cazar fallos de entrega/atribución | ~$40/día |
| **3. Lectura + poda** | D4–D5 | Leer datos; pausar lo flojo; consolidar señal | ~$40/día |
| **4. Optimización** | D6–D7 | Subir budget al ganador (reserva $80) | reserva escalado |
| **5. Reinversión** | D8+ | Decidir con caja: escalar / nueva creatividad / fase 2 | reserva $40 + caja de cierres |

> Calendario aproximado; el gasto diario real depende de cómo Meta entregue. Lo importante es la
> **secuencia**, no las fechas exactas.

---

## Fase 0 — Preparación (D-3 a D-1) · gasto $0

**Cuentas e identidad**
- [ ] Business Manager + Página de Facebook + cuenta de Instagram de SoltyAI vinculadas.
- [ ] Cuenta de anuncios con método de pago, **zona horaria Colombia (GMT-5)** y moneda fijadas.

**Tracking** (detalle en `08-TRACKING-SETUP.md`)
- [ ] Píxel creado e instalado en `/` y en la **landing puente `/ir`**; verificado con Pixel Helper.
- [ ] Eventos `ViewContent` + los **3 `Lead`** (telegram / calendly / whatsapp) funcionando, respetando
      Consent Mode v2.
- [ ] **Bot capturando el parámetro `start`** (o hoja de conteo manual lista como fallback).
- [ ] 3 deep-links de Telegram con UTM + `start` armados (uno por ad set).
- [x] **Calendly** con UTMs en query + form que captura nombre/negocio/**rubro**/teléfono. ✅ **3-ago**,
      con el `a1` de atribución verificado en vivo. La **pregunta 1 no se puede reordenar** (ver `08` §4.2).
- [ ] **`wa.me/<número>`** con `text` pre-rellenado que codifica el origen. 🔴 sin número el CTA no se pinta.
- [ ] Hoja de conciliación (3 vías + columna `setup-prueba`) creada.
- [ ] Placeholders de `site.ts` reemplazados — ver `11-PRE-LAUNCH-CHECKLIST.md`. ✅ Ya salieron
      `saas.demoUrl`, `calendlyUrl` y `lead.endpoint`; **quedan `whatsappNumber`, `ga4MeasurementId` y
      `metaPixelId`**.

**Creatividades** (specs/copy en `07-CAMPAIGN-BRIEF.md`)
- [ ] 3 creatividades, una por pilar (ángulos/mensajes, no etapas). Marca **"SoltyAI"**.
- [ ] Copy dentro de límites de Meta; canal honesto (demo por Telegram hoy, WhatsApp próximamente);
      pricing por producto donde aplique (sin Starter/Growth/Pro).

**Prueba end-to-end propia de las 3 vías (bloqueante)**
- [ ] Clic en preview del anuncio → landing puente → entrar por **cada** CTA → ver el origen llegar al
      otro lado (bot Telegram / reunión Calendly / chat WhatsApp). **No se lanza sin esta prueba pasada.**

---

## Fase 1 — Lanzamiento (D1) · arranca el ~70% (~$280 en los 3 ad sets)

- [ ] Publicar la campaña de tráfico con los **3 ad sets a la vez** (~$13–$19/día c/u). Mismo punto de
      partida = comparación limpia de audiencias.
- [ ] Confirmar que los anuncios pasaron el **review de Meta** (vigilar rechazos por destino externo;
      plan B = landing puente, ya default).
- [ ] Monitoreo del **día 1**: que el píxel dispare, que los clics lleguen a la landing puente, que los 3
      `Lead` se distingan, que el `start`/origen aparezca al otro lado. Cazar fallos de plomería, **no**
      tocar todavía las pujas.

> **Regla de oro de los primeros días:** no optimizar a ciegas. Meta está en **fase de aprendizaje**;
> cambios bruscos la reinician. Solo se corrige plomería rota (tracking, enlaces, rechazos).

---

## Fase 2 — Estabilización (D2–D3) · ~$40/día

- [ ] Dejar correr para salir de aprendizaje. Revisar 1–2 veces al día, no a cada hora.
- [ ] A las **48 h**: revisar **CPM, CTR y CPC** por ad set (semáforo de `04-STRATEGY.md`).
- [ ] Si llega tráfico basura, **excluir Audience Network** (mantener Feeds/Reels/Stories).
- [ ] Verificar la **tasa clic→lead por vía** en la hoja de conciliación. Si es muy baja en una vía, el
      problema es la fricción de esa entrada (revisar landing puente / form Calendly / número WhatsApp),
      no la creatividad.

---

## Fase 3 — Lectura + poda (D4–D5) · ~$40/día

- [ ] Con 4–5 días de datos, leer la **hoja de conciliación** (no solo Meta): el KPI que manda es
      **$/lead calificado** por ad set (suma las 3 vías).
- [ ] **3x Kill Rule (adaptado):** si un ad set gasta ~3× el costo objetivo por calificado sin entregar,
      **pausarlo** y redirigir su budget a los que sí rinden.
- [ ] Consolidar de 3 a 2 ad sets si alguno no junta volumen (mejor 2 con señal que 3 famélicos).
- [ ] Anotar qué **mensaje-pilar**, qué **audiencia** y qué **vía de entrada** ganan — es el aprendizaje
      real de la ronda.

---

## Fase 4 — Optimización / escalado (D6–D7) · reserva de escalado (~$80)

- [ ] Subir el budget del **ad set/creatividad ganador** con la reserva de escalado (~20%, ~$80).
- [ ] **Regla del 20%:** subir el presupuesto en incrementos ≤20% cada 2–3 días para no reiniciar
      aprendizaje. (Con corrida tan corta puede ser un solo salto controlado.)
- [ ] Mantener la lectura de la hoja: que escalar no dispare el $/calificado.

---

## Fase 5 — Reinversión y decisión (D8+) · reserva de prueba (~$40) + caja de cierres

Al cierre de la corrida, decidir con datos **y con caja real** (los cierres del mes 1 financian lo que
sigue — detalle en `06-BUDGET-PLAN.md`):

- **Si hubo ≥1 cierre y el $/calificado quedó en rango →** reinvertir la caja del mes 1 en:
  - escalar el ganador,
  - producir variantes de la creatividad ganadora (la reserva de prueba ~$40),
  - **sembrar testimonio:** pedir caso/quote al primer cliente cerrado (+ usar el piloto de domicilios) para
    el pilar de prueba social.
- **Si la señal es mixta →** usar la reserva de prueba en **un ángulo, vía de entrada o ciudad nuevos**
  antes de gastar más; no escalar a ciegas.
- **Si no hubo señal (CTR <0,6%, $/calificado >~$10 estimado en todos) →** **pausar**, re-trabajar oferta +
  creatividad + (si aplica) la fricción del salto, y recién entonces volver.

**Backlog de fase 2** (cuando haya caja recurrente, fuera de esta ronda):
- Retargeting LEAN (2 etapas) con las audiencias sembradas + lookalike 1% sobre cierres.
- CAPI / tracking server-side para recuperar señal iOS.
- Apertura de **Google Search** (alta intención) como segunda plataforma.
- Activar pilar de **prueba social** con testimonios reales + caso del piloto Bucaradomi.
- Expansión geo según decisión del brief.

---

## Cadencia de monitoreo (resumen)

| Momento | Qué se mira | Qué se toca |
|---|---|---|
| D1 (varias veces) | Plomería: píxel, enlaces, 3 `Lead`, `start`/origen, review | Solo arreglar lo roto |
| D2–D3 (1–2/día) | CPM/CTR/CPC, tasa clic→lead por vía | Excluir placements basura |
| D4–D5 | $/calificado por ad set | Pausar flojos (3x Kill) |
| D6–D7 | Ganador + $/calificado al escalar | Subir budget ≤20% |
| D8+ | Cierres, caja, aprendizajes | Reinvertir o pausar |
