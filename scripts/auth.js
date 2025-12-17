auth.onAuthStateChanged(function (user) {
    if (user) {
        console.log("user Logged in " + user.email);
        const logincontainer = document.getElementsByClassName('login-container')[0];
        logincontainer.style.display = "none";

        // login page
        const loginpage = document.getElementsByClassName('login')[0];
        loginpage.addEventListener('click', () => {
            const logincontainer = document.getElementsByClassName('login-container')[0];
            logincontainer.style.display = "none";
            window.location.replace("./src/profile.html");
        })
        const signin = document.getElementsByClassName('signin')[0];
        signin.innerHTML = `<i class="fas fa-user-circle"></i>`;
        signin.style.fontSize = "23px";
        signin.style.border = "none";
        signin.style.backgroundColor = "transparent";
        signin.style.cursor = "pointer";

        signin.addEventListener('click', () => {
            window.location.href = "./src/profile.html";
        })

    }
    else {
        console.log("user Logged out");
        const logincontainer = document.getElementsByClassName('login-container')[0];
        logincontainer.style.display = "block";


        // click login

        const userbtn = document.getElementsByClassName('nav-btns')[0];
        const closebtn = document.getElementsByClassName('close-btns')[0];
        const signin = document.getElementsByClassName('signin')[0];

        signin.addEventListener('click', () => {
            logincontainer.style.display = "block";
        })


        userbtn.addEventListener('click', () => {
            logincontainer.style.display = "block";
        });

        closebtn.addEventListener('click', () => {
            logincontainer.style.display = "none";
        })


    }
})

const uid = localStorage.getItem('uid');
const name = localStorage.getItem('name');

db.ref("MahanFoodCart/" + name + uid).get('value').then((snapshot) => {
    const responce = snapshot.val()
    
    
    if (responce) {
        const products = responce.foodCart;
        const productsCount = products.length;
        const cartspan = document.getElementById('countspan');
        cartspan.innerText = productsCount;
        const windowWidth = window.innerWidth;
        if (productsCount >= 1 && windowWidth <= 1023) {
            const cartAlertMessage = document.getElementsByClassName('cart-alert-message')[0];
            cartAlertMessage.style.display = "block";
        }
    }

})