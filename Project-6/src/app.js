const themeSwitcher = document.getElementById("themeSwitcherTwo");
const sliderDot = document.getElementById("sliderDot");
const htmlElement = document.documentElement;

themeSwitcher.addEventListener("change", () => {
  htmlElement.classList.toggle("dark", themeSwitcher.checked);
  if (themeSwitcher.checked) {
    sliderDot.style.transform = "translateX(100%)";
  } else {
    sliderDot.style.transform = "translateX(0)";
  }
});
