/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


if (menuBtn && navLinks) {

    /* Open / Close Menu */

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");


        const isOpen =
            navLinks.classList.contains("active");


        /* Change hamburger icon */

        if (isOpen) {

            menuBtn.textContent = "✕";

        } else {

            menuBtn.textContent = "☰";

        }


        /* Accessibility */

        menuBtn.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    /* Close menu when navigation link is clicked */

    const navItems =
        document.querySelectorAll(".nav-links a");


    navItems.forEach(function (item) {

        item.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    /* Close menu when clicking outside */

    document.addEventListener("click", function (event) {

        const clickedInsideMenu =
            navLinks.contains(event.target);

        const clickedButton =
            menuBtn.contains(event.target);


        if (
            !clickedInsideMenu &&
            !clickedButton &&
            navLinks.classList.contains("active")
        ) {

            navLinks.classList.remove("active");

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });


    /* Close mobile menu when resizing to desktop */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 900) {

            navLinks.classList.remove("active");

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}
