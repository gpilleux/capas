<h1 align="center">capas</h1>

<p align="center">
  <em>Un curso de impresión 3D, escrito una lección a la vez.</em>
</p>

<p align="center">
  <a href="https://gpilleux.github.io/capas/"><strong>Leer el curso →</strong></a>
</p>

<p align="center">
  <a href="#las-lecciones">Lecciones</a> ·
  <a href="#referencia">Referencia</a> ·
  <a href="#cómo-leerlo">Cómo leerlo</a> ·
  <a href="#de-dónde-sale-lo-que-aquí-se-afirma">Fuentes</a>
</p>

---

Esto empezó con una compra a medias: una impresora 3D entre dos amigos, cero experiencia previa y una idea vaga pero ambiciosa — poder fabricar cualquier cosa que se nos ocurra. Repuestos que ya no se venden, organizadores a medida, regalos, piezas que no existen. Y, de paso, cuadros multicolor. En vez de acumular tutoriales sueltos de YouTube, el curso se fue escribiendo a medida que aparecían las preguntas.

El resultado son **lecciones cortas en HTML**, cada una autocontenida, cada una con una idea y un ejercicio. Se leen en diez minutos y se imprimen bien en papel.

### El criterio

**Una idea por lección.** La memoria de trabajo es chica. Una lección que enseña cinco cosas no enseña ninguna.

**Todo se cita.** Cada afirmación técnica enlaza a su fuente: la wiki oficial del fabricante, mediciones publicadas, documentación. Nada sale de la intuición.

**Se responde de memoria.** Cada lección cierra con preguntas de recuperación. Recordar cuesta más que releer, y por eso funciona: el esfuerzo es lo que fija el conocimiento, no la familiaridad.

**Se aprende con las manos.** Calculadoras, simuladores, cosas que se mueven. Entender que la purga cuesta 350 gramos es distinto a mover el slider y verlo.

---

## Las lecciones

| # | Lección | De qué trata |
|---|---------|--------------|
| 1 | [Una boquilla, cuatro colores](https://gpilleux.github.io/capas/lessons/0001-una-boquilla-cuatro-colores.html) | Por qué una impresora "multicolor" no imprime varios colores a la vez, qué cuesta cada cambio de color, y qué compras realmente cuando compras un AMS. |
| 2 | [Elegir la máquina](https://gpilleux.github.io/capas/lessons/0002-elegir-la-maquina.html) | "¿Cuál compro?" son cuatro preguntas independientes. Cámara cerrada, sistema de movimiento, tipo de AMS y tamaño de cama — con precios reales y un widget que arma el argumento por ti. |
| 3 | [Anatomía de un cuadro](https://gpilleux.github.io/capas/lessons/0003-anatomia-de-un-cuadro.html) | Cómo cuatro filamentos producen cientos de tonos. Qué es el TD, con un simulador de veladuras, y por qué esta técnica invierte casi todo lo de la Lección 1. |

| 4 | [Cómo pararla en la cama](https://gpilleux.github.io/capas/lessons/0004-como-pararla-en-la-cama.html) | Las capas siempre son horizontales. Cómo la orientación decide resistencia, soportes, acabado y tiempo — con un visualizador que dibuja las capas reales sobre la pieza. |

| 5 | [De qué la hago](https://gpilleux.github.io/capas/lessons/0005-de-que-la-hago.html) | El material no se elige por resistencia sino por dónde va a vivir la pieza. PLA, PETG, ABS, ASA y TPU, con un decisor que recomienda el más fácil que cumple. |

> El curso usa objetos concretos como hilo conductor — un repuesto, un organizador, una figura, un cuadro — porque los conceptos abstractos no se retienen. Ninguno de esos ejemplos es el propósito: la máquina sirve para lo que se te ocurra.

> Van saliendo de a poco. Cada una asume la anterior.

## Referencia

| Documento | Para qué |
|-----------|----------|
| [Glosario](https://gpilleux.github.io/capas/reference/glosario.html) | ~37 términos, del *hotend* al *Transmission Distance*. Lo que se consulta, no lo que se memoriza. |
| [Reglas de diseño](https://gpilleux.github.io/capas/reference/reglas-de-diseno.html) | Los umbrales que deciden si una pieza sale bien: 45°, puentes, anisotropía, tiempo. Una hoja para dejar al lado de la máquina. |
| [Materiales](https://gpilleux.github.io/capas/reference/materiales.html) | Cuál usar y por qué, ordenados por temperatura de reblandecimiento. Con las advertencias que aplican a todos. |

## Cómo leerlo

La forma directa es [**gpilleux.github.io/capas**](https://gpilleux.github.io/capas/).

También son HTML autocontenido, sin dependencias externas, así que funcionan sin conexión:

```bash
git clone https://github.com/gpilleux/capas.git
open capas/lessons/0001-una-boquilla-cuatro-colores.html
```

Se ven bien en claro y en oscuro, y con `⌘P` quedan decentes en papel.

## De dónde sale lo que aquí se afirma

El listado curado vive en [`RESOURCES.md`](RESOURCES.md), separado en dos:

- **Conocimiento** — documentación oficial de fabricantes, mediciones publicadas, comparativas técnicas.
- **Sabiduría** — las comunidades donde se pregunta cuando la teoría no alcanza. Un foro con gente que ya rompió la máquina de doce maneras vale más que cualquier manual.

Ese archivo también lleva una sección de **huecos**: lo que aún no está bien fundamentado. Se prefiere admitir el vacío antes que rellenarlo con suposiciones.

## Estructura

```
lessons/     Las clases. HTML autocontenido, numeradas.
reference/   Glosario y material de consulta rápida.
assets/      Hoja de estilos y componentes compartidos entre lecciones.
RESOURCES.md Fuentes verificadas y comunidades.
```

---

<p align="center">
  <sub>Escrito con <a href="https://claude.com/claude-code">Claude Code</a> · Material de estudio personal, público por si le sirve a alguien más.</sub>
</p>
