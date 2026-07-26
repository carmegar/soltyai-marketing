# 11 · PRE-LAUNCH-CHECKLIST — Qué tener listo antes de salir a marketing

> Regla base: **para generar demanda NO necesitas la empresa formada; para COBRAR sí.**
> **La SAS ya está constituida** (matrícula CCB 731655, NIT 902081265-3 con RST, 2026-07-02) y desde el
> **2026-07-13 hay cuenta Bancolombia + comercio Wompi (en sandbox)**. Para cobrar de verdad falta: llaves de
> producción de Wompi, habilitación de facturación (firma electrónica DIAN primero) y la política de datos.
> Nada bloquea avanzar en lo operativo ahora.
>
> Autoridad: `01-SOURCE-BRIEF.md`. Cruces: `08-TRACKING-SETUP.md` (tracking de las 3 vías), `09-OUTBOUND.md`
> (canal manual), `10-IMPLEMENTATION-ROADMAP.md` (cronograma), `business\09-checklist-usuario.md` (track legal).

---

## A. Operativo de campaña — se puede preparar YA (sin empresa)

### A.1 Las 3 vías de entrada (la oferta de conversión)
- [ ] **Bot de Telegram** listo para inbound frío: bienvenida que califica (¿qué negocio?, ¿qué quieres
      automatizar?) + ofrece demo, pre-entrenado por vertical.
- [ ] **Deep-link con parámetro `start`** (`t.me/<bot>?start=meta_<adset>_<creativo>`) que el bot captura
      para marcar origen (puente de atribución Meta→Telegram — ver `08-TRACKING-SETUP.md`).
- [ ] **Formulario / Calendly** configurado para "Agenda una demo": captura **nombre, negocio,
      rubro/vertical, teléfono** + recibe UTMs por query.
- [ ] **Número de WhatsApp click-to-chat** (`wa.me/<número>`) con mensaje pre-rellenado que codifica el
      origen. (Es el mismo número/lógica que respalda el outbound manual.)

### A.2 Landing + tracking
- [ ] **Cuenta Meta Business + píxel** instalado en la landing y en la landing puente.
- [ ] **Landing puente `/ir`** con las **3 CTAs** (Telegram primario, Calendly secundario, WhatsApp
      terciario), que dispara `ViewContent` + un `Lead` por CTA y evita rechazos por destino externo.
- [ ] **Landing principal con las 3 CTAs** verificada (ya existen en el producto, ver §A.4).
- [ ] **Píxel respeta Consent Mode v2** (carga tras consentimiento).

### A.3 Creatividades + outbound
- [ ] **Creatividades producidas:** imágenes + videos-demo (briefs/guiones en `07-CAMPAIGN-BRIEF.md`).
- [ ] **Copy cargado** y revisado vs. límites de Meta (ver `12-QA-VALIDATION.md`); canal honesto + pricing
      por producto (sin Starter/Growth/Pro).
- [ ] **Número de WhatsApp calentado** para el outbound + el CSV de 906 prospectos listo como CRM
      (ver `09-OUTBOUND.md`).
- [ ] **Hoja de conciliación** para el conteo manual (3 vías + estado `setup-prueba`).
- [ ] *(Opcional)* revisar **Meta Ad Library** por anunciante antes de producir creatividades finales.

### A.4 Placeholders de `site.ts` a reemplazar antes del deploy (BLOQUEANTE)

En `platform/apps/landing/src/data/site.ts` (las 3 CTAs y el tracking ya existen como campos; faltan los
valores reales):

| Campo | Valor placeholder hoy | Reemplazar por |
|---|---|---|
| `saas.demoUrl` | `https://t.me/SoltyAIDemoBot` | handle **real** del bot demo de Telegram |
| `calendlyUrl` | `https://calendly.com/soltyai/demo` | URL real de Calendly (con campos nombre/negocio/**rubro**/teléfono) |
| `whatsappNumber` | `57XXXXXXXXXX` | número real en **E.164 sin `+`** |
| `whatsappMessage` | (genérico) | opcional: ajustar; el origen se inyecta en `/ir` |
| `lead.endpoint` | `''` (vacío) | URL de **Formspree** o equivalente (respaldo del form "Solicita tu demo") |
| `analytics.ga4MeasurementId` | `G-XXXXXXXXXX` | ID real de GA4 |
| `social.{facebook,linkedin,instagram,twitter}` | placeholders | handles reales |

> Si `lead.endpoint` queda vacío, el form **no simula éxito**: deriva al chat/agenda y muestra el
> `fallbackEmail` (comportamiento ya implementado, ver `platform/apps/landing/CLAUDE.md`). No es bloqueante
> para lanzar las 3 CTAs conversacionales, pero sí para capturar leads por email.

---

## B. Onboarding tester → cliente — preparar el flujo de cierre

El cierre no termina en "probó el bot": **probó/agendó → le dejamos el bot configurado con sus datos reales
para que lo pruebe de verdad → cierre** (el setup como prueba de valor que baja la barrera — ver
`01-SOURCE-BRIEF.md` y `09-OUTBOUND.md` §B.6). Para que el equipo pueda ejecutarlo el día 1:

- [ ] **Plantilla de captura de datos** del prospecto para el `setup-prueba`: negocio, **rubro/vertical**,
      catálogo/agenda/inventario (lo que aplique al producto), canal de contacto.
- [ ] **Producto correcto por rubro** claro para quien cierra (ver `05-PRICING.md`):
      - Inmobiliaria → **SoltyAI Inmobiliario** (entry $249/$600 *propuesto* para PYME; full $650/$1.500 para grandes).
      - Citas → **SoltyAI Agenda** ($65/mes + $250 setup).
      - Domicilios/comercio → **SoltyAI Pedidos** ($80/mes + $280 setup).
      - **PROHIBIDO** Starter/Growth/Pro.
- [ ] **Tiempo de montaje del setup-prueba acordado** (en días, no semanas) para no enfriar el lead.
- [ ] **Estado `setup-prueba` en la hoja/CSV** para medir demo → setup-prueba → cierre (ver
      `08-TRACKING-SETUP.md` §5).

---

## C. Legal / empresa — necesario antes de COBRAR el primer cliente

- [x] **Constitución SAS** (CCB, matrícula 731655) y **NIT / RUT** (**NIT 902081265-3**, con RST) — hechos el 2026-07-02.
- [x] **Cuenta bancaria empresarial (Bancolombia)** — **ABIERTA el 2026-07-13** (falta consignar los $2M de capital).
- [~] **Medio de pago** operativo para suscripción + setup: comercio **Wompi** creado con el NIT (2026-07-13) pero **en sandbox** → hoy se cobra por **transferencia a la cuenta de la SAS**; para link/recurrente Wompi faltan las **llaves de producción**.
- [ ] **Facturación** (idealmente factura electrónica DIAN; fase 1 = facturador gratuito DIAN, $0) — **bloqueada por la firma electrónica DIAN**, que aún no se genera.
- [~] **Política de tratamiento de datos (Ley 1581)** + texto de consentimiento en el bot — **REDACTADOS y listos**
      en `business/05a-politica-tratamiento-datos.md` (política + aviso + consentimiento + cláusula de encargo).
      Falta: confirmar teléfono, publicar `/privacidad`, e implementar el consentimiento en el bot.

> Detalle y orden de este track en `business\09-checklist-usuario.md`.

---

## D. Diferido — NO bloquea el arranque

- [ ] **WhatsApp Business API oficial** (canal WhatsApp en el producto) → **empresa constituida ✓**; falta la
      **validación Meta como Tech Provider** (solicitud ya desbloqueada). Mientras tanto, **demos por Telegram** y el WhatsApp manual
      del outbound / click-to-chat. **No se promete WhatsApp API en ninguna creatividad.**

---

## Definición de "listo para salir" (gate)

Se sale cuando:
- **(A) todo el bloque operativo ✓** — incluidas las 3 CTAs con sus placeholders reemplazados y la prueba
  end-to-end de las 3 vías pasada (`10-IMPLEMENTATION-ROADMAP.md`, Fase 0).
- **(B) NIT + cuenta + medio de pago + política de datos ✓.**

El bloque D puede quedar pendiente (no se promete WhatsApp API en la demo).

---

## Plan de la semana (mientras cierra lo legal)

1. **Días 1–3:** dejar el bot de Telegram + deep-link `start` + Calendly + número WhatsApp + cuenta Meta +
   píxel + landing puente con las 3 CTAs; reemplazar los placeholders de `site.ts`.
2. **Días 2–5:** producir imágenes y videos-demo desde los briefs.
3. **Días 3–6:** preparar el outbound (número calentado, guion afinado con 30–40 prospectos de Bucaramanga).
4. **En paralelo (usuario):** cerrar empresa/NIT/cuenta/pago/política de datos (bloque C).
5. **Fin de semana 1:** con A + C en verde y la prueba E2E de las 3 vías pasada → **lanzar pauta + outbound**
   con el mismo bot y gancho.
