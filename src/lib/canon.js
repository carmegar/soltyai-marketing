import { leerJson } from './io.js';

export const canon = leerJson('data/canon.json');
export const catalogo = leerJson('data/catalogo.json');

export const plan = (id) => canon.planes.find((p) => p.id === id);
export const servicio = (id) => catalogo.servicios.find((s) => s.id === id);

/**
 * Todos los precios COP que un doc o un copy PUEDE nombrar sin estar mintiendo.
 * Si aparece una cifra cerca de un nombre de plan y no está aquí, es un precio viejo o inventado.
 */
export function preciosVigentes() {
  const set = new Map();
  for (const p of canon.planes) set.set(p.precioMes, p.nombre);
  set.set(canon.setup.precio, 'setup');
  set.set(canon.excedente.precio, 'excedente');
  return set;
}

/** Margen de un servicio del catálogo, sobre el primer mes (recurrente + único si aplica). */
export function margen(s) {
  const ingreso = (s.precio ?? 0) + (s.precioRecurrente ?? 0);
  const costo = (s.costoUnico ?? 0) + (s.costoMes ?? 0);
  if (ingreso === 0) return { ingreso, costo, bruto: 0, porcentaje: 0 };
  const bruto = ingreso - costo;
  return { ingreso, costo, bruto, porcentaje: bruto / ingreso };
}
