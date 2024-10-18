const counter = document.querySelector('.counter');

// Função para calcular o valor dinamicamente
function calcularValorDinamico() {
    const valorCalculado = 3400; // Retorna um valor entre 1000 e 6000
    return valorCalculado;
}

// Função que faz a animação da contagem
function animarContador(valorFinal) {
    let current = 0;
    const increment = valorFinal / 100; // Ajuste este valor para controlar a velocidade

    const updateCounter = () => {
        if (current < valorFinal) {
            current += increment;
            counter.innerText = `${Math.ceil(current)}`;
            setTimeout(updateCounter, 10); // Atualiza a cada 10ms
        } else {
            counter.innerText = valorFinal; // Garante que o número final seja o valor calculado
        }
    };

    updateCounter();
}

// Quando o cálculo dinâmico é concluído, inicia a animação
const valorFinalCalculado = calcularValorDinamico();
animarContador(valorFinalCalculado);
