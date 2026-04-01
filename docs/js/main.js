// Simple JavaScript for form handling and interactions

document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle (dark mode)
    const root = document.documentElement;
    const toggleButtons = document.querySelectorAll('[data-theme-toggle]');
    const storageKey = 'theme';

    function applyTheme(theme) {
        const isDark = theme === 'dark';
        root.classList.toggle('dark', isDark);
        toggleButtons.forEach(btn => btn.setAttribute('aria-pressed', String(isDark)));
    }

    function getInitialTheme() {
        const saved = localStorage.getItem(storageKey);
        if (saved === 'dark' || saved === 'light') return saved;
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    const initialTheme = getInitialTheme();
    applyTheme(initialTheme);

    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const next = root.classList.contains('dark') ? 'light' : 'dark';
            localStorage.setItem(storageKey, next);
            applyTheme(next);
        });
    });

    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && message) {
                // In a real application, you would send this data to a server
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
