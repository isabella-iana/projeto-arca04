document
.getElementById("formAtendimento")
.addEventListener("submit", function(e){

e.preventDefault();

alert("Atendimento registrado com sucesso.");

this.reset();

});