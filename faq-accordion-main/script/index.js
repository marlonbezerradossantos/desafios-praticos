"use strict"

const answers = document.querySelectorAll(".questions__answer")
const icons = document.querySelectorAll('.container__icon')
function abreResposta(index) {
    if(answers[index].style.display === "block") {
        icons[index].style.backgroundImage = "url('imagens/icon-plus.svg')"
        answers[index].style.display = "none"
    } else {
        icons[index].style.backgroundImage = "url('imagens/icon-minus.svg')"
        answers[index].style.display = "block"
    }
}