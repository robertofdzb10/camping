document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.extra-service-checkbox');
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');

    // Escuchar los cambios en los checkboxes para recalcular el precio
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateTotalPrice);
    });

    // Escuchar los cambios en los inputs de fecha
    checkinInput.addEventListener('change', updateTotalPrice);
    checkoutInput.addEventListener('change', updateTotalPrice);

    // Inicializar el precio al cargar la página
    updateTotalPrice();
});
