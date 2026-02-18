const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("top-full");
    mobileMenu.classList.toggle("-top-[320px]", !isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

 document.addEventListener('DOMContentLoaded', function () {
      const bookingButtons = document.querySelectorAll('.booking-btn');
      bookingButtons.forEach(button => {
        button.addEventListener('click', function (e) {
          e.preventDefault();
          if (typeof Calendly !== 'undefined') {
            Calendly.initPopupWidget({ url: 'https://calendly.com' });
          } else {
            console.error('Calendly script not loaded yet.');
            alert('Booking system is loading. Please try again in a moment.');
          }
          return false;
        });
      });
    });
