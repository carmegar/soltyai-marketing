<!-- FIXTURE — no es una pieza real y no se publica. Corre con `npm run prueba`. -->
<!-- esperados: canal:sin-declarar -->

# Fixture · una pieza de `redes/` que NO declara canal

Ni un marcador `<!-- canal: … -->` en todo el archivo. La regla no la juzga —seguiría siendo
adivinar por el nombre del archivo— pero **avisa** que el hueco existe, que es la mitad que faltaba:
el hueco viejo no se veía desde afuera, y por ahí salió la tanda 1 con siete guiones fuera de línea.

Tiene que quedar en 🟡 y nunca en 🔴: hay piezas legítimas sin canal único, y una regla que bloquea
por no saber es una regla que alguien apaga.
