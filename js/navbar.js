const navbarToggle = document.getElementById("navbarToggle");
const navbarNav = document.getElementById("navbarNav");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("is-active");
  navbarNav.classList.toggle("is-open");
  const isOpen = navbarNav.classList.contains("is-open");
  navbarToggle.setAttribute("aria-expanded", isOpen);
});

// close the menu when a link is tapped
document.querySelectorAll(".navbar__link").forEach((link) => {
  link.addEventListener("click", () => {
    navbarToggle.classList.remove("is-active");
    navbarNav.classList.remove("is-open");
    navbarToggle.setAttribute("aria-expanded", "false");
  });
});