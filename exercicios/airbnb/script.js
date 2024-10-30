const searchButton = document.querySelector('#search')
const traco = document.querySelector('#traco')
const barraPesquisa = document.querySelector('input')
const ondePesquisa2 = document.querySelector('.barra-pesquisa2')
const ondePesquisa3 = document.querySelector('.barra-pesquisa3')
const ondePesquisa4 = document.querySelector('.barra-pesquisa4')

searchButton.addEventListener('click', (event) => {
    alert(`você clicou!`)
})

barraPesquisa.addEventListener('click', (event) => {
    traco.style.display = 'none';
    ondePesquisa2.style.background = '#eeeeee';
    ondePesquisa2.style.borderRadius = '999px';
})