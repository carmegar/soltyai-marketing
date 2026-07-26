# 08 · TRACKING-SETUP — Medición y conciliación de la ronda US$400

> Cómo medir y conciliar las **3 vías de entrada** del prospecto (no solo Telegram). La conversión
> verdadera ocurre **fuera del píxel** (en Telegram, en Calendly, en WhatsApp): aquí cosemos a mano lo
> que Meta sí ve con lo que pasa al otro lado. Señalamos los huecos en vez de fingir un funnel cerrado.
>
> Autoridad: `01-SOURCE-BRIEF.md`. Cruces: `04-STRATEGY.md` (embudo), `07-CAMPAIGN-BRIEF.md` (creatividades),
> `09-OUTBOUND.md` (conciliación del canal manual), `11-PRE-LAUNCH-CHECKLIST.md` (prerrequisitos).

---

## 0. La verdad de fondo (léela antes de configurar nada)

El píxel de Meta mide lo que pasa en **la web** (impresión → clic → vista de landing). **No puede ver
nada después del salto**: ni el chat dentro de Telegram, ni la reunión agendada en Calendly, ni la
conversación de WhatsApp. Por eso el tracking tiene **dos mitades que hay que coser a mano**:

```
  MITAD 1 (la ve Meta)            │   MITAD 2 (NO la ve Meta)
  ───────────────────────────────┼──────────────────────────────────
  Impresión → Clic → Aterriza en │   Chat en Telegram   ┐
  la landing puente (LPV) →      │   Reunión en Calendly ├→ Calificado → Demo → Cierre
  clic en una de las 3 CTAs      │   Chat en WhatsApp    ┘
```

**Tres puentes cruzan la frontera, uno por cada vía de entrada:**

1. **Bot de Telegram** → el parámetro **`start`** del deep-link (viaja DENTRO de Telegram; nos dice de
   qué anuncio/origen vino la conversación). Es la columna vertebral de la atribución.
2. **Calendly** → los **campos del formulario** (nombre, negocio, **rubro/vertical**, teléfono) **+ UTMs
   pasados como query** que Calendly guarda en el evento.
3. **WhatsApp click-to-chat** → el **mensaje pre-rellenado** de `wa.me` (codifica el origen) + el conteo
   del evento `Lead`/`Contact` que dispara el clic en la landing.

> Nada de esto reemplaza la **hoja de conciliación manual** (§6): es la que une las 3 vías con el gasto
> de Meta y con los cierres reales.

---

## 1. Píxel de Meta (mitad 1 — común a las 3 vías)

- [ ] Crear **un Píxel de Meta** en Events Manager (cuenta de SoltyAI).
- [ ] Instalarlo en `soltyai.com` **y en la landing puente** (`/ir`, ver §3). La landing ya trae GA4 +
      Consent Mode v2 + banner de cookies (ver `platform/apps/landing/CLAUDE.md`): el píxel carga **tras
      consentimiento**.
- [ ] Verificar disparo con **Meta Pixel Helper** antes de gastar un peso.
- [ ] **Eventos** (uno por CTA, para distinguir qué vía elige cada clic):
  - **`PageView`** — automático en toda la landing.
  - **`ViewContent`** en la landing puente `/ir` (el clic del anuncio aterrizó).
  - **`Lead` con `content_name: "telegram"`** — clic en **"Prueba el bot ahora"**.
  - **`Lead` con `content_name: "calendly"`** — clic en **"Agenda una demo"**.
  - **`Lead` con `content_name: "whatsapp"`** — clic en **"Escríbenos por WhatsApp"**.
  - *(opcional)* **`Schedule`** si Calendly se embebe y dispara su callback; en SSG normal queda en el
    `Lead` del clic.
- [ ] **CAPI / server-side:** **no** es requisito de ronda 1 (la landing es SSG en Cloudflare Pages;
      montar CAPI con US$400 es sobre-ingeniería). Anotado como mejora de fase 2 para recuperar señal iOS.

> **Hueco honesto:** los 3 `Lead` miden **intención de ir** a cada destino, **no** una conversación real,
> ni una reunión hecha, ni un cierre. Esos se cuentan en la mitad 2 (§§4–5). No confundir.

---

## 2. UTMs y parámetros de origen (la nomenclatura que concilia todo)

Cada anuncio lleva una URL con UTMs **y** los parámetros de origen que se reinyectan en cada CTA. Replican
el nombre del ad set / pilar de creatividad (ver `07-CAMPAIGN-BRIEF.md`). Convención:

| Parámetro | Valor (ejemplo ad set A) | Para qué |
|---|---|---|
| `utm_source` | `meta` | estándar |
| `utm_medium` | `paid_social` | estándar |
| `utm_campaign` | `traffic_prospecting_co_2026q2` | la campaña |
| `utm_content` | `c1-tiempo-orden` | el pilar de creatividad |
| `utm_term` | `dueno-pyme` | la audiencia / ad set |
| **`start`** (Telegram) | `meta_duenopyme_c1` | viaja DENTRO del bot |
| **WhatsApp `text`** | `Hola, vengo de Meta (duenopyme_c1)…` | viaja DENTRO de WhatsApp |
| **Calendly query** | `?utm_source=meta&utm_content=c1...` | Calendly los guarda en el evento |

> Los UTMs **se pierden al saltar** a Telegram o a WhatsApp. Por eso cada vía tiene su propio puente
> codificado: el `start` del bot, el `text` pre-rellenado de WhatsApp, y los UTMs que Calendly sí persiste.
> La cadena `fuente_audiencia_creatividad` (p. ej. `meta_duenopyme_c1`) es **la clave de conciliación**.

---

## 3. Destino: landing puente `/ir` con las 3 CTAs (recomendado)

El anuncio NO apunta directo a Telegram. Apunta a una **landing puente** que dispara el píxel y ofrece las
**3 opciones de entrada** (las mismas de `01-SOURCE-BRIEF.md` §oferta de conversión). La página lee los
UTMs/`start` de la query y los reinyecta en cada botón.

```
Anuncio → soltyai.com/ir?utm_source=meta&utm_content=c1...&origin=meta_duenopyme_c1
            │  (dispara ViewContent)
            ▼
   ┌────────────────────────────────────────────────────────┐
   │  [ Prueba el bot ahora ]   → t.me/<bot>?start=meta_duenopyme_c1   (Lead: telegram)
   │  [ Agenda una demo ]       → calendly.com/...?utm_...&a1=meta_duenopyme_c1 (Lead: calendly)
   │  [ Escríbenos por WhatsApp ] → wa.me/<num>?text=...(origen codificado)     (Lead: whatsapp)
   └────────────────────────────────────────────────────────┘
```

- **Ventaja:** el píxel ve el aterrizaje (ViewContent) y **qué CTA eligió** cada clic (3 `Lead`
  distintos). Limpia la atribución del tramo web y le da a Meta señal para optimizar.
- **Ventaja 2:** si Meta rechaza enlaces directos a `t.me` o `wa.me` (ver `04-STRATEGY.md`), la landing
  puente evita el problema (el destino del anuncio es nuestra propia web).
- **Costo:** un clic extra. Aceptable; los 3 botones deben ser inmediatos y grandes, con el de Telegram
  como primario (más destacado).
- **Implementación:** ruta `/ir` en la landing Astro que lea `origin`/UTMs de la query y construya los 3
  enlaces parametrizados por JS. Las 3 CTAs y sus destinos ya existen en
  `platform/apps/landing/src/data/site.ts` (`saas.demoUrl`, `calendlyUrl`, `whatsappNumber`,
  `whatsappMessage`, `lead.endpoint`); `/ir` solo los reusa con el origen inyectado.

> **Alternativa (solo si `/ir` no se alcanza a montar):** mandar el anuncio directo a la home `/` (que ya
> tiene las 3 CTAs) con UTMs. Pierdes el control fino del `Lead` por CTA, pero el `start`/`text`/UTM de
> cada botón sigue funcionando. Deep-link directo a `t.me` sin landing = última opción (cero LPV/Lead y
> más riesgo de rechazo).

---

## 4. Conteo del otro lado (mitad 2 — donde ocurre la conversión)

### 4.1 Vía Telegram — `start` del bot
- [ ] El bot captura el parámetro `start` al primer `/start` (Telegram lo entrega en el primer mensaje).
- [ ] Registra por conversación: `start` (origen), timestamp, y avance del embudo: **iniciada →
      calificada → demo → reunión agendada → cierre**.
- [ ] Origen visible para el operador (en el panel queda la fuente `meta_duenopyme_c1`).

> **Estado real:** el bot corre sobre la plataforma multi-tenant (Telegram ya soportado). Leer `start` y
> persistir el origen es un cambio menor en la ingesta de Telegram. **Si no está listo al lanzar:**
> fallback = **conteo manual** (el operador anota cada conversación y su origen leyendo el `start` en el
> log). Funciona para el volumen de la ronda (~50–300 conversaciones). Documentar el hueco, no taparlo.

### 4.2 Vía Calendly — formulario de la reunión
- [ ] El formulario de Calendly captura **nombre, negocio, rubro/vertical, teléfono** (campos custom) — ya
      es la fuente más rica de las tres: llega un lead **cualificado y con rubro**, listo para preparar la
      demo done-for-you (§7).
- [ ] Pasar los UTMs/`origin` como query a Calendly para que el evento guarde de qué anuncio vino.
- [ ] Exportar las reuniones agendadas (CSV de Calendly) y cruzarlas por origen en la hoja (§6).

### 4.3 Vía WhatsApp — chat entrante
- [ ] El mensaje pre-rellenado de `wa.me` trae el origen codificado en el `text`; el operador lo lee al
      recibir el primer mensaje y lo anota.
- [ ] Registrar manualmente cada chat entrante: origen, timestamp, avance (calificado → demo → cierre).

> **Decisión simplificadora:** para WhatsApp y Calendly el conteo es **manual desde el día 1** (no hay
> instrumentación automática barata en SSG). Solo Telegram puede automatizarse vía `start`. Es aceptable
> al volumen de la ronda.

---

## 5. Conciliación del onboarding tester → cliente

La oferta no termina en "probó el bot". El flujo de cierre es: **probó/agendó → le dejamos el bot
configurado con sus datos reales para que lo pruebe de verdad → cierre** (el setup como prueba de valor;
ver `01-SOURCE-BRIEF.md` §onboarding y `09-OUTBOUND.md` §cierre). Para no perder de vista ese tramo, la
hoja añade dos estados después de "demo":

```
iniciada/contacto → calificada → demo (probó el bot) → setup-prueba (config con sus datos) → cierre
```

- **`setup-prueba`** = aceptó que le montemos el bot con SUS datos reales (su catálogo / agenda / inventario).
  Es el momento de mayor intención: el prospecto ya se proyectó usándolo.
- Medir **demo → setup-prueba** y **setup-prueba → cierre** por separado dice dónde se cae el embudo: si
  muchos prueban pero pocos aceptan el setup, el problema es la oferta de adaptación, no la creatividad.
- Este estado aplica a las 3 vías y al outbound (misma columna en la hoja de §6 y en el CSV de
  `09-OUTBOUND.md`).

---

## 6. Hoja de conciliación (el reporte de la ronda)

Una sola hoja que cruza lo de Meta (mitad 1) con lo del otro lado (mitad 2). Se llena a diario.

### 6.1 Por ad set / origen

| Origen (`start`/UTM) | Ad set | Gasto (Meta) | Clics (Meta) | Telegram (chats) | Calendly (reuniones) | WhatsApp (chats) | Calificados | Setup-prueba | Cierres | $/lead* | $/calificado | $/cierre |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `meta_duenopyme_c1` | A | … | … | … | … | … | … | … | … | … | … | … |
| `meta_operativo_c2` | B | … | … | … | … | … | … | … | … | … | … | … |
| `meta_vertical_c3` | C | … | … | … | … | … | … | … | … | … | … | … |
| **Total** | | **$400** | | | | | | | | | | |

\* **$/lead** = Gasto ÷ (Telegram + Calendly + WhatsApp). Un "lead" aquí = entró por cualquiera de las 3
vías. **$/calificado** es el KPI norte (ver `04-STRATEGY.md`).

- **Gasto / Clics** salen de Meta Ads Manager (filtrar por ad set).
- **Telegram** sale del bot/panel/conteo manual (por `start`). **Calendly** del export de reuniones.
  **WhatsApp** del conteo manual de chats entrantes con origen.
- **Setup-prueba / Cierres** se actualizan a mano según el avance de cada prospecto (§5).

### 6.2 Tasa de salto (clic → lead) por vía

| Vía | Clics al botón (Meta `Lead`) | Llegaron al otro lado | Tasa salto | Si está muy baja (<15% est.)… |
|---|---|---|---|---|
| Telegram | … | … chats con `start` | … | fricción del salto a la app / rechazo |
| Calendly | … | … reuniones | … | el form pide demasiado / fricción de agendar |
| WhatsApp | … | … chats entrantes | … | número mal puesto / desconfianza |

> Comparar el clic en la landing (Meta) contra lo que llega del otro lado es el número **más incierto y
> el que más caro cuesta no medir**. Vigilarlo por vía: dice si el problema es la creatividad (poco clic)
> o el salto (mucho clic, poco arribo).

---

## 7. Onboarding tester → cliente (cómo lo medimos cierra el círculo)

El estado **`setup-prueba`** (§5) es donde el marketing entrega al cierre. Para que sea medible y no se
pierda nadie:

- Cada lead que pasa a `setup-prueba` queda con: vía de entrada, **rubro/vertical** (clave para saber qué
  producto cerrar — ver `05-PRICING.md`), y fecha en que se le dejó el bot con sus datos.
- El rubro lo da **gratis** la vía Calendly (campo del form) y se pregunta en Telegram/WhatsApp.
- El cierre se atribuye al **origen de la conversación que originó** el `setup-prueba` (aproximación, no
  ground truth — ver §8).

---

## 8. Huecos honestos (lo que este setup NO resuelve)

1. **Atribución no determinista del cierre.** Sabemos de qué anuncio vino el *primer contacto*, pero un
   cierre tarda días e involucra una reunión y un setup. Lo atribuimos por el origen del primer
   touchpoint. Es aproximación, no ground truth.
2. **Pérdida de UTM en el salto a la app.** Los UTMs no sobreviven a `t.me` ni `wa.me`; dependemos del
   `start` / `text` codificado. Si no se capturan, el lead queda **sin origen** → se cuenta como "directo"
   y ensucia el reporte. Verificar la captura el día 1 con un clic de prueba propio en las 3 vías.
3. **WhatsApp y Calendly = conteo manual.** No hay instrumentación automática barata en SSG; el operador
   los anota a mano. Aceptable al volumen de la ronda, laborioso a escala.
4. **iOS / pérdida de señal del píxel.** Sin CAPI, parte de los eventos web de iOS se pierde. En ronda 1
   lo aceptamos (el píxel aquí es secundario; la verdad está en el conteo del otro lado). Fase 2: CAPI.
5. **Sin retargeting medible aún.** El píxel siembra audiencias (ver `07-CAMPAIGN-BRIEF.md`) pero en ronda
   1 no se activan; su medición llega en fase 2.

---

## 9. Checklist de "listo para lanzar" (tracking)

- [ ] Píxel instalado y verificado con Pixel Helper en `/` y `/ir`.
- [ ] Eventos `ViewContent` + los 3 `Lead` (telegram/calendly/whatsapp) disparando en la landing puente.
- [ ] Consent Mode v2 respetado (píxel carga tras consentimiento).
- [ ] 3 deep-links de Telegram con UTM + `start` correctos, uno por ad set, probados con un clic real.
- [ ] URL de Calendly con UTMs en query + form capturando nombre/negocio/**rubro**/teléfono.
- [ ] `wa.me/<número>` con `text` pre-rellenado que codifica el origen.
- [ ] Bot capturando y persistiendo `start` (o hoja de conteo manual lista como fallback).
- [ ] Hoja de conciliación (§6) creada, con la columna `setup-prueba` (§5), compartida con quien opere.
- [ ] **Prueba end-to-end propia de las 3 vías:** clic en anuncio (preview) → landing puente → entrar por
      cada CTA → ver el origen llegar al otro lado (bot / Calendly / WhatsApp). **No lanzar sin esto.**
- [ ] Placeholders de `site.ts` reemplazados (ver `11-PRE-LAUNCH-CHECKLIST.md`): `saas.demoUrl`,
      `calendlyUrl`, `whatsappNumber`, `lead.endpoint`, `analytics.ga4MeasurementId`.
