//============================================
//Script paratrocar o botao play -> Stop
let show = true;
const botaoPlay = document.querySelector('.ler-button');

botaoPlay.addEventListener('click', () => {
  botaoPlay.classList.toggle('on', show)
  show = !show
})

//============================================
//Script para adicionar a funcionalidade do botao de acessibilidade
let ligar = true;
const acessibilidadeBtn = document.querySelector('#narrador');
const trilho = document.querySelector('.btn-aumentar-texto');
const botaoplay = document.querySelector('.ler-button');

acessibilidadeBtn.addEventListener('click', () => {
  botaoplay.classList.toggle('play', ligar)
  acessibilidadeBtn.classList.toggle('play', ligar)
  trilho.classList.toggle('play', ligar)
  ligar = !ligar
})

//============================================
//Script para ler os textos da página
// Seleciona todos os botões de leitura
const botoesLer = document.querySelectorAll('.ler-button');

// Adiciona evento de clique a cada botão
botoesLer.forEach(botao => {
  botao.addEventListener('click', () => {
    const textoElement = botao.parentElement;
    const isReading = textoElement.dataset.reading === 'true';
    const texto = textoElement.textContent.replace('', '').trim();

    if (isReading) {
      speechSynthesis.cancel(); // Para a leitura atual
      textoElement.dataset.reading = 'false';
      // botao.textContent = 'Ler em Voz Alta';
    } else {
      const utterance = new SpeechSynthesisUtterance(texto);
      speechSynthesis.speak(utterance);
      textoElement.dataset.reading = 'true';
      // botao.textContent = 'Parar Leitura';
    }
  });
});
