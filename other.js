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