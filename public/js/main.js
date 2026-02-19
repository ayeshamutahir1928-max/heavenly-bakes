// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Scroll to Top Button
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    }

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        });
    }

    // Simple fade-in animation
    const fadeElems = document.querySelectorAll('.fade-in');
    fadeElems.forEach((elem, index) => {
        elem.style.opacity = '0';
        elem.style.transform = 'translateY(20px)';
        elem.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        elem.style.transitionDelay = (index * 0.2) + 's';
        
        setTimeout(() => {
            elem.style.opacity = '1';
            elem.style.transform = 'translateY(0)';
        }, 100);
    });
});
