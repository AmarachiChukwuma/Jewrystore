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
        button.addEventListener('click' removeCartItem)
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