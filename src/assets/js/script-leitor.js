// // Seleciona todos os botões de leitura
// const botoesLer = document.querySelectorAll('.ler-button');

// // Adiciona evento de clique a cada botão
// botoesLer.forEach(botao => {
//     botao.addEventListener('click', () => {
//         const texto = botao.parentElement.textContent.replace('Ler em Voz Alta', '').trim(); // Obtém o texto do elemento pai do botão
//         const utterance = new SpeechSynthesisUtterance(texto); // Cria objeto SpeechSynthesisUtterance
//         speechSynthesis.speak(utterance); // Inicia a leitura do texto
//     });
// });


// Seleciona todos os botões de leitura
const botoesLer = document.querySelectorAll('.ler-button');

// Adiciona evento de clique a cada botão
botoesLer.forEach(botao => {
  botao.addEventListener('click', () => {
    const textoElement = botao.parentElement;
    const isReading = textoElement.dataset.reading === 'true';
    const texto = textoElement.textContent.replace('Ler em Voz Alta', '').trim();

    if (isReading) {
      speechSynthesis.cancel(); // Para a leitura atual
      textoElement.dataset.reading = 'false';
      botao.textContent = 'Ler em Voz Alta';
    } else {
      const utterance = new SpeechSynthesisUtterance(texto);
      speechSynthesis.speak(utterance);
      textoElement.dataset.reading = 'true';
      botao.textContent = 'Parar Leitura';
    }
  });
});
