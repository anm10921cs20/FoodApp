const db = firebase.database();

const name = localStorage.getItem('name');
const uid = localStorage.getItem('uid');

db.ref("MahanFoodCart/" + name + uid).get('value').then((snapshot) => {
    const responce = snapshot.val()

    // array destructuring



    if (responce) {
        const products = responce.foodCart;
        const productsCount = products.length;
        const cartCount = document.getElementById('cart-count');
        cartCount.innerText = "(" + productsCount + ")" ?? 0;


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
                            <i class="fa-solid fa-trash-can"></i>`;
            productsList.appendChild(productContainer);
        })

        function total() {
            const totalAmt = document.getElementById('totalAmt');
            var total = 0

            const productContainer = document.querySelectorAll('.product-container');
            for (var i = 0; i < productContainer.length; i++) {
                const productsList = productContainer[i];
                const priceElement = productsList.getElementsByClassName('productprice')[0].innerText;
                console.log(priceElement);
                var price = parseFloat(priceElement.slice(3));
                console.log(price);
                total = total + price


            }
              totalAmt.innerText = total;
        }
        total()


      











        const deleteConcept = document.querySelectorAll('.fa-trash-can');

        deleteConcept.forEach((del, index) => {
            del.addEventListener('click', function () {
                this.parentElement.remove()
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




