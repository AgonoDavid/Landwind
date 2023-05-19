"use strict";

const hamburger = document.querySelector(".hamburger");

const mobile_view = document.querySelector(".nav-middle");

const navbar = document.querySelector(".nav-bar");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  mobile_view.classList.toggle("active");
});
