#!/usr/bin/env node
/**
 * Prueba del propio linter. Un guardrail que nunca falla no está cuidando nada: esto verifica que
 * las reglas siguen mordiendo después de cada ajuste.
 *
 * El fixture `copy/_pruebas/anuncio-malo.json` acumula a propósito todos los errores que el linter
 * debe cazar, y declara en `_esperados` cuáles. La prueba falla si alguno deja de dispararse.
 */
import { leerJson, listar } from '../lib/io.js';
import { mensajeLider, piezasDeCopy, prohibiciones } from './reglas.js';

const fixtures = listar('.json').filter((f) => f.startsWith('copy/_pruebas/'));
if (!fixtures.length) {
  console.error('✖ no hay fixtures en copy/_pruebas/ — la prueba del linter no puede correr');
  process.exit(1);
}

let fallos = 0;

for (const archivo of fixtures) {
  const esperados = leerJson(archivo)._esperados ?? [];
  const hallazgos = [...piezasDeCopy([archivo]), ...prohibiciones([archivo]), ...mensajeLider([archivo])];
  const reglasQueDispararon = new Set(hallazgos.map((h) => h.regla));

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
