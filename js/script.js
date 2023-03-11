//Selecting the DOM
const scrollNav = document.querySelector("nav");

document.addEventListener("scroll", function () {
  scrollNav.classList.toggle("window-scroll", window.scrollY > 0);
});

/*window.onload = function () {
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (nav) {
      nav.classList.toggle("window-scroll", window.scrollY > 0);
    }
  });
};*/

/*----TO DISPLAY FAQ MESSAGE---*/
const question = document.querySelectorAll(".question");
question.forEach(function (question) {
  /*console.log(question);*/
  const btn = question.querySelector(".question-icon");
  /*console.log(btn);*/
  btn.addEventListener("click", function () {
    question.classList.toggle("show-text");
  });
});

/*----TO DISPLAY MENU---*/

const menuNav = document.querySelector(".nav-menu");
const menuButton = document.querySelector("#open-menu-btn");
const menucloseButton = document.querySelector("#close-menu-btn");

menuButton.addEventListener("click", function () {
  menuNav.style.display = "flex";
  menucloseButton.style.display = "inline-block";
  menuButton.style.display = "none";
});

const closeButton = function () {
  menuNav.style.display = "none";
  menucloseButton.style.display = "none";
  menuButton.style.display = "block";
};

menucloseButton.addEventListener("click", closeButton);
