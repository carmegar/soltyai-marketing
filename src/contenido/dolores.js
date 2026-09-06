#!/usr/bin/env node
/**
 * Banco de dolores — el CLI que lo valida y arma las tandas de grabación.
 *
 * NO es «la máquina de contenido» de este mismo directorio (README.md), que sigue bloqueada hasta
 * las 8 semanas a mano. Esto no escribe nada, no llama a ninguna API y no publica: lee
 * `data/dolores.json`, verifica que no se pudra y decide qué se graba primero. La diferencia
 * importa: lo que está bloqueado es generar contenido, no ordenar la materia prima.
 *
 *   npm run dolores                             → tabla completa, agrupada por sector
 *   npm run dolores validar                     → reglas del banco (falla el CI)
 *   npm run dolores tanda -- --n=10             → los 10 siguientes a grabar, en orden
 *   npm run dolores tanda -- --n=10 --nivel=2   → la tanda, filtrada
 *   npm run dolores ver -- <id>                 → la ficha completa de un dolor
 */
import { leerJson } from '../lib/io.js';

const banco = leerJson('data/dolores.json');

const args = process.argv.slice(2);
const comando = args.find((a) => !a.startsWith('--')) ?? 'listar';
const suelto = args.filter((a) => !a.startsWith('--')).slice(1);
const flag = (n, d) => {
  const v = args.find((a) => a.startsWith(`--${n}=`))?.split('=')[1];
  return v === undefined ? d : v;
};

const FACTOR = { dia: banco.parametros.diasHabilesMes, semana: banco.parametros.semanasMes, mes: 1 };

/** Horas al mes que se van en la tarea. Es aritmética de un supuesto declarado, no un dato de mercado. */
export function horasMes(d) {
  const f = FACTOR[d.frecuencia.unidad];
  if (f === undefined) return 0;
  return (d.frecuencia.veces * f * d.frecuencia.minutos) / 60;
}

const horas = (h) => (h >= 10 ? Math.round(h) : Math.round(h * 10) / 10);

// ─────────────────────────────────────────────────────────────────────────────
// Validación — un banco que se pudre en silencio es peor que no tenerlo
// ─────────────────────────────────────────────────────────────────────────────
function validar() {
  const problemas = [];
  const avisos = [];
  const vistos = new Set();
  const sectores = Object.keys(banco.sectores);
  const niveles = Object.keys(banco.niveles).filter((k) => !k.startsWith('_'));
  const SOLUCIONES = ['bot', 'a-la-medida', 'integracion'];

  for (const d of banco.dolores) {
    const donde = d.id ?? '(sin id)';
    if (!d.id || !/^[a-z0-9-]+$/.test(d.id)) problemas.push(`✖ ${donde}: id vacío o con mayúsculas/espacios`);
    if (vistos.has(d.id)) problemas.push(`✖ ${donde}: id repetido`);
    vistos.add(d.id);

    for (const campo of ['tarea', 'escena', 'costoOculto', 'conTecnologia']) {
      if (typeof d[campo] !== 'string' || d[campo].trim().length < 10) {
        problemas.push(`✖ ${donde}: falta "${campo}" o es demasiado corto para servir de guion`);
      }
    }

    // La escena es el gancho de los primeros 3 segundos: si no interpela, no es una escena.
    if (typeof d.escena === 'string' && !d.escena.includes('?')) {
      avisos.push(`▲ ${donde}: la escena no pregunta nada. El gancho de 0-3 s se le habla al espectador.`);
    }
    if (typeof d.escena === 'string' && d.escena.length > 110) {
      avisos.push(`▲ ${donde}: la escena tiene ${d.escena.length} caracteres; en 3 segundos no cabe.`);
    }

    if (!Array.isArray(d.sector) || d.sector.length === 0) problemas.push(`✖ ${donde}: sin sector`);
    else for (const s of d.sector) if (!sectores.includes(s)) problemas.push(`✖ ${donde}: sector "${s}" no existe en el banco`);

    if (!niveles.includes(String(d.nivel))) problemas.push(`✖ ${donde}: nivel "${d.nivel}" fuera de 1-3`);
    if (!SOLUCIONES.includes(d.solucion)) problemas.push(`✖ ${donde}: solucion "${d.solucion}" no es ${SOLUCIONES.join(' | ')}`);

    const f = d.frecuencia;
    if (!f || FACTOR[f?.unidad] === undefined) problemas.push(`✖ ${donde}: frecuencia sin unidad válida (dia|semana|mes)`);
    else {
      if (!(f.veces > 0)) problemas.push(`✖ ${donde}: frecuencia.veces tiene que ser > 0`);
      if (typeof f.minutos !== 'number' || f.minutos < 0) problemas.push(`✖ ${donde}: frecuencia.minutos inválido`);
      // 🔴 Esta es la regla que protege la honestidad del video. Un número sin `estado` y sin
      // `base` es una cifra inventada con apariencia de dato, y en cámara se vuelve una mentira.
      if (f.estado !== 'supuesto' && f.estado !== 'vigente') {
        problemas.push(`✖ ${donde}: frecuencia.estado tiene que ser "supuesto" o "vigente"`);
      }
      if (typeof f.base !== 'string' || f.base.length < 15) {
        problemas.push(`✖ ${donde}: frecuencia.base falta. De dónde sale el número se dice o no se usa el número`);
      }
      if (f.estado === 'vigente') {
        avisos.push(`▲ ${donde}: frecuencia marcada "vigente". Sólo si hay fuente verificable escrita en la base.`);
      }
    }
  }

  // El parámetro de plata gobierna la regla de uso: mientras sea supuesto, el video habla en horas.
  const p = banco.parametros.costoHoraOperativa;
  if (p.estado === 'supuesto') {
    avisos.push(`▲ costoHoraOperativa sigue en "supuesto" (${p.valor} COP): los videos hablan en HORAS, no en pesos.`);
  }

  // 🔴 Misma disciplina para el costo de repartir. Es el número con el que se le habla a un
  // restaurante de su plata: una cifra sin `base` acá es la métrica sin fuente que ya nos costó
  // tres meses de caso Promatel publicado. La regla es la misma de las frecuencias, aplicada a un
  // árbol en vez de a una lista.
  const cdr = banco.parametros.costoDeRepartir;
  if (!cdr) problemas.push('✖ parametros.costoDeRepartir: falta el bloque (lo mide 19 §3.3)');
  else {
    let cifras = 0;
    let supuestas = 0;
    for (const [grupo, valores] of Object.entries(cdr)) {
      if (grupo.startsWith('_') || typeof valores !== 'object') continue;
      for (const [nombre, c] of Object.entries(valores)) {
        if (nombre.startsWith('_') || typeof c !== 'object' || c === null) continue;
        const donde = `costoDeRepartir.${grupo}.${nombre}`;
        cifras += 1;
        const tieneNumero = ['valor', 'min', 'max', 'central'].some((k) => typeof c[k] === 'number');
        if (!tieneNumero) problemas.push(`✖ ${donde}: no tiene valor/min/max numérico`);
        if (typeof c.unidad !== 'string' || !c.unidad) problemas.push(`✖ ${donde}: falta la unidad`);
        if (c.estado !== 'supuesto' && c.estado !== 'vigente') {
          problemas.push(`✖ ${donde}: estado tiene que ser "supuesto" o "vigente"`);
        }
        if (typeof c.base !== 'string' || c.base.length < 15) {
          problemas.push(`✖ ${donde}: falta la base. De dónde sale el número se dice o no se usa el número`);
        } else if (c.estado === 'vigente' && !/\d{4}-\d{2}-\d{2}/.test(c.base)) {
          // Un `vigente` sin fecha de consulta envejece en silencio y sigue pareciendo verificado.
          problemas.push(`✖ ${donde}: marcado "vigente" y su base no dice la fecha en que se consultó`);
        }
        if (c.estado === 'supuesto') supuestas += 1;
      }
    }
    avisos.push(`▲ costoDeRepartir: ${cifras} cifras, ${supuestas} en "supuesto". El pitch dice el costo POR CAMINO y deja que el restaurante haga la resta; nunca un porcentaje de ahorro.`);
  }

  const sinUsar = sectores.filter((s) => !banco.dolores.some((d) => d.sector.includes(s)));
  for (const s of sinUsar) avisos.push(`▲ el sector "${s}" está declarado y no tiene ni un dolor`);

  problemas.forEach((x) => console.log('  ' + x));
  avisos.forEach((x) => console.log('  ' + x));
  if (!problemas.length && !avisos.length) console.log('  ✓ banco de dolores: todo en regla');
  console.log(`\n  ${banco.dolores.length} dolores · ${sectores.length} sectores · ${problemas.length} error(es) · ${avisos.length} aviso(s)\n`);
  process.exit(problemas.length ? 1 : 0);
}

// ─────────────────────────────────────────────────────────────────────────────
// Listar y ver
// ─────────────────────────────────────────────────────────────────────────────
function filtrados() {
  const sector = flag('sector');
  const nivel = flag('nivel');
  const solucion = flag('solucion');
  return banco.dolores.filter(
    (d) =>
      (!sector || d.sector.includes(sector)) &&
      (!nivel || String(d.nivel) === String(nivel)) &&
      (!solucion || d.solucion === solucion),
  );
}

function listar() {
  const lista = filtrados();
  let sector = '';
  console.log('');
  for (const d of [...lista].sort((a, b) => a.sector[0].localeCompare(b.sector[0]) || a.nivel - b.nivel)) {
    if (d.sector[0] !== sector) {
      sector = d.sector[0];
      console.log(`\n  ${banco.sectores[sector].nombre.toUpperCase()}`);
      console.log('  ' + '─'.repeat(90));
    }
    const marca = d.evidencia ? '★' : ' ';
    console.log(`  ${marca} N${d.nivel}  ${d.id.slice(0, 44).padEnd(44)} ${String(horas(horasMes(d))).padStart(5)} h/mes   ${d.solucion}`);
  }
  console.log(`\n  ★ = tenemos evidencia propia, se graba primero.   ${lista.length} de ${banco.dolores.length} dolores.\n`);
}

function ver() {
  const d = banco.dolores.find((x) => x.id === suelto[0]);
  if (!d) {
    console.log(`  ✖ no existe el dolor "${suelto[0]}"`);
    process.exit(1);
  }
  const n = banco.niveles[String(d.nivel)];
  console.log(`\n  ${d.id}`);
  console.log('  ' + '─'.repeat(90));
  console.log(`  Sector      ${d.sector.map((s) => banco.sectores[s].nombre).join(' · ')}`);
  console.log(`  Nivel       ${d.nivel} · ${n.nombre} (${n.promesa})`);
  console.log(`  Tarea       ${d.tarea}`);
  console.log(`\n  0-3 s       ${d.escena}`);
  console.log(`  3-15 s      ${d.frecuencia.veces} veces por ${d.frecuencia.unidad} × ${d.frecuencia.minutos} min = ${horas(horasMes(d))} horas al mes`);
  console.log(`              supuesto: ${d.frecuencia.base}`);
  console.log(`              y lo que no se ve: ${d.costoOculto}`);
  console.log(`  15-40 s     ${d.conTecnologia}`);
  console.log(`  40-55 s     el número (${horas(horasMes(d))} h/mes) + la invitación a escribir`);
  console.log(`\n  Solución    ${d.solucion}`);
  console.log(`  Evidencia   ${d.evidencia ?? 'ninguna. Se habla del dolor, nunca de un caso que no existe.'}\n`);
}

// ─────────────────────────────────────────────────────────────────────────────
// Tanda — qué se graba primero, y por qué ese orden
// ─────────────────────────────────────────────────────────────────────────────
function tanda() {
  const n = Number(flag('n', 10));
  // Orden: primero lo que sólo nosotros podemos grabar (evidencia propia), después lo que más
  // horas duele. Y se reparten los sectores: 10 videos del mismo sector es un canal de nicho,
  // no una serie. La rotación evita decidirlo a ojo cada vez.
  const pool = [...filtrados()].sort((a, b) => {
    if (Boolean(a.evidencia) !== Boolean(b.evidencia)) return a.evidencia ? -1 : 1;
    return horasMes(b) - horasMes(a);
  });

  const elegidos = [];
  const usados = new Map();
  while (elegidos.length < n && pool.length) {
    const min = Math.min(...pool.map((d) => usados.get(d.sector[0]) ?? 0));
    const i = pool.findIndex((d) => (usados.get(d.sector[0]) ?? 0) === min);
    const [d] = pool.splice(i, 1);
    usados.set(d.sector[0], (usados.get(d.sector[0]) ?? 0) + 1);
    elegidos.push(d);
  }

  console.log(`\n  TANDA DE ${elegidos.length} — en este orden se graban\n`);
  elegidos.forEach((d, i) => {
    console.log(`  ${String(i + 1).padStart(2)}. ${d.evidencia ? '★' : ' '} [N${d.nivel} ${banco.sectores[d.sector[0]].nombre}]`);
    console.log(`      ${d.escena}`);
    console.log(`      ${horas(horasMes(d))} h/mes · ${d.solucion} · id: ${d.id}`);
  });
  console.log(`\n  Guiones: \`npm run dolores ver -- <id>\` da los 4 golpes de cada uno.\n`);
}

const comandos = { listar, validar, ver, tanda };
(comandos[comando] ?? listar)();
