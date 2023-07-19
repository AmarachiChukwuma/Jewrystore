
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
 
//   signup
    const signUpBtn = document.getElementById('signup-btn');
    signUpBtn.addEventListener('click', e => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
         var user = userCredential.user;
         console.log("user", user.email);
         alert("user signed Up")
         location.reload();
         window.location = "another.html";
  })
   .catch((error) => {
   var errorCode = error.code;
   var errorMessage = error.message;
   console.log(errorCode);
   console.log(errorMessage);
   alert(errorMessage)
   });
});


// log in
// const signInBtn = document.getElementById("signin-btn");
// signInBtn.addEventListener('click', e => {
//    e.preventDefault();

//    const email = document.getElementById('email').value;
//    const password = document.getElementById('password').value;

//    auth.signInWithEmailAndPassword(email, password)
//    .then( (userCredential) => {
//       var user = userCredential.user;
//       console.log("user", user.email);
//       alert("user logged in")
//       location.reload();
//       window.location = "another.html";
//    })
//    .catch(error => {
//       console.log(error.message);
//       alert(errorMessage)
//    })
// });




// logout
// const logoutBtn = document.getElementById('logout-btn');
// logoutBtn.addEventListener('click', e => {
//    e.preventDefault();
//    auth.signOut();
//    console.log('User signed out!');
//    alert('logged out');
//    window.location = "login.html"
// })


// keeping track of auth state
auth.onAuthStateChanged(user => {
   if (user) {
      console.log(user.email + "is logged in!");
      window.location = "another.html";
   } else {
      console.log('User is logged out!');
      alert('user loggedout!');
      // window.location = "index.html";
   }
   
});








