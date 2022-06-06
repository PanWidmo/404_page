/* SHOW MENU */
const navMenu = document.querySelector("#nav-menu"),
  navToggle = document.querySelector("#nav-toggle"),
  navClose = document.querySelector("#nav-close");

/* MENU SHOW */
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* MENU HIDDEN */
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* HIDE MENU MOBILE */
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.querySelector("#nav-menu");
  //When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};

navLink.forEach((x) => x.addEventListener("click", linkAction));

/*  SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
  distance: "90px",
  duration: 3000,
});

sr.reveal(`.home__data`, { origin: "top", delay: 400 });
sr.reveal(`.home__img`, { origin: "bottom", delay: 600 });
sr.reveal(`.home__footer`, { origin: "bottom", delay: 800 });
