window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function with transition effect
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
      navbarCollapsible.style.transition = "background-color 0.3s ease-in-out, transform 0.3s ease-in-out";
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
      navbarCollapsible.style.transition = "background-color 0.3s ease-in-out, transform 0.3s ease-in-out";
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Smooth scroll for internal links
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70, // Adjust offset for fixed navbar
          behavior: "smooth",
        });
      }
    });
  });

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Fade-in animation on scroll for navbar
  var navbarFadeIn = function () {
    const navbar = document.querySelector("#mainNav");
    if (!navbar) return;
    const opacity = Math.min(1, window.scrollY / 300);
    navbar.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
  };
  document.addEventListener("scroll", navbarFadeIn);
});

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};
