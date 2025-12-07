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

const db = firebase.database();

const name = localStorage.getItem('name');
const uid = localStorage.getItem('uid');

db.ref("MahanFoodCart/" + name + uid).get('value').then((snapshot) => {
    const responce = snapshot.val()

    // array destructuring

    const products = responce.foodCart;
    const productsCount = products.length;
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = "(" + productsCount + ")";
    
    
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
                                <p class="productprice">${product.price}</p>
                            </div>
                        </div>
                        <div class="product-delete">
                            <i class="fa-solid fa-trash-can"></i>
                        </div>`;
            productsList.appendChild(productContainer);
    })


})