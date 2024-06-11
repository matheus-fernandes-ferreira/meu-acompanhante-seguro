let fontSize = 16; // Tamanho de fonte padrão

function aumentarTexto() {
    fontSize += 2; // Aumenta o tamanho da fonte em 2px
    document.documentElement.style.fontSize = fontSize + "px"; // Aplica o novo tamanho de fonte ao elemento root
}

