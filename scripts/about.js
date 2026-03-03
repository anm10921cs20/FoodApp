const barsElement = document.getElementsByClassName('fa-bars')[0];
const mainHeaderElement = document.getElementsByClassName('main-header')[0];

barsElement.addEventListener('click', () => {
    mainHeaderElement.classList.toggle('toogle');
});





const yearConceptElement = document.getElementById('yearconcept');
const currentYear = new Date().getFullYear();
yearConceptElement.textContent = currentYear;
