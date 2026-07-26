import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { RAIZ } from './io.js';

/** Carga .env sin dependencias. No pisa variables que ya vengan del entorno (CI manda). */
export function cargarEnv() {
  const ruta = join(RAIZ, '.env');
  if (!existsSync(ruta)) return;
  for (const linea of readFileSync(ruta, 'utf8').split('\n')) {
    const limpia = linea.trim();
    if (!limpia || limpia.startsWith('#')) continue;
    const i = limpia.indexOf('=');
    if (i === -1) continue;
    const clave = limpia.slice(0, i).trim();
    const valor = limpia.slice(i + 1).trim().replace(/^["']|["']$/g, '');
    if (process.env[clave] === undefined) process.env[clave] = valor;
  }
}

/** Variable de entorno con valor por defecto y aviso si falta lo importante. */
export function env(clave, porDefecto = '') {
  const v = process.env[clave];
  if (v === undefined || v === '') return porDefecto;
  return v;
}
