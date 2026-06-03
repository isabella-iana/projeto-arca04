/* =====================================================================
   PROGRAMA ARCA — Gerenciamento de Animais (CRUD em memória)
   ===================================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const form   = document.getElementById("animalForm");
    const lista  = document.getElementById("listaAnimais");
    const indice = document.getElementById("indice");
    const alerta = document.getElementById("formAlerta");

    // Dados iniciais de exemplo
    let animais = [
        { nome: "Thor", especie: "Cachorro", raca: "Vira-lata", status: "Disponível" },
        { nome: "Mel",  especie: "Cachorro", raca: "Labrador",  status: "Em Tratamento" },
        { nome: "Luna", especie: "Gato",     raca: "SRD",       status: "Adotado" }
    ];

    const classeStatus = {
        "Disponível":    "badge--ok",
        "Em Tratamento": "badge--warn",
        "Adotado":       "badge--info"
    };

    function render() {
        lista.innerHTML = "";
        if (animais.length === 0) {
            lista.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--muted)">Nenhum animal cadastrado.</td></tr>';
            return;
        }
        animais.forEach(function (a, i) {
            const tr = document.createElement("tr");
            tr.innerHTML =
                "<td><strong>" + a.nome + "</strong></td>" +
                "<td>" + a.especie + "</td>" +
                "<td>" + a.raca + "</td>" +
                '<td><span class="badge ' + (classeStatus[a.status] || "badge--muted") + '">' + a.status + "</span></td>" +
                '<td><div class="row-actions">' +
                    '<button class="btn btn--ghost btn--sm" data-edit="' + i + '">Editar</button>' +
                    '<button class="btn btn--danger btn--sm" data-del="' + i + '">Excluir</button>' +
                "</div></td>";
            lista.appendChild(tr);
        });
    }

    function mostrarAlerta(texto, ok) {
        alerta.textContent = texto;
        alerta.className = "form-alert show " + (ok ? "form-alert--ok" : "form-alert--err");
        setTimeout(function () { alerta.classList.remove("show"); }, 2600);
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const nome = document.getElementById("nome").value.trim();
        const raca = document.getElementById("raca").value.trim();
        const especie = document.getElementById("especie").value;
        const status = document.getElementById("status").value;

        if (!nome || !raca) {
            mostrarAlerta("Preencha o nome e a raça do animal.", false);
            return;
        }

        const dado = { nome: nome, especie: especie, raca: raca, status: status };

        if (indice.value === "") {
            animais.push(dado);
            mostrarAlerta("Animal cadastrado com sucesso!", true);
        } else {
            animais[Number(indice.value)] = dado;
            mostrarAlerta("Cadastro atualizado com sucesso!", true);
        }

        form.reset();
        indice.value = "";
        render();
    });

    lista.addEventListener("click", function (e) {
        const edit = e.target.getAttribute("data-edit");
        const del  = e.target.getAttribute("data-del");

        if (edit !== null) {
            const a = animais[Number(edit)];
            document.getElementById("nome").value = a.nome;
            document.getElementById("especie").value = a.especie;
            document.getElementById("raca").value = a.raca;
            document.getElementById("status").value = a.status;
            indice.value = edit;
            window.scrollTo({ top: 0, behavior: "smooth" });
        }

        if (del !== null) {
            animais.splice(Number(del), 1);
            render();
            mostrarAlerta("Animal removido.", true);
        }
    });

    render();
});
