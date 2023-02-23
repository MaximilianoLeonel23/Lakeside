"use strict";

// Nav function
const openMenu = document.getElementById("open_menu");
const logo = document.querySelector(".nav_logo_link");
const navMenu = document.querySelector(".nav_menu");


openMenu.addEventListener("click", function (e) {
  
  if (navMenu.classList.contains("nav_menu-hidden")) {
    navMenu.classList.remove("nav_menu-hidden");
    navMenu.classList.add("nav_menu-show");
    openMenu.classList.remove("light_color");
    logo.classList.remove("light_color");
    openMenu.classList.add("dark_color");
    logo.classList.add("dark_color");
  } else {
    navMenu.classList.remove("nav_menu-show");
    logo.classList.remove("dark_color");
    openMenu.classList.remove("dark_color");
    navMenu.classList.add("nav_menu-hidden");
    openMenu.classList.add("light_color");
    logo.classList.add("light_color");
  }
});

// Carrousel de imagenes
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const carouselSlide = document.querySelector(".carousel-slide");
// const carouselImg = new Array(...document.querySelectorAll(".carousel-img"));
const carouselImg = document.querySelector(".carousel-img");
const carousel = [
  "/img/habitacion0.jpg",
  "/img/habitacion2.jpg",
  "/img/habitacion3.jpg",
  "/img/habitacion4.jpg",
  "/img/habitacion5.jpg",
  "/img/habitacion6.jpg",
  "/img/habitacion7.jpg",
];
const carouselCircles = document.querySelector(".carousel-circles");
let i = 0;
carouselImg.setAttribute("src", carousel[i]);

for (let c = 0; c <= carousel.length - 1; c++) {
  const newCircle = document.createElement("div");
  newCircle.classList.add("carousel-circle");
  newCircle.setAttribute("id", `${c}`);
  carouselCircles.appendChild(newCircle);
}

const carouselCircle = new Array(
  ...document.querySelectorAll(".carousel-circle")
);

// newCircle = function() {

// }
// while (c < carousel.length) {
//   c++;
//   const newCircle = document.createElement("div");
//   newCircle.classList.add("carousel-circle");
//   carouselCircles.appendChild(newCircle);
// }
carouselCircle[i].style.opacity = "1";

nextBtn.addEventListener("click", () => {
  carouselCircle[i].style.opacity = "0.5";
  i++;
  if (i < carousel.length) {
    carouselImg.setAttribute("src", carousel[i]);
  } else {
    carouselImg.setAttribute("src", carousel[0]);
    i = 0;
  }
  carouselCircle[i].style.opacity = "1";
});

prevBtn.addEventListener("click", () => {
  carouselCircle[i].style.opacity = "0.5";
  i--;

  if (i < 0) {
    i = carousel.length - 1;
    carouselImg.setAttribute("src", carousel[i]);
  } else {
    carouselImg.setAttribute("src", carousel[i]);
  }
  carouselCircle[i].style.opacity = "1";
});

// Seleccionar imagen por circulo
carouselCircles.addEventListener("click", (e) => {
  e.preventDefault;
  if (e.target.classList.contains("carousel-circle")) {
    carouselCircle[i].style.opacity = "0.5";
    i = e.target.id;
    carouselImg.setAttribute("src", carousel[i]);
    carouselCircle[i].style.opacity = "1";
  }
});
// Event listener
// nextBtn.addEventListener("click", () => {
//   carouselImg[counter].style.alignItem = "center";
//   counter++;
// });
