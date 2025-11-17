
const data = localStorage.getItem('itemname') || [];
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
const db = firebase.database()

db.ref(`${data}Item`).get('value').then((snapshot) => {
    var datas = snapshot.val()
    datas.forEach((item) => {
        const div = document.createElement('div');
        div.className = "items";
        div.innerHTML +=`<div class="details">
        <p>${item.name}</p>
        <p>${item.price}</p>
        <button  type="button" data-bs-toggle="offcanvas" data-bs-target="#food${item.id}">More Details</button>
        
        
        <div class="offcanvas offcanvas-bottom" data-bs-backdrop="true" tabindex="-1" id="food${item.id}">
         <p>${item.name}</p>
        <p>${item.price}</p>
         <img src="${item.img}"  height="150px" width="150px" alt="${item.name}">
        </div>
        
        
        
        <div class="img-det">
        <img src="${item.img}"  height="150px" width="150px" alt="${item.name}">
        </div>` 
            document.body.appendChild(div);

    })
})


