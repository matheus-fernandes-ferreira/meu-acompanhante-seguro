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



// // Seleciona todos os botões de leitura
// const botoesLer = document.querySelectorAll('.ler-button');

// // Variável para armazenar o estado da leitura (reproduzindo ou pausado)
// let leituraEmCurso = false;

// // Adiciona evento de clique a cada botão
// botoesLer.forEach(botao => {
//   botao.addEventListener('click', () => {
//     // Obtém o texto do elemento pai do botão
//     const texto = botao.parentElement.textContent.replace('Ler em Voz Alta', '').trim();

//     // Se a leitura estiver em curso, pausar e definir o estado como false
//     if (leituraEmCurso) {
//       speechSynthesis.pause();
//       leituraEmCurso = false;
//       botao.textContent = 'Ler em Voz Alta'; // Atualiza o texto do botão
//       return; // Interrompe a função para evitar iniciar nova leitura
//     }

//     // Cria objeto SpeechSynthesisUtterance
//     const utterance = new SpeechSynthesisUtterance(texto);

//     // Inicia a leitura do texto e define o estado como true
//     speechSynthesis.speak(utterance);
//     leituraEmCurso = true;
//     botao.textContent = 'Pausar Leitura'; // Atualiza o texto do botão
//   });
// });




/ Seleciona os botões de leitura dentro da seção
const botoesLer = document.querySelectorAll('.sec-sobre-nos .ler-button');

// Variáveis para armazenar o estado da leitura e o parágrafo atual
let leituraEmCurso = false;
let paragrafoAtual = null;

// Adiciona evento de clique a cada botão
botoesLer.forEach(botao => {
  botao.addEventListener('click', () => {
    const idParagrafo = botao.dataset.paragrafo;
    const paragrafo = document.getElementById(idParagrafo);
    const texto = paragrafo.textContent;

    // Se outro parágrafo estiver sendo lido, pare a leitura atual
    if (leituraEmCurso && paragrafoAtual !== idParagrafo) {
      speechSynthesis.pause();
      leituraEmCurso = false;
      const botaoAnterior = document.querySelector(`.ler-button[data-paragrafo="${paragrafoAtual}"]`);
      botaoAnterior.textContent = 'Ler em Voz Alta (Parágrafo X)';
    }

    // Se a leitura estiver em curso, pausar e atualizar o texto do botão
    if (leituraEmCurso) {
      speechSynthesis.pause();
      leituraEmCurso = false;
      botao.textContent = 'Continuar Leitura';
      return;
    }

    // Cria objeto SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(texto);

    // Inicia a leitura do texto, atualiza o estado, o parágrafo atual e o texto do botão
    speechSynthesis.speak(utterance);
    leituraEmCurso = true;
    paragrafoAtual = idParagrafo;
    botao.textContent = 'Pausar Leitura';
  });
});