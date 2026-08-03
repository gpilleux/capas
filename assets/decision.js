/* ============================================================
   Widget de decisión reutilizable — assets/decision.js

   Convierte "¿cuál compro?" en un conjunto de restricciones.
   El alumno responde preguntas de uso, no de specs; el widget
   filtra las opciones que cumplen y recomienda la más barata.

   Uso:

     <div data-decision></div>
     <script src="../assets/decision.js"></script>
     <script>
       Decide.mount({
         unit: "CLP",
         options: [
           { name: "A1 Combo", price: 519990, specs: { cerrada: false, cama: 256 } }
         ],
         questions: [
           { q: "¿Qué van a imprimir?",
             opts: [
               { t: "Solo PLA", req: {} },
               { t: "ABS también", req: { cerrada: true } }
             ] }
         ],
         explain: (winner) => "texto libre"   // opcional
       });
     </script>

   Reglas de matching:
   - req booleano  → la opción debe tener ese valor exacto.
   - req numérico  → la opción debe tener un valor >= al pedido.
   - req ausente   → no restringe nada.
   ============================================================ */

const Decide = (() => {
  const money = (n, unit) =>
    "$" + Math.round(n).toLocaleString("es-CL") + (unit ? " " + unit : "");

  function satisfies(option, reqs) {
    return Object.entries(reqs).every(([k, want]) => {
      const has = option.specs[k];
      if (typeof want === "number") return typeof has === "number" && has >= want;
      return has === want;
    });
  }

  function mount(spec) {
    const host = document.querySelector("[data-decision]");
    if (!host) return;
    const answers = spec.questions.map(() => null);

    host.className = "widget decision";
    const qWrap = document.createElement("div");
    const out = document.createElement("div");
    out.className = "decision-out";
    host.append(qWrap, out);

    spec.questions.forEach((question, qi) => {
      const block = document.createElement("div");
      block.className = "dq";
      const label = document.createElement("p");
      label.className = "dq-q";
      label.textContent = question.q;
      block.appendChild(label);

      const row = document.createElement("div");
      row.className = "dq-opts";
      question.opts.forEach((o, oi) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "dq-opt";
        b.textContent = o.t;
        b.addEventListener("click", () => {
          answers[qi] = oi;
          [...row.children].forEach((c) => c.classList.remove("on"));
          b.classList.add("on");
          update();
        });
        row.appendChild(b);
      });
      block.appendChild(row);
      qWrap.appendChild(block);
    });

    function update() {
      if (answers.some((a) => a === null)) {
        const left = answers.filter((a) => a === null).length;
        out.innerHTML = `<p class="decision-wait">Faltan ${left} respuesta${left > 1 ? "s" : ""}.</p>`;
        return;
      }

      const reqs = {};
      answers.forEach((oi, qi) => Object.assign(reqs, spec.questions[qi].opts[oi].req));

      const ranked = spec.options
        .map((o) => ({ ...o, ok: satisfies(o, reqs) }))
        .sort((a, b) => a.price - b.price);
      const winner = ranked.find((o) => o.ok);

      const rows = ranked
        .map(
          (o) => `<tr class="${o.ok ? "pass" : "fail"}">
            <td>${o.ok ? (o === winner ? "✔" : "·") : "✕"}</td>
            <td>${o.name}</td>
            <td class="num">${money(o.price)}</td>
            <td class="why">${o.ok ? (o === winner ? "cumple, y es la más barata que lo hace" : "cumple, pero cuesta más") : "no cumple lo que pediste"}</td>
          </tr>`
        )
        .join("");

      const delta =
        winner && spec.reference && spec.reference !== winner.name
          ? (() => {
              const ref = spec.options.find((o) => o.name === spec.reference);
              if (!ref || ref.price <= winner.price) return "";
              return `<p class="decision-delta">Diferencia con ${ref.name}: <b>${money(ref.price - winner.price, spec.unit)}</b></p>`;
            })()
          : "";

      out.innerHTML =
        (winner
          ? `<p class="decision-head">Para lo que describiste: <b>${winner.name}</b></p>`
          : `<p class="decision-head">Nada de la lista cumple todo lo que pediste.</p>`) +
        `<div class="table-wrap"><table class="decision-table">${rows}</table></div>` +
        delta +
        (winner && spec.explain ? `<p class="decision-note">${spec.explain(winner)}</p>` : "");
    }

    update();
  }

  return { mount };
})();
