const formulario = document.getElementById("formAtendimento");
const listaAtendimentos = document.getElementById("listaAtendimentos");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const animal = document.getElementById("animal").value.trim();
    const veterinario = document.getElementById("veterinario").value.trim();
    const diagnostico = document.getElementById("diagnostico").value.trim();
    const status = document.getElementById("status").value;

    if (animal === "" || veterinario === "" || diagnostico === "") {
        alert("Preencha todos os campos antes de registrar.");
        return;
    }

    listaAtendimentos.innerHTML += `
        <tr>
            <td>${animal}</td>
            <td>${veterinario}</td>
            <td>${diagnostico}</td>
            <td>${status}</td>
        </tr>
    `;

    formulario.reset();

    alert("Atendimento registrado com sucesso.");
});