const pageBody = document.querySelector('.page-body');
const buttonToggle = document.querySelector('.navigation__toggle');
const buttonMenu = document.querySelector('.navigation__button');
const mobileMenu = document.querySelector('.navigation__desktop');
const anchors = document.querySelectorAll('.navigation__list a[href*="#"]')
const page = document.querySelector('.navigation');

page.classList.remove('navigation-nojs');

buttonToggle.onclick = () => {
  mobileMenu.classList.toggle('navigation__desktop--hideen');
  mobileMenu.classList.toggle('navigation__desktop--visible');
  buttonMenu.classList.toggle('navigation__button--active');
  buttonMenu.classList.toggle('navigation__button--close');
  pageBody.classList.toggle('page-body--hiden');
}


anchors.forEach((mobileClose) => {
  mobileClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    mobileMenu.classList.remove('navigation__desktop--visible');
    mobileMenu.classList.add('navigation__desktop--hideen');
    buttonMenu.classList.remove('navigation__button--active');
    pageBody.classList.remove('page-body--hiden');
  })
})

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
