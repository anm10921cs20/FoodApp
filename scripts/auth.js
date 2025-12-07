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
            window.location.href = "./src/search/search.html";
        })

    }
    else {
        console.log("user Logged out");
        const logincontainer = document.getElementsByClassName('login-container')[0];
        logincontainer.style.display = "block";
      

        // click login

        const userbtn = document.getElementsByClassName('nav-btns')[0];
        const closebtn = document.getElementsByClassName('close-btns')[0];


        userbtn.addEventListener('click', () => {
            logincontainer.style.display = "block";
        });

        closebtn.addEventListener('click', () => {
            logincontainer.style.display = "none";
        })


    }
})