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
                                <img src="${product.img}" class="prod-img"
                                    alt="">
                            </div>
                            <div class="product-details">
                                <h1 class="productname">${product.name}</h1>
                                  <div class="product-price">
                                   <p class="productprice product-plus-price">${product.price}</p>
                                    <p class="productprice product-plus-store ">${product.price}</p>
                                  </div>
                                  <div class="product-quantity">
                                  <button class="decrease-btn">-</button>
                                  <input type="number" class="quantity-input" value="1">
                                  <button class="increase-btn">+</button>
                                  </div>
                            </div>
                        </div>
                            <i class="fa-solid fa-trash-can"></i>`;
            productsList.appendChild(productContainer);
            const increaseBtn = productContainer.getElementsByClassName('increase-btn')[0];
            const decreaseBtn = productContainer.getElementsByClassName('decrease-btn')[0];
            const quantityInput = productContainer.getElementsByClassName('quantity-input')[0];
            increaseBtn.addEventListener('click', () => {
                let currentValue = parseInt(quantityInput.value);
                quantityInput.value = currentValue + 1;
                totalCheckout();
            })
            decreaseBtn.addEventListener('click', () => {
                let currentValue = parseInt(quantityInput.value);
                if (currentValue > 1) {
                    quantityInput.value = currentValue - 1;
                    totalCheckout();
                }
            })

            function totalCheckout() {
                const productPrices = document.querySelectorAll('.product-plus-price');
                productPrices.forEach((priceElement, index) => {
                    const quantityInputAll = document.getElementsByClassName('quantity-input');
                    const quantityvalue = parseInt(quantityInputAll[index].value);

                    const quantityPrice = priceElement.innerText.slice(3);
                    const productsPriceStore = document.getElementsByClassName('product-plus-store');
                    const priceElementStore = productsPriceStore[index];

                    priceElementStore.innerText = "Rs " + quantityPrice * quantityvalue;

                    const prodname = document.getElementsByClassName('productname')[index].innerText;
                    const prodimg = document.getElementsByClassName('prod-img')[index].src;

                    db.ref("MahanFoodOrder/" + name + uid + "/" + index).update({
                        name: prodname,
                        price: "Rs " + quantityPrice * quantityvalue,
                        img: prodimg,
                        quantity: quantityvalue,
                        timestamp: Date.now(),
                        localtime: new Date().toLocaleString()
                    })



                })



            }





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
                db.ref("MahanFoodOrder/" + name1 + uid1 + "/" + index).remove();
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


    const productPrices = document.querySelectorAll('.product-plus-price');
    const uid1 = localStorage.getItem('uid')
    const name1 = localStorage.getItem('name');
    productPrices.forEach((priceElement, index) => {

        db.ref("MahanFoodOrder/" + name1 + uid1 + "/" + index).get('value').then((snapshot) => {
            const responce = snapshot.val()

            const productPrices = document.getElementsByClassName('product-plus-store');
             

            const quantityInputAll = document.getElementsByClassName('quantity-input');
            const quantityvalue = responce.quantity;
            const quantityPrice = responce.price;

            productPrices[index].innerText = quantityPrice;
            quantityInputAll[index].value = quantityvalue;


        })













    })


})


