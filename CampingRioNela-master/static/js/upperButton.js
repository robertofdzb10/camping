document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    const footer = document.querySelector('footer'); // Selecciona el footer

    // Verificación inicial al cargar la página para ocultar el botón si no hay scroll
    if (window.scrollY <= 200) {
        scrollButton.style.display = 'none';
    }

    // JavaScript para el botón de "subir"
    window.addEventListener('scroll', function() {
        const footerHeight = footer.offsetHeight;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollY = window.scrollY;

        // Mostrar u ocultar el botón según la posición del scroll
        if (scrollY > 200) {
            scrollButton.style.display = 'flex';
        } else {
            scrollButton.style.display = 'none';
        }

        // Nos aseguramos de que el botón no sobrepase el área del footer
        const footerDistanceFromBottom = documentHeight - scrollY - windowHeight + (footerHeight - 40);
        if (footerDistanceFromBottom < footerHeight) {
            scrollButton.style.bottom = (footerHeight - footerDistanceFromBottom + 20) + 'px';
        } else {
            scrollButton.style.bottom = '20px'; // Posición por defecto cuando no hay intersección con el footer
        }
    });

    // Función para subir cuando se hace clic
    document.querySelector(".scroll-to-top").addEventListener("click", function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Desplazamiento suave hacia arriba
        });
    });
});