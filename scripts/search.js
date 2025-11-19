

// redirect

const homePage = document.getElementsByClassName('cart-btn')[0];

homePage.addEventListener('click', () => {
    window.location.replace('../../index.html');
})


// input control
const searchInput = document.getElementById('search-input');
searchInput.oninput = handleFocus;


function handleFocus() {
    const searchInput = document.getElementById('search-input');
    const icon = document.getElementsByClassName('icon-color')[0];
    const mainData = document.getElementsByClassName('main-data')[0];
    const searchData = document.getElementsByClassName('results')[0];
    var screenWidth = window.innerWidth;
    

    var searchvalue = searchInput.value;
    if (searchvalue.length > 0) {
        icon.classList.remove('fa-magnifying-glass');
        icon.classList.add('fa-close');
        mainData.style.display = "none";
        searchData.style.display = "block";
    }
    else {
        icon.classList.remove('fa-close');
        icon.classList.add('fa-magnifying-glass');
        mainData.style.display = "block";
        searchData.style.display = "none";
    }

    icon.addEventListener('click', () => {
        if (icon.classList.contains('fa-close')) {
            searchInput.value = '';
            icon.classList.remove('fa-close');
            icon.classList.add('fa-magnifying-glass');
            mainData.style.display = "block";
            searchData.style.display = "none";
            if (screenWidth >= 1024 || screenWidth >=1440) {
                mainData.style.display = "none";
            }
        }
    })

     if (screenWidth >= 1024 || screenWidth >=1440) {
            mainData.style.display = "none";
        }

}



//main page

const navImg = document.getElementsByClassName('nav-img')[0];

navImg.addEventListener('click', () => {
    window.location.replace('../../index.html');
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

    const bootcontent = document.getElementById('location');
    const instance = bootstrap.Offcanvas.getInstance(bootcontent);
    instance.hide();
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



    const bootcontent = document.getElementById('location');
    const instance = bootstrap.Offcanvas.getInstance(bootcontent);
    instance.hide();





}
document.getElementsByClassName('ipb')[0].addEventListener('click', locationpincode)



var datastores = document.getElementsByClassName('locations-tit')[0];
const locationStore = JSON.parse(localStorage.getItem('location'));
console.log(locationStore);

datastores.innerText = locationStore.district + " " + locationStore.pincode;


