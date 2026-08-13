# 03 · Análisis competitivo — SoltyAI (pauta Meta, ronda 1)

> Inteligencia competitiva para la pauta de SoltyAI en Meta. Mercado: chatbots de IA /
> WhatsApp para negocios en Colombia y LATAM. Foco: dueños/administradores de PYMEs.
>
> **Honestidad de datos:** distingo explícitamente hecho verificado (con URL) de estimación.
> Donde no encontré precio o dato lo marco "**no público / no verificado**". No hay cifras
> de spend publicitario inventadas: el mercado LATAM de chatbots PYME **no expone spend en
> Meta Ad Library** (eso solo aplica a anuncios políticos/sociales), así que cualquier estimación
> de inversión sería invención y la omito.
>
> Fecha de investigación: 2026-06-17. **Posicionamiento de SoltyAI actualizado 2026-06-20**
> (promesa done-for-you + pricing por producto; la tabla, precios verificados y fuentes se conservan).
>
> **Parche 2026-08-13.** Se actualizaron **nuestros** precios a COP (el canon manda) y se ascendió a
> **Meta Business Agent** a su propia sección: es el competidor que más pesa y estaba tratado como
> nota al pie. **Los precios de los competidores NO se tocaron**: son datos verificados de terceros,
> en USD, con su URL. Y la secuencia de canales cambió: Meta dejó de ser el primer carril pago
> (`15-CANALES-Y-SECUENCIA.md`).

---

## 1. Tabla de competidores

Precios en USD/mes salvo donde se indique. "IA" = si el producto promociona inteligencia
artificial generativa/conversacional como capacidad central (no solo flujos preprogramados).

| # | Competidor | Tipo | Público | IA | Precio entrada (verificado) | Ángulo de marketing principal | Fuente |
|---|---|---|---|---|---|---|---|
| 1 | **Cliengo** (Argentina) | Plataforma chatbot web + WhatsApp, PYME-mid | PYME a media | Sí ("Copilot IA" + ChatGPT entrenado) | **$45** (Starter, 500 conv, 2 agentes) → $119 → $259 | "Chatbot que atiende 24/7, califica leads y deriva al equipo correcto" | [cliengo.com/pricing](https://www.cliengo.com/pricing) |
| 2 | **Whaticket** (LATAM) | CRM + multiagente WhatsApp | PYME | Sí ("IA Whaticket", requiere tokens OpenAI aparte) | **$49** (Basic, 3 agentes, 1 conexión WA) → $109 Pro | "Automatiza ventas y atención; el multiagente WhatsApp más adoptado por PYMEs LATAM" | [whaticket.com/precios](https://whaticket.com/precios/) |
| 3 | **B2Chat** (Colombia) | Multiagente + chatbot, multicanal | PYME / media colombiana | Parcial (chatbot básico + automatización; IA no es el centro) | Rango ~USD 50–300 (Lite ~96€/mes en su sitio EU); **plan exacto en USD no público** | "Centraliza WhatsApp/FB/IG/Telegram en una bandeja; soporte local, +400 empresas LATAM" | [b2chat.io/precios](https://www.b2chat.io/precios/) · [marketingdigital.blog](https://marketingdigital.blog/mejores-agentes-de-ia-para-whatsapp-en-colombia/) |
| 4 | **Keybe / Biky** (Colombia) | "Vendedor IA" conversacional + emocional | PYME a media (auto, retail) | Sí (IA conversacional + emocional, "no es un bot, es un vendedor") | **No público** (cotización) | "Tu bot no vende; Biky sí. Vendedor de IA, no un chatbot. IA con emoción/contexto" | [keybe.ai](https://keybe.ai/) · [biky.ai](https://biky.ai/) |
| 5 | **Leadsales** (México) | CRM para WhatsApp + redes | PYME / equipos de venta | Parcial (CRM-first; IA secundaria) | **$97** (Básico) → $133 Profesional; +$13/usuario | "CRM para WhatsApp y ventas en redes; organiza y escala tu operación" | [leadsales.io/pricing](https://leadsales.io/en/pricing/) · [chately.co](https://chately.co/blog/crm-whatsapp-precio) |
| 6 | **Chately** (LATAM) | CRM + IA multiagente WhatsApp | PYME / media | Sí (IA multiagente, respuesta <3s) | **$39** → $89 → $159 (todas las funciones en todos los planes) | "CRM WhatsApp con IA, todo incluido, precio claro" | [chately.co/blog/crm-whatsapp-precio](https://chately.co/blog/crm-whatsapp-precio) |
| 7 | **Treble.ai** (Colombia) | Plataforma marketing WhatsApp + BSP oficial Meta | Media / enterprise | Sí (automatización + Click-to-WhatsApp ads) | **No público** (sales-led) | "La plataforma de WhatsApp Marketing más eficiente; BSP oficial; Click-to-WhatsApp ads" | [treble.ai](https://treble.ai/en/) |
| 8 | **Yalo** (México) | Conversational commerce, motor de ventas IA | **Enterprise** (Nestlé, Coca-Cola, Unilever) | Sí (agentes IA, "Commerce Engine") | **No público** (enterprise, sales-led) | "Plataforma de ventas inteligente con agentes; digitaliza tu canal tradicional B2B" | [yalo.ai](https://www.yalo.ai/) |
| 9 | **ManyChat** (global) | Constructor no-code IG/WA/Messenger/TikTok | PYME DIY / marketers | Sí (solo en Pro $29+ / Business $69+) | Free (25 contactos) → **Pro $29+** (2.500 contactos); WA $0.02–0.08/conv | "Chat marketing made easy; automatiza IG/WA tú mismo, sin código" | [manychat.com/pricing](https://manychat.com/pricing) · [setsmart.io](https://setsmart.io/blog/manychat-pricing) |
| 10 | **Landbot** (España) | Constructor visual no-code, flujos + WA API | PYME DIY | Parcial (IA en planes altos) | **€40** Starter → €100 Pro; WhatsApp €80 → €200 | "Constructor visual sin código; diseña el flujo arrastrando" | [voiceflow.com/blog/landbot](https://www.voiceflow.com/blog/landbot) |
| 11 | **Aivo** (Argentina) | Servicio al cliente conversacional con IA | Media / enterprise | Sí | **No público** (sales-led) | Atención al cliente automatizada con IA (omnicanal) | (categoría enterprise; no verifiqué precio) |
| 12 | **Auronix** (México) | Mensajería empresarial / conversational | Enterprise | Sí | **No público** (sales-led) | Mensajería conversacional para grandes empresas | (categoría enterprise; no verifiqué precio) |
| 13 | **Meta Business Agent** (global, **first-party**) | Agente de IA **nativo de Meta** en WhatsApp/IG/Messenger | PYME → enterprise (autoservicio) | Sí (agente propio de Meta) | **Gratis para empezar** → suscripción/tokens (WhatsApp Business Premium) | "Muéstrate para cada cliente, en cada momento, como si tuvieras un equipo infinito"; agenda, califica leads, conecta Shopify/Zendesk | [about.fb.com/…/meta-business-agent](https://about.fb.com/news/2026/06/meta-business-agent/) · [techcrunch](https://techcrunch.com/2026/06/03/metas-ai-agent-for-whatsapp-business-is-now-available-globally/) |

**Otros mencionados en rankings colombianos** (sin precio público verificado, foco PYME):
Maxi, Aurora Inbox, Smart Go Up (ToGrow, $87–857), Dapta, SoyAgentia, Buzwave.ai, Automaxia
— [togrowagencia.com](https://togrowagencia.com/agentes-de-venta-con-ia-colombia/) · [marketingdigital.blog](https://marketingdigital.blog/mejores-agentes-de-ia-para-whatsapp-en-colombia/).

---

## 2. Mapa de posicionamiento

Dos ejes que importan para la pauta: **público** (DIY/PYME ↔ enterprise) y
**centralidad de la IA** (CRM/multiagente operado por humanos ↔ agente IA que vende solo).

```
                        IA = AGENTE QUE VENDE/ATIENDE SOLO
                                      ▲
                                      │
            Keybe/Biky ●        ● SoltyAI (objetivo)        ● Yalo (enterprise)
         "vendedor IA"     done-for-you + verticales              "commerce
         (cotiza)          pre-armados + IA incluida               engine"
                                      │              ● Aivo / Auronix (enterprise)
            Cliengo ●  Chately ●      │      ● Treble (BSP, mkt WA)
            ($45)      ($39)          │
   ManyChat ●                        │
   Landbot ●     ── PYME ────────────┼──────────────── ENTERPRISE ──►
   (DIY no-code) Whaticket ●  B2Chat ●   Leadsales ●
                  ($49)       (CO)        ($97, CRM-first)
                                      │
                                      ▼
              IA = HERRAMIENTA / BANDEJA OPERADA POR HUMANOS (CRM, multiagente)
```

**Dónde cae SoltyAI:** cuadrante superior-PYME — **agente de IA que atiende, vende y agenda solo +
done-for-you (lo montamos y adaptamos nosotros) + verticales ya entrenados por industria**, a precio
PYME en pesos: **Esencial $290.000 · Pro $490.000 · Premium $790.000 al mes, más setup $400.000**
(antes de IVA), donde el setup **ES** la adaptación. Es el único que combina **seis**
cosas a la vez:

1. **Done-for-you** — no es una herramienta que el dueño configura; nosotros la **adaptamos a su negocio en la instalación** (su catálogo, sus precios, su forma de atender). Este es el moat.
2. **Vertical pre-entrenado** — el bot ya viene listo para el rubro (citas, comercio/domicilios, inmobiliaria, integraciones).
3. **IA incluida sin sorpresa de tokens** — la suscripción incluye el uso de IA dentro de un tope; el **modo sin IA** (0 tokens) controla costo. Competidores cobran tokens aparte.
4. **Adaptación en la instalación con datos reales** — "te lo dejamos funcionando con tus datos reales para que lo pruebes de verdad".
5. **Soporte local en Colombia** (Bucaramanga), precio claro por producto.
6. **3 opciones de entrada** — prueba el bot ahora (demo viva) / agenda una demo / escríbenos por WhatsApp. El prospecto elige cómo entrar; baja la fricción.

**Lecturas clave del mapa:**
- El **clúster denso PYME-LATAM** (Whaticket, B2Chat, Cliengo, Chately, Leadsales) se posiciona
  casi todo como **"CRM / multiagente / bandeja para tu equipo"**: la IA es ayudante, el humano
  atiende, y **el cliente arma su propia configuración**. Suenan parecidos entre sí ("centraliza
  WhatsApp", "atiende 24/7", "automatiza ventas").
- **Keybe/Biky** es el competidor colombiano más cercano en *mensaje* ("tu bot no vende, Biky sí")
  pero **no publica precio** (cotización/sales-led), no promociona verticales pre-armados ni la
  promesa done-for-you de adaptarlo en la instalación.
- **Enterprise** (Yalo, Aivo, Auronix, Treble) juega en otra liga de público y presupuesto;
  no compiten por el dueño de PYME que busca recuperar tiempo y orden ya.
- **DIY no-code** (ManyChat, Landbot) es barato pero **te toca construir el flujo tú mismo**: el
  opuesto exacto del moat de SoltyAI (done-for-you). La IA es opcional y de pago aparte.

---

## 2-bis · Meta Business Agent — el competidor que más pesa (first-party)

> Sección propia desde el 2026-08-13. Estaba tratado como una nota al pie del mapa, y no es un
> competidor más: es **el dueño de la plataforma vendiendo nuestro producto, gratis, adentro**.
> Se numera "2-bis" a propósito, para no correr los §3–§6 que otros docs ya citan por número.
> Fuente: `../business/estrategia/11-whatsapp-2026-ia-y-tech-provider.md`.

**Los hechos, sin adornos:**

| Dato | Valor |
|---|---|
| Lanzamiento | **global el 3-jun-2026**, en WhatsApp, Instagram y Messenger |
| Precio de entrada | **gratis para arrancar** |
| Puesta en marcha | **minutos**, autoservicio, sin nadie del otro lado |
| Qué hace (textual) | responder preguntas · recomendar productos · **agendar citas** · **calificar leads** · escalar a un humano |
| Adopción | **más de 1 millón de negocios** |
| Cobro | desde el **1-ago-2026 cobra por tokens: US$2 por millón** |

### Por qué NO se compite por precio

Contra gratis no se compite por precio: el piso lo puso Meta en cero y el techo lo pone su propio
costo de tokens, que es marginal. Bajar el nuestro para acercarnos sólo destruye el margen que
paga el trabajo humano del setup, que es justo lo que Meta no hace. **El precio deja de ser el
argumento y pasa a ser una consecuencia** de lo que se entrega.

### Por qué NO se compite por "existencia del bot"

El ángulo de categoría —"te armo un chatbot de IA para WhatsApp"— **está muerto en 2026**. Es lo que
Meta regala en la misma pantalla donde íbamos a pautar, y además lo dicen Wati, ManyChat, Zenvia,
Atendio y veinte agencias locales. Anunciar la existencia del bot es pagarle a Meta por una
audiencia que Meta convierte a su propio producto. Lo que sigue vivo es **el resultado, en un
vertical y en una ciudad**.

### El moat: las cinco cosas que Meta no hace

1. **Configurarlo con los datos del cliente.** Meta entrega la herramienta; nadie se la deja andando
   con sus 29 inmuebles, sus tarifas por zona y su forma de cotizar. Eso es el setup, y es el moat.
2. **Vertical ya entrenado.** El flujo de una inmobiliaria, de un operador de domicilios, de una
   barbería. No un agente genérico al que hay que enseñarle el negocio.
3. **Modo sin IA, 0 tokens.** Cuando el flujo es fijo no se paga inferencia: protege el margen del
   cliente y el nuestro. Meta cobra por token siempre.
4. **Español de Colombia y una persona que contesta.** Soporte local, no un centro de ayuda.
5. **Empresa formal que factura electrónicamente** (DIAN, resp. 52, desde el 26-jul-2026): el cliente
   descuenta el gasto. Ninguna plataforma extranjera de este mapa se lo da.

**Encuadre de venta:** *"Meta te da el motor genérico y te cobra por token; nosotros te lo dejamos
funcionando con TU negocio, en tu rubro, con costo de IA bajo control y con factura."*

**Y el lado bueno, que es real:** Meta **educa al mercado** con su propio presupuesto. Baja el costo
de evangelización y deja la conversación donde nos conviene: competimos en *implementación y
adaptación*, no en *existencia de la categoría*.

> ⚠️ **Consecuencia de plataforma, no sólo de mensaje:** la política de IA de WhatsApp (rige desde el
> 15-ene-2026) **prohíbe** los chatbots de propósito general. Posicionarnos como "un asistente que
> contesta lo que sea" no cuesta un anuncio rechazado: cuesta el canal. Se vende **bot de negocio
> estructurado** por vertical.

---

## 3. Ángulos de mensaje que YA usan los competidores (para NO sonar igual)

Estos mensajes están **saturados** en el mercado PYME-LATAM. Si SoltyAI los repite, suena a uno más:

| Ángulo saturado | Quién lo usa | Por qué evitarlo |
|---|---|---|
| "Atiende 24/7" (a secas) | Cliengo, Whaticket, B2Chat, casi todos | Genérico; ya es expectativa base, no diferenciador |
| "Centraliza WhatsApp/IG/FB en una bandeja" | B2Chat, Whaticket, Leadsales | Mensaje de **CRM/multiagente**, no de asistente que adaptamos a tu negocio |
| "Automatiza tus ventas / atención" | Whaticket, Cliengo | Vago; todos lo dicen |
| "CRM para WhatsApp" | Leadsales, Chately, B2Chat | Categoría sobrepoblada y comoditizada |
| "Tu bot no vende, el nuestro sí / vendedor de IA" | **Keybe/Biky** | Ya ocupado por un competidor colombiano fuerte; diferenciarse del diferenciador |
| "Sin código, hazlo tú mismo" | ManyChat, Landbot | Atrae al que quiere armarlo solo; SoltyAI es lo contrario (done-for-you) |

**Conclusión:** el espacio de "IA que atiende 24/7" está quemado. SoltyAI gana cambiando el eje de
la conversación: de *"qué hace el bot"* a **"te devolvemos tiempo y ponemos orden — y lo dejamos
adaptado a TU negocio (no te toca configurarlo)"**, más *"pruébalo ahora mismo"*.

---

## 4. Huecos detectados (oportunidades para la pauta)

1. **HUECO PRINCIPAL — done-for-you / "lo adaptamos a tu negocio en la instalación".** El clúster
   PYME vende "una plataforma" genérica que el cliente debe configurar; los no-code te hacen armar
   el flujo. Nadie en PYME-LATAM promete **te lo montamos y adaptamos nosotros** (catálogo, precios,
   forma de atender). Es el moat más fuerte y el que **justifica el setup fee** (el setup ES la
   adaptación, no una barrera).

2. **Verticales pre-entrenados.** SoltyAI vende **soluciones por tipo de negocio ya listas**
   (citas para peluquerías/spas/consultorios, comercio/domicilios, inmobiliaria, integraciones a
   medida). Nadie en el segmento PYME-LATAM pauta "el bot ya entrenado para TU rubro".

3. **Vive el producto en el primer clic.** Ningún competidor PYME convierte el anuncio en una
   **demo conversacional inmediata**. SoltyAI ofrece **3 opciones de entrada** (prueba el bot ahora
   por Telegram / agenda una demo / WhatsApp), y el prospecto elige. La opción "prueba el bot" lleva
   el clic directo a hablar con el producto en vivo — difícil de copiar porque es el embudo, no el copy.

4. **IA incluida sin sorpresa de tokens + modo con/sin IA.** Único en el mercado revisado.
   Whaticket cobra los tokens de OpenAI **aparte** (costo variable opaco); ManyChat suma
   $0.02–0.08 por conversación de WhatsApp. SoltyAI promete **costo controlado**: IA incluida en la
   suscripción dentro de un tope + modo sin IA (0 tokens) para flujos repetitivos.

5. **Precio claro en pesos + español de Colombia + soporte local + empresa formal.** Treble, Keybe,
   Yalo, Aivo, Auronix **no publican precio** (sales-led, fricción). SoltyAI gana con transparencia
   (**Esencial $290.000 · Pro $490.000 · Premium $790.000 al mes + setup $400.000**, antes de IVA) y
   ancla colombiana real (Bucaramanga), contra plataformas que facturan en USD con soporte distante.
   Y suma un argumento que ninguna de ellas puede dar acá: **factura electrónica DIAN**, así que el
   cliente descuenta el gasto.

6. **Cierre dentro de la conversación.** El embudo de SoltyAI agenda/cierra **dentro del chat ya
   caliente** o con la oferta "te lo dejamos configurado con tus datos reales", sin saltar a un
   calendario frío. Reduce fricción que todos los demás tienen.

---

## 5. Ángulos diferenciadores recomendados para los anuncios (3 creatividades, ronda 1)

> Para 3 creatividades, un mensaje por anuncio. Cada uno ataca un hueco distinto y evita el copy
> saturado del §3. La promesa líder (tiempo/orden/productividad + done-for-you) es la misma en los
> tres; cambia el ángulo de entrada.
>
> ⚠️ **Cuándo se usan (actualizado 2026-08-13):** estos ángulos son del **carril de Meta, que quedó
> relegado** y entra con **$1.200.000 COP** cuando haga falta volumen, no antes
> (`15-CANALES-Y-SECUENCIA.md`). Sirven igual hoy para el orgánico y el outbound, que llevan el mismo
> mensaje líder. El carril que sí se abre primero —Google Search y el Business Profile— lleva **otro**
> mensaje líder: el servicio a la medida, no el bot.

### Ángulo A — "Te lo dejamos hecho a tu medida" *(done-for-you, el moat)*
- **Mensaje:** *"No te entregamos una herramienta para que la configures tú. La adaptamos a tu
  negocio: tu catálogo, tus precios, tu forma de atender. Te devolvemos tiempo y pones orden."*
  CTA → prueba el bot / agenda demo.
- **Por qué gana:** Ataca el moat real. El clúster PYME (Whaticket/B2Chat/Cliengo) vende plataforma
  genérica que toca configurar; los no-code te hacen armar el flujo. SoltyAI entrega **adaptado y
  listo** — nadie pauta esto en el segmento. **Recomendado como creatividad principal.**

### Ángulo B — "El bot que ya sabe de TU negocio" *(verticales pre-entrenados)*
- **Mensaje:** *"¿Peluquería, tienda, inmobiliaria o domicilios? Tu bot ya viene entrenado para tu
  rubro y agendado/ordenado a tu forma de trabajar. No empiezas de cero."* (variantes por vertical).
- **Por qué gana:** Permite **segmentación por vertical** en Meta (audiencias distintas por rubro) y
  refuerza el moat del rubro listo. Nadie en PYME-LATAM lo pauta. Es además la única forma en que
  Meta vale la pena cuando entre: una vertical y una ciudad, nunca el mensaje de categoría.

### Ángulo C — "Recupera tu tiempo, pon orden" *(promesa central, dolor del dueño)*
- **Mensaje:** *"Tu equipo deja de repetir las mismas preguntas. Tus citas y pedidos quedan
  organizados solos, 24/7. Más tiempo, más orden, más ventas."* CTA → prueba el bot / agenda.
- **Por qué gana:** Ataca el dolor real del dueño (tiempo perdido, caos) en vez de "features".
  El mercado promete "atiende 24/7" a secas; SoltyAI lo conecta con **devolver tiempo y poner orden**.

### Ángulos de reserva (rotación si A–C cansan, o munición para el orgánico y el outbound):
- **D — "Costo bajo control, IA incluida":** *"IA cuando vale la pena, sin IA cuando no. El uso de
  IA va incluido — sin sorpresa de tokens."* Contra el costo variable opaco de tokens OpenAI
  (Whaticket) y $/conv (ManyChat). Modo con/sin IA es **único en el mercado revisado**.
- **E — "Precio claro, soporte en colombiano":** *"Desde $290.000 al mes, sin cotizaciones eternas.
  Hecho, soportado y facturado en Colombia."* Contra los sales-led sin precio público (Keybe,
  Treble, Yalo) y contra las plataformas que cobran en dólares sin factura que el cliente descuente.
- **F — "Pruébalo con tus datos reales":** *"Te lo dejamos funcionando con TU negocio para que lo
  pruebes de verdad antes de pagar la mensualidad."* La oferta de conversión tester→cliente como ángulo.
- **G — "Garantía con plazo" (agregado 2026-07-25; tiers definidos 2026-07-26):** el mensaje público
  es *"Arrancas pagando la mitad del setup. La otra mitad solo cuando tu bot esté atendiendo"*, con
  plazo de **7 días calendario**. Contra las agencias de desarrollo a medida que cotizan a 40–90 días
  con riesgo de entrega; y contra los sales-led de ciclo largo (Keybe, Treble, Yalo). **Nosotros sí
  lo podemos cumplir**: el producto ya está construido y la implementación es de días. Origen:
  anuncio de SyroxTech en el swipe file (`14-SWIPE-FILE.md`, 2026-07-25) — que se contradice a sí
  mismo con el plazo y así quema su propia garantía.
  - **Qué garantiza el mercado, y por qué acá es al revés:** Cliengo, Whaticket y B2Chat dan prueba
    gratis de 7–14 días y ninguna garantía de devolución; los que sí garantizan (Richpanel,
    ContentBot, Agent Builder) devuelven **la suscripción** y **excluyen expresamente la
    implementación y los servicios profesionales**. Para ellos tiene sentido: su producto es
    self-service, sin trabajo humano y con costo marginal casi cero. Acá es al contrario, la
    adaptación ES el trabajo humano y la suscripción es infra barata, así que **garantizar la
    implementación es lo único que nadie del clúster ofrece y a nosotros nos sale barato**.
  - **Escalonada por plan** (definición completa y auditable en `data/canon.json`, bloque
    `garantiaImplementacion`): Esencial, no se cobra la mitad restante · Pro, además se devuelve lo
    ya pagado y la implementación queda en cero · Premium, además el primer mes no se cobra.
    **La devolución completa NO se anuncia**: es la carta que se juega en la objeción, cerrando Pro
    o Premium, y de paso empuja al plan de arriba.
  - **Condiciones que la hacen cumplible:** "atendiendo" = bot en el canal del cliente, con su
    catálogo o flujo cargado y al menos una conversación real completada · el reloj arranca cuando
    el cliente entrega completa la información del onboarding y **se pausa** si falta algo · reclamo
    dentro de los 15 días siguientes · cubre solo la implementación estándar del vertical, no
    integraciones a la medida.
  - **Por qué el anticipo nunca baja a cero:** es el filtro que separa al que va en serio del
    curioso. Lo que escala entre planes no es cuánto pagan por adelantado, es cuánto recuperan si
    incumplimos.

---

## 6. Notas de método y limitaciones (honestidad)

- **Precios verificados con URL:** Cliengo ($45/$119/$259), Whaticket ($49/$109), Leadsales
  ($97/$133), Chately ($39/$89/$159), ManyChat (Free→$29 Pro), Landbot (€40→€200), Smart Go Up
  vía ToGrow ($87–857). **Sin precio público:** Keybe/Biky, Treble, Yalo, Aivo, Auronix, B2Chat
  (rango ~USD 50–300 reportado por terceros, no por su tarifa oficial en USD).
- **Spend publicitario NO estimado.** Meta Ad Library solo expone montos para anuncios
  políticos/sociales; estos competidores comerciales no caen ahí. Cualquier cifra de inversión
  sería inventada → la omito a propósito.
- **No accedí a las creatividades vivas en Meta Ad Library** de cada competidor en esta ronda
  (los ángulos del §3 provienen de su copy de sitio/pricing y rankings del sector, que reflejan
  bien su posicionamiento de marketing). Si se quiere afinar las creatividades exactas que cada
  rival corre hoy, el siguiente paso es revisar la Meta Ad Library por anunciante — recomendado
  antes de producir los anuncios finales.
- **IA "sí/no":** marqué "Sí" cuando el producto promociona IA generativa/conversacional como
  capacidad central; "Parcial" cuando la IA existe pero el centro del mensaje es CRM/multiagente
  operado por humanos.
- **Pricing de SoltyAI: en COP, y la fuente es `data/canon.json`** (decisión D1), no este documento.
  Vigente: **Esencial $290.000 · Pro $490.000 · Premium $790.000 al mes, más setup $400.000**, todo
  antes de IVA, con excedente de $50.000 por cada 100 conversaciones de más.
  **Prohibido** citar el modelo en dólares —los planes Starter/Growth/Pro y el catálogo por producto
  (Agenda $65/$250, Pedidos $80/$280, Inmobiliario $249/$600 y $650/$1.500)—: quedó **superado** por
  el canon COP. Ojo: **"Pro" a secas sí es válido**, es el plan de $490.000.
- **Asimetría de la tabla, dicha en voz alta:** los precios de los competidores siguen en **USD**
  porque así los publican ellos y así se verificaron con URL. No se convirtieron a pesos: una TRM
  supuesta convertiría un dato verificado en una estimación. Para comparar de a de veras, el
  `canon.json → trm` trae el factor y su estado (**supuesto**).

---

## Fuentes consultadas

- Cliengo pricing: https://www.cliengo.com/pricing
- Whaticket precios: https://whaticket.com/precios/
- Leadsales pricing: https://leadsales.io/en/pricing/
- Chately (comparativa CRM WhatsApp precio): https://chately.co/blog/crm-whatsapp-precio
- B2Chat precios: https://www.b2chat.io/precios/
- Keybe / Biky: https://keybe.ai/ · https://biky.ai/
- Treble.ai: https://treble.ai/en/
- Yalo: https://www.yalo.ai/ · https://en.wikipedia.org/wiki/Yalo_(company)
- ManyChat pricing: https://manychat.com/pricing · https://setsmart.io/blog/manychat-pricing
- Landbot pricing: https://www.voiceflow.com/blog/landbot
- Ranking agentes IA Colombia: https://togrowagencia.com/agentes-de-venta-con-ia-colombia/
- Mejores agentes IA WhatsApp Colombia: https://marketingdigital.blog/mejores-agentes-de-ia-para-whatsapp-en-colombia/
- Guía precios chatbot WhatsApp Colombia 2026: https://ventivaia.com/cuanto-cuesta-chatbot-whatsapp-colombia/
