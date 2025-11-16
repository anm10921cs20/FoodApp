// redirect

const homePage = document.getElementsByClassName('cart-btn')[0];

homePage.addEventListener('click', () => {
    window.location.replace('../../index.html');
})


// loader animation

const loader = document.querySelector('.dots-container');

window.addEventListener('load', () => {
    loader.classList.add('loader-hidden')
})