/* ============================================================
   Widget de quiz reutilizable — assets/quiz.js
   Uso en una lección:

     <div class="quiz" data-quiz></div>
     <script src="../assets/quiz.js"></script>
     <script>
       Quiz.mount({
         q: "Pregunta aquí",
         opts: [
           { t: "Opción A", ok: false, fb: "Por qué no." },
           { t: "Opción B", ok: true,  fb: "Por qué sí." }
         ]
       });
     </script>

   Reglas de diseño (no romper):
   - Las opciones se barajan al cargar, para que la posición no sea pista.
   - Feedback inmediato: al hacer clic se marca y se explica, siempre.
   - Una sola respuesta por pregunta; después se bloquea (recuperación, no ensayo-error).
   ============================================================ */

const Quiz = (() => {
  let pending = [];

  function shuffle(a) {
    const r = a.slice();
    for (let i = r.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [r[i], r[j]] = [r[j], r[i]];
    }
    return r;
  }

  function render(host, spec, idx, total) {
    host.innerHTML = "";

    if (total > 1) {
      const s = document.createElement("div");
      s.className = "score";
      s.textContent = `Pregunta ${idx + 1} de ${total}`;
      host.appendChild(s);
    }

    const q = document.createElement("p");
    q.className = "q";
    q.textContent = spec.q;
    host.appendChild(q);

    const opts = document.createElement("div");
    opts.className = "opts";
    host.appendChild(opts);

    const fb = document.createElement("div");
    fb.className = "fb";
    host.appendChild(fb);

    shuffle(spec.opts).forEach((o) => {
      const b = document.createElement("button");
      b.className = "opt";
      b.type = "button";
      b.textContent = o.t;
      b.addEventListener("click", () => {
        opts.querySelectorAll("button").forEach((x) => (x.disabled = true));
        b.classList.add(o.ok ? "right" : "wrong");
        if (!o.ok) {
          const correct = [...opts.querySelectorAll("button")].find(
            (x) => x.textContent === spec.opts.find((s) => s.ok).t
          );
          if (correct) correct.classList.add("right");
        }
        fb.innerHTML =
          `<strong>${o.ok ? "Correcto." : "No es esa."}</strong> ` + o.fb;
        fb.classList.add("show");
      });
      opts.appendChild(b);
    });
  }

  function mount(...specs) {
    pending = pending.concat(specs.flat());
    const hosts = document.querySelectorAll("[data-quiz]");
    pending.forEach((spec, i) => {
      const host = hosts[i];
      if (host && !host.dataset.mounted) {
        host.dataset.mounted = "1";
        render(host, spec, i, pending.length);
      }
    });
  }

  return { mount };
})();
