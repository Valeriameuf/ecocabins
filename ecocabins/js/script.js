const swiper = new Swiper(".materials__slider", {
  loop: true,

  pagination: {
    el: ".materials__slider-pagination",
    clickable: true,
  },
});

window.addEventListener("scroll", function () {
  scrollY > 0
    ? document.querySelector(".header").classList.add("scroll")
    : document.querySelector(".header").classList.remove("scroll");
});
