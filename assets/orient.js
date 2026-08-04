/* ============================================================
   Visualizador de orientación — assets/orient.js

   Enseña la idea que no se ve en un render: las capas SIEMPRE son
   horizontales. Girar la pieza no gira las capas — gira la pieza
   respecto de ellas. El componente dibuja la silueta de la pieza,
   le superpone las capas reales y marca la dirección de la carga.

   La lección aporta la geometría; el componente aporta las capas,
   la cama, las flechas y la tarjeta de puntajes.

   Uso:
     <div data-orient></div>
     <script src="../assets/orient.js"></script>
     <script>
       Orient.mount({
         cases: [{
           name: "Tirante",
           brief: "Una barra que va a tirar de algo.",
           orientations: [{
             label: "Acostado",
             path: "M40 81 H160 V105 H40 Z",
             holes: [{ cx: 55, cy: 93, r: 6 }],
             arrows: [{ x1: 30, y1: 93, x2: 8, y2: 93 }],
             scores: { Resistencia: 3, Soportes: 3, Acabado: 2, Tiempo: 3 },
             verdict: "…"
           }]
         }]
       });
     </script>

   scores: 3 = bien, 2 = aceptable, 1 = mal.
   ============================================================ */

const Orient = (() => {
  const VB = { w: 200, h: 120, bed: 105 };
  const LAYER_PITCH = 5;
  const SVG_NS = "http://www.w3.org/2000/svg";

  let uid = 0;

  function svgFor(o) {
    const id = "orient-clip-" + uid;
    const maskId = "orient-mask-" + uid;
    uid++;

    const layers = [];
    for (let y = VB.bed - LAYER_PITCH; y > 0; y -= LAYER_PITCH) {
      layers.push(`<line class="orient-layer" x1="0" y1="${y}" x2="${VB.w}" y2="${y}"/>`);
    }

    const holes = (o.holes || [])
      .map((h) => `<circle cx="${h.cx}" cy="${h.cy}" r="${h.r}" fill="black"/>`)
      .join("");

    const arrows = (o.arrows || [])
      .map(
        (a) =>
          `<line class="orient-arrow" x1="${a.x1}" y1="${a.y1}" x2="${a.x2}" y2="${a.y2}"
             marker-end="url(#orient-head)"/>`
      )
      .join("");

    // Zona marcada como voladizo: la lección la declara explícitamente
    const flags = (o.flags || [])
      .map(
        (f) =>
          `<line class="orient-flag" x1="${f.x1}" y1="${f.y}" x2="${f.x2}" y2="${f.y}"/>
           <text class="orient-flag-t" x="${(f.x1 + f.x2) / 2}" y="${f.y + 10}"
             text-anchor="middle">${f.label}</text>`
      )
      .join("");

    return `<svg viewBox="0 0 ${VB.w} ${VB.h}" class="orient-svg" role="img"
              aria-label="${o.label}">
      <defs>
        <clipPath id="${id}"><path d="${o.path}"/></clipPath>
        <mask id="${maskId}">
          <rect width="${VB.w}" height="${VB.h}" fill="white"/>
          ${holes}
        </mask>
        <marker id="orient-head" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" class="orient-arrow-head"/>
        </marker>
      </defs>

      <g mask="url(#${maskId})">
        <path d="${o.path}" class="orient-body"/>
        <g clip-path="url(#${id})">${layers.join("")}</g>
      </g>

      <line class="orient-bed" x1="4" y1="${VB.bed}" x2="${VB.w - 4}" y2="${VB.bed}"/>
      ${flags}
      ${arrows}
    </svg>`;
  }

  function scoreCard(scores) {
    return (
      `<div class="orient-scores">` +
      Object.entries(scores)
        .map(([k, v]) => {
          const bars = [1, 2, 3]
            .map((i) => `<span class="${i <= v ? "on s" + v : ""}"></span>`)
            .join("");
          return `<div class="orient-score"><span class="k">${k}</span><span class="bar">${bars}</span></div>`;
        })
        .join("") +
      `</div>`
    );
  }

  function mount(spec) {
    const host = document.querySelector("[data-orient]");
    if (!host) return;

    host.className = "widget orient";
    host.innerHTML = `
      <div class="orient-cases"></div>
      <p class="orient-brief"></p>
      <div class="orient-opts"></div>
      <div class="orient-view"></div>
      <p class="orient-verdict"></p>`;

    const $ = (s) => host.querySelector(s);
    let ci = 0, oi = 0;

    spec.cases.forEach((c, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "orient-case";
      b.textContent = c.name;
      b.addEventListener("click", () => { ci = i; oi = 0; render(); });
      $(".orient-cases").appendChild(b);
    });

    function render() {
      const c = spec.cases[ci];
      const o = c.orientations[oi];

      [...$(".orient-cases").children].forEach((b, i) =>
        b.classList.toggle("on", i === ci)
      );
      $(".orient-brief").textContent = c.brief;

      $(".orient-opts").innerHTML = "";
      c.orientations.forEach((x, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "orient-opt" + (i === oi ? " on" : "");
        b.textContent = x.label;
        b.addEventListener("click", () => { oi = i; render(); });
        $(".orient-opts").appendChild(b);
      });

      $(".orient-view").innerHTML = svgFor(o) + scoreCard(o.scores);
      $(".orient-verdict").innerHTML = o.verdict;
    }

    render();
  }

  return { mount };
})();
