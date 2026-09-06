import { existe, leer, leerJson, lineaDe, listar } from '../lib/io.js';
import { canon, catalogo, preciosVigentes } from '../lib/canon.js';
import { cop, largo, montosCop, normalizar, plazosEnDias } from '../lib/texto.js';

/*
 * Cada regla recibe nada y devuelve una lista de hallazgos:
 *   { nivel: 'error'|'aviso', regla, archivo, linea, mensaje }
 *
 * Criterio de nivel:
 *   error → publicar esto rompe una decisión ya tomada o dice algo falso. Bloquea el CI.
 *   aviso → probablemente esté mal, pero hay casos legítimos. No bloquea.
 *
 * Criterio de alcance: las prohibiciones de mensaje se aplican a copy/ (lo que sale publicado).
 * Los docs pueden y deben nombrar lo prohibido para explicarlo — por eso no se les aplican,
 * salvo las reglas marcadas alcance 'todo' en canon.json.
 */

/**
 * Todo el texto en prosa del repo.
 *
 * 🔴 Los `.txt` entraron el 20-ago. Antes esto era sólo `.md`, y el copy publicado en `.txt`
 * —`redes/soltyai-linkedin-descripcion.txt`, `redes/outbound-mensajes.txt`— no lo miraba ninguna
 * regla. Un guardrail que se salta un archivo por su extensión es un guardrail con una puerta
 * abierta que nadie ve, porque desde afuera se lee igual de verde.
 */
const ARCHIVOS_MD = () => [...listar('.md'), ...listar('.txt')];

/**
 * El copy que se PUBLICA y no vive en `copy/`: la descripción del perfil de LinkedIn, los textos
 * de Facebook y YouTube, los mensajes de outbound, los guiones de video. Lo lee más gente que
 * cualquier anuncio, y hasta el 20-ago no lo miraba ninguna prohibición.
 *
 * Es una categoría propia a propósito. No es `copy/` (no son piezas de anuncio) y no es doc (un
 * doc puede nombrar lo prohibido para explicarlo; una bio de perfil, no).
 */
const PUBLICADO = () => ARCHIVOS_MD().filter((f) => f.startsWith('redes/'));

/**
 * Exención POR LÍNEA, no por archivo.
 *
 * Los archivos de `redes/` son mixtos y esa es la razón de que sea por línea: `solty-fb-textos.md`
 * trae a la vez los **textos listos para pegar** (copy de verdad) y una tabla de **«nunca digas
 * esto»** que, para prohibirlo, tiene que nombrarlo. Un marcador de archivo exentaría las dos
 * mitades y dejaría el copy real sin vigilar, que es justo el agujero que este trabajo cierra.
 *
 * Se descubrió el 20-ago al abrir `redes/` por primera vez: los 3 errores que saltaron eran los
 * 3 de ese tipo, ni uno de copy real.
 *
 * 🔴 Es una DECLARACIÓN, no un silenciador. Va en la línea, se ve en el diff, y se cuenta con
 * `grep -rn "guardrail:ignorar" redes/`. Ponerlo sobre copy real es apagar la guarda a mano, y se
 * nota. Mismo idioma que `<!-- archivo:ignorar -->` en la bitácora, a propósito: una convención
 * nueva por cada caso es cómo se llega a que nadie recuerde ninguna.
 */
const EXENTA_LA_LINEA = /<!--\s*guardrail:ignorar\s*-->/;
// Las carpetas que empiezan por "_" son fixtures de la prueba del propio linter: no son piezas reales.
const PIEZAS = () => listar('.json').filter((f) => f.startsWith('copy/') && !f.includes('/_'));

// ─────────────────────────────────────────────────────────────────────────────
// 1 · Enlaces internos rotos
// ─────────────────────────────────────────────────────────────────────────────
export function enlacesRotos() {
  const hallazgos = [];
  for (const archivo of ARCHIVOS_MD()) {
    const texto = leer(archivo);
    const re = /\[[^\]]*\]\(([^)]+)\)/g;
    let m;
    while ((m = re.exec(texto)) !== null) {
      const destino = m[1].split('#')[0].trim();
      if (!destino || /^(https?:|mailto:|tel:)/i.test(destino)) continue;
      const base = archivo.includes('/') ? archivo.slice(0, archivo.lastIndexOf('/') + 1) : '';
      const ruta = destino.startsWith('/') ? destino.slice(1) : base + destino;
      const normal = ruta.replace(/\/\.\//g, '/').replace(/[^/]+\/\.\.\//g, '');
      if (!existe(normal) && !existe(destino)) {
        hallazgos.push({
          nivel: 'error',
          regla: 'enlaces-rotos',
          archivo,
          linea: lineaDe(texto, m.index),
          mensaje: `enlace interno a "${destino}" que no existe`,
        });
      }
    }
  }
  return hallazgos;
}

// ─────────────────────────────────────────────────────────────────────────────
// 2 · Precios de plan que no son los vigentes
// ─────────────────────────────────────────────────────────────────────────────
// Solo nombres de plan inequívocos. "Pro" no entra: colisiona con mil palabras y con el plan viejo.
const NOMBRES_PLAN = /(esencial|premium|setup)/i;

// Cifras que legítimamente NO son el precio de un plan: promedios, sumas, metas, pisos.
// Ampliado el 13-ago-2026 con el vocabulario de la economía de adquisición (ltv, cac, techo, corte,
// calificado). Al recalibrar el CAC y el corte por lead aparecieron 4 avisos permanentes sobre
// cifras correctas —el LTV de $5.080.000 y el techo de $800.000 caen al lado de la palabra
// "setup"—, y un aviso que siempre está encendido y siempre se ignora deja de ser un aviso.
// ⚠️ `meta` va con calificador a propósito. Suelto hacía match con **el nombre de la empresa Meta**,
// así que toda línea que la mencionara quedaba exenta del chequeo de precios: un falso negativo
// enorme, justo en los docs de pauta, que son los que más hablan de Meta y de plata a la vez.
const CIFRA_AGREGADA = /(promedio|ticket|mezcla|mrr|caja|total|suma|piso|meta (semanal|mensual|anual|de)|acumul|a[ñn]o|anual|12 clientes|ltv|cac|techo|corte|calificad)/;

export function preciosDePlan() {
  const hallazgos = [];
  const vigentes = preciosVigentes();
  const archivos = [...ARCHIVOS_MD(), ...PIEZAS()];

  for (const archivo of archivos) {
    const texto = leer(archivo);
    texto.split('\n').forEach((linea, i) => {
      if (!NOMBRES_PLAN.test(linea)) return;
      const plano = normalizar(linea);
      // Una línea que habla de precios viejos, de otro modelo, de otra moneda o de un agregado no se juzga.
      if (/(superad|prohibid|viejo|anterior|legacy|usd|d[oó]lar|propuesto|validar)/.test(plano)) return;
      if (CIFRA_AGREGADA.test(plano)) return;
      for (const monto of montosCop(linea)) {
        if (monto < 50000) continue; // cifras chicas: no son precios de plan
        if (!vigentes.has(monto)) {
          hallazgos.push({
            nivel: 'aviso',
            regla: 'precios-de-plan',
            archivo,
            linea: i + 1,
            mensaje: `${cop(monto)} junto a un nombre de plan y no coincide con el pricing vigente (${[...vigentes.keys()].map(cop).join(' · ')})`,
          });
        }
      }
    });
  }
  return hallazgos;
}

// ─────────────────────────────────────────────────────────────────────────────
// 3 · Prohibiciones de mensaje (planes superados, WhatsApp, ángulos quemados, humo)
// ─────────────────────────────────────────────────────────────────────────────
export function prohibiciones(piezas = PIEZAS()) {
  const hallazgos = [];

  for (const [nombre, regla] of Object.entries(canon.prohibiciones)) {
    if (nombre.startsWith('_')) continue;
    // 🔴 Tres alcances, no dos (20-ago). Antes eran `copy/` y «todo», y en el medio se coló la
    // categoría más importante: **el copy que de verdad se publica y no vive en `copy/`**.
    //
    //   piezas      copy/*.json      las piezas de anuncio
    //   PUBLICADO   redes/**         la bio de LinkedIn, los textos de FB y YouTube, el outbound,
    //                                los guiones de video. Se lee más que cualquier anuncio.
    //   docs        el resto de .md  NO se les aplica, y con razón: un doc tiene que poder NOMBRAR
    //                                lo prohibido para explicarlo. Ese es el motivo original de la
    //                                exclusión, y sigue siendo correcto.
    //
    // El error era meter `redes/` en el saco de los docs. No es documentación: es lo que el
    // cliente lee. De las 7 prohibiciones sólo UNA tenía alcance «todo», así que hasta hoy la
    // biografía del perfil podía prometer lo que quisiera.
    const archivos =
      regla.alcance === 'todo' ? [...ARCHIVOS_MD(), ...piezas] : [...PUBLICADO(), ...piezas];

    // `patronesEn` y `exencionesEn` existen en el canon desde que se escribieron y NUNCA se
    // leyeron: el bucle miraba sólo `patrones`, así que los patrones en inglés no protegían nada.
    // Se unen acá (13-ago-2026). Una regla que declara cubrir el inglés y no lo cubre es peor que
    // no tenerla: sugiere una cobertura que no existe, y así fue como el copy en inglés se coló.
    const patrones = [...regla.patrones, ...(regla.patronesEn ?? [])];
    const exenciones = [...(regla.exenciones ?? []), ...(regla.exencionesEn ?? [])];

    for (const archivo of archivos) {
      const bruto = leer(archivo);
      const lineas = bruto.split('\n');
      for (const patron of patrones) {
        const re = new RegExp(patron, 'i');
        lineas.forEach((linea, i) => {
          const plano = normalizar(linea);
          if (!re.test(plano)) return;
          // La línea se declara a sí misma como «acá nombro lo prohibido para prohibirlo».
          if (EXENTA_LA_LINEA.test(linea)) return;
          // La exención se busca en una ventana de ±1 línea: en markdown el "Prohibido" queda
          // muchas veces al final del renglón anterior al que nombra lo prohibido.
          // Se quitan los signos de énfasis: en markdown "ya **no** es Growth $149" rompería
          // cualquier búsqueda de frase.
          const ventana = normalizar(lineas.slice(Math.max(0, i - 1), i + 2).join(' ')).replace(/[*_`~]/g, '');
          if (exenciones.some((e) => ventana.includes(normalizar(e)))) return;
          hallazgos.push({
            // Toda prohibición bloquea, sin importar el alcance. Antes acá había un ternario
            // que devolvía 'error' en las dos ramas: la intención de que `copy` fuera aviso
            // nunca existió en la práctica, y dejarla escrita confundía al leer.
            nivel: 'error',
            regla: `prohibicion:${nombre}`,
            archivo,
            linea: i + 1,
            mensaje: `"${patron}" → ${regla.porque}`,
          });
        });
      }
    }
  }
  return hallazgos;
}

// ─────────────────────────────────────────────────────────────────────────────
// 4 · Piezas de copy: límites de Meta + coherencia interna
// ─────────────────────────────────────────────────────────────────────────────
const CAMPOS_TEXTO = ['texto', 'titular', 'descripcion', 'creatividad_texto', 'destino_titular'];

export function piezasDeCopy(archivos = PIEZAS()) {
  const hallazgos = [];
  const lim = canon.limitesMeta;

  for (const archivo of archivos) {
    let pieza;
    try {
      pieza = leerJson(archivo);
    } catch (e) {
      hallazgos.push({ nivel: 'error', regla: 'copy:json', archivo, linea: 1, mensaje: `JSON inválido: ${e.message}` });
      continue;
    }

    // 4.1 · Límites de caracteres de Meta
    for (const campo of ['texto', 'titular', 'descripcion']) {
      const valor = pieza[campo];
      if (typeof valor !== 'string') continue;
      const n = largo(valor);
      if (lim[campo] && n > lim[campo].max) {
        hallazgos.push({
          nivel: 'error',
          regla: 'copy:limite-meta',
          archivo,
          linea: 1,
          mensaje: `${campo} tiene ${n} caracteres, el máximo de Meta es ${lim[campo].max}`,
        });
      } else if (lim[campo]?.ideal && n > lim[campo].ideal) {
        hallazgos.push({
          nivel: 'aviso',
          regla: 'copy:limite-meta',
          archivo,
          linea: 1,
          mensaje: `${campo} tiene ${n} caracteres; por encima de ${lim[campo].ideal} Meta lo trunca en móvil`,
        });
      }
    }

    // 4.2 · Coherencia de plazo entre TODOS los campos de la pieza — el error de SyroxTech
    const todo = CAMPOS_TEXTO.map((c) => pieza[c]).filter((v) => typeof v === 'string').join(' \n ');
    const plazos = plazosEnDias(todo);
    if (plazos.length > 1) {
      hallazgos.push({
        nivel: 'error',
        regla: 'copy:coherencia-plazo',
        archivo,
        linea: 1,
        mensaje: `la pieza promete plazos distintos en distintos campos (${plazos.join(' vs ')} días). Es el error que le vimos a SyroxTech: la creatividad decía 40 días y el titular del destino 90.`,
      });
    }

    // 4.3 · Coherencia de precio
    const montos = montosCop(todo);
    if (montos.length > 1) {
      hallazgos.push({
        nivel: 'aviso',
        regla: 'copy:coherencia-precio',
        archivo,
        linea: 1,
        mensaje: `la pieza nombra varios montos (${montos.map(cop).join(' · ')}). Legítimo si son mensualidad + setup; revisar que no sea una contradicción.`,
      });
    }

    // 4.4 · Garantía sin condiciones escritas
    if (/garant[ií]a|o no pagas|devolvemos tu dinero/i.test(normalizar(todo)) && !pieza.garantia) {
      hallazgos.push({
        nivel: 'error',
        regla: 'copy:garantia-sin-definir',
        archivo,
        linea: 1,
        mensaje: 'la pieza promete una garantía y no trae el campo "garantia" con qué se cumple, en cuánto tiempo y qué se devuelve. Una garantía vaga es peor que ninguna.',
      });
    }

    // 4.5 · El origen de atribución tiene que existir en el registro de links
    if (pieza.origin) {
      const registro = existe('data/links.json') ? leerJson('data/links.json').links ?? [] : [];
      if (!registro.some((l) => l.origin === pieza.origin)) {
        hallazgos.push({
          nivel: 'error',
          regla: 'copy:origen-sin-link',
          archivo,
          linea: 1,
          mensaje: `origin "${pieza.origin}" no está en data/links.json — genéralo con \`npm run link nuevo\` o el lead llega sin fuente`,
        });
      }
    }
  }
  return hallazgos;
}

// ─────────────────────────────────────────────────────────────────────────────
// 5 · Swipe file: toda entrada necesita su evidencia en disco
// ─────────────────────────────────────────────────────────────────────────────
export function swipeConEvidencia() {
  const hallazgos = [];
  const archivo = '14-SWIPE-FILE.md';
  if (!existe(archivo)) return hallazgos;

  const texto = leer(archivo);
  const bloques = texto.split(/\n## (?=\d{4}-\d{2}-\d{2})/).slice(1);
  for (const bloque of bloques) {
    const titulo = bloque.split('\n')[0].trim();
    const capturas = [...bloque.matchAll(/`(swipe\/[^`]+\.(?:png|jpg|jpeg))`/g)].map((m) => m[1]);
    if (capturas.length === 0) {
      hallazgos.push({
        nivel: 'error',
        regla: 'swipe:sin-evidencia',
        archivo,
        linea: lineaDe(texto, texto.indexOf(titulo)),
        mensaje: `la entrada "${titulo}" no cita ninguna captura en swipe/. La regla del archivo es que solo entran anuncios que vimos correr.`,
      });
    }
    for (const captura of capturas) {
      if (!existe(captura)) {
        hallazgos.push({
          nivel: 'error',
          regla: 'swipe:captura-faltante',
          archivo,
          linea: lineaDe(texto, texto.indexOf(captura)),
          mensaje: `cita "${captura}" y ese archivo no está en el repo`,
        });
      }
    }
  }
  return hallazgos;
}

// ─────────────────────────────────────────────────────────────────────────────
// 6 · Registro de links: el `start` de Telegram tiene formato duro
// ─────────────────────────────────────────────────────────────────────────────
export function registroDeLinks() {
  const hallazgos = [];
  if (!existe('data/links.json')) return hallazgos;
  const { links = [] } = leerJson('data/links.json');
  const re = new RegExp(canon.utm.regexStart);
  const vistos = new Set();

  for (const link of links) {
    if (!re.test(link.origin)) {
      hallazgos.push({
        nivel: 'error',
        regla: 'links:start-invalido',
        archivo: 'data/links.json',
        linea: 1,
        mensaje: `origin "${link.origin}" no cumple ${canon.utm.regexStart} — Telegram solo acepta A-Za-z0-9_- y hasta ${canon.utm.maxLargoStart} caracteres, y descarta el resto sin avisar`,
      });
    }
    if (vistos.has(link.origin)) {
      hallazgos.push({
        nivel: 'error',
        regla: 'links:origin-duplicado',
        archivo: 'data/links.json',
        linea: 1,
        mensaje: `origin "${link.origin}" está repetido: dos piezas distintas contarían como la misma fuente`,
      });
    }
    // Hueco cerrado el 13-ago-2026: el CI validaba el formato del origin y los duplicados, pero
    // NUNCA que la fuente existiera en el canon. Un links.json con una fuente inventada pasaba
    // limpio, y el lead quedaba sin carril al que imputarse. Con dos carriles nuevos (google, gbp)
    // el error de dedo deja de ser hipotético.
    const fuente = String(link.origin ?? '').split('_')[0];
    if (fuente && !canon.utm.source.includes(fuente)) {
      hallazgos.push({
        nivel: 'error',
        regla: 'links:fuente-desconocida',
        archivo: 'data/links.json',
        linea: 1,
        mensaje: `la fuente "${fuente}" del origin "${link.origin}" no está en canon.utm.source (${canon.utm.source.join(' · ')}): el lead llegaría sin carril al que imputarse`,
      });
    }
    vistos.add(link.origin);
  }
  return hallazgos;
}

// ─────────────────────────────────────────────────────────────────────────────
// 7 · Mensaje líder por canal (decisión del 13-ago, recalibrada el 17-ago)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * `canon.mensajeLiderPorCanal` existía desde el 13-ago y **no lo leía ninguna regla**: era un dato
 * que alguien tenía que recordar. El propio canon lo confesaba en su `_fuente` («NO lo hace cumplir
 * ningún guardrail todavía»), que es la versión honesta de una guarda que no existe — y la casa ya
 * sabe cómo termina eso: una guarda mencionada en un doc no es una guarda.
 *
 * QUÉ HACE CUMPLIR, y por qué sólo esto:
 *
 *   1. 🔴 **Una pieza nunca nombra las DOS líneas.** Es la parte de la decisión que no admite
 *      interpretación —el canon dice literal «dentro de una misma pieza sigue habiendo UN solo
 *      mensaje… nombra el bot, y nunca los dos»— y es además el riesgo que el `_cambio` del 17-ago
 *      marca como «el riesgo real». Error.
 *   2. 🟡 **Una pieza no lidera con la línea que su canal no tiene asignada.** Acá sí hay casos
 *      legítimos de borde (una mención de paso, una comparación), así que es aviso y no error.
 *
 * Lo que NO intenta adivinar: cuál de las dos «lidera» cuando aparecen las dos. Si aparecen las
 * dos ya falló por la regla 1, y pedirle al linter que ordene por prominencia sería fabricar una
 * precisión que no tiene.
 *
 * ALCANCE — cambió el 2026-09-05, y el motivo es el pendiente `cmt53crvn…`:
 *
 * Antes eran sólo las piezas de `copy/` que declaran `plataforma`, y `redes/` quedaba fuera «porque
 * ahí el canal se tendría que adivinar por el nombre del archivo». El razonamiento era correcto y
 * aun así costó: la tanda 1 de video se escribió con **7 de 10 guiones de la línea `bot`** saliendo
 * a LinkedIn, donde el canon manda `servicio` desde el 17-ago. Se reordenó a mano el 22-ago; a mano
 * no escala, y es la tercera repetición del mismo modo de falla (Promatel, el backup de las nueve
 * noches, esto).
 *
 * La solución NO es adivinar: es que **la pieza DECLARE su canal**, con el mismo idioma que ya usa
 * el repo para `<!-- guardrail:ignorar -->`:
 *
 *     <!-- canal: linkedin -->            abre un bloque; vale hasta el siguiente marcador
 *     <!-- canal: instagram, tiktok -->   varios canales: se juzga contra cada uno
 *     <!-- /canal -->                     cierra el bloque (índices, tablas de control, notas)
 *
 * Es por BLOQUE y no por archivo porque los archivos de `redes/` son mixtos: `guiones-tanda-1.md`
 * trae diez guiones con destinos distintos y una tabla de control al final que nombra las dos
 * líneas a propósito. Un marcador de archivo daría un veredicto falso sobre las dos mitades.
 *
 * Lo que pasa con lo que NO declara: se queda como estaba —no se juzga, porque seguiría siendo
 * adivinar— pero la regla **avisa** que la pieza no declara canal. Un hueco anunciado se puede
 * cerrar; el de antes no se veía desde afuera.
 */

// 🔴 El marcador tiene que ser TODA la línea (`^…$` sobre la línea recortada), y no vale inline.
// El primer fixture lo cazó el día que se escribió: un párrafo que EXPLICA la convención —«ni un
// marcador `<!-- canal: … -->` en todo el archivo»— abría un bloque de verdad, con el canal «…»,
// y de paso apagaba el aviso de que el archivo no declaraba nada. Es el mismo modo de falla que
// obliga a que la exención de las prohibiciones sea por línea: documentar lo prohibido no puede
// ser hacerlo. Se diferencia a propósito de `<!-- guardrail:ignorar -->`, que sí es inline porque
// exenta LA línea en la que va; éste declara lo que viene DESPUÉS, así que no comparte renglón.
const CANAL_ABRE = /^<!--\s*canal:\s*([a-z0-9][a-z0-9 ,._-]*)\s*-->$/i;
const CANAL_CIERRA = /^<!--\s*\/\s*canal\s*-->$/i;

/**
 * Los bloques que declaran canal dentro de un archivo de prosa. Lo que está antes del primer
 * marcador —el encabezado del archivo, la nota de por qué se reordenó— no pertenece a ningún
 * bloque y no se juzga: no es copy de un canal, es la explicación de la pieza.
 */
export function bloquesDeCanal(archivo) {
  const bloques = [];
  let actual = null;
  leer(archivo).split('\n').forEach((cruda, i) => {
    const linea = cruda.trim();
    if (CANAL_CIERRA.test(linea)) { actual = null; return; }
    const abre = linea.match(CANAL_ABRE);
    if (abre) {
      actual = {
        canales: abre[1].split(',').map((c) => normalizar(c).trim()).filter(Boolean),
        linea: i + 1,
        texto: [],
      };
      bloques.push(actual);
      return;
    }
    // Misma exención por línea que las prohibiciones: una declaración, no un silenciador.
    if (actual && !EXENTA_LA_LINEA.test(linea)) actual.texto.push(linea);
  });
  return bloques;
}

export function mensajeLider(piezas = PIEZAS(), publicado = PUBLICADO()) {
  const hallazgos = [];
  const cfg = canon.mensajeLiderPorCanal ?? {};
  const vocab = cfg.vocabulario;
  if (!vocab) return hallazgos;

  // canal → línea que le toca ('bot' | 'servicio')
  const lineaDeCanal = new Map();
  for (const linea of ['bot', 'servicio']) {
    for (const canal of cfg[linea] ?? []) lineaDeCanal.set(canal, linea);
  }

  // 🔴 Los espacios se aplanan ANTES de buscar. El vocabulario son frases de varias palabras
  // ("software a la medida") y el markdown de `redes/` va envuelto a 100 columnas, así que la frase
  // se parte justo en el medio y `includes` no la encuentra. El fixture lo cazó el día que se
  // escribió: el bloque decía "hacemos software a la\nmedida" y la regla lo leyó como que sólo
  // nombraba el bot. Un falso NEGATIVO en una regla de guardia se ve igual que un verde.
  const aplanar = (t) => normalizar(t).replace(/\s+/g, ' ');
  const nombra = (texto, linea) =>
    (vocab[linea] ?? []).filter((frase) => aplanar(texto).includes(aplanar(frase)));

  /** El juicio, uno solo, para que la pieza de `copy/` y el bloque de `redes/` no puedan divergir. */
  const juzgar = ({ archivo, linea, canales, texto, canalDebeExistir }) => {
    const delBot = nombra(texto, 'bot');
    const delServicio = nombra(texto, 'servicio');

    if (delBot.length && delServicio.length) {
      hallazgos.push({
        nivel: 'error',
        regla: 'canal:mezcla-de-lineas',
        archivo,
        linea,
        mensaje:
          `la pieza nombra LAS DOS líneas ("${delBot[0]}" y "${delServicio[0]}"). ` +
          'El canon es explícito: dentro de una misma pieza hay UN solo mensaje. ' +
          'Mezclarlas es el riesgo que el cambio del 17-ago marcó como el real.',
      });
      return;
    }

    // Un aviso por BLOQUE, no por canal. Un guion que sale a Instagram y TikTok es UN hecho, no
    // dos: repetirlo por canal es cómo un tablero de avisos se vuelve papel tapiz y deja de leerse.
    const fuera = [];
    for (const canal of canales) {
      const meToca = lineaDeCanal.get(canal);
      if (!meToca) {
        // Un `plataforma` desconocido en `copy/` se salta como siempre; un canal ESCRITO a mano en
        // un marcador es una afirmación del autor, y si no está en el canon es un dedazo que deja
        // la pieza sin vigilar creyendo que la vigila.
        if (canalDebeExistir) {
          hallazgos.push({
            nivel: 'error',
            regla: 'canal:desconocido',
            archivo,
            linea,
            mensaje:
              `el marcador declara el canal "${canal}", que no está en canon.mensajeLiderPorCanal ` +
              `(${[...lineaDeCanal.keys()].join(' · ')}). Un canal mal escrito deja el bloque sin juzgar.`,
          });
        }
        continue;
      }
      const nombraLaOtra = meToca === 'bot' ? delServicio : delBot;
      const nombraLaSuya = meToca === 'bot' ? delBot : delServicio;
      if (nombraLaOtra.length && !nombraLaSuya.length) fuera.push({ canal, meToca, por: nombraLaOtra[0] });
    }

    if (fuera.length) {
      const { meToca, por } = fuera[0];
      const otra = meToca === 'bot' ? 'servicio' : 'bot';
      hallazgos.push({
        nivel: 'aviso',
        regla: 'canal:linea-que-no-le-toca',
        archivo,
        linea,
        mensaje:
          `${fuera.length > 1 ? `los canales "${fuera.map((f) => f.canal).join('", "')}" llevan` : `canal "${fuera[0].canal}" lleva`} ` +
          `la línea "${meToca}" y esta pieza sólo nombra "${otra}" (por "${por}"). ` +
          'Revisar contra 15-CANALES-Y-SECUENCIA.md, o cambiar el canal.',
      });
    }
  };

  for (const archivo of piezas) {
    const pieza = leerJson(archivo);
    const canal = pieza.plataforma;
    if (!canal) continue;

    // El texto de la pieza, sin los campos de metadatos: un `_congelado` que EXPLICA por qué se
    // relegó el carril nombra las dos líneas a propósito, y no es copy.
    const texto = Object.entries(pieza)
      .filter(([k]) => !k.startsWith('_') && k !== 'fuente')
      .map(([, v]) => (typeof v === 'string' ? v : JSON.stringify(v)))
      .join(' \n ');

    juzgar({ archivo, linea: 0, canales: [canal], texto, canalDebeExistir: false });
  }

  for (const archivo of publicado) {
    const bloques = bloquesDeCanal(archivo);
    if (!bloques.length) {
      hallazgos.push({
        nivel: 'aviso',
        regla: 'canal:sin-declarar',
        archivo,
        linea: 1,
        mensaje:
          'se publica y no declara su canal, así que `mensajeLider` no la juzga. Se cierra con ' +
          '`<!-- canal: … -->` arriba del bloque. No se adivina por el nombre del archivo.',
      });
      continue;
    }
    for (const bloque of bloques) {
      juzgar({
        archivo,
        linea: bloque.linea,
        canales: bloque.canales,
        texto: bloque.texto.join(' \n '),
        canalDebeExistir: true,
      });
    }
  }

  return hallazgos;
}

// ─────────────────────────────────────────────────────────────────────────────
// 8 · Arquitectura de oferta: los punteros de precio tienen que resolver
// ─────────────────────────────────────────────────────────────────────────────

/**
 * `canon.lineasDeOferta` (2026-09-05) baja la jerarquía L1/L2/L3 del doc 18 al canon. A propósito
 * **no copia ningún importe**: cada línea dice DÓNDE vive su precio (`precio.fuente` + `precio.ruta`)
 * en vez de repetirlo, porque una tercera copia del mismo número es una tercera fecha de
 * vencimiento — es el hallazgo H7 de la reconciliación, el snapshot que derivó 8 días por ser copia.
 *
 * Pero un puntero tiene un modo de falla propio y peor: **parece una referencia y no lo es.** Si
 * alguien renombra `precioConIva`, el número copiado al menos seguiría siendo un número viejo
 * visible; el puntero roto no se ve desde afuera. Por eso esta regla resuelve las rutas en cada
 * build. Es la diferencia entre que el bloque sea dato y que sea prosa dentro de un JSON.
 *
 * Rutas que entiende, y sólo estas tres formas (nada de un mini-lenguaje: lo que no se pueda
 * expresar así conviene que no exista):
 *   servicios[id].campo   → busca por id en catalogo.servicios
 *   coleccion[].campo     → exige que TODOS los elementos tengan el campo numérico
 *   a.b.c                 → camino de propiedades
 */
export function lineasDeOferta() {
  const hallazgos = [];
  const cfg = canon.lineasDeOferta;
  if (!cfg) return hallazgos;
  const fallo = (mensaje) =>
    hallazgos.push({ nivel: 'error', regla: 'oferta:puntero-roto', archivo: 'data/canon.json', linea: 0, mensaje });

  const raices = { canon, catalogo };
  const numero = (v) => typeof v === 'number' && Number.isFinite(v) && v > 0;

  const resolver = (fuente, ruta) => {
    const raiz = raices[fuente];
    if (!raiz) return `fuente "${fuente}" desconocida (usá "canon" o "catalogo")`;
    const porId = ruta.match(/^([A-Za-z]+)\[([^\]]*)\]\.(.+)$/);
    if (porId) {
      const [, coleccion, id, campo] = porId;
      const lista = raiz[coleccion];
      if (!Array.isArray(lista)) return `"${coleccion}" no es una lista en ${fuente}.json`;
      if (id === '') {
        const malos = lista.filter((x) => !numero(x?.[campo]));
        return malos.length ? `${malos.length} de ${lista.length} elementos de "${coleccion}" no tienen "${campo}" numérico` : null;
      }
      const item = lista.find((x) => x?.id === id);
      if (!item) return `no existe "${id}" en ${fuente}.json → ${coleccion}`;
      return numero(item[campo]) ? null : `"${id}" no tiene un "${campo}" numérico`;
    }
    let valor = raiz;
    for (const paso of ruta.split('.')) {
      if (valor == null || typeof valor !== 'object') return `el camino "${ruta}" se corta en "${paso}"`;
      valor = valor[paso];
    }
    return numero(valor) ? null : `"${ruta}" no resuelve a un número positivo`;
  };

  const formas = Object.keys(cfg.reglaDePublicacion?.formas ?? {});
  const definidas = Object.keys(cfg.lineas ?? {});

  for (const [id, linea] of Object.entries(cfg.lineas ?? {})) {
    const p = linea.precio ?? {};
    if (!formas.includes(p.forma)) {
      fallo(`${id}: forma de precio "${p.forma}" no está en reglaDePublicacion.formas (${formas.join(' · ')})`);
    }
    if (p.forma === 'silencio') {
      fallo(`${id}: ninguna línea publicada lleva silencio. Es la mitad de la regla que el muro de «contáctanos» ya nos cobró en rebote.`);
    }
    const error = resolver(p.fuente, String(p.ruta ?? ''));
    if (error) fallo(`${id}: el puntero de precio no resuelve → ${error}. Un puntero roto parece una referencia y no lo es.`);
  }

  // El orden de apertura nombra líneas que existen, y a todas: media jerarquía es peor que ninguna.
  const orden = cfg.ordenDeApertura ?? [];
  const faltan = definidas.filter((id) => !orden.includes(id));
  const sobran = orden.filter((id) => !definidas.includes(id));
  if (faltan.length) fallo(`ordenDeApertura no nombra ${faltan.join(', ')}: media jerarquía no ordena nada`);
  if (sobran.length) fallo(`ordenDeApertura nombra ${sobran.join(', ')}, que no está definida en lineas`);

  return hallazgos;
}

export const TODAS = [
  enlacesRotos,
  preciosDePlan,
  prohibiciones,
  piezasDeCopy,
  swipeConEvidencia,
  registroDeLinks,
  mensajeLider,
  lineasDeOferta,
];
