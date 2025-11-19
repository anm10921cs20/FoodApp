
const data = localStorage.getItem('itemname') || [];
const firebaseConfig = {
    apiKey: "AIzaSyAm--sfbEonD49xNHSWPWoeMbkwFXXqF4U",
    authDomain: "mahan-food-app.firebaseapp.com",
    projectId: "mahan-food-app",
    storageBucket: "mahan-food-app.firebasestorage.app",
    messagingSenderId: "33097873868",
    appId: "1:33097873868:web:a34866029150b96d274569",
    measurementId: "G-V1EX1JKP7S"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database()

document.title = `Food Shop - ${data}`;

const title = document.getElementsByClassName('title')[0];
title.innerText = data;

db.ref(`${data}Item`).get('value').then((snapshot) => {
    var datas = snapshot.val()
    datas.forEach((item) => {
        const div = document.createElement('div');
        div.className = "items";
        div.innerHTML += `<div class="items-cont"><div class="details">
        <p class="item-tit">${item.name}</p>
        <p class="item-price">Rs.${item.price}</p>
        <button class="more-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#food${item.id}">More Details <i class="fa-solid fa-chevron-right"></i></button>
        </div>
        
        
        <div class="offcanvas offcanvas-bottom" data-bs-backdrop="true" tabindex="-1" id="food${item.id}">
       
       
         <div class="off-container">
         <img src="${item.img}"  height="300px" width="100%" alt="${item.name}">
        </div>
        <div class="off-det">
            <div class="off-det-cont">
            <p class="item-tit">${item.name}</p>
             <p class="item-price">Rs.${item.price}</p>
             </div>
            
                <div class="add-btns">
                 <button type="button" class="add-btn-text">ADD</button>
                </div>
              
        </div>
         <p class="item-details">${item.details}</p>
         <button class="btn-closed fas fa-close" type="button" data-bs-dismiss="offcanvas" ></button>
        
        
        </div>
        
        <div class="add-btn">
        <button type="button" class="add-btn-text">ADD</button>
        </div>
        
        <div class="img-det">
        <img src="${item.img}"  alt="${item.name}">
        </div></div>`
        document.getElementsByClassName('mahan')[0].appendChild(div);
        const offCanvsContainer = document.getElementById(`food${item.id}`);
        offCanvsContainer.style.height = "600px";
        offCanvsContainer.style.borderTopLeftRadius="20px";
        offCanvsContainer.style.borderTopRightRadius="20px";

    })
})







// loader animation

const loader = document.querySelector('.dots-container');

window.addEventListener('load', () => {
    loader.classList.add('loader-hidden')
})


// page backward

const leftArrow = document.getElementsByClassName('arrow')[0];

leftArrow.addEventListener('click', () => {
    window.history.back()
})


// btn click

const dishes = document.getElementsByClassName('dishes')[0];
const dishes1 = document.getElementsByClassName('dishes')[1];
const disheContainer = document.getElementsByClassName('mahan')[0];
const cuisenceContainer = document.getElementsByClassName('cuisines')[0];



dishes.addEventListener('click', () => {
    dishes.classList.add('dishes-active')
    dishes1.classList.remove('dishes-active')
    disheContainer.style.display = "block";
    cuisenceContainer.style.display = "none";

})
dishes1.addEventListener('click', () => {
    dishes1.classList.add('dishes-active')
    dishes.classList.remove('dishes-active')
    disheContainer.style.display = "none";
    cuisenceContainer.style.display = "block";

})



// cuisines


db.ref(`${data}`).get('value').then((snapshot) => {
    var datas = snapshot.val()
    datas.forEach((item) => {
        const div = document.createElement('div');
        div.className = "item";
        div.innerHTML += `<div class="items-conts">
        <div class="img-dets">
        <img src="${item.img}" height="100px" width="100px"  alt="${item.name}">
        </div><div class="detailss">
        <p class="item-tits">${item.name}</p>
        <button class="more-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#food${item.id}">Click Details <i class="fa-solid fa-chevron-right"></i></button>
        </div></div>
        
        
        
        
      
        
        `
        document.getElementsByClassName('cuisines')[0].appendChild(div);
        const offCanvsContainer = document.getElementById(`food${item.id}`);
        offCanvsContainer.style.height = "600px";
        offCanvsContainer.style.borderTopLeftRadius="20px";
        offCanvsContainer.style.borderTopRightRadius="20px";

    })
})