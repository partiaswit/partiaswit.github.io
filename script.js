// Main script file for Partia Świt website

document.addEventListener('DOMContentLoaded', function () {
    // Scroll effect for navbar
    window.addEventListener('scroll', function () {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Track current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Highlight both desktop and mobile navigation links
    const allNavLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
    allNavLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // Mobile menu functionality
    const hamburger = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    // Toggle mobile menu on hamburger click
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function (e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            body.classList.toggle('no-scroll');
        });

        // Close mobile menu when links are clicked
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.classList.remove('no-scroll');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (mobileMenu.classList.contains('active') &&
                !mobileMenu.contains(e.target) &&
                !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.classList.remove('no-scroll');
            }
        });

        // Close menu on resize to desktop size
        window.addEventListener('resize', function () {
            if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.classList.remove('no-scroll');
            }
        });
    }

    // Form submission handling (for the join form on dolacz.html)
    const joinForm = document.getElementById('joinForm');
    if (joinForm) {
        joinForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Dziękujemy za wypełnienie formularza! Skontaktujemy się z Tobą w najbliższym czasie.');
            this.reset();
        });
    }

    // FAQ accordion functionality (for program.html)
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle current item
                item.classList.toggle('active');
            });
        });
    }
}); 