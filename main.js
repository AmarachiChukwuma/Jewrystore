function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}
function closeNav() {
    document.getElementById("topnav")[0].classList.toggle("responsive");
}



// slider
const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },
});