#!/usr/bin/env node
/**
 * Guardrails de marketing — el linter del mensaje.
 *
 * Convierte las decisiones ya escritas (pricing COP, promesa única, WhatsApp "próximamente",
 * ángulos quemados, honestidad de la prueba social) en reglas que fallan el CI.
 *
 *   npm run guardrails            → corre todo; sale 1 si hay errores
 *   npm run guardrails -- --avisos → los avisos también fallan (útil antes de publicar)
 *   npm run guardrails -- --json   → salida máquina
 */
import { TODAS } from './reglas.js';

const args = process.argv.slice(2);
const estricto = args.includes('--avisos');
const comoJson = args.includes('--json');

const hallazgos = TODAS.flatMap((regla) => {
  try {
    return regla();
  } catch (e) {
    return [{ nivel: 'error', regla: regla.name, archivo: '-', linea: 0, mensaje: `la regla reventó: ${e.message}` }];
  }
});

const errores = hallazgos.filter((h) => h.nivel === 'error');
const avisos = hallazgos.filter((h) => h.nivel === 'aviso');

if (comoJson) {
  console.log(JSON.stringify({ errores, avisos }, null, 2));
} else {
  const pintar = (h) => {
    const marca = h.nivel === 'error' ? '✖' : '▲';
    console.log(`${marca} ${h.archivo}:${h.linea}  [${h.regla}]\n   ${h.mensaje}`);
  };
  if (errores.length) {
    console.log(`\n── ${errores.length} error(es) ──────────────────────────────`);
    errores.forEach(pintar);
  }
  if (avisos.length) {
    console.log(`\n── ${avisos.length} aviso(s) ──────────────────────────────`);
    avisos.forEach(pintar);
  }
  if (!hallazgos.length) console.log('✓ guardrails: todo en regla');
  else console.log(`\n${errores.length} error(es) · ${avisos.length} aviso(s)`);
}

process.exit(errores.length || (estricto && avisos.length) ? 1 : 0);
