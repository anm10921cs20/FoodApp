// loader animation

const loader = document.querySelector('.dots-container');

window.addEventListener('load', () => {
    loader.classList.add('loader-hidden')
})


const homePage = document.getElementsByClassName('cart-btn')[0];

homePage.addEventListener('click', () => {
    window.location.replace('../../index.html');
})


const headerBack = document.getElementsByClassName('fa-arrow-left')[0];

headerBack.addEventListener('click', () => {
    window.location.replace('./cartmobile.html');
})