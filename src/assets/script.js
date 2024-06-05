let show = true;
const menuContent = document.querySelector('sessao-nav');
const menuTogle = menuContent.querySelector('.menu-togle');

menuTogle.addEventListener('click', () => {
    menuContent.classList.toggle('on', show)
    show = !show
})