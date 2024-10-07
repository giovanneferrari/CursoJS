let resultado = document.getElementById('resultado');
let idade = document.getElementById('idade');

function avaliar() {
    let idadeNumero = idade.value;
    let idadeFinal = parseInt(idadeNumero);
if (idadeFinal < 18) {
    resultado.textContent = 'Proibida a entrada de menores'
} else if (idadeFinal === 18) {
    resultado.textContent = 'Você está quase lá, porém ainda não.'
} else if (idadeFinal > 18) {
    resultado.textContent = 'Pode entrar'
} else {
    resultado.textContent = 'Idade inválida'
}
}
