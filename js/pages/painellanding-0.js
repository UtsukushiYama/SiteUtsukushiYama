
        document.querySelector('.scroll-indicator').addEventListener('click', function() {
            document.querySelector('.features-section').scrollIntoView({ behavior: 'smooth' });
        });

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.feature-card, .demo-card, .benefit-item').forEach(el => {
            observer.observe(el);
        });
