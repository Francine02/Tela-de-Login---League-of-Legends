const input = document.querySelectorAll ("input");
const span = document.querySelectorAll (".form-group span")
const button = document.querySelector ("#button");

    /*input[0].addEventListener ("focus", ()=> {
        span[0].classList.add("span-move")
    
    })
    
    input[0].addEventListener ("focusout", ()=> {
        span[0].classList.remove("span-move")
    })
    */

function buttonActive() {
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

input.forEach(inputElement => {
    inputElement.addEventListener("input", buttonActive);
});

buttonActive();