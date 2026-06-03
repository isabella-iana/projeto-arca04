document
    .getElementById("loginForm")
    .addEventListener("submit", function(e){

        e.preventDefault();

        const usuario =
        document.getElementById("usuario").value;

        const senha =
        document.getElementById("senha").value;

        if(
            usuario === "prefeitura" &&
            senha === "pref@456"
        ){
            window.location.href = "./paginas/dashboard.html";

        } else if (
            usuario === "tutor" &&
            senha === "123456"
        ) {
            window.location.href = "./paginas/home.html";
        } else if (
            usuario === "candidato" &&
            senha === "cand!098"
        ) {
            window.location.href =
            "./paginas/home-candidato.html";
        } else if (
            usuario === "Ong" &&
            senha === "ong$-135"
        ) {
            window.location.href =
            "./paginas/dashboard-ong.html";
        }
        else{
            alert("Usuário ou senha inválidos");
        }
});