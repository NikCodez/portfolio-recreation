//for smooth scolling to expertise section when scroll indicator is clicked

document.querySelector('.scroll-indicator').addEventListener('click', (e) => {
  e.preventDefault();

  const target = document.querySelector('#expertise');
  const targetPosition = target.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 800;   // ← controls speed in ms, increase for slower
  let startTime = null;

  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (elapsed < duration) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
});

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