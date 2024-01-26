const menu = document.querySelector(".menu-icon");
const links = document.querySelector(".menu-links");
const close = document.querySelector(".close-icon");

// we are selecting classes using document.querySelector now we will add eventlistener to menu-icon

menu.addEventListener("click", () => {
  links.classList.toggle("active");
});
close.addEventListener("click", () => {
  links.classList.toggle("active");
});
