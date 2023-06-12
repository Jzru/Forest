const nav = document.querySelector('.nav-mobile__items')
const burgerBtn = document.querySelector('.burger-btn')
const navBtn = document.querySelectorAll('.nav-mobile__item')
const footerYear = document.querySelector('.footer__year')

const activeNav = () => {
    nav.classList.toggle('active')

    navBtn.forEach(item => {
        item.addEventListener('click', () => nav.classList.remove('active'))
    })
}


const currentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

currentYear();

burgerBtn.addEventListener('click', activeNav)