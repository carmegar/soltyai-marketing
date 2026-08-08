#!/usr/bin/env node
// Vigila la decisión de este repo: **cero dependencias de terceros**.
//
// La decisión ya estaba tomada y escrita —en un comentario del workflow: «sin
// dependencias a propósito: el linter tiene que correr en segundos y no puede
// romperse por un npm install»— pero un comentario no es una guarda. El día que
// alguien agregue una librería, nada avisa: el CI no instala nada, así que el
// `import` fallaría en tiempo de ejecución con un error de módulo no encontrado,
// y el repo entraría a la política de dependencias por la puerta de atrás, sin
// lockfile y sin revisión (`security/politicas/dependencias.md`).
//
// Esto lo convierte en un chequeo. Mira las dos caras del mismo hecho:
//
//   1. Lo DECLARADO — `package.json`. Si aparece cualquier bloque de
//      dependencias, exige lockfile commiteado. Sin lockfile, el build resuelve
//      versiones que nadie aprobó, que es la mitad de la política.
//   2. Lo USADO — los `import` del código. Un paquete se puede usar sin
//      declararlo, y entonces el `package.json` limpio miente. Acá sólo pasan
//      los relativos (`./`, `../`) y los `node:`.
//
// Si algún día este repo SÍ necesita una librería, la respuesta no es borrar
// este archivo: es correr `security/scripts/revisar-dependencia.mjs`, commitear
// el lockfile y cambiar el CI a `npm ci`. Ahí este chequeo pasa solo.

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const BLOQUES = ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies'];
const LOCKFILES = ['package-lock.json', 'pnpm-lock.yaml', 'yarn.lock'];

// `import x from '...'` y `import('...')`. Alcanza para este repo, que es ESM
// puro y sin build: no hay `require` ni transpilación que esconda un import.
const IMPORTS = /(?:^|\n)\s*import\s[^\n]*?from\s+['"]([^'"]+)['"]|\bimport\(\s*['"]([^'"]+)['"]\s*\)/g;

function archivosJs(dir, acc = []) {
  for (const entrada of readdirSync(dir)) {
    if (entrada === 'node_modules' || entrada.startsWith('.')) continue;
    const ruta = join(dir, entrada);
    if (statSync(ruta).isDirectory()) archivosJs(ruta, acc);
    else if (entrada.endsWith('.js') || entrada.endsWith('.mjs')) acc.push(ruta);
  }
  return acc;
}

const fallas = [];

// 1. Lo declarado.
const pkg = JSON.parse(readFileSync(join(RAIZ, 'package.json'), 'utf8'));
const declaradas = BLOQUES.flatMap((b) => Object.keys(pkg[b] ?? {}).map((n) => `${b}:${n}`));
const lockfile = LOCKFILES.find((f) => existsSync(join(RAIZ, f)));

if (declaradas.length > 0 && !lockfile) {
  fallas.push(
    `package.json declara ${declaradas.length} dependencia(s) y no hay lockfile commiteado:\n` +
      declaradas.map((d) => `    - ${d}`).join('\n') +
      '\n  Sin lockfile el build resuelve la versión que le toque, no la que se aprobó.\n' +
      '  Antes de instalar: node ../security/scripts/revisar-dependencia.mjs <paquete>\n' +
      '  Después: commitear el lockfile y pasar el CI a `npm ci`.',
  );
}

// 2. Lo usado.
for (const archivo of archivosJs(join(RAIZ, 'src'))) {
  const codigo = readFileSync(archivo, 'utf8');
  for (const m of codigo.matchAll(IMPORTS)) {
    const spec = m[1] ?? m[2];
    if (spec.startsWith('.') || spec.startsWith('node:')) continue;
    fallas.push(
      `${relative(RAIZ, archivo)} importa «${spec}», que no es relativo ni de Node.\n` +
        '  Este repo corre sin instalar nada: ese import revienta en el CI.',
    );
  }
}

if (fallas.length > 0) {
  console.error('🔴 la regla de cero dependencias se rompió:\n');
  for (const f of fallas) console.error(`  ${f}\n`);
  process.exit(1);
}

console.log(
  lockfile
    ? `✅ dependencias declaradas con lockfile (${lockfile}) y ningún import suelto`
    : '✅ cero dependencias: nada declarado, nada importado de fuera de Node',
);
