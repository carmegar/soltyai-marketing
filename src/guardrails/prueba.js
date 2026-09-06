#!/usr/bin/env node
/**
 * Prueba del propio linter. Un guardrail que nunca falla no está cuidando nada: esto verifica que
 * las reglas siguen mordiendo después de cada ajuste.
 *
 * El fixture `copy/_pruebas/anuncio-malo.json` acumula a propósito todos los errores que el linter
 * debe cazar, y declara en `_esperados` cuáles. La prueba falla si alguno deja de dispararse.
 */
import { leer, leerJson, listar } from '../lib/io.js';
import { mensajeLider, piezasDeCopy, prohibiciones } from './reglas.js';

const esteEs = (f) => f.startsWith('copy/_pruebas/');

/**
 * Dos familias de fixture, porque desde el 2026-09-05 hay dos caminos que probar:
 *
 *   `.json`      una pieza de anuncio de `copy/`. Declara lo que espera en `_esperados`.
 *   `.md`/`.txt` una pieza de las de `redes/`, que ahora declara su canal con `<!-- canal: … -->`.
 *                Declara lo que espera en `<!-- esperados: a, b -->`, que es el mismo `_esperados`
 *                escrito en el idioma del archivo.
 *
 * ⚠️ Los fixtures de texto viven en `copy/_pruebas/` y NO en `redes/`, a propósito: `redes/` es el
 * alcance real del linter, así que un fixture ahí adentro rompería el build de verdad.
 */
const fixtures = listar('.json').filter(esteEs);
const fixturesTexto = [...listar('.md'), ...listar('.txt')].filter(esteEs);
if (!fixtures.length) {
  console.error('✖ no hay fixtures en copy/_pruebas/ — la prueba del linter no puede correr');
  process.exit(1);
}

let fallos = 0;

for (const archivo of [...fixtures, ...fixturesTexto]) {
  const esTexto = fixturesTexto.includes(archivo);
  // El fixture de texto se le pasa a `mensajeLider` por el canal de `redes/`; el de JSON, por el de
  // `copy/`. En los dos casos la OTRA lista va vacía: si no, cada fixture arrastraría los hallazgos
  // del repo entero y los reportaría como suyos.
  const esperados = esTexto
    ? (leer(archivo).match(/<!--\s*esperados:\s*(.+?)\s*-->/i)?.[1] ?? '').split(',').map((s) => s.trim()).filter(Boolean)
    : leerJson(archivo)._esperados ?? [];
  const hallazgos = esTexto
    ? mensajeLider([], [archivo])
    : [...piezasDeCopy([archivo]), ...prohibiciones([archivo]), ...mensajeLider([archivo], [])];
  const reglasQueDispararon = new Set(hallazgos.map((h) => h.regla));

  if (!esperados.length) {
    console.log(`\n  ${archivo}`);
    console.log('    ✖ el fixture no declara qué espera (falta `_esperados` o `<!-- esperados: … -->`)');
    fallos++;
    continue;
  }

  console.log(`\n  ${archivo}`);
  for (const esperado of esperados) {
    const ok = [...reglasQueDispararon].some((r) => r === esperado || r.startsWith(esperado));
    console.log(`    ${ok ? '✓' : '✖'} ${esperado}`);
    if (!ok) fallos++;
  }

  const sobrantes = [...reglasQueDispararon].filter(
    (r) => !esperados.some((e) => r === e || r.startsWith(e)),
  );
  if (sobrantes.length) console.log(`    ▲ además disparó: ${sobrantes.join(', ')}`);
}

if (fallos) {
  console.log(`\n✖ ${fallos} regla(s) esperada(s) no se dispararon: el linter dejó de cuidar algo.\n`);
  process.exit(1);
}
console.log('\n✓ el linter muerde: todas las reglas esperadas se dispararon\n');
