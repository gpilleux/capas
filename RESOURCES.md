# Recursos — Impresión 3D

Fuentes verificadas para este curso. Todo lo que se afirme en una lección debe poder trazarse hasta aquí.

## Knowledge

### La máquina y su operación

- [Bambu Lab Wiki — sección X1/P1 (manual, mantenimiento, LAN mode)](https://wiki.bambulab.com/)
  Documentación oficial del fabricante. Es la fuente primaria para: procedimientos de mantenimiento, calibración, modo LAN, impresión desde Bambu Studio. Usar siempre esta antes que cualquier blog.
- [Bambu Lab Wiki — Mantenimiento básico](https://wiki.bambulab.com/en/x1/maintenance/basic-maintenance)
  Calendario oficial de limpieza y lubricación. Usar para: qué tocar y cada cuánto.
- [Bambu Lab Wiki — Carbon rods clearance](https://wiki.bambulab.com/en/general/carbon-rods-clearance)
  Advertencia crítica: **no engrasar las varillas de carbono**. Usar para: evitar el error de mantenimiento más común y más caro.
- [Bambu Lab Wiki — Enable LAN mode](https://wiki.bambulab.com/en/knowledge-sharing/enable-lan-mode)
  Cómo sacar la impresora de la nube. Usar para: privacidad, control local, y como base del objetivo "mandar a imprimir desde código".
- [additive-x — Bambu Lab P2S Combo Review](https://www.additive-x.com/blog/bambu-lab-p2s-combo-review)
  Review técnica con specs y limitaciones explícitas (cámara no calentada activamente, AMS incompatible con TPU, secado y print no simultáneos). Usar para: criterios de compra y límites reales de la máquina.
- [Bambu Lab — página oficial del P2S](https://bambulab.com/en-us/p2s)
  Specs oficiales y precio de referencia. *Nota: bloquea scrapers, hay que abrirla en navegador.*

### Multicolor y su costo real

- [Slice Lab — Guía de impresión multicolor: AMS, MMU y alternativas](https://slice-lab.com/en/guide-multi-color)
  Panorama comparado de los sistemas multicolor. Usar para: entender qué compras cuando compras un AMS.
- [filamentcalcs — ¿Vale la pena el multicolor? La matemática real del purge](https://filamentcalcs.com/guides/multi-color-printing-ams-worth-it)
  Números concretos de desperdicio por cambio de color según la transición. Usar para: estimar costo de un cuadro antes de imprimirlo.
- [Foro Bambu Lab — Flush volumes, prime tower, filament load purge](https://forum.bambulab.com/t/flush-volumes-prime-tower-filament-load-purge/26965)
  Discusión de usuarios sobre volúmenes de purga y cómo bajarlos. Usar para: ajustar el slicer cuando la purga se vuelve dolorosa.
- [3dprofilefix — Cómo reducir el purge del AMS](https://www.3dprofilefix.com/guides/reduce-ams-purge-waste.html)
  Ajustes concretos que funcionan. Usar para: la lección de optimización, no antes.

### Cuadros multicolor (el objetivo de la amiga)

- [HueForge — sitio oficial: qué es](https://shop.thehueforge.com/blogs/news/what-is-hueforge)
  Fuente primaria del software que convierte imágenes en "pinturas de filamento" por cambio de color por capa. Usar para: todo lo relativo a cuadros.
- [Polymaker Wiki — HueForge Painting](https://wiki.polymaker.com/the-basics/applications/hueforge-painting)
  Explicación del fabricante de filamento sobre Transmission Distance (TD) y elección de colores. Usar para: por qué unos filamentos sirven y otros no.
- [3Dnatives — An Argument for 3D Printing 2D Art](https://www.3dnatives.com/en/hueforge-an-argument-for-3d-printing-2d-art-271120245/)
  Contexto y ejemplos del resultado alcanzable. Usar para: calibrar expectativas de lo que sale.
- [Tom's Hardware — How to Paint with a 3D Printer Using HueForge](https://www.tomshardware.com/how-to/hugeforge-paint-with-3d-printer)
  Tutorial paso a paso de medio confiable. Usar para: el primer cuadro real.

### Modelado (CAD)

- [3Dprinting.com — Mejor software CAD para impresión 3D 2026](https://3dprinting.com/software-guides/best-3d-modeling-cad-software/)
  Comparativa amplia y actualizada. Usar para: elegir la primera herramienta según el tipo de pieza.
- [Tinkercad](https://www.tinkercad.com/)
  Navegador, gratis, cero instalación. Usar para: la primera pieza propia, en la primera sesión de CAD.
- [Onshape](https://www.onshape.com/) · [Autodesk Fusion (Personal)](https://www.autodesk.com/products/fusion-360/personal)
  CAD paramétrico real. Usar para: piezas funcionales con medidas exactas.
- [build123d — documentación](https://build123d.readthedocs.io/)
  CAD paramétrico en Python sobre el kernel OpenCascade. Usar para: la ruta "modelos desde código".
- [OpenSCAD](https://openscad.org/)
  Modelado 100% declarativo por código. Usar para: la vía más directa a que un agente genere geometría.

### Modelos desde Claude Code

- [build123d-mcp (pzfreo)](https://github.com/pzfreo/build123d-mcp)
  Servidor MCP con herramientas para ejecutar build123d, renderizar vistas y exportar STL/STEP/SVG/DXF. Usar para: que Claude modele, **mire** el render y corrija — no que dispare a ciegas.
- [openscad-mcp (sergiudanstan)](https://github.com/sergiudanstan/openscad-mcp)
  Servidor MCP para crear, previsualizar y exportar modelos OpenSCAD desde Claude Code. Usar para: la alternativa más simple de instalar.
- [Bambu Lab Wiki — Bambu Connect](https://wiki.bambulab.com/en/software/bambu-connect)
  La pieza oficial que permite a apps de terceros enviar archivos a la impresora. Usar para: el último tramo del pipeline automatizado.

## Wisdom (comunidades)

- [r/BambuLab](https://reddit.com/r/BambuLab)
  Comunidad específica del fabricante. Usar para: problemas concretos de AMS, firmware, perfiles de filamento.
- [r/3Dprinting](https://reddit.com/r/3Dprinting) — ~3,3 millones de miembros
  La plaza principal del hobby. Usar para: diagnóstico de impresiones fallidas (postear foto) y opiniones de compra.
- [Foro oficial Bambu Lab](https://forum.bambulab.com/)
  Moderado, con presencia de staff. Usar para: fallas de hardware y garantía.
- [Discord oficial de Bambu Lab](https://blog.bambulab.com/)
  Respuestas en minutos en horas activas. Usar para: urgencias en medio de una impresión.
- [MakerWorld](https://makerworld.com/)
  Modelos ya *sliceados* y perfiles afinados, incluido multicolor listo para AMS. Usar para: las primeras impresiones sin tocar CAD.
- [Printables](https://www.printables.com/)
  Repositorio de Prusa, agnóstico de marca y con buena curación. Usar para: modelos de calibración y utilidades.
- [r/hueforge](https://reddit.com/r/hueforge)
  Comunidad específica de filament painting. Usar para: que la amiga vea qué es alcanzable y con qué filamentos.

## Gaps

- **Comunidad chilena / latinoamericana**: aún no identificada. Falta buscar grupos locales (Discord, Telegram, makerspaces en Santiago) para repuestos, filamento y ayuda presencial.
- **Costo real de filamento en Chile**: falta levantar precios por kg de PLA en retailers locales para poder estimar el costo de un cuadro en pesos.
- **Estado del pipeline automatizado**: falta verificar en la práctica si `build123d-mcp` + Bambu Connect funcionan end-to-end en macOS con un P2S. Todo lo escrito al respecto es documentación, no experiencia propia.
- **Fuente en video de confianza**: falta elegir un canal de YouTube de referencia en vez de acumular tutoriales sueltos.
