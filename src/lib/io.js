import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');

const IGNORADOS = new Set(['node_modules', '.git', '.github', 'out', 'swipe', 'redes']);

/** Lista recursiva de archivos con una extensión, relativos a la raíz del repo. */
export function listar(ext, desde = RAIZ) {
  const salida = [];
  const recorrer = (dir) => {
    for (const entrada of readdirSync(dir)) {
      if (IGNORADOS.has(entrada)) continue;
      const ruta = join(dir, entrada);
      if (statSync(ruta).isDirectory()) recorrer(ruta);
      else if (entrada.endsWith(ext)) salida.push(relative(RAIZ, ruta).split('\\').join('/'));
    }
  };
  recorrer(desde);
  return salida.sort();
}

export const leer = (rutaRelativa) => readFileSync(join(RAIZ, rutaRelativa), 'utf8');
export const existe = (rutaRelativa) => existsSync(join(RAIZ, rutaRelativa));
export const leerJson = (rutaRelativa) => JSON.parse(leer(rutaRelativa));

export function escribirJson(rutaRelativa, dato) {
  writeFileSync(join(RAIZ, rutaRelativa), JSON.stringify(dato, null, 2) + '\n', 'utf8');
}

/** Número de línea (1-indexado) de un índice de caracteres dentro de un texto. */
export const lineaDe = (texto, indice) => texto.slice(0, indice).split('\n').length;
