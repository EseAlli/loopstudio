const toggleMenu = document.querySelector(".menu-control");
const header = document.querySelector("header");

toggleMenu.addEventListener("click", () => {
  console.log("clicked");
  if (!header.classList.contains("show-menu")) {
    header.className = "show-menu";
  } else {
    header.className = "";
  }
});
