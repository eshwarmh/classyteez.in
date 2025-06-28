// Animation triggers on scroll
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.animate-pop-in, .fade-in, .slide-in-left, .slide-in-right, .zoom-in');
    
    function checkIfInView() {
        const windowHeight = window.innerHeight;
        const windowTop = window.scrollY;
        const windowBottom = windowTop + windowHeight;
        
        animateElements.forEach(element => {
            const elementHeight = element.offsetHeight;
            const elementTop = element.offsetTop;
            const elementBottom = elementTop + elementHeight;
            
            // Check if element is in viewport
            if (elementBottom >= windowTop && elementTop <= windowBottom) {
                element.classList.add('animated');
            }
        });
    }
    
    // Initial check
    checkIfInView();
    
    // Check on scroll
    window.addEventListener('scroll', checkIfInView);
    
    // Add hover animations to cards
    const cards = document.querySelectorAll('.feature-card, .product-card, .mission-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('pulse');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('pulse');
        });
    });
    
    // Add animation to logo on hover
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.classList.add('rubber-band');
        });
        
        logo.addEventListener('animationend', function() {
            this.classList.remove('rubber-band');
        });
    }
    
    // Add animation to buttons on hover
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('pulse');
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('pulse');
        });
    });
    
    // Add animation to social icons
    const socialIcons = document.querySelectorAll('.social-links a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.classList.add('bounce');
        });
        
        icon.addEventListener('mouseleave', function() {
            this.classList.remove('bounce');
        });
    });
    
    // Add animation to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.classList.add('swing');
        });
        
        item.addEventListener('mouseleave', function() {
            this.classList.remove('swing');
        });
    });
    
    // Add animation to filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.add('tada');
        });
        
        button.addEventListener('animationend', function() {
            this.classList.remove('tada');
        });
    });
});