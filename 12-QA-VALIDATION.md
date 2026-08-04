# 12 · QA-VALIDATION — Verificación del paquete consolidado (2026-06-20)

> Reporte de verificación tras la **reconciliación + consolidación** del paquete de marketing.
> Antes: 17 archivos sueltos, anclados a pricing Starter/Growth/Pro y embudo solo-Telegram (superados).
> Ahora: **13 archivos numerados** (00–12 + `brand-profile.json`), alineados al producto y precio reales.

## 1. Estructura final (orden correcto)

```
README.md                               índice + cómo ejecutar + notas honestas
01-SOURCE-BRIEF.md         fuente canónica (contrato)
02-brand-dna.md            ADN de marca + promesa única
brand-profile.json         marca legible por máquina (insumo /ads) — JSON válido ✅
03-competitor-analysis.md  inteligencia competitiva (precios verificados con URL)
04-STRATEGY.md             estrategia + arquitectura de campaña (fusión)
05-PRICING.md              precios por producto + qué cubre
06-BUDGET-PLAN.md          unit economics recalculados
07-CAMPAIGN-BRIEF.md       conceptos + copy deck + video + image briefs
08-TRACKING-SETUP.md       tracking/atribución de las 3 vías + conciliación
09-OUTBOUND.md             estrategia + playbook (fusión)
10-IMPLEMENTATION-ROADMAP.md  cronograma día a día
11-PRE-LAUNCH-CHECKLIST.md prerrequisitos + onboarding
12-QA-VALIDATION.md        este reporte
```

**Fusiones:** `ADS-STRATEGY` + `CAMPAIGN-ARCHITECTURE` → `04-STRATEGY`; `OUTBOUND-STRATEGY` +
`OUTBOUND-PLAYBOOK` → `09-OUTBOUND`. **Eliminados** (consumidos en las fusiones/renumeraciones):
`_SOURCE-BRIEF`, `ADS-STRATEGY`, `CAMPAIGN-ARCHITECTURE`, `OUTBOUND-STRATEGY`, `OUTBOUND-PLAYBOOK`,
`PRICING`, `BUDGET-PLAN`, `campaign-brief`, `TRACKING-SETUP`, `IMPLEMENTATION-ROADMAP`,
`PRE-LAUNCH-CHECKLIST`, `brand-dna`, `competitor-analysis`, `README`, `QA-VALIDATION` (viejos).

## 2. Cómo se produjo (orquestación)

Claude (orquestador) fijó el contrato `01-SOURCE-BRIEF.md` y lanzó **4 agentes Opus 4.8 en paralelo**
con **propiedad de archivos disjunta** (sin colisiones): A=estrategia+economía (04,06),
B=pricing+creatividades (05,07), C=tracking+outbound+ops (08–11), D=marca+intel+índice (00,02,03,json).
Integración, QA y este reporte los hizo el orquestador. NO es repo git → sin worktree, sin build/test
(son documentos); el gate es la **verificación de consistencia** de abajo.

## 3. Checks de consistencia (ejecutados con Grep/Bash)

| Check | Resultado |
|---|---|
| `brand-profile.json` parsea como JSON | ✅ válido (node) |
| Cero pricing viejo Starter/Growth/Pro como precio PROPIO | ✅ (los hits restantes son **precios de competidores** —Cliengo/Landbot— o avisos "PROHIBIDO/superado") |
| Pricing por producto presente y uniforme (Agenda $65/$250, Pedidos $80/$280, Inmob $249-entry/$650-full, Integraciones $180/$3.500) | ✅ en 11 archivos |
| Tier Inmobiliario entry siempre marcado "(propuesto, validar)" | ✅ |
| 3 opciones de conversión (prueba bot / agenda Calendly / WhatsApp) | ✅ en 13 archivos (79 menciones) |
| Canal honesto (Telegram hoy, WhatsApp/web próximamente; NO prometer WhatsApp API) | ✅ |
| Referencias cruzadas usan los nombres NUEVOS numerados (no `ADS-STRATEGY.md`, etc.) | ✅ (0 referencias a nombres viejos fuera de este reporte) |
| Embudo: sin TOFU/MOFU/BOFU formal en ronda 1; funnel lean 2 etapas solo en fase 2 | ✅ |
| Resultado realista 1–4 cierres; "76 cierres" marcado irreal; estimados etiquetados "(estimado)" | ✅ |

## 4. Hallazgo económico (destapado al recalcular `06-BUDGET-PLAN`)

Con el pricing por producto, la caja del mes 1 más baja (**Agenda = $65 + $250 = $315**) es **menor a los
$400** de la ronda → **1 solo cierre de Agenda NO da break-even inmediato** (déficit ~$85). El modelo
viejo lo escondía porque Growth daba $449 de caja mes-1. Implicación táctica documentada en `06`: el bot
debe **calificar hacia el producto correcto** (1 Inmobiliario ≈ 3 Agendas para la ronda; Pedidos $360 y
Inmob entry $849 sí superan los $400 con 1 cierre). No es un problema de margen (sano ~75%), es de
**caja inmediata de la ronda semilla** — vigilar.

## 5. Pendientes del usuario (no bloquean la consolidación)

- **Validar el tier Inmobiliario entry** ($249/$600) en la ronda semilla (hoy seed/landing solo tienen
  el full $650/$1.500). Si se aprueba, reflejarlo en `suite/.../seed.ts` y `landing/.../plans.ts`.
- **Reemplazar placeholders** antes de pautar (ver `11-PRE-LAUNCH-CHECKLIST`). ✅ Ya salieron el handle del
  bot, `calendlyUrl` y `lead.endpoint` (endpoint propio en la suite, no Formspree); **quedan
  `whatsappNumber`, `ga4MeasurementId` y `metaPixelId`** en
  `platform/apps/landing/src/data/site.ts`.
- **Producción de creatividades** (imágenes/video) desde `07-CAMPAIGN-BRIEF` + cuentas Meta/píxel.
- Decidir si versionar `marketing/` en git (hoy no es repo).

## 6. Veredicto

**Paquete consolidado, ordenado y consistente. Listo para `clear`.** La fuente de verdad para retomar
es `01-SOURCE-BRIEF.md`; el mapa es `README.md`.
