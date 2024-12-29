"use strict";
const modification = document.querySelectorAll(".first");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");
const box = document.querySelector(".box");
function hatao() {
  box.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
for (let i = 0; i < modification.length; i++) {
  modification[i].addEventListener("click", hatao);
}
const back = function () {
  box.classList.add("hidden");
  overlay.classList.add("hidden");
};
close.addEventListener("click", back);
overlay.addEventListener("click", back);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !overlay.classList.contains("hidden")) {
    back();
  }
});
