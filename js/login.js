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

alert("Login realizado com sucesso!");

window.location.href =
"./paginas/dashboard.html";

}else{

alert("Usuário ou senha inválidos");

}

});