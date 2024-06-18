
const supportsDarkMode = window.matches;
    
function enableDarkMode() {
    document.body.classList.add('dark');
}

// Função para desativar o modo escuro
function disableDarkMode() {
    document.body.classList.remove('dark');
}

function toggleDarkMode() {
    if (document.body.classList.contains('dark')) {
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

