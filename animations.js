// Selecciona todas las secciones que deseas animar
const sections = document.querySelectorAll('.hidden');

// Configura el IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Añade la clase 'visible' cuando entra en vista
            observer.unobserve(entry.target); // Deja de observar después de que la sección sea visible
        }
    });
}, {
    threshold: 0.1 // El porcentaje de la sección que debe estar visible antes de activar la animación
});

// Observa cada sección
sections.forEach(section => observer.observe(section));