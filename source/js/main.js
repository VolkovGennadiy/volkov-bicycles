const buttonToggle = document.querySelector('.navigation__toggle');
const buttonMenu = document.querySelector('.navigation__button');
const mobileMenu = document.querySelector('.navigation__desktop');
const anchors = document.querySelectorAll('.navigation__list a[href*="#"]')
const page = document.querySelector('.navigation');

page.classList.remove('navigation-nojs');

buttonMenu.onclick = () => {
  mobileMenu.classList.toggle('navigation__desktop--hideen');
  mobileMenu.classList.toggle('navigation__desktop--visible');
  buttonMenu.classList.toggle('navigation__button--active');
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
