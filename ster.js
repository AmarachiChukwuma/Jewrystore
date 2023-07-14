const firebaseConfig = {
   apiKey: "AIzaSyCUDTrmdO2nW_H2CTk8S1M1MvD6euJpPLg",
   authDomain: "register-7fc8f.firebaseapp.com",
   projectId: "register-7fc8f",
   storageBucket: "register-7fc8f.appspot.com",
   messagingSenderId: "1092275612543",
   appId: "1:1092275612543:web:69a412543579549c0cc84a"
  };
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
//   signup
   const signupBtn = document.querySelector('#signup-btn');
    signupBtn.addEventListener('click', e => {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log('User signed up!');
    location.reload();
    alert('user signup')
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
const loginBtn = document.querySelector('#login-btn');
loginBtn.addEventListener('click', e => {
   e.preventDefault();

   const email = document.querySelector('#email').value;
   const password = document.querySelector('#password').value;

   auth.signInWithEmailAndPassword(email, password)
   .then(cred => {
      console.log('logged in');
      location.reload();
      alert('logged in user')
   })
})




// logout
const logoutBtn = document.querySelector('#logout-btn');
logoutBtn.addEventListener('click', e => {
   e.preventDefault();
   auth.signOut();
   console.log('User signed out!');
   alert('logged out')
})


// keeping track of auth state
auth.onAuthStateChanged(user => {
   if (user) {
      console.log(user.email + "is logged in!");
   } else {
      console.log('User is logged out!');
      alert('user loggedout!')
   }
});








