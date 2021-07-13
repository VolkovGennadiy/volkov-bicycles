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

window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.main-block_tell'), function(input) {
    let keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function(a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      let reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)
  });
});
