
  
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    // Change icon based on menu state
    const icon = menuToggle.querySelector("i");
    if (mobileMenu.classList.contains("hidden")) {
      icon.classList.remove("ri-close-line");
      icon.classList.add("ri-menu-line");
    } else {
      icon.classList.remove("ri-menu-line");
      icon.classList.add("ri-close-line");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Accordion functionality
  const accordionBtns = document.querySelectorAll(".accordion-btn");
  accordionBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector("i");
      // Toggle active class
      content.classList.toggle("active");
      // Change icon
      if (content.classList.contains("active")) {
        icon.classList.remove("ri-arrow-down-s-line");
        icon.classList.add("ri-arrow-up-s-line");
      } else {
        icon.classList.remove("ri-arrow-up-s-line");
        icon.classList.add("ri-arrow-down-s-line");
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Custom checkbox styling
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        this.style.backgroundColor = "#37947D";
        this.style.borderColor = "#37947D";
        this.insertAdjacentHTML(
          "afterbegin",
          '<span class="absolute inset-0 flex items-center justify-center text-white" style="font-size: 12px;">✓</span>',
        );
      } else {
        this.style.backgroundColor = "transparent";
        this.style.borderColor = "#D1D5DB";
        const checkmark = this.querySelector("span");
        if (checkmark) {
          checkmark.remove();
        }
      }
    });
  });
});
