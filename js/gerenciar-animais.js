const animais = [
    {
        nome: "Thor",
        especie: "Cachorro",
        raca: "Vira-lata",
        status: "Disponível"
    },
    {
        nome: "Mel",
        especie: "Cachorro",
        raca: "Labrador",
        status: "Disponível"
    },
    {
        nome: "Luna",
        especie: "Gato",
        raca: "Siamês",
        status: "Disponível"
    },
    {
        nome: "Bob",
        especie: "Cachorro",
        raca: "Poodle",
        status: "Em tratamento"
    },
    {
        nome: "Nina",
        especie: "Cachorro",
        raca: "Vira-lata",
        status: "Adotado"
    },
    {
        nome: "Max",
        especie: "Cachorro",
        raca: "Pinscher",
        status: "Disponível"
    }
];

const formulario = document.getElementById("animalForm");
const lista = document.getElementById("listaAnimais");

function atualizarTabela() {
    lista.innerHTML = "";

    animais.forEach((animal, index) => {
        lista.innerHTML += `
            <tr>
                <td>${animal.nome}</td>
                <td>${animal.especie}</td>
                <td>${animal.raca}</td>
                <td>${animal.status}</td>
                <td>
                    <button class="editar" onclick="editarAnimal(${index})">
                        Editar
                    </button>

                    <button class="excluir" onclick="excluirAnimal(${index})">
                        Excluir
                    </button>
                </td>
            </tr>
        `;
    });
}

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const indice = document.getElementById("indice").value;

    const animal = {
        nome: document.getElementById("nome").value,
        especie: document.getElementById("especie").value,
        raca: document.getElementById("raca").value,
        status: document.getElementById("status").value
    };

    if (indice === "") {
        animais.push(animal);
    } else {
        animais[indice] = animal;
    }

    formulario.reset();

    document.getElementById("indice").value = "";

    atualizarTabela();
});

function editarAnimal(i) {
    document.getElementById("indice").value = i;

    document.getElementById("nome").value = animais[i].nome;
    document.getElementById("especie").value = animais[i].especie;
    document.getElementById("raca").value = animais[i].raca;
    document.getElementById("status").value = animais[i].status;
}

function excluirAnimal(i) {
    if (confirm("Deseja excluir este animal?")) {
        animais.splice(i, 1);
        atualizarTabela();
    }
}

atualizarTabela();