#!/usr/bin/env node
/**
 * Tablero semanal: costo por lead calificado, costo por demo, CAC y margen real.
 *
 * Cierra el círculo de 08-TRACKING-SETUP §6 y alimenta el tablero de los viernes
 * (13-PLAN-12-CLIENTES §8) con números, no con impresiones.
 *
 * Lo que hace que esto no sea una hoja de cálculo con más pasos:
 *
 *  1. La **regla de corte** de la ronda ($25.000 por lead calificado) se CALCULA y sale en rojo.
 *     Escrita en un doc, esa regla se cumple cuando uno quiere; calculada, aparece sola el viernes
 *     que toca parar.
 *  2. Todo número declara su **fuenteDato**. Hoy varios son `manual` y así se imprime: el hueco
 *     honesto del README de este módulo era precisamente no fingir que el conteo del bot es
 *     automático.
 *  3. Todo `origin` tiene que existir en `data/links.json`. Un lead sin origen registrado no se
 *     puede evaluar, y esa es toda la razón de ser de `src/links`.
 *  4. El margen sale de `data/catalogo.json`, no de una estimación al vuelo, y arrastra el estado
 *     (`vigente` / `supuesto`) de los costos que usó.
 *
 *   npm run reportes                                  → tablero de la última semana cargada
 *   npm run reportes tablero -- --semana=2026-W31
 *   npm run reportes ronda -- --ronda=R1              → la regla de corte sobre la ronda completa
 *   npm run reportes registrar -- --semana=2026-W31 --origin=meta_duenopyme_c1 \
 *       --gasto=250000 --leads=12 --calificados=5 --demos=2 \
 *       --cierres=bot-pro:1 --ronda=R1 --fuente-gasto=export-meta --fuente-demos=calendly
 *   npm run reportes validar                          → reglas de consistencia (falla el CI)
 */
import { canon, catalogo, servicio } from '../lib/canon.js';
import { escribirJson, leerJson } from '../lib/io.js';
import { cop, pct } from '../lib/texto.js';

const REGISTRO = 'data/semanas.json';
const T = canon.tablero;

const args = process.argv.slice(2);
const comando = args.find((a) => !a.startsWith('--')) ?? 'tablero';
const flag = (n, d = '') =>
  args.find((a) => a.startsWith(`--${n}=`))?.split('=').slice(1).join('=') ?? d;
const num = (n, d = 0) => {
  const v = flag(n, '');
  if (v === '') return d;
  const parsed = Number(v.replace(/[.$,\s]/g, ''));
  if (!Number.isFinite(parsed)) {
    salir(`--${n} no es un número: "${v}"`);
  }
  return parsed;
};

function salir(mensaje) {
  console.error(`✖ ${mensaje}`);
  process.exit(1);
}

// ── Semana ISO ──────────────────────────────────────────────────────────────

/**
 * Semana ISO de hoy en Bogotá. Igual que en src/links: en la noche colombiana UTC ya cambió de día
 * y el registro quedaría en la semana equivocada justo los viernes, que es cuando se llena.
 */
function semanaActual() {
  const hoy = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Bogota' });
  return semanaIso(new Date(`${hoy}T12:00:00Z`));
}

function semanaIso(fecha) {
  const d = new Date(Date.UTC(fecha.getUTCFullYear(), fecha.getUTCMonth(), fecha.getUTCDate()));
  // ISO 8601: la semana 1 es la que contiene el primer jueves del año.
  const dia = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dia);
  const enero1 = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const semana = Math.ceil(((d - enero1) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(semana).padStart(2, '0')}`;
}

const FORMATO_SEMANA = /^\d{4}-W\d{2}$/;

// ── Cálculo ─────────────────────────────────────────────────────────────────

/** Divide sin mentir: sin denominador no hay costo, hay "todavía no se sabe". */
const porUnidad = (gasto, unidades) => (unidades > 0 ? gasto / unidades : null);

/**
 * Un cierre es un CLIENTE ganado, no una línea vendida. El setup y los excedentes viajan siempre
 * pegados a una suscripción: contarlos aparte partiría el CAC por dos y lo haría ver la mitad de lo
 * que cuesta traer un cliente, que es exactamente el número que no se puede maquillar.
 */
const ES_CIERRE_DE_CLIENTE = new Set(['recurrente', 'mixto', 'proyecto']);

const cierresTotal = (canal) =>
  (canal.cierres ?? []).reduce(
    (n, c) => n + (ES_CIERRE_DE_CLIENTE.has(servicio(c.servicio)?.tipo) ? (c.cantidad ?? 0) : 0),
    0,
  );

/**
 * Ingreso y margen MENSUAL recurrente de los cierres de un canal, contra data/catalogo.json.
 * Los servicios de pago único (setup, proyectos) suman al ingreso del mes pero no al recurrente:
 * mezclarlos infla el MRR, que es el número con el que se decide si el negocio se sostiene.
 */
function economiaDe(canal) {
  let mrr = 0;
  let margenMes = 0;
  let unico = 0;
  let margenUnico = 0;
  const supuestos = new Set();

  for (const c of canal.cierres ?? []) {
    const s = servicio(c.servicio);
    if (!s) continue;
    const n = c.cantidad ?? 0;
    if (s.estado !== 'vigente') supuestos.add(s.id);
    if (s.tipo === 'recurrente' || s.tipo === 'mixto') {
      const precio = s.precioRecurrente ?? s.precio ?? 0;
      mrr += precio * n;
      margenMes += (precio - (s.costoMes ?? 0)) * n;
    }
    if (s.tipo === 'unico' || s.tipo === 'proyecto' || s.tipo === 'mixto') {
      const precio = s.tipo === 'mixto' ? (s.precio ?? 0) : (s.precio ?? 0);
      unico += precio * n;
      margenUnico += (precio - (s.costoUnico ?? 0)) * n;
    }
  }
  return { mrr, margenMes, unico, margenUnico, supuestos: [...supuestos] };
}

function metricas(canal) {
  const gasto = canal.gasto ?? 0;
  const cierres = cierresTotal(canal);
  const eco = economiaDe(canal);
  return {
    gasto,
    leads: canal.leads ?? 0,
    calificados: canal.calificados ?? 0,
    demos: canal.demos ?? 0,
    cierres,
    porCalificado: porUnidad(gasto, canal.calificados ?? 0),
    porDemo: porUnidad(gasto, canal.demos ?? 0),
    cac: porUnidad(gasto, cierres),
    ...eco,
    // Cuántos meses de margen recurrente tarda en devolverse lo que costó traer a esos clientes.
    mesesRecuperoCac: eco.margenMes > 0 ? gasto / eco.margenMes : null,
  };
}

const esPagada = (origin) => T.fuentesPagadas.includes(String(origin).split('_')[0]);

// ── Salida ──────────────────────────────────────────────────────────────────

const money = (v) => (v === null ? '—' : cop(v));
const fila = (cols, anchos) =>
  cols.map((c, i) => (i === 0 ? String(c).padEnd(anchos[i]) : String(c).padStart(anchos[i]))).join(' ');

const ANCHOS = [26, 11, 6, 6, 6, 7, 12, 11, 12];

function imprimirSemana(semana) {
  const canales = semana.canales ?? [];
  console.log(`\n  Semana ${semana.semana}${semana.ronda ? `  ·  ronda ${semana.ronda}` : ''}\n`);
  console.log(
    '  ' +
      fila(
        ['origin', 'gasto', 'leads', 'calif', 'demos', 'cierres', '$/calificado', '$/demo', 'CAC'],
        ANCHOS,
      ),
  );
  console.log('  ' + '─'.repeat(ANCHOS.reduce((a, b) => a + b, 0) + ANCHOS.length - 1));

  const total = { gasto: 0, leads: 0, calificados: 0, demos: 0, cierres: 0, mrr: 0, margenMes: 0 };
  const supuestos = new Set();

  for (const canal of canales) {
    const m = metricas(canal);
    const alerta = esPagada(canal.origin) && m.porCalificado !== null && m.porCalificado > T.cortePorLeadCalificado;
    console.log(
      '  ' +
        fila(
          [
            canal.origin.slice(0, ANCHOS[0]),
            cop(m.gasto),
            m.leads,
            m.calificados,
            m.demos,
            m.cierres,
            money(m.porCalificado) + (alerta ? ' ▲' : ''),
            money(m.porDemo),
            money(m.cac),
          ],
          ANCHOS,
        ),
    );
    for (const k of ['gasto', 'leads', 'calificados', 'demos']) total[k] += m[k];
    total.cierres += m.cierres;
    total.mrr += m.mrr;
    total.margenMes += m.margenMes;
    m.supuestos.forEach((s) => supuestos.add(s));
  }

  console.log('  ' + '─'.repeat(ANCHOS.reduce((a, b) => a + b, 0) + ANCHOS.length - 1));
  console.log(
    '  ' +
      fila(
        [
          'TOTAL',
          cop(total.gasto),
          total.leads,
          total.calificados,
          total.demos,
          total.cierres,
          money(porUnidad(total.gasto, total.calificados)),
          money(porUnidad(total.gasto, total.demos)),
          money(porUnidad(total.gasto, total.cierres)),
        ],
        ANCHOS,
      ),
  );

  // El KPI que manda no es el gasto: son las demos.
  const meta = T.metaDemosSemana;
  const señal = total.demos >= meta ? '✓' : '✖';
  console.log(
    `\n  ${señal} demos agendadas: ${total.demos} / ${meta} de meta semanal  ← el KPI que manda (13 §8)`,
  );
  if (total.mrr > 0) {
    const recupero = total.margenMes > 0 ? total.gasto / total.margenMes : null;
    console.log(
      `  + MRR nuevo: ${cop(total.mrr)} · margen recurrente/mes: ${cop(total.margenMes)}` +
        (recupero !== null ? ` · lo gastado se recupera en ${recupero.toFixed(1)} mes(es) de margen` : ''),
    );
  }
  if (supuestos.size) {
    console.log(`  ▲ margen calculado con costos supuestos: ${[...supuestos].join(', ')} (data/catalogo.json)`);
  }

  imprimirFuentes(canales);
  imprimirNotas(canales);
}

function imprimirFuentes(canales) {
  const cuenta = new Map();
  for (const canal of canales) {
    for (const origen of Object.values(canal.fuenteDato ?? {})) {
      cuenta.set(origen, (cuenta.get(origen) ?? 0) + 1);
    }
  }
  if (!cuenta.size) return;
  const partes = [...cuenta.entries()].sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} (${v})`);
  console.log(`\n  fuente de los datos: ${partes.join(' · ')}`);
  const manuales = cuenta.get('manual') ?? 0;
  if (manuales) {
    console.log(`  ${manuales} dato(s) capturados a mano. No es un defecto del reporte: es el estado real de la medición.`);
  }
}

function imprimirNotas(canales) {
  const notas = canales.filter((c) => c.nota).map((c) => `  · ${c.origin}: ${c.nota}`);
  if (notas.length) console.log('\n  notas:\n' + notas.join('\n'));
  console.log();
}

// ── Comandos ────────────────────────────────────────────────────────────────

function cargar() {
  return leerJson(REGISTRO);
}

function tablero() {
  const { semanas } = cargar();
  if (!semanas.length) {
    console.log(
      '\n  Todavía no hay ninguna semana cargada.\n\n' +
        '  Se llena el viernes, en 2 minutos:\n' +
        '    npm run reportes registrar -- --semana=' +
        semanaActual() +
        ' --origin=<origin> --gasto=0 --leads=0 --calificados=0 --demos=0\n\n' +
        '  El `origin` sale de `npm run link listar`.\n',
    );
    return;
  }
  const pedida = flag('semana');
  const semana = pedida ? semanas.find((s) => s.semana === pedida) : semanas[0];
  if (!semana) salir(`no hay datos de la semana "${pedida}". Cargadas: ${semanas.map((s) => s.semana).join(', ')}`);
  imprimirSemana(semana);
}

/**
 * La regla de corte se decide sobre la RONDA, no sobre una semana suelta: una semana mala no
 * significa que la oferta esté mal, y esperar al final de la ronda para mirar significa gastarla
 * completa antes de saberlo.
 */
function ronda() {
  const { semanas } = cargar();
  const id = flag('ronda') || semanas.find((s) => s.ronda)?.ronda;
  if (!id) return console.log('\n  Ninguna semana declara ronda todavía.\n');

  const cfg = T.rondas.find((r) => r.id === id);
  const delaRonda = semanas.filter((s) => s.ronda === id);
  if (!delaRonda.length) salir(`no hay semanas cargadas con ronda "${id}"`);

  const porOrigin = new Map();
  let gastoTotal = 0;
  let demosTotal = 0;
  for (const semana of delaRonda) {
    for (const canal of semana.canales ?? []) {
      const acc = porOrigin.get(canal.origin) ?? { gasto: 0, calificados: 0, demos: 0, cierres: 0 };
      acc.gasto += canal.gasto ?? 0;
      acc.calificados += canal.calificados ?? 0;
      acc.demos += canal.demos ?? 0;
      acc.cierres += cierresTotal(canal);
      porOrigin.set(canal.origin, acc);
      gastoTotal += canal.gasto ?? 0;
      demosTotal += canal.demos ?? 0;
    }
  }

  console.log(`\n  Ronda ${id}${cfg ? ` · ${cfg.objetivo} · presupuesto ${cop(cfg.presupuesto)} (${cfg.cuando})` : ''}`);
  console.log(`  ${delaRonda.length} semana(s) cargada(s): ${delaRonda.map((s) => s.semana).join(', ')}\n`);

  const pagados = [...porOrigin.entries()].filter(([origin]) => esPagada(origin));
  for (const [origin, acc] of [...porOrigin.entries()].sort((a, b) => b[1].gasto - a[1].gasto)) {
    const costo = porUnidad(acc.gasto, acc.calificados);
    const bajoCorte = costo !== null && costo <= T.cortePorLeadCalificado;
    const marca = !esPagada(origin) ? ' ' : bajoCorte ? '✓' : '✖';
    console.log(
      `  ${marca} ${origin.padEnd(26)} ${cop(acc.gasto).padStart(11)}  ${String(acc.calificados).padStart(3)} calif  ${money(costo).padStart(12)} / calificado`,
    );
  }

  if (cfg) {
    const usado = gastoTotal / cfg.presupuesto;
    console.log(`\n  ejecutado: ${cop(gastoTotal)} de ${cop(cfg.presupuesto)} (${pct(usado)})`);
  }
  console.log(`  demos agendadas en la ronda: ${demosTotal}`);

  // La regla, calculada. Solo cuenta si hay gasto pagado con calificados medidos: sin denominador
  // no hay veredicto, y declarar "parar" sin datos es tan malo como no parar con ellos.
  const conDatos = pagados.filter(([, a]) => a.gasto > 0 && a.calificados > 0);
  const alguienBajoCorte = conDatos.some(([, a]) => a.gasto / a.calificados <= T.cortePorLeadCalificado);
  const corte = cop(T.cortePorLeadCalificado);

  console.log('');
  if (!conDatos.length) {
    console.log(`  ⋯ regla de corte (${corte} por lead calificado): sin datos suficientes todavía.`);
  } else if (alguienBajoCorte) {
    const mejor = conDatos.sort((a, b) => a[1].gasto / a[1].calificados - b[1].gasto / b[1].calificados)[0];
    console.log(
      `  ✓ regla de corte SUPERADA: "${mejor[0]}" está en ${cop(mejor[1].gasto / mejor[1].calificados)} por lead calificado (corte: ${corte}).`,
    );
    console.log('    Hay un ángulo que funciona: la ronda siguiente se puede gastar sobre ése.');
  } else {
    console.log(`  🔴 REGLA DE CORTE: ningún ángulo baja de ${corte} por lead calificado.`);
    console.log('    Se PARA la pauta y se retrabaja la oferta antes de gastar la ronda siguiente');
    console.log('    (13-PLAN-12-CLIENTES §5). Gastar la que sigue sin cambiar nada es repetir el');
    console.log('    experimento esperando otro resultado.');
  }
  console.log();
}

function registrar() {
  const semana = flag('semana') || semanaActual();
  if (!FORMATO_SEMANA.test(semana)) salir(`--semana debe tener el formato AAAA-Wnn (recibido: "${semana}")`);

  const origin = flag('origin');
  if (!origin) salir('falta --origin. Sale de `npm run link listar`.');

  const links = leerJson('data/links.json').links ?? [];
  if (!links.some((l) => l.origin === origin)) {
    salir(
      `el origin "${origin}" no está en data/links.json.\n` +
        '  Un lead sin origen registrado no se puede evaluar. Créalo primero:\n' +
        '    npm run link nuevo -- --fuente=... --audiencia=... --creatividad=...',
    );
  }

  const cierres = parsearCierres(flag('cierres'));
  const registro = cargar();
  let entrada = registro.semanas.find((s) => s.semana === semana);
  if (!entrada) {
    entrada = { semana, ronda: flag('ronda') || null, canales: [] };
    registro.semanas.unshift(entrada);
    registro.semanas.sort((a, b) => b.semana.localeCompare(a.semana));
  } else if (flag('ronda')) {
    entrada.ronda = flag('ronda');
  }

  const fuenteDato = {};
  for (const campo of ['gasto', 'leads', 'calificados', 'demos', 'cierres']) {
    const f = flag(`fuente-${campo}`, campo === 'gasto' ? 'export-meta' : 'manual');
    if (!T.fuentesDeDato.includes(f)) {
      salir(`--fuente-${campo}="${f}" no es una fuente conocida. Válidas: ${T.fuentesDeDato.join(' · ')}`);
    }
    fuenteDato[campo] = f;
  }

  const canal = {
    origin,
    gasto: num('gasto'),
    leads: num('leads'),
    calificados: num('calificados'),
    demos: num('demos'),
    cierres,
    fuenteDato,
    nota: flag('nota') || null,
  };
  if (canal.calificados > canal.leads) {
    salir(`no puede haber más calificados (${canal.calificados}) que leads (${canal.leads}).`);
  }

  const i = entrada.canales.findIndex((c) => c.origin === origin);
  const reemplaza = i >= 0;
  if (reemplaza) entrada.canales[i] = canal;
  else entrada.canales.push(canal);

  escribirJson(REGISTRO, registro);
  console.log(`\n✓ ${reemplaza ? 'actualizado' : 'registrado'}  ${semana} · ${origin}\n`);
  imprimirSemana(entrada);
}

/** "bot-pro:1,setup:1" → [{servicio:'bot-pro',cantidad:1},{servicio:'setup',cantidad:1}] */
function parsearCierres(texto) {
  if (!texto) return [];
  return texto.split(',').filter(Boolean).map((par) => {
    const [id, cantidad = '1'] = par.split(':');
    if (!servicio(id.trim())) {
      salir(
        `"${id.trim()}" no existe en data/catalogo.json. Disponibles: ${catalogo.servicios.map((s) => s.id).join(', ')}`,
      );
    }
    return { servicio: id.trim(), cantidad: Number(cantidad) };
  });
}

function validar() {
  const { semanas } = cargar();
  const problemas = [];
  const avisos = [];
  const origins = new Set((leerJson('data/links.json').links ?? []).map((l) => l.origin));

  for (const semana of semanas) {
    const donde = `semana ${semana.semana}`;
    if (!FORMATO_SEMANA.test(semana.semana ?? '')) {
      problemas.push(`✖ ${donde}: el formato debe ser AAAA-Wnn`);
    }
    if (semana.ronda && !T.rondas.some((r) => r.id === semana.ronda)) {
      problemas.push(`✖ ${donde}: ronda "${semana.ronda}" no existe en canon.tablero.rondas`);
    }
    const vistos = new Set();
    for (const canal of semana.canales ?? []) {
      const id = `${donde} · ${canal.origin}`;
      if (vistos.has(canal.origin)) {
        problemas.push(`✖ ${id}: el mismo origin aparece dos veces; se contaría doble`);
      }
      vistos.add(canal.origin);

      if (!origins.has(canal.origin)) {
        problemas.push(`✖ ${id}: no está en data/links.json. Sin origen registrado el lead no se puede atribuir.`);
      }
      for (const campo of ['gasto', 'leads', 'calificados', 'demos']) {
        if (!canal.fuenteDato?.[campo]) {
          problemas.push(`✖ ${id}: "${campo}" sin fuenteDato declarada`);
        } else if (!T.fuentesDeDato.includes(canal.fuenteDato[campo])) {
          problemas.push(`✖ ${id}: fuenteDato "${canal.fuenteDato[campo]}" de "${campo}" no es válida`);
        }
      }
      if ((canal.calificados ?? 0) > (canal.leads ?? 0)) {
        problemas.push(`✖ ${id}: ${canal.calificados} calificados sobre ${canal.leads} leads`);
      }
      for (const c of canal.cierres ?? []) {
        if (!servicio(c.servicio)) {
          problemas.push(`✖ ${id}: el cierre "${c.servicio}" no existe en data/catalogo.json`);
        }
      }
      if (cierresTotal(canal) > 0 && (canal.demos ?? 0) === 0) {
        avisos.push(`▲ ${id}: cierres sin demos. Si vino por referido está bien; si no, falta cargar la demo.`);
      }
      if ((canal.gasto ?? 0) > 0 && (canal.leads ?? 0) === 0) {
        avisos.push(`▲ ${id}: hubo gasto y cero leads. Revisar que el origin del anuncio sea el mismo de aquí.`);
      }
    }
  }

  if (problemas.length) {
    console.log('\n' + problemas.join('\n') + '\n');
    if (avisos.length) console.log(avisos.join('\n') + '\n');
    process.exit(1);
  }
  if (!semanas.length) {
    console.log('\n✓ reportes: sin semanas cargadas todavía (el tablero arranca con la ronda 1)');
  } else {
    console.log(`\n✓ reportes: ${semanas.length} semana(s) consistentes`);
  }
  if (avisos.length) console.log('\n' + avisos.join('\n'));
  console.log();
}

const COMANDOS = { tablero, ronda, registrar, validar };
if (!COMANDOS[comando]) {
  console.error(`Comando desconocido "${comando}". Usa: tablero | ronda | registrar | validar`);
  process.exit(1);
}
COMANDOS[comando]();
