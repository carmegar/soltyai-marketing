# 11 · PRE-LAUNCH-CHECKLIST — Qué tener listo antes de salir a marketing

> Regla base: **para generar demanda NO necesitas la empresa formada; para COBRAR sí.**
> **La SAS ya está constituida** (matrícula CCB 731655, NIT 902081265-3 con RST, 2026-07-02), desde el
> **2026-07-13 hay cuenta Bancolombia + comercio Wompi (en sandbox)** y desde el **26-jul-2026 la SAS
> emite factura electrónica validada por la DIAN**. Para cobrar recurrente falta el paso de Wompi a
> **producción** y la política de datos publicada. Nada bloquea avanzar en lo operativo ahora.
>
> **Parche 2026-08-13, tres cambios:** (1) **WhatsApp salió del bloque D (diferido) y está vivo** —
> el bot atiende por la API oficial desde el 7-ago. (2) Entra un **bloque de arranque de Google**
> (perfil de empresa, cuenta de Ads, conversión de reunión, landing de servicio), porque el primer
> carril pago dejó de ser Meta. (3) Los precios por producto en USD pasaron a **COP**.
>
> Autoridad: `01-SOURCE-BRIEF.md`. Cruces: `15-CANALES-Y-SECUENCIA.md` (el orden de los carriles),
> `08-TRACKING-SETUP.md` (tracking), `09-OUTBOUND.md` (canal manual),
> `10-IMPLEMENTATION-ROADMAP.md` (cronograma), `business\09-checklist-usuario.md` (track legal).

---

## A. Operativo de campaña — se puede preparar YA (sin empresa)

### A.0 Arranque del carril de Google *(nuevo 2026-08-13 — es lo PRIMERO)*

El orden de canales cambió: **Google Business Profile → orgánico a mano → Google Search → Meta**
(`15-CANALES-Y-SECUENCIA.md`). Los dos primeros pasos de Google cuestan **$0** y no dependen de nada
de lo que hoy bloquea a Meta, así que van primero. Ojo: en este carril el **mensaje líder es el
servicio a la medida y la web**, no el bot.

**A.0.1 · Google Business Profile (gratis, y tarda semanas en madurar → crear ya)**

- [ ] **Crear el perfil** como **negocio de área de servicio**, sin dirección visible (no hay local
      con atención al público, y publicar la dirección personal es justo lo que se está corrigiendo).
- [ ] Datos exactos: nombre **SoltyAI** · razón social **SOLTYAI S.A.S. · NIT 902081265-3** ·
      categoría principal **Desarrollador de software** · zona de servicio **Bucaramanga y área
      metropolitana + Santander** · sitio `https://soltyai.com` · horario L–V 8:00–18:00 COT.
- [ ] 🔴 **Teléfono: el número propio de SoltyAI, no el personal.** El GBP quiere un número que
      conteste, y es el **mismo cuello** que tiene la tercera CTA de la landing. Un bloqueo, dos
      frentes parados.
- [ ] Verificación lista: la CCB puede pedir el **certificado de existencia** (matrícula 731655).
- [ ] **Primeras 3 publicaciones** con su `origin` registrado (`gbp_...`): el caso Bucaradomi, el caso
      Swisscontact/Zaranda, y el bot contestando por WhatsApp.
- [ ] **Pedir reseñas** a Bucaradomi y Swisscontact. Son la única prueba social **de origen externo**
      que el canon deja publicar, y hoy la lista de referencias tiene exactamente dos nombres.

**A.0.2 · Google Ads — la prueba de $400.000 de la línea de servicio**

- [ ] **Cuenta de Google Ads** creada, con los datos fiscales a nombre de **SOLTYAI S.A.S. · NIT
      902081265-3** (el gasto lo paga el socio y se registra como *"pagado por el socio — por
      reembolsar"*).
- [ ] **Conversión configurada = "reunión agendada"**, no clic ni descarga. Medir otra cosa optimiza
      la campaña hacia el número equivocado (`08-TRACKING-SETUP.md` §9.a).
- [ ] **GA4 vivo** — `ga4MeasurementId` sigue en `G-XXXXXXXXXX` y **bloquea igual que a Meta**.
- [ ] **3–4 keywords de intención**, exactas o de frase, nunca amplias, geo Bucaramanga + área
      metropolitana primero.
- [ ] **Negativos desde el día 1:** "gratis", "curso", "aprender", "empleo", "plantilla", "wordpress
      barato". En Search la plata se va por ahí, no por el CPC.

**A.0.3 · Landing de la línea de servicio (bloquea el Search)**

- [ ] **Página propia**, no la home del bot: el mensaje líder de Google es el **servicio a la medida**.
      Mismo Calendly, mismo `origin` (`google_...`), un solo mensaje adentro.
- [ ] Piso de precio y condiciones coherentes con el canon: **$3.000.000**, **50% de anticipo**,
      **1 proyecto simultáneo**. Si entran 2 proyectos a la vez **se pausa el carril**, no se contrata.
- [ ] Referencias verificables y nada más: **Swisscontact $2.300.000** (factura `SOL3`) y
      **Bucaradomi** (piloto, con permiso).

### A.1 Las 3 vías de entrada (la oferta de conversión)
- [ ] **Bot de Telegram** listo para inbound frío: bienvenida que califica (¿qué negocio?, ¿qué quieres
      automatizar?) + ofrece demo, pre-entrenado por vertical.
- [ ] **Deep-link con parámetro `start`** (`t.me/<bot>?start=meta_<adset>_<creativo>`) que el bot captura
      para marcar origen (puente de atribución Meta→Telegram — ver `08-TRACKING-SETUP.md`).
- [x] **Formulario / Calendly** configurado para "Agenda una demo": captura **nombre, negocio,
      rubro/vertical, teléfono** + recibe UTMs por query. ✅ **3-ago.** Evento
      `calendly.com/carlos-soltyai/30min` con las 4 preguntas en orden; la **pregunta 1 es "¿De dónde
      nos conociste?"** porque `/ir` inyecta `a1=<origen>` y Calendly prellena con eso la respuesta a la
      pregunta 1. Verificado en vivo con `?a1=prueba_soltyai`.
- [ ] **Número de WhatsApp click-to-chat** (`wa.me/<número>`) con mensaje pre-rellenado que codifica el
      origen. (Es el mismo número/lógica que respalda el outbound manual.)

### A.2 Landing + tracking
- [ ] **Cuenta Meta Business + píxel** instalado en la landing y en la landing puente.
- [x] **Landing puente `/ir`** con las **3 CTAs** (Telegram primario, Calendly secundario, WhatsApp
      terciario), que dispara `ViewContent` + un `Lead` por CTA y evita rechazos por destino externo.
      ✅ **3-ago** — con la salvedad de que **el CTA de WhatsApp no se pinta** hasta que haya número:
      la landing aplica *vacío = apagado*, así que hoy `/ir` ofrece 2 vías, no 3.
- [x] **Landing principal con las 3 CTAs** verificada ✅ **3-ago, contra producción**: **23 CTAs de
      Calendly vivos en 8 páginas**. Antes de eso llevaban desde el 24-jul apuntando a un 404.
- [ ] **Píxel respeta Consent Mode v2** (carga tras consentimiento).

### A.3 Creatividades + outbound
- [ ] **Creatividades producidas:** imágenes + videos-demo (briefs/guiones en `07-CAMPAIGN-BRIEF.md`).
- [ ] **Copy cargado** y revisado con `npm run guardrails`; canal honesto (**WhatsApp y Telegram sí,
      la web no**) + **pricing COP** y nunca "un asistente de IA" a secas. Los planes en dólares
      Starter/Growth/Pro están **prohibidos**: quedaron superados.
- [ ] **Número de WhatsApp calentado** para el outbound (número personal, **no el de la API**) + los
      **865 prospectos** de la suite con su estado al día (ver `09-OUTBOUND.md`).
- [ ] **Hoja de conciliación** para el conteo manual (una fila por `origin` + estado `setup-prueba`).
- [ ] *(Opcional)* revisar **Meta Ad Library** por anunciante antes de producir creatividades finales.

### A.4 Placeholders de `site.ts` a reemplazar antes del deploy (BLOQUEANTE)

En `platform/apps/landing/src/data/site.ts` (las 3 CTAs y el tracking ya existen como campos; faltan los
valores reales):

| Campo | Estado (2026-08-03) | Detalle |
|---|---|---|
| `saas.demoUrl` | ✅ | `t.me/inmobiliaria_solty_bot`, el bot demo real en producción |
| `calendlyUrl` | ✅ | `calendly.com/carlos-soltyai/30min`, con las 4 preguntas y el `a1` verificado |
| `lead.endpoint` | ✅ | `contratos.soltyai.com/api/leads` — endpoint **propio en la suite**, no Formspree (la suite ya corre Next y ya tiene Resend). Avisa por correo con `reply_to` del prospecto y por Telegram |
| `social.{facebook,instagram,tiktok,youtube,linkedin}` | ✅ | Perfiles verificados. `twitter` vacío a propósito |
| `whatsappNumber` + `whatsappMessage` | 🔴 **vacío** | Espera **línea comercial nueva**, no el celular personal. Mientras esté vacío **el CTA de WhatsApp no se pinta** en ninguna página |
| `analytics.ga4MeasurementId` | 🔴 `G-XXXXXXXXXX` | **Bloquea la pauta** |
| `analytics.metaPixelId` | 🔴 vacío = píxel apagado | **Bloquea la pauta** |

> 🔴 **La lección de este bloque, que se pagó con un mes de producción rota:** `calendlyUrl` y
> `whatsappNumber` traían placeholders **con forma de valor real** (`calendly.com/soltyai/demo`,
> `57XXXXXXXXXX`), indistinguibles de un valor bueno para el build, el smoke test y el ojo. Los 8 CTAs
> de "Agenda una demo" llevaron a un 404 desde el 24-jul hasta el 3-ago **sin que ninguna señal fallara**.
> Los que quedan están en vacío o en `G-XXXXXXXXXX` a propósito: **la ausencia tiene que ser detectable.**
>
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
- [ ] **Plan correcto por rubro** claro para quien cierra. Los planes **no cambian con el rubro**: lo
      que cambia es el vertical que se activa. Precios **antes de IVA**, fuente `data/canon.json`:
      - Inmobiliaria → **Pro $490.000/mes** (500 conversaciones, con IA) + **setup $400.000**.
      - Citas (peluquerías, spas, consultorios) → **Esencial $290.000/mes** (200, sin IA): agendar y
        recordar no necesita que el bot improvise, y sin IA el margen es mejor.
      - Domicilios / comercio con catálogo → **Pro $490.000/mes** + **setup $400.000**.
      - Inventario grande o mucho volumen → **Premium $790.000/mes** (1.500 conversaciones).
      - Excedente: **$50.000 por cada 100 conversaciones** de más.
      - **PROHIBIDO** el catálogo en dólares: ni Starter/Growth/Pro, ni Agenda $65/$250, ni Pedidos
        $80/$280, ni Inmobiliario $249/$600 o $650/$1.500. Quedó **superado** por el canon COP.
- [ ] **Tiempo de montaje del setup-prueba acordado** (en días, no semanas) para no enfriar el lead.
- [ ] **Estado `setup-prueba` en la hoja/CSV** para medir demo → setup-prueba → cierre (ver
      `08-TRACKING-SETUP.md` §5).

---

## C. Legal / empresa — necesario antes de COBRAR el primer cliente

- [x] **Constitución SAS** (CCB, matrícula 731655) y **NIT / RUT** (**NIT 902081265-3**, con RST) — hechos el 2026-07-02.
- [~] **Cuenta bancaria empresarial (Bancolombia)** — **ABIERTA el 2026-07-13**. Del capital entraron
      $500.000; **faltan $1.500.000 por consignar**.
- [~] **Medio de pago** operativo para suscripción + setup: comercio **Wompi** creado con el NIT (2026-07-13) pero **en sandbox** → hoy se cobra por **transferencia a la cuenta de la SAS**; para link/recurrente Wompi faltan las **llaves de producción**.
- [x] **Facturación electrónica DIAN — HABILITADA el 2026-07-26.** Responsabilidad 52, certificado
      GSE, prefijo `SOL`, resolución `18764113048579`, con la firma electrónica del representante
      legal generada el 24-jul (vence 24-jul-2029). La SAS **emite factura validada por la DIAN**, no
      cuenta de cobro. **Es un argumento de venta**, no sólo un trámite: el cliente descuenta el gasto,
      y ninguna plataforma extranjera del mapa competitivo se lo da.
- [~] **Política de tratamiento de datos (Ley 1581)** + texto de consentimiento en el bot — **REDACTADOS y listos**
      en `business/05a-politica-tratamiento-datos.md` (política + aviso + consentimiento + cláusula de encargo).
      Falta: confirmar teléfono, publicar `/privacidad`, e implementar el consentimiento en el bot.

> Detalle y orden de este track en `business\09-checklist-usuario.md`.

---

## D. Diferido — NO bloquea el arranque

> ✅ **WhatsApp salió de este bloque el 2026-08-13: dejó de estar diferido.** Estuvo acá desde el
> 2026-06 esperando a Meta. Meta **aprobó** el App Review el 6-ago, la app `SoltyAI Platform` quedó
> en **Live** el 7-ago y el bot contestó E2E: **el canal está vivo y sí se promete.** Lo que queda de
> este bloque abajo no es WhatsApp.

- [x] **WhatsApp Business API oficial — VIVA desde el 2026-08-07.** SoltyAI es **Tech Provider
      aprobado por Meta**. El bot atiende por WhatsApp y por Telegram, y los dos canales **se
      prometen en las creatividades**. Lo que sigue restringido no es el canal, son dos cosas
      distintas: no se vende "un asistente de IA" abierto (la política de IA de WhatsApp **prohíbe**
      los bots de propósito general) y **no se promete el widget web**, que sigue en *próximamente*.
      - ⚠️ **Todavía diferido de verdad:** el canal se probó contra **nuestro propio número**. El
        primer WABA de un cliente real se registra en vivo, por el **camino A (asistida)** — el
        cliente nos agrega como socio y lo registramos con `tools/scripts/registrar-waba.mjs`. **No
        prometer plazos de conexión al día** hasta haberlo hecho una vez.
- [ ] **Embedded Signup (autoservicio de conexión)** — exige el permiso `business_management`, que
      **no** quedó aprobado, y se construye cuando haya **3 clientes o más**. Hasta entonces la
      conexión es asistida, y en la venta eso no es una limitación: es el moat.
- [ ] **Widget web** — no existe. Sigue en `canales.proximamente` y **no se promete**.

---

## Definición de "listo para salir" (gate)

> El gate **dejó de ser el de Meta**. Antes decía "todo listo → lanzar pauta", y esa pauta era una
> sola: Meta. Hoy son carriles distintos, con relojes distintos, y **cada uno tiene su propio gate**.
> Esperar a que todo esté verde para encender el primero es regalar las semanas que el GBP tarda en
> madurar sin costar un peso.

| Carril | Su gate | ¿Se puede hoy? |
|---|---|---|
| **Google Business Profile** | A.0.1 ✓ (sólo necesita el **número propio**) | casi: falta el número |
| **Orgánico a mano** | nada: se publica y ya | **sí, hoy** |
| **Outbound** | número calentado + los 865 prospectos con estado | **sí, corriendo** |
| **Google Search** | A.0.2 + A.0.3 + **GA4 vivo** + el GBP creado | no todavía |
| **Meta** *(relegado)* | A.1–A.4 completos + píxel + creatividad por vertical | no, y **no urge** |

Y transversal a todos: **(B) NIT + cuenta + medio de pago + política de datos ✓** para poder cobrar.
De esos, hoy falta Wompi en producción y publicar `/privacidad`.

---

## Plan de la semana

1. **Días 1–2 (gratis y sin dependencias):** crear el **Google Business Profile** y pedirle reseña a
   Bucaradomi y a Swisscontact. Publicar los 2 primeros posts orgánicos con su `origin`.
2. **Días 1–3:** reemplazar los placeholders de `site.ts` — **el número propio de SoltyAI desbloquea
   tres cosas a la vez** (el GBP, la tercera CTA de la landing y el contestador de muestra 24/7).
   GA4 vivo.
3. **Días 3–6:** sostener el outbound (número calentado, guion afinado con 30–40 del área
   metropolitana). Es el único carril que trae reuniones esta semana.
4. **Días 4–7:** armar la **landing de servicio** y la cuenta de Google Ads con la conversión de
   reunión. Abrir la prueba de $400.000 cuando el GBP esté verificado.
5. **En paralelo (usuario):** Wompi a producción y publicar la política de datos (bloque C).
6. **Meta:** no esta semana. Entra cuando haga falta volumen que los otros carriles no den.
