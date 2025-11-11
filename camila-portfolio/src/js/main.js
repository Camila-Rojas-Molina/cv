// src/js/main.js

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    initializeThreeScene();
});

// Function to set up event listeners for user interactions
function setupEventListeners() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    const skillBadges = document.querySelectorAll('.skill-badge');
    skillBadges.forEach(badge => {
        badge.addEventListener('mouseenter', animateBadge);
        badge.addEventListener('mouseleave', resetBadge);
    });
}

// Smooth scroll to sections
function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
}

// Initialize the Three.js scene
function initializeThreeScene() {
    // Placeholder for Three.js initialization
    console.log('Three.js scene initialized');
}

// Animate skill badge on hover
function animateBadge() {
    this.classList.add('hovered');
}

// Reset skill badge animation
function resetBadge() {
    this.classList.remove('hovered');
}