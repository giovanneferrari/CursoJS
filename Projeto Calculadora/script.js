let resultado = document.getElementById('visor-resultado')

function limpar() {
    resultado.textContent = ''
    console.log(resultado)
}

function sinal() {
    resultado.textContent = resultado
    console.log(resultado)
}

function sete() {
    let sete = 7
    resultado.textContent = resultado.textContent + sete
    console.log(resultado)
}

function oito() {
    let oito = 8
    resultado.textContent = resultado.textContent + oito
    console.log(resultado)
}