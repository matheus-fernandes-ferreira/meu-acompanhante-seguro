const botoesDoAcordeoon = document.querySelector(".botao-acordeon-wb");
const area = document.querySelector(".area-expandida")
const areaInterna = document.querySelector(".conteudo-area-expandida")


botoesDoAcordeoon.addEventListener("click", () =>
    area.classList.toggle("active"));