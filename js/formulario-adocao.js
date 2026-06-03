const btnSubmit = document.getElementById("btn-submit-adocao");
const popup = document.getElementById("popup");
const btnFechar = document.getElementById("btn-fechar-popup");

btnSubmit.addEventListener("click", function () {
    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const email = document.getElementById("email").value.trim();
    const endereco = document.getElementById("endereco").value.trim();

    if (nome === "" || cpf === "" || email === "" || endereco === "") {
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