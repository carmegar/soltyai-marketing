# 16 · La serie de video: enseñar qué hace el software por un negocio

> **Decidido el 2026-08-17.** El fundador pidió una máquina para producir contenido de video de
> buena calidad **rápido**, para LinkedIn primero y las demás redes después, con el objetivo de
> generar flujo mientras la línea grande madura. Este doc es esa máquina.
>
> **Cambia una regla del 13-ago:** el orgánico deja de llevar el bot como mensaje líder y pasa a
> llevar el **servicio a la medida**. El motivo, textual: *«no pongamos reglas que nos impidan
> obtener beneficios a nivel de empresa, hoy por hoy lo que nos tiene con vida es justamente el
> desarrollo a la medida»*. El canon ya se movió (`data/canon.json → mensajeLiderPorCanal._cambio`).
> Complementa a `15-CANALES-Y-SECUENCIA.md §5`, no lo reemplaza: la regla de las 8 semanas a mano
> **sigue en pie**.

---

## 1. El diagnóstico, en una línea

Lo que mata la producción de video no son las ideas: es sentarse a pensar qué decir cada vez, y
grabar de a uno. Las dos cosas se atacan con lo mismo, que es **quitarle decisiones al momento de
grabar**. Por eso la máquina tiene cuatro piezas y ninguna es una herramienta.

| # | Pieza | Qué elimina | Estado |
|---|---|---|---|
| 1 | **Banco de dolores** (`data/dolores.json`) | «¿de qué hablo hoy?» | ✅ construido 17-ago, 54 dolores |
| 2 | **Plantilla de guion de 4 golpes** | «¿cómo lo estructuro?» | ✅ definida acá (§3) |
| 3 | **Producción en lote** | «grabar es un evento» | ⏳ falta correr la tanda 1 |
| 4 | **Publicación con `origin`** | «¿esto sirvió?» | ⏳ falta el primer post |

---

## 2. Pieza 1 — El banco de dolores

**La unidad no es un tema: es una tarea manual concreta que un negocio hace hoy.** «Automatización
para pymes» no es un video. «¿Todavía copias a un cuaderno los pedidos que te llegan por WhatsApp?»
sí, porque el que lo hace se reconoce en tres segundos.

Vive en **`data/dolores.json`**: 54 dolores, 9 sectores, cada uno con la escena, la frecuencia
supuesta, el costo oculto y cómo se resuelve. Se maneja con el CLI:

```bash
npm run dolores                       # la tabla completa, agrupada por sector
npm run dolores validar               # entra en `npm run check`, falla el CI
npm run dolores tanda -- --n=10       # los 10 siguientes a grabar, en orden
npm run dolores ver -- <id>           # la ficha con los 4 golpes ya repartidos
```

### 🔴 La regla que sostiene la honestidad de la serie: **se habla en horas, no en pesos**

Cada dolor trae una frecuencia (*25 veces al día × 2 minutos*) que el CLI convierte en horas al mes.
Ese número **no es una afirmación sobre el mercado**: es aritmética de un supuesto declarado, y el
video lo dice así. *«Si tú haces esto 25 veces al día…»*. Quien se reconoce corrige el número en su
cabeza y se convence solo; quien no, no era el cliente.

Los **pesos** son otra cosa: exigen un costo-hora que hoy está en `parametros.costoHoraOperativa`
marcado `supuesto` y **sin verificar** (falta confirmar el SMMLV 2026 y el factor prestacional).
Mientras siga así, en cámara se habla en horas. Si el dueño quiere pesos, pone su propio número.
El validador grita el aviso en cada corrida para que no se olvide.

### Los tres niveles: la columna vertebral

No son categorías de archivo, son **el marco que la serie le enseña al espectador**. Es lo que
convierte 54 videos sueltos en una serie que alguien sigue:

| Nivel | Nombre | Qué hace | La promesa |
|---|---|---|---|
| 1 | **Ordenar** | El trabajo se sigue haciendo, pero queda registrado y se consulta | *Dejas de buscar* |
| 2 | **Automatizar** | La máquina hace el paso repetido | *Dejas de hacerlo* |
| 3 | **Decidir** | El sistema te dice algo que no sabías | *Dejas de adivinar* |

El nivel 3 es el que vende servicio a la medida, y casi nadie lo cuenta. «Cuántas clientas tuyas
llevan tres meses sin volver» no lo resuelve un bot de catálogo.

### El campo `evidencia` no es decoración

Las filas con `evidencia` (★ en la tabla) son las que **sólo nosotros podemos grabar**: el motor
contable que arma los asientos de un lote real de documentos DIAN, el back-office que manda las
cuentas de cobro, la firma electrónica funcionando, el piloto de domicilios. Un competidor puede
copiar el guion; no puede copiar la grabación de pantalla. **Se agotan primero**, y por eso el
comando `tanda` las pone arriba.

Lo simétrico también es regla: **el dolor sin evidencia se cuenta como dolor, nunca como caso.**
Nada de «un cliente nuestro ahorró X» si ese cliente no existe.

---

## 3. Pieza 2 — La plantilla de 4 golpes

Misma estructura **siempre**. Eso es exactamente lo que permite grabar diez seguidos sin pensar, y
lo que hace que el espectador reconozca la serie al tercer video.

**~140 palabras = 55 segundos.**

| Tiempo | Golpe | Qué va | Sale de |
|---|---|---|---|
| **0-3 s** | La escena | La tarea manual, dicha con nombre propio y en pregunta | `escena` |
| **3-15 s** | El costo | La aritmética en horas, presentada como supuesto, y el costo oculto | `frecuencia` + `costoOculto` |
| **15-40 s** | Cómo se hace | En español, sin una sola palabra técnica | `conTecnologia` |
| **40-55 s** | El número y la puerta | Las horas otra vez + «si quieres ver cómo se ve en tu negocio, escríbeme» | calculado |

Reglas de escritura que no se negocian (salen de `business/13-guia-estilo-y-prompting.md`):

- Sin rayas (—), sin tono de IA, español de Colombia, **tuteo**.
- **Cero jerga** en el golpe 3. Si hay que decir «API», «integración» o «webhook», el guion está mal.
- **Un video, un dolor, un mensaje.** Nunca dos dolores en la misma pieza y nunca «también hacemos».
- El CTA es **blando y de conversación**, no un link. La gente escribe; la venta pasa en el chat.

---

## 4. Pieza 3 — Producción en lote

**Nunca un video por día.** Es la diferencia entre esto vivo en la semana 4 y esto muerto.

| Sesión | Qué | Cuánto | Quién |
|---|---|---|---|
| A | Elegir la tanda (`npm run dolores tanda`) y escribir los 10 guiones | ~1 h | Claude, en el arnés, sin gastar API |
| B | Grabar los 10 seguidos, mismo día, misma ropa, misma luz | ~1,5 h | Carlos |
| C | Editar los 10 y quemar subtítulos | ~1,5 h | Carlos (CapCut hace los subtítulos en español) |
| D | Programar y publicar 3 por semana | ~20 min | Carlos |

Una tarde de trabajo = **tres semanas publicando**. La sesión A no espera a la B: los guiones de la
tanda 2 se pueden escribir mientras se graba la 1.

**Producción, no producciones.** Cara a cámara, celular, luz de ventana. Al que compra desarrollo a
la medida le compra a una persona, y la producción cara le resta credibilidad en vez de sumarla.
El único requisito técnico que sí es innegociable son los **subtítulos quemados**: se ve en silencio.

---

## 5. Pieza 4 — Publicación, y cómo sabemos si sirvió

**LinkedIn es la red de registro.** Es donde está la audiencia con presupuesto para un piso de
$3.000.000 y donde el servicio a la medida se posiciona sin competir con el Meta Business Agent.
Las demás redes reciben el mismo video, sin producción adicional.

- **Video nativo**, subido a cada red. Todas castigan el link que saca gente de la plataforma.
- **El gancho va en la primera línea del texto del post**, no sólo en el video: LinkedIn corta en
  «ver más» y esa línea decide si alguien pone play.
- **Sin link en el cuerpo del post.** Va en el primer comentario, con su `origin`
  (`npm run link nuevo`). Sin `origin` el lead llega sin fuente y el carril no se puede evaluar.
- El texto del post **no es el guion del video**: el video se ve, el post se lee. Se escriben aparte.

### La métrica es **conversaciones iniciadas por semana**, no vistas

Un video de 300 vistas con 2 mensajes le gana a uno de 5.000 con cero. Las vistas se miran sólo para
comparar ganchos entre sí, nunca como resultado. El resultado es el mensaje que llega.

**Semáforo, a las 4 semanas (12 videos):** 0 conversaciones = el problema es el dolor elegido o el
gancho, no la cadencia. Se cambia de sector antes que de frecuencia.

---

## 6. Lo que este doc NO cambia

- **La regla de las 8 semanas a mano sigue en pie** (`15-CANALES-Y-SECUENCIA.md §5`). El banco de
  dolores y su CLI **no** son la máquina de contenido: no escriben, no llaman a ninguna API y no
  publican. Ordenan la materia prima, que es lo que hacía falta para que las 8 semanas sean
  llevaderas. El motor 1-idea→3-canales sigue bloqueado en el tablero, y con razón.
- **El orden de los canales:** Google Business Profile primero. Es gratis, no depende de nada y
  captura intención. El contenido no lo reemplaza, lo alimenta.
- **El contenido no es el motor de flujo de este trimestre.** Compone en 3 a 6 meses. Lo que trae
  las llamadas ahora es la prospección y el GBP; el contenido hace que el que te googlee te crea.
  Si en algún momento la producción de video le está quitando horas a la prospección, la regla es
  bajar a 1 video por semana, no pausar la prospección.

---

## Relacionados

- `data/dolores.json` · `src/contenido/dolores.js` — el banco y su CLI
- `15-CANALES-Y-SECUENCIA.md` — el orden de los canales y la regla de las 8 semanas
- `data/canon.json → mensajeLiderPorCanal` — qué mensaje lidera en cada canal, y el cambio del 17-ago
- `business/13-guia-estilo-y-prompting.md` — cómo escribimos
- `business/14-estrategia-organico-social.md` — el playbook orgánico previo
