"use strict"

const numbers = document.querySelectorAll('.rating__number')


function guardaValor(n) {
    for(let n of numbers) {
        n.style.backgroundColor = "#272e38"
        
    }
    numbers[n-1].style.backgroundColor = "#f97813"
    sessionStorage.setItem("rate", n)
}
