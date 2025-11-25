// Track external link clicks for analytics (optional)
function trackExternalLink(url) {
    // You can add analytics tracking here
    console.log('External link clicked:', url);
    
    // Example: Google Analytics event tracking
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', 'click', {
    //         'event_category': 'outbound',
    //         'event_label': url,
    //         'transport_type': 'beacon'
    //     });
    // }
}

// Add click tracking to all external links
document.addEventListener('DOMContentLoaded', function() {
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const url = this.href;
            trackExternalLink(url);
        });
    });
});

// Smooth scroll for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

