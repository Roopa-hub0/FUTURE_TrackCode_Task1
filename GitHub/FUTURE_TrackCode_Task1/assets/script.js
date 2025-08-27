// Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.querySelector(".hamburger-menu");
  menu.classList.toggle("active");
}

// Optional: Close menu on click outside
document.addEventListener("click", function(e) {
  const menu = document.querySelector(".hamburger-menu");
  const icon = document.querySelector(".hamburger-icon");
  if (!menu.contains(e.target) && !icon.contains(e.target)) {
    menu.classList.remove("active");
  }
});

// Smooth Scroll for arrow icons
const arrows = document.querySelectorAll(".arrow");
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(arrow.getAttribute("onclick").split("'")[1]);
    target.scrollIntoView({ behavior: "smooth" });
  });
});
