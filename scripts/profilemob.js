
const phone = document.getElementsByClassName('numbers')[0];
const name = document.getElementsByClassName('name')[0];
const name1 = document.getElementsByClassName('name')[1];
const nameData1 = localStorage.getItem('name');
const phoneData1 = localStorage.getItem('phonenumbermob');
phone.innerText = phoneData1 ? phoneData1 : "Please Edit Number"





const email = document.getElementsByClassName('gmail')[0];
const email1 = document.getElementsByClassName('gmail')[1];
const email2 = document.getElementsByClassName('gmail')[2];


const address = document.getElementsByClassName('address')[0];

const emailData = localStorage.getItem('email');



email.innerText = emailData;
email1.innerText = emailData;
email2.innerText = emailData;


const firestore = firebase.firestore()
const auth = firebase.auth()

const uiddata = localStorage.getItem('uid')
firestore.collection('gmailClient').doc(uiddata).get().then((result) => {
    const data = result.data()

    const imgsrc = document.getElementsByClassName('img-src')[0];
    const imgsrc1 = document.getElementsByClassName('img-src')[1];
    const imgsrc2 = document.getElementsByClassName('img-src')[2];
    imgsrc.src = data.img ?? "https://i.ibb.co/ZDMFp9F/user.png";
    imgsrc1.src = data.img ?? "https://i.ibb.co/ZDMFp9F/user.png";
    imgsrc2.src = data.img ?? "https://i.ibb.co/ZDMFp9F/user.png";



}).catch((err) => {
    // console.log(err);

});

const logoutBtn = document.getElementsByClassName('displays')[0];
const logoutBtn1 = document.getElementsByClassName('displays')[2];



logoutBtn.addEventListener('click', () => {
    setTimeout(() => {
        window.location.replace('../index.html')
    }, 2000)

})
logoutBtn1.addEventListener('click', () => {
    setTimeout(() => {
        window.location.replace('../index.html')
    }, 2000)

})



const closeBtn = document.getElementsByClassName('close')[0];
const PhoneContainer = document.getElementsByClassName('phoneNumber-container')[0];
const openBtn = document.getElementsByClassName('edit')[0];


openBtn.addEventListener('click', () => {
    PhoneContainer.style.display = "block";
})
closeBtn.addEventListener('click', () => {
    PhoneContainer.style.display = "none";
})


function addNumber() {
    const phoneinput = document.getElementById('phinput');
    const alertMessage = document.getElementsByClassName('message-alert')[0];
    const phoneValue = phoneinput.value;
    console.log(phoneValue);
    localStorage.setItem('phonenumbermob', phoneValue);
    alertMessage.style.display = "block";
    var counter = 1;
    var interval = setInterval(() => {
        counter--;
        if (counter < 0) {
            clearInterval(interval);
            alertMessage.style.display = "none";
            window.location.reload()

        }
    }, 1000)

}

// address edit

const closeBtn1 = document.getElementsByClassName('close')[1];
const AddressContainer = document.getElementsByClassName('address-container')[0];
const openBtn1 = document.getElementsByClassName('edit')[1];


openBtn1.addEventListener('click', () => {
    AddressContainer.style.display = "block";
})
closeBtn1.addEventListener('click', () => {
    AddressContainer.style.display = "none";
})




function setAddressData() {
    const street = document.getElementById('street').value;
    const district = document.getElementById('district').value;
    const state = document.getElementById('state').value;
    const pincode = document.getElementById('pincode').value;
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
        const alertMessage = document.getElementsByClassName('message-alert')[1];
        alertMessage.style.display = "block";
        var counter = 1;
        var interval = setInterval(() => {
            counter--;
            if (counter < 0) {
                clearInterval(interval);
                alertMessage.style.display = "none";
                window.location.reload()

            }
        }, 1000)
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




firestore.collection('UserAddressMobile/').doc(uiddata).get().then((responce) => {
    const dataresponce = responce.data();


    if (dataresponce) {


        const addressdet = dataresponce.street + " " + dataresponce.district + " " + dataresponce.state + " " + dataresponce.pincode ?? 0;
        const addressDet = document.getElementsByClassName('address')[0];

        addressDet.innerText = addressdet ?? "Please Edit Address";





    }
})


firestore.collection('UserAddress/').doc(uiddata).get().then((responce) => {
    const dataresponce = responce.data();


    if (dataresponce) {


        const address = dataresponce.street + " " + dataresponce.district + " " + dataresponce.state + " " + dataresponce.pincode ?? 0;
        const namedata = dataresponce.name;
        const phonenumbers = dataresponce.phoneNumber;
        localStorage.setItem('name', namedata);
        localStorage.setItem('phonenumberdes', phonenumbers)
        localStorage.setItem('address', address)




    }


})

const addressDet1 = document.getElementsByClassName('address')[1];
const name2 = document.getElementsByClassName('name')[2];
const name3 = document.getElementsByClassName('name')[3];
const name4 = document.getElementsByClassName('name')[4];
const phone1 = document.getElementsByClassName('number')[0];


const nameData = localStorage.getItem('name');
const phoneData = localStorage.getItem('phonenumberdes');
const addressdata = localStorage.getItem('address')

addressDet1.innerText = addressdata ?? "Please Edit Address";
name2.innerText = nameData
name3.innerText = nameData
name4.innerText = nameData
phone1.innerText = phoneData ? phoneData : "Please Enter Number";











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








