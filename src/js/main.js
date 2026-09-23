/* Your JS here. */
const slides = document.querySelector(".slides");
const slideItems = document.querySelectorAll(".slide");

const previousButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

const modalButtons = document.querySelectorAll(".modal-button");
const closeButtons = document.querySelectorAll(".close-modal");

let currentSlide = 0;

function showSlide() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

nextButton.addEventListener("click", function () {
    currentSlide++;

    if (currentSlide >= slideItems.length) {
        currentSlide = 0;
    }

    showSlide();
});

previousButton.addEventListener("click", function () {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slideItems.length - 1;
    }

    showSlide();
});

function updateNavbar() {
    // Resize navbar
    if (window.scrollY > 50) {
        navbar.classList.add("small");
    } else {
        navbar.classList.remove("small");
    }

    // Update active section
    const navbarBottom = navbar.getBoundingClientRect().bottom;

    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= navbarBottom) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateNavbar);
updateNavbar();

modalButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const modalId = button.getAttribute("data-modal");
        const modal = document.getElementById(modalId);

        modal.classList.add("show");
    });
});

closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        button.parentElement.parentElement.classList.remove("show");
    });
});