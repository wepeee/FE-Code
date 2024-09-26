let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let char = document.getElementById("char");
let circle = document.getElementById("circle");
let polygon1 = document.getElementById("polygon1");
let polygon2 = document.getElementById("polygon2");
let polygon3 = document.getElementById("polygon3");

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  line1.style.bottom = 5 + scrollPosition * 0.1 + "%";
  line2.style.bottom = 10 + scrollPosition * 0.13 + "%";
  line3.style.bottom = scrollPosition * 0.09 + "%";

  polygon1.style.transform = "rotate(" + 0 + scrollPosition * 0.1 + "deg)";
  polygon2.style.transform = "rotate(" + 0 + scrollPosition * 0.2 + "deg)";
  polygon3.style.transform = "rotate(" + 0 + scrollPosition * 0.3 + "deg)";
  polygon1.style.top = 30 - scrollPosition * 0.03 + "%";
  polygon2.style.top = 20 - scrollPosition * 0.03 + "%";
  polygon3.style.top = 30 - scrollPosition * 0.03 + "%";
});
