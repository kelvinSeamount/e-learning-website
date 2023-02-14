/*window.addEventListener("scroll", function () {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});
*/
window.onload = function () {
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (nav) {
      nav.classList.toggle("window-scroll", window.scrollY > 0);
    }
  });
};

/*----TO DISPLAY FAQ MESSAGE---*/
const faqButton = document.querySelectorAll(".faq");
for (let i = 0; i < faqButton.length; i++) {
  faqButton[i].addEventListener("click", function () {
    faqButton[i].classList.toggle("open");
  });
}
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
