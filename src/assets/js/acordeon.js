
const botoesAcordeon = document.querySelectorAll('.btn-menu');
const conteudosAcordeon = document.querySelectorAll('.container-content');

let conteudoAberto = null; // Armazena o conteúdo atualmente aberto

botoesAcordeon.forEach((botao, indice) => {
  botao.addEventListener('click', () => {
    const conteudoAcordeonAtual = conteudosAcordeon[indice];
    const estaAberto = conteudoAcordeonAtual === conteudoAberto; // Verifica se o conteúdo já está aberto

    // Se o conteúdo já estiver aberto, feche-o
    if (estaAberto) {
      conteudoAcordeonAtual.classList.remove('ativo');
      conteudoAberto = null; // Atualizar referência para indicar que nenhum conteúdo está aberto
      return; // Sair da função para evitar abrir novamente
    }

    // Se outro conteúdo estiver aberto, feche-o
    if (conteudoAberto !== null) {
      conteudoAberto.classList.remove('ativo');
    }

    // Alternar estado do conteúdo atual
    conteudoAcordeonAtual.classList.toggle('ativo');

    // Atualizar referência do conteúdo aberto
    conteudoAberto = conteudoAcordeonAtual;
  });
});