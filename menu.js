"use strict";

// for menu of navbar media query

// FROM HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

// let menu = document.querySelector("#menu-bar");
let menu = document.querySelector(".fas.fa-bars");
let navbar = document.querySelector(".navbar");

// menu.onclick = () => {
//   menu.classList.toggle("fa-times");
//   navbar.classList.toggle("active");
// };

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

// function toggleMenu() {
//   navbar.classList.toggle("active");
//   console.log(navbar.classList.contains("active")); // should show `true` or `false` in the console
// }

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

// TILL HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

// /////////////////////////////////////////

// scroll

if (window.scrollY > 60) {
  document.querySelector(".fa-solid.fa-circle-up").classList.add("active");
} else {
  document.querySelector(".fa-solid.fa-circle-up").classList.remove("active");
}

// //////////////////////////////////

// loader

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut(); 