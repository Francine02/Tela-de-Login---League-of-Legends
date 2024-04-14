const input = document.querySelectorAll ("input");
const span = document.querySelectorAll (".form-group span")
const button = document.querySelector ("#button");

function spanAdd(spanElement) { //Adiciona a classe no span
    spanElement.classList.add("span-move");
    console.log("spanadd");
}

function spanRemove(spanElement) { //Remove a classe no span
    spanElement.classList.remove("span-move");
    console.log("spanremove");
}

function spanState() { //Verifica se o input está vazio, para assim adicionar ou remover a classe do span com base no input
    const inputValue = input[0].value.trim();
    const inputValue2 = input[1].value.trim();

    span.forEach((spanElement, index) => { //Percorre o indíce do span e remove a classe de acordo com isso
        if (index === 0 && inputValue.length === 0 || index === 1 && inputValue2.length === 0) { //Verifica o tamanho dos inputs, se estão vazios e remove a classe do span de acordo
            spanRemove(spanElement);

        } else if (index === 0 && inputValue.length > 0 || index === 1 && inputValue2.length > 0) {
            spanAdd(spanElement);
        }
    });
} 

function buttonActive() { //Ativa o botão
    const inputValue = input[0].value.trim();
    const inputValue2 = input[1].value.trim();

    if (inputValue.length === 0 || inputValue2.length === 0) {
        button.classList.remove("active");
        button.classList.add("disabled");
    } else {
        button.classList.remove("disabled");
        button.classList.add("active");
    }
}

input.forEach(inputElement => { //Percorre os inputs e atualiza o estado dos elementos
    inputElement.addEventListener("input", () => {
        buttonActive();
    });

    inputElement.addEventListener("focus", () => {//Quando focar, o evento de input é disparado e assim chama a função
        console.log("focus")
        inputElement.addEventListener("input", () => {
            spanState ();
        });
    });

    inputElement.addEventListener("blur", () => { //Percorre o span para excluir a classe
        spanState()
        console.log("blur")
    });
});

buttonActive();
