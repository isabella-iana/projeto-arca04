const atender =
document.querySelectorAll(".aprovar");

atender.forEach(botao => {

botao.addEventListener("click", () => {

alert("Equipe de fiscalização acionada.");

});

});

const detalhes =
document.querySelectorAll(".detalhes");

detalhes.forEach(botao => {

botao.addEventListener("click", () => {

alert("Abrindo detalhes da denúncia.");

});

});