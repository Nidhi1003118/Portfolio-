// ==============================
// Sticky Header
// ==============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 50);

});

// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ==============================
// Active Navigation
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==============================
// Project Image Slider
// ==============================

const sliders = document.querySelectorAll(".project-slider");

sliders.forEach(slider => {

    let index = 0;

    const images = slider.querySelectorAll("img");

    if (images.length <= 1) return;

    setInterval(() => {

        index++;

        if (index >= images.length) {

            index = 0;

        }

        slider.scrollTo({

            left: images[index].offsetLeft,

            behavior: "smooth"

        });

    }, 2500);

});

// ==============================
// Reveal Animation
// ==============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(

    ".skill-card, .project-card, .edu-card, .intern-card, .certificate-card, .contact-card"

).forEach(el => {

    observer.observe(el);

});

// ==============================
// Console Message
// ==============================

console.log("🚀 Nidhi Sandbhor Portfolio Loaded Successfully!");