const supportsDarkMode = window.matches;

function enableDarkMode() {
    document.body.classList.add('dark-mode');
}

// Função para desativar o modo escuro
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
}

function toggleDarkMode() {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

// Verifica se o usuário tem preferência por modo escuro e aplica-o se tiver
if (supportsDarkMode) {
    enableDarkMode();
}

document.querySelector('#darkmode').addEventListener('click', toggleDarkMode);