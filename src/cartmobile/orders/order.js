
const loader = document.querySelector('.dots-container');

window.addEventListener('load', () => {
    loader.classList.add('loader-hidden')
})


const homePage = document.getElementsByClassName('cart-btn')[0];

homePage.addEventListener('click', () => {
    window.location.replace('../../../index.html');
})

const arrowBack = document.getElementById('arrow-back');
arrowBack.addEventListener('click', () =>{
    window.history.back()
})
