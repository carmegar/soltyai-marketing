# src/anuncios — producción y validación de creatividades *(diseñado, sin construir)*

Lo que hoy hace el plugin `claude-ads` a mano, ordenado y verificado antes de publicar.

**Qué debe hacer**
1. Tomar una pieza de `copy/anuncios/*.json` + `brand-profile.json` y generar la creatividad.
2. Validar specs por plataforma: relación de aspecto, safe zone, peso, texto legible a tamaño de
   pulgar.
3. Correr los guardrails sobre la pieza (largos de Meta, coherencia de plazos y precios).
4. Archivar la pieza aprobada con su `origin` para que el reporte pueda atribuirla.

**La lección que originó este módulo** (`14-SWIPE-FILE.md`, entrada SyroxTech 2026-07-25): un
anuncio que promete 40 días en la imagen y 90 en el titular del destino quema su propia oferta.
El chequeo de coherencia de plazo ya existe en `src/guardrails/reglas.js`; este módulo lo aplica
también a lo que se lee **dentro de la imagen**, que hoy nadie verifica.
