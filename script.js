/**
 * Smooth Scroll Functionality section */
const initSmoothScroll = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
};

/**
 * Scroll Progress Indicator section */
const handleScrollProgress = () => {
    const progressBar = document.getElementById('scrollIndicator');
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const scrollPercentage = (scrollPosition / scrollTotal) * 100;
        progressBar.style.width = `${scrollPercentage}%`;
    });
};

/**
 * Animate Skills with Intersection Observer */
const animateSkills = () => {
    const skillCards = document.querySelectorAll('.skill-card');
    
    const observerOptions = {
        threshold: 0.5 // Trigger when 50% of the card is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const percentage = entry.target.getAttribute('data-skill');
                const progressBar = entry.target.querySelector('.skill-progress');
                progressBar.style.width = `${percentage}%`;
                // Stop observing once animation is done
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillCards.forEach(card => observer.observe(card));
};

/**
 * Contact Form Submission logic section*/
const handleForm = () => {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Use FormData for a more professional approach to inputs
        const formData = new FormData(form);
        const name = formData.get('name');
        
        alert(`Success! Thank you ${name}. Your message has been sent to the developer.`);
        form.reset();
    });
};

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    handleScrollProgress();
    animateSkills();
    handleForm();
});