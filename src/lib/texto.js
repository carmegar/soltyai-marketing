/** Minúsculas sin tildes — para comparar patrones sin que "próximamente" se escape por la tilde. */
export const normalizar = (s) =>
  s.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

/** Formatea COP como se escribe en Colombia: $1.234.567 */
export const cop = (n) => '$' + Math.round(n).toLocaleString('es-CO').replace(/,/g, '.');

export const pct = (n) => (n * 100).toFixed(1) + '%';

/**
 * Extrae plazos en días de un texto: "40 DÍAS", "en 7 dias", "90 días".
 * Es el chequeo que habría cazado el 40 vs 90 de SyroxTech.
 */
export function plazosEnDias(texto) {
  const encontrados = new Set();
  const re = /(\d{1,3})\s*d[ií]as?/gi;
  let m;
  while ((m = re.exec(texto)) !== null) encontrados.add(Number(m[1]));
  return [...encontrados];
}

/** Extrae montos COP de un texto: $290.000, $290,000, $1.500.000 */
export function montosCop(texto) {
  const encontrados = new Set();
  const re = /\$\s?(\d{1,3}(?:[.,]\d{3})+)/g;
  let m;
  while ((m = re.exec(texto)) !== null) encontrados.add(Number(m[1].replace(/[.,]/g, '')));
  return [...encontrados];
}

/** Largo visible de un campo de anuncio (Meta cuenta emojis como 1, los espacios cuentan). */
export const largo = (s) => [...s.trim()].length;
