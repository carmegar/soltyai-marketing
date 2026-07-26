# 05 · PRICING — Precios por producto + qué cubre + posicionamiento

> Fuente canónica: `01-SOURCE-BRIEF.md` §"Pricing real — POR PRODUCTO". Este doc lo aterriza para
> ventas y para el cálculo de unit economics de `06-BUDGET-PLAN.md`.
> **Regla de honestidad:** todo número estimado va etiquetado "(estimado)"; los precios son los
> publicados en el producto (seed del back-office + landing), salvo el tier marcado **PROPUESTO**.
> **PROHIBIDO** mencionar los planes viejos Starter / Growth / Pro — están superados.

---

## 1. La tabla — precio POR PRODUCTO (no planes genéricos)

SoltyAI no se vende como "un plan". Se vende como **4 productos** (verticales), cada uno con su
suscripción mensual y su setup único. El cliente elige según su negocio; quien toma 2+ recibe el
bundle. Mismo mensaje líder, demo y precio adaptados al rubro.

| Producto | Para quién | Suscripción / mes | Setup único | Qué resuelve |
|---|---|---|---|---|
| **SoltyAI Agenda** (Citas) | peluquerías, barberías, spa, estética, uñas, consultorios | **$65 USD** | **$250 USD** | Agenda, cancela y reagenda solo; anti-doble-reserva; recordatorios automáticos |
| **SoltyAI Pedidos** (Domicilios y comercio) | restaurantes de barrio, tiendas, domicilios | **$80 USD** | **$280 USD** | Catálogo + carrito + cotización de domicilio + contraentrega/pago en línea. **Probado en piloto real** |
| **SoltyAI Inmobiliario — entry** *(PROPUESTO, validar)* | inmobiliarias PYME de 3–15 agentes | **$249 USD** *(propuesto)* | **$600 USD** *(propuesto)* | RAG de inventario + pre-calificación de leads + agenda de visitas. **Tier de entrada recomendado** |
| **SoltyAI Inmobiliario — full** | inventarios grandes / +15 agentes | **$650 USD** | **$1.500 USD** | El mismo de arriba, reposicionado como tier alto para operaciones grandes |
| **Integraciones a medida** | empresas con ERP / sistema legacy | **desde $180 USD** | **desde $3.500 USD** | Conexión a ERP/legacy, FSM conversacional, flujos a la medida |

> ⚠️ **El tier "Inmobiliario entry" ($249/$600) es una propuesta a validar en la ronda semilla.**
> El producto hoy (seed/landing) solo tiene el tier **full** ($650/$1.500). En frío, para PYME pequeña,
> cerrar con el entry propuesto es más realista que el full — pero preséntalo SIEMPRE como propuesto,
> nunca como precio ya vigente. Detalle de uso en outbound: `09-OUTBOUND.md`.

---

## 2. Qué cubre cada cosa — la división suscripción / setup

La clave del modelo (y lo que hay que saber explicar en una llamada o un anuncio): **dos cobros con
propósitos distintos.**

### Suscripción mensual (recurrente) = acceso + IA incluida + soporte

Incluye:

- **Acceso a la plataforma** y hosting (infra compartida, sin costo de servidor para el cliente).
- **Uso de IA dentro de un tope por plan** — y aquí está el **diferenciador**: la IA va **incluida**,
  **no se cobran los tokens aparte**. El cliente paga una mensualidad fija y no le llega una factura
  sorpresa por conversación. Los competidores de entrada (Chately, Cliengo, Whaticket) cobran la IA
  **por fuera** o limitan el plan barato y te empujan a comprar tokens. Nosotros no.
- **Modo sin IA** (menú determinista, 0 tokens): para flujos repetitivos el bot responde sin tocar la
  IA → costo controlado para el cliente y **palanca de margen** para nosotros. Es lo que hace sostenible
  ofrecer la IA incluida.
- **Mantenimiento, actualizaciones y soporte** local (en español de Colombia).
- El **volumen de conversaciones del plan**.

### Setup único (pago único) = la adaptación done-for-you

> **El setup NO es una barrera. ES el valor.** Es el trabajo de **montar el bot con TUS datos**:
> tu catálogo, tus precios, tu agenda, tu forma de atender. El cliente no recibe una herramienta
> para que la configure él (como los self-serve del mercado); recibe el bot **ya funcionando para su
> negocio**. Eso es el moat y eso justifica el cobro.

Cubre:

- Onboarding guiado y conexión del canal (Telegram hoy; WhatsApp/web **próximamente** — no prometer
  WhatsApp API, canal honesto, ver `01-SOURCE-BRIEF.md` §Canales).
- **Carga del RAG / datos del negocio:** catálogo, precios, FAQ, inventario, servicios.
- **Configuración del vertical** y ajuste del tono/flujos a la forma de trabajar del cliente.
- **Pruebas con el cliente** antes de salir en vivo.

Además, el setup financia el **CAC** (costo de adquirir al cliente): paga el trabajo de adquisición
el mismo mes del cierre. Cómo entra esto en la economía de la campaña: `06-BUDGET-PLAN.md`.

---

## 3. Bundle y condiciones comerciales

- **Bundle:** **−10% desde el 2º producto** del mismo cliente (un negocio que toma Agenda + Pedidos,
  por ejemplo). Fuente: `business/estrategia/07-pricing.md`.
- **Sin permanencia.** Cobro mensual, se cancela cuando el cliente quiera.
- **Datos exportables** (Ley 1581 — habeas data Colombia).
- **Setup no reembolsable** (es trabajo de implementación ya realizado).
- **Modo sin IA disponible** para clientes registrados que quieran bajar aún más su costo en flujos
  repetitivos.

---

## 4. Posicionamiento vs. competencia — premium justificado

| Competidor (entrada PYME LATAM) | Precio aprox. / mes | Modelo |
|---|---|---|
| **Chately** | ~$39 USD | Self-serve · **tokens de IA cobrados aparte** · lo montas tú |
| **Cliengo** | ~$45 USD | Self-serve · IA limitada / aparte · lo montas tú |
| **Whaticket** | ~$49 USD | Self-serve · IA con costo variable · lo montas tú |
| **SoltyAI Agenda** | **$65 USD** | **Done-for-you · IA incluida sin sorpresa de tokens · soporte local** |
| **SoltyAI Pedidos** | **$80 USD** | **Done-for-you · vertical ya entrenado · probado en piloto real** |

La PYME colombiana paga cómodo **$40–100 USD/mes todo incluido** (ver `03-competitor-analysis.md`).
SoltyAI entra en ese rango, **arriba de los más baratos a propósito**. El premium no es por capricho:
es por lo que **nadie en PYME-LATAM combina** —

1. **Done-for-you:** te lo montamos y lo adaptamos a tu negocio (no "móntalo tú").
2. **Vertical ya entrenado:** el bot llega sabiendo de tu rubro, no empiezas de cero.
3. **IA incluida sin sorpresa de tokens:** mensualidad fija, sin factura variable opaca.
4. **Soporte local** en español de Colombia y adaptación en la instalación.

**Cómo venderlo:** no compitas por ser el más barato. Compite por **el bot funcionando para SU negocio
desde el primer día**, sin que el cliente tenga que armar nada y sin sustos de costo. La demo en vivo
(`07-CAMPAIGN-BRIEF.md`) hace la mitad del trabajo: el prospecto **vive el producto** antes de pagar.

---

## 5. Márgenes (para `06-BUDGET-PLAN.md`)

- **Costo de servir con IA** (Claude Haiku 4.5, tarifa verificada): **≈ $0.02–0.05 por conversación**
  con caché de prompt. 500 conv/mes ≈ $15–25 (estimado); 1.000 conv/mes ≈ $30–50 (estimado). El modo
  sin IA baja esto a ~0.
- **Infra:** VPS compartido ~€20/mes entre todos los tenants → **~$1–2 por cliente a escala** (estimado).
- **Conclusión:** márgenes **65–85%** en todos los planes. El costo NO es la restricción; el precio se
  fija por **valor/mercado**, no cost-plus. La IA incluida es viable porque el modo sin IA y el caché
  mantienen el costo por conversación bajísimo.

---

## 6. Pendiente de validar (ronda semilla)

- **Tier Inmobiliario entry ($249/$600):** confirmarlo o ajustarlo con la disposición a pagar real de
  inmobiliarias PYME (la lista outbound de 906 da el primer termómetro — `09-OUTBOUND.md`).
- **Mezcla de cierres por producto** (afecta el CAC máximo tolerable — `06-BUDGET-PLAN.md`).
- Si el setup frena el cierre en algún rubro, probar **setup más bajo + suscripción ligeramente mayor**
  (sin tocar el principio: el setup ES la adaptación, no se regala).
