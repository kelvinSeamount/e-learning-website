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
    console.log(window.scrollY);
  });
};
