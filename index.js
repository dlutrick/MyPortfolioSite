// navbar functionality
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar__menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".navbar__link");

navLink.forEach((link) => link.addEventListener("click", mobileMenu));

window.onscroll = () => {
  const nav = document.querySelector("#navbar");
  if (this.scrollY <= 10) nav.className = "";
  else nav.className = "scroll";
};
