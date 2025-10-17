const hamburgerMenu = document.getElementById('haMenu');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const images = [Image1, Image2, Image3];
  const captions = [caption1, caption2, caption3];
  let current = 0;
  const total = images.length;

  setInterval(() => {
    images[current].style.opacity = 0;
    captions[current].style.opacity = 0;
    current = (current + 1) % total;
    images[current].style.opacity = 1;
    captions[current].style.opacity = 1;
  }, 6000);