document.addEventListener('DOMContentLoaded', function () {
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');

    // Función para obtener la fecha en formato YYYY-MM-DD
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // Obtener la fecha de hoy
    const today = new Date();
    // Obtener la fecha de mañana
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    // Establecer la fecha predeterminada para check-in y check-out
    checkinInput.value = formatDate(today);
    checkoutInput.value = formatDate(tomorrow);

    // Establecer la fecha mínima para check-out igual al check-in
    checkoutInput.min = checkinInput.value;

    // Añadir un evento de cambio en el input de check-in
    checkinInput.addEventListener('change', function() {
        const checkinDate = new Date(checkinInput.value);
        checkoutInput.min = checkinInput.value; // Establecer la fecha mínima para check-out
    });
});