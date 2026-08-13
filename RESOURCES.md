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

### Elegir máquina

- [Filamino — Bambu Lab AMS Guide: AMS vs AMS Lite vs AMS 2 Pro](https://filamino.com/blog/bambu-lab-ams-guide-how-multi-color-printing-works-and-which-ams-to-choose)
  La diferencia entre los tres sistemas de carretes, que es la que menos se entiende al comprar. Usar para: decidir si el secado activo justifica el salto de precio.
- [LayerDepth — CoreXY vs Bed-Slinger: Motion Systems Explained](https://layerdepth.com/learn/corexy-vs-bed-slinger/)
  Explica los dos sistemas de movimiento y, sobre todo, aclara que el factor decisivo no es la cinemática sino la cámara cerrada. Usar para: no pagar por velocidad que no se necesita.
- [SpoolHound — Which Bambu Lab Printer Should You Buy? (2026)](https://spoolhound.com/which-bambu-lab-printer)
  Comparativa actualizada de la línea completa. Usar para: contexto de precios de referencia y estado del catálogo (la X1 Carbon fue descontinuada en marzo de 2026).
- [TodoToner — catálogo Bambu Lab](https://www.todotoner.cl/)
  Distribuidor oficial en Chile, con tienda física en Santiago Centro. Usar para: precios locales reales en CLP y garantía nacional. **Precios verificados el 2026-08-02**: A1 mini Combo $399.990 · A1 Combo $519.990 · P1S Combo $919.990 · P2S Combo $1.139.990 · H2D Combo $2.299.990.

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
- [HueForge Wiki — FAQ](https://hueforge.wiki/index.php/FAQ)
  Documentación de la comunidad del software. Usar para: qué es TD, qué filamentos tener al empezar, y los dos datos clave — que no hace falta AMS (basta con pausas manuales) y que conviene **apagar la torre de purga**.
- [FilaScope — HueForge for Beginners](https://filascope.com/guides/hueforge-beginners-guide) · [Guía completa de TD](https://filascope.com/guides/hueforge-td-complete-guide)
  Ajustes concretos (0,08–0,12 mm de capa, base 0,16 mm, relleno 100%) y cómo medir o verificar TD. Usar para: configurar el primer cuadro y no adivinar valores.
- [HuePick — Cómo elegir los colores de filamento](https://huepick.app/articles/filament-guide/choosing-filament-colors-for-hueforge)
  Por qué el error más común es elegir colores de valor tonal parecido. Usar para: armar la paleta antes de gastar en filamento.
- [FlatForge Plugin](https://shop.thehueforge.com/pages/flatforge-plugin)
  Para imprimir boca abajo o a doble cara. Usar para: cuando el acabado de la cara superior no alcance.

### El slicer

- [Bambu Lab Wiki — Introduction to Bambu Studio](https://wiki.bambulab.com/en/x1/manual/introduction-to-bambu-studio)
  Documentación oficial del slicer que van a usar. Usar para: el flujo importar → perfil → Slice → Preview → Print y cualquier duda de interfaz. *Nota: el wiki bloquea scrapers; abrir en navegador.*
- [Prusa Knowledge Base — Layers and perimeters](https://help.prusa3d.com/article/layers-and-perimeters_1748)
  **Verificado 2026-08-12.** La fuente del dato central de la Lección 6: "la resistencia de un modelo la define principalmente el número de perímetros (no el relleno)". También: altura de capa máxima ≈ 80% del diámetro de boquilla, mínimo 3 capas sólidas superiores. Vale para cualquier slicer.
- [Clever Creations — The Strongest Infill Pattern](https://clevercreations.org/what-is-strongest-infill-pattern-cura-prusa/)
  Comparativa de patrones de relleno con el dato práctico clave: sobre 25–30% de relleno la resistencia casi no sube, y las paredes aportan más que el patrón. Usar para: no gastar plástico en relleno inútil.
- [Bambu Lab — descarga de Bambu Studio](https://bambulab.com/en/download/studio)
  Gratis, corre sin impresora. Usar para: la tarea de la Lección 6 — practicar el flujo completo antes de que exista la máquina.

### Diseño para impresión

- [Protolabs Network — How does part orientation affect a 3D print?](https://www.hubs.com/knowledge-base/how-does-part-orientation-affect-3d-print/)
  Los cuatro efectos de la orientación (resistencia, soportes, acabado, tiempo) explicados por un fabricante que imprime piezas para clientes. Usar para: decidir cómo parar cualquier pieza en la cama. Dato clave: XY es 4–5× más resistente que Z.
- [SelfCAD — La regla de los 45 grados](https://www.selfcad.com/blog/what-is-the-45-degree-rule-in-3d-printing-a-complete-guide) · [3DSourced — Voladizos y puentes](https://www.3dsourced.com/rigid-ink/how-to-print-overhangs-bridges-exeeding-the-45-degree-rule/)
  El umbral de los voladizos y su excepción, el puente. Usar para: saber si una geometría necesita soportes antes de abrir el slicer.
- [MLC CAD — Why FDM prints are weaker on the Z axis](https://www.mlc-cad.com/resources/3d-printing/why-fdm-3d-prints-are-weaker-on-the-z-axis-anisotropy-explained/)
  Por qué existe la anisotropía, a nivel de adhesión entre capas. Usar para: entender el mecanismo, no solo el número.

### Materiales

- [UAVMODEL — Filament Guide: PLA, PETG, ABS, TPU, Nylon, ASA y Policarbonato comparados](https://blog.uavmodel.com/3d-printing-filament-guide-pla-petg-abs-tpu-nylon-asa-and-polycarbonate-compared/)
  La familia completa con números concretos de temperatura y resistencia, escrita por gente que fabrica piezas de dron. Usar para: elegir material cuando el PLA no alcanza.
- [Wevolver — PETG Temperature Resistance](https://www.wevolver.com/article/petg-temperature-resistance-heat-limits-and-practical-insights-for-engineers)
  Límites térmicos reales del PETG y por qué sirve para interiores de auto. Usar para: el caso más común en que el PLA falla.
- [Prusa Knowledge Base — Food safe FDM printing](https://help.prusa3d.com/article/food-safe-fdm-printing_112313)
  La respuesta seria a "¿puedo comer de esto?". Usar para: cualquier pieza que toque comida — la respuesta corta es no sin sellar.
- [SpoolHound — Food safety guide](https://spoolhound.com/food-safety-guide)
  El detalle del problema: surcos de 20–100 micrones contra bacterias de 1–5. Usar para: entender por qué lavar no basta.

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
