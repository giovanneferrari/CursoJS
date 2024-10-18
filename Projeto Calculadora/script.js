let resultado = document.getElementById('visor-resultado')
let conta = document.getElementById('visor-conta')

function limpar() {
    resultado.textContent = '0'
    conta.textContent = ''
    console.log(resultado)
}

function sinal() {
    let negativo = -1
    resultado.textContent = resultado.textContent * negativo
    console.log(resultado)
}

function porcentagem() {
    let porcentagem = 100
    resultado.textContent = resultado.textContent / porcentagem
    console.log(porcentagem)
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

function nove() {
    let nove = 9
    resultado.textContent = resultado.textContent + nove
    console.log(resultado)
}

function multiplicacao() {
    let multiplicar = "*"
    resultado.textContent = resultado.textContent + multiplicar
    console.log(resultado)
}

function quatro() {
    let quatro = 4
    resultado.textContent = resultado.textContent + quatro
    console.log(resultado)
}

function cinco() {
    let cinco = 5
    resultado.textContent = resultado.textContent + cinco
    console.log(resultado)
}

function seis() {
    let seis = 6
    resultado.textContent = resultado.textContent + seis
    console.log(resultado)
}

function subtracao() {
    let subtrair = "-"
    resultado.textContent = resultado.textContent + subtrair
    console.log(resultado)
}

function um() {
    let um = 1
    resultado.textContent = resultado.textContent + um
    console.log(resultado)
}

function dois() {
    let dois = 2
    resultado.textContent = resultado.textContent + dois
    console.log(resultado)
}

function tres() {
    let tres = 3
    resultado.textContent = resultado.textContent + tres
    console.log(resultado)
}

function soma() {
    let somar = "+"
    resultado.textContent = resultado.textContent + somar
    console.log(resultado)
}

function zero() {
    let zero = 0
    resultado.textContent = resultado.textContent + zero
    console.log(resultado)
}

// NÃO ESTÁ FUNCIONANDO
function decimal() {
    let decimal = "."
    resultado.textContent = resultado.textContent + decimal
    console.log(resultado)
}

function operacao() {
    console.log(resultado)
    conta.textContent = resultado.textContent
    resultado.textContent = eval(resultado.textContent).toFixed(2)

}

function divisao() {
    let dividir = "/"
    resultado.textContent = resultado.textContent + dividir
    console.log(resultado)
}