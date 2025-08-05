const { gsap } = window;

// --- Page Load Logic ---
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const body = document.querySelector('body');
    
    // Make the body visible but content still at opacity 0
    body.classList.add('loaded');

    // Hide loader after its animation time
    setTimeout(() => {
        loader.classList.add('hidden');

        // Animate hero title only after loader is gone
        gsap.to('.hero-title .word', {
            y: 0,
            stagger: 0.25,
            delay: 0.2, // Small delay after content fades in
            duration: 1,
            ease: 'power4.out',
        });
    }, 2500); // This must match the CSS transition-delay for the loader
});


// --- AOS Initialization ---
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 50,
});

// --- Header Scroll Effect ---
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// --- Hero Parallax Effect ---
const heroVideoWrapper = document.querySelector('.hero-video-wrapper');
window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    // Move the video wrapper up at half the scroll speed
    heroVideoWrapper.style.transform = `translateY(${scrollValue * 0.5}px)`;
});