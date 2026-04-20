// Navbar show/hide on scroll
const navbar   = document.querySelector('.navbar');
const heroTitle = document.querySelector('.big-text');

window.addEventListener('scroll', () => {
  const titleBottom = heroTitle.getBoundingClientRect().bottom;

  if (titleBottom < 0) {
    // scrolled past the name — show with blur
    navbar.classList.add('scrolled');
    navbar.classList.remove('hidden');
  } else if (window.scrollY > 50) {
    // scrolling but name still visible — hide
    navbar.classList.remove('scrolled');
    navbar.classList.add('hidden');
  } else {
    // at the very top
    navbar.classList.remove('scrolled');
    navbar.classList.remove('hidden');
  }
});


//Hamburger menu
const hamburger  = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});


// experience dropdown
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const isOpen = tab.classList.contains('open');
    tabs.forEach(t => t.classList.remove('open'));
    if (!isOpen) tab.classList.add('open');
  });
});
