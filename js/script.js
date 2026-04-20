//for the navbar to appear again when the user scrolls past the name part
const navbar = document.querySelector('.navbar');
const heroTitle = document.querySelector('.big-text');

window.addEventListener('scroll', () => {
  const titleBottom = heroTitle.getBoundingClientRect().bottom;

  if (titleBottom < 0) {
    // scrolled past the name — show navbar with blur
    navbar.classList.add('scrolled');
  } else if (window.scrollY > 50) {
    // scrolling but name still visible — hide navbar
    navbar.classList.remove('scrolled');
    navbar.classList.add('hidden');
  } else {
    // at the top — show navbar normally
    navbar.classList.remove('scrolled');
    navbar.classList.remove('hidden');
  }
});