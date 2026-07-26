#!/usr/bin/env node
/**
 * Generador y registro de links con atribución.
 *
 * El problema que resuelve: los UTMs SE PIERDEN al saltar a Telegram o WhatsApp
 * (08-TRACKING-SETUP §2). Por eso cada pieza necesita una cadena `origin` codificada que viaje
 * DENTRO del bot (`start`), dentro del texto de WhatsApp y en la query de Calendly. Escrita a mano
 * se rompe: Telegram descarta en silencio cualquier `start` con caracteres raros o de más de 64.
 *
 *   npm run link nuevo -- --fuente=meta --audiencia=duenopyme --creatividad=c1 --campana=traffic_prospecting_co_2026q3
 *   npm run link listar
 *   npm run link ver -- meta_duenopyme_c1
 */
import { canon } from '../lib/canon.js';
import { cargarEnv, env } from '../lib/env.js';
import { escribirJson, leerJson } from '../lib/io.js';
import { normalizar } from '../lib/texto.js';

cargarEnv();

const REGISTRO = 'data/links.json';
const args = process.argv.slice(2);
const comando = args.find((a) => !a.startsWith('--')) ?? 'listar';
const flag = (n, d = '') => args.find((a) => a.startsWith(`--${n}=`))?.split('=').slice(1).join('=') ?? d;

/** Deja un fragmento apto para Telegram: sin tildes, sin espacios, sin símbolos. */
const limpiar = (s) => normalizar(s).replace(/[^a-z0-9]+/g, '');

/** Fecha de Bogotá, no UTC: en la noche colombiana UTC ya cambió de día y el registro mentiría. */
const hoyBogota = () => new Date().toLocaleDateString('en-CA', { timeZone: 'America/Bogota' });

function construir({ fuente, audiencia, creatividad, campana, medium, destino, nota, vertical }) {
  const origin = [limpiar(fuente), limpiar(audiencia), limpiar(creatividad)].filter(Boolean).join('_');
  const re = new RegExp(canon.utm.regexStart);
  if (!re.test(origin)) {
    throw new Error(`el origin generado ("${origin}") no cumple ${canon.utm.regexStart}. Acorta los fragmentos.`);
  }

  const base = destino || `${env('LANDING_BASE_URL', 'https://soltyai.com')}/ir`;
  const url = new URL(base);
  url.searchParams.set('utm_source', limpiar(fuente));
  url.searchParams.set('utm_medium', medium);
  url.searchParams.set('utm_campaign', campana);
  url.searchParams.set('utm_content', creatividad);
  if (audiencia) url.searchParams.set('utm_term', audiencia);
  url.searchParams.set('origin', origin);

  const bot = env('TELEGRAM_BOT_USERNAME', 'BOT_SIN_CONFIGURAR');
  const whatsapp = env('WHATSAPP_NUMERO', '');
  const calendly = env('CALENDLY_URL', '');

  const salida = {
    origin,
    fuente: limpiar(fuente),
    medium,
    campana,
    creatividad,
    audiencia,
    vertical: vertical || null,
    nota: nota || null,
    creado: hoyBogota(),
    url: url.toString(),
    telegram: `https://t.me/${bot}?start=${origin}`,
    whatsapp: whatsapp ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hola, vengo de ${fuente} (${origin}) y quiero ver el bot`)}` : null,
    calendly: calendly ? `${calendly}?utm_source=${limpiar(fuente)}&utm_content=${creatividad}&a1=${origin}` : null,
  };

  if (bot === 'BOT_SIN_CONFIGURAR') salida._aviso = 'TELEGRAM_BOT_USERNAME sin definir en .env: el deep-link de Telegram NO sirve todavía';
  return salida;
}

function nuevo() {
  const fuente = flag('fuente');
  const audiencia = flag('audiencia');
  const creatividad = flag('creatividad');
  if (!fuente || !creatividad) {
    console.error('Faltan datos: --fuente y --creatividad son obligatorios.\n' +
      `  fuentes conocidas: ${canon.utm.source.join(' · ')}`);
    process.exit(1);
  }
  if (!canon.utm.source.includes(limpiar(fuente))) {
    console.error(`⚠ "${fuente}" no está en canon.utm.source (${canon.utm.source.join(' · ')}). Si es una fuente nueva, agrégala a data/canon.json en el mismo commit.`);
  }

  const link = construir({
    fuente,
    audiencia,
    creatividad,
    campana: flag('campana', `traffic_${new Date().getFullYear()}`),
    medium: flag('medium', 'paid_social'),
    destino: flag('destino'),
    nota: flag('nota'),
    vertical: flag('vertical'),
  });

  const registro = leerJson(REGISTRO);
  if (registro.links.some((l) => l.origin === link.origin)) {
    console.error(`✖ ya existe un link con origin "${link.origin}". Cambia la creatividad o la audiencia: dos piezas con el mismo origin se cuentan como una sola fuente.`);
    process.exit(1);
  }
  registro.links.unshift(link);
  escribirJson(REGISTRO, registro);

  console.log(`\n✓ registrado  origin: ${link.origin}\n`);
  console.log(`  anuncio →  ${link.url}`);
  console.log(`  telegram → ${link.telegram}`);
  if (link.whatsapp) console.log(`  whatsapp → ${link.whatsapp}`);
  if (link.calendly) console.log(`  calendly → ${link.calendly}`);
  if (link._aviso) console.log(`\n  ⚠ ${link._aviso}`);
  console.log(`\n  Guardado en ${REGISTRO}. Ponle este mismo origin a la pieza en copy/.`);
}

function listar() {
  const { links } = leerJson(REGISTRO);
  if (!links.length) return console.log('Registro vacío. Crea el primero con: npm run link nuevo -- --fuente=meta --audiencia=duenopyme --creatividad=c1');
  console.log(`\n${links.length} link(s):\n`);
  for (const l of links) {
    console.log(`  ${l.creado}  ${l.origin.padEnd(28)} ${l.fuente}/${l.medium}${l.vertical ? ` · ${l.vertical}` : ''}${l.nota ? ` — ${l.nota}` : ''}`);
  }
  console.log();
}

function ver() {
  const buscado = args.find((a) => !a.startsWith('--') && a !== 'ver');
  const link = leerJson(REGISTRO).links.find((l) => l.origin === buscado);
  if (!link) {
    console.error(`No hay ningún link con origin "${buscado}".`);
    process.exit(1);
  }
  console.log(JSON.stringify(link, null, 2));
}

const COMANDOS = { nuevo, listar, ver };
if (!COMANDOS[comando]) {
  console.error(`Comando desconocido "${comando}". Usa: nuevo | listar | ver`);
  process.exit(1);
}
COMANDOS[comando]();
