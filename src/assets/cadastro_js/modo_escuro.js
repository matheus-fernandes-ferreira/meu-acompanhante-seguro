
const supportsDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
function enableDarkMode() {
    document.body.classList.add('box-cadastro');
}

// Função para desativar o modo escuro
function disableDarkMode() {
    document.body.classList.remove('box-cadastro');
}

function toggleDarkMode() {
    if (document.body.classList.contains('box-cadastro')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

// Verifica se o usuário tem preferência por modo escuro e aplica-o se tiver
if (supportsDarkMode) {
    enableDarkMode();
}

document.querySelector('#dark-mode-toggle').addEventListener('click', toggleDarkMode);

