

const useracc = document.getElementsByClassName('side-menu-content')[0];
const userord = document.getElementsByClassName('side-menu-content')[1];
const partner = document.getElementsByClassName('side-menu-content')[2];
const cusine = document.getElementsByClassName('side-menu-content')[3];
const grocery = document.getElementsByClassName('side-menu-content')[4];
const restra = document.getElementsByClassName('side-menu-content')[5];


// containers

const accountContainer = document.getElementsByClassName('account-container')[0];


useracc.addEventListener('click', () => {
    useracc.classList.add('side-menu-content-active')
    userord.classList.remove('side-menu-content-active')
    partner.classList.remove('side-menu-content-active')
    cusine.classList.remove('side-menu-content-active')
    grocery.classList.remove('side-menu-content-active')
    restra.classList.remove('side-menu-content-active')

    // container

    accountContainer.style.display = "block"

})
userord.addEventListener('click', () => {
    useracc.classList.remove('side-menu-content-active')
    userord.classList.add('side-menu-content-active')
    partner.classList.remove('side-menu-content-active')
    cusine.classList.remove('side-menu-content-active')
    grocery.classList.remove('side-menu-content-active')
    restra.classList.remove('side-menu-content-active')

    // container

    accountContainer.style.display = "none";
})
partner.addEventListener('click', () => {
    useracc.classList.remove('side-menu-content-active')
    userord.classList.remove('side-menu-content-active')
    partner.classList.add('side-menu-content-active')
    cusine.classList.remove('side-menu-content-active')
    grocery.classList.remove('side-menu-content-active')
    restra.classList.remove('side-menu-content-active')

    // container

    accountContainer.style.display = "none";
})
cusine.addEventListener('click', () => {
    useracc.classList.remove('side-menu-content-active')
    userord.classList.remove('side-menu-content-active')
    partner.classList.remove('side-menu-content-active')
    cusine.classList.add('side-menu-content-active')
    grocery.classList.remove('side-menu-content-active')
    restra.classList.remove('side-menu-content-active')

    // container

    accountContainer.style.display = "none";
})
grocery.addEventListener('click', () => {
    useracc.classList.remove('side-menu-content-active')
    userord.classList.remove('side-menu-content-active')
    partner.classList.remove('side-menu-content-active')
    cusine.classList.remove('side-menu-content-active')
    grocery.classList.add('side-menu-content-active')
    restra.classList.remove('side-menu-content-active')

    // container

    accountContainer.style.display = "none";
})
restra.addEventListener('click', () => {
    useracc.classList.remove('side-menu-content-active')
    userord.classList.remove('side-menu-content-active')
    partner.classList.remove('side-menu-content-active')
    cusine.classList.remove('side-menu-content-active')
    grocery.classList.remove('side-menu-content-active')
    restra.classList.add('side-menu-content-active')

    // container

    accountContainer.style.display = "none";
})



