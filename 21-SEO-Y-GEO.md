# 21 · SEO y GEO: cómo aparece SoltyAI cuando alguien busca, y cuando alguien le pregunta a una IA

> **Escrito el 2026-09-15**, el mismo día que quedó verificado el Google Business Profile. Es el
> plan para que SoltyAI aparezca (a) en Google cuando buscan por el nombre o por lo que vendemos y
> (b) en la respuesta de ChatGPT, Claude, Gemini, Perplexity y las AI Overviews cuando alguien
> pregunta «quién hace software a la medida en Bucaramanga». Lo segundo se llama GEO (generative
> engine optimization) y hay mucho humo alrededor; acá va con fuente y fecha, y lo que no tiene
> fuente dice **supuesto**. Este doc no escribe copy de páginas ni toca código: eso corre en
> paralelo en otros frentes. Lo que sólo puede decidir el fundador está en §8.
>
> Hermanos: `15-CANALES-Y-SECUENCIA.md` (por qué Google va primero), `20-ORGANICO-QUE-CAMBIA.md`
> (el orgánico), `redes/google-business-profile.md` (el GBP, ya creado) y
> `redes/whatsapp-business-perfil.md` (la descripción de 508 caracteres que acá se reutiliza).

## Resumen en diez líneas

1. **Esta semana:** Bing Webmaster Tools importando desde Search Console (5 minutos, gratis, y es
   la puerta a ChatGPT y Copilot); perfil gratis en Clutch y en Crunchbase con el mismo nombre y
   los mismos datos del GBP; pedirle la reseña a Swisscontact; corregir el JSON-LD de la landing
   para que diga teléfono, razón social y NIT (lo hace el frente de la landing).
2. **En un mes:** GoodFirms, intentar Bing Places (no está claro que acepte Colombia), primera
   ronda de medición GEO (§7) y una página que responda «integración contable y factura
   electrónica DIAN», que hoy no existe y es la búsqueda que nadie más en Bucaramanga contesta.
3. **No vale la pena:** `llms.txt` como apuesta (el 97% no lo lee nadie; la landing lo publica igual porque cuesta cero y se genera solo, ver §2.3), Sortlist (paga por lead), la Red de
   Afiliados de la CCB (exige dos años de matrícula), Wikidata (la empresa no es notable todavía
   y forzarlo se borra), y cualquier «optimización de descripción» del GBP (la palabra clave en la
   descripción es el factor 171 de 190).
4. **La verdad incómoda:** el 77% de lo que una IA cita sobre una marca no está en la web de la
   marca. Aparecer en una respuesta de IA se gana en directorios, reseñas, LinkedIn y menciones
   de terceros, no en soltyai.com. Y con una empresa de dos meses, lo que se puede ganar en 2026
   es **que la IA conteste bien cuando preguntan por el nombre**, no que nos recomiende sola.
5. **El GBP recién verificado** tarda entre 1 y 14 días en salir por nombre (fuente secundaria;
   Google no publica el número). Lo que lo acelera es que el nombre, el teléfono y la ciudad sean
   **idénticos** en la landing, LinkedIn, Bing y cada directorio.

---

## 1. Diagnóstico: qué hay y qué falta

| Plano | Hoy (2026-09-15) | Falta | Peso |
|---|---|---|---|
| Google Business Profile | Creado y verificado con `carlos@soltyai.com`, verificación instantánea por coincidencia de dominio (`redes/google-business-profile.md`). 1 reseña (Bucaradomi) | Reseña de Swisscontact; post semanal; que salga por nombre (§3) | 🔴 |
| Search Console | Propiedad verificada, sitemap enviado | Nada. Vigilar cobertura una vez al mes | ✅ |
| Landing (Astro) | `Organization` + `WebSite` + `ProfessionalService` + `SoftwareApplication` en JSON-LD; `sameAs` a 5 redes; `robots.txt` abierto; sitemap | El `Organization` no declara `legalName`, `taxID`, `telephone`, `foundingDate` ni `address`; el `sameAs` no incluye GitHub, el mapa del GBP ni los directorios; `/en/` sigue vendiendo el bot (el `hreflang` ya está apagado por eso) | 🟠 |
| Página por búsqueda | `/servicios` (4 subpáginas), `/producto/domicilios-ops`, `/producto/chatbot` | No hay página para «integración contable / factura electrónica DIAN» ni para «páginas web Bucaramanga» (ver §4) | 🟠 |
| Bing | Nada | Webmaster Tools (importar de Search Console) y Bing Places | 🔴 |
| Directorios B2B | Nada | Clutch, Crunchbase, GoodFirms (gratis) | 🟠 |
| LinkedIn | Página de empresa + perfil del fundador | Que ambos digan «SoltyAI», «Bucaramanga» y el mismo teléfono y web | 🟡 |
| GitHub | `carmegar` con repos privados | Un README público de la org o del perfil que nombre SoltyAI y enlace soltyai.com (decisión del fundador, §8) | 🟡 |
| carmegar.dev | Enlaza a soltyai.com | Que la mención diga «SoltyAI S.A.S., Bucaramanga» y no sólo el link | 🟡 |
| Reseñas | 1 (Google, Bucaradomi) | Swisscontact en Google; las mismas dos en Clutch | 🔴 |
| Blog / contenido indexable | Ninguno. Los videos de `16` no se han grabado | No se abre blog. Los posts del GBP y los Shorts con título de búsqueda son el contenido indexable de 2026 (`20 §C6`) | 🟡 |
| Medición GEO | Ninguna | Protocolo mensual de §7 | 🟠 |

---

## 2. Cómo funciona de verdad aparecer en una respuesta de IA

### 2.1 Cada asistente busca en un índice distinto, y eso decide dónde hay que estar

| Asistente | Con qué busca | Qué implica para SoltyAI | Fuente |
|---|---|---|---|
| **ChatGPT** (search) | Su propio rastreador `OAI-SearchBot` («se usa para mostrar sitios en los resultados de búsqueda de ChatGPT») sobre «proveedores de búsqueda de terceros y contenido de socios». El proveedor principal documentado es **Bing** | Estar indexado en Bing es condición de entrada. De ahí Bing Webmaster Tools esta semana | [OpenAI, docs de bots](https://developers.openai.com/api/docs/bots); [MaxAEO, jul-2026](https://maxaeo.ai/blog/which-search-engines-power-ai-answers/) |
| **Copilot** | Índice de Bing, `Bingbot` | Lo mismo | MaxAEO, jul-2026 (cita la doc de Microsoft) |
| **Gemini y AI Overviews / AI Mode** | Índice de Google («los mismos fundamentos de SEO aplican; la página tiene que estar indexada y ser elegible») | Search Console + GBP ya cubren esto. Es el único motor donde lo que ya hicimos cuenta | MaxAEO, jul-2026 (cita la doc de Google) |
| **Claude** | Anthropic no publica el índice. Un análisis empírico de mar-2025 encontró 86,7% de coincidencia entre lo que cita Claude y los resultados orgánicos de **Brave Search** | Brave rastrea la web abierta con su propio índice; no hay «registro» posible. Lo que ayuda es lo mismo que para Google: páginas indexables y menciones | [Profound, mar-2025](https://www.tryprofound.com/blog/what-is-claude-web-search-explained); MaxAEO, jul-2026 |
| **Perplexity** | Índice propio, `PerplexityBot` y `Perplexity-User` | Tampoco hay registro. Perplexity favorece agregadores de reseñas y comparativas (G2, Yelp, TripAdvisor) en consultas comerciales | MaxAEO, jul-2026; [ZipTie, 2026](https://ziptie.dev/blog/why-reddit-dominates-chatgpt-perplexity-and-google-ai-overviews/) |

Lo que se desprende: **dos índices mandan (Google y Bing) y dos no se pueden tocar directo (Brave y
Perplexity)**, pero los cuatro leen las mismas páginas. Por eso el orden es: Search Console (hecho),
Bing Webmaster Tools (esta semana), y después el trabajo que vale para todos, que es el 2.2.

### 2.2 Lo que cita una IA sobre una marca está, en su mayoría, fuera de la web de la marca

- Omniscient Digital analizó **23.387 fuentes citadas en 240 prompts con marca** (ChatGPT, Perplexity,
  Gemini, AI Mode y AI Overviews), publicado el 8-ene-2026: **23% contenido propio de la marca, 48%
  medios ganados (terceros), 30% contenido de competidores**. Dentro de los terceros: editorial 16%,
  foros y redes 11%, sitios de reseñas 11%, directorios y referencia 10%.
  [Fuente](https://beomniscient.com/blog/how-llms-source-brand-information/).
- Semrush, 230.000 prompts entre jul y oct-2025 (ChatGPT, AI Mode, Perplexity), publicado el
  10-nov-2025: en **Google AI Mode** el primer nivel de dominios citados es **LinkedIn, YouTube, Reddit
  y Google**; en **Perplexity**, Reddit, LinkedIn, NIH, Microsoft y Google. En ChatGPT, Reddit cayó
  del 60% al 10% de las respuestas en septiembre de 2025 y subieron PRNewswire, Forbes y Medium.
  [Fuente](https://www.semrush.com/blog/most-cited-domains-ai/).
- Un proveedor de optimización de Crunchbase afirma que Crunchbase es «la segunda fuente de datos
  de empresas más citada después de Wikipedia» en consultas B2B (19% en Claude, 17% en ChatGPT, 14%
  en Perplexity). **Es un dato de vendedor con interés; se toma como indicio, no como hecho.**
  [Capston, 2026](https://capston.ai/crunchbase-optimization-for-ai/).
- Whitespark, reporte de factores de ranking local 2026 (6-nov-2025): la edición nueva agrega «impacto
  en visibilidad en búsqueda con IA» como dimensión, y su lectura es que **las señales locales y las de
  IA se fusionaron**: categoría, reseñas, horario y NAP consistente mueven las dos.
  [Fuente](https://whitespark.ca/local-search-ranking-factors/).

Lo que se desprende para una empresa de una persona en Bucaramanga, sin adornos:

1. **La web propia es la capa de verificación, no la de descubrimiento.** La IA confirma en
   soltyai.com lo que ya leyó en LinkedIn, en un directorio o en una reseña. Si esas tres dicen cosas
   distintas (o no dicen nada), la web no las salva.
2. **LinkedIn cuenta como directorio para Google AI Mode y Perplexity.** El perfil del fundador y la
   página de empresa son las dos «entradas de directorio» que más pesan y ya existen. Que digan el
   nombre exacto, la ciudad, el teléfono y la web (§5.7).
3. **Los listados «mejores empresas de X en Y» son el formato más citado**, y en Bucaramanga ya
   existen («las 5 mejores empresas de software en Bucaramanga», visto el 15-sep en
   `redes/google-business-profile.md §12c`). No los controlamos. Lo que sí: aparecer en los
   directorios de donde esos listados sacan sus nombres (Clutch, GoodFirms) y tener reseñas.
4. **En 2026 no vamos a salir como recomendación espontánea** para «software a la medida en
   Colombia». Hay decenas de empresas con años de menciones. Lo alcanzable, y medible, es (a) que al
   preguntar **por SoltyAI** la IA conteste bien y con los datos correctos, y (b) que en preguntas
   **muy acotadas** (Bucaramanga + integración contable + DIAN) salgamos entre las opciones, porque ahí
   casi nadie tiene contenido. El protocolo de §7 mide exactamente esas dos cosas.
5. **Reddit no es un carril para nosotros.** Es el dominio más citado en varios motores, pero un
   hilo en español sobre software en Bucaramanga escrito por el interesado es spam y se nota. Se
   anota como lo que no se hace.

### 2.3 `llms.txt`: qué es y qué no es

Es un archivo de texto en la raíz del sitio que resume el contenido para modelos de lenguaje. Estado
real a septiembre de 2026:

- Google **no lo soporta ni planea soportarlo** (Gary Illyes, jul-2025; John Mueller lo comparó con
  la meta keywords). Ningún proveedor (OpenAI, Anthropic, Meta, Mistral) se ha comprometido a leerlo
  en producción. [1ClickReport, 2026](https://www.1clickreport.com/blog/llms-txt-evidence-2026).
- Ahrefs, 137.210 dominios, datos de mayo-2026 publicados el 15-jun-2026: el 28% publica el archivo,
  **el 97% de esos archivos recibió cero peticiones**, y del 3% restante el 96% del tráfico fue de
  bots, la mayoría herramientas de auditoría SEO. Los bots de búsqueda de IA fueron el 1,1% de las
  peticiones. [Fuente](https://ahrefs.com/blog/llmstxt-study/).
- Anthropic lo recomienda **para documentación de desarrolladores** que leen agentes, que es otro
  caso: no es visibilidad de marca, es que un agente encuentre tu API.

Veredicto: **no se le atribuye nada.** La landing lo publica de todas formas desde el 15-sep-2026
(`/llms.txt` y `/llms-full.txt`, generados en el build desde los mismos datos que `/empresa`, así
que no hay una tercera copia que mantener): el costo es cero y el único riesgo (desactualizarse) lo
resuelve el generador. Lo que NO se hace es contar con él: si en la medición del §7 aparecemos, el
mérito es de `/empresa`, de los directorios y de las reseñas, no del archivo. Si algún día
`docs.soltyai.com` existe para desarrolladores, ahí sí vale por la razón correcta.

### 2.4 AI Overviews y AI Mode en Colombia

- **AI Overviews en español está en Colombia desde el 5-nov-2024**
  ([El Espectador](https://www.elespectador.com/tecnologia/ai-overviews-llego-a-colombia-que-es-y-como-funciona/)).
- **AI Mode en español se lanzó el 24-sep-2025** para España y Latinoamérica
  ([TreceBits](https://www.trecebits.com/google-ai-mode-fin-buscador-internet/)).
- Whitespark (12-may-2025, 540 consultas en tres ciudades de EE. UU.): AI Overviews salió en **15%
  de las búsquedas locales transaccionales** («plomeros en Phoenix») y en **92% de las
  informacionales**; en el set de plomeros, **60% de las citas fueron a terceros** (Indeed, Reddit,
  Yelp) y 40% a negocios locales. Donde domina el pack local, retrocede la AI Overview, y al revés.
  [Fuente](https://whitespark.ca/blog/case-study-the-prevalence-of-ai-overviews-in-local-search/).
  Es dato de EE. UU. e industrias de consumo; para B2B en Colombia se toma como orden de magnitud.

Lo que se desprende: la búsqueda **transaccional** («desarrollo de software Bucaramanga») la sigue
decidiendo el pack local y el orgánico clásico, que es donde el GBP trabaja. La búsqueda
**informacional** («cómo integrar mi contabilidad con la factura electrónica de la DIAN») ya la
contesta una AI Overview, y ahí la página que se cita es la que responde la pregunta de frente, con
un encabezado en forma de pregunta y la respuesta en el primer tercio (Kevin Indig, 1,2 M de
respuestas de ChatGPT: 44,2% de las citas salen del primer 30% de la página, vía
[SEJ, 2026](https://www.searchenginejournal.com/ai-overviews-now-answer-most-local-searches-how-to-get-your-business-cited/580757/)).
Esa página no existe hoy (§4).

---

## 3. El GBP: cuánto tarda en salir por nombre y qué lo acelera

**¿Cuánto tarda?** Google sólo publica que la **revisión de la verificación tarda hasta 5 días
hábiles** ([ayuda de Google](https://support.google.com/business/answer/7107242?hl=en)); en nuestro
caso fue instantánea. Sobre cuándo aparece después, Google no publica nada. Las fuentes secundarias
coinciden en **1 a 14 días** para la búsqueda por nombre, con los negocios de área de servicio (sin
dirección visible, como el nuestro) en la parte alta del rango, 7 a 14 días, y con una regla
práctica: si a las dos semanas no sale, el problema es técnico y no de espera
([Leuangpaseuth, 2026](https://brandonleuangpaseuth.com/blog/how-long-does-it-take-for-a-google-business-profile-to-show-up/);
[Local Falcon](https://www.localfalcon.com/blog/why-is-my-google-business-profile-not-showing-up-5-possible-reasons)).
**Fecha de control: 29-sep-2026.** Si `SoltyAI Bucaramanga` no muestra el perfil ese día, se revisa
antes de esperar más.

**¿Por qué Google «corrige» el nombre?** Porque el perfil es una de varias fuentes, no la fuente.
Google arma la ficha con «información pública disponible (web de la empresa, citaciones, directorios,
fuentes gubernamentales), datos licenciados, contenido de usuarios y su propia IA», y cuando encuentra
algo que no coincide y le parece más confiable, **lo aplica solo**
([SEJ, abr-2022](https://www.searchenginejournal.com/google-business-profile-info-sources/446399/)).
Un perfil nuevo, sin menciones afuera, es el más fácil de «corregir»: a Google le llega el nombre
`SoltyAI` de una sola fuente (nosotros) y `SOLTYAI S.A.S.` de otra (la CCB, el RUT). Las guías de
Google exigen que el nombre sea «el que conocen los clientes», sin ciudad ni servicios pegados, y
avisan que lo contrario «puede dar lugar a la suspensión»
([ayuda de Google, es-419](https://support.google.com/business/answer/3038177?hl=es-419)).

**Las cinco acciones que aceleran la entidad «SoltyAI»**, en orden:

1. **NAP idéntico en todos los planos, esta semana.** Nombre `SoltyAI`, teléfono `+57 300 570 1661`,
   ciudad `Bucaramanga, Colombia`, web `https://soltyai.com`. Hoy la landing no publica el teléfono
   en el JSON-LD y el `Organization` no dice `legalName: SOLTYAI S.A.S.` ni `taxID: 902081265-3`. Que
   Google lea en soltyai.com el mismo par «SoltyAI / SOLTYAI S.A.S.» que ve en la CCB es lo que evita
   que «corrija» hacia uno de los dos. El factor 15 de Whitespark 2026 es exactamente «NAP del HTML
   coincide con el del GBP». *(Lo ejecuta el frente de la landing; acá sólo queda dicho qué campos.)*
2. **`sameAs` completo.** Al arreglo actual (Facebook, Instagram, TikTok, YouTube, LinkedIn) se le
   agregan el perfil de LinkedIn de la página de empresa (ya está), **la URL de Google Maps del GBP**,
   `https://github.com/carmegar`, y los perfiles de Clutch y Crunchbase cuando existan. Y al revés:
   cada directorio enlaza a `https://soltyai.com`. Es el lazo que un buscador usa para decidir que
   dos menciones son la misma entidad.
3. **Tres menciones de terceros con nombre y ciudad.** carmegar.dev (ya enlaza; que diga «SoltyAI
   S.A.S., Bucaramanga»), el sitio de Bucaradomi (un «plataforma desarrollada por SoltyAI» en el pie,
   si el cliente accede; decisión del fundador, §8) y el perfil de LinkedIn del fundador con
   «Fundador en SoltyAI · Bucaramanga».
4. **Reseñas con texto y seguidas.** Factores 6, 9, 11 y 14 de Whitespark 2026 son calificación,
   cantidad de reseñas con texto, recencia y flujo sostenido. Con dos clientes reales son dos
   reseñas; se piden las dos (§6) y después una por proyecto cerrado.
5. **Actividad y vigilancia.** Un post por semana con el video de la tanda (`20 §C8`), y **responder
   los correos de Google sobre «ediciones sugeridas»**: un perfil inactivo es el que más ediciones
   automáticas recibe ([LOCALiQ](https://localiq.com/blog/how-to-protect-google-business-profile-information/)).
   Los avisos llegan a `carlos@soltyai.com`; hay que abrirlos.

Lo que **no** se hace: meter «Bucaramanga» o «software» en el nombre del perfil (factor 3, y motivo
de suspensión), ni «optimizar» la descripción (factor 171).

---

## 4. Mapa de intención de búsqueda B2B (Colombia y Bucaramanga)

Sin volúmenes: no tenemos herramienta de keywords y no se inventan. Lo único medido es lo que
Google mostró al buscar desde Bucaramanga el 15-sep (`redes/google-business-profile.md §12c`), y va
marcado. Todo lo demás es **supuesto** razonado desde lo que los clientes ya dijeron en reuniones.

**Convención de la columna «Página»:** las rutas existen salvo las marcadas «(no existe)», que son
decisión del fundador (§8) y las escribe el frente de copy.

### 4.1 Software a la medida (L3, la línea que factura)

| Frase | Por qué la buscan | Página | Evidencia |
|---|---|---|---|
| `software a la medida bucaramanga` | Ya saben que el de estantería no les sirve y buscan quién lo haga cerca | `/servicios` | Medido 15-sep: 10 empresas en orgánico, sin pack local |
| `desarrollo de software bucaramanga` | Igual, pero la mitad de la intención es empleo o carrera | `/servicios` + GBP | Medido 15-sep: 4 anuncios, después ofertas de empleo |
| `empresa de desarrollo de software en bucaramanga` | Buscan lista para comparar | GBP (categoría principal) | Medido 15-sep: listados «las 5 mejores» |
| `desarrollo de software a la medida colombia` | Compra remota, sin atarse a ciudad | `/servicios` | Supuesto |
| `cuánto cuesta un software a la medida en colombia` | Informacional, pre-compra; la contesta una AI Overview | `/servicios` con la sección de cómo se cobra (forma `cotizacion`: la base del cobro, no una cifra) | Supuesto |
| `diagnóstico de procesos para automatizar pyme` | Buscan por dónde empezar | `/servicios` (el diagnóstico de $600.000 + IVA es el único con precio cerrado en L3) | Supuesto |

### 4.2 Integración contable y factura electrónica DIAN (el foso propio)

| Frase | Por qué la buscan | Página | Evidencia |
|---|---|---|---|
| `integrar sistema contable con mi software` | Tienen contabilidad en Siigo, World Office, Alegra o QBO y digitan dos veces | **(no existe)** `/servicios/integracion-contable-dian` | Supuesto, pero es la P4 del GBP y el pedido real de TRACE |
| `integración siigo api desarrollo` / `integración world office` / `alegra api` | El comprador nombra su sistema, no la categoría | La misma página, con una sección por sistema | Supuesto |
| `facturación electrónica dian integrar con mi sistema` | Ya facturan a mano en el portal y quieren que salga del sistema | La misma página | Supuesto |
| `proveedor tecnológico facturación electrónica vs software propio` | Confusión frecuente: creen que necesitan ser PT | La misma página, con la respuesta corta (fabricante, no PT, `memoria: pos-restaurante`) | Supuesto |
| `desarrollador habilitado dian facturación electrónica bucaramanga` | Muy acotada; casi nadie la contesta | La misma página + P2 del GBP | Supuesto |
| `automatizar cuentas de cobro y retención en la fuente` | Dolor de quien contrata por prestación de servicios | La misma página | Supuesto |

Esta es la línea donde una página bien hecha puede entrar en una AI Overview en semanas, porque la
competencia local escribe sobre «transformación digital», no sobre la resolución 165 ni sobre el
prefijo de numeración.

> **Quién sí compite por estas búsquedas (verificado el 16-sep-2026, `03-competitor-analysis.md`
> §3).** En Bucaramanga, nadie: las cinco firmas del listado local y Kondory no nombran la DIAN.
> A nivel nacional, **Mentora** (mentoracolombia.com, lista Bucaramanga entre sus ciudades) vende
> «automatización de facturación electrónica DIAN» con Siigo, World Office y Alegra, publica precio
> (implementación desde $5.900.000 más desde $590.000 al mes) y escribe para estas mismas frases.
> Es agencia de todo y no es facturador habilitado: el ángulo que nos queda es exactamente ese, y
> la página tiene que decirlo en el primer párrafo, no en el pie.

### 4.3 Automatización de procesos

| Frase | Por qué la buscan | Página | Evidencia |
|---|---|---|---|
| `automatización de procesos empresa bucaramanga` | Sale **industrial** (PLC, domótica): no es nuestra búsqueda | Ninguna. No se persigue | Medido 15-sep |
| `automatizar tareas repetitivas en mi empresa` | Informacional; el dueño describe el dolor, no la solución | `/servicios` (y los videos de `16` con título de búsqueda en Shorts) | Supuesto |
| `quitar trabajo manual con software pyme colombia` | Igual | `/servicios` | Supuesto |

### 4.4 Páginas web (el escalón de entrada, $400.000 + IVA)

| Frase | Por qué la buscan | Página | Evidencia |
|---|---|---|---|
| `diseño de páginas web bucaramanga` | La demanda local más clara y la más competida (un perfil con 68 reseñas) | **(no existe)** `/servicios/paginas-web-bucaramanga`; hoy `/servicios/desarrollo-web` no dice «Bucaramanga» ni «páginas web» | Medido 15-sep |
| `página web para mi negocio precio colombia` | Comparan precio; nosotros sí lo publicamos | La misma, con el precio de `catalogo.json` | Supuesto |
| `página web sencilla con formulario de contacto` | Alcance cerrado, exactamente `web-basica` | La misma | Supuesto |

### 4.5 Domicilios (L1)

| Frase | Por qué la buscan | Página | Evidencia |
|---|---|---|---|
| `software para empresa de domicilios colombia` | Empresas de mensajería que despachan por WhatsApp | `/producto/domicilios-ops` | Supuesto |
| `app para asignar domiciliarios` | El dueño describe la función | `/producto/domicilios-ops` | Supuesto |
| `plataforma de despacho para mensajería bucaramanga` | Igual, local | `/producto/domicilios-ops` + post 1 del GBP | Supuesto |

> **Quién sí compite por estas búsquedas (verificado el 16-sep-2026, `03-competitor-analysis.md`
> §4).** Acá la tabla vieja decía «sin competencia local» y no es cierto para la palabra
> «domicilios»: **Gestro** (somosgestro.com) es de Bucaramanga, vende POS de restaurante con módulo
> de domicilios y factura electrónica DIAN desde $79.000 al mes, y aparece para «software
> domicilios». No es lo mismo que `domicilios-ops` (resuelve al restaurante, no a la empresa que
> tiene la flota), pero se lleva el clic del que busca la categoría. Consecuencia para la página: el
> título ya dice «para empresas de domicilios», y le falta una línea de «para quién no» (no es POS
> ni app de pedidos) para que Google y el visitante separen las dos cosas.

### 4.6 Marca

| Frase | Página |
|---|---|
| `soltyai`, `solty ai`, `soltyai bucaramanga`, `soltyai s.a.s. nit` | Home + GBP. Es la única búsqueda que se puede ganar en septiembre, y la que mide §7 |

---

## 5. Registro en Bing y directorios, listo para pegar

### 5.0 Los datos, una sola vez (copiar de acá, no de memoria)

| Campo | Valor |
|---|---|
| Nombre | `SoltyAI` |
| Razón social (sólo donde lo pidan) | `SOLTYAI S.A.S.` |
| NIT (sólo donde lo pidan) | `902081265-3` |
| Ciudad | `Bucaramanga, Santander, Colombia` |
| Dirección | **No se pone.** Si el campo es obligatorio: `Bucaramanga, Colombia` |
| Teléfono | `+57 300 570 1661` |
| Correo | `hola@soltyai.com` |
| Web | `https://soltyai.com` (sin parámetros: un directorio no es un carril de atribución, y la URL con cola parece spam) |
| Fundación | `2026-07` |
| Tamaño | `1-10` (o `2-9` según la lista) |
| Fundador | `Carlos Meza` |
| LinkedIn | `https://www.linkedin.com/company/soltyai` |
| GitHub | `https://github.com/carmegar` |
| Categoría | la más cercana a «Desarrollo de software a la medida» / «Custom Software Development» |

**Descripción larga (508 caracteres, la misma de `redes/whatsapp-business-perfil.md §4`):**

```
SoltyAI es un estudio de desarrollo de software en Bucaramanga. Hacemos software a la medida para negocios colombianos: nos conectamos a la operación que ya tienes y le quitamos el trabajo repetitivo.

SOLTYAI S.A.S. está habilitada por la DIAN como facturador electrónico, con certificado y resolución propios. La retención en la fuente, el IVA, el régimen simple y el ICA los tenemos en cuenta desde el diseño.

Empezamos con un diagnóstico pagado que te deja por escrito el mapa de tu proceso y el precio.
```

**Descripción corta (132 caracteres, el «info» de WhatsApp):**

```
Estudio de desarrollo en Bucaramanga. Software a la medida para negocios colombianos. Facturador electrónico habilitado por la DIAN.
```

**Versión en inglés de la corta**, para los directorios que la piden (Clutch, Crunchbase, GoodFirms
muestran en inglés):

```
Software development studio in Bucaramanga, Colombia. Custom software and integrations with accounting systems and DIAN electronic invoicing for Colombian businesses.
```

**Servicios (donde haya lista):** Custom Software Development · Web Development · ERP/Accounting
Integration · Business Process Automation. **No** se marca Marketing, Advertising ni Social Media
(prohibición `servicioFantasma`).

### 5.1 Bing Webmaster Tools 🔴 esta semana, gratis, cuenta y clic del fundador

- **Alta:** [bing.com/webmasters](https://www.bing.com/webmasters) → «Importar desde Google Search
  Console» → iniciar sesión con `carlos@soltyai.com` → seleccionar `soltyai.com`. La propiedad queda
  verificada sin tocar el DNS, y trae el sitemap
  ([Bing, blog oficial](https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools)).
- **Cuenta:** una cuenta Microsoft. Se crea con `carlos@soltyai.com` (una cuenta Microsoft puede usar
  un correo de Google como identificador), no con un correo personal.
- **Por qué vale:** es el índice detrás de ChatGPT search y Copilot (§2.1). Sin esto, ChatGPT no nos
  ve aunque Google sí.
- **IndexNow:** Bing acepta avisos de URL nueva por ese protocolo; para un sitio estático es una
  clave en un archivo y un ping en el deploy. **Es código del frente de la landing**; queda anotado
  como mejora, no como bloqueo.

### 5.2 Bing Places 🟠 intentar, gratis, cuenta y clic del fundador

- **Alta:** [bingplaces.com](https://www.bingplaces.com) (redirige a `bing.com/forbusiness`) → «Importar
  desde Google» → autorizar el GBP. Importa nombre, categorías, horario, descripción y fotos.
- ⚠️ **No se pudo confirmar que acepte negocios en Colombia.** La lista pública más citada (2014)
  nombraba nueve países y no incluía Colombia; las guías de 2026 no publican lista. El único chequeo
  válido es intentar la importación: si el país no aparece en el selector, se cierra y se anota en
  §8. Diez minutos.
- **Verificación:** teléfono (instantánea) o correo, si el país lo permite.

### 5.3 Clutch 🔴 esta semana, gratis, cuenta y clic del fundador

- **Alta:** [clutch.co/get-listed](https://clutch.co/get-listed) → perfil «Basic» → iniciar sesión con
  LinkedIn o Google (usar `carlos@soltyai.com`) → completar. «Tres pasos, 10 minutos o menos», gratis
  ([Clutch, ayuda](https://help.clutch.co/en/knowledge/get-listed-on-clutch)).
- **Pide:** nombre y tagline, número de empleados, **tamaño mínimo de proyecto y tarifa por hora**,
  web, ubicación, contacto, resumen y foco de servicios.
  - Tagline: `Custom software and DIAN e-invoicing integrations for Colombian businesses`.
  - Tarifa por hora y proyecto mínimo: el canon dice que L3 **se cotiza** y no publica cifra. Si el
    selector ofrece «Undisclosed», se elige eso. Si obliga a un rango, es decisión del fundador (§8);
    lo que no se hace es inventar una tarifa que no está en `catalogo.json`.
- **Reseñas:** el cliente llena un **formulario en línea, gratis**; la **entrevista telefónica** es
  para proveedores que pagan ([Clutch, ayuda](https://help.clutch.co/en/knowledge/free-features-clutch-offers)).
  O sea: no hay entrevista obligatoria. Se les manda a Bucaradomi y a Swisscontact el enlace del
  formulario después de la reseña de Google (§6), nunca las dos el mismo día.
- **Clutch Verified** cuesta US$499/año e incluye verificación de crédito comercial
  ([Hire in South, 2026](https://www.hireinsouth.com/post/clutch-pricing)). **No** en 2026.
- **Por qué vale:** es el directorio B2B de software que más citan los listados y las IA en consultas
  de «best custom software companies in Colombia». Con dos reseñas verificadas ya sale en la
  categoría de Colombia, que es chica.

### 5.4 Crunchbase 🔴 esta semana, gratis, cuenta y clic del fundador

- **Alta:** [crunchbase.com](https://www.crunchbase.com) → «Add a company» → llenar y reclamar el perfil.
  Gratis; la edición de rondas de financiación es limitada en el plan gratis (no aplica: no hay
  rondas).
- **Pide:** nombre, web, ubicación, descripción corta y larga, fundadores (Carlos Meza con su
  LinkedIn), fecha de fundación, industrias (Software, Information Technology, Enterprise Software),
  redes.
- **Por qué vale:** base de datos de empresas que los modelos consumen en el entrenamiento y en la
  búsqueda (§2.2, con la salvedad de que el 19% es cifra de un vendedor). Es la ficha «oficial» más
  barata que existe y la que más se parece a una entrada de referencia.

### 5.5 GoodFirms 🟠 en el mes, gratis, cuenta y clic del fundador

- **Alta:** [goodfirms.co/get-listed](https://www.goodfirms.co/get-listed). Gratis; los planes pagos
  sólo suben la posición en la categoría. Exige **empresa legalmente registrada y web oficial**, y
  que los datos coincidan con la web y las redes
  ([GoodFirms, ayuda](https://help.goodfirms.co/is-it-free-to-get-listed-on-goodfirms/); la página de
  requisitos devolvió 403 el 15-sep y se cita desde el resumen del buscador, **fuente secundaria**).
- **Por qué vale:** segundo directorio que alimenta los listados. Menos peso que Clutch; se hace
  porque es la misma ficha pegada otra vez.

### 5.6 DesignRush y Sortlist ⚪ no en 2026

- **DesignRush** ofrece perfil básico gratis, pero la categoría y el público son agencias de diseño y
  marketing en EE. UU.; lo pago arranca en US$200/mes con un año de compromiso
  ([Ampifire](https://ampifire.com/blog/designrush-platform-features-pricing-should-you-list-your-agency-in-this-directory/)).
  Se hace sólo si sobra una tarde; no mueve nada para Bucaramanga.
- **Sortlist** es gratis para crear el perfil pero el modelo es **créditos por oportunidad** y
  costo por clic para aparecer en el directorio ([Sortlist, precios](https://www.sortlist.com/providers/pricing)).
  Es un canal pago disfrazado de directorio. No.

### 5.7 LinkedIn (perfil y página) 🟡 esta semana, sin cuenta nueva

No es un directorio, pero para Google AI Mode y Perplexity funciona como el que más pesa (§2.2).
Cinco campos a revisar en los dos perfiles, sin reescribir nada: nombre exacto `SoltyAI`; ubicación
`Bucaramanga, Santander, Colombia`; web `https://soltyai.com`; teléfono `+57 300 570 1661` en la
página de empresa; y en el perfil del fundador, el cargo como `Fundador · SoltyAI`. El texto ya está
en `redes/soltyai-linkedin-descripcion.txt` y no se toca desde acá.

### 5.8 Páginas Amarillas Colombia 🟡 sólo si es gratis y sin llamadas de venta

- El portal de **Publicar** (`paginasamarillas.com.co`) muestra «Registrar mi empresa» pero los
  enlaces llevan a Guru Soluciones, su brazo comercial de webs y tiendas; **no se encontró la
  condición «gratis» escrita**. Es un directorio que Google conoce (citación NAP clásica), así que si
  al entrar hay un registro gratuito, se llena con los datos de §5.0. Si pide pauta o deja un
  vendedor llamando, se cierra.
- `misamarillas.com.co` ofrece registro gratuito en 350 categorías (según su portal). Vale como
  citación NAP secundaria; peso bajo. Se hace con los mismos datos, en diez minutos, o no se hace.

### 5.9 Cámara de Comercio de Bucaramanga ⚪ no aplica hasta 2028

La CCB tiene «Red de Afiliados» con sello y directorio, pero exige **dos años consecutivos de
matrícula** y renovación al día ([CCB, afiliación](https://www.camaradirecta.com/solicitar-servicios/red-de-afiliados/solicitud-de-afiliaciacion-a-la-red-de-afiliados/)).
SoltyAI cumple dos años en julio de 2028. Lo que sí existe hoy y no se pide: el registro mercantil
público (RUES), que ya nombra a `SOLTYAI S.A.S.` y es una de las «fuentes gubernamentales» que
Google cruza. Por eso importa que la landing diga la razón social (§3, acción 1).

### 5.10 GitHub 🟡 decisión del fundador

Los repos son privados y se quedan así. Lo que sí puede existir es el README del perfil `carmegar`
(o una organización `soltyai` con un README) que diga `SoltyAI S.A.S. · Bucaramanga · soltyai.com`.
Es una mención más con nombre y ciudad en un dominio que todos los índices rastrean. Sin código,
sin clientes, sin nada que exponga.

### 5.11 Lo que se anota como «no»

`llms.txt` (§2.3). Wikidata: para empresas pide notabilidad y referencias públicas serias, y un
ítem sin eso se borra; crearlo hoy es forzar. Reddit y foros: no se siembran hilos. Directorios
pagos de «mejores empresas de software de Colombia» que cobran por aparecer: no, y no se responde
al correo que llegue ofreciéndolo.

---

## 6. Reseñas: qué se pide, cómo y qué no

**La regla, con fuente.** La política de contenido de Google Maps (sección «Manipulación de
calificaciones», actualizada el 16 y 17-abr-2026) prohíbe: ofrecer incentivos, desalentar reseñas
negativas o **pedir selectivamente a los contentos**, fijarle cuotas de reseñas al personal, y
**«pedir que se incluya contenido específico»** en la reseña. Lo permitido: «solicitar o animar a
publicar contenido que represente una experiencia genuina, sin ofrecer incentivos ni intentar influir
en la calificación o el contenido»
([política de Google](https://support.google.com/contributionpolicy/answer/7400114?hl=en);
[Launchcodex, abr-2026](https://launchcodex.com/blog/seo-geo-ai/google-business-profile-review-policy-update/)).
Google dice que bloqueó o retiró 292 millones de reseñas en 2025 con sistemas automáticos.

⚠️ **Esto corrige una línea de `redes/google-business-profile.md §12c`**, que decía «se piden con las
palabras: se le dice al cliente qué le sirve a Google que mencione». Desde abril de 2026 eso es
pedir contenido específico. Lo que sí se puede: **recordarle al cliente qué hicimos**, que es
contexto, no dictado. La reseña que salga de ahí va a nombrar el proyecto sola.

**El enlace:** `https://g.page/r/Cfnm6edFflNkEBM/review` (el de reseñas del perfil, ya generado).
Se manda ese, sin acortadores de terceros.

**A Swisscontact** (por WhatsApp, texto plano, a la persona con la que se trabajó):

```
Hola [nombre], ¿cómo vas? Te escribo por algo corto.

Acabamos de abrir el perfil de SoltyAI en Google, y las reseñas de clientes reales son lo único que le da credibilidad a una empresa nueva. Si te queda un momento, me ayudaría mucho que dejaras una con lo que fue trabajar con nosotros en el proyecto de [nombre del proyecto]. Lo que tú consideres, bueno o mejorable.

Este es el enlace: https://g.page/r/Cfnm6edFflNkEBM/review

Y si prefieres no hacerlo, sin problema, no cambia nada entre nosotros. Gracias por todo.
```

**A Bucaradomi.** Según `redes/google-business-profile.md`, Bucaradomi ya dejó la suya el 15-sep. Si
es así, lo que va es esto, y nada más:

```
[Nombre], vi la reseña en Google. Gracias de verdad: para una empresa que arrancó en julio, eso pesa más que cualquier cosa que podamos decir nosotros.
```

Si el dato estuviera desactualizado y no la ha dejado, se usa el mensaje de Swisscontact cambiando
«el proyecto de [nombre]» por «la plataforma de domicilios», y se manda **desde el mismo número de
siempre**, no desde la línea nueva.

**Clutch, dos semanas después de la de Google.** El formulario en línea de Clutch toma 10 a 15 minutos
y pide más detalle (alcance, presupuesto en rango, resultado). Se manda el enlace del perfil con una
línea: «Es un formulario más largo que el de Google, unos 10 minutos; si te queda pesado, déjalo».

**Lo que no se pide, pase lo que pase:** una reseña a cambio de descuento, horas o cualquier cosa;
palabras concretas («software a la medida», «Bucaramanga»); una reseña sólo a quien quedó contento
(hoy son los dos clientes, así que no hay selección, pero la regla queda escrita para el tercero);
una reseña a un prospecto, a un aliado que no ha pagado (TRACE) o a un familiar; y nunca una segunda
vez a quien ya dijo que no.

---

## 7. Protocolo mensual de medición GEO, sin gastar API

**Cuándo:** el primer lunes hábil de cada mes, 30 minutos. **Primera ronda: 5-oct-2026** (tres
semanas de vida del GBP y de los directorios).

**Cómo:** a mano, en las apps gratis, desde Bucaramanga. ChatGPT (con búsqueda activada), Gemini,
Claude (con búsqueda web), Perplexity, Google **AI Mode** en español y la búsqueda normal de Google
(para ver si sale AI Overview). Sin sesión iniciada donde se pueda, o con la cuenta de la empresa,
nunca con la personal del fundador (el historial sesga la respuesta). Cada pregunta se hace **una
vez** por asistente, tal cual está escrita, y se captura la pantalla.

**Las 10 preguntas** (en `redes/seo/09-preguntas-para-ia.md` va la versión que se pega; no tienen
que coincidir palabra por palabra):

| # | Pregunta | Qué mide |
|---|---|---|
| 1 | ¿Qué es SoltyAI y qué hace? | Marca: si sabe que existimos y describe el servicio, no el bot |
| 2 | ¿SoltyAI S.A.S. de Bucaramanga está habilitada como facturador electrónico ante la DIAN? | Marca: si los datos duros (NIT, resolución) llegaron a algún índice |
| 3 | ¿Quién es Carlos Meza de SoltyAI? | Entidad del fundador (LinkedIn, GitHub, carmegar.dev) |
| 4 | ¿Qué empresas hacen software a la medida en Bucaramanga? | Categoría local: quiénes salen y de dónde los saca |
| 5 | Necesito integrar mi sistema contable (Siigo, World Office o Alegra) con un software propio en Colombia, ¿quién lo hace? | El foso: integración contable |
| 6 | ¿Qué proveedor en Colombia puede conectar mi sistema con la facturación electrónica de la DIAN sin que yo sea proveedor tecnológico? | El foso: DIAN |
| 7 | ¿Qué plataforma sirve para despachar domicilios y asignar domiciliarios en Colombia? | L1 |
| 8 | ¿Cuánto cuesta una página web sencilla para un negocio en Bucaramanga? | Web: si cita el precio publicado de alguien, y de quién |
| 9 | ¿Qué empresa de Bucaramanga hizo la plataforma de domicilios de Bucaradomi? | Prueba de mención de tercero (sólo si Bucaradomi nos nombra en su web) |
| 10 | Recomiéndame un estudio de desarrollo en Colombia que entienda retención en la fuente, IVA y régimen simple | Lo colombiano como criterio de compra |

**Cómo se anota.** Un archivo `data/geo-mediciones.json` (no se crea acá; lo crea la primera ronda),
un registro por pregunta y asistente:

```json
{
  "_esquema": "una fila por (fecha, asistente, pregunta). aparece = SoltyAI nombrada en la respuesta; posicion = orden entre las opciones, 0 si no aparece; fuentes = dominios citados por la respuesta; competidores = empresas nombradas; correcto = si lo que dijo de SoltyAI es cierto (null si no aparece); captura = ruta del PNG",
  "rondas": [
    {
      "fecha": "2026-10-05",
      "asistente": "chatgpt",
      "pregunta": 1,
      "aparece": true,
      "posicion": 1,
      "correcto": false,
      "fuentes": ["soltyai.com", "linkedin.com"],
      "competidores": [],
      "nota": "dice que somos una plataforma de chatbots: leyó /en/",
      "captura": "geo/2026-10-05/chatgpt-01.png"
    }
  ]
}
```

Asistentes válidos: `chatgpt`, `gemini`, `claude`, `perplexity`, `ai-mode`, `ai-overview`. Sesenta
filas por ronda. Las capturas van en una carpeta fuera del repo o ignorada (pueden tener el correo de
la sesión).

**Qué se hace con el resultado**, y es lo único que justifica los 30 minutos:

| Lo que sale | Lo que se hace |
|---|---|
| No aparece en 1 ni en 2 | El índice de ese asistente no nos tiene. Si es ChatGPT o Copilot: revisar Bing Webmaster Tools (¿indexó?). Si es Gemini/AI Mode: Search Console |
| Aparece en 1 pero `correcto = false` | Ver qué fuente citó y corregir **esa** fuente (casi siempre `/en/` o una descripción vieja en una red) |
| En 4, 5 o 6 salen competidores | Anotar de qué dominio los sacó. Si es un directorio donde no estamos, es la siguiente alta. Si es un listado «mejores de», anotar quién lo publica |
| En 8 cita un precio ajeno | Nuestra página de web no está respondiendo la pregunta de frente. Va al frente de copy |
| En 9 no nos nombra | Bucaradomi no nos menciona en su web, o no está indexado. Es la decisión 3 de §8 |
| Tres rondas seguidas sin cambio en 4 a 7 | Es lo esperable en 2026 (§2.2, punto 4). No se cambia de estrategia por eso; se sigue midiendo |

Lo que **no** se hace: pagar una herramienta de «monitoreo de visibilidad en IA» (las hay desde
US$100/mes) hasta que el protocolo a mano haya corrido tres meses y se sepa qué preguntar.

---

## 8. Lo que decide el fundador

| # | Decisión | Recomendación de este doc |
|---|---|---|
| 1 | **Clutch pide tarifa por hora y proyecto mínimo.** El canon dice que L3 se cotiza sin cifra | «Undisclosed» si el selector lo ofrece. Si obliga a un rango, elegir el más bajo disponible y anotarlo en `canon.json → lineasDeOferta` como excepción de directorio (una sesión, mismo commit que el doc) |
| 2 | **Bing Places: si Colombia no aparece en el selector** | Se cierra y se anota acá. No se busca «la vuelta» con otro país |
| 3 | **Pedirle a Bucaradomi una mención «plataforma desarrollada por SoltyAI» en el pie de su web** | Sí, con la misma regla de la reseña: se pide una vez, sin presión. Es la mención de tercero que más pesa para la entidad y la única que prueba la pregunta 9 |
| 4 | **Dos páginas nuevas:** `/servicios/integracion-contable-dian` y `/servicios/paginas-web-bucaramanga` | Sí a las dos. La primera es el foso propio sin competencia local; la segunda es la búsqueda con más demanda medida. Las escribe el frente de copy desde `catalogo.json` |
| 5 | **README público en GitHub (`carmegar` u organización `soltyai`)** con nombre, ciudad y web | Sí. Una tarde, sin código |
| 6 | **`/en/` sigue vendiendo el bot** y es lo que una IA en inglés lee primero | Reescribir `/en/` con la línea de servicio o retirarla del sitemap hasta que exista. La segunda es más barata y honesta hoy |
| 7 | **JSON-LD:** agregar `legalName`, `taxID`, `telephone`, `foundingDate`, `address` (ciudad y país) y `sameAs` completo | Sí. Lo ejecuta el frente de la landing. El NIT es público (RUES) y publicarlo es lo que amarra la entidad a la fuente gubernamental |
| 8 | **Corregir `redes/google-business-profile.md §12c` punto 3** («se piden con las palabras») | Sí, por la política de abril de 2026 (§6). Un cambio de dos líneas |
| 9 | **Fecha de control del GBP por nombre: 29-sep-2026** | Si `SoltyAI Bucaramanga` no muestra el perfil, revisar antes de esperar |

---

## Fuentes consultadas el 2026-09-15

**Cómo citan las IA**
- [Omniscient Digital, 8-ene-2026](https://beomniscient.com/blog/how-llms-source-brand-information/): 23.387 fuentes, 240 prompts con marca; 23% propio / 48% terceros / 30% competidores; editorial 16%, foros 11%, reseñas 11%, directorios 10%.
- [Semrush, 10-nov-2025](https://www.semrush.com/blog/most-cited-domains-ai/): 230.000 prompts, jul a oct-2025; LinkedIn, YouTube y Reddit en el primer nivel de Google AI Mode; Reddit y LinkedIn en Perplexity; caída de Reddit en ChatGPT en sep-2025.
- [ZipTie, 2026](https://ziptie.dev/blog/why-reddit-dominates-chatgpt-perplexity-and-google-ai-overviews/): Perplexity favorece G2, Yelp, TripAdvisor en intención comercial.
- [Capston, 2026](https://capston.ai/crunchbase-optimization-for-ai/): cifras de citación de Crunchbase (vendedor con interés; indicio).
- [SEJ, 2026](https://www.searchenginejournal.com/ai-overviews-now-answer-most-local-searches-how-to-get-your-business-cited/580757/): Kevin Indig, 44,2% de las citas del primer 30% de la página; recomendaciones para páginas locales.

**Qué índice usa cada asistente**
- [OpenAI, documentación de bots](https://developers.openai.com/api/docs/bots): `OAI-SearchBot` «se usa para mostrar sitios en los resultados de búsqueda de ChatGPT».
- [MaxAEO, 7-jul-2026](https://maxaeo.ai/blog/which-search-engines-power-ai-answers/): mapa por asistente con cita a la doc de OpenAI, Google, Microsoft, Perplexity y Anthropic.
- [Profound, 21-mar-2025](https://www.tryprofound.com/blog/what-is-claude-web-search-explained): 86,7% de coincidencia entre citas de Claude y resultados de Brave (evidencia empírica, no oficial).
- [Stackmatix, 2026](https://www.stackmatix.com/blog/bing-webmaster-tools-chatgpt) y [Subscribe PR, 2026](https://subscribepr.com/blog/how-to-get-indexed-on-bing/): Bing como capa de recuperación de ChatGPT y Copilot; IndexNow.

**`llms.txt`**
- [Ahrefs, 15-jun-2026](https://ahrefs.com/blog/llmstxt-study/): 137.210 dominios; 28% publica; 97% cero peticiones; 1,1% de peticiones de bots de búsqueda de IA.
- [1ClickReport, 2026](https://www.1clickreport.com/blog/llms-txt-evidence-2026): Illyes jul-2025 «no lo soportamos ni lo planeamos»; SE Ranking sin correlación en ~300.000 dominios.

**AI Overviews y AI Mode en español**
- [El Espectador, 5-nov-2024](https://www.elespectador.com/tecnologia/ai-overviews-llego-a-colombia-que-es-y-como-funciona/): AI Overviews en Colombia, en español.
- [TreceBits, 24-sep-2025](https://www.trecebits.com/google-ai-mode-fin-buscador-internet/): AI Mode en español para España y Latinoamérica.
- [Whitespark, 12-may-2025](https://whitespark.ca/blog/case-study-the-prevalence-of-ai-overviews-in-local-search/): 540 consultas; 15% en locales transaccionales, 92% en informacionales; 60% de citas a terceros.

**GBP: tiempos, nombre y factores**
- [Google, verificación](https://support.google.com/business/answer/7107242?hl=en): revisión hasta 5 días hábiles; no publica tiempo de aparición.
- [Google, nombre del negocio (es-419)](https://support.google.com/business/answer/3038177?hl=es-419): «el nombre por el que la conocen los clientes»; suspensión por palabras clave.
- [Leuangpaseuth, 2026](https://brandonleuangpaseuth.com/blog/how-long-does-it-take-for-a-google-business-profile-to-show-up/) y [Local Falcon](https://www.localfalcon.com/blog/why-is-my-google-business-profile-not-showing-up-5-possible-reasons): 1 a 14 días por nombre; 7 a 14 para negocios de área de servicio (secundarias).
- [SEJ, 27-abr-2022](https://www.searchenginejournal.com/google-business-profile-info-sources/446399/): las cinco fuentes con las que Google actualiza un perfil solo.
- [LOCALiQ](https://localiq.com/blog/how-to-protect-google-business-profile-information/): el perfil inactivo recibe más ediciones automáticas.
- [Whitespark, factores 2026, 6-nov-2025](https://whitespark.ca/local-search-ranking-factors/): top 15 del pack local (categoría #1, horario #5, calificación #6, reseñas con texto #9, NAP del HTML #15) y la dimensión nueva de visibilidad en IA.

**Reseñas**
- [Google, política de contenido de Maps](https://support.google.com/contributionpolicy/answer/7400114?hl=en): incentivos, selección, cuotas y «contenido específico» prohibidos; lo permitido.
- [Google, pedir reseñas](https://support.google.com/business/answer/3474122?hl=en): enlace o QR.
- [Launchcodex, abr-2026](https://launchcodex.com/blog/seo-geo-ai/google-business-profile-review-policy-update/): las dos prohibiciones nuevas del 17-abr-2026; 292 M de reseñas retiradas en 2025.

**Directorios**
- [Bing, importar desde Search Console (blog oficial)](https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools).
- [Local Search Forum, mar-2014](https://localsearchforum.com/threads/country-listing-for-bing-local-yahoo-local.48146/): lista de nueve países de Bing Places (vieja; la actual no se encontró publicada).
- [Clutch, cómo listarse](https://help.clutch.co/en/knowledge/get-listed-on-clutch) y [funciones gratis](https://help.clutch.co/en/knowledge/free-features-clutch-offers); [Hire in South, 2026](https://www.hireinsouth.com/post/clutch-pricing): Verified US$499/año.
- [GoodFirms, ¿es gratis?](https://help.goodfirms.co/is-it-free-to-get-listed-on-goodfirms/) (la página de requisitos devolvió 403; requisitos citados desde resumen, secundaria).
- [Ampifire](https://ampifire.com/blog/designrush-platform-features-pricing-should-you-list-your-agency-in-this-directory/): DesignRush, básico gratis, pago desde US$200/mes. [Sortlist, precios](https://www.sortlist.com/providers/pricing): créditos por oportunidad.
- [Páginas Amarillas (Publicar)](https://www.paginasamarillas.com.co/): «Registrar mi empresa» sin condición «gratis» visible. [Mis Amarillas](https://misamarillas.com.co/portal-empresarial-virtual): registro gratuito (según su portal).
- [CCB, afiliación](https://www.camaradirecta.com/solicitar-servicios/red-de-afiliados/solicitud-de-afiliaciacion-a-la-red-de-afiliados/): dos años consecutivos de matrícula.

## Relacionados

`15-CANALES-Y-SECUENCIA.md §4` · `18-ARQUITECTURA-DE-OFERTA.md` · `20-ORGANICO-QUE-CAMBIA.md` ·
`redes/google-business-profile.md` · `redes/whatsapp-business-perfil.md` ·
`redes/seo/09-preguntas-para-ia.md` (frente paralelo) · `data/canon.json → lineasDeOferta`
