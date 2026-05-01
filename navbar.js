function initNavbar() {
  const burger = document.querySelector('.ct-hamburger');
  const nav = document.querySelector('.ct-navbar');

  if (!burger || !nav) return;

  burger.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

function initNavbar() {
  const burger = document.querySelector('.ct-hamburger');
  const nav = document.querySelector('.ct-navbar');

  burger.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  /* Mobile Dropdown */
  const dropdown = document.querySelector('.ct-dropdown');
  const btn = dropdown.querySelector('.ct-drop-btn');

  btn.addEventListener('click', () => {
    dropdown.classList.toggle('open');
  });
}
