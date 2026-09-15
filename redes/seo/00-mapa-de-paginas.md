# Mapa de páginas SEO: qué busca un empresario colombiano y con qué página lo recibimos

> **Escrito el 2026-09-15.** Es el índice de la carpeta `redes/seo/`: cada fila es una página
> propuesta para la landing, con la búsqueda que ataca, el porqué y lo que hoy la cubre a medias.
> El copy de cada página está en su archivo (`01` a `09`). Otro agente cablea la landing en
> `platform/`; esta carpeta no toca ese repo.
>
> **La línea de todas es el servicio a la medida.** `data/canon.json → mensajeLiderPorCanal`
> pone `landing` en la lista de `servicio` desde el 8-sep-2026. Ninguna de estas páginas nombra la
> línea L2: los planes de suscripción viven en su propia página y mezclarlos acá es el error 🔴
> `canal:mezcla-de-lineas` que el guardrail bloquea. Cada bloque publicable va marcado con
> `<!-- canal: landing -->` para que el linter lo juzgue.
>
> **Sobre los volúmenes de búsqueda: no hay ninguno, y es a propósito.** No tenemos Search
> Console con datos ni herramienta de palabras clave, así que cualquier número sería inventado.
> Lo único observado es lo que Google mostró desde Bucaramanga el 2026-09-15
> (`redes/google-business-profile.md` §12c), y se cita con esa fecha. Todo lo demás va marcado
> **supuesto**.

<!-- canal: landing -->

## 1. Las páginas

| # | Archivo | URL sugerida | Intención de búsqueda (como la escribe el empresario) | Por qué esa y no otra | Qué la cubre hoy, a medias |
|---|---|---|---|---|---|
| 01 | `01-software-a-la-medida.md` | `/servicios/software-a-la-medida` (o el cuerpo de `/servicios`, ver §2) | «software a la medida bucaramanga» · «desarrollo de software a la medida colombia» · «empresa de desarrollo de software bucaramanga» · «quién me hace un software para mi empresa» | Es la frase con la que la gente nombra la línea que hoy factura. Y en Bucaramanga «software a la medida» devuelve empresas, mientras «desarrollo de software bucaramanga» mezcla ofertas de empleo y universidades (observado el 2026-09-15, GBP §12c). Es la cabecera de la línea: las otras cuatro cuelgan de ella. | `/servicios` (índice): su título ya es «Desarrollo de software a la medida en Bucaramanga». Cubre el titular, pero no responde precio, proceso ni «para quién no» con las palabras de la búsqueda. |
| 02 | `02-integracion-contable-dian.md` | `/servicios/integracion-contable-facturacion-electronica` | «integrar siigo con mi aplicación» · «integración world office api» · «conectar alegra con mi sistema» · «facturación electrónica dian integración software» · «quién integra helisa» | Es donde vive el foso propio: lo colombiano. Y es la búsqueda con intención de compra más clara: quien la escribe ya pagó un sistema y tiene un dolor con nombre. La habilitación de SoltyAI ante la DIAN es un hecho verificable que casi ningún competidor pequeño puede escribir. | `/servicios/automatizacion-atencion-cliente` dice «Integración con su ERP o sistema legacy», pero su título es de la línea L2 y no nombra un solo sistema contable. La home lo dice bien en `QueHacemos` (bloques 3 y 4), en dos párrafos. |
| 03 | `03-automatizacion-de-procesos.md` | `/servicios/automatizacion-de-procesos` | «automatizar procesos de mi empresa» · «automatizar pedidos y despachos» · «conciliación bancaria automática colombia» · «automatizar reportes de excel» · «software para dejar de digitar» | Es el dolor dicho por el cliente: lo que hoy se hace a mano. Ojo con una cosa: en Google local, «automatización» significa fábrica (PLC, domótica: observado el 2026-09-15, GBP §12c). Esta página es para Search, no para el perfil, y el H1 nombra el trabajo manual antes que la palabra técnica. | `/servicios/inteligencia-operativa-ia`: lleva la IA en el título (que no es el argumento) y promete «Desde 1 mes», que es un plazo que no publicamos. |
| 04 | `04-paginas-web-bucaramanga.md` | `/servicios/paginas-web-bucaramanga` | «diseño de páginas web bucaramanga» · «página web para mi negocio bucaramanga precio» · «cuánto cuesta una página web en colombia» · «hacer página web empresa bucaramanga» | Es la demanda local más clara y la más competida: 10 agencias en orgánico y un perfil con 68 reseñas (observado el 2026-09-15, GBP §12c). Competimos con lo que casi nadie publica: precio a la vista y alcance escrito, con el escalón de $400.000 que abre la línea. | `/servicios/desarrollo-web`: promete «Hosting y dominio por 1 año» y «Desde 1 semana», que no están en el catálogo y no se pueden prometer. No publica ningún precio. |
| 05 | `05-software-empresas-de-domicilios.md` | `/para/empresas-de-domicilios` | «software para empresa de domicilios» · «app para domiciliarios colombia» · «sistema de despacho de domicilios» · «plataforma para mensajería urbana bucaramanga» | Es la línea L1, la del único cliente pagando. La página de producto ya existe; esta es la página de intención: recibe la búsqueda con las palabras del que busca, explica el problema y manda al producto y a `/contacto`. | `/producto/domicilios-ops` (producto, muy completa). Le falta la capa de búsqueda: nadie escribe «domicilios-ops». |
| 06 | `06-comparativa-meta-business-agent.md` | `/para/whatsapp-business/agente-de-meta-o-desarrollo-a-la-medida` (fuera de los tres prefijos también sirve `/guias/…`; decide quien cablea) | «agente de meta whatsapp business qué hace» · «meta business agent colombia» · «whatsapp business ia gratis sirve para mi negocio» · «agente de whatsapp o desarrollo propio» | Es la pregunta que se va a hacer todo el que vea el agente de Meta ofrecido en su celular. Contestarla con honestidad posiciona a SoltyAI donde el agente no llega: la operación, la contabilidad y la DIAN. Y es el artículo que un modelo de IA cita cuando le preguntan por la diferencia. | Nada. La landing no lo nombra. |
| 07 | `07-caso-bucaradomi.md` | `/casos/bucaradomi` | «software para domicilios bucaramanga caso» · «bucaradomi» · «empresa de domicilios bucaramanga plataforma» | Prueba social con testigo: contrato, factura, sistema en producción. Sin cifras, porque no se han medido. | Home `#casos` (tarjeta) y `/producto/domicilios-ops` (sección «Quién lo está usando hoy»). |
| 08 | `08-caso-swisscontact.md` | `/casos/swisscontact-zaranda` | «desarrollo de software para ONG colombia» · «sistema de certificados de aprovechamiento recicladores» · «módulo web para fundación» | Es el caso de la línea L3 con entrega aprobada y factura electrónica. Y muestra un cliente distinto (cooperación internacional), que ensancha el «para quién». | Home `#casos` (tarjeta). |
| 09 | `09-preguntas-para-ia.md` | alimenta `/empresa` y `llms.txt` (sin URL propia) | Las 10 preguntas que un empresario le hace a ChatGPT, Claude o Gemini | Los modelos citan lo que encuentran escrito como respuesta directa. Este archivo es la respuesta que queremos que den. | `/empresa` no existe hoy en la landing. 🟠 Confirmar con quien cablea si se crea o si el bloque va a la home. |

<!-- /canal -->

## 2. Lo que hoy contradice a estas páginas en la landing

No se tocó nada de `platform/`. Se anota para quien cablea:

1. **Tres de los cuatro servicios de `services.ts` publican un plazo** («Desde 2 semanas», «Desde 1
   semana», «Desde 1 mes»). Ningún plazo de entrega se publica: no se han medido y el alcance sale
   del diagnóstico. Las páginas nuevas no llevan ninguno.
2. **`/servicios/desarrollo-web` promete «Hosting y dominio por 1 año».** No está en el catálogo.
   Lo que sí está es `web-cuidada` ($180.000 más IVA al mes), y es lo que la página 04 publica.
3. **`/servicios/automatizacion-atencion-cliente` lleva la línea L2 en el título** dentro de un
   canal que desde el 8-sep lleva servicio. Es la misma tensión que el doc 18 §4 dejó declarada
   para `/producto/chatbot`, con una diferencia: aquella página es la casa de L2 a propósito; esta
   es una página de servicios que abre con la otra línea. La página 02 la reemplaza sin nombrarla.
4. **`/servicios` (índice) puede absorber la página 01** en vez de tener una hija con el mismo
   titular. Dos páginas con el mismo H1 se canibalizan. Recomendación: el cuerpo de `01` va en
   `/servicios`, y las páginas 02, 03 y 04 cuelgan de ahí.
5. **`/empresa` no existe.** El bloque de `09` necesita una casa: o esa página o la home.

## 3. Las reglas que se aplicaron a las nueve

- **Forma del precio, del canon (`lineasDeOferta.reglaDePublicacion`):** precio público lo que
  tiene alcance cerrado (web básica $400.000, sitio corporativo $1.500.000, rescate $750.000,
  cuidado $180.000/mes, diagnóstico $600.000, soporte $490.000/mes); «se cotiza» con su base de
  cobro lo que se negocia (a la medida: «tú pones el presupuesto y acomodamos el alcance, mitad al
  inicio y mitad contra entrega»; domicilios: «por domiciliario activo, se cotiza por empresa»).
  Ninguna cifra fuera de `data/catalogo.json`. Todos antes de IVA.
- **Prueba social:** Bucaradomi y Swisscontact, con hechos que tienen testigo. Cero cifras de
  resultado, cero citas firmadas, cero plazos.
- **Un mensaje por pieza.** Todas llevan servicio. La comparativa (06) habla del agente de Meta
  como lo que es, un agente, y no nombra la línea L2 de SoltyAI: si quien cablea quiere enlazar
  `/producto/chatbot` desde ahí, lo hace en la landing y sabiendo que en este repo saldría 🟡.
- **Español de Colombia, tuteo, sin rayas largas.** Guía: `business/13` Parte A.
- **Una sola llamada a la acción por página, a `/contacto`.**

## 4. Lo que decide el usuario

| # | Qué | Recomendación |
|---|---|---|
| 1 | 🟠 ¿`01` reemplaza el cuerpo de `/servicios` o es hija? | Reemplaza (ver §2.4). |
| 2 | 🟠 ¿Se crea `/empresa` para el bloque de `09`? | Sí, es la página que un modelo de IA lee primero. |
| 3 | 🟠 La URL de `06` cae fuera de `/servicios`, `/para` y `/casos`. | `/para/whatsapp-business/…` cabe en `/para`; si no, `/guias/`. |
| 4 | 🟠 Los sistemas contables que se nombran en `02` (Siigo, World Office, Alegra, Helisa). | Se nombran como sistemas con los que se puede trabajar, no como integraciones entregadas. Ver el control de `02`. |
