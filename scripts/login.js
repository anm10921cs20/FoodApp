




// login container

// details stores


const gmailregister = document.getElementsByClassName('signup-details')[0];
const gmaillogin = document.getElementsByClassName('signin-details')[0];
const title = document.getElementsByClassName('title')[0];

const signupbtn = document.getElementsByClassName('googlelogin')[1];

signupbtn.addEventListener('click', () => {
    gmailregister.style.display = "flex";
    forget.style.display = "none";
    gmaillogin.style.display = "none";
    title.innerText = "SingIn"
})

// forget

const forget = document.getElementsByClassName('forget-container')[0];
const forgetbtn = document.getElementsByClassName('forget')[0];

forgetbtn.addEventListener('click', () => {
    forget.style.display = "flex";
    gmaillogin.style.display = "none";
     title.innerText = "Forget Password"
    
})

// reset password

const alreadyknow = document.getElementsByClassName('already-know')[0];

alreadyknow.addEventListener('click', () => {
    forget.style.display = "none";
     gmaillogin.style.display = "flex";
          title.innerText = "Login"
})


// already account

const already = document.getElementsByClassName('already')[0];

already.addEventListener('click', () => {
    gmailregister.style.display = "none";
     gmaillogin.style.display = "flex";
     title.innerText = "Login"
})


// click login

const userbtn = document.getElementsByClassName('nav-btns')[0];
const logincontainer = document.getElementsByClassName('login-container')[0];
const closebtn = document.getElementsByClassName('close-btns')[0];


userbtn.addEventListener('click', () => {
 logincontainer.style.display = "block";
});

closebtn.addEventListener('click', () => {
 logincontainer.style.display = "none";
})

