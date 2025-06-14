document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.options');
    const html = document.documentElement;

    // Toggle mobile menu
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Toggle body scroll
        if (navMenu.classList.contains('active')) {
            html.style.overflow = 'hidden';
        } else {
            html.style.overflow = '';
        }
    }

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-links a, #channelPartnerBtn');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            html.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.options') && !e.target.closest('.hamburger')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            html.style.overflow = '';
        }
    });

    // Close menu on window resize if it becomes desktop view
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            html.style.overflow = '';
        }
    });
});
