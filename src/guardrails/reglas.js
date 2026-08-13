import { existe, leer, leerJson, lineaDe, listar } from '../lib/io.js';
import { canon, preciosVigentes } from '../lib/canon.js';
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

const ARCHIVOS_MD = () => listar('.md');
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
    const archivos = regla.alcance === 'todo' ? [...ARCHIVOS_MD(), ...piezas] : piezas;

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

export const TODAS = [
  enlacesRotos,
  preciosDePlan,
  prohibiciones,
  piezasDeCopy,
  swipeConEvidencia,
  registroDeLinks,
];
