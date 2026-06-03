const btnSubmit = document.getElementById("btn-submit-denuncia");
const popup = document.getElementById("popup");
const btnFechar = document.getElementById("btn-fechar-popup");

btnSubmit.addEventListener("click", function () {
    const email = document.getElementById("email").value.trim();
    const tel = document.getElementById("tel").value.trim();
    const descricao = document.getElementById("descricao").value.trim();
    const endereco = document.getElementById("endereco").value.trim();

    if (tel === "" || descricao === "" || email === "" || endereco === "") {
        alert("Preencha todos os campos antes de concluir.");
        return;
    }

    popup.style.display = "flex";
});

function redirecionarHome() {
    window.location.href = "home.html";
}

btnFechar.addEventListener("click", function () {
    redirecionarHome();
});

popup.addEventListener("click", function (event) {
    if (event.target === popup) {
        redirecionarHome();
    }
});