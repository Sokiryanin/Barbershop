(() => {
  const refs = {
    openMenulBtn: document.querySelector('.menu-open-btn'),
    closeMenulBtn: document.querySelector('.menu-close-btn'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
  };

  refs.openMenulBtn.addEventListener('click', toggleMenu);
  refs.closeMenulBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
