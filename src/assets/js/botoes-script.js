
const menuButtons = document.querySelectorAll('.btn-menu');
const menuContent = document.getElementById('menu-content');
let show = false;

menuButtons.forEach((button => {
    console.log('entrou na funcao');
    button.addEventListener('click', () => {
        menuContent.classList.toggle('on', show)

        show = !show
    });
}));
