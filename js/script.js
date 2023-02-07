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
