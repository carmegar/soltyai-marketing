# Guion del video demo — asistente inmobiliario

> **Para qué es este video.** Es la pieza que desbloquea el canal completo: post fijado del LinkedIn de
> empresa, gancho del **toque 1** del outbound (`redes/outbound-mensajes.txt`) y destino al que apunta
> el Calendly. Sin él no arranca ni el orgánico ni la pauta (`13-PLAN-12-CLIENTES.md` §3).
>
> **Lo que el video tiene que lograr:** que un dueño de inmobiliaria piense *"esto contesta los
> WhatsApp que yo no alcanzo a contestar"* y haga clic en agendar. **No** tiene que explicar la
> tecnología, ni decir "inteligencia artificial", ni mostrar precios.
>
> **Duración objetivo: 75–90 segundos.** Hay una versión de 30" para el toque 1 (§7).

---

## 1. Decisión de guion que conviene revisar antes de grabar

`ESTADO.md` §3b listaba el orden *pre-calificación → búsqueda → visita → aviso → leads*. **Aquí la
pre-calificación se saca del video** y estas son las razones:

- La pre-calificación de 5 pasos es **nuestra compuerta de acceso a la demo**, no una función del bot
  del cliente. Mostrarla arriba hace que el prospecto crea que *su* bot va a interrogar a *sus*
  clientes antes de mostrarles un apartamento.
- Los primeros 3 segundos deciden si el video se ve. Arrancar con un formulario de 5 preguntas es la
  peor apertura posible; arrancar con un cliente escribiendo a las 11 de la noche es la mejor.
- Dónde sí va: en la **tarjeta final** (toma 7), una línea — *"pídeme la demo y te la habilito hoy"* —
  y en el mensaje de outbound, que es donde el prospecto efectivamente se encuentra con la compuerta.

Si preferís mostrarla igual, va **después** de la toma 6, nunca antes de la 3.

---

## 2. Preparación (30–40 minutos, se hace una sola vez)

### 2.1 El problema del "aviso al asesor" — resolvelo antes de grabar

El aviso interno se envía a `config.notify.telegramChatId`, que hoy apunta a **tu propio chat**
(`1815166113`). Si grabás así, el aviso al asesor cae **en la misma conversación** donde estás
haciendo de cliente y el video no se entiende.

**Solución (y además es como lo usaría una inmobiliaria de verdad):** creá un **grupo de Telegram**
—por ejemplo *"Asesores · Demo Serrano"*—, agregá el bot `@inmobiliaria_solty_bot` como miembro, y
apuntá ahí el aviso:

```
PATCH /api/tenants/demo-l0615   →   config.notify.telegramChatId = "<id del grupo, negativo>"
```

El id de un grupo es un número **negativo**; se obtiene reenviando un mensaje del grupo a un bot que
lo muestre, o mirando el log del poller. Al terminar de grabar podés dejarlo así: un grupo es mejor
destino que un chat personal.

> ⚠️ Se toca **solo el tenant `demo-l0615`**. Nada de esto afecta a Bucaradomi ni a ningún cliente.

### 2.2 Lista de verificación

- [ ] Grupo creado, bot adentro, `telegramChatId` apuntando al grupo, **poller reiniciado**.
- [ ] Probar el flujo completo **una vez** antes de grabar (que salga el álbum de fotos y llegue el aviso).
- [ ] Dashboard corriendo: `pnpm --filter @soltyai/web dev` → `http://localhost:3002`, con el
      **switcher de tenant en `demo-l0615`** y la vista de leads abierta en otra pestaña.
- [ ] Telegram **de escritorio**, tema claro, zoom al 125–150% (en el móvil del espectador el texto
      pequeño no se lee).
- [ ] Ocultar de la pantalla: otros chats, notificaciones, la barra de marcadores del navegador, el
      nombre real de otros clientes.
- [ ] Un inmueble elegido de antemano **que tenga buenas fotos** (hay 29 cargados; no todos lucen igual).
- [ ] Grabador: cualquiera que capture ventana + micrófono. Grabá **en vertical 9:16** si podés
      (LinkedIn, IG y TikTok lo premian) o en 16:9 y recortá después.

### 2.3 Reglas de la grabación

- **Un solo take por toma**, sin editar dentro de la toma. Si te equivocás, repetís la toma completa.
- **No aceleres el chat.** El bot responde rápido; que se vea el tiempo real es parte del argumento.
- **Nada inventado en pantalla:** los inmuebles del catálogo demo son reales y públicos, el nombre del
  cliente ficticio es "Andrés", y no aparece ningún dato de una persona real.

---

## 3. Guion — versión larga (75–90 s)

> **Formato:** *[TOMA] — lo que se ve | lo que se dice.* El texto en pantalla va entre «comillas
> angulares». La voz es tuya, en español de Colombia, tuteando, sin leer de corrido.

### TOMA 1 · El gancho (0:00–0:07)

**Se ve:** pantalla de Telegram con un mensaje entrante y la hora visible (11:42 p.m.).
**Texto en pantalla:** «11:42 p.m.»
**Voz:**
> A esta hora te escriben. Y a esta hora nadie contesta.

### TOMA 2 · El costo (0:07–0:15)

**Se ve:** el mismo chat, sin respuesta. Cursor quieto.
**Texto en pantalla:** «El 78% de los que no reciben respuesta escriben a otra inmobiliaria» —
⚠️ **solo si conseguís la fuente**. Si no la tenés, este texto **no va**: la regla de la casa es cero
métricas sin fuente. Reemplazo sin dato: «Mañana ya preguntó en otras tres.»
**Voz:**
> Ese mensaje no se pierde: se va para otra parte.

### TOMA 3 · El bot atiende (0:15–0:35)

**Se ve:** el mismo mensaje, pero ahora el bot responde. El cliente escribe algo como
*"busco apartamento en arriendo en Cabecera hasta 2 millones"* y el bot devuelve opciones reales.
**Voz:**
> Este es el asistente de una inmobiliaria. Con **sus** inmuebles, no con un catálogo genérico.
> Entiende lo que le escriben y responde con lo que sí existe.

### TOMA 4 · Las fotos (0:35–0:50)

**Se ve:** el cliente pide ver uno y llega el **álbum de fotos** dentro del chat.
**Voz:**
> Fotos, precio, barrio. Sin mandar a nadie a un PDF ni a "escríbenos mañana".

### TOMA 5 · La visita (0:50–1:05)

**Se ve:** el cliente pide agendar visita; el bot confirma.
**Voz:**
> Y cuando el cliente quiere ver el inmueble, agenda ahí mismo.

### TOMA 6 · El aviso al asesor (1:05–1:20)

**Se ve:** corte al **grupo de asesores**, donde entra el aviso con los datos de la visita.
**Texto en pantalla:** «El asesor se entera al instante»
**Voz:**
> Y tu asesor se entera en el momento, con el nombre, el teléfono y qué inmueble le interesó.

> 🎯 **Esta es la toma que vende.** Todo lo anterior lo prometen todos; esta es la que convierte el
> chat en trabajo que alguien puede hacer mañana temprano.

### TOMA 7 · El panel + cierre (1:20–1:35)

**Se ve:** el dashboard con la lista de leads y la visita registrada.
**Texto en pantalla:** «Todo queda registrado» → luego la tarjeta final.
**Voz:**
> Nada se queda en el chat: los interesados quedan en un panel, con su historial.
> Si querés verlo con los inmuebles de tu inmobiliaria, agenda 15 minutos por el enlace de abajo.

**Tarjeta final (3 s, estática):**

```
soltyai.com
Agenda 15 minutos → [Calendly]
Bots de negocio para inmobiliarias · Bucaramanga
```

---

## 4. Lo que NO se dice en el video

Estas no son sugerencias de estilo, son reglas que el CI hace cumplir (`CLAUDE.md` de este repo):

| No decir | Por qué | Qué decir en cambio |
|---|---|---|
| "Inteligencia artificial", "IA", "GPT" | No es el beneficio, el modo determinista es parte del producto, y la política de IA de WhatsApp **prohíbe** posicionarse como bot de propósito general | "Atiende", "responde", "agenda", "bot para inmobiliarias" |
| Precios | El video vende la cita, no el plan; el ancla la pone la conversación | — |
| "+100 clientes", "líderes en" | Prueba social solo verificable (hoy: Bucaradomi y Swisscontact, con permiso) | — | <!-- guardrail:ignorar -->
| "En 7 días o no pagas" | La garantía se anuncia en su versión suave y en la cotización, no acá | — |
| El bot **en la web** del cliente | El widget web no existe: sigue en **próximamente** | Nada |
| Cualquier cifra sin fuente | Regla de la casa: cero métricas fabricadas | Quitar la cifra |

> ✅ **Salió de esta tabla el 2026-08-13: "WhatsApp".** La fila decía que no se podía nombrar WhatsApp
> como disponible porque Meta no había validado a SoltyAI como Tech Provider. **Meta validó el 6-ago
> y el bot atiende por la API oficial desde el 7-ago:** la regla pasó de proteger a mentir.
> **WhatsApp sí se puede nombrar**, y conviene: es el canal que la pyme colombiana usa, y decirlo
> arregla la objeción de fondo del video, que muestra Telegram. Se nombra como canal **disponible**;
> lo que **no** se promete es un plazo de conexión (el primer WABA de cliente se registra en vivo).
> Lo que sigue prohibido, y por eso quedó como fila propia, es el **bot en la web**.

---

## 5. Después de grabar

1. **Registrar el `origin`** antes de publicar en cualquier parte:
   `npm run link nuevo` → un `origin` por canal (LinkedIn orgánico, outbound, IG…). Sin eso el lead
   llega sin fuente y la ronda no se puede evaluar (`08-TRACKING-SETUP.md` §2).
2. **Subtítulos quemados.** Se ve en silencio; sin subtítulos el video no existe.
3. **Publicar:** post fijado del LinkedIn de empresa → adjuntar al toque 1 del outbound → IG/TikTok
   como reel con el mismo audio.
4. **Miniatura:** el frame de la toma 6 (el aviso al asesor), no el del chat vacío.

---

## 6. Qué medir

| Métrica | Dónde | Para qué |
|---|---|---|
| Retención a los 3 s | Analítica de LinkedIn / IG | Si cae, el problema es la toma 1 |
| Clics al Calendly | `origin` del enlace | Es el único número que importa |
| **Reuniones agendadas / semana** | Calendly | El KPI que manda (meta: 2) |

> El KPI dejó de ser "demos" el 2026-08-13: lo que se cuenta es **la cita en el Calendly**, no que
> alguien haya entrado al bot. Es el mismo número con el nombre correcto.

Impresiones y "me gusta" **no** son métricas de este video.

---

## 7. Versión corta (30 s, para el toque 1 del outbound)

Mismo material, sin tomas 2 ni 7:

| Tiempo | Toma |
|---|---|
| 0:00–0:05 | Toma 1 — «11:42 p.m.», el mensaje sin responder |
| 0:05–0:15 | Toma 3 comprimida — pregunta y respuesta con inmuebles reales |
| 0:15–0:22 | Toma 4 — el álbum de fotos |
| 0:22–0:30 | Toma 6 — el aviso al asesor + tarjeta final |

El outbound ya lleva el contexto escrito, así que el video corto solo tiene que probar que **existe y
funciona**.
