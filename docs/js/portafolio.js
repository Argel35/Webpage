// Portfolio interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Animar elementos cuando se cargue la página
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Event listeners para los botones
    const buttons = document.querySelectorAll('.btn-more');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const portfolioItem = this.closest('.portfolio-item');
            const title = portfolioItem.querySelector('h2').textContent;
            alert(`Abriendo más detalles de: ${title}`);
            // Aquí puedes agregar lógica para abrir un modal o redirigir
        });
    });

    // Agregar efecto de scroll suave
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    portfolioItems.forEach(item => {
        observer.observe(item);
    });
});