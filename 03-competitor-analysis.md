# 03 · Análisis competitivo · SoltyAI (refresco del 2026-09-16)

> ⚠️ **2026-09-15: los planes de bot (Esencial / Pro / Premium, setup y excedente) quedaron como
> referencia interna de cotización, NO se publican;** el bot se cotiza por prospecto y el motor
> contable no se ofrece como producto. En este doc sus cifras aparecen sólo en el **Anexo A**
> (la ronda de junio, archivada), con el sufijo *(retirado el 15-sep-2026)*. Fuente:
> `data/canon.json → _planesRetirados`; qué se dice hoy: `05-PRICING.md` §1.

> **Reestructurado el 2026-09-16.** La versión de junio medía un solo mercado, el del bot por
> suscripción en Meta, y ese es justo el producto que se despublicó el 15-sep. Hoy se venden tres
> líneas (`18-ARQUITECTURA-DE-OFERTA.md`) y cada una tiene competencia distinta, así que el doc se
> parte por frente: **§1 Meta**, **§2 bots**, **§3 estudios e integración DIAN**, **§4 domicilios**,
> **§5 huecos y amenazas**, **§6 método**. El mapa de posicionamiento, los ángulos A–G y la tabla de
> junio no se borran: viven en el **Anexo A** con su fecha, porque otros docs y el canon los citan
> (`01` §Mercado, `02`, `07`, `14`, `canon.json → garantiaImplementacion._fuente`). Las citas
> «03 §3», «03 §5 ángulo G» y «03 §6» de esos docs se leen ahora como **A.3, A.5 y A.6**.
>
> **Honestidad de datos, igual que en junio:** todo dato de tercero lleva URL y **fecha de consulta
> (16-sep-2026)**; lo que no se pudo abrir o confirmar está en §6. Los precios de terceros se citan
> en la moneda en que ellos los publican: convertir con una TRM supuesta convierte un dato
> verificado en una estimación. No hay cifras de inversión publicitaria: Meta Ad Library no las
> expone para anunciantes comerciales y Google Ads Transparency no se consultó por fetch.
> Los informes de la sesión están en la bitácora (`B-competencia.md`, 16-sep-2026).

---

## 1. Meta: los hechos de septiembre de 2026

Meta sigue siendo el competidor que más pesa: es el dueño de la plataforma vendiendo, adentro de
WhatsApp, la capa de conversación que nosotros vendíamos suelta. Lo que cambió desde el
`2-bis` de agosto (hoy Anexo A.2-bis):

| Hecho | Qué es | Fuente (consultada el 16-sep-2026) |
|---|---|---|
| **Meta One con tiers de negocio (15-sep-2026)** | Suscripción con acceso al Business Agent: Essential US$14,99 · Advanced US$49,99 · Expert US$149 · Max US$499 al mes | Engadget https://www.engadget.com/2258403/meta-adds-new-subscription-tiers-for-businesses-creators-and-ai-power-users/ · Android Authority https://www.androidauthority.com/meta-one-subscription-plans-3711755/ |
| **La IA cobra por token desde el 1-ago-2026 (US$2 por millón)** | Un cálculo colombiano publicado da ~COP $117 a $184 por mensaje típico | Ingenieros de Marketing (9-jul-2026) https://ingenierosdemarketing.com.co/la-nueva-plataforma-de-agentes-de-ia-de-meta-en-whatsapp-precios-y-calculo-en-colombia/ |
| **El agente de pymes sigue sin leer CRM, ERP ni inventario** | La versión Platform (enterprise) sí integra Shopify y Zendesk; la de pymes no | Wati https://www.wati.io/en/blog/meta-business-agent/ |
| **1-oct-2026: WhatsApp cobra los mensajes de servicio** | Las respuestas libres dentro de la ventana de 24 h y los templates de utilidad dentro de la ventana pasan a cobrarse por mensaje; tarifas por país publicadas el 1-sep | Zendesk https://support.zendesk.com/hc/en-us/articles/11113277351322 · Wati https://www.wati.io/en/blog/whatsapp-service-message-pricing/ · YCloud https://www.ycloud.com/blog/whatsapp-api-message-pricing-update-effective-october-1-2026 |
| **MCP server de WhatsApp Business (15-sep-2026)** | Un agente de código (Claude, Cursor, Codex) crea la cuenta, verifica el número, arma plantillas y prueba webhooks | TechCrunch https://techcrunch.com/2026/09/15/meta-now-lets-ai-agents-handle-the-boring-parts-of-whatsapp-business-setup/ |

**Lo que estos cinco hechos significan para nosotros:**

1. **Meta One es el modelo «bot por suscripción» vendido por el dueño del canal, con lista de precios.**
   Es exactamente lo que despublicamos el 15-sep. La decisión queda confirmada desde afuera: el bot
   no se vende suelto ni con precio de lista, y en Meta el titular es el vertical (§5, amenaza 1).
2. **El costo de operar un bot sube para el cliente el 1-oct.** Cada respuesta del bot va a costar
   plata al cliente, además de la IA. Toda cotización L2 tiene que decir que el consumo de WhatsApp
   lo paga el cliente a Meta; si no, la mensualidad se come el margen (`05-PRICING.md` §1).
3. **El registro del WABA se vuelve commodity.** Con el MCP server cualquier agencia hace en minutos
   la «fontanería» que hoy hacemos por el camino asistido (`tools/scripts/registrar-waba.mjs`). Deja
   de ser trabajo cobrable. Lo que no comoditiza: conectar el bot a la operación real del cliente.
4. **El reloj de `business/estrategia/11 §5.5` no cambió:** el agente de pymes sigue sin tocar
   sistemas del cliente. El foso «no se conecta a tus sistemas» sigue siendo prestado; el de lo
   colombiano (DIAN, retención, RST) sigue siendo propio.

> ⚠️ La política de IA de WhatsApp (rige desde el 15-ene-2026) sigue prohibiendo los chatbots de
> propósito general. Lo que se vende es un **bot de negocio estructurado** por vertical; romper esto
> no cuesta un anuncio, cuesta el canal.

---

## 2. Frente a · Bots y agentes de WhatsApp para pymes en Colombia (compite con L2)

| Competidor | Posicionamiento | Precio público (consultado el 16-sep-2026) | Ángulo | Dónde flaquea |
|---|---|---|---|---|
| **Meta Business Agent + Meta One** (first-party) | Agente nativo en WhatsApp, Instagram y Messenger, autoservicio | Tokens US$2 por millón desde el 1-ago; tiers Essential US$14,99 a Max US$499 al mes (§1) | «Como si tuvieras un equipo infinito»; educa el mercado | Sin CRM, ERP ni inventario en pymes; no inicia conversaciones; sin operación ni Colombia (DIAN, retención) |
| **Keybe / Biky** (Colombia) | «AI-Powered Sales Suite», vendedor IA; dice 400+ empresas en 9 países · https://keybe.ai/ | No publica (demo) | Automotriz, retail, inmobiliaria; integra Wasi, Shopify, HubSpot | Sales-led, sin precio; segmento medio, no barrio |
| **B2Chat** (Colombia) | Multiagente multicanal LATAM · https://www.b2chat.io/precios/ | Básico US$33 sin WhatsApp · US$105 con WhatsApp · Premium US$187; IA como add-on US$80 a 86; usuario extra US$24 a 29 | «Precio transparente por uso» | La IA es extra y en USD; es bandeja para humanos, no operación |
| **Whaticket** (LATAM) | CRM multiagente · https://whaticket.com/precios/ | US$49 al mes, mínimo 3 usuarios; la IA usa tokens de OpenAI **aparte**; campañas US$25 por 1.000 mensajes | «Planes personalizados desde US$49» | Costo de IA opaco; lo arma el cliente |
| **Cliengo** (Argentina) | Chatbot web y WhatsApp con IA Copilot · https://www.cliengo.com/pricing | US$45 / 119 / 259; prueba de 14 días | «Agentes IA incluidos» | Sin verticales colombianas; sin operación |
| **Treble.ai** (Colombia) | BSP oficial, WhatsApp marketing, HubSpot y Salesforce | Terceros reportan «desde ~US$399 al mes» e implementación de 6 a 12 semanas (Runia https://runia.ar/alternativas-a-treble-2026); **no verificado en su sitio** | Enterprise | Fuera del segmento pyme |
| **Ventiva** (Cali) · **Dinolabs** (Bogotá) | Agencias «agente IA implementado por nosotros» | Ventiva: setup $420.000 a $1.400.000 más $390.000 / $690.000 / $1.350.000 al mes (https://ventivaia.com/cuanto-cuesta-chatbot-whatsapp-colombia/). Dinolabs: implementación $1,5 a 8 millones más $1,3 a 3,5 millones al mes (https://www.dinolabs.dev/blog/cuanto-cuesta-agente-ia-colombia) | Done-for-you, ROI en 2 a 4 meses «por reemplazo de proceso manual», «precio real en pesos» | Ventiva promete «ROI +500 a 900 % el primer mes» sin fuente; bot suelto, sin operación ni DIAN |

**Lectura del frente:** el clúster de plataformas (B2Chat, Whaticket, Cliengo) sigue vendiendo
bandeja y CRM en USD con la IA como extra, igual que en junio. **Lo nuevo son las agencias
colombianas con precio en pesos que reclaman el done-for-you y anclan contra el costo de un proceso
manual.** El hueco principal de junio (Anexo A.4, punto 1) **ya está ocupado**, y el ancla «contra un
sueldo» ya la usa Dinolabs. Lo que ninguno de ellos tiene sigue siendo lo de §5.

---

## 3. Frente b · Estudios de desarrollo a la medida e integración DIAN/contable (compite con L3)

| Competidor | Posicionamiento | Precio público (consultado el 16-sep-2026) | Ángulo | Dónde flaquea |
|---|---|---|---|---|
| **Kondory** (Bucaramanga) · https://kondory.com/ | «Empresa de software, ERP y CRM con IA»; también chatbots IA y logística de última milla; dice «+150 proyectos» | No publica | «Respuesta en menos de 24 h», propuesta personalizada | Generalista de 11 líneas; **cero mención a DIAN o contabilidad**; prueba social sin fuente |
| **ToGrow** (Medellín) · https://togrowagencia.com/software-a-medida-costo-colombia/ | Software, marketing e IA; «inversión estratégica». Encabeza los listados «mejores de Bucaramanga» que ella misma publica | Rangos en USD: MVP 3 a 8 mil · intermedio 8 a 25 mil · avanzado 25 a 80 mil · con IA 20 a 100 mil o más | SEO de listados; «transformación digital» | Sin DIAN; el listado local es autopromoción; sin ciudad real |
| **Staff Tecnológico · Sistemas VIP · VICA** (Bucaramanga, vía https://togrowagencia.com/empresas-de-software-a-medida-en-bucaramanga/) | «Software personalizado que mejora eficiencia» | No publican | Genérico | **Ninguna de las cinco firmas del listado nombra DIAN, factura electrónica ni contabilidad** |
| **TotalSys** (Envigado) · https://totalsys.co/blog/cuanto-cuesta-desarrollar-software-medida-colombia-2026 | Consultora «sin precios irreales»; diagnóstico gratis | COP $5 a 15 millones básico · 15 a 50 mediano · 50 a 150 millones o más complejo (publicado el 1-may-2026) | Honestidad de precio | Regala el diagnóstico (nosotros lo cobramos: `diagnosticoGratis`); sin DIAN |
| **Mentora** (nacional; lista Bucaramanga entre sus ciudades) · https://mentoracolombia.com/automatizacion-facturacion-electronica | «Automatización de facturación electrónica DIAN»: Siigo, World Office, Alegra, Bsale, Loggro; OCR de facturas y conciliación | **Implementación desde $5.900.000 más desde $590.000 al mes**; 4 a 8 semanas | «−85 % de horas digitando», «−12 días de recaudo» | Métricas sin fuente; agencia de todo (SG-SST, invitaciones digitales a $45.000); **no es facturador habilitado** |
| **Alanube** · https://www.alanube.co/colombia/ | API de facturación DIAN para integradores (proveedor tecnológico autorizado) | No publica («paga por lo que emites») | Insumo para desarrolladores | No compite por la pyme: es un proveedor que nosotros podemos usar |

**Lectura del frente:** en Bucaramanga nadie vende «software que habla con la DIAN». Los cinco del
listado local escriben «transformación digital»; Kondory, el más grande de la ciudad, no nombra la
factura electrónica. El único que vende integración DIAN con precio publicado es Mentora, nacional,
como agencia de todo y sin habilitación propia. La página
`/servicios/integracion-contable-facturacion-electronica` (15-sep) ya reclama el hueco con las
palabras correctas: no somos proveedor tecnológico, recorrimos el trámite con nuestro NIT.

---

## 4. Frente c · Software de despacho y domicilios (compite con L1 `domicilios-ops`)

| Competidor | Posicionamiento | Precio público (consultado el 16-sep-2026) | Ángulo | Dónde flaquea |
|---|---|---|---|---|
| **Gestro** (🔴 Bucaramanga) · https://somosgestro.com/ | POS para restaurantes con módulo de domicilios: kanban, asignación de repartidores propios o externos, tarifa por distancia, **factura electrónica DIAN incluida** | **$79.000 / $119.000 / desde $169.000 al mes**, activación $0, «implementación remota en menos de 24 h» | Todo en uno, barato, para el restaurante | Es POS de restaurante, no operación de una **empresa de domicilios**; no gestiona flota multicliente ni turnos; prueba social sin cifra |
| **OlaClick** (Brasil, con foco en Colombia) · https://olaclick.com/es/ | Pedidos por WhatsApp, repartidores, Rappi/iFood/PedidosYa y factura electrónica DIAN | No en la página (remite a pricing.olaclick.app) | «Sin comisiones de las apps» | Mismo caso: restaurante, no flota de mensajería |
| **DiDi Tu Negocio** · https://web.didiglobal.com/co/food/restaurantes/didi-tu-negocio/ | Canal propio del restaurante (WhatsApp, teléfono, link) con repartidores de DiDi | **9,5 % más IVA por pedido; «qué pagan los usuarios: valor de productos + costos de envío + propina opcional»**, o sea que el envío lo paga el cliente aparte | «Sin costos fijos» | El restaurante no es dueño del dato ni del cliente; no le sirve a quien **tiene** flota |
| **SmartQuick** (Colombia) · https://smartquick.ai/software-ruteo-logistico-colombia.html | TMS, ruteo y RNDC para flotas de 5 o más vehículos | **$200.000 por vehículo al mes** (empresarial $180.000) | Cumplimiento RNDC | Precio por vehículo prohibitivo para una flota de motos; es carga, no domicilios |
| **SimpliRoute · Drivin** (Chile) | Ruteo SaaS para pymes | US$80 a 120 y US$60 a 100 por vehículo al mes (**citados por SmartQuick, no verificados en sus sitios**) | Optimización de rutas | Sin RNDC ni Colombia; no despachan por chat |

**Lectura del frente:** todos resuelven al **restaurante** (Gestro, OlaClick, DiDi) o a la **flota de
carga** por vehículo (SmartQuick, SimpliRoute). Nadie cubre «10 a 40 domiciliarios coordinados por
WhatsApp, varios clientes, turnos», que es lo que hace `domicilios-ops` y lo que dice el título de su
página («Software para empresas de domicilios en Colombia»). El dato de DiDi cierra el supuesto
`incluyeElDomicilio` de `19-INVESTIGACION-MERCADO-VERTICALES.md` §3.3.5 en «no incluye»: el 9,5 %
es la herramienta y la flota, y el reparto lo paga el consumidor.

---

## 5. Huecos que nadie reclama, y amenazas

### Huecos (con evidencia)

1. **Estudio de software habilitado como facturador electrónico.** Ninguna de las cinco firmas del
   listado de Bucaramanga nombra la DIAN; Kondory tampoco; Mentora lo vende como agencia de todo y sin
   habilitación. Es el único hueco de junio que sigue abierto, y es propio (resp. 52, prefijo `SOL`,
   certificado GSE). La página de integración contable ya lo dice.
2. **Software para la empresa de domicilios (la flota de mensajería), no para el restaurante.**
   Gestro, OlaClick y DiDi resuelven al restaurante; SmartQuick y SimpliRoute cobran por vehículo para
   carga. `domicilios-ops` está en el medio y nadie más.
3. **Base de cobro publicada donde todos callan, y en pesos.** Keybe, Kondory, Alanube y OlaClick no
   publican; los que publican lo hacen en USD (B2Chat, Whaticket, ToGrow). La forma `cotizacion` del
   canon obliga a publicar la base del cobro, y hacerlo en COP sigue siendo diferencial local.

Un cuarto argumento, que no es hueco sino munición: **contra DiDi, la propiedad del dato** (el 9,5 %
más el envío que paga el cliente se puede decir con cifra oficial; el argumento de precio ya no).

**Lo que dejó de ser hueco (y por qué se retira de la lista de junio):**
- *Done-for-you.* Ventiva y Dinolabs lo reclaman con precio en pesos y con la misma frase
  («nosotros implementamos, entrenamos y mantenemos»). Sigue siendo cómo trabajamos, pero ya no es
  un argumento que nadie más diga.
- *IA incluida sin sorpresa de tokens.* Meta cobra por token, B2Chat y Whaticket cobran la IA aparte,
  y desde el 1-oct el mensaje de servicio también se cobra. El «costo bajo control» es una condición
  de la cotización, no un titular.

### Amenazas

1. **Meta One vende el agente a US$14,99 al mes con lista pública.** El mensaje «bot» compite contra
   un precio de lista del dueño del canal. Sostiene la decisión del 15-sep, y en cualquier orgánico o
   pauta el titular es el vertical, nunca el bot suelto (`canon.json → mensajeLiderPorCanal`).
2. **1-oct-2026: operar un bot le cuesta más al cliente.** Toda cotización L2 dice que el consumo de
   WhatsApp lo paga el cliente a Meta y se estima por volumen (`05-PRICING.md` §1).
3. **El MCP server de WhatsApp comoditiza el registro del WABA:** el camino asistido deja de ser
   trabajo cobrable. Se sigue haciendo; no se cobra como ítem.
4. **Gestro está en la misma ciudad, con DIAN, a $79.000 al mes y «en 24 h».** Es el ancla de
   «software barato» para cualquier restaurante que oiga «domicilios». Confirma `19 §3.2` (no entrar
   por el POS) y obliga a que `domicilios-ops` diga «no somos POS ni app de pedidos: es para empresas
   que tienen domiciliarios».
5. **Kondory (Bucaramanga) ya lista «última milla» y «chatbots IA» en el mismo catálogo:** puede
   copiar el vertical si lo ve pagar.
6. **Dinolabs y Ventiva reclaman done-for-you y ancla por reemplazo de trabajo:** el diferencial de
   junio pasó a ser mesa de todos. Sólo la operación más DIAN sigue sin dueño.

Lo que **no** cambia con este refresco: ningún importe del canon, el mensaje líder por canal, la
landing L3 (la página DIAN ya tiene el ángulo correcto) y el nombre.

---

## 6. Método y lo que no se pudo verificar

**Método (16-sep-2026):** guion de las skills `claude-ads:ads-competitor` y
`marketing:competitive-brief`, sin conectores. Cada precio se leyó en la página de pricing del
competidor o en su blog y se anota con URL y fecha; cuando la cifra viene de un tercero se dice de
quién. Precios en la moneda del competidor. **Sin cifras de inversión publicitaria** (Meta Ad Library
no las expone para anunciantes comerciales). **Las creatividades vivas** (Ad Library, Google Ads
Transparency) **no son consultables por fetch**: sigue como en junio, los ángulos salen del copy de
sitio y pricing, y `14-SWIPE-FILE.md` lo va tapando anuncio por anuncio.

**Lo que no pude verificar:**

- **Tarifa Colombia del mensaje de servicio desde el 1-oct-2026, y si quedan 1.000 gratis al mes por
  número.** Los BSP se contradicen (SendPulse y YCloud dicen 1.000 gratis; ChatMaxima dice cero) y la
  página oficial de Meta (https://developers.facebook.com/docs/whatsapp/pricing/) seguía diciendo
  «service conversations free» sin mostrar el rate card. Pendiente: bajar el CSV oficial.
- **Meta One en Colombia:** ninguna fuente dice en qué países arranca ni si el tier de negocio aplica a
  la app WhatsApp Business de pymes o sólo a Meta Business Suite.
- **Treble.ai:** el «desde US$399 al mes» es de Runia, no de su sitio.
- **SimpliRoute y Drivin:** precios por vehículo citados por SmartQuick (competidor), no por ellos.
- **Pibox:** la página no cargó contenido.
- **Gestro:** número de clientes, y si la certificación DIAN es como proveedor tecnológico o como
  software del facturador (la página dice «certificado»; no se verificó en el listado de la DIAN).
- **Punto Ágil (Bucaramanga):** apareció como empresa de domicilios local (competidor de Bucaradomi,
  no nuestro); no se analizó.

---

## Fuentes consultadas el 2026-09-16

- Meta One tiers: https://www.engadget.com/2258403/meta-adds-new-subscription-tiers-for-businesses-creators-and-ai-power-users/ · https://www.androidauthority.com/meta-one-subscription-plans-3711755/
- Precio por token en Colombia: https://ingenierosdemarketing.com.co/la-nueva-plataforma-de-agentes-de-ia-de-meta-en-whatsapp-precios-y-calculo-en-colombia/
- Meta Business Agent, alcance: https://www.wati.io/en/blog/meta-business-agent/
- Mensajes de servicio desde el 1-oct: https://support.zendesk.com/hc/en-us/articles/11113277351322 · https://www.wati.io/en/blog/whatsapp-service-message-pricing/ · https://www.ycloud.com/blog/whatsapp-api-message-pricing-update-effective-october-1-2026 · https://developers.facebook.com/docs/whatsapp/pricing/
- MCP server de WhatsApp Business: https://techcrunch.com/2026/09/15/meta-now-lets-ai-agents-handle-the-boring-parts-of-whatsapp-business-setup/
- Keybe: https://keybe.ai/ · B2Chat: https://www.b2chat.io/precios/ · Whaticket: https://whaticket.com/precios/ · Cliengo: https://www.cliengo.com/pricing · Treble (tercero): https://runia.ar/alternativas-a-treble-2026
- Ventiva: https://ventivaia.com/cuanto-cuesta-chatbot-whatsapp-colombia/ · Dinolabs: https://www.dinolabs.dev/blog/cuanto-cuesta-agente-ia-colombia
- Kondory: https://kondory.com/ · ToGrow: https://togrowagencia.com/software-a-medida-costo-colombia/ · https://togrowagencia.com/empresas-de-software-a-medida-en-bucaramanga/ · TotalSys: https://totalsys.co/blog/cuanto-cuesta-desarrollar-software-medida-colombia-2026 · Mentora: https://mentoracolombia.com/automatizacion-facturacion-electronica · Alanube: https://www.alanube.co/colombia/
- Gestro: https://somosgestro.com/ · OlaClick: https://olaclick.com/es/ · DiDi Tu Negocio: https://web.didiglobal.com/co/food/restaurantes/didi-tu-negocio/ · SmartQuick: https://smartquick.ai/software-ruteo-logistico-colombia.html

---

## Anexo A · Ronda 1 Meta (jun-2026), archivado el 2026-09-16

> Lo de abajo es la investigación del **2026-06-17** (posicionamiento actualizado el 20-jun, parche
> del 13-ago) tal como quedó, con los sufijos *(retirado el 15-sep-2026)* de la D1. **No describe la
> oferta de hoy:** mide el mercado del bot por suscripción, que se despublicó el 15-sep, y sus
> ángulos son del carril de Meta, que quedó relegado. Se conserva porque el canon y los docs 01, 02,
> 07 y 14 lo citan por número (**A.3** ángulos quemados, **A.5** ángulo G, **A.6** método), y porque
> la tabla y los precios de junio son datos verificados con URL a esa fecha. Cualquier cifra de
> plan de SoltyAI que aparezca acá es referencia interna, no precio de lista.

### A.1 · Tabla de competidores

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

### A.2 · Mapa de posicionamiento

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
PYME en pesos: **Esencial $290.000 · Pro $490.000 · Premium $790.000 al mes, más setup $400.000** *(retirado el 15-sep-2026)*
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

### A.2-bis · Meta Business Agent — el competidor que más pesa (first-party)

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

#### Por qué NO se compite por precio

Contra gratis no se compite por precio: el piso lo puso Meta en cero y el techo lo pone su propio
costo de tokens, que es marginal. Bajar el nuestro para acercarnos sólo destruye el margen que
paga el trabajo humano del setup, que es justo lo que Meta no hace. **El precio deja de ser el
argumento y pasa a ser una consecuencia** de lo que se entrega.

#### Por qué NO se compite por "existencia del bot"

El ángulo de categoría —"te armo un chatbot de IA para WhatsApp"— **está muerto en 2026**. Es lo que
Meta regala en la misma pantalla donde íbamos a pautar, y además lo dicen Wati, ManyChat, Zenvia,
Atendio y veinte agencias locales. Anunciar la existencia del bot es pagarle a Meta por una
audiencia que Meta convierte a su propio producto. Lo que sigue vivo es **el resultado, en un
vertical y en una ciudad**.

#### El moat: las cinco cosas que Meta no hace

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

### A.3 · Ángulos de mensaje que YA usan los competidores (para NO sonar igual)

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

### A.4 · Huecos detectados (oportunidades para la pauta)

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
   (**Esencial $290.000 · Pro $490.000 · Premium $790.000 al mes + setup $400.000**, antes de IVA) y *(retirado el 15-sep-2026)*
   ancla colombiana real (Bucaramanga), contra plataformas que facturan en USD con soporte distante.
   Y suma un argumento que ninguna de ellas puede dar acá: **factura electrónica DIAN**, así que el
   cliente descuenta el gasto.

6. **Cierre dentro de la conversación.** El embudo de SoltyAI agenda/cierra **dentro del chat ya
   caliente** o con la oferta "te lo dejamos configurado con tus datos reales", sin saltar a un
   calendario frío. Reduce fricción que todos los demás tienen.

---

### A.5 · Ángulos diferenciadores recomendados para los anuncios (3 creatividades, ronda 1)

> Para 3 creatividades, un mensaje por anuncio. Cada uno ataca un hueco distinto y evita el copy
> saturado del §3. La promesa líder (tiempo/orden/productividad + done-for-you) es la misma en los
> tres; cambia el ángulo de entrada.
>
> ⚠️ **Cuándo se usan (actualizado 2026-08-13):** estos ángulos son del **carril de Meta, que quedó
> relegado** y entra con **$1.200.000 COP** cuando haga falta volumen, no antes
> (`15-CANALES-Y-SECUENCIA.md`). Sirven igual hoy para el orgánico y el outbound, que llevan el mismo
> mensaje líder. El carril que sí se abre primero —Google Search y el Business Profile— lleva **otro**
> mensaje líder: el servicio a la medida, no el bot.

#### Ángulo A — "Te lo dejamos hecho a tu medida" *(done-for-you, el moat)*
- **Mensaje:** *"No te entregamos una herramienta para que la configures tú. La adaptamos a tu
  negocio: tu catálogo, tus precios, tu forma de atender. Te devolvemos tiempo y pones orden."*
  CTA → prueba el bot / agenda demo.
- **Por qué gana:** Ataca el moat real. El clúster PYME (Whaticket/B2Chat/Cliengo) vende plataforma
  genérica que toca configurar; los no-code te hacen armar el flujo. SoltyAI entrega **adaptado y
  listo** — nadie pauta esto en el segmento. **Recomendado como creatividad principal.**

#### Ángulo B — "El bot que ya sabe de TU negocio" *(verticales pre-entrenados)*
- **Mensaje:** *"¿Peluquería, tienda, inmobiliaria o domicilios? Tu bot ya viene entrenado para tu
  rubro y agendado/ordenado a tu forma de trabajar. No empiezas de cero."* (variantes por vertical).
- **Por qué gana:** Permite **segmentación por vertical** en Meta (audiencias distintas por rubro) y
  refuerza el moat del rubro listo. Nadie en PYME-LATAM lo pauta. Es además la única forma en que
  Meta vale la pena cuando entre: una vertical y una ciudad, nunca el mensaje de categoría.

#### Ángulo C — "Recupera tu tiempo, pon orden" *(promesa central, dolor del dueño)*
- **Mensaje:** *"Tu equipo deja de repetir las mismas preguntas. Tus citas y pedidos quedan
  organizados solos, 24/7. Más tiempo, más orden, más ventas."* CTA → prueba el bot / agenda.
- **Por qué gana:** Ataca el dolor real del dueño (tiempo perdido, caos) en vez de "features".
  El mercado promete "atiende 24/7" a secas; SoltyAI lo conecta con **devolver tiempo y poner orden**.

#### Ángulos de reserva (rotación si A–C cansan, o munición para el orgánico y el outbound):
- **D — "Costo bajo control, IA incluida":** *"IA cuando vale la pena, sin IA cuando no. El uso de
  IA va incluido — sin sorpresa de tokens."* Contra el costo variable opaco de tokens OpenAI
  (Whaticket) y $/conv (ManyChat). Modo con/sin IA es **único en el mercado revisado**.
- **E — "Precio claro, soporte en colombiano":** *"Desde $290.000 al mes, sin cotizaciones eternas. *(retirado el 15-sep-2026)*
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

### A.6 · Notas de método y limitaciones (honestidad)

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
  Vigente: **Esencial $290.000 · Pro $490.000 · Premium $790.000 al mes, más setup $400.000**, todo *(retirado el 15-sep-2026)*
  antes de IVA, con excedente de $50.000 por cada 100 conversaciones de más.
  **Prohibido** citar el modelo en dólares —los planes Starter/Growth/Pro y el catálogo por producto
  (Agenda $65/$250, Pedidos $80/$280, Inmobiliario $249/$600 y $650/$1.500)—: quedó **superado** por
  el canon COP. Ojo: **"Pro" a secas sí es válido**, es el plan de $490.000.
- **Asimetría de la tabla, dicha en voz alta:** los precios de los competidores siguen en **USD**
  porque así los publican ellos y así se verificaron con URL. No se convirtieron a pesos: una TRM
  supuesta convertiría un dato verificado en una estimación. Para comparar de a de veras, el
  `canon.json → trm` trae el factor y su estado (**supuesto**).

---

### A.7 · Fuentes consultadas en junio y agosto de 2026

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
