// Smooth Scrolling
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll Indicator
const indicator = document.getElementById('scrollIndicator');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    indicator.style.width = (scrollTop / height) * 100 + '%';
});

// Skill Animation
const skillCards = document.querySelectorAll('.skill-card');

function animateSkills() {
    skillCards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            const percent = card.getAttribute('data-skill');
            card.querySelector('.skill-progress').style.width = percent + '%';
        }
    });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// Contact Form
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    e.target.reset();
});
