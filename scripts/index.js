// mobile nav bar

const navOpen = document.querySelector('#barsOpen');
const navClose = document.querySelector('#barsClose');
const navContainer = document.getElementsByClassName('headerNav')[0];


navOpen.addEventListener('click', () => {
    navContainer.classList.add('headerNav-active')
})
navClose.addEventListener('click', () => {
    navContainer.classList.remove('headerNav-active')
})

