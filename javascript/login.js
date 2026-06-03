
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("loginForm");
    const msg = document.getElementById("loginMsg");

    // Perfis de acesso (mesmos usuários e senhas do sistema original)
    const credenciais = {
        prefeitura: { senha: "pref@456", destino: "html/prefeitura/dashboard.html" },
        tutor:      { senha: "123456",   destino: "html/tutor/home.html" },
        candidato:  { senha: "cand!098", destino: "html/candidato/home-candidato.html" },
        ong:        { senha: "ong$-135", destino: "html/ong/dashboard-ong.html" }
    };

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const usuario = document.getElementById("usuario").value.trim().toLowerCase();
        const senha = document.getElementById("senha").value;

        const conta = credenciais[usuario];

        if (conta && conta.senha === senha) {
            msg.classList.remove("show");
            window.location.href = conta.destino;
        } else {
            msg.textContent = "Usuário ou senha inválidos. Verifique suas credenciais.";
            msg.classList.add("show");
        }
    });
});
