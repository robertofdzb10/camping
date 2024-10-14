const slides = document.querySelectorAll('.carousel-item');
const carouselInner = document.querySelector('.carousel-inner');
let currentSlide = 0;
let slideInterval;
const totalSlides = slides.length;

// Clonar las tres primeras y la última imagen
const firstClone = slides[0].cloneNode(true);
const secondClone = slides[1].cloneNode(true);
const thirdClone = slides[2].cloneNode(true);
const lastClone = slides[totalSlides - 1].cloneNode(true);

// Añadir los clones al carrusel
carouselInner.appendChild(firstClone);
carouselInner.appendChild(secondClone);
carouselInner.appendChild(thirdClone);
carouselInner.insertBefore(lastClone, slides[0]);

// Actualizar el total de slides con los clones
const updatedSlides = document.querySelectorAll('.carousel-item');
const updatedTotalSlides = updatedSlides.length;

function showSlide(index) {
    if (index >= updatedTotalSlides - 3) {
        // Desplazamos al primer clon, pero luego saltamos al primer real
        carouselInner.style.transition = 'transform 0.5s ease-in-out';
        carouselInner.style.transform = `translateX(-${updatedSlides[index].offsetLeft}px)`;
        setTimeout(() => {
            carouselInner.style.transition = 'none'; // Desactivamos la transición para hacer el salto
            currentSlide = 1; // Volvemos al primer slide real
            carouselInner.style.transform = `translateX(-${updatedSlides[currentSlide].offsetLeft}px)`;
        }, 500); // Tiempo igual a la duración de la transición
    } else if (index <= 0) {
        // Aquí ajustamos para permitir ir hacia atrás desde la primera imagen real sin problemas
        carouselInner.style.transition = 'transform 0.5s ease-in-out';
        carouselInner.style.transform = `translateX(-${updatedSlides[index].offsetLeft}px)`;
        setTimeout(() => {
            carouselInner.style.transition = 'none'; // Desactivamos la transición para hacer el salto
            currentSlide = updatedTotalSlides - 4; // Volvemos al último slide real
            carouselInner.style.transform = `translateX(-${updatedSlides[currentSlide].offsetLeft}px)`;
        }, 500); // Tiempo igual a la duración de la transición
    } else {
        currentSlide = index;
        carouselInner.style.transition = 'transform 0.5s ease-in-out'; // Transición suave normal
        carouselInner.style.transform = `translateX(-${updatedSlides[currentSlide].offsetLeft}px)`;
    }
    resetSlideInterval(); // Reinicia el contador de 3 segundos
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        nextSlide();
    }, 3000);
}

// Esperar hasta que todo el contenido esté cargado antes de iniciar el carrusel
window.addEventListener('load', () => {
    // Ajusta el contenedor para tener en cuenta los clones y muestra la primera imagen correctamente
    carouselInner.style.transition = 'none';
    carouselInner.style.transform = `translateX(-${updatedSlides[1].offsetLeft}px)`; 
    currentSlide = 1; // Asegúrate de que comienza en el primer slide real
    resetSlideInterval(); // Inicializa el cambio automático de slides cada 3 segundos
});
