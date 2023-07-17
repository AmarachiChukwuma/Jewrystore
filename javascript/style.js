// function show(id) {
//     if(document.getElementById(id).style.display == 'none') {
//         document.getElementById(id).style.display= 'block';
//     } else{
//         document.getElementById(id).style.display = 'none';
//     }
// };

// // submit button
// function Verify() {
//     var userRef = "AmicAble";
//     var passRef = "12ruthieAma";

//     var user = document.getElementById("username").value;
//     var pass = document.getElementById("password").value;
//     if(user == userRef || pass == passRef) {
//         alert("Loggedin")
//         window.location(index.html)
//     } else{
//         alert("It's seem you make a mistake...")
//     }
// };


const firebaseConfig = {
    apiKey: "AIzaSyCUDTrmdO2nW_H2CTk8S1M1MvD6euJpPLg",
    authDomain: "register-7fc8f.firebaseapp.com",
    databaseURL: "https://register-7fc8f-default-rtdb.firebaseio.com",
    projectId: "register-7fc8f",
    storageBucket: "register-7fc8f.appspot.com",
    messagingSenderId: "1092275612543",
    appId: "1:1092275612543:web:b933924f73d7b12e0cc84a"
  };

    // Initialize Firebase   
  firebase.initializeApp(firebaseConfig);
 

    // invokes firebase authentication  
   const auth = firebase.auth();
   document.querySelector("#show-register").addEventListener("click", () => {
    showRegistration();
   });

   const showRegistration = () => {
    document.querySelector("#registration-page").classList.remove("hide");
    document.querySelector("#login-page").classList.add("hide");
    document.querySelector("#").classList.add("hide");
   };
   
   document.querySelector("#show-login").addEventListener("click", () => {
    showLogin();
   });

   const showLogin = () => {
    document.querySelector("#registration-page").classList.add("hide");
    document.querySelector("#login-page").classList.remove("hide");
    document.querySelector("#login-page").classList.add("hide");
   };

   document.querySelector("#signout").addEventListener("click", () => {
    signOut();
   });

   const register = () => {
    const email = document.querySelector("#registration-email").value;
    const reemail = document.querySelector("#registration-reemail").value;
    const password = document.querySelector("#registration-password").value;

    if(email.trim() == ""){
        alert("Enter Email");
    } else if (password.trim().length < 7) {
        alert("password must be at least 7 characters");
    } else if (email != reemail) {
        alert("emails do not match");
    } else {
        auth
        .createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
            // handle error here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });
    }
   };

   document.querySelector("#register").addEventListener("click", () => {
    register();
   });

//    register when you hit the enter key
document
.querySelector("#registration-password")
.addEventListener("keyup", (e) => {
    if (event.keyCode === 13) {
        e.preventDefault();

        register();
    }
});



const login = () => {
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;

    if(email.trim() == "") {
        alert("Enter Email");
    } else if (password.trim() == "") {
        alert("Enter Password");
    } else {
        authenticate(email, password);
    }
};

document.querySelector("#login").addEventListener("click", () => {
    login();
});

// sign in when you hit enter
document
.querySelector("#login-password")
.addEventListener("keyup", (e) => {
    if (event.keyCode === 13) {
        e.preventDefault();

        login();
    }
});

const authenticate = (email, password) => {
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, password);
    firebase
    .auth()
    signInWithEmailAndPassword(email, password)
    .catch(function (error) {
        // handle errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);

    });
};

const showHomepage = () => {
    document.querySelector("#registration-page").classList.add("hide");
    document.querySelector("#login-page").classList.add("hide");
    document.querySelector("#homepage").classList.remove("hide");
};

const signOut =() => {
    firebase
    .auth()
    .signOut()
    .then(function () {
        location.reload();
    })
    .catch(function (error) {
        alert("error signing out, check network conncetion");
    });
};

auth.onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
        showHomepage();
    }
});

document
.querySelector("#forgot-password")
.addEventListener("click", () => {
    const email = document.querySelector("#login-email").value;
    if (email.trim() == "") {
        alert("Enter Email");
    } else {
        fogotPassword(email);
    }
});

const fogotPassword = (email) => {
    auth 
    .sendPasswordResetEmail(email)
    .then(function () {
    alert("email sent");
    })
    .catch(function (error) {
        alert("invalid email or bad network")
    });
};



















// cart
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

// opening cart
cartIcon.onclick = () =>{
    cart.classList.add("active");
};

// closing cart
closeCart.onclick = () =>{
    cart.classList.remove("active");
};

// cart working js
if(document.readyState == 'loading'){
    document.addEventListener('DOMContent', ready);
} else{
    ready();
}

// making fuction
function ready() {
    // remove items from cart
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for(var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        // button.addEventListener('click' removeCartItem)
    }
}















// var myInput = document.getElementById("psw");
// var letter =  document.getElementById("letter");
// var capital =  document.getElementById("capital");
// var number =  document.getElementById("number");
// var length =  document.getElementById("length");

// myInput.onfocus = function() {
//     document.getElementById("message").style.dispaly = "block";
// }

// myInput.onkeyup = function() {
//     document.getElementById("message").style.display = "none";
// }

// myInput.onkeyup = function() {
//     var lowerCaseLetters = /[a-z]/g;
//     if(myInput.ariaValueMax.match(lowerCaseLetters)) {
//         letter.classList.remove("invalid");
//         letter.classList.add("valid");
//     } else {
//         letter.classList.remove("valid");
//         letter.classList.add("invalid");
//     } 

//     var upperCaseLetters = /[A-Z]/g;
//     if(myInput.ariaValueMax.match(upperCaseLetters)) {
//         capital.classList.remove("invalid");
//         capital.classList.add("valid");
//     } else {
//         capital.classList.remove("valid");
//         capital.classList.add("invalid");
//     } 

//     var numbers = /[0-9]/g;
//     if(myInput.ariaValueMax.match(numbers)) {
//         number.classList.remove("invalid");
//         number.classList.add("valid");
//     } else {
//         number.classList.remove("valid");
//         number.classList.add("invalid");
//     } 

//     if(myInput.ariaValueMax.length >= 8) {
//         length.classList.remove("valid");
//         length.classList.add("invalid");
//     } else{
//         length.classList.remove("valid");
//         length.classList.add("invalid");
//     }
// }