# 08 · TRACKING-SETUP — Medición y conciliación de los carriles de adquisición

> Cómo medir y conciliar las **vías de entrada** del prospecto (no solo Telegram). La conversión
> verdadera ocurre **fuera del píxel** (en Telegram, en Calendly, en WhatsApp): aquí cosemos a mano lo
> que la plataforma sí ve con lo que pasa al otro lado. Señalamos los huecos en vez de fingir un
> funnel cerrado.
>
> **Actualizado 2026-08-13, tres cambios que mueven este documento entero:**
> 1. **Entra el carril de Google.** Search (pagado) y el Business Profile (orgánico) suman las fuentes
>    `google` y `gbp` y los mediums `paid_search` y `organic_local`. Meta quedó **relegado**
>    (`15-CANALES-Y-SECUENCIA.md`), así que este doc dejó de ser "el tracking de la ronda de Meta".
> 2. **WhatsApp dejó de ser sólo click-to-chat humano.** Desde el 7-ago el bot atiende por WhatsApp
>    Business API, o sea que WhatsApp es a la vez **CTA** y **canal de producto**, y hay que medirlo
>    como los dos (§4.3).
> 3. **El KPI que manda pasó a ser reuniones agendadas**, con **$/reunión** como su costo. El
>    $/calificado no se borra: sigue siendo la métrica de **poda** por ángulo y keyword (§6).
>
> Autoridad: `01-SOURCE-BRIEF.md`. Cruces: `15-CANALES-Y-SECUENCIA.md` (el orden de los carriles),
> `04-STRATEGY.md` (embudo de Meta, para cuando entre), `07-CAMPAIGN-BRIEF.md` (creatividades),
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
3. **WhatsApp** → el **mensaje pre-rellenado** de `wa.me` (codifica el origen) + el conteo
   del evento `Lead`/`Contact` que dispara el clic en la landing.

> **Lo que cambió en la vía 3 (2026-08-07):** WhatsApp ya no es sólo el click-to-chat que atiende una
> persona. El bot **atiende por WhatsApp Business API**, así que la misma vía puede terminar en un
> humano o en el producto, y el conteo tiene que decir en cuál de los dos (§4.3). El píxel ve igual
> de poco en ambos casos: sigue midiendo la **intención de ir**, no la conversación.
>
> **Y lo que entra desde el carril de Google:** el Search manda tráfico a una **landing de servicio**
> —otra página, otro mensaje líder, el mismo Calendly— y el Business Profile manda llamadas, chats y
> clics al sitio desde Maps. Los dos se atribuyen por UTM/`origin` como cualquier otra fuente (§2).

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

Cada pieza publicable lleva una URL con UTMs **y** los parámetros de origen que se reinyectan en cada
CTA. Replican el nombre del ad set / grupo de anuncios / pilar de creatividad. Convención:

| Parámetro | Valor (ejemplo ad set A de Meta) | Para qué |
|---|---|---|
| `utm_source` | `meta` | estándar |
| `utm_medium` | `paid_social` | estándar |
| `utm_campaign` | `traffic_prospecting_co_2026q2` | la campaña |
| `utm_content` | `c1-tiempo-orden` | el pilar de creatividad |
| `utm_term` | `dueno-pyme` | la audiencia / ad set |
| **`start`** (Telegram) | `meta_duenopyme_c1` | viaja DENTRO del bot |
| **WhatsApp `text`** | `Hola, vengo de Meta (duenopyme_c1)…` | viaja DENTRO de WhatsApp |
| **Calendly query** | `?utm_source=meta&utm_content=c1...` | Calendly los guarda en el evento |

### 2.1 · Las fuentes válidas (la lista la manda `canon.json → utm`)

Un `utm_source` que no esté acá **no existe** para el reporte: `src/reportes validar` lo rechaza y el
lead queda sin fuente. Se agregaron `google` y `gbp` el 2026-08-13, al abrir el carril de Google, y se
agregaron **antes** de la primera pieza a propósito: una ronda sin origen registrado no se puede leer.

| `utm_source` | `utm_medium` | Qué es | ¿Cuesta plata? |
|---|---|---|---|
| **`google`** | **`paid_search`** | **Google Search**, la línea de **servicio a la medida** | **Sí** — está en `fuentesPagadas` |
| **`gbp`** | **`organic_local`** | **Google Business Profile**: Maps, pack local, reseñas | **No** — y por eso **NO** está en `fuentesPagadas` |
| `meta` | `paid_social` | Facebook / Instagram, el bot por vertical | Sí |
| `linkedin` · `instagram` · `tiktok` · `youtube` | `paid_social` / `organic_social` | según se pague o no | según el caso |
| `outbound` | `email` / `directo` | correo en frío y WhatsApp 1-a-1 manual | No (sin CAC) |
| `organico` | `organic_social` | contenido a mano, 2 posts/semana | No |

> 🔴 **`gbp` fuera de `fuentesPagadas` es una decisión, no un olvido.** El Business Profile no cobra,
> así que meterlo ahí le inventaría un costo por lead y ensuciaría la única regla que decide si un
> carril se corta. Trae leads y hay que atribuirlos; simplemente no entra al reparto del gasto.

**Ejemplos de origen por carril** (mismo formato `fuente_audiencia_creatividad`, mismo registro en
`npm run link nuevo`):

| Carril | `origin` de ejemplo | Dónde vive |
|---|---|---|
| Google Search | `google_softwaremedida_lp1` | landing de servicio + Calendly |
| Google Business Profile | `gbp_maps_perfil` | enlace del perfil y de cada publicación |
| Meta | `meta_duenopyme_c1` | landing puente `/ir` + `start` de Telegram |
| Outbound | `outbound_inmo_bga` | `start` del bot y firma del correo |

> Los UTMs **se pierden al saltar** a Telegram o a WhatsApp. Por eso cada vía tiene su propio puente
> codificado: el `start` del bot, el `text` pre-rellenado de WhatsApp, y los UTMs que Calendly sí persiste.
> La cadena `fuente_audiencia_creatividad` (p. ej. `meta_duenopyme_c1`) es **la clave de conciliación**.
>
> ⚠️ **El `start` de Telegram sólo admite `A-Za-z0-9_-` y 64 caracteres.** Vale para los origins de
> Google igual que para los de Meta: nada de puntos, tildes ni espacios, o Telegram descarta el resto
> sin avisar.

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

### 4.2 Vía Calendly — formulario de la reunión ✅ **montada el 2026-08-03**
- [x] El formulario de Calendly captura **nombre, negocio, rubro/vertical, teléfono** (campos custom) — ya
      es la fuente más rica de las tres: llega un lead **cualificado y con rubro**, listo para preparar la
      demo done-for-you (§7). El rubro son **botones de opción** (Inmobiliaria · Restaurante o domicilios ·
      Comercio o tienda · Citas y servicios · Otro), no texto libre, para que agrupe en el reporte.
- [x] Pasar los UTMs/`origin` como query a Calendly para que el evento guarde de qué anuncio vino.
      **Verificado en vivo** con `?a1=prueba_soltyai`.
- [ ] Exportar las reuniones agendadas (CSV de Calendly) y cruzarlas por origen en la hoja (§6).
      *(Se hace cuando haya reuniones que exportar.)*

> 🔴 **La pregunta 1 del evento NO se puede reordenar.** `/ir` inyecta `a1=<origen>` y **Calendly usa
> `a1` para prellenar la respuesta a la pregunta 1**, sea cual sea. Si otra pregunta queda de primera, el
> nombre del anuncio se escribe adentro de ésa y la atribución se pierde en silencio. Por eso la 1 es
> *"¿De dónde nos conociste?"* y va **sin obligatorio** (la llena la pauta; exigirla trabaría al visitante
> orgánico).
>
> ⚠️ **Y no se le pone la variable "Preguntas y respuestas" a ningún correo del evento.** Viene por
> defecto en la invitación del calendario y en el recordatorio, y le devuelve al prospecto sus propias
> respuestas — **incluido el código interno de la campaña**, escrito en su calendario para siempre. Se
> quitó de las dos el 3-ago. Las respuestas siguen disponibles en Calendly → Reuniones y en el export.

### 4.3 Vía WhatsApp — chat entrante *(reescrita 2026-08-13: ya son dos cosas, no una)*

Desde el 7-ago WhatsApp es **canal de producto**, no sólo un botón hacia una persona. La vía se parte
en dos y el conteo tiene que decir por cuál entró cada chat, porque miden cosas distintas:

| | **`wa.me` — click-to-chat humano** | **Bot en WhatsApp Business API** |
|---|---|---|
| Quién contesta | una persona | el bot, como en Telegram |
| Estado | 🔴 **bloqueado: falta el número propio de SoltyAI** | **vivo** desde el 7-ago (Tech Provider aprobado) |
| Cómo llega el origen | `text` pre-rellenado de `wa.me` | igual que el `start` de Telegram: parámetro en el enlace, leído al primer mensaje |
| Conteo | manual | automatizable por el mismo camino que Telegram |

- [ ] El mensaje pre-rellenado de `wa.me` trae el origen codificado en el `text`; el operador lo lee al
      recibir el primer mensaje y lo anota.
- [ ] Registrar cada chat entrante: origen, **cuál de las dos vías**, timestamp, avance
      (calificado → reunión → cierre).
- [ ] Para el bot en WhatsApp, persistir el origen en la ingesta igual que el `start` de Telegram
      (mismo cambio, otro canal).

> ⚠️ **Lo que todavía no está probado, y hay que medirlo desde el primer cliente:** el canal se validó
> contra **nuestro propio número**. El registro del WABA de un cliente real se hace **en vivo**, por el
> **camino A (asistida)** —el cliente nos agrega como socio y lo registramos con
> `tools/scripts/registrar-waba.mjs`—; no hay autoservicio. Anotar cuánto tarda ese registro es dato de
> operación, no de marketing, pero es lo que después permite (o no) prometer plazos de conexión.

> **Decisión simplificadora:** para el `wa.me` humano y para Calendly el conteo es **manual desde el
> día 1** (no hay instrumentación automática barata en SSG). Telegram y el bot de WhatsApp sí se
> pueden automatizar por el parámetro del enlace. Es aceptable al volumen actual.

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

Una sola hoja que cruza lo que ve la plataforma (mitad 1) con lo del otro lado (mitad 2). Se llena a
diario. **Una fila por `origin`, no por canal:** así conviven Google, Meta, el orgánico y el outbound
en la misma tabla sin pelearse.

### 6.1 Por origen

| Origen (`start`/UTM) | Carril | Gasto | Clics | Telegram (chats) | **Calendly (reuniones)** | WhatsApp (chats) | Calificados | Setup-prueba | Cierres | $/lead* | **$/reunión** | $/calificado | $/cierre |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `google_softwaremedida_lp1` | **Google Search** | … | … | — | … | … | … | … | … | … | … | … | … |
| `gbp_maps_perfil` | **GBP** (orgánico, gasto $0) | **$0** | … | — | … | … | … | … | … | — | — | — | — |
| `outbound_inmo_bga` | Outbound (gasto $0) | **$0** | — | … | … | … | … | … | … | — | — | — | — |
| `meta_duenopyme_c1` | Meta *(cuando entre)* | … | … | … | … | … | … | … | … | … | … | … | … |
| **Total** | | | | | | | | | | | | | |

\* **$/lead** = Gasto ÷ (Telegram + Calendly + WhatsApp). Un "lead" aquí = entró por cualquiera de las
vías.

> 🔴 **El KPI que manda es REUNIONES AGENDADAS, y su costo es el `$/reunión`** (meta: **2 por semana**).
> Cambió el 2026-08-13, cuando el cold email dejó de entregar demos y pasó a pedir 15 minutos: la
> demo dejó de ser el evento que se cuenta, y la cita en el Calendly ocupó su lugar.
>
> **El `$/calificado` no se borra ni baja de categoría: cambió de oficio.** Dejó de ser el norte y pasó
> a ser **la métrica de poda** — la que decide, ángulo por ángulo y keyword por keyword, qué se apaga.
> Los umbrales viven en `canon.json → tablero` y los calcula `src/reportes`, no el ojo:
> **corte $120.000 · advertencia $180.000 a las 48 h · matar $250.000 · escalar por debajo de $80.000**
> (+20% por paso, nunca más). El corte viejo de $25.000 estaba anclado al setup en vez de al LTV.
>
> Las dos métricas se leen juntas y en ese orden: **el $/reunión dice si el carril sirve; el
> $/calificado dice qué parte del carril se corta.**

- **Gasto / Clics** salen del panel del carril: **Google Ads** para `google`, Meta Ads Manager para
  `meta`. Los carriles de **gasto $0** (GBP, orgánico, outbound) van con **$0 escrito**, no con la
  celda vacía: en blanco parece un dato que falta, y en $0 es lo que es.
- **Telegram** sale del bot/panel/conteo manual (por `start`). **Calendly** del export de reuniones.
  **WhatsApp** del conteo manual de chats entrantes con origen (§4.3).
- **Setup-prueba / Cierres** se actualizan a mano según el avance de cada prospecto (§5).
- Cada número declara su **fuente de dato** (`export-meta`, `export-google`, `gbp`, `calendly`,
  `suite-mcp`, `manual`). Que un dato sea manual está bien; fingir que es automático, no.

### 6.2 Tasa de salto (clic → lead) por vía

| Vía | Clics al botón (`Lead` del píxel) | Llegaron al otro lado | Tasa salto | Si está muy baja (<15% est.)… |
|---|---|---|---|---|
| Telegram | … | … chats con `start` | … | fricción del salto a la app / rechazo |
| Calendly | … | … reuniones | … | el form pide demasiado / fricción de agendar |
| WhatsApp | … | … chats entrantes | … | número mal puesto / desconfianza |

> Comparar el clic en la landing contra lo que llega del otro lado es el número **más incierto y
> el que más caro cuesta no medir**. Vigilarlo por vía: dice si el problema es la creatividad (poco clic)
> o el salto (mucho clic, poco arribo).

### 6.3 Cada carril se juzga con su propia métrica

Confundirlas hace que un carril sano parezca un fracaso y se apague antes de tiempo
(`15-CANALES-Y-SECUENCIA.md` §2):

| Carril | Métrica que lo juzga | Paga en |
|---|---|---|
| **Google Search + GBP** | **reuniones agendadas** y **$/reunión** | semanas |
| **Meta** *(relegado)* | $/lead calificado | meses |
| **Orgánico** | publicaciones sostenidas primero, alcance después | 6–12 meses |
| **Outbound** | reuniones agendadas (sin CAC) | días |

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

**9.a · Carril de Google (es el que se abre primero)**

- [ ] **GA4 vivo** (`analytics.ga4MeasurementId` sigue en `G-XXXXXXXXXX`) — bloquea los dos carriles.
- [ ] **Conversión de Google Ads = "reunión agendada"**, no clic ni formulario descargable. Es el KPI
      que manda; medir otra cosa hace que Search se optimice hacia el número equivocado.
- [ ] **Landing de servicio** con su propio `origin` (`google_...`) y el mismo Calendly.
- [ ] **`origin` del Business Profile** registrado (`gbp_...`) en el enlace del perfil y en cada
      publicación, para que el pack local no llegue como "directo".
- [ ] Fuentes `google` y `gbp` y mediums `paid_search` / `organic_local` usados tal cual (§2.1): si no
      están en `canon.json → utm`, `src/reportes validar` los rechaza.

**9.b · Carril de Meta (relegado: esto se completa cuando entre, no antes)**

- [ ] Píxel instalado y verificado con Pixel Helper en `/` y `/ir`.
- [ ] Eventos `ViewContent` + los 3 `Lead` (telegram/calendly/whatsapp) disparando en la landing puente.
- [ ] Consent Mode v2 respetado (píxel carga tras consentimiento).
- [ ] 3 deep-links de Telegram con UTM + `start` correctos, uno por ad set, probados con un clic real.
- [x] URL de Calendly con UTMs en query + form capturando nombre/negocio/**rubro**/teléfono. ✅ **3-ago**,
      verificado con `?a1=prueba_soltyai` sobre el evento real.
- [ ] `wa.me/<número>` con `text` pre-rellenado que codifica el origen. 🔴 **Sin número: el CTA de
      WhatsApp no se pinta.** Hoy `/ir` ofrece 2 vías, no 3, y el reporte de §6 sólo tendrá dos columnas.
- [ ] Bot capturando y persistiendo `start` (o hoja de conteo manual lista como fallback).
- [ ] Hoja de conciliación (§6) creada, con la columna `setup-prueba` (§5), compartida con quien opere.
- [ ] **Prueba end-to-end propia de las 3 vías:** clic en anuncio (preview) → landing puente → entrar por
      cada CTA → ver el origen llegar al otro lado (bot / Calendly / WhatsApp). **No lanzar sin esto.**
      *(La vía Calendly ya está probada de punta a punta; faltan la de Telegram y la de WhatsApp.)*
- [ ] Placeholders de `site.ts` reemplazados (ver `11-PRE-LAUNCH-CHECKLIST.md`). ✅ Ya salieron
      `saas.demoUrl`, `calendlyUrl` y `lead.endpoint`; **quedan `whatsappNumber`, `ga4MeasurementId` y
      `metaPixelId`**, que son los tres que de verdad bloquean la pauta.

> ✅ **Lo que ya no es un hueco:** el §0 decía que la conversión ocurre fuera del píxel y que las 3 vías
> se cosen a mano. Sigue siendo cierto para Telegram y WhatsApp, pero **la vía Calendly ya no depende de
> conteo manual para el origen**: el `a1` viaja solo y queda escrito en el evento. El conteo manual que
> queda es el de *avance* del prospecto (§5), no el de procedencia.
