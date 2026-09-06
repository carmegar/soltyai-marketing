# 18 · ARQUITECTURA DE OFERTA — qué vendemos, en qué orden, y de qué manera se vende cada cosa

> **Decidido el 2026-08-22.** Nace de una pregunta del fundador: *«habíamos dicho que no iba a haber
> pricing para productos porque todo es bajo cotización y por propuesta, ¿piensas que no debe ser
> así?»*, con el encargo explícito de investigar en internet qué hacen otros y cómo consiguen
> resultados.
>
> La respuesta corta a la pregunta literal está en §1 y es *«esa decisión la tomaste vos el 3-ago y
> está bien»*. La respuesta larga es que **la pregunta estaba apuntando al problema equivocado**, y
> el problema real —que sí es grave— es el §2.
>
> Este doc **no cambia ningún precio**. Cambia **qué se publica, en qué orden, y con qué historia**.
> Los precios siguen mandándose desde la D1 (`data/canon.json` + `data/catalogo.json`).

---

## 1. Lo del pricing: la decisión ya estaba tomada, y era la correcta

`business/24-coherencia-producto-empresa.md:131`, decisión **D7** del 2026-08-03:

> «La landing publica los 3 planes, generados desde el canon. **Decisión del usuario. El precio deja
> de ser "por cotización"**: filtra curiosos y acorta el ciclo. Al generarse del canon, no puede
> divergir en silencio.»

Verificado el 22-ago contra el sitio vivo:

| Página | Publica precio |
|---|---|
| `soltyai.com` y `/precios` | ✅ $290.000 / $490.000 / $790.000 + setup $400.000 |
| `/servicios` | ❌ ninguno |

O sea: **hoy ya es híbrido** —producto con precio público, servicio por cotización— y eso coincide con
lo que recomienda la evidencia externa (§3). La memoria de «todo bajo cotización» corresponde al
estado **anterior** al 3-ago. No hay que revertir nada.

> **Lo que sí hay que corregir de D7 no es su decisión sino su alcance:** D7 hizo público el precio de
> la línea que **no ha vendido**, y dejó sin precio la línea que **sí factura**. Ver §5.

---

## 2. 🔴 El hallazgo: el único cliente que paga no compró nada de lo que publicamos

**Bucaradomi paga $370.000/mes IVA incluido.** Eso es `domicilios-ops` del catálogo, con precio
**VERIFICADO** por contrato firmado (`SAI-DOMIOPS-20260703-001`) y factura electrónica `SOL1`. Qué
incluye, textual del catálogo:

> Dashboard de operador (pedidos, asignación, estados en vivo, zonas y tarifas) · PWA para
> domiciliarios · alojamiento y monitoreo · copias de seguridad diarias cifradas · soporte en horario
> hábil · **«Sin chat automático y sin IA por conversación (está fuera del alcance del plan)»**

Y **sin setup**: `setup_fee_cop = 0` en la suite.

Junten las tres frases y sale el problema entero:

1. **El único cliente que paga no compró un chatbot.** Compró **software operativo vertical por
   suscripción**, explícitamente sin chat y sin IA.
2. **Los tres planes que sí publicamos** —los tres de chatbot, los tres con setup de $400.000— tienen
   **cero clientes pagando**.
3. **En la home, «Domicilios y logística» aparece como *vertical del bot*** («Pedidos por chat, listos
   para despachar»). La plataforma que Bucaradomi de verdad paga no está publicada en ninguna parte
   del sitio.

Y el dato que lo remata: de los 13 productos del catálogo, **10 están marcados `supuesto`** — precio
sin un solo caso detrás. El que tiene contrato y factura es justamente uno de los que **no** se
publica.

> **La incomodidad del fundador con el pricing era una señal correcta leída en el lugar equivocado.**
> No molesta que haya precio público: molesta que el precio público sea de un producto que nadie ha
> comprado, mientras el que se compra no aparece. Eso no se arregla escondiendo precios — se arregla
> publicando el producto correcto.

### Por qué esto sobrevivió

Mismo modo de falla que el caso Promatel (`17-RECONCILIACION-CONTENIDO.md` §2) y que el backup de las
nueve noches (`security/hallazgos/2026-08-18`): **nadie preguntó por el resultado.** La D1 vigila que
los precios no diverjan entre planos, y funciona. Lo que **ninguna** regla vigila es la pregunta
anterior: *¿lo que publicamos arriba de todo es lo que alguien está pagando?*

---

## 3. Qué dice la evidencia externa

Investigación del 22-ago. Fuentes completas al final.

### 3.1 · Publicar el precio vs. «contáctanos»

- Las páginas de **«contact for pricing» tienen ~38% más rebote** que las que muestran precio
  explícito. La transparencia gana en self-serve y mid-market.
- La recomendación **no** es «todo público»: es **híbrida** — precio visible en los escalones bajos y
  medios, el escalón alto **anclado con un "desde"**, nunca un muro en blanco.
- Benchmarks de conversión de página de precios: **4–8%** visitante→lead en mid-market; 1–3% en
  enterprise, con ticket mucho mayor.

### 3.2 · Empaquetar vs. cotizar cada caso

- Los **productized services** dan **30–40% mejor margen** que cotizar a la medida cada vez. Cotizar
  todo es exactamente lo que mata el margen de una agencia.
- **Tres escalones** es lo que usa el ~60%, y el del medio es donde cae la mayoría **por diseño**.
- La **cotización cerrada sigue siendo correcta** para trabajo estratégico de alto impacto donde se
  puede especificar el ROI: consultoría, transformación, implementaciones técnicas especializadas.
- Las pymes prefieren **paquete de precio fijo**; el cliente grande espera híbrido o basado en valor.

### 3.3 · El playbook que ya estamos ejecutando sin nombrarlo

La intuición del fundador —*«si lo hacen ellos, algunos más habrá interesados en lo mismo»*— **es
literalmente el playbook de vertical SaaS**, y conviene decirlo con sus nombres:

> foothold en un nicho estrecho → **lighthouse customer** → moldear el producto a sus requisitos →
> ayudarlo a tener éxito con recursos desproporcionados → **usarlo como referencia para atraer a los
> iguales**, que tienen el mismo flujo y el mismo dolor.

Lo que compra ese camino:

- **35–60% más retención** que el software horizontal.
- **CAC más bajo y onboarding más rápido**, porque el producto ya habla el idioma del sector.
- El producto queda **operacionalmente incrustado** en el día a día: es lo que sube el costo de
  cambiarse.

### 3.4 · Financiar producto con servicio no es un parche, es un modelo

- **43%** de las transiciones servicio→producto tardan **1–3 años**; hacia el mes **18–24** el servicio
  se vuelve opcional.
- Palantir es el caso de manual: entregar análisis a la medida y **cobrar recurrente por el software
  que queda**.
- El riesgo documentado es el que ya conocemos: el context-switch entre fundador de producto y jefe de
  proyecto de agencia.

---

## 4. Las tres líneas

Esta es la arquitectura que reemplaza al «producto vs. sobrante». **Tres líneas, tres maneras de
vender, y cada una con un trabajo distinto** — igual que los carriles de `15-CANALES §2`, y con la
misma regla de lectura: *una línea juzgada con la métrica de otra siempre parece un fracaso*.

| # | Línea | Qué es | Su trabajo | Precio | Cómo se vende |
|---|---|---|---|---|---|
| **L1** | **Producto vertical** | `domicilios-ops` y los que salgan igual | **Renta recurrente y réplica.** Es el que compone | **público**, $370.000/mes IVA incl. | demo del sistema vivo + réplica al vertical |
| **L2** | **Bot por suscripción** | Los 3 planes del canon | Volumen y entrada barata | público (ya está) | autoservicio desde la landing |
| **L3** | **Servicio a la medida** | Desarrollo, integraciones, web | **Caja hoy** y materia prima de L1 | **«desde $3.000.000»** | escalera de valor de tres escalones |

### La regla de publicación que sale de esto

> **Lleva precio público lo que tiene alcance cerrado. Lleva «desde» lo que se cotiza.
> Nada lleva silencio.**

✅ **Desde el 2026-09-05 esta tabla vive en `data/canon.json → lineasDeOferta`**, con
`ordenDeApertura`, `reglaDePublicacion.formas` y una línea por cada L. Dejó de ser memoria.

⚠️ **Y no copia ni un importe.** Cada línea dice **dónde** vive su precio, no cuál es:
`servicios[domicilios-ops].precioConIva`, `planes[].precioMes`, `lineaServicios.pisoPrecio`. Una
tercera copia del mismo número sería una tercera fecha de vencimiento — es el H7 de la
reconciliación, el snapshot que derivó ocho días por ser copia manual. Lo que sí se agregó es la
guarda que hace falta para que un puntero valga más que un número copiado: la regla
`lineasDeOferta` **resuelve las tres rutas en cada build**, porque un puntero roto parece una
referencia y no lo es. Cazó el primero el día que se escribió: `planes[]` no resolvía.

Un «desde» no es una cotización cerrada: no compromete alcance, ancla el orden de magnitud, filtra al
que no tiene presupuesto y evita el 38% de rebote del muro en blanco. Es la forma híbrida que la
evidencia recomienda para el escalón alto.

### La jerarquía, que es lo que de verdad cambia

Hoy la home lidera con **L2**, que es lo que Meta regala gratis dentro de WhatsApp
(`CLAUDE.md` → *Competencia first-party*) y lo que no ha vendido. El orden nuevo es:

```
L1 producto vertical  →  L3 servicio a la medida  →  L2 bot
   (lo que compone)       (lo que paga hoy)          (la entrada barata)
```

⚠️ **L2 no se mata ni se esconde.** Sigue publicado, sigue siendo la entrada más barata y sigue siendo
lo que se anuncia en Meta, en outbound y en la landing según `mensajeLiderPorCanal`. Lo que cambia es
que **deja de ser lo primero que ve alguien que llega frío.**

---

## 5. El playbook de réplica: Bucaradomi como lighthouse

**Bucaradomi deja de ser «el piloto» y pasa a ser el caso de referencia de L1.** Lo que eso implica en
concreto, y en este orden:

1. **Nombrar el producto por lo que hace, no por el canal.** No es «un bot de domicilios»: es la
   plataforma operativa de una empresa de domicilios. El canal (chat) es opcional y hoy ni siquiera
   está en el alcance del plan que se paga.
2. **Publicarlo con su precio y su alcance**, que ya están escritos y verificados en el catálogo.
3. **Medir lo que hoy no se mide.** El catálogo lo advierte solo: el margen del 97% *«NO incluye las
   horas de soporte en horario hábil ni la operación del despliegue, que en esta línea son el costo
   que de verdad puede comerse el margen. Medirlas antes de pasar el estado a `vigente`»*. Sin ese
   número, replicar es multiplicar un margen que no conocemos.
4. **Buscar a los iguales**, que es prospección de lista, no de categoría: empresas de domicilios y
   mensajería de Bucaramanga y el área metropolitana. Mismo flujo, mismo dolor, misma demo.
5. **Pedir la referencia.** `17-RECONCILIACION §2` ya dejó la oferta escrita en la landing —*«si
   quieres hablar con ellos antes de contratarnos, lo coordinamos»*— y no se ha usado ni una vez.

> 🔴 **Lo que NO se hace:** publicar métricas de rendimiento de Bucaradomi. No se han medido, y la
> regla de `17 §3` no se afloja porque ahora el caso sea más importante: *«un número en una página
> publicada lleva fuente o no va»*. Lo publicable son hechos con testigo — contrato, factura,
> sistema en producción con dominio propio.

---

## 6. El ancla de precio: el reemplazo, no el costo

Para **L1 y L3** el precio deja de construirse desde el costo de servir y pasa a anclarse en **lo que
el cliente paga hoy por hacerlo a mano**. Es la lógica de valor, y es más defendible que un piso puesto
a dedo.

Ya está escrito para el contable —*el ancla es el costo de un auxiliar (~$1.900.000/mes), no el de un
chatbot*, `contable/docs/giro-a-producto-2026-08-18.md`— y es la **misma** aritmética para el operador
de domicilios y para el auxiliar administrativo que hoy digita.

⚠️ **Con la restricción de honestidad que ya rige el carril de video** (`16-CONTENIDO-VIDEO §2`):
mientras `parametros.costoHoraOperativa` siga marcado `supuesto` y sin verificar, **en público se habla
en horas, no en pesos**. El ancla en pesos es para la conversación de venta, donde el cliente pone su
propio número, no para una página publicada.

---

## 7. Qué cambia en cada plano

La D1 manda: **un hecho comercial cambia en todos sus planos o no cambia.** Nada de esto se publica
suelto. Los pendientes del tablero llevan la ejecución.

| Plano | Qué cambia | Riesgo |
|---|---|---|
| `data/canon.json` | ✅ **5-sep:** `lineasDeOferta` — jerarquía L1/L2/L3, `ordenDeApertura` y `reglaDePublicacion` | ninguno (dato) |
| `data/catalogo.json` | `domicilios-ops` pasa de `supuesto` a `vigente` **sólo después** de medir soporte y operación (§5.3) | ninguno (dato) |
| **Landing** (`platform`) | Publicar L1 · `/servicios` con «desde $3.000.000» · reordenar la home | 🔴 **despliega** — rama + PR, merge lo autoriza el usuario |
| **Catálogo de la suite** | El pendiente vencido `cmsz6eq2s…`: los 3 planes no existen y 7 legacy en USD siguen cotizables | 🔴 **escribe en datos reales** — dry-run y aviso previo (regla cero) |
| `CLAUDE.md` | Decisión vigente nueva | ninguno |
| Términos | Sólo si cambia alcance publicado | ninguno hoy |

---

## 8. Lo que NO cambia

Para que nadie lea este doc como permiso para aflojar lo que costó caro:

- **Ningún precio se mueve acá.** La D1 sigue siendo `canon.json` + `catalogo.json`.
- **Un mensaje líder por canal**, y **uno solo dentro de cada pieza**. Sumar L1 no autoriza el
  «también hacemos» que convierte la marca en la agencia genérica de la esquina.
- **Nada se cotiza si no está en `catalogo.json`.**
- **Prueba social sólo verificable** — Bucaradomi y Swisscontact, y sin métricas inventadas.
- **Un proyecto de servicio simultáneo**, y si entran dos se pausa el carril de Google.
- **La regla de las 8 semanas a mano** antes de construir la máquina de contenido.

---

## 9. La secuencia para las próximas sesiones

Ordenada por lo que desbloquea, no por lo que apetece. **Carlos viaja del 25-ago al 2-sep**: en esa
ventana entra todo lo de código y docs, y **nada** que genere cola de respuesta.

| # | Qué | Dónde | Ventana |
|---|---|---|---|
| **1** | Reordenar la tanda 1 de video: los de `a la medida` y los N3 abren; los 7 de bot van a IG/TikTok | `redes/guiones-tanda-1.md` | ✅ **hecho el 22-ago** |
| **2** | Bajar la arquitectura a `canon.json` (jerarquía L1/L2/L3 + regla de publicación) | `marketing` | ✅ **hecho el 5-sep** |
| **3** | Landing: publicar L1, «desde $3.000.000» en `/servicios`, reordenar la home | `platform` (rama+PR) | viaje |
| **4** | Medir soporte y operación de `domicilios-ops` antes de tocar su `estado` | `marketing` + suite | viaje |
| **5** | Catálogo de producción de la suite (el vencido `cmsz6eq2s…`) | suite | 🔴 con aviso |
| **6** | Lista de empresas de domicilios del área metropolitana | `tools/apps/prospeccion` | viaje |
| **7** | Grabar la tanda 1 ya reordenada | cámara | **al volver** |
| **8** | GBP sin teléfono, verificación por video | — | **al volver** |

### Sobre el GBP, ya que fue parte de la pregunta

El teléfono **es campo opcional**: se puede dejar vacío y poner el sitio web como contacto. Lo que
Google pide en 2026 para un negocio de área de servicio **no es una línea telefónica, es verificación
por video** —ya es el método por defecto— probando que el negocio existe y que vos lo manejás. Con la
matrícula CCB 731655 a mano, eso se graba. ⚠️ Lo que sí produce suspensión es usar una dirección o
buzón que no sea real. **No hay que gastar en una línea todavía**, y con eso cae el motivo por el que
el GBP llevaba dos días vencido.

---

## Relacionados

`business/24-coherencia-producto-empresa.md` (la D1 y la D7) · `17-RECONCILIACION-CONTENIDO.md` (qué
se publica de verdad) · `15-CANALES-Y-SECUENCIA.md` (en qué orden se encienden los canales) ·
`16-CONTENIDO-VIDEO.md` (el carril orgánico) · `investigacion_de_venta.md` (la escalera de valor) ·
`contable/docs/giro-a-producto-2026-08-18.md` (el ancla al costo de un auxiliar) ·
`data/canon.json` y `data/catalogo.json` (todo lo anterior, en máquina).

## Fuentes de la investigación externa (2026-08-22)

- [B2B SaaS Pricing Page Best Practices 2026](https://successknocks.com/b2b-saas-pricing-page-best-practices/) — el 38% de rebote de «contact for pricing»
- [B2B SaaS Conversion Rate Benchmarks](https://www.orbix.studio/blogs/b2b-saas-conversion-rate-benchmarks) — 4–8% mid-market
- [Service Pricing for Agencies — AgencyHandy](https://www.agencyhandy.com/productized-service/service-pricing/)
- [The Complete Guide To Productized Services](https://assembly.com/blog/productized-services) — 30–40% de margen
- [AI Automation Agency Pricing 2026 — Taskip](https://taskip.net/ai-automation-agency-pricing/)
- [Vertical SaaS: Flipping the Playbook](https://medium.com/@cristina.castellan/vertical-saas-flipping-the-playbook-1bfbfbfaf108) — lighthouse customer
- [Vertical SaaS Is Winning — SaaS Mag](https://www.saasmag.com/vertical-saas-niche-beats-horizontal-2026/) — 35–60% de retención
- [Consulting to SaaS Transition Pricing Playbook](https://www.buildmvpfast.com/blog/consulting-to-saas-transition-pricing-playbook-2026) — 43% tarda 1–3 años
- [Service Area Business: GBP Guide 2026](https://rankai.ai/articles/service-area-business-google-business-profile-guide)
- [GBP Video Verification for a Service Area Business](https://www.kitemedia.com/gbp-video-verification-service-area-business/)
