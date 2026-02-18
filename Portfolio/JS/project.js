// Simple Project Section JavaScript
document.addEventListener('DOMContentLoaded', function () {

    // Handle all buttons with class 'btn'
    const allButtons = document.querySelectorAll('.btn');

    allButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            // Check which button was clicked
            if (this.classList.contains('small')) {
                // Live button clicked
                alert('Live demo will be added soon! 🔜');
            }
            else if (this.classList.contains('outline')) {
                // Code button clicked
                alert('Source code will be available soon! 📁');
            }
        });
    });

    // Smooth scroll
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});