let resultadoCasa = document.getElementById("resultadocasa")
let resultadoFora = document.getElementById("resultadofora")
let timeCasa = 0
let timeFora = 0

function somarUmCasa() {
    timeCasa += 1
    resultadoCasa.textContent = timeCasa
}

function somarUmFora() {
    timeFora += 1
    resultadoFora.textContent = timeFora
}

function somarDoisCasa() {
    timeCasa += 2
    resultadoCasa.textContent = timeCasa
}

function somarDoisFora() {
    timeFora += 2
    resultadoFora.textContent = timeFora
}

function somarTresCasa() {
    timeCasa += 3
    resultadoCasa.textContent = timeCasa
}

function somarTresFora() {
    timeFora += 3
    resultadoFora.textContent = timeFora
}