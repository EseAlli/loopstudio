const toggleMenu = document.querySelector(".menu-control");
const header = document.querySelector("header");
const body = document.querySelector("body");

toggleMenu.addEventListener("click", () => {
  console.log("clicked");
  if (!header.classList.contains("show-menu")) {
    header.className = "show-menu";
    body.style.overflow = "hidden";
  } else {
    header.className = "";
    body.style.overflow = "unset";
  }
});
