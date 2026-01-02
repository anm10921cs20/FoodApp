
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
        <p class="item-price">Rs.<span class="item-price">${item.price}</span></p>
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
    
<div class="top-container">
    <div class="prod-tit"><span class="prod-name">${item.name}</span> . <span class="prod-pric">Rs.${item.price}</span></div>
    <p class="cyt">Customize as Per Your Taste</p>
</div>
        <button class="btn-closed text-dark fas fa-close" type="button" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="canvas-bodys">
        <div class="items-conts">
            <div class="details">
                <p class="item-tit">${item.name}</p>
                <p class="item-price">Rs.${item.price}</p>
            </div>
            <div class="img-det">
                <img src="${item.img}" alt="${item.name}" >
            </div>
        </div>
        <div class="taste">
    <h1 class="sidetit">Sides (<Span class="countsitem">0</Span>/3)</h1><br>
    <div class="sides">
        
    </div>
</div>
        
        <div class="amt-dt">
            <div class="amt">Rs.<span id="amt">${item.price}</span></div>
            <br>
        </div>
        <button class="btn btn-success click food${item.id}">Add To Cart</button>
    </div>
</div>
               

           
        `

        document.getElementsByClassName('mahan')[0].appendChild(div);
        const offCanvsContainer = document.getElementById(`food${item.id}`);
        const offCanvsContainer1 = document.getElementById(`item${item.id}`);

        const buttons = document.querySelectorAll(`.food${item.id}`);


        buttons.forEach((button) => {
            button.addEventListener('click', () => {

                const offCanvashide = document.querySelectorAll(`#item${item.id}`);
                offCanvashide.forEach((offcanvas) => {
                    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
                    if (bsOffcanvas) bsOffcanvas.hide();
                })

            })
        })







        offCanvsContainer.style.height = "600px";
        offCanvsContainer.style.borderTopLeftRadius = "20px";
        offCanvsContainer.style.borderTopRightRadius = "20px";
        offCanvsContainer1.style.height = "50vh";
        offCanvsContainer1.style.borderTopLeftRadius = "20px";
        offCanvsContainer1.style.borderTopRightRadius = "20px";
        offCanvsContainer1.style.backgroundColor = "#f0f0f5";

        const screenwidth = innerWidth;
        console.log(screenwidth);


        if (screenwidth >= 1024) {
            offCanvsContainer.style.width = "500px"
            offCanvsContainer.style.margin = "100px 100px"
            offCanvsContainer1.style.width = "500px"
            offCanvsContainer1.style.margin = "100px 100px"


        }

        const btnClick = document.querySelectorAll('.click')

        btnClick.forEach((btn) => {
            btn.addEventListener('click', addtocart)
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
        div.innerHTML += `<div class="items-cont">
        <div class="img-dets">
        <img src="${item.img}" height="100px" width="100px"  alt="${item.name}">
        </div><div class="detailss">
        <p class="item-tits">${item.name}</p>
        <button class="more-btn send-btn">Click Details <i class="fa-solid fa-chevron-right"></i></button>
        </div></div>
        
        
        
        
      
        
        `
        document.getElementsByClassName('cuisines')[0].appendChild(div);
        const data = document.querySelectorAll('.send-btn');


        data.forEach((menu) => {

            menu.addEventListener('click', clicked);


        })

    })
})


// main dish

function addtocart(event) {


    const uid = localStorage.getItem('uid');



    if (uid) {
        var btn = event.target;
        var value = btn.parentElement;
        var productData = value.children[0];

        var mainData = productData.children[0];
        var mainData1 = productData.children[1];

        const name = mainData.getElementsByClassName('item-tit')[0].innerText;
        const price = mainData.getElementsByClassName('item-price')[0].innerText;
        const img = mainData1.getElementsByTagName('img')[0].src;

        const foodItems = {
            name, price, img
        }

        let foodArray = JSON.parse(localStorage.getItem('cartfood')) || [];

        const exist = foodArray.some(data => data.img === foodItems.img)

        if (!exist) {
            foodArray.push({ ...foodItems });
            localStorage.setItem('cartfood', JSON.stringify(foodArray))
            const name = localStorage.getItem('name');
            let type = "success"
            let icon = "fa-solid fa-circle-check";
            let title = "Success";
            let text = "Added Succeessfully"

            createToast(type, icon, title, text)

            db.ref("MahanFoodCart/" + name + uid).set(
                {
                    foodCart: foodArray
                }
            )
        }
        else {
            let type = "error"
            let icon = "fa-solid fa-circle-exclamation";
            let title = "Error";
            let text = "Already Added"

            createToast(type, icon, title, text)

        }


    } else {
        let type = "error"
        let icon = "fa-solid fa-circle-exclamation";
        let title = "Login First";
        let text = "Not Use Cart Order"

        createToast(type, icon, title, text)
        setTimeout(function () {

            window.location.href = "../../index.html";
            console.log('please login');
        }, 3000)

    }



}


// main cusines

function clicked(event) {
    var btn = event.target;
    var value = btn.parentElement
    var productvalue = value.children[0].innerText;
    localStorage.setItem('foodname', productvalue)


    window.location.href = '../foodresponce/foodresponce.html';
}




function createToast(type, icon, title, text) {
    const notification = document.getElementsByClassName('notificatio')[0];
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="Toast ${type}">
                <i class="${icon}"></i>
                <div class="content">
                    <div class="title">${title}</div>
                    <span>${text}</span>
                </div>
                <i class="fas fa-close" onclick="(this.parentElement).remove()"></i>
            </div>
    `;
    notification.appendChild(div)
    div.timeOut = setTimeout(() => div.remove(), 5000)

}























