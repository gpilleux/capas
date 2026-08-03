/* ============================================================
   Simulador de veladuras — assets/blend.js

   Demuestra el mecanismo central del filament painting: un filamento
   translúcido puesto sobre otro no lo tapa, lo tiñe. Cuánto lo tapa
   depende del espesor acumulado y del TD (transmission distance) del
   filamento de arriba.

   Modelo usado:   opacidad = min(1, espesor / TD)
                   resultado = base·(1 − opacidad) + encima·opacidad

   Es una linealización deliberada. HueForge usa un modelo óptico más
   fino, pero la intuición que importa —TD alto tapa poco, TD bajo tapa
   de inmediato— es exactamente esta.

   Uso:
     <div data-blend></div>
     <script src="../assets/blend.js"></script>
     <script>
       Blend.mount({
         filaments: [{ name: "Negro", td: 1.0, hex: "#141414" }, ...],
         layerHeight: 0.08,
         maxLayers: 24,
         defaults: { base: "Negro", top: "Blanco translúcido", layers: 6 }
       });
     </script>
   ============================================================ */

const Blend = (() => {
  const hexToRgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const rgbToCss = (c) => `rgb(${c.map(Math.round).join(",")})`;

  function mix(baseHex, topHex, opacity) {
    const a = hexToRgb(baseHex);
    const b = hexToRgb(topHex);
    return rgbToCss(a.map((v, i) => v * (1 - opacity) + b[i] * opacity));
  }

  function mount(spec) {
    const host = document.querySelector("[data-blend]");
    if (!host) return;

    const { filaments, layerHeight: lh, maxLayers: max } = spec;
    const byName = (n) => filaments.find((f) => f.name === n) || filaments[0];

    host.className = "widget blend";
    host.innerHTML = `
      <b>Simulador de veladuras</b>
      <div class="blend-controls">
        <div>
          <label>Filamento de abajo</label>
          <select class="blend-base"></select>
        </div>
        <div>
          <label>Filamento de encima</label>
          <select class="blend-top"></select>
        </div>
      </div>
      <label>Capas encima: <span class="blend-n mono"></span> — espesor <span class="blend-mm mono"></span></label>
      <input type="range" class="blend-range" min="1" max="${max}" step="1">
      <div class="blend-ramp"></div>
      <div class="blend-result">
        <div class="blend-chip"></div>
        <p class="blend-text"></p>
      </div>`;

    const $ = (s) => host.querySelector(s);
    const selBase = $(".blend-base"), selTop = $(".blend-top"), range = $(".blend-range");

    filaments.forEach((f) => {
      selBase.appendChild(new Option(`${f.name} · TD ${f.td}`, f.name));
      selTop.appendChild(new Option(`${f.name} · TD ${f.td}`, f.name));
    });

    const d = spec.defaults || {};
    selBase.value = d.base || filaments[0].name;
    selTop.value = d.top || filaments[1].name;
    range.value = d.layers || Math.round(max / 4);

    function update() {
      const base = byName(selBase.value), top = byName(selTop.value);
      const n = +range.value;
      const t = n * lh;
      const opacity = Math.min(1, t / top.td);

      $(".blend-n").textContent = n;
      $(".blend-mm").textContent = t.toFixed(2).replace(".", ",") + " mm";

      // Rampa: cómo evoluciona el color a medida que se apilan capas
      $(".blend-ramp").innerHTML = Array.from({ length: max }, (_, i) => {
        const k = i + 1;
        const o = Math.min(1, (k * lh) / top.td);
        return `<span class="blend-cell${k === n ? " on" : ""}" title="${k} capas"
                 style="background:${mix(base.hex, top.hex, o)}"></span>`;
      }).join("");

      $(".blend-chip").style.background = mix(base.hex, top.hex, opacity);

      const pct = Math.round(opacity * 100);
      const need = (top.td / lh);
      const verdict =
        opacity >= 0.99
          ? `Ya tapó por completo. De aquí en adelante, apilar más capas no cambia nada: solo gasta plástico y horas.`
          : pct < 20
          ? `Apenas lo tiñe. Es justo lo que sirve para sombras y medios tonos — el color de abajo sigue mandando.`
          : `Mezcla intermedia: ni uno ni otro. Aquí es donde aparecen los tonos que no compraste.`;

      $(".blend-text").innerHTML =
        `<b>${top.name}</b> sobre <b>${base.name}</b> con ${n} capa${n > 1 ? "s" : ""} ` +
        `tapa un <b>${pct}%</b>. ${verdict}<br>` +
        `<small>Para taparlo del todo harían falta ${Math.ceil(need)} capas (${top.td} mm). ` +
        `Ese número <em>es</em> el TD.</small>`;
    }

    [selBase, selTop, range].forEach((el) => el.addEventListener("input", update));
    update();
  }

  return { mount };
})();
