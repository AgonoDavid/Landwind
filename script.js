"use strict";

const hamburger = document.querySelector(".hamburger");

const mobile_view = document.querySelector(".nav-middle");

const navbar = document.querySelector(".nav-bar");

const faq_text = document.querySelector(".faq-test");
const up_arrow = document.querySelector(".faq-arrow");
const closehamburger = document.querySelector(".closehamburger");

const arrow = document.getElementById("arrow-up");

let toggle = true;

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  mobile_view.classList.toggle("active");
  // closehamburger.classList.remove("hidden");
});

up_arrow.addEventListener("click", function () {
  faq_text.classList.toggle("hidden");
  toggle = !toggle;

  toggle
    ? (up_arrow.src = "images\\arrow-up.png")
    : (up_arrow.src = "images\\arrow-down.png");
});
