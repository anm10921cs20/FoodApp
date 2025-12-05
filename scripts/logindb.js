// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAm--sfbEonD49xNHSWPWoeMbkwFXXqF4U",
    authDomain: "mahan-food-app.firebaseapp.com",
    databaseURL: "https://mahan-food-app-default-rtdb.firebaseio.com",
    projectId: "mahan-food-app",
    storageBucket: "mahan-food-app.firebasestorage.app",
    messagingSenderId: "33097873868",
    appId: "1:33097873868:web:a34866029150b96d274569",
    measurementId: "G-V1EX1JKP7S"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();





const signUp = () => {
    // inputs 

    const name = document.getElementById('signupname').value;
    const phoneNumber = document.getElementById('signumobilenumber').value
    const email = document.getElementById('signupemail').value
    const password = document.getElementById('signuppassword').value;
    const logincontainer = document.getElementsByClassName('signin-details')[0];
    const signupcontainer = document.getElementsByClassName('signup-details')[0];

        const divfail = document.createElement('div');
            divfail.className = "alerts"
            divfail.innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
  <div class="data">
  
  </div>
</div>`;

 signupcontainer.appendChild(divfail);
            const alertContainer = document.getElementsByClassName('alerts')[0];
           
            const alertText = document.getElementsByClassName('data')[0]
           
            var counter = 1;
            var interval = setInterval(() => {
                counter--;
                if (counter < 0) {
                    clearInterval(interval);
                    alertContainer.style.display = "none";
                }
            }, 1000)

    if (name === "") {
         alertContainer.style.display = "block";
        alertText.innerText = 'please enter valid Details';
        return

    } else if (phoneNumber === "") {
         alertContainer.style.display = "block";
      alertText.innerText = 'please enter valid Details';
        return

    }
    else if (email === "") {
         alertContainer.style.display = "block";
        alertText.innerText = 'please enter valid Details';
        return

    }
    else if (password === "") {
         alertContainer.style.display = "block";
        alertText.innerText = 'please enter valid Details';
        return

    }
    else {
        auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
            const user = userCredential.user;
            const uid = user.uid;
            console.log(uid);

            firestore.collection('client').doc(uid).set(
                {
                    name: name,
                    phoneNumber: phoneNumber,
                    email: email
                }
            )
            // old state


            const divSucces = document.createElement('div');
            divSucces.className = "alerts"
            divSucces.innerHTML = `<div class="alert alert-success d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
  <div>
  Registration Successful
  </div>
</div>`;


            signupcontainer.appendChild(divSucces);
            const alertContainer1 = document.getElementsByClassName('alerts')[1];
            alertContainer1.style.display = "block";

            // close
            const names = document.getElementById('signupname');
            const phoneNumbers = document.getElementById('signumobilenumber')
            const emails = document.getElementById('signupemail')
            const passwords = document.getElementById('signuppassword')
            var counter = 1;
            var interval = setInterval(() => {
                counter--;
                if (counter < 0) {
                    clearInterval(interval);
                    alertContainer1.style.display = "none";
                    logincontainer.style.display = "flex";
                    signupcontainer.style.display = "none";
                    title.innerText = "Login";
                    names.value = ""
                    passwords.value = ""
                    emails.value = ""
                    phoneNumbers.value = ""
                }
            }, 1000)


        }).catch((error) => {
             alertContainer.style.display = "block";
            alertText.innerText = `${error.message}`;

        })






    }





}











const login = () => {
    const loginName = document.getElementById('signinemail').value;
    const loginPassword = document.getElementById('signinpassword').value;
    
  

    auth.signInWithEmailAndPassword(loginName, loginPassword).then((user) => {
        const users = user.user;
        const uid = users.uid;
        localStorage.setItem('uid',uid);
        const localuid = localStorage.getItem('uid');

        const loginName1 = document.getElementById('signinemail').value = "";
        const loginPassword1 = document.getElementById('signinpassword').value = "";

        firestore.collection('client').doc(localuid).get().then((doc) => {
            const data = doc.data();
           const dataname = data.name;
           const dataphone = data.phoneNumber;
           const dataemail = data.email;
           localStorage.setItem('name',dataname)
           localStorage.setItem('email',dataemail)
           localStorage.setItem('phonenumber',dataphone)


            

            
        })
    }).catch((error)=> {
        console.log(error.message);
        
    })
    
}