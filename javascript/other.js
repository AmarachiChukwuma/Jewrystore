// hamburger = document.querySelector(".hamburger");
// hamburger.onclick = function() {
//   navBar = document.querySelector(".nav-bar");
//   navBar.classList.toggle(".active");
// }

function openNav() {
  document.getElementById("mySidenav").style.width = "270px";
  document.getElementById("main").style.width = "230px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}


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


// logout
const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', e => {
 e.preventDefault();
 auth.signOut();
 console.log('User signed out!');
 alert('logged out');
 window.location = "login.html"
})