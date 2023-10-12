const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
   if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.replace("hidden", "flex");
   } else {
      mobileMenu.classList.replace("flex", "hidden");
   }
});
