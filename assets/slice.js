/* ============================================================
   Simulador de slicer — assets/slice.js
   Uso en una lección:

     <div class="widget slice" data-slice></div>
     <script src="../assets/slice.js"></script>
     <script>
       Slice.mount({
         cases: [{
           name: "Gancho",              // pestaña
           brief: "Qué es y qué exige", // contexto bajo la pestaña
           H: 60,      // alto en la cama, mm  → número de capas
           As: 50,     // superficie de pared lateral, cm² → costo de cada pared
           Vi: 20,     // volumen interior rellenable, cm³ → costo del relleno
           base: 3,    // cm³ fijos (primera capa, tapas sólidas)
           start: { lh: 0.2, walls: 2, infill: 15 },
           goals: [{ t: "Meta visible", test: (s, c) => c.strength >= 4 }],
           coach: (s, c) => "Pista según el estado actual, o null."
         }]
       });
     </script>

   Reglas de diseño (no romper):
   - El modelo de números es GRUESO a propósito: sirve para comparar
     configuraciones entre sí, no para predecir el tiempo real. La
     etiqueta "estimación" debe quedar visible en el widget.
   - La física que sí respeta, porque es la lección:
       tiempo ∝ volumen / altura de capa  +  costo fijo por capa
       resistencia: paredes mandan; el relleno satura sobre 30%
       detalle: lo fija la altura de capa, nada más
   - Feedback inmediato: cada cambio recalcula metas y consejo.
   ============================================================ */

const Slice = (() => {
  const LH = [
    { v: 0.08, n: "0,08", tag: "extra fina" },
    { v: 0.12, n: "0,12", tag: "fina" },
    { v: 0.2,  n: "0,20", tag: "estándar" },
    { v: 0.28, n: "0,28", tag: "borrador" }
  ];

  const DETAIL = { 0.08: 5, 0.12: 4, 0.2: 3, 0.28: 2 };

  const WALL_W = 0.045;   // ancho de una pared, cm
  const SPEED  = 80;      // mm/s efectivos promedio
  const LAYER_OVERHEAD = 4; // s fijos por capa (aceleración, viajes)
  const DENSITY = 1.24;   // g/cm³ del PLA

  function calc(c, s) {
    const layers = Math.ceil(c.H / s.lh);
    const vol = c.base + c.As * WALL_W * s.walls + c.Vi * (s.infill / 100); // cm³
    const flow = s.lh * 0.42 * SPEED;                 // mm³/s
    const secs = (vol * 1000) / flow + layers * LAYER_OVERHEAD;
    const strength = Math.min(5, Math.max(1, s.walls * 1.15 + Math.min(s.infill, 30) * 0.04));
    return { layers, grams: vol * DENSITY, secs, strength, detail: DETAIL[s.lh] };
  }

  function fmtTime(secs) {
    const h = Math.floor(secs / 3600);
    const m = Math.round((secs % 3600) / 60);
    return h ? `${h} h ${String(m).padStart(2, "0")} min` : `${m} min`;
  }

  function bar(score, label) {
    const lvl = score >= 4 ? "s3" : score >= 2.5 ? "s2" : "s1";
    const cells = [1, 2, 3, 4, 5]
      .map((i) => `<span class="${i <= Math.round(score) ? "on " + lvl : ""}"></span>`)
      .join("");
    return `<div class="slice-score"><span class="k">${label}</span><span class="bar">${cells}</span></div>`;
  }

  function render(host, cfg) {
    let caseIdx = 0;
    let s = { ...cfg.cases[0].start };

    host.innerHTML = `
      <div class="slice-cases"></div>
      <p class="slice-brief"></p>
      <div class="slice-grid">
        <div>
          <label>Altura de capa</label>
          <div class="slice-seg"></div>
          <label>Paredes <span class="slice-val" data-v="walls"></span></label>
          <input type="range" min="1" max="5" step="1" data-k="walls">
          <label>Relleno <span class="slice-val" data-v="infill"></span></label>
          <input type="range" min="0" max="100" step="5" data-k="infill">
        </div>
        <div>
          <div class="slice-outs"></div>
          <div class="slice-goals"></div>
        </div>
      </div>
      <p class="slice-coach"></p>
      <p class="slice-fine">Estimación gruesa: compara configuraciones entre sí, no predice el tiempo real de tu máquina.</p>
    `;

    const tabs = host.querySelector(".slice-cases");
    cfg.cases.forEach((c, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "slice-case";
      b.textContent = c.name;
      b.addEventListener("click", () => {
        caseIdx = i;
        s = { ...c.start };
        update();
      });
      tabs.appendChild(b);
    });

    const seg = host.querySelector(".slice-seg");
    LH.forEach((o) => {
      const b = document.createElement("button");
      b.type = "button";
      b.dataset.lh = o.v;
      b.innerHTML = `${o.n}<small>${o.tag}</small>`;
      b.addEventListener("click", () => { s.lh = o.v; update(); });
      seg.appendChild(b);
    });

    host.querySelectorAll("input[type=range]").forEach((r) => {
      r.addEventListener("input", () => { s[r.dataset.k] = +r.value; update(); });
    });

    function update() {
      const c = cfg.cases[caseIdx];
      const out = calc(c, s);

      tabs.querySelectorAll(".slice-case").forEach((b, i) =>
        b.classList.toggle("on", i === caseIdx));
      host.querySelector(".slice-brief").textContent = c.brief;

      seg.querySelectorAll("button").forEach((b) =>
        b.classList.toggle("on", +b.dataset.lh === s.lh));
      host.querySelectorAll("input[type=range]").forEach((r) => (r.value = s[r.dataset.k]));
      host.querySelector('[data-v="walls"]').textContent = s.walls;
      host.querySelector('[data-v="infill"]').textContent = s.infill + "%";

      host.querySelector(".slice-outs").innerHTML = `
        <div class="slice-num">${fmtTime(out.secs)}<small>${out.layers} capas · ${Math.round(out.grams)} g de filamento</small></div>
        ${bar(out.strength, "Resistencia")}
        ${bar(out.detail, "Detalle")}
      `;

      const done = c.goals.every((g) => g.test(s, out));
      host.querySelector(".slice-goals").innerHTML =
        c.goals.map((g) => {
          const ok = g.test(s, out);
          return `<div class="slice-goal ${ok ? "ok" : ""}">${ok ? "✓" : "○"} ${g.t}</div>`;
        }).join("") +
        (done ? `<div class="slice-goal done">Listo: esta receta se puede mandar a imprimir.</div>` : "");

      const hint = c.coach(s, out);
      const coach = host.querySelector(".slice-coach");
      coach.textContent = hint || "";
      coach.style.display = hint ? "" : "none";
    }

    update();
  }

  function mount(cfg) {
    document.querySelectorAll("[data-slice]").forEach((host) => {
      if (!host.dataset.mounted) {
        host.dataset.mounted = "1";
        render(host, cfg);
      }
    });
  }

  return { mount };
})();
