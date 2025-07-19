document.addEventListener('DOMContentLoaded', function() {
    // FAQ toggle functionality
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentNode;
            item.classList.toggle('active');
            
            // Close other open items
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
    
    // Pricing toggle functionality
    document.querySelectorAll('.toggle-button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.toggle-button').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        });
    });
    
    // Mobile menu and dropdown functionality
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            document.querySelector('.nav-links').classList.toggle('show');
        });
    }

    // Handle dropdowns on mobile
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            const dropbtn = dropdown.querySelector('.dropbtn');
            if (dropbtn) {
                dropbtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                    
                    // Close other dropdowns
                    document.querySelectorAll('.dropdown').forEach(otherDropdown => {
                        if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                });
            }
        });
    }
    
    // Simple testimonial slider
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }
    
    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }
    
    // Initialize
    if (testimonials.length > 0) {
        showTestimonial(0);
        setInterval(nextTestimonial, 5000);
    }
    
    // Cookie consent banner
    if (!localStorage.getItem('cookieConsent')) {
        const banner = document.createElement('div');
        banner.style.position = 'fixed';
        banner.style.bottom = '0';
        banner.style.left = '0';
        banner.style.right = '0';
        banner.style.backgroundColor = 'var(--dark)';
        banner.style.color = 'white';
        banner.style.padding = '15px';
        banner.style.textAlign = 'center';
        banner.style.zIndex = '1000';
        banner.innerHTML = `
            <p>We use cookies to ensure you get the best experience on our website. <a href="#" style="color: var(--accent);">Learn more</a></p>
            <button style="background-color: var(--primary); color: white; border: none; padding: 5px 15px; border-radius: 5px; margin-left: 10px; cursor: pointer;">Accept</button>
        `;
        
        document.body.appendChild(banner);
        
        banner.querySelector('button').addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'true');
            banner.style.display = 'none';
        });
    }
});