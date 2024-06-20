const acessibilidade = document.querySelector(".btn-accessibilidade");
const menu = document.querySelector(".menu-acessibilidade");

const botoes = document.querySelector(".botoes-acessibilidade-menu")


acessibilidade.addEventListener("click", () =>
    menu.classList.toggle("active"));

acessibilidade.addEventListener("click", () =>
    botoes.classList.toggle("active"));

const ativarSliderTexto = document.getElementById("slider-texto");
const slider = document.getElementById("tamanhoTexto");

ativarSliderTexto.addEventListener("click", () =>
    slider.classList.toggle("active"));