// Initialize GSAP
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

// Loader Animation
window.addEventListener('load', () => {
    gsap.to('.loader', {
        opacity: 0,
        duration: 1,
        delay: 2,
        onComplete: () => {
            document.querySelector('.loader').style.display = 'none';
        }
    });
});

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
    
    gsap.to(cursorFollower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3
    });
});

document.addEventListener('mousedown', () => {
    gsap.to(cursor, {
        scale: 0.8,
        duration: 0.1
    });
    gsap.to(cursorFollower, {
        scale: 0.8,
        duration: 0.1
    });
});

document.addEventListener('mouseup', () => {
    gsap.to(cursor, {
        scale: 1,
        duration: 0.1
    });
    gsap.to(cursorFollower, {
        scale: 1,
        duration: 0.1
    });
});

// Hero Section Animation
gsap.from('.hero-content', {
    opacity: 0,
    y: 100,
    duration: 1.5,
    delay: 2.5,
    ease: 'power4.out'
});

// Floating Elements Animation
const elements = document.querySelectorAll('.floating-element');
elements.forEach((element, index) => {
    const speed = element.dataset.speed;
    gsap.to(element, {
        x: `random(-100, 100)`,
        y: `random(-100, 100)`,
        duration: `random(3, 5)`,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: index * 0.2
    });
});

// Work Section Animation
gsap.utils.toArray('.work-item').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1
    });
});

// About Section Animation
gsap.from('.about-content', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 0.8
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Add loading state to button
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    try {
        // Here you would typically send the form data to your backend
        // For now, we'll just simulate a successful submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        showNotification('Message sent successfully!', 'success');
        contactForm.reset();
    } catch (error) {
        showNotification('Failed to send message. Please try again.', 'error');
    } finally {
        // Reset button state
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }
});

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Contact Form Animation
gsap.from('.contact-form-container', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top bottom',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
    },
    x: -50,
    opacity: 0,
    duration: 0.8
});

gsap.from('.contact-image', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top bottom',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
    },
    x: 50,
    opacity: 0,
    duration: 0.8
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Interaction
const formGroups = document.querySelectorAll('.form-group');

formGroups.forEach(group => {
    const input = group.querySelector('input, textarea');
    const label = group.querySelector('label');
    
    input.addEventListener('focus', () => {
        label.classList.add('active');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            label.classList.remove('active');
        }
    });
});

// Work Item Hover Effect
const workItems = document.querySelectorAll('.work-item');

workItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 2,
            duration: 0.3
        });
        gsap.to(cursorFollower, {
            scale: 2,
            duration: 0.3
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            duration: 0.3
        });
        gsap.to(cursorFollower, {
            scale: 1,
            duration: 0.3
        });
    });
});

// GSAP animations for hero section elements
gsap.from(".nav-logo", { opacity: 0, y: -50, duration: 1, ease: "power3.out" });
gsap.from(".nav-link", { opacity: 0, y: -50, duration: 1, ease: "power3.out", stagger: 0.1 });
gsap.from(".hero-text h1", { opacity: 0, x: -100, duration: 1, delay: 0.5, ease: "power3.out" });
gsap.from(".hero-description", { opacity: 0, x: -100, duration: 1, delay: 0.7, ease: "power3.out" });
gsap.from(".tech-icon", { opacity: 0, scale: 0, duration: 0.8, delay: 1, stagger: 0.1, ease: "back.out(1.7)" });

// GSAP animations for sections on scroll
gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 80%", // When the top of the section is 80% down the viewport
            end: "bottom top",
            toggleActions: "play none none none",
            // markers: true // Uncomment for debugging
        }
    });
});

// Animate timeline items in the experience section
gsap.utils.toArray('.timeline-item').forEach((item, i) => {
    gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
        delay: i * 0.1, // Stagger effect
        scrollTrigger: {
            trigger: item,
            start: "top 80%", // When the top of the item is 80% down the viewport
            toggleActions: "play none none none",
            // markers: true // Uncomment for debugging
        }
    });

    // Animate timeline graphics within each item
    gsap.from(item.querySelector('.timeline-graphic'), {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: item,
            start: "top 75%", // Slightly earlier than the item animation
            toggleActions: "play none none none",
            // markers: true // Uncomment for debugging
        }
    });
});

// Toggle mobile navigation
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close nav when a link is clicked (for single-page navigation)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Hide/show navigation on scroll direction
const mainNav = document.querySelector('.main-nav');
let lastScrollY = 0; // Initialize to 0

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 70) { // Scrolling down and past initial header height
        mainNav.classList.add('hidden');
    } else if (currentScrollY < lastScrollY) { // Scrolling up
        mainNav.classList.remove('hidden');
    }
    lastScrollY = currentScrollY;
}); 