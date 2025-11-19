// mobile nav bar

const navOpen = document.querySelector('#barsOpen');
const navClose = document.querySelector('#barsClose');
const navContainer = document.getElementsByClassName('headerNav')[0];


navOpen.addEventListener('click', () => {
    navContainer.classList.add('headerNav-active')
})
navClose.addEventListener('click', () => {
    navContainer.classList.remove('headerNav-active')
})

const year = new Date();
var yeas = year.getFullYear()

const yearData = document.getElementById('year');
yearData.innerText = yeas;


// data scroll bar

// first container

const instantShop = document.getElementsByClassName('instantshop-list')[0];
const leftSide = document.getElementsByClassName('arrow-left')[0]
const rightSide = document.getElementsByClassName('arrow-right')[0]



leftSide.addEventListener('click', () => {
    instantShop.scrollLeft -= 300;
})

rightSide.addEventListener('click', () => {
    instantShop.scrollLeft += 300;
})


// second container

const DineoutShop = document.getElementsByClassName('dineout-content')[0];
const leftSide1 = document.getElementsByClassName('arrow-left')[1]
const rightSide2 = document.getElementsByClassName('arrow-right')[1]


leftSide1.addEventListener('click', () => {
    DineoutShop.scrollLeft -= 300;
})

rightSide2.addEventListener('click', () => {
    DineoutShop.scrollLeft += 300;
})

// main cart redirect

const mainPage = document.getElementsByClassName('cart-btn')[0];
const cartPage = document.getElementsByClassName('cart-btn')[1];
const serachPage = document.getElementsByClassName('search')[0];

mainPage.addEventListener('click', () => {
    window.location.replace('../index.html');
})

cartPage.addEventListener('click', () => {
    window.location.replace('../src/cartmobile/cartmobile.html');
})

serachPage.addEventListener('click', () => {
    window.location.replace('../src/search/search.html');
})




// location

const pincodepara = document.getElementsByClassName('detpin')[0];





async function apicall() {


    function getAddressFromCoords(lat, lon) {
        const accessKey = "e724c0e22ff43bb57537a0e080c15bed";
        const url = `https://api.positionstack.com/v1/reverse?access_key=${accessKey}&query=${lat},${lon}`;

        fetch(url)
            .then(res => res.json())
            .then(result => {
                if (result && result.data && result.data.length > 0) {
                    const place = result.data[0];

                    const location = {
                        district: place.county,
                        pincode: place.postal_code
                    }
                    const locationstores = JSON.stringify(location)
                    localStorage.setItem('location', locationstores)

                } else {
                    console.log("No location data found");
                }
            })

    }


    if (!navigator.geolocation) {
        console.log('not support');

    }
    navigator.geolocation.getCurrentPosition(
        position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            getAddressFromCoords(lat, lon);

        }
    )

}

document.getElementsByClassName('liveloc')[0].addEventListener('click', apicall)







// input pincode
function locationpincode() {





    const pincode = document.getElementById('pincodeinp').value;





    const url = `https://indian-pincode-2024.p.rapidapi.com/pincode?pincode=${pincode}`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'indian-pincode-2024.p.rapidapi.com',
            'x-rapidapi-key': '4db5888fe2msh21205350a42f8e3p108832jsne7e1c2f15eda' // Replace with your actual key
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            const names = Object.entries(data);
            var datastores = document.getElementsByClassName('locations-tit')[0];
            const location = {
                district: names[0][1].district_name,
                pincode: pincode
            }
            const locationData = JSON.stringify(location);
            localStorage.setItem('location', locationData)
            const locationStore = JSON.parse(localStorage.getItem('location'));
            console.log(locationStore);


        })
        .catch(error => {
            console.error("API error:", error);
        });

    const pincode1 = document.getElementById('pincodeinp').value;









}
document.getElementsByClassName('ipb')[0].addEventListener('click', locationpincode)



var datastores = document.getElementsByClassName('locations-tit')[0];
console.log(datastores);

const locationStore = JSON.parse(localStorage.getItem('location'));
console.log(locationStore);

datastores.innerText = locationStore.district + " " + locationStore.pincode;







const imgFiles = document.querySelectorAll('.img-food');

imgFiles.forEach((item) => {
    item.addEventListener('click', addClick)
})



function addClick(event) {
    var names = event.target;
    console.log(names.alt);
    localStorage.setItem('itemname', names.alt);



    window.location.href = './src/search/searchres.html';
}

