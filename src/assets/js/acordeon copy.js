//Script para ler os textos da página
// Seleciona todos os botões de leitura
const botaoAcordeon = document.querySelectorAll('.botao-acordeon');
const area = document.querySelector('.area-expandida')
const content = document.querySelector('.conteudo-area-expandida')

// Adiciona evento de clique a cada botão
botaoAcordeon.forEach(botao => {
  botao.addEventListener('click', () => {
    // const textoElement = botao.parentElement;
    const isReading = botaoElement.dataset.reading === 'true';
    const texto = botaoElement.textContent.replace('', '').trim();
    if (isReading) {
      // speechSynthesis.cancel(); // Para a leitura atual
      area.classList.toggle('active', isReading)
      content.classList.toggle('active', isReading)

      botaoElement.dataset.reading = 'false';
      // botao.textContent = 'Ler em Voz Alta';
    } else {

      botaoElement.dataset.reading = 'true';
      // botao.textContent = 'Parar Leitura';
    }
  });
});