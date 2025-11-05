// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Countdown Timer
function updateCountdown() {
    const countdownElement = document.querySelector('.countdown');
    if (!countdownElement) return;
    
    // Set target date (24 hours from now)
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 24);
    
    const now = new Date().getTime();
    const distance = targetDate - now;
    
    // Time calculations
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Update display
    document.querySelectorAll('.countdown .hours')[0].innerHTML = hours.toString().padStart(2, '0');
    document.querySelectorAll('.countdown .minutes')[0].innerHTML = minutes.toString().padStart(2, '0');
    document.querySelectorAll('.countdown .seconds')[0].innerHTML = seconds.toString().padStart(2, '0');
    
    // If countdown is finished
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown').innerHTML = "EXPIRED";
    }
}

// Initialize countdown
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form validation enhancements
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('.orderonline-embed-form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Add loading state
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = 'Memproses...';
            submitButton.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    });
});

// Image lazy loading
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in-up');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Initialize feather icons
feather.replace();

// Sticky CTA Button
const stickyCTA = document.createElement('div');
stickyCTA.className = 'fixed bottom-6 right-6 z-50 hidden md:block';
stickyCTA.innerHTML = `
    <a href="#order" class="bg-gold hover:bg-amber-600 text-forest font-bold py-4 px-6 rounded-full shadow-xl flex items-center transition-all duration-300 transform hover:scale-105">
        <i data-feather="shopping-bag" class="mr-2"></i>
        Pesan Sekarang
    </a>
`;

document.body.appendChild(stickyCTA);
feather.replace();

// Show/hide sticky CTA based on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        stickyCTA.style.display = 'block';
    } else {
        stickyCTA.style.display = 'none';
    }
});
