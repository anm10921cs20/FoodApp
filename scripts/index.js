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

const year = new Date();
var yeas = year.getFullYear()

const yearData = document.getElementById('year');
yearData.innerText=yeas;


// data scroll bar

// first container

const instantShop = document.getElementsByClassName('instantshop-list')[0];
const leftSide = document.getElementsByClassName('arrow-left')[0]
const rightSide = document.getElementsByClassName('arrow-right')[0]



leftSide.addEventListener('click', () => {
    instantShop.scrollLeft -= 300;
})

rightSide.addEventListener('click', () => {
    instantShop.scrollLeft += 300;
})


// second container

const DineoutShop = document.getElementsByClassName('dineout-content')[0];
const leftSide1 = document.getElementsByClassName('arrow-left')[1]
const rightSide2 = document.getElementsByClassName('arrow-right')[1]


leftSide1.addEventListener('click', () => {
    DineoutShop.scrollLeft -= 300;
})

rightSide2.addEventListener('click', () => {
    DineoutShop.scrollLeft += 300;
})

// main cart redirect

const mainPage = document.getElementsByClassName('cart-btn')[0];
const cartPage = document.getElementsByClassName('cart-btn')[1];

mainPage.addEventListener('click', () => {
    window.location.replace('../index.html');
})

cartPage.addEventListener('click', () => {
    window.location.replace('../src/cartmobile/cartmobile.html');
})


// loader animation

const loader = document.querySelector('.dots-container');

window.addEventListener('load', () => {
    loader.classList.add('loader-hidden')
})





 


