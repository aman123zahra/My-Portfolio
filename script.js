// =========================================
// MOBILE NAVIGATION
// =========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


// Open / close mobile menu
menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    if (isOpen) {
        menuBtn.textContent = "✕";
        menuBtn.setAttribute("aria-label", "Close navigation menu");
        menuBtn.setAttribute("aria-expanded", "true");
    } else {
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-label", "Open navigation menu");
        menuBtn.setAttribute("aria-expanded", "false");
    }

});


// Close menu when a navigation link is clicked
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

        menuBtn.setAttribute("aria-label", "Open navigation menu");

        menuBtn.setAttribute("aria-expanded", "false");

    });

});


// Close menu when clicking outside the navbar
document.addEventListener("click", function (event) {

    const clickedInsideNavbar = event.target.closest(".navbar");

    if (!clickedInsideNavbar && navLinks.classList.contains("active")) {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

        menuBtn.setAttribute("aria-label", "Open navigation menu");

        menuBtn.setAttribute("aria-expanded", "false");

    }

});


// Close mobile menu if window becomes large again
window.addEventListener("resize", function () {

    if (window.innerWidth > 900) {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

        menuBtn.setAttribute("aria-label", "Open navigation menu");

        menuBtn.setAttribute("aria-expanded", "false");

    }

});

