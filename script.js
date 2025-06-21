// Set the date we're counting down to (30 days from now)
const countDownDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).getTime();

// Update the countdown every 1 second
const countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "LAUNCHED";
    }
}, 1000);

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submissions with validation
const validateEmail = (email) => {
    return email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
};

document.querySelector('.notify-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    
    if (!validateEmail(emailInput.value)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Add your email subscription logic here
    alert('Thank you for subscribing! We will notify you when we launch.');
    this.reset();
});

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Add floating animation to shapes
const shapes = document.querySelectorAll('.shape');
shapes.forEach(shape => {
    shape.style.animationDelay = `${Math.random() * 2}s`;
});

// Add parallax effect to the cyber grid
document.addEventListener('mousemove', function(e) {
    const grid = document.querySelector('.cyber-grid');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    grid.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
});