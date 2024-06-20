const texto = document.querySelector('html');
const range = document.getElementById('tamanhoTexto');

range.addEventListener('input', function () {
    const novoTamanho = range.value + 'px';
    texto.style.fontSize = novoTamanho;
});