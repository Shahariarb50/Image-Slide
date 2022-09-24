const slides = document.querySelectorAll(".slide");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
let count = 1;
next.addEventListener("click", () => {
  count++;
  if (count > slides.length) {
    count = slides.length;
  }
  action();
});
prev.addEventListener("click", () => {
  count--;
  if (count < 1) {
    count = 1;
  }
  action();
});
function action() {
  slides.forEach((slide, index) => {
    if (index < count) {
      removeActive();
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}
function removeActive() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
