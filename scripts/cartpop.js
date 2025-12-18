

const names = localStorage.getItem('name');
const uids = localStorage.getItem('uid');







db.ref("MahanFoodCart/" + names + uids).get('value').then( (snapshot) => {
    const responce =  snapshot.val()

    // array destructuring



    if (responce) {
        const products = responce.foodCart;
        const productsCount = products.length;
        const cartCount = document.getElementById('cart-count');
        const mainCartCount = document.getElementsByClassName('cart-count')[0];

        cartCount.innerText = productsCount;
        mainCartCount.innerText = productsCount;




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
                                <p class="productprices">${product.price}</p>
                            </div>
                        </div>
                            <i class="fa-solid fa-trash-can"></i>`;
            productsList.appendChild(productContainer);

            const deleteConcept = document.querySelectorAll('.fa-trash-can');

            deleteConcept.forEach((del, index) => {
                del.addEventListener('click', function () {
                    this.parentElement.remove()
                    db.ref("MahanFoodCart/" + names + uids + "/foodCart/" + index).remove();
                    db.ref("MahanFoodOrder/" + name + uid + "/" + index).remove();
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
            function total() {
                const totalAmt = document.getElementById('totalAmt');
                var total = 0

                const productContainer = document.querySelectorAll('.product-container');
                for (var i = 0; i < productContainer.length; i++) {
                    const productsList = productContainer[i];

                    const priceElement = productsList.getElementsByClassName('productprices')[0];
                 
                    const value = priceElement.textContent;
                    var price = parseFloat(value.slice(3));
                  

                    total = total + price


                }
                totalAmt.innerText = total;
            }
            total()
        })

    } else {
        const productsListEmpty = document.getElementsByClassName('products-list')[0];
        const productContainerEmpty = document.createElement('div');
        productContainerEmpty.className = "product-emptyContainer";
        productContainerEmpty.innerHTML = ` <div class="product-empty">
                            <p class="empty-text">Cart is Empty</p>
                            <a href="../../index.html"><button>Shop More <i class="fas fa-shopping-cart"></i></button></a>
                        </div>
                           `;
        productsListEmpty.appendChild(productContainerEmpty);
    }


})



if (uid) {
    db.ref("MahanFoodCart/" + name + uid).get('value').then((snapshot) => {
        const responce = snapshot.val()
        if (responce) {
            const checkoutBtn = document.getElementsByClassName('checkout')[0];
            checkoutBtn.addEventListener('click', () => {

                const alertText = document.getElementsByClassName('notification__text')[0];
                const alertbox = document.getElementsByClassName('alert-container-true')[0];
                alertbox.style.display = "block";
                alertText.innerText = "Redirect To Checkout";
                setTimeout(function () {
                    alertbox.style.display = "none";
                    window.location.replace('./src/cartmobile/checkout.html');
                }, 2000)

            })
        }else
        {
            console.log('not value');
            
        }


    })






}
else {

    const checkoutBtn = document.getElementsByClassName('checkout')[0];
    checkoutBtn.addEventListener('click', () => {
        const alertText = document.getElementsByClassName('notification__text')[0];
        const alertbox = document.getElementsByClassName('alert-container-true')[0];
        alertbox.style.display = "block";
        alertText.innerText = "Login to Checkout";
        setTimeout(function () {
            alertbox.style.display = "none";
            window.location.replace('index.html')
        }, 3000)
    })

}













 