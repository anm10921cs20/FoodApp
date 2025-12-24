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











// location access

function Access() {
    const blurContainer = document.getElementsByClassName('checkout-location-access-blur-container')[0];
    const accessContainer = document.getElementsByClassName('checkout-location-access-container')[0]


    blurContainer.classList.add('checkout-location-access-blur-container-active');
    accessContainer.classList.add('checkout-location-access-container-active');

}

// location access close

const locationAccessClose = document.getElementById('location-access-close');

locationAccessClose.addEventListener('click', () => {
    const blurContainer = document.getElementsByClassName('checkout-location-access-blur-container')[0];
    const accessContainer = document.getElementsByClassName('checkout-location-access-container')[0]

    blurContainer.classList.remove('checkout-location-access-blur-container-active');
    accessContainer.classList.remove('checkout-location-access-container-active');
})

const blurContainer = document.getElementsByClassName('checkout-location-access-blur-container')[0];
blurContainer.addEventListener('click', () => {
    const blurContainer = document.getElementsByClassName('checkout-location-access-blur-container')[0];
    const accessContainer = document.getElementsByClassName('checkout-location-access-container')[0]

    blurContainer.classList.remove('checkout-location-access-blur-container-active');
    accessContainer.classList.remove('checkout-location-access-container-active');
})


//   location edit container

const locationEdit = document.getElementById('checkout-address-edit-close');

locationEdit.addEventListener('click', () => {
    const checkoutAddressEditContainer = document.getElementsByClassName('checkout-address-edit-container')[0]
    checkoutAddressEditContainer.style.display = "none";
})


// location edit container open

const editBtn = document.getElementsByClassName('Edit')[0];

editBtn.addEventListener('click', () => {
    const editContainerOpen = document.getElementsByClassName('checkout-address-edit-container')[0];
    editContainerOpen.style.display = "block";
})



// address details upload


function AddressData() {
    const street = document.getElementById('street').value;
    const district = document.getElementById('district').value;
    const state = document.getElementById('state').value;
    const pincode = document.getElementById('pincode').value;
    const phonenumber = document.getElementById('phonenumber').value;
    localStorage.setItem('phonenumbermob', phonenumber)
    const input = document.getElementsByTagName('input');

    if (!pincode) {
        for (var i = 0; i < input.length; i++) {
            if (street == "") {
                input[i].style.border = "1px solid #ff4343";

            }
            else if (district == "") {
                input[i].style.border = "1px solid #ff4343";

            }
            else if (state == "") {
                input[i].style.border = "1px solid #ff4343";

            }
            else if (pincode == "") {
                input[i].style.border = "1px solid #ff4343";
                

            }

            setTimeout(() => {
                for (var i = 0; i < input.length; i++) {
                    input[i].style.border = "1px solid rgba(0,0,0,0.2)";
                }

            }, 3000)


        }

    }
    else {

        const alertText = document.getElementsByClassName('notification__text')[0];
        const alertbox = document.getElementsByClassName('alert-container-true')[0];
        alertbox.style.display = "block";
        alertText.innerText = "Edit Successfully";
        setTimeout(function () {
            alertbox.style.display = "none";
            window.location.reload();
        }, 4000)
        const uiddata = localStorage.getItem('uid');
        firestore.collection('UserAddressMobile/').doc(uiddata).set(
            {
                street: street,
                district: district,
                state: state,
                pincode: pincode
            }
        )
    }

}

const uiddata = localStorage.getItem('uid');
firestore.collection('UserAddressMobile/').doc(uiddata).get().then((responce) => {
    const dataresponce = responce.data();


    if (dataresponce) {


        const addressdet = dataresponce.street + " " + dataresponce.district + " " + dataresponce.state + " " + dataresponce.pincode ?? 0;
        const addressDet = document.getElementsByClassName('AddressData')[0];

        addressDet.innerText = addressdet ?? "Please Edit Address";

        const phone = localStorage.getItem('phonenumbermob');

        const phoneElement = document.getElementsByClassName('MobileData')[0];
        phoneElement.innerText = phone ?? "Please Edit Phonenumber"





    }
})


function ApiCall() {


    navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const addressData = await getAddressFromLatLng(lat, lon);
        console.log(addressData);


        const street = document.getElementById('street');
        const district = document.getElementById('district');
        const state = document.getElementById('state');
        const pincode = document.getElementById('pincode');
        const street1 = document.getElementById('streetid');
        const district1 = document.getElementById('districtid');
        const state1 = document.getElementById('stateid');
        const pincode1 = document.getElementById('pincodeid');
        street.value = addressData.fullAddress;
        district.value = addressData.district;
        state.value = addressData.state;
        pincode.value = addressData.pincode;





        street1.value = addressData.fullAddress;
        district1.value = addressData.district;
        state1.value = addressData.state;
        pincode1.value = addressData.pincode;

        // state.value = data.results[0].state;
        // pincode.value = data.results[0].postcode;
        // street1.value = data.results[0].street;
        // district1.value = data.results[0].city;
        // state1.value = data.results[0].state;
        // pincode1.value = data.results[0].postcode;




        async function getAddressFromLatLng(lat, lon) {
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`;

            const response = await fetch(url, {
                headers: {
                    "User-Agent": "your-app-name" // required
                }
            });

            const data = await response.json();

            if (data) {
                const alertText = document.getElementsByClassName('notification__text')[0];
                const alertbox = document.getElementsByClassName('alert-container-true')[0];
                alertbox.style.display = "block";
                alertText.innerText = "Loacation Get Successfully";
                setTimeout(function () {
                    alertbox.style.display = "none";
                    const blurContainer = document.getElementsByClassName('checkout-location-access-blur-container')[0];
                    const accessContainer = document.getElementsByClassName('checkout-location-access-container')[0]

                    blurContainer.classList.remove('checkout-location-access-blur-container-active');
                    accessContainer.classList.remove('checkout-location-access-container-active');

                }, 2000)
            }
            const address = data.address;
            console.log(data);


            return {
                fullAddress: data.name,
                district: address.county || address.state_district,
                state: address.state,
                pincode: address.postcode,
                country: address.country
            };
        }





    })
}