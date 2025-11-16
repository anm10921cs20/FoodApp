

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAm--sfbEonD49xNHSWPWoeMbkwFXXqF4U",
    authDomain: "mahan-food-app.firebaseapp.com",
    projectId: "mahan-food-app",
    storageBucket: "mahan-food-app.firebasestorage.app",
    messagingSenderId: "33097873868",
    appId: "1:33097873868:web:a34866029150b96d274569",
    measurementId: "G-V1EX1JKP7S"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

window.addEventListener('load', () => {
    const loaderContent = document.getElementsByClassName('dots-container')[0];
    loaderContent.classList.add('loader-hidden')
})
// first

db.ref("popularinstamart/").get('value').then((snapshot) => {
    const data = snapshot.val()
  


    const mainData = document.getElementsByClassName('img-data')[0];
    const div = document.createElement('div');
    div.classList.add('img-data-div');
    data.forEach((item) => {




        div.innerHTML += `
            <div class="img-data-item">
            <a href="#">
            <div class="img-container">
            <img src="${item.img}" alt="instamartimg" class=""img-data-src width="100px" height="100px"/></a>
            </div>
            </div>
            `;
        mainData.appendChild(div);


        const datas1 = document.getElementsByClassName('img-data-item');

        for (var i = 0; i < datas1.length; i++) {
            var button = datas1[i];
            button.addEventListener('click', itemsClicked)
        }


    })


}).catch((err) => {
    console.log(err.message);

})


// second  

db.ref("popularcuisines/").get('value').then((snapshot) => {
    const data = snapshot.val();





    
    const mainData = document.getElementsByClassName('img-data')[1];
    const div = document.createElement('div');
    div.classList.add('img-data-div');
    data.forEach((item) => {
        div.innerHTML += `
            <div class="img-data-item">
            <a href="#">
            <div class="img-container">
            <img src="${item.img}" alt="instamartimg" class=""img-data-src width="100px" height="100px"/></a>
            </div>
            </div>
            `;
    });
    mainData.appendChild(div);


    const datas1 = document.getElementsByClassName('img-data-item');

    for (var i = 0; i < datas1.length; i++) {
        var button = datas1[i];
        button.addEventListener('click', itemsClicked)
    }


}).catch((err) => {
    console.log(err.message);

})










































// functions place


function itemsClicked(event) {
    var btn = event.target;
    console.log(btn.parentElement);

}