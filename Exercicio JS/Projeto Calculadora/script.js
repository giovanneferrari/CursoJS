let resposta = document.getElementById('resultado')
let visor = document.getElementById('visor')

function two() {
    let dois = 2
    dois = dois
    visor.textContent = visor.textContent + dois
    console.log(visor)
}

function plus() {
    let soma = " + "
    soma = soma
    visor.textContent = visor.textContent + soma
    console.log(visor)
}

function five() {
    let cinco = 5
    cinco = cinco
    visor.textContent = visor.textContent + cinco
    console.log(visor)
}

function calcular() {
    let resultado = visor.textContent
    resultado = resultado
    resultado = eval(resultado)
    resposta.textContent = resultado
    resultado = 0
    visor.textContent = ""
    console.log(resultado)
}