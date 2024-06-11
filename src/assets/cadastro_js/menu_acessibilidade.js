
const acessibilidade = document.querySelector(".btn-accessibilidade");
const menu = document.querySelector(".menu-acessibilidade");
const botoes = document.querySelector(".botoes-acessibilidade-menu")


acessibilidade.addEventListener("click", () =>
    menu.classList.toggle("active"));

acessibilidade.addEventListener("click", () =>
    botoes.classList.toggle("active"));

function ola(){
    console.log('Eu aumento o texto');
}



function aumentartexto() {
    const elemento = document.querySelector("container");
    const tamanhoAtual = parseInt(window.getComputedStyle(elemento, null).getPropertyValue('font-size'));
    const novoTamanho = tamanhoAtual + 5;
    elemento.style.fontSize = novoTamanho + 'px';
}


const botao = document.getElementsByTagName('aumentar-texto');

botao[0].addEventListener('click', () => document.body.style.fontSize = '10px');
botao[1].addEventListener('click', () => document.body.style.fontSize = '15px');
botao[2].addEventListener('click', () => document.body.style.fontSize = '20px');

botao[3].addEventListener('click', () => {
    aumentartexto();
    aumentartexto();
    aumentartexto();
});