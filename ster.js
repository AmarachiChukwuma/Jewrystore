// const firebaseConfig = {
//    apiKey: "AIzaSyCUDTrmdO2nW_H2CTk8S1M1MvD6euJpPLg",
//    authDomain: "register-7fc8f.firebaseapp.com",
//    projectId: "register-7fc8f",
//    storageBucket: "register-7fc8f.appspot.com",
//    messagingSenderId: "1092275612543",
//    appId: "1:1092275612543:web:69a412543579549c0cc84a"
//   };

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
let signUpBtn = document.getElementById("signup-btn");
signUpButton.addEventListener("click", (e) => {
   e.preventDefault();
   console.log("clicked");

   var email = document.getElementById("email");
   var password = document.getElementById("password");

   auth
   .createUserWithEmailAndPassword(email.value, password.value)
   .then((userCredential) => {
      location.reload();
      alert("user signed up successfully")


      var user = userCredential.user;
      console.log("user", user.email);
   })

   .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error code", errorCode);
      console.log("error code", errorMessage);
      alert(errorMessage)
   })
});


// signin

let signInBtn = document.getElementById("signin-btn");
signInBtn.addEventListener("click", (e) => {
   e.preventDefault();
   console.log("clicked");

   var email = document.getElementById("signin-btn");
   var password = document.getElementById("password");

   auth
   .signInUserWithEmailAndPassword(email.value, password.value)
   .then((userCredential) => {
      var user = userCredential.user;
      console.log("user", user.email);
      alert("user logged in")
      window.location = "index.html";
   })

   .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
   })
});

// keeping track of auth state
auth.onAuthStateChanged(user => {
   if (user) {
      console.log(user.email + "is logged in!");
   } else {
      console.log('User is looged out!');
      alert('user loggedout!');
   }
})





























//   signup
//    const signupBtn = document.getElementById('signup-btn');
//     signupBtn.addEventListener('click', e => {
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     auth.createUserWithEmailAndPassword(email, password).then(Cred => {
//     console.log('User signed up!');
//     location.reload();
//     alert('user signup')
//   })
//    .catch((error) => {
//    var errorCode = error.code;
//    var errorMessage = error.message;
//    console.log(errorCode);
//    console.log(errorMessage);
//    alert(errorMessage)
//    });
// });


// // log in
// const loginBtn = document.getElementById('login-btn');
// loginBtn.addEventListener('click', e => {
//    e.preventDefault();

//    const email = document.getElementById('email').value;
//    const password = document.getElementById('password').value;

//    auth.signInWithEmailAndPassword(email, password)
//    .then(cred => {
//       console.log('logged in');
//       location.reload();
//       alert('logged in user')
//    })
//    .catch(error => {
//       console.log(error.message);
//       alert(errorMessage)
//    })
// });




// // logout
// const logoutBtn = document.getElementById('logout-btn');
// logoutBtn.addEventListener('click', e => {
//    e.preventDefault();
//    auth.signOut();
//    console.log('User signed out!');
//    alert('logged out')
// })


// // keeping track of auth state
// auth.onAuthStateChanged(user => {
//    if (user) {
//       console.log(user.email + "is logged in!");
//    } else {
//       console.log('User is logged out!');
//       alert('user loggedout!');
//       window.location = "index.html";
//    }
   
   
// });








