document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const navLinks = document.querySelector(".nav-links");

    mobileMenuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        mobileMenuBtn.classList.toggle("active");
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });

            // Close mobile menu after clicking a link
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
                mobileMenuBtn.classList.remove("active");
            }
        });
    });

    // Sticky header
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) { // Adjust scroll threshold as needed
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });

    // Category Filtering Logic
    const categoryButtons = document.querySelectorAll('.category-btn');
    const productsGrid = document.getElementById('products-grid');

    function filterProducts(category) {
        const products = productsGrid.querySelectorAll('.product-card');
        products.forEach(product => {
            const productCategory = product.getAttribute('data-category');
            if (category === 'All Products' || productCategory === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button state
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter products
            const category = button.getAttribute('data-category');
            filterProducts(category);
        });
    });

    // Initial load: show all products
    filterProducts('All Products');

    // Contact Form Submission (Placeholder)
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
});
