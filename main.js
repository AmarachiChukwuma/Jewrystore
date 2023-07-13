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

// topup button
let mybutton = document.getElementById('myBtn');

window.onscroll = function() {scrollFunction()};


function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}



