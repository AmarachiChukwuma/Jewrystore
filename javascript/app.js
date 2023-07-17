const firebaseConfig = {
    apiKey: "AIzaSyCUDTrmdO2nW_H2CTk8S1M1MvD6euJpPLg",
    authDomain: "register-7fc8f.firebaseapp.com",
    databaseURL: "https://register-7fc8f-default-rtdb.firebaseio.com",
    projectId: "register-7fc8f",
    storageBucket: "register-7fc8f.appspot.com",
    messagingSenderId: "1092275612543",
    appId: "1:1092275612543:web:b933924f73d7b12e0cc84a"
  };
   
  firebase.initializeApp(firebaseConfig);
 
   const auth = firebase.auth();


// log in
const signInBtn = document.getElementById("signin-btn");
signInBtn.addEventListener('click', e => {
   e.preventDefault();

   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;

   auth.signInWithEmailAndPassword(email, password)
   .then( (userCredential) => {
      var user = userCredential.user;
      console.log("user", user.email);
      alert("user logged in")
      location.reload();
      window.location = "another.html";
   })
   .catch(error => {
      console.log(error.message);
      alert(errorMessage)
   })
})