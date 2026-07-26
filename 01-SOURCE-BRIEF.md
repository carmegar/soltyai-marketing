# 01 · SOURCE-BRIEF — Hechos canónicos de SoltyAI (NO inventar fuera de aquí)

> **Fuente única de verdad** del producto, el precio y el mensaje para TODO el paquete de marketing.
> Si un dato no está aquí ni en los archivos citados, decláralo como supuesto explícito
> ("**Supuesto:** …"), no lo presentes como hecho. Nada de métricas fabricadas.
>
> Reescrito 2026-06-20 para reconciliar el paquete con el producto y el pricing reales
> (la versión anterior usaba planes Starter/Growth/Pro y embudo solo-Telegram, ya superados).

---

## Empresa / producto

- **Marca:** SoltyAI (SIEMPRE con "AI"). Empresa SoltyAI SAS, en constitución legal.
- **Sede:** Bucaramanga, Colombia. Geo ancla de la ronda: **Colombia**.
- **Qué vende:** plataforma **SaaS multi-tenant de chatbots especializados por industria**
  para WhatsApp, Telegram y web, conectados al catálogo / agenda / CRM del negocio.
  **Done-for-you:** nosotros lo montamos y lo **adaptamos a la forma de trabajar del cliente**.
- **Verticales construidos y vendibles HOY** (4): **Citas, Domicilios/Comercio, Inmobiliaria,
  Integraciones a medida.** (La estrategia de negocio lista más productos a futuro —POS, ERP DIAN,
  Marketing IA—; **NO** se promocionan en esta ronda: aún no existen en el producto.)
- **Canales:** Telegram (vivo hoy), WhatsApp y web (**próximamente** — WhatsApp Business API
  oficial pendiente de validar Meta como Tech Provider; la SAS ya está constituida, solicitud desbloqueada).
- **Modo con y sin IA:** el bot puede operar con IA (Claude Haiku 4.5) o en **modo determinista
  sin IA (0 tokens)** para flujos repetitivos → costo controlado, sin sorpresas de tokens.

## La promesa (mensaje líder ÚNICO — usar en todos los entregables)

- **Promesa central:** *"Te devolvemos tiempo y ponemos orden en tu negocio: un asistente que
  atiende, vende y agenda 24/7 — adaptado a tu forma de trabajar."*
- **Tagline corto:** *"Más tiempo, más orden, más ventas — con un bot hecho a tu medida."*
- **Diferenciador / moat (el corazón del mensaje):** *"No te entregamos una herramienta para que
  la configures tú. La adaptamos a tu negocio en la instalación: tu catálogo, tus precios, tu forma
  de atender."* — Esto a la vez **justifica el setup fee** (el setup ES la adaptación, no una barrera).
- **Tres ejes de valor:** **tiempo** (24/7 sin contratar más gente) · **orden** (todo registrado,
  agendado, sin caos) · **productividad** (tus asesores dejan de repetir lo mismo).
- **NO usar** los ángulos ya quemados del mercado (ver `03-competitor-analysis.md` §3): "atiende
  24/7" a secas, "centraliza WhatsApp", "CRM para WhatsApp", "tu bot no vende el nuestro sí".

## Portafolio: venta en paralelo por necesidad (no un producto único)

Los 4 verticales son **soluciones que el cliente elige según su negocio**, bajo la misma promesa.
Se venden en paralelo; quien toma 2+ recibe el bundle. El mensaje líder es el mismo; el caso de uso
y la demo se adaptan al rubro.

## Pricing real — POR PRODUCTO (USD)

> Fuente: seed del back-office `suite/apps/dashboard/prisma/seed.ts` + landing
> `platform/apps/landing/src/data/plans.ts`. La suscripción **incluye el uso de IA dentro de un tope
> por plan** (sin cobrar tokens aparte — diferenciador vs. competidores que sí los cobran). El **modo
> sin IA** es palanca de margen. El **setup** es el trabajo de adaptación done-for-you (financia el CAC).

| Producto | Para quién | Suscripción | Setup único | Notas |
|---|---|---|---|---|
| **SoltyAI Agenda** (Citas) | peluquerías, barberías, spa, estética, uñas, consultorios | **$65/mes** | **$250** | Agenda/cancela/reagenda autónomo, anti-doble-reserva, recordatorios |
| **SoltyAI Pedidos** (Domicilios y comercio) | restaurantes barrio, tiendas, domicilios | **$80/mes** | **$280** | Catálogo + carrito + cotización domicilio + contraentrega/pago en línea. Probado en piloto real |
| **SoltyAI Inmobiliario** — *entry* | inmobiliarias 3–15 agentes | **$249/mes** *(propuesto, validar)* | **$600** *(propuesto)* | RAG de inventario + pre-calificación + agenda visitas. **Tier de entrada recomendado** para PYME |
| **SoltyAI Inmobiliario** — *full* | inventarios grandes / +15 agentes | **$650/mes** | **$1.500** | El de la landing/seed hoy. Reposicionado como tier alto |
| **Integraciones a medida** | empresas con ERP/legacy | **desde $180/mes** | **desde $3.500** | Conexión a ERP/sistema legacy, FSM conversacional, a medida |

- **Bundle:** **−10% desde el 2º producto** del mismo cliente (fuente `business/estrategia/07-pricing.md`).
- **Sin permanencia**, mensual, datos exportables (Ley 1581). Setup no reembolsable.
- ⚠️ **DECISIÓN ABIERTA marcada:** el tier "Inmobiliario entry" ($249/$600) es una **recomendación a
  validar en la ronda semilla**; el seed/landing hoy solo tienen el tier full ($650/$1.500). Marcar
  siempre como propuesto donde aparezca; no presentarlo como precio ya vigente.
- **PROHIBIDO** usar los planes viejos **Starter $49 / Growth $149 / Pro $399**: están **superados**.

## Costo de servir (para unit economics — `06-BUDGET-PLAN.md`)

- **IA (Claude Haiku 4.5, tarifa verificada):** input $1/MTok, output $5/MTok, caché lectura $0.10/MTok,
  caché escritura $1.25/MTok. **Costo por conversación con IA ≈ $0.02–0.05** (con caché de prompt).
  500 conv/mes ≈ $15–25; 1.000 conv/mes ≈ $30–50. El modo sin IA baja esto a ~0.
- **Infra:** VPS Hetzner CPX32 ~€20/mes **compartido** entre todos los tenants → ~$1–2/cliente a escala.
- **WhatsApp (cuando se active, Colombia):** servicio iniciado por el cliente, **primeras 1.000 conv/mes
  gratis**; marketing ~$0.02/msg, utilidad ~$0.001/msg. Hoy el canal es Telegram = **$0**.
- **Conclusión:** márgenes 65–85% en todos los planes. El costo NO es la restricción; el precio se fija
  por valor/mercado, no cost-plus.

## Mercado (Colombia / LATAM PYME) — ver `03-competitor-analysis.md`

- Entrada: Chately $39, Cliengo $45, Whaticket $49 (self-serve, **tokens IA cobrados aparte**, sin setup).
- Media: Leadsales $97, Chately top $159, B2Chat ~$50–300.
- PYME colombiana paga cómodo **$40–100 USD/mes** todo incluido.
- **Hueco/moat:** done-for-you + vertical ya entrenado + **IA incluida sin sorpresa de tokens** +
  soporte local + adaptación en la instalación. Nadie en PYME-LATAM combina eso. Justifica el premium.

## Oferta de conversión — el prospecto ELIGE cómo entrar (no solo Telegram)

> Decisión nueva (2026-06-20): bajar la fricción dando **opciones**. No todos quieren chatear con un
> bot frío; algunos prefieren agendar o escribir a una persona. Las 3 ya existen en la landing
> (`platform/apps/landing/src/data/site.ts`: `demoUrl`, `calendlyUrl`, `whatsappNumber`, `lead.endpoint`).

1. **Prueba el bot ahora** (CTA primario) — demo viva: **Telegram hoy** (WhatsApp/web próximamente).
   Para el curioso que quiere ver el producto al instante. Es el diferenciador "vive el producto".
2. **Agenda una demo** (CTA secundario) — **formulario / Calendly** para quien prefiere hablar con una
   persona o no quiere chatear con un bot. Captura nombre, negocio, **rubro/vertical**, teléfono → reunión.
3. **Escríbenos por WhatsApp** (terciario) — click-to-chat humano (`wa.me/<número>`) para quien ya vive
   en WhatsApp y quiere atención directa.

**Onboarding tester → cliente (baja la barrera de compra):** tras probar/agendar, ofrecer
**"te lo dejamos configurado con tus datos reales para que lo pruebes de verdad"** (el setup como prueba
de valor) → el prospecto ve SU negocio funcionando antes de pagar la mensualidad. Esto convierte
"testers" en clientes dispuestos a comprar.

## Embudo y estructura de la ronda (filosofía — `04-STRATEGY.md`)

- **Plataforma ronda 1:** **Meta (Facebook + Instagram), una sola.** Google Search = fase 2.
- **Objetivo Meta:** **Tráfico** a un destino (deep-link al bot de Telegram y/o landing puente con las
  3 opciones de arriba) — Meta no tiene objetivo nativo de "mensajes a Telegram".
- **Presupuesto:** **US$400** semilla de validación que debe generar caja para reinvertir.
- **NADA de funnel TOFU/MOFU/BOFU formal en la ronda 1.** Con US$400 y cuenta fría no hay datos ni
  presupuesto para nutrir 3 etapas. **Un solo nivel de conversión**; las 3 creatividades prueban
  **ÁNGULOS/mensajes** (no etapas), y el embudo se comprime en la oferta (probar/agendar/WhatsApp).
- **Funnel SÍ — pero en la reinversión (fase 2) y LEAN, 2 etapas:** **TOFU** frío-amplio (dolor:
  tiempo/orden) + **BOFU** retargeting (prueba por vertical + adaptación + demo). **MOFU** ligero
  (caso del piloto Bucaradomi como prueba social, sub-conjunto del retargeting). Nunca 3 etapas pesadas.
- **Resultado base realista con US$400 y B2B:** **1–4 cierres** (ronda de aprendizaje + primeros
  clientes, no de escala). NO inflar.

## Identidad de marca — ver `02-brand-dna.md` / `brand-profile.json`

- **Colores:** fondo navy `#0A1628`; **teal primary `#0EA5E9`**; acentos `#10B981`/`#22D3EE`/`#67E8F9`;
  texto slate `#CBD5E1`. Nada de fondos blancos.
- **Tipografía:** **Inter** (Variable, self-hosted), una sola familia.
- **Estética:** dark/navy tech, grid sutil, orbes/líneas estilo red neuronal, minimal, mucho espacio
  negativo. NO stock cursi, NO lifestyle de consumo, NO personas genéricas sonriendo a cámara.
- **Tono:** español de Colombia, tuteo, directo, técnico-accesible, orientado a resultados.

## Canal piloto vivo (outbound) — ver `09-OUTBOUND.md`

- Lista **906 inmobiliarias** scrapeadas de Google Maps (`D:\Trabajo\portafolio\landing\outreach\prospectos.csv`).
  Bogotá 599 · Bucaramanga 154 · Medellín 153. Canal: **WhatsApp 1-a-1 manual**. Demo: bot en Telegram.
- Cierre outbound usa el producto **Inmobiliario** (la lista es inmobiliarias). Para PYME pequeña en
  frío, cerrar con el tier **entry propuesto** ($249/$600) es más realista que el full $650/$1.500 —
  marcarlo como propuesto. **NO subir estos teléfonos a Meta** (viola ToS + Ley 1581).

## Archivos del paquete (orden de lectura)

`README` (mapa) · `01-SOURCE-BRIEF` (este) · `02-brand-dna` + `brand-profile.json` ·
`03-competitor-analysis` · `04-STRATEGY` · `05-PRICING` · `06-BUDGET-PLAN` · `07-CAMPAIGN-BRIEF` ·
`08-TRACKING-SETUP` · `09-OUTBOUND` · `10-IMPLEMENTATION-ROADMAP` · `11-PRE-LAUNCH-CHECKLIST` ·
`12-QA-VALIDATION`.

## Archivos fuente del producto (rutas absolutas, si necesitas más detalle)

- Planes/landing: `D:\Trabajo\soltyai\platform\apps\landing\src\data\plans.ts`, `...\useCases.ts`, `...\site.ts`
- Pricing real (seed): `D:\Trabajo\soltyai\suite\apps\dashboard\prisma\seed.ts`
- Política de precios/descuentos: `D:\Trabajo\soltyai\business\estrategia\07-pricing.md`
- Costos IA: `D:\Trabajo\soltyai\platform\packages\core\src\agent\ai-pricing.ts`

## Reglas de calidad para TODOS los entregables

- Español de Colombia, tuteo, claro y concreto. Sin relleno corporativo vacío.
- Cualquier número estimado → etiquétalo "**(estimado)**" y explica el supuesto.
- Respeta límites de caracteres de Meta (verifícalos en tu salida).
- **Canal honesto:** la demo es por Telegram hoy; WhatsApp/web "próximamente". No prometer WhatsApp API.
- **Pricing honesto:** por producto; el tier Inmobiliario entry va marcado "propuesto (validar)".
- Cero menciones a Starter/Growth/Pro. Cero "el embudo es solo Telegram" (hay 3 opciones de entrada).
