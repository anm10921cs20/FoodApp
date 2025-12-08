function loginWithGoogle() {
    auth.signInWithPopup(googleProvider)
        .then((result) => {
            const user = result.user;
            console.log("Logged in:", user);
            console.log(user.displayName, user.email);
            firestore.collection('gmailClient').doc(user.uid).set(
                {
                    displayName: user.displayName,
                    email: user.email,
                    img: user.photoURL
                }
            )

            if (user.emailVerified === true) {
                const logincontainer = document.getElementsByClassName('login-container')[0];
                logincontainer.style.display = "none";
                localStorage.setItem('name', user.displayName);
                localStorage.setItem('email', user.email)
                localStorage.setItem('uid', user.uid)
            }

            const alertText = document.getElementsByClassName('notification__text')[0];
            const alertbox = document.getElementsByClassName('alert-container-true')[0];
            alertbox.style.display = "block";
            alertText.innerText = "Welcome " + user.displayName;
            setTimeout(function () {
                alertbox.style.display = "none";
            }, 4000)

        })
        .catch((error) => {
            console.error("Error:", error);
            const alertText = document.getElementsByClassName('notification__text')[0];
            const alertbox = document.getElementsByClassName('alert-container-true')[0];
            alertbox.style.display = "block";
            alertText.innerText = "Error " + error.message;
            setTimeout(function () {
                alertbox.style.display = "none";
            }, 4000)
        });


}

function signOutUser() {
    auth.signOut()
        .then(() => {
            const alertText = document.getElementsByClassName('notification__text')[0];
            const alertbox = document.getElementsByClassName('alert-container-true')[0];
            alertbox.style.display = "block";
            alertText.innerText = "Sign out Successfully"
            setTimeout(function () {
                alertbox.style.display = "none";
            }, 3000)

         
            localStorage.removeItem('name');
            localStorage.removeItem('email')
            localStorage.removeItem('uid')
            localStorage.removeItem('cartfood')
            localStorage.removeItem('phonenumber')
          
        })
        .catch((error) => {
            console.error("Sign out error:", error);
        });

}


