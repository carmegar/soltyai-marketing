# 14 · Swipe file — anuncios reales del feed

> Archivo **append-only**: cada entrada es un anuncio visto en vivo (Facebook/Instagram/otro) que
> cae sobre nuestro mismo público o usa una mecánica que nos sirve. **Lo nuevo va arriba.**
>
> Para qué: `03-competitor-analysis.md` §6 admite un hueco — la ronda 1 no revisó creatividades
> vivas, solo copy de sitio y rankings. Esto lo va tapando anuncio por anuncio, con evidencia real
> en vez de suposición.
>
> **Regla de entrada:** solo anuncios que **vimos correr** (captura obligatoria en `swipe/`).
> No se inventan métricas: si no vemos spend/resultados, no se estiman. La única señal que
> registramos es la que aparece en pantalla (reacciones, comentarios, fecha).
>
> **Regla de uso:** de cada entrada sale, como máximo, **una mecánica** para probar. Un anuncio en
> este archivo NO es un competidor: si compite de verdad con nosotros, va a la tabla del `03`.

---

## Plantilla

```
## AAAA-MM-DD · <Anunciante> — <categoría> · [competidor directo / adyacente / otro sector]
**Capturas:** `swipe/AAAA-MM-DD-<slug>-*.png` · **Destino:** <URL o dominio> · **Señal visible:** <reacciones/comentarios>
**Oferta:** <la promesa en una línea>
**Qué robar:** <1–2 mecánicas concretas>
**Qué evitar:** <los errores, para no repetirlos>
**Acción:** <ángulo/prueba que genera, o "ninguna">
```

---

## 2026-09-16 · Ventiva · Mentora · Kondory — reclamos de sitio, no anuncios · **competidor directo** (los tres están en `03` §2, §3)

> ⚠️ **Entrada distinta a las demás, y se dice de frente:** no son anuncios vistos correr, son
> **afirmaciones publicadas en el sitio** de tres competidores que aparecen en la tabla del `03`
> (refresco del 16-sep-2026). La captura es de la página, no del feed (pantallazo con Edge headless
> a 1280 px, el 16-sep-2026), y al lado va el **texto extraído del HTML** con la URL y la fecha
> (`swipe/2026-09-16-*-reclamo.txt`) porque en Mentora la cifra está debajo del pliegue. Entra acá
> porque es la munición exacta de `metricaSinFuente`: son los tres números que un prospecto nos va
> a poner enfrente.

**Capturas:** `swipe/2026-09-16-ventiva-roi-reclamo.jpg` · `swipe/2026-09-16-mentora-metricas-reclamo.jpg` · `swipe/2026-09-16-kondory-proyectos-reclamo.jpg` (y la transcripción en `.txt` con el mismo nombre)
**Destino:** ventivaia.com/cuanto-cuesta-chatbot-whatsapp-colombia · mentoracolombia.com/automatizacion-facturacion-electronica · kondory.com/about-us · **Señal visible:** ninguna (no es un anuncio)
**Oferta (lo que afirman, textual):**
- Ventiva (Cali, agente IA de WhatsApp): *«876% ROI promedio en negocios colombianos primer mes»* y
  *«ROI promedio mes 1: +500% a 900%»* al lado de su tabla de precios. Sin fuente, sin muestra, sin
  fecha de medición.
- Mentora (nacional, integración DIAN): *«−85%»* de horas digitando en su calculadora, y *«empresas
  con 200+ facturas/mes suelen recuperar la inversión en 3-6 meses»*. Sin fuente.
- Kondory (Bucaramanga, estudio): *«Más de 150 proyectos desarrollados para empresas en toda
  Colombia»*. Sin lista, sin nombres, sin fecha.

**Qué robar**
- **Nada del número.** Lo que sí: los tres ponen la cifra **al lado del precio**, o sea que saben
  que el comprador compara costo contra resultado en la misma pantalla. Nuestra versión honesta de
  eso ya existe y es publicable: el costo por camino (`19 §3.3.6`), las horas del banco de dolores
  como supuesto del espectador, y «todavía no lo hemos medido» dicho de frente.

**Qué evitar**
- 🔴 Los tres son exactamente lo que `metricaSinFuente` y `pruebaSocialInventada` cazan en nuestro
  copy. No se copian ni «para responder». Si un prospecto los cita, la respuesta es la de
  `05-PRICING.md` §10: pedir la fuente y mostrar el hecho con testigo (contrato, factura, sistema
  en producción).

**Acción:** ninguna pieza nueva. Sirve como objeción preparada («X promete 800% de ROI») y como
prueba de que el guardrail apunta a lo que el mercado de verdad publica.

---

## 2026-07-25 · SyroxTech — desarrollo de software a medida · **otro sector** (no competidor)

**Capturas:** `swipe/2026-07-25-syroxtech-copy.png` · `...-creativo.png` · `...-link.png`
**Destino:** `web.syroxtech.com` · **Señal visible:** 4 reacciones, 0 comentarios
**Oferta:** *"Desarrollamos tu software a medida para tu fábrica en 40 días o no pagas"* — arranque
"con únicamente una parte del presupuesto total".

**Por qué no es competidor:** vende **proyecto de desarrollo a la medida** (ticket alto, ciclo largo,
entrega única). Nosotros vendemos **suscripción con producto ya construido**. Otro comprador, otra
objeción. No va a la tabla del `03`.

**Qué robar**
- **Bullets de dolor con ❌ antes de vender nada.** Cinco objeciones reales del comprador PYME
  ("cotizaciones malas", "te ofrecen genérico", "malas experiencias con proveedores") antes de
  nombrar la empresa. Es el mismo dolor que enfrenta nuestro ángulo A (done-for-you) y hoy nuestro
  copy entra vendiendo, no doliendo.
- **Garantía con plazo como titular**, no como letra chica. Es el elemento que sostiene toda la pieza.
- **Creatividad de alto contraste con texto gigante:** legible en el feed a tamaño de pulgar. La
  ilustración es IA genérica y aun así funciona porque el texto manda. Nuestros briefs de imagen
  (`07-CAMPAIGN-BRIEF.md`) apuntan a algo más limpio — vale probar una variante "gritada".
- **Un creativo por vertical** (aquí: fábrica). La intención es correcta; la arruinan en el copy.

**Qué evitar**
- 🔴 **Creatividad dice "40 DÍAS", el link dice "90 DÍAS".** Contradicción en la misma pantalla.
  Mata la credibilidad de la garantía que es su único gancho. → **Revisar SIEMPRE que el titular del
  link coincida con el número de la imagen** antes de publicar.
- 🔴 **Bullet duplicado literal** ("malas experiencias con anteriores proveedores" dos veces).
  Copy sin releer.
- 🔴 **Visual de nicho + copy de todo** ("logística, salud, finanzas, múltiples plataformas"). El
  nicho de la imagen se anula en el primer párrafo. Si el creativo es de una vertical, **el copy es
  de esa vertical**.
- 🔴 **"+100 proyectos exitosos" sin un solo nombre, logo ni caso.** Prueba social no verificable =
  ruido. Aplica a nosotros: hoy solo podemos nombrar a Bucaradomi, y con permiso.
- 🔴 **Garantía que no se puede honrar.** "Software a medida en 40 días o gratis" es incobrable para
  ellos: si la cumplen, quiebran; si no, es publicidad engañosa. La garantía solo sirve si el plazo
  es real.
- 🟡 **"Con únicamente una parte del presupuesto total"** — ambiguo (¿anticipo? ¿financiación?).
  Ante la ambigüedad de precio el prospecto asume lo peor.

**Acción:** genera el **ángulo G — garantía con plazo** en `03-competitor-analysis.md` §5
(*"tu bot atendiendo en 7 días o no pagas"*). A diferencia de ellos **sí lo podemos cumplir**: el
producto ya está construido y el setup es de días, no de meses. Antes de usarlo hay que fijar qué
significa exactamente "atendiendo" y qué se devuelve (setup) — si no, repetimos su error.
