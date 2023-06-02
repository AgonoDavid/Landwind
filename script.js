"use strict";

const hamburger = document.querySelector(".hamburger");

const mobile_view = document.querySelector(".nav-middle");

const navbar = document.querySelector(".nav-bar");

const faq_text = document.querySelector(".faq-test");
const faq_text2 = document.querySelector(".faq-test2");
const faq_text3 = document.querySelector(".faq-test3");
const faq_text4 = document.querySelector(".faq-test4");
const up_arrow = document.querySelector(".faq-arrow");
const up_arrow2 = document.querySelector(".faq-arrow2");
const up_arrow3 = document.querySelector(".faq-arrow3");
const up_arrow4 = document.querySelector(".faq-arrow4");
const closehamburger = document.querySelector(".closehamburger");

const arrow = document.getElementById("arrow-up");

let toggle = true;

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  mobile_view.classList.toggle("active");

  toggle = !toggle;

  toggle
    ? (hamburger.src = "images\\hamburger.png")
    : (hamburger.src = "images\\closehamburger.png");

  console.log("i love jesus");
});

up_arrow.addEventListener("click", function () {
  faq_text.classList.toggle("hidden");
  toggle = !toggle;

  toggle
    ? (up_arrow.src = "images\\arrow-up.png")
    : (up_arrow.src = "images\\arrow-down.png");
  //toggle back
  // faq_text2.classList.toggle("hidden");
  // toggle = !toggle;

  // toggle
  //   ? (up_arrow2.src = "images\\arrow-down.png")
  //   : (up_arrow2.src = "images\\arrow-up.png");
});

up_arrow2.addEventListener("click", function () {
  faq_text2.classList.toggle("hidden");
  toggle = !toggle;

  toggle
    ? (up_arrow2.src = "images\\arrow-up.png")
    : (up_arrow2.src = "images\\arrow-down.png");
});
up_arrow3.addEventListener("click", function () {
  faq_text3.classList.toggle("hidden");
  toggle = !toggle;

  toggle
    ? (up_arrow3.src = "images\\arrow-up.png")
    : (up_arrow3.src = "images\\arrow-down.png");
});
up_arrow4.addEventListener("click", function () {
  faq_text4.classList.toggle("hidden");
  toggle = !toggle;

  toggle
    ? (up_arrow4.src = "images\\arrow-up.png")
    : (up_arrow4.src = "images\\arrow-down.png");
});
