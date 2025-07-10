const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => {
  selectElement(".nav-list").classList.toggle("active");

  navLinks.forEach((link, index) => {
    link.style.animation = link.style.animation ? "" : `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
  });

  selectElement(".burger-menu-icon").classList.toggle("toggle");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    selectElement(".nav-list").classList.remove("active");

    navLinks.forEach((link, index) => {
      link.style.animation = "";
    });

    selectElement(".burger-menu-icon").classList.remove("toggle");
  });
});
