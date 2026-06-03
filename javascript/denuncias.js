
document.addEventListener("DOMContentLoaded", function () {

    const busca   = document.getElementById("buscaProtocolo");
    const filtro  = document.getElementById("filtroStatus");
    const btnBusca = document.getElementById("btnPesquisar");
    const corpo   = document.getElementById("listaDenuncias");

    function aplicarFiltro() {
        const termo = (busca.value || "").trim().toLowerCase();
        const status = (filtro.value || "Todos");

        Array.prototype.forEach.call(corpo.querySelectorAll("tr"), function (tr) {
            const protocolo = tr.children[0].textContent.toLowerCase();
            const linhaStatus = tr.getAttribute("data-status") || "";
            const casaTermo  = termo === "" || protocolo.indexOf(termo) !== -1;
            const casaStatus = status === "Todos" || linhaStatus === status;
            tr.style.display = (casaTermo && casaStatus) ? "" : "none";
        });
    }

    btnBusca.addEventListener("click", aplicarFiltro);
    busca.addEventListener("input", aplicarFiltro);
    filtro.addEventListener("change", aplicarFiltro);

    // Ações das linhas (Atender / Detalhes)
    corpo.addEventListener("click", function (e) {
        const tr = e.target.closest("tr");
        if (!tr) return;
        const protocolo = tr.children[0].textContent;

        if (e.target.classList.contains("acao-atender")) {
            const cel = tr.querySelector(".cel-status");
            cel.innerHTML = '<span class="badge badge--ok">Em atendimento</span>';
            tr.setAttribute("data-status", "Resolvido");
            e.target.disabled = true;
            e.target.textContent = "Atendida";
        }

        if (e.target.classList.contains("acao-detalhes")) {
            alert("Detalhes da denúncia " + protocolo + "\n\nBairro: " + tr.children[1].textContent +
                  "\nData: " + tr.children[2].textContent +
                  "\nPrioridade: " + tr.children[3].textContent.trim());
        }
    });
});
