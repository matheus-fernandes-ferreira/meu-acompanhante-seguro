
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




