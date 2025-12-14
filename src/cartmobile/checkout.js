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



const firebaseConfig = {
    apiKey: "AIzaSyAm--sfbEonD49xNHSWPWoeMbkwFXXqF4U",
    authDomain: "mahan-food-app.firebaseapp.com",
    databaseURL: "https://mahan-food-app-default-rtdb.firebaseio.com",
    projectId: "mahan-food-app",
    storageBucket: "mahan-food-app.firebasestorage.app",
    messagingSenderId: "33097873868",
    appId: "1:33097873868:web:a34866029150b96d274569",
    measurementId: "G-V1EX1JKP7S"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const db = firebase.database();

const uid = localStorage.getItem('uid')
const name = localStorage.getItem('name');

// cart text



db.ref("MahanFoodCart/" + name + uid).get('value').then((snapshot) => {
    const responce = snapshot.val()

    // array destructuring



    if (responce) {
        const products = responce.foodCart;
        const productsCount = products.length;




        products.forEach((product) => {
            const productsList = document.getElementsByClassName('products-list')[0];
            const productContainer = document.createElement('div');
            productContainer.className = "product-container";
            productContainer.innerHTML = ` <div class="product-content">
                            <div class="product-img">
                                <img src="${product.img}"
                                    alt="">
                            </div>
                            <div class="product-details">
                                <h1 class="productname">${product.name}</h1>
                                  <div class="product-price">
                                   <p class="productprice">${product.price}</p>
                                    <p class="productprice">${product.price}</p>
                                  </div>
                                  <div class="product-quantity">
                                  <button class="decrease-btn">-</button>
                                  <input type="number" class="quantity-input" value="1" readonly>
                                  <button class="increase-btn">+</button>
                                  </div>
                            </div>
                        </div>
                            <i class="fa-solid fa-trash-can"></i>`;
            productsList.appendChild(productContainer);

       
          
           
        })

      

         











        const deleteConcept = document.querySelectorAll('.fa-trash-can');

        deleteConcept.forEach((del, index) => {
            del.addEventListener('click', function () {
                this.parentElement.remove()
                const alertText = document.getElementsByClassName('notification__text')[0];
                const alertbox = document.getElementsByClassName('alert-container-true')[0];
                alertbox.style.display = "block";
                alertText.innerText = "Item Removed Successfully";
                setTimeout(function () {
                    alertbox.style.display = "none";
                }, 4000)
                db.ref("MahanFoodCart/" + name + uid + "/foodCart/" + index).remove();
                total();
                if (!index) {
                    window.location.reload();
                }

                const localFood = JSON.parse(localStorage.getItem('cartfood')) || [];

                if (localFood && localFood.length > index) {
                    localFood.splice(index, 1)
                }
                localStorage.setItem('cartfood', JSON.stringify(localFood))

                if (localFood.length === 1) {
                    localStorage.removeItem('cartfood')
                }
            })

        })
    }


})
