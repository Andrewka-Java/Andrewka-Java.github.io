const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const menuClose = document.querySelector('.menu__close')
const overlay = document.querySelector('.menu__overlay')

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
    overlay.classList.add('active')
})

menuClose.addEventListener('click', () => {
    menu.classList.remove('active')
    overlay.classList.remove('active')
})