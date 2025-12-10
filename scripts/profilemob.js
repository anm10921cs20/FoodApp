const name = document.getElementsByClassName('name')[0];
const name1 = document.getElementsByClassName('name')[1];

const phone = document.getElementsByClassName('number')[0];
const email = document.getElementsByClassName('gmail')[0];
const address = document.getElementsByClassName('address')[0];

const nameData = localStorage.getItem('name');
const phoneData = localStorage.getItem('phonenumber');
const emailData = localStorage.getItem('email');

name.innerText = nameData;
name1.innerText = nameData;
phone.innerText = phoneData ?? "Please Edit Phone";

const firestore = firebase.firestore()
const auth = firebase.auth()

const uiddata = localStorage.getItem('uid')
firestore.collection('gmailClient').doc(uiddata).get().then((result) => {
    const data = result.data()

    const imgsrc = document.getElementsByClassName('img-src')[0];
    imgsrc.src = data.img ?? "https://i.ibb.co/ZDMFp9F/user.png";


}).catch((err) => {
    // console.log(err);

});

const logoutBtn = document.getElementsByClassName('displays')[0];

logoutBtn.addEventListener('click', () => {
    window.location.replace('../index.html')
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
    localStorage.setItem('phonenumber', phoneValue);
    alertMessage.style.display = "block";
    var counter = 2;
    var interval = setInterval(() => {
        counter--;
        if (counter < 0) {
            clearInterval(interval);
            alertMessage.style.display = "none";
            window.location.reload()

        }
    },1000)

}

