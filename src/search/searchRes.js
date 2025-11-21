
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
         <img src="${item.img}"  height="300px" width="100%"  alt="${item.name}">
        </div>
        <div class="off-det">
            <div class="off-det-cont">
            <p class="item-tit">${item.name}</p>
             <p class="item-price">Rs.${item.price}</p>
             </div>
            
                <div class="add-btns">
                 <button type="button" class="add-btn-text" data-bs-toggle="offcanvas" data-bs-target="#item${item.id}">ADD</button>
                </div>
              
        </div>
         <p class="item-details">${item.details}</p>
         <button class="btn-closed fas fa-close" type="button" data-bs-dismiss="offcanvas" ></button>
        
        
        </div>
        
      
        <button type="button" class="add-btn-text" data-bs-toggle="offcanvas" data-bs-target="#item${item.id}">ADD</button>
       
        <div class="img-det">
        <img src="${item.img}"  alt="${item.name} type="button" data-bs-toggle="offcanvas" data-bs-target="#food${item.id}">












        </div></div>
        
           <div class="offcanvas offcanvas-bottom" data-bs-backdrop="true" tabindex="-1" id="item${item.id}">
           <div class="offcanvas-header">
             <button class="btn-closed text-dark fas fa-close" type="button" data-bs-dismiss="offcanvas" ></button>
           </div>















           </div>
        `
        document.getElementsByClassName('mahan')[0].appendChild(div);
        const offCanvsContainer = document.getElementById(`food${item.id}`);
        offCanvsContainer.style.height = "600px";
        offCanvsContainer.style.borderTopLeftRadius = "20px";
        offCanvsContainer.style.borderTopRightRadius = "20px";

        const addBtn = document.querySelectorAll('.add-btn-text');


        addBtn.forEach((btn) => {
            btn.addEventListener('click', additems)
        })

      







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
        <button class="more-btn">Click Details <i class="fa-solid fa-chevron-right"></i></button>
        </div></div>
        
        
        
        
      
        
        `
        document.getElementsByClassName('cuisines')[0].appendChild(div);
        const offCanvsContainer = document.getElementById(`food${item.id}`);
        offCanvsContainer.style.height = "600px";
        offCanvsContainer.style.borderTopLeftRadius = "20px";
        offCanvsContainer.style.borderTopRightRadius = "20px";

    })
})




  function additems(event) {
            var btn = event.target;
            var file = btn.parentElement.children[0];
            var file1 = btn.parentElement.children[3];

            console.log(file);
            console.log(file1);
            
            const products = {
                names:file.getElementsByClassName('item-tit')[0].innerText,
                price:file.getElementsByClassName('item-price')[0].innerText,
                img:file1.getElementsByTagName('img')[0].src

            }

            

        }