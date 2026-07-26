#!/usr/bin/env node
/**
 * Catálogo de servicios con margen — para vender lo que sea sin regalar el margen.
 *
 * Las dos líneas del negocio (13-PLAN-12-CLIENTES §10) viven aquí juntas: la suscripción que
 * acumula y el servicio que financia. El CLI aplica por código las reglas que ya están escritas
 * (piso de $3.000.000, 50% de anticipo, margen mínimo) y marca en amarillo todo número que sea
 * supuesto y no dato verificado.
 *
 *   npm run catalogo                      → tabla con precio, costo y margen
 *   npm run catalogo validar              → reglas de margen y de la línea de servicios (falla el CI)
 *   npm run catalogo cotizar -- bot-pro --meses=12 --descuento=0.3
 */
import { canon, catalogo, margen } from '../lib/canon.js';
import { cop, pct } from '../lib/texto.js';

const args = process.argv.slice(2);
const comando = args.find((a) => !a.startsWith('--')) ?? 'listar';
const flag = (n, d) => {
  const v = args.find((a) => a.startsWith(`--${n}=`))?.split('=')[1];
  return v === undefined ? d : Number(v);
};

const MARCA = { vigente: '✓', supuesto: '▲', legacy: '⚠' };

function listar() {
  console.log('\n  Estado  Servicio                                Precio        Costo        Margen');
  console.log('  ' + '─'.repeat(84));
  let linea = '';
  for (const s of catalogo.servicios) {
    const m = margen(s);
    if (s.linea !== linea) {
      linea = s.linea;
      console.log(`\n  ${linea.toUpperCase()}`);
    }
    console.log(
      `  ${MARCA[s.estado] ?? '?'}       ${s.nombre.slice(0, 38).padEnd(38)} ${cop(m.ingreso).padStart(12)} ${cop(m.costo).padStart(12)} ${pct(m.porcentaje).padStart(8)}`,
    );
  }
  console.log('\n  ✓ verificado   ▲ supuesto (confirmar antes de cotizar)   ⚠ legacy (modelo USD viejo)\n');
}

const minimo = (s) => canon.margenMinimo[s.linea] ?? 0.5;

function validar() {
  const problemas = [];
  const flojos = [];
  for (const s of catalogo.servicios) {
    const m = margen(s);
    if (m.porcentaje < minimo(s)) {
      // Un margen bajo sobre números VERIFICADOS es un problema del negocio y bloquea.
      // Sobre números supuestos es una alerta: el costo es una estimación, no un hecho.
      const linea = `${s.id}: margen ${pct(m.porcentaje)} por debajo del mínimo de ${pct(minimo(s))} para la línea ${s.linea}`;
      if (s.estado === 'vigente') problemas.push(`✖ ${linea}`);
      else flojos.push(`▲ ${linea} (costo ${s.estado} — medirlo con la primera venta real)`);
    }
    if (s.tipo === 'proyecto' || s.tipo === 'mixto') {
      const exento = s.notas?.includes('Excepción explícita al piso');
      if (s.precio < canon.lineaServicios.pisoPrecio && !exento) {
        problemas.push(`✖ ${s.id}: ${cop(s.precio)} está por debajo del piso de ${cop(canon.lineaServicios.pisoPrecio)} (13 §10) y no declara excepción`);
      }
      if (!s.reglas?.includes('anticipo50')) {
        problemas.push(`✖ ${s.id}: proyecto sin la regla anticipo50. La lección Swisscontact costó $2,3M esperando factura.`);
      }
    }
    if (!s.fuente) problemas.push(`✖ ${s.id}: sin campo "fuente". Todo precio y todo costo cita de dónde salió.`);
  }

  const supuestos = catalogo.servicios.filter((s) => s.estado !== 'vigente');
  if (problemas.length) {
    console.log('\n' + problemas.join('\n'));
  } else {
    console.log('\n✓ catálogo: márgenes y reglas de la línea de servicios en orden');
  }
  if (flojos.length) console.log('\n' + flojos.join('\n'));
  if (supuestos.length) {
    console.log(`\n▲ ${supuestos.length} servicio(s) con números sin verificar: ${supuestos.map((s) => s.id).join(', ')}`);
    console.log('  No bloquean, pero toda cotización que los use sale marcada. Confirmar con la primera venta real.');
  }
  console.log();
  process.exit(problemas.length ? 1 : 0);
}

function cotizar() {
  const id = args.find((a) => !a.startsWith('--') && a !== 'cotizar');
  const s = catalogo.servicios.find((x) => x.id === id);
  if (!s) {
    console.error(`No existe "${id}". Disponibles: ${catalogo.servicios.map((x) => x.id).join(' · ')}`);
    process.exit(1);
  }

  const meses = flag('meses', s.tipo === 'recurrente' ? 12 : 1);
  const descuento = flag('descuento', 0);
  const conSetup = !args.includes('--sin-setup') && s.linea === 'suscripcion' && s.tipo === 'recurrente';

  const mensual = s.tipo === 'recurrente' ? s.precio : 0;
  const unico = s.tipo === 'recurrente' ? 0 : s.precio;
  const setup = conSetup ? canon.setup.precio : 0;

  // El descuento de lanzamiento es por un número acotado de meses (política: 30% × 3 meses),
  // NO sobre todo el periodo cotizado. Aplicarlo a los 12 meses regalaría 4 veces lo autorizado.
  const mesesDescuento = Math.min(flag('descuento-meses', canon.descuentoPrimerosClientes.meses), meses);
  const brutoRecurrente = mensual * meses;
  const rebaja = mensual * mesesDescuento * descuento;
  const base = brutoRecurrente - rebaja + unico + setup;
  const iva = base * canon.iva;

  const costo = (s.costoMes ?? 0) * meses + (s.costoUnico ?? 0) + (conSetup ? 240000 : 0);
  const bruto = base - costo;

  console.log(`\n  ${s.nombre}   [${s.estado}]`);
  console.log('  ' + '─'.repeat(56));
  if (mensual) console.log(`  Mensualidad          ${cop(mensual).padStart(14)} × ${meses} meses`);
  if (unico) console.log(`  Proyecto             ${cop(unico).padStart(14)}`);
  if (setup) console.log(`  Setup (única vez)    ${cop(setup).padStart(14)}`);
  if (descuento) console.log(`  Descuento ${pct(descuento).padStart(6)}     ${('-' + cop(rebaja)).padStart(14)}   (× ${mesesDescuento} mes/es)`);
  console.log(`  Base                 ${cop(base).padStart(14)}`);
  console.log(`  IVA ${pct(canon.iva)}            ${cop(iva).padStart(14)}`);
  console.log(`  TOTAL                ${cop(base + iva).padStart(14)}`);
  console.log('  ' + '─'.repeat(56));
  console.log(`  Costo de servir      ${cop(costo).padStart(14)}`);
  console.log(`  Margen bruto         ${cop(bruto).padStart(14)}   ${pct(bruto / base)}`);

  const avisos = [];
  if (s.estado !== 'vigente') avisos.push(`Los números de "${s.id}" son ${s.estado}: ${s.fuente}`);
  if (bruto / base < minimo(s)) avisos.push(`Margen por debajo del mínimo de ${pct(minimo(s))} para la línea ${s.linea}.`);
  if (s.reglas?.includes('anticipo50')) avisos.push(`Anticipo obligatorio: ${cop((base + iva) * canon.lineaServicios.anticipo)} para agendar.`);
  if (s.reglas?.includes('pisoPrecio') && base < canon.lineaServicios.pisoPrecio) avisos.push(`Por debajo del piso de ${cop(canon.lineaServicios.pisoPrecio)} — solo si abre un cliente grande, y se anota.`);
  if (s.reglas?.includes('saleConPropuestaDeBot')) avisos.push('Este cliente sale con propuesta de bot: la puerta es el proyecto, la renta es la suscripción.');
  if (descuento) avisos.push(`Descuento de lanzamiento: ${canon.descuentoPrimerosClientes.cupos} cupos, ${canon.descuentoPrimerosClientes.meses} meses, a cambio de caso de estudio.`);

  if (avisos.length) {
    console.log('\n  ▲ ' + avisos.join('\n  ▲ '));
  }
  console.log('\n  Para emitirla de verdad: crear la cotización en el suite (MCP `crear_cotizacion`).\n');
}

const COMANDOS = { listar, validar, cotizar };
if (!COMANDOS[comando]) {
  console.error(`Comando desconocido "${comando}". Usa: listar | validar | cotizar`);
  process.exit(1);
}
COMANDOS[comando]();
