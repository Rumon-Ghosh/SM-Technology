const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("top-full");
    mobileMenu.classList.toggle("-top-[320px]", !isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}
