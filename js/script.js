"use strict";

const btnNav = document.querySelector(".icon-mobile-nav");
const headerEl = document.querySelector("header");

btnNav.addEventListener("click", function () {
	headerEl.classList.toggle("nav-open");
});
