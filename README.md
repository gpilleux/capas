<h1 align="center">capas</h1>

<p align="center">
  <em>Un curso de impresión 3D, escrito una lección a la vez.</em>
</p>

<p align="center">
  <a href="#las-lecciones">Lecciones</a> ·
  <a href="#referencia">Referencia</a> ·
  <a href="#cómo-leerlo">Cómo leerlo</a> ·
  <a href="#de-dónde-sale-lo-que-aquí-se-afirma">Fuentes</a>
</p>

---

Esto empezó con una compra a medias: una impresora 3D entre dos amigos, cuadros multicolor por hacer y cero experiencia previa. En vez de acumular tutoriales sueltos de YouTube, el curso se fue escribiendo a medida que aparecían las preguntas.

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
| 1 | [Una boquilla, cuatro colores](lessons/0001-una-boquilla-cuatro-colores.html) | Por qué una impresora "multicolor" no imprime varios colores a la vez, qué cuesta cada cambio de color, y qué compras realmente cuando compras un AMS. |

> Van saliendo de a poco. Cada una asume la anterior.

## Referencia

| Documento | Para qué |
|-----------|----------|
| [Glosario](reference/glosario.html) | ~28 términos, del *hotend* al *Transmission Distance*. Lo que se consulta, no lo que se memoriza. |

## Cómo leerlo

Las lecciones son HTML autocontenido, sin dependencias externas. Clónalo y ábrelas:

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
