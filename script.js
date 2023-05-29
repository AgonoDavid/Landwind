"use strict";

const hamburger = document.querySelector(".hamburger");

const mobile_view = document.querySelector(".nav-middle");

const navbar = document.querySelector(".nav-bar");

const up_arrow = document.querySelector(".faq-arrow");

const faq_text = document.querySelector(".faq-test");

const closehamburger = document.querySelector(".closehamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  mobile_view.classList.toggle("active");
  // closehamburger.classList.remove("hidden");
});

up_arrow.addEventListener("click", function () {
  faq_text.classList.toggle("hidden");
});
