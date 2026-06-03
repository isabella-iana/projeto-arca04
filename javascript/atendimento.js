
document.addEventListener("DOMContentLoaded", function () {

    const form   = document.getElementById("formAtendimento");
    const lista  = document.getElementById("listaAtendimentos");
    const alerta = document.getElementById("formAlerta");

    const classeStatus = {
        "Em Observação":        "badge--info",
        "Em Tratamento":        "badge--warn",
        "Recuperado":           "badge--ok",
        "Liberado para Adoção": "badge--ok"
    };

    function mostrarAlerta(texto, ok) {
        alerta.textContent = texto;
        alerta.className = "form-alert show " + (ok ? "form-alert--ok" : "form-alert--err");
        setTimeout(function () { alerta.classList.remove("show"); }, 2600);
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const animal = document.getElementById("animal").value.trim();
        const vet    = document.getElementById("veterinario").value.trim();
        const diag   = document.getElementById("diagnostico").value.trim();
        const status = document.getElementById("status").value;

        if (!animal || !vet || !diag) {
            mostrarAlerta("Preencha animal, veterinário e diagnóstico.", false);
            return;
        }

        const tr = document.createElement("tr");
        tr.innerHTML =
            "<td><strong>" + animal + "</strong></td>" +
            "<td>" + vet + "</td>" +
            "<td>" + diag + "</td>" +
            '<td><span class="badge ' + (classeStatus[status] || "badge--muted") + '">' + status + "</span></td>";
        lista.prepend(tr);

        form.reset();
        mostrarAlerta("Atendimento registrado com sucesso!", true);
    });
});
