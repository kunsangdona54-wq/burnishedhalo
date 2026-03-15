document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple Cart Interaction (Visual only)
    const cartBtns = document.querySelectorAll('.btn-secondary');
    const cartIcon = document.querySelector('.cart-icon');
    let count = 0;

    cartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            count++;
            cartIcon.textContent = `Cart (${count})`;
            // Optional: Add a small animation or alert
            btn.textContent = "Added!";
            setTimeout(() => {
                btn.textContent = "Add to Cart";
            }, 1000);
        });
    });
});