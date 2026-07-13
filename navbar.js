function initNavbar() {
  const burger = document.querySelector('.ct-hamburger');
  const nav = document.querySelector('.ct-navbar');
  const dropdown = document.querySelector('.ct-dropdown');
  const dropdownButton = dropdown?.querySelector('.ct-drop-btn');

  if (!burger || !nav) return;

  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('show');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  dropdownButton?.addEventListener('click', () => {
    const isOpen = dropdown.classList.toggle('open');
    dropdownButton.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    nav.classList.remove('show');
    dropdown?.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    dropdownButton?.setAttribute('aria-expanded', 'false');
  });
}
