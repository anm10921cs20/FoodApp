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

            alert("Welcome " + user.displayName);
        })
        .catch((error) => {
            console.error("Error:", error);
            alert(error.message);
        });


}

function signOutUser() {
    auth.signOut()
        .then(() => {
            console.log("User signed out");
            alert("Signed out successfully");
            const logincontainer = document.getElementsByClassName('login-container')[0];
            logincontainer.style.display = "block";
            localStorage.removeItem('name');
            localStorage.removeItem('email')
            localStorage.removeItem('uid')
            window.location.reload();
        })
        .catch((error) => {
            console.error("Sign out error:", error);
        });

}


