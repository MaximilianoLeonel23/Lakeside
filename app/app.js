"use strict";

console.log("Hola Mundo");

const openMenu = document.getElementById("open_menu");
const logo = document.querySelector(".nav_logo_link");
const navMenu = document.querySelector(".nav_menu");
console.log(openMenu);

openMenu.addEventListener("click", function (e) {
  e.preventDefault();
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
// Open menu function
/*
1. Logo a color negro
2. Boton a color negro
3. Girar boton 
4. Desplazar de arriba a abajo el nav_menu
 
*/
