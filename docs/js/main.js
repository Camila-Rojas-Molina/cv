// Simple JavaScript for form handling and interactions

document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle (dark mode)
    const root = document.documentElement;
    const toggleButtons = document.querySelectorAll('[data-theme-toggle]');
    const storageKey = 'theme';

    function isHomePage() {
        const path = window.location.pathname;
        return path.endsWith('/') || path.endsWith('/index.html');
    }

    function playPaintTransition(onMidpoint) {
        const overlay = document.createElement('div');
        overlay.className = 'paint-overlay';

        document.body.classList.add('paint-active');

        // Create a few drips for a "falling paint" feel.
        const dripCount = 10;
        for (let i = 0; i < dripCount; i++) {
            const drip = document.createElement('span');
            drip.className = 'paint-drip';

            const left = (i / dripCount) * 100 + (Math.random() * 6 - 3);
            const width = 14 + Math.random() * 28;
            const height = 70 + Math.random() * 180;
            const delay = Math.random() * 140;

            drip.style.left = `${Math.max(0, Math.min(96, left))}%`;
            drip.style.width = `${width}px`;
            drip.style.height = `${height}px`;
            drip.style.animationDelay = `${delay}ms`;

            overlay.appendChild(drip);
        }

        document.body.appendChild(overlay);

        // Trigger animations on next frame.
        requestAnimationFrame(() => overlay.classList.add('is-animating'));

        // Apply dark mode while paint is covering the page.
        const midpointTimer = window.setTimeout(() => {
            if (typeof onMidpoint === 'function') onMidpoint();
        }, 630);

        const cleanup = () => {
            window.clearTimeout(midpointTimer);
            document.body.classList.remove('paint-active');
            overlay.remove();
        };

        overlay.addEventListener('animationend', cleanup, { once: true });

        // Safety cleanup in case animationend doesn't fire.
        window.setTimeout(cleanup, 1200);
    }

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
            const toDark = next === 'dark';

            // Home page: paint-drip transition when switching into dark mode.
            if (toDark && isHomePage()) {
                toggleButtons.forEach(b => (b.disabled = true));
                playPaintTransition(() => {
                    localStorage.setItem(storageKey, next);
                    applyTheme(next);
                });
                window.setTimeout(() => toggleButtons.forEach(b => (b.disabled = false)), 950);
                return;
            }

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
