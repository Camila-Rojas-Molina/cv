// File: /camila-portfolio/camila-portfolio/src/js/interactions.js

document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    const skillsSection = document.querySelector('.skills');
    const contactSection = document.querySelector('.contact');
    
    // Smooth scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hover effects for skill badges
    const skillBadges = document.querySelectorAll('.skill-badge');
    skillBadges.forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            badge.classList.add('hover');
        });
        badge.addEventListener('mouseleave', () => {
            badge.classList.remove('hover');
        });
    });

    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        heroSection.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        skillsSection.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        contactSection.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    });

    // Dynamic color shifts based on scroll position
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollFraction = scrollY / maxScroll;
        document.body.style.backgroundColor = `rgba(255, 165, 0, ${1 - scrollFraction})`; // Sunset orange to transparent
    });
});