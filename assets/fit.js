/* ============================================================
   Simulador de calces — assets/fit.js
   Uso en una lección:

     <div class="widget slice" data-fit></div>
     <script src="../assets/fit.js"></script>
     <script>
       Fit.mount({
         shrink: 0.3,   // mm que "roba" la impresión a un agujero (estimación)
         cases: [{
           name: "El tornillo",         // pestaña
           brief: "Qué es y qué exige", // contexto bajo la pestaña
           mate: 4.0,                   // diámetro real de lo que entra, mm
           mateName: "tornillo",
           min: 3.6, max: 5.8, start: 4.0,   // rango del diámetro en CAD
           band: [0.5, 1.0],            // holgura impresa aceptable [min, max]
           scad: (d) => "...",          // snippet OpenSCAD con d sustituido
           msgs: { neg, tight, loose, ok }   // consejo por estado
         }]
       });
     </script>

   Reglas de diseño (no romper):
   - El modelo es GRUESO a propósito: agujero impreso = nominal − shrink,
     con shrink fijo. Sirve para entender el mecanismo, no para predecir
     una impresora real: eso se mide con probeta. La etiqueta "estimación"
     debe quedar visible.
   - La física que sí respeta, porque es la lección:
       el agujero impreso sale más chico que el modelado (0,2–0,5 mm)
       la holgura funcional se elige por tipo de calce, y va en el CAD
   - Feedback inmediato: cada cambio recalcula metas, dibujo y consejo.
   ============================================================ */

const Fit = (() => {
  const fmt = (n) => n.toFixed(1).replace(".", ",");

  function verdict(gap, band) {
    if (gap < 0) return "neg";
    if (gap < band[0]) return "tight";
    if (gap > band[1]) return "loose";
    return "ok";
  }

  function vis(c, printed, gap) {
    const W = 220, H = 130, cx = W / 2, cy = H / 2;
    const scale = 92 / Math.max(printed, c.mate, 1); // diámetro mayor ≈ 92 px
    const rHole = (printed * scale) / 2;
    const rNom = ((printed + 0.0001) * scale) / 2 + (0.3 * scale) / 2; // nominal = printed + shrink
    const rMate = (c.mate * scale) / 2;
    const bad = gap < 0;
    return `
      <svg class="fit-vis" viewBox="0 0 ${W} ${H}" role="img" aria-label="Corte del agujero y la pieza que entra">
        <circle class="fit-nominal" cx="${cx}" cy="${cy}" r="${rNom}"/>
        <circle class="fit-hole" cx="${cx}" cy="${cy}" r="${rHole}"/>
        <circle class="fit-mate${bad ? " bad" : ""}" cx="${cx}" cy="${cy + (bad ? 0 : Math.max(0, rHole - rMate))}" r="${rMate}"/>
        <text class="fit-tag" x="6" y="14">— modelo · — impreso · ● ${c.mateName}</text>
      </svg>`;
  }

  function render(host, cfg) {
    const shrink = cfg.shrink ?? 0.3;
    let caseIdx = 0;
    let d = cfg.cases[0].start;

    host.innerHTML = `
      <div class="slice-cases"></div>
      <p class="slice-brief"></p>
      <div class="slice-grid">
        <div>
          <label>Diámetro del agujero en el CAD <span class="slice-val" data-v="d"></span></label>
          <input type="range">
          <div class="fit-code"><pre><code></code></pre></div>
        </div>
        <div>
          <div class="fit-draw"></div>
          <div class="fit-read"></div>
          <div class="slice-goals"></div>
        </div>
      </div>
      <p class="slice-coach"></p>
      <p class="slice-fine">Estimación gruesa: aquí el agujero impreso sale ${fmt(shrink)} mm más chico que el modelo. Tu impresora real se mide con una probeta, no se adivina.</p>
    `;

    const tabs = host.querySelector(".slice-cases");
    cfg.cases.forEach((c, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "slice-case";
      b.textContent = c.name;
      b.addEventListener("click", () => { caseIdx = i; d = c.start; update(); });
      tabs.appendChild(b);
    });

    const range = host.querySelector("input[type=range]");
    range.addEventListener("input", () => { d = +range.value; update(); });

    function update() {
      const c = cfg.cases[caseIdx];
      d = Math.round(d * 10) / 10;
      const printed = Math.round((d - shrink) * 10) / 10;
      const gap = Math.round((printed - c.mate) * 10) / 10;
      const v = verdict(gap, c.band);

      tabs.querySelectorAll(".slice-case").forEach((b, i) =>
        b.classList.toggle("on", i === caseIdx));
      host.querySelector(".slice-brief").textContent = c.brief;

      range.min = c.min; range.max = c.max; range.step = 0.1; range.value = d;
      host.querySelector('[data-v="d"]').textContent = fmt(d) + " mm";
      host.querySelector(".fit-code code").textContent = c.scad(fmt(d).replace(",", "."));

      host.querySelector(".fit-draw").innerHTML = vis(c, printed, gap);
      host.querySelector(".fit-read").innerHTML = `
        <span>${c.mateName} real: <b>${fmt(c.mate)} mm</b></span>
        <span>agujero impreso ≈ <b>${fmt(printed)} mm</b></span>
        <span>holgura resultante: <b>${gap < 0 ? "−" : ""}${fmt(Math.abs(gap))} mm</b></span>
      `;

      const goals = [
        { t: c.mateName.charAt(0).toUpperCase() + c.mateName.slice(1) + " entra (holgura ≥ " + fmt(c.band[0]) + ")", ok: gap >= c.band[0] },
        { t: "No sobra juego (holgura ≤ " + fmt(c.band[1]) + ")", ok: gap <= c.band[1] && gap >= 0 }
      ];
      const done = goals.every((g) => g.ok);
      host.querySelector(".slice-goals").innerHTML =
        goals.map((g) => `<div class="slice-goal ${g.ok ? "ok" : ""}">${g.ok ? "✓" : "○"} ${g.t}</div>`).join("") +
        (done ? `<div class="slice-goal done">Listo: este diámetro va al CAD.</div>` : "");

      const coach = host.querySelector(".slice-coach");
      coach.textContent = c.msgs[v] || "";
      coach.style.display = c.msgs[v] ? "" : "none";
    }

    update();
  }

  function mount(cfg) {
    document.querySelectorAll("[data-fit]").forEach((host) => {
      if (!host.dataset.mounted) {
        host.dataset.mounted = "1";
        render(host, cfg);
      }
    });
  }

  return { mount };
})();
