const buttonMenu = document.querySelector('.navigation__button');
const buttonClose = document.querySelector('.navigation__mobile-close');
const mobileMenu = document.querySelector('.navigation__mobile');
const anchors = document.querySelectorAll('.navigation__list a[href*="#"]')
const page = document.querySelector('.navigation');

page.classList.remove('navigation__mobile--nojs');

buttonMenu.onclick = () => {
  mobileMenu.classList.toggle('navigation__mobile--hidden');
  mobileMenu.classList.toggle('navigation__mobile--visible');
}

buttonClose.onclick = () => {
  mobileMenu.classList.toggle('navigation__mobile--visible');
  mobileMenu.classList.toggle('navigation__mobile--hidden');
}

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
  e.preventDefault()

  const blockID = anchor.getAttribute('href').substr(1)

  document.getElementById(blockID).scrollIntoView({
  behavior: 'smooth',
  block: 'start'
  })
  })
}
