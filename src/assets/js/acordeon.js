const botoesDoAcordeoon1 = document.querySelector(".botao-higienizacao");
const botoesDoAcordeoon2 = document.querySelector(".botao-protecao");
const botoesDoAcordeoon3 = document.querySelector(".botao-contaminacao");
const botoesDoAcordeoon4 = document.querySelector(".botao-leia-mais");
const area = document.querySelector(".area-expandida");
const area2 = document.querySelector(".area-expandida-protecao");

botoesDoAcordeoon1.addEventListener("click", () =>
    area.classList.toggle("active"));

botoesDoAcordeoon2.addEventListener("click", () =>
    area2.classList.toggle("active"));

botoesDoAcordeoon3.addEventListener("click", () =>
    area.classList.toggle("active"));

botoesDoAcordeoon4.addEventListener("click", () =>
    area.classList.toggle("active"));

