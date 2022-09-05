// START OF MAIN MENU
var menuBtn = document.querySelector(".menu-btn");
console.log(menuBtn);
var menuToggle = document.querySelector(".menu-btn input");
console.log(menuToggle);
var menuOpen = document.querySelector(".mobile-nav-container");
console.log(menuOpen);
var header = document.querySelector("header");


function myFunction() {
  if (menuToggle.checked == true) {
    menuOpen.classList.add("openMenu");
    menuBtn.classList.add("openToggle");
    header.classList.add("headerOff");
    console.log("xristina");

  } else {
    console.log("elena");
    menuOpen.classList.remove("openMenu");
    menuBtn.classList.remove("openToggle");
    header.classList.remove("headerOff");
  }
}
// END OF MAIN MENU


// Animations
AOS.init({});
// Animations

//CAROUSELS
const bigCarousel = document.querySelector('#bigSlider');
const roomSlider = document.querySelector('#roomSlider');

const carouselBig = new bootstrap.Carousel(bigCarousel, {
  interval: 5000,
  wrap: true
});

const carouselRooms = new bootstrap.Carousel(roomSlider, {
  interval: false,
  wrap: true,
  ride: false
});
//CAROUSELS



