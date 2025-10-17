const hamburgerMenu = document.getElementById('haMenu');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});