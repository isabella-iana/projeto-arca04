document
.getElementById("formAnimal")
.addEventListener("submit", function(e){

e.preventDefault();

alert("Animal cadastrado com sucesso!");

this.reset();

});