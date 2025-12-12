




function storeDataAccount() {


    const names = document.getElementById('nameid').value;
    const phones = document.getElementById('phoneid').value
    const street = document.getElementById('streetid').value;
    const district = document.getElementById('districtid').value;
    const state = document.getElementById('stateid').value;
    const pincode = document.getElementById('pincodeid').value;
    const input = document.getElementsByTagName('input');

    if (!pincode) {
        const alertText = document.getElementsByClassName('notification__text')[0];
        const alertbox = document.getElementsByClassName('alert-container-true')[0];
        alertbox.style.display = "block";
        alertText.innerText = "Please Fill The Details"
        setTimeout(function () {
            alertbox.style.display = "none";
        }, 3000)
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
        alertText.innerText = "Save Successfully"
        setTimeout(function () {
            alertbox.style.display = "none";
            window.location.reload()
        }, 3000)
        firestore.collection('UserAddress/').doc(uiddata).set(
            {
                street: street,
                district: district,
                state: state,
                pincode: pincode,
                name: names,
                phoneNumber: phones
            }
        )
        firestore.collection('client/').doc(uiddata).set(
            {
                email: emailData,
                name: names,
                phoneNumber: phones
            }
        )
    }

}





const editpage = document.getElementsByClassName('account-second')[0];
const selectedit = document.getElementsByClassName('fa-pen-to-square')[0];
const editpageclose = document.getElementsByClassName('close')[2];
selectedit.addEventListener('click', () => {
    editpage.classList.add('account-second-active');
})
editpageclose.addEventListener('click', () => {
    editpage.classList.remove('account-second-active')
})






console.log(window.innerWidth);

const windowWidth = window.innerWidth;

if(windowWidth <= 1023)
{
    
const mapmobile = L.map('mapmobile').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(mapmobile);

let marker1 = L.marker([0, 0]).addTo(mapmobile).bindPopup("Current Location")
    .openPopup();;

function updateLocation(lat, lng) {
    marker1.setLatLng([lat, lng]);
    mapmobile.setView([lat, lng], 15);
}
mapmobile.on("click", function (e) {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;

    L.marker([lat, lng]).addTo(mapmobile)
        .bindPopup(`Lat: ${lat}<br>Lng: ${lng}`)
        .openPopup();
        mapmobile.removeLayer(marker1);
});

// Live GPS tracking
navigator.geolocation.watchPosition((pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    updateLocation(lat, lng);

    const datalocalstore = localStorage.getItem('name');

    firestore.collection('userLocation/').doc(datalocalstore).set({
        lat:lat,
        lon:lng
    })
});

}

if(windowWidth <=2160)
{
    
const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

let marker = L.marker([0, 0]).addTo(map).bindPopup("Current Location")
    .openPopup();;

function updateLocation(lat, lng) {
    marker.setLatLng([lat, lng]);
    map.setView([lat, lng], 15);
}
map.on("click", function (e) {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;

    L.marker([lat, lng]).addTo(map)
        .bindPopup(`Lat: ${lat}<br>Lng: ${lng}`)
        .openPopup();
        map.removeLayer(marker);
});

// Live GPS tracking
navigator.geolocation.watchPosition((pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    updateLocation(lat, lng);

    

    firestore.collection('userLocation/').doc(uiddata).set({
        lat:lat,
        lon:lng
    })
});


}
