/* ==================== MOBILE MENU ==================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Open and close mobile menu
menuBtn.addEventListener("click", () => {

navLinks.classList.toggle("active");

// Change hamburger icon
if (navLinks.classList.contains("active")) {
    menuBtn.textContent = "✕";
    menuBtn.setAttribute("aria-label", "Close menu");
} else {
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-label", "Open menu");
}


});

// Close menu when a navigation link is clicked
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((link) => {

link.addEventListener("click", () => {

    navLinks.classList.remove("active");

    menuBtn.textContent = "☰";

    menuBtn.setAttribute("aria-label", "Open menu");

});


});