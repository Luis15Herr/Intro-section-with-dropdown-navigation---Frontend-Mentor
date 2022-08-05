menu = document.querySelector(".mobileNav");
body = document.querySelector("body");

function activeDropdown(e) {
  e.srcElement.classList.toggle("nav__item--active");
}
function toggleMenu() {
  menu.classList.add("mobileNav--active");
  body.classList.add("fixed");
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("mobileNav")) closeMenu();
  });
}

function closeMenu() {
  menu.classList.remove("mobileNav--active");
  body.classList.remove("fixed");
  document.removeEventListener("click", function (event) {
    if (event.target.classList.contains("mobileNav")) closeMenu();
  });
}
