auth.onAuthStateChanged(function (user) {
    if (user) {
        console.log("user Logged in " + user.email);
        const logincontainer = document.getElementsByClassName('login-container')[0];
        logincontainer.style.display = "none";
           document.getElementsByClassName('display')[0].style.display = "block";

        // login page
        const loginpage = document.getElementsByClassName('login')[0];
        loginpage.addEventListener('click', () => {
            const logincontainer = document.getElementsByClassName('login-container')[0];
            logincontainer.style.display = "none";
            window.location.href = "./src/search/search.html";
        })
        const signin = document.getElementsByClassName('signin')[0];
        const localName = localStorage.getItem('name');
        signin.innerHTML = `<i class="fas fa-user-circle"></i> ${localName.slice(0,10)}`;
        signin.style.backgroundColor = "transparent";
        signin.style.borderColor = "#fff"; 

    }
    else {
        console.log("user Logged out");
        const logincontainer = document.getElementsByClassName('login-container')[0];
        logincontainer.style.display = "block";
        document.getElementsByClassName('display')[0].style.display = "none";
      

        // click login

        const userbtn = document.getElementsByClassName('nav-btns')[0];
        const closebtn = document.getElementsByClassName('close-btns')[0];
        const signin = document.getElementsByClassName('signin')[0];

        signin.addEventListener('click', () =>{
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