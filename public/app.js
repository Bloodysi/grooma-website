const menu = document.querySelector('#navbar-toggle');
const menuLinks = document.querySelector('.navbar__links')
const toggle = document.querySelector('#navbar-toggle')

menu.addEventListener('click', ()=> {
  menuLinks.classList.toggle('open-menu')
  toggle.classList.toggle('is-active')
})