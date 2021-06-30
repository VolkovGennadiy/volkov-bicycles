const buttonMenu = document.querySelector('.navigation__button');
const buttonClose = document.querySelector('.navigation__mobile-close');
const mobileMenu = document.querySelector('.navigation__mobile');

buttonMenu.onclick = () => {
  mobileMenu.classList.toggle('navigation__mobile--visible');
  mobileMenu.classList.toggle('navigation__mobile--hidden');
}

buttonClose.onclick = () => {
  mobileMenu.classList.toggle('navigation__mobile--visible');
  mobileMenu.classList.toggle('navigation__mobile--hidden');
}
