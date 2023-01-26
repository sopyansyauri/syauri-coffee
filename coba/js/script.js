// Untuk Navbar
const navbarNav = document.querySelector(".navbar-nav");
// icon
const menu = document.querySelector("#humberger-menu");

menu.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});

// Klik diluar sidebar untuk menghilangkan nav
const humberger = document.querySelector("#humberger-menu");

document.addEventListener("click", (e) => {
  if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// Akhiran Navbar
